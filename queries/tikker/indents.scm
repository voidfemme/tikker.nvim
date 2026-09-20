; Indent pattern cases and blocks
[
  (pattern_case)
  (block)
] @indent

; Outdent closing braces and pattern cases
[
  "}"
  (pattern_case)
] @outdent

; Don't indent top-level constructs
(function_declaration) @no_indent
(input_parameter) @no_indent
(timing_parameter) @no_indent
(state_declaration) @no_indent

; Indent contents of pattern blocks
(block
  (_) @indent)

; Indent pattern cases within pattern matches
(pattern_match
  (pattern_case) @indent)

; Indent contents of timing annotations
(timing_annotation
  (_) @indent)
(where_clause
  (pattern_case) @indent)
