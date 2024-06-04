self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/TimeLine/TimeLineStyles.js":
/*!***************************************************!*\
  !*** ./src/components/TimeLine/TimeLineStyles.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarouselContainer": function() { return /* binding */ CarouselContainer; },
/* harmony export */   "CarouselMobileScrollNode": function() { return /* binding */ CarouselMobileScrollNode; },
/* harmony export */   "CarouselItem": function() { return /* binding */ CarouselItem; },
/* harmony export */   "CarouselItemTitle": function() { return /* binding */ CarouselItemTitle; },
/* harmony export */   "CarouselItemImg": function() { return /* binding */ CarouselItemImg; },
/* harmony export */   "CarouselItemText": function() { return /* binding */ CarouselItemText; },
/* harmony export */   "CarouselButtons": function() { return /* binding */ CarouselButtons; },
/* harmony export */   "CarouselButton": function() { return /* binding */ CarouselButton; },
/* harmony export */   "CarouselButtonDot": function() { return /* binding */ CarouselButtonDot; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var CarouselContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.ul.withConfig({
  displayName: "TimeLineStyles__CarouselContainer",
  componentId: "vs8qb6-0"
})(["max-width:1040px;display:grid;grid-template-columns:1fr 1fr;&:first-of-type{margin-left:0;}margin-bottom:80px;scrollbar-width:none;&::-webkit-scrollbar{display:none;}@media ", "{overflow-x:scroll;-webkit-overflow-scrolling:touch;scroll-snap-type:x mandatory;touch-action:pan-x;justify-content:initial;margin-bottom:8px;}"], function (props) {
  return props.theme.breakpoints.sm;
});
var CarouselMobileScrollNode = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "TimeLineStyles__CarouselMobileScrollNode",
  componentId: "vs8qb6-1"
})(["margin-bottom:30px;@media ", "{display:flex;min-width:", "}"], function (props) {
  return props.theme.breakpoints.sm;
}, function (_ref) {
  var _final = _ref["final"];
  return _final ? "120%;" : "min-content";
});
var CarouselItem = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "TimeLineStyles__CarouselItem",
  componentId: "vs8qb6-2"
})(["background:#0F1624;border-radius:3px;@media ", "{margin-left:32px;min-width:120px;background:#0E131F;padding:4px;align-content:start;scroll-snap-align:start;border-radius:3px;overflow:visible;position:relative;height:fit-content;", ";}"], function (props) {
  return props.theme.breakpoints.sm;
}, function (props) {
  return props.active === props.index ? "opacity: 1" : "opacity: 0.5";
});
var CarouselItemTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.h4.withConfig({
  displayName: "TimeLineStyles__CarouselItemTitle",
  componentId: "vs8qb6-3"
})(["font-weight:bold;font-size:24px;line-height:32px;letter-spacing:0.02em;display:flex;background:linear-gradient(121.57deg,#FFFFFF 10%,rgba(255,255,255,0.66) 30.15%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:8px;@media ", "{font-size:20px;line-height:28px;margin-bottom:4px;}@media ", "{font-size:16px;line-height:24px;}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var CarouselItemImg = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.svg.withConfig({
  displayName: "TimeLineStyles__CarouselItemImg",
  componentId: "vs8qb6-4"
})(["margin-left:21px;-webkit-mask-image:linear-gradient(to right,rgba(0,0,0,1),rgba(0,0,0,0));width:100%;@media ", "{-webkit-mask-image:none;margin-left:16px;overflow:visible;}"], function (props) {
  return props.theme.breakpoints.sm;
});
var CarouselItemText = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.p.withConfig({
  displayName: "TimeLineStyles__CarouselItemText",
  componentId: "vs8qb6-5"
})(["font-size:14px;line-height:22px;letter-spacing:0.02em;color:rgba(255,255,255,0.75);padding-right:16px;@media ", "{font-size:12px;line-height:18px;padding-right:32px;}@media ", "{font-size:10px;line-height:16px;padding-right:0;}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var CarouselButtons = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "TimeLineStyles__CarouselButtons",
  componentId: "vs8qb6-6"
})(["width:288px;display:none;visibility:hidden;@media ", "{display:flex;visibility:visible;margin-bottom:48px;}"], function (props) {
  return props.theme.breakpoints.sm;
});
var CarouselButton = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.button.withConfig({
  displayName: "TimeLineStyles__CarouselButton",
  componentId: "vs8qb6-7"
})(["box-sizing:border-box;background:none;padding:4px;border:none;cursor:pointer;margin-right:4px;opacity:", ";transform:", ";&:focus{outline:none;}"], function (props) {
  return props.active === props.index ? "1" : ".33";
}, function (props) {
  return props.active === props.index ? "scale(1.6)" : "scale(1)";
});
var CarouselButtonDot = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "TimeLineStyles__CarouselButtonDot",
  componentId: "vs8qb6-8"
})(["background-color:white;border-radius:10px;margin:auto;width:3px;height:3px;"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGltZUxpbmUvVGltZUxpbmVTdHlsZXMuanMiXSwibmFtZXMiOlsiQ2Fyb3VzZWxDb250YWluZXIiLCJzdHlsZWQiLCJwcm9wcyIsInRoZW1lIiwiYnJlYWtwb2ludHMiLCJzbSIsIkNhcm91c2VsTW9iaWxlU2Nyb2xsTm9kZSIsImZpbmFsIiwiQ2Fyb3VzZWxJdGVtIiwiYWN0aXZlIiwiaW5kZXgiLCJDYXJvdXNlbEl0ZW1UaXRsZSIsIm1kIiwiQ2Fyb3VzZWxJdGVtSW1nIiwiQ2Fyb3VzZWxJdGVtVGV4dCIsIkNhcm91c2VsQnV0dG9ucyIsIkNhcm91c2VsQnV0dG9uIiwiQ2Fyb3VzZWxCdXR0b25Eb3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxpQkFBaUIsR0FBR0Msb0VBQUg7QUFBQTtBQUFBO0FBQUEseVVBa0JqQixVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQTVCO0FBQUEsQ0FsQlksQ0FBdkI7QUEyQkEsSUFBTUMsd0JBQXdCLEdBQUdMLHFFQUFIO0FBQUE7QUFBQTtBQUFBLG9FQUd4QixVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQTVCO0FBQUEsQ0FIbUIsRUFLaEI7QUFBQSxNQUFFRSxNQUFGO0FBQUEsU0FBYUEsTUFBSywwQkFBbEI7QUFBQSxDQUxnQixDQUE5QjtBQVNBLElBQU1DLFlBQVksR0FBR1AscUVBQUg7QUFBQTtBQUFBO0FBQUEsb1BBU1osVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUE1QjtBQUFBLENBVE8sRUFxQmYsVUFBQ0gsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ08sTUFBTixLQUFpQlAsS0FBSyxDQUFDUSxLQUF2QixnQ0FBWDtBQUFBLENBckJlLENBQWxCO0FBeUJBLElBQU1DLGlCQUFpQixHQUFHVixvRUFBSDtBQUFBO0FBQUE7QUFBQSw0V0FZakIsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCUSxFQUE1QjtBQUFBLENBWlksRUFrQmpCLFVBQUFWLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBNUI7QUFBQSxDQWxCWSxDQUF2QjtBQXVCQSxJQUFNUSxlQUFlLEdBQUdaLHFFQUFIO0FBQUE7QUFBQTtBQUFBLHFMQUtmLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBNUI7QUFBQSxDQUxVLENBQXJCO0FBWUEsSUFBTVMsZ0JBQWdCLEdBQUdiLG1FQUFIO0FBQUE7QUFBQTtBQUFBLDRPQU9oQixVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JRLEVBQTVCO0FBQUEsQ0FQVyxFQVloQixVQUFBVixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQTVCO0FBQUEsQ0FaVyxDQUF0QjtBQWtCQSxJQUFNVSxlQUFlLEdBQUdkLHFFQUFIO0FBQUE7QUFBQTtBQUFBLG9IQU1mLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBNUI7QUFBQSxDQU5VLENBQXJCO0FBYUEsSUFBTVcsY0FBYyxHQUFHZix3RUFBSDtBQUFBO0FBQUE7QUFBQSx5SkFPWixVQUFDQyxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDTyxNQUFOLEtBQWlCUCxLQUFLLENBQUNRLEtBQXZCLGNBQVg7QUFBQSxDQVBZLEVBUVYsVUFBQ1IsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ08sTUFBTixLQUFpQlAsS0FBSyxDQUFDUSxLQUF2Qiw0QkFBWDtBQUFBLENBUlUsQ0FBcEI7QUFlQSxJQUFNTyxpQkFBaUIsR0FBR2hCLHFFQUFIO0FBQUE7QUFBQTtBQUFBLG1GQUF2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44NTZmMGMxYjY3NjAxZThmNzAxMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IENhcm91c2VsQ29udGFpbmVyID0gc3R5bGVkLnVsYFxuICAgIG1heC13aWR0aDogMTA0MHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuXG4gICAgJjpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxuXG4gICAgbWFyZ2luLWJvdHRvbTogODBweDtcblxuICAgIC8vcmVtb3ZlIHNjcm9sbGJhclxuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgICAgICAgc2Nyb2xsLXNuYXAtdHlwZTogeCBtYW5kYXRvcnk7XG4gICAgICAgIHRvdWNoLWFjdGlvbjogcGFuLXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogaW5pdGlhbDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIH1cbmBcbmV4cG9ydCBjb25zdCBDYXJvdXNlbE1vYmlsZVNjcm9sbE5vZGUgPSBzdHlsZWQuZGl2YFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgIFxuICAgIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1pbi13aWR0aDogJHsoe2ZpbmFsfSkgPT4gZmluYWwgPyBgMTIwJTtgIDogYG1pbi1jb250ZW50YH1cbiAgICB9XG5gXG5cbmV4cG9ydCBjb25zdCBDYXJvdXNlbEl0ZW0gPSBzdHlsZWQuZGl2YFxuICAgIGJhY2tncm91bmQ6ICMwRjE2MjQ7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC8vbWF4LXdpZHRoOiAxOTZweDtcblxuICAgICAgICAvLyBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgIC8vICAgICBtYXgtd2lkdGg6IDEyNHB4O1xuICAgIC8vIH1cblxuICAgIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xuICAgICAgICBtaW4td2lkdGg6IDEyMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMEUxMzFGO1xuICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xuICAgICAgICBzY3JvbGwtc25hcC1hbGlnbjogc3RhcnQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcblxuICAgICAgICAkeyhwcm9wcykgPT4gcHJvcHMuYWN0aXZlID09PSBwcm9wcy5pbmRleCA/IGBvcGFjaXR5OiAxYCA6IGBvcGFjaXR5OiAwLjVgfTtcbiAgICB9XG5gXG5cbmV4cG9ydCBjb25zdCBDYXJvdXNlbEl0ZW1UaXRsZSA9IHN0eWxlZC5oNGBcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC8qIFRoaXMgZ3JhZGllbnQgaXMgZGlmZmVyZW50IGR1ZSB0byB0aGUgc2l6ZSBvZiB0aGUgVGl0bGUgY29udGFpbmVyLCBpdCBtdXN0IHRyYW5zaXRpb24gc29vbmVyIHRvIGJlIHZpc2libGUgb24gdGhlIHRleHQgKi9cbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTIxLjU3ZGVnLCAjRkZGRkZGIDEwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY2KSAzMC4xNSUpO1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG5cbiAgICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgfVxuXG4gICAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICB9XG5gXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxJdGVtSW1nID0gc3R5bGVkLnN2Z2BcbiAgICBtYXJnaW4tbGVmdDogMjFweDtcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLCAwLCAwLCAxKSwgcmdiYSgwLCAwLCAwLCAwKSk7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgICAgICAtd2Via2l0LW1hc2staW1hZ2U6IG5vbmU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICB9XG5gXG5cbmV4cG9ydCBjb25zdCBDYXJvdXNlbEl0ZW1UZXh0ID0gc3R5bGVkLnBgXG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcblxuICAgIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDMycHg7XG4gICAgfVxuICAgIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgfVxuYFxuZXhwb3J0IGNvbnN0IENhcm91c2VsQnV0dG9ucyA9IHN0eWxlZC5kaXZgXG4gICAgd2lkdGg6IDI4OHB4O1xuXG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG5cbiAgICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0OHB4O1xuICAgIH1cbmBcblxuZXhwb3J0IGNvbnN0IENhcm91c2VsQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgb3BhY2l0eTogJHsocHJvcHMpID0+IHByb3BzLmFjdGl2ZSA9PT0gcHJvcHMuaW5kZXggPyBgMWAgOiBgLjMzYH07XG4gICAgdHJhbnNmb3JtOiAkeyhwcm9wcykgPT4gcHJvcHMuYWN0aXZlID09PSBwcm9wcy5pbmRleCA/IGBzY2FsZSgxLjYpYCA6IGBzY2FsZSgxKWB9O1xuXG4gICAgJjpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgfVxuYFxuXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxCdXR0b25Eb3QgPSBzdHlsZWQuZGl2YFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiAzcHg7XG4gICAgaGVpZ2h0OiAzcHg7XG5gXG4iXSwic291cmNlUm9vdCI6IiJ9