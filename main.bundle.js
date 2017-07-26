webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 style=\"text-align: center\">{{title}}</h1>\n\n<app-dual-list [leftList]=\"leftList\" [rightList]=\"rightList\"></app-dual-list>\n\n<div style=\"display: flex; flex-direction: row; justify-content: center;\">\n  <pre style=\"width: 40%\">\n    <small>{{ leftList | json}}</small>\n  </pre>\n  <pre style=\"width:40%; margin-left:85px;\">\n    <small>{{ rightList | json}}</small>\n  </pre>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.leftList = [
            { id: 1, name: 'Moscow' },
            { id: 2, name: 'Saint Petersburg' },
            { id: 3, name: 'Novosibirsk' },
            { id: 4, name: 'Vladivostok' },
            { id: 5, name: 'Krasnodar' },
            { id: 6, name: 'Kaliningrad' },
        ];
        this.rightList = [
            { id: 7, name: 'Krasnoyarsk' }
        ];
        this.title = 'It\'s simple dual-list component!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__duallist_duallist_component__ = __webpack_require__("../../../../../src/app/duallist/duallist.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__duallist_duallist_component__["a" /* DualListComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/duallist/duallist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dual-list {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.dual-list .list {\n  width: 40%;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n}\n\n.dual-list .list .panel-heading {\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-item-align: center;\n      align-self: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.dual-list .list ul {\n  overflow-x: hidden;\n  overflow-y: auto;\n  position: relative;\n  max-height: 265px;\n  min-height: 265px;\n}\n\n.dual-list .list ul li:last-child {\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\n\n.dual-list .list ul li label, .list ul li {\n  cursor: pointer;\n}\n\n.dual-list .btn-group-vertical {\n  padding: 0 25px;\n}\n\n.dual-list .btn-group-vertical .add {\n  border-top-right-radius: 40px;\n  border-top-left-radius: 40px;\n}\n\n.dual-list .btn-group-vertical .remove {\n  border-bottom-right-radius: 40px;\n  border-bottom-left-radius: 40px;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/duallist/duallist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dual-list\">\n  <div class=\"list panel panel-default pull-left\">\n    <div class=\"panel-heading\">\n      <label>{{ leftTitle }}</label>\n      <div class=\"btn-group\">\n        <button class=\"btn btn-default\" (click)=\"selectAll(_leftList)\" [disabled]=\"isSelectAll(_leftList)\">All</button>\n        <button class=\"btn btn-default\" (click)=\"selectNone(_leftList)\" [disabled]=\"isSelectNone(_leftList)\">None</button>\n      </div>\n    </div>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\" *ngFor=\"let item of _leftList.list\" (click)=\"selectItem(_leftList.selected, item)\"\n          [ngClass]=\"{active: isSelected(_leftList.selected, item)}\">\n        <span>{{ item[display] }}</span>\n      </li>\n    </ul>\n  </div>\n\n  <div class=\"btn-group-vertical\">\n    <button type=\"button\" class=\"btn btn-primary add\" (click)=\"moveSelectedItems(_leftList, _rightList)\"\n            [disabled]=\"!_leftList.selected.length\">></button>\n    <button type=\"button\" class=\"btn btn-primary remove\" (click)=\"moveSelectedItems(_rightList, _leftList)\"\n            [disabled]=\"!_rightList.selected.length\"><</button>\n  </div>\n\n  <div class=\"list panel panel-default pull-left\">\n    <div class=\"panel-heading\">\n      <label>{{ rightTitle }}</label>\n      <div class=\"btn-group\">\n        <button class=\"btn btn-default\" (click)=\"selectAll(_rightList)\" [disabled]=\"isSelectAll(_rightList)\">All</button>\n        <button class=\"btn btn-default\" (click)=\"selectNone(_rightList)\" [disabled]=\"isSelectNone(_rightList)\">None</button>\n      </div>\n    </div>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\"  *ngFor=\"let item of _rightList.list\" (click)=\"selectItem(_rightList.selected, item)\"\n          [ngClass]=\"{active: isSelected(_rightList.selected, item)}\">\n        <span>{{ item[display] }}</span>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/duallist/duallist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DualListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BaseList = (function () {
    function BaseList(list) {
        if (list === void 0) { list = []; }
        this.selected = [];
        this.list = list;
    }
    return BaseList;
}());
var DualListComponent = (function () {
    function DualListComponent() {
        this.display = 'name';
        this.leftTitle = 'Available';
        this.rightTitle = 'Chosen';
    }
    Object.defineProperty(DualListComponent.prototype, "leftList", {
        set: function (list) {
            this._leftList = new BaseList(list);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DualListComponent.prototype, "rightList", {
        set: function (list) {
            this._rightList = new BaseList(list);
        },
        enumerable: true,
        configurable: true
    });
    DualListComponent.prototype.isSelected = function (list, item) {
        return list.filter(function (e) { return Object.is(e, item); }).length;
    };
    DualListComponent.prototype.selectItem = function (list, item) {
        var entryItems = list.filter(function (e) { return Object.is(e, item); });
        if (entryItems.length) {
            entryItems.forEach(function (v) {
                var idx = list.indexOf(v);
                if (idx + 1)
                    list.splice(idx, 1);
            });
        }
        else {
            list.push(item);
        }
    };
    DualListComponent.prototype.moveSelectedItems = function (fromList, toList) {
        // fromList.list = fromList.list.filter(item => !(fromList.selected.indexOf(item)+1));
        var copy = fromList.list.slice();
        fromList.list.length = 0;
        copy.forEach(function (e) {
            if (!(fromList.selected.indexOf(e) + 1))
                fromList.list.push(e);
        });
        fromList.selected.forEach(function (item) { return toList.list.push(item); });
        fromList.selected = [];
    };
    DualListComponent.prototype.selectAll = function (list) {
        list.selected = list.list.slice();
    };
    DualListComponent.prototype.isSelectAll = function (list) {
        return list.selected.length === list.list.length && list.selected.every(function (v1) { return list.list.find(function (v2) { return v1 === v2; }); });
    };
    DualListComponent.prototype.selectNone = function (list) {
        list.selected = [];
    };
    DualListComponent.prototype.isSelectNone = function (list) {
        return list.selected.length === 0;
    };
    return DualListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], DualListComponent.prototype, "display", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], DualListComponent.prototype, "leftTitle", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], DualListComponent.prototype, "rightTitle", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], DualListComponent.prototype, "leftList", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], DualListComponent.prototype, "rightList", null);
DualListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-dual-list',
        template: __webpack_require__("../../../../../src/app/duallist/duallist.component.html"),
        styles: [__webpack_require__("../../../../../src/app/duallist/duallist.component.css")],
    }),
    __metadata("design:paramtypes", [])
], DualListComponent);

//# sourceMappingURL=duallist.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map