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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_sheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/sheet */ \"(app-pages-browser)/./src/components/ui/sheet.tsx\");\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _barrel_optimize_names_ChevronsUpDown_Menu_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronsUpDown,Menu!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/menu.js\");\n/* harmony import */ var _barrel_optimize_names_ChevronsUpDown_Menu_lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronsUpDown,Menu!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chevrons-up-down.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ \"(app-pages-browser)/./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var _ui_aspect_ratio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/aspect-ratio */ \"(app-pages-browser)/./src/components/ui/aspect-ratio.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _ui_popover__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ui/popover */ \"(app-pages-browser)/./src/components/ui/popover.tsx\");\n/* harmony import */ var _icons_compass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../icons/compass */ \"(app-pages-browser)/./src/components/icons/compass.tsx\");\n/* harmony import */ var _ui_command__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ui/command */ \"(app-pages-browser)/./src/components/ui/command.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst MenuOptions = (param)=>{\n    let { defaultOpen, subAccounts, sidebarOpt, sidebarLogo, details, user, id } = param;\n    _s();\n    const [isMounted, setIsMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const openState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>defaultOpen ? {\n            open: true\n        } : {}, [\n        defaultOpen\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setIsMounted(true);\n    }, []);\n    if (!isMounted) return;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_sheet__WEBPACK_IMPORTED_MODULE_2__.Sheet, {\n        modal: false,\n        open: true,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_sheet__WEBPACK_IMPORTED_MODULE_2__.SheetTrigger, {\n                asChild: true,\n                className: \"absolute left-4 top-4 z-[100] md:!hidden flex\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                    variant: \"outline\",\n                    size: \"icon\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronsUpDown_Menu_lucide_react__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_sheet__WEBPACK_IMPORTED_MODULE_2__.SheetContent, {\n                showX: !defaultOpen,\n                side: \"left\",\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"bg-background/80 backdrop-blur-xl fixed top-0 border-r-[1px] p-6\", {\n                    \"hidden md:inline-block z-0 w-[300px]\": defaultOpen,\n                    \"inline-block md:hidden z-[100px] w-full\": !defaultOpen\n                }),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_aspect_ratio__WEBPACK_IMPORTED_MODULE_5__.AspectRatio, {\n                            ratio: 16 / 5,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                src: sidebarLogo,\n                                alt: \"Sidebar Logo\",\n                                fill: true,\n                                className: \"rounded-md object-contain\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_popover__WEBPACK_IMPORTED_MODULE_7__.Popover, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_popover__WEBPACK_IMPORTED_MODULE_7__.PopoverTrigger, {\n                                    asChild: true,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                        className: \"w-full my-4 flex items-center justify-between py-8\",\n                                        variant: \"ghost\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex items-center text-left gap-2\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_compass__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                                        fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                                                        lineNumber: 92,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"flex flex-col\",\n                                                        children: [\n                                                            details.name,\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                                className: \"text-muted-foreground \",\n                                                                children: details.address\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                                                                lineNumber: 95,\n                                                                columnNumber: 21\n                                                            }, undefined)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                                                        lineNumber: 93,\n                                                        columnNumber: 19\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                                                lineNumber: 91,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronsUpDown_Menu_lucide_react__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                                    size: 16,\n                                                    className: \"text-muted-foreground\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                                                    lineNumber: 101,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                                                lineNumber: 100,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_popover__WEBPACK_IMPORTED_MODULE_7__.PopoverContent, {\n                                    className: \"w-80 h-80 mt-4 z-[200]\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_command__WEBPACK_IMPORTED_MODULE_9__.Command, {\n                                        className: \"rounded-lg\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_command__WEBPACK_IMPORTED_MODULE_9__.CommandInput, {\n                                                placeholder: \"Search Account...\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                                                lineNumber: 108,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_command__WEBPACK_IMPORTED_MODULE_9__.CommandList, {\n                                                className: \"pb-16\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_command__WEBPACK_IMPORTED_MODULE_9__.CommandEmpty, {\n                                                        children: \"No results found\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                                                        lineNumber: 110,\n                                                        columnNumber: 21\n                                                    }, undefined),\n                                                    (user === null || user === void 0 ? void 0 : user.role) === \"AGENCY_OWNER\" || (user === null || user === void 0 ? void 0 : user.role) === \"AGENCY_ADMIN\" && (user === null || user === void 0 ? void 0 : user.agency) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                                                        fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                                                        lineNumber: 113,\n                                                        columnNumber: 25\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                                                lineNumber: 109,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                                        lineNumber: 107,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MenuOptions, \"9FxPj85lQ7jgEB90j1QGd3qUwN4=\");\n_c = MenuOptions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MenuOptions);\nvar _c;\n$RefreshReg$(_c, \"MenuOptions\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3NpZGViYXIvbWVudS1vcHRpb25zLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBTzREO0FBQ0k7QUFDMUI7QUFDYztBQUM1QjtBQUN5QjtBQUNsQjtBQUN5QztBQUNqQztBQU1oQjtBQVl2QixNQUFNcUIsY0FBYztRQUFDLEVBQ25CQyxXQUFXLEVBQ1hDLFdBQVcsRUFDWEMsVUFBVSxFQUNWQyxXQUFXLEVBQ1hDLE9BQU8sRUFDUEMsSUFBSSxFQUNKQyxFQUFFLEVBQ0k7O0lBQ04sTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUczQiwrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNNEIsWUFBWTdCLDhDQUFPQSxDQUN2QixJQUFPb0IsY0FBYztZQUFFVSxNQUFNO1FBQUssSUFBSSxDQUFDLEdBQ3ZDO1FBQUNWO0tBQVk7SUFHZnJCLGdEQUFTQSxDQUFDO1FBQ1I2QixhQUFhO0lBQ2YsR0FBRyxFQUFFO0lBRUwsSUFBSSxDQUFDRCxXQUFXO0lBQ2hCLHFCQUNFLDhEQUFDekIsNENBQUtBO1FBQUM2QixPQUFPO1FBQU9ELE1BQU07OzBCQUN6Qiw4REFBQzFCLG1EQUFZQTtnQkFDWDRCLE9BQU87Z0JBQ1BDLFdBQVU7MEJBRVYsNEVBQUM1Qiw4Q0FBTUE7b0JBQUM2QixTQUFTO29CQUFXQyxNQUFNOzhCQUNoQyw0RUFBQzVCLGdHQUFJQTs7Ozs7Ozs7Ozs7Ozs7OzBCQUdULDhEQUFDSixtREFBWUE7Z0JBQ1hpQyxPQUFPLENBQUNoQjtnQkFDUmlCLE1BQU07Z0JBQ05KLFdBQVd6QixnREFBSUEsQ0FDYixvRUFDQTtvQkFDRSx3Q0FBd0NZO29CQUN4QywyQ0FBMkMsQ0FBQ0E7Z0JBQzlDOzBCQUdGLDRFQUFDa0I7O3NDQUNDLDhEQUFDN0IseURBQVdBOzRCQUFDOEIsT0FBTyxLQUFLO3NDQUN2Qiw0RUFBQzdCLGtEQUFLQTtnQ0FDSjhCLEtBQUtqQjtnQ0FDTGtCLEtBQUk7Z0NBQ0pDLElBQUk7Z0NBQ0pULFdBQVU7Ozs7Ozs7Ozs7O3NDQUdkLDhEQUFDdEIsZ0RBQU9BOzs4Q0FDTiw4REFBQ0UsdURBQWNBO29DQUFDbUIsT0FBTzs4Q0FDckIsNEVBQUMzQiw4Q0FBTUE7d0NBQ0w0QixXQUFVO3dDQUNWQyxTQUFROzswREFFUiw4REFBQ0k7Z0RBQUlMLFdBQVU7O2tFQUNiLDhEQUFDbkIsc0RBQU9BOzs7OztrRUFDUiw4REFBQ3dCO3dEQUFJTCxXQUFVOzs0REFDWlQsUUFBUW1CLElBQUk7MEVBQ2IsOERBQUNDO2dFQUFLWCxXQUFVOzBFQUNiVCxRQUFRcUIsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBEQUl0Qiw4REFBQ1A7MERBQ0MsNEVBQUNoQyxnR0FBY0E7b0RBQUM2QixNQUFNO29EQUFJRixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQUkxQyw4REFBQ3JCLHVEQUFjQTtvQ0FBQ3FCLFdBQVU7OENBRXRCLDRFQUFDbEIsZ0RBQU9BO3dDQUFDa0IsV0FBVTs7MERBQ2pCLDhEQUFDaEIscURBQVlBO2dEQUFDNkIsYUFBWTs7Ozs7OzBEQUMxQiw4REFBQzVCLG9EQUFXQTtnREFBQ2UsV0FBVTs7a0VBQ3JCLDhEQUFDakIscURBQVlBO2tFQUFDOzs7Ozs7b0RBQ2JTLENBQUFBLGlCQUFBQSwyQkFBQUEsS0FBTXNCLElBQUksTUFBSyxrQkFDYnRCLENBQUFBLGlCQUFBQSwyQkFBQUEsS0FBTXNCLElBQUksTUFBSyxtQkFBa0J0QixpQkFBQUEsMkJBQUFBLEtBQU11QixNQUFNLG1CQUM1Qyw4REFBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVd6QjtHQTFGTW5CO0tBQUFBO0FBNEZOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3NpZGViYXIvbWVudS1vcHRpb25zLnRzeD84YzRhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQge1xuICBBZ2VuY3lTaWRlYmFyT3B0aW9uLFxuICBTdWJBY2NvdW50LFxuICBTdWJBY2NvdW50U2lkZWJhck9wdGlvbixcbn0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU2hlZXQsIFNoZWV0Q29udGVudCwgU2hlZXRUcmlnZ2VyIH0gZnJvbSBcIi4uL3VpL3NoZWV0XCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBDaGV2cm9uc1VwRG93biwgTWVudSB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XG5pbXBvcnQgeyBBc3BlY3RSYXRpbyB9IGZyb20gXCIuLi91aS9hc3BlY3QtcmF0aW9cIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgUG9wb3ZlciwgUG9wb3ZlckNvbnRlbnQsIFBvcG92ZXJUcmlnZ2VyIH0gZnJvbSBcIi4uL3VpL3BvcG92ZXJcIjtcbmltcG9ydCBDb21wYXNzIGZyb20gXCIuLi9pY29ucy9jb21wYXNzXCI7XG5pbXBvcnQge1xuICBDb21tYW5kLFxuICBDb21tYW5kRW1wdHksXG4gIENvbW1hbmRJbnB1dCxcbiAgQ29tbWFuZExpc3QsXG59IGZyb20gXCIuLi91aS9jb21tYW5kXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGRlZmF1bHRPcGVuPzogYm9vbGVhbjtcbiAgc3ViQWNjb3VudHM6IFN1YkFjY291bnRbXTtcbiAgc2lkZWJhck9wdDogQWdlbmN5U2lkZWJhck9wdGlvbltdIHwgU3ViQWNjb3VudFNpZGViYXJPcHRpb25bXTtcbiAgc2lkZWJhckxvZ286IHN0cmluZztcbiAgZGV0YWlsczogYW55O1xuICB1c2VyOiBhbnk7XG4gIGlkOiBzdHJpbmc7XG59O1xuXG5jb25zdCBNZW51T3B0aW9ucyA9ICh7XG4gIGRlZmF1bHRPcGVuLFxuICBzdWJBY2NvdW50cyxcbiAgc2lkZWJhck9wdCxcbiAgc2lkZWJhckxvZ28sXG4gIGRldGFpbHMsXG4gIHVzZXIsXG4gIGlkLFxufTogUHJvcHMpID0+IHtcbiAgY29uc3QgW2lzTW91bnRlZCwgc2V0SXNNb3VudGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBvcGVuU3RhdGUgPSB1c2VNZW1vKFxuICAgICgpID0+IChkZWZhdWx0T3BlbiA/IHsgb3BlbjogdHJ1ZSB9IDoge30pLFxuICAgIFtkZWZhdWx0T3Blbl1cbiAgKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElzTW91bnRlZCh0cnVlKTtcbiAgfSwgW10pO1xuXG4gIGlmICghaXNNb3VudGVkKSByZXR1cm47XG4gIHJldHVybiAoXG4gICAgPFNoZWV0IG1vZGFsPXtmYWxzZX0gb3Blbj17dHJ1ZX0+XG4gICAgICA8U2hlZXRUcmlnZ2VyXG4gICAgICAgIGFzQ2hpbGRcbiAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC00IHRvcC00IHotWzEwMF0gbWQ6IWhpZGRlbiBmbGV4XCJcbiAgICAgID5cbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PXtcIm91dGxpbmVcIn0gc2l6ZT17XCJpY29uXCJ9PlxuICAgICAgICAgIDxNZW51IC8+XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9TaGVldFRyaWdnZXI+XG4gICAgICA8U2hlZXRDb250ZW50XG4gICAgICAgIHNob3dYPXshZGVmYXVsdE9wZW59XG4gICAgICAgIHNpZGU9e1wibGVmdFwifVxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgICAgXCJiZy1iYWNrZ3JvdW5kLzgwIGJhY2tkcm9wLWJsdXIteGwgZml4ZWQgdG9wLTAgYm9yZGVyLXItWzFweF0gcC02XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJoaWRkZW4gbWQ6aW5saW5lLWJsb2NrIHotMCB3LVszMDBweF1cIjogZGVmYXVsdE9wZW4sXG4gICAgICAgICAgICBcImlubGluZS1ibG9jayBtZDpoaWRkZW4gei1bMTAwcHhdIHctZnVsbFwiOiAhZGVmYXVsdE9wZW4sXG4gICAgICAgICAgfVxuICAgICAgICApfVxuICAgICAgPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxBc3BlY3RSYXRpbyByYXRpbz17MTYgLyA1fT5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9e3NpZGViYXJMb2dvfVxuICAgICAgICAgICAgICBhbHQ9XCJTaWRlYmFyIExvZ29cIlxuICAgICAgICAgICAgICBmaWxsXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbWQgb2JqZWN0LWNvbnRhaW5cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0FzcGVjdFJhdGlvPlxuICAgICAgICAgIDxQb3BvdmVyPlxuICAgICAgICAgICAgPFBvcG92ZXJUcmlnZ2VyIGFzQ2hpbGQ+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgbXktNCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHktOFwiXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImdob3N0XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1sZWZ0IGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICA8Q29tcGFzcyAvPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICAgICAgICAgIHtkZXRhaWxzLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZCBcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7ZGV0YWlscy5hZGRyZXNzfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPENoZXZyb25zVXBEb3duIHNpemU9ezE2fSBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmRcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvUG9wb3ZlclRyaWdnZXI+XG4gICAgICAgICAgICA8UG9wb3ZlckNvbnRlbnQgY2xhc3NOYW1lPVwidy04MCBoLTgwIG10LTQgei1bMjAwXVwiPlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgPENvbW1hbmQgY2xhc3NOYW1lPVwicm91bmRlZC1sZ1wiPlxuICAgICAgICAgICAgICAgICAgPENvbW1hbmRJbnB1dCBwbGFjZWhvbGRlcj1cIlNlYXJjaCBBY2NvdW50Li4uXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxDb21tYW5kTGlzdCBjbGFzc05hbWU9XCJwYi0xNlwiPlxuICAgICAgICAgICAgICAgICAgICA8Q29tbWFuZEVtcHR5Pk5vIHJlc3VsdHMgZm91bmQ8L0NvbW1hbmRFbXB0eT5cbiAgICAgICAgICAgICAgICAgICAge3VzZXI/LnJvbGUgPT09IFwiQUdFTkNZX09XTkVSXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAodXNlcj8ucm9sZSA9PT0gXCJBR0VOQ1lfQURNSU5cIiAmJiB1c2VyPy5hZ2VuY3kgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvQ29tbWFuZExpc3Q+XG4gICAgICAgICAgICAgICAgPC9Db21tYW5kPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L1BvcG92ZXJDb250ZW50PlxuICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1NoZWV0Q29udGVudD5cbiAgICA8L1NoZWV0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudU9wdGlvbnM7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJTaGVldCIsIlNoZWV0Q29udGVudCIsIlNoZWV0VHJpZ2dlciIsIkJ1dHRvbiIsIkNoZXZyb25zVXBEb3duIiwiTWVudSIsImNsc3giLCJBc3BlY3RSYXRpbyIsIkltYWdlIiwiUG9wb3ZlciIsIlBvcG92ZXJDb250ZW50IiwiUG9wb3ZlclRyaWdnZXIiLCJDb21wYXNzIiwiQ29tbWFuZCIsIkNvbW1hbmRFbXB0eSIsIkNvbW1hbmRJbnB1dCIsIkNvbW1hbmRMaXN0IiwiTWVudU9wdGlvbnMiLCJkZWZhdWx0T3BlbiIsInN1YkFjY291bnRzIiwic2lkZWJhck9wdCIsInNpZGViYXJMb2dvIiwiZGV0YWlscyIsInVzZXIiLCJpZCIsImlzTW91bnRlZCIsInNldElzTW91bnRlZCIsIm9wZW5TdGF0ZSIsIm9wZW4iLCJtb2RhbCIsImFzQ2hpbGQiLCJjbGFzc05hbWUiLCJ2YXJpYW50Iiwic2l6ZSIsInNob3dYIiwic2lkZSIsImRpdiIsInJhdGlvIiwic3JjIiwiYWx0IiwiZmlsbCIsIm5hbWUiLCJzcGFuIiwiYWRkcmVzcyIsInBsYWNlaG9sZGVyIiwicm9sZSIsImFnZW5jeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/sidebar/menu-options.tsx\n"));

/***/ })

});