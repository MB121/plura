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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_sheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/sheet */ \"(app-pages-browser)/./src/components/ui/sheet.tsx\");\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _barrel_optimize_names_ChevronsUpDown_Menu_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronsUpDown,Menu!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/menu.js\");\n/* harmony import */ var _barrel_optimize_names_ChevronsUpDown_Menu_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronsUpDown,Menu!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chevrons-up-down.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ \"(app-pages-browser)/./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var _ui_aspect_ratio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/aspect-ratio */ \"(app-pages-browser)/./src/components/ui/aspect-ratio.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _ui_popover__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ui/popover */ \"(app-pages-browser)/./src/components/ui/popover.tsx\");\n/* harmony import */ var _icons_compass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../icons/compass */ \"(app-pages-browser)/./src/components/icons/compass.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst MenuOptions = (param)=>{\n    let { defaultOpen, subAccounts, sidebarOpt, sidebarLogo, details, user, id } = param;\n    _s();\n    const [isMounted, setIsMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const openState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>defaultOpen ? {\n            open: true\n        } : {}, [\n        defaultOpen\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setIsMounted(true);\n    }, []);\n    if (!isMounted) return;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_sheet__WEBPACK_IMPORTED_MODULE_2__.Sheet, {\n        modal: false,\n        open: true,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_sheet__WEBPACK_IMPORTED_MODULE_2__.SheetTrigger, {\n                asChild: true,\n                className: \"absolute left-4 top-4 z-[100] md:!hidden flex\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                    variant: \"outline\",\n                    size: \"icon\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronsUpDown_Menu_lucide_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_sheet__WEBPACK_IMPORTED_MODULE_2__.SheetContent, {\n                showX: !defaultOpen,\n                side: \"left\",\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"bg-background/80 backdrop-blur-xl fixed top-0 border-r-[1px] p-6\", {\n                    \"hidden md:inline-block z-0 w-[300px]\": defaultOpen,\n                    \"inline-block md:hidden z-[100px] w-full\": !defaultOpen\n                }),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_aspect_ratio__WEBPACK_IMPORTED_MODULE_5__.AspectRatio, {\n                            ratio: 16 / 5,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                src: sidebarLogo,\n                                alt: \"Sidebar Logo\",\n                                fill: true,\n                                className: \"rounded-md object-contain\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_popover__WEBPACK_IMPORTED_MODULE_7__.Popover, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_popover__WEBPACK_IMPORTED_MODULE_7__.PopoverTrigger, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                    className: \"w-full my-4 flex items-center justify-between py-8\",\n                                    variant: \"ghost\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-center text-left gap-2\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_compass__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                                    fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                                                    lineNumber: 86,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"flex flex-col\",\n                                                    children: [\n                                                        details.name,\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                            className: \"text-muted-foreground \",\n                                                            children: details.address\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                                                            lineNumber: 89,\n                                                            columnNumber: 21\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                                                    lineNumber: 87,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                                            lineNumber: 85,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronsUpDown_Menu_lucide_react__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                                size: 16,\n                                                className: \"text-muted-foreground\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                                                lineNumber: 95,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                                            lineNumber: 94,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MenuOptions, \"9FxPj85lQ7jgEB90j1QGd3qUwN4=\");\n_c = MenuOptions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MenuOptions);\nvar _c;\n$RefreshReg$(_c, \"MenuOptions\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3NpZGViYXIvbWVudS1vcHRpb25zLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFPNEQ7QUFDSTtBQUMxQjtBQUNjO0FBQzVCO0FBQ3lCO0FBQ2xCO0FBQ3lCO0FBQ2pCO0FBWXZDLE1BQU1nQixjQUFjO1FBQUMsRUFDbkJDLFdBQVcsRUFDWEMsV0FBVyxFQUNYQyxVQUFVLEVBQ1ZDLFdBQVcsRUFDWEMsT0FBTyxFQUNQQyxJQUFJLEVBQ0pDLEVBQUUsRUFDSTs7SUFDTixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR3RCLCtDQUFRQSxDQUFDO0lBRTNDLE1BQU11QixZQUFZeEIsOENBQU9BLENBQ3ZCLElBQU9lLGNBQWM7WUFBRVUsTUFBTTtRQUFLLElBQUksQ0FBQyxHQUN2QztRQUFDVjtLQUFZO0lBR2ZoQixnREFBU0EsQ0FBQztRQUNSd0IsYUFBYTtJQUNmLEdBQUcsRUFBRTtJQUVMLElBQUksQ0FBQ0QsV0FBVztJQUNoQixxQkFDRSw4REFBQ3BCLDRDQUFLQTtRQUFDd0IsT0FBTztRQUFPRCxNQUFNOzswQkFDekIsOERBQUNyQixtREFBWUE7Z0JBQ1h1QixPQUFPO2dCQUNQQyxXQUFVOzBCQUVWLDRFQUFDdkIsOENBQU1BO29CQUFDd0IsU0FBUztvQkFBV0MsTUFBTTs4QkFDaEMsNEVBQUN2QiwrRkFBSUE7Ozs7Ozs7Ozs7Ozs7OzswQkFHVCw4REFBQ0osbURBQVlBO2dCQUNYNEIsT0FBTyxDQUFDaEI7Z0JBQ1JpQixNQUFNO2dCQUNOSixXQUFXcEIsZ0RBQUlBLENBQ2Isb0VBQ0E7b0JBQ0Usd0NBQXdDTztvQkFDeEMsMkNBQTJDLENBQUNBO2dCQUM5QzswQkFHRiw0RUFBQ2tCOztzQ0FDQyw4REFBQ3hCLHlEQUFXQTs0QkFBQ3lCLE9BQU8sS0FBSztzQ0FDdkIsNEVBQUN4QixrREFBS0E7Z0NBQ0p5QixLQUFLakI7Z0NBQ0xrQixLQUFJO2dDQUNKQyxJQUFJO2dDQUNKVCxXQUFVOzs7Ozs7Ozs7OztzQ0FHZCw4REFBQ2pCLGdEQUFPQTtzQ0FDTiw0RUFBQ0MsdURBQWNBOzBDQUNiLDRFQUFDUCw4Q0FBTUE7b0NBQ0x1QixXQUFVO29DQUNWQyxTQUFROztzREFFUiw4REFBQ0k7NENBQUlMLFdBQVU7OzhEQUNiLDhEQUFDZixzREFBT0E7Ozs7OzhEQUNSLDhEQUFDb0I7b0RBQUlMLFdBQVU7O3dEQUNaVCxRQUFRbUIsSUFBSTtzRUFDYiw4REFBQ0M7NERBQUtYLFdBQVU7c0VBQ2JULFFBQVFxQixPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBSXRCLDhEQUFDUDtzREFDQyw0RUFBQzNCLGdHQUFjQTtnREFBQ3dCLE1BQU07Z0RBQUlGLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU3REO0dBNUVNZDtLQUFBQTtBQThFTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9zaWRlYmFyL21lbnUtb3B0aW9ucy50c3g/OGM0YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHtcbiAgQWdlbmN5U2lkZWJhck9wdGlvbixcbiAgU3ViQWNjb3VudCxcbiAgU3ViQWNjb3VudFNpZGViYXJPcHRpb24sXG59IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFNoZWV0LCBTaGVldENvbnRlbnQsIFNoZWV0VHJpZ2dlciB9IGZyb20gXCIuLi91aS9zaGVldFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4uL3VpL2J1dHRvblwiO1xuaW1wb3J0IHsgQ2hldnJvbnNVcERvd24sIE1lbnUgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xuaW1wb3J0IHsgQXNwZWN0UmF0aW8gfSBmcm9tIFwiLi4vdWkvYXNwZWN0LXJhdGlvXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IFBvcG92ZXIsIFBvcG92ZXJUcmlnZ2VyIH0gZnJvbSBcIi4uL3VpL3BvcG92ZXJcIjtcbmltcG9ydCBDb21wYXNzIGZyb20gXCIuLi9pY29ucy9jb21wYXNzXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGRlZmF1bHRPcGVuPzogYm9vbGVhbjtcbiAgc3ViQWNjb3VudHM6IFN1YkFjY291bnRbXTtcbiAgc2lkZWJhck9wdDogQWdlbmN5U2lkZWJhck9wdGlvbltdIHwgU3ViQWNjb3VudFNpZGViYXJPcHRpb25bXTtcbiAgc2lkZWJhckxvZ286IHN0cmluZztcbiAgZGV0YWlsczogYW55O1xuICB1c2VyOiBhbnk7XG4gIGlkOiBzdHJpbmc7XG59O1xuXG5jb25zdCBNZW51T3B0aW9ucyA9ICh7XG4gIGRlZmF1bHRPcGVuLFxuICBzdWJBY2NvdW50cyxcbiAgc2lkZWJhck9wdCxcbiAgc2lkZWJhckxvZ28sXG4gIGRldGFpbHMsXG4gIHVzZXIsXG4gIGlkLFxufTogUHJvcHMpID0+IHtcbiAgY29uc3QgW2lzTW91bnRlZCwgc2V0SXNNb3VudGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBvcGVuU3RhdGUgPSB1c2VNZW1vKFxuICAgICgpID0+IChkZWZhdWx0T3BlbiA/IHsgb3BlbjogdHJ1ZSB9IDoge30pLFxuICAgIFtkZWZhdWx0T3Blbl1cbiAgKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElzTW91bnRlZCh0cnVlKTtcbiAgfSwgW10pO1xuXG4gIGlmICghaXNNb3VudGVkKSByZXR1cm47XG4gIHJldHVybiAoXG4gICAgPFNoZWV0IG1vZGFsPXtmYWxzZX0gb3Blbj17dHJ1ZX0+XG4gICAgICA8U2hlZXRUcmlnZ2VyXG4gICAgICAgIGFzQ2hpbGRcbiAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC00IHRvcC00IHotWzEwMF0gbWQ6IWhpZGRlbiBmbGV4XCJcbiAgICAgID5cbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PXtcIm91dGxpbmVcIn0gc2l6ZT17XCJpY29uXCJ9PlxuICAgICAgICAgIDxNZW51IC8+XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9TaGVldFRyaWdnZXI+XG4gICAgICA8U2hlZXRDb250ZW50XG4gICAgICAgIHNob3dYPXshZGVmYXVsdE9wZW59XG4gICAgICAgIHNpZGU9e1wibGVmdFwifVxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgICAgXCJiZy1iYWNrZ3JvdW5kLzgwIGJhY2tkcm9wLWJsdXIteGwgZml4ZWQgdG9wLTAgYm9yZGVyLXItWzFweF0gcC02XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJoaWRkZW4gbWQ6aW5saW5lLWJsb2NrIHotMCB3LVszMDBweF1cIjogZGVmYXVsdE9wZW4sXG4gICAgICAgICAgICBcImlubGluZS1ibG9jayBtZDpoaWRkZW4gei1bMTAwcHhdIHctZnVsbFwiOiAhZGVmYXVsdE9wZW4sXG4gICAgICAgICAgfVxuICAgICAgICApfVxuICAgICAgPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxBc3BlY3RSYXRpbyByYXRpbz17MTYgLyA1fT5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9e3NpZGViYXJMb2dvfVxuICAgICAgICAgICAgICBhbHQ9XCJTaWRlYmFyIExvZ29cIlxuICAgICAgICAgICAgICBmaWxsXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbWQgb2JqZWN0LWNvbnRhaW5cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0FzcGVjdFJhdGlvPlxuICAgICAgICAgIDxQb3BvdmVyPlxuICAgICAgICAgICAgPFBvcG92ZXJUcmlnZ2VyPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIG15LTQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB5LThcIlxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJnaG9zdFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHRleHQtbGVmdCBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgPENvbXBhc3MgLz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgICAgICAgICB7ZGV0YWlscy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmQgXCI+XG4gICAgICAgICAgICAgICAgICAgICAge2RldGFpbHMuYWRkcmVzc31cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxDaGV2cm9uc1VwRG93biBzaXplPXsxNn0gY2xhc3NOYW1lPVwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L1BvcG92ZXJUcmlnZ2VyPlxuICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1NoZWV0Q29udGVudD5cbiAgICA8L1NoZWV0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudU9wdGlvbnM7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJTaGVldCIsIlNoZWV0Q29udGVudCIsIlNoZWV0VHJpZ2dlciIsIkJ1dHRvbiIsIkNoZXZyb25zVXBEb3duIiwiTWVudSIsImNsc3giLCJBc3BlY3RSYXRpbyIsIkltYWdlIiwiUG9wb3ZlciIsIlBvcG92ZXJUcmlnZ2VyIiwiQ29tcGFzcyIsIk1lbnVPcHRpb25zIiwiZGVmYXVsdE9wZW4iLCJzdWJBY2NvdW50cyIsInNpZGViYXJPcHQiLCJzaWRlYmFyTG9nbyIsImRldGFpbHMiLCJ1c2VyIiwiaWQiLCJpc01vdW50ZWQiLCJzZXRJc01vdW50ZWQiLCJvcGVuU3RhdGUiLCJvcGVuIiwibW9kYWwiLCJhc0NoaWxkIiwiY2xhc3NOYW1lIiwidmFyaWFudCIsInNpemUiLCJzaG93WCIsInNpZGUiLCJkaXYiLCJyYXRpbyIsInNyYyIsImFsdCIsImZpbGwiLCJuYW1lIiwic3BhbiIsImFkZHJlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/sidebar/menu-options.tsx\n"));

/***/ })

});