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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_sheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/sheet */ \"(app-pages-browser)/./src/components/ui/sheet.tsx\");\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _barrel_optimize_names_ChevronsUpDown_Menu_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronsUpDown,Menu!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/menu.js\");\n/* harmony import */ var _barrel_optimize_names_ChevronsUpDown_Menu_lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronsUpDown,Menu!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chevrons-up-down.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ \"(app-pages-browser)/./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var _ui_aspect_ratio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/aspect-ratio */ \"(app-pages-browser)/./src/components/ui/aspect-ratio.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _ui_popover__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ui/popover */ \"(app-pages-browser)/./src/components/ui/popover.tsx\");\n/* harmony import */ var _icons_compass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../icons/compass */ \"(app-pages-browser)/./src/components/icons/compass.tsx\");\n/* harmony import */ var _ui_command__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ui/command */ \"(app-pages-browser)/./src/components/ui/command.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst MenuOptions = (param)=>{\n    let { defaultOpen, subAccounts, sidebarOpt, sidebarLogo, details, user, id } = param;\n    _s();\n    const [isMounted, setIsMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const openState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>defaultOpen ? {\n            open: true\n        } : {}, [\n        defaultOpen\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setIsMounted(true);\n    }, []);\n    if (!isMounted) return;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_sheet__WEBPACK_IMPORTED_MODULE_2__.Sheet, {\n        modal: false,\n        open: true,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_sheet__WEBPACK_IMPORTED_MODULE_2__.SheetTrigger, {\n                asChild: true,\n                className: \"absolute left-4 top-4 z-[100] md:!hidden flex\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                    variant: \"outline\",\n                    size: \"icon\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronsUpDown_Menu_lucide_react__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_sheet__WEBPACK_IMPORTED_MODULE_2__.SheetContent, {\n                showX: !defaultOpen,\n                side: \"left\",\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"bg-background/80 backdrop-blur-xl fixed top-0 border-r-[1px] p-6\", {\n                    \"hidden md:inline-block z-0 w-[300px]\": defaultOpen,\n                    \"inline-block md:hidden z-[100px] w-full\": !defaultOpen\n                }),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_aspect_ratio__WEBPACK_IMPORTED_MODULE_5__.AspectRatio, {\n                            ratio: 16 / 5,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                src: sidebarLogo,\n                                alt: \"Sidebar Logo\",\n                                fill: true,\n                                className: \"rounded-md object-contain\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_popover__WEBPACK_IMPORTED_MODULE_7__.Popover, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_popover__WEBPACK_IMPORTED_MODULE_7__.PopoverTrigger, {\n                                    asChild: true,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                        className: \"w-full my-4 flex items-center justify-between py-8\",\n                                        variant: \"ghost\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex items-center text-left gap-2\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_compass__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                                        fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                                                        lineNumber: 94,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"flex flex-col\",\n                                                        children: [\n                                                            details.name,\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                                className: \"text-muted-foreground \",\n                                                                children: details.address\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                                                                lineNumber: 97,\n                                                                columnNumber: 21\n                                                            }, undefined)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                                                        lineNumber: 95,\n                                                        columnNumber: 19\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                                                lineNumber: 93,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronsUpDown_Menu_lucide_react__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                                    size: 16,\n                                                    className: \"text-muted-foreground\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                                                    lineNumber: 103,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                                                lineNumber: 102,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_popover__WEBPACK_IMPORTED_MODULE_7__.PopoverContent, {\n                                    className: \"w-80 h-80 mt-4 z-[200]\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_command__WEBPACK_IMPORTED_MODULE_9__.Command, {\n                                        className: \"rounded-lg\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_command__WEBPACK_IMPORTED_MODULE_9__.CommandInput, {\n                                                placeholder: \"Search Account...\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                                                lineNumber: 109,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_command__WEBPACK_IMPORTED_MODULE_9__.CommandList, {\n                                                className: \"pb-16\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_command__WEBPACK_IMPORTED_MODULE_9__.CommandEmpty, {\n                                                        children: \"No results found\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                                                        lineNumber: 111,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    ((user === null || user === void 0 ? void 0 : user.role) === \"AGENCY_OWNER\" || (user === null || user === void 0 ? void 0 : user.role) === \"AGENCY_ADMIN\") && (user === null || user === void 0 ? void 0 : user.agency) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_command__WEBPACK_IMPORTED_MODULE_9__.CommandGroup, {\n                                                        heading: \"Agency\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_command__WEBPACK_IMPORTED_MODULE_9__.CommandItem, {\n                                                            className: \"!bg-transparent my-2 text-primary border-[1px] border-border p-2 rounded-md hover:!bg-muted cursor-pointer transition-all\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                                                            lineNumber: 116,\n                                                            columnNumber: 25\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                                                        lineNumber: 115,\n                                                        columnNumber: 23\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                                                lineNumber: 110,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                                        lineNumber: 108,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mohitgondaliya/Projects/Reactjs/plura/src/components/sidebar/menu-options.tsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MenuOptions, \"9FxPj85lQ7jgEB90j1QGd3qUwN4=\");\n_c = MenuOptions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MenuOptions);\nvar _c;\n$RefreshReg$(_c, \"MenuOptions\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3NpZGViYXIvbWVudS1vcHRpb25zLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBTzREO0FBQ0k7QUFDMUI7QUFDYztBQUM1QjtBQUN5QjtBQUNsQjtBQUN5QztBQUNqQztBQVFoQjtBQVl2QixNQUFNdUIsY0FBYztRQUFDLEVBQ25CQyxXQUFXLEVBQ1hDLFdBQVcsRUFDWEMsVUFBVSxFQUNWQyxXQUFXLEVBQ1hDLE9BQU8sRUFDUEMsSUFBSSxFQUNKQyxFQUFFLEVBQ0k7O0lBQ04sTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUc3QiwrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNOEIsWUFBWS9CLDhDQUFPQSxDQUN2QixJQUFPc0IsY0FBYztZQUFFVSxNQUFNO1FBQUssSUFBSSxDQUFDLEdBQ3ZDO1FBQUNWO0tBQVk7SUFHZnZCLGdEQUFTQSxDQUFDO1FBQ1IrQixhQUFhO0lBQ2YsR0FBRyxFQUFFO0lBRUwsSUFBSSxDQUFDRCxXQUFXO0lBQ2hCLHFCQUNFLDhEQUFDM0IsNENBQUtBO1FBQUMrQixPQUFPO1FBQU9ELE1BQU07OzBCQUN6Qiw4REFBQzVCLG1EQUFZQTtnQkFDWDhCLE9BQU87Z0JBQ1BDLFdBQVU7MEJBRVYsNEVBQUM5Qiw4Q0FBTUE7b0JBQUMrQixTQUFTO29CQUFXQyxNQUFNOzhCQUNoQyw0RUFBQzlCLGdHQUFJQTs7Ozs7Ozs7Ozs7Ozs7OzBCQUdULDhEQUFDSixtREFBWUE7Z0JBQ1htQyxPQUFPLENBQUNoQjtnQkFDUmlCLE1BQU07Z0JBQ05KLFdBQVczQixnREFBSUEsQ0FDYixvRUFDQTtvQkFDRSx3Q0FBd0NjO29CQUN4QywyQ0FBMkMsQ0FBQ0E7Z0JBQzlDOzBCQUdGLDRFQUFDa0I7O3NDQUNDLDhEQUFDL0IseURBQVdBOzRCQUFDZ0MsT0FBTyxLQUFLO3NDQUN2Qiw0RUFBQy9CLGtEQUFLQTtnQ0FDSmdDLEtBQUtqQjtnQ0FDTGtCLEtBQUk7Z0NBQ0pDLElBQUk7Z0NBQ0pULFdBQVU7Ozs7Ozs7Ozs7O3NDQUdkLDhEQUFDeEIsZ0RBQU9BOzs4Q0FDTiw4REFBQ0UsdURBQWNBO29DQUFDcUIsT0FBTzs4Q0FDckIsNEVBQUM3Qiw4Q0FBTUE7d0NBQ0w4QixXQUFVO3dDQUNWQyxTQUFROzswREFFUiw4REFBQ0k7Z0RBQUlMLFdBQVU7O2tFQUNiLDhEQUFDckIsc0RBQU9BOzs7OztrRUFDUiw4REFBQzBCO3dEQUFJTCxXQUFVOzs0REFDWlQsUUFBUW1CLElBQUk7MEVBQ2IsOERBQUNDO2dFQUFLWCxXQUFVOzBFQUNiVCxRQUFRcUIsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBEQUl0Qiw4REFBQ1A7MERBQ0MsNEVBQUNsQyxnR0FBY0E7b0RBQUMrQixNQUFNO29EQUFJRixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQUkxQyw4REFBQ3ZCLHVEQUFjQTtvQ0FBQ3VCLFdBQVU7OENBQ3hCLDRFQUFDcEIsZ0RBQU9BO3dDQUFDb0IsV0FBVTs7MERBQ2pCLDhEQUFDakIscURBQVlBO2dEQUFDOEIsYUFBWTs7Ozs7OzBEQUMxQiw4REFBQzVCLG9EQUFXQTtnREFBQ2UsV0FBVTs7a0VBQ3JCLDhEQUFDbkIscURBQVlBO2tFQUFDOzs7Ozs7b0RBQ1pXLENBQUFBLENBQUFBLGlCQUFBQSwyQkFBQUEsS0FBTXNCLElBQUksTUFBSyxrQkFDZnRCLENBQUFBLGlCQUFBQSwyQkFBQUEsS0FBTXNCLElBQUksTUFBSyxjQUFhLE1BQzVCdEIsaUJBQUFBLDJCQUFBQSxLQUFNdUIsTUFBTSxtQkFDViw4REFBQ2pDLHFEQUFZQTt3REFBQ2tDLFNBQVE7a0VBQ3BCLDRFQUFDaEMsb0RBQVdBOzREQUFDZ0IsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVy9DO0dBM0ZNZDtLQUFBQTtBQTZGTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9zaWRlYmFyL21lbnUtb3B0aW9ucy50c3g/OGM0YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHtcbiAgQWdlbmN5U2lkZWJhck9wdGlvbixcbiAgU3ViQWNjb3VudCxcbiAgU3ViQWNjb3VudFNpZGViYXJPcHRpb24sXG59IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFNoZWV0LCBTaGVldENvbnRlbnQsIFNoZWV0VHJpZ2dlciB9IGZyb20gXCIuLi91aS9zaGVldFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4uL3VpL2J1dHRvblwiO1xuaW1wb3J0IHsgQ2hldnJvbnNVcERvd24sIE1lbnUgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xuaW1wb3J0IHsgQXNwZWN0UmF0aW8gfSBmcm9tIFwiLi4vdWkvYXNwZWN0LXJhdGlvXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IFBvcG92ZXIsIFBvcG92ZXJDb250ZW50LCBQb3BvdmVyVHJpZ2dlciB9IGZyb20gXCIuLi91aS9wb3BvdmVyXCI7XG5pbXBvcnQgQ29tcGFzcyBmcm9tIFwiLi4vaWNvbnMvY29tcGFzc1wiO1xuaW1wb3J0IHtcbiAgQ29tbWFuZCxcbiAgQ29tbWFuZEVtcHR5LFxuICBDb21tYW5kR3JvdXAsXG4gIENvbW1hbmRJbnB1dCxcbiAgQ29tbWFuZEl0ZW0sXG4gIENvbW1hbmRMaXN0LFxufSBmcm9tIFwiLi4vdWkvY29tbWFuZFwiO1xuXG50eXBlIFByb3BzID0ge1xuICBkZWZhdWx0T3Blbj86IGJvb2xlYW47XG4gIHN1YkFjY291bnRzOiBTdWJBY2NvdW50W107XG4gIHNpZGViYXJPcHQ6IEFnZW5jeVNpZGViYXJPcHRpb25bXSB8IFN1YkFjY291bnRTaWRlYmFyT3B0aW9uW107XG4gIHNpZGViYXJMb2dvOiBzdHJpbmc7XG4gIGRldGFpbHM6IGFueTtcbiAgdXNlcjogYW55O1xuICBpZDogc3RyaW5nO1xufTtcblxuY29uc3QgTWVudU9wdGlvbnMgPSAoe1xuICBkZWZhdWx0T3BlbixcbiAgc3ViQWNjb3VudHMsXG4gIHNpZGViYXJPcHQsXG4gIHNpZGViYXJMb2dvLFxuICBkZXRhaWxzLFxuICB1c2VyLFxuICBpZCxcbn06IFByb3BzKSA9PiB7XG4gIGNvbnN0IFtpc01vdW50ZWQsIHNldElzTW91bnRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgb3BlblN0YXRlID0gdXNlTWVtbyhcbiAgICAoKSA9PiAoZGVmYXVsdE9wZW4gPyB7IG9wZW46IHRydWUgfSA6IHt9KSxcbiAgICBbZGVmYXVsdE9wZW5dXG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJc01vdW50ZWQodHJ1ZSk7XG4gIH0sIFtdKTtcblxuICBpZiAoIWlzTW91bnRlZCkgcmV0dXJuO1xuICByZXR1cm4gKFxuICAgIDxTaGVldCBtb2RhbD17ZmFsc2V9IG9wZW49e3RydWV9PlxuICAgICAgPFNoZWV0VHJpZ2dlclxuICAgICAgICBhc0NoaWxkXG4gICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtNCB0b3AtNCB6LVsxMDBdIG1kOiFoaWRkZW4gZmxleFwiXG4gICAgICA+XG4gICAgICAgIDxCdXR0b24gdmFyaWFudD17XCJvdXRsaW5lXCJ9IHNpemU9e1wiaWNvblwifT5cbiAgICAgICAgICA8TWVudSAvPlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvU2hlZXRUcmlnZ2VyPlxuICAgICAgPFNoZWV0Q29udGVudFxuICAgICAgICBzaG93WD17IWRlZmF1bHRPcGVufVxuICAgICAgICBzaWRlPXtcImxlZnRcIn1cbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAgIFwiYmctYmFja2dyb3VuZC84MCBiYWNrZHJvcC1ibHVyLXhsIGZpeGVkIHRvcC0wIGJvcmRlci1yLVsxcHhdIHAtNlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiaGlkZGVuIG1kOmlubGluZS1ibG9jayB6LTAgdy1bMzAwcHhdXCI6IGRlZmF1bHRPcGVuLFxuICAgICAgICAgICAgXCJpbmxpbmUtYmxvY2sgbWQ6aGlkZGVuIHotWzEwMHB4XSB3LWZ1bGxcIjogIWRlZmF1bHRPcGVuLFxuICAgICAgICAgIH1cbiAgICAgICAgKX1cbiAgICAgID5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8QXNwZWN0UmF0aW8gcmF0aW89ezE2IC8gNX0+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgc3JjPXtzaWRlYmFyTG9nb31cbiAgICAgICAgICAgICAgYWx0PVwiU2lkZWJhciBMb2dvXCJcbiAgICAgICAgICAgICAgZmlsbFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLW1kIG9iamVjdC1jb250YWluXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Bc3BlY3RSYXRpbz5cbiAgICAgICAgICA8UG9wb3Zlcj5cbiAgICAgICAgICAgIDxQb3BvdmVyVHJpZ2dlciBhc0NoaWxkPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIG15LTQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB5LThcIlxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJnaG9zdFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHRleHQtbGVmdCBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgPENvbXBhc3MgLz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgICAgICAgICB7ZGV0YWlscy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmQgXCI+XG4gICAgICAgICAgICAgICAgICAgICAge2RldGFpbHMuYWRkcmVzc31cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxDaGV2cm9uc1VwRG93biBzaXplPXsxNn0gY2xhc3NOYW1lPVwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L1BvcG92ZXJUcmlnZ2VyPlxuICAgICAgICAgICAgPFBvcG92ZXJDb250ZW50IGNsYXNzTmFtZT1cInctODAgaC04MCBtdC00IHotWzIwMF1cIj5cbiAgICAgICAgICAgICAgPENvbW1hbmQgY2xhc3NOYW1lPVwicm91bmRlZC1sZ1wiPlxuICAgICAgICAgICAgICAgIDxDb21tYW5kSW5wdXQgcGxhY2Vob2xkZXI9XCJTZWFyY2ggQWNjb3VudC4uLlwiIC8+XG4gICAgICAgICAgICAgICAgPENvbW1hbmRMaXN0IGNsYXNzTmFtZT1cInBiLTE2XCI+XG4gICAgICAgICAgICAgICAgICA8Q29tbWFuZEVtcHR5Pk5vIHJlc3VsdHMgZm91bmQ8L0NvbW1hbmRFbXB0eT5cbiAgICAgICAgICAgICAgICAgIHsodXNlcj8ucm9sZSA9PT0gXCJBR0VOQ1lfT1dORVJcIiB8fFxuICAgICAgICAgICAgICAgICAgICB1c2VyPy5yb2xlID09PSBcIkFHRU5DWV9BRE1JTlwiKSAmJlxuICAgICAgICAgICAgICAgICAgICB1c2VyPy5hZ2VuY3kgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxDb21tYW5kR3JvdXAgaGVhZGluZz1cIkFnZW5jeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbW1hbmRJdGVtIGNsYXNzTmFtZT1cIiFiZy10cmFuc3BhcmVudCBteS0yIHRleHQtcHJpbWFyeSBib3JkZXItWzFweF0gYm9yZGVyLWJvcmRlciBwLTIgcm91bmRlZC1tZCBob3ZlcjohYmctbXV0ZWQgY3Vyc29yLXBvaW50ZXIgdHJhbnNpdGlvbi1hbGxcIj48L0NvbW1hbmRJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29tbWFuZEdyb3VwPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvQ29tbWFuZExpc3Q+XG4gICAgICAgICAgICAgIDwvQ29tbWFuZD5cbiAgICAgICAgICAgIDwvUG9wb3ZlckNvbnRlbnQ+XG4gICAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU2hlZXRDb250ZW50PlxuICAgIDwvU2hlZXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZW51T3B0aW9ucztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsIlNoZWV0IiwiU2hlZXRDb250ZW50IiwiU2hlZXRUcmlnZ2VyIiwiQnV0dG9uIiwiQ2hldnJvbnNVcERvd24iLCJNZW51IiwiY2xzeCIsIkFzcGVjdFJhdGlvIiwiSW1hZ2UiLCJQb3BvdmVyIiwiUG9wb3ZlckNvbnRlbnQiLCJQb3BvdmVyVHJpZ2dlciIsIkNvbXBhc3MiLCJDb21tYW5kIiwiQ29tbWFuZEVtcHR5IiwiQ29tbWFuZEdyb3VwIiwiQ29tbWFuZElucHV0IiwiQ29tbWFuZEl0ZW0iLCJDb21tYW5kTGlzdCIsIk1lbnVPcHRpb25zIiwiZGVmYXVsdE9wZW4iLCJzdWJBY2NvdW50cyIsInNpZGViYXJPcHQiLCJzaWRlYmFyTG9nbyIsImRldGFpbHMiLCJ1c2VyIiwiaWQiLCJpc01vdW50ZWQiLCJzZXRJc01vdW50ZWQiLCJvcGVuU3RhdGUiLCJvcGVuIiwibW9kYWwiLCJhc0NoaWxkIiwiY2xhc3NOYW1lIiwidmFyaWFudCIsInNpemUiLCJzaG93WCIsInNpZGUiLCJkaXYiLCJyYXRpbyIsInNyYyIsImFsdCIsImZpbGwiLCJuYW1lIiwic3BhbiIsImFkZHJlc3MiLCJwbGFjZWhvbGRlciIsInJvbGUiLCJhZ2VuY3kiLCJoZWFkaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/sidebar/menu-options.tsx\n"));

/***/ })

});