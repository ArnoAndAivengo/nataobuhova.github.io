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
/* harmony import */ var _Acomplishments_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Acomplishments/AcomplishmentsStyles */ "./src/components/Acomplishments/AcomplishmentsStyles.js");
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
      lineNumber: 68,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionText, {
      children: "\u041E\u043F\u044B\u0442\u043D\u044B\u0439 Full Stack Developer \u0441 \u043E\u043F\u044B\u0442\u043E\u043C \u0440\u0430\u0431\u043E\u0442\u044B \u0431\u043E\u043B\u0435\u0435 8 \u043B\u0435\u0442. \u0423\u0432\u043B\u0435\u0447\u0435\u043D \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u043E\u0439 \u0432\u044B\u0441\u043E\u043A\u043E\u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u0432\u0435\u0431-\u0440\u0435\u0448\u0435\u043D\u0438\u0439 \u0441 \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u0435\u043C Nuxt.js & Node.js. \u041F\u0438\u0448\u0443 \u0447\u0438\u0441\u0442\u044B\u0439 \u0438 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043C\u044B\u0439 \u043A\u043E\u0434, \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u044E\u0441\u044C \u0438 \u043E\u0431\u0443\u0447\u0430\u044E\u0441\u044C \u0432 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u0438\u043D\u043D\u043E\u0432\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u0439."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselContainer, {
      ref: carouselRef,
      onScroll: handleScroll,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.map(function (item, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselMobileScrollNode, {
            "final": index === TOTAL_CAROUSEL_COUNT - 1,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Acomplishments_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_5__.Box, {
              index: index,
              id: "carousel__item-".concat(index),
              active: activeItem,
              onClick: function onClick(e) {
                return handleClick(e, index);
              },
              children: ["\u0413\u043E\u0434: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemTitle, {
                children: item.year
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 38
              }, _this), "\u041C\u0435\u0441\u0442\u043E: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemText, {
                children: item.company
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 40
              }, _this), "\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemText, {
                children: item.position
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 44
              }, _this), "\u041E\u0431\u044F\u0437\u0430\u043D\u043E\u0441\u0442\u0438: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemText, {
                children: item.text
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 45
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 29
            }, _this)
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 25
          }, _this);
        })
      }, void 0, false)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
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
            lineNumber: 112,
            columnNumber: 29
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 25
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionDivider, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 67,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGltZUxpbmUvVGltZUxpbmUuanMiXSwibmFtZXMiOlsiVE9UQUxfQ0FST1VTRUxfQ09VTlQiLCJUaW1lTGluZURhdGEiLCJUaW1lbGluZSIsInVzZVN0YXRlIiwiYWN0aXZlSXRlbSIsInNldEFjdGl2ZUl0ZW0iLCJjYXJvdXNlbFJlZiIsInVzZVJlZiIsInNjcm9sbCIsIm5vZGUiLCJsZWZ0Iiwic2Nyb2xsVG8iLCJiZWhhdmlvciIsImhhbmRsZUNsaWNrIiwiZSIsImkiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJzY3JvbGxMZWZ0IiwiTWF0aCIsImZsb29yIiwic2Nyb2xsV2lkdGgiLCJoYW5kbGVTY3JvbGwiLCJpbmRleCIsInJvdW5kIiwidXNlRWZmZWN0IiwiaGFuZGxlUmVzaXplIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIml0ZW0iLCJ5ZWFyIiwiY29tcGFueSIsInBvc2l0aW9uIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBVUE7QUFNQTtBQUNBO0FBRUEsSUFBTUEsb0JBQW9CLEdBQUdDLHFFQUE3Qjs7QUFFQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQUEsa0JBQ2lCQywrQ0FBUSxDQUFDLENBQUQsQ0FEekI7QUFBQSxNQUNaQyxVQURZO0FBQUEsTUFDQUMsYUFEQTs7QUFFbkIsTUFBTUMsV0FBVyxHQUFHQyw2Q0FBTSxFQUExQjs7QUFFQSxNQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxJQUFELEVBQU9DLElBQVAsRUFBZ0I7QUFDM0IsV0FBT0QsSUFBSSxDQUFDRSxRQUFMLENBQWM7QUFBQ0QsVUFBSSxFQUFKQSxJQUFEO0FBQU9FLGNBQVEsRUFBRTtBQUFqQixLQUFkLENBQVA7QUFDSCxHQUZEOztBQUlBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENB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O0FBR0ksZ0JBQU0sRUFBRW5CLFVBSFo7QUFJSSxpQkFBTyxFQUFFLGlCQUFDVSxDQUFEO0FBQUEsbUJBQU9ELFdBQVcsQ0FBQ0MsQ0FBRCxFQUFJUyxLQUFKLENBQWxCO0FBQUEsV0FKYjtBQUtJLGNBQUksRUFBQyxRQUxUO0FBQUEsaUNBT0ksOERBQUMsOERBQUQ7QUFBbUIsa0JBQU0sRUFBRW5CO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQSixXQUNTbUIsS0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKO0FBV0gsT0FaQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFuQ0osZUFrREksOERBQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWxESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXNESCxDQWhHRDs7R0FBTXJCLFE7O0tBQUFBLFE7QUFrR04sK0RBQWVBLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDMyZDM2ODRiM2JmMDY4NWNkNjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHtcbiAgICBDYXJvdXNlbEJ1dHRvbixcbiAgICBDYXJvdXNlbEJ1dHRvbkRvdCxcbiAgICBDYXJvdXNlbEJ1dHRvbnMsXG4gICAgQ2Fyb3VzZWxDb250YWluZXIsXG4gICAgQ2Fyb3VzZWxJdGVtLFxuICAgIENhcm91c2VsSXRlbVRleHQsXG4gICAgQ2Fyb3VzZWxJdGVtVGl0bGUsXG4gICAgQ2Fyb3VzZWxNb2JpbGVTY3JvbGxOb2RlLFxufSBmcm9tIFwiLi9UaW1lTGluZVN0eWxlc1wiO1xuaW1wb3J0IHtcbiAgICBTZWN0aW9uLFxuICAgIFNlY3Rpb25EaXZpZGVyLFxuICAgIFNlY3Rpb25UZXh0LFxuICAgIFNlY3Rpb25UaXRsZSxcbn0gZnJvbSBcIi4uLy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzXCI7XG5pbXBvcnQge1RpbWVMaW5lRGF0YX0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9jb25zdGFudHNcIjtcbmltcG9ydCB7Qm94fSBmcm9tIFwiLi4vQWNvbXBsaXNobWVudHMvQWNvbXBsaXNobWVudHNTdHlsZXNcIjtcblxuY29uc3QgVE9UQUxfQ0FST1VTRUxfQ09VTlQgPSBUaW1lTGluZURhdGEubGVuZ3RoO1xuXG5jb25zdCBUaW1lbGluZSA9ICgpID0+IHtcbiAgICBjb25zdCBbYWN0aXZlSXRlbSwgc2V0QWN0aXZlSXRlbV0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBjYXJvdXNlbFJlZiA9IHVzZVJlZigpO1xuXG4gICAgY29uc3Qgc2Nyb2xsID0gKG5vZGUsIGxlZnQpID0+IHtcbiAgICAgICAgcmV0dXJuIG5vZGUuc2Nyb2xsVG8oe2xlZnQsIGJlaGF2aW9yOiBcInNtb290aFwifSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUsIGkpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmIChjYXJvdXNlbFJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxMZWZ0ID0gTWF0aC5mbG9vcihcbiAgICAgICAgICAgICAgICBjYXJvdXNlbFJlZi5jdXJyZW50LnNjcm9sbFdpZHRoICogMC43ICogKGkgLyBUaW1lTGluZURhdGEubGVuZ3RoKVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgc2Nyb2xsKGNhcm91c2VsUmVmLmN1cnJlbnQsIHNjcm9sbExlZnQpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICAgICAgaWYgKGNhcm91c2VsUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gTWF0aC5yb3VuZChcbiAgICAgICAgICAgICAgICAoY2Fyb3VzZWxSZWYuY3VycmVudC5zY3JvbGxMZWZ0IC9cbiAgICAgICAgICAgICAgICAgICAgKGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsV2lkdGggKiAwLjcpKSAqXG4gICAgICAgICAgICAgICAgVGltZUxpbmVEYXRhLmxlbmd0aFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgc2V0QWN0aXZlSXRlbShpbmRleCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gc25hcCBiYWNrIHRvIGJlZ2lubmluZyBvZiBzY3JvbGwgd2hlbiB3aW5kb3cgaXMgcmVzaXplZFxuICAgIC8vIGF2b2lkcyBhIGJ1ZyB3aGVyZSBjb250ZW50IGlzIGNvdmVyZWQgdXAgaWYgY29taW5nIGZyb20gc21hbGxlciBzY3JlZW5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XG4gICAgICAgICAgICBzY3JvbGwoY2Fyb3VzZWxSZWYuY3VycmVudCwgMCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8U2VjdGlvbiBpZD1cImFib3V0XCI+XG4gICAgICAgICAgICA8U2VjdGlvblRpdGxlPtCe0LHQviDQvNC90LU8L1NlY3Rpb25UaXRsZT5cbiAgICAgICAgICAgIDxTZWN0aW9uVGV4dD5cbiAgICAgICAgICAgICAgICDQntC/0YvRgtC90YvQuSBGdWxsIFN0YWNrIERldmVsb3BlciDRgSDQvtC/0YvRgtC+0Lwg0YDQsNCx0L7RgtGLINCx0L7Qu9C10LUgOCDQu9C10YIuXG4gICAgICAgICAgICAgICAg0KPQstC70LXRh9C10L0g0YDQsNC30YDQsNCx0L7RgtC60L7QuSDQstGL0YHQvtC60L7QutCw0YfQtdGB0YLQstC10L3QvdGL0YUg0LLQtdCxLdGA0LXRiNC10L3QuNC5INGBINC/0YDQuNC80LXQvdC10L3QuNC10LwgTnV4dC5qcyAmIE5vZGUuanMuXG4gICAgICAgICAgICAgICAg0J/QuNGI0YMg0YfQuNGB0YLRi9C5INC4INC/0L7QtNC00LXRgNC20LjQstCw0LXQvNGL0Lkg0LrQvtC0LCDRgNCw0LfQstC40LLQsNGO0YHRjCDQuCDQvtCx0YPRh9Cw0Y7RgdGMINCyINC+0LHQu9Cw0YHRgtC4INC40L3QvdC+0LLQsNGG0LjQvtC90L3Ri9GFINGA0LXRiNC10L3QuNC5LlxuICAgICAgICAgICAgPC9TZWN0aW9uVGV4dD5cbiAgICAgICAgICAgIDxDYXJvdXNlbENvbnRhaW5lciByZWY9e2Nhcm91c2VsUmVmfSBvblNjcm9sbD17aGFuZGxlU2Nyb2xsfT5cbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICB7VGltZUxpbmVEYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbE1vYmlsZVNjcm9sbE5vZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsPXtpbmRleCA9PT0gVE9UQUxfQ0FST1VTRUxfQ09VTlQgLSAxfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17YGNhcm91c2VsX19pdGVtLSR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlQ2xpY2soZSwgaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JPQvtC0OiA8Q2Fyb3VzZWxJdGVtVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS55ZWFyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Nhcm91c2VsSXRlbVRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQnNC10YHRgtC+OiA8Q2Fyb3VzZWxJdGVtVGV4dD57aXRlbS5jb21wYW55fTwvQ2Fyb3VzZWxJdGVtVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JTQvtC70LbQvdC+0YHRgtGMOiA8Q2Fyb3VzZWxJdGVtVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnBvc2l0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Nhcm91c2VsSXRlbVRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCe0LHRj9C30LDQvdC+0YHRgtC4OiA8Q2Fyb3VzZWxJdGVtVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWxJdGVtVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWxNb2JpbGVTY3JvbGxOb2RlPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIDwvQ2Fyb3VzZWxDb250YWluZXI+XG4gICAgICAgICAgICA8Q2Fyb3VzZWxCdXR0b25zPlxuICAgICAgICAgICAgICAgIHtUaW1lTGluZURhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcm91c2VsQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGljayhlLCBpbmRleCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcm91c2VsQnV0dG9uRG90IGFjdGl2ZT17YWN0aXZlSXRlbX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJvdXNlbEJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvQ2Fyb3VzZWxCdXR0b25zPlxuICAgICAgICAgICAgPFNlY3Rpb25EaXZpZGVyLz5cbiAgICAgICAgPC9TZWN0aW9uPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUaW1lbGluZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=