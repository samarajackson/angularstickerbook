(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page\">\n    <router-outlet></router-outlet>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/background/background.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/background/background.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Keyboard Sticker Controls</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <h6>Click on a sticker to make changes!</h6>\n  <table class=\"table\">\n    <thead>\n      <th>Action</th>\n      <th>Key</th>\n    </thead>\n  <tr>\n  <td>Increase / Decrease Sticker Size:</td><td> + / -</td>\n</tr>\n  <tr><td>Rotate Sticker Counterclockwise / Clockwise:</td><td> &lt; / &gt; </td></tr>\n <tr><td>Flip Sticker:</td><td> f </td></tr> \n  <tr><td>Delete Sticker:</td> <td>delete </td></tr>\n</table>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/scroller/scroller.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/scroller/scroller.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"example-item\">\n    <cdk-drop-list (dropped)=\"onDrop($event)\">\n        <ng-container *ngFor=\"let item of icons \">\n            <img src=\"../assets/cute_icons/{{item}}\" alt=\"cute icon\" (click)=\"openDialog(item)\" cdkDrag>\n        </ng-container>\n    </cdk-drop-list>\n</div>\n\n<div class=\"background-scroller\">\n    <div class=\"arrowright\">\n        <a (click)=\"changeBackground('right')\">\n            <img src=\"../assets/specialty/rightarrow.png\">\n        </a>\n    </div>\n    <div class=\"arrowleft\">\n        <a (click)=\"changeBackground('left')\">\n            <img src=\"../assets/specialty/leftarrow.png\">\n        </a>\n    </div>\n    <div class=\"info\">\n        <a (click)=\"shrink()\">\n            <img src=\"../assets/specialty/minus.png\" alt=\"shrink\">\n        </a>\n        <a (click)=\"grow()\">\n            <img src=\"../assets/specialty/plus.png\" alt=\"grow\">\n        </a>\n        <a (click)=\"rotatecw()\">\n            <img src=\"../assets/specialty/rotatecw.png\" alt=\"clockwise\">\n        </a>\n        <a (click)=\"rotateccw()\">\n            <img src=\"../assets/specialty/rotateccw.png\" alt=\"counter clockwise\">\n        </a>\n        <a (click)=\"viewInfo()\">\n            <img src=\"../assets/specialty/information2.png\">\n        </a>\n    </div>\n    <div class=\"example-dialog-content\" cdkDrag *ngFor=\"let item of pageIcons; let i = index;\">\n        <ng-container *ngIf=\"item\">\n            <img id=\"{{i}}\" src=\"../assets/cute_icons/{{item[0]}}\" alt=\"cute icon\" (click)=\"selectNewId(i)\"\n                class=\"rotate\">\n        </ng-container>\n    </div>\n    <div class=\"background\" id=\"backcarousel\">\n        <img *ngFor=\"let x of backgrounds; let i = index\" src=\"../assets/backgrounds/{{x}}\" id=\"img{{i}}\">\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sticker/sticker.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sticker/sticker.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Keyboard Sticker Controls</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <h6>Sorry! Keyboard sticker controls are not yet available on mobile!</h6>\n  <p>You can still arrange your stickers! If you'd like more functionality please use the app with a keyboard.</p>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sticker_sticker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sticker/sticker.component */ "./src/app/sticker/sticker.component.ts");
/* harmony import */ var _background_background_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./background/background.component */ "./src/app/background/background.component.ts");
/* harmony import */ var _scroller_scroller_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scroller/scroller.component */ "./src/app/scroller/scroller.component.ts");






const routes = [
    { path: 'background', component: _background_background_component__WEBPACK_IMPORTED_MODULE_4__["BackgroundComponent"] },
    { path: 'sticker', component: _sticker_sticker_component__WEBPACK_IMPORTED_MODULE_3__["StickerComponent"] },
    { path: '**', component: _scroller_scroller_component__WEBPACK_IMPORTED_MODULE_5__["ScrollerComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'client';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm2015/overlay.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _background_background_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./background/background.component */ "./src/app/background/background.component.ts");
/* harmony import */ var _sticker_sticker_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sticker/sticker.component */ "./src/app/sticker/sticker.component.ts");
/* harmony import */ var _scroller_scroller_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scroller/scroller.component */ "./src/app/scroller/scroller.component.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");



//import { HttpService } from './http.service';









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _background_background_component__WEBPACK_IMPORTED_MODULE_7__["BackgroundComponent"],
            _sticker_sticker_component__WEBPACK_IMPORTED_MODULE_8__["StickerComponent"],
            _scroller_scroller_component__WEBPACK_IMPORTED_MODULE_9__["ScrollerComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["OverlayModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__["DragDropModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/background/background.component.css":
/*!*****************************************************!*\
  !*** ./src/app/background/background.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".modal-header{\n    background-color:pink;\n    border: solid 1px gray;\n}\np span {\n    font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFja2dyb3VuZC9iYWNrZ3JvdW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9iYWNrZ3JvdW5kL2JhY2tncm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1oZWFkZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpwaW5rO1xuICAgIGJvcmRlcjogc29saWQgMXB4IGdyYXk7XG59XG5wIHNwYW4ge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/background/background.component.ts":
/*!****************************************************!*\
  !*** ./src/app/background/background.component.ts ***!
  \****************************************************/
/*! exports provided: BackgroundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundComponent", function() { return BackgroundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");



let BackgroundComponent = class BackgroundComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
    }
    ngOnInit() {
    }
};
BackgroundComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
];
BackgroundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-background',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./background.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/background/background.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./background.component.css */ "./src/app/background/background.component.css")).default]
    })
], BackgroundComponent);



/***/ }),

/***/ "./src/app/scroller/scroller.component.css":
/*!*************************************************!*\
  !*** ./src/app/scroller/scroller.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.example-item{\n    height:15vh;\n    overflow-x:scroll;\n    overflow-y:hidden;\n    white-space: nowrap;\n    background:#6b6b6b;\n    width:100%;\n}\n.example-item img {\n    height:10vh;\n    margin:0.5vh;\n    display: inline-block;\n    vertical-align: middle;\n}\n.example-dialog-content {\n    width:10vh;\n    -webkit-transition-property: -webkit-transform;\n    transition-property: -webkit-transform;\n    transition-property: transform;\n    transition-property: transform, -webkit-transform;\n    -webkit-transform: scaleX(1);\n            transform: scaleX(1);\n    z-index: 5;\n    position: absolute;\n}\n.example-dialog-content img {\n    height:10vh;\n}\n::-webkit-scrollbar {\n    width: 1.2vh;\n}\n::-webkit-scrollbar-track {\n    background-color:gray;\n    border-radius: 1vh;\n}\n::-webkit-scrollbar-thumb {\n    border-radius: 1vh;\n    background-color:pink;\n}\n.arrowright img, .arrowleft img{\n    width:7vh;\n    z-index:5;\n    white-space: nowrap;\n \n}\n.arrowright{\n    vertical-align: center;\n    top:50%;\n    z-index:99;\n    right:0;\n    position: absolute;\n    \n}\n.arrowleft {\n    vertical-align: center;\n    top:50%;\n    z-index:99;\n    left:0;\n    position: absolute;\n}\n.background-scroller{\n    position: relative;\n    padding: 0;\n    margin:0;\n    vertical-align: top;\n}\n.info {\n    vertical-align: center;\n    top:1vh;\n    z-index:99;\n    right:1vh;\n    position: absolute;\n}\n.info img{\n    width:5vh;\n    z-index:5;\n    padding-left:1%;\n    white-space: nowrap;\n}\n@media only screen and (orientation:landscape){\n.background img {\n    margin: 0px auto;\n    background-size: cover;\n    width:100%;\n} \n.background {\n    z-index:-1;\n    height:85vh;\n    overflow-x:hidden;\n    overflow-y:hidden;\n    white-space:nowrap;\n    position: relative;\n    margin:0;\n}\n}\n@media only screen and (orientation: portrait) {\n    .background img {\n        margin: 0px auto;\n        background-size: cover;\n        height:100%;\n    } \n    .background {\n        z-index:-1;\n        height:85vh;\n        overflow-x:hidden;\n        overflow-y:hidden;\n        white-space:nowrap;\n        position: relative;\n        margin:0;\n    }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Nyb2xsZXIvc2Nyb2xsZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsOENBQThDO0lBRzlDLHNDQUE4QjtJQUE5Qiw4QkFBOEI7SUFBOUIsaURBQThCO0lBQzlCLDRCQUFvQjtZQUFwQixvQkFBb0I7SUFDcEIsVUFBVTtJQUNWLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBRUM7SUFDRyxZQUFZO0FBQ2hCO0FBRUM7SUFDRyxxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCO0FBRUM7SUFDRyxrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCO0FBRUE7SUFDSSxTQUFTO0lBQ1QsU0FBUztJQUNULG1CQUFtQjs7QUFFdkI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixPQUFPO0lBQ1AsVUFBVTtJQUNWLE9BQU87SUFDUCxrQkFBa0I7O0FBRXRCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsT0FBTztJQUNQLFVBQVU7SUFDVixNQUFNO0lBQ04sa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFFBQVE7SUFDUixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixPQUFPO0lBQ1AsVUFBVTtJQUNWLFNBQVM7SUFDVCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFNBQVM7SUFDVCxTQUFTO0lBQ1QsZUFBZTtJQUNmLG1CQUFtQjtBQUN2QjtBQUNBO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsUUFBUTtBQUNaO0FBQ0E7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO1FBQ2hCLHNCQUFzQjtRQUN0QixXQUFXO0lBQ2Y7SUFDQTtRQUNJLFVBQVU7UUFDVixXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLFFBQVE7SUFDWjs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL3Njcm9sbGVyL3Njcm9sbGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5leGFtcGxlLWl0ZW17XG4gICAgaGVpZ2h0OjE1dmg7XG4gICAgb3ZlcmZsb3cteDpzY3JvbGw7XG4gICAgb3ZlcmZsb3cteTpoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBiYWNrZ3JvdW5kOiM2YjZiNmI7XG4gICAgd2lkdGg6MTAwJTtcbn1cbi5leGFtcGxlLWl0ZW0gaW1nIHtcbiAgICBoZWlnaHQ6MTB2aDtcbiAgICBtYXJnaW46MC41dmg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uZXhhbXBsZS1kaWFsb2ctY29udGVudCB7XG4gICAgd2lkdGg6MTB2aDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IC13ZWJraXQtdHJhbnNmb3JtO1xuICAgIC1tb3otdHJhbnNpdGlvbi1wcm9wZXJ0eTogLW1vei10cmFuc2Zvcm07XG4gICAgLW8tdHJhbnNpdGlvbi1wcm9wZXJ0eTogLW8tdHJhbnNmb3JtO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiAgICB6LWluZGV4OiA1O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5leGFtcGxlLWRpYWxvZy1jb250ZW50IGltZyB7XG4gICAgaGVpZ2h0OjEwdmg7XG59XG5cbiA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogMS4ydmg7XG59XG4gXG4gOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpncmF5O1xuICAgIGJvcmRlci1yYWRpdXM6IDF2aDtcbn1cbiBcbiA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBib3JkZXItcmFkaXVzOiAxdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpwaW5rO1xufVxuXG4uYXJyb3dyaWdodCBpbWcsIC5hcnJvd2xlZnQgaW1ne1xuICAgIHdpZHRoOjd2aDtcbiAgICB6LWluZGV4OjU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiBcbn1cbi5hcnJvd3JpZ2h0e1xuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG4gICAgdG9wOjUwJTtcbiAgICB6LWluZGV4Ojk5O1xuICAgIHJpZ2h0OjA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIFxufVxuLmFycm93bGVmdCB7XG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcbiAgICB0b3A6NTAlO1xuICAgIHotaW5kZXg6OTk7XG4gICAgbGVmdDowO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5iYWNrZ3JvdW5kLXNjcm9sbGVye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjowO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG4uaW5mbyB7XG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcbiAgICB0b3A6MXZoO1xuICAgIHotaW5kZXg6OTk7XG4gICAgcmlnaHQ6MXZoO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5pbmZvIGltZ3tcbiAgICB3aWR0aDo1dmg7XG4gICAgei1pbmRleDo1O1xuICAgIHBhZGRpbmctbGVmdDoxJTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246bGFuZHNjYXBlKXtcbi5iYWNrZ3JvdW5kIGltZyB7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHdpZHRoOjEwMCU7XG59IFxuLmJhY2tncm91bmQge1xuICAgIHotaW5kZXg6LTE7XG4gICAgaGVpZ2h0Ojg1dmg7XG4gICAgb3ZlcmZsb3cteDpoaWRkZW47XG4gICAgb3ZlcmZsb3cteTpoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6bm93cmFwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46MDtcbn1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgLmJhY2tncm91bmQgaW1nIHtcbiAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgaGVpZ2h0OjEwMCU7XG4gICAgfSBcbiAgICAuYmFja2dyb3VuZCB7XG4gICAgICAgIHotaW5kZXg6LTE7XG4gICAgICAgIGhlaWdodDo4NXZoO1xuICAgICAgICBvdmVyZmxvdy14OmhpZGRlbjtcbiAgICAgICAgb3ZlcmZsb3cteTpoaWRkZW47XG4gICAgICAgIHdoaXRlLXNwYWNlOm5vd3JhcDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXJnaW46MDtcbiAgICB9XG5cbn0iXX0= */");

/***/ }),

/***/ "./src/app/scroller/scroller.component.ts":
/*!************************************************!*\
  !*** ./src/app/scroller/scroller.component.ts ***!
  \************************************************/
/*! exports provided: ScrollerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollerComponent", function() { return ScrollerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _background_background_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../background/background.component */ "./src/app/background/background.component.ts");
/* harmony import */ var _sticker_sticker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sticker/sticker.component */ "./src/app/sticker/sticker.component.ts");


// import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';



let ScrollerComponent = class ScrollerComponent {
    constructor(modalService, _viewContainerRef) {
        this.modalService = modalService;
        this._viewContainerRef = _viewContainerRef;
        this.pageIcons = [];
        this.icons = ['alien.png', 'galaxy.png', 'snow.png',
            'asteroid.png', 'kitty.png', 'squirrel.png',
            'astronaut.png', 'owl.png', '	star.png',
            'butterfly.png', 'parrot.png', 'sun.png',
            'cactus.png', 'pine.png', 'tree.png',
            'cat.png', '	planet.png', 'tree2.png',
            'chameleon.png', 'poplartree.png', 'turtle.png',
            'chat.png', 'purpleflower.png', 'tyrannosaurus-rex.png',
            'chicken.png', 'rain.png', 'ufo.png',
            'cloudsun.png', 'rainbow.png', 'unicorn.png',
            'fairy.png', 'sheep.png', 'worm.png',
            'fence.png', 'snail.png'];
        this.backgrounds = ['forestmountains.jpg', 'nightmountains.jpg', 'desert.jpg', 'spookyspace.jpg', 'mountains.jpg'];
        this.selectedId = null;
        this.backgroundid = 0;
        this.vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        this.vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    }
    ngOnInit() {
        window.addEventListener("keydown", (e) => {
            this.zoomImage(e);
        });
    }
    changeBackground(direction) {
        // index and left side of image
        var car = document.getElementById("backcarousel");
        var imagewidth = document.getElementById("img" + this.backgroundid).offsetWidth;
        if (direction == "right") {
            if (this.backgroundid < this.backgrounds.length - 1) { //this check is to reset the array to the beginning so it keeps going
                this.backgroundid += 1;
                car.scrollBy({
                    top: 0,
                    left: imagewidth,
                    behavior: 'smooth',
                });
            }
            else { //need to reset to 0 at the end of the array
                this.backgroundid = 0;
                car.scrollBy({
                    top: 0,
                    left: -1 * imagewidth * (this.backgrounds.length + 1),
                    behavior: 'smooth',
                });
            }
        }
        else if (direction == "left") {
            if (this.backgroundid > 0) { //this check is to reset the array to the beginning so it keeps going
                this.backgroundid -= 1;
                car.scrollBy({
                    top: 0,
                    left: -1 * imagewidth,
                    behavior: 'smooth',
                });
            }
            else {
                this.backgroundid = (this.backgrounds.length) - 1; //need to reset this to the end of the array
                car.scrollBy({
                    top: 0,
                    left: imagewidth * (this.backgrounds.length + 1),
                    behavior: 'smooth',
                });
            }
        }
    }
    selectNewId(id) {
        this.selectedId = id;
    }
    openDialog(x) {
        this.pageIcons.push([x, 0, 1]);
        this.selectedId = this.pageIcons.length - 1;
    }
    zoomImage(e) {
        if (e.keyCode == 189) { //shrink
            this.shrink();
        }
        else if (e.keyCode == 187) { //grow
            this.grow();
        }
        else if (e.keyCode == 188) { //rotate left
            this.rotateccw();
        }
        else if (e.keyCode == 190) { //rotate right
            this.rotatecw();
        }
        else if (e.keyCode == 70) { //flip the image
            this.flipimage();
        }
        else if (e.keyCode == 8) { //delete the image
            this.delete();
        }
    }
    checkifflipped() {
        let flip = "";
        if (this.pageIcons[this.selectedId][2] == -1) {
            flip = " scaleX(-1)";
        }
        else {
            flip = "";
        }
        return flip;
    }
    getrotation() {
        let rotation = this.pageIcons[this.selectedId][1];
        let anglestr = ' rotate(' + rotation + 'deg)';
        return anglestr;
    }
    viewInfo() {
        if (this.vw > 1024) {
            const modalRef = this.modalService.open(_background_background_component__WEBPACK_IMPORTED_MODULE_3__["BackgroundComponent"], { centered: true });
        }
        else {
            const modalRef = this.modalService.open(_sticker_sticker_component__WEBPACK_IMPORTED_MODULE_4__["StickerComponent"], { centered: true });
        }
    }
    shrink() {
        let image = document.getElementById(this.selectedId);
        image.style.width = (image.offsetWidth - 10) + "px";
        image.style.height = (image.offsetHeight - 10) + "px";
    }
    grow() {
        console.log("called grow");
        let image = document.getElementById(this.selectedId);
        console.log("image: " + image);
        image.style.width = (image.offsetWidth + 10) + "px";
        image.style.height = (image.offsetHeight + 10) + "px";
    }
    rotateccw() {
        let image = document.getElementById(this.selectedId);
        let rotation = this.pageIcons[this.selectedId][1];
        rotation -= 10;
        this.pageIcons[this.selectedId][1] = rotation;
        let anglestr = ' rotate(' + rotation + 'deg)';
        image.style.webkitTransform = anglestr + this.checkifflipped();
    }
    rotatecw() {
        let image = document.getElementById(this.selectedId);
        let rotation = this.pageIcons[this.selectedId][1];
        rotation += 10;
        this.pageIcons[this.selectedId][1] = rotation;
        let anglestr = ' rotate(' + rotation + 'deg)';
        image.style.webkitTransform = anglestr + this.checkifflipped();
    }
    flipimage() {
        let image = document.getElementById(this.selectedId);
        if (this.pageIcons[this.selectedId][2] == -1) {
            image.style.webkitTransform = " scaleX(-1)" + this.getrotation();
            this.pageIcons[this.selectedId][2] = 1;
        }
        else {
            image.style.webkitTransform = "" + this.getrotation();
            this.pageIcons[this.selectedId][2] = -1;
        }
    }
    delete() {
        this.pageIcons.splice(this.selectedId, 1);
    }
};
ScrollerComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], { static: false })
], ScrollerComponent.prototype, "_dialogTemplate", void 0);
ScrollerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-scroller',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./scroller.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/scroller/scroller.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./scroller.component.css */ "./src/app/scroller/scroller.component.css")).default]
    })
], ScrollerComponent);



/***/ }),

/***/ "./src/app/sticker/sticker.component.css":
/*!***********************************************!*\
  !*** ./src/app/sticker/sticker.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".modal-header{\n  background-color:pink;\n  border: solid 1px gray;\n}\np span {\n  font-weight: bold;\n}\np h6{\n  font-size: 18px;\n}\nh4{\n  font-size:22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RpY2tlci9zdGlja2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9zdGlja2VyL3N0aWNrZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1oZWFkZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6cGluaztcbiAgYm9yZGVyOiBzb2xpZCAxcHggZ3JheTtcbn1cbnAgc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxucCBoNntcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuaDR7XG4gIGZvbnQtc2l6ZToyMnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/sticker/sticker.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sticker/sticker.component.ts ***!
  \**********************************************/
/*! exports provided: StickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickerComponent", function() { return StickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");



let StickerComponent = class StickerComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
    }
    ngOnInit() {
    }
};
StickerComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
];
StickerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sticker',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sticker.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sticker/sticker.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sticker.component.css */ "./src/app/sticker/sticker.component.css")).default]
    })
], StickerComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/samara/Desktop/CodingDojo/AngularStickerBook/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map