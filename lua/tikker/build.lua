-- lua/tikker/build.lua
-- Compiles parser/tikker.so from the generated C in src/. The language server
-- is committed already built (server/dist), so it's only rebuilt if missing.

local M = {}

M.root = vim.fn.fnamemodify(debug.getinfo(1, 'S').source:sub(2), ':p:h:h:h')

local is_win = vim.fn.has('win32') == 1
local ext = is_win and 'dll' or 'so'

local function compilers()
  local list = {}
  local env_cc = os.getenv('CC')
  if env_cc and env_cc ~= '' then
    list[#list + 1] = vim.split(env_cc, ' ', { trimempty = true })
  end
  for _, cc in ipairs({ 'cc', 'gcc', 'clang' }) do
    list[#list + 1] = { cc }
  end
  list[#list + 1] = { 'zig', 'cc' }
  return list
end

--- The steps still needed, each { label, argv, cwd }.
local function steps()
  local root = M.root
  local out = root .. '/parser/tikker.' .. ext
  local tmp = out .. '.tmp'
  local list = {}

  local cc
  for _, c in ipairs(compilers()) do
    if vim.fn.executable(c[1]) == 1 then
      cc = c
      break
    end
  end
  if cc then
    local argv = vim.list_extend(vim.deepcopy(cc), {
      '-o', tmp, '-shared', '-Os', '-I', root .. '/src',
      root .. '/src/parser.c', root .. '/src/scanner.c',
    })
    if not is_win then
      table.insert(argv, #cc + 1, '-fPIC')
    end
    list[#list + 1] = { label = 'parser', argv = argv, cwd = root, tmp = tmp, out = out }
  elseif vim.fn.executable('tree-sitter') == 1 then
    list[#list + 1] = { label = 'parser', argv = { 'tree-sitter', 'build', '-o', tmp, root }, cwd = root, tmp = tmp, out = out }
  else
    list[#list + 1] = { label = 'parser', error = 'no C compiler found (tried $CC, cc, gcc, clang, zig) and no tree-sitter CLI' }
  end

  if vim.fn.filereadable(root .. '/server/dist/server.js') == 0 then
    if vim.fn.executable('npm') == 1 then
      list[#list + 1] = { label = 'server dependencies', argv = { 'npm', 'ci' }, cwd = root .. '/server' }
      list[#list + 1] = { label = 'server', argv = { 'npm', 'run', 'build' }, cwd = root .. '/server' }
    else
      list[#list + 1] = { label = 'server', error = 'server/dist is missing and npm is not installed' }
    end
  end
  return list
end

-- Compiling to a temporary file and renaming it keeps a running Neovim that
-- already loaded the old parser from crashing when the file changes under it.
local function finish(step)
  if step.tmp then
    local ok, err = os.rename(step.tmp, step.out)
    if not ok then
      return 'could not move the new parser into place: ' .. tostring(err)
    end
  end
end

local function describe(step, res)
  local msg = (res.stderr ~= '' and res.stderr) or res.stdout or ''
  return ('building the %s failed (%s):\n%s'):format(step.label, table.concat(step.argv, ' '), msg)
end

--- Build now and wait. Raises an error on failure (lazy.nvim shows it).
function M.run()
  vim.fn.mkdir(M.root .. '/parser', 'p')
  for _, step in ipairs(steps()) do
    if step.error then
      error('tikker.nvim: ' .. step.error)
    end
    local res = vim.system(step.argv, { cwd = step.cwd, text = true }):wait()
    if res.code ~= 0 then
      error('tikker.nvim: ' .. describe(step, res))
    end
    local err = finish(step)
    if err then
      error('tikker.nvim: ' .. err)
    end
  end
end

--- Build in the background, reporting with vim.notify. Used by :TikkerBuild.
function M.run_async()
  vim.fn.mkdir(M.root .. '/parser', 'p')
  local list = steps()
  local function notify(msg, level)
    vim.schedule(function()
      vim.notify('tikker.nvim: ' .. msg, level or vim.log.levels.INFO)
    end)
  end
  local function nxt(i)
    local step = list[i]
    if not step then
      notify('build finished. Reopen Tikker buffers (:e) to use the new parser.')
      return
    end
    if step.error then
      notify(step.error, vim.log.levels.ERROR)
      return
    end
    notify('building the ' .. step.label .. '...')
    vim.system(step.argv, { cwd = step.cwd, text = true }, function(res)
      if res.code ~= 0 then
        notify(describe(step, res), vim.log.levels.ERROR)
        return
      end
      local err = finish(step)
      if err then
        notify(err, vim.log.levels.ERROR)
        return
      end
      nxt(i + 1)
    end)
  end
  nxt(1)
end

return M
