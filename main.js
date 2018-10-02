(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- The content below is only a placeholder and can be replaced. -->\n\n<nav class=\"navbar navbar-expand-lg navbar navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\"\n        aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n        <ul class=\"navbar-nav\">\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"['features']\">Features</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"['pricing']\">Pricing</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"['posts']\">Posts</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"['login']\">login</a>\n            </li>\n            <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Dropdown link\n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n            <a class=\"dropdown-item\" href=\"#\">Action</a>\n            <a class=\"dropdown-item\" href=\"#\">Another action</a>\n            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n          </div>\n        </li>\n        </ul>\n    </div>\n</nav>\n\n<div class=\"jumbotron\">\n    <p>\n        <input type=\"checkbox\" name=\"\" id=\"\" [(ngModel)]=\"show\"> Show / Hide\n    </p>\n    <h2>Current Date : {{dt | date:'medium'}} </h2> \n    <h2>Price : {{price | currency:\"GBP\"}} </h2> \n    <p>Object : {{obj | json}} </p> \n    <h1 class=\"display-4\" appHighLighter=\"purple\" *appMyNgIf=\"show\">{{title | capitalize}}</h1>\n    <p class=\"lead\">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to\n        featured content or information.</p>\n    <hr class=\"my-4\">\n    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>\n    <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more</a>\n</div>\n\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-8\">\n            <router-outlet></router-outlet>\n            <h2>Data Fetched From JsonPlaceHolder Api</h2>\n            <div id=\"data\" *ngFor=\"let r of result[0]\">\n                <h4>{{r.title}}</h4>\n                <p>{{r.body}}</p>\n            </div>\n            <button (click)=\"sendData()\" class=\"btn btn-primary\">Save Data</button>\n        </div>\n        <div class=\"col-md-4\">\n            <app-sidebar></app-sidebar>\n        </div>\n    </div>\n</div>\n\n<div class=\"container-fluid \">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <nav aria-label=\"Page navigation example \">\n                <ul class=\"pagination \">\n                    <li class=\"page-item\">\n                        <a class=\"page-link\" href=\"#\" aria-label=\"Previous\">\n                            <span aria-hidden=\"true\">&laquo;</span>\n                            <span class=\"sr-only\">Previous</span>\n                        </a>\n                    </li>\n                    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li>\n                    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n                    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n                    <li class=\"page-item\">\n                        <a class=\"page-link\" href=\"#\" aria-label=\"Next\">\n                            <span aria-hidden=\"true\">&raquo;</span>\n                            <span class=\"sr-only\">Next</span>\n                        </a>\n                    </li>\n                </ul>\n            </nav>\n        </div>\n    </div>\n</div> \n\n<form>\n    <input type=\"file\" id=\"fileToUpload\" name=\"fileToUpload\" />\n    <br>\n    <input type=\"button\" value=\"Upload File\" (click)=\"uploadFile()\">\n</form>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fetch_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch-data.service */ "./src/app/fetch-data.service.ts");
/* harmony import */ var _file_upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./file-upload.service */ "./src/app/file-upload.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(_fetchData, el, fileToUpload) {
        this._fetchData = _fetchData;
        this.el = el;
        this.fileToUpload = fileToUpload;
        this.title = 'first angular 5 webpage';
        this.show = 1;
        this.price = 10000;
        this.dt = new Date();
        this.obj = { foo: 'bar', baz: 'qux', nested: { xyz: 3, numbers: [1, 2, 3, 4, 5] } };
        this.result = _fetchData.data;
    }
    AppComponent.prototype.sendData = function () {
        this._fetchData.sendData();
    };
    AppComponent.prototype.uploadFile = function () {
        var frmData = new FormData(this.el.nativeElement.querySelector('form'));
        this.fileToUpload.uploadFile(frmData)
            .subscribe(function (data) { return console.log(data); }, function (err) {
            if (err.error instanceof ErrorEvent) {
                console.error('An error occurred:', err.error.message);
            }
            else {
                console.error("Backend returned code " + err.status + ", " +
                    ("body was: " + err.error.text));
            }
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_fetch_data_service__WEBPACK_IMPORTED_MODULE_1__["FetchDataService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _file_upload_service__WEBPACK_IMPORTED_MODULE_2__["FileUploadService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_Forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/Forms */ "./node_modules/@angular/Forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fetch_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fetch-data.service */ "./src/app/fetch-data.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _features_features_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./features/features.component */ "./src/app/features/features.component.ts");
/* harmony import */ var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pricing/pricing.component */ "./src/app/pricing/pricing.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/posts/posts.component.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./post/post.component */ "./src/app/post/post.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _high_lighter_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./high-lighter.directive */ "./src/app/high-lighter.directive.ts");
/* harmony import */ var _my_ng_if_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./my-ng-if.directive */ "./src/app/my-ng-if.directive.ts");
/* harmony import */ var _capitalize_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./capitalize.pipe */ "./src/app/capitalize.pipe.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _file_upload_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./file-upload.service */ "./src/app/file-upload.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var routes = [
    { path: '', redirectTo: 'features', pathMatch: 'full' },
    { path: "features", component: _features_features_component__WEBPACK_IMPORTED_MODULE_6__["FeaturesComponent"] },
    { path: "pricing", component: _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_7__["PricingComponent"] },
    { path: "posts", component: _posts_posts_component__WEBPACK_IMPORTED_MODULE_9__["PostsComponent"] },
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"] },
    { path: "posts/:id", component: _post_post_component__WEBPACK_IMPORTED_MODULE_10__["PostComponent"] },
    { path: '**', redirectTo: 'features' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            // imports: [BrowserModule, AuthenticationModule, RouterModule.forRoot(appRoutes, { enableTracing: true })],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_Forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, { useHash: true }),
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _features_features_component__WEBPACK_IMPORTED_MODULE_6__["FeaturesComponent"],
                _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_7__["PricingComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"],
                _posts_posts_component__WEBPACK_IMPORTED_MODULE_9__["PostsComponent"],
                _post_post_component__WEBPACK_IMPORTED_MODULE_10__["PostComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _high_lighter_directive__WEBPACK_IMPORTED_MODULE_12__["HighLighterDirective"],
                _my_ng_if_directive__WEBPACK_IMPORTED_MODULE_13__["MyNgIfDirective"],
                _capitalize_pipe__WEBPACK_IMPORTED_MODULE_14__["CapitalizePipe"],
            ],
            providers: [
                _fetch_data_service__WEBPACK_IMPORTED_MODULE_4__["FetchDataService"],
                _file_upload_service__WEBPACK_IMPORTED_MODULE_16__["FileUploadService"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/capitalize.pipe.ts":
/*!************************************!*\
  !*** ./src/app/capitalize.pipe.ts ***!
  \************************************/
/*! exports provided: CapitalizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapitalizePipe", function() { return CapitalizePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CapitalizePipe = /** @class */ (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (value, args) {
        var val = value.split(' ');
        for (var i = 0; i < val.length; i++) {
            var piece = val[i];
            var j = piece.charAt(0).toUpperCase();
            val[i] = j + val[i].substr(1).toLowerCase();
        }
        return val.join(' ');
    };
    CapitalizePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'capitalize'
        })
    ], CapitalizePipe);
    return CapitalizePipe;
}());



/***/ }),

/***/ "./src/app/features/features.component.css":
/*!*************************************************!*\
  !*** ./src/app/features/features.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/features/features.component.html":
/*!**************************************************!*\
  !*** ./src/app/features/features.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n      <div class=\"accordion\" id=\"accordionExample\">\n        <div class=\"card\">\n          <div class=\"card-header\" id=\"headingOne\">\n            <h5 class=\"mb-0\">\n              <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseOne\"\n                aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                Collapsible Group Item #1\n              </button>\n            </h5>\n          </div>\n\n          <div id=\"collapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordionExample\">\n            <div class=\"card-body\">\n              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf\n              moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.\n              Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda\n              shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea\n              proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim\n              aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n            </div>\n          </div>\n        </div>\n        <div class=\"card\">\n          <div class=\"card-header\" id=\"headingTwo\">\n            <h5 class=\"mb-0\">\n              <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseTwo\"\n                aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n                Collapsible Group Item #2\n              </button>\n            </h5>\n          </div>\n          <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionExample\">\n            <div class=\"card-body\">\n              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf\n              moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.\n              Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda\n              shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea\n              proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim\n              aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n            </div>\n          </div>\n        </div>\n        <div class=\"card\">\n          <div class=\"card-header\" id=\"headingThree\">\n            <h5 class=\"mb-0\">\n              <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseThree\"\n                aria-expanded=\"false\" aria-controls=\"collapseThree\">\n                Collapsible Group Item #3\n              </button>\n            </h5>\n          </div>\n          <div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordionExample\">\n            <div class=\"card-body\">\n              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf\n              moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.\n              Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda\n              shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea\n              proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim\n              aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n            </div>\n          </div>\n        </div>\n      </div>\n"

/***/ }),

/***/ "./src/app/features/features.component.ts":
/*!************************************************!*\
  !*** ./src/app/features/features.component.ts ***!
  \************************************************/
/*! exports provided: FeaturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesComponent", function() { return FeaturesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FeaturesComponent = /** @class */ (function () {
    function FeaturesComponent() {
    }
    FeaturesComponent.prototype.ngOnInit = function () {
    };
    FeaturesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-features',
            template: __webpack_require__(/*! ./features.component.html */ "./src/app/features/features.component.html"),
            styles: [__webpack_require__(/*! ./features.component.css */ "./src/app/features/features.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FeaturesComponent);
    return FeaturesComponent;
}());



/***/ }),

/***/ "./src/app/fetch-data.service.ts":
/*!***************************************!*\
  !*** ./src/app/fetch-data.service.ts ***!
  \***************************************/
/*! exports provided: FetchDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchDataService", function() { return FetchDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FetchDataService = /** @class */ (function () {
    function FetchDataService(_http) {
        var _this = this;
        this._http = _http;
        this.data = [];
        // fetch("https://jsonplaceholder.typicode.com/posts")
        // .then((res) => res.json())
        // .then((data) => this.data.push(data))
        // .catch((err)=> console.log('err'))
        this._http.get('https://jsonplaceholder.typicode.com/posts')
            .subscribe(function (result) { return _this.data.push(result); }, function (err) { return console.log(err); }, function () { return console.log('Fetching Data done..'); });
    }
    FetchDataService.prototype.sendData = function () {
        this._http.post('https://jsonplaceholder.typicode.com/posts', {
            'title': 'Dummy Post Title',
            'body': 'Dummy Post Body sent'
        })
            .subscribe(function (result) { return console.log(result); }, function (err) { return console.log(err); }, function () { return console.log('Fetching Data done..'); });
    };
    FetchDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
        // 
        ,
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FetchDataService);
    return FetchDataService;
}());



/***/ }),

/***/ "./src/app/file-upload.service.ts":
/*!****************************************!*\
  !*** ./src/app/file-upload.service.ts ***!
  \****************************************/
/*! exports provided: FileUploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadService", function() { return FileUploadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FileUploadService = /** @class */ (function () {
    function FileUploadService(_http) {
        this._http = _http;
    }
    FileUploadService.prototype.uploadFile = function (frmData) {
        return this._http.post('http://localhost:8080/php/fileupload.php', frmData);
    };
    FileUploadService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FileUploadService);
    return FileUploadService;
}());



/***/ }),

/***/ "./src/app/high-lighter.directive.ts":
/*!*******************************************!*\
  !*** ./src/app/high-lighter.directive.ts ***!
  \*******************************************/
/*! exports provided: HighLighterDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighLighterDirective", function() { return HighLighterDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HighLighterDirective = /** @class */ (function () {
    function HighLighterDirective(el) {
        this.el = el;
    }
    HighLighterDirective.prototype.ngOnInit = function () {
        this.el.nativeElement.style.backgroundColor = this.appHighLighter;
    };
    HighLighterDirective.prototype.onmouseenter = function () {
        this.el.nativeElement.style.backgroundColor = 'yellow';
        this.el.nativeElement.style.color = 'white';
    };
    HighLighterDirective.prototype.onmouseleave = function () {
        this.el.nativeElement.style.backgroundColor = this.appHighLighter;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HighLighterDirective.prototype, "appHighLighter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HighLighterDirective.prototype, "onmouseenter", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HighLighterDirective.prototype, "onmouseleave", null);
    HighLighterDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appHighLighter]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], HighLighterDirective);
    return HighLighterDirective;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"needs-validation\" novalidate>\r\n        <div class=\"form-row\">\r\n          <div class=\"col-md-4 mb-3\">\r\n            <label for=\"validationCustom01\">First name</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"validationCustom01\" placeholder=\"First name\" value=\"Mark\" required>\r\n            <div class=\"valid-feedback\">\r\n              Looks good!\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-4 mb-3\">\r\n            <label for=\"validationCustom02\">Last name</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"validationCustom02\" placeholder=\"Last name\" value=\"Otto\" required>\r\n            <div class=\"valid-feedback\">\r\n              Looks good!\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-4 mb-3\">\r\n            <label for=\"validationCustomUsername\">Username</label>\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\" id=\"inputGroupPrepend\">@</span>\r\n              </div>\r\n              <input type=\"text\" class=\"form-control\" id=\"validationCustomUsername\" placeholder=\"Username\" aria-describedby=\"inputGroupPrepend\" required>\r\n              <div class=\"invalid-feedback\">\r\n                Please choose a username.\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"col-md-6 mb-3\">\r\n            <label for=\"validationCustom03\">City</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"validationCustom03\" placeholder=\"City\" required>\r\n            <div class=\"invalid-feedback\">\r\n              Please provide a valid city.\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3 mb-3\">\r\n            <label for=\"validationCustom04\">State</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"validationCustom04\" placeholder=\"State\" required>\r\n            <div class=\"invalid-feedback\">\r\n              Please provide a valid state.\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3 mb-3\">\r\n            <label for=\"validationCustom05\">Zip</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"validationCustom05\" placeholder=\"Zip\" required>\r\n            <div class=\"invalid-feedback\">\r\n              Please provide a valid zip.\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <div class=\"form-check\">\r\n            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"invalidCheck\" required>\r\n            <label class=\"form-check-label\" for=\"invalidCheck\">\r\n              Agree to terms and conditions\r\n            </label>\r\n            <div class=\"invalid-feedback\">\r\n              You must agree before submitting.\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <button class=\"btn btn-primary\" type=\"submit\">Submit form</button>\r\n      </form>\r\n      \r\n      <script>\r\n      // Example starter JavaScript for disabling form submissions if there are invalid fields\r\n      (function() {\r\n        'use strict';\r\n        window.addEventListener('load', function() {\r\n          // Fetch all the forms we want to apply custom Bootstrap validation styles to\r\n          var forms = document.getElementsByClassName('needs-validation');\r\n          // Loop over them and prevent submission\r\n          var validation = Array.prototype.filter.call(forms, function(form) {\r\n            form.addEventListener('submit', function(event) {\r\n              if (form.checkValidity() === false) {\r\n                event.preventDefault();\r\n                event.stopPropagation();\r\n              }\r\n              form.classList.add('was-validated');\r\n            }, false);\r\n          });\r\n        }, false);\r\n      })();\r\n      </script>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
        this.title = 'Login Webpage';
    }
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/my-ng-if.directive.ts":
/*!***************************************!*\
  !*** ./src/app/my-ng-if.directive.ts ***!
  \***************************************/
/*! exports provided: MyNgIfDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyNgIfDirective", function() { return MyNgIfDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyNgIfDirective = /** @class */ (function () {
    function MyNgIfDirective(ViewContainerRef, templateRef) {
        this.ViewContainerRef = ViewContainerRef;
        this.templateRef = templateRef;
    }
    Object.defineProperty(MyNgIfDirective.prototype, "appMyNgIf", {
        set: function (isBoolean) {
            if (isBoolean) {
                this.ViewContainerRef.createEmbeddedView(this.templateRef);
            }
            else {
                this.ViewContainerRef.clear();
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], MyNgIfDirective.prototype, "appMyNgIf", null);
    MyNgIfDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appMyNgIf]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]])
    ], MyNgIfDirective);
    return MyNgIfDirective;
}());



/***/ }),

/***/ "./src/app/post/post.component.css":
/*!*****************************************!*\
  !*** ./src/app/post/post.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/post/post.component.html":
/*!******************************************!*\
  !*** ./src/app/post/post.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"blog-post\">\n  <h2 class=\"blog-post-title\">{{post.title}}</h2>\n  <p>{{post.body}}</p>\n  <hr>\n</div>\n"

/***/ }),

/***/ "./src/app/post/post.component.ts":
/*!****************************************!*\
  !*** ./src/app/post/post.component.ts ***!
  \****************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostComponent = /** @class */ (function () {
    function PostComponent(route) {
        var _this = this;
        this.route = route;
        this.id = 0;
        this.post = {};
        this.route.params.subscribe(function (res) { return _this.id = res.id; });
        fetch("https://jsonplaceholder.typicode.com/posts/" + this.id)
            .then(function (res) { return res.json(); })
            .then(function (data) { return _this.post = data; })
            .catch(function (err) { return console.log('err'); });
    }
    PostComponent.prototype.ngOnInit = function () {
    };
    PostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.component.html */ "./src/app/post/post.component.html"),
            styles: [__webpack_require__(/*! ./post.component.css */ "./src/app/post/post.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/posts/posts.component.css":
/*!*******************************************!*\
  !*** ./src/app/posts/posts.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/posts/posts.component.html":
/*!********************************************!*\
  !*** ./src/app/posts/posts.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"blog-post\" *ngFor=\"let post of posts \">\n  <h2 class=\"blog-post-title\"><a [routerLink]=\"[post.id]\">{{post.title}} </a></h2>\n  <p>{{post.body}}</p>\n  <hr>\n</div>"

/***/ }),

/***/ "./src/app/posts/posts.component.ts":
/*!******************************************!*\
  !*** ./src/app/posts/posts.component.ts ***!
  \******************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PostsComponent = /** @class */ (function () {
    function PostsComponent() {
        var _this = this;
        this.posts = [];
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(function (res) { return res.json(); })
            .then(function (data) { return _this.posts = data; })
            .catch(function (err) { return console.log('err'); });
    }
    PostsComponent.prototype.ngOnInit = function () {
    };
    PostsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-posts',
            template: __webpack_require__(/*! ./posts.component.html */ "./src/app/posts/posts.component.html"),
            styles: [__webpack_require__(/*! ./posts.component.css */ "./src/app/posts/posts.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/pricing/pricing.component.css":
/*!***********************************************!*\
  !*** ./src/app/pricing/pricing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pricing/pricing.component.html":
/*!************************************************!*\
  !*** ./src/app/pricing/pricing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul id=\"data\" *ngFor=\"let r of result[0]\">\n  <li>{{r.title}}</li>\n  <li>{{r.body}}</li>\n</ul>\n\n<form class=\"needs-validation\" novalidate>\n  <div class=\"form-row\">\n    <div class=\"col-md-4 mb-3\">\n      <label for=\"validationTooltip01\">First name</label>\n      <input type=\"text\" class=\"form-control\" id=\"validationTooltip01\" placeholder=\"First name\" value=\"Mark\" required>\n      <div class=\"valid-tooltip\">\n        Looks good!\n      </div>\n    </div>\n    <div class=\"col-md-4 mb-3\">\n      <label for=\"validationTooltip02\">Last name</label>\n      <input type=\"text\" class=\"form-control\" id=\"validationTooltip02\" placeholder=\"Last name\" value=\"Otto\" required>\n      <div class=\"valid-tooltip\">\n        Looks good!\n      </div>\n    </div>\n    <div class=\"col-md-4 mb-3\">\n      <label for=\"validationTooltipUsername\">Username</label>\n      <div class=\"input-group\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\" id=\"validationTooltipUsernamePrepend\">@</span>\n        </div>\n        <input type=\"text\" class=\"form-control\" id=\"validationTooltipUsername\" placeholder=\"Username\" aria-describedby=\"validationTooltipUsernamePrepend\"\n          required>\n        <div class=\"invalid-tooltip\">\n          Please choose a unique and valid username.\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-row\">\n    <div class=\"col-md-6 mb-3\">\n      <label for=\"validationTooltip03\">City</label>\n      <input type=\"text\" class=\"form-control\" id=\"validationTooltip03\" placeholder=\"City\" required>\n      <div class=\"invalid-tooltip\">\n        Please provide a valid city.\n      </div>\n    </div>\n    <div class=\"col-md-3 mb-3\">\n      <label for=\"validationTooltip04\">State</label>\n      <input type=\"text\" class=\"form-control\" id=\"validationTooltip04\" placeholder=\"State\" required>\n      <div class=\"invalid-tooltip\">\n        Please provide a valid state.\n      </div>\n    </div>\n    <div class=\"col-md-3 mb-3\">\n      <label for=\"validationTooltip05\">Zip</label>\n      <input type=\"text\" class=\"form-control\" id=\"validationTooltip05\" placeholder=\"Zip\" required>\n      <div class=\"invalid-tooltip\">\n        Please provide a valid zip.\n      </div>\n    </div>\n  </div>\n  <button class=\"btn btn-primary\" type=\"submit\">Submit form</button>\n</form>"

/***/ }),

/***/ "./src/app/pricing/pricing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pricing/pricing.component.ts ***!
  \**********************************************/
/*! exports provided: PricingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingComponent", function() { return PricingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fetch_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fetch-data.service */ "./src/app/fetch-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PricingComponent = /** @class */ (function () {
    function PricingComponent(_fetchData) {
        this._fetchData = _fetchData;
    }
    PricingComponent.prototype.ngOnInit = function () {
        this.result = this._fetchData.data;
    };
    PricingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pricing',
            template: __webpack_require__(/*! ./pricing.component.html */ "./src/app/pricing/pricing.component.html"),
            styles: [__webpack_require__(/*! ./pricing.component.css */ "./src/app/pricing/pricing.component.css")]
        }),
        __metadata("design:paramtypes", [_fetch_data_service__WEBPACK_IMPORTED_MODULE_1__["FetchDataService"]])
    ], PricingComponent);
    return PricingComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"list-group\">\n  <button type=\"button\" class=\"list-group-item list-group-item-action active\">\n    Cras justo odio\n  </button>\n  <button type=\"button\" class=\"list-group-item list-group-item-action\">Dapibus ac facilisis in</button>\n  <button type=\"button\" class=\"list-group-item list-group-item-action\">Morbi leo risus</button>\n  <button type=\"button\" class=\"list-group-item list-group-item-action\">Porta ac consectetur ac</button>\n  <button type=\"button\" class=\"list-group-item list-group-item-action\" disabled>Vestibulum at eros</button>\n</div>"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\uzairs\Desktop\projects\test-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map