-- lazy.nvim runs this file by itself after installing or updating the plugin.
-- Other plugin managers can call require('tikker.build').run() instead.
local root = vim.fn.fnamemodify(debug.getinfo(1, 'S').source:sub(2), ':p:h')
dofile(root .. '/lua/tikker/build.lua').run()
