"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(main)/agency/[agencyId]/layout",{

/***/ "(app-pages-browser)/./src/components/sidebar/menu-options.tsx":
/*!*************************************************!*\
  !*** ./src/components/sidebar/menu-options.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_sheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/sheet */ \"(app-pages-browser)/./src/components/ui/sheet.tsx\");\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _barrel_optimize_names_Menu_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Menu!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/menu.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ \"(app-pages-browser)/./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var _ui_aspect_ratio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/aspect-ratio */ \"(app-pages-browser)/./src/components/ui/aspect-ratio.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _ui_popover__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ui/popover */ \"(app-pages-browser)/./src/components/ui/popover.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst MenuOptions = (param)=>{\n    let { defaultOpen, subAccounts, sidebarOpt, sidebarLogo, details, user, id } = param;\n    _s();\n    const [isMounted, setIsMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const openState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>defaultOpen ? {\n            open: true\n        } : {}, [\n        defaultOpen\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setIsMounted(true);\n    }, []);\n    if (!isMounted) return;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_sheet__WEBPACK_IMPORTED_MODULE_2__.Sheet, {\n        modal: false,\n        open: true,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_sheet__WEBPACK_IMPORTED_MODULE_2__.SheetTrigger, {\n                asChild: true,\n                className: \"absolute left-4 top-4 z-[100] md:!hidden flex\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                    variant: \"outline\",\n                    size: \"icon\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_sheet__WEBPACK_IMPORTED_MODULE_2__.SheetContent, {\n                showX: !defaultOpen,\n                side: \"left\",\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"bg-background/80 backdrop-blur-xl fixed top-0 border-r-[1px] p-6\", {\n                    \"hidden md:inline-block z-0 w-[300px]\": defaultOpen,\n                    \"inline-block md:hidden z-[100px] w-full\": !defaultOpen\n                }),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_aspect_ratio__WEBPACK_IMPORTED_MODULE_5__.AspectRatio, {\n                            ratio: 16 / 5,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                src: sidebarLogo,\n                                alt: \"Sidebar Logo\",\n                                className: \"rounded-md object-contain\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_popover__WEBPACK_IMPORTED_MODULE_7__.Popover, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_popover__WEBPACK_IMPORTED_MODULE_7__.PopoverTrigger, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                    className: \"w-full my-4 flex items-center justify-between py-8\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MenuOptions, \"9FxPj85lQ7jgEB90j1QGd3qUwN4=\");\n_c = MenuOptions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MenuOptions);\nvar _c;\n$RefreshReg$(_c, \"MenuOptions\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3NpZGViYXIvbWVudS1vcHRpb25zLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBTzREO0FBQ0k7QUFDMUI7QUFDRjtBQUNaO0FBQ3lCO0FBQ2xCO0FBQ3lCO0FBWXhELE1BQU1jLGNBQWM7UUFBQyxFQUNuQkMsV0FBVyxFQUNYQyxXQUFXLEVBQ1hDLFVBQVUsRUFDVkMsV0FBVyxFQUNYQyxPQUFPLEVBQ1BDLElBQUksRUFDSkMsRUFBRSxFQUNJOztJQUNOLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHcEIsK0NBQVFBLENBQUM7SUFFM0MsTUFBTXFCLFlBQVl0Qiw4Q0FBT0EsQ0FDdkIsSUFBT2EsY0FBYztZQUFFVSxNQUFNO1FBQUssSUFBSSxDQUFDLEdBQ3ZDO1FBQUNWO0tBQVk7SUFHZmQsZ0RBQVNBLENBQUM7UUFDUnNCLGFBQWE7SUFDZixHQUFHLEVBQUU7SUFFTCxJQUFJLENBQUNELFdBQVc7SUFDaEIscUJBQ0UsOERBQUNsQiw0Q0FBS0E7UUFBQ3NCLE9BQU87UUFBT0QsTUFBTTs7MEJBQ3pCLDhEQUFDbkIsbURBQVlBO2dCQUNYcUIsT0FBTztnQkFDUEMsV0FBVTswQkFFViw0RUFBQ3JCLDhDQUFNQTtvQkFBQ3NCLFNBQVM7b0JBQVdDLE1BQU07OEJBQ2hDLDRFQUFDdEIsZ0ZBQUlBOzs7Ozs7Ozs7Ozs7Ozs7MEJBR1QsOERBQUNILG1EQUFZQTtnQkFDWDBCLE9BQU8sQ0FBQ2hCO2dCQUNSaUIsTUFBTTtnQkFDTkosV0FBV25CLGdEQUFJQSxDQUNiLG9FQUNBO29CQUNFLHdDQUF3Q007b0JBQ3hDLDJDQUEyQyxDQUFDQTtnQkFDOUM7MEJBR0YsNEVBQUNrQjs7c0NBQ0MsOERBQUN2Qix5REFBV0E7NEJBQUN3QixPQUFPLEtBQUs7c0NBQ3ZCLDRFQUFDdkIsa0RBQUtBO2dDQUNKd0IsS0FBS2pCO2dDQUNMa0IsS0FBSTtnQ0FDSlIsV0FBVTs7Ozs7Ozs7Ozs7c0NBR2QsOERBQUNoQixnREFBT0E7c0NBQ04sNEVBQUNDLHVEQUFjQTswQ0FDYiw0RUFBQ04sOENBQU1BO29DQUFDcUIsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2hDO0dBM0RNZDtLQUFBQTtBQTZETiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9zaWRlYmFyL21lbnUtb3B0aW9ucy50c3g/OGM0YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHtcbiAgQWdlbmN5U2lkZWJhck9wdGlvbixcbiAgU3ViQWNjb3VudCxcbiAgU3ViQWNjb3VudFNpZGViYXJPcHRpb24sXG59IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFNoZWV0LCBTaGVldENvbnRlbnQsIFNoZWV0VHJpZ2dlciB9IGZyb20gXCIuLi91aS9zaGVldFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4uL3VpL2J1dHRvblwiO1xuaW1wb3J0IHsgTWVudSB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XG5pbXBvcnQgeyBBc3BlY3RSYXRpbyB9IGZyb20gXCIuLi91aS9hc3BlY3QtcmF0aW9cIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgUG9wb3ZlciwgUG9wb3ZlclRyaWdnZXIgfSBmcm9tIFwiLi4vdWkvcG9wb3ZlclwiO1xuXG50eXBlIFByb3BzID0ge1xuICBkZWZhdWx0T3Blbj86IGJvb2xlYW47XG4gIHN1YkFjY291bnRzOiBTdWJBY2NvdW50W107XG4gIHNpZGViYXJPcHQ6IEFnZW5jeVNpZGViYXJPcHRpb25bXSB8IFN1YkFjY291bnRTaWRlYmFyT3B0aW9uW107XG4gIHNpZGViYXJMb2dvOiBzdHJpbmc7XG4gIGRldGFpbHM6IGFueTtcbiAgdXNlcjogYW55O1xuICBpZDogc3RyaW5nO1xufTtcblxuY29uc3QgTWVudU9wdGlvbnMgPSAoe1xuICBkZWZhdWx0T3BlbixcbiAgc3ViQWNjb3VudHMsXG4gIHNpZGViYXJPcHQsXG4gIHNpZGViYXJMb2dvLFxuICBkZXRhaWxzLFxuICB1c2VyLFxuICBpZCxcbn06IFByb3BzKSA9PiB7XG4gIGNvbnN0IFtpc01vdW50ZWQsIHNldElzTW91bnRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgb3BlblN0YXRlID0gdXNlTWVtbyhcbiAgICAoKSA9PiAoZGVmYXVsdE9wZW4gPyB7IG9wZW46IHRydWUgfSA6IHt9KSxcbiAgICBbZGVmYXVsdE9wZW5dXG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJc01vdW50ZWQodHJ1ZSk7XG4gIH0sIFtdKTtcblxuICBpZiAoIWlzTW91bnRlZCkgcmV0dXJuO1xuICByZXR1cm4gKFxuICAgIDxTaGVldCBtb2RhbD17ZmFsc2V9IG9wZW49e3RydWV9PlxuICAgICAgPFNoZWV0VHJpZ2dlclxuICAgICAgICBhc0NoaWxkXG4gICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtNCB0b3AtNCB6LVsxMDBdIG1kOiFoaWRkZW4gZmxleFwiXG4gICAgICA+XG4gICAgICAgIDxCdXR0b24gdmFyaWFudD17XCJvdXRsaW5lXCJ9IHNpemU9e1wiaWNvblwifT5cbiAgICAgICAgICA8TWVudSAvPlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvU2hlZXRUcmlnZ2VyPlxuICAgICAgPFNoZWV0Q29udGVudFxuICAgICAgICBzaG93WD17IWRlZmF1bHRPcGVufVxuICAgICAgICBzaWRlPXtcImxlZnRcIn1cbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAgIFwiYmctYmFja2dyb3VuZC84MCBiYWNrZHJvcC1ibHVyLXhsIGZpeGVkIHRvcC0wIGJvcmRlci1yLVsxcHhdIHAtNlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiaGlkZGVuIG1kOmlubGluZS1ibG9jayB6LTAgdy1bMzAwcHhdXCI6IGRlZmF1bHRPcGVuLFxuICAgICAgICAgICAgXCJpbmxpbmUtYmxvY2sgbWQ6aGlkZGVuIHotWzEwMHB4XSB3LWZ1bGxcIjogIWRlZmF1bHRPcGVuLFxuICAgICAgICAgIH1cbiAgICAgICAgKX1cbiAgICAgID5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8QXNwZWN0UmF0aW8gcmF0aW89ezE2IC8gNX0+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgc3JjPXtzaWRlYmFyTG9nb31cbiAgICAgICAgICAgICAgYWx0PVwiU2lkZWJhciBMb2dvXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1tZCBvYmplY3QtY29udGFpblwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQXNwZWN0UmF0aW8+XG4gICAgICAgICAgPFBvcG92ZXI+XG4gICAgICAgICAgICA8UG9wb3ZlclRyaWdnZXI+XG4gICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwidy1mdWxsIG15LTQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB5LThcIj48L0J1dHRvbj5cbiAgICAgICAgICAgIDwvUG9wb3ZlclRyaWdnZXI+XG4gICAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU2hlZXRDb250ZW50PlxuICAgIDwvU2hlZXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZW51T3B0aW9ucztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsIlNoZWV0IiwiU2hlZXRDb250ZW50IiwiU2hlZXRUcmlnZ2VyIiwiQnV0dG9uIiwiTWVudSIsImNsc3giLCJBc3BlY3RSYXRpbyIsIkltYWdlIiwiUG9wb3ZlciIsIlBvcG92ZXJUcmlnZ2VyIiwiTWVudU9wdGlvbnMiLCJkZWZhdWx0T3BlbiIsInN1YkFjY291bnRzIiwic2lkZWJhck9wdCIsInNpZGViYXJMb2dvIiwiZGV0YWlscyIsInVzZXIiLCJpZCIsImlzTW91bnRlZCIsInNldElzTW91bnRlZCIsIm9wZW5TdGF0ZSIsIm9wZW4iLCJtb2RhbCIsImFzQ2hpbGQiLCJjbGFzc05hbWUiLCJ2YXJpYW50Iiwic2l6ZSIsInNob3dYIiwic2lkZSIsImRpdiIsInJhdGlvIiwic3JjIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/sidebar/menu-options.tsx\n"));

/***/ })

});