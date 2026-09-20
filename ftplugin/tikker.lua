-- ftplugin/tikker.lua: settings for every Tikker buffer.

if vim.b.did_ftplugin then
  return
end
vim.b.did_ftplugin = true

vim.bo.commentstring = '// %s'
vim.bo.comments = '://'

-- Tree-sitter colors, when the parser has been built (see :TikkerBuild).
if not pcall(vim.treesitter.start) then
  require('tikker').parser_missing()
end

vim.b.undo_ftplugin = 'setlocal commentstring< comments< | lua pcall(vim.treesitter.stop)'
