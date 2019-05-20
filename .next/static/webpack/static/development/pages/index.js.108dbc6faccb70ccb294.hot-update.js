webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _data_test_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/test/actions */ "./data/test/actions.js");
/* harmony import */ var _components_examples__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/examples */ "./components/examples.js");
var _jsxFileName = "E:\\Jobb\\devjar\\myapp\\pages\\index.js";




var Index = {
  getInitialProps: function getInitialProps(_ref) {
    var reduxStore = _ref.reduxStore,
        req = _ref.req;
    var isServer = !!req;
    reduxStore.dispatch(Object(_data_test_actions__WEBPACK_IMPORTED_MODULE_2__["serverRenderClock"])(isServer));
    return {};
  },
  componentDidMount: function componentDidMount() {
    var dispatch = this.props.dispatch;
    this.timer = Object(_data_test_actions__WEBPACK_IMPORTED_MODULE_2__["startClock"])(dispatch);
  },
  componentWillUnmount: function componentWillUnmount() {
    clearInterval(this.timer);
  },
  render: function render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_examples__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])()(Index));

/***/ })

})
//# sourceMappingURL=index.js.108dbc6faccb70ccb294.hot-update.js.map