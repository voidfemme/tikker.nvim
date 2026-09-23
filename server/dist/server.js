#!/usr/bin/env node
"use strict";
var __create2 = Object.create;
var __defProp2 = Object.defineProperty;
var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
var __getOwnPropNames2 = Object.getOwnPropertyNames;
var __getProtoOf2 = Object.getPrototypeOf;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames2(fn)[0]])(fn = 0)), res;
};
var __commonJS2 = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames2(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export2 = (target, all) => {
  for (var name2 in all)
    __defProp2(target, name2, { get: all[name2], enumerable: true });
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
var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);

// node_modules/vscode-languageserver/lib/common/utils/is.js
var require_is = __commonJS2({
  "node_modules/vscode-languageserver/lib/common/utils/is.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.boolean = boolean;
    exports2.string = string;
    exports2.number = number;
    exports2.error = error;
    exports2.func = func2;
    exports2.array = array;
    exports2.stringArray = stringArray;
    exports2.typedArray = typedArray;
    exports2.thenable = thenable;
    function boolean(value) {
      return value === true || value === false;
    }
    function string(value) {
      return typeof value === "string" || value instanceof String;
    }
    function number(value) {
      return typeof value === "number" || value instanceof Number;
    }
    function error(value) {
      return value instanceof Error;
    }
    function func2(value) {
      return typeof value === "function";
    }
    function array(value) {
      return Array.isArray(value);
    }
    function stringArray(value) {
      return array(value) && value.every((elem) => string(elem));
    }
    function typedArray(value, check) {
      return Array.isArray(value) && value.every(check);
    }
    function thenable(value) {
      return value && func2(value.then);
    }
  }
});

// node_modules/vscode-jsonrpc/lib/common/is.js
var require_is2 = __commonJS2({
  "node_modules/vscode-jsonrpc/lib/common/is.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.boolean = boolean;
    exports2.string = string;
    exports2.number = number;
    exports2.error = error;
    exports2.func = func2;
    exports2.array = array;
    exports2.stringArray = stringArray;
    function boolean(value) {
      return value === true || value === false;
    }
    function string(value) {
      return typeof value === "string" || value instanceof String;
    }
    function number(value) {
      return typeof value === "number" || value instanceof Number;
    }
    function error(value) {
      return value instanceof Error;
    }
    function func2(value) {
      return typeof value === "function";
    }
    function array(value) {
      return Array.isArray(value);
    }
    function stringArray(value) {
      return array(value) && value.every((elem) => string(elem));
    }
  }
});

// node_modules/vscode-jsonrpc/lib/common/messages.js
var require_messages = __commonJS2({
  "node_modules/vscode-jsonrpc/lib/common/messages.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
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
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || /* @__PURE__ */ (function() {
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
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Message = exports2.NotificationType9 = exports2.NotificationType8 = exports2.NotificationType7 = exports2.NotificationType6 = exports2.NotificationType5 = exports2.NotificationType4 = exports2.NotificationType3 = exports2.NotificationType2 = exports2.NotificationType1 = exports2.NotificationType0 = exports2.NotificationType = exports2.RequestType9 = exports2.RequestType8 = exports2.RequestType7 = exports2.RequestType6 = exports2.RequestType5 = exports2.RequestType4 = exports2.RequestType3 = exports2.RequestType2 = exports2.RequestType1 = exports2.RequestType = exports2.RequestType0 = exports2.AbstractMessageSignature = exports2.ParameterStructures = exports2.ResponseError = exports2.ErrorCodes = void 0;
    var is = __importStar(require_is2());
    var ErrorCodes;
    (function(ErrorCodes2) {
      ErrorCodes2.ParseError = -32700;
      ErrorCodes2.InvalidRequest = -32600;
      ErrorCodes2.MethodNotFound = -32601;
      ErrorCodes2.InvalidParams = -32602;
      ErrorCodes2.InternalError = -32603;
      ErrorCodes2.jsonrpcReservedErrorRangeStart = -32099;
      ErrorCodes2.serverErrorStart = -32099;
      ErrorCodes2.MessageWriteError = -32099;
      ErrorCodes2.MessageReadError = -32098;
      ErrorCodes2.PendingResponseRejected = -32097;
      ErrorCodes2.ConnectionInactive = -32096;
      ErrorCodes2.ServerNotInitialized = -32002;
      ErrorCodes2.UnknownErrorCode = -32001;
      ErrorCodes2.jsonrpcReservedErrorRangeEnd = -32e3;
      ErrorCodes2.serverErrorEnd = -32e3;
    })(ErrorCodes || (exports2.ErrorCodes = ErrorCodes = {}));
    var ResponseError = class _ResponseError extends Error {
      code;
      data;
      constructor(code, message, data) {
        super(message);
        this.code = is.number(code) ? code : ErrorCodes.UnknownErrorCode;
        this.data = data;
        Object.setPrototypeOf(this, _ResponseError.prototype);
      }
      toJson() {
        const result = {
          code: this.code,
          message: this.message
        };
        if (this.data !== void 0) {
          result.data = this.data;
        }
        return result;
      }
    };
    exports2.ResponseError = ResponseError;
    var ParameterStructures = class _ParameterStructures {
      kind;
      /**
       * The parameter structure is automatically inferred on the number of parameters
       * and the parameter type in case of a single param.
       */
      static auto = new _ParameterStructures("auto");
      /**
       * Forces `byPosition` parameter structure. This is useful if you have a single
       * parameter which has a literal type.
       */
      static byPosition = new _ParameterStructures("byPosition");
      /**
       * Forces `byName` parameter structure. This is only useful when having a single
       * parameter. The library will report errors if used with a different number of
       * parameters.
       */
      static byName = new _ParameterStructures("byName");
      constructor(kind) {
        this.kind = kind;
      }
      static is(value) {
        return value === _ParameterStructures.auto || value === _ParameterStructures.byName || value === _ParameterStructures.byPosition;
      }
      toString() {
        return this.kind;
      }
    };
    exports2.ParameterStructures = ParameterStructures;
    var AbstractMessageSignature = class {
      method;
      numberOfParams;
      constructor(method, numberOfParams) {
        this.method = method;
        this.numberOfParams = numberOfParams;
      }
      get parameterStructures() {
        return ParameterStructures.auto;
      }
    };
    exports2.AbstractMessageSignature = AbstractMessageSignature;
    var RequestType0 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 0);
      }
    };
    exports2.RequestType0 = RequestType0;
    var RequestType = class extends AbstractMessageSignature {
      _parameterStructures;
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method, _parameterStructures = ParameterStructures.auto) {
        super(method, 1);
        this._parameterStructures = _parameterStructures;
      }
      get parameterStructures() {
        return this._parameterStructures;
      }
    };
    exports2.RequestType = RequestType;
    var RequestType1 = class extends AbstractMessageSignature {
      _parameterStructures;
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method, _parameterStructures = ParameterStructures.auto) {
        super(method, 1);
        this._parameterStructures = _parameterStructures;
      }
      get parameterStructures() {
        return this._parameterStructures;
      }
    };
    exports2.RequestType1 = RequestType1;
    var RequestType2 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 2);
      }
    };
    exports2.RequestType2 = RequestType2;
    var RequestType3 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 3);
      }
    };
    exports2.RequestType3 = RequestType3;
    var RequestType4 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 4);
      }
    };
    exports2.RequestType4 = RequestType4;
    var RequestType5 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 5);
      }
    };
    exports2.RequestType5 = RequestType5;
    var RequestType6 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 6);
      }
    };
    exports2.RequestType6 = RequestType6;
    var RequestType7 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 7);
      }
    };
    exports2.RequestType7 = RequestType7;
    var RequestType8 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 8);
      }
    };
    exports2.RequestType8 = RequestType8;
    var RequestType9 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 9);
      }
    };
    exports2.RequestType9 = RequestType9;
    var NotificationType = class extends AbstractMessageSignature {
      _parameterStructures;
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method, _parameterStructures = ParameterStructures.auto) {
        super(method, 1);
        this._parameterStructures = _parameterStructures;
      }
      get parameterStructures() {
        return this._parameterStructures;
      }
    };
    exports2.NotificationType = NotificationType;
    var NotificationType0 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 0);
      }
    };
    exports2.NotificationType0 = NotificationType0;
    var NotificationType1 = class extends AbstractMessageSignature {
      _parameterStructures;
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method, _parameterStructures = ParameterStructures.auto) {
        super(method, 1);
        this._parameterStructures = _parameterStructures;
      }
      get parameterStructures() {
        return this._parameterStructures;
      }
    };
    exports2.NotificationType1 = NotificationType1;
    var NotificationType2 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 2);
      }
    };
    exports2.NotificationType2 = NotificationType2;
    var NotificationType3 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 3);
      }
    };
    exports2.NotificationType3 = NotificationType3;
    var NotificationType4 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 4);
      }
    };
    exports2.NotificationType4 = NotificationType4;
    var NotificationType5 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 5);
      }
    };
    exports2.NotificationType5 = NotificationType5;
    var NotificationType6 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 6);
      }
    };
    exports2.NotificationType6 = NotificationType6;
    var NotificationType7 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 7);
      }
    };
    exports2.NotificationType7 = NotificationType7;
    var NotificationType8 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 8);
      }
    };
    exports2.NotificationType8 = NotificationType8;
    var NotificationType9 = class extends AbstractMessageSignature {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      _;
      constructor(method) {
        super(method, 9);
      }
    };
    exports2.NotificationType9 = NotificationType9;
    var Message;
    (function(Message2) {
      function isRequest(message) {
        const candidate = message;
        return candidate && is.string(candidate.method) && (is.string(candidate.id) || is.number(candidate.id));
      }
      Message2.isRequest = isRequest;
      function isNotification(message) {
        const candidate = message;
        return candidate && is.string(candidate.method) && message.id === void 0;
      }
      Message2.isNotification = isNotification;
      function isResponse(message) {
        const candidate = message;
        return candidate && (candidate.result !== void 0 || !!candidate.error) && (is.string(candidate.id) || is.number(candidate.id) || candidate.id === null);
      }
      Message2.isResponse = isResponse;
    })(Message || (exports2.Message = Message = {}));
  }
});

// node_modules/vscode-jsonrpc/lib/common/linkedMap.js
var require_linkedMap = __commonJS2({
  "node_modules/vscode-jsonrpc/lib/common/linkedMap.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.LRUCache = exports2.LinkedMap = exports2.Touch = void 0;
    var Touch;
    (function(Touch2) {
      Touch2.None = 0;
      Touch2.First = 1;
      Touch2.AsOld = Touch2.First;
      Touch2.Last = 2;
      Touch2.AsNew = Touch2.Last;
    })(Touch || (exports2.Touch = Touch = {}));
    var LinkedMap = class {
      [Symbol.toStringTag] = "LinkedMap";
      _map;
      _head;
      _tail;
      _size;
      _state;
      constructor() {
        this._map = /* @__PURE__ */ new Map();
        this._head = void 0;
        this._tail = void 0;
        this._size = 0;
        this._state = 0;
      }
      clear() {
        this._map.clear();
        this._head = void 0;
        this._tail = void 0;
        this._size = 0;
        this._state++;
      }
      isEmpty() {
        return !this._head && !this._tail;
      }
      get size() {
        return this._size;
      }
      get first() {
        return this._head?.value;
      }
      get last() {
        return this._tail?.value;
      }
      before(key) {
        const item = this._map.get(key);
        return item ? item.previous?.value : void 0;
      }
      after(key) {
        const item = this._map.get(key);
        return item ? item.next?.value : void 0;
      }
      has(key) {
        return this._map.has(key);
      }
      get(key, touch = Touch.None) {
        const item = this._map.get(key);
        if (!item) {
          return void 0;
        }
        if (touch !== Touch.None) {
          this.touch(item, touch);
        }
        return item.value;
      }
      set(key, value, touch = Touch.None) {
        let item = this._map.get(key);
        if (item) {
          item.value = value;
          if (touch !== Touch.None) {
            this.touch(item, touch);
          }
        } else {
          item = { key, value, next: void 0, previous: void 0 };
          switch (touch) {
            case Touch.None:
              this.addItemLast(item);
              break;
            case Touch.First:
              this.addItemFirst(item);
              break;
            case Touch.Last:
              this.addItemLast(item);
              break;
            default:
              this.addItemLast(item);
              break;
          }
          this._map.set(key, item);
          this._size++;
        }
        return this;
      }
      delete(key) {
        return !!this.remove(key);
      }
      remove(key) {
        const item = this._map.get(key);
        if (!item) {
          return void 0;
        }
        this._map.delete(key);
        this.removeItem(item);
        this._size--;
        return item.value;
      }
      shift() {
        if (!this._head && !this._tail) {
          return void 0;
        }
        if (!this._head || !this._tail) {
          throw new Error("Invalid list");
        }
        const item = this._head;
        this._map.delete(item.key);
        this.removeItem(item);
        this._size--;
        return item.value;
      }
      forEach(callbackfn, thisArg) {
        const state = this._state;
        let current = this._head;
        while (current) {
          if (thisArg) {
            callbackfn.bind(thisArg)(current.value, current.key, this);
          } else {
            callbackfn(current.value, current.key, this);
          }
          if (this._state !== state) {
            throw new Error(`LinkedMap got modified during iteration.`);
          }
          current = current.next;
        }
      }
      keys() {
        const state = this._state;
        let current = this._head;
        const iterator = {
          [Symbol.iterator]: () => {
            return iterator;
          },
          next: () => {
            if (this._state !== state) {
              throw new Error(`LinkedMap got modified during iteration.`);
            }
            if (current) {
              const result = { value: current.key, done: false };
              current = current.next;
              return result;
            } else {
              return { value: void 0, done: true };
            }
          }
        };
        return iterator;
      }
      values() {
        const state = this._state;
        let current = this._head;
        const iterator = {
          [Symbol.iterator]: () => {
            return iterator;
          },
          next: () => {
            if (this._state !== state) {
              throw new Error(`LinkedMap got modified during iteration.`);
            }
            if (current) {
              const result = { value: current.value, done: false };
              current = current.next;
              return result;
            } else {
              return { value: void 0, done: true };
            }
          }
        };
        return iterator;
      }
      entries() {
        const state = this._state;
        let current = this._head;
        const iterator = {
          [Symbol.iterator]: () => {
            return iterator;
          },
          next: () => {
            if (this._state !== state) {
              throw new Error(`LinkedMap got modified during iteration.`);
            }
            if (current) {
              const result = { value: [current.key, current.value], done: false };
              current = current.next;
              return result;
            } else {
              return { value: void 0, done: true };
            }
          }
        };
        return iterator;
      }
      [Symbol.iterator]() {
        return this.entries();
      }
      trimOld(newSize) {
        if (newSize >= this.size) {
          return;
        }
        if (newSize === 0) {
          this.clear();
          return;
        }
        let current = this._head;
        let currentSize = this.size;
        while (current && currentSize > newSize) {
          this._map.delete(current.key);
          current = current.next;
          currentSize--;
        }
        this._head = current;
        this._size = currentSize;
        if (current) {
          current.previous = void 0;
        }
        this._state++;
      }
      addItemFirst(item) {
        if (!this._head && !this._tail) {
          this._tail = item;
        } else if (!this._head) {
          throw new Error("Invalid list");
        } else {
          item.next = this._head;
          this._head.previous = item;
        }
        this._head = item;
        this._state++;
      }
      addItemLast(item) {
        if (!this._head && !this._tail) {
          this._head = item;
        } else if (!this._tail) {
          throw new Error("Invalid list");
        } else {
          item.previous = this._tail;
          this._tail.next = item;
        }
        this._tail = item;
        this._state++;
      }
      removeItem(item) {
        if (item === this._head && item === this._tail) {
          this._head = void 0;
          this._tail = void 0;
        } else if (item === this._head) {
          if (!item.next) {
            throw new Error("Invalid list");
          }
          item.next.previous = void 0;
          this._head = item.next;
        } else if (item === this._tail) {
          if (!item.previous) {
            throw new Error("Invalid list");
          }
          item.previous.next = void 0;
          this._tail = item.previous;
        } else {
          const next = item.next;
          const previous = item.previous;
          if (!next || !previous) {
            throw new Error("Invalid list");
          }
          next.previous = previous;
          previous.next = next;
        }
        item.next = void 0;
        item.previous = void 0;
        this._state++;
      }
      touch(item, touch) {
        if (!this._head || !this._tail) {
          throw new Error("Invalid list");
        }
        if (touch !== Touch.First && touch !== Touch.Last) {
          return;
        }
        if (touch === Touch.First) {
          if (item === this._head) {
            return;
          }
          const next = item.next;
          const previous = item.previous;
          if (item === this._tail) {
            previous.next = void 0;
            this._tail = previous;
          } else {
            next.previous = previous;
            previous.next = next;
          }
          item.previous = void 0;
          item.next = this._head;
          this._head.previous = item;
          this._head = item;
          this._state++;
        } else if (touch === Touch.Last) {
          if (item === this._tail) {
            return;
          }
          const next = item.next;
          const previous = item.previous;
          if (item === this._head) {
            next.previous = void 0;
            this._head = next;
          } else {
            next.previous = previous;
            previous.next = next;
          }
          item.next = void 0;
          item.previous = this._tail;
          this._tail.next = item;
          this._tail = item;
          this._state++;
        }
      }
      toJSON() {
        const data = [];
        this.forEach((value, key) => {
          data.push([key, value]);
        });
        return data;
      }
      fromJSON(data) {
        this.clear();
        for (const [key, value] of data) {
          this.set(key, value);
        }
      }
    };
    exports2.LinkedMap = LinkedMap;
    var LRUCache = class extends LinkedMap {
      _limit;
      _ratio;
      constructor(limit, ratio = 1) {
        super();
        this._limit = limit;
        this._ratio = Math.min(Math.max(0, ratio), 1);
      }
      get limit() {
        return this._limit;
      }
      set limit(limit) {
        this._limit = limit;
        this.checkTrim();
      }
      get ratio() {
        return this._ratio;
      }
      set ratio(ratio) {
        this._ratio = Math.min(Math.max(0, ratio), 1);
        this.checkTrim();
      }
      get(key, touch = Touch.AsNew) {
        return super.get(key, touch);
      }
      peek(key) {
        return super.get(key, Touch.None);
      }
      set(key, value) {
        super.set(key, value, Touch.Last);
        this.checkTrim();
        return this;
      }
      checkTrim() {
        if (this.size > this._limit) {
          this.trimOld(Math.round(this._limit * this._ratio));
        }
      }
    };
    exports2.LRUCache = LRUCache;
  }
});

// node_modules/vscode-jsonrpc/lib/common/disposable.js
var require_disposable = __commonJS2({
  "node_modules/vscode-jsonrpc/lib/common/disposable.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Disposable = void 0;
    var Disposable;
    (function(Disposable2) {
      function create(func2) {
        return {
          dispose: func2
        };
      }
      Disposable2.create = create;
    })(Disposable || (exports2.Disposable = Disposable = {}));
  }
});

// node_modules/vscode-jsonrpc/lib/common/ral.js
var require_ral = __commonJS2({
  "node_modules/vscode-jsonrpc/lib/common/ral.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var _ral;
    function RAL() {
      if (_ral === void 0) {
        throw new Error(`No runtime abstraction layer installed`);
      }
      return _ral;
    }
    (function(RAL2) {
      function install(ral) {
        if (ral === void 0) {
          throw new Error(`No runtime abstraction layer provided`);
        }
        _ral = ral;
      }
      RAL2.install = install;
    })(RAL || (RAL = {}));
    exports2.default = RAL;
  }
});

// node_modules/vscode-jsonrpc/lib/common/events.js
var require_events = __commonJS2({
  "node_modules/vscode-jsonrpc/lib/common/events.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Emitter = exports2.Event = void 0;
    var ral_1 = __importDefault(require_ral());
    var Event;
    (function(Event2) {
      const _disposable = { dispose() {
      } };
      Event2.None = function() {
        return _disposable;
      };
    })(Event || (exports2.Event = Event = {}));
    var CallbackList = class {
      _callbacks;
      _contexts;
      add(callback, context = null, bucket) {
        if (!this._callbacks) {
          this._callbacks = [];
          this._contexts = [];
        }
        this._callbacks.push(callback);
        this._contexts.push(context);
        if (Array.isArray(bucket)) {
          bucket.push({ dispose: () => this.remove(callback, context) });
        }
      }
      remove(callback, context = null) {
        if (!this._callbacks) {
          return;
        }
        let foundCallbackWithDifferentContext = false;
        for (let i2 = 0, len = this._callbacks.length; i2 < len; i2++) {
          if (this._callbacks[i2] === callback) {
            if (this._contexts[i2] === context) {
              this._callbacks.splice(i2, 1);
              this._contexts.splice(i2, 1);
              return;
            } else {
              foundCallbackWithDifferentContext = true;
            }
          }
        }
        if (foundCallbackWithDifferentContext) {
          throw new Error("When adding a listener with a context, you should remove it with the same context");
        }
      }
      invoke(...args2) {
        if (!this._callbacks) {
          return [];
        }
        const ret = [], callbacks = this._callbacks.slice(0), contexts = this._contexts.slice(0);
        for (let i2 = 0, len = callbacks.length; i2 < len; i2++) {
          try {
            ret.push(callbacks[i2].apply(contexts[i2], args2));
          } catch (e) {
            (0, ral_1.default)().console.error(e);
          }
        }
        return ret;
      }
      isEmpty() {
        return !this._callbacks || this._callbacks.length === 0;
      }
      dispose() {
        this._callbacks = void 0;
        this._contexts = void 0;
      }
    };
    var Emitter = class _Emitter {
      _options;
      static _noop = function() {
      };
      _event;
      _callbacks;
      constructor(_options) {
        this._options = _options;
      }
      /**
       * For the public to allow to subscribe
       * to events from this Emitter
       */
      get event() {
        if (!this._event) {
          this._event = (listener, thisArgs, disposables) => {
            if (!this._callbacks) {
              this._callbacks = new CallbackList();
            }
            if (this._options && this._options.onFirstListenerAdd && this._callbacks.isEmpty()) {
              this._options.onFirstListenerAdd(this);
            }
            this._callbacks.add(listener, thisArgs);
            const result = {
              dispose: () => {
                if (!this._callbacks) {
                  return;
                }
                this._callbacks.remove(listener, thisArgs);
                result.dispose = _Emitter._noop;
                if (this._options && this._options.onLastListenerRemove && this._callbacks.isEmpty()) {
                  this._options.onLastListenerRemove(this);
                }
              }
            };
            if (Array.isArray(disposables)) {
              disposables.push(result);
            }
            return result;
          };
        }
        return this._event;
      }
      /**
       * To be kept private to fire an event to
       * subscribers
       */
      fire(event) {
        if (this._callbacks) {
          this._callbacks.invoke.call(this._callbacks, event);
        }
      }
      dispose() {
        if (this._callbacks) {
          this._callbacks.dispose();
          this._callbacks = void 0;
        }
      }
    };
    exports2.Emitter = Emitter;
  }
});

// node_modules/vscode-jsonrpc/lib/common/cancellation.js
var require_cancellation = __commonJS2({
  "node_modules/vscode-jsonrpc/lib/common/cancellation.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
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
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || /* @__PURE__ */ (function() {
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
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CancellationTokenSource = exports2.CancellationToken = void 0;
    var ral_1 = __importDefault(require_ral());
    var Is2 = __importStar(require_is2());
    var events_1 = require_events();
    var CancellationToken;
    (function(CancellationToken2) {
      CancellationToken2.None = Object.freeze({
        isCancellationRequested: false,
        onCancellationRequested: events_1.Event.None
      });
      CancellationToken2.Cancelled = Object.freeze({
        isCancellationRequested: true,
        onCancellationRequested: events_1.Event.None
      });
      function is(value) {
        const candidate = value;
        return candidate && (candidate === CancellationToken2.None || candidate === CancellationToken2.Cancelled || Is2.boolean(candidate.isCancellationRequested) && !!candidate.onCancellationRequested);
      }
      CancellationToken2.is = is;
    })(CancellationToken || (exports2.CancellationToken = CancellationToken = {}));
    var shortcutEvent = Object.freeze(function(callback, context) {
      const handle2 = (0, ral_1.default)().timer.setTimeout(callback.bind(context), 0);
      return { dispose() {
        handle2.dispose();
      } };
    });
    var MutableToken = class {
      _isCancelled = false;
      _emitter;
      cancel() {
        if (!this._isCancelled) {
          this._isCancelled = true;
          if (this._emitter) {
            this._emitter.fire(void 0);
            this.dispose();
          }
        }
      }
      get isCancellationRequested() {
        return this._isCancelled;
      }
      get onCancellationRequested() {
        if (this._isCancelled) {
          return shortcutEvent;
        }
        if (!this._emitter) {
          this._emitter = new events_1.Emitter();
        }
        return this._emitter.event;
      }
      dispose() {
        if (this._emitter) {
          this._emitter.dispose();
          this._emitter = void 0;
        }
      }
    };
    var CancellationTokenSource = class {
      _token;
      get token() {
        if (!this._token) {
          this._token = new MutableToken();
        }
        return this._token;
      }
      cancel() {
        if (!this._token) {
          this._token = CancellationToken.Cancelled;
        } else {
          this._token.cancel();
        }
      }
      dispose() {
        if (!this._token) {
          this._token = CancellationToken.None;
        } else if (this._token instanceof MutableToken) {
          this._token.dispose();
        }
      }
    };
    exports2.CancellationTokenSource = CancellationTokenSource;
  }
});

// node_modules/vscode-jsonrpc/lib/common/sharedArrayCancellation.js
var require_sharedArrayCancellation = __commonJS2({
  "node_modules/vscode-jsonrpc/lib/common/sharedArrayCancellation.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SharedArrayReceiverStrategy = exports2.SharedArraySenderStrategy = void 0;
    var cancellation_1 = require_cancellation();
    var CancellationState;
    (function(CancellationState2) {
      CancellationState2.Continue = 0;
      CancellationState2.Cancelled = 1;
    })(CancellationState || (CancellationState = {}));
    var SharedArraySenderStrategy = class {
      buffers;
      constructor() {
        this.buffers = /* @__PURE__ */ new Map();
      }
      enableCancellation(request) {
        if (request.id === null) {
          return;
        }
        const buffer = new SharedArrayBuffer(4);
        const data = new Int32Array(buffer, 0, 1);
        data[0] = CancellationState.Continue;
        this.buffers.set(request.id, buffer);
        request.$cancellationData = buffer;
      }
      async sendCancellation(_conn, id) {
        const buffer = this.buffers.get(id);
        if (buffer === void 0) {
          return;
        }
        const data = new Int32Array(buffer, 0, 1);
        Atomics.store(data, 0, CancellationState.Cancelled);
      }
      cleanup(id) {
        this.buffers.delete(id);
      }
      dispose() {
        this.buffers.clear();
      }
    };
    exports2.SharedArraySenderStrategy = SharedArraySenderStrategy;
    var SharedArrayBufferCancellationToken = class {
      data;
      constructor(buffer) {
        this.data = new Int32Array(buffer, 0, 1);
      }
      get isCancellationRequested() {
        return Atomics.load(this.data, 0) === CancellationState.Cancelled;
      }
      get onCancellationRequested() {
        throw new Error(`Cancellation over SharedArrayBuffer doesn't support cancellation events`);
      }
    };
    var SharedArrayBufferCancellationTokenSource = class {
      token;
      constructor(buffer) {
        this.token = new SharedArrayBufferCancellationToken(buffer);
      }
      cancel() {
      }
      dispose() {
      }
    };
    var SharedArrayReceiverStrategy = class {
      kind = "request";
      createCancellationTokenSource(request) {
        const buffer = request.$cancellationData;
        if (buffer === void 0) {
          return new cancellation_1.CancellationTokenSource();
        }
        return new SharedArrayBufferCancellationTokenSource(buffer);
      }
    };
    exports2.SharedArrayReceiverStrategy = SharedArrayReceiverStrategy;
  }
});

// node_modules/vscode-jsonrpc/lib/common/semaphore.js
var require_semaphore = __commonJS2({
  "node_modules/vscode-jsonrpc/lib/common/semaphore.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Semaphore = void 0;
    var ral_1 = __importDefault(require_ral());
    var Semaphore = class {
      _capacity;
      _active;
      _waiting;
      constructor(capacity = 1) {
        if (capacity <= 0) {
          throw new Error("Capacity must be greater than 0");
        }
        this._capacity = capacity;
        this._active = 0;
        this._waiting = [];
      }
      lock(thunk) {
        return new Promise((resolve, reject) => {
          this._waiting.push({ thunk, resolve, reject });
          this.runNext();
        });
      }
      get active() {
        return this._active;
      }
      runNext() {
        if (this._waiting.length === 0 || this._active === this._capacity) {
          return;
        }
        (0, ral_1.default)().timer.setImmediate(() => this.doRunNext());
      }
      doRunNext() {
        if (this._waiting.length === 0 || this._active === this._capacity) {
          return;
        }
        const next = this._waiting.shift();
        this._active++;
        if (this._active > this._capacity) {
          throw new Error(`Too many thunks active`);
        }
        try {
          const result = next.thunk();
          if (result instanceof Promise) {
            result.then((value) => {
              this._active--;
              next.resolve(value);
              this.runNext();
            }, (err2) => {
              this._active--;
              next.reject(err2);
              this.runNext();
            });
          } else {
            this._active--;
            next.resolve(result);
            this.runNext();
          }
        } catch (err2) {
          this._active--;
          next.reject(err2);
          this.runNext();
        }
      }
    };
    exports2.Semaphore = Semaphore;
  }
});

// node_modules/vscode-jsonrpc/lib/common/messageReader.js
var require_messageReader = __commonJS2({
  "node_modules/vscode-jsonrpc/lib/common/messageReader.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
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
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || /* @__PURE__ */ (function() {
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
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ReadableStreamMessageReader = exports2.AbstractMessageReader = exports2.MessageReader = void 0;
    var ral_1 = __importDefault(require_ral());
    var Is2 = __importStar(require_is2());
    var events_1 = require_events();
    var semaphore_1 = require_semaphore();
    var MessageReader;
    (function(MessageReader2) {
      function is(value) {
        const candidate = value;
        return candidate && Is2.func(candidate.listen) && Is2.func(candidate.dispose) && Is2.func(candidate.onError) && Is2.func(candidate.onClose) && Is2.func(candidate.onPartialMessage);
      }
      MessageReader2.is = is;
    })(MessageReader || (exports2.MessageReader = MessageReader = {}));
    var AbstractMessageReader = class {
      errorEmitter;
      closeEmitter;
      partialMessageEmitter;
      constructor() {
        this.errorEmitter = new events_1.Emitter();
        this.closeEmitter = new events_1.Emitter();
        this.partialMessageEmitter = new events_1.Emitter();
      }
      dispose() {
        this.errorEmitter.dispose();
        this.closeEmitter.dispose();
        this.partialMessageEmitter.dispose();
      }
      get onError() {
        return this.errorEmitter.event;
      }
      fireError(error) {
        this.errorEmitter.fire(this.asError(error));
      }
      get onClose() {
        return this.closeEmitter.event;
      }
      fireClose() {
        this.closeEmitter.fire(void 0);
      }
      get onPartialMessage() {
        return this.partialMessageEmitter.event;
      }
      firePartialMessage(info2) {
        this.partialMessageEmitter.fire(info2);
      }
      asError(error) {
        if (error instanceof Error) {
          return error;
        } else {
          return new Error(`Reader received error. Reason: ${Is2.string(error.message) ? error.message : "unknown"}`);
        }
      }
    };
    exports2.AbstractMessageReader = AbstractMessageReader;
    var ResolvedMessageReaderOptions;
    (function(ResolvedMessageReaderOptions2) {
      function fromOptions(options) {
        let charset;
        let result;
        let contentDecoder;
        const contentDecoders = /* @__PURE__ */ new Map();
        let contentTypeDecoder;
        const contentTypeDecoders = /* @__PURE__ */ new Map();
        if (options === void 0 || typeof options === "string") {
          charset = options ?? "utf-8";
        } else {
          charset = options.charset ?? "utf-8";
          if (options.contentDecoder !== void 0) {
            contentDecoder = options.contentDecoder;
            contentDecoders.set(contentDecoder.name, contentDecoder);
          }
          if (options.contentDecoders !== void 0) {
            for (const decoder of options.contentDecoders) {
              contentDecoders.set(decoder.name, decoder);
            }
          }
          if (options.contentTypeDecoder !== void 0) {
            contentTypeDecoder = options.contentTypeDecoder;
            contentTypeDecoders.set(contentTypeDecoder.name, contentTypeDecoder);
          }
          if (options.contentTypeDecoders !== void 0) {
            for (const decoder of options.contentTypeDecoders) {
              contentTypeDecoders.set(decoder.name, decoder);
            }
          }
        }
        if (contentTypeDecoder === void 0) {
          contentTypeDecoder = (0, ral_1.default)().applicationJson.decoder;
          contentTypeDecoders.set(contentTypeDecoder.name, contentTypeDecoder);
        }
        return { charset, contentDecoder, contentDecoders, contentTypeDecoder, contentTypeDecoders };
      }
      ResolvedMessageReaderOptions2.fromOptions = fromOptions;
    })(ResolvedMessageReaderOptions || (ResolvedMessageReaderOptions = {}));
    var ReadableStreamMessageReader = class extends AbstractMessageReader {
      readable;
      options;
      callback;
      nextMessageLength;
      messageToken;
      buffer;
      partialMessageTimer;
      _partialMessageTimeout;
      readSemaphore;
      constructor(readable, options) {
        super();
        this.readable = readable;
        this.options = ResolvedMessageReaderOptions.fromOptions(options);
        this.buffer = (0, ral_1.default)().messageBuffer.create(this.options.charset);
        this._partialMessageTimeout = 1e4;
        this.nextMessageLength = -1;
        this.messageToken = 0;
        this.readSemaphore = new semaphore_1.Semaphore(1);
      }
      set partialMessageTimeout(timeout) {
        this._partialMessageTimeout = timeout;
      }
      get partialMessageTimeout() {
        return this._partialMessageTimeout;
      }
      listen(callback) {
        this.nextMessageLength = -1;
        this.messageToken = 0;
        this.partialMessageTimer = void 0;
        this.callback = callback;
        const result = this.readable.onData((data) => {
          this.onData(data);
        });
        this.readable.onError((error) => this.fireError(error));
        this.readable.onClose(() => this.fireClose());
        return result;
      }
      onData(data) {
        try {
          this.buffer.append(data);
          while (true) {
            if (this.nextMessageLength === -1) {
              const headers = this.buffer.tryReadHeaders(true);
              if (!headers) {
                return;
              }
              const contentLength = headers.get("content-length");
              if (!contentLength) {
                this.fireError(new Error(`Header must provide a Content-Length property.
${JSON.stringify(Object.fromEntries(headers))}`));
                return;
              }
              const length = parseInt(contentLength);
              if (isNaN(length)) {
                this.fireError(new Error(`Content-Length value must be a number. Got ${contentLength}`));
                return;
              }
              this.nextMessageLength = length;
            }
            const body2 = this.buffer.tryReadBody(this.nextMessageLength);
            if (body2 === void 0) {
              this.setPartialMessageTimer();
              return;
            }
            this.clearPartialMessageTimer();
            this.nextMessageLength = -1;
            this.readSemaphore.lock(async () => {
              const bytes = this.options.contentDecoder !== void 0 ? await this.options.contentDecoder.decode(body2) : body2;
              const message = await this.options.contentTypeDecoder.decode(bytes, this.options);
              this.callback(message);
            }).catch((error) => {
              this.fireError(error);
            });
          }
        } catch (error) {
          this.fireError(error);
        }
      }
      clearPartialMessageTimer() {
        if (this.partialMessageTimer) {
          this.partialMessageTimer.dispose();
          this.partialMessageTimer = void 0;
        }
      }
      setPartialMessageTimer() {
        this.clearPartialMessageTimer();
        if (this._partialMessageTimeout <= 0) {
          return;
        }
        this.partialMessageTimer = (0, ral_1.default)().timer.setTimeout((token, timeout) => {
          this.partialMessageTimer = void 0;
          if (token === this.messageToken) {
            this.firePartialMessage({ messageToken: token, waitingTime: timeout });
            this.setPartialMessageTimer();
          }
        }, this._partialMessageTimeout, this.messageToken, this._partialMessageTimeout);
      }
    };
    exports2.ReadableStreamMessageReader = ReadableStreamMessageReader;
  }
});

// node_modules/vscode-jsonrpc/lib/common/messageWriter.js
var require_messageWriter = __commonJS2({
  "node_modules/vscode-jsonrpc/lib/common/messageWriter.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
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
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || /* @__PURE__ */ (function() {
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
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.WriteableStreamMessageWriter = exports2.AbstractMessageWriter = exports2.MessageWriter = void 0;
    var ral_1 = __importDefault(require_ral());
    var Is2 = __importStar(require_is2());
    var semaphore_1 = require_semaphore();
    var events_1 = require_events();
    var ContentLength = "Content-Length: ";
    var CRLF = "\r\n";
    var MessageWriter;
    (function(MessageWriter2) {
      function is(value) {
        const candidate = value;
        return candidate && Is2.func(candidate.dispose) && Is2.func(candidate.onClose) && Is2.func(candidate.onError) && Is2.func(candidate.write);
      }
      MessageWriter2.is = is;
    })(MessageWriter || (exports2.MessageWriter = MessageWriter = {}));
    var AbstractMessageWriter = class {
      errorEmitter;
      closeEmitter;
      constructor() {
        this.errorEmitter = new events_1.Emitter();
        this.closeEmitter = new events_1.Emitter();
      }
      dispose() {
        this.errorEmitter.dispose();
        this.closeEmitter.dispose();
      }
      get onError() {
        return this.errorEmitter.event;
      }
      fireError(error, message, count) {
        this.errorEmitter.fire([this.asError(error), message, count]);
      }
      get onClose() {
        return this.closeEmitter.event;
      }
      fireClose() {
        this.closeEmitter.fire(void 0);
      }
      asError(error) {
        if (error instanceof Error) {
          return error;
        } else {
          return new Error(`Writer received error. Reason: ${Is2.string(error.message) ? error.message : "unknown"}`);
        }
      }
    };
    exports2.AbstractMessageWriter = AbstractMessageWriter;
    var ResolvedMessageWriterOptions;
    (function(ResolvedMessageWriterOptions2) {
      function fromOptions(options) {
        if (options === void 0 || typeof options === "string") {
          return { charset: options ?? "utf-8", contentTypeEncoder: (0, ral_1.default)().applicationJson.encoder };
        } else {
          return { charset: options.charset ?? "utf-8", contentEncoder: options.contentEncoder, contentTypeEncoder: options.contentTypeEncoder ?? (0, ral_1.default)().applicationJson.encoder };
        }
      }
      ResolvedMessageWriterOptions2.fromOptions = fromOptions;
    })(ResolvedMessageWriterOptions || (ResolvedMessageWriterOptions = {}));
    var WriteableStreamMessageWriter = class extends AbstractMessageWriter {
      writable;
      options;
      errorCount;
      writeSemaphore;
      constructor(writable, options) {
        super();
        this.writable = writable;
        this.options = ResolvedMessageWriterOptions.fromOptions(options);
        this.errorCount = 0;
        this.writeSemaphore = new semaphore_1.Semaphore(1);
        this.writable.onError((error) => this.fireError(error));
        this.writable.onClose(() => this.fireClose());
      }
      async write(msg) {
        return this.writeSemaphore.lock(async () => {
          const payload = this.options.contentTypeEncoder.encode(msg, this.options).then((buffer) => {
            if (this.options.contentEncoder !== void 0) {
              return this.options.contentEncoder.encode(buffer);
            } else {
              return buffer;
            }
          });
          return payload.then((buffer) => {
            const headers = [];
            headers.push(ContentLength, buffer.byteLength.toString(), CRLF);
            headers.push(CRLF);
            return this.doWrite(msg, headers, buffer);
          }, (error) => {
            this.fireError(error);
            throw error;
          });
        });
      }
      async doWrite(msg, headers, data) {
        try {
          await this.writable.write(headers.join(""), "ascii");
          return this.writable.write(data);
        } catch (error) {
          this.handleError(error, msg);
          return Promise.reject(error);
        }
      }
      handleError(error, msg) {
        this.errorCount++;
        this.fireError(error, msg, this.errorCount);
      }
      end() {
        this.writable.end();
      }
    };
    exports2.WriteableStreamMessageWriter = WriteableStreamMessageWriter;
  }
});

// node_modules/vscode-jsonrpc/lib/common/messageBuffer.js
var require_messageBuffer = __commonJS2({
  "node_modules/vscode-jsonrpc/lib/common/messageBuffer.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AbstractMessageBuffer = void 0;
    var CR = 13;
    var LF = 10;
    var CRLF = "\r\n";
    var AbstractMessageBuffer = class {
      _encoding;
      _chunks;
      _totalLength;
      constructor(encoding = "utf-8") {
        this._encoding = encoding;
        this._chunks = [];
        this._totalLength = 0;
      }
      get encoding() {
        return this._encoding;
      }
      append(chunk) {
        const toAppend = typeof chunk === "string" ? this.fromString(chunk, this._encoding) : chunk;
        this._chunks.push(toAppend);
        this._totalLength += toAppend.byteLength;
      }
      tryReadHeaders(lowerCaseKeys = false) {
        if (this._chunks.length === 0) {
          return void 0;
        }
        let state = 0;
        let chunkIndex = 0;
        let offset = 0;
        let chunkBytesRead = 0;
        row: while (chunkIndex < this._chunks.length) {
          const chunk = this._chunks[chunkIndex];
          offset = 0;
          while (offset < chunk.length) {
            const value = chunk[offset];
            switch (value) {
              case CR:
                switch (state) {
                  case 0:
                    state = 1;
                    break;
                  case 2:
                    state = 3;
                    break;
                  default:
                    state = 0;
                }
                break;
              case LF:
                switch (state) {
                  case 1:
                    state = 2;
                    break;
                  case 3:
                    state = 4;
                    offset++;
                    break row;
                  default:
                    state = 0;
                }
                break;
              default:
                state = 0;
            }
            offset++;
          }
          chunkBytesRead += chunk.byteLength;
          chunkIndex++;
        }
        if (state !== 4) {
          return void 0;
        }
        const buffer = this._read(chunkBytesRead + offset);
        const result = /* @__PURE__ */ new Map();
        const headers = this.toString(buffer, "ascii").split(CRLF);
        if (headers.length < 2) {
          return result;
        }
        for (let i2 = 0; i2 < headers.length - 2; i2++) {
          const header = headers[i2];
          const index = header.indexOf(":");
          if (index === -1) {
            throw new Error(`Message header must separate key and value using ':'
${header}`);
          }
          const key = header.substr(0, index);
          const value = header.substr(index + 1).trim();
          result.set(lowerCaseKeys ? key.toLowerCase() : key, value);
        }
        return result;
      }
      tryReadBody(length) {
        if (this._totalLength < length) {
          return void 0;
        }
        return this._read(length);
      }
      get numberOfBytes() {
        return this._totalLength;
      }
      _read(byteCount) {
        if (byteCount === 0) {
          return this.emptyBuffer();
        }
        if (byteCount > this._totalLength) {
          throw new Error(`Cannot read so many bytes!`);
        }
        if (this._chunks[0].byteLength === byteCount) {
          const chunk = this._chunks[0];
          this._chunks.shift();
          this._totalLength -= byteCount;
          return this.asNative(chunk);
        }
        if (this._chunks[0].byteLength > byteCount) {
          const chunk = this._chunks[0];
          const result2 = this.asNative(chunk, byteCount);
          this._chunks[0] = chunk.slice(byteCount);
          this._totalLength -= byteCount;
          return result2;
        }
        const result = this.allocNative(byteCount);
        let resultOffset = 0;
        const chunkIndex = 0;
        while (byteCount > 0) {
          const chunk = this._chunks[chunkIndex];
          if (chunk.byteLength > byteCount) {
            const chunkPart = chunk.slice(0, byteCount);
            result.set(chunkPart, resultOffset);
            resultOffset += byteCount;
            this._chunks[chunkIndex] = chunk.slice(byteCount);
            this._totalLength -= byteCount;
            byteCount -= byteCount;
          } else {
            result.set(chunk, resultOffset);
            resultOffset += chunk.byteLength;
            this._chunks.shift();
            this._totalLength -= chunk.byteLength;
            byteCount -= chunk.byteLength;
          }
        }
        return result;
      }
    };
    exports2.AbstractMessageBuffer = AbstractMessageBuffer;
  }
});

// node_modules/vscode-jsonrpc/lib/common/connection.js
var require_connection = __commonJS2({
  "node_modules/vscode-jsonrpc/lib/common/connection.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
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
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || /* @__PURE__ */ (function() {
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
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ConnectionOptions = exports2.MessageStrategy = exports2.CancellationStrategy = exports2.CancellationSenderStrategy = exports2.CancellationReceiverStrategy = exports2.RequestCancellationReceiverStrategy = exports2.IdCancellationReceiverStrategy = exports2.ConnectionStrategy = exports2.ConnectionError = exports2.ConnectionErrors = exports2.LogTraceNotification = exports2.SetTraceNotification = exports2.TraceFormat = exports2.TraceValues = exports2.TraceValue = exports2.Trace = exports2.NullLogger = exports2.ProgressType = exports2.ProgressToken = void 0;
    exports2.createMessageConnection = createMessageConnection;
    var ral_1 = __importDefault(require_ral());
    var Is2 = __importStar(require_is2());
    var messages_1 = require_messages();
    var linkedMap_1 = require_linkedMap();
    var events_1 = require_events();
    var cancellation_1 = require_cancellation();
    var CancelNotification;
    (function(CancelNotification2) {
      CancelNotification2.type = new messages_1.NotificationType("$/cancelRequest");
    })(CancelNotification || (CancelNotification = {}));
    var ProgressToken;
    (function(ProgressToken2) {
      function is(value) {
        return typeof value === "string" || typeof value === "number";
      }
      ProgressToken2.is = is;
    })(ProgressToken || (exports2.ProgressToken = ProgressToken = {}));
    var ProgressNotification;
    (function(ProgressNotification2) {
      ProgressNotification2.type = new messages_1.NotificationType("$/progress");
    })(ProgressNotification || (ProgressNotification = {}));
    var ProgressType = class {
      /**
       * Clients must not use these properties. They are here to ensure correct typing.
       * in TypeScript
       */
      __;
      _pr;
      constructor() {
      }
    };
    exports2.ProgressType = ProgressType;
    var StarRequestHandler;
    (function(StarRequestHandler2) {
      function is(value) {
        return Is2.func(value);
      }
      StarRequestHandler2.is = is;
    })(StarRequestHandler || (StarRequestHandler = {}));
    exports2.NullLogger = Object.freeze({
      error: () => {
      },
      warn: () => {
      },
      info: () => {
      },
      log: () => {
      }
    });
    var Trace;
    (function(Trace2) {
      Trace2[Trace2["Off"] = 0] = "Off";
      Trace2[Trace2["Messages"] = 1] = "Messages";
      Trace2[Trace2["Compact"] = 2] = "Compact";
      Trace2[Trace2["Verbose"] = 3] = "Verbose";
    })(Trace || (exports2.Trace = Trace = {}));
    var TraceValue;
    (function(TraceValue2) {
      TraceValue2.Off = "off";
      TraceValue2.Messages = "messages";
      TraceValue2.Compact = "compact";
      TraceValue2.Verbose = "verbose";
    })(TraceValue || (exports2.TraceValue = TraceValue = {}));
    exports2.TraceValues = TraceValue;
    (function(Trace2) {
      function fromString(value) {
        if (!Is2.string(value)) {
          return Trace2.Off;
        }
        value = value.toLowerCase();
        switch (value) {
          case "off":
            return Trace2.Off;
          case "messages":
            return Trace2.Messages;
          case "compact":
            return Trace2.Compact;
          case "verbose":
            return Trace2.Verbose;
          default:
            return Trace2.Off;
        }
      }
      Trace2.fromString = fromString;
      function toString(value) {
        switch (value) {
          case Trace2.Off:
            return "off";
          case Trace2.Messages:
            return "messages";
          case Trace2.Compact:
            return "compact";
          case Trace2.Verbose:
            return "verbose";
          default:
            return "off";
        }
      }
      Trace2.toString = toString;
    })(Trace || (exports2.Trace = Trace = {}));
    var TraceFormat;
    (function(TraceFormat2) {
      TraceFormat2["Text"] = "text";
      TraceFormat2["JSON"] = "json";
    })(TraceFormat || (exports2.TraceFormat = TraceFormat = {}));
    (function(TraceFormat2) {
      function fromString(value) {
        if (!Is2.string(value)) {
          return TraceFormat2.Text;
        }
        value = value.toLowerCase();
        if (value === "json") {
          return TraceFormat2.JSON;
        } else {
          return TraceFormat2.Text;
        }
      }
      TraceFormat2.fromString = fromString;
    })(TraceFormat || (exports2.TraceFormat = TraceFormat = {}));
    var SetTraceNotification;
    (function(SetTraceNotification2) {
      SetTraceNotification2.type = new messages_1.NotificationType("$/setTrace");
    })(SetTraceNotification || (exports2.SetTraceNotification = SetTraceNotification = {}));
    var LogTraceNotification;
    (function(LogTraceNotification2) {
      LogTraceNotification2.type = new messages_1.NotificationType("$/logTrace");
    })(LogTraceNotification || (exports2.LogTraceNotification = LogTraceNotification = {}));
    var ConnectionErrors;
    (function(ConnectionErrors2) {
      ConnectionErrors2[ConnectionErrors2["Closed"] = 1] = "Closed";
      ConnectionErrors2[ConnectionErrors2["Disposed"] = 2] = "Disposed";
      ConnectionErrors2[ConnectionErrors2["AlreadyListening"] = 3] = "AlreadyListening";
    })(ConnectionErrors || (exports2.ConnectionErrors = ConnectionErrors = {}));
    var ConnectionError = class _ConnectionError extends Error {
      code;
      constructor(code, message) {
        super(message);
        this.code = code;
        Object.setPrototypeOf(this, _ConnectionError.prototype);
      }
    };
    exports2.ConnectionError = ConnectionError;
    var ConnectionStrategy;
    (function(ConnectionStrategy2) {
      function is(value) {
        const candidate = value;
        return candidate && Is2.func(candidate.cancelUndispatched);
      }
      ConnectionStrategy2.is = is;
    })(ConnectionStrategy || (exports2.ConnectionStrategy = ConnectionStrategy = {}));
    var IdCancellationReceiverStrategy;
    (function(IdCancellationReceiverStrategy2) {
      function is(value) {
        const candidate = value;
        return candidate && (candidate.kind === void 0 || candidate.kind === "id") && Is2.func(candidate.createCancellationTokenSource) && (candidate.dispose === void 0 || Is2.func(candidate.dispose));
      }
      IdCancellationReceiverStrategy2.is = is;
    })(IdCancellationReceiverStrategy || (exports2.IdCancellationReceiverStrategy = IdCancellationReceiverStrategy = {}));
    var RequestCancellationReceiverStrategy;
    (function(RequestCancellationReceiverStrategy2) {
      function is(value) {
        const candidate = value;
        return candidate && candidate.kind === "request" && Is2.func(candidate.createCancellationTokenSource) && (candidate.dispose === void 0 || Is2.func(candidate.dispose));
      }
      RequestCancellationReceiverStrategy2.is = is;
    })(RequestCancellationReceiverStrategy || (exports2.RequestCancellationReceiverStrategy = RequestCancellationReceiverStrategy = {}));
    var CancellationReceiverStrategy;
    (function(CancellationReceiverStrategy2) {
      CancellationReceiverStrategy2.Message = Object.freeze({
        createCancellationTokenSource(_) {
          return new cancellation_1.CancellationTokenSource();
        }
      });
      function is(value) {
        return IdCancellationReceiverStrategy.is(value) || RequestCancellationReceiverStrategy.is(value);
      }
      CancellationReceiverStrategy2.is = is;
    })(CancellationReceiverStrategy || (exports2.CancellationReceiverStrategy = CancellationReceiverStrategy = {}));
    var CancellationSenderStrategy;
    (function(CancellationSenderStrategy2) {
      CancellationSenderStrategy2.Message = Object.freeze({
        sendCancellation(conn, id) {
          return conn.sendNotification(CancelNotification.type, { id });
        },
        cleanup(_) {
        }
      });
      function is(value) {
        const candidate = value;
        return candidate && Is2.func(candidate.sendCancellation) && Is2.func(candidate.cleanup);
      }
      CancellationSenderStrategy2.is = is;
    })(CancellationSenderStrategy || (exports2.CancellationSenderStrategy = CancellationSenderStrategy = {}));
    var CancellationStrategy;
    (function(CancellationStrategy2) {
      CancellationStrategy2.Message = Object.freeze({
        receiver: CancellationReceiverStrategy.Message,
        sender: CancellationSenderStrategy.Message
      });
      function is(value) {
        const candidate = value;
        return candidate && CancellationReceiverStrategy.is(candidate.receiver) && CancellationSenderStrategy.is(candidate.sender);
      }
      CancellationStrategy2.is = is;
    })(CancellationStrategy || (exports2.CancellationStrategy = CancellationStrategy = {}));
    var MessageStrategy;
    (function(MessageStrategy2) {
      function is(value) {
        const candidate = value;
        return candidate && Is2.func(candidate.handleMessage);
      }
      MessageStrategy2.is = is;
    })(MessageStrategy || (exports2.MessageStrategy = MessageStrategy = {}));
    var ConnectionOptions;
    (function(ConnectionOptions2) {
      function is(value) {
        const candidate = value;
        return candidate && (CancellationStrategy.is(candidate.cancellationStrategy) || ConnectionStrategy.is(candidate.connectionStrategy) || MessageStrategy.is(candidate.messageStrategy) || Is2.number(candidate.maxParallelism));
      }
      ConnectionOptions2.is = is;
    })(ConnectionOptions || (exports2.ConnectionOptions = ConnectionOptions = {}));
    var ConnectionState;
    (function(ConnectionState2) {
      ConnectionState2[ConnectionState2["New"] = 1] = "New";
      ConnectionState2[ConnectionState2["Listening"] = 2] = "Listening";
      ConnectionState2[ConnectionState2["Closed"] = 3] = "Closed";
      ConnectionState2[ConnectionState2["Disposed"] = 4] = "Disposed";
    })(ConnectionState || (ConnectionState = {}));
    function createMessageConnection(messageReader, messageWriter, _logger, options) {
      const logger = _logger !== void 0 ? _logger : exports2.NullLogger;
      let sequenceNumber = 0;
      let notificationSequenceNumber = 0;
      let unknownResponseSequenceNumber = 0;
      const version = "2.0";
      const maxParallelism = options?.maxParallelism ?? -1;
      let inFlight = 0;
      let starRequestHandler = void 0;
      const requestHandlers = /* @__PURE__ */ new Map();
      let starNotificationHandler = void 0;
      const notificationHandlers = /* @__PURE__ */ new Map();
      const progressHandlers = /* @__PURE__ */ new Map();
      let timer2;
      let messageQueue = new linkedMap_1.LinkedMap();
      let responsePromises = /* @__PURE__ */ new Map();
      let knownCanceledRequests = /* @__PURE__ */ new Set();
      let requestTokens = /* @__PURE__ */ new Map();
      let trace = Trace.Off;
      let traceFormat = TraceFormat.Text;
      let tracer;
      let state = ConnectionState.New;
      const errorEmitter = new events_1.Emitter();
      const closeEmitter = new events_1.Emitter();
      const unhandledNotificationEmitter = new events_1.Emitter();
      const unhandledProgressEmitter = new events_1.Emitter();
      const disposeEmitter = new events_1.Emitter();
      const cancellationStrategy = options && options.cancellationStrategy ? options.cancellationStrategy : CancellationStrategy.Message;
      function cancelUndispatched(_message) {
        return void 0;
      }
      function isListening() {
        return state === ConnectionState.Listening;
      }
      function isClosed() {
        return state === ConnectionState.Closed;
      }
      function isDisposed() {
        return state === ConnectionState.Disposed;
      }
      function closeHandler() {
        if (state === ConnectionState.New || state === ConnectionState.Listening) {
          state = ConnectionState.Closed;
          closeEmitter.fire(void 0);
        }
      }
      function readErrorHandler(error) {
        errorEmitter.fire([error, void 0, void 0]);
      }
      function writeErrorHandler(data) {
        errorEmitter.fire(data);
      }
      messageReader.onClose(closeHandler);
      messageReader.onError(readErrorHandler);
      messageWriter.onClose(closeHandler);
      messageWriter.onError(writeErrorHandler);
      function createRequestQueueKey(id) {
        if (id === null) {
          throw new Error(`Can't send requests with id null since the response can't be correlated.`);
        }
        return "req-" + id.toString();
      }
      function createResponseQueueKey(id) {
        if (id === null) {
          return "res-unknown-" + (++unknownResponseSequenceNumber).toString();
        } else {
          return "res-" + id.toString();
        }
      }
      function createNotificationQueueKey() {
        return "not-" + (++notificationSequenceNumber).toString();
      }
      function addMessageToQueue(queue, message) {
        if (messages_1.Message.isRequest(message)) {
          queue.set(createRequestQueueKey(message.id), message);
        } else if (messages_1.Message.isResponse(message)) {
          if (maxParallelism === -1) {
            queue.set(createResponseQueueKey(message.id), message);
          } else {
            handleResponse(message);
          }
        } else {
          queue.set(createNotificationQueueKey(), message);
        }
      }
      function triggerMessageQueue() {
        if (timer2 || messageQueue.size === 0) {
          return;
        }
        if (maxParallelism !== -1 && inFlight >= maxParallelism) {
          return;
        }
        timer2 = (0, ral_1.default)().timer.setImmediate(async () => {
          timer2 = void 0;
          if (messageQueue.size === 0) {
            return;
          }
          if (maxParallelism !== -1 && inFlight >= maxParallelism) {
            return;
          }
          const message = messageQueue.shift();
          let result;
          try {
            inFlight++;
            const messageStrategy = options?.messageStrategy;
            if (MessageStrategy.is(messageStrategy)) {
              result = messageStrategy.handleMessage(message, handleMessage);
            } else {
              result = handleMessage(message);
            }
          } catch (error) {
            logger.error(`Processing message queue failed: ${error.toString()}`);
          } finally {
            if (result instanceof Promise) {
              result.then(() => {
                inFlight--;
                triggerMessageQueue();
              }).catch((error) => {
                logger.error(`Processing message queue failed: ${error.toString()}`);
              });
            } else {
              inFlight--;
            }
            triggerMessageQueue();
          }
        });
      }
      async function handleMessage(message) {
        if (messages_1.Message.isRequest(message)) {
          return handleRequest(message);
        } else if (messages_1.Message.isNotification(message)) {
          return handleNotification(message);
        } else if (messages_1.Message.isResponse(message)) {
          return handleResponse(message);
        } else {
          return handleInvalidMessage(message);
        }
      }
      const callback = (message) => {
        try {
          if (messages_1.Message.isNotification(message) && message.method === CancelNotification.type.method) {
            const cancelId = message.params.id;
            const key = createRequestQueueKey(cancelId);
            const toCancel = messageQueue.get(key);
            if (messages_1.Message.isRequest(toCancel)) {
              const strategy = options?.connectionStrategy;
              const response = strategy && strategy.cancelUndispatched ? strategy.cancelUndispatched(toCancel, cancelUndispatched) : cancelUndispatched(toCancel);
              if (response && (response.error !== void 0 || response.result !== void 0)) {
                messageQueue.delete(key);
                requestTokens.delete(cancelId);
                response.id = toCancel.id;
                traceSendingResponse(response, message.method, Date.now());
                messageWriter.write(response).catch(() => logger.error(`Sending response for canceled message failed.`));
                return;
              }
            }
            const cancellationToken = requestTokens.get(cancelId);
            if (cancellationToken !== void 0) {
              cancellationToken.cancel();
              traceReceivedNotification(message);
              return;
            } else {
              knownCanceledRequests.add(cancelId);
            }
          }
          addMessageToQueue(messageQueue, message);
        } finally {
          triggerMessageQueue();
        }
      };
      async function handleRequest(requestMessage) {
        if (isDisposed()) {
          return Promise.resolve();
        }
        function reply(resultOrError, method, startTime2) {
          const message = {
            jsonrpc: version,
            id: requestMessage.id
          };
          if (resultOrError instanceof messages_1.ResponseError) {
            message.error = resultOrError.toJson();
          } else {
            message.result = resultOrError === void 0 ? null : resultOrError;
          }
          traceSendingResponse(message, method, startTime2);
          return messageWriter.write(message);
        }
        function replyError(error, method, startTime2) {
          const message = {
            jsonrpc: version,
            id: requestMessage.id,
            error: error.toJson()
          };
          traceSendingResponse(message, method, startTime2);
          return messageWriter.write(message);
        }
        traceReceivedRequest(requestMessage);
        const element = requestHandlers.get(requestMessage.method);
        let type;
        let requestHandler;
        if (element) {
          type = element.type;
          requestHandler = element.handler;
        }
        const startTime = Date.now();
        if (requestHandler || starRequestHandler) {
          const tokenKey = requestMessage.id ?? String(Date.now());
          const cancellationSource = IdCancellationReceiverStrategy.is(cancellationStrategy.receiver) ? cancellationStrategy.receiver.createCancellationTokenSource(tokenKey) : cancellationStrategy.receiver.createCancellationTokenSource(requestMessage);
          if (requestMessage.id !== null && knownCanceledRequests.has(requestMessage.id)) {
            cancellationSource.cancel();
          }
          if (requestMessage.id !== null) {
            requestTokens.set(tokenKey, cancellationSource);
          }
          try {
            let handlerResult;
            if (requestHandler) {
              if (requestMessage.params === void 0) {
                if (type !== void 0 && type.numberOfParams !== 0) {
                  return replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InvalidParams, `Request ${requestMessage.method} defines ${type.numberOfParams} params but received none.`), requestMessage.method, startTime);
                }
                handlerResult = requestHandler(cancellationSource.token);
              } else if (Array.isArray(requestMessage.params)) {
                if (type !== void 0 && type.parameterStructures === messages_1.ParameterStructures.byName) {
                  return replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InvalidParams, `Request ${requestMessage.method} defines parameters by name but received parameters by position`), requestMessage.method, startTime);
                }
                handlerResult = requestHandler(...requestMessage.params, cancellationSource.token);
              } else {
                if (type !== void 0 && type.parameterStructures === messages_1.ParameterStructures.byPosition) {
                  return replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InvalidParams, `Request ${requestMessage.method} defines parameters by position but received parameters by name`), requestMessage.method, startTime);
                }
                handlerResult = requestHandler(requestMessage.params, cancellationSource.token);
              }
            } else if (starRequestHandler) {
              handlerResult = starRequestHandler(requestMessage.method, requestMessage.params, cancellationSource.token);
            }
            const resultOrError = await handlerResult;
            await reply(resultOrError, requestMessage.method, startTime);
          } catch (error) {
            if (error instanceof messages_1.ResponseError) {
              await reply(error, requestMessage.method, startTime);
            } else if (error && Is2.string(error.message)) {
              await replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, `Request ${requestMessage.method} failed with message: ${error.message}`), requestMessage.method, startTime);
            } else {
              await replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, `Request ${requestMessage.method} failed unexpectedly without providing any details.`), requestMessage.method, startTime);
            }
          } finally {
            requestTokens.delete(tokenKey);
          }
        } else {
          await replyError(new messages_1.ResponseError(messages_1.ErrorCodes.MethodNotFound, `Unhandled method ${requestMessage.method}`), requestMessage.method, startTime);
        }
      }
      function handleResponse(responseMessage) {
        if (isDisposed()) {
          return;
        }
        if (responseMessage.id === null) {
          if (responseMessage.error) {
            logger.error(`Received response message without id: Error is: 
${JSON.stringify(responseMessage.error, void 0, 4)}`);
          } else {
            logger.error(`Received response message without id. No further error information provided.`);
          }
        } else {
          const key = responseMessage.id;
          const responsePromise = responsePromises.get(key);
          traceReceivedResponse(responseMessage, responsePromise);
          if (responsePromise !== void 0) {
            responsePromises.delete(key);
            try {
              if (responseMessage.error) {
                const error = responseMessage.error;
                responsePromise.reject(new messages_1.ResponseError(error.code, error.message, error.data));
              } else if (responseMessage.result !== void 0) {
                responsePromise.resolve(responseMessage.result);
              } else {
                throw new Error("Should never happen.");
              }
            } catch (error) {
              if (error.message) {
                logger.error(`Response handler '${responsePromise.method}' failed with message: ${error.message}`);
              } else {
                logger.error(`Response handler '${responsePromise.method}' failed unexpectedly.`);
              }
            }
          }
        }
      }
      async function handleNotification(message) {
        if (isDisposed()) {
          return;
        }
        let type = void 0;
        let notificationHandler;
        if (message.method === CancelNotification.type.method) {
          const cancelId = message.params.id;
          knownCanceledRequests.delete(cancelId);
          traceReceivedNotification(message);
          return;
        } else {
          const element = notificationHandlers.get(message.method);
          if (element) {
            notificationHandler = element.handler;
            type = element.type;
          }
        }
        if (notificationHandler || starNotificationHandler) {
          try {
            traceReceivedNotification(message);
            if (notificationHandler) {
              if (message.params === void 0) {
                if (type !== void 0) {
                  if (type.numberOfParams !== 0 && type.parameterStructures !== messages_1.ParameterStructures.byName) {
                    logger.error(`Notification ${message.method} defines ${type.numberOfParams} params but received none.`);
                  }
                }
                await notificationHandler();
              } else if (Array.isArray(message.params)) {
                const params = message.params;
                if (message.method === ProgressNotification.type.method && params.length === 2 && ProgressToken.is(params[0])) {
                  await notificationHandler({ token: params[0], value: params[1] });
                } else {
                  if (type !== void 0) {
                    if (type.parameterStructures === messages_1.ParameterStructures.byName) {
                      logger.error(`Notification ${message.method} defines parameters by name but received parameters by position`);
                    }
                    if (type.numberOfParams !== message.params.length) {
                      logger.error(`Notification ${message.method} defines ${type.numberOfParams} params but received ${params.length} arguments`);
                    }
                  }
                  await notificationHandler(...params);
                }
              } else {
                if (type !== void 0 && type.parameterStructures === messages_1.ParameterStructures.byPosition) {
                  logger.error(`Notification ${message.method} defines parameters by position but received parameters by name`);
                }
                await notificationHandler(message.params);
              }
            } else if (starNotificationHandler) {
              await starNotificationHandler(message.method, message.params);
            }
          } catch (error) {
            if (error.message) {
              logger.error(`Notification handler '${message.method}' failed with message: ${error.message}`);
            } else {
              logger.error(`Notification handler '${message.method}' failed unexpectedly.`);
            }
          }
        } else {
          unhandledNotificationEmitter.fire(message);
        }
      }
      function handleInvalidMessage(message) {
        if (!message) {
          logger.error("Received empty message.");
          return;
        }
        logger.error(`Received message which is neither a response nor a notification message:
${JSON.stringify(message, null, 4)}`);
        const responseMessage = message;
        if (Is2.string(responseMessage.id) || Is2.number(responseMessage.id)) {
          const key = responseMessage.id;
          const responseHandler = responsePromises.get(key);
          if (responseHandler) {
            responseHandler.reject(new Error("The received response has neither a result nor an error property."));
          }
        }
      }
      function stringifyTrace(params) {
        if (params === void 0 || params === null) {
          return void 0;
        }
        switch (trace) {
          case Trace.Verbose:
            return JSON.stringify(params, null, 4);
          case Trace.Compact:
            return JSON.stringify(params);
          default:
            return void 0;
        }
      }
      function traceSendingRequest(message) {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if ((trace === Trace.Verbose || trace === Trace.Compact) && message.params) {
            data = `Params: ${stringifyTrace(message.params)}`;
          }
          tracer.log(`Sending request '${message.method} - (${message.id})'.`, data);
        } else {
          logLSPMessage("send-request", message);
        }
      }
      function traceSendingNotification(message) {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if (trace === Trace.Verbose || trace === Trace.Compact) {
            if (message.params) {
              data = `Params: ${stringifyTrace(message.params)}`;
            } else {
              data = "No parameters provided.";
            }
          }
          tracer.log(`Sending notification '${message.method}'.`, data);
        } else {
          logLSPMessage("send-notification", message);
        }
      }
      function traceSendingResponse(message, method, startTime) {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if (trace === Trace.Verbose || trace === Trace.Compact) {
            if (message.error && message.error.data) {
              data = `Error data: ${stringifyTrace(message.error.data)}`;
            } else {
              if (message.result) {
                data = `Result: ${stringifyTrace(message.result)}`;
              } else if (message.error === void 0) {
                data = "No result returned.";
              }
            }
          }
          tracer.log(`Sending response '${method} - (${message.id})'. Processing request took ${Date.now() - startTime}ms`, data);
        } else {
          logLSPMessage("send-response", message);
        }
      }
      function traceReceivedRequest(message) {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if ((trace === Trace.Verbose || trace === Trace.Compact) && message.params) {
            data = `Params: ${stringifyTrace(message.params)}`;
          }
          tracer.log(`Received request '${message.method} - (${message.id})'.`, data);
        } else {
          logLSPMessage("receive-request", message);
        }
      }
      function traceReceivedNotification(message) {
        if (trace === Trace.Off || !tracer || message.method === LogTraceNotification.type.method) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if (trace === Trace.Verbose || trace === Trace.Compact) {
            if (message.params) {
              data = `Params: ${stringifyTrace(message.params)}`;
            } else {
              data = "No parameters provided.";
            }
          }
          tracer.log(`Received notification '${message.method}'.`, data);
        } else {
          logLSPMessage("receive-notification", message);
        }
      }
      function traceReceivedResponse(message, responsePromise) {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if (trace === Trace.Verbose || trace === Trace.Compact) {
            if (message.error && message.error.data) {
              data = `Error data: ${stringifyTrace(message.error.data)}`;
            } else {
              if (message.result) {
                data = `Result: ${stringifyTrace(message.result)}`;
              } else if (message.error === void 0) {
                data = "No result returned.";
              }
            }
          }
          if (responsePromise) {
            const error = message.error ? ` Request failed: ${message.error.message} (${message.error.code}).` : "";
            tracer.log(`Received response '${responsePromise.method} - (${message.id})' in ${Date.now() - responsePromise.timerStart}ms.${error}`, data);
          } else {
            tracer.log(`Received response ${message.id} without active response promise.`, data);
          }
        } else {
          logLSPMessage("receive-response", message);
        }
      }
      function logLSPMessage(type, message) {
        if (!tracer || trace === Trace.Off) {
          return;
        }
        const lspMessage = {
          isLSPMessage: true,
          type,
          message,
          timestamp: Date.now()
        };
        tracer.log(lspMessage);
      }
      function throwIfClosedOrDisposed() {
        if (isClosed()) {
          throw new ConnectionError(ConnectionErrors.Closed, "Connection is closed.");
        }
        if (isDisposed()) {
          throw new ConnectionError(ConnectionErrors.Disposed, "Connection is disposed.");
        }
      }
      function throwIfListening() {
        if (isListening()) {
          throw new ConnectionError(ConnectionErrors.AlreadyListening, "Connection is already listening");
        }
      }
      function throwIfNotListening() {
        if (!isListening()) {
          throw new Error("Call listen() first.");
        }
      }
      function undefinedToNull(param) {
        if (param === void 0) {
          return null;
        } else {
          return param;
        }
      }
      function nullToUndefined(param) {
        if (param === null) {
          return void 0;
        } else {
          return param;
        }
      }
      function isNamedParam(param) {
        return param !== void 0 && param !== null && !Array.isArray(param) && typeof param === "object";
      }
      function computeSingleParam(parameterStructures, param) {
        switch (parameterStructures) {
          case messages_1.ParameterStructures.auto:
            if (isNamedParam(param)) {
              return nullToUndefined(param);
            } else {
              return [undefinedToNull(param)];
            }
          case messages_1.ParameterStructures.byName:
            if (!isNamedParam(param)) {
              throw new Error(`Received parameters by name but param is not an object literal.`);
            }
            return nullToUndefined(param);
          case messages_1.ParameterStructures.byPosition:
            return [undefinedToNull(param)];
          default:
            throw new Error(`Unknown parameter structure ${parameterStructures.toString()}`);
        }
      }
      function computeMessageParams(type, params) {
        let result;
        const numberOfParams = type.numberOfParams;
        switch (numberOfParams) {
          case 0:
            result = void 0;
            break;
          case 1:
            result = computeSingleParam(type.parameterStructures, params[0]);
            break;
          default:
            result = [];
            for (let i2 = 0; i2 < params.length && i2 < numberOfParams; i2++) {
              result.push(undefinedToNull(params[i2]));
            }
            if (params.length < numberOfParams) {
              for (let i2 = params.length; i2 < numberOfParams; i2++) {
                result.push(null);
              }
            }
            break;
        }
        return result;
      }
      const connection2 = {
        sendNotification: (type, ...args2) => {
          throwIfClosedOrDisposed();
          let method;
          let messageParams;
          if (Is2.string(type)) {
            method = type;
            const first = args2[0];
            let paramStart = 0;
            let parameterStructures = messages_1.ParameterStructures.auto;
            if (messages_1.ParameterStructures.is(first)) {
              paramStart = 1;
              parameterStructures = first;
            }
            const paramEnd = args2.length;
            const numberOfParams = paramEnd - paramStart;
            switch (numberOfParams) {
              case 0:
                messageParams = void 0;
                break;
              case 1:
                messageParams = computeSingleParam(parameterStructures, args2[paramStart]);
                break;
              default:
                if (parameterStructures === messages_1.ParameterStructures.byName) {
                  throw new Error(`Received ${numberOfParams} parameters for 'by Name' notification parameter structure.`);
                }
                messageParams = args2.slice(paramStart, paramEnd).map((value) => undefinedToNull(value));
                break;
            }
          } else {
            const params = args2;
            method = type.method;
            messageParams = computeMessageParams(type, params);
          }
          const notificationMessage = {
            jsonrpc: version,
            method,
            params: messageParams
          };
          traceSendingNotification(notificationMessage);
          return messageWriter.write(notificationMessage).catch((error) => {
            logger.error(`Sending notification failed.`);
            throw error;
          });
        },
        onNotification: (type, handler) => {
          throwIfClosedOrDisposed();
          let method;
          if (Is2.func(type)) {
            starNotificationHandler = type;
          } else if (handler) {
            if (Is2.string(type)) {
              method = type;
              notificationHandlers.set(type, { type: void 0, handler });
            } else {
              method = type.method;
              notificationHandlers.set(type.method, { type, handler });
            }
          }
          return {
            dispose: () => {
              if (method !== void 0) {
                if (notificationHandlers.get(method)?.handler === handler) {
                  notificationHandlers.delete(method);
                }
              } else if (starNotificationHandler === type) {
                starNotificationHandler = void 0;
              }
            }
          };
        },
        onProgress: (_type, token, handler) => {
          if (progressHandlers.has(token)) {
            throw new Error(`Progress handler for token ${token} already registered`);
          }
          progressHandlers.set(token, handler);
          return {
            dispose: () => {
              if (progressHandlers.get(token) === handler) {
                progressHandlers.delete(token);
              }
            }
          };
        },
        sendProgress: (_type, token, value) => {
          return connection2.sendNotification(ProgressNotification.type, { token, value });
        },
        onUnhandledProgress: unhandledProgressEmitter.event,
        sendRequest: (type, ...args2) => {
          throwIfClosedOrDisposed();
          throwIfNotListening();
          function sendCancellation(connection3, id2) {
            const p = cancellationStrategy.sender.sendCancellation(connection3, id2);
            if (p === void 0) {
              logger.log(`Received no promise from cancellation strategy when cancelling id ${id2}`);
            } else {
              p.catch(() => {
                logger.log(`Sending cancellation messages for id ${id2} failed.`);
              });
            }
          }
          let method;
          let messageParams;
          let token = void 0;
          if (Is2.string(type)) {
            method = type;
            const first = args2[0];
            const last = args2[args2.length - 1];
            let paramStart = 0;
            let parameterStructures = messages_1.ParameterStructures.auto;
            if (messages_1.ParameterStructures.is(first)) {
              paramStart = 1;
              parameterStructures = first;
            }
            let paramEnd = args2.length;
            if (cancellation_1.CancellationToken.is(last)) {
              paramEnd = paramEnd - 1;
              token = last;
            }
            const numberOfParams = paramEnd - paramStart;
            switch (numberOfParams) {
              case 0:
                messageParams = void 0;
                break;
              case 1:
                messageParams = computeSingleParam(parameterStructures, args2[paramStart]);
                break;
              default:
                if (parameterStructures === messages_1.ParameterStructures.byName) {
                  throw new Error(`Received ${numberOfParams} parameters for 'by Name' request parameter structure.`);
                }
                messageParams = args2.slice(paramStart, paramEnd).map((value) => undefinedToNull(value));
                break;
            }
          } else {
            const params = args2;
            method = type.method;
            messageParams = computeMessageParams(type, params);
            const numberOfParams = type.numberOfParams;
            token = cancellation_1.CancellationToken.is(params[numberOfParams]) ? params[numberOfParams] : void 0;
          }
          const id = sequenceNumber++;
          let disposable;
          let tokenWasCancelled = false;
          if (token !== void 0) {
            if (token.isCancellationRequested) {
              tokenWasCancelled = true;
            } else {
              disposable = token.onCancellationRequested(() => {
                sendCancellation(connection2, id);
              });
            }
          }
          const requestMessage = {
            jsonrpc: version,
            id,
            method,
            params: messageParams
          };
          traceSendingRequest(requestMessage);
          if (typeof cancellationStrategy.sender.enableCancellation === "function") {
            cancellationStrategy.sender.enableCancellation(requestMessage);
          }
          return new Promise(async (resolve, reject) => {
            const resolveWithCleanup = (r) => {
              resolve(r);
              cancellationStrategy.sender.cleanup(id);
              disposable?.dispose();
            };
            const rejectWithCleanup = (r) => {
              reject(r);
              cancellationStrategy.sender.cleanup(id);
              disposable?.dispose();
            };
            const responsePromise = { method, timerStart: Date.now(), resolve: resolveWithCleanup, reject: rejectWithCleanup };
            try {
              responsePromises.set(id, responsePromise);
              await messageWriter.write(requestMessage);
              if (tokenWasCancelled) {
                sendCancellation(connection2, id);
              }
            } catch (error) {
              responsePromises.delete(id);
              responsePromise.reject(new messages_1.ResponseError(messages_1.ErrorCodes.MessageWriteError, error.message ? error.message : "Unknown reason"));
              logger.error(`Sending request failed.`);
              throw error;
            }
          });
        },
        onRequest: (type, handler) => {
          throwIfClosedOrDisposed();
          let method = null;
          if (StarRequestHandler.is(type)) {
            method = void 0;
            starRequestHandler = type;
          } else if (Is2.string(type)) {
            method = null;
            if (handler !== void 0) {
              method = type;
              requestHandlers.set(type, { handler, type: void 0 });
            }
          } else {
            if (handler !== void 0) {
              method = type.method;
              requestHandlers.set(type.method, { type, handler });
            }
          }
          return {
            dispose: () => {
              if (method === null) {
                return;
              }
              if (method !== void 0) {
                if (requestHandlers.get(method)?.handler === handler) {
                  requestHandlers.delete(method);
                }
              } else if (starRequestHandler === type) {
                starRequestHandler = void 0;
              }
            }
          };
        },
        hasPendingResponse: () => {
          return responsePromises.size > 0;
        },
        trace: async (_value, _tracer, sendNotificationOrTraceOptions) => {
          let _sendNotification = false;
          let _traceFormat = TraceFormat.Text;
          if (sendNotificationOrTraceOptions !== void 0) {
            if (Is2.boolean(sendNotificationOrTraceOptions)) {
              _sendNotification = sendNotificationOrTraceOptions;
            } else {
              _sendNotification = sendNotificationOrTraceOptions.sendNotification || false;
              _traceFormat = sendNotificationOrTraceOptions.traceFormat || TraceFormat.Text;
            }
          }
          trace = _value;
          traceFormat = _traceFormat;
          if (trace === Trace.Off) {
            tracer = void 0;
          } else {
            tracer = _tracer;
          }
          if (_sendNotification && !isClosed() && !isDisposed()) {
            await connection2.sendNotification(SetTraceNotification.type, { value: Trace.toString(_value) });
          }
        },
        onError: errorEmitter.event,
        onClose: closeEmitter.event,
        onUnhandledNotification: unhandledNotificationEmitter.event,
        onDispose: disposeEmitter.event,
        end: () => {
          messageWriter.end();
        },
        dispose: () => {
          if (isDisposed()) {
            return;
          }
          state = ConnectionState.Disposed;
          disposeEmitter.fire(void 0);
          const error = new messages_1.ResponseError(messages_1.ErrorCodes.PendingResponseRejected, "Pending response rejected since connection got disposed");
          for (const promise of responsePromises.values()) {
            promise.reject(error);
          }
          responsePromises = /* @__PURE__ */ new Map();
          requestTokens = /* @__PURE__ */ new Map();
          knownCanceledRequests = /* @__PURE__ */ new Set();
          messageQueue = new linkedMap_1.LinkedMap();
          if (Is2.func(messageWriter.dispose)) {
            messageWriter.dispose();
          }
          if (Is2.func(messageReader.dispose)) {
            messageReader.dispose();
          }
        },
        listen: () => {
          throwIfClosedOrDisposed();
          throwIfListening();
          state = ConnectionState.Listening;
          messageReader.listen(callback);
        },
        inspect: () => {
          (0, ral_1.default)().console.log("inspect");
        }
      };
      connection2.onNotification(LogTraceNotification.type, (params) => {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        const verbose = trace === Trace.Verbose || trace === Trace.Compact;
        tracer.log(params.message, verbose ? params.verbose : void 0);
      });
      connection2.onNotification(ProgressNotification.type, async (params) => {
        const handler = progressHandlers.get(params.token);
        if (handler) {
          await handler(params.value);
        } else {
          unhandledProgressEmitter.fire(params);
        }
      });
      return connection2;
    }
  }
});

// node_modules/vscode-jsonrpc/lib/common/api.js
var require_api = __commonJS2({
  "node_modules/vscode-jsonrpc/lib/common/api.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ProgressType = exports2.ProgressToken = exports2.createMessageConnection = exports2.NullLogger = exports2.ConnectionOptions = exports2.ConnectionStrategy = exports2.AbstractMessageBuffer = exports2.WriteableStreamMessageWriter = exports2.AbstractMessageWriter = exports2.MessageWriter = exports2.ReadableStreamMessageReader = exports2.AbstractMessageReader = exports2.MessageReader = exports2.SharedArrayReceiverStrategy = exports2.SharedArraySenderStrategy = exports2.CancellationToken = exports2.CancellationTokenSource = exports2.Emitter = exports2.Event = exports2.Disposable = exports2.LRUCache = exports2.Touch = exports2.LinkedMap = exports2.ParameterStructures = exports2.NotificationType9 = exports2.NotificationType8 = exports2.NotificationType7 = exports2.NotificationType6 = exports2.NotificationType5 = exports2.NotificationType4 = exports2.NotificationType3 = exports2.NotificationType2 = exports2.NotificationType1 = exports2.NotificationType0 = exports2.NotificationType = exports2.ErrorCodes = exports2.ResponseError = exports2.RequestType9 = exports2.RequestType8 = exports2.RequestType7 = exports2.RequestType6 = exports2.RequestType5 = exports2.RequestType4 = exports2.RequestType3 = exports2.RequestType2 = exports2.RequestType1 = exports2.RequestType0 = exports2.RequestType = exports2.Message = exports2.RAL = void 0;
    exports2.MessageStrategy = exports2.CancellationStrategy = exports2.CancellationSenderStrategy = exports2.RequestCancellationReceiverStrategy = exports2.IdCancellationReceiverStrategy = exports2.CancellationReceiverStrategy = exports2.ConnectionError = exports2.ConnectionErrors = exports2.LogTraceNotification = exports2.SetTraceNotification = exports2.TraceFormat = exports2.TraceValues = exports2.TraceValue = exports2.Trace = void 0;
    var messages_1 = require_messages();
    Object.defineProperty(exports2, "Message", { enumerable: true, get: function() {
      return messages_1.Message;
    } });
    Object.defineProperty(exports2, "RequestType", { enumerable: true, get: function() {
      return messages_1.RequestType;
    } });
    Object.defineProperty(exports2, "RequestType0", { enumerable: true, get: function() {
      return messages_1.RequestType0;
    } });
    Object.defineProperty(exports2, "RequestType1", { enumerable: true, get: function() {
      return messages_1.RequestType1;
    } });
    Object.defineProperty(exports2, "RequestType2", { enumerable: true, get: function() {
      return messages_1.RequestType2;
    } });
    Object.defineProperty(exports2, "RequestType3", { enumerable: true, get: function() {
      return messages_1.RequestType3;
    } });
    Object.defineProperty(exports2, "RequestType4", { enumerable: true, get: function() {
      return messages_1.RequestType4;
    } });
    Object.defineProperty(exports2, "RequestType5", { enumerable: true, get: function() {
      return messages_1.RequestType5;
    } });
    Object.defineProperty(exports2, "RequestType6", { enumerable: true, get: function() {
      return messages_1.RequestType6;
    } });
    Object.defineProperty(exports2, "RequestType7", { enumerable: true, get: function() {
      return messages_1.RequestType7;
    } });
    Object.defineProperty(exports2, "RequestType8", { enumerable: true, get: function() {
      return messages_1.RequestType8;
    } });
    Object.defineProperty(exports2, "RequestType9", { enumerable: true, get: function() {
      return messages_1.RequestType9;
    } });
    Object.defineProperty(exports2, "ResponseError", { enumerable: true, get: function() {
      return messages_1.ResponseError;
    } });
    Object.defineProperty(exports2, "ErrorCodes", { enumerable: true, get: function() {
      return messages_1.ErrorCodes;
    } });
    Object.defineProperty(exports2, "NotificationType", { enumerable: true, get: function() {
      return messages_1.NotificationType;
    } });
    Object.defineProperty(exports2, "NotificationType0", { enumerable: true, get: function() {
      return messages_1.NotificationType0;
    } });
    Object.defineProperty(exports2, "NotificationType1", { enumerable: true, get: function() {
      return messages_1.NotificationType1;
    } });
    Object.defineProperty(exports2, "NotificationType2", { enumerable: true, get: function() {
      return messages_1.NotificationType2;
    } });
    Object.defineProperty(exports2, "NotificationType3", { enumerable: true, get: function() {
      return messages_1.NotificationType3;
    } });
    Object.defineProperty(exports2, "NotificationType4", { enumerable: true, get: function() {
      return messages_1.NotificationType4;
    } });
    Object.defineProperty(exports2, "NotificationType5", { enumerable: true, get: function() {
      return messages_1.NotificationType5;
    } });
    Object.defineProperty(exports2, "NotificationType6", { enumerable: true, get: function() {
      return messages_1.NotificationType6;
    } });
    Object.defineProperty(exports2, "NotificationType7", { enumerable: true, get: function() {
      return messages_1.NotificationType7;
    } });
    Object.defineProperty(exports2, "NotificationType8", { enumerable: true, get: function() {
      return messages_1.NotificationType8;
    } });
    Object.defineProperty(exports2, "NotificationType9", { enumerable: true, get: function() {
      return messages_1.NotificationType9;
    } });
    Object.defineProperty(exports2, "ParameterStructures", { enumerable: true, get: function() {
      return messages_1.ParameterStructures;
    } });
    var linkedMap_1 = require_linkedMap();
    Object.defineProperty(exports2, "LinkedMap", { enumerable: true, get: function() {
      return linkedMap_1.LinkedMap;
    } });
    Object.defineProperty(exports2, "LRUCache", { enumerable: true, get: function() {
      return linkedMap_1.LRUCache;
    } });
    Object.defineProperty(exports2, "Touch", { enumerable: true, get: function() {
      return linkedMap_1.Touch;
    } });
    var disposable_1 = require_disposable();
    Object.defineProperty(exports2, "Disposable", { enumerable: true, get: function() {
      return disposable_1.Disposable;
    } });
    var events_1 = require_events();
    Object.defineProperty(exports2, "Event", { enumerable: true, get: function() {
      return events_1.Event;
    } });
    Object.defineProperty(exports2, "Emitter", { enumerable: true, get: function() {
      return events_1.Emitter;
    } });
    var cancellation_1 = require_cancellation();
    Object.defineProperty(exports2, "CancellationTokenSource", { enumerable: true, get: function() {
      return cancellation_1.CancellationTokenSource;
    } });
    Object.defineProperty(exports2, "CancellationToken", { enumerable: true, get: function() {
      return cancellation_1.CancellationToken;
    } });
    var sharedArrayCancellation_1 = require_sharedArrayCancellation();
    Object.defineProperty(exports2, "SharedArraySenderStrategy", { enumerable: true, get: function() {
      return sharedArrayCancellation_1.SharedArraySenderStrategy;
    } });
    Object.defineProperty(exports2, "SharedArrayReceiverStrategy", { enumerable: true, get: function() {
      return sharedArrayCancellation_1.SharedArrayReceiverStrategy;
    } });
    var messageReader_1 = require_messageReader();
    Object.defineProperty(exports2, "MessageReader", { enumerable: true, get: function() {
      return messageReader_1.MessageReader;
    } });
    Object.defineProperty(exports2, "AbstractMessageReader", { enumerable: true, get: function() {
      return messageReader_1.AbstractMessageReader;
    } });
    Object.defineProperty(exports2, "ReadableStreamMessageReader", { enumerable: true, get: function() {
      return messageReader_1.ReadableStreamMessageReader;
    } });
    var messageWriter_1 = require_messageWriter();
    Object.defineProperty(exports2, "MessageWriter", { enumerable: true, get: function() {
      return messageWriter_1.MessageWriter;
    } });
    Object.defineProperty(exports2, "AbstractMessageWriter", { enumerable: true, get: function() {
      return messageWriter_1.AbstractMessageWriter;
    } });
    Object.defineProperty(exports2, "WriteableStreamMessageWriter", { enumerable: true, get: function() {
      return messageWriter_1.WriteableStreamMessageWriter;
    } });
    var messageBuffer_1 = require_messageBuffer();
    Object.defineProperty(exports2, "AbstractMessageBuffer", { enumerable: true, get: function() {
      return messageBuffer_1.AbstractMessageBuffer;
    } });
    var connection_1 = require_connection();
    Object.defineProperty(exports2, "ConnectionStrategy", { enumerable: true, get: function() {
      return connection_1.ConnectionStrategy;
    } });
    Object.defineProperty(exports2, "ConnectionOptions", { enumerable: true, get: function() {
      return connection_1.ConnectionOptions;
    } });
    Object.defineProperty(exports2, "NullLogger", { enumerable: true, get: function() {
      return connection_1.NullLogger;
    } });
    Object.defineProperty(exports2, "createMessageConnection", { enumerable: true, get: function() {
      return connection_1.createMessageConnection;
    } });
    Object.defineProperty(exports2, "ProgressToken", { enumerable: true, get: function() {
      return connection_1.ProgressToken;
    } });
    Object.defineProperty(exports2, "ProgressType", { enumerable: true, get: function() {
      return connection_1.ProgressType;
    } });
    Object.defineProperty(exports2, "Trace", { enumerable: true, get: function() {
      return connection_1.Trace;
    } });
    Object.defineProperty(exports2, "TraceValue", { enumerable: true, get: function() {
      return connection_1.TraceValue;
    } });
    Object.defineProperty(exports2, "TraceFormat", { enumerable: true, get: function() {
      return connection_1.TraceFormat;
    } });
    Object.defineProperty(exports2, "SetTraceNotification", { enumerable: true, get: function() {
      return connection_1.SetTraceNotification;
    } });
    Object.defineProperty(exports2, "LogTraceNotification", { enumerable: true, get: function() {
      return connection_1.LogTraceNotification;
    } });
    Object.defineProperty(exports2, "ConnectionErrors", { enumerable: true, get: function() {
      return connection_1.ConnectionErrors;
    } });
    Object.defineProperty(exports2, "ConnectionError", { enumerable: true, get: function() {
      return connection_1.ConnectionError;
    } });
    Object.defineProperty(exports2, "CancellationReceiverStrategy", { enumerable: true, get: function() {
      return connection_1.CancellationReceiverStrategy;
    } });
    Object.defineProperty(exports2, "IdCancellationReceiverStrategy", { enumerable: true, get: function() {
      return connection_1.IdCancellationReceiverStrategy;
    } });
    Object.defineProperty(exports2, "RequestCancellationReceiverStrategy", { enumerable: true, get: function() {
      return connection_1.RequestCancellationReceiverStrategy;
    } });
    Object.defineProperty(exports2, "CancellationSenderStrategy", { enumerable: true, get: function() {
      return connection_1.CancellationSenderStrategy;
    } });
    Object.defineProperty(exports2, "CancellationStrategy", { enumerable: true, get: function() {
      return connection_1.CancellationStrategy;
    } });
    Object.defineProperty(exports2, "MessageStrategy", { enumerable: true, get: function() {
      return connection_1.MessageStrategy;
    } });
    Object.defineProperty(exports2, "TraceValues", { enumerable: true, get: function() {
      return connection_1.TraceValues;
    } });
    var ral_1 = __importDefault(require_ral());
    exports2.RAL = ral_1.default;
  }
});

// node_modules/vscode-languageserver-types/lib/esm/main.js
var main_exports = {};
__export2(main_exports, {
  AnnotatedTextEdit: () => AnnotatedTextEdit,
  ApplyKind: () => ApplyKind,
  ChangeAnnotation: () => ChangeAnnotation,
  ChangeAnnotationIdentifier: () => ChangeAnnotationIdentifier,
  CodeAction: () => CodeAction,
  CodeActionContext: () => CodeActionContext,
  CodeActionKind: () => CodeActionKind,
  CodeActionTag: () => CodeActionTag,
  CodeActionTriggerKind: () => CodeActionTriggerKind,
  CodeDescription: () => CodeDescription,
  CodeLens: () => CodeLens,
  Color: () => Color,
  ColorInformation: () => ColorInformation,
  ColorPresentation: () => ColorPresentation,
  Command: () => Command,
  CompletionItem: () => CompletionItem,
  CompletionItemKind: () => CompletionItemKind,
  CompletionItemLabelDetails: () => CompletionItemLabelDetails,
  CompletionItemTag: () => CompletionItemTag,
  CompletionList: () => CompletionList,
  CreateFile: () => CreateFile,
  DeleteFile: () => DeleteFile,
  Diagnostic: () => Diagnostic,
  DiagnosticRelatedInformation: () => DiagnosticRelatedInformation,
  DiagnosticSeverity: () => DiagnosticSeverity,
  DiagnosticTag: () => DiagnosticTag,
  DocumentHighlight: () => DocumentHighlight,
  DocumentHighlightKind: () => DocumentHighlightKind,
  DocumentLink: () => DocumentLink,
  DocumentSymbol: () => DocumentSymbol,
  DocumentUri: () => DocumentUri,
  EOL: () => EOL,
  FoldingRange: () => FoldingRange,
  FoldingRangeKind: () => FoldingRangeKind,
  FormattingOptions: () => FormattingOptions,
  Hover: () => Hover,
  InlayHint: () => InlayHint,
  InlayHintKind: () => InlayHintKind,
  InlayHintLabelPart: () => InlayHintLabelPart,
  InlineCompletionContext: () => InlineCompletionContext,
  InlineCompletionItem: () => InlineCompletionItem,
  InlineCompletionList: () => InlineCompletionList,
  InlineCompletionTriggerKind: () => InlineCompletionTriggerKind,
  InlineValueContext: () => InlineValueContext,
  InlineValueEvaluatableExpression: () => InlineValueEvaluatableExpression,
  InlineValueText: () => InlineValueText,
  InlineValueVariableLookup: () => InlineValueVariableLookup,
  InsertReplaceEdit: () => InsertReplaceEdit,
  InsertTextFormat: () => InsertTextFormat,
  InsertTextMode: () => InsertTextMode,
  LanguageKind: () => LanguageKind,
  Location: () => Location,
  LocationLink: () => LocationLink,
  MarkedString: () => MarkedString,
  MarkupContent: () => MarkupContent,
  MarkupKind: () => MarkupKind,
  OptionalVersionedTextDocumentIdentifier: () => OptionalVersionedTextDocumentIdentifier,
  ParameterInformation: () => ParameterInformation,
  Position: () => Position,
  Range: () => Range,
  RenameFile: () => RenameFile,
  SelectedCompletionInfo: () => SelectedCompletionInfo,
  SelectionRange: () => SelectionRange,
  SemanticTokenModifiers: () => SemanticTokenModifiers,
  SemanticTokenTypes: () => SemanticTokenTypes,
  SemanticTokens: () => SemanticTokens,
  SignatureInformation: () => SignatureInformation,
  SnippetTextEdit: () => SnippetTextEdit,
  StringValue: () => StringValue,
  SymbolInformation: () => SymbolInformation,
  SymbolKind: () => SymbolKind,
  SymbolTag: () => SymbolTag,
  TextDocument: () => TextDocument,
  TextDocumentEdit: () => TextDocumentEdit,
  TextDocumentIdentifier: () => TextDocumentIdentifier,
  TextDocumentItem: () => TextDocumentItem,
  TextEdit: () => TextEdit,
  URI: () => URI,
  VersionedTextDocumentIdentifier: () => VersionedTextDocumentIdentifier,
  WorkspaceChange: () => WorkspaceChange,
  WorkspaceEdit: () => WorkspaceEdit,
  WorkspaceFolder: () => WorkspaceFolder,
  WorkspaceSymbol: () => WorkspaceSymbol,
  integer: () => integer,
  uinteger: () => uinteger
});
var DocumentUri, URI, integer, uinteger, Position, Range, Location, LocationLink, Color, ColorInformation, ColorPresentation, FoldingRangeKind, FoldingRange, DiagnosticRelatedInformation, DiagnosticSeverity, DiagnosticTag, CodeDescription, Diagnostic, Command, TextEdit, ChangeAnnotation, ChangeAnnotationIdentifier, AnnotatedTextEdit, TextDocumentEdit, CreateFile, RenameFile, DeleteFile, WorkspaceEdit, TextEditChangeImpl, SnippetTextEdit, ChangeAnnotations, WorkspaceChange, TextDocumentIdentifier, VersionedTextDocumentIdentifier, OptionalVersionedTextDocumentIdentifier, LanguageKind, TextDocumentItem, MarkupKind, MarkupContent, CompletionItemKind, InsertTextFormat, CompletionItemTag, InsertReplaceEdit, InsertTextMode, ApplyKind, CompletionItemLabelDetails, CompletionItem, CompletionList, MarkedString, Hover, ParameterInformation, SignatureInformation, DocumentHighlightKind, DocumentHighlight, SymbolKind, SymbolTag, SymbolInformation, WorkspaceSymbol, DocumentSymbol, CodeActionKind, CodeActionTriggerKind, CodeActionContext, CodeActionTag, CodeAction, CodeLens, FormattingOptions, DocumentLink, SelectionRange, SemanticTokenTypes, SemanticTokenModifiers, SemanticTokens, InlineValueText, InlineValueVariableLookup, InlineValueEvaluatableExpression, InlineValueContext, InlayHintKind, InlayHintLabelPart, InlayHint, StringValue, InlineCompletionItem, InlineCompletionList, InlineCompletionTriggerKind, SelectedCompletionInfo, InlineCompletionContext, WorkspaceFolder, EOL, TextDocument, FullTextDocument, Is;
var init_main = __esm({
  "node_modules/vscode-languageserver-types/lib/esm/main.js"() {
    "use strict";
    (function(DocumentUri2) {
      function is(value) {
        return typeof value === "string";
      }
      DocumentUri2.is = is;
    })(DocumentUri || (DocumentUri = {}));
    (function(URI2) {
      function is(value) {
        return typeof value === "string";
      }
      URI2.is = is;
    })(URI || (URI = {}));
    (function(integer2) {
      integer2.MIN_VALUE = -2147483648;
      integer2.MAX_VALUE = 2147483647;
      function is(value) {
        return typeof value === "number" && integer2.MIN_VALUE <= value && value <= integer2.MAX_VALUE;
      }
      integer2.is = is;
    })(integer || (integer = {}));
    (function(uinteger2) {
      uinteger2.MIN_VALUE = 0;
      uinteger2.MAX_VALUE = 2147483647;
      function is(value) {
        return typeof value === "number" && uinteger2.MIN_VALUE <= value && value <= uinteger2.MAX_VALUE;
      }
      uinteger2.is = is;
    })(uinteger || (uinteger = {}));
    (function(Position2) {
      function create(line, character) {
        if (line === Number.MAX_VALUE) {
          line = uinteger.MAX_VALUE;
        }
        if (character === Number.MAX_VALUE) {
          character = uinteger.MAX_VALUE;
        }
        return { line, character };
      }
      Position2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Is.uinteger(candidate.line) && Is.uinteger(candidate.character);
      }
      Position2.is = is;
    })(Position || (Position = {}));
    (function(Range2) {
      function create(one, two, three, four) {
        if (Is.uinteger(one) && Is.uinteger(two) && Is.uinteger(three) && Is.uinteger(four)) {
          return { start: Position.create(one, two), end: Position.create(three, four) };
        } else if (Position.is(one) && Position.is(two)) {
          return { start: one, end: two };
        } else {
          throw new Error(`Range#create called with invalid arguments[${one}, ${two}, ${three}, ${four}]`);
        }
      }
      Range2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Position.is(candidate.start) && Position.is(candidate.end);
      }
      Range2.is = is;
    })(Range || (Range = {}));
    (function(Location2) {
      function create(uri, range) {
        return { uri, range };
      }
      Location2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Range.is(candidate.range) && (Is.string(candidate.uri) || Is.undefined(candidate.uri));
      }
      Location2.is = is;
    })(Location || (Location = {}));
    (function(LocationLink2) {
      function create(targetUri, targetRange, targetSelectionRange, originSelectionRange) {
        return { targetUri, targetRange, targetSelectionRange, originSelectionRange };
      }
      LocationLink2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Range.is(candidate.targetRange) && Is.string(candidate.targetUri) && Range.is(candidate.targetSelectionRange) && (Range.is(candidate.originSelectionRange) || Is.undefined(candidate.originSelectionRange));
      }
      LocationLink2.is = is;
    })(LocationLink || (LocationLink = {}));
    (function(Color2) {
      function create(red, green, blue, alpha) {
        return {
          red,
          green,
          blue,
          alpha
        };
      }
      Color2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Is.numberRange(candidate.red, 0, 1) && Is.numberRange(candidate.green, 0, 1) && Is.numberRange(candidate.blue, 0, 1) && Is.numberRange(candidate.alpha, 0, 1);
      }
      Color2.is = is;
    })(Color || (Color = {}));
    (function(ColorInformation2) {
      function create(range, color) {
        return {
          range,
          color
        };
      }
      ColorInformation2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Range.is(candidate.range) && Color.is(candidate.color);
      }
      ColorInformation2.is = is;
    })(ColorInformation || (ColorInformation = {}));
    (function(ColorPresentation2) {
      function create(label, textEdit, additionalTextEdits) {
        return {
          label,
          textEdit,
          additionalTextEdits
        };
      }
      ColorPresentation2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Is.string(candidate.label) && (Is.undefined(candidate.textEdit) || TextEdit.is(candidate)) && (Is.undefined(candidate.additionalTextEdits) || Is.typedArray(candidate.additionalTextEdits, TextEdit.is));
      }
      ColorPresentation2.is = is;
    })(ColorPresentation || (ColorPresentation = {}));
    (function(FoldingRangeKind2) {
      FoldingRangeKind2.Comment = "comment";
      FoldingRangeKind2.Imports = "imports";
      FoldingRangeKind2.Region = "region";
    })(FoldingRangeKind || (FoldingRangeKind = {}));
    (function(FoldingRange2) {
      function create(startLine, endLine, startCharacter, endCharacter, kind, collapsedText) {
        const result = {
          startLine,
          endLine
        };
        if (Is.defined(startCharacter)) {
          result.startCharacter = startCharacter;
        }
        if (Is.defined(endCharacter)) {
          result.endCharacter = endCharacter;
        }
        if (Is.defined(kind)) {
          result.kind = kind;
        }
        if (Is.defined(collapsedText)) {
          result.collapsedText = collapsedText;
        }
        return result;
      }
      FoldingRange2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Is.uinteger(candidate.startLine) && Is.uinteger(candidate.startLine) && (Is.undefined(candidate.startCharacter) || Is.uinteger(candidate.startCharacter)) && (Is.undefined(candidate.endCharacter) || Is.uinteger(candidate.endCharacter)) && (Is.undefined(candidate.kind) || Is.string(candidate.kind));
      }
      FoldingRange2.is = is;
    })(FoldingRange || (FoldingRange = {}));
    (function(DiagnosticRelatedInformation2) {
      function create(location, message) {
        return {
          location,
          message
        };
      }
      DiagnosticRelatedInformation2.create = create;
      function is(value) {
        const candidate = value;
        return Is.defined(candidate) && Location.is(candidate.location) && Is.string(candidate.message);
      }
      DiagnosticRelatedInformation2.is = is;
    })(DiagnosticRelatedInformation || (DiagnosticRelatedInformation = {}));
    (function(DiagnosticSeverity2) {
      DiagnosticSeverity2.Error = 1;
      DiagnosticSeverity2.Warning = 2;
      DiagnosticSeverity2.Information = 3;
      DiagnosticSeverity2.Hint = 4;
    })(DiagnosticSeverity || (DiagnosticSeverity = {}));
    (function(DiagnosticTag2) {
      DiagnosticTag2.Unnecessary = 1;
      DiagnosticTag2.Deprecated = 2;
    })(DiagnosticTag || (DiagnosticTag = {}));
    (function(CodeDescription2) {
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Is.string(candidate.href);
      }
      CodeDescription2.is = is;
    })(CodeDescription || (CodeDescription = {}));
    (function(Diagnostic2) {
      function create(range, message, severity, code, source, relatedInformation) {
        const result = { range, message };
        if (Is.defined(severity)) {
          result.severity = severity;
        }
        if (Is.defined(code)) {
          result.code = code;
        }
        if (Is.defined(source)) {
          result.source = source;
        }
        if (Is.defined(relatedInformation)) {
          result.relatedInformation = relatedInformation;
        }
        return result;
      }
      Diagnostic2.create = create;
      function is(value) {
        var _a;
        const candidate = value;
        return Is.defined(candidate) && Range.is(candidate.range) && (Is.string(candidate.message) || MarkupContent.is(candidate.message)) && (Is.number(candidate.severity) || Is.undefined(candidate.severity)) && (Is.integer(candidate.code) || Is.string(candidate.code) || Is.undefined(candidate.code)) && (Is.undefined(candidate.codeDescription) || Is.string((_a = candidate.codeDescription) === null || _a === void 0 ? void 0 : _a.href)) && (Is.string(candidate.source) || Is.undefined(candidate.source)) && (Is.undefined(candidate.relatedInformation) || Is.typedArray(candidate.relatedInformation, DiagnosticRelatedInformation.is));
      }
      Diagnostic2.is = is;
      function is3_17(value) {
        return Is.string(value.message);
      }
      Diagnostic2.is3_17 = is3_17;
      function getMessageString(diagnostic) {
        if (Is.string(diagnostic.message)) {
          return diagnostic.message;
        } else if (MarkupContent.is(diagnostic.message)) {
          return diagnostic.message.value;
        } else {
          throw new Error(`Unknown message type ${typeof diagnostic.message}`);
        }
      }
      Diagnostic2.getMessageString = getMessageString;
    })(Diagnostic || (Diagnostic = {}));
    (function(Command2) {
      function create(title, command, ...args2) {
        const result = { title, command };
        if (Is.defined(args2) && args2.length > 0) {
          result.arguments = args2;
        }
        return result;
      }
      Command2.create = create;
      function is(value) {
        const candidate = value;
        return Is.defined(candidate) && Is.string(candidate.title) && (candidate.tooltip === void 0 || Is.string(candidate.tooltip)) && Is.string(candidate.command);
      }
      Command2.is = is;
    })(Command || (Command = {}));
    (function(TextEdit2) {
      function replace(range, newText) {
        return { range, newText };
      }
      TextEdit2.replace = replace;
      function insert(position, newText) {
        return { range: { start: position, end: position }, newText };
      }
      TextEdit2.insert = insert;
      function del(range) {
        return { range, newText: "" };
      }
      TextEdit2.del = del;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Is.string(candidate.newText) && Range.is(candidate.range);
      }
      TextEdit2.is = is;
    })(TextEdit || (TextEdit = {}));
    (function(ChangeAnnotation2) {
      function create(label, needsConfirmation, description) {
        const result = { label };
        if (needsConfirmation !== void 0) {
          result.needsConfirmation = needsConfirmation;
        }
        if (description !== void 0) {
          result.description = description;
        }
        return result;
      }
      ChangeAnnotation2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Is.string(candidate.label) && (Is.boolean(candidate.needsConfirmation) || candidate.needsConfirmation === void 0) && (Is.string(candidate.description) || candidate.description === void 0);
      }
      ChangeAnnotation2.is = is;
    })(ChangeAnnotation || (ChangeAnnotation = {}));
    (function(ChangeAnnotationIdentifier2) {
      function is(value) {
        const candidate = value;
        return Is.string(candidate);
      }
      ChangeAnnotationIdentifier2.is = is;
    })(ChangeAnnotationIdentifier || (ChangeAnnotationIdentifier = {}));
    (function(AnnotatedTextEdit2) {
      function replace(range, newText, annotation) {
        return { range, newText, annotationId: annotation };
      }
      AnnotatedTextEdit2.replace = replace;
      function insert(position, newText, annotation) {
        return { range: { start: position, end: position }, newText, annotationId: annotation };
      }
      AnnotatedTextEdit2.insert = insert;
      function del(range, annotation) {
        return { range, newText: "", annotationId: annotation };
      }
      AnnotatedTextEdit2.del = del;
      function is(value) {
        const candidate = value;
        return TextEdit.is(candidate) && (ChangeAnnotation.is(candidate.annotationId) || ChangeAnnotationIdentifier.is(candidate.annotationId));
      }
      AnnotatedTextEdit2.is = is;
    })(AnnotatedTextEdit || (AnnotatedTextEdit = {}));
    (function(TextDocumentEdit2) {
      function create(textDocument, edits) {
        return { textDocument, edits };
      }
      TextDocumentEdit2.create = create;
      function is(value) {
        const candidate = value;
        return Is.defined(candidate) && OptionalVersionedTextDocumentIdentifier.is(candidate.textDocument) && Array.isArray(candidate.edits);
      }
      TextDocumentEdit2.is = is;
    })(TextDocumentEdit || (TextDocumentEdit = {}));
    (function(CreateFile2) {
      function create(uri, options, annotation) {
        const result = {
          kind: "create",
          uri
        };
        if (options !== void 0 && (options.overwrite !== void 0 || options.ignoreIfExists !== void 0)) {
          result.options = options;
        }
        if (annotation !== void 0) {
          result.annotationId = annotation;
        }
        return result;
      }
      CreateFile2.create = create;
      function is(value) {
        const candidate = value;
        return candidate && candidate.kind === "create" && Is.string(candidate.uri) && (candidate.options === void 0 || (candidate.options.overwrite === void 0 || Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === void 0 || Is.boolean(candidate.options.ignoreIfExists))) && (candidate.annotationId === void 0 || ChangeAnnotationIdentifier.is(candidate.annotationId));
      }
      CreateFile2.is = is;
    })(CreateFile || (CreateFile = {}));
    (function(RenameFile2) {
      function create(oldUri, newUri, options, annotation) {
        const result = {
          kind: "rename",
          oldUri,
          newUri
        };
        if (options !== void 0 && (options.overwrite !== void 0 || options.ignoreIfExists !== void 0)) {
          result.options = options;
        }
        if (annotation !== void 0) {
          result.annotationId = annotation;
        }
        return result;
      }
      RenameFile2.create = create;
      function is(value) {
        const candidate = value;
        return candidate && candidate.kind === "rename" && Is.string(candidate.oldUri) && Is.string(candidate.newUri) && (candidate.options === void 0 || (candidate.options.overwrite === void 0 || Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === void 0 || Is.boolean(candidate.options.ignoreIfExists))) && (candidate.annotationId === void 0 || ChangeAnnotationIdentifier.is(candidate.annotationId));
      }
      RenameFile2.is = is;
    })(RenameFile || (RenameFile = {}));
    (function(DeleteFile2) {
      function create(uri, options, annotation) {
        const result = {
          kind: "delete",
          uri
        };
        if (options !== void 0 && (options.recursive !== void 0 || options.ignoreIfNotExists !== void 0)) {
          result.options = options;
        }
        if (annotation !== void 0) {
          result.annotationId = annotation;
        }
        return result;
      }
      DeleteFile2.create = create;
      function is(value) {
        const candidate = value;
        return candidate && candidate.kind === "delete" && Is.string(candidate.uri) && (candidate.options === void 0 || (candidate.options.recursive === void 0 || Is.boolean(candidate.options.recursive)) && (candidate.options.ignoreIfNotExists === void 0 || Is.boolean(candidate.options.ignoreIfNotExists))) && (candidate.annotationId === void 0 || ChangeAnnotationIdentifier.is(candidate.annotationId));
      }
      DeleteFile2.is = is;
    })(DeleteFile || (DeleteFile = {}));
    (function(WorkspaceEdit2) {
      function is(value) {
        const candidate = value;
        return candidate && (candidate.changes !== void 0 || candidate.documentChanges !== void 0) && (candidate.documentChanges === void 0 || candidate.documentChanges.every((change) => {
          if (Is.string(change.kind)) {
            return CreateFile.is(change) || RenameFile.is(change) || DeleteFile.is(change);
          } else {
            return TextDocumentEdit.is(change);
          }
        }));
      }
      WorkspaceEdit2.is = is;
    })(WorkspaceEdit || (WorkspaceEdit = {}));
    TextEditChangeImpl = class {
      constructor(edits, changeAnnotations) {
        this.edits = edits;
        this.changeAnnotations = changeAnnotations;
      }
      insert(position, newText, annotation) {
        let edit;
        let id;
        if (annotation === void 0) {
          edit = TextEdit.insert(position, newText);
        } else if (ChangeAnnotationIdentifier.is(annotation)) {
          id = annotation;
          edit = AnnotatedTextEdit.insert(position, newText, annotation);
        } else {
          this.assertChangeAnnotations(this.changeAnnotations);
          id = this.changeAnnotations.manage(annotation);
          edit = AnnotatedTextEdit.insert(position, newText, id);
        }
        this.edits.push(edit);
        if (id !== void 0) {
          return id;
        }
      }
      replace(range, newText, annotation) {
        let edit;
        let id;
        if (annotation === void 0) {
          edit = TextEdit.replace(range, newText);
        } else if (ChangeAnnotationIdentifier.is(annotation)) {
          id = annotation;
          edit = AnnotatedTextEdit.replace(range, newText, annotation);
        } else {
          this.assertChangeAnnotations(this.changeAnnotations);
          id = this.changeAnnotations.manage(annotation);
          edit = AnnotatedTextEdit.replace(range, newText, id);
        }
        this.edits.push(edit);
        if (id !== void 0) {
          return id;
        }
      }
      delete(range, annotation) {
        let edit;
        let id;
        if (annotation === void 0) {
          edit = TextEdit.del(range);
        } else if (ChangeAnnotationIdentifier.is(annotation)) {
          id = annotation;
          edit = AnnotatedTextEdit.del(range, annotation);
        } else {
          this.assertChangeAnnotations(this.changeAnnotations);
          id = this.changeAnnotations.manage(annotation);
          edit = AnnotatedTextEdit.del(range, id);
        }
        this.edits.push(edit);
        if (id !== void 0) {
          return id;
        }
      }
      add(edit) {
        this.edits.push(edit);
      }
      all() {
        return this.edits;
      }
      clear() {
        this.edits.splice(0, this.edits.length);
      }
      assertChangeAnnotations(value) {
        if (value === void 0) {
          throw new Error(`Text edit change is not configured to manage change annotations.`);
        }
      }
    };
    (function(SnippetTextEdit2) {
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Range.is(candidate.range) && StringValue.isSnippet(candidate.snippet) && (candidate.annotationId === void 0 || (ChangeAnnotation.is(candidate.annotationId) || ChangeAnnotationIdentifier.is(candidate.annotationId)));
      }
      SnippetTextEdit2.is = is;
    })(SnippetTextEdit || (SnippetTextEdit = {}));
    ChangeAnnotations = class {
      constructor(annotations) {
        this._annotations = annotations === void 0 ? /* @__PURE__ */ Object.create(null) : annotations;
        this._counter = 0;
        this._size = 0;
      }
      all() {
        return this._annotations;
      }
      get size() {
        return this._size;
      }
      manage(idOrAnnotation, annotation) {
        let id;
        if (ChangeAnnotationIdentifier.is(idOrAnnotation)) {
          id = idOrAnnotation;
        } else {
          id = this.nextId();
          annotation = idOrAnnotation;
        }
        if (this._annotations[id] !== void 0) {
          throw new Error(`Id ${id} is already in use.`);
        }
        if (annotation === void 0) {
          throw new Error(`No annotation provided for id ${id}`);
        }
        this._annotations[id] = annotation;
        this._size++;
        return id;
      }
      nextId() {
        this._counter++;
        return this._counter.toString();
      }
    };
    WorkspaceChange = class {
      constructor(workspaceEdit) {
        this._textEditChanges = /* @__PURE__ */ Object.create(null);
        if (workspaceEdit !== void 0) {
          this._workspaceEdit = workspaceEdit;
          if (workspaceEdit.documentChanges) {
            this._changeAnnotations = new ChangeAnnotations(workspaceEdit.changeAnnotations);
            workspaceEdit.changeAnnotations = this._changeAnnotations.all();
            workspaceEdit.documentChanges.forEach((change) => {
              if (TextDocumentEdit.is(change)) {
                const textEditChange = new TextEditChangeImpl(change.edits, this._changeAnnotations);
                this._textEditChanges[change.textDocument.uri] = textEditChange;
              }
            });
          } else if (workspaceEdit.changes) {
            Object.keys(workspaceEdit.changes).forEach((key) => {
              const textEditChange = new TextEditChangeImpl(workspaceEdit.changes[key]);
              this._textEditChanges[key] = textEditChange;
            });
          }
        } else {
          this._workspaceEdit = {};
        }
      }
      /**
       * Returns the underlying {@link WorkspaceEdit} literal
       * use to be returned from a workspace edit operation like rename.
       */
      get edit() {
        this.initDocumentChanges();
        if (this._changeAnnotations !== void 0) {
          if (this._changeAnnotations.size === 0) {
            this._workspaceEdit.changeAnnotations = void 0;
          } else {
            this._workspaceEdit.changeAnnotations = this._changeAnnotations.all();
          }
        }
        return this._workspaceEdit;
      }
      getTextEditChange(key) {
        if (OptionalVersionedTextDocumentIdentifier.is(key)) {
          this.initDocumentChanges();
          if (this._workspaceEdit.documentChanges === void 0) {
            throw new Error("Workspace edit is not configured for document changes.");
          }
          const textDocument = { uri: key.uri, version: key.version };
          let result = this._textEditChanges[textDocument.uri];
          if (!result) {
            const edits = [];
            const textDocumentEdit = {
              textDocument,
              edits
            };
            this._workspaceEdit.documentChanges.push(textDocumentEdit);
            result = new TextEditChangeImpl(edits, this._changeAnnotations);
            this._textEditChanges[textDocument.uri] = result;
          }
          return result;
        } else {
          this.initChanges();
          if (this._workspaceEdit.changes === void 0) {
            throw new Error("Workspace edit is not configured for normal text edit changes.");
          }
          let result = this._textEditChanges[key];
          if (!result) {
            const edits = [];
            this._workspaceEdit.changes[key] = edits;
            result = new TextEditChangeImpl(edits);
            this._textEditChanges[key] = result;
          }
          return result;
        }
      }
      initDocumentChanges() {
        if (this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0) {
          this._changeAnnotations = new ChangeAnnotations();
          this._workspaceEdit.documentChanges = [];
          this._workspaceEdit.changeAnnotations = this._changeAnnotations.all();
        }
      }
      initChanges() {
        if (this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0) {
          this._workspaceEdit.changes = /* @__PURE__ */ Object.create(null);
        }
      }
      createFile(uri, optionsOrAnnotation, options) {
        this.initDocumentChanges();
        if (this._workspaceEdit.documentChanges === void 0) {
          throw new Error("Workspace edit is not configured for document changes.");
        }
        let annotation;
        if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) {
          annotation = optionsOrAnnotation;
        } else {
          options = optionsOrAnnotation;
        }
        let operation;
        let id;
        if (annotation === void 0) {
          operation = CreateFile.create(uri, options);
        } else {
          id = ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
          operation = CreateFile.create(uri, options, id);
        }
        this._workspaceEdit.documentChanges.push(operation);
        if (id !== void 0) {
          return id;
        }
      }
      renameFile(oldUri, newUri, optionsOrAnnotation, options) {
        this.initDocumentChanges();
        if (this._workspaceEdit.documentChanges === void 0) {
          throw new Error("Workspace edit is not configured for document changes.");
        }
        let annotation;
        if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) {
          annotation = optionsOrAnnotation;
        } else {
          options = optionsOrAnnotation;
        }
        let operation;
        let id;
        if (annotation === void 0) {
          operation = RenameFile.create(oldUri, newUri, options);
        } else {
          id = ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
          operation = RenameFile.create(oldUri, newUri, options, id);
        }
        this._workspaceEdit.documentChanges.push(operation);
        if (id !== void 0) {
          return id;
        }
      }
      deleteFile(uri, optionsOrAnnotation, options) {
        this.initDocumentChanges();
        if (this._workspaceEdit.documentChanges === void 0) {
          throw new Error("Workspace edit is not configured for document changes.");
        }
        let annotation;
        if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) {
          annotation = optionsOrAnnotation;
        } else {
          options = optionsOrAnnotation;
        }
        let operation;
        let id;
        if (annotation === void 0) {
          operation = DeleteFile.create(uri, options);
        } else {
          id = ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
          operation = DeleteFile.create(uri, options, id);
        }
        this._workspaceEdit.documentChanges.push(operation);
        if (id !== void 0) {
          return id;
        }
      }
    };
    (function(TextDocumentIdentifier2) {
      function create(uri) {
        return { uri };
      }
      TextDocumentIdentifier2.create = create;
      function is(value) {
        const candidate = value;
        return Is.defined(candidate) && Is.string(candidate.uri);
      }
      TextDocumentIdentifier2.is = is;
    })(TextDocumentIdentifier || (TextDocumentIdentifier = {}));
    (function(VersionedTextDocumentIdentifier2) {
      function create(uri, version) {
        return { uri, version };
      }
      VersionedTextDocumentIdentifier2.create = create;
      function is(value) {
        const candidate = value;
        return Is.defined(candidate) && Is.string(candidate.uri) && Is.integer(candidate.version);
      }
      VersionedTextDocumentIdentifier2.is = is;
    })(VersionedTextDocumentIdentifier || (VersionedTextDocumentIdentifier = {}));
    (function(OptionalVersionedTextDocumentIdentifier2) {
      function create(uri, version) {
        return { uri, version };
      }
      OptionalVersionedTextDocumentIdentifier2.create = create;
      function is(value) {
        const candidate = value;
        return Is.defined(candidate) && Is.string(candidate.uri) && (candidate.version === null || Is.integer(candidate.version));
      }
      OptionalVersionedTextDocumentIdentifier2.is = is;
    })(OptionalVersionedTextDocumentIdentifier || (OptionalVersionedTextDocumentIdentifier = {}));
    (function(LanguageKind2) {
      LanguageKind2.ABAP = "abap";
      LanguageKind2.WindowsBat = "bat";
      LanguageKind2.BibTeX = "bibtex";
      LanguageKind2.Clojure = "clojure";
      LanguageKind2.Coffeescript = "coffeescript";
      LanguageKind2.C = "c";
      LanguageKind2.CPP = "cpp";
      LanguageKind2.CSharp = "csharp";
      LanguageKind2.CSS = "css";
      LanguageKind2.D = "d";
      LanguageKind2.Delphi = "pascal";
      LanguageKind2.Diff = "diff";
      LanguageKind2.Dart = "dart";
      LanguageKind2.Dockerfile = "dockerfile";
      LanguageKind2.Elixir = "elixir";
      LanguageKind2.Erlang = "erlang";
      LanguageKind2.FSharp = "fsharp";
      LanguageKind2.GitCommit = "git-commit";
      LanguageKind2.GitRebase = "git-rebase";
      LanguageKind2.Go = "go";
      LanguageKind2.Groovy = "groovy";
      LanguageKind2.Handlebars = "handlebars";
      LanguageKind2.Haskell = "haskell";
      LanguageKind2.HTML = "html";
      LanguageKind2.Ini = "ini";
      LanguageKind2.Java = "java";
      LanguageKind2.JavaScript = "javascript";
      LanguageKind2.JavaScriptReact = "javascriptreact";
      LanguageKind2.JSON = "json";
      LanguageKind2.LaTeX = "latex";
      LanguageKind2.Less = "less";
      LanguageKind2.Lua = "lua";
      LanguageKind2.Makefile = "makefile";
      LanguageKind2.Markdown = "markdown";
      LanguageKind2.ObjectiveC = "objective-c";
      LanguageKind2.ObjectiveCPP = "objective-cpp";
      LanguageKind2.Pascal = "pascal";
      LanguageKind2.Perl = "perl";
      LanguageKind2.Perl6 = "perl6";
      LanguageKind2.PHP = "php";
      LanguageKind2.Plaintext = "plaintext";
      LanguageKind2.Powershell = "powershell";
      LanguageKind2.Pug = "jade";
      LanguageKind2.Python = "python";
      LanguageKind2.R = "r";
      LanguageKind2.Razor = "razor";
      LanguageKind2.Ruby = "ruby";
      LanguageKind2.Rust = "rust";
      LanguageKind2.SCSS = "scss";
      LanguageKind2.SASS = "sass";
      LanguageKind2.Scala = "scala";
      LanguageKind2.ShaderLab = "shaderlab";
      LanguageKind2.ShellScript = "shellscript";
      LanguageKind2.SQL = "sql";
      LanguageKind2.Swift = "swift";
      LanguageKind2.TypeScript = "typescript";
      LanguageKind2.TypeScriptReact = "typescriptreact";
      LanguageKind2.TeX = "tex";
      LanguageKind2.VisualBasic = "vb";
      LanguageKind2.XML = "xml";
      LanguageKind2.XSL = "xsl";
      LanguageKind2.YAML = "yaml";
    })(LanguageKind || (LanguageKind = {}));
    (function(TextDocumentItem2) {
      function create(uri, languageId, version, text) {
        return { uri, languageId, version, text };
      }
      TextDocumentItem2.create = create;
      function is(value) {
        const candidate = value;
        return Is.defined(candidate) && Is.string(candidate.uri) && Is.string(candidate.languageId) && Is.integer(candidate.version) && Is.string(candidate.text);
      }
      TextDocumentItem2.is = is;
    })(TextDocumentItem || (TextDocumentItem = {}));
    (function(MarkupKind2) {
      MarkupKind2.PlainText = "plaintext";
      MarkupKind2.Markdown = "markdown";
      function is(value) {
        const candidate = value;
        return candidate === MarkupKind2.PlainText || candidate === MarkupKind2.Markdown;
      }
      MarkupKind2.is = is;
    })(MarkupKind || (MarkupKind = {}));
    (function(MarkupContent2) {
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(value) && MarkupKind.is(candidate.kind) && Is.string(candidate.value);
      }
      MarkupContent2.is = is;
    })(MarkupContent || (MarkupContent = {}));
    (function(CompletionItemKind2) {
      CompletionItemKind2.Text = 1;
      CompletionItemKind2.Method = 2;
      CompletionItemKind2.Function = 3;
      CompletionItemKind2.Constructor = 4;
      CompletionItemKind2.Field = 5;
      CompletionItemKind2.Variable = 6;
      CompletionItemKind2.Class = 7;
      CompletionItemKind2.Interface = 8;
      CompletionItemKind2.Module = 9;
      CompletionItemKind2.Property = 10;
      CompletionItemKind2.Unit = 11;
      CompletionItemKind2.Value = 12;
      CompletionItemKind2.Enum = 13;
      CompletionItemKind2.Keyword = 14;
      CompletionItemKind2.Snippet = 15;
      CompletionItemKind2.Color = 16;
      CompletionItemKind2.File = 17;
      CompletionItemKind2.Reference = 18;
      CompletionItemKind2.Folder = 19;
      CompletionItemKind2.EnumMember = 20;
      CompletionItemKind2.Constant = 21;
      CompletionItemKind2.Struct = 22;
      CompletionItemKind2.Event = 23;
      CompletionItemKind2.Operator = 24;
      CompletionItemKind2.TypeParameter = 25;
    })(CompletionItemKind || (CompletionItemKind = {}));
    (function(InsertTextFormat2) {
      InsertTextFormat2.PlainText = 1;
      InsertTextFormat2.Snippet = 2;
    })(InsertTextFormat || (InsertTextFormat = {}));
    (function(CompletionItemTag2) {
      CompletionItemTag2.Deprecated = 1;
    })(CompletionItemTag || (CompletionItemTag = {}));
    (function(InsertReplaceEdit2) {
      function create(newText, insert, replace) {
        return { newText, insert, replace };
      }
      InsertReplaceEdit2.create = create;
      function is(value) {
        const candidate = value;
        return candidate && Is.string(candidate.newText) && Range.is(candidate.insert) && Range.is(candidate.replace);
      }
      InsertReplaceEdit2.is = is;
    })(InsertReplaceEdit || (InsertReplaceEdit = {}));
    (function(InsertTextMode2) {
      InsertTextMode2.asIs = 1;
      InsertTextMode2.adjustIndentation = 2;
    })(InsertTextMode || (InsertTextMode = {}));
    (function(ApplyKind2) {
      ApplyKind2.Replace = 1;
      ApplyKind2.Merge = 2;
    })(ApplyKind || (ApplyKind = {}));
    (function(CompletionItemLabelDetails2) {
      function is(value) {
        const candidate = value;
        return candidate && (Is.string(candidate.detail) || candidate.detail === void 0) && (Is.string(candidate.description) || candidate.description === void 0);
      }
      CompletionItemLabelDetails2.is = is;
    })(CompletionItemLabelDetails || (CompletionItemLabelDetails = {}));
    (function(CompletionItem2) {
      function create(label) {
        return { label };
      }
      CompletionItem2.create = create;
    })(CompletionItem || (CompletionItem = {}));
    (function(CompletionList2) {
      function create(items, isIncomplete) {
        return { items: items ? items : [], isIncomplete: !!isIncomplete };
      }
      CompletionList2.create = create;
    })(CompletionList || (CompletionList = {}));
    (function(MarkedString2) {
      function fromPlainText(plainText) {
        return plainText.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
      }
      MarkedString2.fromPlainText = fromPlainText;
      function is(value) {
        const candidate = value;
        return Is.string(candidate) || Is.objectLiteral(candidate) && Is.string(candidate.language) && Is.string(candidate.value);
      }
      MarkedString2.is = is;
    })(MarkedString || (MarkedString = {}));
    (function(Hover2) {
      function is(value) {
        const candidate = value;
        return !!candidate && Is.objectLiteral(candidate) && (MarkupContent.is(candidate.contents) || MarkedString.is(candidate.contents) || Is.typedArray(candidate.contents, MarkedString.is)) && (value.range === void 0 || Range.is(value.range));
      }
      Hover2.is = is;
    })(Hover || (Hover = {}));
    (function(ParameterInformation2) {
      function create(label, documentation) {
        return documentation ? { label, documentation } : { label };
      }
      ParameterInformation2.create = create;
    })(ParameterInformation || (ParameterInformation = {}));
    (function(SignatureInformation2) {
      function create(label, documentation, ...parameters) {
        const result = { label };
        if (Is.defined(documentation)) {
          result.documentation = documentation;
        }
        if (Is.defined(parameters)) {
          result.parameters = parameters;
        } else {
          result.parameters = [];
        }
        return result;
      }
      SignatureInformation2.create = create;
    })(SignatureInformation || (SignatureInformation = {}));
    (function(DocumentHighlightKind2) {
      DocumentHighlightKind2.Text = 1;
      DocumentHighlightKind2.Read = 2;
      DocumentHighlightKind2.Write = 3;
    })(DocumentHighlightKind || (DocumentHighlightKind = {}));
    (function(DocumentHighlight2) {
      function create(range, kind) {
        const result = { range };
        if (Is.number(kind)) {
          result.kind = kind;
        }
        return result;
      }
      DocumentHighlight2.create = create;
    })(DocumentHighlight || (DocumentHighlight = {}));
    (function(SymbolKind2) {
      SymbolKind2.File = 1;
      SymbolKind2.Module = 2;
      SymbolKind2.Namespace = 3;
      SymbolKind2.Package = 4;
      SymbolKind2.Class = 5;
      SymbolKind2.Method = 6;
      SymbolKind2.Property = 7;
      SymbolKind2.Field = 8;
      SymbolKind2.Constructor = 9;
      SymbolKind2.Enum = 10;
      SymbolKind2.Interface = 11;
      SymbolKind2.Function = 12;
      SymbolKind2.Variable = 13;
      SymbolKind2.Constant = 14;
      SymbolKind2.String = 15;
      SymbolKind2.Number = 16;
      SymbolKind2.Boolean = 17;
      SymbolKind2.Array = 18;
      SymbolKind2.Object = 19;
      SymbolKind2.Key = 20;
      SymbolKind2.Null = 21;
      SymbolKind2.EnumMember = 22;
      SymbolKind2.Struct = 23;
      SymbolKind2.Event = 24;
      SymbolKind2.Operator = 25;
      SymbolKind2.TypeParameter = 26;
    })(SymbolKind || (SymbolKind = {}));
    (function(SymbolTag2) {
      SymbolTag2.Deprecated = 1;
    })(SymbolTag || (SymbolTag = {}));
    (function(SymbolInformation2) {
      function create(name2, kind, range, uri, containerName) {
        const result = {
          name: name2,
          kind,
          location: { uri, range }
        };
        if (containerName) {
          result.containerName = containerName;
        }
        return result;
      }
      SymbolInformation2.create = create;
    })(SymbolInformation || (SymbolInformation = {}));
    (function(WorkspaceSymbol2) {
      function create(name2, kind, uri, range) {
        return range !== void 0 ? { name: name2, kind, location: { uri, range } } : { name: name2, kind, location: { uri } };
      }
      WorkspaceSymbol2.create = create;
    })(WorkspaceSymbol || (WorkspaceSymbol = {}));
    (function(DocumentSymbol2) {
      function create(name2, detail, kind, range, selectionRange, children) {
        const result = {
          name: name2,
          detail,
          kind,
          range,
          selectionRange
        };
        if (children !== void 0) {
          result.children = children;
        }
        return result;
      }
      DocumentSymbol2.create = create;
      function is(value) {
        const candidate = value;
        return candidate && Is.string(candidate.name) && Is.number(candidate.kind) && Range.is(candidate.range) && Range.is(candidate.selectionRange) && (candidate.detail === void 0 || Is.string(candidate.detail)) && (candidate.deprecated === void 0 || Is.boolean(candidate.deprecated)) && (candidate.children === void 0 || Array.isArray(candidate.children)) && (candidate.tags === void 0 || Array.isArray(candidate.tags));
      }
      DocumentSymbol2.is = is;
    })(DocumentSymbol || (DocumentSymbol = {}));
    (function(CodeActionKind2) {
      CodeActionKind2.Empty = "";
      CodeActionKind2.QuickFix = "quickfix";
      CodeActionKind2.Refactor = "refactor";
      CodeActionKind2.RefactorExtract = "refactor.extract";
      CodeActionKind2.RefactorInline = "refactor.inline";
      CodeActionKind2.RefactorMove = "refactor.move";
      CodeActionKind2.RefactorRewrite = "refactor.rewrite";
      CodeActionKind2.Source = "source";
      CodeActionKind2.SourceOrganizeImports = "source.organizeImports";
      CodeActionKind2.SourceFixAll = "source.fixAll";
      CodeActionKind2.Notebook = "notebook";
    })(CodeActionKind || (CodeActionKind = {}));
    (function(CodeActionTriggerKind2) {
      CodeActionTriggerKind2.Invoked = 1;
      CodeActionTriggerKind2.Automatic = 2;
    })(CodeActionTriggerKind || (CodeActionTriggerKind = {}));
    (function(CodeActionContext2) {
      function create(diagnostics, only, triggerKind) {
        const result = { diagnostics };
        if (only !== void 0 && only !== null) {
          result.only = only;
        }
        if (triggerKind !== void 0 && triggerKind !== null) {
          result.triggerKind = triggerKind;
        }
        return result;
      }
      CodeActionContext2.create = create;
      function is(value) {
        const candidate = value;
        return Is.defined(candidate) && Is.typedArray(candidate.diagnostics, Diagnostic.is) && (candidate.only === void 0 || Is.typedArray(candidate.only, Is.string)) && (candidate.triggerKind === void 0 || candidate.triggerKind === CodeActionTriggerKind.Invoked || candidate.triggerKind === CodeActionTriggerKind.Automatic);
      }
      CodeActionContext2.is = is;
    })(CodeActionContext || (CodeActionContext = {}));
    (function(CodeActionTag2) {
      CodeActionTag2.LLMGenerated = 1;
      function is(value) {
        return Is.defined(value) && value === CodeActionTag2.LLMGenerated;
      }
      CodeActionTag2.is = is;
    })(CodeActionTag || (CodeActionTag = {}));
    (function(CodeAction2) {
      function create(title, kindOrCommandOrEdit, kind) {
        const result = { title };
        let checkKind = true;
        if (typeof kindOrCommandOrEdit === "string") {
          checkKind = false;
          result.kind = kindOrCommandOrEdit;
        } else if (Command.is(kindOrCommandOrEdit)) {
          result.command = kindOrCommandOrEdit;
        } else {
          result.edit = kindOrCommandOrEdit;
        }
        if (checkKind && kind !== void 0) {
          result.kind = kind;
        }
        return result;
      }
      CodeAction2.create = create;
      function is(value) {
        const candidate = value;
        return candidate && Is.string(candidate.title) && (candidate.diagnostics === void 0 || Is.typedArray(candidate.diagnostics, Diagnostic.is)) && (candidate.kind === void 0 || Is.string(candidate.kind)) && (candidate.edit !== void 0 || candidate.command !== void 0) && (candidate.command === void 0 || Command.is(candidate.command)) && (candidate.isPreferred === void 0 || Is.boolean(candidate.isPreferred)) && (candidate.edit === void 0 || WorkspaceEdit.is(candidate.edit)) && (candidate.tags === void 0 || Is.typedArray(candidate.tags, CodeActionTag.is));
      }
      CodeAction2.is = is;
    })(CodeAction || (CodeAction = {}));
    (function(CodeLens2) {
      function create(range, data) {
        const result = { range };
        if (Is.defined(data)) {
          result.data = data;
        }
        return result;
      }
      CodeLens2.create = create;
      function is(value) {
        const candidate = value;
        return Is.defined(candidate) && Range.is(candidate.range) && (Is.undefined(candidate.command) || Command.is(candidate.command));
      }
      CodeLens2.is = is;
    })(CodeLens || (CodeLens = {}));
    (function(FormattingOptions2) {
      function create(tabSize, insertSpaces) {
        return { tabSize, insertSpaces };
      }
      FormattingOptions2.create = create;
      function is(value) {
        const candidate = value;
        return Is.defined(candidate) && Is.uinteger(candidate.tabSize) && Is.boolean(candidate.insertSpaces);
      }
      FormattingOptions2.is = is;
    })(FormattingOptions || (FormattingOptions = {}));
    (function(DocumentLink2) {
      function create(range, target, data) {
        return { range, target, data };
      }
      DocumentLink2.create = create;
      function is(value) {
        const candidate = value;
        return Is.defined(candidate) && Range.is(candidate.range) && (Is.undefined(candidate.target) || Is.string(candidate.target));
      }
      DocumentLink2.is = is;
    })(DocumentLink || (DocumentLink = {}));
    (function(SelectionRange2) {
      function create(range, parent) {
        return { range, parent };
      }
      SelectionRange2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Range.is(candidate.range) && (candidate.parent === void 0 || SelectionRange2.is(candidate.parent));
      }
      SelectionRange2.is = is;
    })(SelectionRange || (SelectionRange = {}));
    (function(SemanticTokenTypes2) {
      SemanticTokenTypes2["namespace"] = "namespace";
      SemanticTokenTypes2["type"] = "type";
      SemanticTokenTypes2["class"] = "class";
      SemanticTokenTypes2["enum"] = "enum";
      SemanticTokenTypes2["interface"] = "interface";
      SemanticTokenTypes2["struct"] = "struct";
      SemanticTokenTypes2["typeParameter"] = "typeParameter";
      SemanticTokenTypes2["parameter"] = "parameter";
      SemanticTokenTypes2["variable"] = "variable";
      SemanticTokenTypes2["property"] = "property";
      SemanticTokenTypes2["enumMember"] = "enumMember";
      SemanticTokenTypes2["event"] = "event";
      SemanticTokenTypes2["function"] = "function";
      SemanticTokenTypes2["method"] = "method";
      SemanticTokenTypes2["macro"] = "macro";
      SemanticTokenTypes2["keyword"] = "keyword";
      SemanticTokenTypes2["modifier"] = "modifier";
      SemanticTokenTypes2["comment"] = "comment";
      SemanticTokenTypes2["string"] = "string";
      SemanticTokenTypes2["number"] = "number";
      SemanticTokenTypes2["regexp"] = "regexp";
      SemanticTokenTypes2["operator"] = "operator";
      SemanticTokenTypes2["decorator"] = "decorator";
      SemanticTokenTypes2["label"] = "label";
    })(SemanticTokenTypes || (SemanticTokenTypes = {}));
    (function(SemanticTokenModifiers2) {
      SemanticTokenModifiers2["declaration"] = "declaration";
      SemanticTokenModifiers2["definition"] = "definition";
      SemanticTokenModifiers2["readonly"] = "readonly";
      SemanticTokenModifiers2["static"] = "static";
      SemanticTokenModifiers2["deprecated"] = "deprecated";
      SemanticTokenModifiers2["abstract"] = "abstract";
      SemanticTokenModifiers2["async"] = "async";
      SemanticTokenModifiers2["modification"] = "modification";
      SemanticTokenModifiers2["documentation"] = "documentation";
      SemanticTokenModifiers2["defaultLibrary"] = "defaultLibrary";
    })(SemanticTokenModifiers || (SemanticTokenModifiers = {}));
    (function(SemanticTokens2) {
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && (candidate.resultId === void 0 || typeof candidate.resultId === "string") && Array.isArray(candidate.data) && (candidate.data.length === 0 || typeof candidate.data[0] === "number");
      }
      SemanticTokens2.is = is;
    })(SemanticTokens || (SemanticTokens = {}));
    (function(InlineValueText2) {
      function create(range, text) {
        return { range, text };
      }
      InlineValueText2.create = create;
      function is(value) {
        const candidate = value;
        return candidate !== void 0 && candidate !== null && Range.is(candidate.range) && Is.string(candidate.text);
      }
      InlineValueText2.is = is;
    })(InlineValueText || (InlineValueText = {}));
    (function(InlineValueVariableLookup2) {
      function create(range, variableName, caseSensitiveLookup) {
        return { range, variableName, caseSensitiveLookup };
      }
      InlineValueVariableLookup2.create = create;
      function is(value) {
        const candidate = value;
        return candidate !== void 0 && candidate !== null && Range.is(candidate.range) && Is.boolean(candidate.caseSensitiveLookup) && (Is.string(candidate.variableName) || candidate.variableName === void 0);
      }
      InlineValueVariableLookup2.is = is;
    })(InlineValueVariableLookup || (InlineValueVariableLookup = {}));
    (function(InlineValueEvaluatableExpression2) {
      function create(range, expression) {
        return { range, expression };
      }
      InlineValueEvaluatableExpression2.create = create;
      function is(value) {
        const candidate = value;
        return candidate !== void 0 && candidate !== null && Range.is(candidate.range) && (Is.string(candidate.expression) || candidate.expression === void 0);
      }
      InlineValueEvaluatableExpression2.is = is;
    })(InlineValueEvaluatableExpression || (InlineValueEvaluatableExpression = {}));
    (function(InlineValueContext2) {
      function create(frameId, stoppedLocation) {
        return { frameId, stoppedLocation };
      }
      InlineValueContext2.create = create;
      function is(value) {
        const candidate = value;
        return Is.defined(candidate) && Range.is(value.stoppedLocation);
      }
      InlineValueContext2.is = is;
    })(InlineValueContext || (InlineValueContext = {}));
    (function(InlayHintKind2) {
      InlayHintKind2.Type = 1;
      InlayHintKind2.Parameter = 2;
      function is(value) {
        return value === 1 || value === 2;
      }
      InlayHintKind2.is = is;
    })(InlayHintKind || (InlayHintKind = {}));
    (function(InlayHintLabelPart2) {
      function create(value) {
        return { value };
      }
      InlayHintLabelPart2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && (candidate.tooltip === void 0 || Is.string(candidate.tooltip) || MarkupContent.is(candidate.tooltip)) && (candidate.location === void 0 || Location.is(candidate.location)) && (candidate.command === void 0 || Command.is(candidate.command));
      }
      InlayHintLabelPart2.is = is;
    })(InlayHintLabelPart || (InlayHintLabelPart = {}));
    (function(InlayHint2) {
      function create(position, label, kind) {
        const result = { position, label };
        if (kind !== void 0) {
          result.kind = kind;
        }
        return result;
      }
      InlayHint2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Position.is(candidate.position) && (Is.string(candidate.label) || Is.typedArray(candidate.label, InlayHintLabelPart.is)) && (candidate.kind === void 0 || InlayHintKind.is(candidate.kind)) && candidate.textEdits === void 0 || Is.typedArray(candidate.textEdits, TextEdit.is) && (candidate.tooltip === void 0 || Is.string(candidate.tooltip) || MarkupContent.is(candidate.tooltip)) && (candidate.paddingLeft === void 0 || Is.boolean(candidate.paddingLeft)) && (candidate.paddingRight === void 0 || Is.boolean(candidate.paddingRight));
      }
      InlayHint2.is = is;
    })(InlayHint || (InlayHint = {}));
    (function(StringValue2) {
      function createSnippet(value) {
        return { kind: "snippet", value };
      }
      StringValue2.createSnippet = createSnippet;
      function isSnippet(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && candidate.kind === "snippet" && Is.string(candidate.value);
      }
      StringValue2.isSnippet = isSnippet;
    })(StringValue || (StringValue = {}));
    (function(InlineCompletionItem2) {
      function create(insertText, filterText, range, command) {
        return { insertText, filterText, range, command };
      }
      InlineCompletionItem2.create = create;
    })(InlineCompletionItem || (InlineCompletionItem = {}));
    (function(InlineCompletionList2) {
      function create(items) {
        return { items };
      }
      InlineCompletionList2.create = create;
    })(InlineCompletionList || (InlineCompletionList = {}));
    (function(InlineCompletionTriggerKind2) {
      InlineCompletionTriggerKind2.Invoked = 1;
      InlineCompletionTriggerKind2.Automatic = 2;
    })(InlineCompletionTriggerKind || (InlineCompletionTriggerKind = {}));
    (function(SelectedCompletionInfo2) {
      function create(range, text) {
        return { range, text };
      }
      SelectedCompletionInfo2.create = create;
    })(SelectedCompletionInfo || (SelectedCompletionInfo = {}));
    (function(InlineCompletionContext2) {
      function create(triggerKind, selectedCompletionInfo) {
        return { triggerKind, selectedCompletionInfo };
      }
      InlineCompletionContext2.create = create;
    })(InlineCompletionContext || (InlineCompletionContext = {}));
    (function(WorkspaceFolder2) {
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && URI.is(candidate.uri) && Is.string(candidate.name);
      }
      WorkspaceFolder2.is = is;
    })(WorkspaceFolder || (WorkspaceFolder = {}));
    EOL = ["\n", "\r\n", "\r"];
    (function(TextDocument3) {
      function create(uri, languageId, version, content) {
        return new FullTextDocument(uri, languageId, version, content);
      }
      TextDocument3.create = create;
      function is(value) {
        const candidate = value;
        return Is.defined(candidate) && Is.string(candidate.uri) && (Is.undefined(candidate.languageId) || Is.string(candidate.languageId)) && Is.uinteger(candidate.lineCount) && Is.func(candidate.getText) && Is.func(candidate.positionAt) && Is.func(candidate.offsetAt) ? true : false;
      }
      TextDocument3.is = is;
      function applyEdits(document2, edits) {
        let text = document2.getText();
        const sortedEdits = mergeSort2(edits, (a, b) => {
          const diff = a.range.start.line - b.range.start.line;
          if (diff === 0) {
            return a.range.start.character - b.range.start.character;
          }
          return diff;
        });
        let lastModifiedOffset = text.length;
        for (let i2 = sortedEdits.length - 1; i2 >= 0; i2--) {
          const e = sortedEdits[i2];
          const startOffset = document2.offsetAt(e.range.start);
          const endOffset = document2.offsetAt(e.range.end);
          if (endOffset <= lastModifiedOffset) {
            text = text.substring(0, startOffset) + e.newText + text.substring(endOffset, text.length);
          } else {
            throw new Error("Overlapping edit");
          }
          lastModifiedOffset = startOffset;
        }
        return text;
      }
      TextDocument3.applyEdits = applyEdits;
      function mergeSort2(data, compare) {
        if (data.length <= 1) {
          return data;
        }
        const p = data.length / 2 | 0;
        const left = data.slice(0, p);
        const right = data.slice(p);
        mergeSort2(left, compare);
        mergeSort2(right, compare);
        let leftIdx = 0;
        let rightIdx = 0;
        let i2 = 0;
        while (leftIdx < left.length && rightIdx < right.length) {
          const ret = compare(left[leftIdx], right[rightIdx]);
          if (ret <= 0) {
            data[i2++] = left[leftIdx++];
          } else {
            data[i2++] = right[rightIdx++];
          }
        }
        while (leftIdx < left.length) {
          data[i2++] = left[leftIdx++];
        }
        while (rightIdx < right.length) {
          data[i2++] = right[rightIdx++];
        }
        return data;
      }
    })(TextDocument || (TextDocument = {}));
    FullTextDocument = class {
      constructor(uri, languageId, version, content) {
        this._uri = uri;
        this._languageId = languageId;
        this._version = version;
        this._content = content;
        this._lineOffsets = void 0;
      }
      get uri() {
        return this._uri;
      }
      get languageId() {
        return this._languageId;
      }
      get version() {
        return this._version;
      }
      getText(range) {
        if (range) {
          const start2 = this.offsetAt(range.start);
          const end = this.offsetAt(range.end);
          return this._content.substring(start2, end);
        }
        return this._content;
      }
      update(event, version) {
        this._content = event.text;
        this._version = version;
        this._lineOffsets = void 0;
      }
      getLineOffsets() {
        if (this._lineOffsets === void 0) {
          const lineOffsets = [];
          const text = this._content;
          let isLineStart = true;
          for (let i2 = 0; i2 < text.length; i2++) {
            if (isLineStart) {
              lineOffsets.push(i2);
              isLineStart = false;
            }
            const ch = text.charAt(i2);
            isLineStart = ch === "\r" || ch === "\n";
            if (ch === "\r" && i2 + 1 < text.length && text.charAt(i2 + 1) === "\n") {
              i2++;
            }
          }
          if (isLineStart && text.length > 0) {
            lineOffsets.push(text.length);
          }
          this._lineOffsets = lineOffsets;
        }
        return this._lineOffsets;
      }
      positionAt(offset) {
        offset = Math.max(Math.min(offset, this._content.length), 0);
        const lineOffsets = this.getLineOffsets();
        let low = 0, high = lineOffsets.length;
        if (high === 0) {
          return Position.create(0, offset);
        }
        while (low < high) {
          const mid = Math.floor((low + high) / 2);
          if (lineOffsets[mid] > offset) {
            high = mid;
          } else {
            low = mid + 1;
          }
        }
        const line = low - 1;
        return Position.create(line, offset - lineOffsets[line]);
      }
      offsetAt(position) {
        const lineOffsets = this.getLineOffsets();
        if (position.line >= lineOffsets.length) {
          return this._content.length;
        } else if (position.line < 0) {
          return 0;
        }
        const lineOffset = lineOffsets[position.line];
        const nextLineOffset = position.line + 1 < lineOffsets.length ? lineOffsets[position.line + 1] : this._content.length;
        return Math.max(Math.min(lineOffset + position.character, nextLineOffset), lineOffset);
      }
      get lineCount() {
        return this.getLineOffsets().length;
      }
    };
    (function(Is2) {
      const toString = Object.prototype.toString;
      function defined(value) {
        return typeof value !== "undefined";
      }
      Is2.defined = defined;
      function undefined2(value) {
        return typeof value === "undefined";
      }
      Is2.undefined = undefined2;
      function boolean(value) {
        return value === true || value === false;
      }
      Is2.boolean = boolean;
      function string(value) {
        return toString.call(value) === "[object String]";
      }
      Is2.string = string;
      function number(value) {
        return toString.call(value) === "[object Number]";
      }
      Is2.number = number;
      function numberRange(value, min, max) {
        return toString.call(value) === "[object Number]" && min <= value && value <= max;
      }
      Is2.numberRange = numberRange;
      function integer2(value) {
        return toString.call(value) === "[object Number]" && -2147483648 <= value && value <= 2147483647;
      }
      Is2.integer = integer2;
      function uinteger2(value) {
        return toString.call(value) === "[object Number]" && 0 <= value && value <= 2147483647;
      }
      Is2.uinteger = uinteger2;
      function func2(value) {
        return toString.call(value) === "[object Function]";
      }
      Is2.func = func2;
      function objectLiteral(value) {
        return value !== null && typeof value === "object";
      }
      Is2.objectLiteral = objectLiteral;
      function typedArray(value, check) {
        return Array.isArray(value) && value.every(check);
      }
      Is2.typedArray = typedArray;
    })(Is || (Is = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/messages.js
var require_messages2 = __commonJS2({
  "node_modules/vscode-languageserver-protocol/lib/common/messages.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CM = exports2.ProtocolNotificationType = exports2.ProtocolNotificationType0 = exports2.ProtocolRequestType = exports2.ProtocolRequestType0 = exports2.RegistrationType = exports2.MessageDirection = void 0;
    var vscode_jsonrpc_1 = require_api();
    var MessageDirection;
    (function(MessageDirection2) {
      MessageDirection2["clientToServer"] = "clientToServer";
      MessageDirection2["serverToClient"] = "serverToClient";
      MessageDirection2["both"] = "both";
    })(MessageDirection || (exports2.MessageDirection = MessageDirection = {}));
    var RegistrationType = class {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      ____;
      method;
      constructor(method) {
        this.method = method;
      }
    };
    exports2.RegistrationType = RegistrationType;
    var ProtocolRequestType0 = class extends vscode_jsonrpc_1.RequestType0 {
      /**
       * Clients must not use these properties. They are here to ensure correct typing.
       * in TypeScript
       */
      __;
      ___;
      ____;
      _pr;
      constructor(method) {
        super(method);
      }
    };
    exports2.ProtocolRequestType0 = ProtocolRequestType0;
    var ProtocolRequestType = class extends vscode_jsonrpc_1.RequestType {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      __;
      ___;
      ____;
      _pr;
      constructor(method) {
        super(method, vscode_jsonrpc_1.ParameterStructures.byName);
      }
    };
    exports2.ProtocolRequestType = ProtocolRequestType;
    var ProtocolNotificationType0 = class extends vscode_jsonrpc_1.NotificationType0 {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      ___;
      ____;
      constructor(method) {
        super(method);
      }
    };
    exports2.ProtocolNotificationType0 = ProtocolNotificationType0;
    var ProtocolNotificationType = class extends vscode_jsonrpc_1.NotificationType {
      /**
       * Clients must not use this property. It is here to ensure correct typing.
       */
      ___;
      ____;
      constructor(method) {
        super(method, vscode_jsonrpc_1.ParameterStructures.byName);
      }
    };
    exports2.ProtocolNotificationType = ProtocolNotificationType;
    var CM;
    (function(CM2) {
      function create(client, server) {
        return { client, server };
      }
      CM2.create = create;
    })(CM || (exports2.CM = CM = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/utils/is.js
var require_is3 = __commonJS2({
  "node_modules/vscode-languageserver-protocol/lib/common/utils/is.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.boolean = boolean;
    exports2.string = string;
    exports2.number = number;
    exports2.error = error;
    exports2.func = func2;
    exports2.array = array;
    exports2.stringArray = stringArray;
    exports2.typedArray = typedArray;
    exports2.objectLiteral = objectLiteral;
    function boolean(value) {
      return value === true || value === false;
    }
    function string(value) {
      return typeof value === "string" || value instanceof String;
    }
    function number(value) {
      return typeof value === "number" || value instanceof Number;
    }
    function error(value) {
      return value instanceof Error;
    }
    function func2(value) {
      return typeof value === "function";
    }
    function array(value) {
      return Array.isArray(value);
    }
    function stringArray(value) {
      return array(value) && value.every((elem) => string(elem));
    }
    function typedArray(value, check) {
      return Array.isArray(value) && value.every(check);
    }
    function objectLiteral(value) {
      return value !== null && typeof value === "object";
    }
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.implementation.js
var require_protocol_implementation = __commonJS2({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.implementation.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ImplementationRequest = void 0;
    var messages_1 = require_messages2();
    var ImplementationRequest;
    (function(ImplementationRequest2) {
      ImplementationRequest2.method = "textDocument/implementation";
      ImplementationRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      ImplementationRequest2.type = new messages_1.ProtocolRequestType(ImplementationRequest2.method);
      ImplementationRequest2.capabilities = messages_1.CM.create("textDocument.implementation", "implementationProvider");
    })(ImplementationRequest || (exports2.ImplementationRequest = ImplementationRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.typeDefinition.js
var require_protocol_typeDefinition = __commonJS2({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.typeDefinition.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TypeDefinitionRequest = void 0;
    var messages_1 = require_messages2();
    var TypeDefinitionRequest;
    (function(TypeDefinitionRequest2) {
      TypeDefinitionRequest2.method = "textDocument/typeDefinition";
      TypeDefinitionRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      TypeDefinitionRequest2.type = new messages_1.ProtocolRequestType(TypeDefinitionRequest2.method);
      TypeDefinitionRequest2.capabilities = messages_1.CM.create("textDocument.typeDefinition", "typeDefinitionProvider");
    })(TypeDefinitionRequest || (exports2.TypeDefinitionRequest = TypeDefinitionRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.workspaceFolder.js
var require_protocol_workspaceFolder = __commonJS2({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.workspaceFolder.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DidChangeWorkspaceFoldersNotification = exports2.WorkspaceFoldersRequest = void 0;
    var messages_1 = require_messages2();
    var WorkspaceFoldersRequest;
    (function(WorkspaceFoldersRequest2) {
      WorkspaceFoldersRequest2.method = "workspace/workspaceFolders";
      WorkspaceFoldersRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      WorkspaceFoldersRequest2.type = new messages_1.ProtocolRequestType0(WorkspaceFoldersRequest2.method);
      WorkspaceFoldersRequest2.capabilities = messages_1.CM.create("workspace.workspaceFolders", "workspace.workspaceFolders");
    })(WorkspaceFoldersRequest || (exports2.WorkspaceFoldersRequest = WorkspaceFoldersRequest = {}));
    var DidChangeWorkspaceFoldersNotification;
    (function(DidChangeWorkspaceFoldersNotification2) {
      DidChangeWorkspaceFoldersNotification2.method = "workspace/didChangeWorkspaceFolders";
      DidChangeWorkspaceFoldersNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidChangeWorkspaceFoldersNotification2.type = new messages_1.ProtocolNotificationType(DidChangeWorkspaceFoldersNotification2.method);
      DidChangeWorkspaceFoldersNotification2.capabilities = messages_1.CM.create(void 0, "workspace.workspaceFolders.changeNotifications");
    })(DidChangeWorkspaceFoldersNotification || (exports2.DidChangeWorkspaceFoldersNotification = DidChangeWorkspaceFoldersNotification = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.configuration.js
var require_protocol_configuration = __commonJS2({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.configuration.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ConfigurationRequest = void 0;
    var messages_1 = require_messages2();
    var ConfigurationRequest;
    (function(ConfigurationRequest2) {
      ConfigurationRequest2.method = "workspace/configuration";
      ConfigurationRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      ConfigurationRequest2.type = new messages_1.ProtocolRequestType(ConfigurationRequest2.method);
      ConfigurationRequest2.capabilities = messages_1.CM.create("workspace.configuration", void 0);
    })(ConfigurationRequest || (exports2.ConfigurationRequest = ConfigurationRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.colorProvider.js
var require_protocol_colorProvider = __commonJS2({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.colorProvider.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ColorPresentationRequest = exports2.DocumentColorRequest = void 0;
    var messages_1 = require_messages2();
    var DocumentColorRequest;
    (function(DocumentColorRequest2) {
      DocumentColorRequest2.method = "textDocument/documentColor";
      DocumentColorRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentColorRequest2.type = new messages_1.ProtocolRequestType(DocumentColorRequest2.method);
      DocumentColorRequest2.capabilities = messages_1.CM.create("textDocument.colorProvider", "colorProvider");
    })(DocumentColorRequest || (exports2.DocumentColorRequest = DocumentColorRequest = {}));
    var ColorPresentationRequest;
    (function(ColorPresentationRequest2) {
      ColorPresentationRequest2.method = "textDocument/colorPresentation";
      ColorPresentationRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      ColorPresentationRequest2.type = new messages_1.ProtocolRequestType(ColorPresentationRequest2.method);
      ColorPresentationRequest2.capabilities = messages_1.CM.create("textDocument.colorProvider", "colorProvider");
    })(ColorPresentationRequest || (exports2.ColorPresentationRequest = ColorPresentationRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.foldingRange.js
var require_protocol_foldingRange = __commonJS2({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.foldingRange.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FoldingRangeRefreshRequest = exports2.FoldingRangeRequest = void 0;
    var messages_1 = require_messages2();
    var FoldingRangeRequest;
    (function(FoldingRangeRequest2) {
      FoldingRangeRequest2.method = "textDocument/foldingRange";
      FoldingRangeRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      FoldingRangeRequest2.type = new messages_1.ProtocolRequestType(FoldingRangeRequest2.method);
      FoldingRangeRequest2.capabilities = messages_1.CM.create("textDocument.foldingRange", "foldingRangeProvider");
    })(FoldingRangeRequest || (exports2.FoldingRangeRequest = FoldingRangeRequest = {}));
    var FoldingRangeRefreshRequest;
    (function(FoldingRangeRefreshRequest2) {
      FoldingRangeRefreshRequest2.method = `workspace/foldingRange/refresh`;
      FoldingRangeRefreshRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      FoldingRangeRefreshRequest2.type = new messages_1.ProtocolRequestType0(FoldingRangeRefreshRequest2.method);
      FoldingRangeRefreshRequest2.capabilities = messages_1.CM.create("workspace.foldingRange.refreshSupport", void 0);
    })(FoldingRangeRefreshRequest || (exports2.FoldingRangeRefreshRequest = FoldingRangeRefreshRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.declaration.js
var require_protocol_declaration = __commonJS2({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.declaration.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DeclarationRequest = void 0;
    var messages_1 = require_messages2();
    var DeclarationRequest;
    (function(DeclarationRequest2) {
      DeclarationRequest2.method = "textDocument/declaration";
      DeclarationRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DeclarationRequest2.type = new messages_1.ProtocolRequestType(DeclarationRequest2.method);
      DeclarationRequest2.capabilities = messages_1.CM.create("textDocument.declaration", "declarationProvider");
    })(DeclarationRequest || (exports2.DeclarationRequest = DeclarationRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.selectionRange.js
var require_protocol_selectionRange = __commonJS2({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.selectionRange.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SelectionRangeRequest = void 0;
    var messages_1 = require_messages2();
    var SelectionRangeRequest;
    (function(SelectionRangeRequest2) {
      SelectionRangeRequest2.method = "textDocument/selectionRange";
      SelectionRangeRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      SelectionRangeRequest2.type = new messages_1.ProtocolRequestType(SelectionRangeRequest2.method);
      SelectionRangeRequest2.capabilities = messages_1.CM.create("textDocument.selectionRange", "selectionRangeProvider");
    })(SelectionRangeRequest || (exports2.SelectionRangeRequest = SelectionRangeRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.progress.js
var require_protocol_progress = __commonJS2({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.progress.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.WorkDoneProgressCancelNotification = exports2.WorkDoneProgressCreateRequest = exports2.WorkDoneProgress = void 0;
    var vscode_jsonrpc_1 = require_api();
    var messages_1 = require_messages2();
    var WorkDoneProgress;
    (function(WorkDoneProgress2) {
      WorkDoneProgress2.type = new vscode_jsonrpc_1.ProgressType();
      function is(value) {
        return value === WorkDoneProgress2.type;
      }
      WorkDoneProgress2.is = is;
    })(WorkDoneProgress || (exports2.WorkDoneProgress = WorkDoneProgress = {}));
    var WorkDoneProgressCreateRequest;
    (function(WorkDoneProgressCreateRequest2) {
      WorkDoneProgressCreateRequest2.method = "window/workDoneProgress/create";
      WorkDoneProgressCreateRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      WorkDoneProgressCreateRequest2.type = new messages_1.ProtocolRequestType(WorkDoneProgressCreateRequest2.method);
      WorkDoneProgressCreateRequest2.capabilities = messages_1.CM.create("window.workDoneProgress", void 0);
    })(WorkDoneProgressCreateRequest || (exports2.WorkDoneProgressCreateRequest = WorkDoneProgressCreateRequest = {}));
    var WorkDoneProgressCancelNotification;
    (function(WorkDoneProgressCancelNotification2) {
      WorkDoneProgressCancelNotification2.method = "window/workDoneProgress/cancel";
      WorkDoneProgressCancelNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      WorkDoneProgressCancelNotification2.type = new messages_1.ProtocolNotificationType(WorkDoneProgressCancelNotification2.method);
    })(WorkDoneProgressCancelNotification || (exports2.WorkDoneProgressCancelNotification = WorkDoneProgressCancelNotification = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.callHierarchy.js
var require_protocol_callHierarchy = __commonJS2({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.callHierarchy.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CallHierarchyOutgoingCallsRequest = exports2.CallHierarchyIncomingCallsRequest = exports2.CallHierarchyPrepareRequest = void 0;
    var messages_1 = require_messages2();
    var CallHierarchyPrepareRequest;
    (function(CallHierarchyPrepareRequest2) {
      CallHierarchyPrepareRequest2.method = "textDocument/prepareCallHierarchy";
      CallHierarchyPrepareRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CallHierarchyPrepareRequest2.type = new messages_1.ProtocolRequestType(CallHierarchyPrepareRequest2.method);
      CallHierarchyPrepareRequest2.capabilities = messages_1.CM.create("textDocument.callHierarchy", "callHierarchyProvider");
    })(CallHierarchyPrepareRequest || (exports2.CallHierarchyPrepareRequest = CallHierarchyPrepareRequest = {}));
    var CallHierarchyIncomingCallsRequest;
    (function(CallHierarchyIncomingCallsRequest2) {
      CallHierarchyIncomingCallsRequest2.method = "callHierarchy/incomingCalls";
      CallHierarchyIncomingCallsRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CallHierarchyIncomingCallsRequest2.type = new messages_1.ProtocolRequestType(CallHierarchyIncomingCallsRequest2.method);
      CallHierarchyIncomingCallsRequest2.capabilities = messages_1.CM.create("textDocument.callHierarchy", "callHierarchyProvider");
    })(CallHierarchyIncomingCallsRequest || (exports2.CallHierarchyIncomingCallsRequest = CallHierarchyIncomingCallsRequest = {}));
    var CallHierarchyOutgoingCallsRequest;
    (function(CallHierarchyOutgoingCallsRequest2) {
      CallHierarchyOutgoingCallsRequest2.method = "callHierarchy/outgoingCalls";
      CallHierarchyOutgoingCallsRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CallHierarchyOutgoingCallsRequest2.type = new messages_1.ProtocolRequestType(CallHierarchyOutgoingCallsRequest2.method);
      CallHierarchyOutgoingCallsRequest2.capabilities = messages_1.CM.create("textDocument.callHierarchy", "callHierarchyProvider");
    })(CallHierarchyOutgoingCallsRequest || (exports2.CallHierarchyOutgoingCallsRequest = CallHierarchyOutgoingCallsRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.semanticTokens.js
var require_protocol_semanticTokens = __commonJS2({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.semanticTokens.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SemanticTokensRefreshRequest = exports2.SemanticTokensRangeRequest = exports2.SemanticTokensDeltaRequest = exports2.SemanticTokensRequest = exports2.SemanticTokensRegistrationType = exports2.TokenFormat = void 0;
    var messages_1 = require_messages2();
    var TokenFormat;
    (function(TokenFormat2) {
      TokenFormat2.Relative = "relative";
    })(TokenFormat || (exports2.TokenFormat = TokenFormat = {}));
    var SemanticTokensRegistrationType;
    (function(SemanticTokensRegistrationType2) {
      SemanticTokensRegistrationType2.method = "textDocument/semanticTokens";
      SemanticTokensRegistrationType2.type = new messages_1.RegistrationType(SemanticTokensRegistrationType2.method);
    })(SemanticTokensRegistrationType || (exports2.SemanticTokensRegistrationType = SemanticTokensRegistrationType = {}));
    var SemanticTokensRequest;
    (function(SemanticTokensRequest2) {
      SemanticTokensRequest2.method = "textDocument/semanticTokens/full";
      SemanticTokensRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      SemanticTokensRequest2.type = new messages_1.ProtocolRequestType(SemanticTokensRequest2.method);
      SemanticTokensRequest2.registrationMethod = SemanticTokensRegistrationType.method;
      SemanticTokensRequest2.capabilities = messages_1.CM.create("textDocument.semanticTokens", "semanticTokensProvider");
    })(SemanticTokensRequest || (exports2.SemanticTokensRequest = SemanticTokensRequest = {}));
    var SemanticTokensDeltaRequest;
    (function(SemanticTokensDeltaRequest2) {
      SemanticTokensDeltaRequest2.method = "textDocument/semanticTokens/full/delta";
      SemanticTokensDeltaRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      SemanticTokensDeltaRequest2.type = new messages_1.ProtocolRequestType(SemanticTokensDeltaRequest2.method);
      SemanticTokensDeltaRequest2.registrationMethod = SemanticTokensRegistrationType.method;
      SemanticTokensDeltaRequest2.capabilities = messages_1.CM.create("textDocument.semanticTokens.requests.full.delta", "semanticTokensProvider.full.delta");
    })(SemanticTokensDeltaRequest || (exports2.SemanticTokensDeltaRequest = SemanticTokensDeltaRequest = {}));
    var SemanticTokensRangeRequest;
    (function(SemanticTokensRangeRequest2) {
      SemanticTokensRangeRequest2.method = "textDocument/semanticTokens/range";
      SemanticTokensRangeRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      SemanticTokensRangeRequest2.type = new messages_1.ProtocolRequestType(SemanticTokensRangeRequest2.method);
      SemanticTokensRangeRequest2.registrationMethod = SemanticTokensRegistrationType.method;
      SemanticTokensRangeRequest2.capabilities = messages_1.CM.create("textDocument.semanticTokens.requests.range", "semanticTokensProvider.range");
    })(SemanticTokensRangeRequest || (exports2.SemanticTokensRangeRequest = SemanticTokensRangeRequest = {}));
    var SemanticTokensRefreshRequest;
    (function(SemanticTokensRefreshRequest2) {
      SemanticTokensRefreshRequest2.method = `workspace/semanticTokens/refresh`;
      SemanticTokensRefreshRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      SemanticTokensRefreshRequest2.type = new messages_1.ProtocolRequestType0(SemanticTokensRefreshRequest2.method);
      SemanticTokensRefreshRequest2.capabilities = messages_1.CM.create("workspace.semanticTokens.refreshSupport", void 0);
    })(SemanticTokensRefreshRequest || (exports2.SemanticTokensRefreshRequest = SemanticTokensRefreshRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.showDocument.js
var require_protocol_showDocument = __commonJS2({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.showDocument.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ShowDocumentRequest = void 0;
    var messages_1 = require_messages2();
    var ShowDocumentRequest;
    (function(ShowDocumentRequest2) {
      ShowDocumentRequest2.method = "window/showDocument";
      ShowDocumentRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      ShowDocumentRequest2.type = new messages_1.ProtocolRequestType(ShowDocumentRequest2.method);
      ShowDocumentRequest2.capabilities = messages_1.CM.create("window.showDocument.support", void 0);
    })(ShowDocumentRequest || (exports2.ShowDocumentRequest = ShowDocumentRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.linkedEditingRange.js
var require_protocol_linkedEditingRange = __commonJS2({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.linkedEditingRange.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.LinkedEditingRangeRequest = void 0;
    var messages_1 = require_messages2();
    var LinkedEditingRangeRequest;
    (function(LinkedEditingRangeRequest2) {
      LinkedEditingRangeRequest2.method = "textDocument/linkedEditingRange";
      LinkedEditingRangeRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      LinkedEditingRangeRequest2.type = new messages_1.ProtocolRequestType(LinkedEditingRangeRequest2.method);
      LinkedEditingRangeRequest2.capabilities = messages_1.CM.create("textDocument.linkedEditingRange", "linkedEditingRangeProvider");
    })(LinkedEditingRangeRequest || (exports2.LinkedEditingRangeRequest = LinkedEditingRangeRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.fileOperations.js
var require_protocol_fileOperations = __commonJS2({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.fileOperations.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.WillDeleteFilesRequest = exports2.DidDeleteFilesNotification = exports2.DidRenameFilesNotification = exports2.WillRenameFilesRequest = exports2.DidCreateFilesNotification = exports2.WillCreateFilesRequest = exports2.FileOperationPatternKind = void 0;
    var messages_1 = require_messages2();
    var FileOperationPatternKind;
    (function(FileOperationPatternKind2) {
      FileOperationPatternKind2.file = "file";
      FileOperationPatternKind2.folder = "folder";
    })(FileOperationPatternKind || (exports2.FileOperationPatternKind = FileOperationPatternKind = {}));
    var WillCreateFilesRequest;
    (function(WillCreateFilesRequest2) {
      WillCreateFilesRequest2.method = "workspace/willCreateFiles";
      WillCreateFilesRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WillCreateFilesRequest2.type = new messages_1.ProtocolRequestType(WillCreateFilesRequest2.method);
      WillCreateFilesRequest2.capabilities = messages_1.CM.create("workspace.fileOperations.willCreate", "workspace.fileOperations.willCreate");
    })(WillCreateFilesRequest || (exports2.WillCreateFilesRequest = WillCreateFilesRequest = {}));
    var DidCreateFilesNotification;
    (function(DidCreateFilesNotification2) {
      DidCreateFilesNotification2.method = "workspace/didCreateFiles";
      DidCreateFilesNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidCreateFilesNotification2.type = new messages_1.ProtocolNotificationType(DidCreateFilesNotification2.method);
      DidCreateFilesNotification2.capabilities = messages_1.CM.create("workspace.fileOperations.didCreate", "workspace.fileOperations.didCreate");
    })(DidCreateFilesNotification || (exports2.DidCreateFilesNotification = DidCreateFilesNotification = {}));
    var WillRenameFilesRequest;
    (function(WillRenameFilesRequest2) {
      WillRenameFilesRequest2.method = "workspace/willRenameFiles";
      WillRenameFilesRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WillRenameFilesRequest2.type = new messages_1.ProtocolRequestType(WillRenameFilesRequest2.method);
      WillRenameFilesRequest2.capabilities = messages_1.CM.create("workspace.fileOperations.willRename", "workspace.fileOperations.willRename");
    })(WillRenameFilesRequest || (exports2.WillRenameFilesRequest = WillRenameFilesRequest = {}));
    var DidRenameFilesNotification;
    (function(DidRenameFilesNotification2) {
      DidRenameFilesNotification2.method = "workspace/didRenameFiles";
      DidRenameFilesNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidRenameFilesNotification2.type = new messages_1.ProtocolNotificationType(DidRenameFilesNotification2.method);
      DidRenameFilesNotification2.capabilities = messages_1.CM.create("workspace.fileOperations.didRename", "workspace.fileOperations.didRename");
    })(DidRenameFilesNotification || (exports2.DidRenameFilesNotification = DidRenameFilesNotification = {}));
    var DidDeleteFilesNotification;
    (function(DidDeleteFilesNotification2) {
      DidDeleteFilesNotification2.method = "workspace/didDeleteFiles";
      DidDeleteFilesNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidDeleteFilesNotification2.type = new messages_1.ProtocolNotificationType(DidDeleteFilesNotification2.method);
      DidDeleteFilesNotification2.capabilities = messages_1.CM.create("workspace.fileOperations.didDelete", "workspace.fileOperations.didDelete");
    })(DidDeleteFilesNotification || (exports2.DidDeleteFilesNotification = DidDeleteFilesNotification = {}));
    var WillDeleteFilesRequest;
    (function(WillDeleteFilesRequest2) {
      WillDeleteFilesRequest2.method = "workspace/willDeleteFiles";
      WillDeleteFilesRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WillDeleteFilesRequest2.type = new messages_1.ProtocolRequestType(WillDeleteFilesRequest2.method);
      WillDeleteFilesRequest2.capabilities = messages_1.CM.create("workspace.fileOperations.willDelete", "workspace.fileOperations.willDelete");
    })(WillDeleteFilesRequest || (exports2.WillDeleteFilesRequest = WillDeleteFilesRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.moniker.js
var require_protocol_moniker = __commonJS2({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.moniker.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MonikerRequest = exports2.MonikerKind = exports2.UniquenessLevel = void 0;
    var messages_1 = require_messages2();
    var UniquenessLevel;
    (function(UniquenessLevel2) {
      UniquenessLevel2.document = "document";
      UniquenessLevel2.project = "project";
      UniquenessLevel2.group = "group";
      UniquenessLevel2.scheme = "scheme";
      UniquenessLevel2.global = "global";
    })(UniquenessLevel || (exports2.UniquenessLevel = UniquenessLevel = {}));
    var MonikerKind;
    (function(MonikerKind2) {
      MonikerKind2.$import = "import";
      MonikerKind2.$export = "export";
      MonikerKind2.local = "local";
    })(MonikerKind || (exports2.MonikerKind = MonikerKind = {}));
    var MonikerRequest;
    (function(MonikerRequest2) {
      MonikerRequest2.method = "textDocument/moniker";
      MonikerRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      MonikerRequest2.type = new messages_1.ProtocolRequestType(MonikerRequest2.method);
      MonikerRequest2.capabilities = messages_1.CM.create("textDocument.moniker", "monikerProvider");
    })(MonikerRequest || (exports2.MonikerRequest = MonikerRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.typeHierarchy.js
var require_protocol_typeHierarchy = __commonJS2({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.typeHierarchy.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TypeHierarchySubtypesRequest = exports2.TypeHierarchySupertypesRequest = exports2.TypeHierarchyPrepareRequest = void 0;
    var messages_1 = require_messages2();
    var TypeHierarchyPrepareRequest;
    (function(TypeHierarchyPrepareRequest2) {
      TypeHierarchyPrepareRequest2.method = "textDocument/prepareTypeHierarchy";
      TypeHierarchyPrepareRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      TypeHierarchyPrepareRequest2.type = new messages_1.ProtocolRequestType(TypeHierarchyPrepareRequest2.method);
      TypeHierarchyPrepareRequest2.capabilities = messages_1.CM.create("textDocument.typeHierarchy", "typeHierarchyProvider");
    })(TypeHierarchyPrepareRequest || (exports2.TypeHierarchyPrepareRequest = TypeHierarchyPrepareRequest = {}));
    var TypeHierarchySupertypesRequest;
    (function(TypeHierarchySupertypesRequest2) {
      TypeHierarchySupertypesRequest2.method = "typeHierarchy/supertypes";
      TypeHierarchySupertypesRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      TypeHierarchySupertypesRequest2.type = new messages_1.ProtocolRequestType(TypeHierarchySupertypesRequest2.method);
    })(TypeHierarchySupertypesRequest || (exports2.TypeHierarchySupertypesRequest = TypeHierarchySupertypesRequest = {}));
    var TypeHierarchySubtypesRequest;
    (function(TypeHierarchySubtypesRequest2) {
      TypeHierarchySubtypesRequest2.method = "typeHierarchy/subtypes";
      TypeHierarchySubtypesRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      TypeHierarchySubtypesRequest2.type = new messages_1.ProtocolRequestType(TypeHierarchySubtypesRequest2.method);
    })(TypeHierarchySubtypesRequest || (exports2.TypeHierarchySubtypesRequest = TypeHierarchySubtypesRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.inlineValue.js
var require_protocol_inlineValue = __commonJS2({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.inlineValue.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.InlineValueRefreshRequest = exports2.InlineValueRequest = void 0;
    var messages_1 = require_messages2();
    var InlineValueRequest;
    (function(InlineValueRequest2) {
      InlineValueRequest2.method = "textDocument/inlineValue";
      InlineValueRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      InlineValueRequest2.type = new messages_1.ProtocolRequestType(InlineValueRequest2.method);
      InlineValueRequest2.capabilities = messages_1.CM.create("textDocument.inlineValue", "inlineValueProvider");
    })(InlineValueRequest || (exports2.InlineValueRequest = InlineValueRequest = {}));
    var InlineValueRefreshRequest;
    (function(InlineValueRefreshRequest2) {
      InlineValueRefreshRequest2.method = `workspace/inlineValue/refresh`;
      InlineValueRefreshRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      InlineValueRefreshRequest2.type = new messages_1.ProtocolRequestType0(InlineValueRefreshRequest2.method);
      InlineValueRefreshRequest2.capabilities = messages_1.CM.create("workspace.inlineValue.refreshSupport", void 0);
    })(InlineValueRefreshRequest || (exports2.InlineValueRefreshRequest = InlineValueRefreshRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.inlayHint.js
var require_protocol_inlayHint = __commonJS2({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.inlayHint.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.InlayHintRefreshRequest = exports2.InlayHintResolveRequest = exports2.InlayHintRequest = void 0;
    var messages_1 = require_messages2();
    var InlayHintRequest;
    (function(InlayHintRequest2) {
      InlayHintRequest2.method = "textDocument/inlayHint";
      InlayHintRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      InlayHintRequest2.type = new messages_1.ProtocolRequestType(InlayHintRequest2.method);
      InlayHintRequest2.capabilities = messages_1.CM.create("textDocument.inlayHint", "inlayHintProvider");
    })(InlayHintRequest || (exports2.InlayHintRequest = InlayHintRequest = {}));
    var InlayHintResolveRequest;
    (function(InlayHintResolveRequest2) {
      InlayHintResolveRequest2.method = "inlayHint/resolve";
      InlayHintResolveRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      InlayHintResolveRequest2.type = new messages_1.ProtocolRequestType(InlayHintResolveRequest2.method);
      InlayHintResolveRequest2.capabilities = messages_1.CM.create("textDocument.inlayHint.resolveSupport", "inlayHintProvider.resolveProvider");
    })(InlayHintResolveRequest || (exports2.InlayHintResolveRequest = InlayHintResolveRequest = {}));
    var InlayHintRefreshRequest;
    (function(InlayHintRefreshRequest2) {
      InlayHintRefreshRequest2.method = `workspace/inlayHint/refresh`;
      InlayHintRefreshRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      InlayHintRefreshRequest2.type = new messages_1.ProtocolRequestType0(InlayHintRefreshRequest2.method);
      InlayHintRefreshRequest2.capabilities = messages_1.CM.create("workspace.inlayHint.refreshSupport", void 0);
    })(InlayHintRefreshRequest || (exports2.InlayHintRefreshRequest = InlayHintRefreshRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.diagnostic.js
var require_protocol_diagnostic = __commonJS2({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.diagnostic.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
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
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || /* @__PURE__ */ (function() {
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
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DiagnosticRefreshRequest = exports2.WorkspaceDiagnosticRequest = exports2.DocumentDiagnosticRequest = exports2.DocumentDiagnosticReportKind = exports2.DiagnosticServerCancellationData = void 0;
    var vscode_jsonrpc_1 = require_api();
    var Is2 = __importStar(require_is3());
    var messages_1 = require_messages2();
    var DiagnosticServerCancellationData;
    (function(DiagnosticServerCancellationData2) {
      function is(value) {
        const candidate = value;
        return candidate && Is2.boolean(candidate.retriggerRequest);
      }
      DiagnosticServerCancellationData2.is = is;
    })(DiagnosticServerCancellationData || (exports2.DiagnosticServerCancellationData = DiagnosticServerCancellationData = {}));
    var DocumentDiagnosticReportKind;
    (function(DocumentDiagnosticReportKind2) {
      DocumentDiagnosticReportKind2.Full = "full";
      DocumentDiagnosticReportKind2.Unchanged = "unchanged";
    })(DocumentDiagnosticReportKind || (exports2.DocumentDiagnosticReportKind = DocumentDiagnosticReportKind = {}));
    var DocumentDiagnosticRequest;
    (function(DocumentDiagnosticRequest2) {
      DocumentDiagnosticRequest2.method = "textDocument/diagnostic";
      DocumentDiagnosticRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentDiagnosticRequest2.type = new messages_1.ProtocolRequestType(DocumentDiagnosticRequest2.method);
      DocumentDiagnosticRequest2.partialResult = new vscode_jsonrpc_1.ProgressType();
      DocumentDiagnosticRequest2.capabilities = messages_1.CM.create("textDocument.diagnostic", "diagnosticProvider");
    })(DocumentDiagnosticRequest || (exports2.DocumentDiagnosticRequest = DocumentDiagnosticRequest = {}));
    var WorkspaceDiagnosticRequest;
    (function(WorkspaceDiagnosticRequest2) {
      WorkspaceDiagnosticRequest2.method = "workspace/diagnostic";
      WorkspaceDiagnosticRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WorkspaceDiagnosticRequest2.type = new messages_1.ProtocolRequestType(WorkspaceDiagnosticRequest2.method);
      WorkspaceDiagnosticRequest2.partialResult = new vscode_jsonrpc_1.ProgressType();
      WorkspaceDiagnosticRequest2.capabilities = messages_1.CM.create("workspace.diagnostics", "diagnosticProvider.workspaceDiagnostics");
    })(WorkspaceDiagnosticRequest || (exports2.WorkspaceDiagnosticRequest = WorkspaceDiagnosticRequest = {}));
    var DiagnosticRefreshRequest;
    (function(DiagnosticRefreshRequest2) {
      DiagnosticRefreshRequest2.method = `workspace/diagnostic/refresh`;
      DiagnosticRefreshRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      DiagnosticRefreshRequest2.type = new messages_1.ProtocolRequestType0(DiagnosticRefreshRequest2.method);
      DiagnosticRefreshRequest2.capabilities = messages_1.CM.create("workspace.diagnostics.refreshSupport", void 0);
    })(DiagnosticRefreshRequest || (exports2.DiagnosticRefreshRequest = DiagnosticRefreshRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.notebook.js
var require_protocol_notebook = __commonJS2({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.notebook.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
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
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || /* @__PURE__ */ (function() {
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
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DidCloseNotebookDocumentNotification = exports2.DidSaveNotebookDocumentNotification = exports2.DidChangeNotebookDocumentNotification = exports2.NotebookCellArrayChange = exports2.DidOpenNotebookDocumentNotification = exports2.NotebookDocumentSyncRegistrationType = exports2.NotebookDocument = exports2.NotebookCell = exports2.ExecutionSummary = exports2.NotebookCellKind = void 0;
    var vscode_languageserver_types_1 = (init_main(), __toCommonJS2(main_exports));
    var Is2 = __importStar(require_is3());
    var messages_1 = require_messages2();
    var NotebookCellKind;
    (function(NotebookCellKind2) {
      NotebookCellKind2.Markup = 1;
      NotebookCellKind2.Code = 2;
      function is(value) {
        return value === 1 || value === 2;
      }
      NotebookCellKind2.is = is;
    })(NotebookCellKind || (exports2.NotebookCellKind = NotebookCellKind = {}));
    var ExecutionSummary;
    (function(ExecutionSummary2) {
      function create(executionOrder, success) {
        const result = { executionOrder };
        if (success === true || success === false) {
          result.success = success;
        }
        return result;
      }
      ExecutionSummary2.create = create;
      function is(value) {
        const candidate = value;
        return Is2.objectLiteral(candidate) && vscode_languageserver_types_1.uinteger.is(candidate.executionOrder) && (candidate.success === void 0 || Is2.boolean(candidate.success));
      }
      ExecutionSummary2.is = is;
      function equals(one, other) {
        if (one === other) {
          return true;
        }
        if (one === null || one === void 0 || other === null || other === void 0) {
          return false;
        }
        return one.executionOrder === other.executionOrder && one.success === other.success;
      }
      ExecutionSummary2.equals = equals;
    })(ExecutionSummary || (exports2.ExecutionSummary = ExecutionSummary = {}));
    var NotebookCell;
    (function(NotebookCell2) {
      function create(kind, document2) {
        return { kind, document: document2 };
      }
      NotebookCell2.create = create;
      function is(value) {
        const candidate = value;
        return Is2.objectLiteral(candidate) && NotebookCellKind.is(candidate.kind) && vscode_languageserver_types_1.DocumentUri.is(candidate.document) && (candidate.metadata === void 0 || Is2.objectLiteral(candidate.metadata));
      }
      NotebookCell2.is = is;
      function diff(one, two) {
        const result = /* @__PURE__ */ new Set();
        if (one.document !== two.document) {
          result.add("document");
        }
        if (one.kind !== two.kind) {
          result.add("kind");
        }
        if (one.executionSummary !== two.executionSummary) {
          result.add("executionSummary");
        }
        if ((one.metadata !== void 0 || two.metadata !== void 0) && !equalsMetadata(one.metadata, two.metadata)) {
          result.add("metadata");
        }
        if ((one.executionSummary !== void 0 || two.executionSummary !== void 0) && !ExecutionSummary.equals(one.executionSummary, two.executionSummary)) {
          result.add("executionSummary");
        }
        return result;
      }
      NotebookCell2.diff = diff;
      function equalsMetadata(one, other) {
        if (one === other) {
          return true;
        }
        if (one === null || one === void 0 || other === null || other === void 0) {
          return false;
        }
        if (typeof one !== typeof other) {
          return false;
        }
        if (typeof one !== "object") {
          return false;
        }
        const oneArray = Array.isArray(one);
        const otherArray = Array.isArray(other);
        if (oneArray !== otherArray) {
          return false;
        }
        if (oneArray && otherArray) {
          if (one.length !== other.length) {
            return false;
          }
          for (let i2 = 0; i2 < one.length; i2++) {
            if (!equalsMetadata(one[i2], other[i2])) {
              return false;
            }
          }
        }
        if (Is2.objectLiteral(one) && Is2.objectLiteral(other)) {
          const oneKeys = Object.keys(one);
          const otherKeys = Object.keys(other);
          if (oneKeys.length !== otherKeys.length) {
            return false;
          }
          oneKeys.sort();
          otherKeys.sort();
          if (!equalsMetadata(oneKeys, otherKeys)) {
            return false;
          }
          for (let i2 = 0; i2 < oneKeys.length; i2++) {
            const prop = oneKeys[i2];
            if (!equalsMetadata(one[prop], other[prop])) {
              return false;
            }
          }
        }
        return true;
      }
    })(NotebookCell || (exports2.NotebookCell = NotebookCell = {}));
    var NotebookDocument;
    (function(NotebookDocument2) {
      function create(uri, notebookType, version, cells) {
        return { uri, notebookType, version, cells };
      }
      NotebookDocument2.create = create;
      function is(value) {
        const candidate = value;
        return Is2.objectLiteral(candidate) && Is2.string(candidate.uri) && vscode_languageserver_types_1.integer.is(candidate.version) && Is2.typedArray(candidate.cells, NotebookCell.is);
      }
      NotebookDocument2.is = is;
    })(NotebookDocument || (exports2.NotebookDocument = NotebookDocument = {}));
    var NotebookDocumentSyncRegistrationType;
    (function(NotebookDocumentSyncRegistrationType2) {
      NotebookDocumentSyncRegistrationType2.method = "notebookDocument/sync";
      NotebookDocumentSyncRegistrationType2.messageDirection = messages_1.MessageDirection.clientToServer;
      NotebookDocumentSyncRegistrationType2.type = new messages_1.RegistrationType(NotebookDocumentSyncRegistrationType2.method);
    })(NotebookDocumentSyncRegistrationType || (exports2.NotebookDocumentSyncRegistrationType = NotebookDocumentSyncRegistrationType = {}));
    var DidOpenNotebookDocumentNotification;
    (function(DidOpenNotebookDocumentNotification2) {
      DidOpenNotebookDocumentNotification2.method = "notebookDocument/didOpen";
      DidOpenNotebookDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidOpenNotebookDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidOpenNotebookDocumentNotification2.method);
      DidOpenNotebookDocumentNotification2.registrationMethod = NotebookDocumentSyncRegistrationType.method;
    })(DidOpenNotebookDocumentNotification || (exports2.DidOpenNotebookDocumentNotification = DidOpenNotebookDocumentNotification = {}));
    var NotebookCellArrayChange;
    (function(NotebookCellArrayChange2) {
      function is(value) {
        const candidate = value;
        return Is2.objectLiteral(candidate) && vscode_languageserver_types_1.uinteger.is(candidate.start) && vscode_languageserver_types_1.uinteger.is(candidate.deleteCount) && (candidate.cells === void 0 || Is2.typedArray(candidate.cells, NotebookCell.is));
      }
      NotebookCellArrayChange2.is = is;
      function create(start2, deleteCount, cells) {
        const result = { start: start2, deleteCount };
        if (cells !== void 0) {
          result.cells = cells;
        }
        return result;
      }
      NotebookCellArrayChange2.create = create;
    })(NotebookCellArrayChange || (exports2.NotebookCellArrayChange = NotebookCellArrayChange = {}));
    var DidChangeNotebookDocumentNotification;
    (function(DidChangeNotebookDocumentNotification2) {
      DidChangeNotebookDocumentNotification2.method = "notebookDocument/didChange";
      DidChangeNotebookDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidChangeNotebookDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidChangeNotebookDocumentNotification2.method);
      DidChangeNotebookDocumentNotification2.registrationMethod = NotebookDocumentSyncRegistrationType.method;
    })(DidChangeNotebookDocumentNotification || (exports2.DidChangeNotebookDocumentNotification = DidChangeNotebookDocumentNotification = {}));
    var DidSaveNotebookDocumentNotification;
    (function(DidSaveNotebookDocumentNotification2) {
      DidSaveNotebookDocumentNotification2.method = "notebookDocument/didSave";
      DidSaveNotebookDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidSaveNotebookDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidSaveNotebookDocumentNotification2.method);
      DidSaveNotebookDocumentNotification2.registrationMethod = NotebookDocumentSyncRegistrationType.method;
    })(DidSaveNotebookDocumentNotification || (exports2.DidSaveNotebookDocumentNotification = DidSaveNotebookDocumentNotification = {}));
    var DidCloseNotebookDocumentNotification;
    (function(DidCloseNotebookDocumentNotification2) {
      DidCloseNotebookDocumentNotification2.method = "notebookDocument/didClose";
      DidCloseNotebookDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidCloseNotebookDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidCloseNotebookDocumentNotification2.method);
      DidCloseNotebookDocumentNotification2.registrationMethod = NotebookDocumentSyncRegistrationType.method;
    })(DidCloseNotebookDocumentNotification || (exports2.DidCloseNotebookDocumentNotification = DidCloseNotebookDocumentNotification = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.inlineCompletion.js
var require_protocol_inlineCompletion = __commonJS2({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.inlineCompletion.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.InlineCompletionRequest = void 0;
    var messages_1 = require_messages2();
    var InlineCompletionRequest;
    (function(InlineCompletionRequest2) {
      InlineCompletionRequest2.method = "textDocument/inlineCompletion";
      InlineCompletionRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      InlineCompletionRequest2.type = new messages_1.ProtocolRequestType(InlineCompletionRequest2.method);
      InlineCompletionRequest2.capabilities = messages_1.CM.create("textDocument.inlineCompletion", "inlineCompletionProvider");
    })(InlineCompletionRequest || (exports2.InlineCompletionRequest = InlineCompletionRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.textDocumentContent.js
var require_protocol_textDocumentContent = __commonJS2({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.textDocumentContent.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TextDocumentContentRefreshRequest = exports2.TextDocumentContentRequest = void 0;
    var messages_1 = require_messages2();
    var TextDocumentContentRequest;
    (function(TextDocumentContentRequest2) {
      TextDocumentContentRequest2.method = "workspace/textDocumentContent";
      TextDocumentContentRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      TextDocumentContentRequest2.type = new messages_1.ProtocolRequestType(TextDocumentContentRequest2.method);
      TextDocumentContentRequest2.capabilities = messages_1.CM.create("workspace.textDocumentContent", "workspace.textDocumentContent");
    })(TextDocumentContentRequest || (exports2.TextDocumentContentRequest = TextDocumentContentRequest = {}));
    var TextDocumentContentRefreshRequest;
    (function(TextDocumentContentRefreshRequest2) {
      TextDocumentContentRefreshRequest2.method = `workspace/textDocumentContent/refresh`;
      TextDocumentContentRefreshRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      TextDocumentContentRefreshRequest2.type = new messages_1.ProtocolRequestType(TextDocumentContentRefreshRequest2.method);
    })(TextDocumentContentRefreshRequest || (exports2.TextDocumentContentRefreshRequest = TextDocumentContentRefreshRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.js
var require_protocol = __commonJS2({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
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
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || /* @__PURE__ */ (function() {
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
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CodeActionRequest = exports2.DocumentSymbolRequest = exports2.DocumentHighlightRequest = exports2.ReferencesRequest = exports2.DefinitionRequest = exports2.SignatureHelpRequest = exports2.SignatureHelpTriggerKind = exports2.HoverRequest = exports2.CompletionResolveRequest = exports2.CompletionRequest = exports2.CompletionTriggerKind = exports2.PublishDiagnosticsNotification = exports2.WatchKind = exports2.GlobPattern = exports2.RelativePattern = exports2.FileChangeType = exports2.DidChangeWatchedFilesNotification = exports2.WillSaveTextDocumentWaitUntilRequest = exports2.WillSaveTextDocumentNotification = exports2.TextDocumentSaveReason = exports2.DidSaveTextDocumentNotification = exports2.DidCloseTextDocumentNotification = exports2.DidChangeTextDocumentNotification = exports2.TextDocumentContentChangeEvent = exports2.DidOpenTextDocumentNotification = exports2.TextDocumentSyncKind = exports2.TelemetryEventNotification = exports2.LogMessageNotification = exports2.ShowMessageRequest = exports2.ShowMessageNotification = exports2.MessageType = exports2.DidChangeConfigurationNotification = exports2.ExitNotification = exports2.ShutdownRequest = exports2.InitializedNotification = exports2.InitializeErrorCodes = exports2.InitializeRequest = exports2.WorkDoneProgressOptions = exports2.TextDocumentRegistrationOptions = exports2.StaticRegistrationOptions = exports2.PositionEncodingKind = exports2.RegularExpressionEngineKind = exports2.FailureHandlingKind = exports2.ResourceOperationKind = exports2.UnregistrationRequest = exports2.RegistrationRequest = exports2.DocumentSelector = exports2.NotebookCellTextDocumentFilter = exports2.NotebookDocumentFilter = exports2.TextDocumentFilter = void 0;
    exports2.UniquenessLevel = exports2.WillDeleteFilesRequest = exports2.DidDeleteFilesNotification = exports2.WillRenameFilesRequest = exports2.DidRenameFilesNotification = exports2.WillCreateFilesRequest = exports2.DidCreateFilesNotification = exports2.FileOperationPatternKind = exports2.LinkedEditingRangeRequest = exports2.ShowDocumentRequest = exports2.SemanticTokensRegistrationType = exports2.SemanticTokensRefreshRequest = exports2.SemanticTokensRangeRequest = exports2.SemanticTokensDeltaRequest = exports2.SemanticTokensRequest = exports2.TokenFormat = exports2.CallHierarchyPrepareRequest = exports2.CallHierarchyOutgoingCallsRequest = exports2.CallHierarchyIncomingCallsRequest = exports2.WorkDoneProgressCancelNotification = exports2.WorkDoneProgressCreateRequest = exports2.WorkDoneProgress = exports2.SelectionRangeRequest = exports2.DeclarationRequest = exports2.FoldingRangeRefreshRequest = exports2.FoldingRangeRequest = exports2.ColorPresentationRequest = exports2.DocumentColorRequest = exports2.ConfigurationRequest = exports2.DidChangeWorkspaceFoldersNotification = exports2.WorkspaceFoldersRequest = exports2.TypeDefinitionRequest = exports2.ImplementationRequest = exports2.ApplyWorkspaceEditRequest = exports2.ExecuteCommandRequest = exports2.PrepareRenameRequest = exports2.RenameRequest = exports2.PrepareSupportDefaultBehavior = exports2.DocumentOnTypeFormattingRequest = exports2.DocumentRangesFormattingRequest = exports2.DocumentRangeFormattingRequest = exports2.DocumentFormattingRequest = exports2.DocumentLinkResolveRequest = exports2.DocumentLinkRequest = exports2.CodeLensRefreshRequest = exports2.CodeLensResolveRequest = exports2.CodeLensRequest = exports2.WorkspaceSymbolResolveRequest = exports2.WorkspaceSymbolRequest = exports2.CodeActionResolveRequest = void 0;
    exports2.TextDocumentContentRefreshRequest = exports2.TextDocumentContentRequest = exports2.InlineCompletionRequest = exports2.DidCloseNotebookDocumentNotification = exports2.DidSaveNotebookDocumentNotification = exports2.DidChangeNotebookDocumentNotification = exports2.NotebookCellArrayChange = exports2.DidOpenNotebookDocumentNotification = exports2.NotebookDocumentSyncRegistrationType = exports2.NotebookDocument = exports2.NotebookCell = exports2.ExecutionSummary = exports2.NotebookCellKind = exports2.DiagnosticRefreshRequest = exports2.WorkspaceDiagnosticRequest = exports2.DocumentDiagnosticRequest = exports2.DocumentDiagnosticReportKind = exports2.DiagnosticServerCancellationData = exports2.InlayHintRefreshRequest = exports2.InlayHintResolveRequest = exports2.InlayHintRequest = exports2.InlineValueRefreshRequest = exports2.InlineValueRequest = exports2.TypeHierarchySupertypesRequest = exports2.TypeHierarchySubtypesRequest = exports2.TypeHierarchyPrepareRequest = exports2.MonikerRequest = exports2.MonikerKind = void 0;
    var messages_1 = require_messages2();
    var vscode_languageserver_types_1 = (init_main(), __toCommonJS2(main_exports));
    var Is2 = __importStar(require_is3());
    var protocol_implementation_1 = require_protocol_implementation();
    Object.defineProperty(exports2, "ImplementationRequest", { enumerable: true, get: function() {
      return protocol_implementation_1.ImplementationRequest;
    } });
    var protocol_typeDefinition_1 = require_protocol_typeDefinition();
    Object.defineProperty(exports2, "TypeDefinitionRequest", { enumerable: true, get: function() {
      return protocol_typeDefinition_1.TypeDefinitionRequest;
    } });
    var protocol_workspaceFolder_1 = require_protocol_workspaceFolder();
    Object.defineProperty(exports2, "WorkspaceFoldersRequest", { enumerable: true, get: function() {
      return protocol_workspaceFolder_1.WorkspaceFoldersRequest;
    } });
    Object.defineProperty(exports2, "DidChangeWorkspaceFoldersNotification", { enumerable: true, get: function() {
      return protocol_workspaceFolder_1.DidChangeWorkspaceFoldersNotification;
    } });
    var protocol_configuration_1 = require_protocol_configuration();
    Object.defineProperty(exports2, "ConfigurationRequest", { enumerable: true, get: function() {
      return protocol_configuration_1.ConfigurationRequest;
    } });
    var protocol_colorProvider_1 = require_protocol_colorProvider();
    Object.defineProperty(exports2, "DocumentColorRequest", { enumerable: true, get: function() {
      return protocol_colorProvider_1.DocumentColorRequest;
    } });
    Object.defineProperty(exports2, "ColorPresentationRequest", { enumerable: true, get: function() {
      return protocol_colorProvider_1.ColorPresentationRequest;
    } });
    var protocol_foldingRange_1 = require_protocol_foldingRange();
    Object.defineProperty(exports2, "FoldingRangeRequest", { enumerable: true, get: function() {
      return protocol_foldingRange_1.FoldingRangeRequest;
    } });
    Object.defineProperty(exports2, "FoldingRangeRefreshRequest", { enumerable: true, get: function() {
      return protocol_foldingRange_1.FoldingRangeRefreshRequest;
    } });
    var protocol_declaration_1 = require_protocol_declaration();
    Object.defineProperty(exports2, "DeclarationRequest", { enumerable: true, get: function() {
      return protocol_declaration_1.DeclarationRequest;
    } });
    var protocol_selectionRange_1 = require_protocol_selectionRange();
    Object.defineProperty(exports2, "SelectionRangeRequest", { enumerable: true, get: function() {
      return protocol_selectionRange_1.SelectionRangeRequest;
    } });
    var protocol_progress_1 = require_protocol_progress();
    Object.defineProperty(exports2, "WorkDoneProgress", { enumerable: true, get: function() {
      return protocol_progress_1.WorkDoneProgress;
    } });
    Object.defineProperty(exports2, "WorkDoneProgressCreateRequest", { enumerable: true, get: function() {
      return protocol_progress_1.WorkDoneProgressCreateRequest;
    } });
    Object.defineProperty(exports2, "WorkDoneProgressCancelNotification", { enumerable: true, get: function() {
      return protocol_progress_1.WorkDoneProgressCancelNotification;
    } });
    var protocol_callHierarchy_1 = require_protocol_callHierarchy();
    Object.defineProperty(exports2, "CallHierarchyIncomingCallsRequest", { enumerable: true, get: function() {
      return protocol_callHierarchy_1.CallHierarchyIncomingCallsRequest;
    } });
    Object.defineProperty(exports2, "CallHierarchyOutgoingCallsRequest", { enumerable: true, get: function() {
      return protocol_callHierarchy_1.CallHierarchyOutgoingCallsRequest;
    } });
    Object.defineProperty(exports2, "CallHierarchyPrepareRequest", { enumerable: true, get: function() {
      return protocol_callHierarchy_1.CallHierarchyPrepareRequest;
    } });
    var protocol_semanticTokens_1 = require_protocol_semanticTokens();
    Object.defineProperty(exports2, "TokenFormat", { enumerable: true, get: function() {
      return protocol_semanticTokens_1.TokenFormat;
    } });
    Object.defineProperty(exports2, "SemanticTokensRequest", { enumerable: true, get: function() {
      return protocol_semanticTokens_1.SemanticTokensRequest;
    } });
    Object.defineProperty(exports2, "SemanticTokensDeltaRequest", { enumerable: true, get: function() {
      return protocol_semanticTokens_1.SemanticTokensDeltaRequest;
    } });
    Object.defineProperty(exports2, "SemanticTokensRangeRequest", { enumerable: true, get: function() {
      return protocol_semanticTokens_1.SemanticTokensRangeRequest;
    } });
    Object.defineProperty(exports2, "SemanticTokensRefreshRequest", { enumerable: true, get: function() {
      return protocol_semanticTokens_1.SemanticTokensRefreshRequest;
    } });
    Object.defineProperty(exports2, "SemanticTokensRegistrationType", { enumerable: true, get: function() {
      return protocol_semanticTokens_1.SemanticTokensRegistrationType;
    } });
    var protocol_showDocument_1 = require_protocol_showDocument();
    Object.defineProperty(exports2, "ShowDocumentRequest", { enumerable: true, get: function() {
      return protocol_showDocument_1.ShowDocumentRequest;
    } });
    var protocol_linkedEditingRange_1 = require_protocol_linkedEditingRange();
    Object.defineProperty(exports2, "LinkedEditingRangeRequest", { enumerable: true, get: function() {
      return protocol_linkedEditingRange_1.LinkedEditingRangeRequest;
    } });
    var protocol_fileOperations_1 = require_protocol_fileOperations();
    Object.defineProperty(exports2, "FileOperationPatternKind", { enumerable: true, get: function() {
      return protocol_fileOperations_1.FileOperationPatternKind;
    } });
    Object.defineProperty(exports2, "DidCreateFilesNotification", { enumerable: true, get: function() {
      return protocol_fileOperations_1.DidCreateFilesNotification;
    } });
    Object.defineProperty(exports2, "WillCreateFilesRequest", { enumerable: true, get: function() {
      return protocol_fileOperations_1.WillCreateFilesRequest;
    } });
    Object.defineProperty(exports2, "DidRenameFilesNotification", { enumerable: true, get: function() {
      return protocol_fileOperations_1.DidRenameFilesNotification;
    } });
    Object.defineProperty(exports2, "WillRenameFilesRequest", { enumerable: true, get: function() {
      return protocol_fileOperations_1.WillRenameFilesRequest;
    } });
    Object.defineProperty(exports2, "DidDeleteFilesNotification", { enumerable: true, get: function() {
      return protocol_fileOperations_1.DidDeleteFilesNotification;
    } });
    Object.defineProperty(exports2, "WillDeleteFilesRequest", { enumerable: true, get: function() {
      return protocol_fileOperations_1.WillDeleteFilesRequest;
    } });
    var protocol_moniker_1 = require_protocol_moniker();
    Object.defineProperty(exports2, "UniquenessLevel", { enumerable: true, get: function() {
      return protocol_moniker_1.UniquenessLevel;
    } });
    Object.defineProperty(exports2, "MonikerKind", { enumerable: true, get: function() {
      return protocol_moniker_1.MonikerKind;
    } });
    Object.defineProperty(exports2, "MonikerRequest", { enumerable: true, get: function() {
      return protocol_moniker_1.MonikerRequest;
    } });
    var protocol_typeHierarchy_1 = require_protocol_typeHierarchy();
    Object.defineProperty(exports2, "TypeHierarchyPrepareRequest", { enumerable: true, get: function() {
      return protocol_typeHierarchy_1.TypeHierarchyPrepareRequest;
    } });
    Object.defineProperty(exports2, "TypeHierarchySubtypesRequest", { enumerable: true, get: function() {
      return protocol_typeHierarchy_1.TypeHierarchySubtypesRequest;
    } });
    Object.defineProperty(exports2, "TypeHierarchySupertypesRequest", { enumerable: true, get: function() {
      return protocol_typeHierarchy_1.TypeHierarchySupertypesRequest;
    } });
    var protocol_inlineValue_1 = require_protocol_inlineValue();
    Object.defineProperty(exports2, "InlineValueRequest", { enumerable: true, get: function() {
      return protocol_inlineValue_1.InlineValueRequest;
    } });
    Object.defineProperty(exports2, "InlineValueRefreshRequest", { enumerable: true, get: function() {
      return protocol_inlineValue_1.InlineValueRefreshRequest;
    } });
    var protocol_inlayHint_1 = require_protocol_inlayHint();
    Object.defineProperty(exports2, "InlayHintRequest", { enumerable: true, get: function() {
      return protocol_inlayHint_1.InlayHintRequest;
    } });
    Object.defineProperty(exports2, "InlayHintResolveRequest", { enumerable: true, get: function() {
      return protocol_inlayHint_1.InlayHintResolveRequest;
    } });
    Object.defineProperty(exports2, "InlayHintRefreshRequest", { enumerable: true, get: function() {
      return protocol_inlayHint_1.InlayHintRefreshRequest;
    } });
    var protocol_diagnostic_1 = require_protocol_diagnostic();
    Object.defineProperty(exports2, "DiagnosticServerCancellationData", { enumerable: true, get: function() {
      return protocol_diagnostic_1.DiagnosticServerCancellationData;
    } });
    Object.defineProperty(exports2, "DocumentDiagnosticReportKind", { enumerable: true, get: function() {
      return protocol_diagnostic_1.DocumentDiagnosticReportKind;
    } });
    Object.defineProperty(exports2, "DocumentDiagnosticRequest", { enumerable: true, get: function() {
      return protocol_diagnostic_1.DocumentDiagnosticRequest;
    } });
    Object.defineProperty(exports2, "WorkspaceDiagnosticRequest", { enumerable: true, get: function() {
      return protocol_diagnostic_1.WorkspaceDiagnosticRequest;
    } });
    Object.defineProperty(exports2, "DiagnosticRefreshRequest", { enumerable: true, get: function() {
      return protocol_diagnostic_1.DiagnosticRefreshRequest;
    } });
    var protocol_notebook_1 = require_protocol_notebook();
    Object.defineProperty(exports2, "NotebookCellKind", { enumerable: true, get: function() {
      return protocol_notebook_1.NotebookCellKind;
    } });
    Object.defineProperty(exports2, "ExecutionSummary", { enumerable: true, get: function() {
      return protocol_notebook_1.ExecutionSummary;
    } });
    Object.defineProperty(exports2, "NotebookCell", { enumerable: true, get: function() {
      return protocol_notebook_1.NotebookCell;
    } });
    Object.defineProperty(exports2, "NotebookDocument", { enumerable: true, get: function() {
      return protocol_notebook_1.NotebookDocument;
    } });
    Object.defineProperty(exports2, "NotebookDocumentSyncRegistrationType", { enumerable: true, get: function() {
      return protocol_notebook_1.NotebookDocumentSyncRegistrationType;
    } });
    Object.defineProperty(exports2, "DidOpenNotebookDocumentNotification", { enumerable: true, get: function() {
      return protocol_notebook_1.DidOpenNotebookDocumentNotification;
    } });
    Object.defineProperty(exports2, "NotebookCellArrayChange", { enumerable: true, get: function() {
      return protocol_notebook_1.NotebookCellArrayChange;
    } });
    Object.defineProperty(exports2, "DidChangeNotebookDocumentNotification", { enumerable: true, get: function() {
      return protocol_notebook_1.DidChangeNotebookDocumentNotification;
    } });
    Object.defineProperty(exports2, "DidSaveNotebookDocumentNotification", { enumerable: true, get: function() {
      return protocol_notebook_1.DidSaveNotebookDocumentNotification;
    } });
    Object.defineProperty(exports2, "DidCloseNotebookDocumentNotification", { enumerable: true, get: function() {
      return protocol_notebook_1.DidCloseNotebookDocumentNotification;
    } });
    var protocol_inlineCompletion_1 = require_protocol_inlineCompletion();
    Object.defineProperty(exports2, "InlineCompletionRequest", { enumerable: true, get: function() {
      return protocol_inlineCompletion_1.InlineCompletionRequest;
    } });
    var protocol_textDocumentContent_1 = require_protocol_textDocumentContent();
    Object.defineProperty(exports2, "TextDocumentContentRequest", { enumerable: true, get: function() {
      return protocol_textDocumentContent_1.TextDocumentContentRequest;
    } });
    Object.defineProperty(exports2, "TextDocumentContentRefreshRequest", { enumerable: true, get: function() {
      return protocol_textDocumentContent_1.TextDocumentContentRefreshRequest;
    } });
    var TextDocumentFilter;
    (function(TextDocumentFilter2) {
      function is(value) {
        const candidate = value;
        return Is2.string(candidate) || (Is2.string(candidate.language) || Is2.string(candidate.scheme) || GlobPattern.is(candidate.pattern));
      }
      TextDocumentFilter2.is = is;
    })(TextDocumentFilter || (exports2.TextDocumentFilter = TextDocumentFilter = {}));
    var NotebookDocumentFilter;
    (function(NotebookDocumentFilter2) {
      function is(value) {
        const candidate = value;
        return Is2.objectLiteral(candidate) && (Is2.string(candidate.notebookType) || Is2.string(candidate.scheme) || Is2.string(candidate.pattern));
      }
      NotebookDocumentFilter2.is = is;
    })(NotebookDocumentFilter || (exports2.NotebookDocumentFilter = NotebookDocumentFilter = {}));
    var NotebookCellTextDocumentFilter;
    (function(NotebookCellTextDocumentFilter2) {
      function is(value) {
        const candidate = value;
        return Is2.objectLiteral(candidate) && (Is2.string(candidate.notebook) || NotebookDocumentFilter.is(candidate.notebook)) && (candidate.language === void 0 || Is2.string(candidate.language));
      }
      NotebookCellTextDocumentFilter2.is = is;
    })(NotebookCellTextDocumentFilter || (exports2.NotebookCellTextDocumentFilter = NotebookCellTextDocumentFilter = {}));
    var DocumentSelector;
    (function(DocumentSelector2) {
      function is(value) {
        if (!Array.isArray(value)) {
          return false;
        }
        for (const elem of value) {
          if (!Is2.string(elem) && !TextDocumentFilter.is(elem) && !NotebookCellTextDocumentFilter.is(elem)) {
            return false;
          }
        }
        return true;
      }
      DocumentSelector2.is = is;
    })(DocumentSelector || (exports2.DocumentSelector = DocumentSelector = {}));
    var RegistrationRequest;
    (function(RegistrationRequest2) {
      RegistrationRequest2.method = "client/registerCapability";
      RegistrationRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      RegistrationRequest2.type = new messages_1.ProtocolRequestType(RegistrationRequest2.method);
    })(RegistrationRequest || (exports2.RegistrationRequest = RegistrationRequest = {}));
    var UnregistrationRequest;
    (function(UnregistrationRequest2) {
      UnregistrationRequest2.method = "client/unregisterCapability";
      UnregistrationRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      UnregistrationRequest2.type = new messages_1.ProtocolRequestType(UnregistrationRequest2.method);
    })(UnregistrationRequest || (exports2.UnregistrationRequest = UnregistrationRequest = {}));
    var ResourceOperationKind;
    (function(ResourceOperationKind2) {
      ResourceOperationKind2.Create = "create";
      ResourceOperationKind2.Rename = "rename";
      ResourceOperationKind2.Delete = "delete";
    })(ResourceOperationKind || (exports2.ResourceOperationKind = ResourceOperationKind = {}));
    var FailureHandlingKind;
    (function(FailureHandlingKind2) {
      FailureHandlingKind2.Abort = "abort";
      FailureHandlingKind2.Transactional = "transactional";
      FailureHandlingKind2.TextOnlyTransactional = "textOnlyTransactional";
      FailureHandlingKind2.Undo = "undo";
    })(FailureHandlingKind || (exports2.FailureHandlingKind = FailureHandlingKind = {}));
    var RegularExpressionEngineKind;
    (function(RegularExpressionEngineKind2) {
      RegularExpressionEngineKind2.ES2020 = "ES2020";
    })(RegularExpressionEngineKind || (exports2.RegularExpressionEngineKind = RegularExpressionEngineKind = {}));
    var PositionEncodingKind;
    (function(PositionEncodingKind2) {
      PositionEncodingKind2.UTF8 = "utf-8";
      PositionEncodingKind2.UTF16 = "utf-16";
      PositionEncodingKind2.UTF32 = "utf-32";
    })(PositionEncodingKind || (exports2.PositionEncodingKind = PositionEncodingKind = {}));
    var StaticRegistrationOptions;
    (function(StaticRegistrationOptions2) {
      function hasId(value) {
        const candidate = value;
        return candidate && Is2.string(candidate.id) && candidate.id.length > 0;
      }
      StaticRegistrationOptions2.hasId = hasId;
    })(StaticRegistrationOptions || (exports2.StaticRegistrationOptions = StaticRegistrationOptions = {}));
    var TextDocumentRegistrationOptions;
    (function(TextDocumentRegistrationOptions2) {
      function is(value) {
        const candidate = value;
        return candidate && (candidate.documentSelector === null || DocumentSelector.is(candidate.documentSelector));
      }
      TextDocumentRegistrationOptions2.is = is;
    })(TextDocumentRegistrationOptions || (exports2.TextDocumentRegistrationOptions = TextDocumentRegistrationOptions = {}));
    var WorkDoneProgressOptions;
    (function(WorkDoneProgressOptions2) {
      function is(value) {
        const candidate = value;
        return Is2.objectLiteral(candidate) && (candidate.workDoneProgress === void 0 || Is2.boolean(candidate.workDoneProgress));
      }
      WorkDoneProgressOptions2.is = is;
      function hasWorkDoneProgress(value) {
        const candidate = value;
        return candidate && Is2.boolean(candidate.workDoneProgress);
      }
      WorkDoneProgressOptions2.hasWorkDoneProgress = hasWorkDoneProgress;
    })(WorkDoneProgressOptions || (exports2.WorkDoneProgressOptions = WorkDoneProgressOptions = {}));
    var InitializeRequest;
    (function(InitializeRequest2) {
      InitializeRequest2.method = "initialize";
      InitializeRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      InitializeRequest2.type = new messages_1.ProtocolRequestType(InitializeRequest2.method);
    })(InitializeRequest || (exports2.InitializeRequest = InitializeRequest = {}));
    var InitializeErrorCodes;
    (function(InitializeErrorCodes2) {
      InitializeErrorCodes2.unknownProtocolVersion = 1;
    })(InitializeErrorCodes || (exports2.InitializeErrorCodes = InitializeErrorCodes = {}));
    var InitializedNotification;
    (function(InitializedNotification2) {
      InitializedNotification2.method = "initialized";
      InitializedNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      InitializedNotification2.type = new messages_1.ProtocolNotificationType(InitializedNotification2.method);
    })(InitializedNotification || (exports2.InitializedNotification = InitializedNotification = {}));
    var ShutdownRequest;
    (function(ShutdownRequest2) {
      ShutdownRequest2.method = "shutdown";
      ShutdownRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      ShutdownRequest2.type = new messages_1.ProtocolRequestType0(ShutdownRequest2.method);
    })(ShutdownRequest || (exports2.ShutdownRequest = ShutdownRequest = {}));
    var ExitNotification;
    (function(ExitNotification2) {
      ExitNotification2.method = "exit";
      ExitNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      ExitNotification2.type = new messages_1.ProtocolNotificationType0(ExitNotification2.method);
    })(ExitNotification || (exports2.ExitNotification = ExitNotification = {}));
    var DidChangeConfigurationNotification;
    (function(DidChangeConfigurationNotification2) {
      DidChangeConfigurationNotification2.method = "workspace/didChangeConfiguration";
      DidChangeConfigurationNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidChangeConfigurationNotification2.type = new messages_1.ProtocolNotificationType(DidChangeConfigurationNotification2.method);
      DidChangeConfigurationNotification2.capabilities = messages_1.CM.create("workspace.didChangeConfiguration", void 0);
    })(DidChangeConfigurationNotification || (exports2.DidChangeConfigurationNotification = DidChangeConfigurationNotification = {}));
    var MessageType;
    (function(MessageType2) {
      MessageType2.Error = 1;
      MessageType2.Warning = 2;
      MessageType2.Info = 3;
      MessageType2.Log = 4;
      MessageType2.Debug = 5;
    })(MessageType || (exports2.MessageType = MessageType = {}));
    var ShowMessageNotification;
    (function(ShowMessageNotification2) {
      ShowMessageNotification2.method = "window/showMessage";
      ShowMessageNotification2.messageDirection = messages_1.MessageDirection.serverToClient;
      ShowMessageNotification2.type = new messages_1.ProtocolNotificationType(ShowMessageNotification2.method);
      ShowMessageNotification2.capabilities = messages_1.CM.create("window.showMessage", void 0);
    })(ShowMessageNotification || (exports2.ShowMessageNotification = ShowMessageNotification = {}));
    var ShowMessageRequest;
    (function(ShowMessageRequest2) {
      ShowMessageRequest2.method = "window/showMessageRequest";
      ShowMessageRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      ShowMessageRequest2.type = new messages_1.ProtocolRequestType(ShowMessageRequest2.method);
      ShowMessageRequest2.capabilities = messages_1.CM.create("window.showMessage", void 0);
    })(ShowMessageRequest || (exports2.ShowMessageRequest = ShowMessageRequest = {}));
    var LogMessageNotification;
    (function(LogMessageNotification2) {
      LogMessageNotification2.method = "window/logMessage";
      LogMessageNotification2.messageDirection = messages_1.MessageDirection.serverToClient;
      LogMessageNotification2.type = new messages_1.ProtocolNotificationType(LogMessageNotification2.method);
    })(LogMessageNotification || (exports2.LogMessageNotification = LogMessageNotification = {}));
    var TelemetryEventNotification;
    (function(TelemetryEventNotification2) {
      TelemetryEventNotification2.method = "telemetry/event";
      TelemetryEventNotification2.messageDirection = messages_1.MessageDirection.serverToClient;
      TelemetryEventNotification2.type = new messages_1.ProtocolNotificationType(TelemetryEventNotification2.method);
    })(TelemetryEventNotification || (exports2.TelemetryEventNotification = TelemetryEventNotification = {}));
    var TextDocumentSyncKind;
    (function(TextDocumentSyncKind2) {
      TextDocumentSyncKind2.None = 0;
      TextDocumentSyncKind2.Full = 1;
      TextDocumentSyncKind2.Incremental = 2;
    })(TextDocumentSyncKind || (exports2.TextDocumentSyncKind = TextDocumentSyncKind = {}));
    var DidOpenTextDocumentNotification;
    (function(DidOpenTextDocumentNotification2) {
      DidOpenTextDocumentNotification2.method = "textDocument/didOpen";
      DidOpenTextDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidOpenTextDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidOpenTextDocumentNotification2.method);
      DidOpenTextDocumentNotification2.capabilities = messages_1.CM.create("textDocument.synchronization", "textDocumentSync.openClose");
    })(DidOpenTextDocumentNotification || (exports2.DidOpenTextDocumentNotification = DidOpenTextDocumentNotification = {}));
    var TextDocumentContentChangeEvent;
    (function(TextDocumentContentChangeEvent2) {
      function isIncremental(event) {
        const candidate = event;
        return candidate !== void 0 && candidate !== null && typeof candidate.text === "string" && candidate.range !== void 0 && (candidate.rangeLength === void 0 || typeof candidate.rangeLength === "number");
      }
      TextDocumentContentChangeEvent2.isIncremental = isIncremental;
      function isFull(event) {
        const candidate = event;
        return candidate !== void 0 && candidate !== null && typeof candidate.text === "string" && candidate.range === void 0 && candidate.rangeLength === void 0;
      }
      TextDocumentContentChangeEvent2.isFull = isFull;
    })(TextDocumentContentChangeEvent || (exports2.TextDocumentContentChangeEvent = TextDocumentContentChangeEvent = {}));
    var DidChangeTextDocumentNotification;
    (function(DidChangeTextDocumentNotification2) {
      DidChangeTextDocumentNotification2.method = "textDocument/didChange";
      DidChangeTextDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidChangeTextDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidChangeTextDocumentNotification2.method);
      DidChangeTextDocumentNotification2.capabilities = messages_1.CM.create("textDocument.synchronization", "textDocumentSync");
    })(DidChangeTextDocumentNotification || (exports2.DidChangeTextDocumentNotification = DidChangeTextDocumentNotification = {}));
    var DidCloseTextDocumentNotification;
    (function(DidCloseTextDocumentNotification2) {
      DidCloseTextDocumentNotification2.method = "textDocument/didClose";
      DidCloseTextDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidCloseTextDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidCloseTextDocumentNotification2.method);
      DidCloseTextDocumentNotification2.capabilities = messages_1.CM.create("textDocument.synchronization", "textDocumentSync.openClose");
    })(DidCloseTextDocumentNotification || (exports2.DidCloseTextDocumentNotification = DidCloseTextDocumentNotification = {}));
    var DidSaveTextDocumentNotification;
    (function(DidSaveTextDocumentNotification2) {
      DidSaveTextDocumentNotification2.method = "textDocument/didSave";
      DidSaveTextDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidSaveTextDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidSaveTextDocumentNotification2.method);
      DidSaveTextDocumentNotification2.capabilities = messages_1.CM.create("textDocument.synchronization.didSave", "textDocumentSync.save");
    })(DidSaveTextDocumentNotification || (exports2.DidSaveTextDocumentNotification = DidSaveTextDocumentNotification = {}));
    var TextDocumentSaveReason;
    (function(TextDocumentSaveReason2) {
      TextDocumentSaveReason2.Manual = 1;
      TextDocumentSaveReason2.AfterDelay = 2;
      TextDocumentSaveReason2.FocusOut = 3;
    })(TextDocumentSaveReason || (exports2.TextDocumentSaveReason = TextDocumentSaveReason = {}));
    var WillSaveTextDocumentNotification;
    (function(WillSaveTextDocumentNotification2) {
      WillSaveTextDocumentNotification2.method = "textDocument/willSave";
      WillSaveTextDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      WillSaveTextDocumentNotification2.type = new messages_1.ProtocolNotificationType(WillSaveTextDocumentNotification2.method);
      WillSaveTextDocumentNotification2.capabilities = messages_1.CM.create("textDocument.synchronization.willSave", "textDocumentSync.willSave");
    })(WillSaveTextDocumentNotification || (exports2.WillSaveTextDocumentNotification = WillSaveTextDocumentNotification = {}));
    var WillSaveTextDocumentWaitUntilRequest;
    (function(WillSaveTextDocumentWaitUntilRequest2) {
      WillSaveTextDocumentWaitUntilRequest2.method = "textDocument/willSaveWaitUntil";
      WillSaveTextDocumentWaitUntilRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WillSaveTextDocumentWaitUntilRequest2.type = new messages_1.ProtocolRequestType(WillSaveTextDocumentWaitUntilRequest2.method);
      WillSaveTextDocumentWaitUntilRequest2.capabilities = messages_1.CM.create("textDocument.synchronization.willSaveWaitUntil", "textDocumentSync.willSaveWaitUntil");
    })(WillSaveTextDocumentWaitUntilRequest || (exports2.WillSaveTextDocumentWaitUntilRequest = WillSaveTextDocumentWaitUntilRequest = {}));
    var DidChangeWatchedFilesNotification;
    (function(DidChangeWatchedFilesNotification2) {
      DidChangeWatchedFilesNotification2.method = "workspace/didChangeWatchedFiles";
      DidChangeWatchedFilesNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidChangeWatchedFilesNotification2.type = new messages_1.ProtocolNotificationType(DidChangeWatchedFilesNotification2.method);
      DidChangeWatchedFilesNotification2.capabilities = messages_1.CM.create("workspace.didChangeWatchedFiles", void 0);
    })(DidChangeWatchedFilesNotification || (exports2.DidChangeWatchedFilesNotification = DidChangeWatchedFilesNotification = {}));
    var FileChangeType;
    (function(FileChangeType2) {
      FileChangeType2.Created = 1;
      FileChangeType2.Changed = 2;
      FileChangeType2.Deleted = 3;
    })(FileChangeType || (exports2.FileChangeType = FileChangeType = {}));
    var RelativePattern;
    (function(RelativePattern2) {
      function is(value) {
        const candidate = value;
        return Is2.objectLiteral(candidate) && (vscode_languageserver_types_1.URI.is(candidate.baseUri) || vscode_languageserver_types_1.WorkspaceFolder.is(candidate.baseUri)) && Is2.string(candidate.pattern);
      }
      RelativePattern2.is = is;
    })(RelativePattern || (exports2.RelativePattern = RelativePattern = {}));
    var GlobPattern;
    (function(GlobPattern2) {
      function is(value) {
        const candidate = value;
        return Is2.string(candidate) || RelativePattern.is(candidate);
      }
      GlobPattern2.is = is;
    })(GlobPattern || (exports2.GlobPattern = GlobPattern = {}));
    var WatchKind;
    (function(WatchKind2) {
      WatchKind2.Create = 1;
      WatchKind2.Change = 2;
      WatchKind2.Delete = 4;
    })(WatchKind || (exports2.WatchKind = WatchKind = {}));
    var PublishDiagnosticsNotification;
    (function(PublishDiagnosticsNotification2) {
      PublishDiagnosticsNotification2.method = "textDocument/publishDiagnostics";
      PublishDiagnosticsNotification2.messageDirection = messages_1.MessageDirection.serverToClient;
      PublishDiagnosticsNotification2.type = new messages_1.ProtocolNotificationType(PublishDiagnosticsNotification2.method);
      PublishDiagnosticsNotification2.capabilities = messages_1.CM.create("textDocument.publishDiagnostics", void 0);
    })(PublishDiagnosticsNotification || (exports2.PublishDiagnosticsNotification = PublishDiagnosticsNotification = {}));
    var CompletionTriggerKind;
    (function(CompletionTriggerKind2) {
      CompletionTriggerKind2.Invoked = 1;
      CompletionTriggerKind2.TriggerCharacter = 2;
      CompletionTriggerKind2.TriggerForIncompleteCompletions = 3;
    })(CompletionTriggerKind || (exports2.CompletionTriggerKind = CompletionTriggerKind = {}));
    var CompletionRequest;
    (function(CompletionRequest2) {
      CompletionRequest2.method = "textDocument/completion";
      CompletionRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CompletionRequest2.type = new messages_1.ProtocolRequestType(CompletionRequest2.method);
      CompletionRequest2.capabilities = messages_1.CM.create("textDocument.completion", "completionProvider");
    })(CompletionRequest || (exports2.CompletionRequest = CompletionRequest = {}));
    var CompletionResolveRequest;
    (function(CompletionResolveRequest2) {
      CompletionResolveRequest2.method = "completionItem/resolve";
      CompletionResolveRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CompletionResolveRequest2.type = new messages_1.ProtocolRequestType(CompletionResolveRequest2.method);
      CompletionResolveRequest2.capabilities = messages_1.CM.create("textDocument.completion.completionItem.resolveSupport", "completionProvider.resolveProvider");
    })(CompletionResolveRequest || (exports2.CompletionResolveRequest = CompletionResolveRequest = {}));
    var HoverRequest;
    (function(HoverRequest2) {
      HoverRequest2.method = "textDocument/hover";
      HoverRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      HoverRequest2.type = new messages_1.ProtocolRequestType(HoverRequest2.method);
      HoverRequest2.capabilities = messages_1.CM.create("textDocument.hover", "hoverProvider");
    })(HoverRequest || (exports2.HoverRequest = HoverRequest = {}));
    var SignatureHelpTriggerKind;
    (function(SignatureHelpTriggerKind2) {
      SignatureHelpTriggerKind2.Invoked = 1;
      SignatureHelpTriggerKind2.TriggerCharacter = 2;
      SignatureHelpTriggerKind2.ContentChange = 3;
    })(SignatureHelpTriggerKind || (exports2.SignatureHelpTriggerKind = SignatureHelpTriggerKind = {}));
    var SignatureHelpRequest;
    (function(SignatureHelpRequest2) {
      SignatureHelpRequest2.method = "textDocument/signatureHelp";
      SignatureHelpRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      SignatureHelpRequest2.type = new messages_1.ProtocolRequestType(SignatureHelpRequest2.method);
      SignatureHelpRequest2.capabilities = messages_1.CM.create("textDocument.signatureHelp", "signatureHelpProvider");
    })(SignatureHelpRequest || (exports2.SignatureHelpRequest = SignatureHelpRequest = {}));
    var DefinitionRequest;
    (function(DefinitionRequest2) {
      DefinitionRequest2.method = "textDocument/definition";
      DefinitionRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DefinitionRequest2.type = new messages_1.ProtocolRequestType(DefinitionRequest2.method);
      DefinitionRequest2.capabilities = messages_1.CM.create("textDocument.definition", "definitionProvider");
    })(DefinitionRequest || (exports2.DefinitionRequest = DefinitionRequest = {}));
    var ReferencesRequest;
    (function(ReferencesRequest2) {
      ReferencesRequest2.method = "textDocument/references";
      ReferencesRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      ReferencesRequest2.type = new messages_1.ProtocolRequestType(ReferencesRequest2.method);
      ReferencesRequest2.capabilities = messages_1.CM.create("textDocument.references", "referencesProvider");
    })(ReferencesRequest || (exports2.ReferencesRequest = ReferencesRequest = {}));
    var DocumentHighlightRequest;
    (function(DocumentHighlightRequest2) {
      DocumentHighlightRequest2.method = "textDocument/documentHighlight";
      DocumentHighlightRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentHighlightRequest2.type = new messages_1.ProtocolRequestType(DocumentHighlightRequest2.method);
      DocumentHighlightRequest2.capabilities = messages_1.CM.create("textDocument.documentHighlight", "documentHighlightProvider");
    })(DocumentHighlightRequest || (exports2.DocumentHighlightRequest = DocumentHighlightRequest = {}));
    var DocumentSymbolRequest;
    (function(DocumentSymbolRequest2) {
      DocumentSymbolRequest2.method = "textDocument/documentSymbol";
      DocumentSymbolRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentSymbolRequest2.type = new messages_1.ProtocolRequestType(DocumentSymbolRequest2.method);
      DocumentSymbolRequest2.capabilities = messages_1.CM.create("textDocument.documentSymbol", "documentSymbolProvider");
    })(DocumentSymbolRequest || (exports2.DocumentSymbolRequest = DocumentSymbolRequest = {}));
    var CodeActionRequest;
    (function(CodeActionRequest2) {
      CodeActionRequest2.method = "textDocument/codeAction";
      CodeActionRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CodeActionRequest2.type = new messages_1.ProtocolRequestType(CodeActionRequest2.method);
      CodeActionRequest2.capabilities = messages_1.CM.create("textDocument.codeAction", "codeActionProvider");
    })(CodeActionRequest || (exports2.CodeActionRequest = CodeActionRequest = {}));
    var CodeActionResolveRequest;
    (function(CodeActionResolveRequest2) {
      CodeActionResolveRequest2.method = "codeAction/resolve";
      CodeActionResolveRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CodeActionResolveRequest2.type = new messages_1.ProtocolRequestType(CodeActionResolveRequest2.method);
      CodeActionResolveRequest2.capabilities = messages_1.CM.create("textDocument.codeAction.resolveSupport", "codeActionProvider.resolveProvider");
    })(CodeActionResolveRequest || (exports2.CodeActionResolveRequest = CodeActionResolveRequest = {}));
    var WorkspaceSymbolRequest;
    (function(WorkspaceSymbolRequest2) {
      WorkspaceSymbolRequest2.method = "workspace/symbol";
      WorkspaceSymbolRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WorkspaceSymbolRequest2.type = new messages_1.ProtocolRequestType(WorkspaceSymbolRequest2.method);
      WorkspaceSymbolRequest2.capabilities = messages_1.CM.create("workspace.symbol", "workspaceSymbolProvider");
    })(WorkspaceSymbolRequest || (exports2.WorkspaceSymbolRequest = WorkspaceSymbolRequest = {}));
    var WorkspaceSymbolResolveRequest;
    (function(WorkspaceSymbolResolveRequest2) {
      WorkspaceSymbolResolveRequest2.method = "workspaceSymbol/resolve";
      WorkspaceSymbolResolveRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WorkspaceSymbolResolveRequest2.type = new messages_1.ProtocolRequestType(WorkspaceSymbolResolveRequest2.method);
      WorkspaceSymbolResolveRequest2.capabilities = messages_1.CM.create("workspace.symbol.resolveSupport", "workspaceSymbolProvider.resolveProvider");
    })(WorkspaceSymbolResolveRequest || (exports2.WorkspaceSymbolResolveRequest = WorkspaceSymbolResolveRequest = {}));
    var CodeLensRequest;
    (function(CodeLensRequest2) {
      CodeLensRequest2.method = "textDocument/codeLens";
      CodeLensRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CodeLensRequest2.type = new messages_1.ProtocolRequestType(CodeLensRequest2.method);
      CodeLensRequest2.capabilities = messages_1.CM.create("textDocument.codeLens", "codeLensProvider");
    })(CodeLensRequest || (exports2.CodeLensRequest = CodeLensRequest = {}));
    var CodeLensResolveRequest;
    (function(CodeLensResolveRequest2) {
      CodeLensResolveRequest2.method = "codeLens/resolve";
      CodeLensResolveRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CodeLensResolveRequest2.type = new messages_1.ProtocolRequestType(CodeLensResolveRequest2.method);
      CodeLensResolveRequest2.capabilities = messages_1.CM.create("textDocument.codeLens.resolveSupport", "codeLensProvider.resolveProvider");
    })(CodeLensResolveRequest || (exports2.CodeLensResolveRequest = CodeLensResolveRequest = {}));
    var CodeLensRefreshRequest;
    (function(CodeLensRefreshRequest2) {
      CodeLensRefreshRequest2.method = `workspace/codeLens/refresh`;
      CodeLensRefreshRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      CodeLensRefreshRequest2.type = new messages_1.ProtocolRequestType0(CodeLensRefreshRequest2.method);
      CodeLensRefreshRequest2.capabilities = messages_1.CM.create("workspace.codeLens", void 0);
    })(CodeLensRefreshRequest || (exports2.CodeLensRefreshRequest = CodeLensRefreshRequest = {}));
    var DocumentLinkRequest;
    (function(DocumentLinkRequest2) {
      DocumentLinkRequest2.method = "textDocument/documentLink";
      DocumentLinkRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentLinkRequest2.type = new messages_1.ProtocolRequestType(DocumentLinkRequest2.method);
      DocumentLinkRequest2.capabilities = messages_1.CM.create("textDocument.documentLink", "documentLinkProvider");
    })(DocumentLinkRequest || (exports2.DocumentLinkRequest = DocumentLinkRequest = {}));
    var DocumentLinkResolveRequest;
    (function(DocumentLinkResolveRequest2) {
      DocumentLinkResolveRequest2.method = "documentLink/resolve";
      DocumentLinkResolveRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentLinkResolveRequest2.type = new messages_1.ProtocolRequestType(DocumentLinkResolveRequest2.method);
      DocumentLinkResolveRequest2.capabilities = messages_1.CM.create("textDocument.documentLink", "documentLinkProvider.resolveProvider");
    })(DocumentLinkResolveRequest || (exports2.DocumentLinkResolveRequest = DocumentLinkResolveRequest = {}));
    var DocumentFormattingRequest;
    (function(DocumentFormattingRequest2) {
      DocumentFormattingRequest2.method = "textDocument/formatting";
      DocumentFormattingRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentFormattingRequest2.type = new messages_1.ProtocolRequestType(DocumentFormattingRequest2.method);
      DocumentFormattingRequest2.capabilities = messages_1.CM.create("textDocument.formatting", "documentFormattingProvider");
    })(DocumentFormattingRequest || (exports2.DocumentFormattingRequest = DocumentFormattingRequest = {}));
    var DocumentRangeFormattingRequest;
    (function(DocumentRangeFormattingRequest2) {
      DocumentRangeFormattingRequest2.method = "textDocument/rangeFormatting";
      DocumentRangeFormattingRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentRangeFormattingRequest2.type = new messages_1.ProtocolRequestType(DocumentRangeFormattingRequest2.method);
      DocumentRangeFormattingRequest2.capabilities = messages_1.CM.create("textDocument.rangeFormatting", "documentRangeFormattingProvider");
    })(DocumentRangeFormattingRequest || (exports2.DocumentRangeFormattingRequest = DocumentRangeFormattingRequest = {}));
    var DocumentRangesFormattingRequest;
    (function(DocumentRangesFormattingRequest2) {
      DocumentRangesFormattingRequest2.method = "textDocument/rangesFormatting";
      DocumentRangesFormattingRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentRangesFormattingRequest2.type = new messages_1.ProtocolRequestType(DocumentRangesFormattingRequest2.method);
      DocumentRangesFormattingRequest2.capabilities = messages_1.CM.create("textDocument.rangeFormatting.rangesSupport", "documentRangeFormattingProvider.rangesSupport");
    })(DocumentRangesFormattingRequest || (exports2.DocumentRangesFormattingRequest = DocumentRangesFormattingRequest = {}));
    var DocumentOnTypeFormattingRequest;
    (function(DocumentOnTypeFormattingRequest2) {
      DocumentOnTypeFormattingRequest2.method = "textDocument/onTypeFormatting";
      DocumentOnTypeFormattingRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentOnTypeFormattingRequest2.type = new messages_1.ProtocolRequestType(DocumentOnTypeFormattingRequest2.method);
      DocumentOnTypeFormattingRequest2.capabilities = messages_1.CM.create("textDocument.onTypeFormatting", "documentOnTypeFormattingProvider");
    })(DocumentOnTypeFormattingRequest || (exports2.DocumentOnTypeFormattingRequest = DocumentOnTypeFormattingRequest = {}));
    var PrepareSupportDefaultBehavior;
    (function(PrepareSupportDefaultBehavior2) {
      PrepareSupportDefaultBehavior2.Identifier = 1;
    })(PrepareSupportDefaultBehavior || (exports2.PrepareSupportDefaultBehavior = PrepareSupportDefaultBehavior = {}));
    var RenameRequest;
    (function(RenameRequest2) {
      RenameRequest2.method = "textDocument/rename";
      RenameRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      RenameRequest2.type = new messages_1.ProtocolRequestType(RenameRequest2.method);
      RenameRequest2.capabilities = messages_1.CM.create("textDocument.rename", "renameProvider");
    })(RenameRequest || (exports2.RenameRequest = RenameRequest = {}));
    var PrepareRenameRequest;
    (function(PrepareRenameRequest2) {
      PrepareRenameRequest2.method = "textDocument/prepareRename";
      PrepareRenameRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      PrepareRenameRequest2.type = new messages_1.ProtocolRequestType(PrepareRenameRequest2.method);
      PrepareRenameRequest2.capabilities = messages_1.CM.create("textDocument.rename.prepareSupport", "renameProvider.prepareProvider");
    })(PrepareRenameRequest || (exports2.PrepareRenameRequest = PrepareRenameRequest = {}));
    var ExecuteCommandRequest;
    (function(ExecuteCommandRequest2) {
      ExecuteCommandRequest2.method = "workspace/executeCommand";
      ExecuteCommandRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      ExecuteCommandRequest2.type = new messages_1.ProtocolRequestType(ExecuteCommandRequest2.method);
      ExecuteCommandRequest2.capabilities = messages_1.CM.create("workspace.executeCommand", "executeCommandProvider");
    })(ExecuteCommandRequest || (exports2.ExecuteCommandRequest = ExecuteCommandRequest = {}));
    var ApplyWorkspaceEditRequest;
    (function(ApplyWorkspaceEditRequest2) {
      ApplyWorkspaceEditRequest2.method = "workspace/applyEdit";
      ApplyWorkspaceEditRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      ApplyWorkspaceEditRequest2.type = new messages_1.ProtocolRequestType("workspace/applyEdit");
      ApplyWorkspaceEditRequest2.capabilities = messages_1.CM.create("workspace.applyEdit", void 0);
    })(ApplyWorkspaceEditRequest || (exports2.ApplyWorkspaceEditRequest = ApplyWorkspaceEditRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/connection.js
var require_connection2 = __commonJS2({
  "node_modules/vscode-languageserver-protocol/lib/common/connection.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createProtocolConnection = createProtocolConnection;
    var vscode_jsonrpc_1 = require_api();
    function createProtocolConnection(input, output, logger, options) {
      if (vscode_jsonrpc_1.ConnectionStrategy.is(options)) {
        options = { connectionStrategy: options };
      }
      return (0, vscode_jsonrpc_1.createMessageConnection)(input, output, logger, options);
    }
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/api.js
var require_api2 = __commonJS2({
  "node_modules/vscode-languageserver-protocol/lib/common/api.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
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
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.LSPErrorCodes = exports2.createProtocolConnection = void 0;
    __exportStar(require_api(), exports2);
    __exportStar((init_main(), __toCommonJS2(main_exports)), exports2);
    __exportStar(require_messages2(), exports2);
    __exportStar(require_protocol(), exports2);
    var connection_1 = require_connection2();
    Object.defineProperty(exports2, "createProtocolConnection", { enumerable: true, get: function() {
      return connection_1.createProtocolConnection;
    } });
    var LSPErrorCodes;
    (function(LSPErrorCodes2) {
      LSPErrorCodes2.lspReservedErrorRangeStart = -32899;
      LSPErrorCodes2.RequestFailed = -32803;
      LSPErrorCodes2.ServerCancelled = -32802;
      LSPErrorCodes2.ContentModified = -32801;
      LSPErrorCodes2.RequestCancelled = -32800;
      LSPErrorCodes2.lspReservedErrorRangeEnd = -32800;
    })(LSPErrorCodes || (exports2.LSPErrorCodes = LSPErrorCodes = {}));
  }
});

// node_modules/vscode-languageserver/lib/common/utils/uuid.js
var require_uuid = __commonJS2({
  "node_modules/vscode-languageserver/lib/common/utils/uuid.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.empty = void 0;
    exports2.v4 = v4;
    exports2.isUUID = isUUID;
    exports2.parse = parse;
    exports2.generateUuid = generateUuid;
    var ValueUUID = class {
      _value;
      constructor(_value) {
        this._value = _value;
      }
      asHex() {
        return this._value;
      }
      equals(other) {
        return this.asHex() === other.asHex();
      }
    };
    var V4UUID = class _V4UUID extends ValueUUID {
      static _chars = ["0", "1", "2", "3", "4", "5", "6", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
      static _timeHighBits = ["8", "9", "a", "b"];
      static _oneOf(array) {
        return array[Math.floor(array.length * Math.random())];
      }
      static _randomHex() {
        return _V4UUID._oneOf(_V4UUID._chars);
      }
      constructor() {
        super([
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          "-",
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          "-",
          "4",
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          "-",
          _V4UUID._oneOf(_V4UUID._timeHighBits),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          "-",
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex()
        ].join(""));
      }
    };
    exports2.empty = new ValueUUID("00000000-0000-0000-0000-000000000000");
    function v4() {
      return new V4UUID();
    }
    var _UUIDPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    function isUUID(value) {
      return _UUIDPattern.test(value);
    }
    function parse(value) {
      if (!isUUID(value)) {
        throw new Error("invalid uuid");
      }
      return new ValueUUID(value);
    }
    function generateUuid() {
      return v4().asHex();
    }
  }
});

// node_modules/vscode-languageserver/lib/common/progress.js
var require_progress = __commonJS2({
  "node_modules/vscode-languageserver/lib/common/progress.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ProgressFeature = void 0;
    exports2.attachWorkDone = attachWorkDone;
    exports2.attachPartialResult = attachPartialResult;
    var vscode_languageserver_protocol_1 = require_api2();
    var uuid_1 = require_uuid();
    var WorkDoneProgressReporterImpl = class _WorkDoneProgressReporterImpl {
      _connection;
      _token;
      static Instances = /* @__PURE__ */ new Map();
      constructor(_connection, _token) {
        this._connection = _connection;
        this._token = _token;
        _WorkDoneProgressReporterImpl.Instances.set(this._token, this);
      }
      begin(title, percentage, message, cancellable) {
        const param = {
          kind: "begin",
          title,
          message,
          cancellable
        };
        if (typeof percentage === "number") {
          param.percentage = Math.round(percentage);
        }
        this._connection.sendProgress(vscode_languageserver_protocol_1.WorkDoneProgress.type, this._token, param);
      }
      report(arg0, arg1) {
        const param = {
          kind: "report"
        };
        if (typeof arg0 === "number") {
          param.percentage = Math.round(arg0);
          if (arg1 !== void 0) {
            param.message = arg1;
          }
        } else {
          param.message = arg0;
        }
        this._connection.sendProgress(vscode_languageserver_protocol_1.WorkDoneProgress.type, this._token, param);
      }
      done() {
        _WorkDoneProgressReporterImpl.Instances.delete(this._token);
        this._connection.sendProgress(vscode_languageserver_protocol_1.WorkDoneProgress.type, this._token, { kind: "end" });
      }
    };
    var WorkDoneProgressServerReporterImpl = class extends WorkDoneProgressReporterImpl {
      _source;
      constructor(connection2, token) {
        super(connection2, token);
        this._source = new vscode_languageserver_protocol_1.CancellationTokenSource();
      }
      get token() {
        return this._source.token;
      }
      done() {
        this._source.dispose();
        super.done();
      }
      cancel() {
        this._source.cancel();
      }
    };
    var NullProgressReporter = class {
      constructor() {
      }
      begin() {
      }
      report() {
      }
      done() {
      }
    };
    var NullProgressServerReporter = class extends NullProgressReporter {
      _source;
      constructor() {
        super();
        this._source = new vscode_languageserver_protocol_1.CancellationTokenSource();
      }
      get token() {
        return this._source.token;
      }
      done() {
        this._source.dispose();
      }
      cancel() {
        this._source.cancel();
      }
    };
    function attachWorkDone(connection2, params) {
      if (params === void 0 || params.workDoneToken === void 0) {
        return new NullProgressReporter();
      }
      const token = params.workDoneToken;
      delete params.workDoneToken;
      return new WorkDoneProgressReporterImpl(connection2, token);
    }
    var ProgressFeature = (Base) => {
      return class extends Base {
        _progressSupported;
        constructor() {
          super();
          this._progressSupported = false;
        }
        initialize(capabilities) {
          super.initialize(capabilities);
          if (capabilities?.window?.workDoneProgress === true) {
            this._progressSupported = true;
            this.connection.onNotification(vscode_languageserver_protocol_1.WorkDoneProgressCancelNotification.type, (params) => {
              const progress = WorkDoneProgressReporterImpl.Instances.get(params.token);
              if (progress instanceof WorkDoneProgressServerReporterImpl || progress instanceof NullProgressServerReporter) {
                progress.cancel();
              }
            });
          }
        }
        attachWorkDoneProgress(token) {
          if (token === void 0) {
            return new NullProgressReporter();
          } else {
            return new WorkDoneProgressReporterImpl(this.connection, token);
          }
        }
        createWorkDoneProgress() {
          if (this._progressSupported) {
            const token = (0, uuid_1.generateUuid)();
            return this.connection.sendRequest(vscode_languageserver_protocol_1.WorkDoneProgressCreateRequest.type, { token }).then(() => {
              const result = new WorkDoneProgressServerReporterImpl(this.connection, token);
              return result;
            });
          } else {
            return Promise.resolve(new NullProgressServerReporter());
          }
        }
      };
    };
    exports2.ProgressFeature = ProgressFeature;
    var ResultProgress;
    (function(ResultProgress2) {
      ResultProgress2.type = new vscode_languageserver_protocol_1.ProgressType();
    })(ResultProgress || (ResultProgress = {}));
    var ResultProgressReporterImpl = class {
      _connection;
      _token;
      constructor(_connection, _token) {
        this._connection = _connection;
        this._token = _token;
      }
      report(data) {
        this._connection.sendProgress(ResultProgress.type, this._token, data);
      }
    };
    function attachPartialResult(connection2, params) {
      if (params === void 0 || params.partialResultToken === void 0) {
        return void 0;
      }
      const token = params.partialResultToken;
      delete params.partialResultToken;
      return new ResultProgressReporterImpl(connection2, token);
    }
  }
});

// node_modules/vscode-languageserver/lib/common/configuration.js
var require_configuration = __commonJS2({
  "node_modules/vscode-languageserver/lib/common/configuration.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
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
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || /* @__PURE__ */ (function() {
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
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ConfigurationFeature = void 0;
    var vscode_languageserver_protocol_1 = require_api2();
    var Is2 = __importStar(require_is());
    var ConfigurationFeature = (Base) => {
      return class extends Base {
        getConfiguration(arg) {
          if (!arg) {
            return this._getConfiguration({});
          } else if (Is2.string(arg)) {
            return this._getConfiguration({ section: arg });
          } else {
            return this._getConfiguration(arg);
          }
        }
        _getConfiguration(arg) {
          const params = {
            items: Array.isArray(arg) ? arg : [arg]
          };
          return this.connection.sendRequest(vscode_languageserver_protocol_1.ConfigurationRequest.type, params).then((result) => {
            if (Array.isArray(result)) {
              return Array.isArray(arg) ? result : result[0];
            } else {
              return Array.isArray(arg) ? [] : null;
            }
          });
        }
      };
    };
    exports2.ConfigurationFeature = ConfigurationFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/workspaceFolder.js
var require_workspaceFolder = __commonJS2({
  "node_modules/vscode-languageserver/lib/common/workspaceFolder.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.WorkspaceFoldersFeature = void 0;
    var vscode_languageserver_protocol_1 = require_api2();
    var WorkspaceFoldersFeature = (Base) => {
      return class extends Base {
        _onDidChangeWorkspaceFolders;
        _unregistration;
        _notificationIsAutoRegistered;
        constructor() {
          super();
          this._notificationIsAutoRegistered = false;
        }
        initialize(capabilities) {
          super.initialize(capabilities);
          const workspaceCapabilities = capabilities.workspace;
          if (workspaceCapabilities && workspaceCapabilities.workspaceFolders) {
            this._onDidChangeWorkspaceFolders = new vscode_languageserver_protocol_1.Emitter();
            this.connection.onNotification(vscode_languageserver_protocol_1.DidChangeWorkspaceFoldersNotification.type, (params) => {
              this._onDidChangeWorkspaceFolders.fire(params.event);
            });
          }
        }
        fillServerCapabilities(capabilities) {
          super.fillServerCapabilities(capabilities);
          const changeNotifications = capabilities.workspace?.workspaceFolders?.changeNotifications;
          this._notificationIsAutoRegistered = changeNotifications === true || typeof changeNotifications === "string";
        }
        getWorkspaceFolders() {
          return this.connection.sendRequest(vscode_languageserver_protocol_1.WorkspaceFoldersRequest.type);
        }
        get onDidChangeWorkspaceFolders() {
          if (!this._onDidChangeWorkspaceFolders) {
            throw new Error("Client doesn't support sending workspace folder change events.");
          }
          if (!this._notificationIsAutoRegistered && !this._unregistration) {
            this._unregistration = this.connection.client.register(vscode_languageserver_protocol_1.DidChangeWorkspaceFoldersNotification.type);
          }
          return this._onDidChangeWorkspaceFolders.event;
        }
      };
    };
    exports2.WorkspaceFoldersFeature = WorkspaceFoldersFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/callHierarchy.js
var require_callHierarchy = __commonJS2({
  "node_modules/vscode-languageserver/lib/common/callHierarchy.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CallHierarchyFeature = void 0;
    var vscode_languageserver_protocol_1 = require_api2();
    var CallHierarchyFeature = (Base) => {
      return class extends Base {
        get callHierarchy() {
          return {
            onPrepare: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.CallHierarchyPrepareRequest.type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), void 0);
              });
            },
            onIncomingCalls: (handler) => {
              const type = vscode_languageserver_protocol_1.CallHierarchyIncomingCallsRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            },
            onOutgoingCalls: (handler) => {
              const type = vscode_languageserver_protocol_1.CallHierarchyOutgoingCallsRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            }
          };
        }
      };
    };
    exports2.CallHierarchyFeature = CallHierarchyFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/semanticTokens.js
var require_semanticTokens = __commonJS2({
  "node_modules/vscode-languageserver/lib/common/semanticTokens.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SemanticTokensBuilder = exports2.SemanticTokensDiff = exports2.SemanticTokensFeature = void 0;
    var vscode_languageserver_protocol_1 = require_api2();
    var SemanticTokensFeature = (Base) => {
      return class extends Base {
        get semanticTokens() {
          return {
            refresh: () => {
              return this.connection.sendRequest(vscode_languageserver_protocol_1.SemanticTokensRefreshRequest.type);
            },
            on: (handler) => {
              const type = vscode_languageserver_protocol_1.SemanticTokensRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            },
            onDelta: (handler) => {
              const type = vscode_languageserver_protocol_1.SemanticTokensDeltaRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            },
            onRange: (handler) => {
              const type = vscode_languageserver_protocol_1.SemanticTokensRangeRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            }
          };
        }
      };
    };
    exports2.SemanticTokensFeature = SemanticTokensFeature;
    var SemanticTokensDiff = class {
      originalSequence;
      modifiedSequence;
      constructor(originalSequence, modifiedSequence) {
        this.originalSequence = originalSequence;
        this.modifiedSequence = modifiedSequence;
      }
      computeDiff() {
        const originalLength = this.originalSequence.length;
        const modifiedLength = this.modifiedSequence.length;
        let startIndex = 0;
        while (startIndex < modifiedLength && startIndex < originalLength && this.originalSequence[startIndex] === this.modifiedSequence[startIndex]) {
          startIndex++;
        }
        if (startIndex < modifiedLength && startIndex < originalLength) {
          let originalEndIndex = originalLength - 1;
          let modifiedEndIndex = modifiedLength - 1;
          while (originalEndIndex >= startIndex && modifiedEndIndex >= startIndex && this.originalSequence[originalEndIndex] === this.modifiedSequence[modifiedEndIndex]) {
            originalEndIndex--;
            modifiedEndIndex--;
          }
          if (originalEndIndex < startIndex || modifiedEndIndex < startIndex) {
            originalEndIndex++;
            modifiedEndIndex++;
          }
          const deleteCount = originalEndIndex - startIndex + 1;
          const newData = this.modifiedSequence.slice(startIndex, modifiedEndIndex + 1);
          if (newData.length === 1 && newData[0] === this.originalSequence[originalEndIndex]) {
            return [
              { start: startIndex, deleteCount: deleteCount - 1 }
            ];
          } else {
            return [
              { start: startIndex, deleteCount, data: newData }
            ];
          }
        } else if (startIndex < modifiedLength) {
          return [
            { start: startIndex, deleteCount: 0, data: this.modifiedSequence.slice(startIndex) }
          ];
        } else if (startIndex < originalLength) {
          return [
            { start: startIndex, deleteCount: originalLength - startIndex }
          ];
        } else {
          return [];
        }
      }
    };
    exports2.SemanticTokensDiff = SemanticTokensDiff;
    var SemanticTokensBuilder = class _SemanticTokensBuilder {
      _id;
      _prevLine;
      _prevChar;
      _dataIsSortedAndDeltaEncoded;
      _data;
      _dataNonDelta;
      _dataLen;
      _prevData;
      constructor() {
        this._prevData = void 0;
        this.initialize();
      }
      initialize() {
        this._id = Date.now();
        this._prevLine = 0;
        this._prevChar = 0;
        this._data = [];
        this._dataNonDelta = [];
        this._dataLen = 0;
        this._dataIsSortedAndDeltaEncoded = true;
      }
      push(line, char, length, tokenType, tokenModifiers) {
        if (this._dataIsSortedAndDeltaEncoded && (line < this._prevLine || line === this._prevLine && char < this._prevChar)) {
          this._dataIsSortedAndDeltaEncoded = false;
          this._dataNonDelta = _SemanticTokensBuilder._deltaDecode(this._data);
        }
        let pushLine = line;
        let pushChar = char;
        if (this._dataIsSortedAndDeltaEncoded && this._dataLen > 0) {
          pushLine -= this._prevLine;
          if (pushLine === 0) {
            pushChar -= this._prevChar;
          }
        }
        const dataSource = this._dataIsSortedAndDeltaEncoded ? this._data : this._dataNonDelta;
        dataSource[this._dataLen++] = pushLine;
        dataSource[this._dataLen++] = pushChar;
        dataSource[this._dataLen++] = length;
        dataSource[this._dataLen++] = tokenType;
        dataSource[this._dataLen++] = tokenModifiers;
        this._prevLine = line;
        this._prevChar = char;
      }
      get id() {
        return this._id.toString();
      }
      static _deltaDecode(data) {
        const tokenCount = data.length / 5 | 0;
        let prevLine = 0;
        let prevChar = 0;
        const result = [];
        for (let i2 = 0; i2 < tokenCount; i2++) {
          const dstOffset = 5 * i2;
          let line = data[dstOffset];
          let char = data[dstOffset + 1];
          if (line === 0) {
            line = prevLine;
            char += prevChar;
          } else {
            line += prevLine;
          }
          const length = data[dstOffset + 2];
          const tokenType = data[dstOffset + 3];
          const tokenModifiers = data[dstOffset + 4];
          result[dstOffset + 0] = line;
          result[dstOffset + 1] = char;
          result[dstOffset + 2] = length;
          result[dstOffset + 3] = tokenType;
          result[dstOffset + 4] = tokenModifiers;
          prevLine = line;
          prevChar = char;
        }
        return result;
      }
      static _sortAndDeltaEncode(data) {
        const pos = [];
        const tokenCount = data.length / 5 | 0;
        for (let i2 = 0; i2 < tokenCount; i2++) {
          pos[i2] = i2;
        }
        pos.sort((a, b) => {
          const aLine = data[5 * a];
          const bLine = data[5 * b];
          if (aLine === bLine) {
            const aChar = data[5 * a + 1];
            const bChar = data[5 * b + 1];
            return aChar - bChar;
          }
          return aLine - bLine;
        });
        const result = [];
        let prevLine = 0;
        let prevChar = 0;
        for (let i2 = 0; i2 < tokenCount; i2++) {
          const srcOffset = 5 * pos[i2];
          const line = data[srcOffset + 0];
          const char = data[srcOffset + 1];
          const length = data[srcOffset + 2];
          const tokenType = data[srcOffset + 3];
          const tokenModifiers = data[srcOffset + 4];
          const pushLine = line - prevLine;
          const pushChar = pushLine === 0 ? char - prevChar : char;
          const dstOffset = 5 * i2;
          result[dstOffset + 0] = pushLine;
          result[dstOffset + 1] = pushChar;
          result[dstOffset + 2] = length;
          result[dstOffset + 3] = tokenType;
          result[dstOffset + 4] = tokenModifiers;
          prevLine = line;
          prevChar = char;
        }
        return result;
      }
      getFinalDataDelta() {
        if (this._dataIsSortedAndDeltaEncoded) {
          return this._data;
        } else {
          return _SemanticTokensBuilder._sortAndDeltaEncode(this._dataNonDelta);
        }
      }
      previousResult(id) {
        if (this.id === id) {
          this._prevData = this.getFinalDataDelta();
        }
        this.initialize();
      }
      build() {
        this._prevData = void 0;
        return {
          resultId: this.id,
          data: this.getFinalDataDelta()
        };
      }
      canBuildEdits() {
        return this._prevData !== void 0;
      }
      buildEdits() {
        if (this._prevData !== void 0) {
          return {
            resultId: this.id,
            edits: new SemanticTokensDiff(this._prevData, this.getFinalDataDelta()).computeDiff()
          };
        } else {
          return this.build();
        }
      }
    };
    exports2.SemanticTokensBuilder = SemanticTokensBuilder;
  }
});

// node_modules/vscode-languageserver/lib/common/showDocument.js
var require_showDocument = __commonJS2({
  "node_modules/vscode-languageserver/lib/common/showDocument.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ShowDocumentFeature = void 0;
    var vscode_languageserver_protocol_1 = require_api2();
    var ShowDocumentFeature = (Base) => {
      return class extends Base {
        showDocument(params) {
          return this.connection.sendRequest(vscode_languageserver_protocol_1.ShowDocumentRequest.type, params);
        }
      };
    };
    exports2.ShowDocumentFeature = ShowDocumentFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/fileOperations.js
var require_fileOperations = __commonJS2({
  "node_modules/vscode-languageserver/lib/common/fileOperations.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FileOperationsFeature = void 0;
    var vscode_languageserver_protocol_1 = require_api2();
    var FileOperationsFeature = (Base) => {
      return class extends Base {
        onDidCreateFiles(handler) {
          return this.connection.onNotification(vscode_languageserver_protocol_1.DidCreateFilesNotification.type, (params) => {
            return handler(params);
          });
        }
        onDidRenameFiles(handler) {
          return this.connection.onNotification(vscode_languageserver_protocol_1.DidRenameFilesNotification.type, (params) => {
            return handler(params);
          });
        }
        onDidDeleteFiles(handler) {
          return this.connection.onNotification(vscode_languageserver_protocol_1.DidDeleteFilesNotification.type, (params) => {
            return handler(params);
          });
        }
        onWillCreateFiles(handler) {
          return this.connection.onRequest(vscode_languageserver_protocol_1.WillCreateFilesRequest.type, (params, cancel) => {
            return handler(params, cancel);
          });
        }
        onWillRenameFiles(handler) {
          return this.connection.onRequest(vscode_languageserver_protocol_1.WillRenameFilesRequest.type, (params, cancel) => {
            return handler(params, cancel);
          });
        }
        onWillDeleteFiles(handler) {
          return this.connection.onRequest(vscode_languageserver_protocol_1.WillDeleteFilesRequest.type, (params, cancel) => {
            return handler(params, cancel);
          });
        }
      };
    };
    exports2.FileOperationsFeature = FileOperationsFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/linkedEditingRange.js
var require_linkedEditingRange = __commonJS2({
  "node_modules/vscode-languageserver/lib/common/linkedEditingRange.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.LinkedEditingRangeFeature = void 0;
    var vscode_languageserver_protocol_1 = require_api2();
    var LinkedEditingRangeFeature = (Base) => {
      return class extends Base {
        onLinkedEditingRange(handler) {
          return this.connection.onRequest(vscode_languageserver_protocol_1.LinkedEditingRangeRequest.type, (params, cancel) => {
            return handler(params, cancel, this.attachWorkDoneProgress(params), void 0);
          });
        }
      };
    };
    exports2.LinkedEditingRangeFeature = LinkedEditingRangeFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/typeHierarchy.js
var require_typeHierarchy = __commonJS2({
  "node_modules/vscode-languageserver/lib/common/typeHierarchy.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TypeHierarchyFeature = void 0;
    var vscode_languageserver_protocol_1 = require_api2();
    var TypeHierarchyFeature = (Base) => {
      return class extends Base {
        get typeHierarchy() {
          return {
            onPrepare: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.TypeHierarchyPrepareRequest.type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), void 0);
              });
            },
            onSupertypes: (handler) => {
              const type = vscode_languageserver_protocol_1.TypeHierarchySupertypesRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            },
            onSubtypes: (handler) => {
              const type = vscode_languageserver_protocol_1.TypeHierarchySubtypesRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            }
          };
        }
      };
    };
    exports2.TypeHierarchyFeature = TypeHierarchyFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/inlineValue.js
var require_inlineValue = __commonJS2({
  "node_modules/vscode-languageserver/lib/common/inlineValue.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.InlineValueFeature = void 0;
    var vscode_languageserver_protocol_1 = require_api2();
    var InlineValueFeature = (Base) => {
      return class extends Base {
        get inlineValue() {
          return {
            refresh: () => {
              return this.connection.sendRequest(vscode_languageserver_protocol_1.InlineValueRefreshRequest.type);
            },
            on: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.InlineValueRequest.type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params));
              });
            }
          };
        }
      };
    };
    exports2.InlineValueFeature = InlineValueFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/foldingRange.js
var require_foldingRange = __commonJS2({
  "node_modules/vscode-languageserver/lib/common/foldingRange.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FoldingRangeFeature = void 0;
    var vscode_languageserver_protocol_1 = require_api2();
    var FoldingRangeFeature = (Base) => {
      return class extends Base {
        get foldingRange() {
          return {
            refresh: () => {
              return this.connection.sendRequest(vscode_languageserver_protocol_1.FoldingRangeRefreshRequest.type);
            },
            on: (handler) => {
              const type = vscode_languageserver_protocol_1.FoldingRangeRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            }
          };
        }
      };
    };
    exports2.FoldingRangeFeature = FoldingRangeFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/inlayHint.js
var require_inlayHint = __commonJS2({
  "node_modules/vscode-languageserver/lib/common/inlayHint.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.InlayHintFeature = void 0;
    var vscode_languageserver_protocol_1 = require_api2();
    var InlayHintFeature = (Base) => {
      return class extends Base {
        get inlayHint() {
          return {
            refresh: () => {
              return this.connection.sendRequest(vscode_languageserver_protocol_1.InlayHintRefreshRequest.type);
            },
            on: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.InlayHintRequest.type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params));
              });
            },
            resolve: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.InlayHintResolveRequest.type, (params, cancel) => {
                return handler(params, cancel);
              });
            }
          };
        }
      };
    };
    exports2.InlayHintFeature = InlayHintFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/diagnostic.js
var require_diagnostic = __commonJS2({
  "node_modules/vscode-languageserver/lib/common/diagnostic.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DiagnosticFeature = void 0;
    var vscode_languageserver_protocol_1 = require_api2();
    var DiagnosticFeature = (Base) => {
      return class extends Base {
        get diagnostics() {
          return {
            refresh: () => {
              return this.connection.sendRequest(vscode_languageserver_protocol_1.DiagnosticRefreshRequest.type);
            },
            on: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.DocumentDiagnosticRequest.type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(vscode_languageserver_protocol_1.DocumentDiagnosticRequest.partialResult, params));
              });
            },
            onWorkspace: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.WorkspaceDiagnosticRequest.type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(vscode_languageserver_protocol_1.WorkspaceDiagnosticRequest.partialResult, params));
              });
            }
          };
        }
      };
    };
    exports2.DiagnosticFeature = DiagnosticFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/textDocuments.js
var require_textDocuments = __commonJS2({
  "node_modules/vscode-languageserver/lib/common/textDocuments.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TextDocuments = void 0;
    var vscode_languageserver_protocol_1 = require_api2();
    var TextDocuments = class {
      _configuration;
      _syncedDocuments;
      _onDidChangeContent;
      _onDidOpen;
      _onDidClose;
      _onDidSave;
      _onWillSave;
      _willSaveWaitUntil;
      /**
       * Create a new text document manager.
       */
      constructor(configuration) {
        this._configuration = configuration;
        this._syncedDocuments = /* @__PURE__ */ new Map();
        this._onDidChangeContent = new vscode_languageserver_protocol_1.Emitter();
        this._onDidOpen = new vscode_languageserver_protocol_1.Emitter();
        this._onDidClose = new vscode_languageserver_protocol_1.Emitter();
        this._onDidSave = new vscode_languageserver_protocol_1.Emitter();
        this._onWillSave = new vscode_languageserver_protocol_1.Emitter();
      }
      /**
       * An event that fires when a text document managed by this manager
       * has been opened.
       */
      get onDidOpen() {
        return this._onDidOpen.event;
      }
      /**
       * An event that fires when a text document managed by this manager
       * has been opened or the content changes.
       */
      get onDidChangeContent() {
        return this._onDidChangeContent.event;
      }
      /**
       * An event that fires when a text document managed by this manager
       * will be saved.
       */
      get onWillSave() {
        return this._onWillSave.event;
      }
      /**
       * Sets a handler that will be called if a participant wants to provide
       * edits during a text document save.
       */
      onWillSaveWaitUntil(handler) {
        this._willSaveWaitUntil = handler;
      }
      /**
       * An event that fires when a text document managed by this manager
       * has been saved.
       */
      get onDidSave() {
        return this._onDidSave.event;
      }
      /**
       * An event that fires when a text document managed by this manager
       * has been closed.
       */
      get onDidClose() {
        return this._onDidClose.event;
      }
      /**
       * Returns the document for the given URI. Returns undefined if
       * the document is not managed by this instance.
       *
       * @param uri The text document's URI to retrieve.
       * @return the text document or `undefined`.
       */
      get(uri) {
        return this._syncedDocuments.get(uri);
      }
      /**
       * Returns all text documents managed by this instance.
       *
       * @return all text documents.
       */
      all() {
        return Array.from(this._syncedDocuments.values());
      }
      /**
       * Returns the URIs of all text documents managed by this instance.
       *
       * @return the URI's of all text documents.
       */
      keys() {
        return Array.from(this._syncedDocuments.keys());
      }
      /**
       * Listens for `low level` notification on the given connection to
       * update the text documents managed by this instance.
       *
       * Please note that the connection only provides handlers not an event model. Therefore
       * listening on a connection will overwrite the following handlers on a connection:
       * `onDidOpenTextDocument`, `onDidChangeTextDocument`, `onDidCloseTextDocument`,
       * `onWillSaveTextDocument`, `onWillSaveTextDocumentWaitUntil` and `onDidSaveTextDocument`.
       *
       * Use the corresponding events on the TextDocuments instance instead.
       *
       * @param connection The connection to listen on.
       */
      listen(connection2) {
        connection2.__textDocumentSync = vscode_languageserver_protocol_1.TextDocumentSyncKind.Incremental;
        const disposables = [];
        disposables.push(connection2.onDidOpenTextDocument((event) => {
          const td = event.textDocument;
          const document2 = this._configuration.create(td.uri, td.languageId, td.version, td.text);
          this._syncedDocuments.set(td.uri, document2);
          const toFire = Object.freeze({ document: document2 });
          this._onDidOpen.fire(toFire);
          this._onDidChangeContent.fire(toFire);
        }));
        disposables.push(connection2.onDidChangeTextDocument((event) => {
          const td = event.textDocument;
          const changes = event.contentChanges;
          if (changes.length === 0) {
            return;
          }
          const { version } = td;
          if (version === null || version === void 0) {
            throw new Error(`Received document change event for ${td.uri} without valid version identifier`);
          }
          let syncedDocument = this._syncedDocuments.get(td.uri);
          if (syncedDocument !== void 0) {
            syncedDocument = this._configuration.update(syncedDocument, changes, version);
            this._syncedDocuments.set(td.uri, syncedDocument);
            this._onDidChangeContent.fire(Object.freeze({ document: syncedDocument }));
          }
        }));
        disposables.push(connection2.onDidCloseTextDocument((event) => {
          const syncedDocument = this._syncedDocuments.get(event.textDocument.uri);
          if (syncedDocument !== void 0) {
            this._syncedDocuments.delete(event.textDocument.uri);
            this._onDidClose.fire(Object.freeze({ document: syncedDocument }));
          }
        }));
        disposables.push(connection2.onWillSaveTextDocument((event) => {
          const syncedDocument = this._syncedDocuments.get(event.textDocument.uri);
          if (syncedDocument !== void 0) {
            this._onWillSave.fire(Object.freeze({ document: syncedDocument, reason: event.reason }));
          }
        }));
        disposables.push(connection2.onWillSaveTextDocumentWaitUntil((event, token) => {
          const syncedDocument = this._syncedDocuments.get(event.textDocument.uri);
          if (syncedDocument !== void 0 && this._willSaveWaitUntil) {
            return this._willSaveWaitUntil(Object.freeze({ document: syncedDocument, reason: event.reason }), token);
          } else {
            return [];
          }
        }));
        disposables.push(connection2.onDidSaveTextDocument((event) => {
          const syncedDocument = this._syncedDocuments.get(event.textDocument.uri);
          if (syncedDocument !== void 0) {
            this._onDidSave.fire(Object.freeze({ document: syncedDocument }));
          }
        }));
        return vscode_languageserver_protocol_1.Disposable.create(() => {
          disposables.forEach((disposable) => disposable.dispose());
        });
      }
    };
    exports2.TextDocuments = TextDocuments;
  }
});

// node_modules/vscode-languageserver/lib/common/notebook.js
var require_notebook = __commonJS2({
  "node_modules/vscode-languageserver/lib/common/notebook.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.NotebookDocuments = exports2.NotebookSyncFeature = void 0;
    var vscode_languageserver_protocol_1 = require_api2();
    var textDocuments_1 = require_textDocuments();
    var NotebookSyncFeature = (Base) => {
      return class extends Base {
        get synchronization() {
          return {
            onDidOpenNotebookDocument: (handler) => {
              return this.connection.onNotification(vscode_languageserver_protocol_1.DidOpenNotebookDocumentNotification.type, (params) => {
                return handler(params);
              });
            },
            onDidChangeNotebookDocument: (handler) => {
              return this.connection.onNotification(vscode_languageserver_protocol_1.DidChangeNotebookDocumentNotification.type, (params) => {
                return handler(params);
              });
            },
            onDidSaveNotebookDocument: (handler) => {
              return this.connection.onNotification(vscode_languageserver_protocol_1.DidSaveNotebookDocumentNotification.type, (params) => {
                return handler(params);
              });
            },
            onDidCloseNotebookDocument: (handler) => {
              return this.connection.onNotification(vscode_languageserver_protocol_1.DidCloseNotebookDocumentNotification.type, (params) => {
                return handler(params);
              });
            }
          };
        }
      };
    };
    exports2.NotebookSyncFeature = NotebookSyncFeature;
    var CellTextDocumentConnection = class _CellTextDocumentConnection {
      static NULL_DISPOSE = Object.freeze({ dispose: () => {
      } });
      openHandler;
      changeHandler;
      closeHandler;
      onDidOpenTextDocument(handler) {
        this.openHandler = handler;
        return vscode_languageserver_protocol_1.Disposable.create(() => {
          this.openHandler = void 0;
        });
      }
      openTextDocument(params) {
        return this.openHandler && this.openHandler(params);
      }
      onDidChangeTextDocument(handler) {
        this.changeHandler = handler;
        return vscode_languageserver_protocol_1.Disposable.create(() => {
          this.changeHandler = handler;
        });
      }
      changeTextDocument(params) {
        return this.changeHandler && this.changeHandler(params);
      }
      onDidCloseTextDocument(handler) {
        this.closeHandler = handler;
        return vscode_languageserver_protocol_1.Disposable.create(() => {
          this.closeHandler = void 0;
        });
      }
      closeTextDocument(params) {
        return this.closeHandler && this.closeHandler(params);
      }
      onWillSaveTextDocument() {
        return _CellTextDocumentConnection.NULL_DISPOSE;
      }
      onWillSaveTextDocumentWaitUntil() {
        return _CellTextDocumentConnection.NULL_DISPOSE;
      }
      onDidSaveTextDocument() {
        return _CellTextDocumentConnection.NULL_DISPOSE;
      }
    };
    var NotebookDocuments = class {
      notebookDocuments;
      notebookCellMap;
      _onDidOpen;
      _onDidSave;
      _onDidChange;
      _onDidClose;
      _cellTextDocuments;
      constructor(configurationOrTextDocuments) {
        if (configurationOrTextDocuments instanceof textDocuments_1.TextDocuments) {
          this._cellTextDocuments = configurationOrTextDocuments;
        } else {
          this._cellTextDocuments = new textDocuments_1.TextDocuments(configurationOrTextDocuments);
        }
        this.notebookDocuments = /* @__PURE__ */ new Map();
        this.notebookCellMap = /* @__PURE__ */ new Map();
        this._onDidOpen = new vscode_languageserver_protocol_1.Emitter();
        this._onDidChange = new vscode_languageserver_protocol_1.Emitter();
        this._onDidSave = new vscode_languageserver_protocol_1.Emitter();
        this._onDidClose = new vscode_languageserver_protocol_1.Emitter();
      }
      get cellTextDocuments() {
        return this._cellTextDocuments;
      }
      getCellTextDocument(cell) {
        return this._cellTextDocuments.get(cell.document);
      }
      getNotebookDocument(uri) {
        return this.notebookDocuments.get(uri);
      }
      getNotebookCell(uri) {
        const value = this.notebookCellMap.get(uri);
        return value && value[0];
      }
      findNotebookDocumentForCell(cell) {
        const key = typeof cell === "string" ? cell : cell.document;
        const value = this.notebookCellMap.get(key);
        return value && value[1];
      }
      get onDidOpen() {
        return this._onDidOpen.event;
      }
      get onDidSave() {
        return this._onDidSave.event;
      }
      get onDidChange() {
        return this._onDidChange.event;
      }
      get onDidClose() {
        return this._onDidClose.event;
      }
      /**
       * Listens for `low level` notification on the given connection to
       * update the notebook documents managed by this instance.
       *
       * Please note that the connection only provides handlers not an event model. Therefore
       * listening on a connection will overwrite the following handlers on a connection:
       * `onDidOpenNotebookDocument`, `onDidChangeNotebookDocument`, `onDidSaveNotebookDocument`,
       *  and `onDidCloseNotebookDocument`.
       *
       * @param connection The connection to listen on.
       */
      listen(connection2) {
        const cellTextDocumentConnection = new CellTextDocumentConnection();
        const disposables = [];
        disposables.push(this.cellTextDocuments.listen(cellTextDocumentConnection));
        disposables.push(connection2.notebooks.synchronization.onDidOpenNotebookDocument(async (params) => {
          this.notebookDocuments.set(params.notebookDocument.uri, params.notebookDocument);
          for (const cellTextDocument of params.cellTextDocuments) {
            await cellTextDocumentConnection.openTextDocument({ textDocument: cellTextDocument });
          }
          this.updateCellMap(params.notebookDocument);
          this._onDidOpen.fire(params.notebookDocument);
        }));
        disposables.push(connection2.notebooks.synchronization.onDidChangeNotebookDocument(async (params) => {
          const notebookDocument = this.notebookDocuments.get(params.notebookDocument.uri);
          if (notebookDocument === void 0) {
            return;
          }
          notebookDocument.version = params.notebookDocument.version;
          const oldMetadata = notebookDocument.metadata;
          let metadataChanged = false;
          const change = params.change;
          if (change.metadata !== void 0) {
            metadataChanged = true;
            notebookDocument.metadata = change.metadata;
          }
          const opened = [];
          const closed = [];
          const data = [];
          const text = [];
          if (change.cells !== void 0) {
            const changedCells = change.cells;
            if (changedCells.structure !== void 0) {
              const array = changedCells.structure.array;
              notebookDocument.cells.splice(array.start, array.deleteCount, ...array.cells !== void 0 ? array.cells : []);
              if (changedCells.structure.didOpen !== void 0) {
                for (const open of changedCells.structure.didOpen) {
                  await cellTextDocumentConnection.openTextDocument({ textDocument: open });
                  opened.push(open.uri);
                }
              }
              if (changedCells.structure.didClose) {
                for (const close of changedCells.structure.didClose) {
                  await cellTextDocumentConnection.closeTextDocument({ textDocument: close });
                  closed.push(close.uri);
                }
              }
            }
            if (changedCells.data !== void 0) {
              const cellUpdates = new Map(changedCells.data.map((cell) => [cell.document, cell]));
              for (let i2 = 0; i2 <= notebookDocument.cells.length; i2++) {
                const change2 = cellUpdates.get(notebookDocument.cells[i2].document);
                if (change2 !== void 0) {
                  const old = notebookDocument.cells.splice(i2, 1, change2);
                  data.push({ old: old[0], new: change2 });
                  cellUpdates.delete(change2.document);
                  if (cellUpdates.size === 0) {
                    break;
                  }
                }
              }
            }
            if (changedCells.textContent !== void 0) {
              for (const cellTextDocument of changedCells.textContent) {
                await cellTextDocumentConnection.changeTextDocument({ textDocument: cellTextDocument.document, contentChanges: cellTextDocument.changes });
                text.push(cellTextDocument.document.uri);
              }
            }
          }
          this.updateCellMap(notebookDocument);
          const changeEvent = { notebookDocument };
          if (metadataChanged) {
            changeEvent.metadata = { old: oldMetadata, new: notebookDocument.metadata };
          }
          const added = [];
          for (const open of opened) {
            added.push(this.getNotebookCell(open));
          }
          const removed = [];
          for (const close of closed) {
            removed.push(this.getNotebookCell(close));
          }
          const textContent = [];
          for (const change2 of text) {
            textContent.push(this.getNotebookCell(change2));
          }
          if (added.length > 0 || removed.length > 0 || data.length > 0 || textContent.length > 0) {
            changeEvent.cells = { added, removed, changed: { data, textContent } };
          }
          if (changeEvent.metadata !== void 0 || changeEvent.cells !== void 0) {
            this._onDidChange.fire(changeEvent);
          }
        }));
        disposables.push(connection2.notebooks.synchronization.onDidSaveNotebookDocument((params) => {
          const notebookDocument = this.notebookDocuments.get(params.notebookDocument.uri);
          if (notebookDocument === void 0) {
            return;
          }
          this._onDidSave.fire(notebookDocument);
        }));
        disposables.push(connection2.notebooks.synchronization.onDidCloseNotebookDocument(async (params) => {
          const notebookDocument = this.notebookDocuments.get(params.notebookDocument.uri);
          if (notebookDocument === void 0) {
            return;
          }
          this._onDidClose.fire(notebookDocument);
          for (const cellTextDocument of params.cellTextDocuments) {
            await cellTextDocumentConnection.closeTextDocument({ textDocument: cellTextDocument });
          }
          this.notebookDocuments.delete(params.notebookDocument.uri);
          for (const cell of notebookDocument.cells) {
            this.notebookCellMap.delete(cell.document);
          }
        }));
        return vscode_languageserver_protocol_1.Disposable.create(() => {
          disposables.forEach((disposable) => disposable.dispose());
        });
      }
      updateCellMap(notebookDocument) {
        for (const cell of notebookDocument.cells) {
          this.notebookCellMap.set(cell.document, [cell, notebookDocument]);
        }
      }
    };
    exports2.NotebookDocuments = NotebookDocuments;
  }
});

// node_modules/vscode-languageserver/lib/common/moniker.js
var require_moniker = __commonJS2({
  "node_modules/vscode-languageserver/lib/common/moniker.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MonikerFeature = void 0;
    var vscode_languageserver_protocol_1 = require_api2();
    var MonikerFeature = (Base) => {
      return class extends Base {
        get moniker() {
          return {
            on: (handler) => {
              const type = vscode_languageserver_protocol_1.MonikerRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            }
          };
        }
      };
    };
    exports2.MonikerFeature = MonikerFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/inlineCompletion.js
var require_inlineCompletion = __commonJS2({
  "node_modules/vscode-languageserver/lib/common/inlineCompletion.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.InlineCompletionFeature = void 0;
    var vscode_languageserver_protocol_1 = require_api2();
    var InlineCompletionFeature = (Base) => {
      return class extends Base {
        get inlineCompletion() {
          return {
            on: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.InlineCompletionRequest.type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params));
              });
            }
          };
        }
      };
    };
    exports2.InlineCompletionFeature = InlineCompletionFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/textDocumentContent.js
var require_textDocumentContent = __commonJS2({
  "node_modules/vscode-languageserver/lib/common/textDocumentContent.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TextDocumentContentFeature = void 0;
    var vscode_languageserver_protocol_1 = require_api2();
    var TextDocumentContentFeature = (Base) => {
      return class extends Base {
        get textDocumentContent() {
          return {
            refresh: (uri) => {
              return this.connection.sendRequest(vscode_languageserver_protocol_1.TextDocumentContentRefreshRequest.type, { uri });
            },
            on: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.TextDocumentContentRequest.type, (params, cancel) => {
                return handler(params, cancel);
              });
            }
          };
        }
      };
    };
    exports2.TextDocumentContentFeature = TextDocumentContentFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/server.js
var require_server = __commonJS2({
  "node_modules/vscode-languageserver/lib/common/server.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
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
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || /* @__PURE__ */ (function() {
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
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2._NotebooksImpl = exports2._LanguagesImpl = exports2.BulkUnregistration = exports2.BulkRegistration = exports2.ErrorMessageTracker = void 0;
    exports2.combineConsoleFeatures = combineConsoleFeatures;
    exports2.combineTelemetryFeatures = combineTelemetryFeatures;
    exports2.combineTracerFeatures = combineTracerFeatures;
    exports2.combineClientFeatures = combineClientFeatures;
    exports2.combineWindowFeatures = combineWindowFeatures;
    exports2.combineWorkspaceFeatures = combineWorkspaceFeatures;
    exports2.combineLanguagesFeatures = combineLanguagesFeatures;
    exports2.combineNotebooksFeatures = combineNotebooksFeatures;
    exports2.combineFeatures = combineFeatures;
    exports2.createConnection = createConnection;
    var vscode_languageserver_protocol_1 = require_api2();
    var Is2 = __importStar(require_is());
    var UUID = __importStar(require_uuid());
    var progress_1 = require_progress();
    var configuration_1 = require_configuration();
    var workspaceFolder_1 = require_workspaceFolder();
    var callHierarchy_1 = require_callHierarchy();
    var semanticTokens_1 = require_semanticTokens();
    var showDocument_1 = require_showDocument();
    var fileOperations_1 = require_fileOperations();
    var linkedEditingRange_1 = require_linkedEditingRange();
    var typeHierarchy_1 = require_typeHierarchy();
    var inlineValue_1 = require_inlineValue();
    var foldingRange_1 = require_foldingRange();
    var inlayHint_1 = require_inlayHint();
    var diagnostic_1 = require_diagnostic();
    var notebook_1 = require_notebook();
    var moniker_1 = require_moniker();
    var inlineCompletion_1 = require_inlineCompletion();
    var textDocumentContent_1 = require_textDocumentContent();
    function null2Undefined(value) {
      if (value === null) {
        return void 0;
      }
      return value;
    }
    var ErrorMessageTracker = class {
      _messages;
      constructor() {
        this._messages = /* @__PURE__ */ Object.create(null);
      }
      /**
       * Add a message to the tracker.
       *
       * @param message The message to add.
       */
      add(message) {
        let count = this._messages[message];
        if (!count) {
          count = 0;
        }
        count++;
        this._messages[message] = count;
      }
      /**
       * Send all tracked messages to the connection's window.
       *
       * @param connection The connection established between client and server.
       */
      sendErrors(connection2) {
        Object.keys(this._messages).forEach((message) => {
          connection2.window.showErrorMessage(message);
        });
      }
    };
    exports2.ErrorMessageTracker = ErrorMessageTracker;
    var RemoteConsoleImpl = class {
      _rawConnection;
      _connection;
      constructor() {
      }
      rawAttach(connection2) {
        this._rawConnection = connection2;
      }
      attach(connection2) {
        this._connection = connection2;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      fillServerCapabilities(_capabilities) {
      }
      initialize(_capabilities) {
      }
      error(message) {
        this.send(vscode_languageserver_protocol_1.MessageType.Error, message);
      }
      warn(message) {
        this.send(vscode_languageserver_protocol_1.MessageType.Warning, message);
      }
      info(message) {
        this.send(vscode_languageserver_protocol_1.MessageType.Info, message);
      }
      log(message) {
        this.send(vscode_languageserver_protocol_1.MessageType.Log, message);
      }
      debug(message) {
        this.send(vscode_languageserver_protocol_1.MessageType.Debug, message);
      }
      send(type, message) {
        if (this._rawConnection) {
          this._rawConnection.sendNotification(vscode_languageserver_protocol_1.LogMessageNotification.type, { type, message }).catch(() => {
            (0, vscode_languageserver_protocol_1.RAL)().console.error(`Sending log message failed`);
          });
        }
      }
    };
    var _RemoteWindowImpl = class {
      _connection;
      constructor() {
      }
      attach(connection2) {
        this._connection = connection2;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      initialize(_capabilities) {
      }
      fillServerCapabilities(_capabilities) {
      }
      showErrorMessage(message, ...actions) {
        const params = { type: vscode_languageserver_protocol_1.MessageType.Error, message, actions };
        return this.connection.sendRequest(vscode_languageserver_protocol_1.ShowMessageRequest.type, params).then(null2Undefined);
      }
      showWarningMessage(message, ...actions) {
        const params = { type: vscode_languageserver_protocol_1.MessageType.Warning, message, actions };
        return this.connection.sendRequest(vscode_languageserver_protocol_1.ShowMessageRequest.type, params).then(null2Undefined);
      }
      showInformationMessage(message, ...actions) {
        const params = { type: vscode_languageserver_protocol_1.MessageType.Info, message, actions };
        return this.connection.sendRequest(vscode_languageserver_protocol_1.ShowMessageRequest.type, params).then(null2Undefined);
      }
    };
    var RemoteWindowImpl = (0, showDocument_1.ShowDocumentFeature)((0, progress_1.ProgressFeature)(_RemoteWindowImpl));
    var BulkRegistration;
    (function(BulkRegistration2) {
      function create() {
        return new BulkRegistrationImpl();
      }
      BulkRegistration2.create = create;
    })(BulkRegistration || (exports2.BulkRegistration = BulkRegistration = {}));
    var BulkRegistrationImpl = class {
      _registrations = [];
      _registered = /* @__PURE__ */ new Set();
      add(type, registerOptions) {
        const method = Is2.string(type) ? type : type.method;
        if (this._registered.has(method)) {
          throw new Error(`${method} is already added to this registration`);
        }
        const id = UUID.generateUuid();
        this._registrations.push({
          id,
          method,
          registerOptions: registerOptions || {}
        });
        this._registered.add(method);
      }
      asRegistrationParams() {
        return {
          registrations: this._registrations
        };
      }
    };
    var BulkUnregistration;
    (function(BulkUnregistration2) {
      function create() {
        return new BulkUnregistrationImpl(void 0, []);
      }
      BulkUnregistration2.create = create;
    })(BulkUnregistration || (exports2.BulkUnregistration = BulkUnregistration = {}));
    var BulkUnregistrationImpl = class {
      _connection;
      _unregistrations = /* @__PURE__ */ new Map();
      constructor(_connection, unregistrations) {
        this._connection = _connection;
        unregistrations.forEach((unregistration) => {
          this._unregistrations.set(unregistration.method, unregistration);
        });
      }
      get isAttached() {
        return !!this._connection;
      }
      attach(connection2) {
        this._connection = connection2;
      }
      add(unregistration) {
        this._unregistrations.set(unregistration.method, unregistration);
      }
      dispose() {
        const unregistrations = [];
        for (const unregistration of this._unregistrations.values()) {
          unregistrations.push(unregistration);
        }
        const params = {
          unregisterations: unregistrations
        };
        this._connection.sendRequest(vscode_languageserver_protocol_1.UnregistrationRequest.type, params).catch(() => {
          this._connection.console.info(`Bulk unregistration failed.`);
        });
      }
      disposeSingle(arg) {
        const method = Is2.string(arg) ? arg : arg.method;
        const unregistration = this._unregistrations.get(method);
        if (!unregistration) {
          return false;
        }
        const params = {
          unregisterations: [unregistration]
        };
        this._connection.sendRequest(vscode_languageserver_protocol_1.UnregistrationRequest.type, params).then(() => {
          this._unregistrations.delete(method);
        }, (_error) => {
          this._connection.console.info(`Un-registering request handler for ${unregistration.id} failed.`);
        });
        return true;
      }
    };
    var RemoteClientImpl = class {
      _connection;
      attach(connection2) {
        this._connection = connection2;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      initialize(_capabilities) {
      }
      fillServerCapabilities(_capabilities) {
      }
      register(typeOrRegistrations, registerOptionsOrType, registerOptions) {
        if (typeOrRegistrations instanceof BulkRegistrationImpl) {
          return this.registerMany(typeOrRegistrations);
        } else if (typeOrRegistrations instanceof BulkUnregistrationImpl) {
          return this.registerSingle1(typeOrRegistrations, registerOptionsOrType, registerOptions);
        } else {
          return this.registerSingle2(typeOrRegistrations, registerOptionsOrType);
        }
      }
      registerSingle1(unregistration, type, registerOptions) {
        const method = Is2.string(type) ? type : type.method;
        const id = UUID.generateUuid();
        const params = {
          registrations: [{ id, method, registerOptions: registerOptions || {} }]
        };
        if (!unregistration.isAttached) {
          unregistration.attach(this.connection);
        }
        return this.connection.sendRequest(vscode_languageserver_protocol_1.RegistrationRequest.type, params).then((_result) => {
          unregistration.add({ id, method });
          return unregistration;
        }, (_error) => {
          this.connection.console.info(`Registering request handler for ${method} failed.`);
          return Promise.reject(_error);
        });
      }
      registerSingle2(type, registerOptions) {
        const method = Is2.string(type) ? type : type.method;
        const id = UUID.generateUuid();
        const params = {
          registrations: [{ id, method, registerOptions: registerOptions || {} }]
        };
        return this.connection.sendRequest(vscode_languageserver_protocol_1.RegistrationRequest.type, params).then((_result) => {
          return vscode_languageserver_protocol_1.Disposable.create(() => {
            this.unregisterSingle(id, method).catch(() => {
              this.connection.console.info(`Un-registering capability with id ${id} failed.`);
            });
          });
        }, (_error) => {
          this.connection.console.info(`Registering request handler for ${method} failed.`);
          return Promise.reject(_error);
        });
      }
      unregisterSingle(id, method) {
        const params = {
          unregisterations: [{ id, method }]
        };
        return this.connection.sendRequest(vscode_languageserver_protocol_1.UnregistrationRequest.type, params).catch(() => {
          this.connection.console.info(`Un-registering request handler for ${id} failed.`);
        });
      }
      registerMany(registrations) {
        const params = registrations.asRegistrationParams();
        return this.connection.sendRequest(vscode_languageserver_protocol_1.RegistrationRequest.type, params).then(() => {
          return new BulkUnregistrationImpl(this._connection, params.registrations.map((registration) => {
            return { id: registration.id, method: registration.method };
          }));
        }, (_error) => {
          this.connection.console.info(`Bulk registration failed.`);
          return Promise.reject(_error);
        });
      }
    };
    var _RemoteWorkspaceImpl = class {
      _connection;
      constructor() {
      }
      attach(connection2) {
        this._connection = connection2;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      initialize(_capabilities) {
      }
      fillServerCapabilities(_capabilities) {
      }
      applyEdit(paramOrEdit) {
        function isApplyWorkspaceEditParams(value) {
          return value && !!value.edit;
        }
        const params = isApplyWorkspaceEditParams(paramOrEdit) ? paramOrEdit : { edit: paramOrEdit };
        return this.connection.sendRequest(vscode_languageserver_protocol_1.ApplyWorkspaceEditRequest.type, params);
      }
    };
    var RemoteWorkspaceImpl = (0, textDocumentContent_1.TextDocumentContentFeature)((0, fileOperations_1.FileOperationsFeature)((0, workspaceFolder_1.WorkspaceFoldersFeature)((0, configuration_1.ConfigurationFeature)(_RemoteWorkspaceImpl))));
    var TracerImpl = class {
      _trace;
      _connection;
      constructor() {
        this._trace = vscode_languageserver_protocol_1.Trace.Off;
      }
      attach(connection2) {
        this._connection = connection2;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      initialize(_capabilities) {
      }
      fillServerCapabilities(_capabilities) {
      }
      set trace(value) {
        this._trace = value;
      }
      log(message, verbose) {
        if (this._trace === vscode_languageserver_protocol_1.Trace.Off) {
          return;
        }
        this.connection.sendNotification(vscode_languageserver_protocol_1.LogTraceNotification.type, {
          message,
          verbose: this._trace === vscode_languageserver_protocol_1.Trace.Verbose ? verbose : void 0
        }).catch(() => {
        });
      }
    };
    var TelemetryImpl = class {
      _connection;
      constructor() {
      }
      attach(connection2) {
        this._connection = connection2;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      initialize(_capabilities) {
      }
      fillServerCapabilities(_capabilities) {
      }
      logEvent(data) {
        this.connection.sendNotification(vscode_languageserver_protocol_1.TelemetryEventNotification.type, data).catch(() => {
          this.connection.console.log(`Sending TelemetryEventNotification failed`);
        });
      }
    };
    var _LanguagesImpl = class {
      _connection;
      constructor() {
      }
      attach(connection2) {
        this._connection = connection2;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      initialize(_capabilities) {
      }
      fillServerCapabilities(_capabilities) {
      }
      attachWorkDoneProgress(params) {
        return (0, progress_1.attachWorkDone)(this.connection, params);
      }
      attachPartialResultProgress(_type, params) {
        return (0, progress_1.attachPartialResult)(this.connection, params);
      }
    };
    exports2._LanguagesImpl = _LanguagesImpl;
    var LanguagesImpl = (0, inlineCompletion_1.InlineCompletionFeature)((0, foldingRange_1.FoldingRangeFeature)((0, moniker_1.MonikerFeature)((0, diagnostic_1.DiagnosticFeature)((0, inlayHint_1.InlayHintFeature)((0, inlineValue_1.InlineValueFeature)((0, typeHierarchy_1.TypeHierarchyFeature)((0, linkedEditingRange_1.LinkedEditingRangeFeature)((0, semanticTokens_1.SemanticTokensFeature)((0, callHierarchy_1.CallHierarchyFeature)(_LanguagesImpl))))))))));
    var _NotebooksImpl = class {
      _connection;
      constructor() {
      }
      attach(connection2) {
        this._connection = connection2;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      initialize(_capabilities) {
      }
      fillServerCapabilities(_capabilities) {
      }
      attachWorkDoneProgress(params) {
        return (0, progress_1.attachWorkDone)(this.connection, params);
      }
      attachPartialResultProgress(_type, params) {
        return (0, progress_1.attachPartialResult)(this.connection, params);
      }
    };
    exports2._NotebooksImpl = _NotebooksImpl;
    var NotebooksImpl = (0, notebook_1.NotebookSyncFeature)(_NotebooksImpl);
    function combineConsoleFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    function combineTelemetryFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    function combineTracerFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    function combineClientFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    function combineWindowFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    function combineWorkspaceFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    function combineLanguagesFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    function combineNotebooksFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    function combineFeatures(one, two) {
      function combine(one2, two2, func2) {
        if (one2 && two2) {
          return func2(one2, two2);
        } else if (one2) {
          return one2;
        } else {
          return two2;
        }
      }
      const result = {
        __brand: "features",
        console: combine(one.console, two.console, combineConsoleFeatures),
        tracer: combine(one.tracer, two.tracer, combineTracerFeatures),
        telemetry: combine(one.telemetry, two.telemetry, combineTelemetryFeatures),
        client: combine(one.client, two.client, combineClientFeatures),
        window: combine(one.window, two.window, combineWindowFeatures),
        workspace: combine(one.workspace, two.workspace, combineWorkspaceFeatures),
        languages: combine(one.languages, two.languages, combineLanguagesFeatures),
        notebooks: combine(one.notebooks, two.notebooks, combineNotebooksFeatures)
      };
      return result;
    }
    function createConnection(connectionFactory, watchDog, factories) {
      const logger = factories && factories.console ? new (factories.console(RemoteConsoleImpl))() : new RemoteConsoleImpl();
      const connection2 = connectionFactory(logger);
      logger.rawAttach(connection2);
      const tracer = factories && factories.tracer ? new (factories.tracer(TracerImpl))() : new TracerImpl();
      const telemetry = factories && factories.telemetry ? new (factories.telemetry(TelemetryImpl))() : new TelemetryImpl();
      const client = factories && factories.client ? new (factories.client(RemoteClientImpl))() : new RemoteClientImpl();
      const remoteWindow = factories && factories.window ? new (factories.window(RemoteWindowImpl))() : new RemoteWindowImpl();
      const workspace = factories && factories.workspace ? new (factories.workspace(RemoteWorkspaceImpl))() : new RemoteWorkspaceImpl();
      const languages = factories && factories.languages ? new (factories.languages(LanguagesImpl))() : new LanguagesImpl();
      const notebooks = factories && factories.notebooks ? new (factories.notebooks(NotebooksImpl))() : new NotebooksImpl();
      const allRemotes = [logger, tracer, telemetry, client, remoteWindow, workspace, languages, notebooks];
      function asPromise(value) {
        if (value instanceof Promise) {
          return value;
        } else if (Is2.thenable(value)) {
          return new Promise((resolve, reject) => {
            value.then((resolved) => resolve(resolved), (error) => reject(error));
          });
        } else {
          return Promise.resolve(value);
        }
      }
      let shutdownHandler = void 0;
      let initializeHandler = void 0;
      let exitHandler = void 0;
      const protocolConnection = {
        listen: () => connection2.listen(),
        sendRequest: (type, ...params) => connection2.sendRequest(Is2.string(type) ? type : type.method, ...params),
        onRequest: (type, handler) => connection2.onRequest(type, handler),
        sendNotification: (type, param) => {
          const method = Is2.string(type) ? type : type.method;
          return connection2.sendNotification(method, param);
        },
        onNotification: (type, handler) => connection2.onNotification(type, handler),
        onProgress: connection2.onProgress,
        sendProgress: connection2.sendProgress,
        onInitialize: (handler) => {
          initializeHandler = handler;
          return {
            dispose: () => {
              initializeHandler = void 0;
            }
          };
        },
        onInitialized: (handler) => connection2.onNotification(vscode_languageserver_protocol_1.InitializedNotification.type, handler),
        onShutdown: (handler) => {
          shutdownHandler = handler;
          return {
            dispose: () => {
              shutdownHandler = void 0;
            }
          };
        },
        onExit: (handler) => {
          exitHandler = handler;
          return {
            dispose: () => {
              exitHandler = void 0;
            }
          };
        },
        get console() {
          return logger;
        },
        get telemetry() {
          return telemetry;
        },
        get tracer() {
          return tracer;
        },
        get client() {
          return client;
        },
        get window() {
          return remoteWindow;
        },
        get workspace() {
          return workspace;
        },
        get languages() {
          return languages;
        },
        get notebooks() {
          return notebooks;
        },
        onDidChangeConfiguration: (handler) => connection2.onNotification(vscode_languageserver_protocol_1.DidChangeConfigurationNotification.type, handler),
        onDidChangeWatchedFiles: (handler) => connection2.onNotification(vscode_languageserver_protocol_1.DidChangeWatchedFilesNotification.type, handler),
        __textDocumentSync: void 0,
        onDidOpenTextDocument: (handler) => connection2.onNotification(vscode_languageserver_protocol_1.DidOpenTextDocumentNotification.type, handler),
        onDidChangeTextDocument: (handler) => connection2.onNotification(vscode_languageserver_protocol_1.DidChangeTextDocumentNotification.type, handler),
        onDidCloseTextDocument: (handler) => connection2.onNotification(vscode_languageserver_protocol_1.DidCloseTextDocumentNotification.type, handler),
        onWillSaveTextDocument: (handler) => connection2.onNotification(vscode_languageserver_protocol_1.WillSaveTextDocumentNotification.type, handler),
        onWillSaveTextDocumentWaitUntil: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.WillSaveTextDocumentWaitUntilRequest.type, handler),
        onDidSaveTextDocument: (handler) => connection2.onNotification(vscode_languageserver_protocol_1.DidSaveTextDocumentNotification.type, handler),
        sendDiagnostics: (params) => connection2.sendNotification(vscode_languageserver_protocol_1.PublishDiagnosticsNotification.type, params),
        onHover: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.HoverRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), void 0);
        }),
        onCompletion: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.CompletionRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onCompletionResolve: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.CompletionResolveRequest.type, handler),
        onSignatureHelp: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.SignatureHelpRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), void 0);
        }),
        onDeclaration: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DeclarationRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onDefinition: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DefinitionRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onTypeDefinition: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.TypeDefinitionRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onImplementation: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.ImplementationRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onReferences: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.ReferencesRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onDocumentHighlight: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DocumentHighlightRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onDocumentSymbol: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DocumentSymbolRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onWorkspaceSymbol: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.WorkspaceSymbolRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onWorkspaceSymbolResolve: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.WorkspaceSymbolResolveRequest.type, handler),
        onCodeAction: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.CodeActionRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onCodeActionResolve: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.CodeActionResolveRequest.type, (params, cancel) => {
          return handler(params, cancel);
        }),
        onCodeLens: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.CodeLensRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onCodeLensResolve: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.CodeLensResolveRequest.type, (params, cancel) => {
          return handler(params, cancel);
        }),
        onDocumentFormatting: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DocumentFormattingRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), void 0);
        }),
        onDocumentRangeFormatting: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DocumentRangeFormattingRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), void 0);
        }),
        onDocumentRangesFormatting: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DocumentRangesFormattingRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), void 0);
        }),
        onDocumentOnTypeFormatting: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DocumentOnTypeFormattingRequest.type, (params, cancel) => {
          return handler(params, cancel);
        }),
        onRenameRequest: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.RenameRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), void 0);
        }),
        onPrepareRename: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.PrepareRenameRequest.type, (params, cancel) => {
          return handler(params, cancel);
        }),
        onDocumentLinks: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DocumentLinkRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onDocumentLinkResolve: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DocumentLinkResolveRequest.type, (params, cancel) => {
          return handler(params, cancel);
        }),
        onDocumentColor: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DocumentColorRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onColorPresentation: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.ColorPresentationRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onFoldingRanges: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.FoldingRangeRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onSelectionRanges: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.SelectionRangeRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onExecuteCommand: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.ExecuteCommandRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), void 0);
        }),
        dispose: () => connection2.dispose()
      };
      for (const remote of allRemotes) {
        remote.attach(protocolConnection);
      }
      connection2.onRequest(vscode_languageserver_protocol_1.InitializeRequest.type, (params) => {
        watchDog.initialize(params);
        if (Is2.string(params.trace)) {
          tracer.trace = vscode_languageserver_protocol_1.Trace.fromString(params.trace);
        }
        for (const remote of allRemotes) {
          remote.initialize(params.capabilities);
        }
        if (initializeHandler) {
          const result = initializeHandler(params, new vscode_languageserver_protocol_1.CancellationTokenSource().token, (0, progress_1.attachWorkDone)(connection2, params), void 0);
          return asPromise(result).then((value) => {
            if (value instanceof vscode_languageserver_protocol_1.ResponseError) {
              return value;
            }
            let result2 = value;
            if (!result2) {
              result2 = { capabilities: {} };
            }
            let capabilities = result2.capabilities;
            if (!capabilities) {
              capabilities = {};
              result2.capabilities = capabilities;
            }
            if (capabilities.textDocumentSync === void 0 || capabilities.textDocumentSync === null) {
              capabilities.textDocumentSync = Is2.number(protocolConnection.__textDocumentSync) ? protocolConnection.__textDocumentSync : vscode_languageserver_protocol_1.TextDocumentSyncKind.None;
            } else if (!Is2.number(capabilities.textDocumentSync) && !Is2.number(capabilities.textDocumentSync.change)) {
              capabilities.textDocumentSync.change = Is2.number(protocolConnection.__textDocumentSync) ? protocolConnection.__textDocumentSync : vscode_languageserver_protocol_1.TextDocumentSyncKind.None;
            }
            for (const remote of allRemotes) {
              remote.fillServerCapabilities(capabilities);
            }
            return result2;
          });
        } else {
          const result = { capabilities: { textDocumentSync: vscode_languageserver_protocol_1.TextDocumentSyncKind.None } };
          for (const remote of allRemotes) {
            remote.fillServerCapabilities(result.capabilities);
          }
          return result;
        }
      });
      connection2.onRequest(vscode_languageserver_protocol_1.ShutdownRequest.type, () => {
        watchDog.shutdownReceived = true;
        if (shutdownHandler) {
          return shutdownHandler(new vscode_languageserver_protocol_1.CancellationTokenSource().token);
        } else {
          return void 0;
        }
      });
      connection2.onNotification(vscode_languageserver_protocol_1.ExitNotification.type, () => {
        try {
          if (exitHandler) {
            return exitHandler();
          }
        } finally {
          if (watchDog.shutdownReceived) {
            watchDog.exit(0);
          } else {
            watchDog.exit(1);
          }
        }
      });
      connection2.onNotification(vscode_languageserver_protocol_1.SetTraceNotification.type, (params) => {
        tracer.trace = vscode_languageserver_protocol_1.Trace.fromString(params.value);
      });
      return protocolConnection;
    }
  }
});

// node_modules/vscode-languageserver/lib/node/files.js
var require_files = __commonJS2({
  "node_modules/vscode-languageserver/lib/node/files.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
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
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || /* @__PURE__ */ (function() {
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
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FileSystem = void 0;
    exports2.uriToFilePath = uriToFilePath;
    exports2.resolve = resolve;
    exports2.resolveGlobalNodePath = resolveGlobalNodePath;
    exports2.resolveGlobalYarnPath = resolveGlobalYarnPath;
    exports2.resolveModulePath = resolveModulePath;
    var url = __importStar(require("url"));
    var path = __importStar(require("path"));
    var fs2 = __importStar(require("fs"));
    var child_process_1 = require("child_process");
    function uriToFilePath(uri) {
      const parsed = url.parse(uri);
      if (parsed.protocol !== "file:" || !parsed.path) {
        return void 0;
      }
      const segments = parsed.path.split("/");
      for (let i2 = 0, len = segments.length; i2 < len; i2++) {
        segments[i2] = decodeURIComponent(segments[i2]);
      }
      if (process.platform === "win32" && segments.length > 1) {
        const first = segments[0];
        const second = segments[1];
        if (first.length === 0 && second.length > 1 && second[1] === ":") {
          segments.shift();
        }
      }
      return path.normalize(segments.join("/"));
    }
    function isWindows() {
      return process.platform === "win32";
    }
    function resolve(moduleName, nodePath, cwd, tracer) {
      const nodePathKey = "NODE_PATH";
      const app = [
        "var p = process;",
        "p.on('message',function(m){",
        "if(m.c==='e'){",
        "p.exit(0);",
        "}",
        "else if(m.c==='rs'){",
        "try{",
        "var r=require.resolve(m.a);",
        "p.send({c:'r',s:true,r:r});",
        "}",
        "catch(err){",
        "p.send({c:'r',s:false});",
        "}",
        "}",
        "});"
      ].join("");
      return new Promise((resolve2, reject) => {
        const env = process.env;
        const newEnv = /* @__PURE__ */ Object.create(null);
        Object.keys(env).forEach((key) => newEnv[key] = env[key]);
        if (nodePath && fs2.existsSync(nodePath)) {
          if (newEnv[nodePathKey]) {
            newEnv[nodePathKey] = nodePath + path.delimiter + newEnv[nodePathKey];
          } else {
            newEnv[nodePathKey] = nodePath;
          }
          if (tracer) {
            tracer(`NODE_PATH value is: ${newEnv[nodePathKey]}`);
          }
        }
        newEnv["ELECTRON_RUN_AS_NODE"] = "1";
        try {
          const cp = (0, child_process_1.fork)("", [], {
            cwd,
            env: newEnv,
            execArgv: ["-e", app]
          });
          if (cp.pid === void 0) {
            reject(new Error(`Starting process to resolve node module  ${moduleName} failed`));
            return;
          }
          cp.on("error", (error) => {
            reject(error);
          });
          cp.on("message", (message2) => {
            if (message2.c === "r") {
              cp.send({ c: "e" });
              if (message2.s) {
                resolve2(message2.r);
              } else {
                reject(new Error(`Failed to resolve module: ${moduleName}`));
              }
            }
          });
          const message = {
            c: "rs",
            a: moduleName
          };
          cp.send(message);
        } catch (error) {
          reject(error);
        }
      });
    }
    function resolveGlobalNodePath(tracer) {
      let npmCommand = "npm";
      const env = /* @__PURE__ */ Object.create(null);
      Object.keys(process.env).forEach((key) => env[key] = process.env[key]);
      env["NO_UPDATE_NOTIFIER"] = "true";
      const options = {
        encoding: "utf8",
        env
      };
      if (isWindows()) {
        npmCommand = "npm.cmd";
        options.shell = true;
      }
      const handler = () => {
      };
      try {
        process.on("SIGPIPE", handler);
        const stdout = (0, child_process_1.spawnSync)(npmCommand, ["config", "get", "prefix"], options).stdout;
        if (!stdout) {
          if (tracer) {
            tracer(`'npm config get prefix' didn't return a value.`);
          }
          return void 0;
        }
        const prefix = stdout.trim();
        if (tracer) {
          tracer(`'npm config get prefix' value is: ${prefix}`);
        }
        if (prefix.length > 0) {
          if (isWindows()) {
            return path.join(prefix, "node_modules");
          } else {
            return path.join(prefix, "lib", "node_modules");
          }
        }
        return void 0;
      } catch (err2) {
        return void 0;
      } finally {
        process.removeListener("SIGPIPE", handler);
      }
    }
    function resolveGlobalYarnPath(tracer) {
      let yarnCommand = "yarn";
      const options = {
        encoding: "utf8"
      };
      if (isWindows()) {
        yarnCommand = "yarn.cmd";
        options.shell = true;
      }
      const handler = () => {
      };
      try {
        process.on("SIGPIPE", handler);
        const results = (0, child_process_1.spawnSync)(yarnCommand, ["global", "dir", "--json"], options);
        const stdout = results.stdout;
        if (!stdout) {
          if (tracer) {
            tracer(`'yarn global dir' didn't return a value.`);
            if (results.stderr) {
              tracer(results.stderr);
            }
          }
          return void 0;
        }
        const lines = stdout.trim().split(/\r?\n/);
        for (const line of lines) {
          try {
            const yarn = JSON.parse(line);
            if (yarn.type === "log") {
              return path.join(yarn.data, "node_modules");
            }
          } catch (e) {
          }
        }
        return void 0;
      } catch (err2) {
        return void 0;
      } finally {
        process.removeListener("SIGPIPE", handler);
      }
    }
    var FileSystem;
    (function(FileSystem2) {
      let _isCaseSensitive = void 0;
      function isCaseSensitive() {
        if (_isCaseSensitive !== void 0) {
          return _isCaseSensitive;
        }
        if (process.platform === "win32") {
          _isCaseSensitive = false;
        } else {
          _isCaseSensitive = !fs2.existsSync(__filename.toUpperCase()) || !fs2.existsSync(__filename.toLowerCase());
        }
        return _isCaseSensitive;
      }
      FileSystem2.isCaseSensitive = isCaseSensitive;
      function isParent(parent, child) {
        if (isCaseSensitive()) {
          return path.normalize(child).indexOf(path.normalize(parent)) === 0;
        } else {
          return path.normalize(child).toLowerCase().indexOf(path.normalize(parent).toLowerCase()) === 0;
        }
      }
      FileSystem2.isParent = isParent;
    })(FileSystem || (exports2.FileSystem = FileSystem = {}));
    function resolveModulePath(workspaceRoot, moduleName, nodePath, tracer) {
      if (nodePath) {
        if (!path.isAbsolute(nodePath)) {
          nodePath = path.join(workspaceRoot, nodePath);
        }
        return resolve(moduleName, nodePath, nodePath, tracer).then((value) => {
          if (FileSystem.isParent(nodePath, value)) {
            return value;
          } else {
            return Promise.reject(new Error(`Failed to load ${moduleName} from node path location.`));
          }
        }).then(void 0, (_error) => {
          return resolve(moduleName, resolveGlobalNodePath(tracer), workspaceRoot, tracer);
        });
      } else {
        return resolve(moduleName, resolveGlobalNodePath(tracer), workspaceRoot, tracer);
      }
    }
  }
});

// node_modules/vscode-jsonrpc/lib/node/ril.js
var require_ril = __commonJS2({
  "node_modules/vscode-jsonrpc/lib/node/ril.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var util_1 = require("util");
    var api_1 = require_api();
    var MessageBuffer = class _MessageBuffer extends api_1.AbstractMessageBuffer {
      static emptyBuffer = Buffer.allocUnsafe(0);
      constructor(encoding = "utf-8") {
        super(encoding);
      }
      emptyBuffer() {
        return _MessageBuffer.emptyBuffer;
      }
      fromString(value, encoding) {
        return Buffer.from(value, encoding);
      }
      toString(value, encoding) {
        if (value instanceof Buffer) {
          return value.toString(encoding);
        } else {
          return new util_1.TextDecoder(encoding).decode(value);
        }
      }
      asNative(buffer, length) {
        if (length === void 0) {
          return buffer instanceof Buffer ? buffer : Buffer.from(buffer);
        } else {
          return buffer instanceof Buffer ? buffer.slice(0, length) : Buffer.from(buffer, 0, length);
        }
      }
      allocNative(length) {
        return Buffer.allocUnsafe(length);
      }
    };
    var ReadableStreamWrapper = class {
      stream;
      constructor(stream) {
        this.stream = stream;
      }
      onClose(listener) {
        this.stream.on("close", listener);
        return api_1.Disposable.create(() => this.stream.off("close", listener));
      }
      onError(listener) {
        this.stream.on("error", listener);
        return api_1.Disposable.create(() => this.stream.off("error", listener));
      }
      onEnd(listener) {
        this.stream.on("end", listener);
        return api_1.Disposable.create(() => this.stream.off("end", listener));
      }
      onData(listener) {
        this.stream.on("data", listener);
        return api_1.Disposable.create(() => this.stream.off("data", listener));
      }
    };
    var WritableStreamWrapper = class {
      stream;
      constructor(stream) {
        this.stream = stream;
      }
      onClose(listener) {
        this.stream.on("close", listener);
        return api_1.Disposable.create(() => this.stream.off("close", listener));
      }
      onError(listener) {
        this.stream.on("error", listener);
        return api_1.Disposable.create(() => this.stream.off("error", listener));
      }
      onEnd(listener) {
        this.stream.on("end", listener);
        return api_1.Disposable.create(() => this.stream.off("end", listener));
      }
      write(data, encoding) {
        return new Promise((resolve, reject) => {
          const callback = (error) => {
            if (error === void 0 || error === null) {
              resolve();
            } else {
              reject(error);
            }
          };
          if (typeof data === "string") {
            this.stream.write(data, encoding, callback);
          } else {
            this.stream.write(data, callback);
          }
        });
      }
      end() {
        this.stream.end();
      }
    };
    var _ril = Object.freeze({
      messageBuffer: Object.freeze({
        create: (encoding) => new MessageBuffer(encoding)
      }),
      applicationJson: Object.freeze({
        encoder: Object.freeze({
          name: "application/json",
          encode: (msg, options) => {
            try {
              return Promise.resolve(Buffer.from(JSON.stringify(msg, void 0, 0), options.charset));
            } catch (err2) {
              return Promise.reject(err2);
            }
          }
        }),
        decoder: Object.freeze({
          name: "application/json",
          decode: (buffer, options) => {
            try {
              if (buffer instanceof Buffer) {
                return Promise.resolve(JSON.parse(buffer.toString(options.charset)));
              } else {
                return Promise.resolve(JSON.parse(new util_1.TextDecoder(options.charset).decode(buffer)));
              }
            } catch (err2) {
              return Promise.reject(err2);
            }
          }
        })
      }),
      stream: Object.freeze({
        asReadableStream: (stream) => new ReadableStreamWrapper(stream),
        asWritableStream: (stream) => new WritableStreamWrapper(stream)
      }),
      console,
      timer: Object.freeze({
        setTimeout(callback, ms, ...args2) {
          const handle2 = setTimeout(callback, ms, ...args2);
          return { dispose: () => clearTimeout(handle2) };
        },
        setImmediate(callback, ...args2) {
          const handle2 = setImmediate(callback, ...args2);
          return { dispose: () => clearImmediate(handle2) };
        },
        setInterval(callback, ms, ...args2) {
          const handle2 = setInterval(callback, ms, ...args2);
          return { dispose: () => clearInterval(handle2) };
        }
      })
    });
    function RIL() {
      return _ril;
    }
    (function(RIL2) {
      function install() {
        api_1.RAL.install(_ril);
      }
      RIL2.install = install;
    })(RIL || (RIL = {}));
    exports2.default = RIL;
  }
});

// node_modules/vscode-jsonrpc/lib/node/main.js
var require_main = __commonJS2({
  "node_modules/vscode-jsonrpc/lib/node/main.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
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
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || /* @__PURE__ */ (function() {
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
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.StreamMessageWriter = exports2.StreamMessageReader = exports2.SocketMessageWriter = exports2.SocketMessageReader = exports2.PortMessageWriter = exports2.PortMessageReader = exports2.IPCMessageWriter = exports2.IPCMessageReader = void 0;
    exports2.generateRandomPipeName = generateRandomPipeName;
    exports2.createClientPipeTransport = createClientPipeTransport;
    exports2.createServerPipeTransport = createServerPipeTransport;
    exports2.createClientSocketTransport = createClientSocketTransport;
    exports2.createServerSocketTransport = createServerSocketTransport;
    exports2.createMessageConnection = createMessageConnection;
    var ril_1 = __importDefault(require_ril());
    ril_1.default.install();
    var path = __importStar(require("path"));
    var os = __importStar(require("os"));
    var fs2 = __importStar(require("fs"));
    var crypto_1 = require("crypto");
    var net_1 = require("net");
    var api_1 = require_api();
    __exportStar(require_api(), exports2);
    var IPCMessageReader = class extends api_1.AbstractMessageReader {
      process;
      constructor(process2) {
        super();
        this.process = process2;
        const eventEmitter = this.process;
        eventEmitter.on("error", (error) => this.fireError(error));
        eventEmitter.on("close", () => this.fireClose());
      }
      listen(callback) {
        this.process.on("message", callback);
        return api_1.Disposable.create(() => this.process.off("message", callback));
      }
    };
    exports2.IPCMessageReader = IPCMessageReader;
    var IPCMessageWriter = class extends api_1.AbstractMessageWriter {
      process;
      errorCount;
      constructor(process2) {
        super();
        this.process = process2;
        this.errorCount = 0;
        const eventEmitter = this.process;
        eventEmitter.on("error", (error) => this.fireError(error));
        eventEmitter.on("close", () => this.fireClose);
      }
      write(msg) {
        try {
          if (typeof this.process.send === "function") {
            this.process.send(msg, void 0, void 0, (error) => {
              if (error) {
                this.errorCount++;
                this.handleError(error, msg);
              } else {
                this.errorCount = 0;
              }
            });
          }
          return Promise.resolve();
        } catch (error) {
          this.handleError(error, msg);
          return Promise.reject(error);
        }
      }
      handleError(error, msg) {
        this.errorCount++;
        this.fireError(error, msg, this.errorCount);
      }
      end() {
      }
    };
    exports2.IPCMessageWriter = IPCMessageWriter;
    var PortMessageReader = class extends api_1.AbstractMessageReader {
      onData;
      constructor(port) {
        super();
        this.onData = new api_1.Emitter();
        port.on("close", () => this.fireClose);
        port.on("error", (error) => this.fireError(error));
        port.on("message", (message) => {
          this.onData.fire(message);
        });
      }
      listen(callback) {
        return this.onData.event(callback);
      }
    };
    exports2.PortMessageReader = PortMessageReader;
    var PortMessageWriter = class extends api_1.AbstractMessageWriter {
      port;
      errorCount;
      constructor(port) {
        super();
        this.port = port;
        this.errorCount = 0;
        port.on("close", () => this.fireClose());
        port.on("error", (error) => this.fireError(error));
      }
      write(msg) {
        try {
          this.port.postMessage(msg);
          return Promise.resolve();
        } catch (error) {
          this.handleError(error, msg);
          return Promise.reject(error);
        }
      }
      handleError(error, msg) {
        this.errorCount++;
        this.fireError(error, msg, this.errorCount);
      }
      end() {
      }
    };
    exports2.PortMessageWriter = PortMessageWriter;
    var SocketMessageReader = class extends api_1.ReadableStreamMessageReader {
      constructor(socket, encoding = "utf-8") {
        super((0, ril_1.default)().stream.asReadableStream(socket), encoding);
      }
    };
    exports2.SocketMessageReader = SocketMessageReader;
    var SocketMessageWriter = class extends api_1.WriteableStreamMessageWriter {
      socket;
      constructor(socket, options) {
        super((0, ril_1.default)().stream.asWritableStream(socket), options);
        this.socket = socket;
      }
      dispose() {
        super.dispose();
        this.socket.destroy();
      }
    };
    exports2.SocketMessageWriter = SocketMessageWriter;
    var StreamMessageReader = class extends api_1.ReadableStreamMessageReader {
      constructor(readable, encoding) {
        super((0, ril_1.default)().stream.asReadableStream(readable), encoding);
      }
    };
    exports2.StreamMessageReader = StreamMessageReader;
    var StreamMessageWriter = class extends api_1.WriteableStreamMessageWriter {
      constructor(writable, options) {
        super((0, ril_1.default)().stream.asWritableStream(writable), options);
      }
    };
    exports2.StreamMessageWriter = StreamMessageWriter;
    var XDG_RUNTIME_DIR = process.env["XDG_RUNTIME_DIR"];
    var safeIpcPathLengths = /* @__PURE__ */ new Map([
      ["linux", 107],
      ["darwin", 102]
    ]);
    function generateRandomPipeName() {
      if (process.platform === "win32") {
        return `\\\\.\\pipe\\lsp-${(0, crypto_1.randomBytes)(16).toString("hex")}-sock`;
      }
      let randomLength = 32;
      const fixedLength = "/lsp-.sock".length;
      const tmpDir = fs2.realpathSync(XDG_RUNTIME_DIR ?? os.tmpdir());
      const limit = safeIpcPathLengths.get(process.platform);
      if (limit !== void 0) {
        randomLength = Math.min(limit - tmpDir.length - fixedLength, randomLength);
      }
      if (randomLength < 16) {
        throw new Error(`Unable to generate a random pipe name with ${randomLength} characters.`);
      }
      const randomSuffix = (0, crypto_1.randomBytes)(Math.floor(randomLength / 2)).toString("hex");
      return path.join(tmpDir, `lsp-${randomSuffix}.sock`);
    }
    function createClientPipeTransport(pipeName, encoding = "utf-8") {
      let connectResolve;
      const connected = new Promise((resolve, _reject) => {
        connectResolve = resolve;
      });
      return new Promise((resolve, reject) => {
        const server = (0, net_1.createServer)((socket) => {
          server.close();
          connectResolve([
            new SocketMessageReader(socket, encoding),
            new SocketMessageWriter(socket, encoding)
          ]);
        });
        server.on("error", reject);
        server.listen(pipeName, () => {
          server.removeListener("error", reject);
          resolve({
            onConnected: () => {
              return connected;
            }
          });
        });
      });
    }
    function createServerPipeTransport(pipeName, encoding = "utf-8") {
      const socket = (0, net_1.createConnection)(pipeName);
      return [
        new SocketMessageReader(socket, encoding),
        new SocketMessageWriter(socket, encoding)
      ];
    }
    function createClientSocketTransport(port, encoding = "utf-8") {
      let connectResolve;
      const connected = new Promise((resolve, _reject) => {
        connectResolve = resolve;
      });
      return new Promise((resolve, reject) => {
        const server = (0, net_1.createServer)((socket) => {
          server.close();
          connectResolve([
            new SocketMessageReader(socket, encoding),
            new SocketMessageWriter(socket, encoding)
          ]);
        });
        server.on("error", reject);
        server.listen(port, "127.0.0.1", () => {
          server.removeListener("error", reject);
          resolve({
            onConnected: () => {
              return connected;
            }
          });
        });
      });
    }
    function createServerSocketTransport(port, encoding = "utf-8") {
      const socket = (0, net_1.createConnection)(port, "127.0.0.1");
      return [
        new SocketMessageReader(socket, encoding),
        new SocketMessageWriter(socket, encoding)
      ];
    }
    function isReadableStream(value) {
      const candidate = value;
      return candidate.read !== void 0 && candidate.addListener !== void 0;
    }
    function isWritableStream(value) {
      const candidate = value;
      return candidate.write !== void 0 && candidate.addListener !== void 0;
    }
    function createMessageConnection(input, output, logger, options) {
      if (!logger) {
        logger = api_1.NullLogger;
      }
      const reader = isReadableStream(input) ? new StreamMessageReader(input) : input;
      const writer = isWritableStream(output) ? new StreamMessageWriter(output) : output;
      if (api_1.ConnectionStrategy.is(options)) {
        options = { connectionStrategy: options };
      }
      return (0, api_1.createMessageConnection)(reader, writer, logger, options);
    }
  }
});

// node_modules/vscode-languageserver-protocol/lib/node/main.js
var require_main2 = __commonJS2({
  "node_modules/vscode-languageserver-protocol/lib/node/main.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
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
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createProtocolConnection = createProtocolConnection;
    var node_12 = require_main();
    __exportStar(require_main(), exports2);
    __exportStar(require_api2(), exports2);
    function createProtocolConnection(input, output, logger, options) {
      return (0, node_12.createMessageConnection)(input, output, logger, options);
    }
  }
});

// node_modules/vscode-languageserver/lib/common/api.js
var require_api3 = __commonJS2({
  "node_modules/vscode-languageserver/lib/common/api.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
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
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ProposedFeatures = exports2.NotebookDocuments = exports2.TextDocuments = exports2.SemanticTokensBuilder = void 0;
    var semanticTokens_1 = require_semanticTokens();
    Object.defineProperty(exports2, "SemanticTokensBuilder", { enumerable: true, get: function() {
      return semanticTokens_1.SemanticTokensBuilder;
    } });
    __exportStar(require_api2(), exports2);
    var textDocuments_1 = require_textDocuments();
    Object.defineProperty(exports2, "TextDocuments", { enumerable: true, get: function() {
      return textDocuments_1.TextDocuments;
    } });
    var notebook_1 = require_notebook();
    Object.defineProperty(exports2, "NotebookDocuments", { enumerable: true, get: function() {
      return notebook_1.NotebookDocuments;
    } });
    __exportStar(require_server(), exports2);
    var ProposedFeatures;
    (function(ProposedFeatures2) {
      ProposedFeatures2.all = {
        __brand: "features"
      };
    })(ProposedFeatures || (exports2.ProposedFeatures = ProposedFeatures = {}));
  }
});

// node_modules/vscode-languageserver/lib/node/main.js
var require_main3 = __commonJS2({
  "node_modules/vscode-languageserver/lib/node/main.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
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
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || /* @__PURE__ */ (function() {
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
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Files = void 0;
    exports2.createConnection = createConnection;
    var node_util_1 = require("node:util");
    var Is2 = __importStar(require_is());
    var server_1 = require_server();
    var fm = __importStar(require_files());
    var node_12 = require_main2();
    __exportStar(require_main2(), exports2);
    __exportStar(require_api3(), exports2);
    var Files;
    (function(Files2) {
      Files2.uriToFilePath = fm.uriToFilePath;
      Files2.resolveGlobalNodePath = fm.resolveGlobalNodePath;
      Files2.resolveGlobalYarnPath = fm.resolveGlobalYarnPath;
      Files2.resolve = fm.resolve;
      Files2.resolveModulePath = fm.resolveModulePath;
    })(Files || (exports2.Files = Files = {}));
    var _protocolConnection;
    function endProtocolConnection() {
      if (_protocolConnection === void 0) {
        return;
      }
      try {
        _protocolConnection.end();
      } catch (_err) {
      }
    }
    var _shutdownReceived = false;
    var exitTimer = void 0;
    function setupExitTimer() {
      const argName = "--clientProcessId";
      function runTimer(value) {
        try {
          const processId = parseInt(value);
          if (!isNaN(processId)) {
            exitTimer = setInterval(() => {
              try {
                process.kill(processId, 0);
              } catch (ex) {
                endProtocolConnection();
                process.exit(_shutdownReceived ? 0 : 1);
              }
            }, 3e3);
          }
        } catch (e) {
        }
      }
      for (let i2 = 2; i2 < process.argv.length; i2++) {
        const arg = process.argv[i2];
        if (arg === argName && i2 + 1 < process.argv.length) {
          runTimer(process.argv[i2 + 1]);
          return;
        } else {
          const args2 = arg.split("=");
          if (args2[0] === argName) {
            runTimer(args2[1]);
          }
        }
      }
    }
    setupExitTimer();
    var watchDog = {
      initialize: (params) => {
        const processId = params.processId;
        if (Is2.number(processId) && exitTimer === void 0) {
          setInterval(() => {
            try {
              process.kill(processId, 0);
            } catch (ex) {
              process.exit(_shutdownReceived ? 0 : 1);
            }
          }, 3e3);
        }
      },
      get shutdownReceived() {
        return _shutdownReceived;
      },
      set shutdownReceived(value) {
        _shutdownReceived = value;
      },
      exit: (code) => {
        endProtocolConnection();
        process.exit(code);
      }
    };
    function createConnection(arg1, arg2, arg3, arg4) {
      let factories;
      let input;
      let output;
      let options;
      if (arg1 !== void 0 && arg1.__brand === "features") {
        factories = arg1;
        arg1 = arg2;
        arg2 = arg3;
        arg3 = arg4;
      }
      if (node_12.ConnectionStrategy.is(arg1) || node_12.ConnectionOptions.is(arg1)) {
        options = arg1;
      } else {
        input = arg1;
        output = arg2;
        options = arg3;
      }
      return _createConnection(input, output, options, factories);
    }
    function _createConnection(input, output, options, factories) {
      let stdio = false;
      if (!input && !output && process.argv.length > 2) {
        let port = void 0;
        let pipeName = void 0;
        const argv = process.argv.slice(2);
        for (let i2 = 0; i2 < argv.length; i2++) {
          const arg = argv[i2];
          if (arg === "--node-ipc") {
            input = new node_12.IPCMessageReader(process);
            output = new node_12.IPCMessageWriter(process);
            break;
          } else if (arg === "--stdio") {
            stdio = true;
            input = process.stdin;
            output = process.stdout;
            break;
          } else if (arg === "--socket") {
            port = parseInt(argv[i2 + 1]);
            break;
          } else if (arg === "--pipe") {
            pipeName = argv[i2 + 1];
            break;
          } else {
            const args2 = arg.split("=");
            if (args2[0] === "--socket") {
              port = parseInt(args2[1]);
              break;
            } else if (args2[0] === "--pipe") {
              pipeName = args2[1];
              break;
            }
          }
        }
        if (port) {
          const transport = (0, node_12.createServerSocketTransport)(port);
          input = transport[0];
          output = transport[1];
        } else if (pipeName) {
          const transport = (0, node_12.createServerPipeTransport)(pipeName);
          input = transport[0];
          output = transport[1];
        }
      }
      const commandLineMessage = "Use arguments of createConnection or set command line parameters: '--node-ipc', '--stdio' or '--socket={number}'";
      if (!input) {
        throw new Error("Connection input stream is not set. " + commandLineMessage);
      }
      if (!output) {
        throw new Error("Connection output stream is not set. " + commandLineMessage);
      }
      if (Is2.func(input.read) && Is2.func(input.on)) {
        const inputStream = input;
        inputStream.on("end", () => {
          endProtocolConnection();
          process.exit(_shutdownReceived ? 0 : 1);
        });
        inputStream.on("close", () => {
          endProtocolConnection();
          process.exit(_shutdownReceived ? 0 : 1);
        });
      }
      const connectionFactory = (logger) => {
        const result = (0, node_12.createProtocolConnection)(input, output, logger, options);
        if (stdio) {
          patchConsole(logger);
        }
        return result;
      };
      return (0, server_1.createConnection)(connectionFactory, watchDog, factories);
    }
    function patchConsole(logger) {
      function serialize(args2) {
        return args2.map((arg) => typeof arg === "string" ? arg : (0, node_util_1.inspect)(arg)).join(" ");
      }
      const counters = /* @__PURE__ */ new Map();
      console.assert = function assert(assertion, ...args2) {
        if (assertion) {
          return;
        }
        if (args2.length === 0) {
          logger.error("Assertion failed");
        } else {
          const [message, ...rest] = args2;
          logger.error(`Assertion failed: ${message} ${serialize(rest)}`);
        }
      };
      console.count = function count(label = "default") {
        const message = String(label);
        let counter = counters.get(message) ?? 0;
        counter += 1;
        counters.set(message, counter);
        logger.log(`${message}: ${message}`);
      };
      console.countReset = function countReset(label) {
        if (label === void 0) {
          counters.clear();
        } else {
          counters.delete(String(label));
        }
      };
      console.debug = function debug(...args2) {
        logger.log(serialize(args2));
      };
      console.dir = function dir(arg, options) {
        logger.log((0, node_util_1.inspect)(arg, options));
      };
      console.log = function log(...args2) {
        logger.log(serialize(args2));
      };
      console.error = function error(...args2) {
        logger.error(serialize(args2));
      };
      console.trace = function trace(...args2) {
        const stack = new Error().stack.replace(/(.+\n){2}/, "");
        let message = "Trace";
        if (args2.length !== 0) {
          message += `: ${serialize(args2)}`;
        }
        logger.log(`${message}
${stack}`);
      };
      console.warn = function warn(...args2) {
        logger.warn(serialize(args2));
      };
    }
  }
});

// node_modules/vscode-languageserver-textdocument/lib/esm/main.js
var main_exports2 = {};
__export2(main_exports2, {
  TextDocument: () => TextDocument2
});
function mergeSort(data, compare) {
  if (data.length <= 1) {
    return data;
  }
  const p = data.length / 2 | 0;
  const left = data.slice(0, p);
  const right = data.slice(p);
  mergeSort(left, compare);
  mergeSort(right, compare);
  let leftIdx = 0;
  let rightIdx = 0;
  let i2 = 0;
  while (leftIdx < left.length && rightIdx < right.length) {
    const ret = compare(left[leftIdx], right[rightIdx]);
    if (ret <= 0) {
      data[i2++] = left[leftIdx++];
    } else {
      data[i2++] = right[rightIdx++];
    }
  }
  while (leftIdx < left.length) {
    data[i2++] = left[leftIdx++];
  }
  while (rightIdx < right.length) {
    data[i2++] = right[rightIdx++];
  }
  return data;
}
function computeLineOffsets(text, isAtLineStart, textOffset = 0) {
  const result = isAtLineStart ? [textOffset] : [];
  for (let i2 = 0; i2 < text.length; i2++) {
    const ch = text.charCodeAt(i2);
    if (isEOL(ch)) {
      if (ch === 13 && i2 + 1 < text.length && text.charCodeAt(i2 + 1) === 10) {
        i2++;
      }
      result.push(textOffset + i2 + 1);
    }
  }
  return result;
}
function isEOL(char) {
  return char === 13 || char === 10;
}
function getWellformedRange(range) {
  const start2 = range.start;
  const end = range.end;
  if (start2.line > end.line || start2.line === end.line && start2.character > end.character) {
    return { start: end, end: start2 };
  }
  return range;
}
function getWellformedEdit(textEdit) {
  const range = getWellformedRange(textEdit.range);
  if (range !== textEdit.range) {
    return { newText: textEdit.newText, range };
  }
  return textEdit;
}
var FullTextDocument2, TextDocument2;
var init_main2 = __esm({
  "node_modules/vscode-languageserver-textdocument/lib/esm/main.js"() {
    "use strict";
    FullTextDocument2 = class _FullTextDocument {
      constructor(uri, languageId, version, content) {
        this._uri = uri;
        this._languageId = languageId;
        this._version = version;
        this._content = content;
        this._lineOffsets = void 0;
      }
      get uri() {
        return this._uri;
      }
      get languageId() {
        return this._languageId;
      }
      get version() {
        return this._version;
      }
      getText(range) {
        if (range) {
          const start2 = this.offsetAt(range.start);
          const end = this.offsetAt(range.end);
          return this._content.substring(start2, end);
        }
        return this._content;
      }
      update(changes, version) {
        for (const change of changes) {
          if (_FullTextDocument.isIncremental(change)) {
            const range = getWellformedRange(change.range);
            const startOffset = this.offsetAt(range.start);
            const endOffset = this.offsetAt(range.end);
            this._content = this._content.substring(0, startOffset) + change.text + this._content.substring(endOffset, this._content.length);
            const startLine = Math.max(range.start.line, 0);
            const endLine = Math.max(range.end.line, 0);
            let lineOffsets = this._lineOffsets;
            const addedLineOffsets = computeLineOffsets(change.text, false, startOffset);
            if (endLine - startLine === addedLineOffsets.length) {
              for (let i2 = 0, len = addedLineOffsets.length; i2 < len; i2++) {
                lineOffsets[i2 + startLine + 1] = addedLineOffsets[i2];
              }
            } else {
              if (addedLineOffsets.length < 1e4) {
                lineOffsets.splice(startLine + 1, endLine - startLine, ...addedLineOffsets);
              } else {
                this._lineOffsets = lineOffsets = lineOffsets.slice(0, startLine + 1).concat(addedLineOffsets, lineOffsets.slice(endLine + 1));
              }
            }
            const diff = change.text.length - (endOffset - startOffset);
            if (diff !== 0) {
              for (let i2 = startLine + 1 + addedLineOffsets.length, len = lineOffsets.length; i2 < len; i2++) {
                lineOffsets[i2] = lineOffsets[i2] + diff;
              }
            }
          } else if (_FullTextDocument.isFull(change)) {
            this._content = change.text;
            this._lineOffsets = void 0;
          } else {
            throw new Error("Unknown change event received");
          }
        }
        this._version = version;
      }
      getLineOffsets() {
        if (this._lineOffsets === void 0) {
          this._lineOffsets = computeLineOffsets(this._content, true);
        }
        return this._lineOffsets;
      }
      positionAt(offset) {
        offset = Math.max(Math.min(offset, this._content.length), 0);
        const lineOffsets = this.getLineOffsets();
        let low = 0, high = lineOffsets.length;
        if (high === 0) {
          return { line: 0, character: offset };
        }
        while (low < high) {
          const mid = Math.floor((low + high) / 2);
          if (lineOffsets[mid] > offset) {
            high = mid;
          } else {
            low = mid + 1;
          }
        }
        const line = low - 1;
        offset = this.ensureBeforeEOL(offset, lineOffsets[line]);
        return { line, character: offset - lineOffsets[line] };
      }
      offsetAt(position) {
        const lineOffsets = this.getLineOffsets();
        if (position.line >= lineOffsets.length) {
          return this._content.length;
        } else if (position.line < 0) {
          return 0;
        }
        const lineOffset = lineOffsets[position.line];
        if (position.character <= 0) {
          return lineOffset;
        }
        const nextLineOffset = position.line + 1 < lineOffsets.length ? lineOffsets[position.line + 1] : this._content.length;
        const offset = Math.min(lineOffset + position.character, nextLineOffset);
        return this.ensureBeforeEOL(offset, lineOffset);
      }
      getLineRange(line) {
        const lineOffsets = this.getLineOffsets();
        if (line >= lineOffsets.length) {
          const lastLine = lineOffsets.length - 1;
          return { start: { line: lastLine, character: 0 }, end: { line: lastLine, character: this._content.length - lineOffsets[lastLine] } };
        } else if (line < 0) {
          return { start: { line: 0, character: 0 }, end: { line: 0, character: 0 } };
        }
        const startOffset = lineOffsets[line];
        const nextLineOffset = line + 1 < lineOffsets.length ? lineOffsets[line + 1] : this._content.length;
        const endOffset = this.ensureBeforeEOL(nextLineOffset, startOffset);
        return { start: { line, character: 0 }, end: { line, character: endOffset - startOffset } };
      }
      getEOLCharacters(line) {
        const lineOffsets = this.getLineOffsets();
        if (line >= lineOffsets.length) {
          return "";
        } else if (line < 0) {
          return "";
        }
        const nextLineOffset = line + 1 < lineOffsets.length ? lineOffsets[line + 1] : this._content.length;
        const eolOffset = this.ensureBeforeEOL(nextLineOffset, lineOffsets[line]);
        return this._content.substring(eolOffset, nextLineOffset);
      }
      ensureBeforeEOL(offset, lineOffset) {
        while (offset > lineOffset && isEOL(this._content.charCodeAt(offset - 1))) {
          offset--;
        }
        return offset;
      }
      get lineCount() {
        return this.getLineOffsets().length;
      }
      static isIncremental(event) {
        const candidate = event;
        return candidate !== void 0 && candidate !== null && typeof candidate.text === "string" && candidate.range !== void 0 && (candidate.rangeLength === void 0 || typeof candidate.rangeLength === "number");
      }
      static isFull(event) {
        const candidate = event;
        return candidate !== void 0 && candidate !== null && typeof candidate.text === "string" && candidate.range === void 0 && candidate.rangeLength === void 0;
      }
    };
    (function(TextDocument3) {
      function create(uri, languageId, version, content) {
        return new FullTextDocument2(uri, languageId, version, content);
      }
      TextDocument3.create = create;
      function update(document2, changes, version) {
        if (document2 instanceof FullTextDocument2) {
          document2.update(changes, version);
          return document2;
        } else {
          throw new Error("TextDocument.update: document must be created by TextDocument.create");
        }
      }
      TextDocument3.update = update;
      function applyEdits(document2, edits) {
        const text = document2.getText();
        const sortedEdits = mergeSort(edits.map(getWellformedEdit), (a, b) => {
          const diff = a.range.start.line - b.range.start.line;
          if (diff === 0) {
            return a.range.start.character - b.range.start.character;
          }
          return diff;
        });
        let lastModifiedOffset = 0;
        const spans = [];
        for (const e of sortedEdits) {
          const startOffset = document2.offsetAt(e.range.start);
          if (startOffset < lastModifiedOffset) {
            throw new Error("Overlapping edit");
          } else if (startOffset > lastModifiedOffset) {
            spans.push(text.substring(lastModifiedOffset, startOffset));
          }
          if (e.newText.length) {
            spans.push(e.newText);
          }
          lastModifiedOffset = document2.offsetAt(e.range.end);
        }
        spans.push(text.substr(lastModifiedOffset));
        return spans.join("");
      }
      TextDocument3.applyEdits = applyEdits;
    })(TextDocument2 || (TextDocument2 = {}));
  }
});

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
            function locateFile(path) {
              if (Module["locateFile"]) {
                return Module["locateFile"](path, scriptDirectory);
              }
              return scriptDirectory + path;
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
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
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
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || /* @__PURE__ */ (function() {
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
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.initParser = initParser;
    exports2.parse = parse;
    var path = __importStar(require("path"));
    var web_tree_sitter_1 = require_web_tree_sitter2();
    var parser;
    async function initParser(wasmPath) {
      if (parser) {
        return;
      }
      await web_tree_sitter_1.Parser.init({ locateFile: (name2) => path.join(__dirname, name2) });
      const file = wasmPath ?? path.join(__dirname, "..", "tree-sitter-tikker.wasm");
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
    function readDecls(text, path) {
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
        sig.defPath = path;
        decls.set(sig.name, sig);
      }
      const broken = root.hasError;
      tree.delete();
      return { decls, broken, types, typeRanges };
    }
    function analyze(text, path, ws2, config2 = exports2.DEFAULT_CONFIG) {
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
          types.origins.set(n.text, { path, range: (0, tree_1.rangeOf)(n) });
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
        const modPath = mod ? ws2.findModule(modtext, path) : void 0;
        const got = modPath ? ws2.declsIn(modPath) : void 0;
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
          add(id, (0, types_1.isMedium)(id.text) ? `"${id.text}" is a medium, not a type; it says how a value travels, so write what travels and put it in braces: strength{${id.text}}` : `unknown type "${id.text}"; declare it with TYPE or import it with USE`, config2.unknownComponentSeverity);
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
          sig.defPath = path;
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
          add(scope.decl, `${scope.sig.name} has ${side} ${pinSpan(layout.n)}, but ${unused.length === 1 ? "pin" : "pins"} ${describePins(unused)}${unused.length === 1 ? " is" : " are"} not used by any ${side === "input" ? "parameter" : "output port"}`, config2.unusedPinSeverity);
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
          add(scope.decl, `${scope.sig?.name ?? "this component"} closes its blocks with ";", so close the component too: a ";" of its own on the last line`, config2.unclosedBlockSeverity);
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
            severity: config2.unclosedBlockSeverity
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
            add(typeNode, `"${typeName}" is not a component type here; declare it in this file or import it with USE`, config2.unknownComponentSeverity);
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
          const d = add(nameNode, msg, config2.unknownComponentSeverity);
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
                const d = add(nameNode, `"${name2}" is not declared as an array; declare it with [${name2}{0..N}]: SomeType`, config2.unknownComponentSeverity);
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
            const d = add(id, `undeclared signal "${name2}"`, config2.undeclaredSignalSeverity);
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
              add(g.node, `${g.pins.length === 1 ? "pin" : "pins"} ${describePins(g.pins)} of ${inst} ${g.pins.length === 1 ? "is" : "are"} driven by ${quoted.join(" and ")}; redstone keeps the strongest of these (for on/off signals, an OR)`, config2.wiredOrSeverity);
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
              add(obj, `"${name2}" is not declared here; fields like ${name2}.dist are read from what a HEAR catches, inside HEAR(${name2} IN ...)`, config2.undeclaredSignalSeverity);
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
            add(v.defNode, `nothing reads "${name2}"; it is written here and goes nowhere, which is usually a name spelled two ways`, config2.unreadWireSeverity);
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
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
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
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || /* @__PURE__ */ (function() {
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
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FileWorkspace = exports2.EXTENSIONS = void 0;
    var fs2 = __importStar(require("fs"));
    var path = __importStar(require("path"));
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
        const dir = path.dirname(fromPath);
        const bases = [dir];
        const root = gitRoot(dir);
        if (root && root !== dir) {
          bases.push(root);
        }
        for (const base of bases) {
          for (const ext of this.extensions) {
            const p = path.join(base, `${modpath}.${ext}`);
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
        if (fs2.existsSync(path.join(d, ".git"))) {
          return d;
        }
        const up = path.dirname(d);
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

// build/features.js
var require_features = __commonJS2({
  "build/features.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
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
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || /* @__PURE__ */ (function() {
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
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.fields = exports2.TOKEN_MODIFIERS = exports2.TOKEN_TYPES = void 0;
    exports2.sigCode = sigCode;
    exports2.timingTable = timingTable;
    exports2.scopeAt = scopeAt;
    exports2.targetAt = targetAt;
    exports2.hoverFor = hoverFor;
    exports2.definitionFor = definitionFor;
    exports2.completionsAt = completionsAt;
    exports2.symbolsFor = symbolsFor;
    exports2.tokensFor = tokensFor;
    var fs2 = __importStar(require("fs"));
    var path = __importStar(require("path"));
    var vscode_languageserver_1 = require_api3();
    var analyze_12 = require_analyze();
    var tree_1 = require_tree();
    Object.defineProperty(exports2, "fields", { enumerable: true, get: function() {
      return tree_1.fields;
    } });
    var types_1 = require_types();
    var workspace_12 = require_workspace();
    function pinsOf(p) {
      if (p.s === void 0) {
        return "";
      }
      if (p.e === void 0) {
        return `${p.s}..*`;
      }
      return p.s === p.e ? `${p.s}` : `${p.s}..${p.e}`;
    }
    function portLine(p, arrow) {
      const pins = pinsOf(p);
      const body2 = `${p.name}: ${p.type ?? "?"}`;
      const name2 = pins ? `${pins}[${body2}]` : body2;
      const hear = p.hearText !== void 0 ? ` ~: ${p.hearText}` : "";
      return `${arrow} ${name2}${p.optional ? " = 0" : ""}${hear}`;
    }
    function settingLine(d) {
      return `SETTING ${d.name}: ${d.allowedText ?? "?"}${d.default !== void 0 ? ` = ${d.default}` : ""}`;
    }
    function sigCode(sig) {
      const lines = [sig.declText];
      for (const name2 of sig.settingOrder) {
        lines.push(settingLine(sig.settings.get(name2)));
      }
      for (const p of sig.inPorts) {
        lines.push(portLine(p, "->"));
      }
      for (const p of sig.outPorts) {
        if (!p.implicit) {
          lines.push(portLine(p, p.emits ? "~>" : "=>"));
        }
      }
      return lines.join("\n");
    }
    function code(text) {
      return "```tikker\n" + text + "\n```";
    }
    function timingTable(sig) {
      const paths = sig.timing ?? [];
      if (paths.length === 0) {
        return void 0;
      }
      const rows = paths.map((p) => [`${p.from} \u2192 ${p.to}`, (0, analyze_12.showDelays)(p.delays)]);
      const w = Math.max(...rows.map((r) => r[0].length));
      return ["**Timing**", code(rows.map((r) => `${r[0].padEnd(w)}   ${r[1]}`).join("\n"))].join("\n\n");
    }
    function sigMarkdown(sig, extra) {
      const parts2 = [code(sigCode(sig))];
      if (extra) {
        parts2.push(extra);
      }
      if (sig.origin) {
        parts2.push(`*${sig.origin}*`);
      }
      return parts2.join("\n\n");
    }
    function widthNote(types, ty) {
      const medium = types.mediumOf(ty);
      const how = medium === "vibration" ? "through the air" : medium === "contact" ? "by contact" : void 0;
      const w = types.width(ty);
      if (w === void 0) {
        const v = types.isVariadic(ty) ? "as many pins as each part is given" : "";
        return how ? [v, how].filter(Boolean).join(", ") : v;
      }
      const points = how ? `${w} connection point${w === 1 ? "" : "s"}` : `${w} pin${w === 1 ? "" : "s"}`;
      return how ? `${points}, ${how}` : points;
    }
    function fieldSourceType(fa, scope) {
      const obj = (0, tree_1.field)(fa, "object");
      if (!obj) {
        return void 0;
      }
      let p = fa;
      while (p) {
        if (p.type === "hear_block" && (0, tree_1.field)(p, "var")?.text === obj.text) {
          const src = (0, tree_1.field)(p, "source")?.text;
          return src ? scope?.values.get(src)?.type : void 0;
        }
        p = p.parent;
      }
      return scope?.values.get(obj.text)?.type;
    }
    function scopeAt(model, line) {
      let found;
      for (const sc of model.scopes) {
        if (line >= sc.startLine && line <= sc.endLine) {
          found = sc;
        }
      }
      return found;
    }
    function partOf(name2, scope, model) {
      const inst = scope?.instances.get(name2);
      if (inst) {
        return { inst, sig: inst.sig };
      }
      const sig = model.known.get(name2);
      return sig ? { sig } : void 0;
    }
    function refName(ref) {
      if (ref.type === "instance_ref") {
        return (0, tree_1.field)(ref, "name")?.text;
      }
      return ref.type === "identifier" ? ref.text : void 0;
    }
    function bracketRefs(arr) {
      const out2 = [];
      for (const child of (0, tree_1.kids)(arr)) {
        const inner = (0, tree_1.first)(child);
        if (inner && (inner.type === "identifier" || inner.type === "instance_ref")) {
          out2.push(inner);
        }
      }
      return out2;
    }
    function targetAt(model, ws2, docPath, line, character) {
      const n = model.root.namedDescendantForPosition({ row: line, column: character });
      if (!n) {
        return void 0;
      }
      const scope = scopeAt(model, line);
      const parent = n.parent;
      if (n.type === "port_name" && parent) {
        let refs = [];
        let side = "in";
        if (parent.type === "parameter_ref") {
          refs = (0, tree_1.kids)(parent).filter((c) => c.type === "identifier" || c.type === "instance_ref");
        } else if (parent.type === "output_ref") {
          side = "out";
          const arr = (0, tree_1.first)(parent, "component_array");
          refs = arr ? bracketRefs(arr) : [];
        }
        for (const ref of refs) {
          const name3 = refName(ref);
          const part = name3 ? partOf(name3, scope, model) : void 0;
          const ports = side === "in" ? part?.sig?.inPorts : part?.sig?.outPorts;
          const port = ports?.find((p) => p.name === n.text);
          if (part?.sig && port) {
            return { kind: "port", sig: part.sig, port, side };
          }
        }
        return void 0;
      }
      if (n.type === "medium") {
        return { kind: "medium", name: n.text };
      }
      if (n.type === "field_name" && parent) {
        if (parent.type === "field_access") {
          const flds = (0, analyze_12.readableFields)(model.types, fieldSourceType(parent, scope));
          return n.text in flds ? { kind: "read_field", name: n.text, what: flds[n.text] } : void 0;
        }
        if (parent.type === "type") {
          const upto = parent.text.slice(0, n.endIndex - parent.startIndex);
          const r = model.types.resolveProjection(upto);
          return r && r.ok ? { kind: "type_field", text: upto, type: r.type } : void 0;
        }
        return void 0;
      }
      if (n.type !== "identifier" || !parent) {
        return void 0;
      }
      const name2 = n.text;
      const pt = parent.type;
      if (pt === "function_declaration") {
        const sig2 = model.known.get(name2);
        return sig2 ? { kind: "component", sig: sig2 } : void 0;
      }
      if (pt === "instance_declaration") {
        const sig2 = model.known.get(name2);
        return sig2 ? { kind: "component", sig: sig2 } : void 0;
      }
      if (pt === "operator_call" && (0, tree_1.field)(parent, "name")?.id === n.id) {
        return analyze_12.OPERATOR_INFO[name2] ? { kind: "operator", name: name2 } : void 0;
      }
      if (pt === "type" || pt === "type_declaration") {
        return model.types.defs.has(name2) ? { kind: "type", name: name2 } : void 0;
      }
      if (pt === "module_path") {
        const imp = parent.parent;
        const mod = imp ? (0, tree_1.field)(imp, "module")?.text : void 0;
        const p = mod ? ws2.findModule(mod, docPath) : void 0;
        return p ? { kind: "module", path: p, name: mod } : void 0;
      }
      if (pt === "import_item") {
        const localName = (0, tree_1.field)(parent, "alias")?.text ?? (0, tree_1.field)(parent, "name")?.text ?? name2;
        const sig2 = model.known.get(localName);
        if (sig2) {
          return { kind: "component", sig: sig2 };
        }
        return model.types.defs.has(localName) ? { kind: "type", name: localName } : void 0;
      }
      if (pt === "setting_value" && (0, tree_1.field)(parent, "name")?.id === n.id) {
        const decl = parent.parent?.parent;
        const typeName = decl && decl.type === "instance_declaration" ? (0, tree_1.field)(decl, "type")?.text : void 0;
        const sig2 = typeName ? model.known.get(typeName) : void 0;
        const def = sig2?.settings.get(name2);
        return sig2 && def ? { kind: "setting", sig: sig2, def } : void 0;
      }
      if (pt === "setting_declaration" && scope?.sig) {
        const def = scope.sig.settings.get(name2);
        return def ? { kind: "setting", sig: scope.sig, def } : void 0;
      }
      if ((pt === "input_parameter" || pt === "output_parameter" || pt === "emission_parameter") && scope?.sig) {
        const side = pt === "input_parameter" ? "in" : "out";
        const port = (side === "in" ? scope.sig.inPorts : scope.sig.outPorts).find((p) => p.name === name2);
        return port ? { kind: "port", sig: scope.sig, port, side } : void 0;
      }
      if (pt === "instance_ref" || pt === "component_content" || pt === "flow_destination_item" || pt === "parameter_ref") {
        const inst2 = scope?.instances.get(name2);
        if (inst2) {
          return { kind: "instance", name: name2, inst: inst2 };
        }
        const value2 = scope?.values.get(name2);
        if (value2) {
          return { kind: "value", name: name2, value: value2 };
        }
        const sig2 = model.known.get(name2);
        return sig2 ? { kind: "component", sig: sig2 } : void 0;
      }
      const value = scope?.values.get(name2);
      if (value) {
        return { kind: "value", name: name2, value };
      }
      const inst = scope?.instances.get(name2);
      if (inst) {
        return { kind: "instance", name: name2, inst };
      }
      const sig = model.known.get(name2);
      if (sig) {
        return { kind: "component", sig };
      }
      if (model.types.defs.has(name2)) {
        return { kind: "type", name: name2 };
      }
      return void 0;
    }
    function hoverFor(t, model) {
      const types = model.types;
      switch (t.kind) {
        case "component":
          return sigMarkdown(t.sig, timingTable(t.sig));
        case "instance": {
          const dims = t.inst.dims ? `{${t.inst.dims.map(([a, b]) => `${a}..${b}`).join(", ")}}` : "";
          const head = code(`[${t.name}${dims}]: ${t.inst.type ?? "?"}`);
          return t.inst.sig ? head + "\n\n" + sigMarkdown(t.inst.sig, timingTable(t.inst.sig)) : head;
        }
        case "port": {
          const arrow = t.side === "in" ? "->" : t.port.emits ? "~>" : "=>";
          const note = widthNote(types, t.port.type);
          const pins = pinsOf(t.port);
          const where = pins ? `pin${pins.includes(".") ? "s" : ""} ${pins} of ${t.sig.name}` : `a port of ${t.sig.name}`;
          return [code(portLine(t.port, arrow)), [where, note].filter(Boolean).join(" \xB7 ")].join("\n\n");
        }
        case "value": {
          const what = {
            input: "input",
            output: "output",
            setting: "setting, fixed when the part is built",
            state: "state",
            wire: "wire"
          }[t.value.kind];
          const ty = t.value.setting?.allowedText ?? t.value.type;
          const note = t.value.kind === "setting" ? "" : widthNote(types, t.value.type);
          const opts = t.value.enumDef ? `one of: ${t.value.enumDef.options.join(", ")}` : "";
          return [code(`${t.name}: ${ty ?? "?"}`), [what, note, opts].filter(Boolean).join(" \xB7 ")].join("\n\n");
        }
        case "type": {
          const def = types.defs.get(t.name);
          const o = types.origins.get(t.name);
          const w = widthNote(types, t.name);
          const fieldsList = types.recordFields(def);
          const lines = [code(`TYPE ${t.name}: ${def}`)];
          const facts = [w];
          if (fieldsList) {
            facts.push("fields: " + fieldsList.map((f) => {
              const fw = types.width(f.type);
              return `${f.name} (${f.type}${fw !== void 0 ? `, ${fw} pin${fw === 1 ? "" : "s"}` : ""})`;
            }).join(", "));
          }
          lines.push(facts.filter(Boolean).join(" \xB7 "));
          if (o?.from) {
            lines.push(`*imported from ${o.from}*`);
          }
          return lines.join("\n\n");
        }
        case "type_field":
          return [code(`${t.text}: ${t.type}`), widthNote(types, t.type)].filter(Boolean).join("\n\n");
        case "setting": {
          const d = t.def;
          const facts = [
            d.kind === "time" ? "a time" : d.kind === "number" ? "a number" : `one of: ${d.options.join(", ")}`,
            d.default !== void 0 ? `defaults to ${d.default}` : `has no default, so every ${t.sig.name} must choose one`
          ];
          return [code(settingLine(d)), `A setting of ${t.sig.name} \xB7 ${facts.join(" \xB7 ")}`].join("\n\n");
        }
        case "operator": {
          const op = analyze_12.OPERATOR_INFO[t.name];
          const count = op.max === op.min ? `${op.min}` : `${op.min} or more`;
          return [code(`${t.name}{...}`), `${op.what}. Takes ${count} value${op.min === 1 && op.max === 1 ? "" : "s"}.`].join("\n\n");
        }
        case "read_field":
          return [code(`.${t.name}`), t.what].join("\n\n");
        case "medium": {
          const m = types_1.MEDIA[t.name];
          const facts = [
            m.what,
            m.kind === "event" ? "An event: it exists only in the tick it arrives, so it is read with HEAR." : "A level: it persists, so it can be watched with WAIT or CHANGE."
          ];
          const delivery = Object.entries(m.delivery);
          if (delivery.length > 0) {
            facts.push(`The link fills in: ${delivery.map(([k, v]) => `\`${k}\` (${v})`).join(", ")}.`);
          }
          return [code(`strength{${t.name}}`), facts.join(" ")].join("\n\n");
        }
        case "module":
          return code(`USE ${t.name}`) + `

${t.path}`;
      }
      return void 0;
    }
    function definitionFor(t, model, docPath) {
      switch (t.kind) {
        case "component":
          return t.sig.defRange ? { path: t.sig.defPath ?? docPath, range: t.sig.defRange } : void 0;
        case "instance":
          return { path: docPath, range: t.inst.defRange };
        case "port":
          return t.port.defRange ? { path: t.sig.defPath ?? docPath, range: t.port.defRange } : void 0;
        case "value":
          return t.value.defRange ? { path: docPath, range: t.value.defRange } : void 0;
        case "type": {
          const o = model.types.origins.get(t.name);
          return o?.range ? { path: o.path ?? docPath, range: o.range } : void 0;
        }
        case "setting":
          return t.def.defRange ? { path: t.sig.defPath ?? docPath, range: t.def.defRange } : void 0;
        case "module":
          return { path: t.path, range: { start: { line: 0, character: 0 }, end: { line: 0, character: 0 } } };
      }
      return void 0;
    }
    var KEYWORDS = [
      ["WAIT", "WAIT(${1:signal}):\n	$0", "runs its body on a rising edge"],
      ["CHANGE", "CHANGE(${1:signal}):\n	$0", "runs its body on either edge"],
      ["AFTER", "AFTER(${1:1rt}):\n	$0", "runs its body that long after the event around it"],
      ["HEAR", "HEAR(${1:vib} IN ${2:heard}):\n	$0", "runs when an arrival gets through"],
      ["ACCEPT", "ACCEPT", "on a filter arm: this arrival is a candidate"],
      ["EACH", "EACH ${1:i} IN ${2:0..3}:\n	$0", "builds its body once per value"],
      ["SEQ", "SEQ(${1:1rt}):\n	$0", "each line fires that long after the last"],
      ["SETTING", "SETTING ${1:name}: ${2:0..15} = ${3:0}", "a build-time setting"],
      ["INVENTORY", "INVENTORY ${1|slots,output,capacity|}: $0", "an inventory property"],
      ["TYPE", "TYPE ${1:name}: ${2:{bit{0..3\\}\\}}", "a named type"],
      ["USE", "USE ${1:module}: [$0]", "import components and types"],
      ["NOP", "NOP", "does nothing"]
    ];
    function item(label, kind, detail, extra = {}) {
      return { label, kind, detail, ...extra };
    }
    function componentItem(sig) {
      return item(sig.name, vscode_languageserver_1.CompletionItemKind.Class, sig.declText, {
        documentation: { kind: vscode_languageserver_1.MarkupKind.Markdown, value: sigMarkdown(sig) }
      });
    }
    function typeItems(types) {
      const out2 = types_1.BUILTIN_TYPES.map((t) => item(t, vscode_languageserver_1.CompletionItemKind.Keyword, "built-in type"));
      for (const [name2, def] of types.defs) {
        out2.push(item(name2, vscode_languageserver_1.CompletionItemKind.Struct, def));
      }
      return out2;
    }
    function hearVarsAbove(lines, line) {
      const out2 = /* @__PURE__ */ new Map();
      const indent = (s) => s.length - s.trimStart().length;
      const here = indent(lines[line] ?? "");
      for (let i2 = line - 1; i2 >= 0; i2--) {
        const m = /^\s*HEAR\s*\(\s*([A-Za-z_&][\w&]*)\s+IN\s+([A-Za-z_&][\w&]*)/.exec(lines[i2]);
        if (m && indent(lines[i2]) < here) {
          out2.set(m[1], m[2]);
        }
        if (/^[\d*]*\[[A-Za-z_&][\w&]*\][\d*]*\s*[=~]>/.test(lines[i2])) {
          break;
        }
      }
      return out2;
    }
    function moduleCandidates(ws2, docPath) {
      if (!docPath) {
        return [];
      }
      const out2 = /* @__PURE__ */ new Set();
      const dir = path.dirname(docPath);
      const walkDir = (base, rel, depth) => {
        let entries;
        try {
          entries = fs2.readdirSync(path.join(base, rel), { withFileTypes: true });
        } catch {
          return;
        }
        for (const e of entries) {
          if (e.name.startsWith(".") || e.name === "node_modules") {
            continue;
          }
          const r = rel ? `${rel}/${e.name}` : e.name;
          if (e.isDirectory() && depth < 3) {
            walkDir(base, r, depth + 1);
          } else {
            const m = new RegExp(`^(.*)\\.(${workspace_12.EXTENSIONS.join("|")})$`).exec(r);
            if (m && path.join(base, r) !== docPath) {
              out2.add(m[1]);
            }
          }
        }
      };
      walkDir(dir, "", 0);
      return [...out2].sort();
    }
    function completionsAt(model, ws2, docPath, text, line, character, onlySpecific = false) {
      const lines = text.split("\n");
      const full = lines[line] ?? "";
      const before = full.slice(0, character);
      const after = full.slice(character);
      const scope = scopeAt(model, line);
      const NAME = "[A-Za-z_&][\\w&]*";
      let m = new RegExp(`^\\s*USE\\s+([\\w/]+)\\s*:\\s*\\[([^\\]]*)$`).exec(before);
      if (m) {
        const p = ws2.findModule(m[1], docPath);
        const got = p ? ws2.declsIn(p) : void 0;
        if (!got) {
          return [];
        }
        const listed = new Set(m[2].split(",").map((x) => x.trim().split(":")[0].trim()));
        const out3 = [];
        for (const sig of got.decls.values()) {
          if (!listed.has(sig.name)) {
            out3.push(componentItem({ ...sig, origin: `in ${m[1]}` }));
          }
        }
        for (const [name2, def] of got.types) {
          if (!listed.has(name2)) {
            out3.push(item(name2, vscode_languageserver_1.CompletionItemKind.Struct, `TYPE ${name2}: ${def}`));
          }
        }
        return out3;
      }
      if (/^\s*USE\s+[\w/]*$/.test(before)) {
        return moduleCandidates(ws2, docPath).map((mod) => item(mod, vscode_languageserver_1.CompletionItemKind.Module, "module"));
      }
      m = new RegExp(`\\]\\s*:\\s*(${NAME})\\{([^{}]*)$`).exec(before);
      if (m) {
        const sig = model.known.get(m[1]);
        if (!sig) {
          return [];
        }
        const inside = m[2];
        const vm = new RegExp(`(?:^|,)\\s*(${NAME})\\s*:\\s*[\\w.]*$`).exec(inside);
        if (vm) {
          const def = sig.settings.get(vm[1]);
          if (!def) {
            return [];
          }
          const vals = def.kind === "choice" ? def.options : def.kind === "time" ? ["1rt", "2rt", "3rt", "4rt", "1gt", "2gt"].filter((t) => {
            const gt = /rt$/.test(t) ? Number(t.slice(0, -2)) * 2 : Number(t.slice(0, -2));
            return (def.lo === void 0 || gt >= def.lo) && (def.hi === void 0 || gt <= def.hi);
          }) : def.lo !== void 0 ? [String(def.lo), ...def.hi !== void 0 ? [String(def.hi)] : []] : [];
          const out3 = vals.map((v) => item(v, vscode_languageserver_1.CompletionItemKind.Value, settingLine(def)));
          if (scope?.sig) {
            for (const [name2, own] of scope.sig.settings) {
              if (own.kind === def.kind) {
                out3.push(item(name2, vscode_languageserver_1.CompletionItemKind.Variable, `this component's own setting (${own.allowedText})`));
              }
            }
          }
          return out3;
        }
        const chosen = new Set([...inside.matchAll(new RegExp(`(${NAME})\\s*:`, "g"))].map((x) => x[1]));
        return sig.settingOrder.filter((n) => !chosen.has(n)).map((n) => {
          const def = sig.settings.get(n);
          return item(n, vscode_languageserver_1.CompletionItemKind.Property, settingLine(def), {
            insertText: `${n}: `,
            sortText: def.default === void 0 ? "0" + n : "1" + n
          });
        });
      }
      if (new RegExp(`^\\s*\\[[^\\]]*\\]\\s*:\\s*(${NAME})?$`).test(before)) {
        return [...model.known.values()].map(componentItem);
      }
      m = new RegExp(`\\[([^\\[\\]]*)\\](${NAME})?$`).exec(before);
      if (m && !/^\s*\[[^\]]*\]\s*$/.test(before.trim() === "" ? "x" : "")) {
        const refs = m[1].split(",").map((r) => r.trim().replace(/\{.*$/, ""));
        if (refs.length === 1 && refs[0]) {
          const part = partOf(refs[0], scope, model);
          const outs = part?.sig?.outPorts.filter((p) => !p.implicit) ?? [];
          if (outs.length > 0 || m[2]) {
            return outs.map((p) => item(p.name, vscode_languageserver_1.CompletionItemKind.Field, portLine(p, p.emits ? "~>" : "=>"), {
              documentation: { kind: vscode_languageserver_1.MarkupKind.Markdown, value: `output of ${part.sig.name}` }
            }));
          }
        }
      }
      const am = new RegExp(`^(${NAME})?\\[([^\\]]*)\\]`).exec(after);
      const bm = new RegExp(`(${NAME})?$`).exec(before);
      if (am && bm && /(?:->|~>|\s)$|^$/.test(before.slice(0, before.length - (bm[1]?.length ?? 0)).trimEnd() + " ")) {
        const refName0 = am[2].split(",")[0].trim().replace(/\{.*$/, "");
        const part = partOf(refName0, scope, model);
        if (part?.sig) {
          return part.sig.inPorts.map((p) => item(p.name, vscode_languageserver_1.CompletionItemKind.Field, portLine(p, "->"), {
            documentation: { kind: vscode_languageserver_1.MarkupKind.Markdown, value: `input of ${part.sig.name}` }
          }));
        }
      }
      if (new RegExp(`^\\s*(?:->|=>|~>)\\s*(?:\\d+(?:\\.\\.(?:\\d+|\\*))?\\[${NAME}\\]|${NAME})\\s*:\\s*[\\w.{}]*$`).test(before) || new RegExp(`^\\s*TYPE\\s+${NAME}\\s*:\\s*[\\w.{}]*$`).test(before) || new RegExp(`^[\\d*]+\\[${NAME}\\][\\d*]+\\s*[=~]>\\s*[\\w.{}]*$`).test(before) || new RegExp(`^\\s*${NAME}\\s*:\\s*[\\w.{}]*$`).test(before)) {
        if (new RegExp(`${NAME}\\{${NAME}?$`).test(before)) {
          return types_1.MEDIUM_NAMES.map((name2) => item(name2, vscode_languageserver_1.CompletionItemKind.EnumMember, types_1.MEDIA[name2].what, {
            documentation: {
              kind: vscode_languageserver_1.MarkupKind.Markdown,
              value: types_1.MEDIA[name2].kind === "event" ? "An event: read it with HEAR." : "A level: it persists, like a wire."
            }
          }));
        }
        const tm = new RegExp(`(${NAME}(?:\\.${NAME})*)\\.(${NAME})?$`).exec(before);
        if (tm) {
          const r = model.types.resolveProjection(tm[1] + ".x");
          const headDef = model.types.defs.get(tm[1]);
          let recordText;
          if (headDef !== void 0) {
            recordText = headDef;
          } else {
            const inner = model.types.resolveProjection(tm[1]);
            if (inner && inner.ok) {
              recordText = model.types.defs.get(inner.type) ?? inner.type;
            }
          }
          void r;
          const flds = model.types.recordFields(recordText);
          return (flds ?? []).map((f) => item(f.name, vscode_languageserver_1.CompletionItemKind.Field, f.type));
        }
        return typeItems(model.types);
      }
      m = new RegExp(`(${NAME})\\.(${NAME})?$`).exec(before);
      if (m) {
        const source = hearVarsAbove(lines, line).get(m[1]);
        const ty = source !== void 0 ? scope?.values.get(source)?.type : scope?.values.get(m[1])?.type;
        return Object.entries((0, analyze_12.readableFields)(model.types, ty)).map(([k, v]) => item(k, vscode_languageserver_1.CompletionItemKind.Field, v));
      }
      if (/(?:AFTER|SEQ)\s*\(\s*[\w]*$/.test(before) || /-\(\s*\w*$/.test(before)) {
        const out3 = ["1rt", "2rt", "4rt", "1gt", "2gt"].map((t) => item(t, vscode_languageserver_1.CompletionItemKind.Constant, "a time"));
        if (scope?.sig) {
          for (const [name2, def] of scope.sig.settings) {
            if (def.kind === "time") {
              out3.unshift(item(name2, vscode_languageserver_1.CompletionItemKind.Variable, settingLine(def)));
            }
          }
        }
        return out3;
      }
      if (/(?:WAIT|CHANGE)\s*\(\s*\w*$/.test(before) || new RegExp(`HEAR\\s*\\(\\s*${NAME}\\s+IN\\s+\\w*$`).test(before)) {
        const wantVib = /HEAR/.test(before);
        const out3 = [];
        for (const [name2, v] of scope?.values ?? []) {
          if (v.kind === "setting") {
            continue;
          }
          const isVib = /vibration/.test(v.type ?? "");
          if (wantVib === isVib || !wantVib) {
            out3.push(item(name2, vscode_languageserver_1.CompletionItemKind.Variable, `${v.kind}: ${v.type ?? ""}`));
          }
        }
        return out3;
      }
      if (onlySpecific || /[:?]\s*$/.test(before)) {
        return [];
      }
      const out2 = [];
      for (const [name2, v] of scope?.values ?? []) {
        out2.push(item(name2, v.kind === "setting" ? vscode_languageserver_1.CompletionItemKind.Constant : vscode_languageserver_1.CompletionItemKind.Variable, `${v.kind}: ${v.setting?.allowedText ?? v.type ?? ""}`));
      }
      for (const [name2, inst] of scope?.instances ?? []) {
        const idx = inst.dims ? `{${inst.dims.map(() => "").join(", ")}}` : "";
        out2.push(item(`[${name2}${inst.dims ? "{\u2026}" : ""}]`, vscode_languageserver_1.CompletionItemKind.Variable, inst.type, {
          filterText: `[${name2}`,
          insertText: inst.dims ? `[${name2}{$1}]` : `[${name2}]`,
          insertTextFormat: vscode_languageserver_1.InsertTextFormat.Snippet,
          documentation: inst.sig ? { kind: vscode_languageserver_1.MarkupKind.Markdown, value: sigMarkdown(inst.sig) } : void 0
        }));
        void idx;
        for (const p of inst.sig?.inPorts ?? []) {
          out2.push(item(`${p.name}[${name2}${inst.dims ? "{\u2026}" : ""}]`, vscode_languageserver_1.CompletionItemKind.Field, portLine(p, "->"), {
            filterText: `${p.name}[${name2}`,
            insertText: inst.dims ? `${p.name}[${name2}{$1}]` : `${p.name}[${name2}]`,
            insertTextFormat: vscode_languageserver_1.InsertTextFormat.Snippet,
            sortText: "z" + p.name
          }));
        }
      }
      for (const sig of model.known.values()) {
        out2.push({ ...componentItem(sig), sortText: "y" + sig.name });
      }
      for (const [name2, op] of Object.entries(analyze_12.OPERATOR_INFO)) {
        out2.push(item(`${name2}{\u2026}`, vscode_languageserver_1.CompletionItemKind.Function, op.what, {
          filterText: name2,
          insertText: `${name2}{$1}`,
          insertTextFormat: vscode_languageserver_1.InsertTextFormat.Snippet
        }));
      }
      for (const [kw, snippet, what] of KEYWORDS) {
        out2.push(item(kw, vscode_languageserver_1.CompletionItemKind.Keyword, what, {
          insertText: snippet,
          insertTextFormat: vscode_languageserver_1.InsertTextFormat.Snippet
        }));
      }
      return out2;
    }
    function symbolsFor(model) {
      const out2 = [];
      for (const td of (0, tree_1.kids)(model.root, "type_declaration")) {
        const n = (0, tree_1.field)(td, "name");
        if (n) {
          out2.push({
            name: n.text,
            detail: (0, tree_1.field)(td, "definition")?.text,
            kind: vscode_languageserver_1.SymbolKind.Struct,
            range: (0, tree_1.rangeOf)(td),
            selectionRange: (0, tree_1.rangeOf)(n)
          });
        }
      }
      const lines = model.lines;
      for (const sc of model.scopes) {
        const sig = sc.sig;
        if (!sig || !sig.defRange || sig.origin !== "declared in this file") {
          continue;
        }
        let endLine = sc.endLine;
        while (endLine > sc.startLine && (lines[endLine] ?? "").trim() === "") {
          endLine--;
        }
        const range = {
          start: { line: sc.startLine, character: 0 },
          end: { line: endLine, character: (lines[endLine] ?? "").length }
        };
        const children = [];
        const push = (name2, detail, kind, r) => {
          if (r) {
            children.push({ name: name2, detail, kind, range: r, selectionRange: r });
          }
        };
        for (const name2 of sig.settingOrder) {
          const d = sig.settings.get(name2);
          push(name2, `SETTING ${d.allowedText ?? ""}`, vscode_languageserver_1.SymbolKind.Constant, d.defRange);
        }
        for (const p of sig.inPorts) {
          push(p.name, `-> ${p.type ?? ""}`, vscode_languageserver_1.SymbolKind.Field, p.defRange);
        }
        for (const p of sig.outPorts) {
          if (!p.implicit) {
            push(p.name, `${p.emits ? "~>" : "=>"} ${p.type ?? ""}`, vscode_languageserver_1.SymbolKind.Field, p.defRange);
          }
        }
        for (const [name2, inst] of sc.instances) {
          push(name2, inst.type ?? "", vscode_languageserver_1.SymbolKind.Object, inst.defRange);
        }
        out2.push({
          name: sig.name,
          detail: sig.declText,
          kind: vscode_languageserver_1.SymbolKind.Class,
          range,
          selectionRange: sig.defRange,
          children
        });
      }
      return out2;
    }
    exports2.TOKEN_TYPES = ["class", "property", "function", "type"];
    exports2.TOKEN_MODIFIERS = ["defaultLibrary"];
    function tokensFor(model) {
      const kindIndex = {
        component: [0, 0],
        port: [1, 0],
        operator: [2, 1],
        type: [3, 0]
      };
      const marks = model.marks.filter((mk) => mk.range.start.line === mk.range.end.line && mk.range.end.character > mk.range.start.character).sort((a, b) => a.range.start.line - b.range.start.line || a.range.start.character - b.range.start.character);
      const data = [];
      let prevLine = 0;
      let prevChar = 0;
      let lastEnd = { line: -1, character: -1 };
      for (const mk of marks) {
        const { line, character } = mk.range.start;
        if (line < lastEnd.line || line === lastEnd.line && character < lastEnd.character) {
          continue;
        }
        const [type, mods] = kindIndex[mk.kind];
        data.push(line - prevLine, line === prevLine ? character - prevChar : character, mk.range.end.character - character, type, mods);
        prevLine = line;
        prevChar = character;
        lastEnd = mk.range.end;
      }
      return data;
    }
  }
});

// build/server.js
Object.defineProperty(exports, "__esModule", { value: true });
var url_1 = require("url");
var node_1 = require_main3();
var vscode_languageserver_textdocument_1 = (init_main2(), __toCommonJS2(main_exports2));
var analyze_1 = require_analyze();
var features_1 = require_features();
var parser_1 = require_parser();
var workspace_1 = require_workspace();
var connection = (0, node_1.createConnection)(node_1.ProposedFeatures.all);
var documents = new node_1.TextDocuments(vscode_languageserver_textdocument_1.TextDocument);
var ws = new workspace_1.FileWorkspace();
var models = /* @__PURE__ */ new Map();
var config = { ...analyze_1.DEFAULT_CONFIG };
function pathOf(uri) {
  try {
    return uri.startsWith("file:") ? (0, url_1.fileURLToPath)(uri) : void 0;
  } catch {
    return void 0;
  }
}
function sevOf(v, fallback) {
  if (v === "error" || v === 1) {
    return analyze_1.ERROR;
  }
  if (v === "warning" || v === "warn" || v === 2) {
    return analyze_1.WARN;
  }
  return fallback;
}
function readConfig(s) {
  const c = s ?? {};
  config = {
    unknownComponentSeverity: sevOf(c.unknownComponentSeverity, analyze_1.DEFAULT_CONFIG.unknownComponentSeverity),
    undeclaredSignalSeverity: sevOf(c.undeclaredSignalSeverity, analyze_1.DEFAULT_CONFIG.undeclaredSignalSeverity),
    wiredOrSeverity: sevOf(c.wiredOrSeverity, analyze_1.DEFAULT_CONFIG.wiredOrSeverity),
    unusedPinSeverity: sevOf(c.unusedPinSeverity, analyze_1.DEFAULT_CONFIG.unusedPinSeverity),
    unreadWireSeverity: sevOf(c.unreadWireSeverity, analyze_1.DEFAULT_CONFIG.unreadWireSeverity),
    unclosedBlockSeverity: sevOf(c.unclosedBlockSeverity, analyze_1.DEFAULT_CONFIG.unclosedBlockSeverity)
  };
}
function modelFor(doc) {
  const old = models.get(doc.uri);
  if (old && old.__version === doc.version) {
    return old;
  }
  const model = (0, analyze_1.analyze)(doc.getText(), pathOf(doc.uri), ws, config);
  model.__version = doc.version;
  old?.tree.delete();
  models.set(doc.uri, model);
  return model;
}
function publish(doc) {
  const model = modelFor(doc);
  const diagnostics = model.diagnostics.map((d) => ({
    range: d.range,
    message: d.message,
    severity: d.severity === analyze_1.ERROR ? node_1.DiagnosticSeverity.Error : node_1.DiagnosticSeverity.Warning,
    source: "tikker"
  }));
  connection.sendDiagnostics({ uri: doc.uri, version: doc.version, diagnostics });
}
var timer;
function scheduleAll() {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => {
    timer = void 0;
    for (const doc of documents.all()) {
      try {
        publish(doc);
      } catch (e) {
        connection.console.error(`tikker: ${String(e?.stack ?? e)}`);
      }
    }
  }, 200);
}
function track(doc) {
  const p = pathOf(doc.uri);
  if (p) {
    ws.open.set(p, doc.getText());
  }
}
connection.onInitialize(async (params) => {
  await (0, parser_1.initParser)();
  readConfig(params.initializationOptions);
  return {
    capabilities: {
      textDocumentSync: node_1.TextDocumentSyncKind.Incremental,
      hoverProvider: true,
      definitionProvider: true,
      documentSymbolProvider: true,
      completionProvider: { triggerCharacters: ["[", "]", ".", "{", ":", "(", " ", ","] },
      semanticTokensProvider: {
        legend: { tokenTypes: features_1.TOKEN_TYPES, tokenModifiers: features_1.TOKEN_MODIFIERS },
        full: true
      }
    },
    serverInfo: { name: "tikker-language-server" }
  };
});
connection.onDidChangeConfiguration((change) => {
  const s = change.settings?.tikker;
  if (s) {
    readConfig(s);
    for (const m of models.values()) {
      m.__version = void 0;
    }
    scheduleAll();
  }
});
documents.onDidOpen((e) => {
  track(e.document);
  scheduleAll();
});
documents.onDidChangeContent((e) => {
  track(e.document);
  scheduleAll();
});
documents.onDidClose((e) => {
  const p = pathOf(e.document.uri);
  if (p) {
    ws.open.delete(p);
  }
  models.get(e.document.uri)?.tree.delete();
  models.delete(e.document.uri);
  connection.sendDiagnostics({ uri: e.document.uri, diagnostics: [] });
  scheduleAll();
});
documents.onDidSave(() => scheduleAll());
connection.onHover((p) => {
  const doc = documents.get(p.textDocument.uri);
  if (!doc) {
    return null;
  }
  const model = modelFor(doc);
  const t = (0, features_1.targetAt)(model, ws, pathOf(doc.uri), p.position.line, p.position.character);
  const md = t && (0, features_1.hoverFor)(t, model);
  return md ? { contents: { kind: "markdown", value: md } } : null;
});
connection.onDefinition((p) => {
  const doc = documents.get(p.textDocument.uri);
  if (!doc) {
    return null;
  }
  const model = modelFor(doc);
  const docPath = pathOf(doc.uri);
  const t = (0, features_1.targetAt)(model, ws, docPath, p.position.line, p.position.character);
  const loc = t && (0, features_1.definitionFor)(t, model, docPath);
  if (!loc) {
    return null;
  }
  const uri = loc.path ? (0, url_1.pathToFileURL)(loc.path).href : doc.uri;
  return { uri, range: loc.range };
});
connection.onCompletion((p) => {
  const doc = documents.get(p.textDocument.uri);
  if (!doc) {
    return [];
  }
  const text = doc.getText();
  const lines = text.split("\n");
  const line = p.position.line;
  let model;
  let temp;
  if (lines[line] !== void 0 && lines[line].trim() !== "") {
    lines[line] = "";
    temp = (0, analyze_1.analyze)(lines.join("\n"), pathOf(doc.uri), ws, config);
    model = temp;
  } else {
    model = modelFor(doc);
  }
  try {
    const onlySpecific = p.context?.triggerKind === node_1.CompletionTriggerKind.TriggerCharacter;
    return (0, features_1.completionsAt)(model, ws, pathOf(doc.uri), text, line, p.position.character, onlySpecific);
  } finally {
    temp?.tree.delete();
  }
});
connection.onDocumentSymbol((p) => {
  const doc = documents.get(p.textDocument.uri);
  return doc ? (0, features_1.symbolsFor)(modelFor(doc)) : [];
});
connection.languages.semanticTokens.on((p) => {
  const doc = documents.get(p.textDocument.uri);
  return { data: doc ? (0, features_1.tokensFor)(modelFor(doc)) : [] };
});
documents.listen(connection);
connection.listen();
