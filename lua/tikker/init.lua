-- lua/tikker/init.lua
local M = {}

---@class tikker.Options
---@field lsp? boolean Start the language server for Tikker files. Default true.
---@field completion? boolean|'auto' Built-in completion as you type. 'auto' (the default) turns it on unless blink.cmp or nvim-cmp is installed, since those already show LSP completions.
---@field severity? table<string, 'error'|'warning'> Overrides for unknownComponent, undeclaredSignal, wiredOr and unusedPin.

---@type tikker.Options
M.defaults = {
  lsp = true,
  completion = 'auto',
  severity = {},
}

---@type tikker.Options
M.options = vim.deepcopy(M.defaults)

--- Optional. Only needed to change a default.
---@param opts? tikker.Options
function M.setup(opts)
  M.options = vim.tbl_deep_extend('force', vim.deepcopy(M.defaults), opts or {})
  M.apply()
end

local severity_keys = {
  unknownComponent = 'unknownComponentSeverity',
  undeclaredSignal = 'undeclaredSignalSeverity',
  wiredOr = 'wiredOrSeverity',
  unusedPin = 'unusedPinSeverity',
}

function M.apply()
  local init_options = {}
  for short, value in pairs(M.options.severity or {}) do
    local key = severity_keys[short] or short
    init_options[key] = value
  end
  if next(init_options) then
    vim.lsp.config('tikker_ls', { init_options = init_options })
  end
  vim.lsp.enable('tikker_ls', M.options.lsp ~= false)
end

function M.use_builtin_completion()
  local c = M.options.completion
  if c == 'auto' then
    local has = function(mod)
      return package.loaded[mod] ~= nil or #vim.api.nvim_get_runtime_file('lua/' .. mod:gsub('%.', '/') .. '/init.lua', false) > 0
    end
    return not (has('blink.cmp') or has('cmp'))
  end
  return c == true
end

local warned = false
--- Called when a Tikker buffer opens and the parser isn't built yet.
function M.parser_missing()
  if warned then
    return
  end
  warned = true
  vim.schedule(function()
    vim.notify(
      'tikker.nvim: the tree-sitter parser is not built yet, so there are no syntax colors. Run :TikkerBuild',
      vim.log.levels.WARN
    )
  end)
end

return M
