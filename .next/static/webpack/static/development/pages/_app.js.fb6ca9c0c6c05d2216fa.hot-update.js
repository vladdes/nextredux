webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./data/test/reducer.js":
/*!******************************!*\
  !*** ./data/test/reducer.js ***!
  \******************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _initState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../initState */ "./data/initState.js");
/* harmony import */ var _actiontypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actiontypes */ "./data/test/actiontypes.js");



var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initState__WEBPACK_IMPORTED_MODULE_1__["test"];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actiontypes__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].TICK:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        lastUpdate: action.ts,
        light: !!action.light
      });

    case _actiontypes__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].INCREMENT:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        count: state.count + 1
      });

    case _actiontypes__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].DECREMENT:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        count: state.count - 1
      });

    case _actiontypes__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].RESET:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        count: exampleInitialState.count
      });

    default:
      return state;
  }
};

/***/ })

})
//# sourceMappingURL=_app.js.fb6ca9c0c6c05d2216fa.hot-update.js.map