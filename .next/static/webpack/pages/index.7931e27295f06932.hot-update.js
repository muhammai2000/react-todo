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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar index = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), userInput = ref[0], setUserInput = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), todoList = ref1[0], setTodoList = ref1[1];\n    var handleChange = function(e) {\n        e.preventDefault();\n        setUserInput(e.target.value);\n    };\n    var handleSubmit = function(e) {\n        e.preventDefault();\n        setTodoList([\n            userInput\n        ].concat((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(todoList)));\n    };\n    var handleDelete = function(todo) {\n        var updatedArr = todoList.filter(todoItem);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Next JS Todo List\"\n            }, void 0, false, {\n                fileName: \"/Users/Ihsan_Muhammad/react-todo/pages/index.js\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"/Users/Ihsan_Muhammad/react-todo/pages/index.js\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleSubmit,\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Ihsan_Muhammad/react-todo/pages/index.js\",\n                        lineNumber: 31,\n                        columnNumber: 61\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Ihsan_Muhammad/react-todo/pages/index.js\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: todoList.length >= 1 ? todoList.map(function(todo, idx) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            todo,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: \"Delete\"\n                            }, void 0, false, {\n                                fileName: \"/Users/Ihsan_Muhammad/react-todo/pages/index.js\",\n                                lineNumber: 36,\n                                columnNumber: 52\n                            }, _this)\n                        ]\n                    }, idx, true, {\n                        fileName: \"/Users/Ihsan_Muhammad/react-todo/pages/index.js\",\n                        lineNumber: 36,\n                        columnNumber: 32\n                    }, _this);\n                }) : \"Enter a todo Item\"\n            }, void 0, false, {\n                fileName: \"/Users/Ihsan_Muhammad/react-todo/pages/index.js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Ihsan_Muhammad/react-todo/pages/index.js\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, _this);\n};\n_s(index, \"/CBmIaiZPH8FVbq8GBNpEEz7dh4=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUE4QjtBQUU5QixJQUFNQyxLQUFLLEdBQUcsV0FBTTs7SUFFaEIsSUFBa0NELEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBdkNFLFNBQVMsR0FBa0JGLEdBQVksR0FBOUIsRUFBRUcsWUFBWSxHQUFJSCxHQUFZLEdBQWhCO0lBQzlCLElBQWdDQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQXJDSSxRQUFRLEdBQWlCSixJQUFZLEdBQTdCLEVBQUVLLFdBQVcsR0FBSUwsSUFBWSxHQUFoQjtJQUU1QixJQUFNTSxZQUFZLEdBQUcsU0FBQ0MsQ0FBQyxFQUFLO1FBQ3hCQSxDQUFDLENBQUNDLGNBQWMsRUFBRTtRQUVsQkwsWUFBWSxDQUFDSSxDQUFDLENBQUNFLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxJQUFNQyxZQUFZLEdBQUcsU0FBQ0osQ0FBQyxFQUFLO1FBQ3hCQSxDQUFDLENBQUNDLGNBQWMsRUFBRTtRQUVsQkgsV0FBVyxDQUFDO1lBQ1JILFNBQVM7U0FFWixDQUhXLE1BR1gsQ0FERyxxRkFBR0UsUUFBUSxDQUFSQSxDQUNOLENBQUM7SUFDTixDQUFDO0lBRUQsSUFBTVEsWUFBWSxHQUFHLFNBQUNDLElBQUksRUFBSztRQUMzQixJQUFNQyxVQUFVLEdBQUdWLFFBQVEsQ0FBQ1csTUFBTSxDQUFDQyxRQUFRLENBQUM7SUFDaEQsQ0FBQztJQUVELHFCQUNJLDhEQUFDQyxLQUFHOzswQkFDQSw4REFBQ0MsSUFBRTswQkFBQyxtQkFBaUI7Ozs7O3FCQUFLOzBCQUMxQiw4REFBQ0MsTUFBSTs7a0NBQ0QsOERBQUNDLE9BQUs7d0JBQUNDLElBQUksRUFBQyxNQUFNO3dCQUFDQyxRQUFRLEVBQUVoQixZQUFZOzs7Ozs2QkFBRztrQ0FBQSw4REFBQ2lCLFFBQU07d0JBQUNDLE9BQU8sRUFBRWIsWUFBWTtrQ0FBRSxRQUFNOzs7Ozs2QkFBUzs7Ozs7O3FCQUN2RjswQkFDUCw4REFBQ2MsSUFBRTswQkFFS3JCLFFBQVEsQ0FBQ3NCLE1BQU0sSUFBRyxDQUFDLEdBQUd0QixRQUFRLENBQUN1QixHQUFHLENBQUMsU0FBQ2QsSUFBSSxFQUFFZSxHQUFHLEVBQUs7b0JBQzlDLHFCQUFPLDhEQUFDQyxJQUFFOzs0QkFBWWhCLElBQUk7MENBQUMsOERBQUNVLFFBQU07MENBQUMsUUFBTTs7Ozs7cUNBQVM7O3VCQUFsQ0ssR0FBRzs7Ozs2QkFBb0M7Z0JBQzNELENBQUMsQ0FBQyxHQUNBLG1CQUFtQjs7Ozs7cUJBRXhCOzs7Ozs7YUFDSCxDQUNUO0FBQ0wsQ0FBQztHQXhDSzNCLEtBQUs7QUEwQ1gsK0RBQWVBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcblxuY29uc3QgaW5kZXggPSAoKSA9PiB7XG5cbiAgICBjb25zdCBbdXNlcklucHV0LCBzZXRVc2VySW5wdXRdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW3RvZG9MaXN0LCBzZXRUb2RvTGlzdF0gPSB1c2VTdGF0ZShbXSlcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgIHNldFVzZXJJbnB1dChlLnRhcmdldC52YWx1ZSlcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICBzZXRUb2RvTGlzdChbXG4gICAgICAgICAgICB1c2VySW5wdXQsXG4gICAgICAgICAgICAuLi50b2RvTGlzdFxuICAgICAgICBdKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZURlbGV0ZSA9ICh0b2RvKSA9PiB7XG4gICAgICAgIGNvbnN0IHVwZGF0ZWRBcnIgPSB0b2RvTGlzdC5maWx0ZXIodG9kb0l0ZW0pXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMz5OZXh0IEpTIFRvZG8gTGlzdDwvaDM+XG4gICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0vPjxidXR0b24gb25DbGljaz17aGFuZGxlU3VibWl0fT5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9MaXN0Lmxlbmd0aCA+PTEgPyB0b2RvTGlzdC5tYXAoKHRvZG8sIGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2lkeH0+e3RvZG99PGJ1dHRvbj5EZWxldGU8L2J1dHRvbj48L2xpPlxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICA6ICdFbnRlciBhIHRvZG8gSXRlbSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiaW5kZXgiLCJ1c2VySW5wdXQiLCJzZXRVc2VySW5wdXQiLCJ0b2RvTGlzdCIsInNldFRvZG9MaXN0IiwiaGFuZGxlQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVEZWxldGUiLCJ0b2RvIiwidXBkYXRlZEFyciIsImZpbHRlciIsInRvZG9JdGVtIiwiZGl2IiwiaDMiLCJmb3JtIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJidXR0b24iLCJvbkNsaWNrIiwidWwiLCJsZW5ndGgiLCJtYXAiLCJpZHgiLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});