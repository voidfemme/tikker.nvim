; Define scopes
(function_declaration) @local.scope
(block) @local.scope

; Function definitions
(function_declaration 
  "[" 
  (identifier) @local.definition.function
  "]")

; State variable definitions
(state_declaration 
  (identifier) @local.definition.var)

; Input parameter definitions
(input_parameter 
  (identifier) @local.definition.parameter)

; Timing parameter definitions
(timing_parameter
  (timing_annotation
    (identifier) @local.definition.parameter))

; Variable references
(identifier) @local.reference

(hear_block) @local.scope
(hear_block
  var: (identifier) @local.definition.var)
(each_block) @local.scope
(each_block
  var: (identifier) @local.definition.var)
