(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/common"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/common"], factory);
	else if(typeof exports === 'object')
		exports["ngx-cookie"] = factory(require("@angular/core"), require("@angular/common"));
	else
		root["ngx-cookie"] = factory(root["@angular/core"], root["@angular/common"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_7__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cookie_options_provider__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CookieService; });



var CookieService = (function () {
    function CookieService(_optionsProvider) {
        this._optionsProvider = _optionsProvider;
        this.options = this._optionsProvider.options;
    }
    Object.defineProperty(CookieService.prototype, "cookieString", {
        get: function () {
            return document.cookie || '';
        },
        set: function (val) {
            document.cookie = val;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @name CookieService#get
     *
     * @description
     * Returns the value of given cookie key.
     *
     * @param {string} key Id to use for lookup.
     * @returns {string} Raw cookie value.
     */
    /**
       * @name CookieService#get
       *
       * @description
       * Returns the value of given cookie key.
       *
       * @param {string} key Id to use for lookup.
       * @returns {string} Raw cookie value.
       */
    CookieService.prototype.get = /**
       * @name CookieService#get
       *
       * @description
       * Returns the value of given cookie key.
       *
       * @param {string} key Id to use for lookup.
       * @returns {string} Raw cookie value.
       */
    function (key) {
        return this._cookieReader()[key];
    };
    /**
     * @name CookieService#getObject
     *
     * @description
     * Returns the deserialized value of given cookie key.
     *
     * @param {string} key Id to use for lookup.
     * @returns {Object} Deserialized cookie value.
     */
    /**
       * @name CookieService#getObject
       *
       * @description
       * Returns the deserialized value of given cookie key.
       *
       * @param {string} key Id to use for lookup.
       * @returns {Object} Deserialized cookie value.
       */
    CookieService.prototype.getObject = /**
       * @name CookieService#getObject
       *
       * @description
       * Returns the deserialized value of given cookie key.
       *
       * @param {string} key Id to use for lookup.
       * @returns {Object} Deserialized cookie value.
       */
    function (key) {
        var value = this.get(key);
        return value ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["f" /* safeJsonParse */])(value) : value;
    };
    /**
     * @name CookieService#getAll
     *
     * @description
     * Returns a key value object with all the cookies.
     *
     * @returns {Object} All cookies
     */
    /**
       * @name CookieService#getAll
       *
       * @description
       * Returns a key value object with all the cookies.
       *
       * @returns {Object} All cookies
       */
    CookieService.prototype.getAll = /**
       * @name CookieService#getAll
       *
       * @description
       * Returns a key value object with all the cookies.
       *
       * @returns {Object} All cookies
       */
    function () {
        return this._cookieReader();
    };
    /**
     * @name CookieService#put
     *
     * @description
     * Sets a value for given cookie key.
     *
     * @param {string} key Id for the `value`.
     * @param {string} value Raw value to be stored.
     * @param {CookieOptions} options (Optional) Options object.
     */
    /**
       * @name CookieService#put
       *
       * @description
       * Sets a value for given cookie key.
       *
       * @param {string} key Id for the `value`.
       * @param {string} value Raw value to be stored.
       * @param {CookieOptions} options (Optional) Options object.
       */
    CookieService.prototype.put = /**
       * @name CookieService#put
       *
       * @description
       * Sets a value for given cookie key.
       *
       * @param {string} key Id for the `value`.
       * @param {string} value Raw value to be stored.
       * @param {CookieOptions} options (Optional) Options object.
       */
    function (key, value, options) {
        this._cookieWriter()(key, value, options);
    };
    /**
     * @name CookieService#putObject
     *
     * @description
     * Serializes and sets a value for given cookie key.
     *
     * @param {string} key Id for the `value`.
     * @param {Object} value Value to be stored.
     * @param {CookieOptions} options (Optional) Options object.
     */
    /**
       * @name CookieService#putObject
       *
       * @description
       * Serializes and sets a value for given cookie key.
       *
       * @param {string} key Id for the `value`.
       * @param {Object} value Value to be stored.
       * @param {CookieOptions} options (Optional) Options object.
       */
    CookieService.prototype.putObject = /**
       * @name CookieService#putObject
       *
       * @description
       * Serializes and sets a value for given cookie key.
       *
       * @param {string} key Id for the `value`.
       * @param {Object} value Value to be stored.
       * @param {CookieOptions} options (Optional) Options object.
       */
    function (key, value, options) {
        this.put(key, JSON.stringify(value), options);
    };
    /**
     * @name CookieService#remove
     *
     * @description
     * Remove given cookie.
     *
     * @param {string} key Id of the key-value pair to delete.
     * @param {CookieOptions} options (Optional) Options object.
     */
    /**
       * @name CookieService#remove
       *
       * @description
       * Remove given cookie.
       *
       * @param {string} key Id of the key-value pair to delete.
       * @param {CookieOptions} options (Optional) Options object.
       */
    CookieService.prototype.remove = /**
       * @name CookieService#remove
       *
       * @description
       * Remove given cookie.
       *
       * @param {string} key Id of the key-value pair to delete.
       * @param {CookieOptions} options (Optional) Options object.
       */
    function (key, options) {
        this._cookieWriter()(key, undefined, options);
    };
    /**
     * @name CookieService#removeAll
     *
     * @description
     * Remove all cookies.
     */
    /**
       * @name CookieService#removeAll
       *
       * @description
       * Remove all cookies.
       */
    CookieService.prototype.removeAll = /**
       * @name CookieService#removeAll
       *
       * @description
       * Remove all cookies.
       */
    function () {
        var _this = this;
        var cookies = this.getAll();
        Object.keys(cookies).forEach(function (key) {
            _this.remove(key);
        });
    };
    CookieService.prototype._cookieReader = function () {
        var lastCookies = {};
        var lastCookieString = '';
        var cookieArray, cookie, i, index, name;
        var currentCookieString = this.cookieString;
        if (currentCookieString !== lastCookieString) {
            lastCookieString = currentCookieString;
            cookieArray = lastCookieString.split('; ');
            lastCookies = {};
            for (i = 0; i < cookieArray.length; i++) {
                cookie = cookieArray[i];
                index = cookie.indexOf('=');
                if (index > 0) {
                    // ignore nameless cookies
                    name = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["e" /* safeDecodeURIComponent */])(cookie.substring(0, index));
                    // the first value that is seen for a cookie is the most
                    // specific one.  values for the same cookie name that
                    // follow are for less specific paths.
                    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* isBlank */])(lastCookies[name])) {
                        lastCookies[name] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["e" /* safeDecodeURIComponent */])(cookie.substring(index + 1));
                    }
                }
            }
        }
        return lastCookies;
    };
    CookieService.prototype._cookieWriter = function () {
        var that = this;
        return function (name, value, options) {
            that.cookieString = that._buildCookieString(name, value, options);
        };
    };
    CookieService.prototype._buildCookieString = function (name, value, options) {
        var opts = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* mergeOptions */])(this.options, options);
        var expires = opts.expires;
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* isBlank */])(value)) {
            expires = 'Thu, 01 Jan 1970 00:00:00 GMT';
            value = '';
        }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* isString */])(expires)) {
            expires = new Date(expires);
        }
        var str = encodeURIComponent(name) + '=' + encodeURIComponent(value);
        str += opts.path ? ';path=' + opts.path : '';
        str += opts.domain ? ';domain=' + opts.domain : '';
        str += expires ? ';expires=' + expires.toUTCString() : '';
        str += opts.secure ? ';secure' : '';
        // per http://www.ietf.org/rfc/rfc2109.txt browser must allow at minimum:
        // - 300 cookies
        // - 20 cookies per unique domain
        // - 4096 bytes per cookie
        var cookieLength = str.length + 1;
        if (cookieLength > 4096) {
            console.log("Cookie '" + name + "' possibly not set or overflowed because it was too \n      large (" + cookieLength + " > 4096 bytes)!");
        }
        return str;
    };
    CookieService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    CookieService.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__cookie_options_provider__["b" /* CookieOptionsProvider */], },
    ]; };
    return CookieService;
}());



/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COOKIE_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CookieOptionsProvider; });



var COOKIE_OPTIONS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('COOKIE_OPTIONS');
/** @private */
var CookieOptionsProvider = (function () {
    function CookieOptionsProvider(options, _injector) {
        if (options === void 0) { options = {}; }
        this._injector = _injector;
        this.defaultOptions = {
            path: this._injector.get(__WEBPACK_IMPORTED_MODULE_1__angular_common__["APP_BASE_HREF"], '/'),
            domain: null,
            expires: null,
            secure: false
        };
        this._options = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* mergeOptions */])(this.defaultOptions, options);
    }
    Object.defineProperty(CookieOptionsProvider.prototype, "options", {
        get: function () {
            return this._options;
        },
        enumerable: true,
        configurable: true
    });
    CookieOptionsProvider.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    CookieOptionsProvider.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [COOKIE_OPTIONS,] },] },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], },
    ]; };
    return CookieOptionsProvider;
}());



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isBlank;
/* harmony export (immutable) */ __webpack_exports__["b"] = isPresent;
/* harmony export (immutable) */ __webpack_exports__["c"] = isString;
/* harmony export (immutable) */ __webpack_exports__["d"] = mergeOptions;
/* harmony export (immutable) */ __webpack_exports__["e"] = safeDecodeURIComponent;
/* harmony export (immutable) */ __webpack_exports__["f"] = safeJsonParse;
function isBlank(obj) {
    return obj === undefined || obj === null;
}
function isPresent(obj) {
    return obj !== undefined && obj !== null;
}
function isString(obj) {
    return typeof obj === 'string';
}
function mergeOptions(oldOptions, newOptions) {
    if (!newOptions) {
        return oldOptions;
    }
    return {
        path: isPresent(newOptions.path) ? newOptions.path : oldOptions.path,
        domain: isPresent(newOptions.domain) ? newOptions.domain : oldOptions.domain,
        expires: isPresent(newOptions.expires) ? newOptions.expires : oldOptions.expires,
        secure: isPresent(newOptions.secure) ? newOptions.secure : oldOptions.secure,
    };
}
function safeDecodeURIComponent(str) {
    try {
        return decodeURIComponent(str);
    }
    catch (e) {
        return str;
    }
}
function safeJsonParse(str) {
    try {
        return JSON.parse(str);
    }
    catch (e) {
        return str;
    }
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cookie_service__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["a"] = cookieServiceFactory;

function cookieServiceFactory(cookieOptionsProvider) {
    return new __WEBPACK_IMPORTED_MODULE_0__cookie_service__["a" /* CookieService */](cookieOptionsProvider);
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cookie_service__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CookieBackendService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var CookieBackendService = (function (_super) {
    __extends(CookieBackendService, _super);
    function CookieBackendService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CookieBackendService.prototype, "cookieString", {
        get: function () {
            return global.Zone.current.get('req').headers.cookie || '';
        },
        set: function (val) {
            global.Zone.current.get('req').headers.cookie = val;
            global.Zone.current.get('res').headers.cookie = val;
        },
        enumerable: true,
        configurable: true
    });
    CookieBackendService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    CookieBackendService.ctorParameters = function () { return []; };
    return CookieBackendService;
}(__WEBPACK_IMPORTED_MODULE_1__cookie_service__["a" /* CookieService */]));


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(6)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_cookie_options_provider__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_cookie_service__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_cookie_factory__ = __webpack_require__(4);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "CookieService", function() { return __WEBPACK_IMPORTED_MODULE_2__src_cookie_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_cookie_backend_service__ = __webpack_require__(5);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "CookieBackendService", function() { return __WEBPACK_IMPORTED_MODULE_4__src_cookie_backend_service__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "COOKIE_OPTIONS", function() { return __WEBPACK_IMPORTED_MODULE_1__src_cookie_options_provider__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "CookieOptionsProvider", function() { return __WEBPACK_IMPORTED_MODULE_1__src_cookie_options_provider__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "cookieServiceFactory", function() { return __WEBPACK_IMPORTED_MODULE_3__src_cookie_factory__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_utils__ = __webpack_require__(3);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isBlank", function() { return __WEBPACK_IMPORTED_MODULE_5__src_utils__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isPresent", function() { return __WEBPACK_IMPORTED_MODULE_5__src_utils__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return __WEBPACK_IMPORTED_MODULE_5__src_utils__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "mergeOptions", function() { return __WEBPACK_IMPORTED_MODULE_5__src_utils__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "safeDecodeURIComponent", function() { return __WEBPACK_IMPORTED_MODULE_5__src_utils__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "safeJsonParse", function() { return __WEBPACK_IMPORTED_MODULE_5__src_utils__["f"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieModule", function() { return CookieModule; });









var CookieModule = (function () {
    function CookieModule() {
    }
    /**
     * Use this method in your root module to provide the CookieService
     * @param {CookieOptions} options
     * @returns {ModuleWithProviders}
     */
    /**
       * Use this method in your root module to provide the CookieService
       * @param {CookieOptions} options
       * @returns {ModuleWithProviders}
       */
    CookieModule.forRoot = /**
       * Use this method in your root module to provide the CookieService
       * @param {CookieOptions} options
       * @returns {ModuleWithProviders}
       */
    function (options) {
        if (options === void 0) { options = {}; }
        return {
            ngModule: CookieModule,
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__src_cookie_options_provider__["a" /* COOKIE_OPTIONS */], useValue: options },
                { provide: __WEBPACK_IMPORTED_MODULE_2__src_cookie_service__["a" /* CookieService */], useFactory: __WEBPACK_IMPORTED_MODULE_3__src_cookie_factory__["a" /* cookieServiceFactory */], deps: [__WEBPACK_IMPORTED_MODULE_1__src_cookie_options_provider__["b" /* CookieOptionsProvider */]] }
            ]
        };
    };
    /**
     * Use this method in your other (non root) modules to import the directive/pipe
     * @param {CookieOptions} options
     * @returns {ModuleWithProviders}
     */
    /**
       * Use this method in your other (non root) modules to import the directive/pipe
       * @param {CookieOptions} options
       * @returns {ModuleWithProviders}
       */
    CookieModule.forChild = /**
       * Use this method in your other (non root) modules to import the directive/pipe
       * @param {CookieOptions} options
       * @returns {ModuleWithProviders}
       */
    function (options) {
        if (options === void 0) { options = {}; }
        return {
            ngModule: CookieModule,
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__src_cookie_options_provider__["a" /* COOKIE_OPTIONS */], useValue: options },
                { provide: __WEBPACK_IMPORTED_MODULE_2__src_cookie_service__["a" /* CookieService */], useFactory: __WEBPACK_IMPORTED_MODULE_3__src_cookie_factory__["a" /* cookieServiceFactory */], deps: [__WEBPACK_IMPORTED_MODULE_1__src_cookie_options_provider__["b" /* CookieOptionsProvider */]] }
            ]
        };
    };
    CookieModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    providers: [__WEBPACK_IMPORTED_MODULE_1__src_cookie_options_provider__["b" /* CookieOptionsProvider */]]
                },] },
    ];
    /** @nocollapse */
    CookieModule.ctorParameters = function () { return []; };
    return CookieModule;
}());



/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBiNzZkZGQ3OThhNWY4OGYxZTVmMCIsIndlYnBhY2s6Ly8vLi9kaXN0L3NyYy9jb29raWUuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCIiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9zcmMvY29va2llLW9wdGlvbnMtcHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9zcmMvY29va2llLmZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9zcmMvY29va2llLWJhY2tlbmQuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2NvbW1vblwiIiwid2VicGFjazovLy8uL2Rpc3QvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7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QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLGlCQUFpQixJQUFJO0FBQ3JCO0FBQ0E7QUFDQSwrQ0FBK0MsV0FBVztBQUMxRDtBQUNBLENBQUM7QUFDTyIsImZpbGUiOiJuZ3gtY29va2llLnVtZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIiksIHJlcXVpcmUoXCJAYW5ndWxhci9jb21tb25cIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiQGFuZ3VsYXIvY29yZVwiLCBcIkBhbmd1bGFyL2NvbW1vblwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJuZ3gtY29va2llXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKSwgcmVxdWlyZShcIkBhbmd1bGFyL2NvbW1vblwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wibmd4LWNvb2tpZVwiXSA9IGZhY3Rvcnkocm9vdFtcIkBhbmd1bGFyL2NvcmVcIl0sIHJvb3RbXCJAYW5ndWxhci9jb21tb25cIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfN19fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4vZGlzdFwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGI3NmRkZDc5OGE1Zjg4ZjFlNWYwIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29va2llT3B0aW9uc1Byb3ZpZGVyIH0gZnJvbSAnLi9jb29raWUtb3B0aW9ucy1wcm92aWRlcic7XG5pbXBvcnQgeyBpc0JsYW5rLCBpc1N0cmluZywgbWVyZ2VPcHRpb25zLCBzYWZlRGVjb2RlVVJJQ29tcG9uZW50LCBzYWZlSnNvblBhcnNlIH0gZnJvbSAnLi91dGlscyc7XG52YXIgQ29va2llU2VydmljZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ29va2llU2VydmljZShfb3B0aW9uc1Byb3ZpZGVyKSB7XG4gICAgICAgIHRoaXMuX29wdGlvbnNQcm92aWRlciA9IF9vcHRpb25zUHJvdmlkZXI7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHRoaXMuX29wdGlvbnNQcm92aWRlci5vcHRpb25zO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29va2llU2VydmljZS5wcm90b3R5cGUsIFwiY29va2llU3RyaW5nXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuY29va2llIHx8ICcnO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IHZhbDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogQG5hbWUgQ29va2llU2VydmljZSNnZXRcbiAgICAgKlxuICAgICAqIEBkZXNjcmlwdGlvblxuICAgICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIGdpdmVuIGNvb2tpZSBrZXkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IElkIHRvIHVzZSBmb3IgbG9va3VwLlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IFJhdyBjb29raWUgdmFsdWUuXG4gICAgICovXG4gICAgLyoqXG4gICAgICAgKiBAbmFtZSBDb29raWVTZXJ2aWNlI2dldFxuICAgICAgICpcbiAgICAgICAqIEBkZXNjcmlwdGlvblxuICAgICAgICogUmV0dXJucyB0aGUgdmFsdWUgb2YgZ2l2ZW4gY29va2llIGtleS5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IElkIHRvIHVzZSBmb3IgbG9va3VwLlxuICAgICAgICogQHJldHVybnMge3N0cmluZ30gUmF3IGNvb2tpZSB2YWx1ZS5cbiAgICAgICAqL1xuICAgIENvb2tpZVNlcnZpY2UucHJvdG90eXBlLmdldCA9IC8qKlxuICAgICAgICogQG5hbWUgQ29va2llU2VydmljZSNnZXRcbiAgICAgICAqXG4gICAgICAgKiBAZGVzY3JpcHRpb25cbiAgICAgICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIGdpdmVuIGNvb2tpZSBrZXkuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBJZCB0byB1c2UgZm9yIGxvb2t1cC5cbiAgICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IFJhdyBjb29raWUgdmFsdWUuXG4gICAgICAgKi9cbiAgICBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb29raWVSZWFkZXIoKVtrZXldO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQG5hbWUgQ29va2llU2VydmljZSNnZXRPYmplY3RcbiAgICAgKlxuICAgICAqIEBkZXNjcmlwdGlvblxuICAgICAqIFJldHVybnMgdGhlIGRlc2VyaWFsaXplZCB2YWx1ZSBvZiBnaXZlbiBjb29raWUga2V5LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBJZCB0byB1c2UgZm9yIGxvb2t1cC5cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBEZXNlcmlhbGl6ZWQgY29va2llIHZhbHVlLlxuICAgICAqL1xuICAgIC8qKlxuICAgICAgICogQG5hbWUgQ29va2llU2VydmljZSNnZXRPYmplY3RcbiAgICAgICAqXG4gICAgICAgKiBAZGVzY3JpcHRpb25cbiAgICAgICAqIFJldHVybnMgdGhlIGRlc2VyaWFsaXplZCB2YWx1ZSBvZiBnaXZlbiBjb29raWUga2V5LlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgSWQgdG8gdXNlIGZvciBsb29rdXAuXG4gICAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBEZXNlcmlhbGl6ZWQgY29va2llIHZhbHVlLlxuICAgICAgICovXG4gICAgQ29va2llU2VydmljZS5wcm90b3R5cGUuZ2V0T2JqZWN0ID0gLyoqXG4gICAgICAgKiBAbmFtZSBDb29raWVTZXJ2aWNlI2dldE9iamVjdFxuICAgICAgICpcbiAgICAgICAqIEBkZXNjcmlwdGlvblxuICAgICAgICogUmV0dXJucyB0aGUgZGVzZXJpYWxpemVkIHZhbHVlIG9mIGdpdmVuIGNvb2tpZSBrZXkuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBJZCB0byB1c2UgZm9yIGxvb2t1cC5cbiAgICAgICAqIEByZXR1cm5zIHtPYmplY3R9IERlc2VyaWFsaXplZCBjb29raWUgdmFsdWUuXG4gICAgICAgKi9cbiAgICBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuZ2V0KGtleSk7XG4gICAgICAgIHJldHVybiB2YWx1ZSA/IHNhZmVKc29uUGFyc2UodmFsdWUpIDogdmFsdWU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAbmFtZSBDb29raWVTZXJ2aWNlI2dldEFsbFxuICAgICAqXG4gICAgICogQGRlc2NyaXB0aW9uXG4gICAgICogUmV0dXJucyBhIGtleSB2YWx1ZSBvYmplY3Qgd2l0aCBhbGwgdGhlIGNvb2tpZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBBbGwgY29va2llc1xuICAgICAqL1xuICAgIC8qKlxuICAgICAgICogQG5hbWUgQ29va2llU2VydmljZSNnZXRBbGxcbiAgICAgICAqXG4gICAgICAgKiBAZGVzY3JpcHRpb25cbiAgICAgICAqIFJldHVybnMgYSBrZXkgdmFsdWUgb2JqZWN0IHdpdGggYWxsIHRoZSBjb29raWVzLlxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm5zIHtPYmplY3R9IEFsbCBjb29raWVzXG4gICAgICAgKi9cbiAgICBDb29raWVTZXJ2aWNlLnByb3RvdHlwZS5nZXRBbGwgPSAvKipcbiAgICAgICAqIEBuYW1lIENvb2tpZVNlcnZpY2UjZ2V0QWxsXG4gICAgICAgKlxuICAgICAgICogQGRlc2NyaXB0aW9uXG4gICAgICAgKiBSZXR1cm5zIGEga2V5IHZhbHVlIG9iamVjdCB3aXRoIGFsbCB0aGUgY29va2llcy5cbiAgICAgICAqXG4gICAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBBbGwgY29va2llc1xuICAgICAgICovXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29va2llUmVhZGVyKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAbmFtZSBDb29raWVTZXJ2aWNlI3B1dFxuICAgICAqXG4gICAgICogQGRlc2NyaXB0aW9uXG4gICAgICogU2V0cyBhIHZhbHVlIGZvciBnaXZlbiBjb29raWUga2V5LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBJZCBmb3IgdGhlIGB2YWx1ZWAuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIFJhdyB2YWx1ZSB0byBiZSBzdG9yZWQuXG4gICAgICogQHBhcmFtIHtDb29raWVPcHRpb25zfSBvcHRpb25zIChPcHRpb25hbCkgT3B0aW9ucyBvYmplY3QuXG4gICAgICovXG4gICAgLyoqXG4gICAgICAgKiBAbmFtZSBDb29raWVTZXJ2aWNlI3B1dFxuICAgICAgICpcbiAgICAgICAqIEBkZXNjcmlwdGlvblxuICAgICAgICogU2V0cyBhIHZhbHVlIGZvciBnaXZlbiBjb29raWUga2V5LlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgSWQgZm9yIHRoZSBgdmFsdWVgLlxuICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIFJhdyB2YWx1ZSB0byBiZSBzdG9yZWQuXG4gICAgICAgKiBAcGFyYW0ge0Nvb2tpZU9wdGlvbnN9IG9wdGlvbnMgKE9wdGlvbmFsKSBPcHRpb25zIG9iamVjdC5cbiAgICAgICAqL1xuICAgIENvb2tpZVNlcnZpY2UucHJvdG90eXBlLnB1dCA9IC8qKlxuICAgICAgICogQG5hbWUgQ29va2llU2VydmljZSNwdXRcbiAgICAgICAqXG4gICAgICAgKiBAZGVzY3JpcHRpb25cbiAgICAgICAqIFNldHMgYSB2YWx1ZSBmb3IgZ2l2ZW4gY29va2llIGtleS5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IElkIGZvciB0aGUgYHZhbHVlYC5cbiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBSYXcgdmFsdWUgdG8gYmUgc3RvcmVkLlxuICAgICAgICogQHBhcmFtIHtDb29raWVPcHRpb25zfSBvcHRpb25zIChPcHRpb25hbCkgT3B0aW9ucyBvYmplY3QuXG4gICAgICAgKi9cbiAgICBmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLl9jb29raWVXcml0ZXIoKShrZXksIHZhbHVlLCBvcHRpb25zKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBuYW1lIENvb2tpZVNlcnZpY2UjcHV0T2JqZWN0XG4gICAgICpcbiAgICAgKiBAZGVzY3JpcHRpb25cbiAgICAgKiBTZXJpYWxpemVzIGFuZCBzZXRzIGEgdmFsdWUgZm9yIGdpdmVuIGNvb2tpZSBrZXkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IElkIGZvciB0aGUgYHZhbHVlYC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgVmFsdWUgdG8gYmUgc3RvcmVkLlxuICAgICAqIEBwYXJhbSB7Q29va2llT3B0aW9uc30gb3B0aW9ucyAoT3B0aW9uYWwpIE9wdGlvbnMgb2JqZWN0LlxuICAgICAqL1xuICAgIC8qKlxuICAgICAgICogQG5hbWUgQ29va2llU2VydmljZSNwdXRPYmplY3RcbiAgICAgICAqXG4gICAgICAgKiBAZGVzY3JpcHRpb25cbiAgICAgICAqIFNlcmlhbGl6ZXMgYW5kIHNldHMgYSB2YWx1ZSBmb3IgZ2l2ZW4gY29va2llIGtleS5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IElkIGZvciB0aGUgYHZhbHVlYC5cbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSBWYWx1ZSB0byBiZSBzdG9yZWQuXG4gICAgICAgKiBAcGFyYW0ge0Nvb2tpZU9wdGlvbnN9IG9wdGlvbnMgKE9wdGlvbmFsKSBPcHRpb25zIG9iamVjdC5cbiAgICAgICAqL1xuICAgIENvb2tpZVNlcnZpY2UucHJvdG90eXBlLnB1dE9iamVjdCA9IC8qKlxuICAgICAgICogQG5hbWUgQ29va2llU2VydmljZSNwdXRPYmplY3RcbiAgICAgICAqXG4gICAgICAgKiBAZGVzY3JpcHRpb25cbiAgICAgICAqIFNlcmlhbGl6ZXMgYW5kIHNldHMgYSB2YWx1ZSBmb3IgZ2l2ZW4gY29va2llIGtleS5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IElkIGZvciB0aGUgYHZhbHVlYC5cbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSBWYWx1ZSB0byBiZSBzdG9yZWQuXG4gICAgICAgKiBAcGFyYW0ge0Nvb2tpZU9wdGlvbnN9IG9wdGlvbnMgKE9wdGlvbmFsKSBPcHRpb25zIG9iamVjdC5cbiAgICAgICAqL1xuICAgIGZ1bmN0aW9uIChrZXksIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMucHV0KGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpLCBvcHRpb25zKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBuYW1lIENvb2tpZVNlcnZpY2UjcmVtb3ZlXG4gICAgICpcbiAgICAgKiBAZGVzY3JpcHRpb25cbiAgICAgKiBSZW1vdmUgZ2l2ZW4gY29va2llLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBJZCBvZiB0aGUga2V5LXZhbHVlIHBhaXIgdG8gZGVsZXRlLlxuICAgICAqIEBwYXJhbSB7Q29va2llT3B0aW9uc30gb3B0aW9ucyAoT3B0aW9uYWwpIE9wdGlvbnMgb2JqZWN0LlxuICAgICAqL1xuICAgIC8qKlxuICAgICAgICogQG5hbWUgQ29va2llU2VydmljZSNyZW1vdmVcbiAgICAgICAqXG4gICAgICAgKiBAZGVzY3JpcHRpb25cbiAgICAgICAqIFJlbW92ZSBnaXZlbiBjb29raWUuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBJZCBvZiB0aGUga2V5LXZhbHVlIHBhaXIgdG8gZGVsZXRlLlxuICAgICAgICogQHBhcmFtIHtDb29raWVPcHRpb25zfSBvcHRpb25zIChPcHRpb25hbCkgT3B0aW9ucyBvYmplY3QuXG4gICAgICAgKi9cbiAgICBDb29raWVTZXJ2aWNlLnByb3RvdHlwZS5yZW1vdmUgPSAvKipcbiAgICAgICAqIEBuYW1lIENvb2tpZVNlcnZpY2UjcmVtb3ZlXG4gICAgICAgKlxuICAgICAgICogQGRlc2NyaXB0aW9uXG4gICAgICAgKiBSZW1vdmUgZ2l2ZW4gY29va2llLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgSWQgb2YgdGhlIGtleS12YWx1ZSBwYWlyIHRvIGRlbGV0ZS5cbiAgICAgICAqIEBwYXJhbSB7Q29va2llT3B0aW9uc30gb3B0aW9ucyAoT3B0aW9uYWwpIE9wdGlvbnMgb2JqZWN0LlxuICAgICAgICovXG4gICAgZnVuY3Rpb24gKGtleSwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLl9jb29raWVXcml0ZXIoKShrZXksIHVuZGVmaW5lZCwgb3B0aW9ucyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAbmFtZSBDb29raWVTZXJ2aWNlI3JlbW92ZUFsbFxuICAgICAqXG4gICAgICogQGRlc2NyaXB0aW9uXG4gICAgICogUmVtb3ZlIGFsbCBjb29raWVzLlxuICAgICAqL1xuICAgIC8qKlxuICAgICAgICogQG5hbWUgQ29va2llU2VydmljZSNyZW1vdmVBbGxcbiAgICAgICAqXG4gICAgICAgKiBAZGVzY3JpcHRpb25cbiAgICAgICAqIFJlbW92ZSBhbGwgY29va2llcy5cbiAgICAgICAqL1xuICAgIENvb2tpZVNlcnZpY2UucHJvdG90eXBlLnJlbW92ZUFsbCA9IC8qKlxuICAgICAgICogQG5hbWUgQ29va2llU2VydmljZSNyZW1vdmVBbGxcbiAgICAgICAqXG4gICAgICAgKiBAZGVzY3JpcHRpb25cbiAgICAgICAqIFJlbW92ZSBhbGwgY29va2llcy5cbiAgICAgICAqL1xuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGNvb2tpZXMgPSB0aGlzLmdldEFsbCgpO1xuICAgICAgICBPYmplY3Qua2V5cyhjb29raWVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIF90aGlzLnJlbW92ZShrZXkpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIENvb2tpZVNlcnZpY2UucHJvdG90eXBlLl9jb29raWVSZWFkZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBsYXN0Q29va2llcyA9IHt9O1xuICAgICAgICB2YXIgbGFzdENvb2tpZVN0cmluZyA9ICcnO1xuICAgICAgICB2YXIgY29va2llQXJyYXksIGNvb2tpZSwgaSwgaW5kZXgsIG5hbWU7XG4gICAgICAgIHZhciBjdXJyZW50Q29va2llU3RyaW5nID0gdGhpcy5jb29raWVTdHJpbmc7XG4gICAgICAgIGlmIChjdXJyZW50Q29va2llU3RyaW5nICE9PSBsYXN0Q29va2llU3RyaW5nKSB7XG4gICAgICAgICAgICBsYXN0Q29va2llU3RyaW5nID0gY3VycmVudENvb2tpZVN0cmluZztcbiAgICAgICAgICAgIGNvb2tpZUFycmF5ID0gbGFzdENvb2tpZVN0cmluZy5zcGxpdCgnOyAnKTtcbiAgICAgICAgICAgIGxhc3RDb29raWVzID0ge307XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY29va2llQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb29raWUgPSBjb29raWVBcnJheVtpXTtcbiAgICAgICAgICAgICAgICBpbmRleCA9IGNvb2tpZS5pbmRleE9mKCc9Jyk7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZ25vcmUgbmFtZWxlc3MgY29va2llc1xuICAgICAgICAgICAgICAgICAgICBuYW1lID0gc2FmZURlY29kZVVSSUNvbXBvbmVudChjb29raWUuc3Vic3RyaW5nKDAsIGluZGV4KSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBmaXJzdCB2YWx1ZSB0aGF0IGlzIHNlZW4gZm9yIGEgY29va2llIGlzIHRoZSBtb3N0XG4gICAgICAgICAgICAgICAgICAgIC8vIHNwZWNpZmljIG9uZS4gIHZhbHVlcyBmb3IgdGhlIHNhbWUgY29va2llIG5hbWUgdGhhdFxuICAgICAgICAgICAgICAgICAgICAvLyBmb2xsb3cgYXJlIGZvciBsZXNzIHNwZWNpZmljIHBhdGhzLlxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNCbGFuayhsYXN0Q29va2llc1tuYW1lXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RDb29raWVzW25hbWVdID0gc2FmZURlY29kZVVSSUNvbXBvbmVudChjb29raWUuc3Vic3RyaW5nKGluZGV4ICsgMSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsYXN0Q29va2llcztcbiAgICB9O1xuICAgIENvb2tpZVNlcnZpY2UucHJvdG90eXBlLl9jb29raWVXcml0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSwgb3B0aW9ucykge1xuICAgICAgICAgICAgdGhhdC5jb29raWVTdHJpbmcgPSB0aGF0Ll9idWlsZENvb2tpZVN0cmluZyhuYW1lLCB2YWx1ZSwgb3B0aW9ucyk7XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBDb29raWVTZXJ2aWNlLnByb3RvdHlwZS5fYnVpbGRDb29raWVTdHJpbmcgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIG9wdHMgPSBtZXJnZU9wdGlvbnModGhpcy5vcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgdmFyIGV4cGlyZXMgPSBvcHRzLmV4cGlyZXM7XG4gICAgICAgIGlmIChpc0JsYW5rKHZhbHVlKSkge1xuICAgICAgICAgICAgZXhwaXJlcyA9ICdUaHUsIDAxIEphbiAxOTcwIDAwOjAwOjAwIEdNVCc7XG4gICAgICAgICAgICB2YWx1ZSA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1N0cmluZyhleHBpcmVzKSkge1xuICAgICAgICAgICAgZXhwaXJlcyA9IG5ldyBEYXRlKGV4cGlyZXMpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzdHIgPSBlbmNvZGVVUklDb21wb25lbnQobmFtZSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuICAgICAgICBzdHIgKz0gb3B0cy5wYXRoID8gJztwYXRoPScgKyBvcHRzLnBhdGggOiAnJztcbiAgICAgICAgc3RyICs9IG9wdHMuZG9tYWluID8gJztkb21haW49JyArIG9wdHMuZG9tYWluIDogJyc7XG4gICAgICAgIHN0ciArPSBleHBpcmVzID8gJztleHBpcmVzPScgKyBleHBpcmVzLnRvVVRDU3RyaW5nKCkgOiAnJztcbiAgICAgICAgc3RyICs9IG9wdHMuc2VjdXJlID8gJztzZWN1cmUnIDogJyc7XG4gICAgICAgIC8vIHBlciBodHRwOi8vd3d3LmlldGYub3JnL3JmYy9yZmMyMTA5LnR4dCBicm93c2VyIG11c3QgYWxsb3cgYXQgbWluaW11bTpcbiAgICAgICAgLy8gLSAzMDAgY29va2llc1xuICAgICAgICAvLyAtIDIwIGNvb2tpZXMgcGVyIHVuaXF1ZSBkb21haW5cbiAgICAgICAgLy8gLSA0MDk2IGJ5dGVzIHBlciBjb29raWVcbiAgICAgICAgdmFyIGNvb2tpZUxlbmd0aCA9IHN0ci5sZW5ndGggKyAxO1xuICAgICAgICBpZiAoY29va2llTGVuZ3RoID4gNDA5Nikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb29raWUgJ1wiICsgbmFtZSArIFwiJyBwb3NzaWJseSBub3Qgc2V0IG9yIG92ZXJmbG93ZWQgYmVjYXVzZSBpdCB3YXMgdG9vIFxcbiAgICAgIGxhcmdlIChcIiArIGNvb2tpZUxlbmd0aCArIFwiID4gNDA5NiBieXRlcykhXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfTtcbiAgICBDb29raWVTZXJ2aWNlLmRlY29yYXRvcnMgPSBbXG4gICAgICAgIHsgdHlwZTogSW5qZWN0YWJsZSB9LFxuICAgIF07XG4gICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgQ29va2llU2VydmljZS5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtcbiAgICAgICAgeyB0eXBlOiBDb29raWVPcHRpb25zUHJvdmlkZXIsIH0sXG4gICAgXTsgfTtcbiAgICByZXR1cm4gQ29va2llU2VydmljZTtcbn0oKSk7XG5leHBvcnQgeyBDb29raWVTZXJ2aWNlIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Rpc3Qvc3JjL2Nvb2tpZS5zZXJ2aWNlLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIEluamVjdCwgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFQUF9CQVNFX0hSRUYgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgbWVyZ2VPcHRpb25zIH0gZnJvbSAnLi91dGlscyc7XG5leHBvcnQgdmFyIENPT0tJRV9PUFRJT05TID0gbmV3IEluamVjdGlvblRva2VuKCdDT09LSUVfT1BUSU9OUycpO1xuLyoqIEBwcml2YXRlICovXG52YXIgQ29va2llT3B0aW9uc1Byb3ZpZGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDb29raWVPcHRpb25zUHJvdmlkZXIob3B0aW9ucywgX2luamVjdG9yKSB7XG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgICAgIHRoaXMuX2luamVjdG9yID0gX2luamVjdG9yO1xuICAgICAgICB0aGlzLmRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICAgICAgcGF0aDogdGhpcy5faW5qZWN0b3IuZ2V0KEFQUF9CQVNFX0hSRUYsICcvJyksXG4gICAgICAgICAgICBkb21haW46IG51bGwsXG4gICAgICAgICAgICBleHBpcmVzOiBudWxsLFxuICAgICAgICAgICAgc2VjdXJlOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9vcHRpb25zID0gbWVyZ2VPcHRpb25zKHRoaXMuZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29va2llT3B0aW9uc1Byb3ZpZGVyLnByb3RvdHlwZSwgXCJvcHRpb25zXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fb3B0aW9ucztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgQ29va2llT3B0aW9uc1Byb3ZpZGVyLmRlY29yYXRvcnMgPSBbXG4gICAgICAgIHsgdHlwZTogSW5qZWN0YWJsZSB9LFxuICAgIF07XG4gICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgQ29va2llT3B0aW9uc1Byb3ZpZGVyLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgICAgICB7IHR5cGU6IHVuZGVmaW5lZCwgZGVjb3JhdG9yczogW3sgdHlwZTogSW5qZWN0LCBhcmdzOiBbQ09PS0lFX09QVElPTlMsXSB9LF0gfSxcbiAgICAgICAgeyB0eXBlOiBJbmplY3RvciwgfSxcbiAgICBdOyB9O1xuICAgIHJldHVybiBDb29raWVPcHRpb25zUHJvdmlkZXI7XG59KCkpO1xuZXhwb3J0IHsgQ29va2llT3B0aW9uc1Byb3ZpZGVyIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Rpc3Qvc3JjL2Nvb2tpZS1vcHRpb25zLXByb3ZpZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBmdW5jdGlvbiBpc0JsYW5rKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IHVuZGVmaW5lZCB8fCBvYmogPT09IG51bGw7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNQcmVzZW50KG9iaikge1xuICAgIHJldHVybiBvYmogIT09IHVuZGVmaW5lZCAmJiBvYmogIT09IG51bGw7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmcob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdzdHJpbmcnO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlT3B0aW9ucyhvbGRPcHRpb25zLCBuZXdPcHRpb25zKSB7XG4gICAgaWYgKCFuZXdPcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBvbGRPcHRpb25zO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBwYXRoOiBpc1ByZXNlbnQobmV3T3B0aW9ucy5wYXRoKSA/IG5ld09wdGlvbnMucGF0aCA6IG9sZE9wdGlvbnMucGF0aCxcbiAgICAgICAgZG9tYWluOiBpc1ByZXNlbnQobmV3T3B0aW9ucy5kb21haW4pID8gbmV3T3B0aW9ucy5kb21haW4gOiBvbGRPcHRpb25zLmRvbWFpbixcbiAgICAgICAgZXhwaXJlczogaXNQcmVzZW50KG5ld09wdGlvbnMuZXhwaXJlcykgPyBuZXdPcHRpb25zLmV4cGlyZXMgOiBvbGRPcHRpb25zLmV4cGlyZXMsXG4gICAgICAgIHNlY3VyZTogaXNQcmVzZW50KG5ld09wdGlvbnMuc2VjdXJlKSA/IG5ld09wdGlvbnMuc2VjdXJlIDogb2xkT3B0aW9ucy5zZWN1cmUsXG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzYWZlRGVjb2RlVVJJQ29tcG9uZW50KHN0cikge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoc3RyKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gc2FmZUpzb25QYXJzZShzdHIpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShzdHIpO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZGlzdC9zcmMvdXRpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29va2llU2VydmljZSB9IGZyb20gJy4vY29va2llLnNlcnZpY2UnO1xuZXhwb3J0IGZ1bmN0aW9uIGNvb2tpZVNlcnZpY2VGYWN0b3J5KGNvb2tpZU9wdGlvbnNQcm92aWRlcikge1xuICAgIHJldHVybiBuZXcgQ29va2llU2VydmljZShjb29raWVPcHRpb25zUHJvdmlkZXIpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9kaXN0L3NyYy9jb29raWUuZmFjdG9yeS5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvb2tpZVNlcnZpY2UgfSBmcm9tICcuL2Nvb2tpZS5zZXJ2aWNlJztcbnZhciBDb29raWVCYWNrZW5kU2VydmljZSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKENvb2tpZUJhY2tlbmRTZXJ2aWNlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIENvb2tpZUJhY2tlbmRTZXJ2aWNlKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb29raWVCYWNrZW5kU2VydmljZS5wcm90b3R5cGUsIFwiY29va2llU3RyaW5nXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2xvYmFsLlpvbmUuY3VycmVudC5nZXQoJ3JlcScpLmhlYWRlcnMuY29va2llIHx8ICcnO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgIGdsb2JhbC5ab25lLmN1cnJlbnQuZ2V0KCdyZXEnKS5oZWFkZXJzLmNvb2tpZSA9IHZhbDtcbiAgICAgICAgICAgIGdsb2JhbC5ab25lLmN1cnJlbnQuZ2V0KCdyZXMnKS5oZWFkZXJzLmNvb2tpZSA9IHZhbDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgQ29va2llQmFja2VuZFNlcnZpY2UuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgeyB0eXBlOiBJbmplY3RhYmxlIH0sXG4gICAgXTtcbiAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICBDb29raWVCYWNrZW5kU2VydmljZS5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdOyB9O1xuICAgIHJldHVybiBDb29raWVCYWNrZW5kU2VydmljZTtcbn0oQ29va2llU2VydmljZSkpO1xuZXhwb3J0IHsgQ29va2llQmFja2VuZFNlcnZpY2UgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZGlzdC9zcmMvY29va2llLWJhY2tlbmQuc2VydmljZS5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzdfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2NvbW1vblwiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDT09LSUVfT1BUSU9OUywgQ29va2llT3B0aW9uc1Byb3ZpZGVyIH0gZnJvbSAnLi9zcmMvY29va2llLW9wdGlvbnMtcHJvdmlkZXInO1xuaW1wb3J0IHsgQ29va2llU2VydmljZSB9IGZyb20gJy4vc3JjL2Nvb2tpZS5zZXJ2aWNlJztcbmltcG9ydCB7IGNvb2tpZVNlcnZpY2VGYWN0b3J5IH0gZnJvbSAnLi9zcmMvY29va2llLmZhY3RvcnknO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvY29va2llLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvY29va2llLWJhY2tlbmQuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9jb29raWUtb3B0aW9ucy1wcm92aWRlcic7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9jb29raWUuZmFjdG9yeSc7XG5leHBvcnQgKiBmcm9tICcuL3NyYy91dGlscyc7XG52YXIgQ29va2llTW9kdWxlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDb29raWVNb2R1bGUoKSB7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFVzZSB0aGlzIG1ldGhvZCBpbiB5b3VyIHJvb3QgbW9kdWxlIHRvIHByb3ZpZGUgdGhlIENvb2tpZVNlcnZpY2VcbiAgICAgKiBAcGFyYW0ge0Nvb2tpZU9wdGlvbnN9IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJucyB7TW9kdWxlV2l0aFByb3ZpZGVyc31cbiAgICAgKi9cbiAgICAvKipcbiAgICAgICAqIFVzZSB0aGlzIG1ldGhvZCBpbiB5b3VyIHJvb3QgbW9kdWxlIHRvIHByb3ZpZGUgdGhlIENvb2tpZVNlcnZpY2VcbiAgICAgICAqIEBwYXJhbSB7Q29va2llT3B0aW9uc30gb3B0aW9uc1xuICAgICAgICogQHJldHVybnMge01vZHVsZVdpdGhQcm92aWRlcnN9XG4gICAgICAgKi9cbiAgICBDb29raWVNb2R1bGUuZm9yUm9vdCA9IC8qKlxuICAgICAgICogVXNlIHRoaXMgbWV0aG9kIGluIHlvdXIgcm9vdCBtb2R1bGUgdG8gcHJvdmlkZSB0aGUgQ29va2llU2VydmljZVxuICAgICAgICogQHBhcmFtIHtDb29raWVPcHRpb25zfSBvcHRpb25zXG4gICAgICAgKiBAcmV0dXJucyB7TW9kdWxlV2l0aFByb3ZpZGVyc31cbiAgICAgICAqL1xuICAgIGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogQ29va2llTW9kdWxlLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICAgICAgeyBwcm92aWRlOiBDT09LSUVfT1BUSU9OUywgdXNlVmFsdWU6IG9wdGlvbnMgfSxcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IENvb2tpZVNlcnZpY2UsIHVzZUZhY3Rvcnk6IGNvb2tpZVNlcnZpY2VGYWN0b3J5LCBkZXBzOiBbQ29va2llT3B0aW9uc1Byb3ZpZGVyXSB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBVc2UgdGhpcyBtZXRob2QgaW4geW91ciBvdGhlciAobm9uIHJvb3QpIG1vZHVsZXMgdG8gaW1wb3J0IHRoZSBkaXJlY3RpdmUvcGlwZVxuICAgICAqIEBwYXJhbSB7Q29va2llT3B0aW9uc30gb3B0aW9uc1xuICAgICAqIEByZXR1cm5zIHtNb2R1bGVXaXRoUHJvdmlkZXJzfVxuICAgICAqL1xuICAgIC8qKlxuICAgICAgICogVXNlIHRoaXMgbWV0aG9kIGluIHlvdXIgb3RoZXIgKG5vbiByb290KSBtb2R1bGVzIHRvIGltcG9ydCB0aGUgZGlyZWN0aXZlL3BpcGVcbiAgICAgICAqIEBwYXJhbSB7Q29va2llT3B0aW9uc30gb3B0aW9uc1xuICAgICAgICogQHJldHVybnMge01vZHVsZVdpdGhQcm92aWRlcnN9XG4gICAgICAgKi9cbiAgICBDb29raWVNb2R1bGUuZm9yQ2hpbGQgPSAvKipcbiAgICAgICAqIFVzZSB0aGlzIG1ldGhvZCBpbiB5b3VyIG90aGVyIChub24gcm9vdCkgbW9kdWxlcyB0byBpbXBvcnQgdGhlIGRpcmVjdGl2ZS9waXBlXG4gICAgICAgKiBAcGFyYW0ge0Nvb2tpZU9wdGlvbnN9IG9wdGlvbnNcbiAgICAgICAqIEByZXR1cm5zIHtNb2R1bGVXaXRoUHJvdmlkZXJzfVxuICAgICAgICovXG4gICAgZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5nTW9kdWxlOiBDb29raWVNb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IENPT0tJRV9PUFRJT05TLCB1c2VWYWx1ZTogb3B0aW9ucyB9LFxuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogQ29va2llU2VydmljZSwgdXNlRmFjdG9yeTogY29va2llU2VydmljZUZhY3RvcnksIGRlcHM6IFtDb29raWVPcHRpb25zUHJvdmlkZXJdIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcbiAgICB9O1xuICAgIENvb2tpZU1vZHVsZS5kZWNvcmF0b3JzID0gW1xuICAgICAgICB7IHR5cGU6IE5nTW9kdWxlLCBhcmdzOiBbe1xuICAgICAgICAgICAgICAgICAgICBwcm92aWRlcnM6IFtDb29raWVPcHRpb25zUHJvdmlkZXJdXG4gICAgICAgICAgICAgICAgfSxdIH0sXG4gICAgXTtcbiAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICBDb29raWVNb2R1bGUuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXTsgfTtcbiAgICByZXR1cm4gQ29va2llTW9kdWxlO1xufSgpKTtcbmV4cG9ydCB7IENvb2tpZU1vZHVsZSB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9kaXN0L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=