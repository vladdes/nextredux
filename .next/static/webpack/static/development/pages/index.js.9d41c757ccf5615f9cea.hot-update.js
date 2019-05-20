webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/counter.js":
/*!*******************************!*\
  !*** ./components/counter.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _data_test_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/test/actions */ "./data/test/actions.js");
var _jsxFileName = "E:\\Jobb\\devjar\\myapp\\components\\counter.js";




function Counter(props) {
  var increment = function increment() {
    var dispatch = props.dispatch;
    dispatch(Object(_data_test_actions__WEBPACK_IMPORTED_MODULE_2__["incrementCount"])());
  };

  var decrement = function decrement() {
    var dispatch = props.dispatch;
    dispatch(Object(_data_test_actions__WEBPACK_IMPORTED_MODULE_2__["decrementCount"])());
  };

  var reset = function reset() {
    var dispatch = props.dispatch;
    dispatch(Object(_data_test_actions__WEBPACK_IMPORTED_MODULE_2__["resetCount"])());
  };

  var count = props.count;
  console.log(props);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Count: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, count)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: increment,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "+1"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: decrement,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "-1"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: reset,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Reset"));
}

function mapStateToProps(state) {
  var count = state.count;
  return {
    count: count
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Counter));

/***/ })

})
//# sourceMappingURL=index.js.9d41c757ccf5615f9cea.hot-update.js.map