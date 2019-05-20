webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _data_test_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/test/reducer */ "./data/test/reducer.js");
/* harmony import */ var _data_initState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/initState */ "./data/initState.js");





function initializeStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _data_initState__WEBPACK_IMPORTED_MODULE_4__["initState"];
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_data_test_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"], initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2__["default"])));
}

/***/ })

})
//# sourceMappingURL=_app.js.fe9a65ee0b3cb381a346.hot-update.js.map