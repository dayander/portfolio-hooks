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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/andersonday/sites/portfolio-hooks/.babelrc: Error while parsing config - JSON5: invalid character '}' at 7:1\\n    at syntaxError (/Users/andersonday/sites/portfolio-hooks/node_modules/@babel/core/node_modules/json5/lib/parse.js:1083:17)\\n    at invalidChar (/Users/andersonday/sites/portfolio-hooks/node_modules/@babel/core/node_modules/json5/lib/parse.js:1028:12)\\n    at Object.afterArrayValue (/Users/andersonday/sites/portfolio-hooks/node_modules/@babel/core/node_modules/json5/lib/parse.js:672:15)\\n    at Object.default (/Users/andersonday/sites/portfolio-hooks/node_modules/@babel/core/node_modules/json5/lib/parse.js:146:37)\\n    at lex (/Users/andersonday/sites/portfolio-hooks/node_modules/@babel/core/node_modules/json5/lib/parse.js:78:42)\\n    at Object.parse (/Users/andersonday/sites/portfolio-hooks/node_modules/@babel/core/node_modules/json5/lib/parse.js:25:17)\\n    at readConfigJSON5 (/Users/andersonday/sites/portfolio-hooks/node_modules/@babel/core/lib/config/files/configuration.js:248:31)\\n    at /Users/andersonday/sites/portfolio-hooks/node_modules/@babel/core/lib/config/files/utils.js:29:12\\n    at cachedFunction (/Users/andersonday/sites/portfolio-hooks/node_modules/@babel/core/lib/config/caching.js:33:19)\\n    at readConfig (/Users/andersonday/sites/portfolio-hooks/node_modules/@babel/core/lib/config/files/configuration.js:176:8)\\n    at config.reduce (/Users/andersonday/sites/portfolio-hooks/node_modules/@babel/core/lib/config/files/configuration.js:105:24)\\n    at Array.reduce (<anonymous>)\\n    at findRelativeConfig (/Users/andersonday/sites/portfolio-hooks/node_modules/@babel/core/lib/config/files/configuration.js:102:56)\\n    at buildRootChain (/Users/andersonday/sites/portfolio-hooks/node_modules/@babel/core/lib/config/config-chain.js:113:39)\\n    at loadPrivatePartialConfig (/Users/andersonday/sites/portfolio-hooks/node_modules/@babel/core/lib/config/partial.js:85:55)\\n    at Object.loadPartialConfig (/Users/andersonday/sites/portfolio-hooks/node_modules/@babel/core/lib/config/partial.js:110:18)\\n    at Object.<anonymous> (/Users/andersonday/sites/portfolio-hooks/node_modules/babel-loader/lib/index.js:144:26)\\n    at Generator.next (<anonymous>)\\n    at asyncGeneratorStep (/Users/andersonday/sites/portfolio-hooks/node_modules/babel-loader/lib/index.js:3:103)\\n    at _next (/Users/andersonday/sites/portfolio-hooks/node_modules/babel-loader/lib/index.js:5:194)\\n    at /Users/andersonday/sites/portfolio-hooks/node_modules/babel-loader/lib/index.js:5:364\\n    at new Promise (<anonymous>)\\n    at Object.<anonymous> (/Users/andersonday/sites/portfolio-hooks/node_modules/babel-loader/lib/index.js:5:97)\\n    at Object.loader (/Users/andersonday/sites/portfolio-hooks/node_modules/babel-loader/lib/index.js:60:18)\\n    at Object.<anonymous> (/Users/andersonday/sites/portfolio-hooks/node_modules/babel-loader/lib/index.js:55:12)\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });