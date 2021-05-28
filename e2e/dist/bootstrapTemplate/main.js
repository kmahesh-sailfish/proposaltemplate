(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\amendate\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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

/***/ "Jjks":
/*!**********************************************!*\
  !*** ./src/app/sidenav/sidenav.component.ts ***!
  \**********************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main/main.component */ "wlho");


class SidenavComponent {
    constructor() { }
    ngOnInit() {
    }
}
SidenavComponent.ɵfac = function SidenavComponent_Factory(t) { return new (t || SidenavComponent)(); };
SidenavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidenavComponent, selectors: [["app-sidenav"]], decls: 46, vars: 0, consts: [[1, "wrapper", "mt-5"], ["id", "sidebar"], [1, "list-unstyled", "components"], [1, "active"], ["href", "#homeSubmenu", "data-toggle", "collapse", "aria-expanded", "false", 1, "dropdown-toggle"], [1, "fas", "fa-home"], ["id", "homeSubmenu", 1, "collapse", "list-unstyled"], ["href", "#"], ["href", "#pageSubmenu", "data-toggle", "collapse", "aria-expanded", "false", 1, "dropdown-toggle"], [1, "fas", "fa-copy"], ["id", "pageSubmenu", 1, "collapse", "list-unstyled"], ["href", "#preferenceSubmenu", "data-toggle", "collapse", "aria-expanded", "false", 1, "dropdown-toggle"], [1, "fas", "fa-image"], ["id", "preferenceSubmenu", 1, "collapse", "list-unstyled"], ["href", "#AdminSubmenu", "data-toggle", "collapse", "aria-expanded", "false", 1, "dropdown-toggle"], [1, "fas", "fa-question"], ["id", "AdminSubmenu", 1, "collapse", "list-unstyled"], ["id", "content"]], template: function SidenavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Proposal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Archive Proposal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Package Multiple Docs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Delegations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Authorize Delegation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Library ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "CTM Library");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Preferences ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "User Preference");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Admin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Administration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "app-main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"]], styles: ["@import \"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700\";\n\nbody[_ngcontent-%COMP%] {\r\n    font-family: 'Poppins', sans-serif;\r\n    background: #fafafa;\r\n}\np[_ngcontent-%COMP%] {\r\n    font-family: 'Poppins', sans-serif;\r\n    font-size: 1.1em;\r\n    font-weight: 300;\r\n    line-height: 1.7em;\r\n    color: #999;\r\n}\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:focus {\r\n    color: inherit;\r\n    text-decoration: none;\r\n    transition: all 0.3s;\r\n}\n.navbar[_ngcontent-%COMP%] {\r\n    padding: 15px 10px;\r\n    background: #fff;\r\n    border: none;\r\n    border-radius: 0;\r\n    margin-bottom: 40px;\r\n    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\r\n}\n.navbar-btn[_ngcontent-%COMP%] {\r\n    box-shadow: none;\r\n    outline: none !important;\r\n    border: none;\r\n}\n.line[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 1px;\r\n    border-bottom: 1px dashed #ddd;\r\n    margin: 40px 0;\r\n}\ni[_ngcontent-%COMP%], span[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n}\n\n.wrapper[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: stretch;\r\n}\n#sidebar[_ngcontent-%COMP%] {\r\n    min-width: 250px;\r\n    max-width: 250px;\r\n    background: #7386D5;\r\n    color: #fff;\r\n    transition: all 0.3s;\r\n}\n#sidebar.active[_ngcontent-%COMP%] {\r\n    min-width: 80px;\r\n    max-width: 80px;\r\n    text-align: center;\r\n}\n#sidebar.active[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], #sidebar.active[_ngcontent-%COMP%]   .CTAs[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\n#sidebar.active[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\n#sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n}\n#sidebar.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    padding: 20px 10px;\r\n    text-align: center;\r\n    font-size: 0.85em;\r\n}\n#sidebar.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    margin-right: 0;\r\n    display: block;\r\n    font-size: 1.8em;\r\n    margin-bottom: 5px;\r\n}\n#sidebar.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    padding: 10px !important;\r\n}\n#sidebar.active[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after {\r\n    top: auto;\r\n    bottom: 10px;\r\n    right: 50%;\r\n    transform: translateX(50%);\r\n}\n#sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n    background: #6d7fcc;\r\n}\n#sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n    display: none;\r\n    font-size: 1.8em;\r\n}\n#sidebar[_ngcontent-%COMP%]   ul.components[_ngcontent-%COMP%] {\r\n    padding: 20px 0;\r\n    border-bottom: 1px solid #47748b;\r\n}\n#sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n    font-size: 1.1em;\r\n    display: block;\r\n}\n#sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color: #7386D5;\r\n    background: #fff;\r\n}\n#sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    margin-right: 10px;\r\n}\n#sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], a[aria-expanded=\"true\"][_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    background: #6d7fcc;\r\n}\na[data-toggle=\"collapse\"][_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\n.dropdown-toggle[_ngcontent-%COMP%]::after {\r\n    display: block;\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 20px;\r\n    transform: translateY(-50%);\r\n}\nul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    font-size: 0.9em !important;\r\n    padding-left: 30px !important;\r\n    background: #6d7fcc;\r\n}\nul.CTAs[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n}\nul.CTAs[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: 0.9em !important;\r\n    display: block;\r\n    border-radius: 5px;\r\n    margin-bottom: 5px;\r\n}\na.download[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    color: #7386D5;\r\n}\na.article[_ngcontent-%COMP%], a.article[_ngcontent-%COMP%]:hover {\r\n    background: #6d7fcc !important;\r\n    color: #fff !important;\r\n}\n\n#content[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding: 20px;\r\n    min-height: 100vh;\r\n    transition: all 0.3s;\r\n}\n\n@media (max-width: 768px) {\r\n    #sidebar[_ngcontent-%COMP%] {\r\n        min-width: 80px;\r\n        max-width: 80px;\r\n        text-align: center;\r\n        margin-left: -80px !important;\r\n    }\r\n    .dropdown-toggle[_ngcontent-%COMP%]::after {\r\n        top: auto;\r\n        bottom: 10px;\r\n        right: 50%;\r\n        transform: translateX(50%);\r\n    }\r\n    #sidebar.active[_ngcontent-%COMP%] {\r\n        margin-left: 0 !important;\r\n    }\r\n    #sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], #sidebar[_ngcontent-%COMP%]   .CTAs[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n    #sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n        display: block;\r\n    }\r\n    #sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        padding: 20px 10px;\r\n    }\r\n    #sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n        font-size: 0.85em;\r\n    }\r\n    #sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n        margin-right: 0;\r\n        display: block;\r\n    }\r\n    #sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        padding: 10px !important;\r\n    }\r\n    #sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n        font-size: 1.3em;\r\n    }\r\n    #sidebar[_ngcontent-%COMP%] {\r\n        margin-left: 0;\r\n    }\r\n    #sidebarCollapse[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,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UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0FBQ0oiLCJmaWxlIjoic2lkZW5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICAgIERFTU8gU1RZTEVcclxuKi9cclxuXHJcbkBpbXBvcnQgXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczozMDAsNDAwLDUwMCw2MDAsNzAwXCI7XHJcbmJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuN2VtO1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbn1cclxuXHJcbmEsXHJcbmE6aG92ZXIsXHJcbmE6Zm9jdXMge1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi5uYXZiYXItYnRuIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5saW5lIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNkZGQ7XHJcbiAgICBtYXJnaW46IDQwcHggMDtcclxufVxyXG5cclxuaSxcclxuc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgU0lERUJBUiBTVFlMRVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuLndyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG59XHJcblxyXG4jc2lkZWJhciB7XHJcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcclxuICAgIGJhY2tncm91bmQ6ICM3Mzg2RDU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4jc2lkZWJhci5hY3RpdmUge1xyXG4gICAgbWluLXdpZHRoOiA4MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA4MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jc2lkZWJhci5hY3RpdmUgLnNpZGViYXItaGVhZGVyIGgzLFxyXG4jc2lkZWJhci5hY3RpdmUgLkNUQXMge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuI3NpZGViYXIuYWN0aXZlIC5zaWRlYmFyLWhlYWRlciBzdHJvbmcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHVsIGxpIGEge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuI3NpZGViYXIuYWN0aXZlIHVsIGxpIGEge1xyXG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAwLjg1ZW07XHJcbn1cclxuXHJcbiNzaWRlYmFyLmFjdGl2ZSB1bCBsaSBhIGkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDEuOGVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4jc2lkZWJhci5hY3RpdmUgdWwgdWwgYSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNzaWRlYmFyLmFjdGl2ZSAuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XHJcbiAgICB0b3A6IGF1dG87XHJcbiAgICBib3R0b206IDEwcHg7XHJcbiAgICByaWdodDogNTAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xyXG59XHJcblxyXG4jc2lkZWJhciAuc2lkZWJhci1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICM2ZDdmY2M7XHJcbn1cclxuXHJcbiNzaWRlYmFyIC5zaWRlYmFyLWhlYWRlciBzdHJvbmcge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMS44ZW07XHJcbn1cclxuXHJcbiNzaWRlYmFyIHVsLmNvbXBvbmVudHMge1xyXG4gICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0Nzc0OGI7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHVsIGxpIGEge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuI3NpZGViYXIgdWwgbGkgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzczODZENTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHVsIGxpIGEgaSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHVsIGxpLmFjdGl2ZT5hLFxyXG5hW2FyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJdIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogIzZkN2ZjYztcclxufVxyXG5cclxuYVtkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcblxyXG51bCB1bCBhIHtcclxuICAgIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogIzZkN2ZjYztcclxufVxyXG5cclxudWwuQ1RBcyB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG51bC5DVEFzIGEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbmEuZG93bmxvYWQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGNvbG9yOiAjNzM4NkQ1O1xyXG59XHJcblxyXG5hLmFydGljbGUsXHJcbmEuYXJ0aWNsZTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNmQ3ZmNjICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIENPTlRFTlQgU1RZTEVcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbiNjb250ZW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgTUVESUFRVUVSSUVTXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICNzaWRlYmFyIHtcclxuICAgICAgICBtaW4td2lkdGg6IDgwcHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA4MHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTgwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcclxuICAgICAgICB0b3A6IGF1dG87XHJcbiAgICAgICAgYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIHJpZ2h0OiA1MCU7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XHJcbiAgICB9XHJcbiAgICAjc2lkZWJhci5hY3RpdmUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAjc2lkZWJhciAuc2lkZWJhci1oZWFkZXIgaDMsXHJcbiAgICAjc2lkZWJhciAuQ1RBcyB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgICNzaWRlYmFyIC5zaWRlYmFyLWhlYWRlciBzdHJvbmcge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgI3NpZGViYXIgdWwgbGkgYSB7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAxMHB4O1xyXG4gICAgfVxyXG4gICAgI3NpZGViYXIgdWwgbGkgYSBzcGFuIHtcclxuICAgICAgICBmb250LXNpemU6IDAuODVlbTtcclxuICAgIH1cclxuICAgICNzaWRlYmFyIHVsIGxpIGEgaSB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgI3NpZGViYXIgdWwgdWwgYSB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgI3NpZGViYXIgdWwgbGkgYSBpIHtcclxuICAgICAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgfVxyXG4gICAgI3NpZGViYXIge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgfVxyXG4gICAgI3NpZGViYXJDb2xsYXBzZSBzcGFuIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidenav/sidenav.component */ "Jjks");


class AppComponent {
    constructor() {
        this.title = 'bootstrapTemplate';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sidenav");
    } }, directives: [_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_1__["SidenavComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidenav/sidenav.component */ "Jjks");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/main.component */ "wlho");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_4__["SidenavComponent"],
        _main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModule"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "wlho":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");


class MainComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 232, vars: 0, consts: [[1, "dashboard-header"], [1, "navbar", "navbar-expand-lg", "bg-white", "fixed-top"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto", "navbar-right-top"], [1, "nav-item"], ["href", "#", 1, "nav-link"], [1, "nav-item", "dropdown", "notification"], ["href", "#", "id", "navbarDropdownMenuLink1", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "nav-icons"], [1, "fas", "fa-fw", "fa-bell"], [1, "dropdown-menu", "dropdown-menu-right", "notification-dropdown"], [1, "notification-title"], [1, "notification-list"], [1, "list-group"], ["href", "#", 1, "list-group-item", "list-group-item-action", "active"], [1, "notification-info"], [1, "notification-list-user-img"], ["src", "https://img.icons8.com/office/100/000000/administrator-female.png", "alt", "", 1, "user-avatar-md", "rounded-circle"], [1, "notification-list-user-block"], [1, "notification-list-user-name"], [1, "notification-date"], ["href", "#", 1, "list-group-item", "list-group-item-action"], ["src", "https://img.icons8.com/color/48/000000/administrator-female.png", "alt", "", 1, "user-avatar-md", "rounded-circle"], ["src", "https://img.icons8.com/color/100/000000/name.png", "alt", "", 1, "user-avatar-md", "rounded-circle"], [1, "list-footer"], ["href", "#"], [1, "nav-item", "dropdown", "nav-user"], ["href", "#", "id", "navbarDropdownMenuLink2", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "nav-user-img"], ["src", "https://img.icons8.com/dusk/100/000000/user-female-circle.png", "alt", "", 1, "user-avatar-md", "rounded-circle"], ["aria-labelledby", "navbarDropdownMenuLink2", 1, "dropdown-menu", "dropdown-menu-right", "nav-user-dropdown"], [1, "nav-user-info"], [1, "mb-0", "text-white", "nav-user-name"], [1, "status"], [1, "ml-2"], ["href", "#", 1, "dropdown-item"], [1, "fas", "fa-user", "mr-2"], [1, "fas", "fa-cog", "mr-2"], [1, "fas", "fa-power-off", "mr-2"], [1, "container-fluid", "p-3", "my-3", "mt-5", "border"], [1, "row"], [1, "col"], [1, "container", "p-3", "my-3", "mt-5"], [1, "form-group"], ["type", "text", "id", "usr", "placeholder", "search anything...", 1, "form-control", "form-control-lg"], [1, "col-sm-12"], [1, "card", "text-white", "bg-secondary", "mb-4"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "col-5"], [1, "col", "mt-3"], [1, "bs-example"], [1, "card"], [1, "card-header"], ["src", "https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png", "alt", "", 2, "width", "10%"], [1, "card-body", 2, "background", "cadetblue"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "WCF Amendment Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Create Proposal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Tools");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Resources");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Notification");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Jeremy Hukonah");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "accepted your invitation to join the team. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "2 min ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "John Sammy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "updated the email address ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "2 days ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Kioh Samso");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " is watching your main repository ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "2 min ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "View all notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h5", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Tikoha Samga");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Available");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Setting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Recent Uploads ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h5", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Proposal 20210429");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Last Modified: April-29-2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h5", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Proposal 20210401");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Last Modified: April-04-2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "h5", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Proposal 20210321");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "p", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Last Modified: March-21-2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "h5", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Proposal 20210304");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Last Modified: March-04-2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "h5", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Proposal 20210205");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Last Modified: Feb-05-2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "h5", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Proposal 202110421");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "p", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "h5", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Proposal 202110421");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "p", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "h5", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Proposal 202110421");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "p", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "h5", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Proposal 202110421");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "p", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "h5", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Proposal 202110421");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "p", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "h5", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "secondary card title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "p", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, " Create Proposal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "p", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "Get started by creating a new proposal from scrach ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, " Replicate Proposal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "p", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "Get started by creating a new proposal from scrach ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, " Active Proposal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "p", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "Get started by creating a new proposal from scrach ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, " Download Amendment Edit Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "p", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Get started by creating a new proposal from scrach ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, " Delegate Proposal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "p", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "Get started by creating a new proposal from scrach ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"]], styles: ["body[_ngcontent-%COMP%] {\r\n    background: #304FFE\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]:focus {\r\n    color           : #495057;\r\n    background-color: #fff;\r\n    border-color    : #80bdff;\r\n    outline         : 0;\r\n    box-shadow      : none !important\r\n}\r\n\r\n.dashboard-header[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%] {\r\n    padding           : 0px;\r\n    border-bottom     : 1px solid #e6e6f2;\r\n    box-shadow        : 0px 0px 28px 0px rgba(82, 63, 105, 0.13);\r\n    -webkit-transition: all 0.3s ease;\r\n    min-height        : 60px\r\n}\r\n\r\n.navbar-brand[_ngcontent-%COMP%] {\r\n    display       : inline-block;\r\n    margin-right  : 1rem;\r\n    line-height   : inherit;\r\n    white-space   : nowrap;\r\n    padding       : 11px 20px;\r\n    font-size     : 30px;\r\n    \r\n    font-weight   : 700;\r\n    color         : #007bff\r\n}\r\n\r\n.navbar-brand[_ngcontent-%COMP%]:hover {\r\n    color: #007bff\r\n}\r\n\r\n.navbar-right-top[_ngcontent-%COMP%] {}\r\n\r\n.navbar-right-top[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\r\n    border-right: 1px solid #e6e6f2\r\n}\r\n\r\n.navbar-right-top[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:last-child {\r\n    border: none\r\n}\r\n\r\n.navbar-right-top[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n    padding    : 13px 20px;\r\n    font-size  : 16px;\r\n    line-height: 2;\r\n    color      : #82849f\r\n}\r\n\r\n.top-search-bar[_ngcontent-%COMP%] {\r\n    padding-top  : 12px;\r\n    padding-right: 24px\r\n}\r\n\r\n.notification[_ngcontent-%COMP%] {}\r\n\r\n.notification-dropdown[_ngcontent-%COMP%] {\r\n    min-width: 320px\r\n}\r\n\r\n.notification-dropdown[_ngcontent-%COMP%], .connection-dropdown[_ngcontent-%COMP%], .nav-user-dropdown[_ngcontent-%COMP%] {\r\n    padding: 0px;\r\n    margin : 0px\r\n}\r\n\r\n.notification-title[_ngcontent-%COMP%] {\r\n    font-size       : 14px;\r\n    color           : #3d405c;\r\n    text-align      : center;\r\n    padding         : 8px 0px;\r\n    border-bottom   : 1px solid #e3e3e3;\r\n    line-height     : 1.5;\r\n    background-color: #fffffe\r\n}\r\n\r\n.notification-list[_ngcontent-%COMP%] {}\r\n\r\n.notification-list[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%] {\r\n    border-radius: 0px;\r\n    padding      : 12px;\r\n    margin-top   : -1px;\r\n    border-left  : transparent;\r\n    border-right : transparent\r\n}\r\n\r\n.notification-list[_ngcontent-%COMP%]   .list-group-item.active[_ngcontent-%COMP%] {\r\n    z-index         : 2;\r\n    color           : #3d405c;\r\n    background-color: #f7f7fb;\r\n    border-color    : #e1e1e7\r\n}\r\n\r\n.notification-list[_ngcontent-%COMP%]   .list-group-item-action[_ngcontent-%COMP%]:focus, .list-group-item-action[_ngcontent-%COMP%]:hover {\r\n    color           : #404040;\r\n    text-decoration : none;\r\n    background-color: #f7f7fb\r\n}\r\n\r\n.notification-list[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:last-child {}\r\n\r\n.notification-info[_ngcontent-%COMP%] {}\r\n\r\n.notification-info[_ngcontent-%COMP%]   .notification-date[_ngcontent-%COMP%] {\r\n    display       : block;\r\n    font-size     : 11px;\r\n    margin-top    : 4px;\r\n    \r\n    color         : #71748d\r\n}\r\n\r\n.notification[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after, .connection[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after, .nav-user[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after {\r\n    display       : inline-block;\r\n    width         : 0;\r\n    height        : 0;\r\n    margin-left   : .255em;\r\n    vertical-align: .255em;\r\n    content       : \"\";\r\n    border        : none\r\n}\r\n\r\n.notification-list-user-img[_ngcontent-%COMP%] {\r\n    float: left\r\n}\r\n\r\n.notification-list-user-block[_ngcontent-%COMP%] {\r\n    padding-left: 50px;\r\n    font-size   : 14px;\r\n    line-height : 21px\r\n}\r\n\r\n.notification-list-user-name[_ngcontent-%COMP%] {\r\n    color       : #5969ff;\r\n    font-size   : 14px;\r\n    margin-right: 8px\r\n}\r\n\r\n.list-footer[_ngcontent-%COMP%], .conntection-footer[_ngcontent-%COMP%] {\r\n    font-size                 : 14px;\r\n    color                     : #fff;\r\n    text-align                : center;\r\n    padding                   : 10px 0px;\r\n    line-height               : 1.5;\r\n    font-weight               : 700;\r\n    background-color          : #5969ff;\r\n    border-bottom-left-radius : 3px;\r\n    border-bottom-right-radius: 3px\r\n}\r\n\r\n.list-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .conntection-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #fff\r\n}\r\n\r\n.list-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .conntection-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color: #fff\r\n}\r\n\r\n.indicator[_ngcontent-%COMP%] {\r\n    content         : '';\r\n    position        : absolute;\r\n    top             : 16px;\r\n    right           : 23px;\r\n    display         : inline-block;\r\n    width           : 7px;\r\n    height          : 7px;\r\n    border-radius   : 100%;\r\n    background-color: #ef172c;\r\n    animation       : .9s infinite beatHeart;\r\n    transform-origin: center\r\n}\r\n\r\n@keyframes beatHeart {\r\n    0% {\r\n        transform: scale(0.9)\r\n    }\r\n\r\n    25% {\r\n        transform: scale(1.1)\r\n    }\r\n\r\n    40% {\r\n        transform: scale(0.9)\r\n    }\r\n\r\n    60% {\r\n        transform: scale(1.1)\r\n    }\r\n\r\n    100% {\r\n        transform: scale(0.9)\r\n    }\r\n}\r\n\r\n.connection[_ngcontent-%COMP%] {}\r\n\r\n.connection-dropdown[_ngcontent-%COMP%] {}\r\n\r\n.connection-list[_ngcontent-%COMP%] {\r\n    width  : 300px;\r\n    padding: 20px\r\n}\r\n\r\n.connection-item[_ngcontent-%COMP%] {\r\n    border-radius: 3px;\r\n    line-height  : 32px;\r\n    text-align   : center;\r\n    padding      : 12px 7px 4px;\r\n    display      : block;\r\n    border       : 1px solid transparent;\r\n    color        : #3d405c;\r\n    font-size    : 12px\r\n}\r\n\r\n.connection-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 32px\r\n}\r\n\r\n.connection-item[_ngcontent-%COMP%]:hover {\r\n    background-color: #fff;\r\n    border          : 1px solid #e6e6f2\r\n}\r\n\r\n.connection-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    display      : block;\r\n    overflow     : hidden;\r\n    text-overflow: ellipsis;\r\n    white-space  : nowrap\r\n}\r\n\r\n.nav-user[_ngcontent-%COMP%] {}\r\n\r\n.nav-user-dropdown[_ngcontent-%COMP%] {\r\n    padding  : 0px;\r\n    min-width: 230px;\r\n    margin   : 0px\r\n}\r\n\r\n.nav-user-name[_ngcontent-%COMP%] {}\r\n\r\n.nav-user-info[_ngcontent-%COMP%] {\r\n    background-color: #5969ff;\r\n    line-height     : 1.4;\r\n    padding         : 12px;\r\n    color           : #fff;\r\n    font-size       : 13px;\r\n    border-radius   : 2px 2px 0 0\r\n}\r\n\r\n.nav-user-info[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\r\n    float: left;\r\n    top  : 7px;\r\n    left : 0px\r\n}\r\n\r\n.nav-user-dropdown[_ngcontent-%COMP%] {}\r\n\r\n.nav-user-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\r\n    display         : block;\r\n    width           : 100%;\r\n    padding         : 12px 22px 15px;\r\n    clear           : both;\r\n    font-weight     : 400;\r\n    color           : #686972;\r\n    text-align      : inherit;\r\n    white-space     : nowrap;\r\n    background-color: transparent;\r\n    border          : 0;\r\n    font-size       : 13px;\r\n    line-height     : 0.4\r\n}\r\n\r\n.nav-user-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\r\n    background-color: #f7f7fb\r\n}\r\n\r\n.user-avatar-xxl[_ngcontent-%COMP%] {\r\n    height: 128px;\r\n    width : 128px\r\n}\r\n\r\n.user-avatar-xl[_ngcontent-%COMP%] {\r\n    height: 90px;\r\n    width : 90px\r\n}\r\n\r\n.user-avatar-lg[_ngcontent-%COMP%] {\r\n    height: 48px;\r\n    width : 48px\r\n}\r\n\r\n.user-avatar-md[_ngcontent-%COMP%] {\r\n    height: 32px;\r\n    width : 32px\r\n}\r\n\r\n.user-avatar-sm[_ngcontent-%COMP%] {\r\n    height: 24px;\r\n    width : 24px\r\n}\r\n\r\n.user-avatar-xs[_ngcontent-%COMP%] {\r\n    height: 18px;\r\n    width : 18px\r\n}\r\n\r\n.avatar[_ngcontent-%COMP%] {\r\n    width        : 2.25rem;\r\n    height       : 2.25rem;\r\n    border-radius: 50%;\r\n    border       : 2px solid #F7F9FA;\r\n    background   : #F7F9FA;\r\n    color        : #fff\r\n}\r\n\r\n.media-attachment[_ngcontent-%COMP%]   div.avatar[_ngcontent-%COMP%] {\r\n    border: none\r\n}\r\n\r\n.avatar.bg-primary[_ngcontent-%COMP%] {\r\n    display        : flex;\r\n    align-items    : center;\r\n    justify-content: center\r\n}\r\n\r\n.avatar.bg-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 14px\r\n}\n/*# sourceMappingURL=data:application/json;base64,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Q0o7O0FBRUEsZ0JBQWdCOztBQUVoQjtJQUNJLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEI7QUFDSjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1Y7QUFDSjs7QUFFQSxvQkFBb0I7O0FBRXBCO0lBQ0ksdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixnQ0FBZ0M7SUFDaEMsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYjtBQUNKOztBQUVBO0lBQ0ksWUFBWTtJQUNaO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0lBQ1o7QUFDSjs7QUFFQTtJQUNJLFlBQVk7SUFDWjtBQUNKOztBQUVBO0lBQ0ksWUFBWTtJQUNaO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0lBQ1o7QUFDSjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyxzQkFBc0I7SUFDdEI7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCO0FBQ0o7O0FBRUE7SUFDSTtBQUNKIiwiZmlsZSI6Im1haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgYmFja2dyb3VuZDogIzMwNEZGRVxyXG59XHJcblxyXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICAgIGNvbG9yICAgICAgICAgICA6ICM0OTUwNTc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLWNvbG9yICAgIDogIzgwYmRmZjtcclxuICAgIG91dGxpbmUgICAgICAgICA6IDA7XHJcbiAgICBib3gtc2hhZG93ICAgICAgOiBub25lICFpbXBvcnRhbnRcclxufVxyXG5cclxuLmRhc2hib2FyZC1oZWFkZXIgLm5hdmJhciB7XHJcbiAgICBwYWRkaW5nICAgICAgICAgICA6IDBweDtcclxuICAgIGJvcmRlci1ib3R0b20gICAgIDogMXB4IHNvbGlkICNlNmU2ZjI7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMjhweCAwcHggcmdiYSg4MiwgNjMsIDEwNSwgMC4xMyk7XHJcbiAgICBib3gtc2hhZG93ICAgICAgICA6IDBweCAwcHggMjhweCAwcHggcmdiYSg4MiwgNjMsIDEwNSwgMC4xMyk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICBtaW4taGVpZ2h0ICAgICAgICA6IDYwcHhcclxufVxyXG5cclxuLm5hdmJhci1icmFuZCB7XHJcbiAgICBkaXNwbGF5ICAgICAgIDogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0ICA6IDFyZW07XHJcbiAgICBsaW5lLWhlaWdodCAgIDogaW5oZXJpdDtcclxuICAgIHdoaXRlLXNwYWNlICAgOiBub3dyYXA7XHJcbiAgICBwYWRkaW5nICAgICAgIDogMTFweCAyMHB4O1xyXG4gICAgZm9udC1zaXplICAgICA6IDMwcHg7XHJcbiAgICAvKiB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyAqL1xyXG4gICAgZm9udC13ZWlnaHQgICA6IDcwMDtcclxuICAgIGNvbG9yICAgICAgICAgOiAjMDA3YmZmXHJcbn1cclxuXHJcbi5uYXZiYXItYnJhbmQ6aG92ZXIge1xyXG4gICAgY29sb3I6ICMwMDdiZmZcclxufVxyXG5cclxuLm5hdmJhci1yaWdodC10b3Age31cclxuXHJcbi5uYXZiYXItcmlnaHQtdG9wIC5uYXYtaXRlbSB7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTZlNmYyXHJcbn1cclxuXHJcbi5uYXZiYXItcmlnaHQtdG9wIC5uYXYtaXRlbTpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlcjogbm9uZVxyXG59XHJcblxyXG4ubmF2YmFyLXJpZ2h0LXRvcCAubmF2LWl0ZW0gLm5hdi1saW5rIHtcclxuICAgIHBhZGRpbmcgICAgOiAxM3B4IDIwcHg7XHJcbiAgICBmb250LXNpemUgIDogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyO1xyXG4gICAgY29sb3IgICAgICA6ICM4Mjg0OWZcclxufVxyXG5cclxuLnRvcC1zZWFyY2gtYmFyIHtcclxuICAgIHBhZGRpbmctdG9wICA6IDEycHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4XHJcbn1cclxuXHJcbi5ub3RpZmljYXRpb24ge31cclxuXHJcbi5ub3RpZmljYXRpb24tZHJvcGRvd24ge1xyXG4gICAgbWluLXdpZHRoOiAzMjBweFxyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uLWRyb3Bkb3duLFxyXG4uY29ubmVjdGlvbi1kcm9wZG93bixcclxuLm5hdi11c2VyLWRyb3Bkb3duIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbiA6IDBweFxyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZSAgICAgICA6IDE0cHg7XHJcbiAgICBjb2xvciAgICAgICAgICAgOiAjM2Q0MDVjO1xyXG4gICAgdGV4dC1hbGlnbiAgICAgIDogY2VudGVyO1xyXG4gICAgcGFkZGluZyAgICAgICAgIDogOHB4IDBweDtcclxuICAgIGJvcmRlci1ib3R0b20gICA6IDFweCBzb2xpZCAjZTNlM2UzO1xyXG4gICAgbGluZS1oZWlnaHQgICAgIDogMS41O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZVxyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uLWxpc3Qge31cclxuXHJcbi5ub3RpZmljYXRpb24tbGlzdCAubGlzdC1ncm91cC1pdGVtIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIHBhZGRpbmcgICAgICA6IDEycHg7XHJcbiAgICBtYXJnaW4tdG9wICAgOiAtMXB4O1xyXG4gICAgYm9yZGVyLWxlZnQgIDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmlnaHQgOiB0cmFuc3BhcmVudFxyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uLWxpc3QgLmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmUge1xyXG4gICAgei1pbmRleCAgICAgICAgIDogMjtcclxuICAgIGNvbG9yICAgICAgICAgICA6ICMzZDQwNWM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2ZiO1xyXG4gICAgYm9yZGVyLWNvbG9yICAgIDogI2UxZTFlN1xyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uLWxpc3QgLmxpc3QtZ3JvdXAtaXRlbS1hY3Rpb246Zm9jdXMsXHJcbi5saXN0LWdyb3VwLWl0ZW0tYWN0aW9uOmhvdmVyIHtcclxuICAgIGNvbG9yICAgICAgICAgICA6ICM0MDQwNDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb24gOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmYlxyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uLWxpc3QgLmxpc3QtZ3JvdXAtaXRlbTpsYXN0LWNoaWxkIHt9XHJcblxyXG4ubm90aWZpY2F0aW9uLWluZm8ge31cclxuXHJcbi5ub3RpZmljYXRpb24taW5mbyAubm90aWZpY2F0aW9uLWRhdGUge1xyXG4gICAgZGlzcGxheSAgICAgICA6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplICAgICA6IDExcHg7XHJcbiAgICBtYXJnaW4tdG9wICAgIDogNHB4O1xyXG4gICAgLyogdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgKi9cclxuICAgIGNvbG9yICAgICAgICAgOiAjNzE3NDhkXHJcbn1cclxuXHJcbi5ub3RpZmljYXRpb24gLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIsXHJcbi5jb25uZWN0aW9uIC5kcm9wZG93bi10b2dnbGU6OmFmdGVyLFxyXG4ubmF2LXVzZXIgLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xyXG4gICAgZGlzcGxheSAgICAgICA6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoICAgICAgICAgOiAwO1xyXG4gICAgaGVpZ2h0ICAgICAgICA6IDA7XHJcbiAgICBtYXJnaW4tbGVmdCAgIDogLjI1NWVtO1xyXG4gICAgdmVydGljYWwtYWxpZ246IC4yNTVlbTtcclxuICAgIGNvbnRlbnQgICAgICAgOiBcIlwiO1xyXG4gICAgYm9yZGVyICAgICAgICA6IG5vbmVcclxufVxyXG5cclxuLm5vdGlmaWNhdGlvbi1saXN0LXVzZXItaW1nIHtcclxuICAgIGZsb2F0OiBsZWZ0XHJcbn1cclxuXHJcbi5ub3RpZmljYXRpb24tbGlzdC11c2VyLWJsb2NrIHtcclxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcclxuICAgIGZvbnQtc2l6ZSAgIDogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0IDogMjFweFxyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uLWxpc3QtdXNlci1uYW1lIHtcclxuICAgIGNvbG9yICAgICAgIDogIzU5NjlmZjtcclxuICAgIGZvbnQtc2l6ZSAgIDogMTRweDtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4XHJcbn1cclxuXHJcbi5saXN0LWZvb3RlcixcclxuLmNvbm50ZWN0aW9uLWZvb3RlciB7XHJcbiAgICBmb250LXNpemUgICAgICAgICAgICAgICAgIDogMTRweDtcclxuICAgIGNvbG9yICAgICAgICAgICAgICAgICAgICAgOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbiAgICAgICAgICAgICAgICA6IGNlbnRlcjtcclxuICAgIHBhZGRpbmcgICAgICAgICAgICAgICAgICAgOiAxMHB4IDBweDtcclxuICAgIGxpbmUtaGVpZ2h0ICAgICAgICAgICAgICAgOiAxLjU7XHJcbiAgICBmb250LXdlaWdodCAgICAgICAgICAgICAgIDogNzAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvciAgICAgICAgICA6ICM1OTY5ZmY7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzIDogM3B4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweFxyXG59XHJcblxyXG4ubGlzdC1mb290ZXIgYSxcclxuLmNvbm50ZWN0aW9uLWZvb3RlciBhIHtcclxuICAgIGNvbG9yOiAjZmZmXHJcbn1cclxuXHJcbi5saXN0LWZvb3RlciBhOmhvdmVyLFxyXG4uY29ubnRlY3Rpb24tZm9vdGVyIGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZmZcclxufVxyXG5cclxuLmluZGljYXRvciB7XHJcbiAgICBjb250ZW50ICAgICAgICAgOiAnJztcclxuICAgIHBvc2l0aW9uICAgICAgICA6IGFic29sdXRlO1xyXG4gICAgdG9wICAgICAgICAgICAgIDogMTZweDtcclxuICAgIHJpZ2h0ICAgICAgICAgICA6IDIzcHg7XHJcbiAgICBkaXNwbGF5ICAgICAgICAgOiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aCAgICAgICAgICAgOiA3cHg7XHJcbiAgICBoZWlnaHQgICAgICAgICAgOiA3cHg7XHJcbiAgICBib3JkZXItcmFkaXVzICAgOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmMTcyYztcclxuICAgIGFuaW1hdGlvbiAgICAgICA6IC45cyBpbmZpbml0ZSBiZWF0SGVhcnQ7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXJcclxufVxyXG5cclxuQGtleWZyYW1lcyBiZWF0SGVhcnQge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KVxyXG4gICAgfVxyXG5cclxuICAgIDI1JSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpXHJcbiAgICB9XHJcblxyXG4gICAgNDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSlcclxuICAgIH1cclxuXHJcbiAgICA2MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKVxyXG4gICAgfVxyXG5cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KVxyXG4gICAgfVxyXG59XHJcblxyXG4uY29ubmVjdGlvbiB7fVxyXG5cclxuLmNvbm5lY3Rpb24tZHJvcGRvd24ge31cclxuXHJcbi5jb25uZWN0aW9uLWxpc3Qge1xyXG4gICAgd2lkdGggIDogMzAwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4XHJcbn1cclxuXHJcbi5jb25uZWN0aW9uLWl0ZW0ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgbGluZS1oZWlnaHQgIDogMzJweDtcclxuICAgIHRleHQtYWxpZ24gICA6IGNlbnRlcjtcclxuICAgIHBhZGRpbmcgICAgICA6IDEycHggN3B4IDRweDtcclxuICAgIGRpc3BsYXkgICAgICA6IGJsb2NrO1xyXG4gICAgYm9yZGVyICAgICAgIDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3IgICAgICAgIDogIzNkNDA1YztcclxuICAgIGZvbnQtc2l6ZSAgICA6IDEycHhcclxufVxyXG5cclxuLmNvbm5lY3Rpb24taXRlbSBpbWcge1xyXG4gICAgd2lkdGg6IDMycHhcclxufVxyXG5cclxuLmNvbm5lY3Rpb24taXRlbTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyICAgICAgICAgIDogMXB4IHNvbGlkICNlNmU2ZjJcclxufVxyXG5cclxuLmNvbm5lY3Rpb24taXRlbSBzcGFuIHtcclxuICAgIGRpc3BsYXkgICAgICA6IGJsb2NrO1xyXG4gICAgb3ZlcmZsb3cgICAgIDogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZSAgOiBub3dyYXBcclxufVxyXG5cclxuLm5hdi11c2VyIHt9XHJcblxyXG4ubmF2LXVzZXItZHJvcGRvd24ge1xyXG4gICAgcGFkZGluZyAgOiAwcHg7XHJcbiAgICBtaW4td2lkdGg6IDIzMHB4O1xyXG4gICAgbWFyZ2luICAgOiAwcHhcclxufVxyXG5cclxuLm5hdi11c2VyLW5hbWUge31cclxuXHJcbi5uYXYtdXNlci1pbmZvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1OTY5ZmY7XHJcbiAgICBsaW5lLWhlaWdodCAgICAgOiAxLjQ7XHJcbiAgICBwYWRkaW5nICAgICAgICAgOiAxMnB4O1xyXG4gICAgY29sb3IgICAgICAgICAgIDogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZSAgICAgICA6IDEzcHg7XHJcbiAgICBib3JkZXItcmFkaXVzICAgOiAycHggMnB4IDAgMFxyXG59XHJcblxyXG4ubmF2LXVzZXItaW5mbyAuc3RhdHVzIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgdG9wICA6IDdweDtcclxuICAgIGxlZnQgOiAwcHhcclxufVxyXG5cclxuLm5hdi11c2VyLWRyb3Bkb3duIHt9XHJcblxyXG4ubmF2LXVzZXItZHJvcGRvd24gLmRyb3Bkb3duLWl0ZW0ge1xyXG4gICAgZGlzcGxheSAgICAgICAgIDogYmxvY2s7XHJcbiAgICB3aWR0aCAgICAgICAgICAgOiAxMDAlO1xyXG4gICAgcGFkZGluZyAgICAgICAgIDogMTJweCAyMnB4IDE1cHg7XHJcbiAgICBjbGVhciAgICAgICAgICAgOiBib3RoO1xyXG4gICAgZm9udC13ZWlnaHQgICAgIDogNDAwO1xyXG4gICAgY29sb3IgICAgICAgICAgIDogIzY4Njk3MjtcclxuICAgIHRleHQtYWxpZ24gICAgICA6IGluaGVyaXQ7XHJcbiAgICB3aGl0ZS1zcGFjZSAgICAgOiBub3dyYXA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlciAgICAgICAgICA6IDA7XHJcbiAgICBmb250LXNpemUgICAgICAgOiAxM3B4O1xyXG4gICAgbGluZS1oZWlnaHQgICAgIDogMC40XHJcbn1cclxuXHJcbi5uYXYtdXNlci1kcm9wZG93biAuZHJvcGRvd24taXRlbTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2ZiXHJcbn1cclxuXHJcbi51c2VyLWF2YXRhci14eGwge1xyXG4gICAgaGVpZ2h0OiAxMjhweDtcclxuICAgIHdpZHRoIDogMTI4cHhcclxufVxyXG5cclxuLnVzZXItYXZhdGFyLXhsIHtcclxuICAgIGhlaWdodDogOTBweDtcclxuICAgIHdpZHRoIDogOTBweFxyXG59XHJcblxyXG4udXNlci1hdmF0YXItbGcge1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgd2lkdGggOiA0OHB4XHJcbn1cclxuXHJcbi51c2VyLWF2YXRhci1tZCB7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICB3aWR0aCA6IDMycHhcclxufVxyXG5cclxuLnVzZXItYXZhdGFyLXNtIHtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIHdpZHRoIDogMjRweFxyXG59XHJcblxyXG4udXNlci1hdmF0YXIteHMge1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgd2lkdGggOiAxOHB4XHJcbn1cclxuXHJcbi5hdmF0YXIge1xyXG4gICAgd2lkdGggICAgICAgIDogMi4yNXJlbTtcclxuICAgIGhlaWdodCAgICAgICA6IDIuMjVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXIgICAgICAgOiAycHggc29saWQgI0Y3RjlGQTtcclxuICAgIGJhY2tncm91bmQgICA6ICNGN0Y5RkE7XHJcbiAgICBjb2xvciAgICAgICAgOiAjZmZmXHJcbn1cclxuXHJcbi5tZWRpYS1hdHRhY2htZW50IGRpdi5hdmF0YXIge1xyXG4gICAgYm9yZGVyOiBub25lXHJcbn1cclxuXHJcbi5hdmF0YXIuYmctcHJpbWFyeSB7XHJcbiAgICBkaXNwbGF5ICAgICAgICA6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtcyAgICA6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXHJcbn1cclxuXHJcbi5hdmF0YXIuYmctcHJpbWFyeSBpIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweFxyXG59Il19 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map