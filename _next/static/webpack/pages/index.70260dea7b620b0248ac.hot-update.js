self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/TimeLine/TimeLine.js":
/*!*********************************************!*\
  !*** ./src/components/TimeLine/TimeLine.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimeLineStyles */ "./src/components/TimeLine/TimeLineStyles.js");
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/constants */ "./src/constants/constants.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\GitHub\\arnoandaivengo_portfolio\\src\\components\\TimeLine\\TimeLine.js",
    _this = undefined,
    _s = $RefreshSig$();





var TOTAL_CAROUSEL_COUNT = _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length;

var Timeline = function Timeline() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      activeItem = _useState[0],
      setActiveItem = _useState[1];

  var carouselRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();

  var scroll = function scroll(node, left) {
    return node.scrollTo({
      left: left,
      behavior: "smooth"
    });
  };

  var handleClick = function handleClick(e, i) {
    e.preventDefault();

    if (carouselRef.current) {
      var scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length));
      scroll(carouselRef.current, scrollLeft);
    }
  };

  var handleScroll = function handleScroll() {
    if (carouselRef.current) {
      var index = Math.round(carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7) * _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length);
      setActiveItem(index);
    }
  }; // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var handleResize = function handleResize() {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener("resize", handleResize);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.Section, {
    id: "about",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionTitle, {
      children: "\u041E\u0431\u043E \u043C\u043D\u0435"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionText, {
      children: "\u041E\u043F\u044B\u0442\u043D\u044B\u0439 Full Stack Developer \u0441 \u043E\u043F\u044B\u0442\u043E\u043C \u0440\u0430\u0431\u043E\u0442\u044B \u0431\u043E\u043B\u0435\u0435 8 \u043B\u0435\u0442. \u0423\u0432\u043B\u0435\u0447\u0435\u043D \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u043E\u0439 \u0432\u044B\u0441\u043E\u043A\u043E\u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u0432\u0435\u0431-\u0440\u0435\u0448\u0435\u043D\u0438\u0439 \u0441 \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u0435\u043C Nuxt.js & Node.js. \u041F\u0438\u0448\u0443 \u0447\u0438\u0441\u0442\u044B\u0439 \u0438 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043C\u044B\u0439 \u043A\u043E\u0434, \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u044E\u0441\u044C \u0438 \u043E\u0431\u0443\u0447\u0430\u044E\u0441\u044C \u0432 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u0438\u043D\u043D\u043E\u0432\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u0439."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselContainer, {
      children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.map(function (item, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselMobileScrollNode, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemTitle, {
            children: item.company
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemText, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
              children: "\u0413\u043E\u0434:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 43
            }, _this), " ", item.year]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemText, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
              children: "\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 43
            }, _this), " ", item.position]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemText, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
              children: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 43
            }, _this), " ", item.technology]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemText, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
              children: "\u041E\u0431\u044F\u0437\u0430\u043D\u043E\u0441\u0442\u0438:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 43
            }, _this), " ", item.text]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 25
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButtons, {
      children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.map(function (item, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButton, {
          index: index,
          active: activeItem,
          onClick: function onClick(e) {
            return handleClick(e, index);
          },
          type: "button",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButtonDot, {
            active: activeItem
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 29
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 25
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionDivider, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 9
  }, _this);
};

_s(Timeline, "qE2Y7awmqdFA9rYczLkhjQwwAdI=");

_c = Timeline;
/* harmony default export */ __webpack_exports__["default"] = (Timeline);

var _c;

$RefreshReg$(_c, "Timeline");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGltZUxpbmUvVGltZUxpbmUuanMiXSwibmFtZXMiOlsiVE9UQUxfQ0FST1VTRUxfQ09VTlQiLCJUaW1lTGluZURhdGEiLCJUaW1lbGluZSIsInVzZVN0YXRlIiwiYWN0aXZlSXRlbSIsInNldEFjdGl2ZUl0ZW0iLCJjYXJvdXNlbFJlZiIsInVzZVJlZiIsInNjcm9sbCIsIm5vZGUiLCJsZWZ0Iiwic2Nyb2xsVG8iLCJiZWhhdmlvciIsImhhbmRsZUNsaWNrIiwiZSIsImkiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJzY3JvbGxMZWZ0IiwiTWF0aCIsImZsb29yIiwic2Nyb2xsV2lkdGgiLCJoYW5kbGVTY3JvbGwiLCJpbmRleCIsInJvdW5kIiwidXNlRWZmZWN0IiwiaGFuZGxlUmVzaXplIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIml0ZW0iLCJjb21wYW55IiwieWVhciIsInBvc2l0aW9uIiwidGVjaG5vbG9neSIsInRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFTQTtBQU1BO0FBRUEsSUFBTUEsb0JBQW9CLEdBQUdDLHFFQUE3Qjs7QUFFQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQUEsa0JBQ2lCQywrQ0FBUSxDQUFDLENBQUQsQ0FEekI7QUFBQSxNQUNaQyxVQURZO0FBQUEsTUFDQUMsYUFEQTs7QUFFbkIsTUFBTUMsV0FBVyxHQUFHQyw2Q0FBTSxFQUExQjs7QUFFQSxNQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxJQUFELEVBQU9DLElBQVAsRUFBZ0I7QUFDM0IsV0FBT0QsSUFBSSxDQUFDRSxRQUFMLENBQWM7QUFBQ0QsVUFBSSxFQUFKQSxJQUFEO0FBQU9FLGNBQVEsRUFBRTtBQUFqQixLQUFkLENBQVA7QUFDSCxHQUZEOztBQUlBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxX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LGlCQUFDVSxDQUFEO0FBQUEsbUJBQU9ELFdBQVcsQ0FBQ0MsQ0FBRCxFQUFJUyxLQUFKLENBQWxCO0FBQUEsV0FKYjtBQUtJLGNBQUksRUFBQyxRQUxUO0FBQUEsaUNBT0ksOERBQUMsOERBQUQ7QUFBbUIsa0JBQU0sRUFBRW5CO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQSixXQUNTbUIsS0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKO0FBV0gsT0FaQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFsQkosZUFpQ0ksOERBQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWpDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXFDSCxDQS9FRDs7R0FBTXJCLFE7O0tBQUFBLFE7QUFpRk4sK0RBQWVBLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzAyNjBkZWE3YjYyMGIwMjQ4YWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHtcbiAgICBDYXJvdXNlbEJ1dHRvbixcbiAgICBDYXJvdXNlbEJ1dHRvbkRvdCxcbiAgICBDYXJvdXNlbEJ1dHRvbnMsXG4gICAgQ2Fyb3VzZWxDb250YWluZXIsXG4gICAgQ2Fyb3VzZWxJdGVtVGV4dCxcbiAgICBDYXJvdXNlbEl0ZW1UaXRsZSxcbiAgICBDYXJvdXNlbE1vYmlsZVNjcm9sbE5vZGUsXG59IGZyb20gXCIuL1RpbWVMaW5lU3R5bGVzXCI7XG5pbXBvcnQge1xuICAgIFNlY3Rpb24sXG4gICAgU2VjdGlvbkRpdmlkZXIsXG4gICAgU2VjdGlvblRleHQsXG4gICAgU2VjdGlvblRpdGxlLFxufSBmcm9tIFwiLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHNcIjtcbmltcG9ydCB7VGltZUxpbmVEYXRhfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL2NvbnN0YW50c1wiO1xuXG5jb25zdCBUT1RBTF9DQVJPVVNFTF9DT1VOVCA9IFRpbWVMaW5lRGF0YS5sZW5ndGg7XG5cbmNvbnN0IFRpbWVsaW5lID0gKCkgPT4ge1xuICAgIGNvbnN0IFthY3RpdmVJdGVtLCBzZXRBY3RpdmVJdGVtXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IGNhcm91c2VsUmVmID0gdXNlUmVmKCk7XG5cbiAgICBjb25zdCBzY3JvbGwgPSAobm9kZSwgbGVmdCkgPT4ge1xuICAgICAgICByZXR1cm4gbm9kZS5zY3JvbGxUbyh7bGVmdCwgYmVoYXZpb3I6IFwic21vb3RoXCJ9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSwgaSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKGNhcm91c2VsUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbExlZnQgPSBNYXRoLmZsb29yKFxuICAgICAgICAgICAgICAgIGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsV2lkdGggKiAwLjcgKiAoaSAvIFRpbWVMaW5lRGF0YS5sZW5ndGgpXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBzY3JvbGwoY2Fyb3VzZWxSZWYuY3VycmVudCwgc2Nyb2xsTGVmdCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgICBpZiAoY2Fyb3VzZWxSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBNYXRoLnJvdW5kKFxuICAgICAgICAgICAgICAgIChjYXJvdXNlbFJlZi5jdXJyZW50LnNjcm9sbExlZnQgL1xuICAgICAgICAgICAgICAgICAgICAoY2Fyb3VzZWxSZWYuY3VycmVudC5zY3JvbGxXaWR0aCAqIDAuNykpICpcbiAgICAgICAgICAgICAgICBUaW1lTGluZURhdGEubGVuZ3RoXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBzZXRBY3RpdmVJdGVtKGluZGV4KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBzbmFwIGJhY2sgdG8gYmVnaW5uaW5nIG9mIHNjcm9sbCB3aGVuIHdpbmRvdyBpcyByZXNpemVkXG4gICAgLy8gYXZvaWRzIGEgYnVnIHdoZXJlIGNvbnRlbnQgaXMgY292ZXJlZCB1cCBpZiBjb21pbmcgZnJvbSBzbWFsbGVyIHNjcmVlblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIHNjcm9sbChjYXJvdXNlbFJlZi5jdXJyZW50LCAwKTtcbiAgICAgICAgfTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxTZWN0aW9uIGlkPVwiYWJvdXRcIj5cbiAgICAgICAgICAgIDxTZWN0aW9uVGl0bGU+0J7QsdC+INC80L3QtTwvU2VjdGlvblRpdGxlPlxuICAgICAgICAgICAgPFNlY3Rpb25UZXh0PlxuICAgICAgICAgICAgICAgINCe0L/Ri9GC0L3Ri9C5IEZ1bGwgU3RhY2sgRGV2ZWxvcGVyINGBINC+0L/Ri9GC0L7QvCDRgNCw0LHQvtGC0Ysg0LHQvtC70LXQtSA4INC70LXRgi5cbiAgICAgICAgICAgICAgICDQo9Cy0LvQtdGH0LXQvSDRgNCw0LfRgNCw0LHQvtGC0LrQvtC5INCy0YvRgdC+0LrQvtC60LDRh9C10YHRgtCy0LXQvdC90YvRhSDQstC10LEt0YDQtdGI0LXQvdC40Lkg0YEg0L/RgNC40LzQtdC90LXQvdC40LXQvCBOdXh0LmpzICYgTm9kZS5qcy5cbiAgICAgICAgICAgICAgICDQn9C40YjRgyDRh9C40YHRgtGL0Lkg0Lgg0L/QvtC00LTQtdGA0LbQuNCy0LDQtdC80YvQuSDQutC+0LQsINGA0LDQt9Cy0LjQstCw0Y7RgdGMINC4INC+0LHRg9GH0LDRjtGB0Ywg0LIg0L7QsdC70LDRgdGC0Lgg0LjQvdC90L7QstCw0YbQuNC+0L3QvdGL0YUg0YDQtdGI0LXQvdC40LkuXG4gICAgICAgICAgICA8L1NlY3Rpb25UZXh0PlxuICAgICAgICAgICAgPENhcm91c2VsQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIHtUaW1lTGluZURhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxNb2JpbGVTY3JvbGxOb2RlIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcm91c2VsSXRlbVRpdGxlPntpdGVtLmNvbXBhbnl9PC9DYXJvdXNlbEl0ZW1UaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbEl0ZW1UZXh0PjxiPtCT0L7QtDo8L2I+IHtpdGVtLnllYXJ9PC9DYXJvdXNlbEl0ZW1UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcm91c2VsSXRlbVRleHQ+PGI+0JTQvtC70LbQvdC+0YHRgtGMOjwvYj4ge2l0ZW0ucG9zaXRpb259PC9DYXJvdXNlbEl0ZW1UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcm91c2VsSXRlbVRleHQ+PGI+0KLQtdGF0L3QvtC70L7Qs9C40Lg6PC9iPiB7aXRlbS50ZWNobm9sb2d5fTwvQ2Fyb3VzZWxJdGVtVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbEl0ZW1UZXh0PjxiPtCe0LHRj9C30LDQvdC+0YHRgtC4OjwvYj4ge2l0ZW0udGV4dH08L0Nhcm91c2VsSXRlbVRleHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWxNb2JpbGVTY3JvbGxOb2RlPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9DYXJvdXNlbENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxDYXJvdXNlbEJ1dHRvbnM+XG4gICAgICAgICAgICAgICAge1RpbWVMaW5lRGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZUNsaWNrKGUsIGluZGV4KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxCdXR0b25Eb3QgYWN0aXZlPXthY3RpdmVJdGVtfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Nhcm91c2VsQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9DYXJvdXNlbEJ1dHRvbnM+XG4gICAgICAgICAgICA8U2VjdGlvbkRpdmlkZXIvPlxuICAgICAgICA8L1NlY3Rpb24+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRpbWVsaW5lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==