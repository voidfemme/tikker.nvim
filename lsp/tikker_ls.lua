-- lsp/tikker_ls.lua
-- How Neovim (0.11+) starts the Tikker language server. The server ships with
-- this plugin, already built, so all it needs is Node.
--
-- To change anything here from your own config:
--   vim.lsp.config('tikker_ls', { init_options = { wiredOrSeverity = 'error' } })

local root = vim.fn.fnamemodify(debug.getinfo(1, 'S').source:sub(2), ':p:h:h')

---@type vim.lsp.Config
return {
  cmd = { 'node', root .. '/server/dist/server.js', '--stdio' },
  filetypes = { 'tikker' },
  -- The folder holding .git is the project; USE paths are also tried from there.
  root_markers = { '.git' },
  -- Each can be 'error' or 'warning'. These are the defaults.
  init_options = {
    unknownComponentSeverity = 'error',
    undeclaredSignalSeverity = 'error',
    wiredOrSeverity = 'warning',
    unusedPinSeverity = 'warning',
  },
}
