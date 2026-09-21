/**
 * @file Tikker grammar for tree-sitter
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

// 1. A range is `start..end`, inclusive, always with fields named `start` and `end`.
// 2. Either end may be `*`, parsed as `open_end`, meaning "no bound on this side".
//    What that allows is the checker's business, not the grammar's.
// 3. `*` meaning "no bound" and `*` meaning "any value" (the pattern wildcard) are
//    different ideas that share a character. They already parse to different nodes,
//    `open_end` and `wildcard`, and that should stay true everywhere.

/**
 * A range: start..end, inclusive. Either end may be `*`, meaning "no bound on
 * this side"; whether that is allowed here is the checker's business.
 * @param {(syms: GrammarSymbols<string>) => RuleOrLiteral} bound what one end looks like
 * @returns {RuleBuilder<string>}
 */
const openRange = (bound) => ($) =>
  choice(
    seq(
      field("start", bound($)),
      "..",
      field("end", choice(bound($), alias("*", $.open_end))),
    ),
    // `*..*` is left out: it constrains nothing, and with nothing to name the
    // kind of bound, a number range and a time range would look identical.
    seq(field("start", alias("*", $.open_end)), "..", field("end", bound($))),
  );

module.exports = grammar({
  name: "tikker",

  extras: ($) => [/\s/, $.comment],

  // Indentation-sensitive blocks come from src/scanner.c.
  // The order here must match the TokenType enum in that file.
  inline: ($) => [$._arity],

  externals: ($) => [$._indent, $._dedent, $._error_sentinel],

  rules: {
    // Imports are only allowed before any other statement.
    source_file: ($) => seq(repeat($.import_statement), repeat($._statement)),

    // ---------------------------------------------------------------
    // Imports
    //   USE functions: [XNOR, AddressMatch]
    //   USE sculknet_spec/tff: [TFF: FastTFF]
    //   USE shift_register: *
    // ---------------------------------------------------------------
    import_statement: ($) =>
      seq(
        "USE",
        field("module", $.module_path),
        ":",
        choice($.import_list, alias("*", $.import_all)),
      ),

    module_path: ($) => seq($.identifier, repeat(seq("/", $.identifier))),

    import_list: ($) =>
      seq("[", $.import_item, repeat(seq(",", $.import_item)), "]"),

    import_item: ($) =>
      seq(
        field("name", $.identifier),
        optional(seq(":", field("alias", $.identifier))),
      ),

    // ---------------------------------------------------------------
    // Statements
    // ---------------------------------------------------------------
    _statement: ($) =>
      choice(
        $.function_declaration,
        $.state_declaration,
        $.type_declaration,
        $.input_parameter,
        $.output_parameter,
        $.emission_parameter,
        $.timing_parameter,
        $.flow,
        $.pattern_match,
        $.event_block,
        $.sequence_block,
        $.each_block,
        $.change_block,
        $.hear_block,
        $.after_block,
        $.instance_declaration,
        $.setting_declaration,
        $.inventory_declaration,
        $.control_statement,
      ),

    _block_statement: ($) =>
      choice(
        $.function_declaration,
        $.state_declaration,
        $.flow,
        $.pattern_match,
        $.event_block,
        $.sequence_block,
        $.each_block,
        $.change_block,
        $.hear_block,
        $.after_block,
        $.where_clause,
        $.instance_declaration,
        $.setting_declaration,
        $.control_statement,
      ),

    time: (_) => token(seq(/\d+/, choice("gt", "rt"))),

    // Stack notation:
    // 4s+5i = 4 stacks, 5 items
    // 4s = 4 stacks (should pass on its own)
    // 5i = 5 items (should pass on its own)
    // 5i+4s is not legal
    stack_notation: (_) => token(choice(/\d+s(\+\d+i)?/, /\d+i/)),

    // Ranges
    range: openRange(($) => choice($.number, $.identifier)),
    time_range: openRange(($) => $.time),
    pattern_range: openRange(($) =>
      choice($.number, alias($.tuple_literal, $.number)),
    ),
    stack_range: openRange(($) => $.stack_notation),

    // 3  or  1..4 (inclusive)  or  3..* (pin 3 to the end, for a variadic port)
    pin_range: ($) =>
      seq(
        field("start", $.number),
        optional(
          seq("..", field("end", choice($.number, alias("*", $.open_end)))),
        ),
      ),

    // Inlined, so a declaration and a flow can share `4[` until the star
    // (or its absence) tells them apart.
    _arity: ($) => choice($._count, $.arity_range),

    // The number must touch the star: 2* and *8, never 2 * or * 8.
    arity_range: ($) =>
      choice(
        seq(
          field("min", $.number),
          token.immediate("*"),
          optional(field("max", alias(token.immediate(/\d+/), $.number))),
        ),
        seq("*", field("max", alias(token.immediate(/\d+/), $.number))),
      ),

    // The numbers count wires (pins), not parameters: a byte parameter uses
    // 8 pins. Pins are numbered from 0.
    //   9[ShiftRegister]8 => byte:
    // A variadic component gives a count range instead:
    //   *[OR]1     any number of input pins
    //   2*[OR]1    at least 2
    //   *8[OR]1    at most 8
    //   2*8[OR]1   2 to 8
    function_declaration: ($) =>
      prec.right(
        2,
        seq(
          $._arity,
          "[",
          $.identifier,
          "]",
          $._arity,
          choice("=>", "~>"),
          $.type,
          ":",
        ),
      ),

    // -> data_in: byte              next free pins, in declaration order
    // -> 1..8[data_in]: byte        explicitly pins 1 through 8
    // -> 0[shift_enable]: bit       explicitly pin 0
    // Ranges may overlap: two parameters can be different views of the same pins.
    // -> left: strength = 0          optional: if nothing is wired it reads 0
    // Inputs are required unless marked this way.
    input_parameter: ($) =>
      seq(
        "->",
        $._param_name,
        ":",
        $.type,
        optional(seq("=", field("unwired", $.number))),
      ),

    // Hidden so the identifier stays a direct child of the parameter node,
    // which keeps existing queries like (input_parameter (identifier)) valid.
    _param_name: ($) =>
      choice(
        $.identifier,
        seq(field("pins", $.pin_range), "[", $.identifier, "]"),
      ),

    // => result: byte              output port on the next free output pins
    // => 0..3[low]: nibble          output port on explicit pins
    // Mirrors input parameters: same ranges, same overlap rules. A component
    // with no declared outputs has one implicit output, driven by bare `=>`.
    output_parameter: ($) => seq("=>", $._param_name, ":", $.type),

    // ~> out_signal: vibration     an emission: sent into the air, where every
    //                               listener in range hears it; not wired
    emission_parameter: ($) => seq("~>", $._param_name, ":", $.type),

    timing_parameter: ($) => seq("->", $.timing_annotation),

    timing_annotation: ($) =>
      choice(
        seq("AFTER", "(", $._param_name, ":", $.type, ")"),
        seq("BEFORE", "(", $._param_name, ":", $.type, ")"),
        seq(
          "SYNC",
          "(",
          $._param_name,
          repeat(seq(",", $._param_name)),
          ":",
          $.type,
          ")",
        ),
      ),

    control_statement: ($) =>
      choice(
        seq("TOGGLE", $.identifier),
        "NOP",
        seq("WAIT", "(", $.identifier, ")"),
      ),

    //    [ab] -(14)-> heard[css]   carried through the air, 14 blocks
    vibration_link: ($) =>
      seq(
        "~(",
        field("distance", choice($.number, $.arity_range, $.range)),
        ")",
        token.immediate("~>"),
      ),

    // ---------------------------------------------------------------
    // Time
    //   WAIT(clock_signal):      runs its body on a rising edge
    //   SEQ(1rt):                each line fires that long after the last
    // ---------------------------------------------------------------
    event_block: ($) =>
      seq("WAIT", "(", field("trigger", $.identifier), ")", $.block),

    sequence_block: ($) =>
      seq("SEQ", "(", field("delay", $._duration), ")", $.block),

    //   CHANGE(rear):     runs its body on either edge of rear
    change_block: ($) =>
      seq("CHANGE", "(", field("trigger", $.identifier), ")", $.block),

    // HEAR(vib IN heard):  runs once per game tick when a vibration gets
    // through: vib names that vibration inside the body
    hear_block: ($) =>
      seq(
        "HEAR",
        "(",
        field("var", $.identifier),
        "IN",
        field("source", $.identifier),
        ")",
        $.block,
      ),

    //   AFTER(2gt):       runs its body that long after the event around it
    after_block: ($) =>
      seq("AFTER", "(", field("delay", $._duration), ")", $.block),

    //   WHERE {phase, pending}?      first statement of a HEAR body: keeps (1)
    //        -{inactive, 0}-> 1 =>   or drops (0) each vibration before one
    //        -{**}-> 0 =>            is chosen
    where_clause: ($) =>
      seq(
        "WHERE",
        field("subject", $.data_array),
        "?",
        repeat1($.pattern_case),
      ),

    // 2gt (game ticks) or 1rt (redstone ticks, 2 game ticks each). A setting
    // name stands for a time chosen when the part is built. A bare number is
    // accepted here only so the checker can say which unit it needs.
    _duration: ($) => choice($.time, $.computed_time, $.identifier, $.number),

    // floor{vib.dist}gt  - a time worked out while running. The unit must
    // touch the closing brace.
    computed_time: ($) =>
      seq(
        field("amount", $.operator_call),
        field("unit", alias(token.immediate(choice("gt", "rt")), $.time_unit)),
      ),

    // ---------------------------------------------------------------
    // Build-time states, chosen per part when it's declared, and
    // editable by the component itself
    // STATE has_item: 0..1 = 0
    // STATE items: 0..320 = 15
    // ---------------------------------------------------------------

    state_declaration: ($) =>
      seq(
        "STATE",
        field("name", $.identifier),
        ":",
        field("allowed", choice($.time_range, $.range, $.setting_options)),
        optional(seq("=", field("default", $._setting_value))),
      ),

    // ---------------------------------------------------------------
    // Build-time settings, chosen per part when it's declared
    //   SETTING delay: 1rt..4rt = 1rt
    //   SETTING mode: {compare, subtract} = compare
    //   SETTING amount: 0..15 = 1
    //   When instantiating a repeater component named `slow` elsewhere
    //    in the code:
    //   [slow]: Repeater{delay: 4rt}
    // ---------------------------------------------------------------
    setting_declaration: ($) =>
      seq(
        "SETTING",
        field("name", $.identifier),
        ":",
        field("allowed", choice($.time_range, $.range, $.setting_options)),
        optional(seq("=", field("default", $._setting_value))),
      ),

    setting_options: ($) =>
      seq("{", $.identifier, repeat(seq(",", $.identifier)), "}"),

    _setting_value: ($) => choice($.time, $.number, $.identifier),

    setting_values: ($) =>
      seq(
        token.immediate("{"),
        $.setting_value,
        repeat(seq(",", $.setting_value)),
        "}",
      ),

    setting_value: ($) =>
      seq(field("name", $.identifier), ":", field("value", $._setting_value)),

    // ---------------------------------------------------------------
    // Inventories, declared inside the component that owns them. A
    // caller can't set them
    //   INVENTORY slots: 5
    //   INVENTORY output: {spit{face}, push{bottom}}
    // ---------------------------------------------------------------
    inventory_declaration: ($) =>
      seq(
        "INVENTORY",
        choice($.inventory_slots, $.inventory_output, $.inventory_capacity),
      ),

    inventory_slots: ($) => seq("slots", ":", field("count", $.number)),

    inventory_output: ($) =>
      seq(
        "output",
        ":",
        "{",
        $.output_method,
        repeat(seq(",", $.output_method)),
        "}",
      ),

    inventory_capacity: ($) => seq("capacity", ":", $.number),

    output_method: ($) =>
      seq(
        field("method", alias(choice("spit", "push"), $.method_name)),
        token.immediate("{"),
        field("side", $.side),
        "}",
      ),

    side: (_) =>
      choice("top", "bottom", "left", "right", "face", "rear", "nozzle"),

    // ---------------------------------------------------------------
    // Replication (build time, not run time)
    //   EACH i IN 0..7:        the body is built once per value of i
    // ---------------------------------------------------------------
    each_block: ($) =>
      seq(
        "EACH",
        field("var", $.identifier),
        "IN",
        field("range", $.range),
        $.block,
      ),

    // ---------------------------------------------------------------
    // Instances
    //   [read_state]: CopperBulb              one part
    //   [even_gate, odd_gate]: Comparator     several parts
    //   [lamp{0..7, 0..7}]: RedstoneLamp      an array, used as [lamp{3, 5}]
    // Reuses the bracket list from wiring; the checker allows only names
    // and ranged arrays here.
    // ---------------------------------------------------------------
    instance_declaration: ($) =>
      seq(
        field("instances", $.component_array),
        ":",
        field("type", $.identifier),
        optional(field("settings", $.setting_values)),
      ),

    // A colon followed by an indented body.
    block: ($) => seq(":", $._indent, repeat1($._block_statement), $._dedent),

    // ---------------------------------------------------------------
    // Flows (wiring)
    // ---------------------------------------------------------------
    flow: ($) =>
      prec.right(
        seq(
          $.flow_source,
          choice(
            seq(
              repeat1(
                seq(
                  choice("->", $.delay, $.vibration_link),
                  $.flow_destination,
                ),
              ),
              optional($._flow_end),
            ),
            $._flow_end,
          ),
        ),
      ),

    //   rear -(2gt)-> delayed     the value arrives that much later
    // Parentheses hold time; the arrow's parts must touch.
    // `-(` is one token, so after a flow the parser can tell a delay from the
    // next pattern arm (`-{`) by the very first token.
    delay: ($) =>
      seq("-(", field("time", $._duration), ")", token.immediate("->")),

    // ---------------------------------------------------------------
    // Operators on single pins, read as strengths 0..15:
    //   max{a, b, ...}   sub{a, b}   sum{a, b, ...}   mod{a, b}
    // Any name touching a brace parses here; the checker knows the real ones.
    // ---------------------------------------------------------------
    operator_call: ($) =>
      seq(
        field("name", $.identifier),
        token.immediate("{"),
        field("arg", $._operand),
        repeat(seq(",", field("arg", $._operand))),
        "}",
      ),

    // vib.freq  one field of a structured value. The dot must touch both sides
    field_access: ($) =>
      seq(
        field("object", $.identifier),
        token.immediate("."),
        field(
          "field",
          alias(token.immediate(/[a-zA-Z_&][a-zA-Z0-9_&]*/), $.field_name),
        ),
      ),

    // freq: vib.freq - a named field when building a structured value
    named_item: ($) =>
      seq(
        field("name", $.identifier),
        ":",
        field(
          "value",
          choice($.operator_call, $.field_access, $.identifier, $.number),
        ),
      ),

    _operand: ($) =>
      choice(
        $.operator_call,
        $.output_ref,
        $.component_array,
        $.field_access,
        $.identifier,
        $.number,
      ),

    // =>  yields the component's output     ~>  emits it into the air
    _flow_end: ($) => choice("=>", "~>", $.state_write),

    state_write: ($) => seq("=:", $.identifier),

    flow_source: ($) =>
      choice(
        $.operator_call,
        $.output_ref,
        $.component_array,
        $.data_array,
        $.indexed_identifier,
        $.parameter_ref,
        $.field_access,
        $.identifier,
        $.number,
      ),

    flow_destination: ($) =>
      choice(
        $.output_ref,
        $.component_array,
        $.data_array,
        $.indexed_identifier,
        $.parameter_ref,
        prec(-1, $.identifier),
      ),

    // Brackets: physical things and their pins.
    component_array: ($) =>
      seq(
        "[",
        choice(
          $.component_content,
          seq(
            $.flow_destination_item,
            repeat1(seq(",", $.flow_destination_item)),
          ),
        ),
        "]",
      ),

    // Braces: values. A bundle may pull from component outputs:
    //   {[Repeater_8], [Repeater_9]}   {[XNOR_1, XNOR_2]}
    data_array: ($) =>
      seq("{", $.data_item, repeat(seq(",", $.data_item)), "}"),

    data_item: ($) =>
      choice(
        $.named_item,
        $.operator_call,
        $.field_access,
        $.identifier,
        $.number,
        $.indexed_identifier,
        $.output_ref,
        $.component_array,
      ),

    component_content: ($) =>
      choice(
        $.stateful_component,
        $.indexed_component,
        $.instance_ref,
        $.identifier,
      ),

    // lamp{3, 5}   lamp{i - 1, j}   lamp{0..7, 3} (a group: every lamp in row 3)
    // Indices are values, so they go in braces.
    instance_ref: ($) =>
      seq(
        field("name", $.identifier),
        token.immediate("{"),
        $.index,
        repeat(seq(",", $.index)),
        "}",
      ),

    index: ($) =>
      choice(
        field("value", $.number),
        // A group of parts: lamp{0..7}. The range rule is shared, so `*` parses
        // here too; the checker rejects it, since an array needs a size.
        $.range,
        seq(
          field("var", $.identifier),
          optional(
            seq(
              field("op", alias(choice("+", "-"), $.index_op)),
              field("offset", $.number),
            ),
          ),
        ),
      ),

    flow_destination_item: ($) =>
      choice(
        $.instance_ref,
        $.identifier,
        $.indexed_component,
        $.parameter_ref,
        $.output_ref,
        $.indexed_identifier,
        $.timing_ref,
      ),

    timing_ref: ($) =>
      seq(choice("AFTER", "BEFORE", "SYNC"), "(", $.identifier, ")"),

    stateful_component: ($) => seq(":", $.identifier, ":"),

    // Input pin, by position or by name:
    //   1[OR_4]          pin 1
    //   param1[Some_0]   whatever pins param1 is declared on
    // A name must touch its bracket, so a flow ending in a bare name is never
    // glued to a bracket on the next line.
    parameter_ref: ($) =>
      choice(
        seq($._count, "[", $._ref_list, "]"),
        seq(
          field("port", alias($.identifier, $.port_name)),
          token.immediate("["),
          $._ref_list,
          "]",
        ),
      ),

    _ref_list: ($) => seq($._ref_item, repeat(seq(",", $._ref_item))),

    _ref_item: ($) => choice($.instance_ref, $.identifier),

    // Output pin or bit, by position or by name:
    //   [OR_0]1   [dest_addr]1   [Some_0]low
    output_ref: ($) =>
      prec(
        4,
        choice(
          seq($.component_array, $._count),
          seq(
            $.component_array,
            field(
              "port",
              alias(token.immediate(/[a-zA-Z_&][a-zA-Z0-9_&]*/), $.port_name),
            ),
          ),
        ),
      ),

    _count: ($) => choice($.number, "*"),

    indexed_component: ($) => seq($.identifier, "_", $.number),

    // Kept so existing queries naming it still compile. Identifiers already
    // absorb trailing digits (rec_1 is one name), so this could only match
    // with whitespace in between, which glued a flow's last name to a number
    // starting the next line. The number must now touch, so it never matches.
    indexed_identifier: ($) =>
      prec(3, seq($.identifier, alias(token.immediate(/\d+/), $.number))),

    // ---------------------------------------------------------------
    // Pattern matching
    //   {a, b}?
    //       -{0, 0}-> 1 =>
    //       -{1}-> :
    //           ...indented body...
    // The subject is always a value, so it is always braced.
    // ---------------------------------------------------------------
    pattern_match: ($) =>
      seq(field("subject", $.data_array), "?", repeat1($.pattern_case)),

    pattern_case: ($) =>
      prec.right(
        seq(
          "-",
          "{",
          $.pattern_value,
          repeat(seq(",", $.pattern_value)),
          "}",
          "->",
          choice(
            $.block,
            // When the pattern matches, this wire conducts, so an arm's result
            // can keep flowing like any flow:  -{01}-> {1, 1, 0, 0} -> low
            seq(
              $.pattern_result,
              repeat(seq(choice("->", $.delay), $.flow_destination)),
              optional(choice("=>", "~>", $.state_write)),
            ),
          ),
        ),
      ),

    pattern_value: ($) =>
      choice(
        $.identifier,
        $.number,
        alias("*", $.wildcard),
        $.tuple_literal,
        $.pattern_repeat,
        $.pattern_range,
        $.stack_notation,
        $.stack_range,
      ),

    // "This value, for all the rest": {0*} is all zeros, {**} is anything.
    // Only the last value of a pattern may repeat.
    pattern_repeat: ($) =>
      seq(
        field(
          "value",
          choice($.number, $.tuple_literal, alias("*", $.wildcard)),
        ),
        token.immediate("*"),
      ),

    tuple_literal: (_) => /\d{2,}/,

    pattern_result: ($) =>
      prec(
        1,
        choice(
          $.operator_call,
          $.output_ref,
          $.component_array,
          $.data_array,
          $.indexed_identifier,
          $.parameter_ref,
          $.control_statement,
          $.field_access,
          $.identifier,
          $.number,
        ),
      ),

    // ---------------------------------------------------------------
    // Tokens
    // ---------------------------------------------------------------
    type: ($) =>
      choice(
        seq($._type_name, repeat($._type_field), optional($.type_arguments)),
        seq("{", $.type, "}"),
        $.enum_type,
        $.record_type,
      ),

    _type_name: ($) =>
      choice(
        "bit",
        // One pin read as a level 0..15. A bit is the same pin read as on/off.
        "strength",
        "byte",
        "nibble",
        "tuple",
        "int",
        "unknown",
        // An event, not a level: it exists only in the tick it arrives
        "vibration",
        // A type declared with TYPE, here or in an imported file
        $.identifier,
      ),

    //   transmission.data   the type of one field of a record type. The dot
    //                       must touch both sides, like vib.freq.
    _type_field: ($) =>
      seq(
        token.immediate("."),
        field(
          "field",
          alias(token.immediate(/[a-zA-Z_&][a-zA-Z0-9_&]*/), $.field_name),
        ),
      ),

    //   nibble{vibration}   a nibble whose lanes carry vibrations
    //   bit{0..3}           four bits, numbered 0..3
    // The brace must touch the name, like max{...} and lamp{3}.
    type_arguments: ($) =>
      seq(token.immediate("{"), choice($.type, $.range), "}"),

    // {inactive, active, cooldown}: state that holds one of these names.
    // At least two names: {x} alone is a bundle of type x.
    enum_type: ($) =>
      seq("{", $.identifier, repeat1(seq(",", $.identifier)), "}"),

    // {switch: nibble, port: nibble}: named parts, each with its own type
    record_type: ($) =>
      seq("{", $.record_field, repeat(seq(",", $.record_field)), "}"),

    record_field: ($) =>
      seq(field("name", $.identifier), ":", field("type", $.type)),

    // ---------------------------------------------------------------
    // Type declarations, at the top level of a file; import them with USE
    //   TYPE nibble: {bit{0..3}}
    //   TYPE address: {switch: nibble, port: nibble}
    // ---------------------------------------------------------------
    type_declaration: ($) =>
      seq(
        "TYPE",
        field("name", $.identifier),
        ":",
        field("definition", $.type),
      ),

    comment: (_) =>
      token(
        choice(seq("//", /.*/), seq("/*", /[^*]*\*+([^/*][^*]*\*+)*/, "/")),
      ),

    identifier: (_) => /[a-zA-Z_&][a-zA-Z0-9_&]*/,

    number: (_) => /\d+/,
  },
});
