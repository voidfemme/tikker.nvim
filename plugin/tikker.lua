-- plugin/tikker.lua: runs once at startup. Everything here works without
-- calling setup(); setup() only changes the defaults.

if vim.g.loaded_tikker then
  return
end
vim.g.loaded_tikker = true

if vim.fn.has('nvim-0.11') == 0 then
  vim.notify('tikker.nvim needs Neovim 0.11 or newer', vim.log.levels.WARN)
  return
end

local tikker = require('tikker')

-- Colors from the language server. `default = true` lets a colorscheme
-- (or your config) override any of them.
local function colors()
  local set = function(name, link)
    vim.api.nvim_set_hl(0, name, { default = true, link = link })
  end
  set('TikkerComponent', 'DiagnosticOk')
  set('TikkerPort', '@variable.parameter')
  set('TikkerOperator', '@function.builtin')
  set('TikkerType', '@type')
  set('@lsp.type.class.tikker', 'TikkerComponent')
  set('@lsp.type.property.tikker', 'TikkerPort')
  set('@lsp.type.function.tikker', 'TikkerOperator')
  set('@lsp.typemod.function.defaultLibrary.tikker', 'TikkerOperator')
  set('@lsp.type.type.tikker', 'TikkerType')
end
colors()
vim.api.nvim_create_autocmd('ColorScheme', {
  group = vim.api.nvim_create_augroup('tikker_colors', {}),
  callback = colors,
})

vim.api.nvim_create_autocmd('LspAttach', {
  group = vim.api.nvim_create_augroup('tikker_lsp', {}),
  callback = function(args)
    local client = vim.lsp.get_client_by_id(args.data.client_id)
    if client and client.name == 'tikker_ls' and tikker.use_builtin_completion() then
      vim.lsp.completion.enable(true, client.id, args.buf, { autotrigger = true })
    end
  end,
})

vim.api.nvim_create_user_command('TikkerBuild', function()
  require('tikker.build').run_async()
end, { desc = 'Compile the Tikker tree-sitter parser (and the server, if it is missing)' })

tikker.apply()
