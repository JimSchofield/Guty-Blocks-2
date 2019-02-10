/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/src/index.js":
/*!*****************************!*\
  !*** ./assets/src/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _just_in_time_test_1_just_in_time_test_1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./just-in-time-test-1/just-in-time-test-1.js */ \"./assets/src/just-in-time-test-1/just-in-time-test-1.js\");\n\n\n//# sourceURL=webpack:///./assets/src/index.js?");

/***/ }),

/***/ "./assets/src/just-in-time-test-1/just-in-time-test-1.jit.scss":
/*!*********************************************************************!*\
  !*** ./assets/src/just-in-time-test-1/just-in-time-test-1.jit.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \".wp-block-test-just-in-time-test-1 {\\n  color: blue;\\n  padding: 2em;\\n  font-family: 'Avenir', sans-serif; }\\n\"\n\n//# sourceURL=webpack:///./assets/src/just-in-time-test-1/just-in-time-test-1.jit.scss?");

/***/ }),

/***/ "./assets/src/just-in-time-test-1/just-in-time-test-1.js":
/*!***************************************************************!*\
  !*** ./assets/src/just-in-time-test-1/just-in-time-test-1.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _just_in_time_test_1_jit_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./just-in-time-test-1.jit.scss */ \"./assets/src/just-in-time-test-1/just-in-time-test-1.jit.scss\");\n/* harmony import */ var _just_in_time_test_1_jit_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_just_in_time_test_1_jit_scss__WEBPACK_IMPORTED_MODULE_0__);\n// import './just-in-time-test-1.view.scss';\n// import './just-in-time-test-1.editor.scss';\n\nvar _wp$blocks = wp.blocks,\n    registerBlockType = _wp$blocks.registerBlockType,\n    getBlockDefaultClassName = _wp$blocks.getBlockDefaultClassName;\nvar InspectorControls = wp.editor.InspectorControls;\nregisterBlockType('test/just-in-time-test-1', {\n  title: 'Just in time Test 1',\n  icon: 'cloud',\n  category: 'common',\n  attributes: {\n    styles: {\n      type: 'string'\n    }\n  },\n  edit: function edit(props) {\n    var className = props.className,\n        setAttributes = props.setAttributes;\n    var styles = props.attributes.styles;\n\n    function refreshStyleSheets() {\n      setAttributes({\n        styles: _just_in_time_test_1_jit_scss__WEBPACK_IMPORTED_MODULE_0___default.a\n      });\n    }\n\n    return [React.createElement(InspectorControls, null, React.createElement(\"div\", {\n      style: {\n        padding: '1em 0'\n      }\n    }, React.createElement(\"button\", {\n      onClick: refreshStyleSheets\n    }, \"Refresh style sheets\"))), React.createElement(React.Fragment, null, React.createElement(\"style\", null, styles), React.createElement(\"div\", {\n      className: className\n    }, \"Just in time Test 1\"))];\n  },\n  save: function save(props) {\n    var className = getBlockDefaultClassName('test/just-in-time-test-1');\n    var styles = props.attributes.styles;\n    return React.createElement(React.Fragment, null, React.createElement(\"style\", null, styles), React.createElement(\"div\", {\n      className: className\n    }, \"Just in time Test 1\"));\n  }\n});\n\n//# sourceURL=webpack:///./assets/src/just-in-time-test-1/just-in-time-test-1.js?");

/***/ })

/******/ });