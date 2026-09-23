(identifier) @variable
; Comments (highest priority)
(comment) @comment

; Keywords
"STATE" @keyword
"AFTER" @keyword
"BEFORE" @keyword
"SYNC" @keyword
"TOGGLE" @keyword
"NOP" @keyword
"WAIT" @keyword
; Keywords the grammar has that had no color yet
"USE" @keyword.import
"TYPE" @keyword.type
"SETTING" @keyword
"INVENTORY" @keyword
"CHANGE" @keyword
"SEQ" @keyword
"EACH" @keyword.repeat

; Operators and arrows
"->" @operator
"=>" @operator
"=:" @operator
"=" @operator
"?" @operator
"-" @operator

; Punctuation
"[" @punctuation.bracket
"]" @punctuation.bracket
"{" @punctuation.bracket
"}" @punctuation.bracket
"(" @punctuation.bracket
")" @punctuation.bracket
":" @punctuation.delimiter
"," @punctuation.delimiter

; The end of a block or a pattern.
(block_end) @punctuation.delimiter

; Types: the type names are blue; a projection's field (.data) and the
; braces around type arguments keep their own colors.
(type
  ["bit" "strength" "byte" "nibble" "tuple" "int" "unknown"] @type)
(type
  (identifier) @type)

; How a value travels: vibration, contact. Not a type of its own, so it gets
; its own color inside the braces.
(medium) @type.builtin

; Numbers
(number) @number

; Function names in function declarations
(function_declaration
  "["
  (identifier) @function
  "]")

; State and setting names at their declaration. The field keeps this off the
; default, which names one of the options rather than the variable.
(state_declaration
  name: (identifier) @variable.member)
(setting_declaration
  name: (identifier) @variable.member)
(state_declaration
  default: (identifier) @constant)
(setting_declaration
  default: (identifier) @constant)

; State write target (the variable written via =:)
(state_write
  (identifier) @variable.member)

; Input parameter names
(input_parameter
  (identifier) @parameter)

; Timing parameter names (parameter-position annotation)
(timing_parameter
  (timing_annotation
    (identifier) @parameter))

; Inline timing refs e.g. AFTER(r_1)
(timing_ref
  (identifier) @variable)

; Component references in parameter_ref
(parameter_ref
  (identifier) @function.call)

; Component references in output_ref
(output_ref
  (component_array
    (component_content
      (identifier) @function.call)))

; Component references in component arrays
(component_array
  (component_content
    (identifier) @function.call))

; Indexed components
(indexed_component
  (identifier) @function.call
  "_"
  (number))


; Wildcard (pattern wildcard / variadic arity / variadic index)
"*" @constant.builtin

"HEAR" @keyword
"ACCEPT" @keyword
"IN" @keyword

"~(" @operator
"~>" @operator
"~:" @operator
"." @punctuation.delimiter

(time) @number
(time_unit) @number

(field_access
  field: (field_name) @property)

(enum_type
  (identifier) @constant)

; STATE and SETTING list their options the same way a type does, but the
; grammar calls that list setting_options.
(setting_options
  (identifier) @constant)

(hear_block
  var: (identifier) @variable.parameter)

; Numbers the grammar lexes separately: two or more digits inside a pattern,
; and stack counts like 4s+5i
(tuple_literal) @number
(stack_notation) @number

; Wildcards and "everything": {**}, 1..*, USE mod: [*]
(wildcard) @constant.builtin
(open_end) @constant.builtin
(import_all) @constant.builtin

; Arrows that wrap a value are one arrow: -{ } ->, -( )->, ~( )~>.
; These come last so they win over the punctuation colors above.
(pattern_case
  ["-" "{" "}" "->"] @operator)
(delay
  ["-(" ")" "->"] @operator)
(vibration_link
  ["~(" ")" "~>"] @operator)
