(identifier) @variable
; Comments (highest priority)
(comment) @comment

; Keywords
; NOTE: "STATE" is no longer a keyword -- it is a normal variable name in your
; files (CopperBulb), so it must NOT be highlighted as a keyword.
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

; Types: the type names are blue; a projection's field (.data) and the
; braces around type arguments keep their own colors.
(type
  ["bit" "strength" "byte" "nibble" "tuple" "int" "unknown" "vibration"] @type)
(type
  (identifier) @type)

; Numbers
(number) @number

; Function names in function declarations
(function_declaration
  "["
  (identifier) @function
  "]")

; State variable names (declaration site)
(state_declaration
  (identifier) @variable.member)

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
"WHERE" @keyword
"IN" @keyword

"~(" @operator
"~>" @operator
"." @punctuation.delimiter

(time) @number
(time_unit) @number

(field_access
  field: (field_name) @property)

(enum_type
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
