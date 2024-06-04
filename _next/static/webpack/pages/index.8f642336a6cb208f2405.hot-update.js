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
})(["display:", ";flex-direction:", ";padding:", ";margin:0 auto;max-width:1040px;box-sizing:content-box;position:relative;overflow:hidden;grid-template-columns:1fr 1fr;@media ", "{padding:24px 48px 0;flex-direction:column;}@media ", "{padding:", ";width:calc(100vw - 32px);flex-direction:column;}"], function (props) {
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
})(["font-weight:800;font-size:", ";line-height:", ";width:max-content;max-width:100%;background:linear-gradient(121.57deg,#FFFFFF 18.77%,rgba(255,255,255,0.66) 60.15%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:16px;padding:", ";@media ", "{font-size:", ";line-height:", ";margin-bottom:12px;padding:", ";}@media ", "{font-size:32px;line-height:40px;font-size:", ";line-height:", ";margin-bottom:8px;padding:", ";max-width:100%;}"], function (props) {
  return props.main ? '65px' : '56px';
}, function (props) {
  return props.main ? '72px' : '56px';
}, function (props) {
  return props.main ? '58px 0 16px' : '0';
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
})(["width:64px;height:6px;border-radius:10px;background-color:#fff;background:", ";margin:", ";@media ", "{width:48px;height:4px;}@media ", "{width:32px;height:2px;}"], function (props) {
  return props.colorAlt ? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' : 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)';
}, function (props) {
  return props.divider ? "4rem 0" : "";
}, function (props) {
  return props.theme.breakpoints.md;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlNlY3Rpb24iLCJzdHlsZWQiLCJwcm9wcyIsImdyaWQiLCJyb3ciLCJub3BhZGRpbmciLCJ0aGVtZSIsImJyZWFrcG9pbnRzIiwibWQiLCJzbSIsIlNlY3Rpb25UaXRsZSIsIm1haW4iLCJTZWN0aW9uVGV4dCIsIlNlY3Rpb25EaXZpZGVyIiwiY29sb3JBbHQiLCJkaXZpZGVyIiwiU2VjdGlvblN1YlRleHQiLCJTZWNvbmRhcnlCdG4iLCJCdXR0b25CYWNrIiwiYWx0IiwiZm9ybSIsImRpc2FibGVkIiwiQnV0dG9uRnJvbnQiLCJMaW5rQ29udGFpbmVyIiwibGFyZ2UiLCJMaW5rSWNvbkltZyIsIm5hdiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxPQUFPLEdBQUdDLHlFQUFIO0FBQUE7QUFBQTtBQUFBLDZTQUNMLFVBQUNDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLElBQU4sR0FBYSxNQUFiLEdBQXNCLE1BQWpDO0FBQUEsQ0FESyxFQUVFLFVBQUNELEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNFLEdBQU4sR0FBWSxLQUFaLEdBQW9CLFFBQS9CO0FBQUEsQ0FGRixFQUdMLFVBQUNGLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNHLFNBQU4sR0FBa0IsR0FBbEIsR0FBd0IsYUFBbkM7QUFBQSxDQUhLLEVBV1AsVUFBQ0gsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0ksS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUFuQztBQUFBLENBWE8sRUFnQlAsVUFBQ04sS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0ksS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQUFuQztBQUFBLENBaEJPLEVBaUJELFVBQUNQLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNHLFNBQU4sR0FBa0IsR0FBbEIs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S0FBRixVQUFFQSxLQUFGO0FBQUEsU0FBYUEsS0FBSyxHQUFHLE1BQUgsR0FBWSxNQUE5QjtBQUFBLENBVE0sQ0FBakIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGY2NDIzMzZhNmNiMjA4ZjI0MDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXG4gICAgZGlzcGxheTogJHsocHJvcHMpID0+IHByb3BzLmdyaWQgPyBcImdyaWRcIiA6IFwiZmxleFwifTtcbiAgICBmbGV4LWRpcmVjdGlvbjogJHsocHJvcHMpID0+IHByb3BzLnJvdyA/IFwicm93XCIgOiBcImNvbHVtblwifTtcbiAgICBwYWRkaW5nOiAkeyhwcm9wcykgPT4gcHJvcHMubm9wYWRkaW5nID8gXCIwXCIgOiBcIjMycHggNDhweCAwXCJ9O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1heC13aWR0aDogMTA0MHB4O1xuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcblxuICAgIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcbiAgICAgICAgcGFkZGluZzogMjRweCA0OHB4IDA7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgICAgICBwYWRkaW5nOiAkeyhwcm9wcykgPT4gcHJvcHMubm9wYWRkaW5nID8gXCIwXCIgOiBcIjE2cHggMTZweCAwXCJ9IDtcblxuICAgICAgICB3aWR0aDogY2FsYygxMDB2dyAtIDMycHgpO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbmBcblxuZXhwb3J0IGNvbnN0IFNlY3Rpb25UaXRsZSA9IHN0eWxlZC5oMmBcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGZvbnQtc2l6ZTogJHsocHJvcHMpID0+IHByb3BzLm1haW4gPyAnNjVweCcgOiAnNTZweCd9O1xuICAgIGxpbmUtaGVpZ2h0OiAkeyhwcm9wcykgPT4gcHJvcHMubWFpbiA/ICc3MnB4JyA6ICc1NnB4J307XG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTIxLjU3ZGVnLCAjRkZGRkZGIDE4Ljc3JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY2KSA2MC4xNSUpO1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIHBhZGRpbmc6ICR7KHByb3BzKSA9PiBwcm9wcy5tYWluID8gJzU4cHggMCAxNnB4JyA6ICcwJ307XG5cbiAgICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgICAgICBmb250LXNpemU6ICR7KHByb3BzKSA9PiBwcm9wcy5tYWluID8gJzU2cHgnIDogJzQ4cHgnfTtcbiAgICAgICAgbGluZS1oZWlnaHQ6ICR7KHByb3BzKSA9PiBwcm9wcy5tYWluID8gJzU2cHgnIDogJzQ4cHgnfTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICAgICAgcGFkZGluZzogJHsocHJvcHMpID0+IHByb3BzLm1haW4gPyAnNDBweCAwIDEycHgnIDogJzAnfTtcbiAgICB9XG5cbiAgICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICBmb250LXNpemU6ICR7KHByb3BzKSA9PiBwcm9wcy5tYWluID8gJzI4cHgnIDogJzMycHgnfTtcbiAgICAgICAgbGluZS1oZWlnaHQ6ICR7KHByb3BzKSA9PiBwcm9wcy5tYWluID8gJzMycHgnIDogJzQwcHgnfTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICBwYWRkaW5nOiAkeyhwcm9wcykgPT4gcHJvcHMubWFpbiA/ICcxNnB4IDAgOHB4JyA6ICcwJ307XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB9XG5gXG5cbmV4cG9ydCBjb25zdCBTZWN0aW9uVGV4dCA9IHN0eWxlZC5wYFxuICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgcGFkZGluZy1ib3R0b206IDMuNnJlbTtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuXG4gICAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgICAgICBtYXgtd2lkdGg6IDY3MHB4O1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjRweDtcbiAgICB9XG5cbiAgICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgIH1cbmBcblxuZXhwb3J0IGNvbnN0IFNlY3Rpb25EaXZpZGVyID0gc3R5bGVkLmRpdmBcblxuICAgIHdpZHRoOiA2NHB4O1xuICAgIGhlaWdodDogNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kOiAkeyhwcm9wcykgPT4gcHJvcHMuY29sb3JBbHQgP1xuICAgICAgICAgICAgJ2xpbmVhci1ncmFkaWVudCgyNzBkZWcsICNGNDY3MzcgMCUsICM5NDVERDYgMTAwJSknIDpcbiAgICAgICAgICAgICdsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMTNBREM3IDAlLCAjOTQ1REQ2IDEwMCUpJ307XG5cbiAgICBtYXJnaW46ICR7KHByb3BzKSA9PiBwcm9wcy5kaXZpZGVyID8gXCI0cmVtIDBcIiA6IFwiXCJ9O1xuXG4gICAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgICAgICB3aWR0aDogNDhweDtcbiAgICAgICAgaGVpZ2h0OiA0cHg7XG4gICAgfVxuXG4gICAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgICAgICB3aWR0aDogMzJweDtcbiAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgfVxuYFxuZXhwb3J0IGNvbnN0IFNlY3Rpb25TdWJUZXh0ID0gc3R5bGVkLnBgXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcblxuICAgIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcbiAgICAgICAgbWF4LXdpZHRoOiA2NzJweDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICB9XG5cbiAgICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgfVxuYFxuZXhwb3J0IGNvbnN0IFNlY29uZGFyeUJ0biA9IHN0eWxlZC5idXR0b25gXG4gICAgY29sb3I6ICNGRkY7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzMpO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gICAgcGFkZGluZzogMTZweCAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcblxuICAgICY6Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogIzBmMTYyNDtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICB9XG5cbiAgICAmOmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlMGU0ZWI7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMDQxNjk7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAycHggMXB4IHJnYmEoNDYsIDQ5LCA1NSwgMC4xNSksIGluc2V0IDBweCAwcHggNHB4IHJnYmEoMjAsIDIwLCA1NSwgMC4zKTtcbiAgICB9XG5cbiAgICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDY0cHg7XG4gICAgICAgIHBhZGRpbmc6IDE2cHggMjRweDtcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIH1cblxuICAgIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIH1cbmBcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbkJhY2sgPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiAkeyh7YWx0fSkgPT4gYWx0ID8gJzE2NXB4JyA6ICcyNjJweCd9O1xuICAgIGhlaWdodDogJHsoe2FsdH0pID0+IGFsdCA/ICc1MnB4JyA6ICc2NHB4J307XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBmb250LXNpemU6ICR7KHthbHR9KSA9PiBhbHQgPyAnMjBweCcgOiAnMjRweCd9O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogJHsoe2FsdCwgZm9ybX0pID0+IChhbHQgfHwgZm9ybSkgPyAnMCcgOiAnMCAwIDgwcHgnfTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kOiAkeyh7YWx0fSkgPT4gIWFsdCA/ICdsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjZmY2MjJlIDAlLCAjQjEzM0ZGIDEwMCUpJyA6ICdsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMDBEQkQ4IDAlLCAjQjEzM0ZGIDEwMCUpJ307XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBvcGFjaXR5OiAkeyh7ZGlzYWJsZWR9KSA9PiBkaXNhYmxlZCA/ICcuNScgOiAnMSd9O1xuXG4gICAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgICAgICB3aWR0aDogJHsoe2FsdH0pID0+IGFsdCA/ICcxNTBweCcgOiAnMTg0cHgnfTtcbiAgICAgICAgaGVpZ2h0OiAkeyh7YWx0fSkgPT4gYWx0ID8gJzUycHgnIDogJzQ4cHgnfTtcbiAgICAgICAgZm9udC1zaXplOiAkeyh7YWx0fSkgPT4gYWx0ID8gJzIwcHgnIDogJzE2cHgnfTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogJHsoe2FsdH0pID0+IGFsdCA/ICcwJyA6ICc2NHB4J307XG4gICAgfVxuXG4gICAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206ICR7KHthbHR9KSA9PiBhbHQgPyAnMCcgOiAnMzJweCd9O1xuICAgIH1cbmBcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbkZyb250ID0gc3R5bGVkLmJ1dHRvbmBcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogJHsoe2FsdH0pID0+ICFhbHQgPyAnbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI0Y0NjczNyAwJSwgIzk0NURENiAxMDAlKScgOiAnbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzEzQURDNyAwJSwgIzk0NURENiAxMDAlKSd9O1xuICAgIG9wYWNpdHk6ICR7KHtkaXNhYmxlZH0pID0+IGRpc2FibGVkID8gJy41JyA6ICcxJ307XG4gICAgdHJhbnNpdGlvbjogLjRzIGVhc2U7XG4gICAgZm9udC1zaXplOiAkeyh7YWx0fSkgPT4gYWx0ID8gJzIwcHgnIDogJzI0cHgnfTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJveC1zaGFkb3c6ICR7KHtkaXNhYmxlZH0pID0+IGRpc2FibGVkID8gJ2luc2V0IDBweCAycHggMXB4IHJnYmEoNDYsIDQ5LCA1NSwgMC4xNSksIGluc2V0IDBweCAwcHggNHB4IHJnYmEoMjAsIDIwLCA1NSwgMC4zKScgOiAnbm9uZSd9O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuXG4gICAgJjpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgfVxuXG4gICAgJjphY3RpdmUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMnB4IDFweCByZ2JhKDQ2LCA0OSwgNTUsIDAuMTUpLCBpbnNldCAwcHggMHB4IDRweCByZ2JhKDIwLCAyMCwgNTUsIDAuMyk7XG4gICAgfVxuXG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICMwMERCRDggMCUsICNCMTMzRkYgMTAwJSk7XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDJweCAxcHggcmdiYSg0NiwgNDksIDU1LCAwLjE1KSwgaW5zZXQgMHB4IDBweCA0cHggcmdiYSgyMCwgMjAsIDU1LCAwLjMpO1xuICAgIH1cblxuICAgIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcbiAgICAgICAgZm9udC1zaXplOiAkeyh7YWx0fSkgPT4gYWx0ID8gJzIwcHgnIDogJzE2cHgnfTtcbiAgICB9XG5cbiAgICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5gXG5cbmV4cG9ydCBjb25zdCBMaW5rQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICBtYXJnaW4tbGVmdDogJHsoe2xhcmdlfSkgPT4gbGFyZ2UgPyAnMjRweCcgOiAnMTZweCd9O1xuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIHBhZGRpbmc6IDhweDtcblxuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyZDQ1O1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAkeyh7bGFyZ2V9KSA9PiBsYXJnZSA/ICcxNnB4JyA6ICc4cHgnfTtcblxuICAgIH1cbiAgICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAkeyh7bGFyZ2V9KSA9PiBsYXJnZSA/ICcwJyA6ICc4cHgnfTtcbiAgICB9XG5gXG5cbmV4cG9ydCBjb25zdCBMaW5rSWNvbkltZyA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6ICR7KHtsYXJnZX0pID0+IGxhcmdlID8gJzMycHgnIDogJzI0cHgnfTtcblxuICAgIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcbiAgICAgICAgaGVpZ2h0OiAkeyh7bmF2fSkgPT4gbmF2ID8gJzE2cHgnIDogJzI0cHgnfTtcbiAgICB9XG5cbiAgICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgICAgIGhlaWdodDogJHsoe2xhcmdlfSkgPT4gbGFyZ2UgPyAnMzJweCcgOiAnMTZweCd9O1xuICAgIH1cbmBcbiJdLCJzb3VyY2VSb290IjoiIn0=