"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Intro_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/Intro.module.css */ \"./src/styles/Intro.module.css\");\n/* harmony import */ var _styles_Intro_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Intro_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Intro_module_css__WEBPACK_IMPORTED_MODULE_2___default().bgCotainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: \"/green.svg\",\n                className: (_styles_Intro_module_css__WEBPACK_IMPORTED_MODULE_2___default().bgGreen),\n                width: 229,\n                height: 59\n            }, void 0, false, {\n                fileName: \"/Users/danielmalka/Desktop/idftech/src/pages/index.js\",\n                lineNumber: 5,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: \"/brown.svg\",\n                className: (_styles_Intro_module_css__WEBPACK_IMPORTED_MODULE_2___default().bgBrown),\n                width: 229,\n                height: 59\n            }, void 0, false, {\n                fileName: \"/Users/danielmalka/Desktop/idftech/src/pages/index.js\",\n                lineNumber: 7,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Intro_module_css__WEBPACK_IMPORTED_MODULE_2___default().indexcont)\n            }, void 0, false, {\n                fileName: \"/Users/danielmalka/Desktop/idftech/src/pages/index.js\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/danielmalka/Desktop/idftech/src/pages/index.js\",\n        lineNumber: 4,\n        columnNumber: 10\n    }, this);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBK0I7QUFDZTtBQUMvQixTQUFTRSxPQUFPO0lBQzdCLHFCQUFPLDhEQUFDQztRQUFJQyxXQUFZSCw0RUFBaUI7OzBCQUNqQyw4REFBQ0QsbURBQUtBO2dCQUFDTSxLQUFLO2dCQUFjRixXQUFXSCx5RUFBYztnQkFBRU8sT0FBTztnQkFDMURDLFFBQVE7Ozs7OzswQkFDUiw4REFBQ1QsbURBQUtBO2dCQUFDTSxLQUFLO2dCQUFjRixXQUFXSCx5RUFBYztnQkFBRU8sT0FBTztnQkFDNURDLFFBQVE7Ozs7OzswQkFDUiw4REFBQ047Z0JBQUlDLFdBQVdILDJFQUFnQjs7Ozs7Ozs7Ozs7O0FBRzVDLENBQUM7S0FUdUJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qcz80MDgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvSW50cm8ubW9kdWxlLmNzcydcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybig8ZGl2IGNsYXNzTmFtZSA9e3N0eWxlcy5iZ0NvdGFpbmVyfT5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPXsnL2dyZWVuLnN2Zyd9IGNsYXNzTmFtZT17c3R5bGVzLmJnR3JlZW59IHdpZHRoPXsyMjl9XG4gICAgICAgICAgICBoZWlnaHQ9ezU5fSAvPlxuICAgICAgICAgICAgPEltYWdlIHNyYz17Jy9icm93bi5zdmcnfSBjbGFzc05hbWU9e3N0eWxlcy5iZ0Jyb3dufSB3aWR0aD17MjI5fVxuICAgICAgICAgICAgaGVpZ2h0PXs1OX0gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5kZXhjb250fT48L2Rpdj5cblxuICA8L2Rpdj4pXG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJzdHlsZXMiLCJIb21lIiwiZGl2IiwiY2xhc3NOYW1lIiwiYmdDb3RhaW5lciIsInNyYyIsImJnR3JlZW4iLCJ3aWR0aCIsImhlaWdodCIsImJnQnJvd24iLCJpbmRleGNvbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});