"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/introduction",{

/***/ "./src/components/Video.js":
/*!*********************************!*\
  !*** ./src/components/Video.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Video() {\n    _s();\n    const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleVideoClick = ()=>{\n        if (videoRef.current.paused) {\n            videoRef.current.play();\n        } else {\n            videoRef.current.pause();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n            ref: videoRef,\n            onClick: handleVideoClick,\n            width: \"640\",\n            height: \"360\",\n            autoPlay: true,\n            controlsList: \"\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                src: \"/video.mp4\",\n                type: \"video/mp4\"\n            }, void 0, false, {\n                fileName: \"/Users/danielmalka/Desktop/idftech/src/components/Video.js\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/danielmalka/Desktop/idftech/src/components/Video.js\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/danielmalka/Desktop/idftech/src/components/Video.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_s(Video, \"0CLVWOVx+8g0ODBjgEMJWUwEryM=\");\n_c = Video;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Video);\nvar _c;\n$RefreshReg$(_c, \"Video\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9WaWRlby5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXNDO0FBQ1E7QUFHOUMsU0FBU0csUUFBUTs7SUFDZixNQUFNQyxXQUFXSCw2Q0FBTUEsQ0FBQyxJQUFJO0lBRTVCLE1BQU1JLG1CQUFtQixJQUFNO1FBQzdCLElBQUlELFNBQVNFLE9BQU8sQ0FBQ0MsTUFBTSxFQUFFO1lBQzNCSCxTQUFTRSxPQUFPLENBQUNFLElBQUk7UUFDdkIsT0FBTztZQUNMSixTQUFTRSxPQUFPLENBQUNHLEtBQUs7UUFDeEIsQ0FBQztJQUNIO0lBRUEscUJBQ0UsOERBQUNDO2tCQUNDLDRFQUFDQztZQUFNQyxLQUFLUjtZQUFVUyxTQUFTUjtZQUFrQlMsT0FBTTtZQUFNQyxRQUFPO1lBQU1DLFFBQVE7WUFBQ0MsY0FBYTtzQkFDOUYsNEVBQUNDO2dCQUFPQyxLQUFJO2dCQUFhQyxNQUFLOzs7Ozs7Ozs7Ozs7Ozs7O0FBSXRDO0dBbEJTakI7S0FBQUE7QUFtQlQsK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVmlkZW8uanM/MGM0NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9JbnRyby5tb2R1bGUuY3NzJ1xuXG5cbmZ1bmN0aW9uIFZpZGVvKCkge1xuICBjb25zdCB2aWRlb1JlZiA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCBoYW5kbGVWaWRlb0NsaWNrID0gKCkgPT4ge1xuICAgIGlmICh2aWRlb1JlZi5jdXJyZW50LnBhdXNlZCkge1xuICAgICAgdmlkZW9SZWYuY3VycmVudC5wbGF5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZpZGVvUmVmLmN1cnJlbnQucGF1c2UoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHZpZGVvIHJlZj17dmlkZW9SZWZ9IG9uQ2xpY2s9e2hhbmRsZVZpZGVvQ2xpY2t9IHdpZHRoPVwiNjQwXCIgaGVpZ2h0PVwiMzYwXCIgYXV0b1BsYXkgY29udHJvbHNMaXN0PVwiXCI+XG4gICAgICAgIDxzb3VyY2Ugc3JjPVwiL3ZpZGVvLm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIiAvPlxuICAgICAgPC92aWRlbz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IFZpZGVvO1xuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJzdHlsZXMiLCJWaWRlbyIsInZpZGVvUmVmIiwiaGFuZGxlVmlkZW9DbGljayIsImN1cnJlbnQiLCJwYXVzZWQiLCJwbGF5IiwicGF1c2UiLCJkaXYiLCJ2aWRlbyIsInJlZiIsIm9uQ2xpY2siLCJ3aWR0aCIsImhlaWdodCIsImF1dG9QbGF5IiwiY29udHJvbHNMaXN0Iiwic291cmNlIiwic3JjIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Video.js\n"));

/***/ })

});