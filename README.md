# Tikker.nvim

## What is Tikker?

Tikker is a kind of Hardware Design Language (HDL) I have been working out to
help me with computational redstone. Tikker lets you describe redstone/sculk
circuits with a strong emphasis on timing. It is purposefully is agnostic about
component layout, allowing you to focus on making circuits that work, for fast
prototyping of large complex builds, especially computational redstone.

If I remain interested in the project long enough, perhaps this language can be
complimented with at least a CLI tool for analysing complex circuits and
pinpointing failure points across an entire project. Either way, this language
is my first attempt at writing a language, and must exist for me to even imagine
such an analyzer.

This language evolved from my electrical panel wiring days, where I wrote in
brackets and arrows to help me keep track of complicated wiring diagrams in my
head. It has evolved far beyond that, but the basic idea is source ->
destination, and plenty of truth tables I could remember as a visual for me to
make sense of how to route and land my connections. From day one, I:

**Every component can be described in brackets, with a digit on the left to
signify input wires, and a digit on the right to signify output wires**:
`4[ComplexSwitch]8`. (I was a bit more fluid in reality about what left/right
meant, but essentially the idea was that a number next to a square bracket
represented a component with N number of characters.

Flow was another method I used to remember wiring in my head, where I would
trace the signal through each of its components to the end. Sometimes this was
easier to remember than a truth table could get me. Therefore, **signals come
from the left and are sent to the right** via various arrows: `->`, `=>`, `~>`,
`-{SomeValue}->`, `~{SomeDistance}~>`, `-({NumTicks}gt)->`,
`-({NumTicks}rt)->` to describe flow of signal, + any constraint on that flow.
More documentation to come later to describe exactly how these symbols are to
be used in the (to be included...) wiki attached to the project.

The interesting thing that falls out of this is that **variables are assigned by
"pushing" a value written on the left "into" a variable name on the right**:
`15 -> power`. That is how you define `power` to mean the value `15`.
Idiosyncratically, I also use "assignment" syntax (`power = 15`, for example)
in other places, for lack of a better current idea. I may change this to
something like `power <- 15` for cases where it suits the syntax, but I'm open
to discussion and suggestion! I want to make something that works for as many
people as possible.

The code for the treesitter grammar and the Tikker LSP were mostly written with
Claude Opus 5, however the language syntax was conceived originally with paper and
pencil, and represents my original work. As does this README.

This project is published under the **WTFPL** license, because information
should be free :)
