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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_clients_clients_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/clients/clients.component */ "./src/app/components/clients/clients.component.ts");
/* harmony import */ var _components_vendors_vendors_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/vendors/vendors.component */ "./src/app/components/vendors/vendors.component.ts");
/* harmony import */ var _components_add_client_add_client_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/add-client/add-client.component */ "./src/app/components/add-client/add-client.component.ts");
/* harmony import */ var _components_client_details_client_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/client-details/client-details.component */ "./src/app/components/client-details/client-details.component.ts");
/* harmony import */ var _components_edit_client_edit_client_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/edit-client/edit-client.component */ "./src/app/components/edit-client/edit-client.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _components_new_user_new_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/new-user/new-user.component */ "./src/app/components/new-user/new-user.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");













var routes = [
    { path: '', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'clients', component: _components_clients_clients_component__WEBPACK_IMPORTED_MODULE_4__["ClientsComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'vendors', component: _components_vendors_vendors_component__WEBPACK_IMPORTED_MODULE_5__["VendorsComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'client/add', component: _components_add_client_add_client_component__WEBPACK_IMPORTED_MODULE_6__["AddClientComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'client/:id', component: _components_client_details_client_details_component__WEBPACK_IMPORTED_MODULE_7__["ClientDetailsComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'clients/client/:id', component: _components_client_details_client_details_component__WEBPACK_IMPORTED_MODULE_7__["ClientDetailsComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'client/edit/:id', component: _components_edit_client_edit_client_component__WEBPACK_IMPORTED_MODULE_8__["EditClientComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
    { path: 'new/user', component: _components_new_user_new_user_component__WEBPACK_IMPORTED_MODULE_11__["NewUserComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: '**', component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ibroking';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_Forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/Forms */ "./node_modules/@angular/Forms/fesm5/forms.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_clients_clients_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/clients/clients.component */ "./src/app/components/clients/clients.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_vendors_vendors_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/vendors/vendors.component */ "./src/app/components/vendors/vendors.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_add_client_add_client_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/add-client/add-client.component */ "./src/app/components/add-client/add-client.component.ts");
/* harmony import */ var _components_client_details_client_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/client-details/client-details.component */ "./src/app/components/client-details/client-details.component.ts");
/* harmony import */ var _components_edit_client_edit_client_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/edit-client/edit-client.component */ "./src/app/components/edit-client/edit-client.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/client.service */ "./src/app/services/client.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _components_new_user_new_user_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/new-user/new-user.component */ "./src/app/components/new-user/new-user.component.ts");

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                _components_clients_clients_component__WEBPACK_IMPORTED_MODULE_11__["ClientsComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
                _components_vendors_vendors_component__WEBPACK_IMPORTED_MODULE_13__["VendorsComponent"],
                _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_15__["SidebarComponent"],
                _components_add_client_add_client_component__WEBPACK_IMPORTED_MODULE_16__["AddClientComponent"],
                _components_client_details_client_details_component__WEBPACK_IMPORTED_MODULE_17__["ClientDetailsComponent"],
                _components_edit_client_edit_client_component__WEBPACK_IMPORTED_MODULE_18__["EditClientComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"],
                _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_20__["NotFoundComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_21__["RegisterComponent"],
                _components_new_user_new_user_component__WEBPACK_IMPORTED_MODULE_24__["NewUserComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_Forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesModule"].forRoot(),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebase, 'ibroking'),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthModule"]
            ],
            providers: [_services_client_service__WEBPACK_IMPORTED_MODULE_22__["ClientService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_23__["AuthService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add-client/add-client.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/add-client/add-client.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLWNsaWVudC9hZGQtY2xpZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/add-client/add-client.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/add-client/add-client.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-6\">\n      <a routerLink=\"/clients\" class=\"btn btn-link\">\n        <i class=\"fa fa-arrow-circle-o-left\"></i> Back to Clients\n      </a>\n    </div>\n    <div class=\"col-md-6\">\n  \n    </div>\n  </div>\n  \n  <div class=\"card\">\n    <div class=\"card-header\">\n      Add Client\n    </div>\n    <div class=\"card-body\">\n      <form #clientForm=\"ngForm\" (ngSubmit)=\"onSubmit(clientForm)\">\n        <div class=\"form-group\">\n          <label for=\"firstName\">First Name</label>\n          <input \n            type=\"text\"\n            class=\"form-control\"\n            name=\"firstName\"\n            #clientFirstName=\"ngModel\"\n            [ngClass]=\"{'is-invalid': clientFirstName.errors && clientFirstName.touched}\"\n            [(ngModel)]=\"client.firstName\"\n            minlength=\"2\"\n            required\n          >\n  \n          <div [hidden]=\"!clientFirstName.errors?.required\" class=\"invalid-feedback\">\n            First name required\n          </div>\n  \n          <div [hidden]=\"!clientFirstName.errors?.min-length\" class=\"invalid-feedback\">\n              Must be at least 2 characters\n          </div>\n        </div>\n  \n        <div class=\"form-group\">\n            <label for=\"lastName\">Last Name</label>\n            <input \n              type=\"text\"\n              class=\"form-control\"\n              name=\"lastName\"\n              #clientLastName=\"ngModel\"\n              [ngClass]=\"{'is-invalid': clientLastName.errors && clientLastName.touched}\"\n              [(ngModel)]=\"client.lastName\"\n              minlength=\"2\"\n              required\n            >\n    \n            <div [hidden]=\"!clientLastName.errors?.required\" class=\"invalid-feedback\">\n              Last name required\n            </div>\n    \n            <div [hidden]=\"!clientLastName.errors?.min-length\" class=\"invalid-feedback\">\n                Must be at least 2 characters\n            </div>\n          </div>\n  \n          <div class=\"form-group\">\n              <label for=\"email\">Email</label>\n              <input \n                type=\"text\"\n                class=\"form-control\"\n                name=\"email\"\n                #clientEmail=\"ngModel\"\n                [ngClass]=\"{'is-invalid': clientEmail.errors && clientEmail.touched}\"\n                [(ngModel)]=\"client.email\"\n                pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\n                required\n              >\n      \n              <div [hidden]=\"!clientEmail.errors?.required\" class=\"invalid-feedback\">\n                Email required\n              </div>\n      \n              <div [hidden]=\"!clientEmail.errors?.pattern\" class=\"invalid-feedback\">\n                  Email is not valid\n              </div>\n          </div>\n  \n          <div class=\"form-group\">\n              <label for=\"phone\">Phone</label>\n              <input \n                type=\"text\"\n                class=\"form-control\"\n                name=\"phone\"\n                #clientPhone=\"ngModel\"\n                [ngClass]=\"{'is-invalid': clientPhone.errors && clientPhone.touched}\"\n                [(ngModel)]=\"client.phone\"\n                minlength=\"11\"\n                required\n              >\n      \n              <div [hidden]=\"!clientPhone.errors?.required\" class=\"invalid-feedback\">\n                Phone required\n              </div>\n      \n              <div [hidden]=\"!clientPhone.errors?.min-length\" class=\"invalid-feedback\">\n                  Must be at least 11 characters\n              </div>\n          </div>\n  \n          <div class=\"form-group\">\n              <label for=\"address\">Address</label>\n              <input \n                type=\"text\"\n                class=\"form-control\"\n                name=\"address\"\n                #clientAddress=\"ngModel\"\n                [ngClass]=\"{'is-invalid': clientAddress.errors && clientAddress.touched}\"\n                [(ngModel)]=\"client.address\"\n                minlength=\"2\"\n                required\n              >\n      \n              <div [hidden]=\"!clientAddress.errors?.required\" class=\"invalid-feedback\">\n               Address required\n              </div>\n      \n              <div [hidden]=\"!clientAddress.errors?.min-length\" class=\"invalid-feedback\">\n                  Must be at least 2 characters\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"city\">City</label>\n                <input \n                  type=\"text\"\n                  class=\"form-control\"\n                  name=\"city\"\n                  #clientCity=\"ngModel\"\n                  [ngClass]=\"{'is-invalid': clientCity.errors && clientCity.touched}\"\n                  [(ngModel)]=\"client.city\"\n                  minlength=\"2\"\n                  required\n                >\n        \n                <div [hidden]=\"!clientCity.errors?.required\" class=\"invalid-feedback\">\n                  City required\n                </div>\n        \n                <div [hidden]=\"!clientCity.errors?.min-length\" class=\"invalid-feedback\">\n                    Must be at least 2 characters\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                  <label for=\"state\">State</label>\n                  <input \n                    type=\"text\"\n                    class=\"form-control\"\n                    name=\"state\"\n                    #clientState=\"ngModel\"\n                    [ngClass]=\"{'is-invalid': clientState.errors && clientState.touched}\"\n                    [(ngModel)]=\"client.state\"\n                    minlength=\"2\"\n                    required\n                  >\n          \n                  <div [hidden]=\"!clientState.errors?.required\" class=\"invalid-feedback\">\n                    State required\n                  </div>\n          \n                  <div [hidden]=\"!clientState.errors?.min-length\" class=\"invalid-feedback\">\n                      Must be at least 2 characters\n                  </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"country\">Country</label>\n                    <input \n                      type=\"text\"\n                      class=\"form-control\"\n                      name=\"country\"\n                      #clientCountry=\"ngModel\"\n                      [ngClass]=\"{'is-invalid': clientCountry.errors && clientCountry.touched}\"\n                      [(ngModel)]=\"client.country\"\n                      minlength=\"2\"\n                      required\n                    >\n            \n                    <div [hidden]=\"!clientCountry.errors?.required\" class=\"invalid-feedback\">\n                      Country required\n                    </div>\n            \n                    <div [hidden]=\"!clientCountry.errors?.min-length\" class=\"invalid-feedback\">\n                        Must be at least 2 characters\n                    </div>\n                  </div>\n  \n          <input type=\"submit\" value=\"Submit\" class=\"btn btn-primary btn-block\">\n      </form>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/components/add-client/add-client.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/add-client/add-client.component.ts ***!
  \***************************************************************/
/*! exports provided: AddClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddClientComponent", function() { return AddClientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/client.service */ "./src/app/services/client.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AddClientComponent = /** @class */ (function () {
    function AddClientComponent(flashMessage, clientService, router) {
        this.flashMessage = flashMessage;
        this.clientService = clientService;
        this.router = router;
        this.client = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address: '',
            city: '',
            state: '',
            country: ''
        };
    }
    AddClientComponent.prototype.ngOnInit = function () {
    };
    AddClientComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        if (!valid) {
            // Show error
            this.flashMessage.show('Please fill out the form correctly', {
                cssClass: 'alert-danger', timeout: 4000
            });
        }
        else {
            // Add new client
            this.clientService.newClient(value);
            // Show message
            this.flashMessage.show('New cliend added', {
                cssClass: 'alert-success', timeout: 4000
            });
            // Redirect to dash
            this.router.navigate(['/']);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('clientForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddClientComponent.prototype, "form", void 0);
    AddClientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-client',
            template: __webpack_require__(/*! ./add-client.component.html */ "./src/app/components/add-client/add-client.component.html"),
            styles: [__webpack_require__(/*! ./add-client.component.css */ "./src/app/components/add-client/add-client.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _services_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AddClientComponent);
    return AddClientComponent;
}());



/***/ }),

/***/ "./src/app/components/client-details/client-details.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/client-details/client-details.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2xpZW50LWRldGFpbHMvY2xpZW50LWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/client-details/client-details.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/client-details/client-details.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-4 mb-4\">\n  <div class=\"col-md-6\">\n    <a routerLink=\"/clients\" class=\"btn btn-link\">\n      <i class=\"fa fa-arrow-circle-o-left\"></i> Back to Clients\n    </a>\n  </div>\n  <div class=\"col-md-6\">\n    <div class=\"btn-group pull-right\">\n      <a routerLink=\"/client/edit/{{ id }}\" class=\"btn btn-dark\">\n        Edit\n      </a>\n      <button (click)=\"onDeleteClick()\" class=\"btn btn-danger\">Delete</button>\n    </div>\n  </div>\n</div>\n<!-- <hr> -->\n<div *ngIf='client' class=\"card\">\n  <div class=\"card-header text-center\">\n      <h3>{{ client.firstName }} {{ client.lastName }} </h3>\n      <p class=\"lead\"> \n        {{ client.phone}} | {{ client.email}} <br>\n        <small>\n          {{ client.address }},  {{ client.city }}  {{ client.state }},  {{ client.country }}\n        </small>\n      </p>\n  </div>\n  \n  <div class=\"card-body\">\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\"> xxxxxxxxxx Details of the Client Policy will go here xxxxxxxxx </li>\n      <li class=\"list-group-item\"> xxxxxxxxxx Details of the Client Policy will go here xxxxxxxxx</li>\n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/client-details/client-details.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/client-details/client-details.component.ts ***!
  \***********************************************************************/
/*! exports provided: ClientDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDetailsComponent", function() { return ClientDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/client.service */ "./src/app/services/client.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);





var ClientDetailsComponent = /** @class */ (function () {
    function ClientDetailsComponent(clientService, router, route, flashMessage) {
        this.clientService = clientService;
        this.router = router;
        this.route = route;
        this.flashMessage = flashMessage;
    }
    ClientDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get id from url
        this.id = this.route.snapshot.params['id'];
        // Get client
        this.clientService.getClient(this.id).subscribe(function (client) {
            _this.client = client;
            // console.log(this.client);
        });
    };
    ClientDetailsComponent.prototype.onDeleteClick = function () {
        if (confirm('Are you sure?')) {
            this.clientService.deleteClient(this.client);
            this.flashMessage.show('Client removed', {
                cssClass: 'alert-success', timeout: 4000
            });
            this.router.navigate(['/']);
        }
    };
    ClientDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-client-details',
            template: __webpack_require__(/*! ./client-details.component.html */ "./src/app/components/client-details/client-details.component.html"),
            styles: [__webpack_require__(/*! ./client-details.component.css */ "./src/app/components/client-details/client-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_client_service__WEBPACK_IMPORTED_MODULE_2__["ClientService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"]])
    ], ClientDetailsComponent);
    return ClientDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/clients/clients.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/clients/clients.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2xpZW50cy9jbGllbnRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/clients/clients.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/clients/clients.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-4\">\n  <div class=\"col-md-10\">\n    <h2><i class=\"fa fa-users\"></i> Clients</h2>\n  </div>\n  <div class=\"col-md-2\">\n    <app-sidebar></app-sidebar>\n  </div>\n</div>\n\n  <table *ngIf=\"clients?.length > 0 ; else noClients\" class=\"table table-striped\">\n    <thead class=\"thead-inverse\">\n      <tr>\n        <th>Name</th>\n        <th>Email</th>\n        <th>Phone</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let client of clients\">\n        <td>{{ client.firstName }} {{ client.lastName }}</td>\n        <td>{{ client.email }}</td>\n        <td>{{ client.phone }}</td>\n        <td><a routerLink=\"client/{{ client.id }}\" class=\"btn btn-secondary btn-sm\"><i class=\"fa fa-arrow-circle-o-right\"></i>Details</a></td>\n      </tr>\n    </tbody>\n  </table>\n  \n  <ng-template #noClients>\n    <hr>\n    <h5>There are no clients in the system</h5>\n  </ng-template>"

/***/ }),

/***/ "./src/app/components/clients/clients.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/clients/clients.component.ts ***!
  \*********************************************************/
/*! exports provided: ClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsComponent", function() { return ClientsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/client.service */ "./src/app/services/client.service.ts");



var ClientsComponent = /** @class */ (function () {
    function ClientsComponent(clientService) {
        this.clientService = clientService;
    }
    ClientsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clientService.getClients().subscribe(function (clients) { return _this.clients = clients; });
    };
    ClientsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-clients',
            template: __webpack_require__(/*! ./clients.component.html */ "./src/app/components/clients/clients.component.html"),
            styles: [__webpack_require__(/*! ./clients.component.css */ "./src/app/components/clients/clients.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_client_service__WEBPACK_IMPORTED_MODULE_2__["ClientService"]])
    ], ClientsComponent);
    return ClientsComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\r\n    margin: 20px 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93IHtcclxuICAgIG1hcmdpbjogMjBweCAwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"card-deck text-center\">\n    <div class=\"card text-white bg-secondary mb-3\" style=\"max-width: 18rem;\">\n        <div class=\"card-body\">\n            <a routerLink=\"/clients\" class=\"text-light\">\n                <i class=\"fa fa-users fa-3x\"></i>\n                <h5 class=\"card-title mt-3\">Clients</h5>\n            </a>\n        </div>\n    </div>\n\n    <div class=\"card text-white bg-secondary mb-3\" style=\"max-width: 18rem;\">\n        <div class=\"card-body\">\n            <a routerLink=\"/\" class=\"text-light\">\n                <i class=\"fa fa-building fa-3x\"></i>\n                <h5 class=\"card-title text-center mt-3\">Vendors</h5>\n            </a>\n        </div>\n    </div>\n    \n    <div class=\"card text-white bg-secondary mb-3\" style=\"max-width: 18rem;\">\n        <div class=\"card-body\">\n                <i class=\"fa fa-money fa-3x\"></i>\n            <h5 class=\"card-title text-center mt-3\">Quotation</h5>\n        </div>\n    </div>    \n</div>\n\n<div class=\"card-deck text-center\">\n    <div class=\"card text-white bg-secondary mb-3\" style=\"max-width: 18rem;\">\n        <div class=\"card-body\">\n                <i class=\"fa fa-file fa-3x\"></i>\n            <h5 class=\"card-title text-center mt-3\">Policies</h5>\n        </div>\n    </div>\n\n    <div class=\"card text-white bg-secondary mb-3\" style=\"max-width: 18rem;\">\n        <div class=\"card-body\">\n                <i class=\"fa fa-clipboard fa-3x\"></i>\n            <h5 class=\"card-title text-center mt-3\">Claims</h5>\n        </div>\n    </div>\n    \n    <div class=\"card text-white bg-danger mb-3\" style=\"max-width: 18rem;\">\n        <div class=\"card-body\">\n            <a routerLink=\"/users\" class=\"text-light\">\n                <i class=\"fa fa-users fa-3x\"></i>\n                <h5 class=\"card-title mt-3\">Users</h5>\n            </a>\n        </div>\n    </div>    \n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/edit-client/edit-client.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/edit-client/edit-client.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdC1jbGllbnQvZWRpdC1jbGllbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/edit-client/edit-client.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/edit-client/edit-client.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-6\">\n      <a routerLink=\"/client/{{ id }}\" class=\"btn btn-link\">\n        <i class=\"fa fa-arrow-circle-o-left\"></i> Back to Client\n      </a>\n    </div>\n    <div class=\"col-md-6\">\n  \n    </div>\n  </div>\n  \n  <div class=\"card\">\n    <div class=\"card-header\">\n      Edit Client\n    </div>\n    <div class=\"card-body\">\n      <form #clientForm=\"ngForm\" (ngSubmit)=\"onSubmit(clientForm)\">\n        <div class=\"form-group\">\n          <label for=\"firstName\">First Name</label>\n          <input \n            type=\"text\"\n            class=\"form-control\"\n            name=\"firstName\"\n            #clientFirstName=\"ngModel\"\n            [ngClass]=\"{'is-invalid': clientFirstName.errors && clientFirstName.touched}\"\n            [(ngModel)]=\"client.firstName\"\n            minlength=\"2\"\n            required\n          >\n  \n          <div [hidden]=\"!clientFirstName.errors?.required\" class=\"invalid-feedback\">\n            First name required\n          </div>\n  \n          <div [hidden]=\"!clientFirstName.errors?.min-length\" class=\"invalid-feedback\">\n              Must be at least 2 characters\n          </div>\n        </div>\n  \n        <div class=\"form-group\">\n            <label for=\"lastName\">Last Name</label>\n            <input \n              type=\"text\"\n              class=\"form-control\"\n              name=\"lastName\"\n              #clientLastName=\"ngModel\"\n              [ngClass]=\"{'is-invalid': clientLastName.errors && clientLastName.touched}\"\n              [(ngModel)]=\"client.lastName\"\n              minlength=\"2\"\n              required\n            >\n    \n            <div [hidden]=\"!clientLastName.errors?.required\" class=\"invalid-feedback\">\n              Last name required\n            </div>\n    \n            <div [hidden]=\"!clientLastName.errors?.min-length\" class=\"invalid-feedback\">\n                Must be at least 2 characters\n            </div>\n          </div>\n  \n          <div class=\"form-group\">\n              <label for=\"email\">Email</label>\n              <input \n                type=\"text\"\n                class=\"form-control\"\n                name=\"email\"\n                #clientEmail=\"ngModel\"\n                [ngClass]=\"{'is-invalid': clientEmail.errors && clientEmail.touched}\"\n                [(ngModel)]=\"client.email\"\n                pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\n                required\n              >\n      \n              <div [hidden]=\"!clientEmail.errors?.required\" class=\"invalid-feedback\">\n                Email required\n              </div>\n      \n              <div [hidden]=\"!clientEmail.errors?.pattern\" class=\"invalid-feedback\">\n                  Email is not valid\n              </div>\n          </div>\n  \n          <div class=\"form-group\">\n              <label for=\"phone\">Phone</label>\n              <input \n                type=\"text\"\n                class=\"form-control\"\n                name=\"phone\"\n                #clientPhone=\"ngModel\"\n                [ngClass]=\"{'is-invalid': clientPhone.errors && clientPhone.touched}\"\n                [(ngModel)]=\"client.phone\"\n                minlength=\"11\"\n                required\n              >\n      \n              <div [hidden]=\"!clientPhone.errors?.required\" class=\"invalid-feedback\">\n                Phone required\n              </div>\n      \n              <div [hidden]=\"!clientPhone.errors?.min-length\" class=\"invalid-feedback\">\n                  Must be at least 11 characters\n              </div>\n          </div>\n  \n          <div class=\"form-group\">\n              <label for=\"address\">Address</label>\n              <input \n                type=\"text\"\n                class=\"form-control\"\n                name=\"address\"\n                #clientAddress=\"ngModel\"\n                [ngClass]=\"{'is-invalid': clientAddress.errors && clientAddress.touched}\"\n                [(ngModel)]=\"client.address\"\n                minlength=\"2\"\n                required\n              >\n      \n              <div [hidden]=\"!clientAddress.errors?.required\" class=\"invalid-feedback\">\n               Address required\n              </div>\n      \n              <div [hidden]=\"!clientAddress.errors?.min-length\" class=\"invalid-feedback\">\n                  Must be at least 2 characters\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"city\">City</label>\n                <input \n                  type=\"text\"\n                  class=\"form-control\"\n                  name=\"city\"\n                  #clientCity=\"ngModel\"\n                  [ngClass]=\"{'is-invalid': clientCity.errors && clientCity.touched}\"\n                  [(ngModel)]=\"client.city\"\n                  minlength=\"2\"\n                  required\n                >\n        \n                <div [hidden]=\"!clientCity.errors?.required\" class=\"invalid-feedback\">\n                  City required\n                </div>\n        \n                <div [hidden]=\"!clientCity.errors?.min-length\" class=\"invalid-feedback\">\n                    Must be at least 2 characters\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                  <label for=\"state\">State</label>\n                  <input \n                    type=\"text\"\n                    class=\"form-control\"\n                    name=\"state\"\n                    #clientState=\"ngModel\"\n                    [ngClass]=\"{'is-invalid': clientState.errors && clientState.touched}\"\n                    [(ngModel)]=\"client.state\"\n                    minlength=\"2\"\n                    required\n                  >\n          \n                  <div [hidden]=\"!clientState.errors?.required\" class=\"invalid-feedback\">\n                    State required\n                  </div>\n          \n                  <div [hidden]=\"!clientState.errors?.min-length\" class=\"invalid-feedback\">\n                      Must be at least 2 characters\n                  </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"country\">Country</label>\n                    <input \n                      type=\"text\"\n                      class=\"form-control\"\n                      name=\"country\"\n                      #clientCountry=\"ngModel\"\n                      [ngClass]=\"{'is-invalid': clientCountry.errors && clientCountry.touched}\"\n                      [(ngModel)]=\"client.country\"\n                      minlength=\"2\"\n                      required\n                    >\n            \n                    <div [hidden]=\"!clientCountry.errors?.required\" class=\"invalid-feedback\">\n                      Country required\n                    </div>\n            \n                    <div [hidden]=\"!clientCountry.errors?.min-length\" class=\"invalid-feedback\">\n                        Must be at least 2 characters\n                    </div>\n                  </div>\n  \n          <input type=\"submit\" value=\"Submit\" class=\"btn btn-primary btn-block\">\n      </form>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/components/edit-client/edit-client.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/edit-client/edit-client.component.ts ***!
  \*****************************************************************/
/*! exports provided: EditClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditClientComponent", function() { return EditClientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/client.service */ "./src/app/services/client.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);





var EditClientComponent = /** @class */ (function () {
    function EditClientComponent(clientService, router, route, flashMessage) {
        this.clientService = clientService;
        this.router = router;
        this.route = route;
        this.flashMessage = flashMessage;
        this.client = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address: '',
            city: '',
            state: '',
            country: ''
        };
    }
    EditClientComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get id from url
        this.id = this.route.snapshot.params['id'];
        // Get client
        this.clientService.getClient(this.id).subscribe(function (client) { return _this.client = client; });
    };
    EditClientComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        if (!valid) {
            this.flashMessage.show('Please fill out the form correctly', { cssClass: 'alert-danger', timeout: 4000 });
        }
        else {
            // Add id to client
            value.id = this.id;
            // Update client
            this.clientService.updateClient(value);
            this.flashMessage.show('Client updated', { cssClass: 'alert-success', timeout: 4000 });
            this.router.navigate(['/client/' + this.id]);
        }
    };
    EditClientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-client',
            template: __webpack_require__(/*! ./edit-client.component.html */ "./src/app/components/edit-client/edit-client.component.html"),
            styles: [__webpack_require__(/*! ./edit-client.component.css */ "./src/app/components/edit-client/edit-client.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_client_service__WEBPACK_IMPORTED_MODULE_2__["ClientService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"]])
    ], EditClientComponent);
    return EditClientComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-6 mx-auto\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <h1 class=\"text-center pb-4 pt-3\">\n            <span class=\"text-primary\"><i class=\"fa fa-lock\"></i> iBroking Panel</span> Login\n          </h1>\n          <form (submit)=\"onSubmit()\">\n            <div class=\"form-group\">\n              <label for=\"email\">Email</label>\n              <input type=\"email\" name=\"email\" [(ngModel)]=\"email\" class=\"form-control\" required>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"password\">Password</label>\n              <input type=\"password\" name=\"password\" [(ngModel)]=\"password\" class=\"form-control\" required>\n            </div>\n            <input type=\"submit\" value=\"Login\" class=\"btn btn-primary btn-block\">\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAuth().subscribe(function (auth) {
            if (auth) {
                _this.router.navigate(['/']);
            }
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.authService.login(this.email, this.password)
            .then(function (res) {
            _this.flashMessage.show('You are now logged in', {
                cssClass: 'alert-success', timeout: 4000
            });
            _this.router.navigate(['/']);
        })
            .catch(function (err) {
            _this.flashMessage.show(err.message, {
                cssClass: 'alert-danger', timeout: 4000
            });
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar{\r\n    background:rgb(124, 123, 119);\r\n}\r\n\r\n.navbar a {\r\n    color: #fff;\r\n    /* font-weight: bold; */\r\n}\r\n\r\nimg{\r\n    height: 40px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhcntcclxuICAgIGJhY2tncm91bmQ6cmdiKDEyNCwgMTIzLCAxMTkpO1xyXG59XHJcblxyXG4ubmF2YmFyIGEge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICAvKiBmb250LXdlaWdodDogYm9sZDsgKi9cclxufVxyXG5cclxuaW1ne1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light  mb-4\">\n    <div class=\"container\">\n        <a class=\"navbar-brand\" routerLink=\"/\" ><img src=\"../../../assets/kbc-logo.png\" alt=\"\"></a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n      \n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n          <ul class=\"navbar-nav mr-auto\">\n            <li *ngIf=\"isLoggedIn\" class=\"nav-item\">\n              <a routerLink=\"/\" class=\"nav-link\">Dashboard</a>\n            </li>\n          </ul>\n          <ul class=\"navbar-nav ml-auto\">\n            <li *ngIf=\"isLoggedIn\" class=\"nav-item\">\n              <a class=\"nav-link\" href=\"#\">{{ loggedInUser }} </a>\n            </li>\n            <!-- <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLink=\"/clients\">Clients </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLink=\"/vendors\">Vendors</a>\n            </li> -->\n            <li *ngIf=\"!isLoggedIn\"  class=\"nav-item\">\n              <a class=\"nav-link\" routerLink=\"/login\">Login</a>\n            </li>\n            <li *ngIf=\"isLoggedIn\"  class=\"nav-item\">\n              <a href=\"#\" class=\"nav-link\" (click)=\"onLogoutClick()\">Logout</a>\n            </li>\n          </ul>\n        </div>\n    </div>\n  </nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);





var NavbarComponent = /** @class */ (function () {
    // showRegister: boolean;
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAuth().subscribe(function (auth) {
            if (auth) {
                _this.isLoggedIn = true;
                _this.loggedInUser = auth.email;
            }
            else {
                _this.isLoggedIn = false;
            }
        });
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are now logged out', {
            cssClass: 'alert-success', timeout: 4000
        });
        this.router.navigate(['/login']);
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/new-user/new-user.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/new-user/new-user.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmV3LXVzZXIvbmV3LXVzZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/new-user/new-user.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/new-user/new-user.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6 mx-auto\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h1 class=\"text-center pb-4 pt-3\">\n          <span class=\"text-primary\">  </span> Create New User\n        </h1>\n        <form (submit)=\"onSubmit()\">\n          <div class=\"form-group\">\n            <label for=\"email\">Email</label>\n            <input type=\"email\" name=\"email\" [(ngModel)]=\"email\" class=\"form-control\" required>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" name=\"password\" [(ngModel)]=\"password\" class=\"form-control\" required>\n          </div>\n          <input type=\"submit\" value=\"Create User\" class=\"btn btn-primary btn-block\">\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/new-user/new-user.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/new-user/new-user.component.ts ***!
  \***********************************************************/
/*! exports provided: NewUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewUserComponent", function() { return NewUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var NewUserComponent = /** @class */ (function () {
    function NewUserComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NewUserComponent.prototype.ngOnInit = function () {
    };
    // onSubmit() {
    //   this.authService.newUser(this.email, this.password)
    //     .then(res => {
    //       this.flashMessage.show('You have created a new user', {
    //         cssClass: 'alert-success', timeout: 4000
    //       });
    //       this.router.navigate(['/']);
    //     })
    //     .catch(err => {
    //       this.flashMessage.show(err.message, {
    //         cssClass: 'alert-danger', timeout: 4000
    //       });
    //     });
    // }
    NewUserComponent.prototype.onSubmit = function () {
        this.authService.newUser(this.email, this.password);
        this.flashMessage.show('New user created successfully', {
            cssClass: 'alert-success', timeout: 4000
        });
        this.router.navigate(['/']);
    };
    NewUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-user',
            template: __webpack_require__(/*! ./new-user.component.html */ "./src/app/components/new-user/new-user.component.html"),
            styles: [__webpack_require__(/*! ./new-user.component.css */ "./src/app/components/new-user/new-user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], NewUserComponent);
    return NewUserComponent;
}());



/***/ }),

/***/ "./src/app/components/not-found/not-found.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/components/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/components/not-found/not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  register works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a routerLink='/client/add' class=\"btn btn-success btn-block mt-4\">\n  <i class=\"fa fa-plus\"></i> New Client\n</a>\n"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/components/sidebar/sidebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/components/vendors/vendors.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/vendors/vendors.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmVuZG9ycy92ZW5kb3JzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/vendors/vendors.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/vendors/vendors.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  vendors works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/vendors/vendors.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/vendors/vendors.component.ts ***!
  \*********************************************************/
/*! exports provided: VendorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorsComponent", function() { return VendorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VendorsComponent = /** @class */ (function () {
    function VendorsComponent() {
    }
    VendorsComponent.prototype.ngOnInit = function () {
    };
    VendorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vendors',
            template: __webpack_require__(/*! ./vendors.component.html */ "./src/app/components/vendors/vendors.component.html"),
            styles: [__webpack_require__(/*! ./vendors.component.css */ "./src/app/components/vendors/vendors.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VendorsComponent);
    return VendorsComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, afAuth) {
        this.router = router;
        this.afAuth = afAuth;
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        return this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (auth) {
            if (!auth) {
                _this.router.navigate(['/login']);
                return false;
            }
            else {
                return true;
            }
        }));
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






var AuthService = /** @class */ (function () {
    function AuthService(afAuth) {
        this.afAuth = afAuth;
    }
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.signInWithEmailAndPassword(email, password)
                .then(function (userData) { return resolve(userData); }, function (err) { return reject(err); });
        });
    };
    // *** The Auth Service should not be used to create a new user
    // newUser(email: string, password: string){
    //   return new Promise((resolve, reject) => {
    //     this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    //     .then(userData => resolve(userData),
    //     err => reject(err))
    //   });
    // }
    AuthService.prototype.newUser = function (email, password) {
        var secondaryApp = Object(firebase__WEBPACK_IMPORTED_MODULE_4__["initializeApp"])(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebase, "Secondary");
        secondaryApp.auth().createUserWithEmailAndPassword(email, password);
        secondaryApp.auth().signOut();
    };
    AuthService.prototype.getAuth = function () {
        return this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (auth) { return auth; }));
    };
    AuthService.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/client.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/client.service.ts ***!
  \********************************************/
/*! exports provided: ClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientService", function() { return ClientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var ClientService = /** @class */ (function () {
    function ClientService(afs) {
        this.afs = afs;
        this.clientsCollection = this.afs.collection('clients', function (ref) { return ref.orderBy('lastName', 'asc'); });
    }
    ClientService.prototype.getClients = function () {
        // Get cients with the id
        this.clients = this.clientsCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            data.id = a.payload.doc.id;
            return data;
        }); }));
        return this.clients;
    };
    ClientService.prototype.newClient = function (client) {
        this.clientsCollection.add(client);
    };
    ClientService.prototype.getClient = function (id) {
        this.clientDoc = this.afs.doc("clients/" + id);
        this.client = this.clientDoc.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) {
            if (action.payload.exists === false) {
                return null;
            }
            else {
                var data = action.payload.data();
                data.id = action.payload.id;
                return data;
            }
        }));
        return this.client;
    };
    ClientService.prototype.updateClient = function (client) {
        this.clientDoc = this.afs.doc("clients/" + client.id);
        this.clientDoc.update(client);
    };
    ClientService.prototype.deleteClient = function (client) {
        this.clientDoc = this.afs.doc("clients/" + client.id);
        this.clientDoc.delete();
    };
    ClientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], ClientService);
    return ClientService;
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
    production: false,
    firebase: {
        apiKey: "AIzaSyC26UbAghDAYEHIGJpOZQePgOWtStV_tpg",
        authDomain: "ibroking-6919b.firebaseapp.com",
        databaseURL: "https://ibroking-6919b.firebaseio.com",
        projectId: "ibroking-6919b",
        storageBucket: "",
        messagingSenderId: "232215223548"
    }
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

module.exports = __webpack_require__(/*! C:\Users\Turnquest\Desktop\projects\ibroking\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map