-- indent/tikker.lua
-- Neovim loads this by itself for every tikker buffer (with `filetype
-- indent on`, which is Neovim's default), so it works however the rest of
-- the config is loaded.
--
-- The line above decides: one level deeper after a line that opens a block
-- (ends in ":", or a match's "?"), the same depth otherwise. A component
-- header also ends in ":", but its body stays at the left edge. Leaving a
-- block is a backspace, since nothing on the line above says it ended.
-- For a line that already has code (re-indenting with =), a shallower
-- indent than the computed one is kept: it's a block you closed on purpose.

if vim.b.did_indent then
  return
end
vim.b.did_indent = true

local HEADER = '^[%d%*%.]*%[[%a_][%w_]*%][%d%*%.]*%s*[=~]>'

local function computed_indent(lnum)
  local prev = vim.fn.prevnonblank(lnum - 1)
  if prev == 0 then
    return 0
  end
  local base = vim.fn.indent(prev)
  local text = vim.fn.getline(prev):gsub('//.*$', ''):gsub('%s+$', '')
  if text:match(HEADER) then
    return base
  end
  local last = text:sub(-1)
  if last == ':' or last == '?' then
    return base + vim.fn.shiftwidth()
  end
  return base
end

-- A global, so 'indentexpr' can reach it no matter where this file lives.
function _G.TikkerIndent(lnum)
  lnum = lnum or vim.v.lnum
  local want = computed_indent(lnum)
  if vim.fn.getline(lnum):match('%S') then
    return math.min(want, vim.fn.indent(lnum))
  end
  return want
end

vim.bo.indentexpr = 'v:lua.TikkerIndent()'
-- Only new lines (o, O, Enter) get indented as you type; == still re-indents.
vim.bo.indentkeys = 'o,O'
vim.b.undo_indent = 'setlocal indentexpr< indentkeys<'
