-- :checkhealth tikker
local M = {}

function M.check()
  local h = vim.health
  local root = require('tikker.build').root

  h.start('Neovim')
  if vim.fn.has('nvim-0.11') == 1 then
    h.ok('Neovim ' .. tostring(vim.version()))
  else
    h.error('Neovim 0.11 or newer is needed')
  end

  h.start('Parser (syntax colors)')
  local ok, err = pcall(vim.treesitter.language.add, 'tikker')
  if ok and err ~= false then
    h.ok('tikker parser loads')
  else
    h.warn('tikker parser is not built: ' .. tostring(err), { 'Run :TikkerBuild (needs a C compiler)' })
  end

  h.start('Language server')
  if vim.fn.executable('node') == 1 then
    local v = vim.trim(vim.fn.system({ 'node', '--version' }))
    local major = tonumber(v:match('^v(%d+)'))
    if major and major >= 18 then
      h.ok('node ' .. v)
    else
      h.error('node ' .. v .. ' is too old; the server needs Node 18 or newer')
    end
  else
    h.error('node is not installed; the language server needs it')
  end
  if vim.fn.filereadable(root .. '/server/dist/server.js') == 1 then
    h.ok('server bundle found')
  else
    h.error('server/dist/server.js is missing', { 'Run :TikkerBuild (needs npm)' })
  end
  local opts = require('tikker').options
  if opts.lsp == false then
    h.info('the language server is turned off in setup({ lsp = false })')
  elseif vim.lsp.is_enabled and not vim.lsp.is_enabled('tikker_ls') then
    h.warn('tikker_ls is not enabled')
  else
    h.ok('tikker_ls is enabled')
  end
  h.info('built-in completion: ' .. (require('tikker').use_builtin_completion() and 'on' or 'off (your completion plugin shows the suggestions)'))
end

return M
