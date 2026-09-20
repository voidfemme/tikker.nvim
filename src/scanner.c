#include "tree_sitter/alloc.h"
#include "tree_sitter/array.h"
#include "tree_sitter/parser.h"

#include <stdint.h>
#include <string.h>

// Must match the order of `externals` in grammar.js.
enum TokenType {
  INDENT,
  DEDENT,
  ERROR_SENTINEL,
};

typedef struct {
  Array(uint16_t) indents;
} Scanner;

static inline void skip(TSLexer *lexer) { lexer->advance(lexer, true); }
static inline void advance(TSLexer *lexer) { lexer->advance(lexer, false); }

void *tree_sitter_tikker_external_scanner_create(void) {
  Scanner *scanner = ts_calloc(1, sizeof(Scanner));
  array_init(&scanner->indents);
  array_push(&scanner->indents, 0);
  return scanner;
}

void tree_sitter_tikker_external_scanner_destroy(void *payload) {
  Scanner *scanner = (Scanner *)payload;
  array_delete(&scanner->indents);
  ts_free(scanner);
}

unsigned tree_sitter_tikker_external_scanner_serialize(void *payload, char *buffer) {
  Scanner *scanner = (Scanner *)payload;
  unsigned size = 0;
  // Index 0 is always the base level, so it is not stored.
  for (uint32_t i = 1; i < scanner->indents.size; i++) {
    if (size + 2 > TREE_SITTER_SERIALIZATION_BUFFER_SIZE) break;
    uint16_t value = *array_get(&scanner->indents, i);
    buffer[size++] = (char)(value & 0xff);
    buffer[size++] = (char)((value >> 8) & 0xff);
  }
  return size;
}

void tree_sitter_tikker_external_scanner_deserialize(void *payload, const char *buffer,
                                                       unsigned length) {
  Scanner *scanner = (Scanner *)payload;
  array_clear(&scanner->indents);
  array_push(&scanner->indents, 0);
  for (unsigned i = 0; i + 1 < length; i += 2) {
    uint16_t value = (uint16_t)((uint8_t)buffer[i] | ((uint8_t)buffer[i + 1] << 8));
    array_push(&scanner->indents, value);
  }
}

bool tree_sitter_tikker_external_scanner_scan(void *payload, TSLexer *lexer,
                                                const bool *valid_symbols) {
  Scanner *scanner = (Scanner *)payload;

  // During error recovery every symbol is marked valid. Stay out of the way.
  if (valid_symbols[ERROR_SENTINEL]) return false;
  if (!valid_symbols[INDENT] && !valid_symbols[DEDENT]) return false;

  bool found_newline = false;
  uint16_t column = 0;

  // Skip whitespace up to the next code on this or a later line.
  for (;;) {
    int32_t c = lexer->lookahead;
    if (c == '\n') {
      found_newline = true;
      column = 0;
      skip(lexer);
    } else if (c == ' ') {
      column++;
      skip(lexer);
    } else if (c == '\t') {
      column += 4;
      skip(lexer);
    } else if (c == '\r' || c == '\f') {
      column = 0;
      skip(lexer);
    } else {
      break;
    }
  }

  // Emitted tokens are zero-width and sit here, before any comments.
  lexer->mark_end(lexer);

  // Look past comment lines so they don't decide the indentation.
  // Everything read after mark_end is re-lexed normally later.
  for (;;) {
    if (lexer->lookahead != '/') break;
    advance(lexer);
    if (lexer->lookahead == '/') {
      while (lexer->lookahead != '\n' && !lexer->eof(lexer)) advance(lexer);
    } else if (lexer->lookahead == '*') {
      advance(lexer);
      bool closed = false;
      while (!lexer->eof(lexer)) {
        if (lexer->lookahead == '*') {
          advance(lexer);
          if (lexer->lookahead == '/') {
            advance(lexer);
            closed = true;
            break;
          }
        } else {
          advance(lexer);
        }
      }
      if (!closed) break;
    } else {
      // A lone '/' is code (e.g. a module path), not a comment.
      break;
    }

    // Measure the line after the comment.
    for (;;) {
      int32_t c = lexer->lookahead;
      if (c == '\n') {
        found_newline = true;
        column = 0;
        advance(lexer);
      } else if (c == ' ') {
        column++;
        advance(lexer);
      } else if (c == '\t') {
        column += 4;
        advance(lexer);
      } else if (c == '\r' || c == '\f') {
        column = 0;
        advance(lexer);
      } else {
        break;
      }
    }
  }

  uint16_t current = *array_back(&scanner->indents);
  bool at_eof = lexer->eof(lexer);

  // A line that closes several blocks at once needs one DEDENT per block.
  // Tokens here are zero-width, so after the first DEDENT the next scan
  // starts at the line's first character, past the newline, and
  // found_newline stays false. Measure the column directly instead. Every
  // line inside a block starts at or past that block's indent, so a column
  // less than it can only mean a line that closes it.
  if (!found_newline && !at_eof) {
    column = (uint16_t)lexer->get_column(lexer);
  }

  if (valid_symbols[DEDENT] && scanner->indents.size > 1 &&
      (at_eof || column < current)) {
    array_pop(&scanner->indents);
    lexer->result_symbol = DEDENT;
    return true;
  }

  if (valid_symbols[INDENT] && found_newline && !at_eof && column > current) {
    array_push(&scanner->indents, column);
    lexer->result_symbol = INDENT;
    return true;
  }

  return false;
}
