"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/movies/[id]";
exports.ids = ["pages/movies/[id]"];
exports.modules = {

/***/ "./pages/movies/[id].js":
/*!******************************!*\
  !*** ./pages/movies/[id].js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TheMovie),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);\nswr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction TheMovie({ data  }) {\n    console.log(`Pré-renderizando ${data.Title}`);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    data.Title,\n                    \" --- \",\n                    data.Year\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ADM\\\\Desktop\\\\PWeb\\\\3uni\\\\receita 9\\\\pages\\\\movies\\\\[id].js\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: data.Plot\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ADM\\\\Desktop\\\\PWeb\\\\3uni\\\\receita 9\\\\pages\\\\movies\\\\[id].js\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: data.Poster,\n                    width: \"300\",\n                    height: \"400\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ADM\\\\Desktop\\\\PWeb\\\\3uni\\\\receita 9\\\\pages\\\\movies\\\\[id].js\",\n                    lineNumber: 11,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ADM\\\\Desktop\\\\PWeb\\\\3uni\\\\receita 9\\\\pages\\\\movies\\\\[id].js\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ADM\\\\Desktop\\\\PWeb\\\\3uni\\\\receita 9\\\\pages\\\\movies\\\\[id].js\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, this);\n};\nasync function getStaticPaths() {\n    return {\n        paths: [\n            {\n                params: {\n                    id: \"tt0095801\"\n                }\n            },\n            {\n                params: {\n                    id: \"tt0033152\"\n                }\n            },\n            {\n                params: {\n                    id: \"tt0015400\"\n                }\n            },\n            {\n                params: {\n                    id: \"tt0041149\"\n                }\n            },\n            {\n                params: {\n                    id: \"tt0044388\"\n                }\n            },\n            {\n                params: {\n                    id: \"tt0098746\"\n                }\n            },\n            {\n                params: {\n                    id: \"tt0046322\"\n                }\n            },\n            {\n                params: {\n                    id: \"tt0046497\"\n                }\n            },\n            {\n                params: {\n                    id: \"tt0044389\"\n                }\n            }\n        ],\n        fallback: true\n    };\n}\nasync function getStaticProps({ params  }) {\n    const res = await fetch(`https://www.omdbapi.com/?apikey=f1cbc41e&i=${params.id}`);\n    const data = await res.json();\n    return {\n        props: {\n            data\n        }\n    };\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZXMvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQXdCO0FBQ2U7QUFFeEIsU0FBU0UsUUFBUSxDQUFDLEVBQUNDLElBQUksR0FBQyxFQUFDO0lBQ3BDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFDLGtCQUFpQixFQUFFRixJQUFJLENBQUNHLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDN0MscUJBQ0ksOERBQUNDLEtBQUc7OzBCQUNBLDhEQUFDQSxLQUFHOztvQkFBRUosSUFBSSxDQUFDRyxLQUFLO29CQUFDLE9BQUs7b0JBQUNILElBQUksQ0FBQ0ssSUFBSTs7Ozs7O29CQUFPOzBCQUN2Qyw4REFBQ0QsS0FBRzswQkFBRUosSUFBSSxDQUFDTSxJQUFJOzs7OztvQkFBTzswQkFDdEIsOERBQUNGLEtBQUc7MEJBQ0EsNEVBQUNHLEtBQUc7b0JBQUNDLEdBQUcsRUFBRVIsSUFBSSxDQUFDUyxNQUFNO29CQUFFQyxLQUFLLEVBQUMsS0FBSztvQkFBQ0MsTUFBTSxFQUFDLEtBQUs7Ozs7O3dCQUFFOzs7OztvQkFDL0M7Ozs7OztZQUNKLENBQ1Q7Q0FDSjtBQUVNLGVBQWVDLGNBQWMsR0FBRTtJQUNsQyxPQUFPO1FBQ0hDLEtBQUssRUFBQztZQUNGO2dCQUFDQyxNQUFNLEVBQUU7b0JBQUNDLEVBQUUsRUFBRSxXQUFXO2lCQUFDO2FBQUM7WUFDM0I7Z0JBQUNELE1BQU0sRUFBRTtvQkFBQ0MsRUFBRSxFQUFFLFdBQVc7aUJBQUM7YUFBQztZQUMzQjtnQkFBQ0QsTUFBTSxFQUFFO29CQUFDQyxFQUFFLEVBQUUsV0FBVztpQkFBQzthQUFDO1lBQzNCO2dCQUFDRCxNQUFNLEVBQUU7b0JBQUNDLEVBQUUsRUFBRSxXQUFXO2lCQUFDO2FBQUM7WUFDM0I7Z0JBQUNELE1BQU0sRUFBRTtvQkFBQ0MsRUFBRSxFQUFFLFdBQVc7aUJBQUM7YUFBQztZQUMzQjtnQkFBQ0QsTUFBTSxFQUFFO29CQUFDQyxFQUFFLEVBQUUsV0FBVztpQkFBQzthQUFDO1lBQzNCO2dCQUFDRCxNQUFNLEVBQUU7b0JBQUNDLEVBQUUsRUFBRSxXQUFXO2lCQUFDO2FBQUM7WUFDM0I7Z0JBQUNELE1BQU0sRUFBRTtvQkFBQ0MsRUFBRSxFQUFFLFdBQVc7aUJBQUM7YUFBQztZQUMzQjtnQkFBQ0QsTUFBTSxFQUFFO29CQUFDQyxFQUFFLEVBQUUsV0FBVztpQkFBQzthQUFDO1NBQzlCO1FBQ0RDLFFBQVEsRUFBRSxJQUFJO0tBQ2pCO0NBQ0o7QUFFTSxlQUFlQyxjQUFjLENBQUMsRUFBRUgsTUFBTSxHQUFFLEVBQUU7SUFDN0MsTUFBTUksR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQyxDQUFDLDJDQUEyQyxFQUFFTCxNQUFNLENBQUNDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbEYsTUFBTWYsSUFBSSxHQUFHLE1BQU1rQixHQUFHLENBQUNFLElBQUksRUFBRTtJQUM3QixPQUFPO1FBQ0xDLEtBQUssRUFBRTtZQUNMckIsSUFBSTtTQUNMO0tBQ0Y7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQwLy4vcGFnZXMvbW92aWVzL1tpZF0uanM/OGE3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUaGVNb3ZpZSh7ZGF0YX0pe1xyXG4gICAgY29uc29sZS5sb2coYFByw6ktcmVuZGVyaXphbmRvICR7ZGF0YS5UaXRsZX1gKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PntkYXRhLlRpdGxlfSAtLS0ge2RhdGEuWWVhcn08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj57ZGF0YS5QbG90fTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2RhdGEuUG9zdGVyfSB3aWR0aD1cIjMwMFwiIGhlaWdodD1cIjQwMFwiLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+ICAgICBcclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCl7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhdGhzOltcclxuICAgICAgICAgICAge3BhcmFtczoge2lkOiBcInR0MDA5NTgwMVwifX0sXHJcbiAgICAgICAgICAgIHtwYXJhbXM6IHtpZDogXCJ0dDAwMzMxNTJcIn19LFxyXG4gICAgICAgICAgICB7cGFyYW1zOiB7aWQ6IFwidHQwMDE1NDAwXCJ9fSxcclxuICAgICAgICAgICAge3BhcmFtczoge2lkOiBcInR0MDA0MTE0OVwifX0sXHJcbiAgICAgICAgICAgIHtwYXJhbXM6IHtpZDogXCJ0dDAwNDQzODhcIn19LFxyXG4gICAgICAgICAgICB7cGFyYW1zOiB7aWQ6IFwidHQwMDk4NzQ2XCJ9fSxcclxuICAgICAgICAgICAge3BhcmFtczoge2lkOiBcInR0MDA0NjMyMlwifX0sXHJcbiAgICAgICAgICAgIHtwYXJhbXM6IHtpZDogXCJ0dDAwNDY0OTdcIn19LFxyXG4gICAgICAgICAgICB7cGFyYW1zOiB7aWQ6IFwidHQwMDQ0Mzg5XCJ9fVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZmFsbGJhY2s6IHRydWUgXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly93d3cub21kYmFwaS5jb20vP2FwaWtleT1mMWNiYzQxZSZpPSR7cGFyYW1zLmlkfWApXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgZGF0YVxyXG4gICAgICB9XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsidXNlU1dSIiwidXNlUm91dGVyIiwiVGhlTW92aWUiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIlRpdGxlIiwiZGl2IiwiWWVhciIsIlBsb3QiLCJpbWciLCJzcmMiLCJQb3N0ZXIiLCJ3aWR0aCIsImhlaWdodCIsImdldFN0YXRpY1BhdGhzIiwicGF0aHMiLCJwYXJhbXMiLCJpZCIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJyZXMiLCJmZXRjaCIsImpzb24iLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/movies/[id].js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/movies/[id].js"));
module.exports = __webpack_exports__;

})();