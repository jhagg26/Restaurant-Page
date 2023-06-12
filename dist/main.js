/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contactPage.js":
/*!****************************!*\
  !*** ./src/contactPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contactPageDisplay)\n/* harmony export */ });\n/* harmony import */ var _homePage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage.js */ \"./src/homePage.js\");\n/* harmony import */ var _menuPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuPage.js */ \"./src/menuPage.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\n\n\nfunction contactPageDisplay(element) {\n\n    element.innerHTML = \"\";\n\n    // Create elements for webpage\n    const navbar = document.createElement(\"div\");\n    navbar.setAttribute(\"id\", \"navbar\");\n    (0,_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(element, navbar);\n\n    const header = document.createElement(\"header\");\n    header.textContent = \"How to Contact The Pizza Palace\";\n\n    // Add content to element (content div on webpage)\n    element.appendChild(navbar);\n    element.appendChild(header);\n  }\n\n//# sourceURL=webpack://restaurant-page-/./src/contactPage.js?");

/***/ }),

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ homePageDisplay)\n/* harmony export */ });\n/* harmony import */ var _menuPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuPage.js */ \"./src/menuPage.js\");\n/* harmony import */ var _contactPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactPage.js */ \"./src/contactPage.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\n\n\nfunction homePageDisplay(element) {\n\n    element.innerHTML = \"\";\n\n    const subContentDiv = document.createElement(\"div\");\n    subContentDiv.setAttribute(\"id\", \"sub-content-div\")\n\n    // Create elements for webpage\n    const navbar = document.createElement(\"div\");\n    navbar.setAttribute(\"id\", \"navbar\");\n    (0,_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(element, navbar);\n\n    const header = document.createElement(\"header\");\n    header.textContent = \"Welcome to The Pizza Palace!\";\n\n    const heroImage = document.createElement(\"img\");\n    heroImage.setAttribute(\"height\", \"300px\");\n    heroImage.setAttribute(\"width\", \"300px\");\n    heroImage.setAttribute(\"id\", \"hero-image\");\n    heroImage.setAttribute(\"src\", \"../hero-image.png\");\n\n    const heroMessage = document.createElement(\"p\");\n    heroMessage.setAttribute(\"id\", \"hero-message\");\n\n    // Newline char didn't work, this solved my issue https://stackoverflow.com/questions/9980416/how-can-i-insert-new-line-carriage-returns-into-an-element-textcontent\n    heroMessage.setAttribute('style', 'white-space: pre;');\n    heroMessage.innerHTML = \n        \"Welcome to our beloved pizza restaurant, where family traditions and exceptional service blend to create an unforgettable dining experience!\"\n        + \"</br>For over three decades, we have proudly served our community with the utmost passion, dedication, and, of course, mouthwatering pizzas.\"\n        + \"</br>It all started more than 30 years ago when a determined mom and pop embarked on a culinary journey, armed with a cherished family recipe that has stood the test of time.\"\n        + \"</br>With love as the secret ingredient, they crafted each pizza with care, delighting taste buds and creating memories that have resonated through generations.\"\n        + \"</br>Our commitment to preserving that legacy is unwavering. From the moment you step into our cozy establishment, you become part of our extended family.\"\n        + \"</br>Our warm and friendly staff greets you with genuine smiles, eager to provide exceptional customer service that goes beyond expectations.\"\n        + \"</br>We believe that every interaction should leave you feeling valued and appreciated.\"\n        + \"</br>Our pizzas are a masterpiece, meticulously prepared with only the freshest ingredients, hand-tossed dough, and a blend of flavorful sauces that dance on your palate.\"\n        + \"</br>Each pizza is lovingly topped with an abundance of premium cheeses and a variety of meticulously selected toppings, ensuring every bite is a symphony of flavors.\"\n        + \"</br>As a staple in our community, we take great pride in being the place where friends gather, families celebrate, and memories are created.\"\n        + \"</br>Whether it's a lively evening with loved ones or a cozy dinner for two, our inviting atmosphere and exceptional hospitality create the perfect backdrop for any occasion.\"\n        + \"</br>So join us, as we invite you to savor the magic of our cherished family recipe, experience the warmth of our genuine customer service, and become a part of our pizza-loving family.\"\n        + \"</br>Together, let's create moments that will be cherished for years to come.\";\n\n    heroMessage.classList.add('test');\n\n    // Add content to element (content div on webpage)\n    subContentDiv.appendChild(header);\n    subContentDiv.appendChild(heroImage);\n    subContentDiv.appendChild(heroMessage);\n\n    element.appendChild(navbar);\n    element.appendChild(subContentDiv);\n  }\n\n\n//# sourceURL=webpack://restaurant-page-/./src/homePage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addButtons)\n/* harmony export */ });\n/* harmony import */ var _homePage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage.js */ \"./src/homePage.js\");\n/* harmony import */ var _menuPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuPage.js */ \"./src/menuPage.js\");\n/* harmony import */ var _contactPage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactPage.js */ \"./src/contactPage.js\");\n\n\n\n\nfunction addButtons(element, navbar) {\n    \n    const homeBtn = document.createElement(\"button\");\n    homeBtn.innerText = \"Home\";\n    homeBtn.setAttribute(\"id\", \"homeBtn\");\n    homeBtn.addEventListener(\"click\", function() {\n        (0,_homePage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element);\n    })\n\n    const menuBtn = document.createElement(\"button\");\n    menuBtn.innerText = \"Menu\";\n    menuBtn.setAttribute(\"id\", \"menuBtn\");\n    menuBtn.addEventListener(\"click\", function() {\n        (0,_menuPage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(element);\n    })\n\n    const contactBtn = document.createElement(\"button\");\n    contactBtn.innerText = \"Contact\";\n    contactBtn.setAttribute(\"id\", \"contactBtn\");\n    contactBtn.addEventListener(\"click\", function() {\n        (0,_contactPage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(element);\n    })\n\n    navbar.appendChild(homeBtn);\n    navbar.appendChild(menuBtn);\n    navbar.appendChild(contactBtn);\n}\n\nfunction component() {\n\n    const element = document.querySelector(\"#content\"); \n\n    (0,_homePage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element);\n    //menuPageDisplay(element);\n    //contactPageDisplay(element);\n}\n\ncomponent();\n\n//# sourceURL=webpack://restaurant-page-/./src/index.js?");

/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menuPageDisplay)\n/* harmony export */ });\n/* harmony import */ var _homePage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage.js */ \"./src/homePage.js\");\n/* harmony import */ var _contactPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactPage.js */ \"./src/contactPage.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\n\n\nfunction menuPageDisplay(element) {\n\n    element.innerHTML = \"\";\n\n    // Create elements for webpage\n    const navbar = document.createElement(\"div\");\n    navbar.setAttribute(\"id\", \"navbar\");\n    (0,_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(element, navbar);\n\n    const header = document.createElement(\"header\");\n    header.textContent = \"Pizza Palace Menu\";\n\n    // Add content to element (content div on webpage)\n    element.appendChild(navbar);\n    element.appendChild(header);\n  }\n\n//# sourceURL=webpack://restaurant-page-/./src/menuPage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;