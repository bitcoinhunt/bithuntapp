self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Earn/index.js":
/*!**************************************!*\
  !*** ./src/components/Earn/index.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_kaliz_dev_tantranlee_bithunt_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_kaliz_dev_tantranlee_bithunt_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_kaliz_dev_tantranlee_bithunt_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_kaliz_dev_tantranlee_bithunt_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _home_kaliz_dev_tantranlee_bithunt_client_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useContract__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useContract */ "./src/hooks/useContract.js");
/* harmony import */ var _hooks_useRefer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useRefer */ "./src/hooks/useRefer.js");
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-number-format */ "./node_modules/react-number-format/dist/react-number-format.es.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Button */ "./src/components/Button/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _stores_common_slice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../stores/common-slice */ "./src/stores/common-slice.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var _hooks_useCopy__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hooks/useCopy */ "./src/hooks/useCopy.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "/home/kaliz/dev/tantranlee/bithunt-client/src/components/Earn/index.js",
    _this = undefined,
    _s = $RefreshSig$();











var Earn = function Earn() {
  _s();

  var contract = (0,_hooks_useContract__WEBPACK_IMPORTED_MODULE_5__.connect)();

  var _useRefer = (0,_hooks_useRefer__WEBPACK_IMPORTED_MODULE_6__.default)(),
      _useRefer2 = (0,_home_kaliz_dev_tantranlee_bithunt_client_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useRefer, 1),
      refer = _useRefer2[0];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      approve = _useState[0],
      setApprove = _useState[1];

  var account = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)(_stores_common_slice__WEBPACK_IMPORTED_MODULE_10__.addressSelector);

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      pendingApprove = _useState2[0],
      setPendingApprove = _useState2[1];

  var _useCopy = (0,_hooks_useCopy__WEBPACK_IMPORTED_MODULE_11__.default)(),
      _useCopy2 = (0,_home_kaliz_dev_tantranlee_bithunt_client_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useCopy, 1),
      cp = _useCopy2[0];

  var handleJoin = /*#__PURE__*/function () {
    var _ref = (0,_home_kaliz_dev_tantranlee_bithunt_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_kaliz_dev_tantranlee_bithunt_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      return _home_kaliz_dev_tantranlee_bithunt_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return contract.joinWithBnb(refer);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleJoin() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleConnect = /*#__PURE__*/function () {
    var _ref2 = (0,_home_kaliz_dev_tantranlee_bithunt_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_kaliz_dev_tantranlee_bithunt_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
      return _home_kaliz_dev_tantranlee_bithunt_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return contract.connect();

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleConnect() {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleApprove = /*#__PURE__*/function () {
    var _ref3 = (0,_home_kaliz_dev_tantranlee_bithunt_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_kaliz_dev_tantranlee_bithunt_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {
      return _home_kaliz_dev_tantranlee_bithunt_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              setPendingApprove(true);
              _context3.next = 4;
              return contract.approve();

            case 4:
              setPendingApprove(false);
              setApprove(true);
              _context3.next = 11;
              break;

            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](0);
              setPendingApprove(false);

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 8]]);
    }));

    return function handleApprove() {
      return _ref3.apply(this, arguments);
    };
  }();

  var handleJoinWithToken = /*#__PURE__*/function () {
    var _ref4 = (0,_home_kaliz_dev_tantranlee_bithunt_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_kaliz_dev_tantranlee_bithunt_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4() {
      return _home_kaliz_dev_tantranlee_bithunt_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return contract.joinWithToken(refer);

            case 3:
              setApprove(false);
              _context4.next = 10;
              break;

            case 6:
              _context4.prev = 6;
              _context4.t0 = _context4["catch"](0);
              console.log(_context4.t0);
              setApprove(false);

            case 10:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 6]]);
    }));

    return function handleJoinWithToken() {
      return _ref4.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "mb-16",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w-full bg-hunt-2 rounded-xl px-4 py-8",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "text-yellow-400 uppercase text-4xl font-bold transform -translate-y-14",
        children: "BITHUNT EARN - EARN BNB UNLIMITED"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "text-white text-xl -mt-8 mb-8",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "font-bold text-2xl",
          children: "Fair Platform for Earn BNB - unlimited"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "text-yellow-400 font-medium mb-4",
          children: "First come, first earn. Automatic earning 1.1025 and more"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "bg-blue-900 px-4 py-2 rounded bg-opacity-20 mb-4",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "",
            children: ["70% ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "text-yellow-400",
              children: "BNB"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 19
            }, _this), " directly transfer to you for every refer who join with your link"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "",
            children: ["15% ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "text-yellow-400",
              children: "BNB"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 19
            }, _this), " directly transfer to you from your Tier 2 referral"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "",
            children: ["5% ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "text-yellow-400",
              children: "BNB"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 18
            }, _this), " directly transfer to you from your Tier 3 referral"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "mb-4",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_8__.default, {
            text: "Join with 0.49 BNB",
            customClassname: "w-full text-2xl px-4 py-2 rounded bg-yellow-400 text-center text-white font-bold mb-4 flex items-center justify-center",
            onClick: handleJoin
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, _this), approve ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_8__.default, {
            text: "Approved. Start Join",
            customClassname: "w-full px-4 py-2 rounded bg-yellow-400 text-center text-white mb-4 flex items-center justify-center",
            onClick: handleJoinWithToken
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 15
          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_8__.default, {
            text: pendingApprove ? "Approving..." : "Join with 2,500,000,000,000 BITHUNT",
            customClassname: "w-full px-4 py-2 rounded bg-yellow-400 text-center text-white mb-4 flex items-center justify-center",
            onClick: handleApprove
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "px-4 py-2 rounded bg-blue-900 bg-opacity-25",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "text-yellow-400",
            children: "How it works?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "",
            children: "First, you need join this package. After that, refer your friends and you will earns your BNB"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "font-bold",
            children: "You can earns unlimited BNB"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "px-4 py-2 rounded bg-blue-900 bg-opacity-25",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "text-yellow-400",
            children: "What happen if I joined but I can't invite everyone?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "",
            children: "Don't worry about that. This is fair system. If you join this package, next who join this package without referral link then BNB will transfer directly to you (First come, first earn)."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "font-bold",
            children: ["This meaning you automatic have one tier 1, one tier 2 and one tier 3 users -", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "text-yellow-400",
              children: "Automatic earning 0.441 BNB"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "text-white text-xl",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "font-bold text-2xl",
          children: "Refer your friends"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "mb-4",
          children: "Get 100% of all claims & 100% when they buy!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 11
        }, _this), account ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "text-white text-xl px-4 py-2 bg-blue-900 cursor-pointer hover:bg-opacity-30 flex items-center mb-4 break-all",
          onClick: function onClick() {
            return cp("https://bithunt.net?address=".concat(account));
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "",
            children: "https://bithunt.net?address=".concat(account)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_12__.AiOutlineCopy, {
              className: "w-6 h-6"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 13
        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          onClick: handleConnect,
          className: "px-4 py-2 rounded bg-blue-800 hover:bg-blue-900 cursor-pointer hover:bg-opacity-30 mb-4",
          children: "Get referral link"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "bg-blue-900 px-4 py-2 rounded",
            children: ["10% ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "text-yellow-400",
              children: "BNB"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 19
            }, _this), " directly transfer to you when they buy pre-sale"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }, _this);
};

_s(Earn, "K9ZES2Pd5q9et7frVIDNVX1iNzI=", false, function () {
  return [_hooks_useRefer__WEBPACK_IMPORTED_MODULE_6__.default, react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector, _hooks_useCopy__WEBPACK_IMPORTED_MODULE_11__.default];
});

_c = Earn;
/* harmony default export */ __webpack_exports__["default"] = (Earn);

var _c;

$RefreshReg$(_c, "Earn");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRWFybi9pbmRleC5qcyJdLCJuYW1lcyI6WyJFYXJuIiwiY29udHJhY3QiLCJjb25uZWN0IiwidXNlUmVmZXIiLCJyZWZlciIsInVzZVN0YXRlIiwiYXBwcm92ZSIsInNldEFwcHJvdmUiLCJhY2NvdW50IiwidXNlU2VsZWN0b3IiLCJhZGRyZXNzU2VsZWN0b3IiLCJwZW5kaW5nQXBwcm92ZSIsInNldFBlbmRpbmdBcHByb3ZlIiwidXNlQ29weSIsImNwIiwiaGFuZGxlSm9pbiIsImpvaW5XaXRoQm5iIiwiaGFuZGxlQ29ubmVjdCIsImhhbmRsZUFwcHJvdmUiLCJoYW5kbGVKb2luV2l0aFRva2VuIiwiam9pbldpdGhUb2tlbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ2pCLE1BQU1DLFFBQVEsR0FBR0MsMkRBQU8sRUFBeEI7O0FBRGlCLGtCQUVEQyx3REFBUSxFQUZQO0FBQUE7QUFBQSxNQUVWQyxLQUZVOztBQUFBLGtCQUdhQywrQ0FBUSxDQUFDLEtBQUQsQ0FIckI7QUFBQSxNQUdWQyxPQUhVO0FBQUEsTUFHREMsVUFIQzs7QUFJakIsTUFBTUMsT0FBTyxHQUFHQyx3REFBVyxDQUFDQyxrRUFBRCxDQUEzQjs7QUFKaUIsbUJBSzJCTCwrQ0FBUSxDQUFDLEtBQUQsQ0FMbkM7QUFBQSxNQUtWTSxjQUxVO0FBQUEsTUFLTUMsaUJBTE47O0FBQUEsaUJBTUpDLHdEQUFPLEVBTkg7QUFBQTtBQUFBLE1BTVZDLEVBTlU7O0FBT2pCLE1BQU1DLFVBQVU7QUFBQSx5VUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDWGQsUUFBUSxDQUFDZSxXQUFU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LElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzY3YmY5MzQxMTZjMjczOTM4MWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcIi4uLy4uL2hvb2tzL3VzZUNvbnRyYWN0XCI7XG5pbXBvcnQgdXNlUmVmZXIgZnJvbSBcIi4uLy4uL2hvb2tzL3VzZVJlZmVyXCI7XG5pbXBvcnQgTnVtYmVyRm9ybWF0IGZyb20gXCJyZWFjdC1udW1iZXItZm9ybWF0XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9CdXR0b25cIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBhZGRyZXNzU2VsZWN0b3IgfSBmcm9tIFwiLi4vLi4vc3RvcmVzL2NvbW1vbi1zbGljZVwiO1xuaW1wb3J0IHsgQWlPdXRsaW5lQ29weSB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xuaW1wb3J0IHVzZUNvcHkgZnJvbSBcIi4uLy4uL2hvb2tzL3VzZUNvcHlcIjtcbmNvbnN0IEVhcm4gPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRyYWN0ID0gY29ubmVjdCgpO1xuICBjb25zdCBbcmVmZXJdID0gdXNlUmVmZXIoKTtcbiAgY29uc3QgW2FwcHJvdmUsIHNldEFwcHJvdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBhY2NvdW50ID0gdXNlU2VsZWN0b3IoYWRkcmVzc1NlbGVjdG9yKTtcbiAgY29uc3QgW3BlbmRpbmdBcHByb3ZlLCBzZXRQZW5kaW5nQXBwcm92ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjcF0gPSB1c2VDb3B5KCk7XG4gIGNvbnN0IGhhbmRsZUpvaW4gPSBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgY29udHJhY3Quam9pbldpdGhCbmIocmVmZXIpO1xuICB9O1xuICBjb25zdCBoYW5kbGVDb25uZWN0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IGNvbnRyYWN0LmNvbm5lY3QoKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlQXBwcm92ZSA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgc2V0UGVuZGluZ0FwcHJvdmUodHJ1ZSk7XG4gICAgICBhd2FpdCBjb250cmFjdC5hcHByb3ZlKCk7XG4gICAgICBzZXRQZW5kaW5nQXBwcm92ZShmYWxzZSk7XG4gICAgICBzZXRBcHByb3ZlKHRydWUpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgc2V0UGVuZGluZ0FwcHJvdmUoZmFsc2UpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgaGFuZGxlSm9pbldpdGhUb2tlbiA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgY29udHJhY3Quam9pbldpdGhUb2tlbihyZWZlcik7XG4gICAgICBzZXRBcHByb3ZlKGZhbHNlKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICBzZXRBcHByb3ZlKGZhbHNlKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYi0xNlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctaHVudC0yIHJvdW5kZWQteGwgcHgtNCBweS04XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC15ZWxsb3ctNDAwIHVwcGVyY2FzZSB0ZXh0LTR4bCBmb250LWJvbGQgdHJhbnNmb3JtIC10cmFuc2xhdGUteS0xNFwiPlxuICAgICAgICAgIEJJVEhVTlQgRUFSTiAtIEVBUk4gQk5CIFVOTElNSVRFRFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQteGwgLW10LTggbWItOFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtMnhsXCI+XG4gICAgICAgICAgICBGYWlyIFBsYXRmb3JtIGZvciBFYXJuIEJOQiAtIHVubGltaXRlZFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC15ZWxsb3ctNDAwIGZvbnQtbWVkaXVtIG1iLTRcIj5cbiAgICAgICAgICAgIEZpcnN0IGNvbWUsIGZpcnN0IGVhcm4uIEF1dG9tYXRpYyBlYXJuaW5nIDEuMTAyNSBhbmQgbW9yZVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmx1ZS05MDAgcHgtNCBweS0yIHJvdW5kZWQgYmctb3BhY2l0eS0yMCBtYi00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICA3MCUgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC15ZWxsb3ctNDAwXCI+Qk5CPC9zcGFuPiBkaXJlY3RseSB0cmFuc2ZlclxuICAgICAgICAgICAgICB0byB5b3UgZm9yIGV2ZXJ5IHJlZmVyIHdobyBqb2luIHdpdGggeW91ciBsaW5rXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgIDE1JSA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXllbGxvdy00MDBcIj5CTkI8L3NwYW4+IGRpcmVjdGx5IHRyYW5zZmVyXG4gICAgICAgICAgICAgIHRvIHlvdSBmcm9tIHlvdXIgVGllciAyIHJlZmVycmFsXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgIDUlIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteWVsbG93LTQwMFwiPkJOQjwvc3Bhbj4gZGlyZWN0bHkgdHJhbnNmZXJcbiAgICAgICAgICAgICAgdG8geW91IGZyb20geW91ciBUaWVyIDMgcmVmZXJyYWxcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICB0ZXh0PVwiSm9pbiB3aXRoIDAuNDkgQk5CXCJcbiAgICAgICAgICAgICAgY3VzdG9tQ2xhc3NuYW1lPVwidy1mdWxsIHRleHQtMnhsIHB4LTQgcHktMiByb3VuZGVkIGJnLXllbGxvdy00MDAgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZSBmb250LWJvbGQgbWItNCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUpvaW59XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge2FwcHJvdmUgPyAoXG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICB0ZXh0PVwiQXBwcm92ZWQuIFN0YXJ0IEpvaW5cIlxuICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzbmFtZT1cInctZnVsbCBweC00IHB5LTIgcm91bmRlZCBiZy15ZWxsb3ctNDAwIHRleHQtY2VudGVyIHRleHQtd2hpdGUgbWItNCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlSm9pbldpdGhUb2tlbn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICB0ZXh0PXtcbiAgICAgICAgICAgICAgICAgIHBlbmRpbmdBcHByb3ZlXG4gICAgICAgICAgICAgICAgICAgID8gXCJBcHByb3ZpbmcuLi5cIlxuICAgICAgICAgICAgICAgICAgICA6IFwiSm9pbiB3aXRoIDIsNTAwLDAwMCwwMDAsMDAwIEJJVEhVTlRcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdXN0b21DbGFzc25hbWU9XCJ3LWZ1bGwgcHgtNCBweS0yIHJvdW5kZWQgYmcteWVsbG93LTQwMCB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlIG1iLTQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUFwcHJvdmV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBweS0yIHJvdW5kZWQgYmctYmx1ZS05MDAgYmctb3BhY2l0eS0yNVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXllbGxvdy00MDBcIj5Ib3cgaXQgd29ya3M/PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICBGaXJzdCwgeW91IG5lZWQgam9pbiB0aGlzIHBhY2thZ2UuIEFmdGVyIHRoYXQsIHJlZmVyIHlvdXIgZnJpZW5kc1xuICAgICAgICAgICAgICBhbmQgeW91IHdpbGwgZWFybnMgeW91ciBCTkJcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5Zb3UgY2FuIGVhcm5zIHVubGltaXRlZCBCTkI8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTQgcHktMiByb3VuZGVkIGJnLWJsdWUtOTAwIGJnLW9wYWNpdHktMjVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC15ZWxsb3ctNDAwXCI+XG4gICAgICAgICAgICAgIFdoYXQgaGFwcGVuIGlmIEkgam9pbmVkIGJ1dCBJIGNhbid0IGludml0ZSBldmVyeW9uZT9cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgRG9uJ3Qgd29ycnkgYWJvdXQgdGhhdC4gVGhpcyBpcyBmYWlyIHN5c3RlbS4gSWYgeW91IGpvaW4gdGhpc1xuICAgICAgICAgICAgICBwYWNrYWdlLCBuZXh0IHdobyBqb2luIHRoaXMgcGFja2FnZSB3aXRob3V0IHJlZmVycmFsIGxpbmsgdGhlbiBCTkJcbiAgICAgICAgICAgICAgd2lsbCB0cmFuc2ZlciBkaXJlY3RseSB0byB5b3UgKEZpcnN0IGNvbWUsIGZpcnN0IGVhcm4pLlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICBUaGlzIG1lYW5pbmcgeW91IGF1dG9tYXRpYyBoYXZlIG9uZSB0aWVyIDEsIG9uZSB0aWVyIDIgYW5kIG9uZVxuICAgICAgICAgICAgICB0aWVyIDMgdXNlcnMgLXtcIiBcIn1cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC15ZWxsb3ctNDAwXCI+XG4gICAgICAgICAgICAgICAgQXV0b21hdGljIGVhcm5pbmcgMC40NDEgQk5CXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQteGxcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTJ4bFwiPlJlZmVyIHlvdXIgZnJpZW5kczwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgR2V0IDEwMCUgb2YgYWxsIGNsYWltcyAmIDEwMCUgd2hlbiB0aGV5IGJ1eSFcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7YWNjb3VudCA/IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LXhsIHB4LTQgcHktMiBiZy1ibHVlLTkwMCBjdXJzb3ItcG9pbnRlciBob3ZlcjpiZy1vcGFjaXR5LTMwIGZsZXggaXRlbXMtY2VudGVyIG1iLTQgYnJlYWstYWxsXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY3AoYGh0dHBzOi8vYml0aHVudC5uZXQ/YWRkcmVzcz0ke2FjY291bnR9YCl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+e2BodHRwczovL2JpdGh1bnQubmV0P2FkZHJlc3M9JHthY2NvdW50fWB9PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgPEFpT3V0bGluZUNvcHkgY2xhc3NOYW1lPVwidy02IGgtNlwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ29ubmVjdH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIHJvdW5kZWQgYmctYmx1ZS04MDAgaG92ZXI6YmctYmx1ZS05MDAgY3Vyc29yLXBvaW50ZXIgaG92ZXI6Ymctb3BhY2l0eS0zMCBtYi00XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgR2V0IHJlZmVycmFsIGxpbmtcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmx1ZS05MDAgcHgtNCBweS0yIHJvdW5kZWRcIj5cbiAgICAgICAgICAgICAgMTAlIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteWVsbG93LTQwMFwiPkJOQjwvc3Bhbj4gZGlyZWN0bHkgdHJhbnNmZXJcbiAgICAgICAgICAgICAgdG8geW91IHdoZW4gdGhleSBidXkgcHJlLXNhbGVcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRWFybjtcbiJdLCJzb3VyY2VSb290IjoiIn0=