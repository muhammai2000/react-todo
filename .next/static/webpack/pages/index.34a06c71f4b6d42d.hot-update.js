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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar index = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), userInput = ref[0], setUserInput = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), todoList = ref1[0], setTodoList = ref1[1];\n    var handleChange = function(e) {\n        e.preventDefault();\n        setUserInput(e.target.value);\n    };\n    var handleSubmit = function(e) {\n        e.preventDefault();\n        setTodoList([\n            userInput\n        ].concat((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(todoList)));\n        setUserInput;\n    };\n    var handleDelete = function(todo) {\n        var updatedArr = todoList.filter(function(todoItem) {\n            return todoList.indexOf(todoItem) != todoList.indexOf(todo);\n        });\n        setTodoList(updatedArr);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Next JS Todo List\"\n            }, void 0, false, {\n                fileName: \"/Users/Ihsan_Muhammad/react-todo/pages/index.js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: userInput,\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"/Users/Ihsan_Muhammad/react-todo/pages/index.js\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleSubmit,\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Ihsan_Muhammad/react-todo/pages/index.js\",\n                        lineNumber: 35,\n                        columnNumber: 79\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Ihsan_Muhammad/react-todo/pages/index.js\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: todoList.length >= 1 ? todoList.map(function(todo, idx) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            todo,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: function(e) {\n                                    e.preventDefault();\n                                    handleDelete(todo);\n                                },\n                                children: \"Delete\"\n                            }, void 0, false, {\n                                fileName: \"/Users/Ihsan_Muhammad/react-todo/pages/index.js\",\n                                lineNumber: 40,\n                                columnNumber: 52\n                            }, _this)\n                        ]\n                    }, idx, true, {\n                        fileName: \"/Users/Ihsan_Muhammad/react-todo/pages/index.js\",\n                        lineNumber: 40,\n                        columnNumber: 32\n                    }, _this);\n                }) : \"Enter a todo Item\"\n            }, void 0, false, {\n                fileName: \"/Users/Ihsan_Muhammad/react-todo/pages/index.js\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Ihsan_Muhammad/react-todo/pages/index.js\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, _this);\n};\n_s(index, \"/CBmIaiZPH8FVbq8GBNpEEz7dh4=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUE4QjtBQUU5QixJQUFNQyxLQUFLLEdBQUcsV0FBTTs7SUFFaEIsSUFBa0NELEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBdkNFLFNBQVMsR0FBa0JGLEdBQVksR0FBOUIsRUFBRUcsWUFBWSxHQUFJSCxHQUFZLEdBQWhCO0lBQzlCLElBQWdDQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQXJDSSxRQUFRLEdBQWlCSixJQUFZLEdBQTdCLEVBQUVLLFdBQVcsR0FBSUwsSUFBWSxHQUFoQjtJQUU1QixJQUFNTSxZQUFZLEdBQUcsU0FBQ0MsQ0FBQyxFQUFLO1FBQ3hCQSxDQUFDLENBQUNDLGNBQWMsRUFBRTtRQUVsQkwsWUFBWSxDQUFDSSxDQUFDLENBQUNFLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxJQUFNQyxZQUFZLEdBQUcsU0FBQ0osQ0FBQyxFQUFLO1FBQ3hCQSxDQUFDLENBQUNDLGNBQWMsRUFBRTtRQUVsQkgsV0FBVyxDQUFDO1lBQ1JILFNBQVM7U0FFWixDQUhXLE1BR1gsQ0FERyxxRkFBR0UsUUFBUSxDQUFSQSxDQUNOLENBQUM7UUFFRkQsWUFBWTtJQUNoQixDQUFDO0lBRUQsSUFBTVMsWUFBWSxHQUFHLFNBQUNDLElBQUksRUFBSztRQUMzQixJQUFNQyxVQUFVLEdBQUdWLFFBQVEsQ0FBQ1csTUFBTSxDQUFDQyxTQUFBQSxRQUFRO21CQUFJWixRQUFRLENBQUNhLE9BQU8sQ0FBQ0QsUUFBUSxDQUFDLElBQUlaLFFBQVEsQ0FBQ2EsT0FBTyxDQUFDSixJQUFJLENBQUM7U0FBQSxDQUFDO1FBRXBHUixXQUFXLENBQUNTLFVBQVUsQ0FBQztJQUMzQixDQUFDO0lBRUQscUJBQ0ksOERBQUNJLEtBQUc7OzBCQUNBLDhEQUFDQyxJQUFFOzBCQUFDLG1CQUFpQjs7Ozs7cUJBQUs7MEJBQzFCLDhEQUFDQyxNQUFJOztrQ0FDRCw4REFBQ0MsT0FBSzt3QkFBQ0MsSUFBSSxFQUFDLE1BQU07d0JBQUNaLEtBQUssRUFBRVIsU0FBUzt3QkFBRXFCLFFBQVEsRUFBRWpCLFlBQVk7Ozs7OzZCQUFHO2tDQUFBLDhEQUFDa0IsUUFBTTt3QkFBQ0MsT0FBTyxFQUFFZCxZQUFZO2tDQUFFLFFBQU07Ozs7OzZCQUFTOzs7Ozs7cUJBQ3pHOzBCQUNQLDhEQUFDZSxJQUFFOzBCQUVLdEIsUUFBUSxDQUFDdUIsTUFBTSxJQUFHLENBQUMsR0FBR3ZCLFFBQVEsQ0FBQ3dCLEdBQUcsQ0FBQyxTQUFDZixJQUFJLEVBQUVnQixHQUFHLEVBQUs7b0JBQzlDLHFCQUFPLDhEQUFDQyxJQUFFOzs0QkFBWWpCLElBQUk7MENBQUMsOERBQUNXLFFBQU07Z0NBQUNDLE9BQU8sRUFBRSxTQUFDbEIsQ0FBQyxFQUFLO29DQUMvQ0EsQ0FBQyxDQUFDQyxjQUFjLEVBQUU7b0NBQ2xCSSxZQUFZLENBQUNDLElBQUksQ0FBQztnQ0FDdEIsQ0FBQzswQ0FBRSxRQUFNOzs7OztxQ0FBUzs7dUJBSEZnQixHQUFHOzs7OzZCQUdJO2dCQUMzQixDQUFDLENBQUMsR0FDQSxtQkFBbUI7Ozs7O3FCQUV4Qjs7Ozs7O2FBQ0gsQ0FDVDtBQUNMLENBQUM7R0EvQ0s1QixLQUFLO0FBaURYLCtEQUFlQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IGluZGV4ID0gKCkgPT4ge1xuXG4gICAgY29uc3QgW3VzZXJJbnB1dCwgc2V0VXNlcklucHV0XSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFt0b2RvTGlzdCwgc2V0VG9kb0xpc3RdID0gdXNlU3RhdGUoW10pXG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICBzZXRVc2VySW5wdXQoZS50YXJnZXQudmFsdWUpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgc2V0VG9kb0xpc3QoW1xuICAgICAgICAgICAgdXNlcklucHV0LFxuICAgICAgICAgICAgLi4udG9kb0xpc3RcbiAgICAgICAgXSlcblxuICAgICAgICBzZXRVc2VySW5wdXRcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVEZWxldGUgPSAodG9kbykgPT4ge1xuICAgICAgICBjb25zdCB1cGRhdGVkQXJyID0gdG9kb0xpc3QuZmlsdGVyKHRvZG9JdGVtID0+IHRvZG9MaXN0LmluZGV4T2YodG9kb0l0ZW0pICE9IHRvZG9MaXN0LmluZGV4T2YodG9kbykpXG5cbiAgICAgICAgc2V0VG9kb0xpc3QodXBkYXRlZEFycilcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgzPk5leHQgSlMgVG9kbyBMaXN0PC9oMz5cbiAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyB2YWx1ZT17dXNlcklucHV0fSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfS8+PGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0xpc3QubGVuZ3RoID49MSA/IHRvZG9MaXN0Lm1hcCgodG9kbywgaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aWR4fT57dG9kb308YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRGVsZXRlKHRvZG8pXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5EZWxldGU8L2J1dHRvbj48L2xpPlxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICA6ICdFbnRlciBhIHRvZG8gSXRlbSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiaW5kZXgiLCJ1c2VySW5wdXQiLCJzZXRVc2VySW5wdXQiLCJ0b2RvTGlzdCIsInNldFRvZG9MaXN0IiwiaGFuZGxlQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVEZWxldGUiLCJ0b2RvIiwidXBkYXRlZEFyciIsImZpbHRlciIsInRvZG9JdGVtIiwiaW5kZXhPZiIsImRpdiIsImgzIiwiZm9ybSIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwiYnV0dG9uIiwib25DbGljayIsInVsIiwibGVuZ3RoIiwibWFwIiwiaWR4IiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});