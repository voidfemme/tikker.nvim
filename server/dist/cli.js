#!/usr/bin/env node
"use strict";
var __create2 = Object.create;
var __defProp2 = Object.defineProperty;
var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
var __getOwnPropNames2 = Object.getOwnPropertyNames;
var __getProtoOf2 = Object.getPrototypeOf;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __commonJS2 = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames2(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps2 = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames2(from))
      if (!__hasOwnProp2.call(to, key) && key !== except)
        __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/web-tree-sitter/web-tree-sitter.cjs
var require_web_tree_sitter2 = __commonJS2({
  "node_modules/web-tree-sitter/web-tree-sitter.cjs"(exports, module) {
    "use strict";
    var __create = Object.create;
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __getProtoOf = Object.getPrototypeOf;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
    var __commonJS = (cb, mod) => function __require() {
      try {
        return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
      } catch (e) {
        throw mod = 0, e;
      }
    };
    var __export = (target, all) => {
      for (var name2 in all)
        __defProp(target, name2, { get: all[name2], enumerable: true });
    };
    var __copyProps = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
      mod
    ));
    var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
    var require_web_tree_sitter = __commonJS({
      "lib/web-tree-sitter.cjs"(exports, module) {
        "use strict";
        var Module = (() => {
          var _scriptName = typeof document != "undefined" ? document.currentScript?.src : void 0;
          return async function(moduleArg = {}) {
            var moduleRtn;
            var Module = moduleArg;
            var ENVIRONMENT_IS_WEB = typeof window == "object";
            var ENVIRONMENT_IS_WORKER = typeof WorkerGlobalScope != "undefined";
            var ENVIRONMENT_IS_NODE = typeof process == "object" && process.versions?.node && process.type != "renderer";
            Module.currentQueryProgressCallback = null;
            Module.currentProgressCallback = null;
            Module.currentLogCallback = null;
            Module.currentParseCallback = null;
            var arguments_ = [];
            var thisProgram = "./this.program";
            var quit_ = /* @__PURE__ */ __name((status, toThrow) => {
              throw toThrow;
            }, "quit_");
            if (typeof __filename != "undefined") {
              _scriptName = __filename;
            } else if (ENVIRONMENT_IS_WORKER) {
              _scriptName = self.location.href;
            }
            var scriptDirectory = "";
            function locateFile(path2) {
              if (Module["locateFile"]) {
                return Module["locateFile"](path2, scriptDirectory);
              }
              return scriptDirectory + path2;
            }
            __name(locateFile, "locateFile");
            var readAsync, readBinary;
            if (ENVIRONMENT_IS_NODE) {
              var fs = require("fs");
              scriptDirectory = __dirname + "/";
              readBinary = /* @__PURE__ */ __name((filename) => {
                filename = isFileURI(filename) ? new URL(filename) : filename;
                var ret = fs.readFileSync(filename);
                return ret;
              }, "readBinary");
              readAsync = /* @__PURE__ */ __name(async (filename, binary2 = true) => {
                filename = isFileURI(filename) ? new URL(filename) : filename;
                var ret = fs.readFileSync(filename, binary2 ? void 0 : "utf8");
                return ret;
              }, "readAsync");
              if (process.argv.length > 1) {
                thisProgram = process.argv[1].replace(/\\/g, "/");
              }
              arguments_ = process.argv.slice(2);
              quit_ = /* @__PURE__ */ __name((status, toThrow) => {
                process.exitCode = status;
                throw toThrow;
              }, "quit_");
            } else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
              try {
                scriptDirectory = new URL(".", _scriptName).href;
              } catch {
              }
              {
                if (ENVIRONMENT_IS_WORKER) {
                  readBinary = /* @__PURE__ */ __name((url) => {
                    var xhr = new XMLHttpRequest();
                    xhr.open("GET", url, false);
                    xhr.responseType = "arraybuffer";
                    xhr.send(null);
                    return new Uint8Array(
                      /** @type{!ArrayBuffer} */
                      xhr.response
                    );
                  }, "readBinary");
                }
                readAsync = /* @__PURE__ */ __name(async (url) => {
                  if (isFileURI(url)) {
                    return new Promise((resolve, reject) => {
                      var xhr = new XMLHttpRequest();
                      xhr.open("GET", url, true);
                      xhr.responseType = "arraybuffer";
                      xhr.onload = () => {
                        if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
                          resolve(xhr.response);
                          return;
                        }
                        reject(xhr.status);
                      };
                      xhr.onerror = reject;
                      xhr.send(null);
                    });
                  }
                  var response = await fetch(url, {
                    credentials: "same-origin"
                  });
                  if (response.ok) {
                    return response.arrayBuffer();
                  }
                  throw new Error(response.status + " : " + response.url);
                }, "readAsync");
              }
            } else {
            }
            var out = console.log.bind(console);
            var err = console.error.bind(console);
            var dynamicLibraries = [];
            var wasmBinary;
            var ABORT = false;
            var EXITSTATUS;
            var isFileURI = /* @__PURE__ */ __name((filename) => filename.startsWith("file://"), "isFileURI");
            var readyPromiseResolve, readyPromiseReject;
            var wasmMemory;
            var HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
            var HEAP64, HEAPU64;
            var HEAP_DATA_VIEW;
            var runtimeInitialized = false;
            function updateMemoryViews() {
              var b = wasmMemory.buffer;
              Module["HEAP8"] = HEAP8 = new Int8Array(b);
              Module["HEAP16"] = HEAP16 = new Int16Array(b);
              Module["HEAPU8"] = HEAPU8 = new Uint8Array(b);
              Module["HEAPU16"] = HEAPU16 = new Uint16Array(b);
              Module["HEAP32"] = HEAP32 = new Int32Array(b);
              Module["HEAPU32"] = HEAPU32 = new Uint32Array(b);
              Module["HEAPF32"] = HEAPF32 = new Float32Array(b);
              Module["HEAPF64"] = HEAPF64 = new Float64Array(b);
              Module["HEAP64"] = HEAP64 = new BigInt64Array(b);
              Module["HEAPU64"] = HEAPU64 = new BigUint64Array(b);
              Module["HEAP_DATA_VIEW"] = HEAP_DATA_VIEW = new DataView(b);
              LE_HEAP_UPDATE();
            }
            __name(updateMemoryViews, "updateMemoryViews");
            function initMemory() {
              if (Module["wasmMemory"]) {
                wasmMemory = Module["wasmMemory"];
              } else {
                var INITIAL_MEMORY = Module["INITIAL_MEMORY"] || 33554432;
                wasmMemory = new WebAssembly.Memory({
                  "initial": INITIAL_MEMORY / 65536,
                  // In theory we should not need to emit the maximum if we want "unlimited"
                  // or 4GB of memory, but VMs error on that atm, see
                  // https://github.com/emscripten-core/emscripten/issues/14130
                  // And in the pthreads case we definitely need to emit a maximum. So
                  // always emit one.
                  "maximum": 32768
                });
              }
              updateMemoryViews();
            }
            __name(initMemory, "initMemory");
            var __RELOC_FUNCS__ = [];
            function preRun() {
              if (Module["preRun"]) {
                if (typeof Module["preRun"] == "function") Module["preRun"] = [Module["preRun"]];
                while (Module["preRun"].length) {
                  addOnPreRun(Module["preRun"].shift());
                }
              }
              callRuntimeCallbacks(onPreRuns);
            }
            __name(preRun, "preRun");
            function initRuntime() {
              runtimeInitialized = true;
              callRuntimeCallbacks(__RELOC_FUNCS__);
              wasmExports["__wasm_call_ctors"]();
              callRuntimeCallbacks(onPostCtors);
            }
            __name(initRuntime, "initRuntime");
            function preMain() {
            }
            __name(preMain, "preMain");
            function postRun() {
              if (Module["postRun"]) {
                if (typeof Module["postRun"] == "function") Module["postRun"] = [Module["postRun"]];
                while (Module["postRun"].length) {
                  addOnPostRun(Module["postRun"].shift());
                }
              }
              callRuntimeCallbacks(onPostRuns);
            }
            __name(postRun, "postRun");
            function abort(what) {
              Module["onAbort"]?.(what);
              what = "Aborted(" + what + ")";
              err(what);
              ABORT = true;
              what += ". Build with -sASSERTIONS for more info.";
              var e = new WebAssembly.RuntimeError(what);
              readyPromiseReject?.(e);
              throw e;
            }
            __name(abort, "abort");
            var wasmBinaryFile;
            function findWasmBinary() {
              return locateFile("web-tree-sitter.wasm");
            }
            __name(findWasmBinary, "findWasmBinary");
            function getBinarySync(file) {
              if (file == wasmBinaryFile && wasmBinary) {
                return new Uint8Array(wasmBinary);
              }
              if (readBinary) {
                return readBinary(file);
              }
              throw "both async and sync fetching of the wasm failed";
            }
            __name(getBinarySync, "getBinarySync");
            async function getWasmBinary(binaryFile) {
              if (!wasmBinary) {
                try {
                  var response = await readAsync(binaryFile);
                  return new Uint8Array(response);
                } catch {
                }
              }
              return getBinarySync(binaryFile);
            }
            __name(getWasmBinary, "getWasmBinary");
            async function instantiateArrayBuffer(binaryFile, imports) {
              try {
                var binary2 = await getWasmBinary(binaryFile);
                var instance2 = await WebAssembly.instantiate(binary2, imports);
                return instance2;
              } catch (reason) {
                err(`failed to asynchronously prepare wasm: ${reason}`);
                abort(reason);
              }
            }
            __name(instantiateArrayBuffer, "instantiateArrayBuffer");
            async function instantiateAsync(binary2, binaryFile, imports) {
              if (!binary2 && !isFileURI(binaryFile) && !ENVIRONMENT_IS_NODE) {
                try {
                  var response = fetch(binaryFile, {
                    credentials: "same-origin"
                  });
                  var instantiationResult = await WebAssembly.instantiateStreaming(response, imports);
                  return instantiationResult;
                } catch (reason) {
                  err(`wasm streaming compile failed: ${reason}`);
                  err("falling back to ArrayBuffer instantiation");
                }
              }
              return instantiateArrayBuffer(binaryFile, imports);
            }
            __name(instantiateAsync, "instantiateAsync");
            function getWasmImports() {
              return {
                "env": wasmImports,
                "wasi_snapshot_preview1": wasmImports,
                "GOT.mem": new Proxy(wasmImports, GOTHandler),
                "GOT.func": new Proxy(wasmImports, GOTHandler)
              };
            }
            __name(getWasmImports, "getWasmImports");
            async function createWasm() {
              function receiveInstance(instance2, module2) {
                wasmExports = instance2.exports;
                wasmExports = relocateExports(wasmExports, 1024);
                var metadata2 = getDylinkMetadata(module2);
                if (metadata2.neededDynlibs) {
                  dynamicLibraries = metadata2.neededDynlibs.concat(dynamicLibraries);
                }
                mergeLibSymbols(wasmExports, "main");
                LDSO.init();
                loadDylibs();
                __RELOC_FUNCS__.push(wasmExports["__wasm_apply_data_relocs"]);
                assignWasmExports(wasmExports);
                return wasmExports;
              }
              __name(receiveInstance, "receiveInstance");
              function receiveInstantiationResult(result2) {
                return receiveInstance(result2["instance"], result2["module"]);
              }
              __name(receiveInstantiationResult, "receiveInstantiationResult");
              var info2 = getWasmImports();
              if (Module["instantiateWasm"]) {
                return new Promise((resolve, reject) => {
                  Module["instantiateWasm"](info2, (mod, inst) => {
                    resolve(receiveInstance(mod, inst));
                  });
                });
              }
              wasmBinaryFile ??= findWasmBinary();
              var result = await instantiateAsync(wasmBinary, wasmBinaryFile, info2);
              var exports2 = receiveInstantiationResult(result);
              return exports2;
            }
            __name(createWasm, "createWasm");
            class ExitStatus {
              static {
                __name(this, "ExitStatus");
              }
              name = "ExitStatus";
              constructor(status) {
                this.message = `Program terminated with exit(${status})`;
                this.status = status;
              }
            }
            var GOT = {};
            var currentModuleWeakSymbols = /* @__PURE__ */ new Set([]);
            var GOTHandler = {
              get(obj, symName) {
                var rtn = GOT[symName];
                if (!rtn) {
                  rtn = GOT[symName] = new WebAssembly.Global({
                    "value": "i32",
                    "mutable": true
                  });
                }
                if (!currentModuleWeakSymbols.has(symName)) {
                  rtn.required = true;
                }
                return rtn;
              }
            };
            var LE_ATOMICS_NATIVE_BYTE_ORDER = [];
            var LE_HEAP_LOAD_F32 = /* @__PURE__ */ __name((byteOffset) => HEAP_DATA_VIEW.getFloat32(byteOffset, true), "LE_HEAP_LOAD_F32");
            var LE_HEAP_LOAD_F64 = /* @__PURE__ */ __name((byteOffset) => HEAP_DATA_VIEW.getFloat64(byteOffset, true), "LE_HEAP_LOAD_F64");
            var LE_HEAP_LOAD_I16 = /* @__PURE__ */ __name((byteOffset) => HEAP_DATA_VIEW.getInt16(byteOffset, true), "LE_HEAP_LOAD_I16");
            var LE_HEAP_LOAD_I32 = /* @__PURE__ */ __name((byteOffset) => HEAP_DATA_VIEW.getInt32(byteOffset, true), "LE_HEAP_LOAD_I32");
            var LE_HEAP_LOAD_I64 = /* @__PURE__ */ __name((byteOffset) => HEAP_DATA_VIEW.getBigInt64(byteOffset, true), "LE_HEAP_LOAD_I64");
            var LE_HEAP_LOAD_U32 = /* @__PURE__ */ __name((byteOffset) => HEAP_DATA_VIEW.getUint32(byteOffset, true), "LE_HEAP_LOAD_U32");
            var LE_HEAP_STORE_F32 = /* @__PURE__ */ __name((byteOffset, value) => HEAP_DATA_VIEW.setFloat32(byteOffset, value, true), "LE_HEAP_STORE_F32");
            var LE_HEAP_STORE_F64 = /* @__PURE__ */ __name((byteOffset, value) => HEAP_DATA_VIEW.setFloat64(byteOffset, value, true), "LE_HEAP_STORE_F64");
            var LE_HEAP_STORE_I16 = /* @__PURE__ */ __name((byteOffset, value) => HEAP_DATA_VIEW.setInt16(byteOffset, value, true), "LE_HEAP_STORE_I16");
            var LE_HEAP_STORE_I32 = /* @__PURE__ */ __name((byteOffset, value) => HEAP_DATA_VIEW.setInt32(byteOffset, value, true), "LE_HEAP_STORE_I32");
            var LE_HEAP_STORE_I64 = /* @__PURE__ */ __name((byteOffset, value) => HEAP_DATA_VIEW.setBigInt64(byteOffset, value, true), "LE_HEAP_STORE_I64");
            var LE_HEAP_STORE_U32 = /* @__PURE__ */ __name((byteOffset, value) => HEAP_DATA_VIEW.setUint32(byteOffset, value, true), "LE_HEAP_STORE_U32");
            var callRuntimeCallbacks = /* @__PURE__ */ __name((callbacks) => {
              while (callbacks.length > 0) {
                callbacks.shift()(Module);
              }
            }, "callRuntimeCallbacks");
            var onPostRuns = [];
            var addOnPostRun = /* @__PURE__ */ __name((cb) => onPostRuns.push(cb), "addOnPostRun");
            var onPreRuns = [];
            var addOnPreRun = /* @__PURE__ */ __name((cb) => onPreRuns.push(cb), "addOnPreRun");
            var UTF8Decoder = typeof TextDecoder != "undefined" ? new TextDecoder() : void 0;
            var findStringEnd = /* @__PURE__ */ __name((heapOrArray, idx, maxBytesToRead, ignoreNul) => {
              var maxIdx = idx + maxBytesToRead;
              if (ignoreNul) return maxIdx;
              while (heapOrArray[idx] && !(idx >= maxIdx)) ++idx;
              return idx;
            }, "findStringEnd");
            var UTF8ArrayToString = /* @__PURE__ */ __name((heapOrArray, idx = 0, maxBytesToRead, ignoreNul) => {
              var endPtr = findStringEnd(heapOrArray, idx, maxBytesToRead, ignoreNul);
              if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
                return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
              }
              var str = "";
              while (idx < endPtr) {
                var u0 = heapOrArray[idx++];
                if (!(u0 & 128)) {
                  str += String.fromCharCode(u0);
                  continue;
                }
                var u1 = heapOrArray[idx++] & 63;
                if ((u0 & 224) == 192) {
                  str += String.fromCharCode((u0 & 31) << 6 | u1);
                  continue;
                }
                var u2 = heapOrArray[idx++] & 63;
                if ((u0 & 240) == 224) {
                  u0 = (u0 & 15) << 12 | u1 << 6 | u2;
                } else {
                  u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heapOrArray[idx++] & 63;
                }
                if (u0 < 65536) {
                  str += String.fromCharCode(u0);
                } else {
                  var ch = u0 - 65536;
                  str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
                }
              }
              return str;
            }, "UTF8ArrayToString");
            var getDylinkMetadata = /* @__PURE__ */ __name((binary2) => {
              var offset = 0;
              var end = 0;
              function getU8() {
                return binary2[offset++];
              }
              __name(getU8, "getU8");
              function getLEB() {
                var ret = 0;
                var mul = 1;
                while (1) {
                  var byte = binary2[offset++];
                  ret += (byte & 127) * mul;
                  mul *= 128;
                  if (!(byte & 128)) break;
                }
                return ret;
              }
              __name(getLEB, "getLEB");
              function getString() {
                var len = getLEB();
                offset += len;
                return UTF8ArrayToString(binary2, offset - len, len);
              }
              __name(getString, "getString");
              function getStringList() {
                var count2 = getLEB();
                var rtn = [];
                while (count2--) rtn.push(getString());
                return rtn;
              }
              __name(getStringList, "getStringList");
              function failIf(condition, message) {
                if (condition) throw new Error(message);
              }
              __name(failIf, "failIf");
              if (binary2 instanceof WebAssembly.Module) {
                var dylinkSection = WebAssembly.Module.customSections(binary2, "dylink.0");
                failIf(dylinkSection.length === 0, "need dylink section");
                binary2 = new Uint8Array(dylinkSection[0]);
                end = binary2.length;
              } else {
                var int32View = new Uint32Array(new Uint8Array(binary2.subarray(0, 24)).buffer);
                var magicNumberFound = int32View[0] == 1836278016 || int32View[0] == 6386541;
                failIf(!magicNumberFound, "need to see wasm magic number");
                failIf(binary2[8] !== 0, "need the dylink section to be first");
                offset = 9;
                var section_size = getLEB();
                end = offset + section_size;
                var name2 = getString();
                failIf(name2 !== "dylink.0");
              }
              var customSection = {
                neededDynlibs: [],
                tlsExports: /* @__PURE__ */ new Set(),
                weakImports: /* @__PURE__ */ new Set(),
                runtimePaths: []
              };
              var WASM_DYLINK_MEM_INFO = 1;
              var WASM_DYLINK_NEEDED = 2;
              var WASM_DYLINK_EXPORT_INFO = 3;
              var WASM_DYLINK_IMPORT_INFO = 4;
              var WASM_DYLINK_RUNTIME_PATH = 5;
              var WASM_SYMBOL_TLS = 256;
              var WASM_SYMBOL_BINDING_MASK = 3;
              var WASM_SYMBOL_BINDING_WEAK = 1;
              while (offset < end) {
                var subsectionType = getU8();
                var subsectionSize = getLEB();
                if (subsectionType === WASM_DYLINK_MEM_INFO) {
                  customSection.memorySize = getLEB();
                  customSection.memoryAlign = getLEB();
                  customSection.tableSize = getLEB();
                  customSection.tableAlign = getLEB();
                } else if (subsectionType === WASM_DYLINK_NEEDED) {
                  customSection.neededDynlibs = getStringList();
                } else if (subsectionType === WASM_DYLINK_EXPORT_INFO) {
                  var count = getLEB();
                  while (count--) {
                    var symname = getString();
                    var flags2 = getLEB();
                    if (flags2 & WASM_SYMBOL_TLS) {
                      customSection.tlsExports.add(symname);
                    }
                  }
                } else if (subsectionType === WASM_DYLINK_IMPORT_INFO) {
                  var count = getLEB();
                  while (count--) {
                    var modname = getString();
                    var symname = getString();
                    var flags2 = getLEB();
                    if ((flags2 & WASM_SYMBOL_BINDING_MASK) == WASM_SYMBOL_BINDING_WEAK) {
                      customSection.weakImports.add(symname);
                    }
                  }
                } else if (subsectionType === WASM_DYLINK_RUNTIME_PATH) {
                  customSection.runtimePaths = getStringList();
                } else {
                  offset += subsectionSize;
                }
              }
              return customSection;
            }, "getDylinkMetadata");
            function getValue(ptr, type = "i8") {
              if (type.endsWith("*")) type = "*";
              switch (type) {
                case "i1":
                  return HEAP8[ptr];
                case "i8":
                  return HEAP8[ptr];
                case "i16":
                  return LE_HEAP_LOAD_I16((ptr >> 1) * 2);
                case "i32":
                  return LE_HEAP_LOAD_I32((ptr >> 2) * 4);
                case "i64":
                  return LE_HEAP_LOAD_I64((ptr >> 3) * 8);
                case "float":
                  return LE_HEAP_LOAD_F32((ptr >> 2) * 4);
                case "double":
                  return LE_HEAP_LOAD_F64((ptr >> 3) * 8);
                case "*":
                  return LE_HEAP_LOAD_U32((ptr >> 2) * 4);
                default:
                  abort(`invalid type for getValue: ${type}`);
              }
            }
            __name(getValue, "getValue");
            var newDSO = /* @__PURE__ */ __name((name2, handle2, syms) => {
              var dso = {
                refcount: Infinity,
                name: name2,
                exports: syms,
                global: true
              };
              LDSO.loadedLibsByName[name2] = dso;
              if (handle2 != void 0) {
                LDSO.loadedLibsByHandle[handle2] = dso;
              }
              return dso;
            }, "newDSO");
            var LDSO = {
              loadedLibsByName: {},
              loadedLibsByHandle: {},
              init() {
                newDSO("__main__", 0, wasmImports);
              }
            };
            var ___heap_base = 82240;
            var alignMemory = /* @__PURE__ */ __name((size, alignment) => Math.ceil(size / alignment) * alignment, "alignMemory");
            var getMemory = /* @__PURE__ */ __name((size) => {
              if (runtimeInitialized) {
                return _calloc(size, 1);
              }
              var ret = ___heap_base;
              var end = ret + alignMemory(size, 16);
              ___heap_base = end;
              GOT["__heap_base"].value = end;
              return ret;
            }, "getMemory");
            var isInternalSym = /* @__PURE__ */ __name((symName) => ["__cpp_exception", "__c_longjmp", "__wasm_apply_data_relocs", "__dso_handle", "__tls_size", "__tls_align", "__set_stack_limits", "_emscripten_tls_init", "__wasm_init_tls", "__wasm_call_ctors", "__start_em_asm", "__stop_em_asm", "__start_em_js", "__stop_em_js"].includes(symName) || symName.startsWith("__em_js__"), "isInternalSym");
            var uleb128EncodeWithLen = /* @__PURE__ */ __name((arr) => {
              const n = arr.length;
              return [n % 128 | 128, n >> 7, ...arr];
            }, "uleb128EncodeWithLen");
            var wasmTypeCodes = {
              "i": 127,
              // i32
              "p": 127,
              // i32
              "j": 126,
              // i64
              "f": 125,
              // f32
              "d": 124,
              // f64
              "e": 111
            };
            var generateTypePack = /* @__PURE__ */ __name((types) => uleb128EncodeWithLen(Array.from(types, (type) => {
              var code = wasmTypeCodes[type];
              return code;
            })), "generateTypePack");
            var convertJsFunctionToWasm = /* @__PURE__ */ __name((func2, sig) => {
              var bytes = Uint8Array.of(
                0,
                97,
                115,
                109,
                // magic ("\0asm")
                1,
                0,
                0,
                0,
                // version: 1
                1,
                ...uleb128EncodeWithLen([
                  1,
                  // count: 1
                  96,
                  // param types
                  ...generateTypePack(sig.slice(1)),
                  // return types (for now only supporting [] if `void` and single [T] otherwise)
                  ...generateTypePack(sig[0] === "v" ? "" : sig[0])
                ]),
                // The rest of the module is static
                2,
                7,
                // import section
                // (import "e" "f" (func 0 (type 0)))
                1,
                1,
                101,
                1,
                102,
                0,
                0,
                7,
                5,
                // export section
                // (export "f" (func 0 (type 0)))
                1,
                1,
                102,
                0,
                0
              );
              var module2 = new WebAssembly.Module(bytes);
              var instance2 = new WebAssembly.Instance(module2, {
                "e": {
                  "f": func2
                }
              });
              var wrappedFunc = instance2.exports["f"];
              return wrappedFunc;
            }, "convertJsFunctionToWasm");
            var wasmTableMirror = [];
            var wasmTable = new WebAssembly.Table({
              "initial": 31,
              "element": "anyfunc"
            });
            var getWasmTableEntry = /* @__PURE__ */ __name((funcPtr) => {
              var func2 = wasmTableMirror[funcPtr];
              if (!func2) {
                wasmTableMirror[funcPtr] = func2 = wasmTable.get(funcPtr);
              }
              return func2;
            }, "getWasmTableEntry");
            var updateTableMap = /* @__PURE__ */ __name((offset, count) => {
              if (functionsInTableMap) {
                for (var i2 = offset; i2 < offset + count; i2++) {
                  var item = getWasmTableEntry(i2);
                  if (item) {
                    functionsInTableMap.set(item, i2);
                  }
                }
              }
            }, "updateTableMap");
            var functionsInTableMap;
            var getFunctionAddress = /* @__PURE__ */ __name((func2) => {
              if (!functionsInTableMap) {
                functionsInTableMap = /* @__PURE__ */ new WeakMap();
                updateTableMap(0, wasmTable.length);
              }
              return functionsInTableMap.get(func2) || 0;
            }, "getFunctionAddress");
            var freeTableIndexes = [];
            var getEmptyTableSlot = /* @__PURE__ */ __name(() => {
              if (freeTableIndexes.length) {
                return freeTableIndexes.pop();
              }
              return wasmTable["grow"](1);
            }, "getEmptyTableSlot");
            var setWasmTableEntry = /* @__PURE__ */ __name((idx, func2) => {
              wasmTable.set(idx, func2);
              wasmTableMirror[idx] = wasmTable.get(idx);
            }, "setWasmTableEntry");
            var addFunction = /* @__PURE__ */ __name((func2, sig) => {
              var rtn = getFunctionAddress(func2);
              if (rtn) {
                return rtn;
              }
              var ret = getEmptyTableSlot();
              try {
                setWasmTableEntry(ret, func2);
              } catch (err2) {
                if (!(err2 instanceof TypeError)) {
                  throw err2;
                }
                var wrapped = convertJsFunctionToWasm(func2, sig);
                setWasmTableEntry(ret, wrapped);
              }
              functionsInTableMap.set(func2, ret);
              return ret;
            }, "addFunction");
            var updateGOT = /* @__PURE__ */ __name((exports2, replace) => {
              for (var symName in exports2) {
                if (isInternalSym(symName)) {
                  continue;
                }
                var value = exports2[symName];
                GOT[symName] ||= new WebAssembly.Global({
                  "value": "i32",
                  "mutable": true
                });
                if (replace || GOT[symName].value == 0) {
                  if (typeof value == "function") {
                    GOT[symName].value = addFunction(value);
                  } else if (typeof value == "number") {
                    GOT[symName].value = value;
                  } else {
                    err(`unhandled export type for '${symName}': ${typeof value}`);
                  }
                }
              }
            }, "updateGOT");
            var relocateExports = /* @__PURE__ */ __name((exports2, memoryBase2, replace) => {
              var relocated = {};
              for (var e in exports2) {
                var value = exports2[e];
                if (typeof value == "object") {
                  value = value.value;
                }
                if (typeof value == "number") {
                  value += memoryBase2;
                }
                relocated[e] = value;
              }
              updateGOT(relocated, replace);
              return relocated;
            }, "relocateExports");
            var isSymbolDefined = /* @__PURE__ */ __name((symName) => {
              var existing = wasmImports[symName];
              if (!existing || existing.stub) {
                return false;
              }
              return true;
            }, "isSymbolDefined");
            var dynCall = /* @__PURE__ */ __name((sig, ptr, args2 = [], promising = false) => {
              var func2 = getWasmTableEntry(ptr);
              var rtn = func2(...args2);
              function convert(rtn2) {
                return rtn2;
              }
              __name(convert, "convert");
              return convert(rtn);
            }, "dynCall");
            var stackSave = /* @__PURE__ */ __name(() => _emscripten_stack_get_current(), "stackSave");
            var stackRestore = /* @__PURE__ */ __name((val) => __emscripten_stack_restore(val), "stackRestore");
            var createInvokeFunction = /* @__PURE__ */ __name((sig) => (ptr, ...args2) => {
              var sp = stackSave();
              try {
                return dynCall(sig, ptr, args2);
              } catch (e) {
                stackRestore(sp);
                if (e !== e + 0) throw e;
                _setThrew(1, 0);
                if (sig[0] == "j") return 0n;
              }
            }, "createInvokeFunction");
            var resolveGlobalSymbol = /* @__PURE__ */ __name((symName, direct = false) => {
              var sym;
              if (isSymbolDefined(symName)) {
                sym = wasmImports[symName];
              } else if (symName.startsWith("invoke_")) {
                sym = wasmImports[symName] = createInvokeFunction(symName.split("_")[1]);
              }
              return {
                sym,
                name: symName
              };
            }, "resolveGlobalSymbol");
            var onPostCtors = [];
            var addOnPostCtor = /* @__PURE__ */ __name((cb) => onPostCtors.push(cb), "addOnPostCtor");
            var UTF8ToString = /* @__PURE__ */ __name((ptr, maxBytesToRead, ignoreNul) => ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead, ignoreNul) : "", "UTF8ToString");
            var loadWebAssemblyModule = /* @__PURE__ */ __name((binary, flags, libName, localScope, handle) => {
              var metadata = getDylinkMetadata(binary);
              function loadModule() {
                var memAlign = Math.pow(2, metadata.memoryAlign);
                var memoryBase = metadata.memorySize ? alignMemory(getMemory(metadata.memorySize + memAlign), memAlign) : 0;
                var tableBase = metadata.tableSize ? wasmTable.length : 0;
                if (handle) {
                  HEAP8[handle + 8] = 1;
                  LE_HEAP_STORE_U32((handle + 12 >> 2) * 4, memoryBase);
                  LE_HEAP_STORE_I32((handle + 16 >> 2) * 4, metadata.memorySize);
                  LE_HEAP_STORE_U32((handle + 20 >> 2) * 4, tableBase);
                  LE_HEAP_STORE_I32((handle + 24 >> 2) * 4, metadata.tableSize);
                }
                if (metadata.tableSize) {
                  wasmTable.grow(metadata.tableSize);
                }
                var moduleExports;
                function resolveSymbol(sym) {
                  var resolved = resolveGlobalSymbol(sym).sym;
                  if (!resolved && localScope) {
                    resolved = localScope[sym];
                  }
                  if (!resolved) {
                    resolved = moduleExports[sym];
                  }
                  return resolved;
                }
                __name(resolveSymbol, "resolveSymbol");
                var proxyHandler = {
                  get(stubs, prop) {
                    switch (prop) {
                      case "__memory_base":
                        return memoryBase;
                      case "__table_base":
                        return tableBase;
                    }
                    if (prop in wasmImports && !wasmImports[prop].stub) {
                      var res = wasmImports[prop];
                      return res;
                    }
                    if (!(prop in stubs)) {
                      var resolved;
                      stubs[prop] = (...args2) => {
                        resolved ||= resolveSymbol(prop);
                        return resolved(...args2);
                      };
                    }
                    return stubs[prop];
                  }
                };
                var proxy = new Proxy({}, proxyHandler);
                currentModuleWeakSymbols = metadata.weakImports;
                var info = {
                  "GOT.mem": new Proxy({}, GOTHandler),
                  "GOT.func": new Proxy({}, GOTHandler),
                  "env": proxy,
                  "wasi_snapshot_preview1": proxy
                };
                function postInstantiation(module, instance) {
                  updateTableMap(tableBase, metadata.tableSize);
                  moduleExports = relocateExports(instance.exports, memoryBase);
                  if (!flags.allowUndefined) {
                    reportUndefinedSymbols();
                  }
                  function addEmAsm(addr, body) {
                    var args = [];
                    var arity = 0;
                    for (; arity < 16; arity++) {
                      if (body.indexOf("$" + arity) != -1) {
                        args.push("$" + arity);
                      } else {
                        break;
                      }
                    }
                    args = args.join(",");
                    var func = `(${args}) => { ${body} };`;
                    ASM_CONSTS[start] = eval(func);
                  }
                  __name(addEmAsm, "addEmAsm");
                  if ("__start_em_asm" in moduleExports) {
                    var start = moduleExports["__start_em_asm"];
                    var stop = moduleExports["__stop_em_asm"];
                    while (start < stop) {
                      var jsString = UTF8ToString(start);
                      addEmAsm(start, jsString);
                      start = HEAPU8.indexOf(0, start) + 1;
                    }
                  }
                  function addEmJs(name, cSig, body) {
                    var jsArgs = [];
                    cSig = cSig.slice(1, -1);
                    if (cSig != "void") {
                      cSig = cSig.split(",");
                      for (var i in cSig) {
                        var jsArg = cSig[i].split(" ").pop();
                        jsArgs.push(jsArg.replace("*", ""));
                      }
                    }
                    var func = `(${jsArgs}) => ${body};`;
                    moduleExports[name] = eval(func);
                  }
                  __name(addEmJs, "addEmJs");
                  for (var name in moduleExports) {
                    if (name.startsWith("__em_js__")) {
                      var start = moduleExports[name];
                      var jsString = UTF8ToString(start);
                      var parts = jsString.split("<::>");
                      addEmJs(name.replace("__em_js__", ""), parts[0], parts[1]);
                      delete moduleExports[name];
                    }
                  }
                  var applyRelocs = moduleExports["__wasm_apply_data_relocs"];
                  if (applyRelocs) {
                    if (runtimeInitialized) {
                      applyRelocs();
                    } else {
                      __RELOC_FUNCS__.push(applyRelocs);
                    }
                  }
                  var init = moduleExports["__wasm_call_ctors"];
                  if (init) {
                    if (runtimeInitialized) {
                      init();
                    } else {
                      addOnPostCtor(init);
                    }
                  }
                  return moduleExports;
                }
                __name(postInstantiation, "postInstantiation");
                if (flags.loadAsync) {
                  return (async () => {
                    var instance2;
                    if (binary instanceof WebAssembly.Module) {
                      instance2 = new WebAssembly.Instance(binary, info);
                    } else {
                      ({ module: binary, instance: instance2 } = await WebAssembly.instantiate(binary, info));
                    }
                    return postInstantiation(binary, instance2);
                  })();
                }
                var module = binary instanceof WebAssembly.Module ? binary : new WebAssembly.Module(binary);
                var instance = new WebAssembly.Instance(module, info);
                return postInstantiation(module, instance);
              }
              __name(loadModule, "loadModule");
              flags = {
                ...flags,
                rpath: {
                  parentLibPath: libName,
                  paths: metadata.runtimePaths
                }
              };
              if (flags.loadAsync) {
                return metadata.neededDynlibs.reduce((chain, dynNeeded) => chain.then(() => loadDynamicLibrary(dynNeeded, flags, localScope)), Promise.resolve()).then(loadModule);
              }
              metadata.neededDynlibs.forEach((needed) => loadDynamicLibrary(needed, flags, localScope));
              return loadModule();
            }, "loadWebAssemblyModule");
            var mergeLibSymbols = /* @__PURE__ */ __name((exports2, libName2) => {
              for (var [sym, exp] of Object.entries(exports2)) {
                const setImport = /* @__PURE__ */ __name((target) => {
                  if (!isSymbolDefined(target)) {
                    wasmImports[target] = exp;
                  }
                }, "setImport");
                setImport(sym);
                const main_alias = "__main_argc_argv";
                if (sym == "main") {
                  setImport(main_alias);
                }
                if (sym == main_alias) {
                  setImport("main");
                }
              }
            }, "mergeLibSymbols");
            var asyncLoad = /* @__PURE__ */ __name(async (url) => {
              var arrayBuffer = await readAsync(url);
              return new Uint8Array(arrayBuffer);
            }, "asyncLoad");
            function loadDynamicLibrary(libName2, flags2 = {
              global: true,
              nodelete: true
            }, localScope2, handle2) {
              var dso = LDSO.loadedLibsByName[libName2];
              if (dso) {
                if (!flags2.global) {
                  if (localScope2) {
                    Object.assign(localScope2, dso.exports);
                  }
                } else if (!dso.global) {
                  dso.global = true;
                  mergeLibSymbols(dso.exports, libName2);
                }
                if (flags2.nodelete && dso.refcount !== Infinity) {
                  dso.refcount = Infinity;
                }
                dso.refcount++;
                if (handle2) {
                  LDSO.loadedLibsByHandle[handle2] = dso;
                }
                return flags2.loadAsync ? Promise.resolve(true) : true;
              }
              dso = newDSO(libName2, handle2, "loading");
              dso.refcount = flags2.nodelete ? Infinity : 1;
              dso.global = flags2.global;
              function loadLibData() {
                if (handle2) {
                  var data = LE_HEAP_LOAD_U32((handle2 + 28 >> 2) * 4);
                  var dataSize = LE_HEAP_LOAD_U32((handle2 + 32 >> 2) * 4);
                  if (data && dataSize) {
                    var libData = HEAP8.slice(data, data + dataSize);
                    return flags2.loadAsync ? Promise.resolve(libData) : libData;
                  }
                }
                var libFile = locateFile(libName2);
                if (flags2.loadAsync) {
                  return asyncLoad(libFile);
                }
                if (!readBinary) {
                  throw new Error(`${libFile}: file not found, and synchronous loading of external files is not available`);
                }
                return readBinary(libFile);
              }
              __name(loadLibData, "loadLibData");
              function getExports() {
                if (flags2.loadAsync) {
                  return loadLibData().then((libData) => loadWebAssemblyModule(libData, flags2, libName2, localScope2, handle2));
                }
                return loadWebAssemblyModule(loadLibData(), flags2, libName2, localScope2, handle2);
              }
              __name(getExports, "getExports");
              function moduleLoaded(exports2) {
                if (dso.global) {
                  mergeLibSymbols(exports2, libName2);
                } else if (localScope2) {
                  Object.assign(localScope2, exports2);
                }
                dso.exports = exports2;
              }
              __name(moduleLoaded, "moduleLoaded");
              if (flags2.loadAsync) {
                return getExports().then((exports2) => {
                  moduleLoaded(exports2);
                  return true;
                });
              }
              moduleLoaded(getExports());
              return true;
            }
            __name(loadDynamicLibrary, "loadDynamicLibrary");
            var reportUndefinedSymbols = /* @__PURE__ */ __name(() => {
              for (var [symName, entry] of Object.entries(GOT)) {
                if (entry.value == 0) {
                  var value = resolveGlobalSymbol(symName, true).sym;
                  if (!value && !entry.required) {
                    continue;
                  }
                  if (typeof value == "function") {
                    entry.value = addFunction(value, value.sig);
                  } else if (typeof value == "number") {
                    entry.value = value;
                  } else {
                    throw new Error(`bad export type for '${symName}': ${typeof value}`);
                  }
                }
              }
            }, "reportUndefinedSymbols");
            var runDependencies = 0;
            var dependenciesFulfilled = null;
            var removeRunDependency = /* @__PURE__ */ __name((id) => {
              runDependencies--;
              Module["monitorRunDependencies"]?.(runDependencies);
              if (runDependencies == 0) {
                if (dependenciesFulfilled) {
                  var callback = dependenciesFulfilled;
                  dependenciesFulfilled = null;
                  callback();
                }
              }
            }, "removeRunDependency");
            var addRunDependency = /* @__PURE__ */ __name((id) => {
              runDependencies++;
              Module["monitorRunDependencies"]?.(runDependencies);
            }, "addRunDependency");
            var loadDylibs = /* @__PURE__ */ __name(async () => {
              if (!dynamicLibraries.length) {
                reportUndefinedSymbols();
                return;
              }
              addRunDependency("loadDylibs");
              for (var lib of dynamicLibraries) {
                await loadDynamicLibrary(lib, {
                  loadAsync: true,
                  global: true,
                  nodelete: true,
                  allowUndefined: true
                });
              }
              reportUndefinedSymbols();
              removeRunDependency("loadDylibs");
            }, "loadDylibs");
            var noExitRuntime = true;
            function setValue(ptr, value, type = "i8") {
              if (type.endsWith("*")) type = "*";
              switch (type) {
                case "i1":
                  HEAP8[ptr] = value;
                  break;
                case "i8":
                  HEAP8[ptr] = value;
                  break;
                case "i16":
                  LE_HEAP_STORE_I16((ptr >> 1) * 2, value);
                  break;
                case "i32":
                  LE_HEAP_STORE_I32((ptr >> 2) * 4, value);
                  break;
                case "i64":
                  LE_HEAP_STORE_I64((ptr >> 3) * 8, BigInt(value));
                  break;
                case "float":
                  LE_HEAP_STORE_F32((ptr >> 2) * 4, value);
                  break;
                case "double":
                  LE_HEAP_STORE_F64((ptr >> 3) * 8, value);
                  break;
                case "*":
                  LE_HEAP_STORE_U32((ptr >> 2) * 4, value);
                  break;
                default:
                  abort(`invalid type for setValue: ${type}`);
              }
            }
            __name(setValue, "setValue");
            var ___memory_base = new WebAssembly.Global({
              "value": "i32",
              "mutable": false
            }, 1024);
            var ___stack_high = 82240;
            var ___stack_low = 16704;
            var ___stack_pointer = new WebAssembly.Global({
              "value": "i32",
              "mutable": true
            }, 82240);
            var ___table_base = new WebAssembly.Global({
              "value": "i32",
              "mutable": false
            }, 1);
            var __abort_js = /* @__PURE__ */ __name(() => abort(""), "__abort_js");
            __abort_js.sig = "v";
            var getHeapMax = /* @__PURE__ */ __name(() => (
              // Stay one Wasm page short of 4GB: while e.g. Chrome is able to allocate
              // full 4GB Wasm memories, the size will wrap back to 0 bytes in Wasm side
              // for any code that deals with heap sizes, which would require special
              // casing all heap size related code to treat 0 specially.
              2147483648
            ), "getHeapMax");
            var growMemory = /* @__PURE__ */ __name((size) => {
              var oldHeapSize = wasmMemory.buffer.byteLength;
              var pages = (size - oldHeapSize + 65535) / 65536 | 0;
              try {
                wasmMemory.grow(pages);
                updateMemoryViews();
                return 1;
              } catch (e) {
              }
            }, "growMemory");
            var _emscripten_resize_heap = /* @__PURE__ */ __name((requestedSize) => {
              var oldSize = HEAPU8.length;
              requestedSize >>>= 0;
              var maxHeapSize = getHeapMax();
              if (requestedSize > maxHeapSize) {
                return false;
              }
              for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
                var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown);
                overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
                var newSize = Math.min(maxHeapSize, alignMemory(Math.max(requestedSize, overGrownHeapSize), 65536));
                var replacement = growMemory(newSize);
                if (replacement) {
                  return true;
                }
              }
              return false;
            }, "_emscripten_resize_heap");
            _emscripten_resize_heap.sig = "ip";
            var _fd_close = /* @__PURE__ */ __name((fd) => 52, "_fd_close");
            _fd_close.sig = "ii";
            var INT53_MAX = 9007199254740992;
            var INT53_MIN = -9007199254740992;
            var bigintToI53Checked = /* @__PURE__ */ __name((num) => num < INT53_MIN || num > INT53_MAX ? NaN : Number(num), "bigintToI53Checked");
            function _fd_seek(fd, offset, whence, newOffset) {
              offset = bigintToI53Checked(offset);
              return 70;
            }
            __name(_fd_seek, "_fd_seek");
            _fd_seek.sig = "iijip";
            var printCharBuffers = [null, [], []];
            var printChar = /* @__PURE__ */ __name((stream, curr) => {
              var buffer = printCharBuffers[stream];
              if (curr === 0 || curr === 10) {
                (stream === 1 ? out : err)(UTF8ArrayToString(buffer));
                buffer.length = 0;
              } else {
                buffer.push(curr);
              }
            }, "printChar");
            var _fd_write = /* @__PURE__ */ __name((fd, iov, iovcnt, pnum) => {
              var num = 0;
              for (var i2 = 0; i2 < iovcnt; i2++) {
                var ptr = LE_HEAP_LOAD_U32((iov >> 2) * 4);
                var len = LE_HEAP_LOAD_U32((iov + 4 >> 2) * 4);
                iov += 8;
                for (var j = 0; j < len; j++) {
                  printChar(fd, HEAPU8[ptr + j]);
                }
                num += len;
              }
              LE_HEAP_STORE_U32((pnum >> 2) * 4, num);
              return 0;
            }, "_fd_write");
            _fd_write.sig = "iippp";
            function _tree_sitter_log_callback(isLexMessage, messageAddress) {
              if (Module.currentLogCallback) {
                const message = UTF8ToString(messageAddress);
                Module.currentLogCallback(message, isLexMessage !== 0);
              }
            }
            __name(_tree_sitter_log_callback, "_tree_sitter_log_callback");
            function _tree_sitter_parse_callback(inputBufferAddress, index, row, column, lengthAddress) {
              const INPUT_BUFFER_SIZE = 10 * 1024;
              const string = Module.currentParseCallback(index, {
                row,
                column
              });
              if (typeof string === "string") {
                setValue(lengthAddress, string.length, "i32");
                stringToUTF16(string, inputBufferAddress, INPUT_BUFFER_SIZE);
              } else {
                setValue(lengthAddress, 0, "i32");
              }
            }
            __name(_tree_sitter_parse_callback, "_tree_sitter_parse_callback");
            function _tree_sitter_progress_callback(currentOffset, hasError) {
              if (Module.currentProgressCallback) {
                return Module.currentProgressCallback({
                  currentOffset,
                  hasError
                });
              }
              return false;
            }
            __name(_tree_sitter_progress_callback, "_tree_sitter_progress_callback");
            function _tree_sitter_query_progress_callback(currentOffset) {
              if (Module.currentQueryProgressCallback) {
                return Module.currentQueryProgressCallback({
                  currentOffset
                });
              }
              return false;
            }
            __name(_tree_sitter_query_progress_callback, "_tree_sitter_query_progress_callback");
            var runtimeKeepaliveCounter = 0;
            var keepRuntimeAlive = /* @__PURE__ */ __name(() => noExitRuntime || runtimeKeepaliveCounter > 0, "keepRuntimeAlive");
            var _proc_exit = /* @__PURE__ */ __name((code) => {
              EXITSTATUS = code;
              if (!keepRuntimeAlive()) {
                Module["onExit"]?.(code);
                ABORT = true;
              }
              quit_(code, new ExitStatus(code));
            }, "_proc_exit");
            _proc_exit.sig = "vi";
            var exitJS = /* @__PURE__ */ __name((status, implicit) => {
              EXITSTATUS = status;
              _proc_exit(status);
            }, "exitJS");
            var handleException = /* @__PURE__ */ __name((e) => {
              if (e instanceof ExitStatus || e == "unwind") {
                return EXITSTATUS;
              }
              quit_(1, e);
            }, "handleException");
            var lengthBytesUTF8 = /* @__PURE__ */ __name((str) => {
              var len = 0;
              for (var i2 = 0; i2 < str.length; ++i2) {
                var c = str.charCodeAt(i2);
                if (c <= 127) {
                  len++;
                } else if (c <= 2047) {
                  len += 2;
                } else if (c >= 55296 && c <= 57343) {
                  len += 4;
                  ++i2;
                } else {
                  len += 3;
                }
              }
              return len;
            }, "lengthBytesUTF8");
            var stringToUTF8Array = /* @__PURE__ */ __name((str, heap, outIdx, maxBytesToWrite) => {
              if (!(maxBytesToWrite > 0)) return 0;
              var startIdx = outIdx;
              var endIdx = outIdx + maxBytesToWrite - 1;
              for (var i2 = 0; i2 < str.length; ++i2) {
                var u = str.codePointAt(i2);
                if (u <= 127) {
                  if (outIdx >= endIdx) break;
                  heap[outIdx++] = u;
                } else if (u <= 2047) {
                  if (outIdx + 1 >= endIdx) break;
                  heap[outIdx++] = 192 | u >> 6;
                  heap[outIdx++] = 128 | u & 63;
                } else if (u <= 65535) {
                  if (outIdx + 2 >= endIdx) break;
                  heap[outIdx++] = 224 | u >> 12;
                  heap[outIdx++] = 128 | u >> 6 & 63;
                  heap[outIdx++] = 128 | u & 63;
                } else {
                  if (outIdx + 3 >= endIdx) break;
                  heap[outIdx++] = 240 | u >> 18;
                  heap[outIdx++] = 128 | u >> 12 & 63;
                  heap[outIdx++] = 128 | u >> 6 & 63;
                  heap[outIdx++] = 128 | u & 63;
                  i2++;
                }
              }
              heap[outIdx] = 0;
              return outIdx - startIdx;
            }, "stringToUTF8Array");
            var stringToUTF8 = /* @__PURE__ */ __name((str, outPtr, maxBytesToWrite) => stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite), "stringToUTF8");
            var stackAlloc = /* @__PURE__ */ __name((sz) => __emscripten_stack_alloc(sz), "stackAlloc");
            var stringToUTF8OnStack = /* @__PURE__ */ __name((str) => {
              var size = lengthBytesUTF8(str) + 1;
              var ret = stackAlloc(size);
              stringToUTF8(str, ret, size);
              return ret;
            }, "stringToUTF8OnStack");
            var AsciiToString = /* @__PURE__ */ __name((ptr) => {
              var str = "";
              while (1) {
                var ch = HEAPU8[ptr++];
                if (!ch) return str;
                str += String.fromCharCode(ch);
              }
            }, "AsciiToString");
            var stringToUTF16 = /* @__PURE__ */ __name((str, outPtr, maxBytesToWrite) => {
              maxBytesToWrite ??= 2147483647;
              if (maxBytesToWrite < 2) return 0;
              maxBytesToWrite -= 2;
              var startPtr = outPtr;
              var numCharsToWrite = maxBytesToWrite < str.length * 2 ? maxBytesToWrite / 2 : str.length;
              for (var i2 = 0; i2 < numCharsToWrite; ++i2) {
                var codeUnit = str.charCodeAt(i2);
                LE_HEAP_STORE_I16((outPtr >> 1) * 2, codeUnit);
                outPtr += 2;
              }
              LE_HEAP_STORE_I16((outPtr >> 1) * 2, 0);
              return outPtr - startPtr;
            }, "stringToUTF16");
            LE_ATOMICS_NATIVE_BYTE_ORDER = new Int8Array(new Int16Array([1]).buffer)[0] === 1 ? [
              /* little endian */
              ((x) => x),
              ((x) => x),
              void 0,
              ((x) => x)
            ] : [
              /* big endian */
              ((x) => x),
              ((x) => ((x & 65280) << 8 | (x & 255) << 24) >> 16),
              void 0,
              ((x) => x >> 24 & 255 | x >> 8 & 65280 | (x & 65280) << 8 | (x & 255) << 24)
            ];
            function LE_HEAP_UPDATE() {
              HEAPU16.unsigned = ((x) => x & 65535);
              HEAPU32.unsigned = ((x) => x >>> 0);
            }
            __name(LE_HEAP_UPDATE, "LE_HEAP_UPDATE");
            {
              initMemory();
              if (Module["noExitRuntime"]) noExitRuntime = Module["noExitRuntime"];
              if (Module["print"]) out = Module["print"];
              if (Module["printErr"]) err = Module["printErr"];
              if (Module["dynamicLibraries"]) dynamicLibraries = Module["dynamicLibraries"];
              if (Module["wasmBinary"]) wasmBinary = Module["wasmBinary"];
              if (Module["arguments"]) arguments_ = Module["arguments"];
              if (Module["thisProgram"]) thisProgram = Module["thisProgram"];
              if (Module["preInit"]) {
                if (typeof Module["preInit"] == "function") Module["preInit"] = [Module["preInit"]];
                while (Module["preInit"].length > 0) {
                  Module["preInit"].shift()();
                }
              }
            }
            Module["setValue"] = setValue;
            Module["getValue"] = getValue;
            Module["UTF8ToString"] = UTF8ToString;
            Module["stringToUTF8"] = stringToUTF8;
            Module["lengthBytesUTF8"] = lengthBytesUTF8;
            Module["AsciiToString"] = AsciiToString;
            Module["stringToUTF16"] = stringToUTF16;
            Module["loadWebAssemblyModule"] = loadWebAssemblyModule;
            Module["LE_HEAP_STORE_I64"] = LE_HEAP_STORE_I64;
            var ASM_CONSTS = {};
            var _malloc, _calloc, _realloc, _free, _ts_range_edit, _memcmp, _ts_language_symbol_count, _ts_language_state_count, _ts_language_abi_version, _ts_language_name, _ts_language_field_count, _ts_language_next_state, _ts_language_symbol_name, _ts_language_symbol_for_name, _strncmp, _ts_language_symbol_type, _ts_language_field_name_for_id, _ts_lookahead_iterator_new, _ts_lookahead_iterator_delete, _ts_lookahead_iterator_reset_state, _ts_lookahead_iterator_reset, _ts_lookahead_iterator_next, _ts_lookahead_iterator_current_symbol, _ts_point_edit, _ts_parser_delete, _ts_parser_reset, _ts_parser_set_language, _ts_parser_set_included_ranges, _ts_query_new, _ts_query_delete, _iswspace, _iswalnum, _ts_query_copy, _ts_query_pattern_count, _ts_query_capture_count, _ts_query_string_count, _ts_query_capture_name_for_id, _ts_query_capture_quantifier_for_id, _ts_query_string_value_for_id, _ts_query_predicates_for_pattern, _ts_query_start_byte_for_pattern, _ts_query_end_byte_for_pattern, _ts_query_is_pattern_rooted, _ts_query_is_pattern_non_local, _ts_query_is_pattern_guaranteed_at_step, _ts_query_disable_capture, _ts_query_disable_pattern, _ts_tree_copy, _ts_tree_delete, _ts_init, _ts_parser_new_wasm, _ts_parser_enable_logger_wasm, _ts_parser_parse_wasm, _ts_parser_included_ranges_wasm, _ts_language_type_is_named_wasm, _ts_language_type_is_visible_wasm, _ts_language_metadata_wasm, _ts_language_supertypes_wasm, _ts_language_subtypes_wasm, _ts_tree_root_node_wasm, _ts_tree_root_node_with_offset_wasm, _ts_tree_edit_wasm, _ts_tree_included_ranges_wasm, _ts_tree_get_changed_ranges_wasm, _ts_tree_cursor_new_wasm, _ts_tree_cursor_copy_wasm, _ts_tree_cursor_delete_wasm, _ts_tree_cursor_reset_wasm, _ts_tree_cursor_reset_to_wasm, _ts_tree_cursor_goto_first_child_wasm, _ts_tree_cursor_goto_last_child_wasm, _ts_tree_cursor_goto_first_child_for_index_wasm, _ts_tree_cursor_goto_first_child_for_position_wasm, _ts_tree_cursor_goto_next_sibling_wasm, _ts_tree_cursor_goto_previous_sibling_wasm, _ts_tree_cursor_goto_descendant_wasm, _ts_tree_cursor_goto_parent_wasm, _ts_tree_cursor_current_node_type_id_wasm, _ts_tree_cursor_current_node_state_id_wasm, _ts_tree_cursor_current_node_is_named_wasm, _ts_tree_cursor_current_node_is_missing_wasm, _ts_tree_cursor_current_node_id_wasm, _ts_tree_cursor_start_position_wasm, _ts_tree_cursor_end_position_wasm, _ts_tree_cursor_start_index_wasm, _ts_tree_cursor_end_index_wasm, _ts_tree_cursor_current_field_id_wasm, _ts_tree_cursor_current_depth_wasm, _ts_tree_cursor_current_descendant_index_wasm, _ts_tree_cursor_current_node_wasm, _ts_node_symbol_wasm, _ts_node_field_name_for_child_wasm, _ts_node_field_name_for_named_child_wasm, _ts_node_children_by_field_id_wasm, _ts_node_first_child_for_byte_wasm, _ts_node_first_named_child_for_byte_wasm, _ts_node_grammar_symbol_wasm, _ts_node_child_count_wasm, _ts_node_named_child_count_wasm, _ts_node_child_wasm, _ts_node_named_child_wasm, _ts_node_child_by_field_id_wasm, _ts_node_next_sibling_wasm, _ts_node_prev_sibling_wasm, _ts_node_next_named_sibling_wasm, _ts_node_prev_named_sibling_wasm, _ts_node_descendant_count_wasm, _ts_node_parent_wasm, _ts_node_child_with_descendant_wasm, _ts_node_descendant_for_index_wasm, _ts_node_named_descendant_for_index_wasm, _ts_node_descendant_for_position_wasm, _ts_node_named_descendant_for_position_wasm, _ts_node_start_point_wasm, _ts_node_end_point_wasm, _ts_node_start_index_wasm, _ts_node_end_index_wasm, _ts_node_to_string_wasm, _ts_node_children_wasm, _ts_node_named_children_wasm, _ts_node_descendants_of_type_wasm, _ts_node_is_named_wasm, _ts_node_has_changes_wasm, _ts_node_has_error_wasm, _ts_node_is_error_wasm, _ts_node_is_missing_wasm, _ts_node_is_extra_wasm, _ts_node_parse_state_wasm, _ts_node_next_parse_state_wasm, _ts_query_matches_wasm, _ts_query_captures_wasm, _memset, _memcpy, _memmove, _iswalpha, _iswblank, _iswdigit, _iswlower, _iswpunct, _iswupper, _iswxdigit, _memchr, _strlen, _strcmp, _strncat, _strncpy, _towlower, _towupper, _setThrew, __emscripten_stack_restore, __emscripten_stack_alloc, _emscripten_stack_get_current, ___wasm_apply_data_relocs;
            function assignWasmExports(wasmExports2) {
              Module["_malloc"] = _malloc = wasmExports2["malloc"];
              Module["_calloc"] = _calloc = wasmExports2["calloc"];
              Module["_realloc"] = _realloc = wasmExports2["realloc"];
              Module["_free"] = _free = wasmExports2["free"];
              Module["_ts_range_edit"] = _ts_range_edit = wasmExports2["ts_range_edit"];
              Module["_memcmp"] = _memcmp = wasmExports2["memcmp"];
              Module["_ts_language_symbol_count"] = _ts_language_symbol_count = wasmExports2["ts_language_symbol_count"];
              Module["_ts_language_state_count"] = _ts_language_state_count = wasmExports2["ts_language_state_count"];
              Module["_ts_language_abi_version"] = _ts_language_abi_version = wasmExports2["ts_language_abi_version"];
              Module["_ts_language_name"] = _ts_language_name = wasmExports2["ts_language_name"];
              Module["_ts_language_field_count"] = _ts_language_field_count = wasmExports2["ts_language_field_count"];
              Module["_ts_language_next_state"] = _ts_language_next_state = wasmExports2["ts_language_next_state"];
              Module["_ts_language_symbol_name"] = _ts_language_symbol_name = wasmExports2["ts_language_symbol_name"];
              Module["_ts_language_symbol_for_name"] = _ts_language_symbol_for_name = wasmExports2["ts_language_symbol_for_name"];
              Module["_strncmp"] = _strncmp = wasmExports2["strncmp"];
              Module["_ts_language_symbol_type"] = _ts_language_symbol_type = wasmExports2["ts_language_symbol_type"];
              Module["_ts_language_field_name_for_id"] = _ts_language_field_name_for_id = wasmExports2["ts_language_field_name_for_id"];
              Module["_ts_lookahead_iterator_new"] = _ts_lookahead_iterator_new = wasmExports2["ts_lookahead_iterator_new"];
              Module["_ts_lookahead_iterator_delete"] = _ts_lookahead_iterator_delete = wasmExports2["ts_lookahead_iterator_delete"];
              Module["_ts_lookahead_iterator_reset_state"] = _ts_lookahead_iterator_reset_state = wasmExports2["ts_lookahead_iterator_reset_state"];
              Module["_ts_lookahead_iterator_reset"] = _ts_lookahead_iterator_reset = wasmExports2["ts_lookahead_iterator_reset"];
              Module["_ts_lookahead_iterator_next"] = _ts_lookahead_iterator_next = wasmExports2["ts_lookahead_iterator_next"];
              Module["_ts_lookahead_iterator_current_symbol"] = _ts_lookahead_iterator_current_symbol = wasmExports2["ts_lookahead_iterator_current_symbol"];
              Module["_ts_point_edit"] = _ts_point_edit = wasmExports2["ts_point_edit"];
              Module["_ts_parser_delete"] = _ts_parser_delete = wasmExports2["ts_parser_delete"];
              Module["_ts_parser_reset"] = _ts_parser_reset = wasmExports2["ts_parser_reset"];
              Module["_ts_parser_set_language"] = _ts_parser_set_language = wasmExports2["ts_parser_set_language"];
              Module["_ts_parser_set_included_ranges"] = _ts_parser_set_included_ranges = wasmExports2["ts_parser_set_included_ranges"];
              Module["_ts_query_new"] = _ts_query_new = wasmExports2["ts_query_new"];
              Module["_ts_query_delete"] = _ts_query_delete = wasmExports2["ts_query_delete"];
              Module["_iswspace"] = _iswspace = wasmExports2["iswspace"];
              Module["_iswalnum"] = _iswalnum = wasmExports2["iswalnum"];
              Module["_ts_query_copy"] = _ts_query_copy = wasmExports2["ts_query_copy"];
              Module["_ts_query_pattern_count"] = _ts_query_pattern_count = wasmExports2["ts_query_pattern_count"];
              Module["_ts_query_capture_count"] = _ts_query_capture_count = wasmExports2["ts_query_capture_count"];
              Module["_ts_query_string_count"] = _ts_query_string_count = wasmExports2["ts_query_string_count"];
              Module["_ts_query_capture_name_for_id"] = _ts_query_capture_name_for_id = wasmExports2["ts_query_capture_name_for_id"];
              Module["_ts_query_capture_quantifier_for_id"] = _ts_query_capture_quantifier_for_id = wasmExports2["ts_query_capture_quantifier_for_id"];
              Module["_ts_query_string_value_for_id"] = _ts_query_string_value_for_id = wasmExports2["ts_query_string_value_for_id"];
              Module["_ts_query_predicates_for_pattern"] = _ts_query_predicates_for_pattern = wasmExports2["ts_query_predicates_for_pattern"];
              Module["_ts_query_start_byte_for_pattern"] = _ts_query_start_byte_for_pattern = wasmExports2["ts_query_start_byte_for_pattern"];
              Module["_ts_query_end_byte_for_pattern"] = _ts_query_end_byte_for_pattern = wasmExports2["ts_query_end_byte_for_pattern"];
              Module["_ts_query_is_pattern_rooted"] = _ts_query_is_pattern_rooted = wasmExports2["ts_query_is_pattern_rooted"];
              Module["_ts_query_is_pattern_non_local"] = _ts_query_is_pattern_non_local = wasmExports2["ts_query_is_pattern_non_local"];
              Module["_ts_query_is_pattern_guaranteed_at_step"] = _ts_query_is_pattern_guaranteed_at_step = wasmExports2["ts_query_is_pattern_guaranteed_at_step"];
              Module["_ts_query_disable_capture"] = _ts_query_disable_capture = wasmExports2["ts_query_disable_capture"];
              Module["_ts_query_disable_pattern"] = _ts_query_disable_pattern = wasmExports2["ts_query_disable_pattern"];
              Module["_ts_tree_copy"] = _ts_tree_copy = wasmExports2["ts_tree_copy"];
              Module["_ts_tree_delete"] = _ts_tree_delete = wasmExports2["ts_tree_delete"];
              Module["_ts_init"] = _ts_init = wasmExports2["ts_init"];
              Module["_ts_parser_new_wasm"] = _ts_parser_new_wasm = wasmExports2["ts_parser_new_wasm"];
              Module["_ts_parser_enable_logger_wasm"] = _ts_parser_enable_logger_wasm = wasmExports2["ts_parser_enable_logger_wasm"];
              Module["_ts_parser_parse_wasm"] = _ts_parser_parse_wasm = wasmExports2["ts_parser_parse_wasm"];
              Module["_ts_parser_included_ranges_wasm"] = _ts_parser_included_ranges_wasm = wasmExports2["ts_parser_included_ranges_wasm"];
              Module["_ts_language_type_is_named_wasm"] = _ts_language_type_is_named_wasm = wasmExports2["ts_language_type_is_named_wasm"];
              Module["_ts_language_type_is_visible_wasm"] = _ts_language_type_is_visible_wasm = wasmExports2["ts_language_type_is_visible_wasm"];
              Module["_ts_language_metadata_wasm"] = _ts_language_metadata_wasm = wasmExports2["ts_language_metadata_wasm"];
              Module["_ts_language_supertypes_wasm"] = _ts_language_supertypes_wasm = wasmExports2["ts_language_supertypes_wasm"];
              Module["_ts_language_subtypes_wasm"] = _ts_language_subtypes_wasm = wasmExports2["ts_language_subtypes_wasm"];
              Module["_ts_tree_root_node_wasm"] = _ts_tree_root_node_wasm = wasmExports2["ts_tree_root_node_wasm"];
              Module["_ts_tree_root_node_with_offset_wasm"] = _ts_tree_root_node_with_offset_wasm = wasmExports2["ts_tree_root_node_with_offset_wasm"];
              Module["_ts_tree_edit_wasm"] = _ts_tree_edit_wasm = wasmExports2["ts_tree_edit_wasm"];
              Module["_ts_tree_included_ranges_wasm"] = _ts_tree_included_ranges_wasm = wasmExports2["ts_tree_included_ranges_wasm"];
              Module["_ts_tree_get_changed_ranges_wasm"] = _ts_tree_get_changed_ranges_wasm = wasmExports2["ts_tree_get_changed_ranges_wasm"];
              Module["_ts_tree_cursor_new_wasm"] = _ts_tree_cursor_new_wasm = wasmExports2["ts_tree_cursor_new_wasm"];
              Module["_ts_tree_cursor_copy_wasm"] = _ts_tree_cursor_copy_wasm = wasmExports2["ts_tree_cursor_copy_wasm"];
              Module["_ts_tree_cursor_delete_wasm"] = _ts_tree_cursor_delete_wasm = wasmExports2["ts_tree_cursor_delete_wasm"];
              Module["_ts_tree_cursor_reset_wasm"] = _ts_tree_cursor_reset_wasm = wasmExports2["ts_tree_cursor_reset_wasm"];
              Module["_ts_tree_cursor_reset_to_wasm"] = _ts_tree_cursor_reset_to_wasm = wasmExports2["ts_tree_cursor_reset_to_wasm"];
              Module["_ts_tree_cursor_goto_first_child_wasm"] = _ts_tree_cursor_goto_first_child_wasm = wasmExports2["ts_tree_cursor_goto_first_child_wasm"];
              Module["_ts_tree_cursor_goto_last_child_wasm"] = _ts_tree_cursor_goto_last_child_wasm = wasmExports2["ts_tree_cursor_goto_last_child_wasm"];
              Module["_ts_tree_cursor_goto_first_child_for_index_wasm"] = _ts_tree_cursor_goto_first_child_for_index_wasm = wasmExports2["ts_tree_cursor_goto_first_child_for_index_wasm"];
              Module["_ts_tree_cursor_goto_first_child_for_position_wasm"] = _ts_tree_cursor_goto_first_child_for_position_wasm = wasmExports2["ts_tree_cursor_goto_first_child_for_position_wasm"];
              Module["_ts_tree_cursor_goto_next_sibling_wasm"] = _ts_tree_cursor_goto_next_sibling_wasm = wasmExports2["ts_tree_cursor_goto_next_sibling_wasm"];
              Module["_ts_tree_cursor_goto_previous_sibling_wasm"] = _ts_tree_cursor_goto_previous_sibling_wasm = wasmExports2["ts_tree_cursor_goto_previous_sibling_wasm"];
              Module["_ts_tree_cursor_goto_descendant_wasm"] = _ts_tree_cursor_goto_descendant_wasm = wasmExports2["ts_tree_cursor_goto_descendant_wasm"];
              Module["_ts_tree_cursor_goto_parent_wasm"] = _ts_tree_cursor_goto_parent_wasm = wasmExports2["ts_tree_cursor_goto_parent_wasm"];
              Module["_ts_tree_cursor_current_node_type_id_wasm"] = _ts_tree_cursor_current_node_type_id_wasm = wasmExports2["ts_tree_cursor_current_node_type_id_wasm"];
              Module["_ts_tree_cursor_current_node_state_id_wasm"] = _ts_tree_cursor_current_node_state_id_wasm = wasmExports2["ts_tree_cursor_current_node_state_id_wasm"];
              Module["_ts_tree_cursor_current_node_is_named_wasm"] = _ts_tree_cursor_current_node_is_named_wasm = wasmExports2["ts_tree_cursor_current_node_is_named_wasm"];
              Module["_ts_tree_cursor_current_node_is_missing_wasm"] = _ts_tree_cursor_current_node_is_missing_wasm = wasmExports2["ts_tree_cursor_current_node_is_missing_wasm"];
              Module["_ts_tree_cursor_current_node_id_wasm"] = _ts_tree_cursor_current_node_id_wasm = wasmExports2["ts_tree_cursor_current_node_id_wasm"];
              Module["_ts_tree_cursor_start_position_wasm"] = _ts_tree_cursor_start_position_wasm = wasmExports2["ts_tree_cursor_start_position_wasm"];
              Module["_ts_tree_cursor_end_position_wasm"] = _ts_tree_cursor_end_position_wasm = wasmExports2["ts_tree_cursor_end_position_wasm"];
              Module["_ts_tree_cursor_start_index_wasm"] = _ts_tree_cursor_start_index_wasm = wasmExports2["ts_tree_cursor_start_index_wasm"];
              Module["_ts_tree_cursor_end_index_wasm"] = _ts_tree_cursor_end_index_wasm = wasmExports2["ts_tree_cursor_end_index_wasm"];
              Module["_ts_tree_cursor_current_field_id_wasm"] = _ts_tree_cursor_current_field_id_wasm = wasmExports2["ts_tree_cursor_current_field_id_wasm"];
              Module["_ts_tree_cursor_current_depth_wasm"] = _ts_tree_cursor_current_depth_wasm = wasmExports2["ts_tree_cursor_current_depth_wasm"];
              Module["_ts_tree_cursor_current_descendant_index_wasm"] = _ts_tree_cursor_current_descendant_index_wasm = wasmExports2["ts_tree_cursor_current_descendant_index_wasm"];
              Module["_ts_tree_cursor_current_node_wasm"] = _ts_tree_cursor_current_node_wasm = wasmExports2["ts_tree_cursor_current_node_wasm"];
              Module["_ts_node_symbol_wasm"] = _ts_node_symbol_wasm = wasmExports2["ts_node_symbol_wasm"];
              Module["_ts_node_field_name_for_child_wasm"] = _ts_node_field_name_for_child_wasm = wasmExports2["ts_node_field_name_for_child_wasm"];
              Module["_ts_node_field_name_for_named_child_wasm"] = _ts_node_field_name_for_named_child_wasm = wasmExports2["ts_node_field_name_for_named_child_wasm"];
              Module["_ts_node_children_by_field_id_wasm"] = _ts_node_children_by_field_id_wasm = wasmExports2["ts_node_children_by_field_id_wasm"];
              Module["_ts_node_first_child_for_byte_wasm"] = _ts_node_first_child_for_byte_wasm = wasmExports2["ts_node_first_child_for_byte_wasm"];
              Module["_ts_node_first_named_child_for_byte_wasm"] = _ts_node_first_named_child_for_byte_wasm = wasmExports2["ts_node_first_named_child_for_byte_wasm"];
              Module["_ts_node_grammar_symbol_wasm"] = _ts_node_grammar_symbol_wasm = wasmExports2["ts_node_grammar_symbol_wasm"];
              Module["_ts_node_child_count_wasm"] = _ts_node_child_count_wasm = wasmExports2["ts_node_child_count_wasm"];
              Module["_ts_node_named_child_count_wasm"] = _ts_node_named_child_count_wasm = wasmExports2["ts_node_named_child_count_wasm"];
              Module["_ts_node_child_wasm"] = _ts_node_child_wasm = wasmExports2["ts_node_child_wasm"];
              Module["_ts_node_named_child_wasm"] = _ts_node_named_child_wasm = wasmExports2["ts_node_named_child_wasm"];
              Module["_ts_node_child_by_field_id_wasm"] = _ts_node_child_by_field_id_wasm = wasmExports2["ts_node_child_by_field_id_wasm"];
              Module["_ts_node_next_sibling_wasm"] = _ts_node_next_sibling_wasm = wasmExports2["ts_node_next_sibling_wasm"];
              Module["_ts_node_prev_sibling_wasm"] = _ts_node_prev_sibling_wasm = wasmExports2["ts_node_prev_sibling_wasm"];
              Module["_ts_node_next_named_sibling_wasm"] = _ts_node_next_named_sibling_wasm = wasmExports2["ts_node_next_named_sibling_wasm"];
              Module["_ts_node_prev_named_sibling_wasm"] = _ts_node_prev_named_sibling_wasm = wasmExports2["ts_node_prev_named_sibling_wasm"];
              Module["_ts_node_descendant_count_wasm"] = _ts_node_descendant_count_wasm = wasmExports2["ts_node_descendant_count_wasm"];
              Module["_ts_node_parent_wasm"] = _ts_node_parent_wasm = wasmExports2["ts_node_parent_wasm"];
              Module["_ts_node_child_with_descendant_wasm"] = _ts_node_child_with_descendant_wasm = wasmExports2["ts_node_child_with_descendant_wasm"];
              Module["_ts_node_descendant_for_index_wasm"] = _ts_node_descendant_for_index_wasm = wasmExports2["ts_node_descendant_for_index_wasm"];
              Module["_ts_node_named_descendant_for_index_wasm"] = _ts_node_named_descendant_for_index_wasm = wasmExports2["ts_node_named_descendant_for_index_wasm"];
              Module["_ts_node_descendant_for_position_wasm"] = _ts_node_descendant_for_position_wasm = wasmExports2["ts_node_descendant_for_position_wasm"];
              Module["_ts_node_named_descendant_for_position_wasm"] = _ts_node_named_descendant_for_position_wasm = wasmExports2["ts_node_named_descendant_for_position_wasm"];
              Module["_ts_node_start_point_wasm"] = _ts_node_start_point_wasm = wasmExports2["ts_node_start_point_wasm"];
              Module["_ts_node_end_point_wasm"] = _ts_node_end_point_wasm = wasmExports2["ts_node_end_point_wasm"];
              Module["_ts_node_start_index_wasm"] = _ts_node_start_index_wasm = wasmExports2["ts_node_start_index_wasm"];
              Module["_ts_node_end_index_wasm"] = _ts_node_end_index_wasm = wasmExports2["ts_node_end_index_wasm"];
              Module["_ts_node_to_string_wasm"] = _ts_node_to_string_wasm = wasmExports2["ts_node_to_string_wasm"];
              Module["_ts_node_children_wasm"] = _ts_node_children_wasm = wasmExports2["ts_node_children_wasm"];
              Module["_ts_node_named_children_wasm"] = _ts_node_named_children_wasm = wasmExports2["ts_node_named_children_wasm"];
              Module["_ts_node_descendants_of_type_wasm"] = _ts_node_descendants_of_type_wasm = wasmExports2["ts_node_descendants_of_type_wasm"];
              Module["_ts_node_is_named_wasm"] = _ts_node_is_named_wasm = wasmExports2["ts_node_is_named_wasm"];
              Module["_ts_node_has_changes_wasm"] = _ts_node_has_changes_wasm = wasmExports2["ts_node_has_changes_wasm"];
              Module["_ts_node_has_error_wasm"] = _ts_node_has_error_wasm = wasmExports2["ts_node_has_error_wasm"];
              Module["_ts_node_is_error_wasm"] = _ts_node_is_error_wasm = wasmExports2["ts_node_is_error_wasm"];
              Module["_ts_node_is_missing_wasm"] = _ts_node_is_missing_wasm = wasmExports2["ts_node_is_missing_wasm"];
              Module["_ts_node_is_extra_wasm"] = _ts_node_is_extra_wasm = wasmExports2["ts_node_is_extra_wasm"];
              Module["_ts_node_parse_state_wasm"] = _ts_node_parse_state_wasm = wasmExports2["ts_node_parse_state_wasm"];
              Module["_ts_node_next_parse_state_wasm"] = _ts_node_next_parse_state_wasm = wasmExports2["ts_node_next_parse_state_wasm"];
              Module["_ts_query_matches_wasm"] = _ts_query_matches_wasm = wasmExports2["ts_query_matches_wasm"];
              Module["_ts_query_captures_wasm"] = _ts_query_captures_wasm = wasmExports2["ts_query_captures_wasm"];
              Module["_memset"] = _memset = wasmExports2["memset"];
              Module["_memcpy"] = _memcpy = wasmExports2["memcpy"];
              Module["_memmove"] = _memmove = wasmExports2["memmove"];
              Module["_iswalpha"] = _iswalpha = wasmExports2["iswalpha"];
              Module["_iswblank"] = _iswblank = wasmExports2["iswblank"];
              Module["_iswdigit"] = _iswdigit = wasmExports2["iswdigit"];
              Module["_iswlower"] = _iswlower = wasmExports2["iswlower"];
              Module["_iswpunct"] = _iswpunct = wasmExports2["iswpunct"];
              Module["_iswupper"] = _iswupper = wasmExports2["iswupper"];
              Module["_iswxdigit"] = _iswxdigit = wasmExports2["iswxdigit"];
              Module["_memchr"] = _memchr = wasmExports2["memchr"];
              Module["_strlen"] = _strlen = wasmExports2["strlen"];
              Module["_strcmp"] = _strcmp = wasmExports2["strcmp"];
              Module["_strncat"] = _strncat = wasmExports2["strncat"];
              Module["_strncpy"] = _strncpy = wasmExports2["strncpy"];
              Module["_towlower"] = _towlower = wasmExports2["towlower"];
              Module["_towupper"] = _towupper = wasmExports2["towupper"];
              _setThrew = wasmExports2["setThrew"];
              __emscripten_stack_restore = wasmExports2["_emscripten_stack_restore"];
              __emscripten_stack_alloc = wasmExports2["_emscripten_stack_alloc"];
              _emscripten_stack_get_current = wasmExports2["emscripten_stack_get_current"];
              ___wasm_apply_data_relocs = wasmExports2["__wasm_apply_data_relocs"];
            }
            __name(assignWasmExports, "assignWasmExports");
            var wasmImports = {
              /** @export */
              __heap_base: ___heap_base,
              /** @export */
              __indirect_function_table: wasmTable,
              /** @export */
              __memory_base: ___memory_base,
              /** @export */
              __stack_high: ___stack_high,
              /** @export */
              __stack_low: ___stack_low,
              /** @export */
              __stack_pointer: ___stack_pointer,
              /** @export */
              __table_base: ___table_base,
              /** @export */
              _abort_js: __abort_js,
              /** @export */
              emscripten_resize_heap: _emscripten_resize_heap,
              /** @export */
              fd_close: _fd_close,
              /** @export */
              fd_seek: _fd_seek,
              /** @export */
              fd_write: _fd_write,
              /** @export */
              memory: wasmMemory,
              /** @export */
              tree_sitter_log_callback: _tree_sitter_log_callback,
              /** @export */
              tree_sitter_parse_callback: _tree_sitter_parse_callback,
              /** @export */
              tree_sitter_progress_callback: _tree_sitter_progress_callback,
              /** @export */
              tree_sitter_query_progress_callback: _tree_sitter_query_progress_callback
            };
            function callMain(args2 = []) {
              var entryFunction = resolveGlobalSymbol("main").sym;
              if (!entryFunction) return;
              args2.unshift(thisProgram);
              var argc = args2.length;
              var argv = stackAlloc((argc + 1) * 4);
              var argv_ptr = argv;
              args2.forEach((arg) => {
                LE_HEAP_STORE_U32((argv_ptr >> 2) * 4, stringToUTF8OnStack(arg));
                argv_ptr += 4;
              });
              LE_HEAP_STORE_U32((argv_ptr >> 2) * 4, 0);
              try {
                var ret = entryFunction(argc, argv);
                exitJS(
                  ret,
                  /* implicit = */
                  true
                );
                return ret;
              } catch (e) {
                return handleException(e);
              }
            }
            __name(callMain, "callMain");
            function run(args2 = arguments_) {
              if (runDependencies > 0) {
                dependenciesFulfilled = run;
                return;
              }
              preRun();
              if (runDependencies > 0) {
                dependenciesFulfilled = run;
                return;
              }
              function doRun() {
                Module["calledRun"] = true;
                if (ABORT) return;
                initRuntime();
                preMain();
                readyPromiseResolve?.(Module);
                Module["onRuntimeInitialized"]?.();
                var noInitialRun = Module["noInitialRun"] || false;
                if (!noInitialRun) callMain(args2);
                postRun();
              }
              __name(doRun, "doRun");
              if (Module["setStatus"]) {
                Module["setStatus"]("Running...");
                setTimeout(() => {
                  setTimeout(() => Module["setStatus"](""), 1);
                  doRun();
                }, 1);
              } else {
                doRun();
              }
            }
            __name(run, "run");
            var wasmExports;
            wasmExports = await createWasm();
            run();
            if (runtimeInitialized) {
              moduleRtn = Module;
            } else {
              moduleRtn = new Promise((resolve, reject) => {
                readyPromiseResolve = resolve;
                readyPromiseReject = reject;
              });
            }
            return moduleRtn;
          };
        })();
        if (typeof exports === "object" && typeof module === "object") {
          module.exports = Module;
          module.exports.default = Module;
        } else if (typeof define === "function" && define["amd"])
          define([], () => Module);
      }
    });
    var index_exports = {};
    __export(index_exports, {
      CaptureQuantifier: () => CaptureQuantifier,
      Edit: () => Edit,
      LANGUAGE_VERSION: () => LANGUAGE_VERSION,
      Language: () => Language,
      LookaheadIterator: () => LookaheadIterator,
      MIN_COMPATIBLE_VERSION: () => MIN_COMPATIBLE_VERSION,
      Node: () => Node,
      Parser: () => Parser,
      Query: () => Query,
      Tree: () => Tree,
      TreeCursor: () => TreeCursor
    });
    module.exports = __toCommonJS(index_exports);
    var Edit = class {
      static {
        __name(this, "Edit");
      }
      /** The start position of the change. */
      startPosition;
      /** The end position of the change before the edit. */
      oldEndPosition;
      /** The end position of the change after the edit. */
      newEndPosition;
      /** The start index of the change. */
      startIndex;
      /** The end index of the change before the edit. */
      oldEndIndex;
      /** The end index of the change after the edit. */
      newEndIndex;
      constructor({
        startIndex,
        oldEndIndex,
        newEndIndex,
        startPosition,
        oldEndPosition,
        newEndPosition
      }) {
        this.startIndex = startIndex >>> 0;
        this.oldEndIndex = oldEndIndex >>> 0;
        this.newEndIndex = newEndIndex >>> 0;
        this.startPosition = startPosition;
        this.oldEndPosition = oldEndPosition;
        this.newEndPosition = newEndPosition;
      }
      /**
       * Edit a point and index to keep it in-sync with source code that has been edited.
       *
       * This function updates a single point's byte offset and row/column position
       * based on an edit operation. This is useful for editing points without
       * requiring a tree or node instance.
       */
      editPoint(point, index) {
        let newIndex = index;
        const newPoint = { ...point };
        if (index >= this.oldEndIndex) {
          newIndex = this.newEndIndex + (index - this.oldEndIndex);
          const originalRow = point.row;
          newPoint.row = this.newEndPosition.row + (point.row - this.oldEndPosition.row);
          newPoint.column = originalRow === this.oldEndPosition.row ? this.newEndPosition.column + (point.column - this.oldEndPosition.column) : point.column;
        } else if (index > this.startIndex) {
          newIndex = this.newEndIndex;
          newPoint.row = this.newEndPosition.row;
          newPoint.column = this.newEndPosition.column;
        }
        return { point: newPoint, index: newIndex };
      }
      /**
       * Edit a range to keep it in-sync with source code that has been edited.
       *
       * This function updates a range's start and end positions based on an edit
       * operation. This is useful for editing ranges without requiring a tree
       * or node instance.
       */
      editRange(range) {
        const newRange = {
          startIndex: range.startIndex,
          startPosition: { ...range.startPosition },
          endIndex: range.endIndex,
          endPosition: { ...range.endPosition }
        };
        if (range.endIndex >= this.oldEndIndex) {
          if (range.endIndex !== Number.MAX_SAFE_INTEGER) {
            newRange.endIndex = this.newEndIndex + (range.endIndex - this.oldEndIndex);
            newRange.endPosition = {
              row: this.newEndPosition.row + (range.endPosition.row - this.oldEndPosition.row),
              column: range.endPosition.row === this.oldEndPosition.row ? this.newEndPosition.column + (range.endPosition.column - this.oldEndPosition.column) : range.endPosition.column
            };
            if (newRange.endIndex < this.newEndIndex) {
              newRange.endIndex = Number.MAX_SAFE_INTEGER;
              newRange.endPosition = { row: Number.MAX_SAFE_INTEGER, column: Number.MAX_SAFE_INTEGER };
            }
          }
        } else if (range.endIndex > this.startIndex) {
          newRange.endIndex = this.startIndex;
          newRange.endPosition = { ...this.startPosition };
        }
        if (range.startIndex >= this.oldEndIndex) {
          newRange.startIndex = this.newEndIndex + (range.startIndex - this.oldEndIndex);
          newRange.startPosition = {
            row: this.newEndPosition.row + (range.startPosition.row - this.oldEndPosition.row),
            column: range.startPosition.row === this.oldEndPosition.row ? this.newEndPosition.column + (range.startPosition.column - this.oldEndPosition.column) : range.startPosition.column
          };
          if (newRange.startIndex < this.newEndIndex) {
            newRange.startIndex = Number.MAX_SAFE_INTEGER;
            newRange.startPosition = { row: Number.MAX_SAFE_INTEGER, column: Number.MAX_SAFE_INTEGER };
          }
        } else if (range.startIndex > this.startIndex) {
          newRange.startIndex = this.startIndex;
          newRange.startPosition = { ...this.startPosition };
        }
        return newRange;
      }
    };
    var SIZE_OF_SHORT = 2;
    var SIZE_OF_INT = 4;
    var SIZE_OF_CURSOR = 4 * SIZE_OF_INT;
    var SIZE_OF_NODE = 5 * SIZE_OF_INT;
    var SIZE_OF_POINT = 2 * SIZE_OF_INT;
    var SIZE_OF_RANGE = 2 * SIZE_OF_INT + 2 * SIZE_OF_POINT;
    var ZERO_POINT = { row: 0, column: 0 };
    var INTERNAL = /* @__PURE__ */ Symbol("INTERNAL");
    function assertInternal(x) {
      if (x !== INTERNAL) throw new Error("Illegal constructor");
    }
    __name(assertInternal, "assertInternal");
    function isPoint(point) {
      return !!point && typeof point.row === "number" && typeof point.column === "number";
    }
    __name(isPoint, "isPoint");
    function setModule(module2) {
      C = module2;
    }
    __name(setModule, "setModule");
    var C;
    function newFinalizer(handler) {
      try {
        return new FinalizationRegistry(handler);
      } catch (e) {
        console.error("Unsupported FinalizationRegistry:", e);
        return;
      }
    }
    __name(newFinalizer, "newFinalizer");
    var finalizer = newFinalizer((address) => {
      C._ts_lookahead_iterator_delete(address);
    });
    var LookaheadIterator = class {
      static {
        __name(this, "LookaheadIterator");
      }
      /** @internal */
      [0] = 0;
      // Internal handle for Wasm
      /** @internal */
      language;
      /** @internal */
      positioned = false;
      /** @internal */
      constructor(internal, address, language) {
        assertInternal(internal);
        this[0] = address;
        this.language = language;
        finalizer?.register(this, address, this);
      }
      /**
       * Get the current symbol of the lookahead iterator.
       *
       * Returns `null` if the iterator is not positioned on a symbol:
       *
       * - Before the first iteration step
       * - After the iterator is exhausted
       * - After a {@link reset} or {@link resetState} call
       */
      get currentTypeId() {
        return this.positioned ? C._ts_lookahead_iterator_current_symbol(this[0]) : null;
      }
      /**
       * Get the current symbol name of the lookahead iterator.
       *
       * Returns `null` if the iterator is not positioned on a symbol.
       */
      get currentType() {
        const id = this.currentTypeId;
        if (id === null) return null;
        return this.language.types[id] ?? C.UTF8ToString(C._ts_language_symbol_name(this.language[0], id));
      }
      /** Delete the lookahead iterator, freeing its resources. */
      delete() {
        finalizer?.unregister(this);
        C._ts_lookahead_iterator_delete(this[0]);
        this[0] = 0;
      }
      /**
       * Reset the lookahead iterator.
       *
       * This returns `true` if the language was set successfully and `false`
       * otherwise.
       */
      reset(language, stateId) {
        if (C._ts_lookahead_iterator_reset(this[0], language[0], stateId)) {
          this.language = language;
          this.positioned = false;
          return true;
        }
        return false;
      }
      /**
       * Reset the lookahead iterator to another state.
       *
       * This returns `true` if the iterator was reset to the given state and
       * `false` otherwise.
       */
      resetState(stateId) {
        if (!C._ts_lookahead_iterator_reset_state(this[0], stateId)) return false;
        this.positioned = false;
        return true;
      }
      /**
       * Returns an iterator that iterates over the symbols of the lookahead iterator.
       *
       * The iterator will yield the current symbol name as a string for each step
       * until there are no more symbols to iterate over.
       */
      [Symbol.iterator]() {
        return {
          next: /* @__PURE__ */ __name(() => {
            this.positioned = Boolean(C._ts_lookahead_iterator_next(this[0]));
            const value = this.currentType;
            return value === null ? { done: true, value: "" } : { done: false, value };
          }, "next")
        };
      }
    };
    function getText(tree, startIndex, endIndex, startPosition) {
      const length = endIndex - startIndex;
      let result = tree.textCallback(startIndex, startPosition);
      if (result) {
        startIndex += result.length;
        while (startIndex < endIndex) {
          const string = tree.textCallback(startIndex, startPosition);
          if (string && string.length > 0) {
            startIndex += string.length;
            result += string;
          } else {
            break;
          }
        }
        if (startIndex > endIndex) {
          result = result.slice(0, length);
        }
      }
      return result ?? "";
    }
    __name(getText, "getText");
    var finalizer2 = newFinalizer((address) => {
      C._ts_tree_delete(address);
    });
    var Tree = class _Tree {
      static {
        __name(this, "Tree");
      }
      /** @internal */
      [0] = 0;
      // Internal handle for Wasm
      /** @internal */
      textCallback;
      /** The language that was used to parse the syntax tree. */
      language;
      /** @internal */
      constructor(internal, address, language, textCallback) {
        assertInternal(internal);
        this[0] = address;
        this.language = language;
        this.textCallback = textCallback;
        finalizer2?.register(this, address, this);
      }
      /** Create a shallow copy of the syntax tree. This is very fast. */
      copy() {
        const address = C._ts_tree_copy(this[0]);
        return new _Tree(INTERNAL, address, this.language, this.textCallback);
      }
      /** Delete the syntax tree, freeing its resources. */
      delete() {
        finalizer2?.unregister(this);
        C._ts_tree_delete(this[0]);
        this[0] = 0;
      }
      /** Get the root node of the syntax tree. */
      get rootNode() {
        C._ts_tree_root_node_wasm(this[0]);
        return unmarshalNode(this);
      }
      /**
       * Get the root node of the syntax tree, but with its position shifted
       * forward by the given offset.
       */
      rootNodeWithOffset(offsetBytes, offsetExtent) {
        const address = TRANSFER_BUFFER + SIZE_OF_NODE;
        C.setValue(address, offsetBytes, "i32");
        marshalPoint(address + SIZE_OF_INT, offsetExtent);
        C._ts_tree_root_node_with_offset_wasm(this[0]);
        return unmarshalNode(this);
      }
      /**
       * Edit the syntax tree to keep it in sync with source code that has been
       * edited.
       *
       * You must describe the edit both in terms of byte offsets and in terms of
       * row/column coordinates.
       */
      edit(edit) {
        marshalEdit(edit);
        C._ts_tree_edit_wasm(this[0]);
      }
      /** Create a new {@link TreeCursor} starting from the root of the tree. */
      walk() {
        return this.rootNode.walk();
      }
      /**
       * Compare this old edited syntax tree to a new syntax tree representing
       * the same document, returning a sequence of ranges whose syntactic
       * structure has changed.
       *
       * For this to work correctly, this syntax tree must have been edited such
       * that its ranges match up to the new tree. Generally, you'll want to
       * call this method right after calling one of the [`Parser::parse`]
       * functions. Call it on the old tree that was passed to parse, and
       * pass the new tree that was returned from `parse`.
       */
      getChangedRanges(other) {
        if (!(other instanceof _Tree)) {
          throw new TypeError("Argument must be a Tree");
        }
        C._ts_tree_get_changed_ranges_wasm(this[0], other[0]);
        const count = C.getValue(TRANSFER_BUFFER, "i32");
        const buffer = C.getValue(TRANSFER_BUFFER + SIZE_OF_INT, "i32");
        const result = new Array(count);
        if (count > 0) {
          let address = buffer;
          for (let i2 = 0; i2 < count; i2++) {
            result[i2] = unmarshalRange(address);
            address += SIZE_OF_RANGE;
          }
          C._free(buffer);
        }
        return result;
      }
      /** Get the included ranges that were used to parse the syntax tree. */
      getIncludedRanges() {
        C._ts_tree_included_ranges_wasm(this[0]);
        const count = C.getValue(TRANSFER_BUFFER, "i32");
        const buffer = C.getValue(TRANSFER_BUFFER + SIZE_OF_INT, "i32");
        const result = new Array(count);
        if (count > 0) {
          let address = buffer;
          for (let i2 = 0; i2 < count; i2++) {
            result[i2] = unmarshalRange(address);
            address += SIZE_OF_RANGE;
          }
          C._free(buffer);
        }
        return result;
      }
    };
    var finalizer3 = newFinalizer((address) => {
      C._ts_tree_cursor_delete_wasm(address);
    });
    var TreeCursor = class _TreeCursor {
      static {
        __name(this, "TreeCursor");
      }
      /** @internal */
      // @ts-expect-error: never read
      [0] = 0;
      // Internal handle for Wasm
      /** @internal */
      // @ts-expect-error: never read
      [1] = 0;
      // Internal handle for Wasm
      /** @internal */
      // @ts-expect-error: never read
      [2] = 0;
      // Internal handle for Wasm
      /** @internal */
      // @ts-expect-error: never read
      [3] = 0;
      // Internal handle for Wasm
      /** @internal */
      tree;
      /** @internal */
      constructor(internal, tree) {
        assertInternal(internal);
        this.tree = tree;
        unmarshalTreeCursor(this);
        finalizer3?.register(this, this.tree[0], this);
      }
      /** Creates a deep copy of the tree cursor. This allocates new memory. */
      copy() {
        const copy = new _TreeCursor(INTERNAL, this.tree);
        C._ts_tree_cursor_copy_wasm(this.tree[0]);
        unmarshalTreeCursor(copy);
        return copy;
      }
      /** Delete the tree cursor, freeing its resources. */
      delete() {
        finalizer3?.unregister(this);
        marshalTreeCursor(this);
        C._ts_tree_cursor_delete_wasm(this.tree[0]);
        this[0] = this[1] = this[2] = 0;
      }
      /** Get the tree cursor's current {@link Node}. */
      get currentNode() {
        marshalTreeCursor(this);
        C._ts_tree_cursor_current_node_wasm(this.tree[0]);
        return unmarshalNode(this.tree);
      }
      /**
       * Get the numerical field id of this tree cursor's current node.
       *
       * See also {@link TreeCursor#currentFieldName}.
       */
      get currentFieldId() {
        marshalTreeCursor(this);
        return C._ts_tree_cursor_current_field_id_wasm(this.tree[0]);
      }
      /** Get the field name of this tree cursor's current node. */
      get currentFieldName() {
        return this.tree.language.fields[this.currentFieldId];
      }
      /**
       * Get the depth of the cursor's current node relative to the original
       * node that the cursor was constructed with.
       */
      get currentDepth() {
        marshalTreeCursor(this);
        return C._ts_tree_cursor_current_depth_wasm(this.tree[0]);
      }
      /**
       * Get the index of the cursor's current node out of all of the
       * descendants of the original node that the cursor was constructed with.
       */
      get currentDescendantIndex() {
        marshalTreeCursor(this);
        return C._ts_tree_cursor_current_descendant_index_wasm(this.tree[0]);
      }
      /** Get the type of the cursor's current node. */
      get nodeType() {
        return this.tree.language.types[this.nodeTypeId] || "ERROR";
      }
      /** Get the type id of the cursor's current node. */
      get nodeTypeId() {
        marshalTreeCursor(this);
        return C._ts_tree_cursor_current_node_type_id_wasm(this.tree[0]);
      }
      /** Get the state id of the cursor's current node. */
      get nodeStateId() {
        marshalTreeCursor(this);
        return C._ts_tree_cursor_current_node_state_id_wasm(this.tree[0]);
      }
      /** Get the id of the cursor's current node. */
      get nodeId() {
        marshalTreeCursor(this);
        return C._ts_tree_cursor_current_node_id_wasm(this.tree[0]);
      }
      /**
       * Check if the cursor's current node is *named*.
       *
       * Named nodes correspond to named rules in the grammar, whereas
       * *anonymous* nodes correspond to string literals in the grammar.
       */
      get nodeIsNamed() {
        marshalTreeCursor(this);
        return C._ts_tree_cursor_current_node_is_named_wasm(this.tree[0]) === 1;
      }
      /**
       * Check if the cursor's current node is *missing*.
       *
       * Missing nodes are inserted by the parser in order to recover from
       * certain kinds of syntax errors.
       */
      get nodeIsMissing() {
        marshalTreeCursor(this);
        return C._ts_tree_cursor_current_node_is_missing_wasm(this.tree[0]) === 1;
      }
      /** Get the string content of the cursor's current node. */
      get nodeText() {
        marshalTreeCursor(this);
        const startIndex = C._ts_tree_cursor_start_index_wasm(this.tree[0]);
        const endIndex = C._ts_tree_cursor_end_index_wasm(this.tree[0]);
        C._ts_tree_cursor_start_position_wasm(this.tree[0]);
        const startPosition = unmarshalPoint(TRANSFER_BUFFER);
        return getText(this.tree, startIndex, endIndex, startPosition);
      }
      /** Get the start position of the cursor's current node. */
      get startPosition() {
        marshalTreeCursor(this);
        C._ts_tree_cursor_start_position_wasm(this.tree[0]);
        return unmarshalPoint(TRANSFER_BUFFER);
      }
      /** Get the end position of the cursor's current node. */
      get endPosition() {
        marshalTreeCursor(this);
        C._ts_tree_cursor_end_position_wasm(this.tree[0]);
        return unmarshalPoint(TRANSFER_BUFFER);
      }
      /** Get the start index of the cursor's current node. */
      get startIndex() {
        marshalTreeCursor(this);
        return C._ts_tree_cursor_start_index_wasm(this.tree[0]);
      }
      /** Get the end index of the cursor's current node. */
      get endIndex() {
        marshalTreeCursor(this);
        return C._ts_tree_cursor_end_index_wasm(this.tree[0]);
      }
      /**
       * Move this cursor to the first child of its current node.
       *
       * This returns `true` if the cursor successfully moved, and returns
       * `false` if there were no children.
       */
      gotoFirstChild() {
        marshalTreeCursor(this);
        const result = C._ts_tree_cursor_goto_first_child_wasm(this.tree[0]);
        unmarshalTreeCursor(this);
        return result === 1;
      }
      /**
       * Move this cursor to the last child of its current node.
       *
       * This returns `true` if the cursor successfully moved, and returns
       * `false` if there were no children.
       *
       * Note that this function may be slower than
       * {@link TreeCursor#gotoFirstChild} because it needs to
       * iterate through all the children to compute the child's position.
       */
      gotoLastChild() {
        marshalTreeCursor(this);
        const result = C._ts_tree_cursor_goto_last_child_wasm(this.tree[0]);
        unmarshalTreeCursor(this);
        return result === 1;
      }
      /**
       * Move this cursor to the parent of its current node.
       *
       * This returns `true` if the cursor successfully moved, and returns
       * `false` if there was no parent node (the cursor was already on the
       * root node).
       *
       * Note that the node the cursor was constructed with is considered the root
       * of the cursor, and the cursor cannot walk outside this node.
       */
      gotoParent() {
        marshalTreeCursor(this);
        const result = C._ts_tree_cursor_goto_parent_wasm(this.tree[0]);
        unmarshalTreeCursor(this);
        return result === 1;
      }
      /**
       * Move this cursor to the next sibling of its current node.
       *
       * This returns `true` if the cursor successfully moved, and returns
       * `false` if there was no next sibling node.
       *
       * Note that the node the cursor was constructed with is considered the root
       * of the cursor, and the cursor cannot walk outside this node.
       */
      gotoNextSibling() {
        marshalTreeCursor(this);
        const result = C._ts_tree_cursor_goto_next_sibling_wasm(this.tree[0]);
        unmarshalTreeCursor(this);
        return result === 1;
      }
      /**
       * Move this cursor to the previous sibling of its current node.
       *
       * This returns `true` if the cursor successfully moved, and returns
       * `false` if there was no previous sibling node.
       *
       * Note that this function may be slower than
       * {@link TreeCursor#gotoNextSibling} due to how node
       * positions are stored. In the worst case, this will need to iterate
       * through all the children up to the previous sibling node to recalculate
       * its position. Also note that the node the cursor was constructed with is
       * considered the root of the cursor, and the cursor cannot walk outside this node.
       */
      gotoPreviousSibling() {
        marshalTreeCursor(this);
        const result = C._ts_tree_cursor_goto_previous_sibling_wasm(this.tree[0]);
        unmarshalTreeCursor(this);
        return result === 1;
      }
      /**
       * Move the cursor to the node that is the nth descendant of
       * the original node that the cursor was constructed with, where
       * zero represents the original node itself.
       */
      gotoDescendant(goalDescendantIndex) {
        marshalTreeCursor(this);
        C._ts_tree_cursor_goto_descendant_wasm(this.tree[0], goalDescendantIndex);
        unmarshalTreeCursor(this);
      }
      /**
       * Move this cursor to the first child of its current node that contains or
       * starts after the given byte offset.
       *
       * This returns `true` if the cursor successfully moved to a child node, and returns
       * `false` if no such child was found.
       */
      gotoFirstChildForIndex(goalIndex) {
        marshalTreeCursor(this);
        C.setValue(TRANSFER_BUFFER + SIZE_OF_CURSOR, goalIndex, "i32");
        const result = C._ts_tree_cursor_goto_first_child_for_index_wasm(this.tree[0]);
        unmarshalTreeCursor(this);
        return result === 1;
      }
      /**
       * Move this cursor to the first child of its current node that contains or
       * starts after the given byte offset.
       *
       * This returns the index of the child node if one was found, and returns
       * `null` if no such child was found.
       */
      gotoFirstChildForPosition(goalPosition) {
        marshalTreeCursor(this);
        marshalPoint(TRANSFER_BUFFER + SIZE_OF_CURSOR, goalPosition);
        const result = C._ts_tree_cursor_goto_first_child_for_position_wasm(this.tree[0]);
        unmarshalTreeCursor(this);
        return result === 1;
      }
      /**
       * Re-initialize this tree cursor to start at the original node that the
       * cursor was constructed with.
       */
      reset(node) {
        marshalNode(node);
        marshalTreeCursor(this, TRANSFER_BUFFER + SIZE_OF_NODE);
        C._ts_tree_cursor_reset_wasm(this.tree[0]);
        unmarshalTreeCursor(this);
      }
      /**
       * Re-initialize a tree cursor to the same position as another cursor.
       *
       * Unlike {@link TreeCursor#reset}, this will not lose parent
       * information and allows reusing already created cursors.
       */
      resetTo(cursor) {
        marshalTreeCursor(this, TRANSFER_BUFFER);
        marshalTreeCursor(cursor, TRANSFER_BUFFER + SIZE_OF_CURSOR);
        C._ts_tree_cursor_reset_to_wasm(this.tree[0], cursor.tree[0]);
        unmarshalTreeCursor(this);
      }
    };
    var Node = class {
      static {
        __name(this, "Node");
      }
      /** @internal */
      // @ts-expect-error: never read
      [0] = 0;
      // Internal handle for Wasm
      /** @internal */
      _children;
      /** @internal */
      _namedChildren;
      /** @internal */
      constructor(internal, {
        id,
        tree,
        startIndex,
        startPosition,
        other
      }) {
        assertInternal(internal);
        this[0] = other;
        this.id = id;
        this.tree = tree;
        this.startIndex = startIndex;
        this.startPosition = startPosition;
      }
      /**
       * The numeric id for this node that is unique.
       *
       * Within a given syntax tree, no two nodes have the same id. However:
       *
       * * If a new tree is created based on an older tree, and a node from the old tree is reused in
       *   the process, then that node will have the same id in both trees.
       *
       * * A node not marked as having changes does not guarantee it was reused.
       *
       * * If a node is marked as having changed in the old tree, it will not be reused.
       */
      id;
      /** The byte index where this node starts. */
      startIndex;
      /** The position where this node starts. */
      startPosition;
      /** The tree that this node belongs to. */
      tree;
      /** Get this node's type as a numerical id. */
      get typeId() {
        marshalNode(this);
        return C._ts_node_symbol_wasm(this.tree[0]);
      }
      /**
       * Get the node's type as a numerical id as it appears in the grammar,
       * ignoring aliases.
       */
      get grammarId() {
        marshalNode(this);
        return C._ts_node_grammar_symbol_wasm(this.tree[0]);
      }
      /** Get this node's type as a string. */
      get type() {
        return this.tree.language.types[this.typeId] || "ERROR";
      }
      /**
       * Get this node's symbol name as it appears in the grammar, ignoring
       * aliases as a string.
       */
      get grammarType() {
        return this.tree.language.types[this.grammarId] || "ERROR";
      }
      /**
       * Check if this node is *named*.
       *
       * Named nodes correspond to named rules in the grammar, whereas
       * *anonymous* nodes correspond to string literals in the grammar.
       */
      get isNamed() {
        marshalNode(this);
        return C._ts_node_is_named_wasm(this.tree[0]) === 1;
      }
      /**
       * Check if this node is *extra*.
       *
       * Extra nodes represent things like comments, which are not required
       * by the grammar, but can appear anywhere.
       */
      get isExtra() {
        marshalNode(this);
        return C._ts_node_is_extra_wasm(this.tree[0]) === 1;
      }
      /**
       * Check if this node represents a syntax error.
       *
       * Syntax errors represent parts of the code that could not be incorporated
       * into a valid syntax tree.
       */
      get isError() {
        marshalNode(this);
        return C._ts_node_is_error_wasm(this.tree[0]) === 1;
      }
      /**
       * Check if this node is *missing*.
       *
       * Missing nodes are inserted by the parser in order to recover from
       * certain kinds of syntax errors.
       */
      get isMissing() {
        marshalNode(this);
        return C._ts_node_is_missing_wasm(this.tree[0]) === 1;
      }
      /** Check if this node has been edited. */
      get hasChanges() {
        marshalNode(this);
        return C._ts_node_has_changes_wasm(this.tree[0]) === 1;
      }
      /**
       * Check if this node represents a syntax error or contains any syntax
       * errors anywhere within it.
       */
      get hasError() {
        marshalNode(this);
        return C._ts_node_has_error_wasm(this.tree[0]) === 1;
      }
      /** Get the byte index where this node ends. */
      get endIndex() {
        marshalNode(this);
        return C._ts_node_end_index_wasm(this.tree[0]);
      }
      /** Get the position where this node ends. */
      get endPosition() {
        marshalNode(this);
        C._ts_node_end_point_wasm(this.tree[0]);
        return unmarshalPoint(TRANSFER_BUFFER);
      }
      /** Get the string content of this node. */
      get text() {
        return getText(this.tree, this.startIndex, this.endIndex, this.startPosition);
      }
      /** Get this node's parse state. */
      get parseState() {
        marshalNode(this);
        return C._ts_node_parse_state_wasm(this.tree[0]);
      }
      /** Get the parse state after this node. */
      get nextParseState() {
        marshalNode(this);
        return C._ts_node_next_parse_state_wasm(this.tree[0]);
      }
      /** Check if this node is equal to another node. */
      equals(other) {
        return this.tree === other.tree && this.id === other.id;
      }
      /**
       * Get the node's child at the given index, where zero represents the first child.
       *
       * This method is fairly fast, but its cost is technically log(n), so if
       * you might be iterating over a long list of children, you should use
       * {@link Node#children} instead.
       */
      child(index) {
        marshalNode(this);
        C._ts_node_child_wasm(this.tree[0], index);
        return unmarshalNode(this.tree);
      }
      /**
       * Get this node's *named* child at the given index.
       *
       * See also {@link Node#isNamed}.
       * This method is fairly fast, but its cost is technically log(n), so if
       * you might be iterating over a long list of children, you should use
       * {@link Node#namedChildren} instead.
       */
      namedChild(index) {
        marshalNode(this);
        C._ts_node_named_child_wasm(this.tree[0], index);
        return unmarshalNode(this.tree);
      }
      /**
       * Get this node's child with the given numerical field id.
       *
       * See also {@link Node#childForFieldName}. You can
       * convert a field name to an id using {@link Language#fieldIdForName}.
       */
      childForFieldId(fieldId) {
        marshalNode(this);
        C._ts_node_child_by_field_id_wasm(this.tree[0], fieldId);
        return unmarshalNode(this.tree);
      }
      /**
       * Get the first child with the given field name.
       *
       * If multiple children may have the same field name, access them using
       * {@link Node#childrenForFieldName}.
       */
      childForFieldName(fieldName) {
        const fieldId = this.tree.language.fields.indexOf(fieldName);
        if (fieldId !== -1) return this.childForFieldId(fieldId);
        return null;
      }
      /** Get the field name of this node's child at the given index. */
      fieldNameForChild(index) {
        marshalNode(this);
        const address = C._ts_node_field_name_for_child_wasm(this.tree[0], index);
        if (!address) return null;
        return C.AsciiToString(address);
      }
      /** Get the field name of this node's named child at the given index. */
      fieldNameForNamedChild(index) {
        marshalNode(this);
        const address = C._ts_node_field_name_for_named_child_wasm(this.tree[0], index);
        if (!address) return null;
        return C.AsciiToString(address);
      }
      /**
       * Get an array of this node's children with a given field name.
       *
       * See also {@link Node#children}.
       */
      childrenForFieldName(fieldName) {
        const fieldId = this.tree.language.fields.indexOf(fieldName);
        if (fieldId !== -1 && fieldId !== 0) return this.childrenForFieldId(fieldId);
        return [];
      }
      /**
        * Get an array of this node's children with a given field id.
        *
        * See also {@link Node#childrenForFieldName}.
        */
      childrenForFieldId(fieldId) {
        marshalNode(this);
        C._ts_node_children_by_field_id_wasm(this.tree[0], fieldId);
        const count = C.getValue(TRANSFER_BUFFER, "i32");
        const buffer = C.getValue(TRANSFER_BUFFER + SIZE_OF_INT, "i32");
        const result = new Array(count);
        if (count > 0) {
          let address = buffer;
          for (let i2 = 0; i2 < count; i2++) {
            result[i2] = unmarshalNode(this.tree, address);
            address += SIZE_OF_NODE;
          }
          C._free(buffer);
        }
        return result;
      }
      /** Get the node's first child that contains or starts after the given byte offset. */
      firstChildForIndex(index) {
        marshalNode(this);
        const address = TRANSFER_BUFFER + SIZE_OF_NODE;
        C.setValue(address, index, "i32");
        C._ts_node_first_child_for_byte_wasm(this.tree[0]);
        return unmarshalNode(this.tree);
      }
      /** Get the node's first named child that contains or starts after the given byte offset. */
      firstNamedChildForIndex(index) {
        marshalNode(this);
        const address = TRANSFER_BUFFER + SIZE_OF_NODE;
        C.setValue(address, index, "i32");
        C._ts_node_first_named_child_for_byte_wasm(this.tree[0]);
        return unmarshalNode(this.tree);
      }
      /** Get this node's number of children. */
      get childCount() {
        marshalNode(this);
        return C._ts_node_child_count_wasm(this.tree[0]);
      }
      /**
       * Get this node's number of *named* children.
       *
       * See also {@link Node#isNamed}.
       */
      get namedChildCount() {
        marshalNode(this);
        return C._ts_node_named_child_count_wasm(this.tree[0]);
      }
      /** Get this node's first child. */
      get firstChild() {
        return this.child(0);
      }
      /**
       * Get this node's first named child.
       *
       * See also {@link Node#isNamed}.
       */
      get firstNamedChild() {
        return this.namedChild(0);
      }
      /** Get this node's last child. */
      get lastChild() {
        return this.child(this.childCount - 1);
      }
      /**
       * Get this node's last named child.
       *
       * See also {@link Node#isNamed}.
       */
      get lastNamedChild() {
        return this.namedChild(this.namedChildCount - 1);
      }
      /**
       * Iterate over this node's children.
       *
       * If you're walking the tree recursively, you may want to use the
       * {@link TreeCursor} APIs directly instead.
       */
      get children() {
        if (!this._children) {
          marshalNode(this);
          C._ts_node_children_wasm(this.tree[0]);
          const count = C.getValue(TRANSFER_BUFFER, "i32");
          const buffer = C.getValue(TRANSFER_BUFFER + SIZE_OF_INT, "i32");
          this._children = new Array(count);
          if (count > 0) {
            let address = buffer;
            for (let i2 = 0; i2 < count; i2++) {
              this._children[i2] = unmarshalNode(this.tree, address);
              address += SIZE_OF_NODE;
            }
            C._free(buffer);
          }
        }
        return this._children;
      }
      /**
       * Iterate over this node's named children.
       *
       * See also {@link Node#children}.
       */
      get namedChildren() {
        if (!this._namedChildren) {
          marshalNode(this);
          C._ts_node_named_children_wasm(this.tree[0]);
          const count = C.getValue(TRANSFER_BUFFER, "i32");
          const buffer = C.getValue(TRANSFER_BUFFER + SIZE_OF_INT, "i32");
          this._namedChildren = new Array(count);
          if (count > 0) {
            let address = buffer;
            for (let i2 = 0; i2 < count; i2++) {
              this._namedChildren[i2] = unmarshalNode(this.tree, address);
              address += SIZE_OF_NODE;
            }
            C._free(buffer);
          }
        }
        return this._namedChildren;
      }
      /**
       * Get the descendants of this node that are the given type, or in the given types array.
       *
       * The types array should contain node type strings, which can be retrieved from {@link Language#types}.
       *
       * Additionally, a `startPosition` and `endPosition` can be passed in to restrict the search to a byte range.
       */
      descendantsOfType(types, startPosition = ZERO_POINT, endPosition = ZERO_POINT) {
        if (!Array.isArray(types)) types = [types];
        const symbols = [];
        const typesBySymbol = this.tree.language.types;
        for (const node_type of types) {
          if (node_type == "ERROR") {
            symbols.push(65535);
          }
        }
        for (let i2 = 0, n = typesBySymbol.length; i2 < n; i2++) {
          if (types.includes(typesBySymbol[i2])) {
            symbols.push(i2);
          }
        }
        const symbolsAddress = C._malloc(SIZE_OF_INT * symbols.length);
        for (let i2 = 0, n = symbols.length; i2 < n; i2++) {
          C.setValue(symbolsAddress + i2 * SIZE_OF_INT, symbols[i2], "i32");
        }
        marshalNode(this);
        C._ts_node_descendants_of_type_wasm(
          this.tree[0],
          symbolsAddress,
          symbols.length,
          startPosition.row,
          startPosition.column,
          endPosition.row,
          endPosition.column
        );
        const descendantCount = C.getValue(TRANSFER_BUFFER, "i32");
        const descendantAddress = C.getValue(TRANSFER_BUFFER + SIZE_OF_INT, "i32");
        const result = new Array(descendantCount);
        if (descendantCount > 0) {
          let address = descendantAddress;
          for (let i2 = 0; i2 < descendantCount; i2++) {
            result[i2] = unmarshalNode(this.tree, address);
            address += SIZE_OF_NODE;
          }
        }
        C._free(descendantAddress);
        C._free(symbolsAddress);
        return result;
      }
      /** Get this node's next sibling. */
      get nextSibling() {
        marshalNode(this);
        C._ts_node_next_sibling_wasm(this.tree[0]);
        return unmarshalNode(this.tree);
      }
      /** Get this node's previous sibling. */
      get previousSibling() {
        marshalNode(this);
        C._ts_node_prev_sibling_wasm(this.tree[0]);
        return unmarshalNode(this.tree);
      }
      /**
       * Get this node's next *named* sibling.
       *
       * See also {@link Node#isNamed}.
       */
      get nextNamedSibling() {
        marshalNode(this);
        C._ts_node_next_named_sibling_wasm(this.tree[0]);
        return unmarshalNode(this.tree);
      }
      /**
       * Get this node's previous *named* sibling.
       *
       * See also {@link Node#isNamed}.
       */
      get previousNamedSibling() {
        marshalNode(this);
        C._ts_node_prev_named_sibling_wasm(this.tree[0]);
        return unmarshalNode(this.tree);
      }
      /** Get the node's number of descendants, including one for the node itself. */
      get descendantCount() {
        marshalNode(this);
        return C._ts_node_descendant_count_wasm(this.tree[0]);
      }
      /**
       * Get this node's immediate parent.
       * Prefer {@link Node#childWithDescendant} for iterating over this node's ancestors.
       */
      get parent() {
        marshalNode(this);
        C._ts_node_parent_wasm(this.tree[0]);
        return unmarshalNode(this.tree);
      }
      /**
       * Get the node that contains `descendant`.
       *
       * Note that this can return `descendant` itself.
       */
      childWithDescendant(descendant) {
        marshalNode(this);
        marshalNode(descendant, 1);
        C._ts_node_child_with_descendant_wasm(this.tree[0]);
        return unmarshalNode(this.tree);
      }
      /** Get the smallest node within this node that spans the given byte range. */
      descendantForIndex(start2, end = start2) {
        if (typeof start2 !== "number" || typeof end !== "number") {
          throw new Error("Arguments must be numbers");
        }
        marshalNode(this);
        const address = TRANSFER_BUFFER + SIZE_OF_NODE;
        C.setValue(address, start2, "i32");
        C.setValue(address + SIZE_OF_INT, end, "i32");
        C._ts_node_descendant_for_index_wasm(this.tree[0]);
        return unmarshalNode(this.tree);
      }
      /** Get the smallest named node within this node that spans the given byte range. */
      namedDescendantForIndex(start2, end = start2) {
        if (typeof start2 !== "number" || typeof end !== "number") {
          throw new Error("Arguments must be numbers");
        }
        marshalNode(this);
        const address = TRANSFER_BUFFER + SIZE_OF_NODE;
        C.setValue(address, start2, "i32");
        C.setValue(address + SIZE_OF_INT, end, "i32");
        C._ts_node_named_descendant_for_index_wasm(this.tree[0]);
        return unmarshalNode(this.tree);
      }
      /** Get the smallest node within this node that spans the given point range. */
      descendantForPosition(start2, end = start2) {
        if (!isPoint(start2) || !isPoint(end)) {
          throw new Error("Arguments must be {row, column} objects");
        }
        marshalNode(this);
        const address = TRANSFER_BUFFER + SIZE_OF_NODE;
        marshalPoint(address, start2);
        marshalPoint(address + SIZE_OF_POINT, end);
        C._ts_node_descendant_for_position_wasm(this.tree[0]);
        return unmarshalNode(this.tree);
      }
      /** Get the smallest named node within this node that spans the given point range. */
      namedDescendantForPosition(start2, end = start2) {
        if (!isPoint(start2) || !isPoint(end)) {
          throw new Error("Arguments must be {row, column} objects");
        }
        marshalNode(this);
        const address = TRANSFER_BUFFER + SIZE_OF_NODE;
        marshalPoint(address, start2);
        marshalPoint(address + SIZE_OF_POINT, end);
        C._ts_node_named_descendant_for_position_wasm(this.tree[0]);
        return unmarshalNode(this.tree);
      }
      /**
       * Create a new {@link TreeCursor} starting from this node.
       *
       * Note that the given node is considered the root of the cursor,
       * and the cursor cannot walk outside this node.
       */
      walk() {
        marshalNode(this);
        C._ts_tree_cursor_new_wasm(this.tree[0]);
        return new TreeCursor(INTERNAL, this.tree);
      }
      /**
       * Edit this node to keep it in-sync with source code that has been edited.
       *
       * This function is only rarely needed. When you edit a syntax tree with
       * the {@link Tree#edit} method, all of the nodes that you retrieve from
       * the tree afterward will already reflect the edit. You only need to
       * use {@link Node#edit} when you have a specific {@link Node} instance that
       * you want to keep and continue to use after an edit.
       */
      edit(edit) {
        if (this.startIndex >= edit.oldEndIndex) {
          this.startIndex = edit.newEndIndex + (this.startIndex - edit.oldEndIndex);
          let subbedPointRow;
          let subbedPointColumn;
          if (this.startPosition.row > edit.oldEndPosition.row) {
            subbedPointRow = this.startPosition.row - edit.oldEndPosition.row;
            subbedPointColumn = this.startPosition.column;
          } else {
            subbedPointRow = 0;
            subbedPointColumn = this.startPosition.column;
            if (this.startPosition.column >= edit.oldEndPosition.column) {
              subbedPointColumn = this.startPosition.column - edit.oldEndPosition.column;
            }
          }
          if (subbedPointRow > 0) {
            this.startPosition.row += subbedPointRow;
            this.startPosition.column = subbedPointColumn;
          } else {
            this.startPosition.column += subbedPointColumn;
          }
        } else if (this.startIndex > edit.startIndex) {
          this.startIndex = edit.newEndIndex;
          this.startPosition.row = edit.newEndPosition.row;
          this.startPosition.column = edit.newEndPosition.column;
        }
      }
      /** Get the S-expression representation of this node. */
      toString() {
        marshalNode(this);
        const address = C._ts_node_to_string_wasm(this.tree[0]);
        const result = C.AsciiToString(address);
        C._free(address);
        return result;
      }
    };
    function unmarshalCaptures(query, tree, address, patternIndex, result) {
      for (let i2 = 0, n = result.length; i2 < n; i2++) {
        const captureIndex = C.getValue(address, "i32");
        address += SIZE_OF_INT;
        const node = unmarshalNode(tree, address);
        address += SIZE_OF_NODE;
        result[i2] = { patternIndex, name: query.captureNames[captureIndex], node };
      }
      return address;
    }
    __name(unmarshalCaptures, "unmarshalCaptures");
    function marshalNode(node, index = 0) {
      let address = TRANSFER_BUFFER + index * SIZE_OF_NODE;
      C.setValue(address, node.id, "i32");
      address += SIZE_OF_INT;
      C.setValue(address, node.startIndex, "i32");
      address += SIZE_OF_INT;
      C.setValue(address, node.startPosition.row, "i32");
      address += SIZE_OF_INT;
      C.setValue(address, node.startPosition.column, "i32");
      address += SIZE_OF_INT;
      C.setValue(address, node[0], "i32");
    }
    __name(marshalNode, "marshalNode");
    function unmarshalNode(tree, address = TRANSFER_BUFFER) {
      const id = C.getValue(address, "i32");
      address += SIZE_OF_INT;
      if (id === 0) return null;
      const index = C.getValue(address, "i32");
      address += SIZE_OF_INT;
      const row = C.getValue(address, "i32");
      address += SIZE_OF_INT;
      const column = C.getValue(address, "i32");
      address += SIZE_OF_INT;
      const other = C.getValue(address, "i32");
      const result = new Node(INTERNAL, {
        id,
        tree,
        startIndex: index,
        startPosition: { row, column },
        other
      });
      return result;
    }
    __name(unmarshalNode, "unmarshalNode");
    function marshalTreeCursor(cursor, address = TRANSFER_BUFFER) {
      C.setValue(address + 0 * SIZE_OF_INT, cursor[0], "i32");
      C.setValue(address + 1 * SIZE_OF_INT, cursor[1], "i32");
      C.setValue(address + 2 * SIZE_OF_INT, cursor[2], "i32");
      C.setValue(address + 3 * SIZE_OF_INT, cursor[3], "i32");
    }
    __name(marshalTreeCursor, "marshalTreeCursor");
    function unmarshalTreeCursor(cursor) {
      cursor[0] = C.getValue(TRANSFER_BUFFER + 0 * SIZE_OF_INT, "i32");
      cursor[1] = C.getValue(TRANSFER_BUFFER + 1 * SIZE_OF_INT, "i32");
      cursor[2] = C.getValue(TRANSFER_BUFFER + 2 * SIZE_OF_INT, "i32");
      cursor[3] = C.getValue(TRANSFER_BUFFER + 3 * SIZE_OF_INT, "i32");
    }
    __name(unmarshalTreeCursor, "unmarshalTreeCursor");
    function marshalPoint(address, point) {
      C.setValue(address, point.row, "i32");
      C.setValue(address + SIZE_OF_INT, point.column, "i32");
    }
    __name(marshalPoint, "marshalPoint");
    function unmarshalPoint(address) {
      const result = {
        row: C.getValue(address, "i32") >>> 0,
        column: C.getValue(address + SIZE_OF_INT, "i32") >>> 0
      };
      return result;
    }
    __name(unmarshalPoint, "unmarshalPoint");
    function marshalRange(address, range) {
      marshalPoint(address, range.startPosition);
      address += SIZE_OF_POINT;
      marshalPoint(address, range.endPosition);
      address += SIZE_OF_POINT;
      C.setValue(address, range.startIndex, "i32");
      address += SIZE_OF_INT;
      C.setValue(address, range.endIndex, "i32");
      address += SIZE_OF_INT;
    }
    __name(marshalRange, "marshalRange");
    function unmarshalRange(address) {
      const result = {};
      result.startPosition = unmarshalPoint(address);
      address += SIZE_OF_POINT;
      result.endPosition = unmarshalPoint(address);
      address += SIZE_OF_POINT;
      result.startIndex = C.getValue(address, "i32") >>> 0;
      address += SIZE_OF_INT;
      result.endIndex = C.getValue(address, "i32") >>> 0;
      return result;
    }
    __name(unmarshalRange, "unmarshalRange");
    function marshalEdit(edit, address = TRANSFER_BUFFER) {
      marshalPoint(address, edit.startPosition);
      address += SIZE_OF_POINT;
      marshalPoint(address, edit.oldEndPosition);
      address += SIZE_OF_POINT;
      marshalPoint(address, edit.newEndPosition);
      address += SIZE_OF_POINT;
      C.setValue(address, edit.startIndex, "i32");
      address += SIZE_OF_INT;
      C.setValue(address, edit.oldEndIndex, "i32");
      address += SIZE_OF_INT;
      C.setValue(address, edit.newEndIndex, "i32");
      address += SIZE_OF_INT;
    }
    __name(marshalEdit, "marshalEdit");
    function unmarshalLanguageMetadata(address) {
      const major_version = C.getValue(address, "i32");
      const minor_version = C.getValue(address += SIZE_OF_INT, "i32");
      const patch_version = C.getValue(address += SIZE_OF_INT, "i32");
      return { major_version, minor_version, patch_version };
    }
    __name(unmarshalLanguageMetadata, "unmarshalLanguageMetadata");
    var LANGUAGE_FUNCTION_REGEX = /^tree_sitter_\w+$/;
    var Language = class _Language {
      static {
        __name(this, "Language");
      }
      /** @internal */
      [0] = 0;
      // Internal handle for Wasm
      /**
       * A list of all node types in the language. The index of each type in this
       * array is its node type id.
       */
      types;
      /**
       * A list of all field names in the language. The index of each field name in
       * this array is its field id.
       */
      fields;
      /** @internal */
      constructor(internal, address) {
        assertInternal(internal);
        this[0] = address;
        this.types = new Array(C._ts_language_symbol_count(this[0]));
        for (let i2 = 0, n = this.types.length; i2 < n; i2++) {
          if (C._ts_language_symbol_type(this[0], i2) < 2) {
            this.types[i2] = C.UTF8ToString(C._ts_language_symbol_name(this[0], i2));
          }
        }
        this.fields = new Array(C._ts_language_field_count(this[0]) + 1);
        for (let i2 = 0, n = this.fields.length; i2 < n; i2++) {
          const fieldName = C._ts_language_field_name_for_id(this[0], i2);
          if (fieldName !== 0) {
            this.fields[i2] = C.UTF8ToString(fieldName);
          } else {
            this.fields[i2] = null;
          }
        }
      }
      /**
       * Gets the name of the language.
       */
      get name() {
        const ptr = C._ts_language_name(this[0]);
        if (ptr === 0) return null;
        return C.UTF8ToString(ptr);
      }
      /**
       * Gets the ABI version of the language.
       */
      get abiVersion() {
        return C._ts_language_abi_version(this[0]);
      }
      /**
      * Get the metadata for this language. This information is generated by the
      * CLI, and relies on the language author providing the correct metadata in
      * the language's `tree-sitter.json` file.
      */
      get metadata() {
        C._ts_language_metadata_wasm(this[0]);
        const length = C.getValue(TRANSFER_BUFFER, "i32");
        if (length === 0) return null;
        return unmarshalLanguageMetadata(TRANSFER_BUFFER + SIZE_OF_INT);
      }
      /**
       * Gets the number of fields in the language.
       */
      get fieldCount() {
        return this.fields.length - 1;
      }
      /**
       * Gets the number of states in the language.
       */
      get stateCount() {
        return C._ts_language_state_count(this[0]);
      }
      /**
       * Get the field id for a field name.
       */
      fieldIdForName(fieldName) {
        const result = this.fields.indexOf(fieldName);
        return result !== -1 ? result : null;
      }
      /**
       * Get the field name for a field id.
       */
      fieldNameForId(fieldId) {
        return this.fields[fieldId] ?? null;
      }
      /**
       * Get the node type id for a node type name.
       */
      idForNodeType(type, named) {
        const typeLength = C.lengthBytesUTF8(type);
        const typeAddress = C._malloc(typeLength + 1);
        C.stringToUTF8(type, typeAddress, typeLength + 1);
        const result = C._ts_language_symbol_for_name(this[0], typeAddress, typeLength, named ? 1 : 0);
        C._free(typeAddress);
        return result || null;
      }
      /**
       * Gets the number of node types in the language.
       */
      get nodeTypeCount() {
        return C._ts_language_symbol_count(this[0]);
      }
      /**
       * Get the node type name for a node type id.
       */
      nodeTypeForId(typeId) {
        const name2 = C._ts_language_symbol_name(this[0], typeId);
        return name2 ? C.UTF8ToString(name2) : null;
      }
      /**
       * Check if a node type is named.
       *
       * @see {@link https://tree-sitter.github.io/tree-sitter/using-parsers/2-basic-parsing.html#named-vs-anonymous-nodes}
       */
      nodeTypeIsNamed(typeId) {
        return C._ts_language_type_is_named_wasm(this[0], typeId) ? true : false;
      }
      /**
       * Check if a node type is visible.
       */
      nodeTypeIsVisible(typeId) {
        return C._ts_language_type_is_visible_wasm(this[0], typeId) ? true : false;
      }
      /**
       * Get the supertypes ids of this language.
       *
       * @see {@link https://tree-sitter.github.io/tree-sitter/using-parsers/6-static-node-types.html?highlight=supertype#supertype-nodes}
       */
      get supertypes() {
        C._ts_language_supertypes_wasm(this[0]);
        const count = C.getValue(TRANSFER_BUFFER, "i32");
        const buffer = C.getValue(TRANSFER_BUFFER + SIZE_OF_INT, "i32");
        const result = new Array(count);
        if (count > 0) {
          let address = buffer;
          for (let i2 = 0; i2 < count; i2++) {
            result[i2] = C.getValue(address, "i16");
            address += SIZE_OF_SHORT;
          }
        }
        return result;
      }
      /**
       * Get the subtype ids for a given supertype node id.
       */
      subtypes(supertype) {
        C._ts_language_subtypes_wasm(this[0], supertype);
        const count = C.getValue(TRANSFER_BUFFER, "i32");
        const buffer = C.getValue(TRANSFER_BUFFER + SIZE_OF_INT, "i32");
        const result = new Array(count);
        if (count > 0) {
          let address = buffer;
          for (let i2 = 0; i2 < count; i2++) {
            result[i2] = C.getValue(address, "i16");
            address += SIZE_OF_SHORT;
          }
        }
        return result;
      }
      /**
       * Get the next state id for a given state id and node type id.
       */
      nextState(stateId, typeId) {
        return C._ts_language_next_state(this[0], stateId, typeId);
      }
      /**
       * Create a new lookahead iterator for this language and parse state.
       *
       * This returns `null` if state is invalid for this language.
       *
       * Iterating {@link LookaheadIterator} will yield valid symbols in the given
       * parse state. A newly created iterator is not positioned on a symbol, so
       * {@link LookaheadIterator#currentType} returns `null` until the first
       * iteration step.
       *
       * Lookahead iterators can be useful for generating suggestions and improving
       * syntax error diagnostics. To get symbols valid in an `ERROR` node, use the
       * lookahead iterator on its first leaf node state. For `MISSING` nodes, a
       * lookahead iterator created on the previous non-extra leaf node may be
       * appropriate.
       */
      lookaheadIterator(stateId) {
        const address = C._ts_lookahead_iterator_new(this[0], stateId);
        if (address) return new LookaheadIterator(INTERNAL, address, this);
        return null;
      }
      /**
       * Load a language from a WebAssembly module.
       * The module can be provided as a path to a file, a `URL` to a file, or as a
       * buffer.
       */
      static async load(input) {
        let binary2;
        if (input instanceof Uint8Array) {
          binary2 = input;
        } else if (globalThis.process?.versions.node) {
          const fs2 = await import("fs/promises");
          binary2 = await fs2.readFile(input);
        } else {
          const response = await fetch(input);
          if (!response.ok) {
            const body2 = await response.text();
            throw new Error(`Language.load failed with status ${response.status}.

${body2}`);
          }
          const retryResp = response.clone();
          try {
            binary2 = await WebAssembly.compileStreaming(response);
          } catch (reason) {
            console.error("wasm streaming compile failed:", reason);
            console.error("falling back to ArrayBuffer instantiation");
            binary2 = new Uint8Array(await retryResp.arrayBuffer());
          }
        }
        const mod = await C.loadWebAssemblyModule(binary2, { loadAsync: true });
        return _Language.loadFromWasmExports(mod, { sync: false });
      }
      static loadFromWasmExports(mod, { sync }) {
        const symbolNames = Object.keys(mod);
        const functionName = symbolNames.find((key) => LANGUAGE_FUNCTION_REGEX.test(key) && !key.includes("external_scanner_"));
        if (!functionName) {
          console.log(`Couldn't find language function in Wasm file. Symbols:
${JSON.stringify(symbolNames, null, 2)}`);
          throw new Error(`Language.${sync ? "loadSync" : "load"} failed: no language function found in Wasm file`);
        }
        const languageAddress = mod[functionName]();
        return new _Language(INTERNAL, languageAddress);
      }
      /**
       * Load a language synchronously from a pre-compiled WebAssembly module.
       * Use this when the host environment provides a `WebAssembly.Module` directly.
       */
      static loadSync(wasmModule) {
        const mod = C.loadWebAssemblyModule(wasmModule, { loadAsync: false });
        return _Language.loadFromWasmExports(mod, { sync: true });
      }
    };
    var import_web_tree_sitter = __toESM(require_web_tree_sitter(), 1);
    var Module2 = null;
    async function initializeBinding(moduleOptions) {
      return Module2 ??= await (0, import_web_tree_sitter.default)(moduleOptions);
    }
    __name(initializeBinding, "initializeBinding");
    function checkModule() {
      return !!Module2;
    }
    __name(checkModule, "checkModule");
    var TRANSFER_BUFFER;
    var LANGUAGE_VERSION;
    var MIN_COMPATIBLE_VERSION;
    var finalizer4 = newFinalizer((addresses) => {
      C._ts_parser_delete(addresses[0]);
      C._free(addresses[1]);
    });
    var Parser = class {
      static {
        __name(this, "Parser");
      }
      /** @internal */
      [0] = 0;
      // Internal handle for Wasm
      /** @internal */
      [1] = 0;
      // Internal handle for Wasm
      /** @internal */
      logCallback = null;
      /** The parser's current language. */
      language = null;
      /**
       * This must always be called before creating a Parser.
       *
       * You can optionally pass in options to configure the Wasm module, the most common
       * one being `locateFile` to help the module find the `.wasm` file.
       */
      static async init(moduleOptions) {
        setModule(await initializeBinding(moduleOptions));
        TRANSFER_BUFFER = C._ts_init();
        LANGUAGE_VERSION = C.getValue(TRANSFER_BUFFER, "i32");
        MIN_COMPATIBLE_VERSION = C.getValue(TRANSFER_BUFFER + SIZE_OF_INT, "i32");
      }
      /**
       * Create a new parser.
       */
      constructor() {
        this.initialize();
        finalizer4?.register(this, [this[0], this[1]], this);
      }
      /** @internal */
      initialize() {
        if (!checkModule()) {
          throw new Error("cannot construct a Parser before calling `init()`");
        }
        C._ts_parser_new_wasm();
        this[0] = C.getValue(TRANSFER_BUFFER, "i32");
        this[1] = C.getValue(TRANSFER_BUFFER + SIZE_OF_INT, "i32");
      }
      /** Delete the parser, freeing its resources. */
      delete() {
        finalizer4?.unregister(this);
        C._ts_parser_delete(this[0]);
        C._free(this[1]);
        this[0] = 0;
        this[1] = 0;
      }
      /**
       * Set the language that the parser should use for parsing.
       *
       * If the language was not successfully assigned, an error will be thrown.
       * This happens if the language was generated with an incompatible
       * version of the Tree-sitter CLI. Check the language's version using
       * {@link Language#version} and compare it to this library's
       * {@link LANGUAGE_VERSION} and {@link MIN_COMPATIBLE_VERSION} constants.
       */
      setLanguage(language) {
        let address;
        if (!language) {
          address = 0;
          this.language = null;
        } else if (language.constructor === Language) {
          address = language[0];
          const version = C._ts_language_abi_version(address);
          if (version < MIN_COMPATIBLE_VERSION || LANGUAGE_VERSION < version) {
            throw new Error(
              `Incompatible language version ${version}. Compatibility range ${MIN_COMPATIBLE_VERSION} through ${LANGUAGE_VERSION}.`
            );
          }
          this.language = language;
        } else {
          throw new Error("Argument must be a Language");
        }
        C._ts_parser_set_language(this[0], address);
        return this;
      }
      /**
       * Parse a slice of UTF8 text.
       *
       * @param {string | ParseCallback} callback - The UTF8-encoded text to parse or a callback function.
       *
       * @param {Tree | null} [oldTree] - A previous syntax tree parsed from the same document. If the text of the
       *   document has changed since `oldTree` was created, then you must edit `oldTree` to match
       *   the new text using {@link Tree#edit}.
       *
       * @param {ParseOptions} [options] - Options for parsing the text.
       *  This can be used to set the included ranges, or a progress callback.
       *
       * @returns {Tree | null} A {@link Tree} if parsing succeeded, or `null` if:
       *  - The parser has not yet had a language assigned with {@link Parser#setLanguage}.
       *  - The progress callback returned true.
       */
      parse(callback, oldTree, options) {
        if (typeof callback === "string") {
          C.currentParseCallback = (index) => callback.slice(index);
        } else if (typeof callback === "function") {
          C.currentParseCallback = callback;
        } else {
          throw new Error("Argument must be a string or a function");
        }
        if (options?.progressCallback) {
          C.currentProgressCallback = options.progressCallback;
        } else {
          C.currentProgressCallback = null;
        }
        if (this.logCallback) {
          C.currentLogCallback = this.logCallback;
          C._ts_parser_enable_logger_wasm(this[0], 1);
        } else {
          C.currentLogCallback = null;
          C._ts_parser_enable_logger_wasm(this[0], 0);
        }
        let rangeCount = 0;
        let rangeAddress = 0;
        if (options?.includedRanges) {
          rangeCount = options.includedRanges.length;
          rangeAddress = C._calloc(rangeCount, SIZE_OF_RANGE);
          let address = rangeAddress;
          for (let i2 = 0; i2 < rangeCount; i2++) {
            marshalRange(address, options.includedRanges[i2]);
            address += SIZE_OF_RANGE;
          }
        }
        const treeAddress = C._ts_parser_parse_wasm(
          this[0],
          this[1],
          oldTree ? oldTree[0] : 0,
          rangeAddress,
          rangeCount
        );
        if (!treeAddress) {
          C.currentParseCallback = null;
          C.currentLogCallback = null;
          C.currentProgressCallback = null;
          return null;
        }
        if (!this.language) {
          throw new Error("Parser must have a language to parse");
        }
        const result = new Tree(INTERNAL, treeAddress, this.language, C.currentParseCallback);
        C.currentParseCallback = null;
        C.currentLogCallback = null;
        C.currentProgressCallback = null;
        return result;
      }
      /**
       * Instruct the parser to start the next parse from the beginning.
       *
       * If the parser previously failed because of a callback, 
       * then by default, it will resume where it left off on the
       * next call to {@link Parser#parse} or other parsing functions.
       * If you don't want to resume, and instead intend to use this parser to
       * parse some other document, you must call `reset` first.
       */
      reset() {
        C._ts_parser_reset(this[0]);
      }
      /** Get the ranges of text that the parser will include when parsing. */
      getIncludedRanges() {
        C._ts_parser_included_ranges_wasm(this[0]);
        const count = C.getValue(TRANSFER_BUFFER, "i32");
        const buffer = C.getValue(TRANSFER_BUFFER + SIZE_OF_INT, "i32");
        const result = new Array(count);
        if (count > 0) {
          let address = buffer;
          for (let i2 = 0; i2 < count; i2++) {
            result[i2] = unmarshalRange(address);
            address += SIZE_OF_RANGE;
          }
          C._free(buffer);
        }
        return result;
      }
      /** Set the logging callback that a parser should use during parsing. */
      setLogger(callback) {
        if (!callback) {
          this.logCallback = null;
        } else if (typeof callback !== "function") {
          throw new Error("Logger callback must be a function");
        } else {
          this.logCallback = callback;
        }
        return this;
      }
      /** Get the parser's current logger. */
      getLogger() {
        return this.logCallback;
      }
    };
    var PREDICATE_STEP_TYPE_CAPTURE = 1;
    var PREDICATE_STEP_TYPE_STRING = 2;
    var QUERY_WORD_REGEX = /[\w-]+/g;
    var CaptureQuantifier = {
      Zero: 0,
      ZeroOrOne: 1,
      ZeroOrMore: 2,
      One: 3,
      OneOrMore: 4
    };
    var isCaptureStep = /* @__PURE__ */ __name((step) => step.type === "capture", "isCaptureStep");
    var isStringStep = /* @__PURE__ */ __name((step) => step.type === "string", "isStringStep");
    var QueryErrorKind = {
      Syntax: 1,
      NodeName: 2,
      FieldName: 3,
      CaptureName: 4,
      PatternStructure: 5
    };
    var QueryError = class _QueryError extends Error {
      constructor(kind, info2, index, length) {
        super(_QueryError.formatMessage(kind, info2));
        this.kind = kind;
        this.info = info2;
        this.index = index;
        this.length = length;
        this.name = "QueryError";
      }
      kind;
      info;
      index;
      length;
      static {
        __name(this, "QueryError");
      }
      /** Formats an error message based on the error kind and info */
      static formatMessage(kind, info2) {
        switch (kind) {
          case QueryErrorKind.NodeName:
            return `Bad node name '${info2.word}'`;
          case QueryErrorKind.FieldName:
            return `Bad field name '${info2.word}'`;
          case QueryErrorKind.CaptureName:
            return `Bad capture name @${info2.word}`;
          case QueryErrorKind.PatternStructure:
            return `Bad pattern structure at offset ${info2.suffix}`;
          case QueryErrorKind.Syntax:
            return `Bad syntax at offset ${info2.suffix}`;
        }
      }
    };
    function parseAnyPredicate(steps, index, operator, textPredicates) {
      if (steps.length !== 3) {
        throw new Error(
          `Wrong number of arguments to \`#${operator}\` predicate. Expected 2, got ${steps.length - 1}`
        );
      }
      if (!isCaptureStep(steps[1])) {
        throw new Error(
          `First argument of \`#${operator}\` predicate must be a capture. Got "${steps[1].value}"`
        );
      }
      const isPositive = operator === "eq?" || operator === "any-eq?";
      const matchAll = !operator.startsWith("any-");
      if (isCaptureStep(steps[2])) {
        const captureName1 = steps[1].name;
        const captureName2 = steps[2].name;
        textPredicates[index].push((captures) => {
          const nodes1 = [];
          const nodes2 = [];
          for (const c of captures) {
            if (c.name === captureName1) nodes1.push(c.node);
            if (c.name === captureName2) nodes2.push(c.node);
          }
          const compare = /* @__PURE__ */ __name((n1, n2, positive) => {
            return positive ? n1.text === n2.text : n1.text !== n2.text;
          }, "compare");
          return matchAll ? nodes1.every((n1) => nodes2.some((n2) => compare(n1, n2, isPositive))) : nodes1.some((n1) => nodes2.some((n2) => compare(n1, n2, isPositive)));
        });
      } else {
        const captureName = steps[1].name;
        const stringValue = steps[2].value;
        const matches = /* @__PURE__ */ __name((n) => n.text === stringValue, "matches");
        const doesNotMatch = /* @__PURE__ */ __name((n) => n.text !== stringValue, "doesNotMatch");
        textPredicates[index].push((captures) => {
          const nodes = [];
          for (const c of captures) {
            if (c.name === captureName) nodes.push(c.node);
          }
          const test = isPositive ? matches : doesNotMatch;
          return matchAll ? nodes.every(test) : nodes.some(test);
        });
      }
    }
    __name(parseAnyPredicate, "parseAnyPredicate");
    function parseMatchPredicate(steps, index, operator, textPredicates) {
      if (steps.length !== 3) {
        throw new Error(
          `Wrong number of arguments to \`#${operator}\` predicate. Expected 2, got ${steps.length - 1}.`
        );
      }
      if (steps[1].type !== "capture") {
        throw new Error(
          `First argument of \`#${operator}\` predicate must be a capture. Got "${steps[1].value}".`
        );
      }
      if (steps[2].type !== "string") {
        throw new Error(
          `Second argument of \`#${operator}\` predicate must be a string. Got @${steps[2].name}.`
        );
      }
      const isPositive = operator === "match?" || operator === "any-match?";
      const matchAll = !operator.startsWith("any-");
      const captureName = steps[1].name;
      const regex = new RegExp(steps[2].value);
      textPredicates[index].push((captures) => {
        const nodes = [];
        for (const c of captures) {
          if (c.name === captureName) nodes.push(c.node.text);
        }
        const test = /* @__PURE__ */ __name((text, positive) => {
          return positive ? regex.test(text) : !regex.test(text);
        }, "test");
        if (nodes.length === 0) return !isPositive;
        return matchAll ? nodes.every((text) => test(text, isPositive)) : nodes.some((text) => test(text, isPositive));
      });
    }
    __name(parseMatchPredicate, "parseMatchPredicate");
    function parseAnyOfPredicate(steps, index, operator, textPredicates) {
      if (steps.length < 2) {
        throw new Error(
          `Wrong number of arguments to \`#${operator}\` predicate. Expected at least 1. Got ${steps.length - 1}.`
        );
      }
      if (steps[1].type !== "capture") {
        throw new Error(
          `First argument of \`#${operator}\` predicate must be a capture. Got "${steps[1].value}".`
        );
      }
      const isPositive = operator === "any-of?";
      const captureName = steps[1].name;
      const stringSteps = steps.slice(2);
      if (!stringSteps.every(isStringStep)) {
        throw new Error(
          `Arguments to \`#${operator}\` predicate must be strings.".`
        );
      }
      const values = stringSteps.map((s) => s.value);
      textPredicates[index].push((captures) => {
        const nodes = [];
        for (const c of captures) {
          if (c.name === captureName) nodes.push(c.node.text);
        }
        if (nodes.length === 0) return !isPositive;
        return nodes.every((text) => values.includes(text)) === isPositive;
      });
    }
    __name(parseAnyOfPredicate, "parseAnyOfPredicate");
    function parseIsPredicate(steps, index, operator, assertedProperties, refutedProperties) {
      if (steps.length < 2 || steps.length > 3) {
        throw new Error(
          `Wrong number of arguments to \`#${operator}\` predicate. Expected 1 or 2. Got ${steps.length - 1}.`
        );
      }
      if (!steps.every(isStringStep)) {
        throw new Error(
          `Arguments to \`#${operator}\` predicate must be strings.".`
        );
      }
      const properties = operator === "is?" ? assertedProperties : refutedProperties;
      if (!properties[index]) properties[index] = {};
      properties[index][steps[1].value] = steps[2]?.value ?? null;
    }
    __name(parseIsPredicate, "parseIsPredicate");
    function parseSetDirective(steps, index, setProperties) {
      if (steps.length < 2 || steps.length > 3) {
        throw new Error(`Wrong number of arguments to \`#set!\` predicate. Expected 1 or 2. Got ${steps.length - 1}.`);
      }
      if (!steps.every(isStringStep)) {
        throw new Error(`Arguments to \`#set!\` predicate must be strings.".`);
      }
      if (!setProperties[index]) setProperties[index] = {};
      setProperties[index][steps[1].value] = steps[2]?.value ?? null;
    }
    __name(parseSetDirective, "parseSetDirective");
    function parsePattern(index, stepType, stepValueId, captureNames, stringValues, steps, textPredicates, predicates, setProperties, assertedProperties, refutedProperties) {
      if (stepType === PREDICATE_STEP_TYPE_CAPTURE) {
        const name2 = captureNames[stepValueId];
        steps.push({ type: "capture", name: name2 });
      } else if (stepType === PREDICATE_STEP_TYPE_STRING) {
        steps.push({ type: "string", value: stringValues[stepValueId] });
      } else if (steps.length > 0) {
        if (steps[0].type !== "string") {
          throw new Error("Predicates must begin with a literal value");
        }
        const operator = steps[0].value;
        switch (operator) {
          case "any-not-eq?":
          case "not-eq?":
          case "any-eq?":
          case "eq?":
            parseAnyPredicate(steps, index, operator, textPredicates);
            break;
          case "any-not-match?":
          case "not-match?":
          case "any-match?":
          case "match?":
            parseMatchPredicate(steps, index, operator, textPredicates);
            break;
          case "not-any-of?":
          case "any-of?":
            parseAnyOfPredicate(steps, index, operator, textPredicates);
            break;
          case "is?":
          case "is-not?":
            parseIsPredicate(steps, index, operator, assertedProperties, refutedProperties);
            break;
          case "set!":
            parseSetDirective(steps, index, setProperties);
            break;
          default:
            predicates[index].push({ operator, operands: steps.slice(1) });
        }
        steps.length = 0;
      }
    }
    __name(parsePattern, "parsePattern");
    var finalizer5 = newFinalizer((address) => {
      C._ts_query_delete(address);
    });
    var Query = class {
      static {
        __name(this, "Query");
      }
      /** @internal */
      [0] = 0;
      // Internal handle for Wasm
      /** @internal */
      exceededMatchLimit;
      /** @internal */
      textPredicates;
      /** The names of the captures used in the query. */
      captureNames;
      /** The quantifiers of the captures used in the query. */
      captureQuantifiers;
      /**
       * The other user-defined predicates associated with the given index.
       *
       * This includes predicates with operators other than:
       * - `match?`
       * - `eq?` and `not-eq?`
       * - `any-of?` and `not-any-of?`
       * - `is?` and `is-not?`
       * - `set!`
       */
      predicates;
      /** The properties for predicates with the operator `set!`. */
      setProperties;
      /** The properties for predicates with the operator `is?`. */
      assertedProperties;
      /** The properties for predicates with the operator `is-not?`. */
      refutedProperties;
      /** The maximum number of in-progress matches for this cursor. */
      matchLimit;
      /**
       * Create a new query from a string containing one or more S-expression
       * patterns.
       *
       * The query is associated with a particular language, and can only be run
       * on syntax nodes parsed with that language. References to Queries can be
       * shared between multiple threads.
       *
       * @link {@see https://tree-sitter.github.io/tree-sitter/using-parsers/queries}
       */
      constructor(language, source) {
        const sourceLength = C.lengthBytesUTF8(source);
        const sourceAddress = C._malloc(sourceLength + 1);
        C.stringToUTF8(source, sourceAddress, sourceLength + 1);
        const address = C._ts_query_new(
          language[0],
          sourceAddress,
          sourceLength,
          TRANSFER_BUFFER,
          TRANSFER_BUFFER + SIZE_OF_INT
        );
        if (!address) {
          const errorId = C.getValue(TRANSFER_BUFFER + SIZE_OF_INT, "i32");
          const errorByte = C.getValue(TRANSFER_BUFFER, "i32");
          const errorIndex = C.UTF8ToString(sourceAddress, errorByte).length;
          const suffix = source.slice(errorIndex, errorIndex + 100).split("\n")[0];
          const word = suffix.match(QUERY_WORD_REGEX)?.[0] ?? "";
          C._free(sourceAddress);
          switch (errorId) {
            case QueryErrorKind.Syntax:
              throw new QueryError(QueryErrorKind.Syntax, { suffix: `${errorIndex}: '${suffix}'...` }, errorIndex, 0);
            case QueryErrorKind.NodeName:
              throw new QueryError(errorId, { word }, errorIndex, word.length);
            case QueryErrorKind.FieldName:
              throw new QueryError(errorId, { word }, errorIndex, word.length);
            case QueryErrorKind.CaptureName:
              throw new QueryError(errorId, { word }, errorIndex, word.length);
            case QueryErrorKind.PatternStructure:
              throw new QueryError(errorId, { suffix: `${errorIndex}: '${suffix}'...` }, errorIndex, 0);
          }
        }
        const stringCount = C._ts_query_string_count(address);
        const captureCount = C._ts_query_capture_count(address);
        const patternCount = C._ts_query_pattern_count(address);
        const captureNames = new Array(captureCount);
        const captureQuantifiers = new Array(patternCount);
        const stringValues = new Array(stringCount);
        for (let i2 = 0; i2 < captureCount; i2++) {
          const nameAddress = C._ts_query_capture_name_for_id(
            address,
            i2,
            TRANSFER_BUFFER
          );
          const nameLength = C.getValue(TRANSFER_BUFFER, "i32");
          captureNames[i2] = C.UTF8ToString(nameAddress, nameLength);
        }
        for (let i2 = 0; i2 < patternCount; i2++) {
          const captureQuantifiersArray = new Array(captureCount);
          for (let j = 0; j < captureCount; j++) {
            const quantifier = C._ts_query_capture_quantifier_for_id(address, i2, j);
            captureQuantifiersArray[j] = quantifier;
          }
          captureQuantifiers[i2] = captureQuantifiersArray;
        }
        for (let i2 = 0; i2 < stringCount; i2++) {
          const valueAddress = C._ts_query_string_value_for_id(
            address,
            i2,
            TRANSFER_BUFFER
          );
          const nameLength = C.getValue(TRANSFER_BUFFER, "i32");
          stringValues[i2] = C.UTF8ToString(valueAddress, nameLength);
        }
        const setProperties = new Array(patternCount);
        const assertedProperties = new Array(patternCount);
        const refutedProperties = new Array(patternCount);
        const predicates = new Array(patternCount);
        const textPredicates = new Array(patternCount);
        for (let i2 = 0; i2 < patternCount; i2++) {
          const predicatesAddress = C._ts_query_predicates_for_pattern(address, i2, TRANSFER_BUFFER);
          const stepCount = C.getValue(TRANSFER_BUFFER, "i32");
          predicates[i2] = [];
          textPredicates[i2] = [];
          const steps = new Array();
          let stepAddress = predicatesAddress;
          for (let j = 0; j < stepCount; j++) {
            const stepType = C.getValue(stepAddress, "i32");
            stepAddress += SIZE_OF_INT;
            const stepValueId = C.getValue(stepAddress, "i32");
            stepAddress += SIZE_OF_INT;
            parsePattern(
              i2,
              stepType,
              stepValueId,
              captureNames,
              stringValues,
              steps,
              textPredicates,
              predicates,
              setProperties,
              assertedProperties,
              refutedProperties
            );
          }
          Object.freeze(textPredicates[i2]);
          Object.freeze(predicates[i2]);
          Object.freeze(setProperties[i2]);
          Object.freeze(assertedProperties[i2]);
          Object.freeze(refutedProperties[i2]);
        }
        C._free(sourceAddress);
        this[0] = address;
        this.captureNames = captureNames;
        this.captureQuantifiers = captureQuantifiers;
        this.textPredicates = textPredicates;
        this.predicates = predicates;
        this.setProperties = setProperties;
        this.assertedProperties = assertedProperties;
        this.refutedProperties = refutedProperties;
        this.exceededMatchLimit = false;
        finalizer5?.register(this, address, this);
      }
      /** Delete the query, freeing its resources. */
      delete() {
        finalizer5?.unregister(this);
        C._ts_query_delete(this[0]);
        this[0] = 0;
      }
      /**
       * Iterate over all of the matches in the order that they were found.
       *
       * Each match contains the index of the pattern that matched, and a list of
       * captures. Because multiple patterns can match the same set of nodes,
       * one match may contain captures that appear *before* some of the
       * captures from a previous match.
       *
       * @param {Node} node - The node to execute the query on.
       *
       * @param {QueryOptions} options - Options for query execution.
       */
      matches(node, options = {}) {
        const startPosition = options.startPosition ?? ZERO_POINT;
        const endPosition = options.endPosition ?? ZERO_POINT;
        const startIndex = options.startIndex ?? 0;
        const endIndex = options.endIndex ?? 0;
        const startContainingPosition = options.startContainingPosition ?? ZERO_POINT;
        const endContainingPosition = options.endContainingPosition ?? ZERO_POINT;
        const startContainingIndex = options.startContainingIndex ?? 0;
        const endContainingIndex = options.endContainingIndex ?? 0;
        const matchLimit = options.matchLimit ?? 4294967295;
        const maxStartDepth = options.maxStartDepth ?? 4294967295;
        const progressCallback = options.progressCallback;
        if (typeof matchLimit !== "number") {
          throw new Error("Arguments must be numbers");
        }
        this.matchLimit = matchLimit;
        if (endIndex !== 0 && startIndex > endIndex) {
          throw new Error("`startIndex` cannot be greater than `endIndex`");
        }
        if (endPosition !== ZERO_POINT && (startPosition.row > endPosition.row || startPosition.row === endPosition.row && startPosition.column > endPosition.column)) {
          throw new Error("`startPosition` cannot be greater than `endPosition`");
        }
        if (endContainingIndex !== 0 && startContainingIndex > endContainingIndex) {
          throw new Error("`startContainingIndex` cannot be greater than `endContainingIndex`");
        }
        if (endContainingPosition !== ZERO_POINT && (startContainingPosition.row > endContainingPosition.row || startContainingPosition.row === endContainingPosition.row && startContainingPosition.column > endContainingPosition.column)) {
          throw new Error("`startContainingPosition` cannot be greater than `endContainingPosition`");
        }
        if (progressCallback) {
          C.currentQueryProgressCallback = progressCallback;
        }
        marshalNode(node);
        C._ts_query_matches_wasm(
          this[0],
          node.tree[0],
          startPosition.row,
          startPosition.column,
          endPosition.row,
          endPosition.column,
          startIndex,
          endIndex,
          startContainingPosition.row,
          startContainingPosition.column,
          endContainingPosition.row,
          endContainingPosition.column,
          startContainingIndex,
          endContainingIndex,
          matchLimit,
          maxStartDepth
        );
        const rawCount = C.getValue(TRANSFER_BUFFER, "i32");
        const startAddress = C.getValue(TRANSFER_BUFFER + SIZE_OF_INT, "i32");
        const didExceedMatchLimit = C.getValue(TRANSFER_BUFFER + 2 * SIZE_OF_INT, "i32");
        const result = new Array(rawCount);
        this.exceededMatchLimit = Boolean(didExceedMatchLimit);
        let filteredCount = 0;
        let address = startAddress;
        for (let i2 = 0; i2 < rawCount; i2++) {
          const patternIndex = C.getValue(address, "i32");
          address += SIZE_OF_INT;
          const captureCount = C.getValue(address, "i32");
          address += SIZE_OF_INT;
          const captures = new Array(captureCount);
          address = unmarshalCaptures(this, node.tree, address, patternIndex, captures);
          if (this.textPredicates[patternIndex].every((p) => p(captures))) {
            result[filteredCount] = { patternIndex, captures };
            const setProperties = this.setProperties[patternIndex];
            result[filteredCount].setProperties = setProperties;
            const assertedProperties = this.assertedProperties[patternIndex];
            result[filteredCount].assertedProperties = assertedProperties;
            const refutedProperties = this.refutedProperties[patternIndex];
            result[filteredCount].refutedProperties = refutedProperties;
            filteredCount++;
          }
        }
        result.length = filteredCount;
        C._free(startAddress);
        C.currentQueryProgressCallback = null;
        return result;
      }
      /**
       * Iterate over all of the individual captures in the order that they
       * appear.
       *
       * This is useful if you don't care about which pattern matched, and just
       * want a single, ordered sequence of captures.
       *
       * @param {Node} node - The node to execute the query on.
       *
       * @param {QueryOptions} options - Options for query execution.
       */
      captures(node, options = {}) {
        const startPosition = options.startPosition ?? ZERO_POINT;
        const endPosition = options.endPosition ?? ZERO_POINT;
        const startIndex = options.startIndex ?? 0;
        const endIndex = options.endIndex ?? 0;
        const startContainingPosition = options.startContainingPosition ?? ZERO_POINT;
        const endContainingPosition = options.endContainingPosition ?? ZERO_POINT;
        const startContainingIndex = options.startContainingIndex ?? 0;
        const endContainingIndex = options.endContainingIndex ?? 0;
        const matchLimit = options.matchLimit ?? 4294967295;
        const maxStartDepth = options.maxStartDepth ?? 4294967295;
        const progressCallback = options.progressCallback;
        if (typeof matchLimit !== "number") {
          throw new Error("Arguments must be numbers");
        }
        this.matchLimit = matchLimit;
        if (endIndex !== 0 && startIndex > endIndex) {
          throw new Error("`startIndex` cannot be greater than `endIndex`");
        }
        if (endPosition !== ZERO_POINT && (startPosition.row > endPosition.row || startPosition.row === endPosition.row && startPosition.column > endPosition.column)) {
          throw new Error("`startPosition` cannot be greater than `endPosition`");
        }
        if (endContainingIndex !== 0 && startContainingIndex > endContainingIndex) {
          throw new Error("`startContainingIndex` cannot be greater than `endContainingIndex`");
        }
        if (endContainingPosition !== ZERO_POINT && (startContainingPosition.row > endContainingPosition.row || startContainingPosition.row === endContainingPosition.row && startContainingPosition.column > endContainingPosition.column)) {
          throw new Error("`startContainingPosition` cannot be greater than `endContainingPosition`");
        }
        if (progressCallback) {
          C.currentQueryProgressCallback = progressCallback;
        }
        marshalNode(node);
        C._ts_query_captures_wasm(
          this[0],
          node.tree[0],
          startPosition.row,
          startPosition.column,
          endPosition.row,
          endPosition.column,
          startIndex,
          endIndex,
          startContainingPosition.row,
          startContainingPosition.column,
          endContainingPosition.row,
          endContainingPosition.column,
          startContainingIndex,
          endContainingIndex,
          matchLimit,
          maxStartDepth
        );
        const count = C.getValue(TRANSFER_BUFFER, "i32");
        const startAddress = C.getValue(TRANSFER_BUFFER + SIZE_OF_INT, "i32");
        const didExceedMatchLimit = C.getValue(TRANSFER_BUFFER + 2 * SIZE_OF_INT, "i32");
        const result = new Array();
        this.exceededMatchLimit = Boolean(didExceedMatchLimit);
        const captures = new Array();
        let address = startAddress;
        for (let i2 = 0; i2 < count; i2++) {
          const patternIndex = C.getValue(address, "i32");
          address += SIZE_OF_INT;
          const captureCount = C.getValue(address, "i32");
          address += SIZE_OF_INT;
          const captureIndex = C.getValue(address, "i32");
          address += SIZE_OF_INT;
          captures.length = captureCount;
          address = unmarshalCaptures(this, node.tree, address, patternIndex, captures);
          if (this.textPredicates[patternIndex].every((p) => p(captures))) {
            const capture = captures[captureIndex];
            const setProperties = this.setProperties[patternIndex];
            capture.setProperties = setProperties;
            const assertedProperties = this.assertedProperties[patternIndex];
            capture.assertedProperties = assertedProperties;
            const refutedProperties = this.refutedProperties[patternIndex];
            capture.refutedProperties = refutedProperties;
            result.push(capture);
          }
        }
        C._free(startAddress);
        C.currentQueryProgressCallback = null;
        return result;
      }
      /** Get the predicates for a given pattern. */
      predicatesForPattern(patternIndex) {
        return this.predicates[patternIndex];
      }
      /**
       * Disable a certain capture within a query.
       *
       * This prevents the capture from being returned in matches, and also
       * avoids any resource usage associated with recording the capture.
       */
      disableCapture(captureName) {
        const captureNameLength = C.lengthBytesUTF8(captureName);
        const captureNameAddress = C._malloc(captureNameLength + 1);
        C.stringToUTF8(captureName, captureNameAddress, captureNameLength + 1);
        C._ts_query_disable_capture(this[0], captureNameAddress, captureNameLength);
        C._free(captureNameAddress);
      }
      /**
       * Disable a certain pattern within a query.
       *
       * This prevents the pattern from matching, and also avoids any resource
       * usage associated with the pattern. This throws an error if the pattern
       * index is out of bounds.
       */
      disablePattern(patternIndex) {
        if (patternIndex >= this.predicates.length) {
          throw new Error(
            `Pattern index is ${patternIndex} but the pattern count is ${this.predicates.length}`
          );
        }
        C._ts_query_disable_pattern(this[0], patternIndex);
      }
      /**
       * Check if, on its last execution, this cursor exceeded its maximum number
       * of in-progress matches.
       */
      didExceedMatchLimit() {
        return this.exceededMatchLimit;
      }
      /** Get the byte offset where the given pattern starts in the query's source. */
      startIndexForPattern(patternIndex) {
        if (patternIndex >= this.predicates.length) {
          throw new Error(
            `Pattern index is ${patternIndex} but the pattern count is ${this.predicates.length}`
          );
        }
        return C._ts_query_start_byte_for_pattern(this[0], patternIndex);
      }
      /** Get the byte offset where the given pattern ends in the query's source. */
      endIndexForPattern(patternIndex) {
        if (patternIndex >= this.predicates.length) {
          throw new Error(
            `Pattern index is ${patternIndex} but the pattern count is ${this.predicates.length}`
          );
        }
        return C._ts_query_end_byte_for_pattern(this[0], patternIndex);
      }
      /** Get the number of patterns in the query. */
      patternCount() {
        return C._ts_query_pattern_count(this[0]);
      }
      /** Get the index for a given capture name. */
      captureIndexForName(captureName) {
        return this.captureNames.indexOf(captureName);
      }
      /** Check if a given pattern within a query has a single root node. */
      isPatternRooted(patternIndex) {
        return C._ts_query_is_pattern_rooted(this[0], patternIndex) === 1;
      }
      /** Check if a given pattern within a query has a single root node. */
      isPatternNonLocal(patternIndex) {
        return C._ts_query_is_pattern_non_local(this[0], patternIndex) === 1;
      }
      /**
       * Check if a given step in a query is 'definite'.
       *
       * A query step is 'definite' if its parent pattern will be guaranteed to
       * match successfully once it reaches the step.
       */
      isPatternGuaranteedAtStep(byteIndex) {
        return C._ts_query_is_pattern_guaranteed_at_step(this[0], byteIndex) === 1;
      }
    };
    module.exports.default = module.exports;
  }
});

// build/parser.js
var require_parser = __commonJS2({
  "build/parser.js"(exports2) {
    "use strict";
    var __createBinding2 = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault2 = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar2 = exports2 && exports2.__importStar || /* @__PURE__ */ (function() {
      var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i2 = 0; i2 < k.length; i2++) if (k[i2] !== "default") __createBinding2(result, mod, k[i2]);
        }
        __setModuleDefault2(result, mod);
        return result;
      };
    })();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.initParser = initParser;
    exports2.parse = parse;
    var path2 = __importStar2(require("path"));
    var web_tree_sitter_1 = require_web_tree_sitter2();
    var parser;
    async function initParser(wasmPath) {
      if (parser) {
        return;
      }
      await web_tree_sitter_1.Parser.init({ locateFile: (name2) => path2.join(__dirname, name2) });
      const file = wasmPath ?? path2.join(__dirname, "..", "tree-sitter-tikker.wasm");
      const language = await web_tree_sitter_1.Language.load(file);
      parser = new web_tree_sitter_1.Parser();
      parser.setLanguage(language);
    }
    function parse(text) {
      if (!parser) {
        throw new Error("initParser() has not finished");
      }
      const tree = parser.parse(text);
      if (!tree) {
        throw new Error("the parser returned no tree");
      }
      return tree;
    }
  }
});

// build/tree.js
var require_tree = __commonJS2({
  "build/tree.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.kids = kids;
    exports2.first = first;
    exports2.field = field;
    exports2.fields = fields;
    exports2.walk = walk;
    exports2.hasAncestor = hasAncestor;
    exports2.rangeOf = rangeOf;
    exports2.spanOf = spanOf;
    exports2.nodeAt = nodeAt;
    function kids(node, type) {
      const out2 = [];
      for (const child of node.children) {
        if (child && child.isNamed && (type === void 0 || child.type === type)) {
          out2.push(child);
        }
      }
      return out2;
    }
    function first(node, type) {
      return kids(node, type)[0];
    }
    function field(node, name2) {
      return node.childForFieldName(name2) ?? void 0;
    }
    function fields(node, name2) {
      return node.childrenForFieldName(name2).filter((n) => !!n);
    }
    function walk(node, fn) {
      if (node.type === "ERROR") {
        return;
      }
      if (fn(node) === false) {
        return;
      }
      for (const child of node.children) {
        if (child && child.isNamed) {
          walk(child, fn);
        }
      }
    }
    function hasAncestor(node, type) {
      let p = node.parent;
      while (p) {
        if (p.type === type) {
          return true;
        }
        p = p.parent;
      }
      return false;
    }
    function rangeOf(node) {
      return {
        start: { line: node.startPosition.row, character: node.startPosition.column },
        end: { line: node.endPosition.row, character: node.endPosition.column }
      };
    }
    function spanOf(a, b) {
      return { start: rangeOf(a).start, end: rangeOf(b).end };
    }
    function nodeAt(root, line, character) {
      return root.namedDescendantForPosition({ row: line, column: character });
    }
  }
});

// build/types.js
var require_types = __commonJS2({
  "build/types.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TypeEnv = exports2.MEDIUM_NAMES = exports2.MEDIA = exports2.BUILTIN_TYPES = exports2.LEVELS = exports2.BASE_WIDTH = void 0;
    exports2.isMedium = isMedium;
    exports2.norm = norm;
    exports2.splitTop = splitTop;
    exports2.trailingGroup = trailingGroup;
    exports2.BASE_WIDTH = {
      bit: 1,
      strength: 1,
      tuple: 2,
      nibble: 4,
      byte: 8
    };
    exports2.LEVELS = { bit: 1, strength: 15, tuple: 3, nibble: 15, byte: 255 };
    exports2.BUILTIN_TYPES = ["bit", "strength", "byte", "nibble", "tuple", "int", "unknown"];
    exports2.MEDIA = {
      vibration: {
        what: "a sculk vibration, sent into the air, where every listener in range hears it",
        kind: "event",
        delivery: { dist: "how far it traveled, in blocks" }
      },
      contact: {
        what: "passed between blocks that touch, like a hopper and the container it faces",
        kind: "either",
        delivery: {}
      }
    };
    exports2.MEDIUM_NAMES = Object.keys(exports2.MEDIA);
    function isMedium(name2) {
      return typeof name2 === "string" && Object.prototype.hasOwnProperty.call(exports2.MEDIA, name2);
    }
    var NAME = "[A-Za-z_&][A-Za-z0-9_&]*";
    var RANGE_ARG = /^\{\s*(\d+)\s*\.\.\s*(\d+)\s*\}$/;
    function norm(text) {
      return text.replace(/\s+/g, " ").trim();
    }
    function splitTop(text) {
      const parts2 = [];
      let depth = 0;
      let start2 = 0;
      for (let i2 = 0; i2 < text.length; i2++) {
        const c = text[i2];
        if (c === "{") {
          depth++;
        } else if (c === "}") {
          depth--;
        } else if (c === "," && depth === 0) {
          parts2.push(text.slice(start2, i2).trim());
          start2 = i2 + 1;
        }
      }
      parts2.push(text.slice(start2).trim());
      return parts2;
    }
    function nameWithArg(text) {
      const m = new RegExp(`^(${NAME})(\\{.*\\})$`).exec(text);
      if (!m || !balancedWhole(m[2])) {
        return void 0;
      }
      return [m[1], m[2]];
    }
    function balancedWhole(s) {
      let depth = 0;
      for (let i2 = 0; i2 < s.length; i2++) {
        if (s[i2] === "{") {
          depth++;
        } else if (s[i2] === "}") {
          depth--;
          if (depth === 0 && i2 !== s.length - 1) {
            return false;
          }
        }
      }
      return depth === 0 && s.startsWith("{");
    }
    function trailingGroup(s) {
      if (!s.endsWith("}")) {
        return "";
      }
      let depth = 0;
      for (let i2 = s.length - 1; i2 >= 0; i2--) {
        if (s[i2] === "}") {
          depth++;
        } else if (s[i2] === "{") {
          depth--;
          if (depth === 0) {
            return s.slice(i2);
          }
        }
      }
      return "";
    }
    var TypeEnv = class {
      /** TYPE name -> definition text */
      defs = /* @__PURE__ */ new Map();
      /** TYPE name -> where it was declared, for go-to-definition and hover */
      origins = /* @__PURE__ */ new Map();
      /** The fields of a record type, in order, or undefined if it isn't one. */
      recordFields(text) {
        if (typeof text !== "string") {
          return void 0;
        }
        const m = /^\{(.*)\}$/s.exec(text.trim());
        if (!m || !new RegExp(`^\\s*${NAME}\\s*:`).test(m[1])) {
          return void 0;
        }
        const out2 = [];
        for (const part of splitTop(m[1])) {
          const pm = new RegExp(`^(${NAME})\\s*:\\s*(.*?)\\s*$`, "s").exec(part);
          if (!pm) {
            return void 0;
          }
          out2.push({ name: pm[1], type: pm[2] });
        }
        return out2;
      }
      /**
       * transmission.data{vibration} -> ['nibble', '{vibration}', 'transmission'].
       * Returns { ok: false, reason } when the path doesn't work, and undefined
       * when the text isn't a projection at all.
       */
      resolveProjection(text) {
        if (typeof text !== "string") {
          return void 0;
        }
        text = norm(text);
        const hm = new RegExp(`^${NAME}`).exec(text);
        if (!hm || text[hm[0].length] !== ".") {
          return void 0;
        }
        const head = hm[0];
        if (!this.defs.has(head)) {
          if (exports2.BASE_WIDTH[head] !== void 0) {
            return { ok: false, reason: `"${head}" is a built-in type, not a record, so it has no fields` };
          }
          return { ok: false, reason: `unknown type "${head}"; declare it with TYPE or import it with USE` };
        }
        let rest = text.slice(head.length);
        let current = head;
        let shown = head;
        for (; ; ) {
          const fm = new RegExp(`^\\.(${NAME})(.*)$`, "s").exec(rest);
          if (!fm) {
            break;
          }
          const fname = fm[1];
          const flds = this.recordFields(this.defs.get(current) ?? current);
          if (!flds) {
            return { ok: false, reason: `"${shown}" is not a record, so it has no field "${fname}"` };
          }
          const found = flds.find((f) => f.name === fname);
          if (!found) {
            return {
              ok: false,
              reason: `${shown} has no field "${fname}"; its fields are: ${flds.map((f) => f.name).join(", ")}`
            };
          }
          current = found.type;
          shown = `${shown}.${fname}`;
          rest = fm[2];
        }
        return { ok: true, type: current, arg: rest, head };
      }
      /**
       * The medium a type travels on, or undefined for a wire. The medium is the
       * last argument, so it reads the same on a plain name and on a projection:
       * strength{vibration}, transmission.data{vibration}.
       */
      mediumOf(text) {
        if (typeof text !== "string") {
          return void 0;
        }
        const t = norm(text);
        const group = trailingGroup(t);
        if (group === "" || group.length === t.length) {
          return void 0;
        }
        const inner = group.slice(1, -1).trim();
        return isMedium(inner) ? inner : void 0;
      }
      /** What a type carries, with the medium taken off: strength{vibration} -> strength. */
      payloadOf(text) {
        if (typeof text !== "string") {
          return void 0;
        }
        const t = norm(text);
        const medium = this.mediumOf(t);
        return medium === void 0 ? t : t.slice(0, t.length - trailingGroup(t).length).trim();
      }
      /** Whether a value persists (a level), exists only on arrival (an event), or can be either. */
      kindOf(text) {
        const medium = this.mediumOf(text);
        return medium !== void 0 ? exports2.MEDIA[medium].kind : "level";
      }
      /** Whether a medium measures how far a value came, which is what ~: bounds. */
      measuresDistance(text) {
        return "dist" in this.deliveryOf(text);
      }
      /** The facts a medium's link fills in, readable as vib.dist. */
      deliveryOf(text) {
        const medium = this.mediumOf(text);
        return medium !== void 0 ? exports2.MEDIA[medium].delivery : {};
      }
      /**
       * The largest value a type can hold, following TYPE definitions and
       * projections and ignoring how it travels: air changes when a value shows
       * up, not how big it can be.
       */
      level(text, depth = 0) {
        if (typeof text !== "string" || depth > 16) {
          return void 0;
        }
        const payload = this.payloadOf(text);
        if (payload === void 0 || payload === "") {
          return void 0;
        }
        if (exports2.LEVELS[payload] !== void 0) {
          return exports2.LEVELS[payload];
        }
        const rng = /^(\d+)\s*\.\.\s*(\d+)$/.exec(payload);
        if (rng) {
          return Math.max(Number(rng[1]), Number(rng[2]));
        }
        const proj = this.resolveProjection(payload);
        if (proj && proj.ok) {
          return this.level(proj.type + proj.arg, depth + 1);
        }
        const na = nameWithArg(payload);
        if (na && RANGE_ARG.test(na[1])) {
          return void 0;
        }
        const def = this.defs.get(payload);
        return def !== void 0 ? this.level(def, depth + 1) : void 0;
      }
      /**
       * Pin width of a type written as text, or undefined when it has none fixed.
       * A medium argument adds no pins and takes none away: `strength{vibration}`
       * is one connection point, the same as `strength`, because a component's
       * header counts every way in and out, not only its wires.
       */
      width(text, depth = 0) {
        if (typeof text !== "string") {
          return void 0;
        }
        if (depth > 16) {
          return void 0;
        }
        text = norm(text);
        if (exports2.BASE_WIDTH[text] !== void 0) {
          return exports2.BASE_WIDTH[text];
        }
        const proj = this.resolveProjection(text);
        if (proj && proj.ok) {
          const w = this.width(proj.type, depth + 1);
          if (proj.arg === "") {
            return w;
          }
          const rm = RANGE_ARG.exec(proj.arg);
          if (rm) {
            return w !== void 0 ? w * (Math.abs(Number(rm[2]) - Number(rm[1])) + 1) : void 0;
          }
          return isMedium(proj.arg.slice(1, -1).trim()) ? w : void 0;
        } else if (new RegExp(`^${NAME}\\.`).test(text)) {
          return void 0;
        }
        const im = /^\{(.*)\}$/s.exec(text);
        if (im) {
          const inner = im[1];
          const parts2 = splitTop(inner);
          if (inner.includes(":") && new RegExp(`^${NAME}\\s*:`).test(parts2[0])) {
            let total = 0;
            for (const part of parts2) {
              const pm = new RegExp(`^${NAME}\\s*:\\s*(.*)$`, "s").exec(part);
              const w = this.width(pm ? pm[1] : void 0, depth + 1);
              if (w === void 0) {
                return void 0;
              }
              total += w;
            }
            return total;
          } else if (parts2.length > 1) {
            return void 0;
          } else if (/\{\s*\d+\s*\.\.\s*\d+\s*\}$/.test(inner)) {
            return this.width(inner, depth + 1);
          }
          return void 0;
        }
        const na = nameWithArg(text);
        if (na) {
          const [name2, arg] = na;
          const base = this.width(name2, depth + 1);
          const rm = RANGE_ARG.exec(arg);
          if (rm) {
            return base !== void 0 ? base * (Math.abs(Number(rm[2]) - Number(rm[1])) + 1) : void 0;
          }
          return isMedium(arg.slice(1, -1).trim()) ? base : void 0;
        }
        const def = this.defs.get(text);
        if (def !== void 0) {
          return this.width(def, depth + 1);
        }
        return void 0;
      }
      /** A bundle whose size each part decides, like {bit}. */
      isVariadic(text) {
        if (typeof text !== "string" || !/^\{.*\}$/s.test(text)) {
          return false;
        }
        const inner = text.slice(1, -1);
        if (splitTop(inner).length > 1 || new RegExp(`^\\s*${NAME}\\s*:`).test(inner)) {
          return false;
        }
        return this.width(text) === void 0;
      }
    };
    exports2.TypeEnv = TypeEnv;
  }
});

// build/analyze.js
var require_analyze = __commonJS2({
  "build/analyze.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.BASE_WIDTH = exports2.OPERATOR_INFO = exports2.DEFAULT_CONFIG = exports2.WARN = exports2.ERROR = void 0;
    exports2.readableFields = readableFields;
    exports2.parseTime = parseTime;
    exports2.showTime = showTime;
    exports2.pinSpan = pinSpan;
    exports2.showDelay = showDelay;
    exports2.showDelays = showDelays;
    exports2.readDecls = readDecls;
    exports2.analyze = analyze;
    var parser_12 = require_parser();
    var tree_1 = require_tree();
    var types_1 = require_types();
    Object.defineProperty(exports2, "BASE_WIDTH", { enumerable: true, get: function() {
      return types_1.BASE_WIDTH;
    } });
    exports2.ERROR = 1;
    exports2.WARN = 2;
    exports2.DEFAULT_CONFIG = {
      unknownComponentSeverity: exports2.ERROR,
      undeclaredSignalSeverity: exports2.ERROR,
      wiredOrSeverity: exports2.WARN,
      unusedPinSeverity: exports2.WARN,
      unreadWireSeverity: exports2.WARN,
      unclosedBlockSeverity: exports2.WARN
    };
    var OPERATORS = {
      max: { min: 2, what: "the strongest of its values" },
      min: { min: 2, what: "the least of its values" },
      sub: { min: 2, max: 2, what: "the first value minus the second, never below 0" },
      sum: {
        min: 2,
        what: "the total of its values, never above 15 once a value travels on a pin",
        wideUnlessSignal: true
      },
      mod: { min: 2, max: 2, what: "the remainder of the first value divided by the second" },
      mul: { min: 2, what: "the product of its values", wide: true },
      div: { min: 2, max: 2, what: "the first value divided by the second", wide: true },
      floor: { min: 1, max: 1, what: "its value rounded down to a whole number", wide: true }
    };
    exports2.OPERATOR_INFO = OPERATORS;
    function readableFields(types, type) {
      const out2 = {};
      const payload = types.payloadOf(type);
      const def = payload !== void 0 ? types.defs.get(payload) ?? payload : void 0;
      for (const f of types.recordFields(def) ?? []) {
        out2[f.name] = `its ${f.name}, a ${f.type}`;
      }
      for (const [k, v] of Object.entries(types.deliveryOf(type))) {
        out2[k] = v;
      }
      return out2;
    }
    function fieldList(flds) {
      return Object.keys(flds).sort().join(", ");
    }
    function parseTime(text) {
      const m = /^(\d+)([A-Za-z]{2})$/.exec(text);
      if (!m) {
        return void 0;
      }
      const n = Number(m[1]);
      if (m[2] === "gt") {
        return n;
      } else if (m[2] === "rt") {
        return n * 2;
      }
      return void 0;
    }
    function showTime(gt) {
      if (gt === void 0) {
        return "?";
      }
      if (gt % 2 === 0) {
        return `${gt}gt (${Math.floor(gt / 2)}rt)`;
      }
      return `${gt}gt`;
    }
    function describePins(pins) {
      const parts2 = [];
      let i2 = 0;
      while (i2 < pins.length) {
        let j = i2;
        while (j < pins.length - 1 && pins[j + 1] === pins[j] + 1) {
          j++;
        }
        parts2.push(i2 === j ? String(pins[i2]) : `${pins[i2]}..${pins[j]}`);
        i2 = j + 1;
      }
      return parts2.join(", ");
    }
    function pinSpan(n) {
      if (n <= 0) {
        return "no pins";
      } else if (n === 1) {
        return "pin 0";
      }
      return `pins 0..${n - 1}`;
    }
    var s = (n) => n === 1 ? "" : "s";
    var HINTS = [
      [/^\s*[\d*]+\s*\[[^\]]*\]\s*[\d*]+\s*->/, 'declarations use "=>" for the return type, e.g. 1[NOT]1 => bit:'],
      [/^\s*-\[/, "pattern arms use braces, e.g. -{0}-> instead of -[0]->"],
      [/^\s*\[.*\]\s*\?/, "match subjects use braces, e.g. {a, b}? instead of [a, b]?"],
      [/->\s*\{\s*$/, 'arm bodies use ":" and an indented block instead of { ... }'],
      [/^\s*\}/, 'arm bodies use ":" and an indented block instead of { ... }'],
      [/^\s*USE\s/, "USE must come before every other statement (comments above it are fine)"],
      [
        /^\s*WHERE\s*\{/,
        "WHERE is gone: the filter is a plain pattern whose arms say ACCEPT, e.g. {phase, gap}? with -{inactive, 0}-> ACCEPT"
      ],
      [
        /^\s*(?:->|=>|~>)\s*\d+\*/,
        '"N*" counts pins in a component header; a port that runs to the end writes it as a range, e.g. 0..*[power: {bit}]'
      ],
      [
        /=:\s*[A-Za-z_&][A-Za-z0-9_&]*\s*(?:-\(|->|=>|~>)/,
        '"=:" ends a flow, so nothing can follow it; put the other destination on its own line'
      ],
      [/->\s*[A-Za-z_&][A-Za-z0-9_&]*[ \t]+\[/, "a port name must touch its bracket: param1[X], not param1 [X]"],
      [/\][ \t]+[A-Za-z_&][A-Za-z0-9_&]*\s*$/, "a named output must touch its bracket: [X]low, not [X] low"],
      [/\][ \t]+[A-Za-z_&][A-Za-z0-9_&]*\s*->/, "a named output must touch its bracket: [X]low, not [X] low"],
      [/^\s*WAIT\s*\([^()]*\)\s*->/, "WAIT(x) starts a block, not a flow: write WAIT(x): and indent the flows under it"],
      [
        /[A-Za-z0-9_}]\s+[*/]\s+[A-Za-z0-9_{]/,
        "arithmetic is written as operator calls: mul{a, b} and div{a, b} instead of a * b and a / b"
      ]
    ];
    var MISSING_NAMES = {
      _indent: "an indented block",
      _dedent: "the end of a block"
    };
    function isBlankOrComment(line) {
      return /^\s*$/.test(line) || /^\s*\/\//.test(line);
    }
    function codeOf(line) {
      const i2 = line.indexOf("//");
      return i2 === -1 ? line : line.slice(0, i2);
    }
    var HINT_REACH = 2;
    function hintFor(lines, sr, er) {
      const last = Math.min(er, sr + HINT_REACH);
      const order = [sr];
      for (let row = sr + 1; row <= last; row++) {
        order.push(row);
      }
      order.push(sr - 1, Math.min(er, last) + 1);
      for (const row of order) {
        const line = row >= 0 ? lines[row] : void 0;
        if (line !== void 0) {
          const code = codeOf(line);
          for (const [re, hint] of HINTS) {
            if (re.test(code)) {
              return row === sr ? hint : `${hint} (line ${row + 1})`;
            }
          }
        }
      }
      return void 0;
    }
    function snippet(node) {
      let text = (node.text.split("\n")[0] ?? "").trim();
      if ([...text].length > 30) {
        text = [...text].slice(0, 29).join("") + "\u2026";
      }
      return text;
    }
    function collectSyntaxErrors(root, lines) {
      const byRow = /* @__PURE__ */ new Map();
      const rows = /* @__PURE__ */ new Set();
      const record = (node, msg) => {
        const r = (0, tree_1.rangeOf)(node);
        const sr = r.start.line;
        const er = r.end.line;
        for (let row = sr; row <= er; row++) {
          rows.add(row);
        }
        const existing = byRow.get(sr);
        if (existing) {
          const e = existing.range.end;
          if (er > e.line || er === e.line && r.end.character > e.character) {
            existing.range.end = { ...r.end };
          }
          return;
        }
        let end = r.end;
        if (er > sr) {
          end = { line: sr, character: (lines[sr] ?? "").length };
        }
        const hint = hintFor(lines, sr, er);
        byRow.set(sr, {
          range: { start: r.start, end },
          message: hint ? `${msg}; hint: ${hint}` : msg,
          severity: exports2.ERROR,
          syntax: true
        });
      };
      const hasInnerError = (node) => {
        for (const child of node.children) {
          if (child && (child.type === "ERROR" || child.isMissing || child.hasError && hasInnerError(child))) {
            return true;
          }
        }
        return false;
      };
      const visit = (node) => {
        if (node.type === "ERROR") {
          if (hasInnerError(node)) {
            for (const child of node.children) {
              if (child) {
                visit(child);
              }
            }
            return;
          }
          const text = snippet(node);
          record(node, text !== "" ? `syntax error near "${text}"` : "syntax error");
          return;
        }
        if (node.isMissing) {
          const hidden = MISSING_NAMES[node.type];
          record(node, hidden ? `syntax error: expected ${hidden} here` : `syntax error: something is missing here, such as "${node.type}"`);
          return;
        }
        if (!node.hasError) {
          return;
        }
        for (const child of node.children) {
          if (child) {
            visit(child);
          }
        }
      };
      visit(root);
      const diags = [...byRow.values()].sort((a, b) => a.range.start.line - b.range.start.line);
      const runStart = /* @__PURE__ */ new Map();
      for (const d of diags) {
        const line = d.range.start.line;
        let prev = line - 1;
        while (prev >= 0 && lines[prev] !== void 0 && isBlankOrComment(lines[prev])) {
          prev--;
        }
        if (prev >= 0 && byRow.has(prev)) {
          runStart.set(line, runStart.get(prev) ?? prev);
          if (!d.message.includes("; hint: ")) {
            d.message = `${d.message} (probably caused by the error on line ${(runStart.get(line) ?? prev) + 1})`;
          }
        }
      }
      return { diags, rows };
    }
    function parseSignature(node) {
      const text = node.text;
      const m = /^([\d*]+)\s*\[\s*(.*?)\s*\]\s*([\d*]+)\s*(?:([=~])>\s*(.*?)\s*)?:$/s.exec(text);
      if (!m) {
        return void 0;
      }
      const arity2 = (t) => {
        if (/^\d+$/.test(t)) {
          return [Number(t), void 0, void 0];
        }
        const am = /^(\d*)\*(\d*)$/.exec(t);
        return ["*", am && am[1] ? Number(am[1]) : void 0, am && am[2] ? Number(am[2]) : void 0];
      };
      const [inputs, inMin, inMax] = arity2(m[1]);
      const [outputs, outMin, outMax] = arity2(m[3]);
      const id = (0, tree_1.first)(node, "identifier");
      return {
        name: m[2],
        emits: m[4] === "~",
        inputs,
        inMin,
        inMax,
        outputs,
        outMin,
        outMax,
        ret: m[5] ?? "",
        retArrow: m[4] === void 0 ? void 0 : m[4] === "~" ? "~>" : "=>",
        declText: text,
        inPorts: [],
        outPorts: [],
        settings: /* @__PURE__ */ new Map(),
        settingOrder: [],
        declaredOutputs: 0,
        defRange: (0, tree_1.rangeOf)(id ?? node)
      };
    }
    function splitComponents(root) {
      const prelude = { nodes: [] };
      const comps = [prelude];
      let current = prelude;
      for (const child of root.children) {
        if (!child || !child.isNamed) {
          continue;
        }
        if (child.type === "function_declaration") {
          current = { decl: child, nodes: [] };
          comps.push(current);
        } else if (child.type === "block_end") {
          current.closed = true;
          current = prelude;
        } else if (child.type !== "import_statement" && child.type !== "comment") {
          current.nodes.push(child);
        }
      }
      return comps;
    }
    function readPorts(nodes, types) {
      const inputs = [];
      const outputs = [];
      for (const n of nodes) {
        let holder;
        let list;
        if (n.type === "input_parameter") {
          [holder, list] = [n, inputs];
        } else if (n.type === "timing_parameter") {
          [holder, list] = [(0, tree_1.first)(n, "timing_annotation"), inputs];
        } else if (n.type === "output_parameter" || n.type === "emission_parameter") {
          [holder, list] = [n, outputs];
        }
        if (!holder || !list) {
          continue;
        }
        const ty = (0, tree_1.first)(holder, "type");
        const tytext = ty ? ty.text : void 0;
        const hear = (0, tree_1.first)(holder, "hearing_range");
        const unwired = (0, tree_1.field)(holder, "unwired");
        const lead = (0, tree_1.field)(holder, "lead");
        const trail = (0, tree_1.field)(holder, "trail");
        const make = (child, pins, trailing) => {
          const end = pins ? (0, tree_1.field)(pins, "end") : void 0;
          return {
            name: child.text,
            idNode: child,
            pinsNode: pins,
            pinsTrailing: trailing,
            type: tytext,
            medium: types.mediumOf(tytext),
            payload: types.payloadOf(tytext),
            kind: types.kindOf(tytext),
            hearNode: hear,
            hearText: hear ? (0, tree_1.field)(hear, "distance")?.text ?? void 0 : void 0,
            typeInside: ty ? typeIsBracketed(holder, ty) : false,
            variadic: types.isVariadic(tytext),
            emits: n.type === "emission_parameter",
            open: !!end && end.type === "open_end",
            optional: !!unwired,
            unwiredNode: unwired,
            defRange: (0, tree_1.rangeOf)(child)
          };
        };
        if (n.type === "timing_parameter") {
          let pending;
          for (const child of (0, tree_1.kids)(holder)) {
            if (child.type === "pin_range") {
              pending = child;
            } else if (child.type === "identifier") {
              list.push(make(child, pending, false));
              pending = void 0;
            }
          }
        } else {
          const id = (0, tree_1.first)(holder, "identifier");
          if (id) {
            list.push(make(id, lead ?? trail, !lead && !!trail));
            if (lead && trail) {
              list[list.length - 1].extraPinsNode = trail;
            }
          }
        }
      }
      return [inputs, outputs];
    }
    function typeIsBracketed(holder, ty) {
      for (const child of holder.children) {
        if (child && !child.isNamed && child.type === "]" && child.startIndex >= ty.endIndex) {
          return true;
        }
      }
      return false;
    }
    var quiet = () => void 0;
    function readSettings(nodes, report) {
      const settings = /* @__PURE__ */ new Map();
      const order = [];
      for (const n of nodes) {
        if (n.type !== "setting_declaration") {
          continue;
        }
        const nameNode = (0, tree_1.field)(n, "name");
        const allowed = (0, tree_1.field)(n, "allowed");
        const dflt = (0, tree_1.field)(n, "default");
        const name2 = nameNode?.text;
        if (!name2 || !allowed || !nameNode) {
          continue;
        }
        const def = {
          name: name2,
          kind: "choice",
          options: [],
          optionSet: /* @__PURE__ */ new Set(),
          node: nameNode,
          defRange: (0, tree_1.rangeOf)(nameNode),
          allowedText: allowed.text
        };
        if (allowed.type === "time_range") {
          def.kind = "time";
          const a = (0, tree_1.field)(allowed, "start");
          const b = (0, tree_1.field)(allowed, "end");
          def.lo = a ? parseTime(a.text) : void 0;
          def.hi = b ? parseTime(b.text) : void 0;
        } else if (allowed.type === "range") {
          def.kind = "number";
          const a = (0, tree_1.field)(allowed, "start");
          const b = (0, tree_1.field)(allowed, "end");
          def.lo = a ? Number(a.text) : void 0;
          def.hi = b ? Number(b.text) : void 0;
        } else {
          for (const id of (0, tree_1.kids)(allowed, "identifier")) {
            const o = id.text;
            if (def.optionSet.has(o)) {
              report(id, `"${o}" is listed twice`);
            }
            def.optionSet.add(o);
            def.options.push(o);
          }
        }
        if (def.lo !== void 0 && def.hi !== void 0 && def.hi < def.lo) {
          report(allowed, `${allowed.text} runs backwards; write it smallest first`);
          [def.lo, def.hi] = [def.hi, def.lo];
        }
        if (dflt) {
          def.default = dflt.text;
          if (dflt.type === "identifier" && def.kind !== "choice") {
            def.defaultName = dflt.text;
          }
        }
        if (settings.has(name2)) {
          report(nameNode, `setting "${name2}" is declared twice`);
        } else {
          settings.set(name2, def);
          order.push(name2);
        }
      }
      return [settings, order];
    }
    function allowsText(lo, hi) {
      if (lo !== void 0 && hi !== void 0) {
        return `${lo} to ${hi}`;
      }
      if (lo !== void 0) {
        return `${lo} or more`;
      }
      if (hi !== void 0) {
        return `${hi} or less`;
      }
      return "any value";
    }
    function settingValueProblem(def, text, resolve) {
      if (def.kind === "time") {
        const gt = parseTime(text);
        if (gt === void 0) {
          return `"${def.name}" is a time setting; give a time like 2gt or 1rt`;
        }
        if (def.lo !== void 0 && gt < def.lo || def.hi !== void 0 && gt > def.hi) {
          return `${text} is outside ${def.name}, which allows ${allowsText(def.lo === void 0 ? void 0 : showTime(def.lo), def.hi === void 0 ? void 0 : showTime(def.hi))}`;
        }
      } else if (def.kind === "number") {
        const lo = def.lo ?? (def.loName !== void 0 ? resolve?.(def.loName) : void 0);
        const hi = def.hi ?? (def.hiName !== void 0 ? resolve?.(def.hiName) : void 0);
        const loText = def.lo?.toString() ?? def.loName;
        const hiText = def.hi?.toString() ?? def.hiName;
        if (!/^\d+$/.test(text)) {
          return `"${def.name}" is a number setting: give a number: ${allowsText(loText, hiText)}`;
        }
        const n = Number(text);
        if (lo !== void 0 && n < lo || hi !== void 0 && n > hi) {
          const shown = allowsText(lo !== void 0 && def.loName ? `${def.loName} (${lo})` : loText, hi !== void 0 && def.hiName ? `${def.hiName} (${hi})` : hiText);
          return `${text} is outside ${def.name}, which allows ${shown}`;
        }
      } else if (!def.optionSet.has(text)) {
        return `"${text}" is not an option for ${def.name}; its options are: ${def.options.join(", ")}`;
      }
      return void 0;
    }
    function num(node) {
      if (!node || !/^\d+$/.test(node.text)) {
        return void 0;
      }
      return Number(node.text);
    }
    function openEnd(node) {
      if (!node) {
        return void 0;
      }
      const r = node.type === "index" ? (0, tree_1.first)(node, "range") ?? node : node;
      const s2 = (0, tree_1.field)(r, "start");
      const e = (0, tree_1.field)(r, "end");
      if (s2?.type === "open_end") {
        return s2;
      }
      return e?.type === "open_end" ? e : void 0;
    }
    function placePorts(ports, nPins, compName, types, report) {
      const used = /* @__PURE__ */ new Set();
      let cursor = 0;
      let cursorKnown = true;
      let allKnown = true;
      let openPort;
      for (const port of ports) {
        const width = types.width(port.type);
        if (port.variadic || port.open) {
          let st;
          if (port.pinsNode) {
            st = num((0, tree_1.field)(port.pinsNode, "start"));
            if (!port.open) {
              report(port.pinsNode, `"${port.name}" is variadic (${port.type}), so its pins are decided per part; write ${st ?? 0}..*[${port.name}]`);
            }
          } else if (cursorKnown) {
            st = cursor;
          }
          if (port.open && !port.variadic && port.pinsNode) {
            report(port.pinsNode, `"${port.name}" is a ${port.type ?? "value"}; only a variadic port like {bit} can run to the end with ..*`);
          }
          port.s = st;
          port.e = void 0;
          if (st !== void 0) {
            used.add(st);
          }
          openPort = openPort ?? port;
          allKnown = false;
          cursorKnown = false;
        } else if (port.pinsNode) {
          const sNode = (0, tree_1.field)(port.pinsNode, "start");
          const eNode = (0, tree_1.field)(port.pinsNode, "end") ?? sNode;
          let st = num(sNode);
          let en = num(eNode);
          if (st !== void 0 && en !== void 0) {
            if (en < st) {
              report(port.pinsNode, `pin range ${st}..${en} runs backwards; write ${en}..${st}`);
              [st, en] = [en, st];
            }
            const count = en - st + 1;
            if (width !== void 0 && count !== width) {
              report(port.pinsNode, `"${port.name}" is a ${port.type} (${width} pin${s(width)}), but ${port.pinsNode.text} covers ${count}`);
            }
            if (nPins !== void 0 && en > nPins - 1) {
              report(port.pinsNode, `${compName} has ${pinSpan(nPins)}; pin ${en} does not exist`);
            }
            port.s = st;
            port.e = en;
            for (let p = st; p <= en; p++) {
              used.add(p);
            }
            cursor = Math.max(cursor, en + 1);
          } else {
            allKnown = false;
          }
        } else if (openPort) {
          if (port.idNode) {
            report(port.idNode, `"${port.name}" comes after the variadic port "${openPort.name}", which takes every pin after it; move "${port.name}" before it, or give it explicit pins`);
          }
          allKnown = false;
        } else if (width === void 0) {
          allKnown = false;
          cursorKnown = false;
        } else if (cursorKnown) {
          const st = cursor;
          const en = cursor + width - 1;
          if (nPins !== void 0 && en > nPins - 1 && port.idNode) {
            report(port.idNode, `"${port.name}" needs ${st === en ? `pin ${st}` : `pins ${st}..${en}`}, but ${compName} has ${pinSpan(nPins)}`);
          }
          port.s = st;
          port.e = en;
          for (let p = st; p <= en; p++) {
            used.add(p);
          }
          cursor = en + 1;
        } else {
          allKnown = false;
        }
      }
      return { known: allKnown, used, n: nPins };
    }
    function checkVariadic(ports, count, min, max, sig, side, decl, report) {
      const varPorts = ports.filter((p) => p.variadic);
      if (varPorts.length > 1) {
        const at = varPorts[1].idNode ?? decl;
        if (at) {
          report(at, `only one variadic port per side: "${varPorts[0].name}" and "${varPorts[1].name}" would have no boundary between them`);
        }
      }
      const vp = varPorts[0];
      if (count === "*") {
        if (!vp) {
          if (decl) {
            report(decl, `the declaration gives a variable number of ${side} pins, but no ${side} port is variadic; add one like ${side === "input" ? "->" : "=>"} inputs: {bit}`);
          }
          return void 0;
        }
        const fixed = vp.s ?? 0;
        if (min !== void 0 && max !== void 0 && max < min) {
          if (decl) {
            report(decl, `${min}*${max} runs backwards; write ${max}*${min}`);
          }
          [min, max] = [max, min];
        }
        if (min !== void 0 && min < fixed && decl) {
          report(decl, `${sig.name} has ${fixed} fixed ${side} pin${s(fixed)} before "${vp.name}", so its minimum can't be below ${fixed}; write ${fixed}* or more`);
        }
        if (max !== void 0 && max < fixed && decl) {
          report(decl, `${sig.name} has ${fixed} fixed ${side} pin${s(fixed)} before "${vp.name}", so its maximum can't be below ${fixed}`);
        }
        vp.min = Math.max((min ?? 0) - fixed, 0);
        vp.max = max !== void 0 ? Math.max(max - fixed, 0) : void 0;
        return vp;
      } else if (vp && vp.idNode) {
        report(vp.idNode, `"${vp.name}" is variadic (${vp.type}), but the declaration gives an exact pin count; write N* (at least N), *N (at most N), or N*M on the declaration`);
      }
      return void 0;
    }
    function checkPinSides(inputs, outputs, report) {
      for (const port of [...inputs, ...outputs]) {
        const at = port.pinsNode;
        if (!at || !port.typeInside) {
          continue;
        }
        const isInput = inputs.includes(port);
        if (port.extraPinsNode) {
          report(port.extraPinsNode, `"${port.name}" gives its pins on both sides; the number goes on one side, and which side it is says whether the port takes a value or gives one`);
        } else if (isInput && port.pinsTrailing) {
          report(at, `"${port.name}" takes a value, so its pins go before the bracket: -> ${at.text}[${port.name}: ${port.type ?? "bit"}]`);
        } else if (!isInput && !port.pinsTrailing) {
          report(at, `"${port.name}" gives a value, so its pins go after the bracket: ${port.emits ? "~>" : "=>"} [${port.name}: ${port.type ?? "bit"}]${at.text}`);
        }
      }
    }
    function checkPortMedia(inputs, outputs, types, report, decl) {
      for (const port of [...inputs, ...outputs]) {
        const at = port.idNode ?? (port.implicit ? decl : void 0);
        if (!at) {
          continue;
        }
        const label = port.name ? `"${port.name}"` : "the output this header names";
        const medium = port.medium;
        if (port.emits && medium !== "vibration") {
          report(at, medium === void 0 ? `${label} leaves with ~>, which sends into the air, but its type is a ${port.type}, which travels on a wire; write ${(0, types_1.isMedium)(port.payload) ? "strength" : port.payload ?? port.type}{vibration}, or send it out with =>` : `${label} leaves with ~>, which sends into the air, but its type travels by ${medium}; send it out with =>`);
        } else if (!port.emits && outputs.includes(port) && medium === "vibration") {
          report(at, `${label} is a ${port.type}, which goes into the air, so it leaves with ~>, not =>`);
        }
        const delivery = types.deliveryOf(port.type);
        if (medium !== void 0) {
          const payload = port.payload;
          const def = payload !== void 0 ? types.defs.get(payload) ?? payload : void 0;
          for (const f of types.recordFields(def) ?? []) {
            if (f.name in delivery) {
              report(at, `${label} travels by ${medium}, which fills in "${f.name}" on arrival, but ${payload} has a field of that name too; rename one of them`);
            }
          }
        }
        if (port.hearNode) {
          if (outputs.includes(port)) {
            report(port.hearNode, `~: says how far ${label} can hear, and only an input listens`);
          } else if (!types.measuresDistance(port.type)) {
            report(port.hearNode, medium === void 0 ? `~: says how far ${label} can hear, but a ${port.type} arrives on a wire, where distance doesn't come into it` : `~: says how far ${label} can hear, but ${medium} doesn't measure how far anything came`);
          } else {
            const d = (0, tree_1.field)(port.hearNode, "distance");
            if (d && d.type === "number" && Number(d.text) < 1) {
              report(d, "a hearing range of 0 hears nothing; give the number of blocks this port reaches");
            }
          }
        }
      }
    }
    function attachPorts(sig, nodes, types, report, decl) {
      let [inputs, outputs] = readPorts(nodes, types);
      const nIn = typeof sig.inputs === "number" ? sig.inputs : void 0;
      const nOut = typeof sig.outputs === "number" ? sig.outputs : void 0;
      const inLayout = placePorts(inputs, nIn, sig.name, types, report);
      let outLayout = { known: true, used: /* @__PURE__ */ new Set(), n: nOut };
      if (outputs.length > 0) {
        outLayout = placePorts(outputs, nOut, sig.name, types, report);
      } else if (nOut !== void 0) {
        outputs = [
          {
            name: "",
            implicit: true,
            type: sig.ret,
            medium: types.mediumOf(sig.ret),
            payload: types.payloadOf(sig.ret),
            kind: types.kindOf(sig.ret),
            s: 0,
            e: nOut - 1,
            variadic: false,
            emits: sig.emits,
            open: false,
            optional: false
          }
        ];
        for (let p = 0; p <= nOut - 1; p++) {
          outLayout.used.add(p);
        }
      }
      sig.inPorts = inputs;
      sig.outPorts = outputs;
      for (const port of inputs) {
        if (port.unwiredNode && port.unwiredNode.text !== "0") {
          report(port.unwiredNode, `an unwired pin always reads 0, so = 0 is the only way to mark "${port.name}" optional`);
        }
      }
      checkPinSides(inputs, outputs, report);
      checkPortMedia(inputs, outputs, types, report, decl);
      [sig.settings, sig.settingOrder] = readSettings(nodes, report);
      for (const name2 of sig.settingOrder) {
        const def = sig.settings.get(name2);
        if (def.default !== void 0 && def.defaultName === void 0 && def.node) {
          const problem = settingValueProblem(def, def.default);
          if (problem) {
            report(def.node, "default: " + problem);
          }
        }
      }
      sig.varIn = checkVariadic(inputs, sig.inputs, sig.inMin, sig.inMax, sig, "input", decl, report);
      sig.varOut = checkVariadic(outputs, sig.outputs, sig.outMin, sig.outMax, sig, "output", decl, report);
      sig.declaredOutputs = outputs.filter((p) => !p.implicit).length;
      sig.timing = computeTiming(sig, nodes);
      return [inLayout, outLayout];
    }
    var zeroDelay = () => ({ ticks: 0, symbols: [] });
    function addDelays(a, b) {
      return { ticks: a.ticks + b.ticks, symbols: [...a.symbols, ...b.symbols] };
    }
    function delayKey(d) {
      return `${d.ticks}|${[...d.symbols].sort().join("+")}`;
    }
    function showDelay(d) {
      if (d.symbols.length === 0) {
        return d.ticks === 0 ? "same tick" : showTime(d.ticks);
      }
      const counts = /* @__PURE__ */ new Map();
      for (const sym of d.symbols) {
        counts.set(sym, (counts.get(sym) ?? 0) + 1);
      }
      const parts2 = [...counts].map(([sym, n]) => n === 1 ? sym : `${n} \xD7 ${sym}`);
      if (d.ticks !== 0) {
        parts2.push(showTime(d.ticks));
      }
      return parts2.join(" + ");
    }
    function showDelays(ds) {
      if (ds.length === 0) {
        return "";
      }
      const seen = /* @__PURE__ */ new Map();
      for (const d of ds) {
        if (!seen.has(delayKey(d))) {
          seen.set(delayKey(d), d);
        }
      }
      const uniq = [...seen.values()];
      if (uniq.length === 1) {
        return showDelay(uniq[0]);
      }
      if (uniq.every((d) => d.symbols.length === 0)) {
        const ns = uniq.map((d) => d.ticks);
        return `${showDelay({ ticks: Math.min(...ns), symbols: [] })} .. ${showDelay({ ticks: Math.max(...ns), symbols: [] })}`;
      }
      const texts = uniq.map(showDelay);
      return texts.length > 3 ? `${texts.slice(0, 3).join(", ")}, \u2026` : texts.join(", ");
    }
    var EVENT_TYPES = /* @__PURE__ */ new Set(["event_block", "change_block", "hear_block"]);
    function durationOf(node) {
      if (!node) {
        return zeroDelay();
      }
      if (node.type === "time") {
        const gt = parseTime(node.text);
        return gt === void 0 ? { ticks: 0, symbols: [node.text] } : { ticks: gt, symbols: [] };
      }
      return { ticks: 0, symbols: [(0, types_1.norm)(node.text)] };
    }
    function namesIn(node) {
      const out2 = [];
      (0, tree_1.walk)(node, (x) => {
        if (x.type === "identifier") {
          out2.push(x.text);
        }
      });
      return out2;
    }
    function computeTiming(sig, nodes) {
      const events = [];
      const continuous = [];
      for (const n of nodes) {
        if (EVENT_TYPES.has(n.type)) {
          const trigger = (0, tree_1.field)(n, "trigger") ?? (0, tree_1.field)(n, "source");
          const body2 = (0, tree_1.first)(n, "block");
          if (trigger && body2) {
            events.push({ from: trigger.text, body: body2 });
          }
        } else {
          continuous.push(n);
        }
      }
      const triggered = new Set(events.map((e) => e.from));
      for (const port of sig.inPorts) {
        if (port.name && !triggered.has(port.name)) {
          events.push({ from: port.name, body: void 0 });
        }
      }
      if (events.length === 0) {
        return [];
      }
      const edges = [];
      const addEdge = (extraFrom, stmt) => {
        const from = [...extraFrom];
        const to = [];
        let delay = zeroDelay();
        for (const child of stmt.children) {
          if (!child) {
            continue;
          }
          const t = child.type;
          if (t === "flow_source" || t === "pattern_result") {
            from.push(...namesIn(child));
          } else if (t === "flow_destination") {
            const id = (0, tree_1.first)(child);
            if (id && id.type === "identifier") {
              to.push(id.text);
            }
          } else if (t === "state_write") {
            const id = (0, tree_1.first)(child, "identifier");
            if (id) {
              to.push(id.text);
            }
          } else if (t === "delay") {
            delay = addDelays(delay, durationOf((0, tree_1.field)(child, "time")));
          } else if (t === "vibration_link") {
            const dist = (0, tree_1.field)(child, "distance");
            delay = addDelays(delay, { ticks: 0, symbols: [`${dist ? (0, types_1.norm)(dist.text) : "?"} blocks`] });
          } else if (!child.isNamed && (t === "=>" || t === "~>")) {
            to.push("=>");
          }
        }
        if (from.length > 0 && to.length > 0) {
          edges.push({ from, to, delay });
        }
      };
      const collectContinuous = (stmt) => {
        if (stmt.type === "each_block") {
          const b = (0, tree_1.first)(stmt, "block");
          for (const s2 of b ? (0, tree_1.kids)(b) : []) {
            collectContinuous(s2);
          }
          return;
        }
        if (stmt.type === "pattern_match") {
          const subject = (0, tree_1.field)(stmt, "subject");
          const base = subject ? namesIn(subject) : [];
          for (const kase of (0, tree_1.kids)(stmt, "pattern_case")) {
            const body2 = (0, tree_1.first)(kase, "block");
            if (body2) {
              for (const s2 of (0, tree_1.kids)(body2)) {
                collectContinuous(s2);
              }
            } else {
              addEdge(base, kase);
            }
          }
          return;
        }
        if (stmt.type === "flow") {
          addEdge([], stmt);
        }
      };
      for (const n of continuous) {
        collectContinuous(n);
      }
      const targets = new Set(sig.outPorts.filter((p) => !p.implicit && p.name).map((p) => p.name));
      if (targets.size === 0) {
        targets.add("=>");
      }
      const paths = [];
      for (const ev of events) {
        const reach = /* @__PURE__ */ new Map();
        const record = (name2, d) => {
          const list = reach.get(name2) ?? [];
          if (!list.some((x) => delayKey(x) === delayKey(d))) {
            list.push(d);
          }
          reach.set(name2, list);
        };
        const chain = (stmt, acc) => {
          let d = acc;
          for (const child of stmt.children) {
            if (!child) {
              continue;
            }
            const t = child.type;
            if (t === "delay") {
              d = addDelays(d, durationOf((0, tree_1.field)(child, "time")));
            } else if (t === "vibration_link") {
              const dist = (0, tree_1.field)(child, "distance");
              d = addDelays(d, { ticks: 0, symbols: [`${dist ? (0, types_1.norm)(dist.text) : "?"} blocks`] });
            } else if (t === "flow_destination") {
              const id = (0, tree_1.first)(child);
              if (id && id.type === "identifier") {
                record(id.text, d);
              }
            } else if (t === "state_write") {
              const id = (0, tree_1.first)(child, "identifier");
              if (id) {
                record(id.text, d);
              }
            } else if (t === "block") {
              visit(child, d);
            } else if (!child.isNamed && (t === "=>" || t === "~>")) {
              record("=>", d);
            }
          }
        };
        const step = (stmt, acc) => {
          const t = stmt.type;
          if (t === "after_block") {
            const body2 = (0, tree_1.first)(stmt, "block");
            if (body2) {
              visit(body2, addDelays(acc, durationOf((0, tree_1.field)(stmt, "delay"))));
            }
          } else if (t === "sequence_block") {
            const per = durationOf((0, tree_1.field)(stmt, "delay"));
            const body2 = (0, tree_1.first)(stmt, "block");
            let d = acc;
            for (const s2 of body2 ? (0, tree_1.kids)(body2) : []) {
              d = addDelays(d, per);
              step(s2, d);
            }
          } else if (t === "each_block") {
            const body2 = (0, tree_1.first)(stmt, "block");
            if (body2) {
              visit(body2, acc);
            }
          } else if (t === "pattern_match") {
            for (const kase of (0, tree_1.kids)(stmt, "pattern_case")) {
              chain(kase, acc);
            }
          } else if (t === "flow") {
            chain(stmt, acc);
          } else if (EVENT_TYPES.has(t)) {
          }
        };
        const visit = (body2, acc) => {
          for (const stmt of (0, tree_1.kids)(body2)) {
            step(stmt, acc);
          }
        };
        record(ev.from, zeroDelay());
        if (ev.body) {
          visit(ev.body, zeroDelay());
        }
        for (let pass = 0; pass < 8; pass++) {
          let changed = false;
          for (const edge of edges) {
            for (const src of edge.from) {
              for (const d of reach.get(src) ?? []) {
                for (const dst of edge.to) {
                  if ((reach.get(dst)?.length ?? 0) >= 4) {
                    continue;
                  }
                  const before = reach.get(dst)?.length ?? 0;
                  record(dst, addDelays(d, edge.delay));
                  if ((reach.get(dst)?.length ?? 0) !== before) {
                    changed = true;
                  }
                }
              }
            }
          }
          if (!changed) {
            break;
          }
        }
        for (const target of targets) {
          const ds = reach.get(target);
          if (ds && ds.length > 0) {
            paths.push({ from: ev.from, to: target, delays: ds });
          }
        }
      }
      return paths;
    }
    function findPort(ports, name2) {
      return (ports ?? []).find((p) => p.name === name2);
    }
    function portNames(ports) {
      return (ports ?? []).filter((p) => p.name).map((p) => p.name);
    }
    function typeDeclsOf(root) {
      const types = /* @__PURE__ */ new Map();
      const ranges = /* @__PURE__ */ new Map();
      for (const td of (0, tree_1.kids)(root, "type_declaration")) {
        const n = (0, tree_1.field)(td, "name");
        const d = (0, tree_1.field)(td, "definition");
        if (n && d) {
          types.set(n.text, d.text);
          ranges.set(n.text, (0, tree_1.rangeOf)(n));
        }
      }
      return [types, ranges];
    }
    function readDecls(text, path2) {
      const tree = (0, parser_12.parse)(text);
      const root = tree.rootNode;
      const [types, typeRanges] = typeDeclsOf(root);
      const env = new types_1.TypeEnv();
      for (const [k, v] of types) {
        env.defs.set(k, v);
      }
      const decls = /* @__PURE__ */ new Map();
      for (const comp of splitComponents(root)) {
        const sig = comp.decl ? parseSignature(comp.decl) : void 0;
        if (!sig) {
          continue;
        }
        attachPorts(sig, comp.nodes, env, quiet);
        for (const list of [sig.inPorts, sig.outPorts]) {
          for (const port of list) {
            port.idNode = void 0;
            port.pinsNode = void 0;
            port.unwiredNode = void 0;
            port.hearNode = void 0;
          }
        }
        for (const def of sig.settings.values()) {
          def.node = void 0;
        }
        sig.defPath = path2;
        decls.set(sig.name, sig);
      }
      const broken = root.hasError;
      tree.delete();
      return { decls, broken, types, typeRanges };
    }
    function analyze(text, path2, ws, config = exports2.DEFAULT_CONFIG) {
      const tree = (0, parser_12.parse)(text);
      const root = tree.rootNode;
      const lines = text.split("\n");
      let diags = [];
      const marks = [];
      const known = /* @__PURE__ */ new Map();
      const types = new types_1.TypeEnv();
      const scopesOut = [];
      const imports = [];
      const add = (node, message, severity = exports2.ERROR) => {
        const d = { range: (0, tree_1.rangeOf)(node), message, severity };
        diags.push(d);
        return d;
      };
      const addSpan = (a, b, message, severity = exports2.ERROR) => {
        diags.push({ range: (0, tree_1.spanOf)(a, b), message, severity });
      };
      const mark = (node, kind = "component") => {
        if (node) {
          marks.push({ range: (0, tree_1.rangeOf)(node), kind });
        }
      };
      const { diags: syntaxDiags, rows: errorRows } = collectSyntaxErrors(root, lines);
      const register = (name2, sig, node, what) => {
        const prev = known.get(name2);
        if (prev) {
          add(node, `"${name2}" is already ${prev.origin ?? "declared"}`, exports2.WARN);
        }
        known.set(name2, { ...sig, origin: what });
      };
      for (const td of (0, tree_1.kids)(root, "type_declaration")) {
        const n = (0, tree_1.field)(td, "name");
        const d = (0, tree_1.field)(td, "definition");
        if (n && d) {
          if (types.defs.has(n.text)) {
            add(n, `type "${n.text}" is already declared`, exports2.WARN);
          }
          types.defs.set(n.text, d.text);
          types.origins.set(n.text, { path: path2, range: (0, tree_1.rangeOf)(n) });
          mark(n, "type");
        }
      }
      {
        let open = false;
        for (const child of (0, tree_1.kids)(root)) {
          if (child.type === "function_declaration") {
            open = true;
          } else if (child.type === "block_end") {
            if (!open) {
              add(child, '";" closes the component above it, and no component is open here');
            }
            open = false;
          }
        }
      }
      for (const imp of (0, tree_1.kids)(root, "import_statement")) {
        const mod = (0, tree_1.field)(imp, "module");
        const modtext = mod ? mod.text : "";
        const modPath = mod ? ws.findModule(modtext, path2) : void 0;
        const got = modPath ? ws.declsIn(modPath) : void 0;
        imports.push({ module: modtext, path: modPath, range: (0, tree_1.rangeOf)(imp) });
        if (!mod) {
          continue;
        }
        if (!got) {
          add(mod, `cannot find module "${modtext}"`);
          continue;
        }
        const list = (0, tree_1.first)(imp, "import_list");
        if (list) {
          for (const item of (0, tree_1.kids)(list, "import_item")) {
            const nameNode = (0, tree_1.field)(item, "name");
            const aliasNode = (0, tree_1.field)(item, "alias");
            if (!nameNode) {
              continue;
            }
            const name2 = nameNode.text;
            const sig = got.decls.get(name2);
            const localName = aliasNode ? aliasNode.text : name2;
            if (!sig && got.types.has(name2)) {
              types.defs.set(localName, got.types.get(name2));
              types.origins.set(localName, { path: modPath, range: got.typeRanges.get(name2), from: modtext });
              mark(nameNode, "type");
              if (aliasNode) {
                mark(aliasNode, "type");
              }
            } else if (!sig) {
              let msg = `"${name2}" is not declared in ${modtext}`;
              if (got.broken) {
                msg += " (that file has syntax errors, which may be hiding it)";
              }
              add(nameNode, msg);
            } else {
              register(localName, sig, aliasNode ?? nameNode, "imported from " + modtext);
              mark(nameNode);
              if (aliasNode) {
                mark(aliasNode);
              }
            }
          }
        } else {
          const star = (0, tree_1.first)(imp, "import_all");
          for (const [name2, sig] of got.decls) {
            register(name2, sig, star ?? imp, "imported from " + modtext);
          }
          for (const [name2, def] of got.types) {
            if (!types.defs.has(name2)) {
              types.defs.set(name2, def);
              types.origins.set(name2, { path: modPath, range: got.typeRanges.get(name2), from: modtext });
            }
          }
        }
      }
      (0, tree_1.walk)(root, (x) => {
        if (x.type !== "type") {
          return;
        }
        const id = (0, tree_1.first)(x, "identifier");
        if (id && !types.defs.has(id.text)) {
          add(id, (0, types_1.isMedium)(id.text) ? `"${id.text}" is a medium, not a type; it says how a value travels, so write what travels and put it in braces: strength{${id.text}}` : `unknown type "${id.text}"; declare it with TYPE or import it with USE`, config.unknownComponentSeverity);
        } else if (id) {
          mark(id, "type");
        }
        if (!(id && !types.defs.has(id.text)) && (0, tree_1.first)(x, "field_name")) {
          const r = types.resolveProjection(x.text);
          if (r && !r.ok) {
            add(x, r.reason);
          }
        }
      });
      const scopes = splitComponents(root).map((c) => ({
        decl: c.decl,
        nodes: c.nodes,
        closed: c.closed,
        values: /* @__PURE__ */ new Map(),
        instances: /* @__PURE__ */ new Map()
      }));
      for (const scope of scopes) {
        if (!scope.decl) {
          continue;
        }
        const sig = parseSignature(scope.decl);
        if (sig) {
          const id = (0, tree_1.first)(scope.decl, "identifier");
          sig.defPath = path2;
          register(sig.name, sig, id ?? scope.decl, "declared in this file");
          scope.sig = known.get(sig.name);
          mark(id);
        }
      }
      const unusedPinsWarning = (scope, layout, side) => {
        if (!layout.known || layout.n === void 0 || !scope.decl || !scope.sig) {
          return;
        }
        const unused = [];
        for (let p = 0; p < layout.n; p++) {
          if (!layout.used.has(p)) {
            unused.push(p);
          }
        }
        if (unused.length > 0) {
          add(scope.decl, `${scope.sig.name} has ${side} ${pinSpan(layout.n)}, but ${unused.length === 1 ? "pin" : "pins"} ${describePins(unused)}${unused.length === 1 ? " is" : " are"} not used by any ${side === "input" ? "parameter" : "output port"}`, config.unusedPinSeverity);
        }
      };
      for (const scope of scopes) {
        const sig = scope.sig;
        if (!sig) {
          continue;
        }
        const [inLayout, outLayout] = attachPorts(sig, scope.nodes, types, (n, m, sev) => add(n, m, sev), scope.decl);
        unusedPinsWarning(scope, inLayout, "input");
        let splitsRecord = false;
        const rm = /^([A-Za-z_&][A-Za-z0-9_&]*)(.*)$/s.exec(sig.ret ?? "");
        const rname = rm?.[1];
        const rarg = rm?.[2] ?? "";
        const rfields = rname && types.defs.has(rname) ? types.recordFields(types.defs.get(rname)) : void 0;
        if (rname && rfields) {
          const seen = /* @__PURE__ */ new Map();
          let any = false;
          for (const port of sig.outPorts) {
            const ptext = port.type ? (0, types_1.norm)(port.type) : "";
            const pm = /^([A-Za-z_&][A-Za-z0-9_&]*)\.([A-Za-z_&][A-Za-z0-9_&]*)(.*)$/s.exec(ptext);
            if (pm && pm[1] === rname && port.idNode) {
              any = true;
              const pfield = pm[2];
              const parg = pm[3];
              if (seen.has(pfield)) {
                add(port.idNode, `"${seen.get(pfield)}" and "${port.name}" both carry ${rname}.${pfield}; each field goes out once`);
              } else {
                seen.set(pfield, port.name);
              }
              const rest = parg.startsWith(".") ? (0, types_1.trailingGroup)(parg) : parg;
              if (rest !== rarg) {
                add(port.idNode, `${sig.name} outputs a ${sig.ret}, so write this part the same way: ${rname}.${pfield}${rarg}`);
              }
            }
          }
          if (any && scope.decl) {
            for (const f of rfields) {
              if (!seen.has(f.name)) {
                add(scope.decl, `${sig.name} outputs a ${sig.ret}, but no output carries its field "${f.name}"; add one like ~> ${f.name}_out: ${rname}.${f.name}${rarg}`);
              }
            }
          }
          splitsRecord = any;
        }
        if (scope.decl) {
          const declaredOut = sig.outPorts.filter((p) => !p.implicit);
          if (sig.retArrow && declaredOut.length > 0 && !splitsRecord) {
            add(scope.decl, `${sig.name} declares ${declaredOut.length === 1 ? "an output port" : `${declaredOut.length} output ports`} (${declaredOut.map((p) => p.name).join(", ")}), which give the types; drop the "${sig.retArrow} ${sig.ret}" from the header`);
          } else if (!sig.retArrow && declaredOut.length === 0 && sig.outputs !== 0) {
            add(scope.decl, `${sig.name} has no output ports, so the header says what it yields; add a return type like "=> bit", or declare its outputs below`);
          }
        }
        if (sig.declaredOutputs > 0) {
          unusedPinsWarning(scope, outLayout, "output");
        }
      }
      const checkClosers = (scope) => {
        const blocks = [];
        for (const n of scope.nodes) {
          (0, tree_1.walk)(n, (x) => {
            if (x.type === "block" || x.type === "pattern_match") {
              blocks.push(x);
            }
          });
        }
        const closed = blocks.filter((b) => !!(0, tree_1.first)(b, "block_end"));
        if (closed.length === 0 || closed.length === blocks.length) {
          if (closed.length === 0 || !scope.decl || scope.closed) {
            return;
          }
          add(scope.decl, `${scope.sig?.name ?? "this component"} closes its blocks with ";", so close the component too: a ";" of its own on the last line`, config.unclosedBlockSeverity);
          return;
        }
        for (const b of blocks) {
          if ((0, tree_1.first)(b, "block_end")) {
            continue;
          }
          const end = (0, tree_1.rangeOf)(b).end;
          diags.push({
            range: { start: end, end },
            message: b.type === "pattern_match" ? 'this pattern has no ";", and the others in this component do; a closer that is there sometimes hides the one that is missing' : 'this block has no ";", and the others in this component do; a closer that is there sometimes hides the one that is missing',
            severity: config.unclosedBlockSeverity
          });
        }
      };
      for (const scope of scopes) {
        checkClosers(scope);
        checkScope(scope);
      }
      function checkScope(scope) {
        const values = scope.values;
        const handled = /* @__PURE__ */ new Set();
        const drivers = /* @__PURE__ */ new Map();
        const varCounts = /* @__PURE__ */ new Map();
        const uncountable = /* @__PURE__ */ new Set();
        const partsSeen = /* @__PURE__ */ new Map();
        const driven = /* @__PURE__ */ new Map();
        const yields = [];
        const enumOptions = /* @__PURE__ */ new Map();
        const declare = (idNode, kind, typeText) => {
          if (!idNode) {
            return void 0;
          }
          const name2 = idNode.text;
          const existing = values.get(name2);
          if (existing && existing.kind !== "wire" && kind !== "wire") {
            add(idNode, `"${name2}" is already declared in this component`, exports2.WARN);
          }
          if (!existing || existing.kind === "wire") {
            const v = {
              kind,
              type: typeText,
              read: existing?.read,
              defNode: existing?.defNode ?? idNode,
              defRange: existing?.defRange ?? (0, tree_1.rangeOf)(idNode)
            };
            values.set(name2, v);
            return v;
          }
          return existing;
        };
        if (scope.sig) {
          for (const port of scope.sig.inPorts) {
            declare(port.idNode, "input", port.type);
          }
          for (const port of scope.sig.outPorts) {
            if (!port.implicit) {
              declare(port.idNode, "output", port.type);
            }
          }
          for (const name2 of scope.sig.settingOrder) {
            const def = scope.sig.settings.get(name2);
            if (def.node) {
              declare(def.node, "setting", def.kind);
              const v = values.get(name2);
              if (v && v.kind === "setting") {
                v.setting = def;
              }
            }
          }
        }
        const instances = scope.instances;
        const ORDINALS = ["first", "second", "third", "fourth"];
        const nth = (d) => ORDINALS[d - 1] ?? `#${d}`;
        const rangeNums = (node) => {
          const r = node.type === "index" ? (0, tree_1.first)(node, "range") ?? node : node;
          return [num((0, tree_1.field)(r, "start")), num((0, tree_1.field)(r, "end"))];
        };
        const registerInstance = (nameNode, dims, sig, typeName, dimsBad = false) => {
          if (!nameNode) {
            return;
          }
          const name2 = nameNode.text;
          if (instances.has(name2)) {
            add(nameNode, `"${name2}" is already declared in this component`);
            return;
          }
          if (values.has(name2)) {
            add(nameNode, `"${name2}" is already a signal in this component; give the part another name`);
            return;
          }
          if (!dims && known.has(name2)) {
            add(nameNode, `"${name2}" is already a component type; give this part its own name, or write [${name2}] without declaring it to use the one unnamed ${name2}`);
            return;
          }
          instances.set(name2, { sig, type: typeName, dims, dimsBad, node: nameNode, used: false, defRange: (0, tree_1.rangeOf)(nameNode) });
          if (sig) {
            mark(nameNode);
          }
        };
        const settingValueForPart = (def, vNode, typeName, resolve) => {
          const text2 = vNode.text;
          if (vNode.type !== "identifier") {
            return settingValueProblem(def, text2, resolve);
          }
          const isOption = def.kind === "choice" && def.optionSet.has(text2);
          const v = values.get(text2);
          const outer = v && v.kind === "setting" ? v.setting : void 0;
          if (isOption && outer) {
            return `"${text2}" is both an option of ${def.name} and a setting of this component; rename the setting so it's clear which is meant`;
          } else if (isOption) {
            return void 0;
          } else if (outer) {
            const what = { time: "a time", number: "a number", choice: "a choice" };
            if (outer.kind !== def.kind) {
              return `"${text2}" is ${what[outer.kind]} setting, but ${typeName}'s ${def.name} needs ${what[def.kind]}`;
            }
            if (def.kind === "choice") {
              const extra = outer.options.filter((o) => !def.optionSet.has(o));
              if (extra.length > 0) {
                return `"${text2}" allows ${extra.join(", ")}, which ${typeName}'s ${def.name} doesn't accept; its options are: ${def.options.join(", ")}`;
              }
            } else if (outer.lo !== void 0 && outer.hi !== void 0 && def.lo !== void 0 && def.hi !== void 0 && (outer.lo < def.lo || outer.hi > def.hi)) {
              const show = def.kind === "time" ? showTime : (n) => String(n);
              return `"${text2}" allows ${show(outer.lo)} to ${show(outer.hi)}, but ${typeName}'s ${def.name} only allows ${show(def.lo)} to ${show(def.hi)}; narrow ${text2} to fit`;
            }
            return void 0;
          } else if (v) {
            return `"${text2}" is a signal, but settings are fixed when a part is built, so they can't come from a wire; make it an input of ${typeName} instead`;
          }
          const example = { time: "2gt or 1rt", number: "a number", choice: def.options.join(", ") };
          return `"${text2}" is not a value for ${def.name}; give ${example[def.kind]}, or the name of one of this component's own settings`;
        };
        const declareInstances = (node) => {
          const parent = node.parent;
          if (parent && parent.type !== "source_file") {
            add(node, "parts are declared at the top level of a component, not inside a block; to get one part per EACH step, declare an array and index it");
          }
          const typeNode = (0, tree_1.field)(node, "type");
          const typeName = typeNode?.text;
          const sig = typeName ? known.get(typeName) : void 0;
          if (typeNode && !sig) {
            add(typeNode, `"${typeName}" is not a component type here; declare it in this file or import it with USE`, config.unknownComponentSeverity);
          } else if (sig) {
            mark(typeNode);
          }
          const listNode = (0, tree_1.field)(node, "instances");
          for (const content of listNode ? (0, tree_1.kids)(listNode) : []) {
            const inner = (0, tree_1.first)(content);
            if (!inner) {
              continue;
            }
            if (inner.type === "instance_ref") {
              const dims = [];
              let bad = false;
              for (const ix of (0, tree_1.kids)(inner, "index")) {
                const v = num((0, tree_1.field)(ix, "value"));
                const [a, b] = rangeNums(ix);
                if (v !== void 0) {
                  dims.push([v, v]);
                } else if (a !== void 0 && b !== void 0) {
                  dims.push([Math.min(a, b), Math.max(a, b)]);
                } else {
                  bad = true;
                }
              }
              registerInstance((0, tree_1.field)(inner, "name"), bad ? void 0 : dims, sig, typeName, bad);
              if (bad) {
                add(inner, `"${(0, tree_1.field)(inner, "name")?.text ?? ""}" is being declared, so its indices need a definite size, like [${(0, tree_1.field)(inner, "name")?.text ?? "part"}{0..7}]`);
              }
            } else if (inner.type === "identifier") {
              registerInstance(inner, void 0, sig, typeName);
            } else {
              registerInstance((0, tree_1.first)(inner, "identifier"), void 0, sig, typeName);
            }
          }
          const chosenNode = (0, tree_1.field)(node, "settings");
          if (sig && typeName && typeNode) {
            const chosen = /* @__PURE__ */ new Set();
            const here = /* @__PURE__ */ new Map();
            for (const [sname, def] of sig.settings) {
              if (def.default !== void 0 && /^\d+$/.test(def.default)) {
                here.set(sname, Number(def.default));
              }
            }
            for (const sv of chosenNode ? (0, tree_1.kids)(chosenNode, "setting_value") : []) {
              const nNode = (0, tree_1.field)(sv, "name");
              const vNode = (0, tree_1.field)(sv, "value");
              if (nNode && vNode && /^\d+$/.test(vNode.text)) {
                here.set(nNode.text, Number(vNode.text));
              }
            }
            for (let pass = 0; pass < sig.settings.size; pass++) {
              let changed = false;
              for (const [sname, def] of sig.settings) {
                if (!here.has(sname) && def.defaultName !== void 0) {
                  const v = here.get(def.defaultName);
                  if (v !== void 0) {
                    here.set(sname, v);
                    changed = true;
                  }
                }
              }
              if (!changed) {
                break;
              }
            }
            const resolve = (name2) => here.get(name2);
            const bad = /* @__PURE__ */ new Set();
            for (const sv of chosenNode ? (0, tree_1.kids)(chosenNode, "setting_value") : []) {
              const nNode = (0, tree_1.field)(sv, "name");
              const vNode = (0, tree_1.field)(sv, "value");
              const sname = nNode?.text;
              const def = sname ? sig.settings.get(sname) : void 0;
              if (sname && nNode && !def) {
                const names = sig.settingOrder;
                add(nNode, `${typeName} has no setting "${sname}"; ${names.length > 0 ? "its settings are: " + names.join(", ") : "it has no settings"}`);
              } else if (def && sname && nNode) {
                if (chosen.has(sname)) {
                  add(nNode, `setting "${sname}" is chosen twice`);
                }
                chosen.add(sname);
                const problem = vNode ? settingValueForPart(def, vNode, typeName, resolve) : void 0;
                if (problem && vNode) {
                  add(vNode, problem);
                  bad.add(sname);
                }
              }
            }
            for (const sname of sig.settingOrder) {
              const def = sig.settings.get(sname);
              if (def.default === void 0 && !chosen.has(sname)) {
                add(typeNode, `${typeName} needs a value for its setting "${sname}" here, e.g. ${typeName}{${sname}: ...}`);
                continue;
              }
              const dependsOnBad = def.loName && bad.has(def.loName) || def.hiName && bad.has(def.hiName);
              const effective = here.get(sname);
              const defaultText = def.defaultName !== void 0 ? effective?.toString() : def.default;
              if (!chosen.has(sname) && defaultText !== void 0 && (def.loName || def.hiName) && !dependsOnBad) {
                const problem = settingValueProblem(def, defaultText, resolve);
                if (problem) {
                  const shown = def.defaultName !== void 0 ? `${def.defaultName} (${defaultText})` : defaultText;
                  add(chosenNode ?? typeNode, `${typeName} leaves "${sname}" at its default ${shown} here, and ${problem.replace(/^\S+ is outside \S+, which allows /, "it allows ").replace(/^"[^"]+" is a number setting; give a number: /, "it allows ")}`);
                  bad.add(sname);
                }
              }
            }
          }
        };
        const bindingsAt = (node) => {
          const bindings = /* @__PURE__ */ new Map();
          let p = node.parent;
          while (p) {
            if (p.type === "each_block") {
              const v = (0, tree_1.field)(p, "var");
              const r = (0, tree_1.field)(p, "range");
              if (v && r) {
                const [a, z] = rangeNums(r);
                if (!bindings.has(v.text) && a !== void 0 && z !== void 0) {
                  bindings.set(v.text, [Math.min(a, z), Math.max(a, z)]);
                }
              }
            }
            p = p.parent;
          }
          return bindings;
        };
        const hearBlockFor = (node, name2) => {
          let p = node.parent;
          while (p) {
            if (p.type === "hear_block") {
              const v = (0, tree_1.field)(p, "var");
              if (v && v.text === name2) {
                return p;
              }
            }
            p = p.parent;
          }
          return void 0;
        };
        for (const n of scope.nodes) {
          (0, tree_1.walk)(n, (x) => {
            const t = x.type;
            if (t === "input_parameter" || t === "output_parameter" || t === "emission_parameter" || t === "timing_parameter" || t === "type_declaration") {
              return false;
            } else if (t === "instance_declaration") {
              declareInstances(x);
              return false;
            } else if (t === "setting_declaration") {
              const parent = x.parent;
              if (!scope.sig || parent && parent.type !== "source_file") {
                add(x, "SETTING belongs in a component header, next to its parameters");
              }
              return false;
            } else if (t === "state_declaration") {
              const allowed = (0, tree_1.field)(x, "allowed");
              const id = (0, tree_1.field)(x, "name");
              declare(id, "state", allowed ? (0, types_1.norm)(allowed.text) : void 0);
              const en = allowed && allowed.type === "setting_options" ? allowed : void 0;
              if (en && id) {
                const def = { name: id.text, options: [], optionSet: /* @__PURE__ */ new Set() };
                for (const o of (0, tree_1.kids)(en, "identifier")) {
                  if (def.optionSet.has(o.text)) {
                    add(o, `"${o.text}" is listed twice`);
                  }
                  def.optionSet.add(o.text);
                  def.options.push(o.text);
                  if (!enumOptions.has(o.text)) {
                    enumOptions.set(o.text, def);
                  }
                }
                const v = values.get(def.name);
                if (v && v.kind === "state") {
                  v.enumDef = def;
                }
              }
            } else if (t === "flow_destination") {
              const id = (0, tree_1.first)(x, "identifier");
              if (id) {
                const existing = values.get(id.text);
                if (existing && existing.kind === "output") {
                  existing.driven = true;
                } else {
                  declare(id, "wire");
                }
              }
              const arr = (0, tree_1.first)(x, "data_array");
              if (arr) {
                for (const item of (0, tree_1.kids)(arr, "data_item")) {
                  const itemId = (0, tree_1.first)(item, "identifier");
                  if (itemId) {
                    declare(itemId, "wire");
                  }
                }
              }
            }
            return void 0;
          });
        }
        const maxFor = (typeName) => types.level(typeName);
        const refNameNode = (ref) => ref.type === "instance_ref" ? (0, tree_1.field)(ref, "name") : ref;
        const checkIndices = (ref, inst, name2, silent = false) => {
          let ok = true;
          const report = (node, msg) => {
            ok = false;
            if (!silent) {
              add(node, msg);
            }
          };
          if (inst.dimsBad || !inst.dims) {
            return false;
          }
          const dims = inst.dims;
          const idxs = (0, tree_1.kids)(ref, "index");
          if (idxs.length !== dims.length) {
            report(ref, `"${name2}" has ${dims.length} dimension${s(dims.length)}, but this uses ${idxs.length} ind${idxs.length === 1 ? "ex" : "ices"}`);
            return false;
          }
          const bound = bindingsAt(ref);
          idxs.forEach((ix, i2) => {
            const [lo, hi] = dims[i2];
            const where = dims.length === 1 ? `${name2} runs ${lo}..${hi}` : `${name2}'s ${nth(i2 + 1)} index runs ${lo}..${hi}`;
            const vNode = (0, tree_1.field)(ix, "value");
            const varNode = (0, tree_1.field)(ix, "var");
            let [a, b] = rangeNums(ix);
            if (vNode) {
              const n = num(vNode);
              if (n !== void 0 && (n < lo || n > hi)) {
                report(ix, `index ${n} is out of range; ${where}`);
              }
            } else if (a !== void 0 && b !== void 0) {
              if (b < a) {
                report(ix, `range ${a}..${b} runs backwards; write ${b}..${a}`);
                [a, b] = [b, a];
              }
              if (a < lo || b > hi) {
                report(ix, `range ${a}..${b} goes out of range; ${where}`);
              }
            } else if (varNode) {
              const vn = varNode.text;
              const r = bound.get(vn);
              if (!r) {
                report(varNode, `"${vn}" is not an EACH variable here; indices are numbers, ranges, or a variable from an enclosing EACH`);
              } else {
                let off = num((0, tree_1.field)(ix, "offset")) ?? 0;
                const op = (0, tree_1.field)(ix, "op");
                if (op && op.text === "-") {
                  off = -off;
                }
                let bad;
                if (r[0] + off < lo) {
                  bad = r[0];
                } else if (r[1] + off > hi) {
                  bad = r[1];
                }
                if (bad !== void 0) {
                  report(ix, `${ix.text} reaches ${bad + off} when ${vn} is ${bad}, but ${where}`);
                }
              }
            }
          });
          return ok;
        };
        const reportUndeclared = (nameNode, name2) => {
          let base = name2;
          const suffix = [];
          for (; ; ) {
            const m = /^(.*?)_(\d+)$/.exec(base);
            if (!m || m[1] === "") {
              break;
            }
            suffix.unshift(m[2]);
            base = m[1];
          }
          let msg;
          if (suffix.length > 0 && known.has(base)) {
            const ranges = suffix.map(() => "0..N").join(", ");
            msg = `"${name2}" is not declared. For one ${base}, declare it with [${name2}]: ${base}. For a group, declare an array like [${base}{${ranges}}]: ${base} and write ${base}{${suffix.join(", ")}}`;
          } else if (suffix.length > 0) {
            msg = `"${name2}" is not declared, and there is no component type "${base}"; declare or import ${base} first, then declare this part`;
          } else {
            msg = `"${name2}" is not a declared part or a component type; declare the part with [${name2}]: SomeType, or declare or import a component named ${name2}`;
          }
          const d = add(nameNode, msg, config.unknownComponentSeverity);
          d.unknown = [name2, base];
        };
        const resolveRef = (ref, loud) => {
          const indexed = ref.type === "instance_ref";
          const nameNode = refNameNode(ref);
          if (!nameNode) {
            return void 0;
          }
          const name2 = nameNode.text;
          const inst = instances.get(name2);
          if (indexed) {
            if (!inst) {
              if (loud) {
                const d = add(nameNode, `"${name2}" is not declared as an array; declare it with [${name2}{0..N}]: SomeType`, config.unknownComponentSeverity);
                d.unknown = [name2, name2];
              }
              return void 0;
            }
            inst.used = true;
            if (!inst.dims) {
              if (loud) {
                add(ref, `"${name2}" is a single part, not an array; write [${name2}]`);
              }
            } else if (loud) {
              checkIndices(ref, inst, name2);
            }
            return { kind: "part", sig: inst.sig, inst };
          }
          const val = values.get(name2);
          if (val) {
            return { kind: "value", value: val };
          }
          if (inst) {
            inst.used = true;
            if (inst.dims && loud) {
              add(ref, `"${name2}" is an array; pick parts with ${name2}{...}, or all of them with a range like ${name2}{${inst.dims[0][0]}..${inst.dims[0][1]}}`);
            }
            return { kind: "part", sig: inst.sig, inst };
          }
          if (known.has(name2)) {
            return { kind: "part", sig: known.get(name2) };
          }
          if (loud) {
            reportUndeclared(nameNode, name2);
          }
          return void 0;
        };
        const partSig = (ref) => {
          const r = resolveRef(ref, false);
          return r && r.kind === "part" ? r.sig : void 0;
        };
        const refCount = (ref) => {
          if (ref.type !== "instance_ref") {
            return 1;
          }
          let count = 1;
          for (const ix of (0, tree_1.kids)(ref, "index")) {
            const [a, b] = rangeNums(ix);
            if (a !== void 0 && b !== void 0) {
              count *= Math.abs(b - a) + 1;
            }
          }
          return count;
        };
        const assignmentsFor = (node) => {
          const b = bindingsAt(node);
          const vars = [...b.keys()].sort();
          let out2 = [/* @__PURE__ */ new Map()];
          for (const v of vars) {
            const [lo, hi] = b.get(v);
            const next = [];
            for (const a of out2) {
              for (let k = lo; k <= hi; k++) {
                const c = new Map(a);
                c.set(v, k);
                next.push(c);
              }
            }
            out2 = next;
            if (out2.length > 4096) {
              return void 0;
            }
          }
          return out2;
        };
        const concreteNames = (ref, assign) => {
          if (ref.type !== "instance_ref") {
            return [ref.text];
          }
          const steps = assign ? [assign] : assignmentsFor(ref);
          if (!steps) {
            return void 0;
          }
          const name2 = (0, tree_1.field)(ref, "name")?.text ?? "";
          const seen = /* @__PURE__ */ new Set();
          const result = [];
          for (const step of steps) {
            const lists = [];
            for (const ix of (0, tree_1.kids)(ref, "index")) {
              const vNode = (0, tree_1.field)(ix, "value");
              const varNode = (0, tree_1.field)(ix, "var");
              const [a, b] = rangeNums(ix);
              if (vNode) {
                lists.push([num(vNode) ?? 0]);
              } else if (a !== void 0 && b !== void 0) {
                const l = [];
                for (let k = Math.min(a, b); k <= Math.max(a, b); k++) {
                  l.push(k);
                }
                lists.push(l);
              } else if (varNode) {
                const base = step.get(varNode.text);
                if (base === void 0) {
                  return void 0;
                }
                let off = num((0, tree_1.field)(ix, "offset")) ?? 0;
                const op = (0, tree_1.field)(ix, "op");
                if (op && op.text === "-") {
                  off = -off;
                }
                lists.push([base + off]);
              } else {
                return void 0;
              }
            }
            let combos = [[]];
            for (const l of lists) {
              const next = [];
              for (const prefix of combos) {
                for (const k of l) {
                  next.push([...prefix, k]);
                }
              }
              combos = next;
            }
            for (const c of combos) {
              const nm = `${name2}{${c.join(",")}}`;
              if (!seen.has(nm)) {
                seen.add(nm);
                result.push(nm);
              }
            }
            if (result.length > 4096) {
              return void 0;
            }
          }
          return result;
        };
        const checkValue = (id, ctx) => {
          const name2 = id.text;
          const v = values.get(name2);
          if (v) {
            v.read = true;
            if (ctx === "trigger" && types.kindOf(v.type) === "event") {
              add(id, `WAIT and CHANGE watch a level, but "${name2}" is a ${v.type}: it exists only in the tick it arrives; read it with HEAR(vib IN ${name2})`);
            }
            if (v.kind === "setting") {
              const ok = ctx === "subject" || ctx === "operand" && v.type === "number";
              if (!ok) {
                add(id, `"${name2}" is a setting, fixed when the part is built, not a signal; match on it, or use it in AFTER(${name2}) or -(${name2})->`);
              }
            }
            return;
          }
          if (hearBlockFor(id, name2) || enumOptions.has(name2)) {
            return;
          }
          if (bindingsAt(id).has(name2)) {
            add(id, `"${name2}" is an EACH index, not a signal; use it inside braces, e.g. part{${name2}}`);
            return;
          }
          if (instances.has(name2) || known.has(name2)) {
            add(id, `"${name2}" is a part; wrap it in brackets to read its output: [${name2}]`, exports2.WARN);
          } else {
            const d = add(id, `undeclared signal "${name2}"`, config.undeclaredSignalSeverity);
            d.unknown = [name2, name2];
          }
        };
        const bracketIds = (arr) => {
          const out2 = [];
          for (const child of (0, tree_1.kids)(arr)) {
            const t = child.type;
            if (t === "component_content" || t === "flow_destination_item") {
              const inner = (0, tree_1.first)(child);
              if (inner) {
                if (inner.type === "identifier" || inner.type === "instance_ref") {
                  out2.push(inner);
                } else if (t === "component_content") {
                  const id = (0, tree_1.first)(inner, "identifier");
                  if (id) {
                    out2.push(id);
                  }
                }
              }
            }
          }
          return out2;
        };
        const refItems = (node) => (0, tree_1.kids)(node).filter((c) => c.type === "identifier" || c.type === "instance_ref");
        const pinOf = (node) => num((0, tree_1.first)(node, "number"));
        const portNodeOf = (node) => (0, tree_1.field)(node, "port");
        const resolvePort = (sig, portNode, side) => {
          const pname = portNode.text;
          const ports = side === "in" ? sig.inPorts : sig.outPorts;
          const what = side === "in" ? "input" : "output";
          const port = findPort(ports, pname);
          if (!port) {
            const names = portNames(ports);
            const listing = names.length > 0 ? `its ${what} ports are: ${names.join(", ")}` : `it has no named ${what} ports`;
            add(portNode, `${sig.name} has no ${what} port "${pname}"; ${listing}`);
            return void 0;
          }
          mark(portNode, "port");
          return port;
        };
        const varEntry = (name2, sig, ref) => {
          let e = varCounts.get(name2);
          if (!e) {
            e = { sig, first: ref, pins: /* @__PURE__ */ new Set(), named: /* @__PURE__ */ new Map() };
            varCounts.set(name2, e);
          }
          return e;
        };
        const notePart = (ref, sig) => {
          const r = resolveRef(ref, false);
          const inst = r && r.kind === "part" ? r.inst : void 0;
          if (inst) {
            if (ref.type === "instance_ref") {
              if (!inst.dims || !checkIndices(ref, inst, refNameNode(ref)?.text ?? "", true)) {
                return;
              }
            } else if (inst.dims) {
              return;
            }
          }
          const names = concreteNames(ref);
          if (!names) {
            uncountable.add(refNameNode(ref)?.text ?? "");
            return;
          }
          for (const nm of names) {
            if (!partsSeen.has(nm)) {
              partsSeen.set(nm, { sig, ref });
            }
          }
        };
        const markDriven = (ref, from, to, assign) => {
          const names = concreteNames(ref, assign);
          if (!names) {
            uncountable.add(refNameNode(ref)?.text ?? "");
            return;
          }
          for (const nm of names) {
            let set = driven.get(nm);
            if (!set) {
              set = /* @__PURE__ */ new Set();
              driven.set(nm, set);
            }
            for (let p = from; p <= to; p++) {
              set.add(p);
            }
          }
        };
        const reportRequiredInputs = () => {
          for (const [nm, seen] of partsSeen) {
            const array = /^[^{]+/.exec(nm)?.[0] ?? nm;
            if (uncountable.has(array)) {
              continue;
            }
            for (const port of seen.sig.inPorts) {
              if (!port.optional && !port.variadic && port.s !== void 0 && port.e !== void 0) {
                let any = false;
                for (let p = port.s; p <= port.e; p++) {
                  if (driven.get(nm)?.has(p)) {
                    any = true;
                  }
                }
                if (!any) {
                  add(seen.ref, `${nm}'s input "${port.name}" is never driven; wire something to ${port.name}[${array}], or mark it optional in ${seen.sig.name} with -> ${port.name}: ${port.type ?? "bit"} = 0`);
                }
              }
            }
          }
        };
        const noteVariadicPart = (ref, sig) => {
          if (!sig.varIn) {
            return;
          }
          const names = concreteNames(ref);
          if (!names) {
            uncountable.add(refNameNode(ref)?.text ?? "");
            return;
          }
          for (const nm of names) {
            varEntry(nm, sig, ref);
          }
        };
        const reportVariadicCounts = () => {
          for (const [nm, e] of varCounts) {
            const vp = e.sig.varIn;
            const array = /^[^{]+/.exec(nm)?.[0] ?? nm;
            if (!vp || uncountable.has(array)) {
              continue;
            }
            let n = e.pins.size;
            for (const w of e.named.values()) {
              n += w;
            }
            const label = `${nm} gets ${n} pin${s(n)} on "${vp.name}"`;
            if (vp.min !== void 0 && n < vp.min) {
              add(e.first, `${label}, but ${e.sig.name} needs at least ${vp.min}`);
            } else if (vp.max !== void 0 && n > vp.max) {
              add(e.first, `${label}, but ${e.sig.name} takes at most ${vp.max}`);
            }
          }
        };
        const checkComponent = (ref, pin, side, portNode) => {
          handled.add(ref.id);
          const r = resolveRef(ref, true);
          const name2 = refNameNode(ref)?.text ?? "";
          if (r && r.kind === "value") {
            const val = r.value;
            if (portNode) {
              add(portNode, `"${name2}" is a ${val.type ?? "plain"} value, which has no named parts`);
              return;
            }
            const w = types.width(val.type);
            if (side === "out" && pin !== void 0 && w !== void 0 && pin > w - 1) {
              const at = ref.parent?.parent ?? ref;
              add(at, `"${name2}" is a ${val.type}; bit ${pin} is outside 0..${w - 1}`);
            }
            return;
          }
          const sig = r && r.kind === "part" ? r.sig : void 0;
          if (!sig) {
            return;
          }
          mark(refNameNode(ref) ?? void 0);
          noteVariadicPart(ref, sig);
          notePart(ref, sig);
          if (portNode) {
            resolvePort(sig, portNode, side === "in" ? "in" : "out");
            return;
          }
          let limit;
          if (side === "in") {
            limit = typeof sig.inputs === "number" ? sig.inputs : sig.inMax;
          } else if (side === "out") {
            limit = typeof sig.outputs === "number" ? sig.outputs : sig.outMax;
          }
          if (pin !== void 0 && limit !== void 0 && pin > limit - 1) {
            add(ref, `${sig.name} has ${limit} ${side === "in" ? "input" : "output"} pin${s(limit)} (${pinSpan(limit)}); pin ${pin} does not exist`);
          }
        };
        const sourceType = (el) => {
          const t = el.type;
          if (t === "identifier") {
            return values.get(el.text)?.type;
          }
          if (t === "field_access") {
            return void 0;
          }
          let refs = [];
          let portNode;
          if (t === "output_ref") {
            portNode = portNodeOf(el);
            const arr = (0, tree_1.first)(el, "component_array");
            refs = arr ? bracketIds(arr) : [];
          } else if (t === "parameter_ref") {
            portNode = portNodeOf(el);
            refs = refItems(el);
          } else if (t === "component_array") {
            refs = bracketIds(el);
          } else {
            return void 0;
          }
          if (refs.length !== 1) {
            return void 0;
          }
          const r = resolveRef(refs[0], false);
          if (r && r.kind === "value") {
            return r.value.type;
          }
          if (!(r && r.kind === "part" && r.sig)) {
            return void 0;
          }
          if (portNode) {
            return findPort(r.sig.outPorts, portNode.text)?.type;
          }
          const declared = r.sig.outPorts.filter((p) => !p.implicit);
          return declared.length === 1 ? declared[0].type : r.sig.ret || void 0;
        };
        const destType = (el) => {
          if (el.type === "identifier") {
            return values.get(el.text)?.type;
          }
          if (el.type !== "parameter_ref") {
            return void 0;
          }
          const portNode = portNodeOf(el);
          const refs = refItems(el);
          if (!portNode || refs.length !== 1) {
            return void 0;
          }
          const r = resolveRef(refs[0], false);
          return r && r.kind === "part" && r.sig ? findPort(r.sig.inPorts, portNode.text)?.type : void 0;
        };
        const checkAirLink = (link) => {
          const ends = [
            [link.previousNamedSibling, "sends", "emit"],
            [link.nextNamedSibling, "takes", "hear"]
          ];
          for (const [el, verb, fix] of ends) {
            const inner = el ? (0, tree_1.first)(el) : void 0;
            if (!el || !inner) {
              continue;
            }
            const ty = verb === "sends" ? sourceType(inner) : destType(inner);
            if (ty !== void 0 && types.mediumOf(ty) !== "vibration") {
              add(el, `~( )~> crosses open air, but this end ${verb} a ${ty}, which travels ${howItTravels(types.mediumOf(ty))}; ${fix} it as something{vibration}, or use -> instead`);
            }
          }
        };
        const namesAPart = (el) => {
          let refs = [];
          if (el.type === "output_ref") {
            const arr = (0, tree_1.first)(el, "component_array");
            refs = arr ? bracketIds(arr) : [];
          } else if (el.type === "parameter_ref") {
            refs = refItems(el);
          } else if (el.type === "component_array") {
            refs = bracketIds(el);
          } else {
            return false;
          }
          return refs.some((ref) => {
            const r = resolveRef(ref, false);
            return !!r && r.kind === "part";
          });
        };
        const howItTravels = (medium) => medium === void 0 ? "on a wire" : medium === "vibration" ? "through the air" : `by ${medium}`;
        const checkLink = (at, from, toType, what, report) => {
          const fromType = sourceType(from);
          if (fromType === void 0 || toType === void 0) {
            return;
          }
          const a = types.mediumOf(fromType);
          const b = types.mediumOf(toType);
          if (a !== b) {
            report(at, `"${from.text.replace(/\s+/g, " ")}" travels ${howItTravels(a)}, but ${what} arrives ${howItTravels(b)}; a link carries one or the other`);
            return;
          }
          if (a === "contact") {
            const pa = (0, types_1.norm)(types.payloadOf(fromType) ?? "");
            const pb = (0, types_1.norm)(types.payloadOf(toType) ?? "");
            if (pa !== pb && pa !== "" && pb !== "") {
              report(at, `"${from.text.replace(/\s+/g, " ")}" offers ${pa} by contact, but ${what} takes ${pb}; touching blocks have to mean the same thing by it`);
            }
          }
        };
        const sourceWidth = (el) => {
          const t = el.type;
          if (t === "number") {
            return void 0;
          } else if (t === "identifier") {
            const val = values.get(el.text);
            return types.width(val?.type) ?? 1;
          } else if (t === "output_ref") {
            const portNode = portNodeOf(el);
            const arr = (0, tree_1.first)(el, "component_array");
            const refs = arr ? bracketIds(arr) : [];
            if (portNode) {
              if (refs.length !== 1) {
                return 1;
              }
              const sig = partSig(refs[0]);
              const port = sig ? findPort(sig.outPorts, portNode.text) : void 0;
              if (!port) {
                return void 0;
              }
              return types.width(port.type) ?? 1;
            }
            return 1;
          } else if (t === "parameter_ref" || t === "component_array") {
            const refs = t === "parameter_ref" ? refItems(el) : bracketIds(el);
            if (refs.length !== 1) {
              return 1;
            }
            const r = resolveRef(refs[0], false);
            if (r && r.kind === "value") {
              return types.width(r.value.type) ?? 1;
            }
            return r && r.kind === "part" && r.sig && types.width(r.sig.ret) || 1;
          } else if (t === "data_array") {
            let total = 0;
            for (const item of (0, tree_1.kids)(el, "data_item")) {
              const id = (0, tree_1.first)(item, "identifier");
              const arr = (0, tree_1.first)(item, "component_array");
              const out2 = (0, tree_1.first)(item, "output_ref");
              if (arr) {
                for (const ref of bracketIds(arr)) {
                  total += refCount(ref);
                }
              } else if (out2) {
                total += sourceWidth(out2) ?? 1;
              } else {
                const val = id ? values.get(id.text) : void 0;
                total += types.width(val?.type) ?? 1;
              }
            }
            return total;
          }
          return 1;
        };
        const sourceKey = (source, assign) => {
          const st = source.type;
          const refs = st === "parameter_ref" ? refItems(source) : st === "component_array" ? bracketIds(source) : [];
          if (refs.length === 1) {
            const names = concreteNames(refs[0], assign);
            return names ? `[${names.join(", ")}]` : void 0;
          }
          if (!assign && /\{\s*[A-Za-z_]/.test(source.text)) {
            return void 0;
          }
          return source.text.replace(/\s+/g, " ");
        };
        const hearsAt = (sig, from, to) => sig.inPorts.some((p) => p.kind === "event" && p.s !== void 0 && from <= (p.e ?? p.s) && to >= p.s);
        const addDriver = (inst, from, to, key, node) => {
          let pins = drivers.get(inst);
          if (!pins) {
            pins = /* @__PURE__ */ new Map();
            drivers.set(inst, pins);
          }
          for (let p = from; p <= to; p++) {
            let srcs = pins.get(p);
            if (!srcs) {
              srcs = /* @__PURE__ */ new Map();
              pins.set(p, srcs);
            }
            srcs.set(key, node);
          }
        };
        const trackFlow = (node) => {
          const elements = [];
          for (const child of (0, tree_1.kids)(node)) {
            if (child.type === "flow_source" || child.type === "flow_destination" || child.type === "pattern_result") {
              const f = (0, tree_1.first)(child);
              if (f) {
                elements.push(f);
              }
            }
          }
          const validSource = (el) => {
            if (el.type === "identifier") {
              return values.has(el.text);
            }
            let refs = [];
            if (el.type === "output_ref") {
              const arr = (0, tree_1.first)(el, "component_array");
              refs = arr ? bracketIds(arr) : [];
            } else if (el.type === "parameter_ref") {
              refs = refItems(el);
            } else if (el.type === "component_array") {
              refs = bracketIds(el);
            }
            for (const ref of refs) {
              const r = resolveRef(ref, false);
              if (!r) {
                return false;
              }
              const inst = r.kind === "part" ? r.inst : void 0;
              if (inst && ref.type === "instance_ref") {
                if (!inst.dims || !checkIndices(ref, inst, refNameNode(ref)?.text ?? "", true)) {
                  return false;
                }
              } else if (inst && inst.dims) {
                return false;
              }
            }
            return true;
          };
          const steps = assignmentsFor(node) ?? [/* @__PURE__ */ new Map()];
          steps.forEach((assign, stepI) => {
            const silent = stepI > 0;
            const report = (n, msg) => {
              if (!silent) {
                add(n, msg);
              }
            };
            for (let i2 = 1; i2 < elements.length; i2++) {
              const dest = elements[i2];
              const source = elements[i2 - 1];
              if (dest.type === "parameter_ref") {
                const portNode = portNodeOf(dest);
                const w = sourceWidth(source) ?? 1;
                for (const ref of refItems(dest)) {
                  const r = resolveRef(ref, false);
                  if (r && r.kind === "part" && r.sig) {
                    if (portNode) {
                      const port = findPort(r.sig.inPorts, portNode.text);
                      if (port && port.s !== void 0) {
                        markDriven(ref, port.s, port.e ?? port.s, assign);
                      }
                    } else {
                      const k = pinOf(dest);
                      if (k !== void 0) {
                        markDriven(ref, k, k + w - 1, assign);
                      }
                    }
                  }
                }
              } else if (dest.type === "component_array") {
                const w = sourceWidth(source) ?? 1;
                for (const content of (0, tree_1.kids)(dest)) {
                  for (const ref of refItems(content)) {
                    const r = resolveRef(ref, false);
                    if (r && r.kind === "part" && r.sig) {
                      markDriven(ref, 0, w - 1, assign);
                    }
                  }
                }
              }
              const width = validSource(source) ? sourceWidth(source) : void 0;
              if (width !== void 0 && dest.type === "identifier") {
                const out2 = values.get(dest.text);
                const ow = out2 && out2.kind === "output" ? types.width(out2.type) : void 0;
                if (ow !== void 0 && ow !== width) {
                  report(dest, `"${source.text.replace(/\s+/g, " ")}" is ${width} pin${s(width)} wide, but output ${dest.text} is a ${out2.type} (${ow} pin${s(ow)})`);
                }
                if (out2 && out2.kind === "output" && namesAPart(source)) {
                  checkLink(dest, source, out2.type, `output "${dest.text}"`, report);
                }
              } else if (width !== void 0 && dest.type === "parameter_ref") {
                const portNode = portNodeOf(dest);
                const key = sourceKey(source, assign);
                const label = key ?? source.text.replace(/\s+/g, " ");
                for (const ref of refItems(dest)) {
                  const r = resolveRef(ref, false);
                  if (!(r && r.kind === "part" && r.sig)) {
                    continue;
                  }
                  const sig = r.sig;
                  const names = key !== void 0 ? concreteNames(ref, assign) : void 0;
                  if (sig.varIn) {
                    const vp = sig.varIn;
                    if (!names) {
                      uncountable.add(refNameNode(ref)?.text ?? "");
                    } else {
                      const byName = !!portNode && portNode.text === vp.name;
                      const k = !portNode ? pinOf(dest) : void 0;
                      for (const nm of names) {
                        const e = varEntry(nm, sig, ref);
                        if (byName && key !== void 0) {
                          e.named.set(key, width);
                        } else if (k !== void 0 && vp.s !== void 0) {
                          for (let p = k; p <= k + width - 1; p++) {
                            if (p >= vp.s) {
                              e.pins.add(p);
                            }
                          }
                        }
                      }
                    }
                  }
                  if (portNode) {
                    const port = findPort(sig.inPorts, portNode.text);
                    if (port && !port.variadic) {
                      const pw = types.width(port.type);
                      if (pw !== void 0 && width !== pw) {
                        report(dest, `"${label}" is ${width} pin${s(width)} wide, but ${port.name} of ${sig.name} is a ${port.type} (${pw} pin${s(pw)})`);
                      }
                      checkLink(dest, source, port.type, `${port.name} of ${sig.name}`, report);
                      if (port.s !== void 0 && port.e !== void 0 && names && key !== void 0 && port.kind !== "event") {
                        for (const nm of names) {
                          addDriver(nm, port.s, port.e, key, dest);
                        }
                      }
                    }
                  } else {
                    const k = pinOf(dest);
                    if (k !== void 0) {
                      const nPins = typeof sig.inputs === "number" ? sig.inputs : void 0;
                      if (nPins !== void 0 && width > 1 && k + width - 1 > nPins - 1) {
                        report(dest, `"${label}" is ${width} pins wide; starting at pin ${k} it needs pins ${k}..${k + width - 1}, but ${sig.name} has ${pinSpan(nPins)}`);
                      }
                      if (key !== void 0 && !hearsAt(sig, k, k + width - 1)) {
                        for (const nm of names ?? []) {
                          addDriver(nm, k, k + width - 1, key, dest);
                        }
                      }
                    }
                  }
                }
              }
            }
          });
        };
        const armChain = (node) => {
          const chain = /* @__PURE__ */ new Map();
          let p = node.parent;
          while (p) {
            if (p.type === "pattern_case" && p.parent) {
              chain.set(p.parent.id, p.id);
            }
            p = p.parent;
          }
          return chain;
        };
        const exclusive = (a, b) => {
          const ca = armChain(a);
          const cb = armChain(b);
          for (const [m, arm] of ca) {
            if (cb.has(m) && cb.get(m) !== arm) {
              return true;
            }
          }
          return false;
        };
        const reportWiredOr = () => {
          for (const [inst, pins] of drivers) {
            const groups = /* @__PURE__ */ new Map();
            for (const [p, sources] of pins) {
              const keys = [];
              for (const [k1, n1] of sources) {
                for (const [k2, n2] of sources) {
                  if (k1 !== k2 && !exclusive(n1, n2)) {
                    keys.push(k1);
                    break;
                  }
                }
              }
              if (keys.length > 1) {
                keys.sort();
                const gkey = keys.join("\0");
                let g = groups.get(gkey);
                if (!g) {
                  g = { keys, pins: [] };
                  groups.set(gkey, g);
                }
                g.pins.push(p);
                for (const k of keys) {
                  const n = sources.get(k);
                  if (!g.node || n.startPosition.row > g.node.startPosition.row) {
                    g.node = n;
                  }
                }
              }
            }
            for (const g of groups.values()) {
              g.pins.sort((a, b) => a - b);
              const quoted = g.keys.map((k) => `"${k}"`);
              add(g.node, `${g.pins.length === 1 ? "pin" : "pins"} ${describePins(g.pins)} of ${inst} ${g.pins.length === 1 ? "is" : "are"} driven by ${quoted.join(" and ")}; redstone keeps the strongest of these (for on/off signals, an OR)`, config.wiredOrSeverity);
            }
          }
        };
        const checkOutputs = () => {
          const sig = scope.sig;
          if (!sig) {
            return;
          }
          const declared = sig.outPorts.filter((p) => !p.implicit);
          const namedOut = (y) => y.value && y.value.type === "identifier" ? findPort(declared, y.value.text) : void 0;
          const bare = yields.filter((y) => !namedOut(y));
          for (const y of yields) {
            const port = namedOut(y);
            const goesToAir = port ? port.medium === "vibration" : declared.length === 1 ? declared[0].medium === "vibration" : sig.emits;
            const what = port ? `${sig.name}'s "${port.name}"` : sig.name;
            if ((port || declared.length < 2) && goesToAir && y.arrow === "=>") {
              add(y.node, `${what} goes into the air, so it leaves with ~>, not =>`);
            } else if ((port || declared.length < 2) && !goesToAir && y.arrow === "~>") {
              add(y.node, `${what} travels on a wire, so it leaves with =>; ~> is for what goes into the air`);
            }
          }
          if (declared.length >= 2) {
            const names = declared.map((p) => p.name);
            for (const y of bare) {
              add(y.node, `${sig.name} has several outputs (${names.join(", ")}), so a bare "=>" is ambiguous; send to one by name, e.g. -> ${names[0]}`);
            }
          } else {
            const targetType = (declared.length === 1 ? declared[0].type : void 0) || sig.ret;
            const tw = types.width(targetType);
            for (const y of yields) {
              const limit = types.level(targetType);
              if (y.value && y.value.type === "number" && limit !== void 0) {
                const n = num(y.value);
                if (n !== void 0 && n > limit) {
                  add(y.value, `${n} does not fit in ${sig.name}'s output, a ${targetType} (max ${limit})`);
                }
              }
              const w = y.value ? sourceWidth(y.value) : void 0;
              if (tw !== void 0 && w !== void 0 && w !== tw) {
                add(y.node, `this yields ${w} pin${s(w)}, but ${sig.name} outputs a ${targetType} (${tw} pin${s(tw)})`);
              }
            }
          }
          for (const port of declared) {
            const val = values.get(port.name);
            const isDriven = val && val.driven || declared.length === 1 && yields.length > 0;
            if (!isDriven && port.idNode) {
              add(port.idNode, `output "${port.name}" is never driven; send a value to it with -> ${port.name}`, exports2.WARN);
            }
          }
        };
        const checkPattern = (pm) => {
          const subject = (0, tree_1.field)(pm, "subject");
          if (!subject) {
            return;
          }
          const whole = [];
          const bits = [];
          let bitsKnown = true;
          const choiceOpts = /* @__PURE__ */ new Map();
          const BUNDLE_TYPE = { 1: "bit", 2: "tuple", 4: "nibble", 8: "byte" };
          const addBundle = (n) => {
            whole.push(BUNDLE_TYPE[n] ?? false);
            for (let i2 = 0; i2 < n; i2++) {
              bits.push("bit");
            }
          };
          for (const item of (0, tree_1.kids)(subject, "data_item")) {
            const arr = (0, tree_1.first)(item, "component_array");
            const out2 = (0, tree_1.first)(item, "output_ref");
            if (arr || out2 && !portNodeOf(out2)) {
              const holder = arr ?? (out2 ? (0, tree_1.first)(out2, "component_array") : void 0);
              let n = 0;
              for (const ref of holder ? bracketIds(holder) : []) {
                n += refCount(ref);
              }
              addBundle(n);
            } else if (out2) {
              addBundle(sourceWidth(out2) ?? 1);
            } else if ((0, tree_1.first)(item, "operator_call")) {
              whole.push("strength");
              bits.push("bit");
            } else {
              const id = (0, tree_1.first)(item, "identifier");
              const val = id ? values.get(id.text) : void 0;
              let ty = val?.type ?? false;
              if (val && val.kind === "setting") {
                if (val.type === "choice" && val.setting) {
                  choiceOpts.set(whole.length, val.setting);
                }
                ty = val.type === "number" ? "setting_number" : "setting_" + val.type;
              } else if (val && val.enumDef) {
                choiceOpts.set(whole.length, val.enumDef);
                ty = "enum";
              }
              whole.push(ty);
              const w = ty ? types.width(ty) ?? (ty === "tuple" ? 2 : void 0) : void 0;
              if (w !== void 0) {
                for (let i2 = 0; i2 < w; i2++) {
                  bits.push("bit");
                }
              } else {
                bitsKnown = false;
              }
            }
          }
          const checkFit = (numNode, slot) => {
            const limit = maxFor(slot);
            if (!numNode || limit === void 0 || !slot) {
              return;
            }
            const text2 = numNode.text;
            const isBits = text2.length > 1 && /^[01]+$/.test(text2) && text2.length === types.width(slot);
            const n = /^\d+$/.test(text2) ? Number(text2) : void 0;
            if (!isBits && n !== void 0 && n > limit) {
              if (slot === "strength" || types.width(slot) === 1) {
                add(numNode, `${text2} does not fit in a ${slot} (max ${limit})`);
              } else {
                add(numNode, `${text2} does not fit in a ${slot} (max ${limit}, or ${types.width(slot)} binary digits)`);
              }
            }
          };
          const checkPatternValue = (pv, i2, slots) => {
            const slot = slots[i2];
            const choice = slots === whole ? choiceOpts.get(i2) : void 0;
            const numNode = (0, tree_1.first)(pv, "number") ?? (0, tree_1.first)(pv, "tuple_literal");
            const range = (0, tree_1.first)(pv, "pattern_range");
            const name2 = (0, tree_1.first)(pv, "identifier");
            if (choice) {
              if (numNode || range) {
                add(numNode ?? range, `"${choice.name}" is a choice; match it by name: ${choice.options.join(", ")}`);
              } else if (name2 && !choice.optionSet.has(name2.text)) {
                add(name2, `"${name2.text}" is not an option of ${choice.name}; its options are: ${choice.options.join(", ")}`);
              }
              return;
            }
            if (range) {
              const a = (0, tree_1.field)(range, "start");
              const b = (0, tree_1.field)(range, "end");
              checkFit(a, slot);
              checkFit(b, slot);
              const na = num(a);
              const nb = num(b);
              if (na !== void 0 && nb !== void 0 && nb < na) {
                add(range, `range ${na}..${nb} runs backwards; write ${nb}..${na}`);
              }
            } else {
              checkFit(numNode, slot);
            }
          };
          const elementType = (slot) => {
            if (!slot) {
              return void 0;
            }
            const m = /^\{(.*)\}$/s.exec(slot);
            return m ? m[1] : slot;
          };
          let catchAllLine;
          const seen = /* @__PURE__ */ new Map();
          for (const kase of (0, tree_1.kids)(pm, "pattern_case")) {
            const pvals = (0, tree_1.kids)(kase, "pattern_value");
            const line = kase.startPosition.row + 1;
            const texts = pvals.map((pv) => pv.text);
            const key = texts.join(",");
            if (catchAllLine !== void 0) {
              add(kase, `this arm can never match: arms are tried in order, and the arm on line ${catchAllLine} matches everything`, exports2.WARN);
            } else if (seen.has(key)) {
              add(kase, `this arm can never match: the arm on line ${seen.get(key)} has the same pattern and is tried first`, exports2.WARN);
            }
            if (!seen.has(key)) {
              seen.set(key, line);
            }
            const everything = pvals.length > 0 && texts.every((t) => t === "*" || t === "**");
            if (everything && catchAllLine === void 0) {
              catchAllLine = line;
            }
            let repeatNode;
            pvals.forEach((pv, i2) => {
              const r = (0, tree_1.first)(pv, "pattern_repeat");
              if (r && i2 < pvals.length - 1) {
                add(r, "only the last value of a pattern can repeat");
              } else if (r) {
                repeatNode = r;
              }
            });
            if (repeatNode) {
              const fixed = pvals.length - 1;
              const slots = whole.length > fixed ? whole : bitsKnown && bits.length > fixed ? bits : void 0;
              if (whole.length < fixed && !(bitsKnown && bits.length >= fixed)) {
                addSpan(pvals[0], pvals[pvals.length - 1], `pattern has ${fixed} value(s) before the repeat, but the subject has ${whole.length}`);
              } else if (slots) {
                for (let i2 = 0; i2 < fixed; i2++) {
                  checkPatternValue(pvals[i2], i2, slots);
                }
                const rv = (0, tree_1.field)(repeatNode, "value");
                if (rv && (rv.type === "number" || rv.type === "tuple_literal")) {
                  checkFit(rv, elementType(slots[fixed]));
                }
              }
            } else {
              let slots;
              if (pvals.length === whole.length) {
                slots = whole;
              } else if (bitsKnown && pvals.length === bits.length) {
                slots = bits;
              }
              if (pvals.length > 0 && !slots) {
                let expected = String(whole.length);
                if (bitsKnown && bits.length !== whole.length) {
                  expected = `${whole.length} (or ${bits.length} bitwise)`;
                }
                addSpan(pvals[0], pvals[pvals.length - 1], `pattern has ${pvals.length} value(s) but the subject has ${expected}`);
              } else if (slots) {
                pvals.forEach((pv, i2) => checkPatternValue(pv, i2, slots));
              }
            }
          }
        };
        const checkDuration = (node) => {
          if (!node) {
            return;
          }
          const text2 = node.text;
          if (node.type === "number") {
            add(node, `times need a unit: write ${text2}rt (redstone ticks) or ${text2}gt (game ticks); a redstone tick is 2 game ticks`);
          } else if (node.type === "time") {
            const gt = parseTime(text2);
            if (gt === void 0) {
              add(node, `"${text2}" is not a time; use gt (game ticks) or rt (redstone ticks)`);
            } else if (gt === 0) {
              add(node, "a delay of 0 is no delay; use -> or leave the block out", exports2.WARN);
            }
          } else if (node.type === "identifier") {
            const v = values.get(text2);
            if (!v || v.kind !== "setting" || v.type !== "time") {
              add(node, `"${text2}" is not a time setting of this component; give a time like 2gt, or declare SETTING ${text2}: 1rt..4rt`);
            }
          }
        };
        const EVENT_BLOCKS = /* @__PURE__ */ new Set(["event_block", "change_block", "after_block", "hear_block"]);
        const insideEvent = (node) => {
          let p = node.parent;
          while (p) {
            if (EVENT_BLOCKS.has(p.type)) {
              return true;
            }
            p = p.parent;
          }
          return false;
        };
        const carriesSignal = (n) => {
          if (n.type === "identifier") {
            const v = values.get(n.text);
            if (v) {
              return v.kind !== "setting";
            }
            return !!hearBlockFor(n, n.text);
          }
          if (n.type === "field_access") {
            return !isDeliveryAccess(n);
          }
          if (n.type === "operator_call") {
            return (0, tree_1.fields)(n, "arg").some(carriesSignal);
          }
          return false;
        };
        const isDeliveryAccess = (fa) => {
          const obj = (0, tree_1.field)(fa, "object");
          const fld = (0, tree_1.field)(fa, "field");
          if (!obj || !fld) {
            return false;
          }
          const ty = hearBlockFor(fa, obj.text) ? hearVarType(fa, obj.text) : values.get(obj.text)?.type;
          return fld.text in types.deliveryOf(ty);
        };
        const callIsWide = (call) => {
          const op = OPERATORS[(0, tree_1.field)(call, "name")?.text ?? ""];
          if (!op) {
            return false;
          }
          const args2 = (0, tree_1.fields)(call, "arg");
          if (op.wideUnlessSignal && args2.some(carriesSignal)) {
            return false;
          }
          if (args2.some((a) => a.type === "field_access" && isDeliveryAccess(a))) {
            return true;
          }
          if (args2.some((a) => a.type === "operator_call" && callIsWide(a))) {
            return true;
          }
          return op.wideUnlessSignal || !op.wide;
        };
        const checkOperator = (call) => {
          const nameNode = (0, tree_1.field)(call, "name");
          const name2 = nameNode?.text;
          const op = name2 ? OPERATORS[name2] : void 0;
          if (!op) {
            add(nameNode ?? call, `"${name2 ?? "?"}" is not an operator; the operators are: ${Object.keys(OPERATORS).sort().join(", ")}`);
            return;
          }
          mark(nameNode, "operator");
          const args2 = (0, tree_1.fields)(call, "arg");
          const wide = callIsWide(call);
          const capped = args2.find(carriesSignal);
          if (args2.length < op.min || op.max !== void 0 && args2.length > op.max) {
            const want = op.max === op.min ? String(op.min) : `at least ${op.min}`;
            const plural = !(op.min === 1 && op.max === 1);
            add(call, `${name2} takes ${want} value${plural ? "s" : ""} (${op.what}); this has ${args2.length}`);
          }
          args2.forEach((arg, i2) => {
            if (arg.type === "number") {
              const n = num(arg);
              if (n !== void 0 && n > 15 && !wide) {
                add(arg, capped && op.wideUnlessSignal ? `${n} is not a strength; "${capped.text}" travels on a pin, so this ${name2} stops at 15` : `${n} is not a strength; strengths go from 0 to 15`);
              } else if ((name2 === "mod" || name2 === "div") && i2 === 1 && n === 0) {
                add(arg, name2 === "mod" ? "mod by 0 has no remainder" : "dividing by 0 has no result");
              }
            } else if (arg.type === "identifier") {
              checkValue(arg, "operand");
              const v = values.get(arg.text);
              const w = v && v.kind !== "setting" ? types.width(v.type) : void 0;
              if (w !== void 0 && w > 1) {
                add(arg, `${name2} reads single pins as strengths, but "${arg.text}" is a ${v.type} (${w} pins)`);
              }
            }
          });
        };
        const checkStateWrite = (sw) => {
          const id = (0, tree_1.first)(sw, "identifier");
          if (!id) {
            return;
          }
          const name2 = id.text;
          const val = values.get(name2);
          if (!val || val.kind !== "state") {
            add(id, `"${name2}" is not a declared state variable`);
            return;
          }
          if (!insideEvent(sw)) {
            add(sw, "state is only written inside an event: WAIT(...), CHANGE(...), HEAR(...), or an AFTER(...) within one", exports2.WARN);
          }
          const parent = sw.parent;
          if (val.enumDef) {
            let written;
            if (parent && parent.type === "flow") {
              for (const child of parent.children) {
                if (child && (child.type === "flow_source" || child.type === "flow_destination")) {
                  written = (0, tree_1.first)(child);
                }
              }
            } else if (parent && parent.type === "pattern_case") {
              const result = (0, tree_1.first)(parent, "pattern_result");
              written = result ? (0, tree_1.first)(result) : void 0;
            }
            const opts = val.enumDef.options.join(", ");
            if (written && written.type === "number") {
              add(written, `${name2} holds one of ${opts}, not a number`);
            } else if (written && written.type === "identifier") {
              const wn = written.text;
              if (enumOptions.has(wn) && !val.enumDef.optionSet.has(wn)) {
                add(written, `"${wn}" is not one of ${name2}'s options: ${opts}`);
              }
            }
            return;
          }
          if (parent && parent.type === "pattern_case") {
            const result = (0, tree_1.first)(parent, "pattern_result");
            const n0 = result ? (0, tree_1.first)(result, "number") : void 0;
            const limit = maxFor(val.type);
            const n = num(n0);
            if (n0 && limit !== void 0 && n !== void 0 && n > limit) {
              add(n0, `${n} does not fit in ${name2} (${val.type}, max ${limit})`);
            }
          }
        };
        const checkStateDecl = (sd) => {
          const nameNode = (0, tree_1.field)(sd, "name");
          const allowed = (0, tree_1.field)(sd, "allowed");
          const dflt = (0, tree_1.field)(sd, "default");
          if (!nameNode || !allowed) {
            return;
          }
          const name2 = nameNode.text;
          const def = values.get(name2)?.enumDef;
          if (def) {
            const opts = def.options.join(", ");
            if (dflt && dflt.type === "identifier" && !def.optionSet.has(dflt.text)) {
              add(dflt, `"${dflt.text}" is not one of ${name2}'s options: ${opts}`);
            } else if (dflt && dflt.type !== "identifier") {
              add(dflt, `${name2} holds one of ${opts}, not ${dflt.type === "number" ? "a number" : "a time"}`);
            }
            return;
          }
          if (allowed.type === "time_range") {
            const a = parseTime((0, tree_1.field)(allowed, "start")?.text ?? "");
            const b = parseTime((0, tree_1.field)(allowed, "end")?.text ?? "");
            if (a !== void 0 && b !== void 0 && b < a) {
              add(allowed, `${allowed.text} runs backwards; write it smallest first`);
            }
            if (dflt && dflt.type !== "time" && dflt.type !== "identifier") {
              add(dflt, `"${name2}" holds a time; give one like 2gt or 1rt`);
            }
            return;
          }
          const lo = num((0, tree_1.field)(allowed, "start"));
          const hi = num((0, tree_1.field)(allowed, "end"));
          if (lo !== void 0 && hi !== void 0 && hi < lo) {
            add(allowed, `${allowed.text} runs backwards; write ${hi}..${lo}`);
            return;
          }
          const n = num(dflt);
          if (dflt && n === void 0 && dflt.type !== "identifier") {
            add(dflt, `"${name2}" holds a number from ${allowed.text}; give one`);
          } else if (n !== void 0 && (lo !== void 0 && n < lo || hi !== void 0 && n > hi)) {
            add(dflt, `${n} is outside ${name2}, which holds ${allowed.text}`);
          }
        };
        const hearVarType = (node, name2) => {
          const hb = hearBlockFor(node, name2);
          const source = hb ? (0, tree_1.field)(hb, "source") : void 0;
          return source ? values.get(source.text)?.type : void 0;
        };
        const checkHear = (hb) => {
          const source = (0, tree_1.field)(hb, "source");
          if (source) {
            checkValue(source, "hear");
            const v2 = values.get(source.text);
            if (v2 && types.kindOf(v2.type) === "level") {
              add(source, `HEAR reads arrivals, but "${source.text}" is a ${v2.type ?? "plain value"}, which persists; declare it on a medium that arrives, e.g. -> ${source.text}: strength{vibration}, or watch it with WAIT(${source.text})`);
            }
          }
          const v = (0, tree_1.field)(hb, "var");
          if (v) {
            if (values.has(v.text) || instances.has(v.text)) {
              add(v, `"${v.text}" is already a name in this component; pick another name for the arrival`, exports2.WARN);
            } else if (hearBlockFor(hb, v.text)) {
              add(v, `"${v.text}" is already the arrival of a HEAR around this one; give this one another name`, exports2.WARN);
            }
          }
        };
        const isFilter = (pm) => (0, tree_1.kids)(pm, "pattern_case").some((kase) => {
          const result = (0, tree_1.first)(kase, "pattern_result");
          const cs = result ? (0, tree_1.first)(result, "control_statement") : void 0;
          return !!cs && cs.text === "ACCEPT";
        });
        const actsBeforeFilter = (stmt) => {
          if (stmt.type !== "flow") {
            return "only wires that name a value for the filter can come before it";
          }
          for (const child of stmt.children) {
            if (!child) {
              continue;
            }
            const ct = child.type;
            if (ct === "state_write") {
              return "writing state before the filter would happen for arrivals it then drops";
            } else if (ct === "=>" || ct === "~>") {
              return "yielding before the filter would happen for arrivals it then drops";
            } else if (ct === "delay" || ct === "vibration_link") {
              return "nothing can wait before the filter: it runs the moment something arrives";
            } else if (ct === "flow_destination") {
              const id = (0, tree_1.first)(child);
              const v = id && id.type === "identifier" ? values.get(id.text) : void 0;
              if (!(v && v.kind === "wire")) {
                return "sending anywhere but a plain wire before the filter would happen for arrivals it then drops";
              }
            }
          }
          return void 0;
        };
        const checkFilter = (pm) => {
          const block = pm.parent;
          const hear = block?.parent;
          if (!(block && block.type === "block" && hear && hear.type === "hear_block")) {
            add(pm, "ACCEPT answers which arrivals a HEAR takes, so this pattern belongs at the top of a HEAR(...) body");
            return;
          }
          let seenFilter = false;
          for (const child of block.children) {
            if (!child || !child.isNamed || child.type === "comment") {
              continue;
            }
            if (child.id === pm.id) {
              seenFilter = true;
            } else if (child.type === "pattern_match" && isFilter(child)) {
              if (!seenFilter) {
                add(pm, "a HEAR body has one filter; combine the conditions into one pattern");
              }
            } else if (!seenFilter) {
              const why = actsBeforeFilter(child);
              if (why) {
                add(child, why + "; move this line below the filter");
              }
            }
          }
          for (const kase of (0, tree_1.kids)(pm, "pattern_case")) {
            const result = (0, tree_1.first)(kase, "pattern_result");
            const cs = result ? (0, tree_1.first)(result, "control_statement") : void 0;
            const word = cs?.text;
            if (word !== "ACCEPT" && word !== "NOP") {
              add(result ?? kase, "an arm of a filter says ACCEPT, since a sensor can only take an arrival or leave it; write NOP to ignore a case on purpose, and anything no arm matches is dropped");
            }
          }
        };
        const checkFieldAccess = (fa) => {
          const obj = (0, tree_1.field)(fa, "object");
          const fld = (0, tree_1.field)(fa, "field");
          if (!obj || !fld) {
            return;
          }
          const name2 = obj.text;
          let ty;
          if (hearBlockFor(fa, name2)) {
            ty = hearVarType(fa, name2);
          } else {
            const v = values.get(name2);
            if (!v) {
              add(obj, `"${name2}" is not declared here; fields like ${name2}.dist are read from what a HEAR catches, inside HEAR(${name2} IN ...)`, config.undeclaredSignalSeverity);
              return;
            }
            v.read = true;
            ty = v.type;
          }
          const flds = readableFields(types, ty);
          if (Object.keys(flds).length === 0) {
            add(fa, `"${name2}" is a ${ty ?? "plain value"}, which has no fields; it is the whole value, so write ${name2} on its own`);
            return;
          }
          if (!(fld.text in flds)) {
            add(fld, `a ${ty} has no field "${fld.text}"; what you can read is: ${fieldList(flds)}`);
          }
        };
        const targetRecordOf = (node) => {
          let p = node.parent;
          while (p && p.type !== "flow" && p.type !== "pattern_case") {
            p = p.parent;
          }
          if (!p) {
            return void 0;
          }
          let target;
          let last;
          for (const child of p.children) {
            if (!child) {
              continue;
            }
            const ct = child.type;
            if (ct === "flow_destination" || ct === "pattern_result" || ct === "flow_source") {
              last = (0, tree_1.first)(child);
            } else if (!child.isNamed && (ct === "=>" || ct === "~>")) {
              const declared = (scope.sig?.outPorts ?? []).filter((x) => !x.implicit);
              const named = last && last.type === "identifier" ? findPort(declared, last.text) : void 0;
              target = named?.type ?? (declared.length === 1 ? declared[0].type : scope.sig?.ret);
            }
          }
          if (target === void 0 && last && last.type === "identifier" && last.id !== node.id) {
            target = values.get(last.text)?.type;
          }
          if (target === void 0) {
            return void 0;
          }
          const payload = types.payloadOf(target);
          const def = payload !== void 0 ? types.defs.get(payload) ?? payload : void 0;
          const flds = types.recordFields(def);
          return flds ? { text: target, fields: flds } : void 0;
        };
        const checkNamedItem = (item) => {
          const nNode = (0, tree_1.field)(item, "name");
          const target = nNode ? targetRecordOf(item) : void 0;
          if (nNode && target && !target.fields.some((f) => f.name === nNode.text)) {
            add(nNode, `"${nNode.text}" is not a part of a ${target.text}; its parts are: ${target.fields.map((f) => f.name).join(", ")}`, exports2.WARN);
          }
          const vNode = (0, tree_1.field)(item, "value");
          if (vNode && vNode.type === "identifier") {
            checkValue(vNode, "flow");
          }
        };
        for (const n of scope.nodes) {
          (0, tree_1.walk)(n, (x) => {
            const t = x.type;
            if (t === "instance_declaration") {
              return false;
            }
            if (t === "flow" || t === "pattern_case") {
              trackFlow(x);
              let last;
              for (const child of x.children) {
                if (!child) {
                  continue;
                }
                const ct = child.type;
                if (ct === "flow_source" || ct === "flow_destination" || ct === "pattern_result") {
                  last = (0, tree_1.first)(child);
                } else if (!child.isNamed && (ct === "=>" || ct === "~>")) {
                  yields.push({ node: child, value: last, arrow: ct });
                }
              }
            }
            if (t === "each_block") {
              const v = (0, tree_1.field)(x, "var");
              const r = (0, tree_1.field)(x, "range");
              if (r) {
                const openR = openEnd(r);
                if (openR) {
                  add(openR, 'an EACH range needs both ends; with "*" the body would repeat forever');
                }
                const [a, b] = rangeNums(r);
                if (a !== void 0 && b !== void 0 && b < a) {
                  add(r, `range ${a}..${b} runs backwards; write ${b}..${a}`);
                }
              }
              if (v) {
                if (bindingsAt(x).has(v.text)) {
                  add(v, `"${v.text}" is already an EACH variable around this one; inner and outer indices need different names`, exports2.WARN);
                } else if (values.has(v.text) || instances.has(v.text)) {
                  add(v, `"${v.text}" is already a name in this component; pick another index name`, exports2.WARN);
                }
              }
            }
            if (t === "parameter_ref") {
              const pin = pinOf(x);
              const portNode = portNodeOf(x);
              for (const ref of refItems(x)) {
                checkComponent(ref, pin, "in", portNode);
              }
              return false;
            } else if (t === "output_ref") {
              const arr = (0, tree_1.first)(x, "component_array");
              if (arr) {
                const pin = pinOf(x);
                const portNode = portNodeOf(x);
                for (const id of bracketIds(arr)) {
                  checkComponent(id, pin, "out", portNode);
                }
              }
            } else if (t === "component_array") {
              for (const id of bracketIds(x)) {
                if (!handled.has(id.id)) {
                  checkComponent(id, void 0, void 0);
                }
              }
            } else if (t === "timing_ref") {
              const id = (0, tree_1.first)(x, "identifier");
              if (id) {
                checkComponent(id, void 0, void 0);
              }
            } else if (t === "flow_source" || t === "pattern_result") {
              const id = (0, tree_1.first)(x, "identifier");
              if (id) {
                checkValue(id, "flow");
              }
            } else if (t === "data_item") {
              const id = (0, tree_1.first)(x, "identifier");
              if (id && !(0, tree_1.hasAncestor)(x, "flow_destination") && !(0, tree_1.hasAncestor)(x, "state_declaration")) {
                const holder = x.parent?.parent;
                const inSubject = !!holder && holder.type === "pattern_match";
                checkValue(id, inSubject ? "subject" : "flow");
              }
            } else if (t === "event_block" || t === "change_block") {
              const trig = (0, tree_1.field)(x, "trigger");
              if (trig) {
                checkValue(trig, "trigger");
              }
            } else if (t === "hear_block") {
              checkHear(x);
            } else if (t === "vibration_link") {
              checkAirLink(x);
            } else if (t === "field_access") {
              checkFieldAccess(x);
              return false;
            } else if (t === "named_item") {
              checkNamedItem(x);
            } else if (t === "after_block") {
              checkDuration((0, tree_1.field)(x, "delay"));
              if (!insideEvent(x)) {
                add(x, "AFTER counts from an event; put it inside WAIT(...), CHANGE(...), or HEAR(...)");
              }
            } else if (t === "sequence_block") {
              checkDuration((0, tree_1.field)(x, "delay"));
            } else if (t === "delay") {
              checkDuration((0, tree_1.field)(x, "time"));
            } else if (t === "operator_call") {
              checkOperator(x);
            } else if (t === "setting_declaration") {
              return false;
            } else if (t === "control_statement") {
              const id = (0, tree_1.first)(x, "identifier");
              if (id) {
                checkValue(id, "flow");
              }
              if (x.text === "ACCEPT") {
                const kase = x.parent?.parent;
                if (!(kase && kase.type === "pattern_case")) {
                  add(x, "ACCEPT answers an arm of the filter at the top of a HEAR(...) body; on its own it says nothing");
                }
              }
            } else if (t === "pattern_match") {
              if (isFilter(x)) {
                checkFilter(x);
              }
              checkPattern(x);
            } else if (t === "state_write") {
              checkStateWrite(x);
            } else if (t === "state_declaration") {
              checkStateDecl(x);
            }
            return void 0;
          });
        }
        reportWiredOr();
        checkOutputs();
        reportVariadicCounts();
        reportRequiredInputs();
        for (const [name2, inst] of instances) {
          if (!inst.used) {
            add(inst.node, `"${name2}" is declared but never wired`, exports2.WARN);
          }
        }
        for (const [name2, v] of values) {
          if (v.kind === "wire" && !v.read && v.defNode) {
            add(v.defNode, `nothing reads "${name2}"; it is written here and goes nowhere, which is usually a name spelled two ways`, config.unreadWireSeverity);
          }
        }
      }
      (0, tree_1.walk)(root, (n) => {
        if (n.type === "type_arguments") {
          for (const r of (0, tree_1.kids)(n, "range")) {
            const open = openEnd(r);
            if (open) {
              add(open, "a type needs a definite number of pins, so this range needs both ends");
            }
          }
          for (const t of (0, tree_1.kids)(n, "type")) {
            add(t, `the braces after a type name take a lane count like {0..3} or a medium (${types_1.MEDIUM_NAMES.join(", ")}); "${(0, types_1.norm)(t.text)}" is neither`);
          }
        } else if (n.type === "vibration_link") {
          const open = openEnd((0, tree_1.field)(n, "distance"));
          if (open) {
            add(open, "a vibration needs a distance with both ends, since how long it takes to arrive depends on it");
          }
        }
      });
      if (errorRows.size > 0) {
        const maybeDeclared = /* @__PURE__ */ new Set();
        for (const row of errorRows) {
          for (const word of (lines[row] ?? "").match(/[A-Za-z_&][A-Za-z0-9_&]*/g) ?? []) {
            maybeDeclared.add(word);
          }
        }
        diags = diags.filter((d) => {
          const u = d.unknown;
          return !(errorRows.has(d.range.start.line) || u && (maybeDeclared.has(u[0]) || maybeDeclared.has(u[1])));
        });
      }
      diags.push(...syntaxDiags);
      const comps = scopes;
      for (let i2 = 0; i2 < comps.length; i2++) {
        const sc = comps[i2];
        const startLine = sc.decl ? sc.decl.startPosition.row : 0;
        const next = comps[i2 + 1];
        const endLine = next && next.decl ? next.decl.startPosition.row - 1 : lines.length - 1;
        scopesOut.push({ sig: sc.sig, startLine, endLine, values: sc.values, instances: sc.instances });
      }
      return { tree, diagnostics: diags, marks, known, types, scopes: scopesOut, imports, root, lines };
    }
  }
});

// build/workspace.js
var require_workspace = __commonJS2({
  "build/workspace.js"(exports2) {
    "use strict";
    var __createBinding2 = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault2 = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar2 = exports2 && exports2.__importStar || /* @__PURE__ */ (function() {
      var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i2 = 0; i2 < k.length; i2++) if (k[i2] !== "default") __createBinding2(result, mod, k[i2]);
        }
        __setModuleDefault2(result, mod);
        return result;
      };
    })();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FileWorkspace = exports2.EXTENSIONS = void 0;
    var fs2 = __importStar2(require("fs"));
    var path2 = __importStar2(require("path"));
    var analyze_12 = require_analyze();
    exports2.EXTENSIONS = ["tkr", "tikker"];
    var FileWorkspace = class {
      extensions;
      /** path -> text of documents open in the editor */
      open = /* @__PURE__ */ new Map();
      cache = /* @__PURE__ */ new Map();
      constructor(extensions = exports2.EXTENSIONS) {
        this.extensions = extensions;
      }
      findModule(modpath, fromPath) {
        if (!fromPath) {
          return void 0;
        }
        const dir = path2.dirname(fromPath);
        const bases = [dir];
        const root = gitRoot(dir);
        if (root && root !== dir) {
          bases.push(root);
        }
        for (const base of bases) {
          for (const ext of this.extensions) {
            const p = path2.join(base, `${modpath}.${ext}`);
            if (this.open.has(p) || fs2.existsSync(p)) {
              return p;
            }
          }
        }
        return void 0;
      }
      declsIn(p) {
        let text;
        let key;
        const openText = this.open.get(p);
        if (openText !== void 0) {
          text = openText;
          key = "open:" + hash(openText);
        } else {
          let st;
          try {
            st = fs2.statSync(p);
          } catch {
            return void 0;
          }
          key = `disk:${st.mtimeMs}:${st.size}`;
        }
        const cached = this.cache.get(p);
        if (cached && cached.key === key) {
          return cached.decls;
        }
        if (text === void 0) {
          try {
            text = fs2.readFileSync(p, "utf8");
          } catch {
            return void 0;
          }
        }
        const decls = (0, analyze_12.readDecls)(text, p);
        this.cache.set(p, { key, decls });
        return decls;
      }
      /** The text of a file, open or on disk. */
      textOf(p) {
        const t = this.open.get(p);
        if (t !== void 0) {
          return t;
        }
        try {
          return fs2.readFileSync(p, "utf8");
        } catch {
          return void 0;
        }
      }
    };
    exports2.FileWorkspace = FileWorkspace;
    function gitRoot(dir) {
      let d = dir;
      for (; ; ) {
        if (fs2.existsSync(path2.join(d, ".git"))) {
          return d;
        }
        const up = path2.dirname(d);
        if (up === d) {
          return void 0;
        }
        d = up;
      }
    }
    function hash(s) {
      let h = 5381;
      for (let i2 = 0; i2 < s.length; i2++) {
        h = (h << 5) + h + s.charCodeAt(i2) | 0;
      }
      return `${s.length}:${h}`;
    }
  }
});

// build/cli.js
var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
  if (k2 === void 0) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = { enumerable: true, get: function() {
      return m[k];
    } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === void 0) k2 = k;
  o[k2] = m[k];
}));
var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
});
var __importStar = exports && exports.__importStar || /* @__PURE__ */ (function() {
  var ownKeys = function(o) {
    ownKeys = Object.getOwnPropertyNames || function(o2) {
      var ar = [];
      for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
      return ar;
    };
    return ownKeys(o);
  };
  return function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
      for (var k = ownKeys(mod), i2 = 0; i2 < k.length; i2++) if (k[i2] !== "default") __createBinding(result, mod, k[i2]);
    }
    __setModuleDefault(result, mod);
    return result;
  };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var path = __importStar(require("path"));
var analyze_1 = require_analyze();
var parser_1 = require_parser();
var workspace_1 = require_workspace();
async function main() {
  const args2 = process.argv.slice(2);
  const timing = args2.includes("--timing");
  const files = args2.filter((a) => !a.startsWith("--"));
  if (files.length === 0) {
    console.error("usage: tikker-check [--timing] FILE.tkr...");
    process.exit(2);
  }
  await (0, parser_1.initParser)();
  const ws = new workspace_1.FileWorkspace();
  let errors = 0;
  for (const f of files) {
    const p = path.resolve(f);
    const text = ws.textOf(p);
    if (text === void 0) {
      console.error(`${f}: cannot read`);
      errors++;
      continue;
    }
    const model = (0, analyze_1.analyze)(text, p, ws);
    if (timing) {
      for (const scope of model.scopes) {
        const sig = scope.sig;
        if (!sig) {
          continue;
        }
        const paths = sig.timing ?? [];
        console.log(`${sig.name}:${paths.length === 0 ? " no timed path from an event to an output" : ""}`);
        const rows = paths.map((t) => [`${t.from} -> ${t.to}`, (0, analyze_1.showDelays)(t.delays)]);
        const w = rows.length > 0 ? Math.max(...rows.map((r) => r[0].length)) : 0;
        for (const r of rows) {
          console.log(`  ${r[0].padEnd(w)}   ${r[1]}`);
        }
      }
      continue;
    }
    const ds = [...model.diagnostics].sort((a, b) => a.range.start.line - b.range.start.line || a.range.start.character - b.range.start.character);
    for (const d of ds) {
      const sev = d.severity === analyze_1.ERROR ? "ERROR" : "WARN";
      if (d.severity === analyze_1.ERROR) {
        errors++;
      }
      console.log(`${f}:${d.range.start.line + 1}:${d.range.start.character + 1} [${sev}] ${d.message}`);
    }
  }
  process.exit(errors > 0 ? 1 : 0);
}
main().catch((e) => {
  console.error(e);
  process.exit(2);
});
