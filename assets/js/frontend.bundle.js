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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/styles.scss */ \"./sass/styles.scss\");\n/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_styles_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/navigation */ \"./js/modules/navigation.js\");\n/* harmony import */ var _modules_aboutImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/aboutImage */ \"./js/modules/aboutImage.js\");\n/* harmony import */ var _modules_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/footer */ \"./js/modules/footer.js\");\n/* harmony import */ var _modules_nightMode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/nightMode */ \"./js/modules/nightMode.js\");\n\n\n\n\n\nObject(_modules_navigation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nObject(_modules_aboutImage__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\nObject(_modules_footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\nObject(_modules_nightMode__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ }),

/***/ "./js/modules/aboutImage.js":
/*!**********************************!*\
  !*** ./js/modules/aboutImage.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar aboutImage = function aboutImage() {\n  var url = 'https://robohash.org/set_set';\n  var imageHolder = document.querySelector('.image-holder');\n  var image = document.createElement('img');\n  image.src = url + Math.round(Math.random() * 10);\n  imageHolder.append(image);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (aboutImage);\n\n//# sourceURL=webpack:///./js/modules/aboutImage.js?");

/***/ }),

/***/ "./js/modules/footer.js":
/*!******************************!*\
  !*** ./js/modules/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar footer = function footer() {\n  var date = new Date();\n  var dateElement = document.querySelector('.date');\n  dateElement.innerHTML = date.getFullYear();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (footer);\n\n//# sourceURL=webpack:///./js/modules/footer.js?");

/***/ }),

/***/ "./js/modules/navigation.js":
/*!**********************************!*\
  !*** ./js/modules/navigation.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar navigation = function navigation() {};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (navigation);\n\n//# sourceURL=webpack:///./js/modules/navigation.js?");

/***/ }),

/***/ "./js/modules/nightMode.js":
/*!*********************************!*\
  !*** ./js/modules/nightMode.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar nightMode = function nightMode() {\n  var switchMode = document.querySelector('.switch-mode');\n\n  var nightMode = function nightMode() {\n    if (localStorage.getItem('switchMode')) {\n      document.body.classList.add('dark-theme');\n      switchMode.children[0].classList.remove('fa-moon');\n      switchMode.children[0].classList.add('fa-sun');\n    } else {\n      document.body.classList.remove('dark-theme');\n      switchMode.children[0].classList.remove('fa-sun');\n      switchMode.children[0].classList.add('fa-moon');\n    }\n  };\n\n  try {\n    switchMode.addEventListener('click', function () {\n      if (localStorage.getItem('switchMode')) {\n        localStorage.removeItem('switchMode');\n      } else {\n        localStorage.setItem('switchMode', true);\n      }\n\n      nightMode();\n    });\n  } catch (e) {}\n\n  nightMode();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (nightMode);\n\n//# sourceURL=webpack:///./js/modules/nightMode.js?");

/***/ }),

/***/ "./sass/styles.scss":
/*!**************************!*\
  !*** ./sass/styles.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./sass/styles.scss?");

/***/ })

/******/ });