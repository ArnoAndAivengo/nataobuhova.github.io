self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Projects/ProjectsStyles.js":
/*!***************************************************!*\
  !*** ./src/components/Projects/ProjectsStyles.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Img": function() { return /* binding */ Img; },
/* harmony export */   "GridContainer": function() { return /* binding */ GridContainer; },
/* harmony export */   "BlogCard": function() { return /* binding */ BlogCard; },
/* harmony export */   "TitleContent": function() { return /* binding */ TitleContent; },
/* harmony export */   "HeaderThree": function() { return /* binding */ HeaderThree; },
/* harmony export */   "Hr": function() { return /* binding */ Hr; },
/* harmony export */   "Intro": function() { return /* binding */ Intro; },
/* harmony export */   "CardInfo": function() { return /* binding */ CardInfo; },
/* harmony export */   "UtilityList": function() { return /* binding */ UtilityList; },
/* harmony export */   "ExternalLinks": function() { return /* binding */ ExternalLinks; },
/* harmony export */   "TagList": function() { return /* binding */ TagList; },
/* harmony export */   "Tag": function() { return /* binding */ Tag; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var Img = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.img.withConfig({
  displayName: "ProjectsStyles__Img",
  componentId: "l76idc-0"
})(["width:100%;height:100%;object-fit:cover;overflow:hidden;"]);
var GridContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.section.withConfig({
  displayName: "ProjectsStyles__GridContainer",
  componentId: "l76idc-1"
})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(400px,1fr));padding:3rem;place-items:center;column-gap:2rem;row-gap:3rem;@media ", "{display:flex;flex-direction:column;padding:2rem;padding-bottom:0;}"], function (props) {
  return props.theme.breakpoints.sm;
});
var BlogCard = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "ProjectsStyles__BlogCard",
  componentId: "l76idc-2"
})(["border-radius:10px;box-shadow:3px 3px 20px rgba(80,78,78,0.5);text-align:center;width:400px;@media ", "{width:100%;}"], function (props) {
  return props.theme.breakpoints.sm;
});
var TitleContent = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "ProjectsStyles__TitleContent",
  componentId: "l76idc-3"
})(["text-align:center;z-index:20;width:100%;"]);
var HeaderThree = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.h3.withConfig({
  displayName: "ProjectsStyles__HeaderThree",
  componentId: "l76idc-4"
})(["font-weight:500;letter-spacing:2px;color:#9cc9e3;padding:.5rem 0;font-size:", ";"], function (props) {
  return props.title ? '3rem' : '2rem';
});
var Hr = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.hr.withConfig({
  displayName: "ProjectsStyles__Hr",
  componentId: "l76idc-5"
})(["width:50px;height:3px;margin:20px auto;border:0;background:#d0bb57;"]);
var Intro = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "ProjectsStyles__Intro",
  componentId: "l76idc-6"
})(["width:170px;margin:0 auto;color:#dce3e7;font-family:'Droid Serif',serif;font-size:13px;font-style:italic;line-height:18px;"]);
var CardInfo = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.p.withConfig({
  displayName: "ProjectsStyles__CardInfo",
  componentId: "l76idc-7"
})(["width:100%;padding:0 50px;color:#e4e6e7;font-style:2rem;line-height:24px;text-align:justify;@media ", "{padding:.3rem}"], function (props) {
  return props.theme.breakpoints.sm;
});
var UtilityList = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.ul.withConfig({
  displayName: "ProjectsStyles__UtilityList",
  componentId: "l76idc-8"
})(["list-style-type:none;padding:0;display:flex;justify-content:space-around;margin:2.5rem 0;"]);
var ExternalLinks = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.a.withConfig({
  displayName: "ProjectsStyles__ExternalLinks",
  componentId: "l76idc-9"
})(["color:#d4c0c0;font-size:1.6rem;padding:1rem 1.5rem;background:#6b3030;border-radius:15px;transition:0.5s;&:hover{background:#801414;}"]);
var TagList = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.ul.withConfig({
  displayName: "ProjectsStyles__TagList",
  componentId: "l76idc-10"
})(["display:flex;justify-content:space-around;padding:2rem;"]);
var Tag = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.li.withConfig({
  displayName: "ProjectsStyles__Tag",
  componentId: "l76idc-11"
})(["color:#d8bfbf;font-size:1.5rem;"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHNTdHlsZXMuanMiXSwibmFtZXMiOlsiSW1nIiwic3R5bGVkIiwiR3JpZENvbnRhaW5lciIsInByb3BzIiwidGhlbWUiLCJicmVha3BvaW50cyIsInNtIiwiQmxvZ0NhcmQiLCJUaXRsZUNvbnRlbnQiLCJIZWFkZXJUaHJlZSIsInRpdGxlIiwiSHIiLCJJbnRybyIsIkNhcmRJbmZvIiwiVXRpbGl0eUxpc3QiLCJFeHRlcm5hbExpbmtzIiwiVGFnTGlzdCIsIlRhZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLEdBQUcsR0FBR0MscUVBQUg7QUFBQTtBQUFBO0FBQUEsZ0VBQVQ7QUFPQSxJQUFNQyxhQUFhLEdBQUdELHlFQUFIO0FBQUE7QUFBQTtBQUFBLDJOQU9iLFVBQUNFLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBbkM7QUFBQSxDQVBhLENBQW5CO0FBZUEsSUFBTUMsUUFBUSxHQUFHTixxRUFBSDtBQUFBO0FBQUE7QUFBQSw2SEFLUixVQUFDRSxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQW5DO0FBQUEsQ0FMUSxDQUFkO0FBU0EsSUFBTUUsWUFBWSxHQUFHUCxxRUFBSDtBQUFBO0FBQUE7QUFBQSxnREFBbEI7QUFRQSxJQUFNUSxXQUFXLEdBQUdSLG9FQUFIO0FBQUE7QUFBQTtBQUFBLHlGQUtQLFVBQUNFLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNPLEtBQU4sR0FBYyxNQUFkLEdBQXVCLE1BQWxDO0FBQUEsQ0FMTyxDQUFqQjtBQVFBLElBQU1DLEVBQUUsR0FBR1Ysb0VBQUg7QUFBQTtBQUFBO0FBQUEsMkVBQVI7QUFRQSxJQUFNVyxLQUFLLEdBQUdYLHFFQUFIO0FBQUE7QUFBQTtBQUFBLGtJQUFYO0FBV0EsSUFBTVksUUFBUSxHQUFHWixtRUFBSDtBQUFBO0FBQUE7QUFBQSwrSEFPUixVQUFDRSxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQW5DO0FBQUEsQ0FQUSxDQUFkO0FBY0EsSUFBTVEsV0FBVyxHQUFHYixvRUFBSDtBQUFBO0FBQUE7QUFBQSxpR0FBakI7QUFRQSxJQUFNYyxhQUFhLEdBQUdkLG1FQUFIO0FBQUE7QUFBQTtBQUFBLDZJQUFuQjtBQWNBLElBQU1lLE9BQU8sR0FBR2Ysb0VBQUg7QUFBQTtBQUFBO0FBQUEsK0RBQWI7QUFLQSxJQUFNZ0IsR0FBRyxHQUFHaEIsb0VBQUg7QUFBQTtBQUFBO0FBQUEsdUNBQVQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTg3ZDYxODY2MTljN2FjMmQxYjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgSW1nID0gc3R5bGVkLmltZ2BcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbmBcblxuZXhwb3J0IGNvbnN0IEdyaWRDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDQwMHB4LCAxZnIpKTtcbiAgICBwYWRkaW5nOiAzcmVtO1xuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sdW1uLWdhcDogMnJlbTtcbiAgICByb3ctZ2FwOiAzcmVtO1xuICAgIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgcGFkZGluZzogMnJlbTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgfVxuXG5gXG5leHBvcnQgY29uc3QgQmxvZ0NhcmQgPSBzdHlsZWQuZGl2YFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAyMHB4IHJnYmEoODAsIDc4LCA3OCwgMC41KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuYDtcbmV4cG9ydCBjb25zdCBUaXRsZUNvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB6LWluZGV4OiAyMDtcbiAgICB3aWR0aDogMTAwJTtcblxuYDtcblxuXG5leHBvcnQgY29uc3QgSGVhZGVyVGhyZWUgPSBzdHlsZWQuaDNgXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIGNvbG9yOiAjOWNjOWUzO1xuICAgIHBhZGRpbmc6IC41cmVtIDA7XG4gICAgZm9udC1zaXplOiAkeyhwcm9wcykgPT4gcHJvcHMudGl0bGUgPyAnM3JlbScgOiAnMnJlbSd9O1xuYDtcblxuZXhwb3J0IGNvbnN0IEhyID0gc3R5bGVkLmhyYFxuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogM3B4O1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgIGJvcmRlcjogMDtcbiAgICBiYWNrZ3JvdW5kOiAjZDBiYjU3O1xuYDtcblxuZXhwb3J0IGNvbnN0IEludHJvID0gc3R5bGVkLmRpdmBcbiAgICB3aWR0aDogMTcwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgY29sb3I6ICNkY2UzZTc7XG4gICAgZm9udC1mYW1pbHk6ICdEcm9pZCBTZXJpZicsIHNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG5gO1xuXG5cbmV4cG9ydCBjb25zdCBDYXJkSW5mbyA9IHN0eWxlZC5wYFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDAgNTBweDtcbiAgICBjb2xvcjogI2U0ZTZlNztcbiAgICBmb250LXN0eWxlOiAycmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgICAgICBwYWRkaW5nOiAuM3JlbVxuXG4gICAgfVxuYDtcblxuXG5leHBvcnQgY29uc3QgVXRpbGl0eUxpc3QgPSBzdHlsZWQudWxgXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBtYXJnaW46IDIuNXJlbSAwO1xuYDtcblxuZXhwb3J0IGNvbnN0IEV4dGVybmFsTGlua3MgPSBzdHlsZWQuYWBcbiAgICBjb2xvcjogI2Q0YzBjMDtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcbiAgICBiYWNrZ3JvdW5kOiAjNmIzMDMwO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgdHJhbnNpdGlvbjogMC41cztcblxuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjODAxNDE0O1xuXG4gICAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFRhZ0xpc3QgPSBzdHlsZWQudWxgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBwYWRkaW5nOiAycmVtO1xuYFxuZXhwb3J0IGNvbnN0IFRhZyA9IHN0eWxlZC5saWBcbiAgICBjb2xvcjogI2Q4YmZiZjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbmAiXSwic291cmNlUm9vdCI6IiJ9