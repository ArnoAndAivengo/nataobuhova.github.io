self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/styles/GlobalComponents/index.js":
/*!**********************************************!*\
  !*** ./src/styles/GlobalComponents/index.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Section": function() { return /* binding */ Section; },
/* harmony export */   "SectionTitle": function() { return /* binding */ SectionTitle; },
/* harmony export */   "SectionText": function() { return /* binding */ SectionText; },
/* harmony export */   "SectionDivider": function() { return /* binding */ SectionDivider; },
/* harmony export */   "SectionSubText": function() { return /* binding */ SectionSubText; },
/* harmony export */   "SecondaryBtn": function() { return /* binding */ SecondaryBtn; },
/* harmony export */   "ButtonBack": function() { return /* binding */ ButtonBack; },
/* harmony export */   "ButtonFront": function() { return /* binding */ ButtonFront; },
/* harmony export */   "LinkContainer": function() { return /* binding */ LinkContainer; },
/* harmony export */   "LinkIconImg": function() { return /* binding */ LinkIconImg; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var Section = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.section.withConfig({
  displayName: "GlobalComponents__Section",
  componentId: "sc-6qzy6y-0"
})(["display:", ";flex-direction:", ";padding:", ";margin:0 auto;padding-top:60px;max-width:1040px;box-sizing:content-box;position:relative;overflow:hidden;grid-template-columns:1fr 1fr;@media ", "{padding:24px 48px 0;flex-direction:column;}@media ", "{padding:", ";width:calc(100vw - 32px);flex-direction:column;}"], function (props) {
  return props.grid ? "grid" : "flex";
}, function (props) {
  return props.row ? "row" : "column";
}, function (props) {
  return props.nopadding ? "0" : "32px 48px 0";
}, function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
}, function (props) {
  return props.nopadding ? "0" : "16px 16px 0";
});
var SectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.h2.withConfig({
  displayName: "GlobalComponents__SectionTitle",
  componentId: "sc-6qzy6y-1"
})(["font-weight:800;font-size:", ";line-height:", ";width:max-content;max-width:100%;background:linear-gradient(121.57deg,#FFFFFF 18.77%,rgba(255,255,255,0.66) 60.15%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:16px;@media ", "{font-size:", ";line-height:", ";margin-bottom:12px;padding:", ";}@media ", "{font-size:32px;line-height:40px;font-size:", ";line-height:", ";margin-bottom:8px;padding:", ";max-width:100%;}"], function (props) {
  return props.main ? '65px' : '56px';
}, function (props) {
  return props.main ? '72px' : '56px';
}, function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.main ? '56px' : '48px';
}, function (props) {
  return props.main ? '56px' : '48px';
}, function (props) {
  return props.main ? '40px 0 12px' : '0';
}, function (props) {
  return props.theme.breakpoints.sm;
}, function (props) {
  return props.main ? '28px' : '32px';
}, function (props) {
  return props.main ? '32px' : '40px';
}, function (props) {
  return props.main ? '16px 0 8px' : '0';
});
var SectionText = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.p.withConfig({
  displayName: "GlobalComponents__SectionText",
  componentId: "sc-6qzy6y-2"
})(["max-width:800px;font-size:24px;line-height:40px;font-weight:300;padding-bottom:3.6rem;color:rgba(255,255,255,0.5);@media ", "{max-width:670px;font-size:20px;line-height:32px;padding-bottom:24px;}@media ", "{font-size:16px;line-height:24px;padding-bottom:16px;}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var SectionDivider = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "GlobalComponents__SectionDivider",
  componentId: "sc-6qzy6y-3"
})(["width:64px;height:6px;border-radius:10px;background-color:#fff;background:", ";margin:", ";@media ", "{width:48px;height:4px;margin:", ";}@media ", "{width:32px;height:2px;}"], function (props) {
  return props.colorAlt ? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' : 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)';
}, function (props) {
  return props.divider ? "4rem 0" : "";
}, function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.divider ? "2rem 0" : "";
}, function (props) {
  return props.theme.breakpoints.sm;
});
var SectionSubText = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.p.withConfig({
  displayName: "GlobalComponents__SectionSubText",
  componentId: "sc-6qzy6y-4"
})(["max-width:800px;font-weight:300;font-size:18px;line-height:32px;color:rgba(255,255,255,0.75);@media ", "{max-width:672px;font-size:16px;line-height:25px;}@media ", "{font-size:14px;line-height:22px;}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var SecondaryBtn = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.button.withConfig({
  displayName: "GlobalComponents__SecondaryBtn",
  componentId: "sc-6qzy6y-5"
})(["color:#FFF;background:none;border:1px solid rgba(255,255,255,0.33);box-sizing:border-box;border-radius:999px;padding:16px 24px;font-weight:600;font-size:18px;line-height:16px;width:fit-content;margin-top:32px;margin-bottom:80px;cursor:pointer;transition:0.4s ease;&:focus{outline:none;}&:hover{color:#0f1624;background:#fff;border:1px solid #fff;}&:active{background:#e0e4eb;border:1px solid #304169;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}@media ", "{margin-top:24px;margin-bottom:64px;padding:16px 24px;width:fit-content;font-size:20px;line-height:20px;}@media ", "{margin-top:16px;margin-bottom:40px;padding:8px 16px;width:100%;font-size:14px;line-height:16px;}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var ButtonBack = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "GlobalComponents__ButtonBack",
  componentId: "sc-6qzy6y-6"
})(["width:", ";height:", ";border-radius:50px;font-size:", ";font-weight:600;display:flex;align-items:center;justify-content:center;margin:", ";color:#fff;background:", ";cursor:pointer;transition:0.5s ease;position:relative;overflow:hidden;opacity:", ";@media ", "{width:", ";height:", ";font-size:", ";margin-bottom:", ";}@media ", "{width:100%;height:32px;font-size:14px;margin-bottom:", ";}"], function (_ref) {
  var alt = _ref.alt;
  return alt ? '165px' : '262px';
}, function (_ref2) {
  var alt = _ref2.alt;
  return alt ? '52px' : '64px';
}, function (_ref3) {
  var alt = _ref3.alt;
  return alt ? '20px' : '24px';
}, function (_ref4) {
  var alt = _ref4.alt,
      form = _ref4.form;
  return alt || form ? '0' : '0 0 80px';
}, function (_ref5) {
  var alt = _ref5.alt;
  return !alt ? 'linear-gradient(270deg, #ff622e 0%, #B133FF 100%)' : 'linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)';
}, function (_ref6) {
  var disabled = _ref6.disabled;
  return disabled ? '.5' : '1';
}, function (props) {
  return props.theme.breakpoints.md;
}, function (_ref7) {
  var alt = _ref7.alt;
  return alt ? '150px' : '184px';
}, function (_ref8) {
  var alt = _ref8.alt;
  return alt ? '52px' : '48px';
}, function (_ref9) {
  var alt = _ref9.alt;
  return alt ? '20px' : '16px';
}, function (_ref10) {
  var alt = _ref10.alt;
  return alt ? '0' : '64px';
}, function (props) {
  return props.theme.breakpoints.sm;
}, function (_ref11) {
  var alt = _ref11.alt;
  return alt ? '0' : '32px';
});
var ButtonFront = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.button.withConfig({
  displayName: "GlobalComponents__ButtonFront",
  componentId: "sc-6qzy6y-7"
})(["border:none;border-radius:50px;color:#fff;display:flex;position:absolute;top:0;left:0;width:100%;height:100%;background:", ";opacity:", ";transition:.4s ease;font-size:", ";font-weight:600;align-items:center;justify-content:center;cursor:pointer;box-shadow:", ";&:hover{opacity:0;}&:focus{outline:none;}&:active{opacity:1;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}&:disabled{background:linear-gradient(270deg,#00DBD8 0%,#B133FF 100%);opacity:0.5;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}@media ", "{font-size:", ";}@media ", "{font-size:14px;}"], function (_ref12) {
  var alt = _ref12.alt;
  return !alt ? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' : 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)';
}, function (_ref13) {
  var disabled = _ref13.disabled;
  return disabled ? '.5' : '1';
}, function (_ref14) {
  var alt = _ref14.alt;
  return alt ? '20px' : '24px';
}, function (_ref15) {
  var disabled = _ref15.disabled;
  return disabled ? 'inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)' : 'none';
}, function (props) {
  return props.theme.breakpoints.md;
}, function (_ref16) {
  var alt = _ref16.alt;
  return alt ? '20px' : '16px';
}, function (props) {
  return props.theme.breakpoints.sm;
});
var LinkContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "GlobalComponents__LinkContainer",
  componentId: "sc-6qzy6y-8"
})(["margin-left:", ";transition:0.3s ease;justify-content:center;border-radius:50px;padding:8px;&:hover{background-color:#212d45;transform:scale(1.2);cursor:pointer;}@media ", "{margin-left:", ";}@media ", "{margin-left:", ";}"], function (_ref17) {
  var large = _ref17.large;
  return large ? '24px' : '16px';
}, function (props) {
  return props.theme.breakpoints.md;
}, function (_ref18) {
  var large = _ref18.large;
  return large ? '16px' : '8px';
}, function (props) {
  return props.theme.breakpoints.sm;
}, function (_ref19) {
  var large = _ref19.large;
  return large ? '0' : '8px';
});
var LinkIconImg = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "GlobalComponents__LinkIconImg",
  componentId: "sc-6qzy6y-9"
})(["display:flex;height:", ";@media ", "{height:", ";}@media ", "{height:", ";}"], function (_ref20) {
  var large = _ref20.large;
  return large ? '32px' : '24px';
}, function (props) {
  return props.theme.breakpoints.md;
}, function (_ref21) {
  var nav = _ref21.nav;
  return nav ? '16px' : '24px';
}, function (props) {
  return props.theme.breakpoints.sm;
}, function (_ref22) {
  var large = _ref22.large;
  return large ? '32px' : '16px';
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlNlY3Rpb24iLCJzdHlsZWQiLCJwcm9wcyIsImdyaWQiLCJyb3ciLCJub3BhZGRpbmciLCJ0aGVtZSIsImJyZWFrcG9pbnRzIiwibWQiLCJzbSIsIlNlY3Rpb25UaXRsZSIsIm1haW4iLCJTZWN0aW9uVGV4dCIsIlNlY3Rpb25EaXZpZGVyIiwiY29sb3JBbHQiLCJkaXZpZGVyIiwiU2VjdGlvblN1YlRleHQiLCJTZWNvbmRhcnlCdG4iLCJCdXR0b25CYWNrIiwiYWx0IiwiZm9ybSIsImRpc2FibGVkIiwiQnV0dG9uRnJvbnQiLCJMaW5rQ29udGFpbmVyIiwibGFyZ2UiLCJMaW5rSWNvbkltZyIsIm5hdiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxPQUFPLEdBQUdDLHlFQUFIO0FBQUE7QUFBQTtBQUFBLDhUQUNMLFVBQUNDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLElBQU4sR0FBYSxNQUFiLEdBQXNCLE1BQWpDO0FBQUEsQ0FESyxFQUVFLFVBQUNELEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNFLEdBQU4sR0FBWSxLQUFaLEdBQW9CLFFBQS9CO0FBQUEsQ0FGRixFQUdMLFVBQUNGLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNHLFNBQU4sR0FBa0IsR0FBbEIsR0FBd0IsYUFBbkM7QUFBQSxDQUhLLEVBWVAsVUFBQ0gsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0ksS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUFuQztBQUFBLENBWk8sRUFpQlAsVUFBQ04sS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0ksS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQUFuQztBQUFBLENBakJPLEVBa0JELFVBQUNQLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNHLFNBQU4sR0FBa0IsR0FBbEIs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S0FBRixVQUFFQSxLQUFGO0FBQUEsU0FBYUEsS0FBSyxHQUFHLE1BQUgsR0FBWSxNQUE5QjtBQUFBLENBVE0sQ0FBakIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGIzMTZiNzY0YWMxYzEyZDFlOWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXG4gICAgZGlzcGxheTogJHsocHJvcHMpID0+IHByb3BzLmdyaWQgPyBcImdyaWRcIiA6IFwiZmxleFwifTtcbiAgICBmbGV4LWRpcmVjdGlvbjogJHsocHJvcHMpID0+IHByb3BzLnJvdyA/IFwicm93XCIgOiBcImNvbHVtblwifTtcbiAgICBwYWRkaW5nOiAkeyhwcm9wcykgPT4gcHJvcHMubm9wYWRkaW5nID8gXCIwXCIgOiBcIjMycHggNDhweCAwXCJ9O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xuICAgIG1heC13aWR0aDogMTA0MHB4O1xuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcblxuICAgIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcbiAgICAgICAgcGFkZGluZzogMjRweCA0OHB4IDA7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgICAgICBwYWRkaW5nOiAkeyhwcm9wcykgPT4gcHJvcHMubm9wYWRkaW5nID8gXCIwXCIgOiBcIjE2cHggMTZweCAwXCJ9IDtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwdncgLSAzMnB4KTtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5gXG5cbmV4cG9ydCBjb25zdCBTZWN0aW9uVGl0bGUgPSBzdHlsZWQuaDJgXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBmb250LXNpemU6ICR7KHByb3BzKSA9PiBwcm9wcy5tYWluID8gJzY1cHgnIDogJzU2cHgnfTtcbiAgICBsaW5lLWhlaWdodDogJHsocHJvcHMpID0+IHByb3BzLm1haW4gPyAnNzJweCcgOiAnNTZweCd9O1xuICAgIHdpZHRoOiBtYXgtY29udGVudDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEyMS41N2RlZywgI0ZGRkZGRiAxOC43NyUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42NikgNjAuMTUlKTtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcblxuICAgIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG4gICAgICAgIGZvbnQtc2l6ZTogJHsocHJvcHMpID0+IHByb3BzLm1haW4gPyAnNTZweCcgOiAnNDhweCd9O1xuICAgICAgICBsaW5lLWhlaWdodDogJHsocHJvcHMpID0+IHByb3BzLm1haW4gPyAnNTZweCcgOiAnNDhweCd9O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgICAgICBwYWRkaW5nOiAkeyhwcm9wcykgPT4gcHJvcHMubWFpbiA/ICc0MHB4IDAgMTJweCcgOiAnMCd9O1xuICAgIH1cblxuICAgIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogJHsocHJvcHMpID0+IHByb3BzLm1haW4gPyAnMjhweCcgOiAnMzJweCd9O1xuICAgICAgICBsaW5lLWhlaWdodDogJHsocHJvcHMpID0+IHByb3BzLm1haW4gPyAnMzJweCcgOiAnNDBweCd9O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgIHBhZGRpbmc6ICR7KHByb3BzKSA9PiBwcm9wcy5tYWluID8gJzE2cHggMCA4cHgnIDogJzAnfTtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIH1cbmBcblxuZXhwb3J0IGNvbnN0IFNlY3Rpb25UZXh0ID0gc3R5bGVkLnBgXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMy42cmVtO1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG5cbiAgICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG4gICAgICAgIG1heC13aWR0aDogNjcwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xuICAgIH1cblxuICAgIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gICAgfVxuYFxuXG5leHBvcnQgY29uc3QgU2VjdGlvbkRpdmlkZXIgPSBzdHlsZWQuZGl2YFxuXG4gICAgd2lkdGg6IDY0cHg7XG4gICAgaGVpZ2h0OiA2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQ6ICR7KHByb3BzKSA9PiBwcm9wcy5jb2xvckFsdCA/XG4gICAgICAgICAgICAnbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI0Y0NjczNyAwJSwgIzk0NURENiAxMDAlKScgOlxuICAgICAgICAgICAgJ2xpbmVhci1ncmFkaWVudCgyNzBkZWcsICMxM0FEQzcgMCUsICM5NDVERDYgMTAwJSknfTtcblxuICAgIG1hcmdpbjogJHsocHJvcHMpID0+IHByb3BzLmRpdmlkZXIgPyBcIjRyZW0gMFwiIDogXCJcIn07XG5cbiAgICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG4gICAgICAgIHdpZHRoOiA0OHB4O1xuICAgICAgICBoZWlnaHQ6IDRweDtcbiAgICAgICAgbWFyZ2luOiAkeyhwcm9wcykgPT4gcHJvcHMuZGl2aWRlciA/IFwiMnJlbSAwXCIgOiBcIlwifTtcbiAgICB9XG5cbiAgICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICB9XG5gXG5leHBvcnQgY29uc3QgU2VjdGlvblN1YlRleHQgPSBzdHlsZWQucGBcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xuXG4gICAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgICAgICBtYXgtd2lkdGg6IDY3MnB4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgIH1cblxuICAgIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICB9XG5gXG5leHBvcnQgY29uc3QgU2Vjb25kYXJ5QnRuID0gc3R5bGVkLmJ1dHRvbmBcbiAgICBjb2xvcjogI0ZGRjtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zMyk7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgICBwYWRkaW5nOiAxNnB4IDI0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogODBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xuXG4gICAgJjpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjMGYxNjI0O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICAgIH1cblxuICAgICY6YWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2UwZTRlYjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzMwNDE2OTtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDJweCAxcHggcmdiYSg0NiwgNDksIDU1LCAwLjE1KSwgaW5zZXQgMHB4IDBweCA0cHggcmdiYSgyMCwgMjAsIDU1LCAwLjMpO1xuICAgIH1cblxuICAgIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNjRweDtcbiAgICAgICAgcGFkZGluZzogMTZweCAyNHB4O1xuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgfVxuXG4gICAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgfVxuYFxuXG5leHBvcnQgY29uc3QgQnV0dG9uQmFjayA9IHN0eWxlZC5kaXZgXG4gICAgd2lkdGg6ICR7KHthbHR9KSA9PiBhbHQgPyAnMTY1cHgnIDogJzI2MnB4J307XG4gICAgaGVpZ2h0OiAkeyh7YWx0fSkgPT4gYWx0ID8gJzUycHgnIDogJzY0cHgnfTtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGZvbnQtc2l6ZTogJHsoe2FsdH0pID0+IGFsdCA/ICcyMHB4JyA6ICcyNHB4J307XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luOiAkeyh7YWx0LCBmb3JtfSkgPT4gKGFsdCB8fCBmb3JtKSA/ICcwJyA6ICcwIDAgODBweCd9O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQ6ICR7KHthbHR9KSA9PiAhYWx0ID8gJ2xpbmVhci1ncmFkaWVudCgyNzBkZWcsICNmZjYyMmUgMCUsICNCMTMzRkYgMTAwJSknIDogJ2xpbmVhci1ncmFkaWVudCgyNzBkZWcsICMwMERCRDggMCUsICNCMTMzRkYgMTAwJSknfTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG9wYWNpdHk6ICR7KHtkaXNhYmxlZH0pID0+IGRpc2FibGVkID8gJy41JyA6ICcxJ307XG5cbiAgICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG4gICAgICAgIHdpZHRoOiAkeyh7YWx0fSkgPT4gYWx0ID8gJzE1MHB4JyA6ICcxODRweCd9O1xuICAgICAgICBoZWlnaHQ6ICR7KHthbHR9KSA9PiBhbHQgPyAnNTJweCcgOiAnNDhweCd9O1xuICAgICAgICBmb250LXNpemU6ICR7KHthbHR9KSA9PiBhbHQgPyAnMjBweCcgOiAnMTZweCd9O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAkeyh7YWx0fSkgPT4gYWx0ID8gJzAnIDogJzY0cHgnfTtcbiAgICB9XG5cbiAgICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsoe2FsdH0pID0+IGFsdCA/ICcwJyA6ICczMnB4J307XG4gICAgfVxuYFxuXG5leHBvcnQgY29uc3QgQnV0dG9uRnJvbnQgPSBzdHlsZWQuYnV0dG9uYFxuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAkeyh7YWx0fSkgPT4gIWFsdCA/ICdsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjRjQ2NzM3IDAlLCAjOTQ1REQ2IDEwMCUpJyA6ICdsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMTNBREM3IDAlLCAjOTQ1REQ2IDEwMCUpJ307XG4gICAgb3BhY2l0eTogJHsoe2Rpc2FibGVkfSkgPT4gZGlzYWJsZWQgPyAnLjUnIDogJzEnfTtcbiAgICB0cmFuc2l0aW9uOiAuNHMgZWFzZTtcbiAgICBmb250LXNpemU6ICR7KHthbHR9KSA9PiBhbHQgPyAnMjBweCcgOiAnMjRweCd9O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm94LXNoYWRvdzogJHsoe2Rpc2FibGVkfSkgPT4gZGlzYWJsZWQgPyAnaW5zZXQgMHB4IDJweCAxcHggcmdiYSg0NiwgNDksIDU1LCAwLjE1KSwgaW5zZXQgMHB4IDBweCA0cHggcmdiYSgyMCwgMjAsIDU1LCAwLjMpJyA6ICdub25lJ307XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG5cbiAgICAmOmFjdGl2ZSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAycHggMXB4IHJnYmEoNDYsIDQ5LCA1NSwgMC4xNSksIGluc2V0IDBweCAwcHggNHB4IHJnYmEoMjAsIDIwLCA1NSwgMC4zKTtcbiAgICB9XG5cbiAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzAwREJEOCAwJSwgI0IxMzNGRiAxMDAlKTtcbiAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMnB4IDFweCByZ2JhKDQ2LCA0OSwgNTUsIDAuMTUpLCBpbnNldCAwcHggMHB4IDRweCByZ2JhKDIwLCAyMCwgNTUsIDAuMyk7XG4gICAgfVxuXG4gICAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgICAgICBmb250LXNpemU6ICR7KHthbHR9KSA9PiBhbHQgPyAnMjBweCcgOiAnMTZweCd9O1xuICAgIH1cblxuICAgIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbmBcblxuZXhwb3J0IGNvbnN0IExpbmtDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgIG1hcmdpbi1sZWZ0OiAkeyh7bGFyZ2V9KSA9PiBsYXJnZSA/ICcyNHB4JyA6ICcxNnB4J307XG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgcGFkZGluZzogOHB4O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTJkNDU7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICR7KHtsYXJnZX0pID0+IGxhcmdlID8gJzE2cHgnIDogJzhweCd9O1xuXG4gICAgfVxuICAgIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICR7KHtsYXJnZX0pID0+IGxhcmdlID8gJzAnIDogJzhweCd9O1xuICAgIH1cbmBcblxuZXhwb3J0IGNvbnN0IExpbmtJY29uSW1nID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogJHsoe2xhcmdlfSkgPT4gbGFyZ2UgPyAnMzJweCcgOiAnMjRweCd9O1xuXG4gICAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgICAgICBoZWlnaHQ6ICR7KHtuYXZ9KSA9PiBuYXYgPyAnMTZweCcgOiAnMjRweCd9O1xuICAgIH1cblxuICAgIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICAgICAgaGVpZ2h0OiAkeyh7bGFyZ2V9KSA9PiBsYXJnZSA/ICczMnB4JyA6ICcxNnB4J307XG4gICAgfVxuYFxuIl0sInNvdXJjZVJvb3QiOiIifQ==