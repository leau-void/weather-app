/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/search-icon.png */ "./src/assets/icons/search-icon.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/location-icon.png */ "./src/assets/icons/location-icon.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/loading-gif/weather-loading.gif */ "./src/assets/loading-gif/weather-loading.gif"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch__checkbox {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.switch__slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #f37e21;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.switch__slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.switch__checkbox:checked + .switch__slider {\n  background-color: #2196f3;\n}\n\n.switch__checkbox:focus + .switch__slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n\n.switch__checkbox:checked + .switch__slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n.switch__label-div {\n  position: absolute;\n  z-index: 99;\n  display: flex;\n  font-size: 18px;\n  color: black;\n  width: 80%;\n  justify-content: space-between;\n  top: 7px;\n  left: 5px;\n}\n\n.nav {\n  display: flex;\n  justify-content: space-evenly;\n  gap: 20px;\n}\n\n.nav__tab {\n  flex-grow: 1;\n  text-align: center;\n  height: fit-content;\n  padding: 10px 0;\n  border: 1px solid transparent;\n  position: relative;\n  z-index: 99;\n}\n\n.nav__tab_active {\n  border: 1px solid black;\n}\n\n.form {\n  display: flex;\n}\n\n.form__input {\n  outline: none;\n}\n\n.form__button {\n  width: 40px;\n  height: 40px;\n  background: center/contain no-repeat;\n}\n\n.form__button_type_submit {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n.form__button_type_location {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n.header {\n  height: calc(30vh - 40px);\n  max-height: calc(30vh - 40px);\n  width: calc(100% - 20px);\n  padding: 20px 10px;\n}\n\n.header__switch {\n  transform: scale(1.3);\n}\n\n.header__nav {\n  width: 100%;\n}\n\n.content {\n  width: 100%;\n  padding-bottom: 20px;\n  height: fit-content;\n}\n\n.content__part {\n  width: 100%;\n  display: none;\n  flex-direction: column;\n}\n\n.content__hourly {\n  display: flex;\n  flex-direction: row;\n  overflow-x: scroll;\n  gap: 10px;\n}\n\n.content__daily-temps {\n  display: flex;\n  flex-direction: row;\n  overflow-x: scroll;\n  gap: 10px;\n}\n\n.content__current_active {\n  display: flex;\n}\n\n.content__daily_active {\n  display: flex;\n}\n\n.panel {\n  display: flex;\n  flex-direction: column;\n  height: fit-content;\n  box-shadow: 0 0 2px black;\n}\n\n.panel__main {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  background: var(--panel-color);\n  box-shadow: 0 0 4px black;\n}\n\n.panel_type_hourly {\n  min-width: 30vw;\n  width: 30vw;\n  font-size: 14px;\n}\n\n.panel_type_hourly .panel__main {\n  flex-direction: column;\n}\n\n.panel_type_daily-temps {\n  display: none;\n  font-weight: bold;\n  min-width: 30vw;\n  width: 40vw;\n  text-align: center;\n}\n\n.panel_active .panel_type_daily-temps,\n.panel_active .panel__more-info_type_daily {\n  display: flex;\n}\n\n.panel__weather-icon {\n  width: 49%;\n  height: 49%;\n  margin: 0 auto;\n}\n\n.panel__text {\n  text-align: center;\n}\n\n.panel__more-info {\n  display: flex;\n  flex-direction: column;\n  width: 85%;\n  margin: 0 auto;\n  border-radius: 10px;\n  border: 2px solid black;\n  box-shadow: 0 0 8px black;\n}\n\n.panel__more-info_half {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-evenly;\n}\n\n.panel__more-info_type_daily {\n  display: none;\n}\n\n.panel__label-icon {\n  width: 60px;\n  height: 60px;\n}\n\n.loading {\n  background: center/contain no-repeat url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + "), darkgrey;\n  height: 80vh;\n  width: 100%;\n  transition: opacity 2s ease-out;\n}\n\n.loading_transparent {\n  opacity: 0;\n}\n\n.loading_hidden {\n  display: none;\n}\n\n:root {\n  font-size: 100%;\n}\n\n.body {\n  --main-color: linear-gradient(rgb(231, 191, 0), rgb(229, 112, 0));\n  --panel-color: rgba(255, 255, 255, 0.2);\n  --text-color: black;\n  background: var(--main-color);\n  color: var(--text-color);\n  min-height: 100vh;\n  width: 100vw;\n  height: fit-content;\n  display: flex;\n  flex-direction: column;\n}\n\n.body_theme_dark {\n  --main-color: linear-gradient(rgb(92, 107, 204), rgb(74, 18, 151));\n  --panel-color: rgb(86, 81, 118);\n}", "",{"version":3,"sources":["webpack://./src/styles/switch.scss","webpack://./src/styles/main.scss","webpack://./src/styles/nav.scss","webpack://./src/styles/form.scss","webpack://./src/styles/header.scss","webpack://./src/styles/content.scss","webpack://./src/styles/panel.scss","webpack://./src/styles/loading.scss"],"names":[],"mappings":"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","sourcesContent":["/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch__checkbox {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.switch__slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #f37e21;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.switch__slider:before {\n  position: absolute;\n  content: '';\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.switch__checkbox:checked + .switch__slider {\n  background-color: #2196f3;\n}\n\n.switch__checkbox:focus + .switch__slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n\n.switch__checkbox:checked + .switch__slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n.switch__label-div {\n  position: absolute;\n  z-index: 99;\n  display: flex;\n  font-size: 18px;\n  color: black;\n  width: 80%;\n  justify-content: space-between;\n  top: 7px;\n  left: 5px;\n}\n","@use 'header';\n@use 'content';\n@use 'panel';\n@use 'loading';\n\n:root {\n  font-size: 100%;\n}\n\n.body {\n  --main-color: linear-gradient(rgb(231, 191, 0), rgb(229, 112, 0));\n  --panel-color: rgba(255, 255, 255, 0.2);\n  --text-color: black;\n  background: var(--main-color);\n  color: var(--text-color);\n  min-height: 100vh;\n  width: 100vw;\n  height: fit-content;\n  display: flex;\n  flex-direction: column;\n}\n\n.body_theme_dark {\n  --main-color: linear-gradient(rgb(92, 107, 204), rgb(74, 18, 151));\n  --panel-color: rgb(86, 81, 118);\n}\n",".nav {\n  display: flex;\n  justify-content: space-evenly;\n  gap: 20px;\n}\n\n.nav__tab {\n  flex-grow: 1;\n  text-align: center;\n  height: fit-content;\n  padding: 10px 0;\n  border: 1px solid transparent;\n  position: relative;\n  z-index: 99;\n}\n\n.nav__tab_active {\n  border: 1px solid black;\n}\n",".form {\n  display: flex;\n}\n\n.form__input {\n  outline: none;\n}\n\n.form__button {\n  width: 40px;\n  height: 40px;\n  background: center / contain no-repeat;\n}\n\n.form__button_type_submit {\n  background-image: url(../assets/icons/search-icon.png);\n}\n\n.form__button_type_location {\n  background-image: url(../assets/icons/location-icon.png);\n}\n","@use 'switch';\n@use 'nav';\n@use 'form';\n\n.header {\n  height: calc(30vh - 40px);\n  max-height: calc(30vh - 40px);\n  width: calc(100% - 20px);\n  padding: 20px 10px;\n}\n\n.header__form {\n}\n\n.header__switch {\n  transform: scale(1.3);\n}\n\n.header__city-name {\n}\n\n.header__nav {\n  width: 100%;\n}\n",".content {\n  width: 100%;\n  padding-bottom: 20px;\n  height: fit-content;\n}\n\n.content__part {\n  width: 100%;\n  display: none;\n  flex-direction: column;\n}\n\n.content__current {\n}\n\n.content__daily  {\n}\n\n.content__hourly {\n  display: flex;\n  flex-direction: row;\n  overflow-x: scroll;\n  gap: 10px;\n}\n\n.content__daily-temps {\n  display: flex;\n  flex-direction: row;\n  overflow-x: scroll;\n  gap: 10px;\n}\n\n.content__current_active {\n  display: flex;\n}\n\n.content__daily_active {\n  display: flex;\n}\n",".panel {\n  display: flex;\n  flex-direction: column;\n  height: fit-content;\n  box-shadow: 0 0 2px hsl(0deg, 0%, 0% / 0.47);\n}\n\n.panel__main {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  background: var(--panel-color);\n  box-shadow: 0 0 4px hsl(0deg, 0%, 0% / 0.44);\n}\n\n.panel_type_current {\n}\n\n.panel_type_daily {\n}\n\n.panel_type_hourly {\n  min-width: 30vw;\n  width: 30vw;\n  font-size: 14px;\n}\n\n.panel_type_hourly .panel__main {\n  flex-direction: column;\n}\n\n.panel__hourly-time {\n}\n\n.panel_type_daily-temps {\n  display: none;\n  font-weight: bold;\n  min-width: 30vw;\n  width: 40vw;\n  text-align: center;\n}\n\n.panel_active .panel_type_daily-temps,\n.panel_active .panel__more-info_type_daily {\n  display: flex;\n}\n\n.panel__weather-icon {\n  width: 49%;\n  height: 49%;\n  margin: 0 auto;\n}\n\n.panel__text {\n  text-align: center;\n}\n\n.panel__more-info {\n  display: flex;\n  flex-direction: column;\n  width: 85%;\n  margin: 0 auto;\n  border-radius: 10px;\n  border: 2px solid black;\n  box-shadow: 0 0 8px hsl(0deg, 0%, 0% / 0.38);\n}\n\n.panel__more-info_half {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-evenly;\n}\n\n.panel__label {\n}\n\n.panel__more-info_type_daily {\n  display: none;\n}\n\n.panel__label-icon {\n  width: 60px;\n  height: 60px;\n}\n",".loading {\n  background: center / contain no-repeat url(../assets/loading-gif/weather-loading.gif), darkgrey;\n  height: 80vh;\n  width: 100%;\n  transition: opacity 2s ease-out;\n}\n\n.loading_transparent {\n  opacity: 0;\n}\n\n.loading_hidden {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/normalize.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/normalize.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\n html {\n    line-height: 1.15; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n  }\n  \n  /* Sections\n     ========================================================================== */\n  \n  /**\n   * Remove the margin in all browsers.\n   */\n  \n  body {\n    margin: 0;\n  }\n  \n  /**\n   * Render the `main` element consistently in IE.\n   */\n  \n  main {\n    display: block;\n  }\n  \n  /**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n  \n  h1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n  }\n  \n  /* Grouping content\n     ========================================================================== */\n  \n  /**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n  \n  hr {\n    box-sizing: content-box; /* 1 */\n    height: 0; /* 1 */\n    overflow: visible; /* 2 */\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  \n  pre {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n  \n  /* Text-level semantics\n     ========================================================================== */\n  \n  /**\n   * Remove the gray background on active links in IE 10.\n   */\n  \n  a {\n    background-color: transparent;\n  }\n  \n  /**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n  \n  abbr[title] {\n    border-bottom: none; /* 1 */\n    text-decoration: underline; /* 2 */\n    text-decoration: underline dotted; /* 2 */\n  }\n  \n  /**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n  \n  b,\n  strong {\n    font-weight: bolder;\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  \n  code,\n  kbd,\n  samp {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n  \n  /**\n   * Add the correct font size in all browsers.\n   */\n  \n  small {\n    font-size: 80%;\n  }\n  \n  /**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n  \n  sub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n  \n  sub {\n    bottom: -0.25em;\n  }\n  \n  sup {\n    top: -0.5em;\n  }\n  \n  /* Embedded content\n     ========================================================================== */\n  \n  /**\n   * Remove the border on images inside links in IE 10.\n   */\n  \n  img {\n    border-style: none;\n  }\n  \n  /* Forms\n     ========================================================================== */\n  \n  /**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n  \n  button,\n  input,\n  optgroup,\n  select,\n  textarea {\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 1 */\n    line-height: 1.15; /* 1 */\n    margin: 0; /* 2 */\n  }\n  \n  /**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n  \n  button,\n  input { /* 1 */\n    overflow: visible;\n  }\n  \n  /**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n  \n  button,\n  select { /* 1 */\n    text-transform: none;\n  }\n  \n  /**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n  \n  button,\n  [type=\"button\"],\n  [type=\"reset\"],\n  [type=\"submit\"] {\n    -webkit-appearance: button;\n  }\n  \n  /**\n   * Remove the inner border and padding in Firefox.\n   */\n  \n  button::-moz-focus-inner,\n  [type=\"button\"]::-moz-focus-inner,\n  [type=\"reset\"]::-moz-focus-inner,\n  [type=\"submit\"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n  }\n  \n  /**\n   * Restore the focus styles unset by the previous rule.\n   */\n  \n  button:-moz-focusring,\n  [type=\"button\"]:-moz-focusring,\n  [type=\"reset\"]:-moz-focusring,\n  [type=\"submit\"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n  }\n  \n  /**\n   * Correct the padding in Firefox.\n   */\n  \n  fieldset {\n    padding: 0.35em 0.75em 0.625em;\n  }\n  \n  /**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n  \n  legend {\n    box-sizing: border-box; /* 1 */\n    color: inherit; /* 2 */\n    display: table; /* 1 */\n    max-width: 100%; /* 1 */\n    padding: 0; /* 3 */\n    white-space: normal; /* 1 */\n  }\n  \n  /**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n  \n  progress {\n    vertical-align: baseline;\n  }\n  \n  /**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n  \n  textarea {\n    overflow: auto;\n  }\n  \n  /**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n  \n  [type=\"checkbox\"],\n  [type=\"radio\"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n  }\n  \n  /**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n  \n  [type=\"number\"]::-webkit-inner-spin-button,\n  [type=\"number\"]::-webkit-outer-spin-button {\n    height: auto;\n  }\n  \n  /**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n  \n  [type=\"search\"] {\n    -webkit-appearance: textfield; /* 1 */\n    outline-offset: -2px; /* 2 */\n  }\n  \n  /**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n  \n  [type=\"search\"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n  \n  /**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n  \n  ::-webkit-file-upload-button {\n    -webkit-appearance: button; /* 1 */\n    font: inherit; /* 2 */\n  }\n  \n  /* Interactive\n     ========================================================================== */\n  \n  /*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n  \n  details {\n    display: block;\n  }\n  \n  /*\n   * Add the correct display in all browsers.\n   */\n  \n  summary {\n    display: list-item;\n  }\n  \n  /* Misc\n     ========================================================================== */\n  \n  /**\n   * Add the correct display in IE 10+.\n   */\n  \n  template {\n    display: none;\n  }\n  \n  /**\n   * Add the correct display in IE 10.\n   */\n  \n  [hidden] {\n    display: none;\n  }", "",{"version":3,"sources":["webpack://./src/styles/normalize.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;CAED;IACG,iBAAiB,EAAE,MAAM;IACzB,8BAA8B,EAAE,MAAM;EACxC;;EAEA;iFAC+E;;EAE/E;;IAEE;;EAEF;IACE,SAAS;EACX;;EAEA;;IAEE;;EAEF;IACE,cAAc;EAChB;;EAEA;;;IAGE;;EAEF;IACE,cAAc;IACd,gBAAgB;EAClB;;EAEA;iFAC+E;;EAE/E;;;IAGE;;EAEF;IACE,uBAAuB,EAAE,MAAM;IAC/B,SAAS,EAAE,MAAM;IACjB,iBAAiB,EAAE,MAAM;EAC3B;;EAEA;;;IAGE;;EAEF;IACE,iCAAiC,EAAE,MAAM;IACzC,cAAc,EAAE,MAAM;EACxB;;EAEA;iFAC+E;;EAE/E;;IAEE;;EAEF;IACE,6BAA6B;EAC/B;;EAEA;;;IAGE;;EAEF;IACE,mBAAmB,EAAE,MAAM;IAC3B,0BAA0B,EAAE,MAAM;IAClC,iCAAiC,EAAE,MAAM;EAC3C;;EAEA;;IAEE;;EAEF;;IAEE,mBAAmB;EACrB;;EAEA;;;IAGE;;EAEF;;;IAGE,iCAAiC,EAAE,MAAM;IACzC,cAAc,EAAE,MAAM;EACxB;;EAEA;;IAEE;;EAEF;IACE,cAAc;EAChB;;EAEA;;;IAGE;;EAEF;;IAEE,cAAc;IACd,cAAc;IACd,kBAAkB;IAClB,wBAAwB;EAC1B;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,WAAW;EACb;;EAEA;iFAC+E;;EAE/E;;IAEE;;EAEF;IACE,kBAAkB;EACpB;;EAEA;iFAC+E;;EAE/E;;;IAGE;;EAEF;;;;;IAKE,oBAAoB,EAAE,MAAM;IAC5B,eAAe,EAAE,MAAM;IACvB,iBAAiB,EAAE,MAAM;IACzB,SAAS,EAAE,MAAM;EACnB;;EAEA;;;IAGE;;EAEF;UACQ,MAAM;IACZ,iBAAiB;EACnB;;EAEA;;;IAGE;;EAEF;WACS,MAAM;IACb,oBAAoB;EACtB;;EAEA;;IAEE;;EAEF;;;;IAIE,0BAA0B;EAC5B;;EAEA;;IAEE;;EAEF;;;;IAIE,kBAAkB;IAClB,UAAU;EACZ;;EAEA;;IAEE;;EAEF;;;;IAIE,8BAA8B;EAChC;;EAEA;;IAEE;;EAEF;IACE,8BAA8B;EAChC;;EAEA;;;;;IAKE;;EAEF;IACE,sBAAsB,EAAE,MAAM;IAC9B,cAAc,EAAE,MAAM;IACtB,cAAc,EAAE,MAAM;IACtB,eAAe,EAAE,MAAM;IACvB,UAAU,EAAE,MAAM;IAClB,mBAAmB,EAAE,MAAM;EAC7B;;EAEA;;IAEE;;EAEF;IACE,wBAAwB;EAC1B;;EAEA;;IAEE;;EAEF;IACE,cAAc;EAChB;;EAEA;;;IAGE;;EAEF;;IAEE,sBAAsB,EAAE,MAAM;IAC9B,UAAU,EAAE,MAAM;EACpB;;EAEA;;IAEE;;EAEF;;IAEE,YAAY;EACd;;EAEA;;;IAGE;;EAEF;IACE,6BAA6B,EAAE,MAAM;IACrC,oBAAoB,EAAE,MAAM;EAC9B;;EAEA;;IAEE;;EAEF;IACE,wBAAwB;EAC1B;;EAEA;;;IAGE;;EAEF;IACE,0BAA0B,EAAE,MAAM;IAClC,aAAa,EAAE,MAAM;EACvB;;EAEA;iFAC+E;;EAE/E;;IAEE;;EAEF;IACE,cAAc;EAChB;;EAEA;;IAEE;;EAEF;IACE,kBAAkB;EACpB;;EAEA;iFAC+E;;EAE/E;;IAEE;;EAEF;IACE,aAAa;EACf;;EAEA;;IAEE;;EAEF;IACE,aAAa;EACf","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\n html {\n    line-height: 1.15; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n  }\n  \n  /* Sections\n     ========================================================================== */\n  \n  /**\n   * Remove the margin in all browsers.\n   */\n  \n  body {\n    margin: 0;\n  }\n  \n  /**\n   * Render the `main` element consistently in IE.\n   */\n  \n  main {\n    display: block;\n  }\n  \n  /**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n  \n  h1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n  }\n  \n  /* Grouping content\n     ========================================================================== */\n  \n  /**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n  \n  hr {\n    box-sizing: content-box; /* 1 */\n    height: 0; /* 1 */\n    overflow: visible; /* 2 */\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  \n  pre {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n  \n  /* Text-level semantics\n     ========================================================================== */\n  \n  /**\n   * Remove the gray background on active links in IE 10.\n   */\n  \n  a {\n    background-color: transparent;\n  }\n  \n  /**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n  \n  abbr[title] {\n    border-bottom: none; /* 1 */\n    text-decoration: underline; /* 2 */\n    text-decoration: underline dotted; /* 2 */\n  }\n  \n  /**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n  \n  b,\n  strong {\n    font-weight: bolder;\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  \n  code,\n  kbd,\n  samp {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n  \n  /**\n   * Add the correct font size in all browsers.\n   */\n  \n  small {\n    font-size: 80%;\n  }\n  \n  /**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n  \n  sub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n  \n  sub {\n    bottom: -0.25em;\n  }\n  \n  sup {\n    top: -0.5em;\n  }\n  \n  /* Embedded content\n     ========================================================================== */\n  \n  /**\n   * Remove the border on images inside links in IE 10.\n   */\n  \n  img {\n    border-style: none;\n  }\n  \n  /* Forms\n     ========================================================================== */\n  \n  /**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n  \n  button,\n  input,\n  optgroup,\n  select,\n  textarea {\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 1 */\n    line-height: 1.15; /* 1 */\n    margin: 0; /* 2 */\n  }\n  \n  /**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n  \n  button,\n  input { /* 1 */\n    overflow: visible;\n  }\n  \n  /**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n  \n  button,\n  select { /* 1 */\n    text-transform: none;\n  }\n  \n  /**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n  \n  button,\n  [type=\"button\"],\n  [type=\"reset\"],\n  [type=\"submit\"] {\n    -webkit-appearance: button;\n  }\n  \n  /**\n   * Remove the inner border and padding in Firefox.\n   */\n  \n  button::-moz-focus-inner,\n  [type=\"button\"]::-moz-focus-inner,\n  [type=\"reset\"]::-moz-focus-inner,\n  [type=\"submit\"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n  }\n  \n  /**\n   * Restore the focus styles unset by the previous rule.\n   */\n  \n  button:-moz-focusring,\n  [type=\"button\"]:-moz-focusring,\n  [type=\"reset\"]:-moz-focusring,\n  [type=\"submit\"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n  }\n  \n  /**\n   * Correct the padding in Firefox.\n   */\n  \n  fieldset {\n    padding: 0.35em 0.75em 0.625em;\n  }\n  \n  /**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n  \n  legend {\n    box-sizing: border-box; /* 1 */\n    color: inherit; /* 2 */\n    display: table; /* 1 */\n    max-width: 100%; /* 1 */\n    padding: 0; /* 3 */\n    white-space: normal; /* 1 */\n  }\n  \n  /**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n  \n  progress {\n    vertical-align: baseline;\n  }\n  \n  /**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n  \n  textarea {\n    overflow: auto;\n  }\n  \n  /**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n  \n  [type=\"checkbox\"],\n  [type=\"radio\"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n  }\n  \n  /**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n  \n  [type=\"number\"]::-webkit-inner-spin-button,\n  [type=\"number\"]::-webkit-outer-spin-button {\n    height: auto;\n  }\n  \n  /**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n  \n  [type=\"search\"] {\n    -webkit-appearance: textfield; /* 1 */\n    outline-offset: -2px; /* 2 */\n  }\n  \n  /**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n  \n  [type=\"search\"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n  \n  /**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n  \n  ::-webkit-file-upload-button {\n    -webkit-appearance: button; /* 1 */\n    font: inherit; /* 2 */\n  }\n  \n  /* Interactive\n     ========================================================================== */\n  \n  /*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n  \n  details {\n    display: block;\n  }\n  \n  /*\n   * Add the correct display in all browsers.\n   */\n  \n  summary {\n    display: list-item;\n  }\n  \n  /* Misc\n     ========================================================================== */\n  \n  /**\n   * Add the correct display in IE 10+.\n   */\n  \n  template {\n    display: none;\n  }\n  \n  /**\n   * Add the correct display in IE 10.\n   */\n  \n  [hidden] {\n    display: none;\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#content > * {\n  min-width: 100%;\n  width: 100%;\n  height: fit-content;\n  display: none;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n}\n\n.full-panel {\n  padding: 10px 0;\n  display: flex;\n  gap: 15px;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  width: 90%;\n  border-radius: 20px;\n  border: 1px solid white;\n}\n\n.panel-part {\n  border: 1px solid yellow;\n  display: flex;\n  border-radius: 20px;\n  width: 95%;\n  align-items: center;\n  justify-content: space-evenly;\n}\n\n.top-panel {\n  flex-wrap: wrap;\n}\n\n.top-panel img {\n}\n\n.temp {\n  font-size: 2.5rem;\n  width: 49%;\n  text-align: center;\n}\n\n.desc {\n  text-align: left;\n  width: fit-content;\n  font-size: 1.3rem;\n}\n\n.feels {\n  min-width: 37%;\n}\n\n.med-label,\n.lower-label > * {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 1rem;\n}\n\n.panel-icon {\n}\n\n.med-text,\n.lower-text {\n  font-size: 1.2rem;\n  padding-top: 5px;\n}\n\n.full-panel.active {\n  min-height: 90vh;\n}\n\n.med-panel,\n.lower-panel {\n  padding: 20px 0;\n  flex-grow: 0.5;\n}\n\n#content > .active {\n  display: flex;\n}\n\n.daily-panel > .med-panel,\n.daily-panel > .lower-panel {\n  display: none;\n}\n\n.full-panel.active > * {\n  display: flex;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,WAAW;EACX,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,eAAe;EACf,aAAa;EACb,SAAS;EACT,sBAAsB;EACtB,mBAAmB;EACnB,6BAA6B;EAC7B,UAAU;EACV,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,wBAAwB;EACxB,aAAa;EACb,mBAAmB;EACnB,UAAU;EACV,mBAAmB;EACnB,6BAA6B;AAC/B;;AAEA;EACE,eAAe;AACjB;;AAEA;AACA;;AAEA;EACE,iBAAiB;EACjB,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,cAAc;AAChB;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;AACA;;AAEA;;EAEE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;;EAEE,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,aAAa;AACf;;AAEA;;EAEE,aAAa;AACf;;AAEA;EACE,aAAa;AACf","sourcesContent":["#content > * {\n  min-width: 100%;\n  width: 100%;\n  height: fit-content;\n  display: none;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n}\n\n.full-panel {\n  padding: 10px 0;\n  display: flex;\n  gap: 15px;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  width: 90%;\n  border-radius: 20px;\n  border: 1px solid white;\n}\n\n.panel-part {\n  border: 1px solid yellow;\n  display: flex;\n  border-radius: 20px;\n  width: 95%;\n  align-items: center;\n  justify-content: space-evenly;\n}\n\n.top-panel {\n  flex-wrap: wrap;\n}\n\n.top-panel img {\n}\n\n.temp {\n  font-size: 2.5rem;\n  width: 49%;\n  text-align: center;\n}\n\n.desc {\n  text-align: left;\n  width: fit-content;\n  font-size: 1.3rem;\n}\n\n.feels {\n  min-width: 37%;\n}\n\n.med-label,\n.lower-label > * {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 1rem;\n}\n\n.panel-icon {\n}\n\n.med-text,\n.lower-text {\n  font-size: 1.2rem;\n  padding-top: 5px;\n}\n\n.full-panel.active {\n  min-height: 90vh;\n}\n\n.med-panel,\n.lower-panel {\n  padding: 20px 0;\n  flex-grow: 0.5;\n}\n\n#content > .active {\n  display: flex;\n}\n\n.daily-panel > .med-panel,\n.daily-panel > .lower-panel {\n  display: none;\n}\n\n.full-panel.active > * {\n  display: flex;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/date-fns-tz/esm/_lib/tzIntlTimeZoneName/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns-tz/esm/_lib/tzIntlTimeZoneName/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ tzIntlTimeZoneName)
/* harmony export */ });
/**
 * Returns the formatted time zone name of the provided `timeZone` or the current
 * system time zone if omitted, accounting for DST according to the UTC value of
 * the date.
 */
function tzIntlTimeZoneName(length, date, options) {
  var dtf = getDTF(length, options.timeZone, options.locale)
  return dtf.formatToParts ? partsTimeZone(dtf, date) : hackyTimeZone(dtf, date)
}

function partsTimeZone(dtf, date) {
  var formatted = dtf.formatToParts(date)
  return formatted[formatted.length - 1].value
}

function hackyTimeZone(dtf, date) {
  var formatted = dtf.format(date).replace(/\u200E/g, '')
  var tzNameMatch = / [\w-+ ]+$/.exec(formatted)
  return tzNameMatch ? tzNameMatch[0].substr(1) : ''
}

// If a locale has been provided `en-US` is used as a fallback in case it is an
// invalid locale, otherwise the locale is left undefined to use the system locale.
function getDTF(length, timeZone, locale) {
  if (locale && !locale.code) {
    throw new Error(
      "date-fns-tz error: Please set a language code on the locale object imported from date-fns, e.g. `locale.code = 'en-US'`"
    )
  }
  return new Intl.DateTimeFormat(locale ? [locale.code, 'en-US'] : undefined, {
    timeZone: timeZone,
    timeZoneName: length,
  })
}


/***/ }),

/***/ "./node_modules/date-fns-tz/esm/_lib/tzParseTimezone/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns-tz/esm/_lib/tzParseTimezone/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ tzParseTimezone)
/* harmony export */ });
/* harmony import */ var _tzTokenizeDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tzTokenizeDate/index.js */ "./node_modules/date-fns-tz/esm/_lib/tzTokenizeDate/index.js");


var MILLISECONDS_IN_HOUR = 3600000
var MILLISECONDS_IN_MINUTE = 60000

var patterns = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-])(\d{2})$/,
  timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/
}

// Parse various time zone offset formats to an offset in milliseconds
function tzParseTimezone(timezoneString, date, isUtcDate) {
  var token
  var absoluteOffset

  // Z
  token = patterns.timezoneZ.exec(timezoneString)
  if (token) {
    return 0
  }

  var hours

  // ±hh
  token = patterns.timezoneHH.exec(timezoneString)
  if (token) {
    hours = parseInt(token[2], 10)

    if (!validateTimezone(hours)) {
      return NaN
    }

    absoluteOffset = hours * MILLISECONDS_IN_HOUR
    return token[1] === '+' ? -absoluteOffset : absoluteOffset
  }

  // ±hh:mm or ±hhmm
  token = patterns.timezoneHHMM.exec(timezoneString)
  if (token) {
    hours = parseInt(token[2], 10)
    var minutes = parseInt(token[3], 10)

    if (!validateTimezone(hours, minutes)) {
      return NaN
    }

    absoluteOffset = hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE
    return token[1] === '+' ? -absoluteOffset : absoluteOffset
  }

  // IANA time zone
  if (isValidTimezoneIANAString(timezoneString)) {
    date = new Date(date || Date.now())
    var utcDate = isUtcDate ? date : toUtcDate(date)

    var offset = calcOffset(utcDate, timezoneString)

    var fixedOffset = isUtcDate ? offset : fixOffset(date, offset, timezoneString)

    return -fixedOffset
  }

  return 0
}

function toUtcDate(date) {
  return new Date(
    Date.UTC(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
      date.getMilliseconds()
    )
  )
}

function calcOffset(date, timezoneString) {
  var tokens = (0,_tzTokenizeDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date, timezoneString)

  var asUTC = Date.UTC(tokens[0], tokens[1] - 1, tokens[2], tokens[3] % 24, tokens[4], tokens[5])

  var asTS = date.getTime()
  var over = asTS % 1000
  asTS -= over >= 0 ? over : 1000 + over
  return asUTC - asTS
}

function fixOffset(date, offset, timezoneString) {
  var localTS = date.getTime()

  // Our UTC time is just a guess because our offset is just a guess
  var utcGuess = localTS - offset

  // Test whether the zone matches the offset for this ts
  var o2 = calcOffset(new Date(utcGuess), timezoneString)

  // If so, offset didn't change and we're done
  if (offset === o2) {
    return offset
  }

  // If not, change the ts by the difference in the offset
  utcGuess -= o2 - offset

  // If that gives us the local time we want, we're done
  var o3 = calcOffset(new Date(utcGuess), timezoneString)
  if (o2 === o3) {
    return o2
  }

  // If it's different, we're in a hole time. The offset has changed, but the we don't adjust the time
  return Math.max(o2, o3)
}

function validateTimezone(hours, minutes) {
  if (minutes != null && (minutes < 0 || minutes > 59)) {
    return false
  }

  return true
}

function isValidTimezoneIANAString(timeZoneString) {
  try {
    Intl.DateTimeFormat(undefined, {timeZone: timeZoneString});
    return true;
  } catch (error) {
    return false;
  }
}


/***/ }),

/***/ "./node_modules/date-fns-tz/esm/_lib/tzTokenizeDate/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns-tz/esm/_lib/tzTokenizeDate/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ tzTokenizeDate)
/* harmony export */ });
/**
 * Returns the [year, month, day, hour, minute, seconds] tokens of the provided
 * `date` as it will be rendered in the `timeZone`.
 */
function tzTokenizeDate(date, timeZone) {
  var dtf = getDateTimeFormat(timeZone)
  return dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date)
}

var typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5,
}

function partsOffset(dtf, date) {
  var formatted = dtf.formatToParts(date)
  var filled = []
  for (var i = 0; i < formatted.length; i++) {
    var pos = typeToPos[formatted[i].type]

    if (pos >= 0) {
      filled[pos] = parseInt(formatted[i].value, 10)
    }
  }
  return filled
}

function hackyOffset(dtf, date) {
  var formatted = dtf.format(date).replace(/\u200E/g, '')
  var parsed = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(formatted)
  // var [, fMonth, fDay, fYear, fHour, fMinute, fSecond] = parsed
  // return [fYear, fMonth, fDay, fHour, fMinute, fSecond]
  return [parsed[3], parsed[1], parsed[2], parsed[4], parsed[5], parsed[6]]
}

// Get a cached Intl.DateTimeFormat instance for the IANA `timeZone`. This can be used
// to get deterministic local date/time output according to the `en-US` locale which
// can be used to extract local time parts as necessary.
var dtfCache = {}
function getDateTimeFormat(timeZone) {
  if (!dtfCache[timeZone]) {
    // New browsers use `hourCycle`, IE and Chrome <73 does not support it and uses `hour12`
    var testDateFormatted = new Intl.DateTimeFormat('en-US', {
      hour12: false,
      timeZone: 'America/New_York',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }).format(new Date('2014-06-25T04:00:00.123Z'))
    var hourCycleSupported =
      testDateFormatted === '06/25/2014, 00:00:00' ||
      testDateFormatted === '‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00'

    dtfCache[timeZone] = hourCycleSupported
      ? new Intl.DateTimeFormat('en-US', {
          hour12: false,
          timeZone: timeZone,
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      : new Intl.DateTimeFormat('en-US', {
          hourCycle: 'h23',
          timeZone: timeZone,
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
  }
  return dtfCache[timeZone]
}


/***/ }),

/***/ "./node_modules/date-fns-tz/esm/format/formatters/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns-tz/esm/format/formatters/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_tzIntlTimeZoneName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_lib/tzIntlTimeZoneName */ "./node_modules/date-fns-tz/esm/_lib/tzIntlTimeZoneName/index.js");
/* harmony import */ var _lib_tzParseTimezone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/tzParseTimezone */ "./node_modules/date-fns-tz/esm/_lib/tzParseTimezone/index.js");



var MILLISECONDS_IN_MINUTE = 60 * 1000

var formatters = {
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, localize, options) {
    var originalDate = options._originalDate || date
    var timezoneOffset = options.timeZone
      ? (0,_lib_tzParseTimezone__WEBPACK_IMPORTED_MODULE_0__["default"])(options.timeZone, originalDate) / MILLISECONDS_IN_MINUTE
      : originalDate.getTimezoneOffset()

    if (timezoneOffset === 0) {
      return 'Z'
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset)

      // Hours, minutes and optional seconds without `:` delimeter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case 'XXXX':
      case 'XX': // Hours and minutes without `:` delimeter
        return formatTimezone(timezoneOffset)

      // Hours, minutes and optional seconds with `:` delimeter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimeter
      default:
        return formatTimezone(timezoneOffset, ':')
    }
  },

  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, localize, options) {
    var originalDate = options._originalDate || date
    var timezoneOffset = options.timeZone
      ? (0,_lib_tzParseTimezone__WEBPACK_IMPORTED_MODULE_0__["default"])(options.timeZone, originalDate) / MILLISECONDS_IN_MINUTE
      : originalDate.getTimezoneOffset()

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset)

      // Hours, minutes and optional seconds without `:` delimeter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case 'xxxx':
      case 'xx': // Hours and minutes without `:` delimeter
        return formatTimezone(timezoneOffset)

      // Hours, minutes and optional seconds with `:` delimeter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimeter
      default:
        return formatTimezone(timezoneOffset, ':')
    }
  },

  // Timezone (GMT)
  O: function (date, token, localize, options) {
    var originalDate = options._originalDate || date
    var timezoneOffset = options.timeZone
      ? (0,_lib_tzParseTimezone__WEBPACK_IMPORTED_MODULE_0__["default"])(options.timeZone, originalDate) / MILLISECONDS_IN_MINUTE
      : originalDate.getTimezoneOffset()

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':')
      // Long
      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':')
    }
  },

  // Timezone (specific non-location)
  z: function (date, token, localize, options) {
    var originalDate = options._originalDate || date

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return (0,_lib_tzIntlTimeZoneName__WEBPACK_IMPORTED_MODULE_1__["default"])('short', originalDate, options)
      // Long
      case 'zzzz':
      default:
        return (0,_lib_tzIntlTimeZoneName__WEBPACK_IMPORTED_MODULE_1__["default"])('long', originalDate, options)
    }
  },
}

function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : ''
  var output = Math.abs(number).toString()
  while (output.length < targetLength) {
    output = '0' + output
  }
  return sign + output
}

function formatTimezone(offset, dirtyDelimeter) {
  var delimeter = dirtyDelimeter || ''
  var sign = offset > 0 ? '-' : '+'
  var absOffset = Math.abs(offset)
  var hours = addLeadingZeros(Math.floor(absOffset / 60), 2)
  var minutes = addLeadingZeros(absOffset % 60, 2)
  return sign + hours + delimeter + minutes
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimeter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+'
    return sign + addLeadingZeros(Math.abs(offset) / 60, 2)
  }
  return formatTimezone(offset, dirtyDelimeter)
}

function formatTimezoneShort(offset, dirtyDelimeter) {
  var sign = offset > 0 ? '-' : '+'
  var absOffset = Math.abs(offset)
  var hours = Math.floor(absOffset / 60)
  var minutes = absOffset % 60
  if (minutes === 0) {
    return sign + String(hours)
  }
  var delimeter = dirtyDelimeter || ''
  return sign + String(hours) + delimeter + addLeadingZeros(minutes, 2)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);


/***/ }),

/***/ "./node_modules/date-fns-tz/esm/format/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns-tz/esm/format/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var date_fns_esm_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/esm/format */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var _formatters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatters */ "./node_modules/date-fns-tz/esm/format/formatters/index.js");
/* harmony import */ var _toDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate */ "./node_modules/date-fns-tz/esm/toDate/index.js");




var tzFormattingTokensRegExp = /([xXOz]+)|''|'(''|[^'])+('|$)/g

/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 8     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 8     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Su            |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Su            | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Su, Sa        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Su            |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Su            |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | AM, PM                          | a..aaa  | AM, PM                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bbb  | AM, PM, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 1, 2, ..., 11, 0                  |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 0001, ..., 999               |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | PDT, EST, CEST                    | 6     |
 * |                                 | zzzz    | Pacific Daylight Time             | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 05/29/1453                        | 7     |
 * |                                 | PP      | May 29, 1453                      | 7     |
 * |                                 | PPP     | May 29th, 1453                    | 7     |
 * |                                 | PPPP    | Sunday, May 29th, 1453            | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 05/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | May 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | May 29th, 1453 at ...             | 7     |
 * |                                 | PPPPpppp| Sunday, May 29th, 1453 at ...     | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are created using the Intl browser API. The output is determined by the
 *    preferred standard of the current locale (en-US by default) which may not always give the expected result.
 *    For this reason it is recommended to supply a `locale` in the format options when formatting a time zone name.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. These tokens are often confused with others. See: https://git.io/fxCyr
 *
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole
 *   library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The second argument is now required for the sake of explicitness.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   format(new Date(2016, 0, 1))
 *
 *   // v2.0.0 onward
 *   format(new Date(2016, 0, 1), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
 *   ```
 *
 * - New format string API for `format` function
 *   which is based on [Unicode Technical Standard
 *   #35](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table). See [this
 *   post](https://blog.date-fns.org/post/unicode-tokens-in-date-fns-v2-sreatyki91jg) for more details.
 *
 * - Characters are now escaped using single quote symbols (`'`) instead of square brackets.
 *
 * @param {Date|String|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {OptionsWithTZ} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link
 *   https://date-fns.org/docs/toDate}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See
 *   [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {Boolean} [options.awareOfUnicodeTokens=false] - if true, allows usage of Unicode tokens causes confusion:
 *   - Some of the day of year tokens (`D`, `DD`) that are confused with the day of month tokens (`d`, `dd`).
 *   - Some of the local week-numbering year tokens (`YY`, `YYYY`) that are confused with the calendar year tokens
 *   (`yy`, `yyyy`). See: https://git.io/fxCyr
 * @param {String} [options.timeZone=''] - used to specify the IANA time zone offset of a date String.
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} `options.awareOfUnicodeTokens` must be set to `true` to use `XX` token; see:
 *   https://git.io/fxCyr
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/esm/locale/eo'
 * var result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * var result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */
function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
  var formatStr = String(dirtyFormatStr)
  var options = dirtyOptions || {}

  var matches = formatStr.match(tzFormattingTokensRegExp)
  if (matches) {
    var date = (0,_toDate__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate, options)
    formatStr = matches.reduce(function (result, token) {
      return token[0] === "'"
        ? result
        : result.replace(token, "'" + _formatters__WEBPACK_IMPORTED_MODULE_1__["default"][token[0]](date, token, null, options) + "'")
    }, formatStr)
  }

  return (0,date_fns_esm_format__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, formatStr, options)
}


/***/ }),

/***/ "./node_modules/date-fns-tz/esm/toDate/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns-tz/esm/toDate/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var date_fns_esm_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns/esm/_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var date_fns_esm_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_tzParseTimezone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/tzParseTimezone */ "./node_modules/date-fns-tz/esm/_lib/tzParseTimezone/index.js");




var MILLISECONDS_IN_HOUR = 3600000
var MILLISECONDS_IN_MINUTE = 60000
var DEFAULT_ADDITIONAL_DIGITS = 2

var patterns = {
  dateTimeDelimeter: /[T ]/,
  plainTime: /:/,
  timeZoneDelimeter: /[Z ]/i,

  // year tokens
  YY: /^(\d{2})$/,
  YYY: [
    /^([+-]\d{2})$/, // 0 additional digits
    /^([+-]\d{3})$/, // 1 additional digit
    /^([+-]\d{4})$/, // 2 additional digits
  ],
  YYYY: /^(\d{4})/,
  YYYYY: [
    /^([+-]\d{4})/, // 0 additional digits
    /^([+-]\d{5})/, // 1 additional digit
    /^([+-]\d{6})/, // 2 additional digits
  ],

  // date tokens
  MM: /^-(\d{2})$/,
  DDD: /^-?(\d{3})$/,
  MMDD: /^-?(\d{2})-?(\d{2})$/,
  Www: /^-?W(\d{2})$/,
  WwwD: /^-?W(\d{2})-?(\d{1})$/,

  HH: /^(\d{2}([.,]\d*)?)$/,
  HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,

  // timezone tokens (to identify the presence of a tz)
  timezone: /([Z+-].*| UTC|(?:[a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?))$/,
}

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If an argument is a string, the function tries to parse it.
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 * If the function cannot parse the string or the values are invalid, it returns Invalid Date.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 * All *date-fns* functions will throw `RangeError` if `options.additionalDigits` is not 0, 1, 2 or undefined.
 *
 * @param {Date|String|Number} argument - the value to convert
 * @param {OptionsWithTZ} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @param {String} [options.timeZone=''] - used to specify the IANA time zone offset of a date String.
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * var result = toDate('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * var result = toDate('+02014101', {additionalDigits: 1})
 * //=> Fri Apr 11 2014 00:00:00
 */
function toDate(argument, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  if (argument === null) {
    return new Date(NaN)
  }

  var options = dirtyOptions || {}

  var additionalDigits =
    options.additionalDigits == null
      ? DEFAULT_ADDITIONAL_DIGITS
      : (0,date_fns_esm_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(options.additionalDigits)
  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2')
  }

  // Clone the date
  if (
    argument instanceof Date ||
    (typeof argument === 'object' && Object.prototype.toString.call(argument) === '[object Date]')
  ) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime())
  } else if (
    typeof argument === 'number' ||
    Object.prototype.toString.call(argument) === '[object Number]'
  ) {
    return new Date(argument)
  } else if (
    !(
      typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]'
    )
  ) {
    return new Date(NaN)
  }

  var dateStrings = splitDateString(argument)

  var parseYearResult = parseYear(dateStrings.date, additionalDigits)
  var year = parseYearResult.year
  var restDateString = parseYearResult.restDateString

  var date = parseDate(restDateString, year)

  if (isNaN(date)) {
    return new Date(NaN)
  }

  if (date) {
    var timestamp = date.getTime()
    var time = 0
    var offset

    if (dateStrings.time) {
      time = parseTime(dateStrings.time)

      if (isNaN(time)) {
        return new Date(NaN)
      }
    }

    if (dateStrings.timezone || options.timeZone) {
      offset = (0,_lib_tzParseTimezone__WEBPACK_IMPORTED_MODULE_1__["default"])(dateStrings.timezone || options.timeZone, new Date(timestamp + time))
      if (isNaN(offset)) {
        return new Date(NaN)
      }
    } else {
      // get offset accurate to hour in timezones that change offset
      offset = (0,date_fns_esm_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(timestamp + time))
      offset = (0,date_fns_esm_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(timestamp + time + offset))
    }

    return new Date(timestamp + time + offset)
  } else {
    return new Date(NaN)
  }
}

function splitDateString(dateString) {
  var dateStrings = {}
  var array = dateString.split(patterns.dateTimeDelimeter)
  var timeString

  if (patterns.plainTime.test(array[0])) {
    dateStrings.date = null
    timeString = array[0]
  } else {
    dateStrings.date = array[0]
    timeString = array[1]
    dateStrings.timezone = array[2]
    if (patterns.timeZoneDelimeter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimeter)[0]
      timeString = dateString.substr(dateStrings.date.length, dateString.length)
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString)
    if (token) {
      dateStrings.time = timeString.replace(token[1], '')
      dateStrings.timezone = token[1]
    } else {
      dateStrings.time = timeString
    }
  }

  return dateStrings
}

function parseYear(dateString, additionalDigits) {
  var patternYYY = patterns.YYY[additionalDigits]
  var patternYYYYY = patterns.YYYYY[additionalDigits]

  var token

  // YYYY or ±YYYYY
  token = patterns.YYYY.exec(dateString) || patternYYYYY.exec(dateString)
  if (token) {
    var yearString = token[1]
    return {
      year: parseInt(yearString, 10),
      restDateString: dateString.slice(yearString.length),
    }
  }

  // YY or ±YYY
  token = patterns.YY.exec(dateString) || patternYYY.exec(dateString)
  if (token) {
    var centuryString = token[1]
    return {
      year: parseInt(centuryString, 10) * 100,
      restDateString: dateString.slice(centuryString.length),
    }
  }

  // Invalid ISO-formatted year
  return {
    year: null,
  }
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) {
    return null
  }

  var token
  var date
  var month
  var week

  // YYYY
  if (dateString.length === 0) {
    date = new Date(0)
    date.setUTCFullYear(year)
    return date
  }

  // YYYY-MM
  token = patterns.MM.exec(dateString)
  if (token) {
    date = new Date(0)
    month = parseInt(token[1], 10) - 1

    if (!validateDate(year, month)) {
      return new Date(NaN)
    }

    date.setUTCFullYear(year, month)
    return date
  }

  // YYYY-DDD or YYYYDDD
  token = patterns.DDD.exec(dateString)
  if (token) {
    date = new Date(0)
    var dayOfYear = parseInt(token[1], 10)

    if (!validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN)
    }

    date.setUTCFullYear(year, 0, dayOfYear)
    return date
  }

  // yyyy-MM-dd or YYYYMMDD
  token = patterns.MMDD.exec(dateString)
  if (token) {
    date = new Date(0)
    month = parseInt(token[1], 10) - 1
    var day = parseInt(token[2], 10)

    if (!validateDate(year, month, day)) {
      return new Date(NaN)
    }

    date.setUTCFullYear(year, month, day)
    return date
  }

  // YYYY-Www or YYYYWww
  token = patterns.Www.exec(dateString)
  if (token) {
    week = parseInt(token[1], 10) - 1

    if (!validateWeekDate(year, week)) {
      return new Date(NaN)
    }

    return dayOfISOWeekYear(year, week)
  }

  // YYYY-Www-D or YYYYWwwD
  token = patterns.WwwD.exec(dateString)
  if (token) {
    week = parseInt(token[1], 10) - 1
    var dayOfWeek = parseInt(token[2], 10) - 1

    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN)
    }

    return dayOfISOWeekYear(year, week, dayOfWeek)
  }

  // Invalid ISO-formatted date
  return null
}

function parseTime(timeString) {
  var token
  var hours
  var minutes

  // hh
  token = patterns.HH.exec(timeString)
  if (token) {
    hours = parseFloat(token[1].replace(',', '.'))

    if (!validateTime(hours)) {
      return NaN
    }

    return (hours % 24) * MILLISECONDS_IN_HOUR
  }

  // hh:mm or hhmm
  token = patterns.HHMM.exec(timeString)
  if (token) {
    hours = parseInt(token[1], 10)
    minutes = parseFloat(token[2].replace(',', '.'))

    if (!validateTime(hours, minutes)) {
      return NaN
    }

    return (hours % 24) * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE
  }

  // hh:mm:ss or hhmmss
  token = patterns.HHMMSS.exec(timeString)
  if (token) {
    hours = parseInt(token[1], 10)
    minutes = parseInt(token[2], 10)
    var seconds = parseFloat(token[3].replace(',', '.'))

    if (!validateTime(hours, minutes, seconds)) {
      return NaN
    }

    return (hours % 24) * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE + seconds * 1000
  }

  // Invalid ISO-formatted time
  return null
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  week = week || 0
  day = day || 0
  var date = new Date(0)
  date.setUTCFullYear(isoWeekYear, 0, 4)
  var fourthOfJanuaryDay = date.getUTCDay() || 7
  var diff = week * 7 + day + 1 - fourthOfJanuaryDay
  date.setUTCDate(date.getUTCDate() + diff)
  return date
}

// Validation functions

var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
var DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

function isLeapYearIndex(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
}

function validateDate(year, month, date) {
  if (month < 0 || month > 11) {
    return false
  }

  if (date != null) {
    if (date < 1) {
      return false
    }

    var isLeapYear = isLeapYearIndex(year)
    if (isLeapYear && date > DAYS_IN_MONTH_LEAP_YEAR[month]) {
      return false
    }
    if (!isLeapYear && date > DAYS_IN_MONTH[month]) {
      return false
    }
  }

  return true
}

function validateDayOfYearDate(year, dayOfYear) {
  if (dayOfYear < 1) {
    return false
  }

  var isLeapYear = isLeapYearIndex(year)
  if (isLeapYear && dayOfYear > 366) {
    return false
  }
  if (!isLeapYear && dayOfYear > 365) {
    return false
  }

  return true
}

function validateWeekDate(year, week, day) {
  if (week < 0 || week > 52) {
    return false
  }

  if (day != null && (day < 0 || day > 6)) {
    return false
  }

  return true
}

function validateTime(hours, minutes, seconds) {
  if (hours != null && (hours < 0 || hours >= 25)) {
    return false
  }

  if (minutes != null && (minutes < 0 || minutes >= 60)) {
    return false
  }

  if (seconds != null && (seconds < 0 || seconds >= 60)) {
    return false
  }

  return true
}


/***/ }),

/***/ "./node_modules/date-fns-tz/esm/utcToZonedTime/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns-tz/esm/utcToZonedTime/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ utcToZonedTime)
/* harmony export */ });
/* harmony import */ var _lib_tzParseTimezone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/tzParseTimezone */ "./node_modules/date-fns-tz/esm/_lib/tzParseTimezone/index.js");
/* harmony import */ var _toDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate */ "./node_modules/date-fns-tz/esm/toDate/index.js");



/**
 * @name utcToZonedTime
 * @category Time Zone Helpers
 * @summary Get a date/time representing local time in a given time zone from the UTC date
 *
 * @description
 * Returns a date instance with values representing the local time in the time zone
 * specified of the UTC time from the date provided. In other words, when the new date
 * is formatted it will show the equivalent hours in the target time zone regardless
 * of the current system time zone.
 *
 * @param {Date|String|Number} date - the date with the relevant UTC time
 * @param {String} timeZone - the time zone to get local time for, can be an offset or IANA time zone
 * @param {OptionsWithTZ} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the equivalent time in the time zone
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // In June 10am UTC is 6am in New York (-04:00)
 * const result = utcToZonedTime('2014-06-25T10:00:00.000Z', 'America/New_York')
 * //=> Jun 25 2014 06:00:00
 */
function utcToZonedTime(dirtyDate, timeZone, options) {
  var date = (0,_toDate__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate, options)

  var offsetMilliseconds = (0,_lib_tzParseTimezone__WEBPACK_IMPORTED_MODULE_1__["default"])(timeZone, date, true) || 0

  var d = new Date(date.getTime() - offsetMilliseconds)

  var zonedTime = new Date(
    d.getUTCFullYear(),
    d.getUTCMonth(),
    d.getUTCDate(),
    d.getUTCHours(),
    d.getUTCMinutes(),
    d.getUTCSeconds(),
    d.getUTCMilliseconds()
  )

  return zonedTime
}


/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js");
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

var formatters = {
  // Era
  G: function (date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].y(date, token);
  },
  // Local week-numbering year
  Y: function (date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function (date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date); // Padding

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(year, token.length);
  },
  // Quarter
  Q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function (date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(week, token.length);
  },
  // ISO week of year
  I: function (date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeek, token.length);
  },
  // Day of the month
  d: function (date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].d(date, token);
  },
  // Day of year
  D: function (date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dayOfYear, token.length);
  },
  // Day of week
  E: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].h(date, token);
  },
  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].H(date, token);
  },
  // Hour [0-11]
  K: function (date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Hour [1-24]
  k: function (date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Minute
  m: function (date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].m(date, token);
  },
  // Second
  s: function (date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].s(date, token);
  },
  // Fraction of second
  S: function (date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function (date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function (date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(month + 1, 2);
  },
  // Day of the month
  d: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function (date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaa':
        return dayPeriodEnumValue;

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours(), token.length);
  },
  // Minute
  m: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function (date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
}

function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
}

function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/);
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
}

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_DAY = 86400000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeekYear(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, dirtyOptions);
  var year = date.getUTCFullYear();
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(firstWeekOfNextYear, dirtyOptions);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(firstWeekOfThisYear, dirtyOptions);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isProtectedDayOfYearToken": () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   "isProtectedWeekYearToken": () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   "throwProtectedError": () => (/* binding */ throwProtectedError)
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)
/* harmony export */ });
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeek(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.firstWeekContainsDate);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(firstWeek, dirtyOptions);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/format/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ "./node_modules/date-fns/esm/_lib/format/formatters/index.js");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");









 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Su, Sa        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 9. `D` and `DD` tokens represent days of the year but they are ofthen confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The second argument is now required for the sake of explicitness.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   format(new Date(2016, 0, 1))
 *
 *   // v2.0.0 onward
 *   format(new Date(2016, 0, 1), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
 *   ```
 *
 * - New format string API for `format` function
 *   which is based on [Unicode Technical Standard #35](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).
 *   See [this post](https://blog.date-fns.org/post/unicode-tokens-in-date-fns-v2-sreatyki91jg) for more details.
 *
 * - Characters are now escaped using single quote symbols (`'`) instead of square brackets.
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * var result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var options = dirtyOptions || {};
  var locale = options.locale || _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__["default"];
  var localeFirstWeekContainsDate = locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var localeWeekStartsOn = locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);

  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_7__["default"][firstCharacter];
      return longFormatter(substring, locale.formatLong, formatterOptions);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_8__["default"][firstCharacter];

    if (formatter) {
      if (!options.useAdditionalWeekYearTokens && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.throwProtectedError)(substring, dirtyFormatStr, dirtyDate);
      }

      if (!options.useAdditionalDayOfYearTokens && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.throwProtectedError)(substring, dirtyFormatStr, dirtyDate);
      }

      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Now `isValid` doesn't throw an exception
 *   if the first argument is not an instance of Date.
 *   Instead, argument is converted beforehand using `toDate`.
 *
 *   Examples:
 *
 *   | `isValid` argument        | Before v2.0.0 | v2.0.0 onward |
 *   |---------------------------|---------------|---------------|
 *   | `new Date()`              | `true`        | `true`        |
 *   | `new Date('2016-01-01')`  | `true`        | `true`        |
 *   | `new Date('')`            | `false`       | `false`       |
 *   | `new Date(1488370835081)` | `true`        | `true`        |
 *   | `new Date(NaN)`           | `false`       | `false`       |
 *   | `'2016-01-01'`            | `TypeError`   | `false`       |
 *   | `''`                      | `TypeError`   | `false`       |
 *   | `1488370835081`           | `TypeError`   | `true`        |
 *   | `NaN`                     | `TypeError`   | `false`       |
 *
 *   We introduce this change to make *date-fns* consistent with ECMAScript behavior
 *   that try to coerce arguments to the expected type
 *   (which is also the case with other *date-fns* functions).
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * var result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * var result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * var result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  return !isNaN(date);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var context = options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challange you to try to remove it!

    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatDistance)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};
function formatDistance(token, count, options) {
  options = options || {};
  var result;

  if (typeof formatDistanceLocale[token] === 'string') {
    result = formatDistanceLocale[token];
  } else if (count === 1) {
    result = formatDistanceLocale[token].one;
  } else {
    result = formatDistanceLocale[token].other.replace('{{count}}', count);
  }

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatRelative)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};
function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

function ordinalNumber(dirtyNumber, _dirtyOptions) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`:
  //
  //   var options = dirtyOptions || {}
  //   var unit = String(options.unit)
  //
  // where `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
}

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return Number(quarter) - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");





/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */

var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/normalize.css":
/*!**********************************!*\
  !*** ./src/styles/normalize.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./normalize.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/normalize.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/tz-lookup/tz.js":
/*!**************************************!*\
  !*** ./node_modules/tz-lookup/tz.js ***!
  \**************************************/
/***/ ((module) => {

function tzlookup(Y,W){"use strict";var U="XIXHXHXGXGXQXQXPXPXOXOXN##U6U6UW#$U%U%U%U%U%XFXEXEXRXRXVXVXWXWXXXXXYXYXZXZY#Y#Y$Y$Y%Y%XSXSXTXTXUXIXHXHXGXGXQXQVAVA#%#&V'#'U6#(#)U%U%U%U%U%#*U%XEXEVLVLVLVLYGYGYGYG#+W=W=W=W=W=W=Y$X+X+X+X+X+XTXUVPUQ#,T*T*#-VAVA#.#/#0#1#2U6U6UWU%U%U%U%U%#3VLVLXEYH#4#5#6YGYGYG#7X.#8W=W=W=#9X,X,#:#;#<#=#>VPVP#?#@#AT*T*#B#C#D#E#F#GV'#H#I#JUWU%U%U%U%X6X6#K#LYH#M#N#O#PYG#Q#R#SX.#T#UW=W=#V#WX,#X#Y#Z$#$$$%$&T)$'$(T*T*$)$*$+TW$,$-$.$/$0$1$2$3U%U%XJXJXF$4$5$6$7$8$9$:YG$;$<$=$>$?$@$A$BW3$C$D$E$F$G$HW8$IT)T)T)XHXGXGXQV=$J$K$L$M$N$O$P$Q$R$SV2XKXJXJXFY4$T$U$V$W$X$Y$Z%#%$%%VN%&%'%(%)%*%+%,%-%.%/%0W8XTT)XIXHXHXGXGXQXQU>%1%2%3TL%4%5%6%7U-XKXKX0X0XF%8%9%:%;%<%=%>%?%@%A%B%C%DX(%E%F%GWU%H%I%J%KXSXTXTXUXIXHXHXGXGXQXQU>%L%M%NTL%OUPXMX1XLXKXKXJX0X5%P%QS0%R%S%T%U%V%W%X%Y%Z&#WUWUWUWUWU&$&%X%XSXSXTXTXU&&ZDZDXGXGXQXQXP&'&(&)&*&+&,UOXLXLXKXKXJXJ&-&.&/S0&0T&&1&2WQ&3&4&5&6&7&8&9&:&;&<&=X%X%XSX%XTXTXUXIZDZDZDXGXQXQXPUI&>&?&@&A&B&C&DXLXKXKXJX3&E&F&G&H&I&J&K&L&M&N&OWEW<W<&P&Q&R&S&T&UY%X%ZUXSXTZYXUXIXHXHXGXGXQXQXPXPXOXO&V&W&X&Y&Z'#XKXKXJX3'$'%'&'''(')'*'+','-VMXXW<'.XZ'/'0'1'2WDZPZ9'3'4ZH'5XUXIXHZEZEXGXQXQXPXPXOXOZ@'6'7'8'9':';XKXJXJXF'<'='>'?'@'A'B'C'DXXXXZ1W'XZ'E'F'G'H'I'JW5Z9'K'L'MZWZ<Z<XHZEXGXQXQXPXPXOXOZ@'N'O'PUB'Q'R'S'TXJXFXFXESQ'U'V'W'X'YXWZ0XX'ZXYXZXZW4(#($(%W5(&ZS('ZB((()(*(+ZTZE(,(-XQXPXPXOXOXNU=U=(.(/(0(1(2(3XJXFX8XEXESN(4(5(6(7(8Z2XXZ+XYXZZ-Y#(9(:(;(<(=(>(?ZB(@(A(BZLZT(CZV(DXQXPXPXOXOXNXNU=(E(F(G(H(IXJXJXFXFX8XE(J(K(L(M(NZ*(OZ2XYXYXZXZY#Y#XCXC(P(QX;X;ZN(RZ>(SXHXHZVZVZA(TZQXPZ:XOXNXNV,(U(V(WV.V.XJXJXFXFXEXET((X(Y(ZZ*Z*XXXXXYXYXZXZY#Y#XCXC)#)$)%)&XT)'XUZ6XHXHXGXGXQXQXPXPXOXOXNXNV,)()))*V.XKXJXJXFX8XEXEXRSE)+SEXWXWXXXXXYXYXZXZY#Y#XC),)-).)/XDXAZ6Z6Z8XHXHXGXGXQXQXPXPXOXOXNXNV,)0)1T.XKXKXJXJXFX8XEXEXRXRXVXVXWXWXXXXXYZ/XZXZY#Y#Y$Y$Y%)2)3XDXTZ6Z6XIXHXHXGXGXQXQXPXPXOXOXNXN)4)5)6X9XKXKXJXJXFXFXEXEXRXRXVSESEZ/Z/XXZ/XYXZXZY#Y#Y$Y$Y%Y%XSXSXTZ6Z6XIXHXHXGXGXQXQXPXPXOXOXNXNV&)7)8X9XKX7X7X7XFXFXEXEXRXRXVXVXWXWXXXXXYXYXZXZY#Y#Y$Y$Y%Y%XSXSVEZ6XUXIXHXHXGXGXQXQXPXPXOXOXNXNVHVH)9):T9T9XJXJXFXFXEXEXRXRVIVIVIVI);VFVFVC)<VKVBVBVBVDVDVDVDVD)=VGXUXIXHXHXGXGXQXQXPXPXOXOXNXNVHVHT9T9T9T9)>VH)?Y&)@VJVJVJ)AVIVIVI)BVFVF)C)DVK)E)F)G)H)I)J)K)L)MVGVGVGVGVGVGXGXQXQXPXPXOXOXNXNVHVHT9T9T9T9)NVH)OY&)PVJVJVJ)QVIVIVI)RVFVF)S)TVKVKVK)UXCXCXCXCXC)VVGVGVGVGVGVGVGVGVGVGVGVGVGVGVG)W)X)Y)Z*#*$*%*&*'*(*)***+*,*-*.*/*0*1*2*3*4*5*6*7*8*9*:*;*<*=*>*?VGVGXNXNV'*?XLXLUWU%*>TF*?TFTFV'TFV'V'*>V'*?U6*?V8V8*?U%V8*@U%U%U%*@XYW=YGXYXHT*UQT*XQXQ*>*?VAVA*?*@*@TF*ATFTF*ATFTF*AV'TFTFV'*A*B*C*CTRV/XFVLVLYH*CYHYH*C*DXVXV*DYGYGX.YG*D*DW=X.*EW=*E*F*GX,X+X,*GX+X+X+*G*G*HWWWW*HWWWWWWXTXTWW*HVPVPVPUQ*GUQUQUQUQT*UQT**FV>*GV>*GVAV>*HVAVA*HVAVA*HVAVA*H*IVAVATFV'VAV'V'*HV'*IU6U6U6*IU6U6*IU6X6XFXFX4XEXEX4Y@YH*GYH*HYUYUYU*H*HY7Y7*I*IYGYGYGYGYG*IYGYGYG*I*J*J*KX.X.X.X.*K*L*LW=*MW=*MX,*N*OX,X,*OX,X,*OX,*P*P*QW;*R*RWW*SWB*S*TWBWB*T*UWB*VVPVPW8*VVPVP*VVPUQUQT)UQ*UT*UQT**U*VXQV0*VV=*WV=*W*XV=*Y*YV)*ZV)V)V?*ZV?V?*ZV?V?V'*ZV;+#U6+#U6V;V;+#V;V;+#U&+$U&XLXLU&V2Y@Y@XF+#Y@Y@+#Y@XEYHY@+#+#+$+%+&YU+&+'+(+(+)+*++YGYG++YG+++,+-+.+.X.+/X.X.X.+/+0X.+0+1+2+2+3+4+5+5+6+7+8W=W=W=+8+8+9W3W3W3+9+:W%X,X,+:+;X,+;X,X+X+X+X++;X+WBWRXSWB+:XSW8W8W8W8T)V=+9+:+;+;+<+=+>+>V)TTTTV)V?+>+?V?V?TL+?V;V;+?+@+@V;V;V;V;V;V;+@V;+@+A+B+BV2+CV2+C+DYIYI+D+EYI+F+F+G+H+I+I+J+K+L+L+M+N+O+O+P+Q+R+R+S+T+U+U+V+W+X+X+Y+ZVR+Z,#,$,%VN,%VNVN,%,&,'X(,',(,)W2X',),*X',*,+X'X',+,,W&,-,-,.WUWU,.,/,0,1X+,1X+,2WRXSWRX)WW,1,2WW,2,3U>,4,4TTTTTTTT,4TTTL,4,5,6,7,7,8UPUP,8UPUPUP,8U-XLXLXF,8XFY>,8,9,:YB,:,;YBYB,;,<YMYM,<,=YM,>,>,?,@,A,A,BY9Y9,B,CY9,D,D,E,F,G,G,HVS,I,I,J,K,L,L,M,N,O,O,P,QX(X(,QWUWU,Q,RWUWU,R,SWUWUWU,SWU,T,TX+,UY%X+X%X%X%,TX)XSXSU>,T,U,V,VTT,W,X,XTL,YTLTL,YTL,ZXF,ZXFS:,Z-#S:-$-$-%-&-'YMY*T&T&Y*-&-'S9-'-(S9-)-)-*-+-,-,X#--X#---.X#X#-.-/-0-1-1-2-3-4-4-5-6-7WUWTWUWT-6X%X%X%ZJZDXIZDV:-5XPUF-5-6UF-7-7-8-9-:TLTL-:UHTL-:UH-;-;UO-<UOXFX2XFSA-;-<-=SZS0S0-=->->T&-?-@-@S9-AS9S9-AS9-B-B-CWQ-DX#-D-E-F-FW9-GW9-G-H-IW<W<-IW<W<-I-JW<-K-K-L-M-N-NWU-O-PWUWU-PWUWUWU-P-QWUX%-QX%UI-QUIXO-Q-RUIUIUIUHUI-R-RU.-SV7-S-T-U-V-VV--W-XV<T+-X-YXF-YX3-Z-ZSZ.#SZ.#S2.$S2.$.%S2SY.%SYSYSYSX.%SXSX.%SH.&SH.&SHSH.'.'WQ.(.)WQWQ.)VM.)WE.*WEW<.*W<XZ.*X-X-X-.*.+.,.-.-WU..././WXWU.0.0Y$WDY$XN.0XNXN.0UAXNTNTDTDUV.0TD.0.1TITI.1TI.2T?XLU,XLXF.1XFS5.1.2.3.4.4.5.6.7.7.8.9SK.9.:SK.;.;SX.<.=SHSH.=.>SH.>.?S/.?.@S/.A.A.BSUSUW<W<W<.BW<.BW<.C.C.D.E.F.FW0W0W0W0WD.FWDZCXSZ9Z9XSXSZ9ZRZHZH.DZHTNXNZ@XN.CTD.DTDTD.DTD.ETI.E.F.G.G.H.I.J.JXKT@T@SB.JXFXFS-.JXEXE.JSKXET%.JS@.K.L.L.M.NSJ.N.O.P.QSF.Q.R.SS/.SSWSU.SSUSUXWW<.SXZW4.S.TW4.UW4W4W4.U.U.V.WWCWD.WWC.XY%ZP.X.YZ9ZRXSZRZRZFXTXTZHZHXTZWZ@U=XNU=.U.V.WU=.W.X.Y.Z.ZV+/#V+T@/#T@/$U#U#U#/$XJURU#URSL/#SL/$/$/%/&/'/'/(SO/)/)/*S>S>/*/+/,XWXYZ1Z+Z+W4/+W4/,/,WC/-WCWCW5WC/-W5/-W5/.ZSZ7ZS/.ZKZWXTXTZWZWZ?Z?Z?Z=ZZ/,/,ZT/-ZTZEXGZVZVZIZIZVZV/+/,U=/-/-/.U</////0TPTP/0/1/2/3/3/4T=/5/5XJT=XJSN/5SNSNSO/5/6/7/7S>/8/9S>Z.SR/9Z0Z0/9Z*/9W4Y#Y#/9WCY$Y$WC/9XCXC/9/:/;X>/;/<X>X;/<ZSX;XSZS/<ZSZSZBXT/<ZBXUZ?XUZ>Z>ZX/;ZXZVZV/;ZVZVZVZV/;U=/;U=/<U<U</</=/=/>/?/@/@V./AV.V./AV.V.XR/AXRT(/ASNT(/B/B/CSC/D/D/E/FSRSRZ*XWZ*XXZ2Z4Z2/DX>/EX>X>X;/EX;Z;Z;ZN/EZXZXZ6XIZAZQXQXQXMV,V,/C/C/D/ET0/E/F/G/HT(/H/I/J/J/KSE/L/LSR/MXV/MX>/NX:X>X;X:/NX;X;/N/OX;XS/OXSZNZNZMXTV,/NV,/O/O/P/Q/R/R/S/T/USE/USESEXC/UXCXC/UX:Y%X:X:/UX:/VXDXD/V/W/W/X/YT/T5/Y/ZT5Y%/ZY%Y%/Z0#X@X@XMV,XMV&/Z0#0$0%0%XLT4X9V&0%XMV&T90%XLXLV&V&T9T90$T9T9T9XXXX0$VFXZXZVCVKXTXT0#VGXJXJ0#VHXF0#VH0$0$SE0%SE0%VI0&VI0&VF0'VF0'VC0(VCVCVKVCVK0'0(VKVK0(0)VKVK0)0*0+XC0+0,XCXC0,0-XCXC0-0.XCXC0.0/XCXC0/00XCXC00VG01VG01VH02VHVH02VH0303SE04SE04VI05VI05VF06VF06VC07VCVCVKVCVK06XC07XC07VG08VG08VHVGVGVHVHVGVGT9T9VGVGT9T9VGVGT9T9VGVGT9T9VGVG03VHVGVGVHVHVGVGVH02VGVGY&Y&VGVG01SEVGVGVJVJVGVGVJVJVGVGVJVJVGVG0.VIVGVGVIVIVGVGVIVIVGVGVIVIVGVG0+VFVGVGVFVFVGVGVFVFVGVG0)VCVGVGVCVKVGVGVKVKVGVGVKVKVGVGVKVKVGVG0%XCVGVGXCXCVGVGXCXCVGVGXCXCVGVGXCXCVGVGXCXCVGVG/XVGVGVGXNXNV'U6XOXOVATFVATFVATFV'U6V'U6V'U6V'U6U6U6U6V8UWUWU%U%V8U%V8U%U%U%U%TRT*V>T*V>V>VAV>VAVAVATFTFVAVATFTFVATFVATFVATFTFTFV'V'TFTFV'V'TFTFV'U6V'U6V'V'TFV'V'U6V'U6TRTRU%TRYHYHYUYUYHYH/BY7YHYHY7YG/AYGYGYGYGX./AX.X.W=X.X.X.W=X.X.W=X,W=X,W=W=W=X,W=X,X,X,X,X+X,X+X+X+X+WWX+X+X+WWX+X+WWWWX+XSWWWWWWVPVPVPVPVPVPUQT*V>T*V>T*V>T*V>V>VAV>V>V>VAV>V>VAVAV>VATFTFVAVATFTFVAVATFTFVATFV'U6T<T<V'U6V'U6U6U6U6V;U6U6V;V;YHYH/)YUYUYU/)YUYU/)/*/+YUY7/+Y7Y7Y7/+/,YGYG/,YGYGYGYG/,YGYGYGX.YGYGX.X.YGYGX.X./)X.X.X.X.X.X./)X.X./)X.W=W=X.W=X.W=X.W=W=X,W=X,W=W3W3W3X,X,W3X,X,X,X,/$X+X+X,W;X,/#X,W;X+X+W;W;WWWWW;X)W;X)X+X+WWWWX)WWX)WBX+X+WWWWWWWBWWWWWBWBWWVPWBWBVPVPWBW8WBW8W8W8W8VPW8W8VPVPW8VPUQT*XHXHT*V@XQXQV=U8U8V0.LV=V0V=V0V0V=V=TZTZV=V=TZTZTSTSV=TSV=V=TWV)TWV)TWV)TW.GV).GV).HV'V'V?V'V'U6V'U6V;U6V;V;V;V;U6V;V;U6V;V;UWV;V;V;V;V;U&U&Y4.AY4Y4.AY@.B.CXEXEY'.CYH.C.D.E.EYU.FYU.F.GY,Y,.G.HY,.I.I.JYU.K.K.LZ&Z&.L.MZ&Z&.MYV.N.O.O.P.QYG.Q.R.S.T.T.UYEYE.UYG.V.WYGY=YG.W.W.X.Y.Z.Z/#/$/%YG/%/&/'/'X./(/)/)X./*X.X.X./*WOX.X.WOVNX.X.WIWI/(/)VNVNWIWIVNVN/(X&/)/*X&X&/*X&/*WHVN/+WHWHVY/+X&X&X&/+X&W=X&W=/*/+/,/-WG/-/.//W=//W=W=W=W=//W3W=W=W3W3W3X,W%W%W3W3W3W%W%X,W%/,X,X,/,X,X,X+X+X+X+WRX+WRWBWBW8W8V=V=/)V=V=U>XPU>/(U>U>U>V=/(/)/*TWTW/*/+U>U>U>/+TTTTU>TTTWV)TWV)TT/)TTTTTLTL/)TL/)TLTL/*/*TU/+/,V;V;/,/-V;U6V;V;V;/,/-/.V;TBV;TB/-UKUK/.U-U-U-/.TB/.V2V2V2V2U$UJ/-Y@Y@/.Y@Y@/./////0YI/1/1/2/3/4YI/4YI/5Y,Y,/5Y,Y,/5/6/7/7/8/9/:/:/;/</=/=Z&/>/?Z&Z&/?/@/@/A/B/C/C/D/E/F/F/G/HY</H/IY<Y</I/JY/Y//J/KY//L/L/MY<Y</MYG/N/OY<Y<Y</O/O/P/Q/RYGYG/R/S/S/T/UZ%/U/VYGYG/V/WYGYG/WYQZ%/X/X/YWJWJ/Y/ZYG0#VTVTVT0#0#X.WJVR0#0$VRVRVTVR0$0%X.WOVRWOWOVNWOWOVRVRWPWPVNVNWPWPVY/YVNVNVYVYVNVNVYW=VYVYVNVN/WX(W=W=W2W2W=W=W2W2W2W2X(W2W3W3X'X'W2X'X'X'W3W3/RX'/RW%W%W%W%W%W&W&W%W%/Q/RW&WUWUWU/QWUWUWUWUWUWU/QX,X,/QX,/QX+X+X+WU/QWUWU/QWU/R/SX+WRX+WRX+WRX+/RWWW8WWWWX)WWX)X)U>/PU>U>TETE/P/QU>/QU>TT/QTT/RTT/RTLTLTLTL/RTL/STUTU/S/TTL/TTL/U/UUP/VUPV;/V/W/X/X/YUPUP/YUPUPUP/YU-XLXLYBYBYB/YYBYB/YYBYB/YYB/Z/ZYB0#YBYIYI0#0$YI0$YIYI0$YM0%0&0&0'YMYM0'0(0)0*0*0+0,0-0-0.Y*Y*0.0/000101020304Y*04Y*05Y9Y905Y9XVYRY9Y9YR04Y9Y9YG04Y905YGYG0506Y906Y907YGYG0708VQVQVWVQ0708090:VWVW0:XWVQVQVSVQWSWSWS09VSVS090:WSWP0:WSWPWPWSVNVS09VS0:WS0:0;0<0<VN0=0>VNVN0>0?0?0@0A0B0B0CW,W,VNVN0C0DVNX(X(X(0CX(X(X(X(W2WUWUX'X'WUWUX'X'WUX'X'X'X'0@X'WU0@WUWUWUWU0@0@0AWM0BWU0B0C0DWMWM0DWTX%0DX%X%0D0E0F0GU>0GXPV:0GUYV:U/0GTT0H0IUY0I0J0KTTTTUU0KTT0KTTTLTT0KTLTL0KUP0LUP0LUP0MUPXFY>XFS:0L0MS:S:YB0M0N0OS:0OS0S00OT'0PT'YM0PT'YC0PT'S0T&0PT&T&T&0P0QY*XVT&T&T&S9Y9Y9XV0P0P0Q0R0S0S0T0UVO0U0VW(0W0W0XVUVUVOVUWQ0XVUVUWQVU0WX#0XX#0X0YVU0Z0ZX#X#X#X#0ZX#X#0ZVS1#1$1$1%W7W7W7W71%W7W7W7W71%1%1&W71'1'1(1)1*1*1+W9W9W91+W91,X(X(W9W<X(WUWUWU1*W<W<W<WUWUW<WUWTWT1)1*V:1*UFUFU/U/1*U/TM1*TM1+UFULUF1+1+UE1,1-1-TL1.1/ULUL1/UI1/1011UL11XNULXN11UPXNUPXNUPU.U.UPUPUP10UP1011UOX2S:1112S:S:SA12SASASASZSZS0SZS2S0S0S2S0S0T&S0T&S0T&S0S0T&T&SYT&T&1,T&S9T&S9T&S91+1,1-WQS91-S9S91-1.WQWQ1.X#1/X#1/10WQWQX#X#10X#1011W+1212X#WEWE12W9X#13X#W9WEXXW9W9W9121213W<W<W913W<W<13W:W<1414WU1516WUWU16171718W<19WUWU19W<W<WU19X-191:1;W<1;X-X-X-WUWUX-WU1:WU1;WUWUWUWU1;WUWU1;WUWUWU1;1<WU1<WU1=1=1>WXX%UF1>XOUI1>UIUIUIUI1>UIUIUI1>UIU*UH1>1?TH1?TAU*V7U.U.TKTKU.UOU.U.XMXMV7TDU71<U7XMUOU'U.UZUZ1;XMXMV-1;XMXMV%1;XLTI1;T,UN1<1<SASASZXFSZS=1<SASZSZSZSZSZS=SZSZS2SZS2SZS2SZS2S0S0S2S2S0S0S017S0SYSYSYSXT&SXSXT&SHSXSHSXSHSXSH13SHSHSHSHSHSH1313WQSHWQ13WQS1S1WQ1314VMWQWQVMVMWQWQWQWEWEWEVMWEW<11W<XZW)11XZX-X-111213X*VXX*X*12VX13VX1314VX15VX15VX1616W0X*17WUWUW0WU16WUY$Y$Y$WDWUWD15WDWDWD15U*XNXN1516TYUAUVTDUVTDXMXM1516TD16TD17XL17TIU(TI17TITIS=17S=18S=18S5S<S2S2S218S<S<18SBS<1819S<S2S2S21919T#T#T#191:S-S-T#1:1;S.1;SYT#SY1;SY1<SK1<T$1=1>SYSYSK1>SYSXSK1>SK1>1?S@SXSX1?SX1?SXSX1@SXSXS3S3SHSHS3SFSH1>SFSFSH1>SHS/SHSFSFSF1=1>S/S/1>VM1?1@S/SUS/S/VMVMVMSUVMVMSUSU1=W'1>W'W<XZW<X-XZX-W<VXX-VXX-1<1<1=1>WK1>VXVXVXWKWKVXW0WK1=WK1>WDWDW0Y$ZHZGZHZGUVUVTDXMXMTDU+U+TD1:TDTDTDTDTDUBTIU,TITCTITIUBUBTCTCUBTCU,16U,UXUXUXUXTJU,U,TCV+UXTJV+T@XKXK13XKSV13SVSV13S.14S.1415S.XESK1516S@SQS@SL16S@S@SLS7S3S3S315S3S3SJS3S@S7S714S3S314SOSFSFSO1414SOSOSOSOSOSO14S/S/SFS/13SG14SGSGSW14SWS/S/S/SUS/SUSUSUW<W4W4W4VX11W4W>11W>W>W>11W>1213W4W?13WLY$W?1314W?WD14W?W?WCWLWCWD13WCWCWCWCWCW5W5ZPW5W5ZPY%W5W5U+U+1011U+U+11U=U=11U=U=TDTDU=U=TDUBTDUBU=U=U=TXTXUBTXUBUBV+UBUBUBV+UBV+T@U#T@U#1*U#1+U#U#U#1+U#SL1+S7S71+1,1-1.S71.S7SJSJSJSJSO1-SJSNSJ1-SOSJSOSJSOSOSOSO1,SO1-SO1-SOSO1-SG1.S>1.SWS>1/SWSW1/SWSUSUSWXW1.1/S>S>1/WLWLWLW4WLW4W4WLWLWL1.WLWCW4W4WCW5WCW5W5Y%W5ZSW5ZSW5ZSZ7Z7Z7ZBZZXIZZZ5Z=XHZOXHZOXHZ5ZO1&V*U=U=V*TXV*1&U=U<U=U<UB1%U<V$V$UBV$TPV$1$U<U<UBV+TPTPV+V+TPTPT@T@TPT-T-U#T-U#TPT-TPV.T-0W0XT=U#U#T=T=0W0X0Y0ZT=0ZT=T=0Z1#U@U@SNSNSN1#SOSOSOSPSNSPSPSP0Y0ZSPSP0Z1#SPSPSP1#SP1$1$SR1%SRZ.Z.XWZ3Z3Z*Z3Z*W4W4Z,Y#W40ZY$Y$WCW*WCW*W5W5Y%X>W5Y%X>Y%Y%X>XCX>Y%W5X>Y%W5ZSY%X;ZSZSX;XSZBZBZSXSZBZBZ;Z;Z>Z>Z>ZXZTXGXGZVZVZVZVZAU=U<0NU<V,0NV,0OU<U<U<0OU<T;0OT;TPTPU<TGTPTPTGTGT;0MT;TGTGTG0MTG0MV.V.V.0MV.0NV.0NT=0OT=SNSNT(T(SNSN0NT(T(SCT(SCSPSPSC0MSP0M0NSDSDSD0N0OSDSRSDSD0NSRSRSRSD0N0OSRXCX>XCX>XCX>XCX>X>0MX>X>Z;XTZNZNV,T/0L0MT10MT50N0NT;T0T00N0O0P0QT;T;0Q0R0R0S0TV.T0T;T00T0T0U0VV.T(SCT(SCT(T(T(SET(SESESESCSCSC0S0SSESESESESE0S0TSESR0TSR0TSESESEXCX>XCX>XCX:XCX:X:X;X:XDX;X;XDXDX;X;XD0PX;X;0P0Q0QT60R0S0ST30T0UT2T0T70UT0T0T00UT70UT5T50U0V0WT.T00W0X0Y0YV.UM0Z0Z1#T.T.UMUMT.XL0ZSESESEXCXCXCX?0YX:X?Y%X:XDX:0YX:0YX:0ZXDXDXB0ZXDXD0ZXDV,V,V,0Z0ZT5T5T5V,0ZV,V,T.T.0ZT.T/0ZT/T/X:0ZY%Y%XBXBX=0ZXBXBX@X@V,0YV,T40Y0ZT4T4V&T4V&V&T4T40YT40YT/T4T4V&T9V&V&XLX9T9XLT9T9V&T9VIVFVIVFVDVGVDVGXJXJT9VHXFXFVHY&VHY&VHY&Y&SEY&SEY&SEY&SEVJVIVJVIVJVIVJVIVIVFVIVFVIVFVIVFVFVCVFVCVFVCVFVCVBVBVKVKVBVBVKVKVBVBVKVKVBVBVKVKVBVBVKXCVBVBXCXCVKXCVKXCVDVDXCXCVDVDXCXCVDVDXCXCVDVDXCXCVDVDXCXCVDVDXCXCVDVDXCXCVDVDXCXCVDVDXCXCVDVDXCXCVDVGXCVGXCVGXCVGT9VHT9VHT9VHT9VHVHY&VHY&VHY&VHY&Y&SEY&SEY&SEY&SEVJVIVJVIVJVIVJVIVIVFVIVFVIVFVIVFVFVCVFVCVFVCVFVCVKXCVKXCVKXCVKXCXCVGXCVGXCVGXCVGXMVHVGVHT9VHT9VHVHY&VHY&Y&SEY&SEVJVIVJVIVIVFVIVFVFVCVFVCVKXCVKXCXCVGXCVGYHYH/U/VYHYH/VYGYGX.YGYGYHYHYH/UYH/UYHYU/UY7Y7Y7XRY7/UYDY7Y7/UY7YU/UY7Y7Y7Y7/U/VY7/VYGYGYGYG/VYGYGYG/VY=YGX.X.X.X.X./U/VX.X.X&X&X,X,/UW3X,W;X,X,V=V=U8V=TWV)TWV)V)V?V)V?V)/QV)V)Y4Y4Y4/QY@Y@/QY@/Q/RY4Y4Y8/RY@Y@Y'Y,Y'/RYHYHYH/RYHY3Y3Y3Y3/QY3Y3/QYUYUYUYUYUY3YUY3Y3/P/QY3Y3/Q/RY3/RY3Y3YUYU/R/SY,/SY,/TYUYDYUYUYDY7YVYV/R/SYL/T/TYUY3Z&YUXRZ&Z&XRY;/SY;/SZ$Y;/TY7/TYVYVYLYLYL/TYL/TYLYL/T/UYVYG/UYGYGYG/UYGYL/VZ$Z$/VZ$Z$Z$Z$/V/V/WZ&/X/X/YYEYE/YYEYEYE/YYEYEYEYGYGYEYGYE/XYEYEYGYG/XYG/XY=/YYG/YY=Y=Y=Y=Y=Y=/YY=Y=YGY=Y=YN/XYNYGYGYG/XYGYGYG/XYG/XYGYGYXYXYX/X/X/Y/Z0#0#0$YNYNYN0$YN0%Y=X.0%X.YN0%0&0'X.X.0'X.0'0(0)0*0*X.X.X.X.0*X.WOX.X.VNVNX.WIVN0)0)0*0+X&WIX&WIWHX&X&WHWHX&X&WHX&WHWHWIWHWH0'VN0(0(WHVYVYX&X&X&0(WH0(WHWH0(WG0)WGWH0)VYVYVY0)VYVY0)0*W=W=0*WGVYWGWGW=WGW=W=0)W=W30)W3W3W3X,X,WUWUX,X,WUWUV=V=0'0(0(U>U>U>TWTWV=TWV=V=0'0(V=V=0(TOTWTW0(TWTWTWTW0(U>U>U>0(TLTL0(US0(TLTTTL0(TLTLTLTL0(TLTL0(V;TUTU0(TUTLTL0(TU0)0*TU0*TUTU0*V;TU0+V;V;UP0+V;UPV;UPUP0*UP0+V;V;UKUKUKU-UKU-U-0)U-U-U&V20)V2Y4Y4XEY@Y@Y@YIYIY@0'YI0(Y@Y@YIYIY@Y@Y@0'Y@Y'0'0(YI0(YIYIY'Y'0(0)0)0*0+Y,0+0,YIYI0,Y,0-0.YIYIYI0.0.0/YI00Y,Y,00Y,Y,000102Y,02Y,0303YK04YK04Y,0506Y,Y,06070708YM09090:YMYMY,0:0;0<0<0=Z#Z#YM0=YMYM0=0>0?0@Z&Z&0@Z&YK0@0A0B0B0C0D0EZ&Z&0E0FZ&Z&0F0GZ#0GZ#0H0HY-0I0J0J0K0L0M0MY00N0O0O0PY0Y00P0QY00R0R0S0TY+0TY/0UY/0U0VZ&0W0W0XY<Y<0X0YY<Y<0YYEY<Y<YEYEY<Y<0X0YY/Y/Y<0YY/Y/0Y0ZY/1#1#Y<Y21$1$1%1&1'1'1(1)Y<1)Y<Y<Y<YGYGY<1)Y<1)Y<Y<1)1*Y<Y<Y<1*YRYRY<1*1+1,1,Y<Z(1-1-1.YRYRZ(1.YRYG1.1/Y<Y<YGYG1/YGYG1/101111121314Z%Z%YGZ%Y<Y<131414YGYGYGYG14YG15Z%1516YG16YQ171818YQWJWJYQ18YQWJ18X.WJWJ1819YGYGWJWJY)19Y)Y)YGY)VTVTVQVQX.X.17WJX.X.X.17X.X.17X.1718VQVQ18VQVQVQVYVY18VYX(X(18X(X'18X'X'W3W318W%18W%WU1919WUWUWUW%WUWUWUWU18WUWU18X,WUWUX,X+X+X+WUX+WUWUX+X+WUWUWUWU15WU15X+16X+WRWRX%16U>TETETETETEU>U>TETETTTT13TTTTTTTETTTETETETE12TT12TLTLTLTL12TLTUTLTUTL12TUTU12TUTU121314141516U016171819U019U01:U01:1;UPV;V;V;1;1;V;1<UP1<1=UPUPV;V;1=1>V;1>UPUP1>UPUPUP1>U-XLU-YBYB1>1?YBYB1?1@YIYI1@YI1@1AYBYB1AYB1BYB1BYBYBYB1B1CYBYB1C1DYBYBYI1DYI1E1EYM1FYMYIYIYI1F1FYM1GYMYMYMYM1GZ'Z'YMZ'1F1GZ'Z'YPYP1GYPZ'Z'YMYM1F1GYMYJ1GY+YPY+Y+1GY+1H1H1I1J1KY+1K1LYSYWYWY*Y*1K1LY*Y*1LY/1M1NY/Y/1N1OYTYT1O1PYTYT1PYT1P1Q1R1SY/Y/1SXVYTYT1SY9YTXVY9Y9Y*1RY*Y*Y*Y*Y*1R1RY91SY9YRYGXVXVYGYG1RYGWZWZY9Y9WZWZWZ1QWZ1QWZWZ1QX/1R1SY91SY91T1TYG1UWZYGYG1U1V1VVW1W1XVWVWVW1X1X1YX#X#1Y1ZX#X#1ZXW2#X#2#2$VSVSVSVSX#2$VSVS2$2%WSWS2%WSWSWS2%2&VS2&VSVSWSWYWS2&2&2'VSVSWSWSVSWS2&VN2'VNVNVNVN2'VNVN2'2(2(2)2*W#2*2+W#W#WY2+2,2-2-2.2/2020W,21W,W,W,21W7212223W#W#W#W#X(22W#W#W#W#22W#W#W#W#X(X(X'X'WUWUX'WUWUWUWUWUWU2/WU2/20WM20WMWMWMWMWM2021WU21WUWUWUWU21WM2122WMWM22WT23WTX%X)X%X)U>U>U>2222TTUYUYU>22U>U>UYUY22UYU>U>2223U>U>2324TT24UYTTUY24UYUYUY24UY25UY25UYUYU/25U/U/2526U/U/26TTTMUUTTTLTLTLTLTL25TL2526TL272728TLUPTL28TL29TL29TL2:2:YBYB2;YBYB2;YBYBYBS0S02:2;S:S:2;S02<S0S0S0S:S0S0T'2;T'2;T'2<T'YMYMYCYCT'T'S0T'2:T&T&T&Y*2:Y*2;Y9Y92;2<2<2=WFWFY9Y92=Y9Y92=2>2?2?W(WFVZW(W(2?W(XV2?W62@2@W(2A2B2B2CS9W62CY9W(W(2C2DW(W(W(2DW(2E2E2F2GVU2GVUVUVUWQ2GWQWQ2GX#2H2IVU2I2JX#VU2JVUVUX#X#2JX#2JX#VU2KX#2KX#X#X#2KX#X#2K2LX#2MX#W72MW72MW7W7W7VS2MW7W7W72MW7W7X#2MX#X#W7W7W7W9W72LW7W72LW7W7W7W7W72L2MW,W,2MW9W7W9W9W92LW9W9W9W9W9W9W<W7W7W72K2KW92LW92L2MW92NW92N2O2PW<W<2PW<WT2PWTX%2PX%X%X%V:U/V:V:UFU/UFUFTMUUTMTMTMTMTM2MUFULUFUF2LTLTMUETM2L2M2NUEULULULTLTL2MTLUL2MULULTLTL2MTLULUIULUIULUL2LULUL2LULUL2LULUIUL2LXNUEXN2LUPXNXNUPUOUPUOUPUOUPUOUPU.U.U.X2SASASAS:S:SASASAS0SASZ2FS9T&S9S9VO2F2GVOWQWQWQS9WQS9S9WQWQS9WQVUVUWQWQW@2CWQ2DX#X#WQX#WQWQWQ2CWQ2CWQWQ2CWN2D2EX#X#2EX#WNX#W+W+X#2DW+2EW+2EW+WE2EX#2FXXX#2FX#2GX#W9X#W92FW<W<W<W92FW92G2GW<W<W<W9W<W9W9W<2FW<2GW<2GW<W<W:WUW:W:W:W:W<W<W:W:2EW:2EW:W:2FW<X$2F2GW<W<W<2G2G2H2IW)2IW)W<W)X$X$2IW<W<W<W<2IW<W<W)2IW<W<2IW<W)2IW)2JW<X-W<X-X-WU2IWU2IWUX-X-WUWUWU2IWUWUVXWUWUWUWU2HWUWU2HWUWUWU2HWUWUWXY$WXWUWX2GWXWXY$2GX%UFUFUF2GUFUI2GUIUI2GUIUIUHUHUIU*UHTH2FTHUH2FUHTHUH2FU*TAU7UZU7U7UZV-XMV-V-V%XMXM2CV<V5V52CV1U;2DU)U)TVUDXFSAXF2C2CS=S=S=S0SYSYSYS92BSHSHSHS1SHS1XWWQSHWQSHSHS1S1WQWQVM2?WQ2?VMVMW<W)W<W)W)X-2>X-WUWUX-X*X-X-VXVX2<X*VXVXVXVXX-VXX-2;X-VXX*2;VXVXVXX*VX2;VX2;VXVXWUWUVXVXVXVXY#WU29VXX*VX29W0X*W0WU29WUWUWXWXWXWDUI28XNXNU*V7TYTYV7V72728TI28TITITQU;28TITDTITITITITI27TIUDUDV6V4V#V#26TIS=S=262727S=S5S5S=S2S=S2S2S2S<S2XF25XFSBS<S2S<S-SBS<24SVS2T#S2T#S2S2S2T#S2S2S-S-T#T#21T#S.21S.S.S-S.S-21SYSY21SYSYSYSY2121SKSKSK21T$SMT$S.21S.SMT$SKT$SK20SKSKSKSKS@SK2020S@21SXSK21SKS@SXSX21SX21SX22SXSXSXSXS3SHSHSHSFSHS1SHS/S/2/S/S/2/S1S/S/S1VMS1S1S/2.S/S?VMVM2.XWW<W<2.W'W<W'W'W'VXVX2-Y#VXVXVXWK2,VXWKWKVX2,VXVXX-2,X-VXX*W0WKW0WKW0W0W0TITITD2*U,XLU,UXTJXKTJT@SV2(SVSV2(S.S-S.2(S.XES.2(2)2*2+2+SK2,SKSKSKS@S@SKS@2+2,SQSQSLSLS3S3S32+S7SJS7SJ2*S3SOSOSFSF2*SOSOSOSJSOSOSOSO2)SOSGSO2)2)SGSGSGSG2)2*SWVXVXW>2*VXVXVXW>W>W>2)W>W42)W4W42)W4W4W4WL2)WLWLY$W$W?2)2)W?W?W?W?W?WC2)WDWDWDWCXMU+U=U+U+U+2'U+U+U+2'U=U=U+U=U=T@U#T@2&T-U#T-U#U#U#U#2%SLS7SLS7S72$2%2&S7S7SJ2&SN2&XRSN2&SNSNSNS7SJSJSJ2%SJSJSJSJSJSJSOSO2$SO2%2%2&SO2'SOS8SO2'SGSG2'S>2'S>S8S>2'SW2(2)S>SWS>S>SWSW2(SWS>SWS>S>SWXW2'XWWLWLW4WLWLWC2&WCU=V*U=U=V*V*V*U<UBUBUB2$V$V$V$2$T-T=T-T=2#V.V.V.U#V(2#T=V(V(T=2#2#T=T=T=T=2#T=U@T=2#T=T=2#2$2%2&V(V(2&XJSNSNSN2&SO2&SP2'SPSP2'SOSOS>SPSPS>S>2&S>SPSPSP2&2&2'SR2(S6SRS6SRS6SR2'S6WCWC2'WCU=U=2'2(2(U<V,U<V,U<V,U<U<U<2'U<U<U<2'T;2'TGTGTGTGTG2'TG2'V.V.V.TGV.TG2'2'V.V.V.T=T=V.2'V.T=V.V.2&SNT(T(SPSPSC2&SPSPSPSDSPSDSDSDSC2$SCSCSDSDSC2$SRS6SR2$2$SRSDSRSDSD2$SDX>X;X>X;V,V,V,T6T2T2T6T2T1T5T1T51XT5T5T5T51XT5T5T/T/T/1XT8T01XT0T21XT2T21XT0T/T0T0T0T01X1XT;1YT;1YTGT;TGTGV.V.V.T;T;T;1XT0T0T01XT;T01X1YT0V.V.V.1XV.V.V.SC1XSE1YSC1YSCSESE1YSE1Z1ZSESSSESESESE1ZSESTSESEX;X;XDXDX;X;XDXD1W1XXDXDV,T6V,T6V,T6V,T31VT3T3T3V,T3V,T3V,T3T51UT3T31UT51UT01VT0T0T0T01VT7T0T71VT01V1WT.1WT.T.T.1WT.T.T.1W1X1YUMT01Y1Z2#2#UMUMUM2#V.UM2$2$2%UMV.T.2%T.T.2%UMT.2&SE2&SESEXCXCX?2&2&XDXDXDXB2&XBXBXBXB2&XB2&2'XBXB2'XBXBXBV,2'V,2(2(T5T5T5V,T5V,T/T.T.2'T.T5T5T/T/2&XBXBXBX=XSX@X@V,2%V,T4T/T/T42%T/T/2%2&T4T4V&T4T/T/T4T4YU2$YUYU2$Y72%Y7YHYH2%2&YHYHYHYUYUYUYH2%YUY7Y7Y7YUYDYUYDYDY7YDY7YUY7Y7Y7Y7Y7Y71YY7Y7YGYGY7Y7YGYGYGYGY7YG1VY=Y=Y=1V1WX&X&X&1WX&X&X,X,X,W3V?V?V)V?Y4Y4Y41U1UY@Y@1V1V1WY4Y4Y@Y@Y4Y4Y8Y8Y@Y@1U1V1W1XYH1XYUYUY3YUY3Y3YHYU1WYUY,1WY,Y,1WY3Y,1XY3Y31XY,Y3Y3Y31X1XYUY31YYUYUY,Y,Y3Y3Y,Y3Z&Z&1WZ&1WZ&1X1YXRYVYLYLYVYVYLYLYLYLYL1WYUYUY3YUZ&Y;Z&Z&Z$1UZ$Z$Y;Z$Y;Y;Y7Y7YVYVYLYL1SYLYL1SYLYLYVYGYVYVYGYGYV1RYGYG1RYGYVYVYLYLYLYGYLYLZ$Z$Y;Z$Z$Z$Z$YEZ&1NZ&Z&Z$Z$1NYE1NYEZ&YEZ$1NYEYE1NYEYEYEYLYLZ$YEYEYGYEYEYEYGYE1LYEYGYGYG1KY=Y=Y=Y=Y=YGYGYGYGY=1JY=Y=Y=1JY=Y=Y=1JYGYGYG1JYGYGYX1JYGYX1JYX1J1KYQYN1K1LYGYGYN1LYGYGYGYGYG1LYGYGYG1LYXYX1LYNYXYN1LYNYNYNYN1LYNX.X.X.Y=Y=1KYNYNX.YNYNYNYN1J1KYN1KYN1LX.X.1LX.1LYGYGYGYN1LYG1MYGYGYG1MX.X.1MX.X.1MX.X.X.1MX.WOVN1MVNVNX.X.X.1MX.X.X&X&X.1LX&X&WHWH1LWHVYVYVN1LVYWHVYVYX&X&X&WGX&WHWHWHWGWG1IWGWHWGWHWGWHVYVYVYVY1GVYVYWGWGWGW=W=W=1FW=WGWG1FWGW=1FW=W3W=W=1FW3V=V=V=1FV=V=1F1GV=1GU>U>V=V=U>U>V=V=U>1FV=V=1FU>TWTWTTTTTWTWTTTTU>TEU>1DTT1DTTTT1D1ETLTL1ETLTLTLTL1ETLTLV;1EV;V;1ETU1F1GTUTUUGTU1FUG1G1HTUTUTLTLTU1GTUTU1GV;TUV;V;V;TUTU1FUKUPUKUP1FUPUKUP1FUPUPU-U-U-1FTBTBTBV2Y@Y@Y61E1EY6YI1FY@Y@1FYIYI1FYI1G1G1H1IY.YI1IYIYI1I1JY.Y.1J1KY.Y.Y'Y'1K1L1L1M1NY,1N1O1P1Q1QY.YI1RY.Y.1RY.Y.Y,1R1S1S1TYIYI1TY,1U1V1V1WZ)Z)YI1W1X1Y1YZ)1ZZ)1Z2#2$2%Y,Y,2%2&Y,2&Y,2'Y,Y,Y,2'Y,2'2(2)2)2*2+YKY,YKY,Y,2*YKYKYKYKYKY,YK2)Y,2*Y,2*2+Z)Z)2+2,Z)Z)2,2-2.Z#2.Y,Z#2/Z)Z)Z)2/Z)Z)2/20YM20YMYMZ)20212222YMYMYMY,Y,Y,2222232425Z#25Z#Z#25Z#Z#Z#2526Z#Z#2627YMYM2728292:2:2;Y?Y?2;2<Z'Z'Y?Y?Z'Z'Z&Z&2;2<YKZ&YKYKYKYKYK2;YKYK2;2<2<Z&YKYKZ&Z&2<2=YKYK2=2>YK2>2?Y-2?2@Y-Y-Z&Z&Y-Y-2?2@Y-Y-2@Z&Y-Y-Z#2@Z#Z#Z#2@2A2B2BY-2C2DY02DY0Y02D2EY0Y0Y?2EY?Y?2E2FZ'Z'2F2GZ'Z'Z'Z'2G2HY0Y0Y02HZ'Z'Z'2HZ'2H2I2JY-Y-2J2KY-2K2L2M2M2NY0Y02N2OY0Y0Y0Y/2OY/Y0Y02O2PY0Y02P2Q2QY+2RY+Y02RY/2SY/Y/Y+2SZ&2SZ&Z&2SYEYEYE2SY<Z&2TYEYE2TY<YEYEY<Y<Z&Z&2SY<2SY<Y<Y<YEYEY<YEYYYY2RYYYYY<2R2SY<Y<Y<2SY<Y<Y/Y/Y<2RY2Y2Y2Y2Y/2RY<Y<2R2S2SY<Y22TY2Y2Y22TY22TY<Y<2TY<2U2VY<Y<2VY/YEYEYE2VYEYEY<Y<2U2VY<Y<YGY<Y<Y<YGYGY<Y<Y<2TY<Y<2T2UY<Y<2UY<Y<Y<Y<Y<Y<2UY<Y<2U2VY<2VY<Y<2VZ(Z(Z(Y<Y<Z(Y<Z(Y<Z(Y<Y<Y<2TY<Z(Z(Y<Z(Z(Y<XVXVYGYGY<2RYGYGY<YGY<2QY<YGYGYGYGYQYGYG2PZ%2P2QZ%Z%YQ2QYQYQ2QYQYQYQYQYQZ%2QYQYQZ%Z%Y<2PY<Y<2PYGYGYGY<2P2Q2R2RZ%Z%Z%YG2RYGYGZ%Z%Z%YG2QYGYGYG2QYQYQYQYQYQ2Q2RYQYQ2RYQZ%WJ2RWJYNYNYQYQYNYNYN2Q2Q2RYGY)Y)WJY)Y)Y)VTY)Y)WJ2PWJWJX.X.VRVR2OX.VRX.VTVTVT2OVTVT2O2PVTVT2PVQVYVYVNVNX(X(2OX(2O2PX'X'2PW%W%W%W%W%W&W%2O2PWUWUW%W%2PWUWU2PWUWU2PX,X,X,WUWUWUX+WUWUWUX+2NX+X+X+WRWRX%X%2MTT2NTTTT2NTTTTTTTTTT2NTLTUTLTU2M2NTL2O2OTUU0U0TUTU2O2PTU2PUPUP2PV;UPUPTLTLTLU0TLU0U0U0TL2NTL2OTLU0TL2OU0U0U5U0TL2NTLTL2NU22OTLU0UPU0UPU02NU02OU0UPUPUP2N2OUPUPV;V;V;2O2OV;V;V;V;UPUPUPV;V;V;UPV;2MUPUPV;V;UPUPV;V;UPUP2KUPUPUP2KUPUPUPUPUKUPUKYB2JY>Y>Y>2JY>Y>2J2KY>Y>YBYB2KYBYIYI2KYIYB2KYBYBYIYIYBYBY>2JY>2KY>2KY>YBY>2KY>YBYIYIYBYBYIYIYB2JYIYI2J2KYIYI2K2L2LYM2M2NYI2NYIYIYMYM2NYM2NYMYIXRYIYIYI2N2NYMYIYMYIYMYIXR2MYMYMYMZ'2MZ'Z'YPYP2MYPYPYPZ'2MZ'2MZ'Z'2M2N2O2P2P2Q2R2SY/Y/Y+Y+Y+2RY+Y+YJYJYJ2RYJ2RYW2SYJ2SXRYWYWYWYW2SY+Y+2SY+2S2TYSYS2T2UYWY*2UY*Y*Y*2UY/Y/Y/2U2V2WYTY/Y/YTYTY/2VYTYT2V2WYTYTYSYTYSYTYTYTYTY*YTYT2UYTY/Y/2UY/Y/Y/2UY/2UYTYTYTYT2UYTYT2U2VYTYT2VY92WY9Y*Y*Y*Y9Y*2VY*Y*Y*Y9Y9Y92UY9Y*Y*YGYGYG2UWZWZY9WZYGYGWZWZY92SY92TY92TY9Y92T2U2VX#2VX#X#X#Y9X#Y9X#YGYGWZYGWZWZ2TWZYGYG2TYGYG2TYGVWX/VWX/VWX/X/2SX/VWVWX/VWVWVW2RVW2R2SX#X#2S2TX#X#2TX#X#X#X#VWX#2TVWVW2TVWX#VWX#X#WSWSVSVSWSWS2R2SVSVSX#X#VSVS2RVSVSVS2RVS2RWS2SWSVS2SVSVSWSWSVSWSVS2RVSVSWSWYWS2R2R2SVS2TWSWS2TWSVNVN2TVNWP2TWPVNVNVNVN2TVNVN2TWYWYW#W#W#2SVNW#W#VNVNW#W#W#W#2R2SVNW#W#W#W#2RW#W#2R2S2TWYWYWY2T2U2U2V2WW,WY2W2X2Y2Y2Z3#3$3$3%W#3&3&3'W#W#W,3'WS3(WS3(WSW,W,W,3(W,3(3)3*3+3+3,3-3.3.3/W#W#3/30W#W#VNVNW#W#3/WUWMWMWUWU3/WMWU3/30WMWU30WMWMWMWMWM30303132WTWUWUWU32WUWUWU32WU32WMWM32X+WMX+WMWMWM323233WTWTU>U>U>33U>TTU>UYU>32U>3333UYUYUYU>33XPV:3334V:V:V:34V:V:V:34V:U/TTTT34TT34TTUYUYTTTTUYTTUYTTUY33UYTTUYTTUYUYU/32UYUYU/U/UYTT31U/3132UUUU32TLTLTLTL32TLTLUPUP3233TLUPTLUPTLTLTL3232UPUPUPUPUP32UP32UP33UP33UPTLUPTLUPUPUP32YBYBYBYBYBS:3232YB33S:S:33S:S:S:S0S:33S0S033S033S0S0S0S033S034S0S0S034S034T'T'T'T&34T&Y9Y93435Y*35Y*Y*35Y9Y*XV35Y9Y*Y9WFW-WFWFW-34WF35Y9Y9W-W-Y9Y93435Y935363737W(W(W(W-W-37WF3738393:VZVZ3:3;3;3<3=W/3=W(3>W(3>3?VOVOW(W(VOVOW.3>S93?3?3@W63AY9Y93A3BY9Y9Y9W(Y93AW(W(W(W(W(3AW(3AVUVU3AY9W(W(3A3BVUVU3BVUVUVU3B3CVUVUWQVUWQWQX#X#3BX#3BX#VU3CX#X#3CX#3CX#X#X#VU3C3D3E3EX#3FX#3FX#VU3GVUVUVU3G3GX#3H3IVSX#X#X#3HVSX#X#VSVSVS3HVSVS3HVS3HVSX#VSX#X#X#W7VSVSW7W73F3GW7W7W73GW7W7W7W7X#3GW,3GW7W73GW7W7W7W7W7W73GW7W73G3HW7W93HW9W7W9W9W9W73GW7W7W73G3H3I3IW9W9W9W93IW93J3JW<3KW<W93KW9W9W93K3L3MW93MW93N3NW<W<W<W<W<3NW<WTWTWT3NWTY%X%Y%TMTMULULUU3LUUUUULUEUL3LTM3LTMUL3LULULULUE3LULUEUETLUE3LTLTLUE3LULUL3LUL3L3MUEUEUIULUI3M3MTLUEUETL3MXNUPT&S9T&3MS9S9S93M3MWQWQWQW@3MW@W@W@W@WQ3MWQWQWQ3MWQ3MWQWQVVWN3MWNWNWNWQWNWNWNW+W+X#X#WEX#X#3JW+3KW+W+W+WE3J3KWEWEWEX#3KX#3KXXWEWE3KW7X#3LX#3LX#X#W9W9W9W<W9W9W93KW9W<W<W<3JW<W<W<W<W<3JW:3JW:W<W<W<W:W<W<3I3JW<W<W:3JW:W:W:W:3JW:W<W<3JW<X$X$W<W<W<W<W<3IW)W)3I3J3JW<W)W)3J3K3LW)3L3MW<W)X$X$W<W<W<W<W<X-W)3KW)W)3KW<W)W<W)W)3KW<W)W<W)W)X-WUWUWU3IWUX-X-WUWUVXVXWUWUWU3HWUWU3HWUWUWU3HWUWUWXWXWXWXY$WXX%UFUFT>3FUFUFUIUIUI3EUIUIUH3EUH3FUHUH3FTHTH3FTHTAV%3FV%V5T+T+T+3FV3T,3FT,XFSASA3FSZSZ3FS=S9S9SHSH3EWQVMVMWQWQVMVM3DX-W)X-X-3DVXVXVXVXX-VXX*X*3C3DVX3DVXVXVX3DVXVXVXVXX*VXW0W0X*W03B3CWUWUUI3CUIU*TYV7TYV7V7V7V7UAT:T:3AT:3ATQTITITDTDTD3A3AV#TITIS=S=3AS4S=3A3B3CS=S=S=3CS<S<XFSBSBSBSBSVS-T#S-S-T#3@S.S.3@S.S.S.T#SYT#T#SYSYSKSKSYSKSKSKSMT#SM3=SMT$SMT$SYSKSKSKSK3;SKS@SKS@SKS@3:S@S@S@SKS@SKS@39SXSXSXSXSX39SX39SXSXSXS1S1S/S/S1S1S/S/S1S1S?S?S?S?36SUW<W<W<W'35VXVXVXVXVXWKWKVXWKVXWKX-VXX-VXTITITD3232S-S-S-S-S-S-S.S-S-S-S.S.30S.31SMSMSM31S.31S.S.313233SMT$T$T$33T$33T$XESKSKXRSQS@S@SQS@S331S3S3S3S331S331SOSOSOSOSOSO3131SG32SGSOSO32SGSGSWSWSW3132SGSWW>VXW>W>W>W>W431W431W4W4W>31W432W?W?WLW?W?31W?W?Y$W?W$31W?W?WCWCU+U+U=U+U+U+U+U=U#U#3.U#U#U#U#3.S7S7S73.S73.XRSNSNSJ3.SJ3.SJSJSJ3.SJSNSN3.SJSNSNS7S73.SJSOSGSO3.SO3.3/SISOSOSO3/SISISI3/S8S83/S8SOS>SOS>3.S>SISISI3.3/3030SWSWSWS>30S>S>30SWS>SWSWSW30SW30S>S>S>30WCWCWCUB30V$V$V$V$V$30V.30V.V.V(V(T=30V(V(30U@T=30T=T=30U@T=U@T=U@T=T=V(U#3/V(3/U#V(V(V(V(3/V(V(V(V(U@3.V(U@U@SN3.SNSOSOSO3.SOSP3.SPSP3.SO3/30S>S>SP30SPS6S6S6SPSPSP3/S6S6S63/SR3/SR30S630SRSRW4WCW4WCU=U=U=3/U=V,V,V,V,U<V,V,U<U<3-T5U<U<T5T53,TGTGTGTGTGTG3,TPTP3,V.TGV.3,V.TG3,TGV.V.T=T=T=SNSNT(T(SD3*SCSDSCSDSCSDSDSDSE3)S6S63)SRSD3)SDSDSDSD3)SDT53)T5T5T5T;T53)T/3)T/T/T83)T8T0T/T/T2T/T/T03(3)T0T0T03)T;T;3)T;3)3*T;T;T;3*T;TGT;3*T;T0T03*3+V.3+T0T0T0T0T0V.V.T0V.3*V.SC3*3+SESCSESESESCSCSC3*SESESE3*3*SSSSSSSESESSSSSESE3)ST3)XDXDXDXD3)XDXDT3T6T3T3T53(T53)T3T33)3*3*3+T73,T7T0T7T0T0T0T03+T0T0T5T5T0T03*T.T0T.T5T.T03)T.T.T5T.T5T.T03(3)UMUM3)UMUM3)UM3*UMT03*T03+T0T03+T0T03+T0UM3+UMUMUMV.V.V.3+V.V.UMUMUMV.UMUMV.V.3)V.3)UMT.T.UMUM3)UMUMUMT.T.3(SSSESEXCX:X?X:X:3'X:XDXD3'XBXBX:XB3'XBXDXD3'XBXDXDXBXBXD3&XB3'V,T5V,T5V,T5V,T5T5T5V,T5T5T.T53$3$XBX:XBV,V,V,T/T43#T4T43#T4T4T4T43#T4T4Y7Y73#3$Y7Y73$Y73$Y7Y7Y7YHYH3$YGYHYH3$3%YHYUYUYUY7Y7YGYGYGY=Y=Y=2Z3#X.X&3#3$X&X&3$X.X&X&Y43$3%Y@Y4Y43%Y@Y@Y@3%Y@Y@Y43%Y4Y43%Y4Y4Y'3%Y'Y'3%Y,3&Y,Y'Y'Y'3&3&Y,3'Y,YH3'YUYUYHYH3'YHY3Y3Y,Y,Y3Y3Y,3&Y,3&Y,Y,3&Y,Y,Y,Y3Y3Y,Y,Y33%Y3Y33%YUYUYUY,Z&Y,Z&Y,3$3%3&3&Z&Y,Y,Z&Z&3&Z&YLYL3&3'YLZ$Z$Z$YLYL3&YLYVYV3&3'YV3'YVYG3'YGYGYGZ&Z$Z&Z&Z&YEZ&YEZ&YEZ&Z&Z$Z$YEYEYEZ$YEYEYE2ZYEYE2Z3#YGYGY=YGY=Y=Y=Y=YNYNYNYN2YYN2YYGYXYXYGYGYXYXYG2XYGYGYXYNYX2XYNYN2XYNYG2XYGYG2XYNYGYGYNYN2XYGYGYGYNYNYGYGYG2WYXYNYNYNYN2VYNYNYN2V2WX.Y=Y=YNYNYN2VYNYG2VYNYNYNYNYN2VX.2VX.YNYNX.X.2VX.YNYGYGYGYN2UX.X.2UX.X.X.YGYGYG2U2UX.2VX.2VYGX.2WX.X.2WX.WIWIVNWIX.X.2V2WX.X&X&X&WHWHWHVYVYVYVNVYWHWGWHWHWGWGVYWG2RW=W=W=WGWGVYWG2QW=W3W3W=W32QW3V=2QV=U>2Q2RU>U>2RV=U>U>U>U>2RU>2RV=U>U>V=V=U>U>2QTETETETLTLTTTTUT2PUTUTTLTLUTTLV?2OTLTLTLTUTL2OV;V;2O2PTUTUUGTUTL2OTLTLUG2OTLTL2OUGTLUGTLTLTL2OUGTU2OTLV;V;TU2OV;V;2OV;UKUK2OUKUPUK2OUKUPUKUP2O2OU$U$U$Y6YIY6YIY6Y6Y62NY:Y:YIYIY@2MY@YIY.Y.2MY.2MY.YI2NY.2NY.Y.2NY'2O2PY.Y.2P2Q2Q2RYI2SY'Y'2S2T2T2UY.Y.2U2VY.Y.Y'Y'2V2WY'2WY'2X2X2Y2ZY,2Z3#Y'3$3$Y,3%Y,3%Y,Y,Y,Y'Y'3%3&3&Y,3'Y,3'3(3)3*Y,Y,3*Y,Y.Y.3*3+Y.Y.YIYI3*Y.YI3+Y.YA3+3,Y,Y,YAY,3+3,YIYI3,3-YIYIY,Y,3-Y,3-3.YIYI3.YIYIYIYIYIYI3.YIYIZ)YIYIZ)Z)3-YI3-YI3.3.YI3/YIZ)Z)3/Z)YIZ)YI3/YI3/YI3030YM31YMYIYI3132YMYM32YM3233YIYI33Y,343535Z&36Z&36Z&37Z&Y,Y,3738Y,Y,Y,38Y,3839YK393:YKYKY,Y,Y,YKY,39YKYK39YKY,YK39YKYKYKYI39YI3:3:Y,3;Y,3;3<3=3>3>3?3@Z)3@3AZ)Z)3A3BZ)Z)3BY,3C3DY,Y,Z#Y,3CZ#Z)Z)Y,Y,Y,Z#Z#Z#Z#3B3BYM3CYMZ)Z)YM3CZ)YM3CYM3CYMYMYMZ)Z)3C3D3DYMYMYM3D3EYMYMZ)YM3EYM3E3FY,3GY,Y,Y,3GY,Y,Z#Z#Z#Z#Z#YMZ#Z#YMYMY,3DZ#Z#Y,3D3EZ#YKYKZ#Z#YKZ#Z#Z#YMZ#YMYMZ#Z#YMYMZ#Z#YMYMZ#Z#3@3AYMY?YM3AY?Y?3AY?Z#Z#3AZ#Z#Z#Z#Y?YM3@3A3B3BY?3C3DYKZ&YKYKZ&Z&3CZ&YKYKZ#YKYKYK3BYKYKYK3B3CZ&Z&YKYK3B3CYKYK3CZ&3D3EYKYK3E3FYKYK3FY-YKYKY-Y-YK3EY-Y-Z&Z&Y-Y-3DZ&Y-Y-Z&Z&Y-Y-Z&Z&Y-Y-Z&Z&Y-Y-Z#3AZ#Z#3A3BZ#Y0Z#Z#Z#3B3BY03CY03CY-Y-Y-3CY-3D3EY-Y-3EY-Y03EY0Y03E3FY0Y03F3GY0Y03GZ#Y?Y?3G3HY?3I3IY03JY0Y?Y?Y?Z'3IZ'Z'Z'Z'Z'YPZ'Z'Z'YPYPY0Y03GY0Z'Z'YPZ'Y0Z'Z'Z'Z'Z'3E3FZ'Z'Z'3FY-Y-3FY03FY0Y0Y0Y-Y-Y-3F3FY0Y0Y03FY0Y0Y0Y-Y-Y0Y0Y-Y-Y0Y0Y-Y-3D3E3E3F3G3HY03H3IY/Y0Y0Y03IY03IY03J3JY0Y+Y+Y03J3K3LZ'Y+Z'Y+Z'Y+Z'3KY0Y03KY/3KY/Y/Y/Y/Y/Y+3KZ&YEZ&3KYEYE3KYEZ&Y<Z&Y<Y<Y<Z&Y<YE3IY<Y<Z&Z&Z&3IZ&Z&Z&Y<YYYYY03HYYYYY/3HYYYY3HYYY<Y<Y/Y/Y<Y<3GY<3GY2Y/Y/3GY<Y2Y2Y<Y<Y23G3GY<3HY<Y<Y<3HY<Y23HY2Y2Y23HY23IY2Y23IY23IY<Y/Y/3I3J3KY/3KY/Y/Y/YEY<Y<Y<3JYEY<Y<YEY<Y<Y<Y<YGY<Y<YGYGY<Y<3GYG3HY<YGYGYG3HY<Y<Y<3HY<Y<Y<Z(Y<Y<Z(Z(Y<Y<3F3GY<Z(3GZ(Y<Y<YRYRYGY<Y<Y<Y<YGY<3EYG3EZ%Z%YGYG3EYGYQYQZ%YQ3D3EYQYQ3EYQYQYQ3EZ%Z%Z%Y<Y<Y<YG3D3EYGYGYGYG3EYGY<Y<Y<3E3EYGYGYGYG3EZ%Z%YGZ%YGYGZ%Z%YGYGYG3CYQYQZ%YQZ%YQYQYQYQZ%YQYQ3AYQZ%Z%WJWJ3@X.X.X.Z%Z%Y)Y)3?3@Y)Y)WJ3@WJWJX.X.3@X.VTVTVT3@VTVT3@VQVT3@VQVQ3@VQVQVQ3@X(3AX(W3W33AX'W3W33AX'W3W%W%W%3@3AWUWU3AWUWUWUW%W%W%WUWUX,WU3@X,X,3@X,WUWUWU3@U>TTU>3@U>3@U>TTTETETTTTTTTLTLTLTUTUTU3>TUTUTU3>3>U0U1U0TUTU3>3?TUTUTU3?TUV;3?V;TUTU3?3@TU3@3AUP3AU0TLU03AU03BU03BU53CU5TLU3TLTLU5U5TL3BTL3BTLTLUPUP3BUP3BUPUPUPU9U9U93B3B3C3D3EV;UP3EUP3EV;3FV;3F3G3H3IV;V;3I3J3JUPUPUPYB3J3KY>YBYBY>3KYBYB3KY>YBYBY>Y>Y>3JY>3K3KYI3LYBYBYIYBYBY>YBY>YBY>YBY>YBYBYBY>YBYBYB3HYB3H3IYBYB3IYI3JYBYIYI3JYB3J3KYBYBYIYBYBYB3J3KYIYIYIYMYIYIYMYM3JYMYIYIYI3JYMYM3JYM3JYM3KYMYIYIYI3KYIYMYIYI3J3KYMYMZ'YPZ'Z'Z'YPZ'3JYPYP3JYPZ'3JZ'Z'YPYP3J3KYPYJYPYJZ'3JZ'Z'3JYJZ'YJZ'3JYP3K3KY+3LY+YP3LYPYPY+Y+YPY+Y+3KY+3LYJYJ3LYWY+Y+3LY+Y+Y+3L3M3MYW3NYWYW3NYWYWY+Y+3NYSY+3NYSYS3NYSYSYSYSYSYWYSYSYS3M3NYSYSY*Y*Y/Y/3MY/YT3MYTYT3MY/YTYTYTYTY+Y+Y/Y/YT3LY/Y/3LY/3L3M3NYTYTYTY*Y*Y/Y/Y/3MY/Y/3MY/YT3MYTYTYTY/YTYTY/Y/YT3LY/Y/3LY/YTYTYT3LY*3LY*3MY*3MY*Y*Y9Y9Y*Y93LWZWZWZWZX/3LX/Y9X/X/X/X/X/Y93KX/X/3K3LX/X/3LX/Y9Y9Y93LX#X#Y9X#WZWZWZVWVWYGVW3JYGYGYGVWX/X/3IVW3IVWX#X#3IVWX#X#VWVW3IVWX/X/VWX/3HVWX/X#VWX#X#X#VWVW3GVWVWVW3GVWWSWSVS3GWSWS3GWSVSVSX#X#VSVS3FVSWSWS3FWSVSWSVS3F3FWSVSWSVS3FVSVSWS3FWS3GWSWSVS3GWSWS3GWSVS3GVSVS3GWSVSVSVNVNWP3G3GVNVNVNVNVN3G3H3HWY3IWYVNVN3I3JW#W#3J3KW#W#3KW#3K3LW#W#VNVN3L3M3MWYWYWYVNWYWYWY3L3MW,W,WYWY3M3N3N3OWYWY3O3PW,W,WYW,3PW,WYWYWY3PW,3PW,W,3PW,W,W,WYWY3P3QWY3QWYWYW,3Q3R3S3SWYWY3T3T3UW#W#3UW,W#W#W#W#W,W,W,3T3U3V3V3WW#3XW,W,3XW,WSW,3XW,3XW,WSWSW,W,3XW,3XWYWYWY3X3YWYWYWYWY3YWYWYWYWY3Y3YW#WY3ZW#W#3Z4#4#4$4%W#4%4&W#W#W#4&W#W#4&4'W#W#VNVN4'4(VNVN4(4)WUWUWU4)WUWUWUWM4(4)4*WMWU4*WUWM4*WMWMWMWM4*WTWTWMWMWM4*4*4+WTWT4+WTWTWTWU4+WUWUWUWM4+WM4+WUWMWMWUWU4+X+WMWMWM4+WT4+WTWT4+WTWTWT4+UYU>UYU>UYU>4+4+4,U>UYUYUYU>UYU>U>V:V:U>U>4*4+U>U>V:V:4*4+V:V:4+4,4-UY4-TTTTTTUYTTUYTT4,TTUYTT4,U/U/U/4,U/U/U/UU4,UUUU4,TT4-TT4-TLTLTLTL4-TLTLTL4-TLU:4-UPU:UPTL4-TLUPTLUP4-UPUPUP4-UPUPUP4-4.TLUP4.UP4.UPTLUPYBYB4.YBYBYBS:S:YBYBYB4-YB4-S:S:S:S:S:4-4-4.S:4/S0S04/S04/S0S:S0S0T'S0S0S0T'S0T'S0S0S0T'S0T'T'T'T'T&T'T&4*Y9Y9Y9Y9Y94*Y9Y*4*Y*Y*Y*Y9Y*XVY9Y9Y94)W-W-4)W-4)4*WFWFY9Y9W(W(Y9Y94)Y9Y9Y9Y94)W(4)W(W(Y9W(W(W(W(W(4(W(4(WFWFWFVZ4(VZVZ4(4)VZVZVZVZVZ4)VZVZ4)W(W6VZW6W6VZ4(W6W6W6W6W64(W6W64(4)W64)W64*VZ4*4+W(4+W(W6W(4+4,VO4-W(W(4-W(W6W6W.4-4-W6W6W6W6W6W6W/4,W/W/VOW6VOW64,Y9Y9W(W(4+Y9W(W(Y9Y9Y94+W(4+W(W(W(VU4+VUY9Y94+Y9Y9Y9W(4+Y9Y9VUVU4*VUVUVUY9Y9VU4*Y9Y94*VUX#X#4*X#VUX#VU4*X#X#VUVUX#X#VUX#4(X#VUX#4(X#X#X#VU4(VU4)4)X#4*X#X#X#VUX#4)X#VUVUX#X#VU4)VUX#VUVUVUX#VUVUVUX#VUX#VU4&4'VU4'X#4(X#X#VSX#X#VSVS4'4(VSVS4(4)4)4*X#VSVSVSVSW7VSVSW7W74(WS4)4*X#W7X#X#4)W,4*4+4+W7W7W7W7W74+W9W7W7W9W9W74*W9W9W9W9W7W9W7W7W74)4)4*W7W74*4+4,W9W7W9W9W94+W9W9W9W94+W9W9W94+W9W9W<W<4+W<W<W<W9W<4*W<4+W9W<W<4+W<W9W9W94+W<W<4+W<W9W9W94+W94+W9W<W9W<W<W<W9W<W<W<WTWTWTX%TLTL4(TLUEUEULUETMTMTM4'TM4'TM4(UETLUE4(UE4(UEUETLTL4(TLULUL4(UI4(4)UEUETLTLUE4)UIULUIULTLTL4(UETL4(UPUPS9S9T&S9S94'S9WQ4'WQWQWQ4'4(W@VU4(WQWQWQWQVV4(VV4(VVWQVVVVWNWNWNW+WEW+4'W+4'W+W+W+4'W+WE4'WEWEWE4'W+W+W+4'W+4(WEW7W74(W9W9W94(W94(W9X#W9W9W9W94(W9W<4(W<W<W<W<4(W<4(W<W<W<4(W<W<4(W:W<W:4(WUW:W:W:W:4(W<W<4(W<W)W<4(W<W<W<4(W<W<W)W)W<W)W)W<W)W)W<W<4&W)4&4'W)W)W)W)4'W)W<4'W<W<4'W)W<W)W<W<W)W)W<W<W)W)4%4&4'4(X-WUX-4(WUWU4(4)WUWU4)WUWUWU4)4*UFUF4*UIULUL4*UIUHTH4*TH4*THTHTHUHTHTHTHTHTHTA4)V5V<V54)4)4*4+4,V3V3V3T,SA4+SASZSZSZS=4+WQWQ4+WQW)W)W)X-4*X*VXVXX*X*VX4*X*X*4*VXX*X*4*4+VXX*4+X*WU4+4,WU4,W14-4.4.U*UIU*T:T:TI4.TQTQTITI4-TITDTIV#V#TITIS4S4S44,S=S=4,S4S44,S=S=S4S=S=S=S=S=S5S54*4+S.S.S-S.4+S.SMT$SMT$S@4*S@S@SKS@SKS@4)SXSXSXS@SX4)SXS@4)SXS@4)SUSUSUX-VXX-VXTDTDTD4(S-S-SVS-S.SM4'SM4'SM4(SMSMT$SMT$S.SMS.S.SMSM4&4'SM4'4(4)S.SMS.S.T$T$T$4(T$4(T$T$S3S3S34(S3S3S34(SFSFSOSFSO4'SOSGSGSG4'SG4'SGSOSGSOSOSOSGSGSGSG4&4&SW4'SWW>W>W4W4W>W>W4W>W>W>4%4&4&4'W4W4W?W$W?W?W$W?4&W$U#U#T-4&U#U#V(U#S7S7SNS7S7S7S7SNSNSJSNSJSJ3ZSJSJ3ZSJ4#4$SJSJSNSN4#4$4%SJ4%SG4&SGSGSGSG4&SO4&4'SISO4'SO4(SI4(SISI4(S8SOS8SGSG4(SISISISI4(4(S8S84)S>4)S>S>SGSWSGSWSWSWS>4(SWSW4(SW4(SWS>SWSWS>S>S>WLWC4'WCUBV$V$V$V$4&V$TPV.T-V.V.V(V(4%4&V(V(4&4'4'4(T=T=T=4(T=T=V(U#V(V(U#U#U#4'V(V(U@4'V(V(4'V(SNSOSNSO4&SOSPSO4&SOSPSPSOSOSPSOSPSPSP4%SOSOSPSOS>S>SP4$SP4$SPSPS6S64$S64$S6SR4%SR4%SRSRS6S64%S6U=4%V,V,4%T1T1T5U<U<U<4%TGTG4%TGTPTPTP4%TGTGV.V.TG4$TGV.4$SPSDSDSESDSESES64#SRS6SD4#SDSDSDSD4#SE4#T1T5T5T04#T0T0T8T8T/T8T8T0T8T0T/3YT/T/3YT0T/T0T0T0T03YT;T;T03YT03YT0T03YT;T;T;3YTGT;TG3Y3ZT;4#4#V.V.V.4#V.V.V.T;4#T0T04#V.V.V.SCSC4#SESCSCSC4#SCSESESESESE3Z4#SE4#SE4$SESTSTSTX;X;X;XD3Z4#XDXDT3T34#T34#4$T5T54$T3T54%T3T34%T3T74%T7T7T0T04%T0T7T0T7T04$4%T.T.4%T0T.T.T04%T.T.4%V.4&UMT0UMT0UMV.V.4%4&T0UM4&UM4&UMUMUMT0T0T04&T04&T0T04&T0T.4'T0T0T0UMUMUM4&UMV.V.4&4'V.V.4'V.T0T0T.T.4&UMT.UM4&SSSESSX<X<XDX<XDXD4%XDX:XBX:XBXB4$XBXBXDXD4$4%4%XBXBXBT54%T5T5X:XBX:XB4$4%T4T44%4&T4T4T44&T4T4YU4&YUYU4&4'YU4(Y7Y74(Y74(4)Y7Y7YHYGYGYGYHYHYGYGYHYHYGYGX.4&X.X.4&X.X&X&X.X.4&4'X.X.X&X&X.X.X&4&Y44&Y@Y@Y44&Y@Y@Y44&Y@Y@Y@Y@4&Y@Y44&Y4Y4Y@Y@4&Y@Y'4&Y'Y'Y,Y,Y'Y,Y'Y,Y'Y,4$Y'Y,Y,Y'Y,4$Y,4$Y,Y,Y,YHYUYUYUYHYH4#4$Y3Y3Y34$Y,4$Y,Y,4$Y,Y,Y,4$YUY34%Y3YUY3Y3Y,Z&Y,Z&Y,Y,Y,4#4#Z&4$Z&4$Z&Y,Y,Z&Z&4$Z&4$4%Z$Z$YLYLZ$Z$YLYLZ$Z$YL4#YLYL4#YV4$YVYVYGYVYVYGYG4#YGYEYGYEYEY=Y=YGYGY=Y=YGYGY=YNY=Y=YGYGYGYXYXYXYGYXYXYNYXYXYNYN3TYNYGY=YGYGY=Y=YGYGYNYGYGYGYGYGYGYNYXYNYNYNYNX.3OX.YN3OYNX.YNYNYN3OYNYN3O3PYNYN3P3Q3QX.YNYNX.X.3QX.3QX.X.X.YG3QYGYGYG3QYG3RYGYG3RX.3RX.X.X.3R3SYGYG3SYGX.X.3SX.WOWOX.3SX.X.3S3TX&X&3T3UW=W=W=W=W=3U3UW3W3W3V=V=V=3UV=V=3UV=V=V=V=3UV=V=3UV=V=U>V=U>V=V=3T3UU>TETETEUT3TUTUTV?V?3T3UUGUG3UUGV;V9V;3UV93U3VV;UGUGTLTLTUTUUGUG3TUG3UTLTL3UTLTL3UTU3VTLV;V;TUTUV;V;3UTUUKUK3U3VUPUPUP3VUK3VUPUPU-U$U$U$Y6Y6Y6Y:Y@Y@Y@YIYIY.YI3SYI3SYIYIYIY.YIYIY.Y'Y.Y.Y'Y'3QY'Y.Y'Y.Y.3PY.Y.Y.Y.3P3Q3R3R3SYI3TY.3TYIYIY.Y.3T3UYI3UYIYI3UY'Y.Y.3U3VY.Y.Y'Y'3V3W3WY'Y.Y.3WY'Y.3XY'Y'3X3Y3Y3ZY.Y.3Z4#Y.Y.Y'Y'Y'4#4#4$Y'4%Y'Y'4%4&Y'Y'4&Y,Y,Y,4&Y,Y'4&Y'Y'Y'4&Y'Y'4&4'4(Y,4(Y,Y,Y,4(Y,Y,Y,Y'4(4)4*Y'Y'4*4+Y'4+Y'4,4,4-4.4/4/Y,40Y,Y.40414242Y,Y'434344Y.Y.Y'44Y.Y.Y,Y,44Y,YI44YIYI4445YIYI4546YIY.Y.Y.YIYIY.YAY.45YAYA45YAY.45464747YA4849YAYA49YA49Y,4:Y,Y,Y,4:4;YI4;YIYI4;4<YIYI4<Y,YIYIYIYIYIZ)Z)Z)Z)4;YIYIYI4;YI4;YIYI4;4<4=4>4>YIYIYIZ)Z)4>4?Z)Z)YIYIYI4>YMYMYIYMYI4>4>YMYMYMYMYM4>YMYI4>4?YMYIYMYMYM4>YMYMYMY,Y,YIYIY,Y,YI4=Y,Y,4=Y,YI4=4>4?4?Y,Y,Y,4?Z&4@Z&Y,4@Y,4AY,4A4BZ&Y,4BY,Y,Y,Y,YKYKY,YK4AYKY,Y,Y,4A4A4BYKYK4BYKYKYK4BY,4CY,Y,4C4D4EY,Y,Y,YKYKYKY,Y,Y,YKYKYK4B4C4DY,4DY,Y,Y,YIY,4DY,4DY,4EY,4EY,4F4GY,Y,4GY,4G4HZ)Z)4H4IZ)Z)Y,Y,Y,4IY,Y,4IY,4IZ)Z)Z)Z)4IZ)4J4J4KZ)4LY,Y,4LZ)Y,Y,4LZ)Y,Y,4LY,Z)4LZ)Z)4LZ#4MZ#Z)4MZ)4NZ#Z#4NYMZ)Z)Z)YM4MYMYMYM4M4NYMZ)Z)4N4OYM4O4PYMYMZ)4PZ)Z)4PYMYMYM4PZ)YMYMYMZ)YMYMYMYM4OYM4O4PYMYMY,4PY,4Q4Q4RZ#Z#Z#Z#4RZ#Y,Z#Z#Z#4QZ#Y,Y,Y,Y,4Q4RY,Y,Y,4RZ#Z#YMY?Z#Z#Y?4QYM4QYM4RY?Y?4RY?Z#Z#4RZ#YM4RYMYMYMYMYMZ'YMYMZ'4Q4QY?4R4SYM4SY?Y?4SY?Y?Y?Z&Z&YKYKYKYK4RYKYKYK4R4SYKYK4SYKZ&Z&4S4TZ&Z&YK4TZ&Z&4T4UYK4UYKYK4UZ&4V4WYKYKYK4W4WYK4X4YYKYKY-Y-YKY-4XY-Z&Z&Y-Y-Z#4WZ#Z#4W4X4Y4Z4ZZ#Y0Y0Z#4Z5#Y0Z#Y0Y0Y0Z#Y0Y0Y04YY-Z#Y-4YY-Z#4ZZ#4ZZ#5#5#5$Y0Y0Y-Y-Y05$5$5%Y0Y0Y-5%Y0Y05%5&Y0Y05&5'Y0Y05'5(Y0Y0Z#Z#Z#5(Z#Y?5(Y?Y?Y0Y?Y?Y?Y?Y?Z'Y0Y05&Y05&Y0Z'Z'Y?5&Z'Z'Y0Y05&Y0Z'5&Z'YP5&Z'YPYPZ'Z'YP5&Y0Y05&Y0Y-Y-5&Y-Y-Y0Y0Y0Y-Y-5%Y05%5&Y0Y0Y0Y-Y0Y0Y-Y-Y0Y0Y-5$Y-5%5%YYYYYY5%5&5'Y0YYYY5'YYY0Y/5'Y/Y05'Y0Y/Y0Y0Y0Y+Y0Y0Y05&5&Y+Y+Y+Y0Y05&Y0Y0Y05&Y0Y+Y/Y+5&Y/Y/5&Y/Z'Z'Z'Y+Y05%Y0Y0Y0Y/Y/Y/Y+Y/5$Y/Z&YEZ&Z&YEYEZ&5#YEYE5#5$Z&Z&Z&Y<Y0YY5#Y/Y/5#Y/Y/5#YYY/Y/5#5$Y2Y2Y2Y2Y/5$Y25$Y25%Y2Y<Y2Y2Y2Y<Y2Y<Y2Y<Y2Y2Y2Y<4Z5#Y25#Y2Y2Y25#Y25$Y25$Y2Y2Y2Y2Y25$Y/5$Y/Y/Y<Y<Y<5$Y<Y<5$Y/Y/5$Y/Y/Y<5$Y/Y/YEYEY<Y<YGYG5#YGY<5#Y<Y<5#5$Y<Y<Y<YRYRYR5#5$Z(Z(5$5%Z(Z(5%Z(Z(Z(5%YGY<YGYGYGZ%Z%YGYG5$YGYGYGYQYQYGYGYQYQYGYGYQYG4YZ%Z%Z%Y<Y<YGYGY<YGYGYG4WYG4X4YY<Y<Y<4YY<YG4YYGYGYG4YYGYGYGYQYQYQYQ4XYQYNX.X.X.Z%Z%Y)Y)4VY)Y)Y)X.4VWJWJX.X.X.4VVTVT4V4WVTVTVQVQVTVTVQ4VVTVT4VVQX(X(4VX(4VX(X(X(X'4VX'X'4VX'X'X'WU4VWUWU4V4WWUWUW%W%4W4XWUX,WU4XX,X,4XX,WUX+X+X+U>TT4WTT4WTTU>TTTUTU4WTUTUTUTU4WTL4WTLTLTUTU4WTUTUTU4WTUTU4W4XV;4X4YV;V;TUTUTU4YTUTU4Y4Z4ZV;TUV;TUTU4ZUPTLU0TLU0TLU0TLU0TLU0TLU0TLU5TL4W4WU5U5TLTLU4TL4WTL4WTLTLUPUP4WUP4WUPUPUPU9U9U9UPU94VU9U9UPUP4VUPU9U9UPUPU9UPUPUPV;UPV;4T4TV;4UV;4UV;4VV;V;4VV;V;UPUP4VUPV;V;UPUP4UUPUPUPV;V;V;4UV;V;4UUP4UUPUPUPYBYB4UY>4UY>Y>Y>YBYBY>Y>YBYBY>Y>YBYB4SYB4SYBYBYBYBYI4SYI4S4TYBYBYBYB4TYBY(4TY(Y(4TYIYBYBYIYI4T4U4UYIYBYBYBYIYBYBYIYI4T4UYIYI4U4VYI4VYIYIYMYMYIYIYM4UYIYIYI4UYIYIYMYMYIYIYIYM4TYM4TYMYIYMYIYIYIYMYM4SYM4T4TYM4UYMYPYPZ'YPYPYPZ'YP4SYPZ'YPZ'YPZ'Z'YPYP4RYPZ'4RZ'Z'Z'YPZ'4RZ'Y+YPYPYPYPYP4QY+Y+YPY+4PY+Y+Y+YP4PYPY+Y+Y+Y+YTY+YTY+Y+YJYJYJYWYJY+Y+Y+YWY+YWYWY+Y+YWY+YJYWYJYWYJYWYJYWYWYS4H4IY+Y+YS4IY+YSYSYSYSY+YSYSYSYSY*Y*YSYSY*Y*4EY/4F4GYT4GYTY/4GY/Y/Y/Y/Y/YT4GY/Y/4GY/Y/Y/Y/4GY/Y/4GYTY/4GYTYTY/Y/Y/4GY/Y/4GY/YT4GYTYTY/Y/YTYTY/Y/YTYTYTY9Y9Y94DY94EY9Y*Y9Y9Y9Y*4DY*4EYGYGYG4EX/X/Y9X/Y94DY9Y94DY9Y9Y9Y9X/Y9Y9X/X/4CX/Y9X#4C4DVWYGVWVWVWVW4CVWVWVW4C4D4DVWX#X#VWVW4D4EX/VW4EVWVWVWX#X#VWVW4DVW4DWSVSVSWSWSVSVSVSVS4CVS4CWS4DWSWSWSVSWS4CWSVSWSVSWSVS4CWSWSWSWYWS4BWSWSWSWSVSVSWSWSVS4AVS4AVS4BWSWS4BWSVNVN4B4CWPVNVNVNVN4BVN4C4C4DWYWYVNVNVN4D4DWYWYWYVNVNW#W#VNVNW#W#W#W#W#4BW#W#4B4CW#W#WY4CW#4CW#W#VNVN4C4DVNWYVNWY4CWYWYWY4CWYWYWYWYWYWY4CWYWY4CWY4C4DW,W,4D4EW,W,WYWY4E4FWY4FW,W,4F4GW,W,4G4HW,W,WYW,W,W,WYWYWYW,WY4FW,W,4FW,W,W,WYW,W,W,WYWYW,WY4D4EWYWYW,4E4F4GW,WY4G4HWYWY4HWY4HWYWYWYWYWY4H4IW,W,W,4IW,W,4I4JW,W,W#W#WYWY4I4JW#4JW#W#4JW#W#W#4JWY4KW#4KW#4LW#4L4M4N4OW,W,WSWSWSW,WSW,4M4NWSWSW,W,W,4NW#4NWYWYWY4NWYWYW#4N4O4PWYWY4PWYWY4P4QW#W#W#W#4Q4Q4RWYWYW#W#4R4SW#W#4S4TWYWYWY4TWYWY4TWY4TWYW#W#4T4U4V4W4W4XW#W#4X4YW#4ZWY4Z5#W#5#W#W#W#W#5#W#W#5#W#W#W#W#5#W#W#5#W#W#W#WUWU5#5$WUWUWU5$WUWM5$WMWU5$WMWMWU5$WUWMWUWU5$WMWMWMWT5$WM5$WTWTWM5$5%5&WMWMWTWTWMWT5%5&WUX+WU5&WU5&WMWMWUWU5&WMWUWUWUX+WMWT5%WTWM5%WTWTWM5%5&WTU>UYU>UYUYUY5%UYU>5%U>U>5%UYUYUY5%5&V:V:5&V:V:V:U>U>V:5&U>U>5&5'U>5'V:UY5'UYUYUY5'UYU/U/5'5(5)5*UYTTUYTT5)5*U/U/5*5+U/U/5+5,UU5-TTTT5-TT5-TTUUUU5-TLTTTLUPUPTLUPTLTLU:U:U:UPU:U:TL5*UPUPTLUPUPUPTLUP5)UPTLUPTLTLUPUP5(UPTLTLTL5(TL5(TLTL5(YBY>YBYBYB5(YBYBS:5(S:5(S:S:S:S:S0S:5(S0S05(S0S:S0S:S:S0S05'S05'S0S:S0Y9Y9Y*Y*Y9Y9Y*Y*Y*Y9Y*Y*Y9Y9Y9Y*W-W-5#5$WF5$WFWFW-W-WFWFY9Y95#W(Y95#W(W(Y9Y9W(Y94ZW(W(W(W-4ZWFWF4Z5#VZVZ5#5$VZVZ5$5%VZW(VZVZVZ5%VZVZ5%W(VZ5%VZW6W6W6W6W/5$5%W/W/W6W6W6VOW6W/5$W/W6W/W6W6VZW(VZW(VZVZ4Z5#W65#W6W6W6W(VOVOW(W(VO4ZVO4ZVOVO4Z5#VOVO5#W65$W6W.5$S9W6W6W/5$W/5$VO5%VOY9Y9Y9W(Y9Y9W(5$W(W(W(5$W(5$VUVUY9Y95$Y9Y95$VUVUW(VUW(VUVU5#VUVU5#VUVUVU5#X#5$X#X#X#VUX#VUX#VUX#VUVU4Z5#VUVUVU5#VU5#VUVUVUX#5#X#5#X#VUX#VUVUVU5#5#5$VUVU5$5%VU5&VUVU5&VUX#X#5&X#VUX#VU5&VSVSX#5&VSVS5&X#VSVSX#5&VSVS5&VSX#5&X#X#5&VSVSVSWSWSW7WSW75%W7W75%W7W7W7W,W,5%W,W75%W7W75%W,5&W7W7W75&W75&W95'W95'W95(W9W7W9W7W9W75'W7W75'W9W7W9W7W7W75'W7W7W75'W75'5(5)5)W95*W9W9W<W95*W95*W9W9W9W<5*W<W9W<W9W<W9W<W9W95(W<W9W<W95(W95)W<W<5)W<W9W95)5*5*W<W9W<TLTL5*5+TMTMULTMULUL5*UL5*ULTMUL5*TL5+TL5+TL5,5-TLTLUETLUI5,UIUI5,TLUE5-TLTL5-TLUE5-UE5.TLTL5.UETL5.UPUPS9S9S9WQ5-WQWQWQVU5-W@VU5-X#VUVUW@5-WQWQWQWQWQVVWQVVWQVVW+WEW+WEW+WEW+5*W+5*W+5+5+WE5,WEWEWE5,W+5,W+W+W+W+W+W+WEX#W9X#W9W9W95*W95*W9X#X#W9W9W9W<W9W9W9W<W<W<W<5(W<5(W<W:W<W:W<5(W:W:5(W:WUWUW:5(5(5)W<W<W<W<W)W<W<W<W<W)W)W)W<W)W<W<W)W<W<W<W)W)W<W)W)W)W)W)W<W<W<4ZW<W<4ZW)W<W)W)W)W)4Z4ZW<5#W<W)5#W)W)5#W<5$W<WUWU5$5%WUWU5%5&WUWU5&5'WUWU5'WUWUWU5'WX5'WUWXWUT>T>T>5'5'5(UIUIUHTHUHTHUHTHUHTH5&THTATAV<V<V5V5T+T+T+5%T+T+5%UCUCU?U?U?5$V1V1V1SASZ5$SZSZSZS=S=WQWQWQVMX-X-4ZX-X*4ZVX5#X*5#5$VXVX5$VX5%X*X*5%X*VX5%VXVXWU5%WUWU5%5&5'5(5(W1W1W1W1W1WUWUW1W1WUWUUIUIUIU*T:T:TITITD5$TD5%S4S45%S4S=S4S4S4S45$S4S4T#T#S.S.T#T#S.S.S-S-S-S.S@4YS@S@4YSX4ZSXS@4ZS@S@4Z5#S@S@S?S?S?SUTDTI4ZTIS.SMS.SMS.SMS.SMS.SMS.S.4WSMS.4XSMSM4XSM4XT$SMT$SM4XSMSM4XT$T$T$T$4XT$4YT$4YT$4Z4Z5#SJSJS3S35#5$SO5$SOSGSGSG5$SGSO5$SOSOSG5$SGSWSGSGSGSW5#SWSWSWW>W>5#5$W>W>5$5%5%WVWVWVWVWV5%5&W$5&W?W?5&U#5'U#SJS75'S7SNSNSJSJSJSJSNSJSJSJSJSNS75$S75%5%5&SJSJS7SJSJSJSOSG5%5&5&SGSOSGSGSGSISGSOSO5%SISO5%SOSISOSI5%SI5%SISOSOSISISIS8SO5$SOS8SGSGSG5$SIS>SIS>5#5$S8S8S85$S8S85$S>S>S>SWSWS>5$SWSW5$SWS>S>5$SWWLWCWCWCV$5#V$TPT=V(V(V(V(V(4ZV(T=V(T=4ZV(U@U@U@V(4YT=T=4YT=T=T=4YU@T=T=U#V(V(V(V(V(U@U@V(V(U@U@4VSOSPSPSOSPSPSPSP4USPSPS>S>SP4U4US6SPSPS6S64US64US6SRS6S6S6SR4USR4USRSR4US64V4WU=V,V,V,4VT1T1T1U<4VTGTGTGTG4VTGTPTP4VTPTGTGTG4V4VSPSDSPS6S6S64VSDSDSD4V4VSESESET1T1T5T1T0T;T0T0T/4TT/T/4TT0T/T0T0T0T04TT0T;T04TT04TT0T04TT;4UT;4UTGT;TGT;T;T;4UV.V.4UV.4UV.T0T0T04UT0V.T0T04U4VT;T;4V4WT04WV.V.SCSCSCSESCSCSC4VSE4VSSSS4VSSSSSSSESE4VSS4VSSSSSSX;4VXDXD4VXDXDXDT3T3T5T3T54UT5T5T3T34UT5T3T3T54U4U4VT5T5T3T34VT5T0T0T7T0T0T04U4VT04VT0T.4V4WT.4XT0T0T.T.4WT.T.T.T0T04WV.4WUMUMUMUMV.UM4WV.V.4WV.T0T0T04W4WUMT0UMT04WT0T0T04WT04XT0T04XT0T0T0T.4XUMUM4XUMV.V.V.4XV.V.4XV.4XUMUMUMUMUMT.4XSESSSE4XXDXD4X4YXB4YXBXBXDXD4Y4ZXDXD4ZXBXB4ZXBXB4ZT.T5T54Z5#T4T4T/T/T4T4T/4ZT4T44ZT/T4T4T/4ZT4T4YUY7YU4ZY7Y7YUYUY7Y74YY7YU4YYUYU4YY7YUYUYUYUYUY7YU4XY7Y7X.X.X.4XX.X.4X4YX&4YX&X&4YX&X&X&4Y4ZX&X&Y4Y44Z5#5#5$5%Y@5%5&Y@Y@Y@Y@5&5'5'Y4Y4Y4Y@Y@5'5(Y,Y,5(Y,Y'Y'Y,Y,5'Y,5(Y,5(Y,5)Y,YHYH5)5*YHYH5*YHY3Y3Y,Y,Y35)Y,Y,5)Y,Y,Y,YUYUY3YUY3YUY35(Y,Y,Y,Z&Y,Z&Y,Z&5&Z&Z&Z&Y,Z&Y,5&Y,5&Y,Z&YLYLZ$Z$YLYLZ$5%YV5%YLYLYVYV5%YV5%YLYLYL5%5&5'YG5'5(YXYNYNX.X.X.YN5'YNX.YNYNYN5'YNYN5'5(YNYN5(YNYNYN5(5)5)X.5*X.X.X.YNYNX.X.5)X.YNYN5)X.5)5*YGYGYGYGYG5*YG5*YGX.YGYGYG5*5*X.X.X.YG5*X.X.YGYGX.YGYGYGX.5)X.X.WO5)X.X.X.X&5(5)X&X&5)X&X&X&WGWGW=5)5)WGW=W=W35)W3W3W=W=W=W3V=V=V=5(V=V=5(V=V=V=V=5(V=V=5(5)V=V=V=5)V=V=5)V=5)TLUT5*5*5+V?TL5+TLTLTL5+UG5,5-5-V9V;5.5.V;V;V;5.5/V;V;UGUG5/UG5/50TLTLTLUGTL50UGUG50TU50TLTLTL5051TUTUUKUKUK51UKUK51UKUPUKUPUKUKUK50UKY.Y.YI50YI50YIYIY.Y'Y.50Y'Y'Y.Y.Y.Y.5/505051YIYI51YIYIYIY.Y.5152Y.Y.52Y.5253YI54Y.Y.Y.545455YIYI55Y.56Y.56Y.YIYIY'Y'56Y'Y'Y'56575758Y.Y.Y'Y'5859Y'Y.595:Y'Y'Y.Y'Y'Y'Y'Y.Y.Y'Y.Y.57Y.Y.Y.Y.Y'Y.57Y.57Y.Y.Y'Y'57Y.Y'57Y.Y.57Y'5859Y'Y'Y,Y,Y'58Y'Y'Y,Y,Y'Y,Y'57Y'Y'Y'57Y,Y,5758Y,Y,Y'Y'Y,Y,Y,Y,57Y,Y'Y,Y'Y'Y,56Y'57Y'Y'Y'57Y'5758Y,Y'Y,Y,Y,Y,Y,57Y,57Y,Y,Y,Y'57Y'Y'5758Y,Y,58Y,Y,Y,58Y.Y.Y.Y'58Y.59Y'Y'Y'59Y'59Y'5:Y'5:Y'Y'Y,Y,5:Y,Y'Y'Y'5:Y,Y,5:Y,5:5;Y,Y,5;Y,5<Y,5<Y'5=Y'Y.5=5>5?5?Y'Y'Y'5?Y'5@5A5A5BY'5C5C5DY.5EY'Y'5EY'5E5FY'Y,Y,Y,Y.Y,Y.Y.YIYIY.Y.YI5DY.Y.5DY.Y.5DYIYIYIY.YIY.Y.YAY.5CYAYA5CYAY.Y.Y.5CYI5CYIYI5C5DYIYI5DYAYAYAYAYA5D5EYAYAYA5EYAYA5EYIYAYA5E5F5FY,YAY,YI5FYI5GY,Y,5GY,5GY,YIYI5G5H5IYI5I5JYIYIY,Y,5J5KZ)Z)YIYIYI5JZ)Z)Z)5JYIYI5J5K5LZ)5L5MYIYI5MZ)Z)5NZ)YI5N5O5O5PYIYIZ)Z)YIYIZ)Z)YIYIYIYIYMYMYIYMYI5MZ)Z)YMYMYMYM5LYMYIYI5L5MYIYMYIYI5LYMYMYMY,5LYIYIY,Y,5LY,YI5L5M5NYIYI5NY,5NY,Y,Y,5NY,Y,Y,Y,Z&5NZ&5NZ&5OZ&Y,Z&5OZ&5OZ&Y,Y,Y,5OY,5PY,Y,Y,Z&5OZ&5PZ&5PYKYKYKY,Y,Y,5PY,Y,YKYKY,Y,YKYKY,YKYKYKY,Y,5MY,YKY,YKYKY,5L5MZ&Y,5MY,5N5NZ&Z&Z&YIYIYI5NYI5N5OY,YI5OYI5P5P5Q5RY,YIYIYI5RYI5RYIYIYIY,5RY,5RY,YIY,5RY,YI5SY,Y,5SY,Y,Y,Y,5S5SZ)Z)Z)5S5TZ)Z)5T5UZ)Z)Z)5UZ)Z)Y,Y,Y,5UY,Y,5UY,5U5VZ)Z)Z)Y,Z)Z)5UZ)Z)Z)Y,Y,5UY,Y,Y,5UY,Z)Y,Z)Z)Y,Z)Z)Z)5S5TZ)Z)Y,Y,Z)Y,Y,Y,Z)5SY,Y,Z#Z#5RZ#5SZ#Z)Z#Z)5S5SZ#5TYZZ#Z#Z#YMZ)Z)Z)YMZ)Z)YMYMZ)Z)YMZ)Z)Z)Z)YMZ)Z)Z)5O5OZ)5P5QZ)YM5QYMZ)Z)Z)5Q5QYM5RYMYM5RYMYMZ)5RYMYMZ)Z)Z)5RZ)YM5RYMY,Y,Y,5R5RZ#Z#Z#Y,Y,Z#Z#5QZ#Z#Z#Y,Z#Y,5QY,5QY,Z#Y,Y,Y,5QY,Y,5QZ#Y,Y,Y,Z#Y?Z#Y?Y?YMYMYMY?5NY?5O5PY?Y?5PY?Z#Z#Y?Y?YMYMYM5OY?Y?Z'5O5OY?Y?Y?5O5PYMYMY?Y?5P5QYMYM5QYM5QY?5R5SYKYKZ#YKYKYKYKZ#YKYKZ#5QYKYK5QYKZ&Z&YKYKZ&YKYKYKZ&Z&YK5OZ&Z&5O5PZ&Z&5PZ&YK5PYKYK5PZ&YK5QYK5QYKYKZ&Z&5QZ&YKYKYKY-YKYKYK5P5PY-Y-Y-5PY-Y-Y-YKY-Y-Y-YK5OZ#Z#Z#Z#Z#5OZ#Z#5OY0Z#Y0Z#Z#Y0Y0Z#Z#Z#Z#5MZ#Z#Z#5MZ#Z#5MY0Y05MYKZ#YKZ#5MZ#5N5N5OZ#5PZ#5PZ#5QZ#5QZ#Y05QY-Y0Y0Y-Y-Y0Y0Y-Y-Y05PY05PY0Y0Y-Y-Y0Y0Y-Y-Y0Y0Y-Y-Y05NY-Y-5N5OY-Y-5O5PY-5PY0Y05PY-Y0Y05P5QY0Y0Z#5QY?Y?Z#5Q5R5SY0Y05SY05SY0Y?Y?Y?Y?Y?5SY0Y05SY0Z'Z'5S5TZ'Z'5TZ'5TZ'YP5UY0Y05UY0Y-Y-5U5VY05VY0Y0Y-Y0Y0Y05UY0Y0Y0Y-Y-Y-5UY-YYYYYYY-YY5TYYY-Y-Y-5TYYYY5T5U5U5VY0Y0YYYYY0YYY0Y/Y/Y/Y0Y/Y/Y/Y0Y0Y05SY05SY+Y+Y0Y05SY0Y0Y0Y05SY+Y/Y+Y+Y/Y/5R5SY05SY0Y/Y+Y+Y+Y/5RYEZ&5SY<5SY<Y<5SY<Y<Y<Y0Y/Y/Y/YYYYY/5RYYYY5RY/Y<Y<Y2Y2Y<Y<5QY<5QY2Y/Y2Y<Y<Y2Y2Y25PY2Y2Y2Y<Y2Y2Y<Y<Y2Y<5NY<5OY<Y<Y<Y25OY25OY25PY25PY2Y<Y2Y2Y<Y<5OY<5PY<Y<5PY<Y/5PY<Y/Y/5PY/Y/Y/Y<5PY/Y/YGYGY<5P5PYGY<YGYGYGY<Y<YGYGY<Y<Y<Y<Z(Z(Y<5MZ(Z(5MZ(Z(Z(5M5NZ(Z(Y<Y<Z(Z(YGYG5M5NYGYGZ%Z%YQZ%Z%Z%YGYGY<YGY<5K5L5MYGYG5MYGY<YGYGYGY<YG5LYGYGYGYG5LYQYQZ%Z%Z%Z%5KY)X.X.WJWJX.X.VRVRVTVTVQVQVTVTVQVQVT5GVQVQ5GVQVQVQVNX(VN5G5G5HX(X(5HW3X'X'W35H5I5JW%W%WUWUW%W%WU5IW%W%5IW%WUW%WUWUW%W%WUWUWU5GWUWU5G5HWUWUU>U>U>5H5H5IU>U>TUTU5I5JTUTU5J5KTL5KTL5LTUTU5L5MTUTU5M5NTUTU5N5OTU5OTU5PTUTU5PV;TUV;V;V;TUTUTU5OTUTU5O5PTUTU5P5QTU5QTU5RTUTU5RUPTLU55RU5TLU5U5U5TLU4TLU4TL5PTLTLU0UP5PUP5PUPU0UPU9UPU95P5PUPU9U95PUP5QUPTUTUTU5QTU5Q5RV;5RV;5SV;5SV;V;V;5SUPV;V;5SUPV;5TV;UPUPUPV;V;V;5SV;UP5SUPUP5SUPUP5S5TY>Y>YB5T5UY>Y>Y>Y>5U5UYBYBYBYBYBYB5UYB5UYBYB5UYIYBYBY>YB5UYBY(5UY(Y(YIYIY(Y(YI5T5U5VYIYI5VYIYB5VYBYBYIYI5V5WYIYIYBYBYIYI5V5WYIYI5WYIYIYMYIYMYMYM5VYMYIYI5V5WYIYM5WYM5WYMYIYMYMYMYM5WYM5WYMYMYMYM5W5X5X5YYMYM5Y5ZZ'6#6#YPZ'6$6$YPZ'Z'6$YJZ'6%YPYPYP6%YPYPYPY+YPY+YPY+YW6#YW6$6$YSYSYSY+Y+YSYSY/Y/6#Y/Y+6#Y+Y+6#6$Y+Y+YTYT6$Y/YTY/Y/Y/YTY/YTYTY/Y/5Z6#Y/Y/6#6$6$YTYTYT6$YTYTYTY/Y/Y/6$Y/Y/YT6$6$YTYTYT6$Y96%Y9Y*6%Y*6&Y*Y*Y*Y9Y*Y9Y*Y9YGWZYGWZX/X/Y9Y9X/X/Y9Y9X/X/Y9X/Y9Y95X5YX#X#5YX#VWVW5YVWVWVWX#X#5XVWX#X#X#5XX#X#VWVWX#X#VWVW5W5XX/X/5XVWVWVW5X5YWSWSVSVSX#VSX#X#5WWSVSVSVSVSVSWS5VWS5WWSVSWSVSVSWSWS5VW,5VWSVS5WWSWS5WWSVS5WVSVS5WWSVSVSWP5WWPWPVNVNWP5WVNVNVN5WWY5WWYWY5W5X5YWY5Y5ZWYWYVNWYWYWY5Y5ZWYWYW#W#W#5ZW#W#5Z6#6#WYWYWY6#W#WYW#VNVN6#6$W#6$W#W#VNVNW#W#6#6$WYWYVNVNWYWYWYWYWY6#WYWY6#W,W,6#W,W,WYWYW,W,WYWYW,W,WYWYW,W,WY5XWY5Y5YW,W,W,WYWYWY5YWYWY5YWYWYWYW,5YWY5Y5Z6#6#W,6$W,WYWYWY6$WYWYW,W,W#W#WY6#W#W#6#WYW,W,W,6#W,6#W,WY6#6$WYWYW,WYW,W,WYWY6#6$WYWY6$WY6$WYWYWYWYWYWY6$WYWYWY6$W,W,W,W#W,W,W#W#5Z6#W#W#W,6#W,W,6#6$6%W#W#W,W#6%W,W,6%6&WYWY6&W,6&W#W#W#6&W#6'W#6'W#WYW#WYWYW#6'W#W#6'W#W#6'W#W#6'W#W#W#WS6'WSWS6'W,WSWSW,6'W7W7W#6'W#WY6'W#WYW#W#W#6'6(WY6(WYWY6(6)WYWYWYWY6)WYWYWYWYW#WYWY6(6)W#W#6)6*WY6*WYWYW#W#6*W#W#6*WYWY6*W#WYWYW#W#6*6+W#W#WYWYWYWYWYW#WYWYW#WYWYWYW#6(WYWYWY6(WYWY6(6)WY6)6*6+6+W#W#W#6+6,W#W#6,W#W#W#6,WYW#6-6-WY6.W#W#6.W#W#WYWYW#W#6-W#W#W#6-6.W#W#W#6.W#W#6.6/W#W#VNVN6/60VNW#60W#WU60WUWM60WUWMWMWU6061WM61WMWMWM61WM62WMWUWMWUWMWU61WMWM61WMWT6262WT63WTWMWMWM63WM63WTWT63WTWTWTWM63646565WTWTWTWUX+WUX+WUWUWU6464WMWMWMWM64WMWMWMWM64WMWMWM64WTWT64WTWT64UY65UYU>65U>6666UYUYUYU>66V:V:6667V:V:6768V:V:U>68V:V:6869V:V:696:V:V:U>U>6:6;U>UY6;UY6;UY6<6=TTTTUYUYTTTT6<TTUY6<TTTT6<TTTTTTUYUYU/6<UYUY6<6=UYUYU/6=UYUY6=U/TTTT6=6>TTTT6>TT6>6?UUUU6?TTUU6@UU6@UUUUTTTLTTTLTLUPTLUPTLUPTLUPUPUPUP6=TLTLTL6=TLUPTLUPY>6<Y>6=YBYBY5Y5S:S:6<6=S:S:S:6=S:6=S:S:S0S06=S0S:S0S:S:S:S0S:S0W-W-6;6<W-W-6<W-6<W-WFWF6<6=W(W(Y9Y9Y96=Y9Y96=Y96=W-WF6>W(W(VZVZ6=W(VZVZ6=W(VZVZW(W(VZVZVZW(VZ6<W(W(6<W(VZ6<6=W(VZW(W(W(VZW66<W6W6W6W/W/W6W6W/W66:W6W6W6VZVZVZW6VZW(W6W(6869W66:W(W(6:6;VO6;VOVOW(W(VOVOW(W(VOW(69W6W.W.69W6W6W669W6W.W6696:W/W/W6VO6:VO6:VOVOVOY9Y9W(6:W(W(W(6:W(6:VUVUY9Y96:W(Y9Y96:VUVU6:VUVU6:Y9VUVUX#X#VUX#VUX#VUX#VU68VUX#68X#X#X#VUVUVU68VU68VUVU68X#X#X#68X#VUX#VU68VU69X#X#69X#X#X#696:VU6:VUVUX#X#6:X#6:6;VUVUVUVUW@6;6;X#VU6<X#X#6<X#VSVSX#X#VSVSX#X#VS6:X#6;VSVS6;VSX#6;X#X#6;VSVSVS6;6<W76=WSWS6=W7W,W,W76=6=6>W76?W,W,6?W,6?6@W7W76@W76AW76AW96B6CW76CW7W7W7W7W76CW7W9W9W9W76BW7W76B6CW76DW7W7W7W96CW7W9W96CW9W9W9W7W7W76CW9W96CW9W9W96CW9W7W9W7W9W9W<W9W9W96AW9W9W9W96A6B6BW<W9W<W96BW9W9W9W96B6C6CW<W<W<W9W9W96CW9W96CW<W96CW9W<UUTLUUUUTLTL6BTLTMUL6BULULUL6BULTLTL6BTL6BTLUEUETL6BUE6CUE6CUEUE6CTL6DTLUIULUIUITLTLUE6C6CTLUEUETLTLUEUETLTL6B6CUE6CUEUE6CTLUEUE6CTL6DUPS9WQS9WQVU6CVUVU6CX#VUVUW@WQWQWQW+WEW+W+W+W+W+6AW+6AW+W+W+WE6AWE6A6BW+W+6B6CW+W+WE6CW+W+W9W9X#6CX#6CX#X#W<W<W<6CW<6CW<W:W:W:W<W<W:W:6BW:W:6BW:W:W:W:W<W:W:W:W:W<W)W)W<W<W)W)W<W<W)W)W)6>W)6>W)6?W)W<6?W<W)6?W)W)6?W<W<W<W)W<W)W<WUWUWUX-6=X-X-X-WUWUWU6=WUWU6=6>WUWU6>W1WUWUW1W1WUWUW1WUWU6<6=WXWUWUWXWXT>T>T>6<UI6<UIUI6<UIUIUI6<6=TATAT+6=UC6>UCUC6>UCU?UCU?V1SASZ6=SZX-6=6>VXX*X*6>6?VX6?VXX*X*X*6?VX6?6@6AVXX*X*VX6AVX6AVXVX6AX*6BX*VXVXVX6BWUWUWU6BWU6BWU6CWUWUWAWUWU6BWUWU6BWUWUWU6B6CW1W1TD6CTD6DTDTITDTIS4S4S=S=S46BS4S4SXSXS@6BSXSX6BSXS@SXS@SX6ASXS@S@S@6AS@S@6ASX6BSXTDTDTD6BS.SMS.6B6B6CS.S.6CSM6DSM6DT$SMSMSMSMSM6DSMSM6DT$T$SKT$6D6DSK6ESK6ESK6FSKSKSK6FSKS3S3S36FS3S36FSJS3S36F6G6GSO6HSO6HSGSGSGSGSGSO6H6HSG6I6JSGSGSG6JSGSWSWSWW>W>W>6IW>6I6J6K6KW>6L6MW>W>6MWVW>WV6MWVWVWVWVW4WVW4W4W46KW$6LW$U#U#T-U#T-6KT-T-SJ6KSJ6LS7S7S76LS7SJSJSJS7S76KSJS7S7SJSJSOSOSO6J6JSGSGSGSO6JSOSOSOSISISISO6ISOSISOSISO6ISO6ISOSI6IS86JS86JSISISIS8SIS8S8SI6ISIS8S86IS8S>6I6JS>S>S>SWS>6JSWSW6JSWS>6JS>S>6JTP6KTPV(V(V(6KT=V(T=6KV(V(V(6K6K6LT=T=6LU@T=T=6LSO6M6NSP6NSPSP6N6OSP6PSP6PSPSPS6S66PS6SRS6S6S6S6S6S66OS66O6PSRS6S6S66P6PSRSRSRSRS6SRSR6O6PT1T1U<6PTGTGT;TG6PTGTPTP6PV.TGV.TGV.SPSP6O6PS66PS6S6SRSR6PSRSE6PSESET/6PT/T/6PT06QT0T06QT06R6RT;6S6TT06TT0T0T;T;6T6UT06UT0T;6UTGT;6VT;6VT;T;V.V.6VV.6V6W6XT0T06X6YV.T0T0T06Y6YV.6ZV.T;6ZT0T06ZT;7#T;T07#V.V.SCSESCSESESESS6Z6ZSESSSSSESESE6Z6ZSSSSSSX;6ZXDXD6ZXDXDXDT3T36Z7#T57#T5T5T5T3T5T5T56ZT57#T3T3T37#7#T5T5T5T0T0T07#T0T07#T0T07#T.T.7#T0T.7$T0T07$T0T.T0T.7$T0T0T0T.T0T07#7$7$7%UMUMUM7%UMUM7%V.7&7'7'UM7(UMT07(T0UMT0UMT07(T0UM7(UM7(UMT0UMT0T07(T07(T.T.T.7(UM7)UMV.7)UMUMV.V.7)V.UM7)UMUMUMUMT.UMSE7(SE7)XDXDXB7)7)XD7*7+7+7,XBXBXDXDXB7,XDXD7,XDXDXD7,XDXB7,XBXB7,7-T5T5T/T/T4T4T/T/T4T4T/T/T4T4T/T/T4T4T/T/T4T47(YUYUYUY7Y77(Y7Y7Y7YU7(Y7Y77(Y7YUY7YUY7X.X.X.X&7&7'X&X&X.X.X&X&7&7'X&X&7'X&X&X&X.X.7'7(X.X.X.7(Y4Y4Y@7(7(Y@7)Y@Y4Y4Y47)Y47)Y@Y@7)Y@Y@Y@Y4Y47)Y@Y4Y4Y@Y@Y@Y@Y4Y4Y@Y@7'Y@7'7(Y4Y4Y47(Y4Y47(Y4Y4Y4Y'Y,Y'Y'Y'Y'Y'7'Y'7'Y'Y,Y'Y,Y'Y,Y'Y,Y,Y,YH7%YUYU7%YUYUYUYHYHYUYHY3Y37$Y,Y,7$Y,Y,Y3YUY3Y3Y,Y,7#Z&Y,7#7$Z&7$Z&Y,7%7%YLZ$Z$YVYVYLYLYLYV7$YVYL7$YLYLYV7$YVYV7$YG7%YGYV7%YVYG7%7&YXYXYNYN7&YNYN7&7'X.YN7'YNYG7'7(YGYG7(7)YGYG7)YNYNYNX.7)X.X.YNYNX.X.YNYNYN7(7(X.X.X.YNX.7(X.YNX.X.X.X.YGYGYGYGX.YGYGYG7%YG7&YG7&YGX.YGYGYGX.YG7%X.X.YGYGX.7%X.YGX.YGX.X.WOX.X.X.X.7#X.X.7#X&X.X&X&X&WGW=W=W=WGWG6Y6ZW=W=W3W=V=V=U>U>V=V=U>U>V=V=U>U>V=V=U>U>V=V=U>U>V=V=U>U>V=V=U>U>6RTLUT6S6STLTLTLV?V?V?6SV?V?6STLV?V?TLTLUGUGTL6RTL6RTLTLUGUGTLUGV;V9V;V9V96PV;V;V;V;6PV;V9V96P6QV9V9V9V;TL6P6QUG6QUGTLTLUGUGTLTLUGUGTL6PUGUGUG6P6P6QTLTLV;6QTUTUV;V;TUTUUKUK6P6QUKUK6QUKUKUKUPUKY.Y.6PY.YI6PYIYI6PY'Y.Y'Y.Y.Y.6PY.Y.6PYIY.Y.YIYIY.Y.6O6P6PYIYIYI6P6QYIYI6Q6RYIYIY.Y.6RY.YI6RYIYIY.Y.YIY.6QY.YIY.Y.Y.YIYIYI6PYIYI6P6QYIYIY.Y.6QY.YI6QYI6RYIY.YIY.Y.6QY.6RY'Y'Y.Y.Y'6QY.Y.Y'Y'Y'6QY'6QY.Y.Y.6Q6RY.6R6SY.Y.Y'Y'Y.Y.Y'Y.Y.Y.Y'Y'Y.Y.6PY'Y.Y'Y'Y'6PY'6PY.Y.Y.Y'Y'6PY.Y'Y'6PY'Y.6PY.6QY'Y'6QY'Y'Y'Y'6QY'Y,Y'Y'Y,Y'Y,6PY'Y'6P6QY'Y'6QY'Y,Y,Y'6QY,Y,Y'Y,Y'6PY'Y'Y'Y'Y'Y,Y'Y'Y,6OY'6OY,Y,Y,Y,6OY,6OY,6PY,Y'Y,Y'Y'Y'6OY,Y,6OY,Y,Y,Y,Y'Y,Y,Y.Y'Y.Y.Y'Y'6MY'Y.6M6NY'Y'Y'Y'Y,Y'Y,Y'6MY'Y'6MY,Y'Y,Y'6M6MY,6NY,Y'Y'Y'6N6NY,Y,Y,Y'Y'Y'6N6NY,Y,Y,Y,Y,6NY'6N6OY,Y,Y.Y.Y.Y'Y.Y'6NY'Y.6NY.6OY.Y.6O6P6P6QY'Y'6QY'Y'Y'Y'Y'6Q6R6RY,Y'6SY,Y,6SY,Y'6SY'6TY,Y,6TY,Y'6TY'6U6UY'Y.6VY'Y'6VY'6VY'6W6X6XY'Y.Y.Y'6XY'Y,6X6YY,Y,YI6YYIYIY.Y.6YY.Y.6YYIYIY.YAY.Y.YAYA6XYAY.Y.Y.6XY.Y.YIYI6W6XYIYI6X6YYI6Z6Z7#Y.7$7$7%YIYI7%7&YIYIYAYA7&7'YAYA7'YIYAYAYA7'YAY,Y,Y,YA7&YAY,Y,Y,7&Y,YI7&YIYIY,Y,7&Y,YI7&YI7'Y,7'Y,7(YI7(YIYIYI7(YIYIYI7(YIYI7(Y,YIYI7(Y,7)7*7*7+YIYIYIYI7+7,7,7-YIYIYIZ)YIYIZ)Z)7,Z)YI7,YIZ)Z)Z)Z)7,Z)YIYIYI7+Z)7,Z)Z)Z)Z)7,Z)7,YIYI7,YIYIYIZ)Z)YIYI7+YIYIYIYIYMYIYIYMYM7*YMYIYIYM7*YIYIYMYMYMYIYMYMY,Y,Y,7(7(Y,YIYIYI7(YIY,YIYIYI7(7(Y,Y,Y,YIYI7(YIYIY,YIY,7'Y,Y,Y,Y,Z&7'Z&7'Z&Y,Z&Y,7'Y,Y,Y,7'Y,7(Y,Z&Y,Y,7'Z&7(Z&7(Z&Z&Z&Z&Z&7(Z&7(Z&Y,Y,Y,YKYKYKY,Y,Y,7'Y,Y,YK7'Y,7'Y,Z&Y,Y,Y,7'Y,Y,Y,7'7'Z&7(7)7)Z&7*Z&YIYIYI7*YIYIYIY,YIYI7)Y,YI7)7*Y,7*Y,7+Y,YI7+YIY,7+Y,Y,Y,YIY,Y,Y,7*Y,7+Y,7+Y,YIYIYIYIYI7+YI7+YIY,7+Y,YI7,7,Y,YI7-Y,Y,7-7.Y,Y,Y,7.YI7.Z)Z)Z)7.Z)7/Y,Y,7/70Y,Y,Z)Z)7/Z)Z)Z)Y,7/Z)Z)Y,7/Z)Z)7/Y,Z)Z)Y,Y,Z)Z)7.7/Z)Z)Z)Z)Y,Y,Z)Z)7.Z)Y,Y,Z)Z)Y,Y,Z)7-Y,Y,7-Z)7-Z#Z)7.Z)7.Z)7/Z)Z)7/Z#Z#Z#7/Z#7/YZYZYZ7/YZ70YZ70YMZ)Z)Z)Z)70Z)YMZ)7071Z)Z)71Z)Z)YM71YMZ)Z)Z)YMZ)Z)70YM70YMYMYMYMZ)YM70Z)YM70YMZ)Z)YMYMZ)Z)7/70Y,7071Z#Y,71Z#Z#7172Z#Z#Y,72Y,7373Z#Z#Z#7374Y,Z#74Z#Z#Z#YMY?74Y?74Y?YMYMY?74YMYM7475YM76YM76YM77Y?Y?Z'77YM7778Y?78Y?YMYMY?Y?YM78YM78YMYM78Y?YM79YMYM797:7:Y?YM7;YMYMYM7;7;Y?Y?Y?YKYKZ#Z#YKYKZ#YKYKZ&YKYKZ&Z&78Z&Z&Z&7879Z&Z&797:7:7;YKYK7;YKYKYK7;Z&7<Z&7<Z&YK7=Z&Z&YK7=YKYKYK7=YK7=Y-Y-Y-7=Y-Y-YKYKZ#Z#Z#Z#Z#7<7<Y07=Y07=7>Y0Y0Z#Z#7>Z#Z#7>7?Y0YKYKZ#YKY-Y-7>Y-Z#Y-Z#Z#7=Y-Z#Z#Y-Y-7=Y-Z#7=Z#Y-Z#Y-Z#Z#Z#Z#Z#7<Z#7<Z#Y0Y-Y-Z#Y07;Y-Y0Y-Y-Y-Y07;Y07;Y0Y07;7<Y0Y07<7=Y0Y07=Y-Y0Y07=Y0Y0Y0Y-Y-7=Y-Y-Y-7=Y-Y-Y-Y-7=Y-7=Y0Y0Z#Z#7=Z#Y?Y?7=Y?7=7>Y?Y?Z#7>Y?Y?Y?Y07>Y07>Y0Y?Y?Y?Y?Z'7>7>Y07?7@Z'Z'Z'7@Z'Z'YP7@Z'Z'YPZ'Z'Z'Z'7?7?Z'YPZ'Y-Y-Y-7?Y-Y-Y-Y07>7?Y0Y0Y07?Y0Y07?7@Y0Y0Y-Y-Y-7@Y-7@YYYYY-7@Y-7AYYYY7A7BYYYY7BYYY-Y-Y0Y07A7BY0Y0Y0Y07B7CY07CY+Y+Y0Y07CY0Y0Y0Y07CY/Y/Y+Y+Y/Y/7BY/Y07BY0Y/YEYEZ&Z&Z&7AZ&YEYE7AY<Y<YEYEY<Y<YYYYYY7@YYYY7@7A7AY<Y2Y27AY2Y/Y2Y<Y<Y2Y2Y<Y<Y2Y<Y27?Y2Y<Y<Y<Y2Y<Y2Y<Y2Y<Y2Y<7=Y<7=Y<Y2Y<7=Y<Y/7>Y/7>Y/Y/7>7?Y<Y/Y<Y<Y/Y/7>Y/Y/Y/Y<Y<Y/Y/YGYG7=7>YGYGY<Y<Y<Y<7=Y<Y<Y<Y<Z(Y<Y<Z(Z(Y<Y<Z(Z(Y<7:Y<Y<7:YGY<Y<7:YG7;YGYGYGY<Y<YGYG7:7;YGYGY<YGY<YG7:YGYGYGYG7:Z%Y)Y)Y)VT79VQVQ797:VQVQVNX(VNX(VNVN797:7:X(X(X(X'W3X'W3W3W3W379W379X'X'79X'X'X'797:WUWUW%W%WUW%797:WUWU7:X,WUWUX,X,WU7:U>TTU>7:U>U>U>TTU>79TTTTTUTUTLTLTUTUTLTLTUTUU0U07677U0U0TLU077U07778TLTL78TUU0U0TUTUU0U07778U0U0TUTUU0U0TUTU7778TUTUV;V;TU77TU7878V;79V;797:V;V;TUTUTU7:TUTU7:7;TUTU7;7<TUTU7<7=TUTU7=7>7>V;7?V;7?V;V;V;TUTUUPUP7>U57?U5U4U4TLU4U0UPU0UPU0UPU0UPUPUPU97<U97<U9U9V;7<V;7=V;7=V;7>TUTUTU7>7>V;7?V;TU7?TU7@TUV;TUV;7?V;TUV;TUV;TUV;V;7>V;7?UPUP7?7@7@UP7AUPV;V;V;UP7@UPUPUPV;UPUPUPYB7?YBY>7?YBY>Y>YBYB7?Y>YB7?Y>Y>Y>YB7?YBY>7?Y>YBYBYBYBYIYB7>YBYBYIYIYBYIY>YBYBYBYIYIY(Y(YIYIYI7;YIYIYBYBYIYB7:YI7:YIYIYIYBYIYBYIYIYIYBYBYIYIYBYBYIYIYBYIYIYI7677YIYI77YIYMYMYI77YI77YI78YIYIYFYIYMYM77YM77YMYIYMYMYMYM77YM77YMYMYMYM77YO77YMYOYMYOYO777878YMYMYM78YPZ'Z'YPYP78YP78YPZ'YPYPYPZ'YPYPYPZ'77Z'YPZ'Z'Z'YJZ'7676YJZ'YJYP76YPY+YWYWYW76YSYSYWYSYW7576YS76Y/Y+7777Y/Y+Y+Y/Y/Y+Y+Y/Y/Y+Y/YT7576Y/76Y/YTYTY/Y/YTYTY/Y/Y/7575YTYTYTY/Y/757676YTYTYTY/Y/76Y/YTY/YTYT75YTYTYTY9Y975Y9Y*Y9Y*Y*Y*Y*Y*74Y*74Y*Y*Y9Y9Y9X#Y973X#X#73X#X#X#VWVWX#73VW7374X#74VWX#VWX#74X#X#7475X#X#X/VWX/X/VWVWVW74VWVW7475VSWSVS75VSVSVS75VS75VSVS75WSWSW,WSWS75WSWSWSVSWSWSWS74757576VSVSWSWSVSWSWPVNWPWP74VNWP75VNVN75WY75WYWYWYVNVN7576VN76WYWY76WYWYWYVNVN7677VN77WYWY7778WYWYVNWYWYWYW#77W#WYWY77WYWY7778WYWYW#WYWYWYW#WYWYWYVNVNW#W#VNVN75VNW#VNW#W#VNVNVN7474WY75WYWY75W,W,75WYW,W,WYWYW,W,WYWYWY74WY74WYWYWYWYW,W,WYWY7374WYWY74W,WYWYW,W,WYWYWY73WYWY7374WYWY747575WYW,W,WY75WY76WYWYW,W,W#W#WY75W#W#75WYW,W,7576W,W,W,7676WYWYWY76WYWYWYW,76W,W,76WYW,W,WYWYW,WYWYWY75WYWYWYWY75WYWYW#W#W,W,W#W#73W#W#W#7374W,W,7475W,W,75W,W,W,W,W,W#W#W#W#W#74W#W,74W,W,W,W,W#WYWY73WYW,W,W,W#WYWYW#W#71W#W#W#7172WYWYW#727374WYWYWYW#W#WYWYWY72WYWYWYWS72WS73W,W,73WSW,W,7374W#WYW#WYWY73WYW#W#W#W#73W#W#WYW#WY72WYWY72WYWYWYWYW#WYWYWYWY7172WYWY72W#72W#W#W#W#W#WYWYW#W#71W#W#W#717272W#WYWYW#W#W#72W#W#727373W#WY747475WYWYWYWYW#WYWYWYWY74WYWYWY74WY7475W#WYWYWY757576W#W#7677W#W#77W#W#W#WYWYWY77WY7778W#78W#W#W#WYWYW#WYWYWYW#W#WYWY767777W#W#W#W#77W#W#WY7778W#WY78WY7979W#7:W#VNVNW#W#VNVNW#W#VNVNW#78W#78W#W#78VNW#W#VNW#W#W#WUWUWU77WUWU77WUWUWUWU77WUWU77WM77WMWMWMWMWM77WMWUWMWMWMWU76WMWMWMWMWT76WT76WTWTWMWMWM767677WTWTWMWMWM77WM7778WT78WTWTWTWMWMWM78WM78WTWT78WTWTWT78WTWTWTWU78WMWMWUWM7879WM79WM7:WMWMWM7:WMWM7:7;WT7;WTWTU>UYU>UYU>7:U>7;U>U>U>7;U>7;U>U>U>UYUYUYU>U>7:7;U>U>7;V:U>U>V:V:U>U>V:V:U>79V:V:U>U>79V:U>U>V:V:U>U>V:V:U>77V:V:77U>V:V:U>77UYUY77U>UYUY7778UYUYV:UYV:78V:UY78U/UYUY7879UYUYUYTTUYUYTTTT77TTTTTTUY77U/U/7778U/U/78U/U/U/U/78U/U/7879U/U/TTTTUUUUTTTTUUUUTTTT77TTUU77UUUUUU77UUUU77TTUU78TTTT78TTUUTTUUUUUPUP77UPTLUP77UP77YBY>YBY>YBY>777778S:79797:S:S:S:7:7;S;S0S07;7<7<S0S:S:W-W-7<7=W-7=7>WFW-W-7>W-WFW-WFWFY9Y9W(7=7=W(W(W(Y9Y9W(7=Y9Y97=Y9W-W-WFW-W-W-WFWFW(W(7;7<W(W(7<7=VZ7=VZW(7=W(W(W(VZVZVZW(VZVZVZW(VZW6VZW6W6W6W6W/W679W6W6W(W(79W(79W(W6W(VO79VOVOW(W(79W(VOW(VOW(W6W6W.78W.W.78W6W.W.W.W6W6W6W/W/W6W/W/W/W6W6W675W6VOW6VO7475W(W(W(VUW(VUW(74W(VU74W(W(W(Y9Y9Y974VU74VUVUY9Y9VUY9X#73X#X#7374X#X#VUVU747575X#VUVU75X#76X#X#X#VUX#VU7576X#X#X#VUX#X#X#7576X#X#X#76X#X#VUVUX#X#VU7575X#VUX#VUX#VUVU7475VUVUVUVUW@W@X#X#74X#X#X#VUX#VU73VU74VSVSX#VSX#73X#X#VSVS73VSX#X#X#7373VSVSVSW773W7W773WSW7WSW773W7W77374W7W77475W77676W,W777W,W,77W,77W,W778W,W,78W,W778W7W778W,W7W,W7W7W,W7W,W7W,W,W7W9W7W9W775W7W7W9W975W975W9W7W7W775W9W97576W7W7W9W9W7W7W9W975W975W9W7W9W7W775W975W9W9W9W7W9W7W974W9W9W9W7W9W7W773W<W<W<W9W9W97373W<W<W<73W<W9W9W9W<W9W9W9W9W972W972W<W<W9W<W<W<W9W9W971W9W9W9W<W970W9W970TLUU71TM7172UL72UL737474TLUE75UE75UEUETLTL75TL75TLUE76UETLUE76TLTL76TL76TLTLTLTLTLUE767677UE78UE78UEUE78TL79TLUE79UEUE797:UEUETLUPTL7:TL7:UPUP7:X#VUVUX#X#7:7;W+W+W+7;W+WEW+W+7:WE7;WEWEWE7;7<WEWE7<7=WEWE7=W+WEW+W+W+WE7<WEW+W9W97<W9X#7<X#W9W<7<W<7=W<W:W<W:7<W:W<W<7<WUW:7=W)W<W)7=W<W<7=W<7=W<W<W<W<W<7=W<W)7=W)7>7>W<W<W<WU7>7?7@WUWUWU7@WUWUWU7@WU7@W1W17@W1W1W1WUWUWUWXWUWXWXWX7>UIUIUIULUL7>7?UL7?7@UITHTHTATATHTHTATHT+T+UCUCUCUCUC7=UCUC7=UCSA7=SASZX-X-X-7=7=VXVXVX7=X*VXVXX*X*7=X*7=X*X*X*X*X*7=X*X*X*X*7=X*X*7=7>X*VXX*VXX*X*VXX*VX7<VXVXX*X*7<X*VX7<VX7=VXX*VXX*WUW1WUW1WUWUWU7;WU7;WU7<WU7<WUWUWAWA7<WAWU7<W1W17<W1W1W17<TI7=TI7=TITDTI7=S4S4S4SX7=S@7>7>SXS@7?S@7?S@S@S@7?S@S@SXSX7?SXS@7?S@S@TD7?TD7@S.SMS.S.S.SMS.S.SMSM7>7?SMSM7?SMS.SMS.SMSM7>SMSMSMSMSM7>7>7?T$T$T$SK7?SKT$7?T$7@T$7@T$7AT$7A7BSKT$SKSKSK7ASKT$SKS3S37A7BS3S3SJSJS3S3S37A7AS3SO7BS3SOS3SO7ASOSOSOSO7A7BSG7BSGSOSOSOSGSOSGSO7ASOSO7ASOSOSOSGSGSWSWW>W>W>WVW>W>W>7?WV7?WVWV7?WVWVWVW>W>7?W>WV7?WVWVW>W>7?7@W>W>WVWVW>WVW>WVW$W$W$W?W$W?W?W?7<U#T-U#SJSJSJ7<SJ7<SJSJS7S77<7=S77=7>SJSOSOSO7>SGSG7>SGSO7>SOSG7>SISISISISI7>SISISISOSISOS8SOS8SOS8SOS8SG7;SG7<SISISIS8S8S8S8S>SISIS>S>SISIS>S>S>78S>S>78SWS>79S>S>S>SWV$TPV$78V$TPV$TPV(V(V(7777U@T=78V(V(T=T=V(V(77T=V(7778T=U@U@78U@SPSOSP78SP78SPSP78SOSPSPSP78SPSPS>S>SPSPS>S>77S>SP77SPSPSPS6SPSPS6S6SRS6S6S6S6SRSRSR74SR7475SRSRS6S67576S676SRSRU<U<U<76U<U<76U<U<TGTGTGT;TGT;TG747576V.SD76SDSDSPSP76SPS6S6S676SRSR76SRSESDSESET/75T/7676T077T077T0T/T0T0T0T077T077T0T0T0T;T077T077T0T0T;T;77T;T0T;T0T07677T0T0T;T;77T;T077T0T;T;77T;78T;TGT;T;T;T;T;7777V.78V.78V.797:V.V.7:V.T0T0T;T0T0T079V.79V.V.V.T0T079V.T0T0T0V.78V.V.V.T;T;7879T;T;79T;T079T0T0T0T079V.SESESSSSSESESESSSESE7778SE78SESSX;X;7879X;X;797:T57:T5T5T3T37:7;7;7<T5T5T5T3T5T3T5T3T5T5T3T37:T3T57:T5T5T0T0T7T7T0T0T7T7T0T.T.T.T.T0T.T.7677T.T.T0T077T0T.77T.T.UMUMT0UMV.V.UMV.T075T0UMUMV.UMUMUMV.UM74V.V.74V.UM74UMUMV.V.UMV.T0UMT0UM72UM73UM7374UMUM74UMT075T0T0T0UMT0UMT0T073T.T.T.T0T073T073UMT0UMT0UM73UMV.V.UM7373V.UM747475UMUMSSSSSE75SESSSSSS74XBXBXBXDXD74XD7475XBXB75XD76XD76XDXBXBXDXBXBXBXDXDXB75XDXD7576XDXD76XD7677XBXB7778T5T5T.T.T5T.YUY7YUYUYUY7YUYUY7Y7YUYUY7Y7YUY7X.X.X&X&X.X.X&X&X&X.X&X&X.X.X&X&X.X&X&X&X.X.X&X&X.X.X&X&X.X.X.X&Y4Y4Y@Y@Y4Y@Y4Y@Y4Y@Y@Y@Y4Y4Y@Y@Y4Y4Y@Y@Y4Y@Y@Y@Y4Y@Y@Y@Y4Y@Y4Y4Y@Y@Y4Y4Y@Y@Y4Y4Y4Y@Y4Y4Y@Y@Y4Y4Y'Y,Y'Y,Y'Y,Y'Y,YHYHYUYUYHYHYUYUY3Y3Y,Y,Y,Y3Y,Y,Y,Y,Y,Z&Z&Z&Y,Z&Y,Y,Y,Z&Z&Z&Y,Z&Z&Z&Y,Z&YLYLZ$Z$YLYVYLYVYVYVYLYLYVYGYVYVYGYGYVYGYVYVYVYGYVYVYVYGYNYNYXYXYNYNYXYNYXYXYXYNYNYNX.X.YNYNYNX.YNYGYNYNYGYNYGYGYNYNYGYGYGYNYGYGYNYNYGYGYNYNYNYGYNYNX.X.YNX.X.X.YNYNX.X.YNX.YNX.YGYGYGX.YGX.YGX.YGYGYGX.YGYGX.X.X.YGX.YGX.X.X.X&X.X&X&X&WGWGW=W=WGWGW=W=UTTLUTUTUTTLUTUTUTTLUTTLV?V?V?TLV?V?TLTLUGUGTLUGTLUGTLTLV9V;V9V;V9V9V9V;V9V9V;V;V9V9V;V;TLUGUGUGTLUGUGUGUGUGTLUGUGUGTLUGUGUGUGTUUGUGTLTLUGTUTLTLV;V;TUV;UKUKUKUPUKUKUPUPUKUKUPUPY.Y.YIY.Y.Y.YIY.Y.Y'Y.Y.Y.Y.YIYIY.YIYIYIY.Y.YIYIY.Y.YIYIY.YIYIYIY.Y.YIY.Y.Y.Y.YIY.Y.YIYIY.Y.YIY.Y.Y.YIY.Y.Y.YIY.YIYIYIY.Y.Y.YIYIY.Y.YIYIY.Y.YIY.Y.Y.YIYIY.Y.YIY.YIY.YIY.Y'Y'Y.Y'Y.Y'Y.Y'Y'Y'Y.Y.Y'Y'Y.Y.Y'Y.Y.Y.Y'Y'Y.Y.Y'Y.Y.Y.Y'Y'Y.Y.Y'Y'Y.Y.Y'Y'Y.Y'Y.Y'Y.Y'Y.Y'Y.Y.Y'Y'Y.Y.Y.Y'Y.Y.Y.Y'Y.Y'Y.Y'Y.Y.Y'Y'Y.Y'Y'Y'Y,Y,Y,Y'Y,Y,Y'Y'Y,Y,Y'Y'Y,Y,Y'Y'Y,Y,Y,Y,Y'Y'Y'Y,Y'Y,Y'Y'Y,Y,Y'Y'Y'Y,Y,Y,Y'Y'Y'Y,Y'Y'Y'Y,Y,Y,Y'Y'Y,Y,Y'Y'Y,Y,Y'Y'Y.Y.Y.Y'Y'Y'Y.Y'Y.Y.Y'Y,Y'Y'Y'Y'Y'Y,Y'Y,Y'Y'Y,Y,Y'Y,Y'Y,Y'Y,Y'Y'Y,Y,Y'Y,Y'Y,Y'Y,Y,Y,Y'Y,Y,Y,Y,Y'Y'Y'Y'Y'Y,Y,Y'Y,Y,Y,Y.Y.Y.Y'Y.Y'Y.Y.Y.Y.Y.Y'Y.Y.Y.Y'Y.Y'Y'Y'Y.Y'Y.Y'Y.Y'Y'Y'Y'Y'Y.Y'Y'Y'Y'Y,Y'Y,Y,Y,Y'Y,Y'Y'Y'Y,Y'Y,Y,Y,Y,Y'Y'Y,Y,Y,Y'Y,Y'Y'Y,Y,Y'Y,Y'Y,Y'Y,Y'Y,Y'Y,Y.Y'Y.Y'Y'Y'Y.Y.Y'Y'Y.Y'Y.Y'Y.Y'Y'Y'Y.Y.Y'Y'Y.Y.Y'Y'Y'Y.Y'Y'Y'Y,Y'Y,Y,Y,Y'Y,Y,Y,Y.Y.YIYIYIY.YIYIY.Y.YIYIY.Y.Y.YAY.YAY.Y.Y.Y.Y.YIY.Y.YIYIY.Y.YIYAY.YAYAYAYIYAYIYAYAYAY.Y.YAYAY.YAY.YAY.YAYAYAYIYIYAYAYIYIYAYAYIYIYAYAYIYAYAYAYAYIYAYAYIYAYAYAYIYIYAY,YAY,YAY,YAY,Y,Y,YIYIYIY,YIYIYIY,YIY,YIY,YIY,Y,Y,YIYIY,YIY,Y,Y,Y,Y,YIY,YIYIYIY,YIYIYIY,Y,YIYIY,Y,YIYIY,Y,YIY,YIY,YIYIY,YIYIYIYIY,YIYIY,Y,YIY,YIYIYIZ)YIYIZ)Z)Z)Z)Z)YIZ)Z)Z)YIYIZ)Z)Z)YIZ)YIZ)Z)Z)Z)YIYIZ)YIZ)YIYIZ)Z)Z)Z)Z)YIZ)Z)Z)YIZ)YIYIYIZ)Z)YIYIYIYMYIYMYMYIYMYMY,Y,YIY,Y,Y,YIYIYIY,YIYIYIY,YIY,YIY,Y,Y,YIYIY,Y,Y,Y,YIY,Y,Z&Z&Z&Y,Z&Y,Z&Y,Z&Y,Z&Y,Z&Y,Z&Y,Y,Y,Z&Y,Y,Y,Z&Y,Z&Z&Z&Z&Z&Y,Z&Y,Z&Y,Z&Y,Z&Y,Y,Y,Z&Y,Z&YKY,YKYKY,Z&Z&Z&Y,Z&Z&Z&Y,Y,Y,Z&Y,Y,Y,Z&Z&Z&YKYKZ&Z&YKYKY,Y,Y,Z&Y,Z&Z&Z&YIYIYIY,YIY,Y,Y,YIY,Y,Y,YIY,YIY,YIY,YIY,YIY,YIY,YIYIYIY,YIY,Y,Y,YIY,YIY,YIY,YIY,YIY,YIY,YIYIYIY,YIY,Y,Y,YIY,YIY,Y,Y,YIY,YIY,YIY,Y,Y,Z)Y,Y,Y,Y,Z)Y,Y,Z)Z)Y,Y,Z)Y,YIYIZ)Z)Z)Z)Y,Y,Z)Y,Z)Z)Y,Y,Z)Z)Y,Z)Z)Z)Y,Z)Z)Z)Y,Y,Y,Z)Y,Y,Y,Z)Y,Y,Z)Y,Y,Y,Y,Z)Y,Y,Z)Z)Z)Z)Y1Y1Y,Y,Z)Z)Y,Y,Z)Z)Z)Z#Z)Z#Z#Z#Z)Z#Z)Z#Z)Z#Z)Z#Z)Z#Z)Z#Z#Z#YZZ#YZZ#Z)YZYZYZYZYZZ)YZZ)YZZ)Z)Z)Z)YMZ)YMZ)YMYMYMZ)YMYMZ)Z)YMYMZ)Z)YMYMZ)YMZ)YMZ)Z)Z)YMZ)YMYMYMYMZ)YMYMZ)Z)Z)YMZ)Z)YMYMZ)YMYMYMY,Y,Y,Z#Y,Y,Y,Z#Y,Y,Z#Z#Y,Y,Y,Z#Y,Y,Z#Z#Y,Z#Y,Y,Y,Z#Z#Z#Y,Z#Z#Z#Y,Y,Y,Z#Y,Y,Z#Z#Y,Z#Z#Z#YMY?Y?Y?YMY?YMYMY?Y?Y?YMY?Y?YMYMY?Y?YMY?YMY?YMY?YMYMYMY?YMY?YMYMZ'Y?Z'Z'YMY?Y?Y?YMY?Y?Y?Y?Y?YMYMYMY?YMYMYMY?YMYMY?Y?YMYMYMY?YMYMYMYMY?Y?YMYMY?YMY?Y?YMY?Y?Y?YMYMYMY?Y?Y?YMYMYMY?Z&Z&YKZ&Z&Z&YKYKZ&Z&YKYKZ&Z&YKYKZ&Z&YKZ&YKZ&YKYKZ&Z&YKYKZ&Z&YKYKYKYKYKZ&Z&Z&YKZ&YKZ&YKYKZ&Z&YKZ&Z&Z&YKYKYKYKY-YKYKYKYKY-Y-YKY-Y-Z#Z#Y0Y0Z#Z#Z#Y0Z#Y0Y0Y0Z#Z#Y0Y0Z#Z#Y0Y0Z#Z#Y0Y0Z#Y0Z#Y0Z#Y0Y0Y0Z#Y-Z#Y-Z#Y-Z#Z#Z#Y-Z#Z#Z#Y-Y-Y-Z#Z#Z#Y0Z#Z#Z#Y0Y0Y-Y0Y0Y0Y-Y0Y0Y0Y-Y0Y0Y-Y-Y0Y0Y-Y-Y0Y0Y-Y-Y0Y0Y-Y-Y0Y0Y-Y-Y-Y0Y-Y-Y0Y0Y-Y-Y0Y-Y-Y-Y-Y0Y-Y-Y0Y0Y-Y0Y0Y0Z#Z#Z#Y?Y?Y?Z#Z#Z#Z#Y?Y?Z#Z#Y?Y?Z#Y?Z#Y?Y?Y0Y0Y0Y0Y0Y?Y0Y?Z'Z'Z'Y0Z'Z'Z'Z'Y0Y0Y0Y0Y0Z'Y0Z'Z'Z'YPYPZ'YPYPYPYPYPZ'Z'Z'YPYPY-Y-Y0Y0Y-Y-Y-Y0Y-Y-Y0Y0Y0Y-Y0Y0Y-Y-Y0Y0Y-Y0Y0Y0Y-Y-Y-YYY-Y-YYYYY-YYY-YYY-YYY-Y-YYYYY0Y0YYY0Y0Y0Y0YYY0Y0Y-Y-Y0Y0Y-Y0Y0Y0Y0Y0Y0Y+Y0Y0Y+Y+Y0Y+Y+Y+Y0Y0Y+Y+Y0Y0Y0Y/Y+Y/Y+Y+Y0Y0Y0Y/YEYEZ&YEYEYEY<Y<YYYYY/Y/YYYYY/Y/YYY/Y/Y/Y<Y<Y2Y2Y2Y2Y/Y2Y2Y<Y2Y2Y2Y<Y<Y<Y2Y<Y2Y<Y<Y<Y/Y/Y/Y<Y/Y<Y/Y<Y/Y/Y<Y<Y<Y/Y<Y<Y/Y/Y<Y/Y/Y/Y<YGY<Y<YGYGY<YGY<Y<Z(Z(YGYGY<Y<YGYGY<YGY<YGY<YGY<Y<Y<YGYGYGY<YGYGYGY<Y<YGYGY<YGYGYGZ%Z%VTVTVTVQVTVTVQVQVTVQVQVQVNVNX(X(VNX(X(X(VNVNVNX(W3W3W3X'W3W3X'X'W3W3X'X'W%W%WUWUW%W%WUW%WUX,WUWUX,X,WUWUX,X,WUWUWUX,WUX,U>TTU>TTU>TTTTTTTUTUU0U0TUTUU0U0TLU0TLU0TLU0TLTLU0U0TLTLTUTUU0U0TUTUU0U0TUTUU0U0TUTUTUV;TUTUV;V;TUTUTUV;TUV;V;V;TUV;TUV;TUV;TUV;TUTUTUV;TUTUV;V;TUTUTUUPTUTUUPUPTUTUUPUPTUTUUPUPTUTUUPUPTUTUUPUPTUTUUPUPTUTUUPUPTUTUUPUPTUV;TUV;TUV;TUV;TUTUTUV;TLTLTLU5TLU5U5U5UPUPU9U9UPUPU9U9V;UPV;UPV;UPV;UPV;UPV;V;V;V;V;UPTUV;V;V;TUV;TUV;TUTUTUV;TUTUTUV;TUV;V;V;TUTUTUV;V;UPV;UPUPUPV;V;UPUPV;V;UPUPV;UPV;UPV;UPV;UPV;UPV;V;UPUPYBYBYBY>YBYBY>Y>YBYBYBY>YBYBYBY>Y>YBYBYBY>YBYBYBYIYIYBYBYIYIYIYBYBYIYBYIYIYIYBYIYIYIYBYBYIYIYBYBYIYIYBYBYMYMYIYMYIYIYIYFYFYFYIYFYMYMYIYMYIYMYIYMYMYMYMYOYMYOYMYOYMYMYOYOYMYMYOYOYOYOYMYMYOYOYMYMYOYOYOYMYPYPZ'Z'YPYPZ'YPZ'YPZ'Z'YPYPZ'YPZ'YJZ'YJYJYJZ'YJYPY+Y+Y+YWYWYSYSYWYSYWYSYWYSYSYSY/Y/Y+Y/Y/Y/Y+Y/Y+Y/Y+Y+YTYTY/Y/YTYTYTY/Y/Y/YTYTY/YTYTYTY/Y/YTYTY/Y/Y/YTY/YTYTYTY/YTYTYTY/Y/Y/YTY/YTYTYTY9Y9Y*Y9Y*Y9Y*Y*Y*Y*Y*Y9Y9Y9X#X#Y9X#X#X#VWVWX#VWVWVWVWX#VWVWX#X#VWVWX#X#VWVWX#X#VWVWX#X#VWVWX#X#VWVWX#X#VWVWX#X#VWVWX#X#WSWSVSVSVSWSVSWSVSWSVSWSWSWSWSW,WSWSVSVSVSWSVSVSWSWSVSWSVSWSVSVSWSWSVSWSVNVNWPVNVNVNWPWPVNVNVNWYVNWYWYWYVNVNVNWYVNWYWYWYVNVNVNWYVNWYVNVNWYVNWYWYVNVNWYWYVNVNWYWYVNVNWYWYVNVNWYWYW#WYWYWYWYW#WYWYW#W#WYWYW#WYWYWYVNVNW#VNVNVNWYWYVNWYVNWYVNWYWYWYWYWYW,W,WYWYW,WYWYWYWYW,W,W,WYW,WYWYW,W,WYWYW,W,WYW,W,W,WYW,WYWYWYWYW,W,WYWYW,W,WYWYW,W,WYWYW,W,WYWYW,W,W,W,WYW,W,W,WYW,W#W#WYWYW#WYWYWYW,W,W,WYW,WYWYWYW,WYWYWYW,W,W,WYW,WYWYWYWYWYW,W,WYWYW,W,WYWYW,WYWYWYW#W#W,W,W#W#W,WYW,W,WYWYW,W,WYWYW,W,WYW,W,W,W,WYW,W,W#W#W#W,W#W,W,W,WYWYWYW,W#WYW#WYW#W#WYWYW#W#WYW#W#WYW#WYW#WYW#W#WYWYW#WYWYW#WYWYWSWSWSW,W,W,WSWSW,W,WSWSW,W,W7W7W,W,W7W7WYW#WYW#W#W#WYWYWYW#WYWYW#WYWYWYWYW#W#W#W#WYW#WYWYWYWYW#WYWYW#W#WYW#WYWYWYW#WYWYW#W#WYW#WYW#WYWYW#W#WYWYW#W#WYWYW#W#WYWYW#W#WYW#WYW#WYWYW#W#W#WYW#WYWYWYWYWYWYW#WYWYW#W#WYWYW#W#WYWYW#W#WYW#WYW#WYWYWYW#WYWYW#W#WYWYW#WYW#W#WYW#WYW#W#W#WYWYWYW#WYWYW#W#WYW#W#W#WYWYW#W#WYWYWYW#WYWYW#W#WYW#WYW#WYWYW#W#WYW#W#W#WYW#W#W#W#W#WYWYWYWYW#W#W#W#WYWYWYWYW#W#W#VNW#W#VNVNW#W#VNVNW#VNWUWUWMWMWMWMWMWUWUWUWUWMWUWUWUWMWUWUWUWMWUWMWUWUWUWUWMWMWMWMWTWTWMWMWTWTWMWTWMWTWMWMWMWTWMWTWTWTWMWMWTWMWMWMWTWTWMWTWTWTWMWMWTWTWMWTWTWTWMWMWMWTWMWMWTWTWMWTWTWTWUWUWMWMWUWMWMWMWMWUWMWMWMWTWMWMWMWTWMWTWMWMWTWMWMWMWMWTWMWMWTWTWMWTWTWTUYUYU>UYU>UYU>UYU>UYUYUYU>UYU>U>U>U>V:V:U>U>V:V:U>U>V:V:U>U>V:V:U>U>V:V:U>U>U>V:U>U>V:V:U>U>UYUYU>U>UYUYU>U>UYUYU>UYUYUYV:UYV:UYV:V:U/U/U/UYU/U/UYUYU/U/UYUYUYTTUYUYU/U/UYUYU/U/UYUYU/U/UYUYU/U/UYUYU/U/UYUYU/U/UYUYU/U/TTTTUUTTTTUUUUUUUUTTUUUUTTTTUUTTTTTTUUTTUUTTUUUUUPUPTLUPTLTLUPUPY>YBY>YBY>YBY>YBS:S;S:S;S:S:S;S;S;S;S:S:S:S:S;S:S:S:S;S:S:S:S;S:S:S;S:S:S:S0S:S:S0S0S:S0S0S0S:S0W-W-WFWFW-WFWFWFW-W-W-WFWFW-WFWFWFW-WFW-Y9Y9W(W(Y9Y9Y9W(W(Y9W(W(W(Y9W(W(W(W(VZVZW(W(VZW(W(W(W(VZW(W(VZW(VZVZW(VZVZW(VZW(W6W(W6W6W6W(W6W(W6W(W6W6VOW(VOW(W(W(VOW(W6W6W.W6W.W.W.W6W6W6W6VOY9Y9W(Y9Y9Y9W(W(W(W(W(VUY9Y9W(W(Y9VUY9VUY9Y9VUY9X#VUX#X#VUVUX#X#VUVUX#X#VUVUVUX#VUX#X#X#X#X#VUX#VUVUVUX#X#X#VUX#VUVUVUX#VUVUX#X#VUX#VUVUX#X#VUX#X#VUVUVUVUX#VUVUVUX#VUX#X#X#X#VUX#X#VUVUVUX#VUVUVUX#VUX#VUX#VUX#X#VSX#X#VSVSX#VSX#X#X#VSX#VSVSVSW7WSW7W7WSWSW7WSWSWSW7WSWSWSWSW7WSWSW7W7W7W,W7W7W,W,W7W,W7W,W7W7W,W,W7W,W7W,W7W7W,W,W7W,W7W,W7W7W7W,W7W7W,W,W7W,W7W,W7W7W,W,W7W,W7W9W7W7W7W9W7W9W7W9W7W7W7W9W9W9W9W9W7W7W9W9W7W9W9W9W7W9W7W9W7W9W7W7W7W9W7W7W7W9W7W9W9W9W9W9W9W<W9W9W<W<W9W9W9W<W9W<W9W<W9W<W<W<W9W9W9W<W9W9W9W<W9W<W9W<TLTLUUTLTLTLUUTLTMULTMULTMTMTMULULULTMULTMULTMTMULULTMULUETLUEUEUETLUETLTLTLUETLTLTLUETLUETLUEUEUETLTLTLTLTLUEUETLTLUETLUETLTLTLUETLUETLTLTLUEUETLTLUETLUETLUEUETLTLUETLTLTLUETLUETLUEUEUETLUEUETLTLUEUETLTLUETLTLUPTLUPTLUPUPUPX#X#VUVUX#X#VUVUX#X#VUX#W+W+W+WEW+W+W+WEW+WEWEWEW+WEW+W+WEWEW+WEWEWEW+W+WEWEW+W+WEW+WEW+W+W+WEW+X#W9X#X#X#W9W9W9W<W<W<W:W<W:W:W:W<W:W<W:WUWUW:W:W:WUW:W:W)W<W)W)W)W<W)W<W)W)W)W<W<W<W)W)W)W)W)W<W)W<W)W<W)W)W<W)WUX-X-X-WUWUX-X-WUX-X-X-WUWUW1WUWUW1W1W1WUWUWUW1WUW1W1W1T>UIUIUIUIULUIUIULULUIULULULUIUIULUIULUIUCUCU?U?UCUCU?U?SASZSASZX-X-X-VXX-VXX-VXX*X*VXVXVXX*VXX*VXX*VXX*X*X*X*VXX*X*X*VXX*X*VXVXX*VXVXVXVXX*VXVXVXX*VXVXX*X*VXX*VXX*VXX*WUWUWUWAWUWAWAWAWUWAWUWAWUWUWUWAWAWAWUWAWUWUWUW1WUW1W1W1TDTITITITITITDTITDTITDTDS4S=S4S4SXSXSXS@SXSXS@S@SXSXS@S@SXSXS@SXSXSXS@SXSXSXS@S@S@SXS@S@S@SXS@SXTDTITDTITDTITDTISMSMS.S.SMSMS.S.SMSMS.S.SMT$SMSMSMT$SMSMSMSMSMT$SMSMT$T$T$T$T$SKT$T$T$SKT$SKT$SKT$SKT$SKT$SKT$T$T$SKSKSKT$SKT$SKT$SKT$SKS3SJSJSJSJS3SJSJS3SOS3SOS3S3SOSOSOS3SOSOS3SOS3SOSOSGSGSGSOSOSOSGSOSGSOSOSOSGSOSOSGSGSOSOW>W>WVWVW>W>WVWVW>WVWVWVW>W>WVW>WVW>WVWVWVW>WVWVW>WVWVWVT-U#T-U#SJS7SJS7SJS7SJSJS7S7S7SJS7S7SJSJS7S7S7SJS7S7SJSJSOSGSOSGSOSGSGSGSOSGSOSGSOSOSOSISISISOSISGSGSGSISGSISGSIS>SWS>S>SWSWS>SWSWSWS>S>V$TPTPTPV(V(V(T=T=V(T=T=T=U@T=T=V(V(T=T=V(T=T=T=V(V(T=T=U@U@T=T=SOSOSPSOSPSOSPSPSOSOSOSPSOSPSPSPS>S>SPS>SPS>SPSPS6S6S6SRSRS6SRSRS6S6S6SRS6S6S6SRS6S6SRSRS6S6SRSRU<U<U<T1U<U<T1U<TPTPTPV.TPTPV.V.TPV.V.V.SPSPSDSPSDSPSDSPS6SRS6S6SDSRSDSRT/T/T0T0T/T0T/T/T/T/T0T0T0T0T/T0T/T0T/T0T0T0T;T;T0T;T0T0T;T;T0T;T0T;T0T0T0T;T0T;T0T;T0T0T;T;T0T;T;T;T0T;T;T;T0T;TGTGT;TGT;TGT;T;T;V.T;T;V.V.T;V.T;V.T;V.T;V.T;V.T;V.T;T0V.V.T0T0V.V.T0V.T0T0V.V.T0V.V.V.T0T0T0V.T0V.V.V.T;T;T0T0T;T;T0T0T;T;T0T;T;T;T0T;T0V.V.V.SESESESSSESSSSSSSESSSESSX;XDXDXDXDX;XDXDX;X;XDXDX;XDXDXDT3T3T5T3T5T3T5T5T3T3T5T3T3T3T5T3T3T3T5T5T3T3T5T5T3T3T5T5T.T0T.T.T0T0T.T0T.T0T.T.T.T0T.T.UMUMT0UMUMV.UMUMV.UMUMUMV.V.UMV.T0UMT0UMT0T0T0UMT0T0T0UMT0UMUMUMT0UMT0T0T0UMT0T0T0T0T.T.T.T0T.T.T0UMT0UMT0UMUMUMUMV.UMV.V.V.UMUMUMV.UMUMUMV.UMUMV.V.UMUMSESSSSSSXDXDXBXBXDXDXBXDXBXDXBXDXDXDXBXDXDXDXBXDXBXDXBXBXDXDXBXDXBXDXBXBXDXDXBXBXDXDXBXDXDXDXBXDXBXDXBXBXDXDXBXBT5T.T5T5T.T.T5T5",T=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Godthab","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vincennes","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/Kralendijk","America/La_Paz","America/Lima","America/Los_Angeles","America/Lower_Princes","America/Maceio","America/Managua","America/Manaus","America/Marigot","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montserrat","America/Nassau","America/New_York","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/New_Salem","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rankin_Inlet","America/Recife","America/Regina","America/Rio_Branco","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Barthelemy","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Arctic/Longyearbyen","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","Etc/GMT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Etc/UTC","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belgrade","Europe/Berlin","Europe/Bratislava","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Busingen","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kiev","Europe/Kirov","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Mariehamn","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Podgorica","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/San_Marino","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis"];if(W=+W,!(-90<=(Y=+Y)&&Y<=90&&-180<=W&&W<=180))throw new RangeError("invalid coordinates");if(90<=Y)return"Etc/GMT";var S=-1,V=48*(180+W)/360.00000000000006,X=24*(90-Y)/180.00000000000003,Z=0|V,M=0|X,G=96*M+2*Z;for(G=56*U.charCodeAt(G)+U.charCodeAt(G+1)-1995;G+T.length<3136;)G=56*U.charCodeAt(G=8*(S=S+G+1)+4*(M=0|(X=2*(X-M)%2))+2*(Z=0|(V=2*(V-Z)%2))+2304)+U.charCodeAt(G+1)-1995;return T[G+T.length-3136]} true&&(module.exports=tzlookup);


/***/ }),

/***/ "./src/buildDisplay.js":
/*!*****************************!*\
  !*** ./src/buildDisplay.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildDisplay)
/* harmony export */ });
/* harmony import */ var _buildElementsTree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buildElementsTree */ "./src/buildElementsTree.js");
/* harmony import */ var _fullPanelTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fullPanelTemplate */ "./src/fullPanelTemplate.js");
/* harmony import */ var _hourlyTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hourlyTemplate */ "./src/hourlyTemplate.js");
/* harmony import */ var _dailyTemplate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dailyTemplate */ "./src/dailyTemplate.js");
/* harmony import */ var _currentTemplate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./currentTemplate */ "./src/currentTemplate.js");






function buildDisplay(data, settings) {
  const current = (0,_buildElementsTree__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_currentTemplate__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_fullPanelTemplate__WEBPACK_IMPORTED_MODULE_1__["default"])(data.current, settings)));
  current.children[0].classList.add('panel_type_current');
  const hourlyPanels = data.hourly.map((hour) => (0,_fullPanelTemplate__WEBPACK_IMPORTED_MODULE_1__["default"])(hour, settings));
  current.children[0].appendChild((0,_buildElementsTree__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_hourlyTemplate__WEBPACK_IMPORTED_MODULE_2__["default"])(hourlyPanels)));
  const dailyPanels = data.daily.map((day, index) => (0,_fullPanelTemplate__WEBPACK_IMPORTED_MODULE_1__["default"])(day, settings, index));
  const daily = (0,_buildElementsTree__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_dailyTemplate__WEBPACK_IMPORTED_MODULE_3__["default"])(dailyPanels));

  return [current, daily];
}


/***/ }),

/***/ "./src/buildElementsTree.js":
/*!**********************************!*\
  !*** ./src/buildElementsTree.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildElementsTree)
/* harmony export */ });
function buildElementsTree(obj) {
  const element = document.createElement(obj.tag);

  Object.keys(obj).forEach((prop) => {
    switch (prop) {
      case 'tag':
        break;
      case 'classes':
        obj.classes.forEach((cssClass) => element.classList.add(cssClass));
        break;
      case 'text':
        element.textContent = obj.text;
        break;
      case 'attributes':
        obj.attributes.forEach((attribute) => element.setAttribute(attribute[0], attribute[1]));
        break;
      case 'children':
        obj.children.forEach((child) => {
          element.appendChild(buildElementsTree(child));
        });
        break;
      default:
    }
  });

  return element;
}


/***/ }),

/***/ "./src/currentTemplate.js":
/*!********************************!*\
  !*** ./src/currentTemplate.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ currentTemplate)
/* harmony export */ });
function currentTemplate(panel) {
  return {
    tag: 'div',
    classes: ['content__current', 'content__part'],
    children: [panel],
  };
}


/***/ }),

/***/ "./src/dailyTemplate.js":
/*!******************************!*\
  !*** ./src/dailyTemplate.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dailyTemplate)
/* harmony export */ });
function dailyTemplate(panelArray) {
  return {
    tag: 'div',
    classes: ['content__daily', 'content__part'],
    children: [...panelArray],
  };
}


/***/ }),

/***/ "./src/dateConversionWrapper.js":
/*!**************************************!*\
  !*** ./src/dateConversionWrapper.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dateConversionWrapper)
/* harmony export */ });
/* harmony import */ var date_fns_tz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns-tz */ "./node_modules/date-fns-tz/esm/utcToZonedTime/index.js");
/* harmony import */ var date_fns_tz__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns-tz */ "./node_modules/date-fns-tz/esm/format/index.js");


const fixedLocalDate = (date, timeZone) => (0,date_fns_tz__WEBPACK_IMPORTED_MODULE_0__["default"])(date, timeZone)

function dateConversionWrapper(unix, dateFormat, timeZone) {
  return (0,date_fns_tz__WEBPACK_IMPORTED_MODULE_1__["default"])(fixedLocalDate(unix * 1000, timeZone), dateFormat)
}

/***/ }),

/***/ "./src/fullPanelTemplate.js":
/*!**********************************!*\
  !*** ./src/fullPanelTemplate.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ fullPanelTemplate)
/* harmony export */ });
/* harmony import */ var tz_lookup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tz-lookup */ "./node_modules/tz-lookup/tz.js");
/* harmony import */ var tz_lookup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tz_lookup__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dateConversionWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dateConversionWrapper */ "./src/dateConversionWrapper.js");
/* harmony import */ var _unitConverter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unitConverter */ "./src/unitConverter.js");
/* harmony import */ var _assets_icons_humidity_icon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/icons/humidity-icon.png */ "./src/assets/icons/humidity-icon.png");
/* harmony import */ var _assets_icons_wind_speed_icon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/icons/wind_speed-icon.png */ "./src/assets/icons/wind_speed-icon.png");
/* harmony import */ var _assets_icons_cloudiness_icon_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/icons/cloudiness-icon.png */ "./src/assets/icons/cloudiness-icon.png");
/* harmony import */ var _assets_icons_sunrise_icon_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/icons/sunrise-icon.png */ "./src/assets/icons/sunrise-icon.png");
/* harmony import */ var _assets_icons_sunset_icon_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/icons/sunset-icon.png */ "./src/assets/icons/sunset-icon.png");









function fullPanelTemplate(obj, settings, index) {
  const { tempUnit } = settings;
  const timeZoneString = tz_lookup__WEBPACK_IMPORTED_MODULE_0___default()(settings.city.lat, settings.city.lon);

  const stringifyTemp = (temp) => {
    const tempChecked = typeof temp === 'object' ? temp.day : temp;
    return `${(0,_unitConverter__WEBPACK_IMPORTED_MODULE_2__["default"])(tempChecked, tempUnit)} ${tempUnit}`;
  };
  const dateConversionMixin = (unix, format) => (0,_dateConversionWrapper__WEBPACK_IMPORTED_MODULE_1__["default"])(unix, format, timeZoneString);

  const output = {
    tag: 'div',
    classes: ['panel'],
    attributes: [],
    children: [
      {
        tag: 'div',
        classes: ['panel__main'],
        // icon, main, temp, feels_like
        children: [
          {
            tag: 'img',
            classes: ['panel__weather-icon'],
            attributes: [['src', `http://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`]],
          },
          {
            tag: 'div',
            classes: ['panel__text'],
            text: stringifyTemp(obj.temp),
          },
          {
            tag: 'h2',
            classes: ['panel__text'],
            text: obj.weather[0].main,
          },
          {
            tag: 'div',
            classes: ['panel__text'],
            text: `Feels like ${stringifyTemp(obj.feels_like)}`,
          },
        ],
      },
    ],
  };

  if (obj.sunset) {
    output.children.push({
      tag: 'div',
      classes: ['panel__more-info'],
      // humidity, clouds, wind_speed
      children: [
        {
          tag: 'div',
          classes: ['panel__more-info_half'],
          children: [
            {
              tag: 'div',
              classes: ['panel__label'],
              children: [
                {
                  tag: 'img',
                  classes: ['panel__label-icon'],
                  attributes: [['src', _assets_icons_humidity_icon_png__WEBPACK_IMPORTED_MODULE_3__]],
                },
                {
                  tag: 'div',
                  classes: ['panel__text'],
                  text: `${obj.humidity}%`,
                },
              ],
            },
            {
              tag: 'div',
              classes: ['panel__label'],
              children: [
                {
                  tag: 'img',
                  classes: ['panel__label-icon'],
                  attributes: [['src', _assets_icons_wind_speed_icon_png__WEBPACK_IMPORTED_MODULE_4__]],
                },
                {
                  tag: 'div',
                  classes: ['panel__text'],
                  text: `${obj.wind_speed} m/s`,
                },
              ],
            },
            {
              tag: 'div',
              classes: ['panel__label'],
              children: [
                {
                  tag: 'img',
                  classes: ['panel__label-icon'],
                  attributes: [['src', _assets_icons_cloudiness_icon_png__WEBPACK_IMPORTED_MODULE_5__]],
                },
                {
                  tag: 'div',
                  classes: ['panel__text'],
                  text: `${obj.clouds}%`,
                },
              ],
            },
          ],
        },
        {
          tag: 'div',
          classes: ['panel__more-info_half'],
          children: [
            {
              tag: 'div',
              classes: ['panel__label'],
              children: [
                {
                  tag: 'img',
                  classes: ['panel__label-icon'],
                  attributes: [['src', _assets_icons_sunrise_icon_png__WEBPACK_IMPORTED_MODULE_6__]],
                },
                {
                  tag: 'div',
                  classes: ['panel__text'],
                  text: dateConversionMixin(obj.sunrise, 'HH:mm'),
                },
              ],
            },
            {
              tag: 'div',
              classes: ['panel__label'],
              children: [
                {
                  tag: 'img',
                  classes: ['panel__label-icon'],
                  attributes: [['src', _assets_icons_sunset_icon_png__WEBPACK_IMPORTED_MODULE_7__]],
                },
                {
                  tag: 'div',
                  classes: ['panel__text'],
                  text: dateConversionMixin(obj.sunset, 'HH:mm'),
                },
              ],
            },
          ],
        },
      ],
    });
  } else {
    output.classes.push('panel_type_hourly');
    output.children[0].children.splice(-2);
    output.children[0].children.unshift({
      tag: 'h3',
      classes: ['panel__hourly-time'],
      text: dateConversionMixin(obj.dt, 'ccc hh a'),
    });
  }

  if (index !== undefined) {
    output.classes.push(['panel_type_daily']);
    output.children[1].classes.push('panel__more-info_type_daily');
    output.children[0].children.unshift({
      tag: 'h3',
      classes: ['date'],
      text: dateConversionMixin(obj.dt, 'LLL do'),
    });
    output.children.push({
      tag: 'div',
      classes: ['content__daily-temps'],
      children: [
        {
          tag: 'div',
          text: 'Min',
          classes: ['panel', 'panel_type_daily-temps'],
          children: [
            {
              tag: 'div',
              text: stringifyTemp(obj.temp.min),
              classes: ['panel__text'],
            },
          ],
        },
        {
          tag: 'div',
          text: 'Max',
          classes: ['panel', 'panel_type_daily-temps'],
          children: [
            {
              tag: 'div',
              text: stringifyTemp(obj.temp.max),
              classes: ['panel__text'],
            },
          ],
        },
        {
          tag: 'div',
          text: 'Morning',
          classes: ['panel', 'panel_type_daily-temps'],
          children: [
            {
              tag: 'div',
              text: stringifyTemp(obj.temp.morn),
              classes: ['panel__text'],
            },
          ],
        },
        {
          tag: 'div',
          text: 'Day',
          classes: ['panel', 'panel_type_daily-temps'],
          children: [
            {
              tag: 'div',
              text: stringifyTemp(obj.temp.day),
              classes: ['panel__text'],
            },
          ],
        },
        {
          tag: 'div',
          text: 'Eve',
          classes: ['panel', 'panel_type_daily-temps'],
          children: [
            {
              tag: 'div',
              text: stringifyTemp(obj.temp.eve),
              classes: ['panel__text'],
            },
          ],
        },
        {
          tag: 'div',
          text: 'Night',
          classes: ['panel', 'panel_type_daily-temps'],
          children: [
            {
              tag: 'div',
              text: stringifyTemp(obj.temp.night),
              classes: ['panel__text'],
            },
          ],
        },
      ],
    });
  }

  return output;
}


/***/ }),

/***/ "./src/hourlyTemplate.js":
/*!*******************************!*\
  !*** ./src/hourlyTemplate.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ hourlyTemplate)
/* harmony export */ });
function hourlyTemplate(panelArray) {
  return {
    tag: 'div',
    classes: ['content__hourly'],
    children: [...panelArray],
  };
}


/***/ }),

/***/ "./src/unitConverter.js":
/*!******************************!*\
  !*** ./src/unitConverter.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ unitConverter)
/* harmony export */ });
function unitConverter(input, unit) {
  if (unit === '°F') return Math.round((input * 9) / 5 + 32);

  return Math.round(input);
}


/***/ }),

/***/ "./src/assets/icons/cloudiness-icon.png":
/*!**********************************************!*\
  !*** ./src/assets/icons/cloudiness-icon.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0ade2465a46c4ab51319.png";

/***/ }),

/***/ "./src/assets/icons/humidity-icon.png":
/*!********************************************!*\
  !*** ./src/assets/icons/humidity-icon.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "184016aa02080b940b0c.png";

/***/ }),

/***/ "./src/assets/icons/location-icon.png":
/*!********************************************!*\
  !*** ./src/assets/icons/location-icon.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e8228f413090170e68e4.png";

/***/ }),

/***/ "./src/assets/icons/search-icon.png":
/*!******************************************!*\
  !*** ./src/assets/icons/search-icon.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e66781239db6f578b9d3.png";

/***/ }),

/***/ "./src/assets/icons/sunrise-icon.png":
/*!*******************************************!*\
  !*** ./src/assets/icons/sunrise-icon.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0aa1694b55b7f9895217.png";

/***/ }),

/***/ "./src/assets/icons/sunset-icon.png":
/*!******************************************!*\
  !*** ./src/assets/icons/sunset-icon.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e0ffb4d5d3b6ce869770.png";

/***/ }),

/***/ "./src/assets/icons/wind_speed-icon.png":
/*!**********************************************!*\
  !*** ./src/assets/icons/wind_speed-icon.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7ad2619a55cc7d5ff47d.png";

/***/ }),

/***/ "./src/assets/loading-gif/weather-loading.gif":
/*!****************************************************!*\
  !*** ./src/assets/loading-gif/weather-loading.gif ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "012f9ce68a1dde36d7d8.gif";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/normalize.css */ "./src/styles/normalize.css");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _buildDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buildDisplay */ "./src/buildDisplay.js");





const userSettings = {};
const currentData = {};
const form = document.querySelector('.form');
const content = document.querySelector('.content');
const loading = document.querySelector('.loading');

const filterObj = function returnObjWithPassedInProps(baseObj, props) {
  const filteredObj = props.reduce((obj, currentProp) => {
    const newObj = { ...obj };
    newObj[currentProp] = baseObj[currentProp];
    return newObj;
  }, {});
  return filteredObj;
};

const copyProps = function copyEachPropOfObj(baseObj, targetObj) {
  const target = targetObj;
  Object.keys(baseObj).forEach((prop) => {
    target[prop] = baseObj[prop];
  });
};

const getPosition = function getUserPosition() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve(position.coords);
      },
      (error) => {
        reject(error);
      }
    );
  }).catch((e) => console.log(e));
};

const positionWrapper = async function getPositionWrapper() {
  const coords = await getPosition();
  return {
    lat: coords.latitude,
    lon: coords.longitude,
  };
};

const getCity = function fetchCityData(city) {
  const fetchUrl =
    typeof city === 'object'
      ? `http://api.openweathermap.org/geo/1.0/reverse?lat=${city.lat}&lon=${city.lon}&appid=a01a2fe11847f4f8f8687b526d429f8d`
      : `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=a01a2fe11847f4f8f8687b526d429f8d`;

  return fetch(fetchUrl, {
    mode: 'cors',
  });
};

const updateCity = async function flowControlCityUpdate(pos) {
  try {
    let input;
    let position;
    if (!pos) input = document.querySelector('.form__input').value;
    if (!input) position = await positionWrapper();

    const cityData = await getCity(input || position || 'Montreal,CA')
      .then((response) => response.json())
      .then(([response]) => response)
      .then((response) => filterObj(response, ['name', 'country', 'state', 'lat', 'lon']));

    userSettings.city = {};
    copyProps(cityData, userSettings.city);
  } catch (err) {
    console.error(err);
  }
};
const getData = function fetchWeatherData(cityObj) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${cityObj.lat}&lon=${cityObj.lon}&exclude=minutely&units=metric&lang=en&appid=a01a2fe11847f4f8f8687b526d429f8d`,
    {
      mode: 'cors',
    }
  );
};

const updateData = async function updateCurrentDataObj() {
  try {
    const data = await getData(userSettings.city)
      .then((response) => response.json())
      .then((response) => filterObj(response, ['current', 'daily', 'hourly']))
      .then((response) => {
        const currentProps = [
          'dt',
          'sunrise',
          'sunset',
          'temp',
          'feels_like',
          'humidity',
          'clouds',
          'wind_speed',
          'weather',
        ];
        response.current = filterObj(response.current, currentProps);

        response.daily = response.daily.map((day) => filterObj(day, currentProps));

        return response;
      });

    copyProps(data, currentData);

    console.log(userSettings.city.name);
    console.log(currentData);
  } catch (err) {
    console.error(err);
  }
};

const selectTab = function setActiveTab() {
  if (
    !document.querySelector('.content__current_active') &&
    !document.querySelector('.content__daily_active')
  ) {
    let activeTab = [...document.querySelector('.nav').children].find((child) =>
      child.classList.contains('nav__tab_active')
    );
    const activeTabClass = activeTab.dataset.tab;
    document.querySelector(`.${activeTabClass}`).classList.add(`${activeTabClass}_active`);
  }
};

const updateDisplay = function updateDisplayNewData() {
  content.replaceChildren(...(0,_buildDisplay__WEBPACK_IMPORTED_MODULE_3__["default"])(currentData, userSettings));
  selectTab();

  document.querySelector('.header__city-name').textContent = userSettings.city.name;

  // dark mode for night
  if (currentData.current.weather[0].icon.slice(-1) === 'n') {
    document.body.classList.add('body_theme_dark');
  } else {
    document.body.classList.remove('body_theme_dark');
  }
};

const toggleLoading = function toggleLoadingHidden() {
  loading.classList.toggle('loading_transparent');
  if (loading.classList.contains('loading_hidden')) {
    loading.classList.remove('loading_hidden');
  } else {
    window.setTimeout(() => loading.classList.add('loading_hidden'), 1000);
  }
};

const updateWrapper = function updateDataThenDisplay() {
  updateData().then(updateDisplay).then(toggleLoading);
};

const buttonHandler = function handleFormButtons(e, pos) {
  e.preventDefault();
  toggleLoading();
  updateCity(pos).then(updateWrapper);
  form.reset();
};

(async () => {
  const tempToggle = document.querySelector('.switch__checkbox');
  if ('weatherApp' in localStorage) {
    const storageObj = JSON.parse(localStorage.weatherApp);
    copyProps(storageObj, userSettings);
  }

  if (!userSettings.city) await updateCity();

  if (!userSettings.tempUnit) userSettings.tempUnit = '°C';

  tempToggle.checked = userSettings.tempUnit === '°F';

  updateWrapper();

  window.addEventListener('beforeunload', () => {
    localStorage.weatherApp = JSON.stringify(userSettings);
  });

  tempToggle.addEventListener('click', () => {
    const indexActiveDaily = [...document.querySelector('.content__daily').children].findIndex(
      (child) => child.classList.contains('panel_active')
    );

    userSettings.tempUnit = userSettings.tempUnit === '°C' ? '°F' : '°C';
    updateDisplay();

    if (indexActiveDaily > -1) {
      document
        .querySelector('.content__daily')
        .children[indexActiveDaily].classList.add('panel_active');
    }
  });

  content.addEventListener('click', (e) => {
    const { target } = e;
    if (!target.closest('.panel_type_daily')) return;

    [...document.querySelector('.content__daily').children].forEach((child) =>
      child.classList.remove('panel_active')
    );
    target.closest('.panel_type_daily').classList.add('panel_active');
  });

  document.querySelector('.nav').addEventListener('click', (e) => {
    const { target } = e;
    if (!target.classList.contains('nav__tab') || target.classList.contains('nav__tab_active')) {
      return;
    }

    [...target.closest('.nav').children].forEach((child) =>
      child.classList.remove('nav__tab_active')
    );
    target.classList.add('nav__tab_active');

    document.querySelector('.content__current').classList.remove('content__current_active');
    document.querySelector('.content__daily').classList.remove('content__daily_active');

    selectTab();
  });

  document.querySelector('.form__button_type_location').addEventListener('click', (e) => {
    buttonHandler(e, true);
  });
  document.querySelector('.form__button_type_submit').addEventListener('click', (e) => {
    buttonHandler(e);
  });
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVB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QUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssUUFBUSxRQUFRLE1BQU0sS0FBSyxzQkFBc0IscUJBQXFCLHVCQUF1QixPQUFPLE9BQU8sTUFBTSxLQUFLLHNCQUFzQixxQkFBcUIsT0FBTyxLQUFLLFFBQVEsT0FBTyxNQUFNLEtBQUssWUFBWSxPQUFPLE9BQU8sTUFBTSxLQUFLLHNCQUFzQix1QkFBdUIsdUJBQXVCLE9BQU8sTUFBTSxNQUFNLE1BQU0sWUFBWSxPQUFPLE9BQU8sTUFBTSxPQUFPLHNCQUFzQixxQkFBcUIsT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLE9BQU8sT0FBTyxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssUUFBUSxPQUFPLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxRQUFRLFFBQVEsTUFBTSxTQUFTLHNCQUFzQixxQkFBcUIsdUJBQXVCLHFCQUFxQixPQUFPLE9BQU8sTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLE9BQU8sTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sTUFBTSxRQUFRLFlBQVksT0FBTyxNQUFNLE1BQU0sUUFBUSxZQUFZLFdBQVcsTUFBTSxNQUFNLE1BQU0sUUFBUSxZQUFZLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLFNBQVMsTUFBTSxLQUFLLHNCQUFzQixxQkFBcUIscUJBQXFCLHFCQUFxQixxQkFBcUIsdUJBQXVCLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsT0FBTyxPQUFPLE1BQU0sTUFBTSxzQkFBc0IscUJBQXFCLE9BQU8sTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE9BQU8sTUFBTSxLQUFLLHNCQUFzQix1QkFBdUIsT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sT0FBTyxNQUFNLEtBQUssc0JBQXNCLHFCQUFxQixPQUFPLEtBQUssUUFBUSxPQUFPLE1BQU0sS0FBSyxVQUFVLE9BQU8sTUFBTSxNQUFN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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLG9FQUFjOztBQUU3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0NBQW9DLHlCQUF5QjtBQUM3RDtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0SUE7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixzQkFBc0I7QUFDeEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRjhEO0FBQ047O0FBRXhEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGdFQUFlO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGdFQUFlO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsZ0VBQWU7QUFDdkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1FQUFrQjtBQUNqQztBQUNBO0FBQ0E7QUFDQSxlQUFlLG1FQUFrQjtBQUNqQztBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEpzQjtBQUNWO0FBQ1A7O0FBRTlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxXQUFXO0FBQzVEO0FBQ0EsaURBQWlELFdBQVc7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLGdFQUFlO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLGVBQWUscUdBQStCO0FBQzlDLGVBQWUscUdBQStCO0FBQzlDOztBQUVBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtB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QiwyRUFBaUIsUUFBUTs7QUFFL0MsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1FQUFpQjtBQUNoQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGVBQWUsb0VBQVU7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esa0JBQWtCLHVFQUFhOztBQUUvQjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLG1FQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBLG9CQUFvQix5RUFBZTs7QUFFbkM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxT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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsV0FBVztBQUM1RDtBQUNBLGlEQUFpRCxXQUFXO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FO0FBQ3BFLHdCQUF3Qiw0Q0FBNEM7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsT0FBTzs7QUFFUDs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsZUFBZSxvQkFBb0IsZUFBZTtBQUNqRjtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCLHlEQUFZO0FBQ3pDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxZQUFZLFNBQVM7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsWUFBWSxTQUFTO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMtdHovZXNtL19saWIvdHpJbnRsVGltZVpvbmVOYW1lL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zLXR6L2VzbS9fbGliL3R6UGFyc2VUaW1lem9uZS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy10ei9lc20vX2xpYi90elRva2VuaXplRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy10ei9lc20vZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMtdHovZXNtL2Zvcm1hdC9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy10ei9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zLXR6L2VzbS91dGNUb1pvbmVkVGltZS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZm9ybWF0L2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1ZhbGlkL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbG9jYWxpemUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL21hdGNoL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy9tYWluLnNjc3M/NjljNyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMvbm9ybWFsaXplLmNzcz80M2Y0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3R6LWxvb2t1cC90ei5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9idWlsZERpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYnVpbGRFbGVtZW50c1RyZWUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY3VycmVudFRlbXBsYXRlLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RhaWx5VGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZGF0ZUNvbnZlcnNpb25XcmFwcGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Z1bGxQYW5lbFRlbXBsYXRlLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2hvdXJseVRlbXBsYXRlLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3VuaXRDb252ZXJ0ZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaWNvbnMvc2VhcmNoLWljb24ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ljb25zL2xvY2F0aW9uLWljb24ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2xvYWRpbmctZ2lmL3dlYXRoZXItbG9hZGluZy5naWZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIFRoZSBzd2l0Y2ggLSB0aGUgYm94IGFyb3VuZCB0aGUgc2xpZGVyICovXFxuLnN3aXRjaCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogMzRweDtcXG59XFxuXFxuLyogSGlkZSBkZWZhdWx0IEhUTUwgY2hlY2tib3ggKi9cXG4uc3dpdGNoX19jaGVja2JveCB7XFxuICBvcGFjaXR5OiAwO1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDA7XFxufVxcblxcbi8qIFRoZSBzbGlkZXIgKi9cXG4uc3dpdGNoX19zbGlkZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzN2UyMTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcblxcbi5zd2l0Y2hfX3NsaWRlcjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBoZWlnaHQ6IDI2cHg7XFxuICB3aWR0aDogMjZweDtcXG4gIGxlZnQ6IDRweDtcXG4gIGJvdHRvbTogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG4uc3dpdGNoX19jaGVja2JveDpjaGVja2VkICsgLnN3aXRjaF9fc2xpZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7XFxufVxcblxcbi5zd2l0Y2hfX2NoZWNrYm94OmZvY3VzICsgLnN3aXRjaF9fc2xpZGVyIHtcXG4gIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZmMztcXG59XFxuXFxuLnN3aXRjaF9fY2hlY2tib3g6Y2hlY2tlZCArIC5zd2l0Y2hfX3NsaWRlcjpiZWZvcmUge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbn1cXG5cXG4uc3dpdGNoX19sYWJlbC1kaXYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogOTk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHRvcDogN3B4O1xcbiAgbGVmdDogNXB4O1xcbn1cXG5cXG4ubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLm5hdl9fdGFiIHtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBwYWRkaW5nOiAxMHB4IDA7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDk5O1xcbn1cXG5cXG4ubmF2X190YWJfYWN0aXZlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZm9ybV9faW5wdXQge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmZvcm1fX2J1dHRvbiB7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJhY2tncm91bmQ6IGNlbnRlci9jb250YWluIG5vLXJlcGVhdDtcXG59XFxuXFxuLmZvcm1fX2J1dHRvbl90eXBlX3N1Ym1pdCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG4uZm9ybV9fYnV0dG9uX3R5cGVfbG9jYXRpb24ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBoZWlnaHQ6IGNhbGMoMzB2aCAtIDQwcHgpO1xcbiAgbWF4LWhlaWdodDogY2FsYygzMHZoIC0gNDBweCk7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XFxuICBwYWRkaW5nOiAyMHB4IDEwcHg7XFxufVxcblxcbi5oZWFkZXJfX3N3aXRjaCB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XFxufVxcblxcbi5oZWFkZXJfX25hdiB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxufVxcblxcbi5jb250ZW50X19wYXJ0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jb250ZW50X19ob3VybHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBvdmVyZmxvdy14OiBzY3JvbGw7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5jb250ZW50X19kYWlseS10ZW1wcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmNvbnRlbnRfX2N1cnJlbnRfYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5jb250ZW50X19kYWlseV9hY3RpdmUge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnBhbmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGJveC1zaGFkb3c6IDAgMCAycHggYmxhY2s7XFxufVxcblxcbi5wYW5lbF9fbWFpbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcGFuZWwtY29sb3IpO1xcbiAgYm94LXNoYWRvdzogMCAwIDRweCBibGFjaztcXG59XFxuXFxuLnBhbmVsX3R5cGVfaG91cmx5IHtcXG4gIG1pbi13aWR0aDogMzB2dztcXG4gIHdpZHRoOiAzMHZ3O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4ucGFuZWxfdHlwZV9ob3VybHkgLnBhbmVsX19tYWluIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5wYW5lbF90eXBlX2RhaWx5LXRlbXBzIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1pbi13aWR0aDogMzB2dztcXG4gIHdpZHRoOiA0MHZ3O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucGFuZWxfYWN0aXZlIC5wYW5lbF90eXBlX2RhaWx5LXRlbXBzLFxcbi5wYW5lbF9hY3RpdmUgLnBhbmVsX19tb3JlLWluZm9fdHlwZV9kYWlseSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ucGFuZWxfX3dlYXRoZXItaWNvbiB7XFxuICB3aWR0aDogNDklO1xcbiAgaGVpZ2h0OiA0OSU7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLnBhbmVsX190ZXh0IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnBhbmVsX19tb3JlLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogODUlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBib3gtc2hhZG93OiAwIDAgOHB4IGJsYWNrO1xcbn1cXG5cXG4ucGFuZWxfX21vcmUtaW5mb19oYWxmIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLnBhbmVsX19tb3JlLWluZm9fdHlwZV9kYWlseSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucGFuZWxfX2xhYmVsLWljb24ge1xcbiAgd2lkdGg6IDYwcHg7XFxuICBoZWlnaHQ6IDYwcHg7XFxufVxcblxcbi5sb2FkaW5nIHtcXG4gIGJhY2tncm91bmQ6IGNlbnRlci9jb250YWluIG5vLXJlcGVhdCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpLCBkYXJrZ3JleTtcXG4gIGhlaWdodDogODB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAycyBlYXNlLW91dDtcXG59XFxuXFxuLmxvYWRpbmdfdHJhbnNwYXJlbnQge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLmxvYWRpbmdfaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbjpyb290IHtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG59XFxuXFxuLmJvZHkge1xcbiAgLS1tYWluLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQocmdiKDIzMSwgMTkxLCAwKSwgcmdiKDIyOSwgMTEyLCAwKSk7XFxuICAtLXBhbmVsLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxuICAtLXRleHQtY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmJvZHlfdGhlbWVfZGFyayB7XFxuICAtLW1haW4tY29sb3I6IGxpbmVhci1ncmFkaWVudChyZ2IoOTIsIDEwNywgMjA0KSwgcmdiKDc0LCAxOCwgMTUxKSk7XFxuICAtLXBhbmVsLWNvbG9yOiByZ2IoODYsIDgxLCAxMTgpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N3aXRjaC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9uYXYuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9mb3JtLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvaGVhZGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvY29udGVudC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3BhbmVsLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbG9hZGluZy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDJDQUFBO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQSwrQkFBQTtBQUNBO0VBQ0UsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FERUEsZUFBQTtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsMkJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSw4QkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FDaEVBO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsU0FBQTtBRG1FRjs7QUNoRUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBRG1FRjs7QUNoRUE7RUFDRSx1QkFBQTtBRG1FRjs7QUVwRkE7RUFDRSxhQUFBO0FGdUZGOztBRXBGQTtFQUNFLGFBQUE7QUZ1RkY7O0FFcEZBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtBRnVGRjs7QUVwRkE7RUFDRSx5REFBQTtBRnVGRjs7QUVwRkE7RUFDRSx5REFBQTtBRnVGRjs7QUd0R0E7RUFDRSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtBSHlHRjs7QUduR0E7RUFDRSxxQkFBQTtBSHNHRjs7QUdoR0E7RUFDRSxXQUFBO0FIbUdGOztBSXpIQTtFQUNFLFdBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FKNEhGOztBSXpIQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUo0SEY7O0FJbkhBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FKc0hGOztBSW5IQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBSnNIRjs7QUluSEE7RUFDRSxhQUFBO0FKc0hGOztBSW5IQTtFQUNFLGFBQUE7QUpzSEY7O0FLM0pBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBTDhKRjs7QUszSkE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7QUw4SkY7O0FLckpBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FMd0pGOztBS3JKQTtFQUNFLHNCQUFBO0FMd0pGOztBS2xKQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUxxSkY7O0FLbEpBOztFQUVFLGFBQUE7QUxxSkY7O0FLbEpBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FMcUpGOztBS2xKQTtFQUNFLGtCQUFBO0FMcUpGOztBS2xKQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0FMcUpGOztBS2xKQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtBTHFKRjs7QUsvSUE7RUFDRSxhQUFBO0FMa0pGOztBSy9JQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FMa0pGOztBTXRPQTtFQUNFLHNGQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSwrQkFBQTtBTnlPRjs7QU10T0E7RUFDRSxVQUFBO0FOeU9GOztBTXRPQTtFQUNFLGFBQUE7QU55T0Y7O0FBaFBBO0VBQ0UsZUFBQTtBQW1QRjs7QUFoUEE7RUFDRSxpRUFBQTtFQUNBLHVDQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFtUEY7O0FBaFBBO0VBQ0Usa0VBQUE7RUFDQSwrQkFBQTtBQW1QRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBUaGUgc3dpdGNoIC0gdGhlIGJveCBhcm91bmQgdGhlIHNsaWRlciAqL1xcbi5zd2l0Y2gge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDYwcHg7XFxuICBoZWlnaHQ6IDM0cHg7XFxufVxcblxcbi8qIEhpZGUgZGVmYXVsdCBIVE1MIGNoZWNrYm94ICovXFxuLnN3aXRjaF9fY2hlY2tib3gge1xcbiAgb3BhY2l0eTogMDtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4vKiBUaGUgc2xpZGVyICovXFxuLnN3aXRjaF9fc2xpZGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMzdlMjE7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG4uc3dpdGNoX19zbGlkZXI6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgaGVpZ2h0OiAyNnB4O1xcbiAgd2lkdGg6IDI2cHg7XFxuICBsZWZ0OiA0cHg7XFxuICBib3R0b206IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuXFxuLnN3aXRjaF9fY2hlY2tib3g6Y2hlY2tlZCArIC5zd2l0Y2hfX3NsaWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xcbn1cXG5cXG4uc3dpdGNoX19jaGVja2JveDpmb2N1cyArIC5zd2l0Y2hfX3NsaWRlciB7XFxuICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2ZjM7XFxufVxcblxcbi5zd2l0Y2hfX2NoZWNrYm94OmNoZWNrZWQgKyAuc3dpdGNoX19zbGlkZXI6YmVmb3JlIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG59XFxuXFxuLnN3aXRjaF9fbGFiZWwtZGl2IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDk5O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHdpZHRoOiA4MCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB0b3A6IDdweDtcXG4gIGxlZnQ6IDVweDtcXG59XFxuXCIsXCJAdXNlICdoZWFkZXInO1xcbkB1c2UgJ2NvbnRlbnQnO1xcbkB1c2UgJ3BhbmVsJztcXG5AdXNlICdsb2FkaW5nJztcXG5cXG46cm9vdCB7XFxuICBmb250LXNpemU6IDEwMCU7XFxufVxcblxcbi5ib2R5IHtcXG4gIC0tbWFpbi1jb2xvcjogbGluZWFyLWdyYWRpZW50KHJnYigyMzEsIDE5MSwgMCksIHJnYigyMjksIDExMiwgMCkpO1xcbiAgLS1wYW5lbC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbiAgLS10ZXh0LWNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQ6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5ib2R5X3RoZW1lX2Rhcmsge1xcbiAgLS1tYWluLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQocmdiKDkyLCAxMDcsIDIwNCksIHJnYig3NCwgMTgsIDE1MSkpO1xcbiAgLS1wYW5lbC1jb2xvcjogcmdiKDg2LCA4MSwgMTE4KTtcXG59XFxuXCIsXCIubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLm5hdl9fdGFiIHtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBwYWRkaW5nOiAxMHB4IDA7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDk5O1xcbn1cXG5cXG4ubmF2X190YWJfYWN0aXZlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cIixcIi5mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5mb3JtX19pbnB1dCB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uZm9ybV9fYnV0dG9uIHtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYmFja2dyb3VuZDogY2VudGVyIC8gY29udGFpbiBuby1yZXBlYXQ7XFxufVxcblxcbi5mb3JtX19idXR0b25fdHlwZV9zdWJtaXQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9pY29ucy9zZWFyY2gtaWNvbi5wbmcpO1xcbn1cXG5cXG4uZm9ybV9fYnV0dG9uX3R5cGVfbG9jYXRpb24ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9pY29ucy9sb2NhdGlvbi1pY29uLnBuZyk7XFxufVxcblwiLFwiQHVzZSAnc3dpdGNoJztcXG5AdXNlICduYXYnO1xcbkB1c2UgJ2Zvcm0nO1xcblxcbi5oZWFkZXIge1xcbiAgaGVpZ2h0OiBjYWxjKDMwdmggLSA0MHB4KTtcXG4gIG1heC1oZWlnaHQ6IGNhbGMoMzB2aCAtIDQwcHgpO1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xcbiAgcGFkZGluZzogMjBweCAxMHB4O1xcbn1cXG5cXG4uaGVhZGVyX19mb3JtIHtcXG59XFxuXFxuLmhlYWRlcl9fc3dpdGNoIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXG59XFxuXFxuLmhlYWRlcl9fY2l0eS1uYW1lIHtcXG59XFxuXFxuLmhlYWRlcl9fbmF2IHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cIixcIi5jb250ZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4uY29udGVudF9fcGFydCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY29udGVudF9fY3VycmVudCB7XFxufVxcblxcbi5jb250ZW50X19kYWlsecKgIHtcXG59XFxuXFxuLmNvbnRlbnRfX2hvdXJseSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmNvbnRlbnRfX2RhaWx5LXRlbXBzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uY29udGVudF9fY3VycmVudF9hY3RpdmUge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmNvbnRlbnRfX2RhaWx5X2FjdGl2ZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cIixcIi5wYW5lbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBib3gtc2hhZG93OiAwIDAgMnB4IGhzbCgwZGVnLCAwJSwgMCUgLyAwLjQ3KTtcXG59XFxuXFxuLnBhbmVsX19tYWluIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wYW5lbC1jb2xvcik7XFxuICBib3gtc2hhZG93OiAwIDAgNHB4IGhzbCgwZGVnLCAwJSwgMCUgLyAwLjQ0KTtcXG59XFxuXFxuLnBhbmVsX3R5cGVfY3VycmVudCB7XFxufVxcblxcbi5wYW5lbF90eXBlX2RhaWx5IHtcXG59XFxuXFxuLnBhbmVsX3R5cGVfaG91cmx5IHtcXG4gIG1pbi13aWR0aDogMzB2dztcXG4gIHdpZHRoOiAzMHZ3O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4ucGFuZWxfdHlwZV9ob3VybHkgLnBhbmVsX19tYWluIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5wYW5lbF9faG91cmx5LXRpbWUge1xcbn1cXG5cXG4ucGFuZWxfdHlwZV9kYWlseS10ZW1wcyB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtaW4td2lkdGg6IDMwdnc7XFxuICB3aWR0aDogNDB2dztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnBhbmVsX2FjdGl2ZSAucGFuZWxfdHlwZV9kYWlseS10ZW1wcyxcXG4ucGFuZWxfYWN0aXZlIC5wYW5lbF9fbW9yZS1pbmZvX3R5cGVfZGFpbHkge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnBhbmVsX193ZWF0aGVyLWljb24ge1xcbiAgd2lkdGg6IDQ5JTtcXG4gIGhlaWdodDogNDklO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5wYW5lbF9fdGV4dCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wYW5lbF9fbW9yZS1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDg1JTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYm94LXNoYWRvdzogMCAwIDhweCBoc2woMGRlZywgMCUsIDAlIC8gMC4zOCk7XFxufVxcblxcbi5wYW5lbF9fbW9yZS1pbmZvX2hhbGYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4ucGFuZWxfX2xhYmVsIHtcXG59XFxuXFxuLnBhbmVsX19tb3JlLWluZm9fdHlwZV9kYWlseSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucGFuZWxfX2xhYmVsLWljb24ge1xcbiAgd2lkdGg6IDYwcHg7XFxuICBoZWlnaHQ6IDYwcHg7XFxufVxcblwiLFwiLmxvYWRpbmcge1xcbiAgYmFja2dyb3VuZDogY2VudGVyIC8gY29udGFpbiBuby1yZXBlYXQgdXJsKC4uL2Fzc2V0cy9sb2FkaW5nLWdpZi93ZWF0aGVyLWxvYWRpbmcuZ2lmKSwgZGFya2dyZXk7XFxuICBoZWlnaHQ6IDgwdmg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMnMgZWFzZS1vdXQ7XFxufVxcblxcbi5sb2FkaW5nX3RyYW5zcGFyZW50IHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5sb2FkaW5nX2hpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxuXFxuLyogRG9jdW1lbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4gKi9cXG5cXG4gaHRtbCB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbiAgfVxcbiAgXFxuICAvKiBTZWN0aW9uc1xcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4gIFxcbiAgLyoqXFxuICAgKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG4gIFxcbiAgYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXG4gICAqL1xcbiAgXFxuICBtYWluIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAgICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gICAqL1xcbiAgXFxuICBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBtYXJnaW46IDAuNjdlbSAwO1xcbiAgfVxcbiAgXFxuICAvKiBHcm91cGluZyBjb250ZW50XFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiAgXFxuICAvKipcXG4gICAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICAgKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gICAqL1xcbiAgXFxuICBociB7XFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXFxuICAgIGhlaWdodDogMDsgLyogMSAqL1xcbiAgICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG4gIFxcbiAgcHJlIHtcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICAgIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxuICB9XFxuICBcXG4gIC8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiAgXFxuICAvKipcXG4gICAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gICAqL1xcbiAgXFxuICBhIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXG4gICAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICAgKi9cXG4gIFxcbiAgYWJiclt0aXRsZV0ge1xcbiAgICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICAgKi9cXG4gIFxcbiAgYixcXG4gIHN0cm9uZyB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gICAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcbiAgXFxuICBjb2RlLFxcbiAga2JkLFxcbiAgc2FtcCB7XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuICBcXG4gIHNtYWxsIHtcXG4gICAgZm9udC1zaXplOiA4MCU7XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICAgKiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG4gIFxcbiAgc3ViLFxcbiAgc3VwIHtcXG4gICAgZm9udC1zaXplOiA3NSU7XFxuICAgIGxpbmUtaGVpZ2h0OiAwO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gIH1cXG4gIFxcbiAgc3ViIHtcXG4gICAgYm90dG9tOiAtMC4yNWVtO1xcbiAgfVxcbiAgXFxuICBzdXAge1xcbiAgICB0b3A6IC0wLjVlbTtcXG4gIH1cXG4gIFxcbiAgLyogRW1iZWRkZWQgY29udGVudFxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4gIFxcbiAgLyoqXFxuICAgKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcbiAgICovXFxuICBcXG4gIGltZyB7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIH1cXG4gIFxcbiAgLyogRm9ybXNcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuICBcXG4gIC8qKlxcbiAgICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICAgKi9cXG4gIFxcbiAgYnV0dG9uLFxcbiAgaW5wdXQsXFxuICBvcHRncm91cCxcXG4gIHNlbGVjdCxcXG4gIHRleHRhcmVhIHtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAgIG1hcmdpbjogMDsgLyogMiAqL1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAgICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gICAqL1xcbiAgXFxuICBidXR0b24sXFxuICBpbnB1dCB7IC8qIDEgKi9cXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxuICAgKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICAgKi9cXG4gIFxcbiAgYnV0dG9uLFxcbiAgc2VsZWN0IHsgLyogMSAqL1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAgICovXFxuICBcXG4gIGJ1dHRvbixcXG4gIFt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG4gIFt0eXBlPVxcXCJyZXNldFxcXCJdLFxcbiAgW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gICAqL1xcbiAgXFxuICBidXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuICBbdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuICBbdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG4gIFt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuICAgKi9cXG4gIFxcbiAgYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcbiAgW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcbiAgW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuICBbdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcbiAgICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAgICovXFxuICBcXG4gIGZpZWxkc2V0IHtcXG4gICAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICAgKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxuICAgKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcbiAgXFxuICBsZWdlbmQge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICAgIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICAgIGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXFxuICAgIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xcbiAgICBwYWRkaW5nOiAwOyAvKiAzICovXFxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAgICovXFxuICBcXG4gIHByb2dyZXNzIHtcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcbiAgICovXFxuICBcXG4gIHRleHRhcmVhIHtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXFxuICAgKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxuICAgKi9cXG4gIFxcbiAgW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuICBbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gICAgcGFkZGluZzogMDsgLyogMiAqL1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gICAqL1xcbiAgXFxuICBbdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuICBbdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4gICAqL1xcbiAgXFxuICBbdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gICAqL1xcbiAgXFxuICBbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gICAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gICAqL1xcbiAgXFxuICA6Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gICAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbiAgfVxcbiAgXFxuICAvKiBJbnRlcmFjdGl2ZVxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4gIFxcbiAgLypcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXFxuICAgKi9cXG4gIFxcbiAgZGV0YWlscyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbiAgXFxuICAvKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuICBcXG4gIHN1bW1hcnkge1xcbiAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxuICB9XFxuICBcXG4gIC8qIE1pc2NcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuICBcXG4gIC8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcbiAgICovXFxuICBcXG4gIHRlbXBsYXRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cXG4gICAqL1xcbiAgXFxuICBbaGlkZGVuXSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9ub3JtYWxpemUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDJFQUEyRTs7QUFFM0U7K0VBQytFOztBQUUvRTs7O0VBR0U7O0NBRUQ7SUFDRyxpQkFBaUIsRUFBRSxNQUFNO0lBQ3pCLDhCQUE4QixFQUFFLE1BQU07RUFDeEM7O0VBRUE7aUZBQytFOztFQUUvRTs7SUFFRTs7RUFFRjtJQUNFLFNBQVM7RUFDWDs7RUFFQTs7SUFFRTs7RUFFRjtJ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fCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcblxcbi8qIERvY3VtZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuICovXFxuXFxuIGh0bWwge1xcbiAgICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG4gIH1cXG4gIFxcbiAgLyogU2VjdGlvbnNcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuICBcXG4gIC8qKlxcbiAgICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuICBcXG4gIGJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxuICAgKi9cXG4gIFxcbiAgbWFpbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gICAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICAgKi9cXG4gIFxcbiAgaDEge1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgbWFyZ2luOiAwLjY3ZW0gMDtcXG4gIH1cXG4gIFxcbiAgLyogR3JvdXBpbmcgY29udGVudFxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4gIFxcbiAgLyoqXFxuICAgKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAgICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICAgKi9cXG4gIFxcbiAgaHIge1xcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xcbiAgICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuICBcXG4gIHByZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbiAgfVxcbiAgXFxuICAvKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4gIFxcbiAgLyoqXFxuICAgKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICAgKi9cXG4gIFxcbiAgYSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxuICAgKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAgICovXFxuICBcXG4gIGFiYnJbdGl0bGVdIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAgICovXFxuICBcXG4gIGIsXFxuICBzdHJvbmcge1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG4gIFxcbiAgY29kZSxcXG4gIGtiZCxcXG4gIHNhbXAge1xcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcbiAgXFxuICBzbWFsbCB7XFxuICAgIGZvbnQtc2l6ZTogODAlO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAgICogYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuICBcXG4gIHN1YixcXG4gIHN1cCB7XFxuICAgIGZvbnQtc2l6ZTogNzUlO1xcbiAgICBsaW5lLWhlaWdodDogMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICB9XFxuICBcXG4gIHN1YiB7XFxuICAgIGJvdHRvbTogLTAuMjVlbTtcXG4gIH1cXG4gIFxcbiAgc3VwIHtcXG4gICAgdG9wOiAtMC41ZW07XFxuICB9XFxuICBcXG4gIC8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuICBcXG4gIC8qKlxcbiAgICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXG4gICAqL1xcbiAgXFxuICBpbWcge1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICB9XFxuICBcXG4gIC8qIEZvcm1zXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiAgXFxuICAvKipcXG4gICAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAgICovXFxuICBcXG4gIGJ1dHRvbixcXG4gIGlucHV0LFxcbiAgb3B0Z3JvdXAsXFxuICBzZWxlY3QsXFxuICB0ZXh0YXJlYSB7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICAgIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgICBtYXJnaW46IDA7IC8qIDIgKi9cXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gICAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICAgKi9cXG4gIFxcbiAgYnV0dG9uLFxcbiAgaW5wdXQgeyAvKiAxICovXFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAgICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAgICovXFxuICBcXG4gIGJ1dHRvbixcXG4gIHNlbGVjdCB7IC8qIDEgKi9cXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gICAqL1xcbiAgXFxuICBidXR0b24sXFxuICBbdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuICBbdHlwZT1cXFwicmVzZXRcXFwiXSxcXG4gIFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICAgKi9cXG4gIFxcbiAgYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcbiAgW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcbiAgW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuICBbdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAgICovXFxuICBcXG4gIGJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG4gIFt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG4gIFt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcbiAgW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gICAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gICAqL1xcbiAgXFxuICBmaWVsZHNldCB7XFxuICAgIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcbiAgICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAgICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAgICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG4gIFxcbiAgbGVnZW5kIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cXG4gICAgcGFkZGluZzogMDsgLyogMyAqL1xcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gICAqL1xcbiAgXFxuICBwcm9ncmVzcyB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXG4gICAqL1xcbiAgXFxuICB0ZXh0YXJlYSB7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcbiAgICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcbiAgICovXFxuICBcXG4gIFt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcbiAgW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICAgIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICAgKi9cXG4gIFxcbiAgW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbiAgW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAgICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICAgKi9cXG4gIFxcbiAgW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gICAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICAgKi9cXG4gIFxcbiAgW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICAgKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICAgKi9cXG4gIFxcbiAgOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICAgIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIH1cXG4gIFxcbiAgLyogSW50ZXJhY3RpdmVcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuICBcXG4gIC8qXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAgICovXFxuICBcXG4gIGRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG4gIFxcbiAgLypcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcbiAgXFxuICBzdW1tYXJ5IHtcXG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xcbiAgfVxcbiAgXFxuICAvKiBNaXNjXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiAgXFxuICAvKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXG4gICAqL1xcbiAgXFxuICB0ZW1wbGF0ZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICAgKi9cXG4gIFxcbiAgW2hpZGRlbl0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNjb250ZW50ID4gKiB7XFxuICBtaW4td2lkdGg6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5mdWxsLXBhbmVsIHtcXG4gIHBhZGRpbmc6IDEwcHggMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDE1cHg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgd2lkdGg6IDkwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLnBhbmVsLXBhcnQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgeWVsbG93O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICB3aWR0aDogOTUlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4udG9wLXBhbmVsIHtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnRvcC1wYW5lbCBpbWcge1xcbn1cXG5cXG4udGVtcCB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIHdpZHRoOiA0OSU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5kZXNjIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLmZlZWxzIHtcXG4gIG1pbi13aWR0aDogMzclO1xcbn1cXG5cXG4ubWVkLWxhYmVsLFxcbi5sb3dlci1sYWJlbCA+ICoge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4ucGFuZWwtaWNvbiB7XFxufVxcblxcbi5tZWQtdGV4dCxcXG4ubG93ZXItdGV4dCB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxufVxcblxcbi5mdWxsLXBhbmVsLmFjdGl2ZSB7XFxuICBtaW4taGVpZ2h0OiA5MHZoO1xcbn1cXG5cXG4ubWVkLXBhbmVsLFxcbi5sb3dlci1wYW5lbCB7XFxuICBwYWRkaW5nOiAyMHB4IDA7XFxuICBmbGV4LWdyb3c6IDAuNTtcXG59XFxuXFxuI2NvbnRlbnQgPiAuYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5kYWlseS1wYW5lbCA+IC5tZWQtcGFuZWwsXFxuLmRhaWx5LXBhbmVsID4gLmxvd2VyLXBhbmVsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5mdWxsLXBhbmVsLmFjdGl2ZSA+ICoge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtBQUNBOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtBQUNBOztBQUVBOztFQUVFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNjb250ZW50ID4gKiB7XFxuICBtaW4td2lkdGg6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5mdWxsLXBhbmVsIHtcXG4gIHBhZGRpbmc6IDEwcHggMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDE1cHg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgd2lkdGg6IDkwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLnBhbmVsLXBhcnQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgeWVsbG93O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICB3aWR0aDogOTUlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4udG9wLXBhbmVsIHtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnRvcC1wYW5lbCBpbWcge1xcbn1cXG5cXG4udGVtcCB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIHdpZHRoOiA0OSU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5kZXNjIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLmZlZWxzIHtcXG4gIG1pbi13aWR0aDogMzclO1xcbn1cXG5cXG4ubWVkLWxhYmVsLFxcbi5sb3dlci1sYWJlbCA+ICoge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4ucGFuZWwtaWNvbiB7XFxufVxcblxcbi5tZWQtdGV4dCxcXG4ubG93ZXItdGV4dCB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxufVxcblxcbi5mdWxsLXBhbmVsLmFjdGl2ZSB7XFxuICBtaW4taGVpZ2h0OiA5MHZoO1xcbn1cXG5cXG4ubWVkLXBhbmVsLFxcbi5sb3dlci1wYW5lbCB7XFxuICBwYWRkaW5nOiAyMHB4IDA7XFxuICBmbGV4LWdyb3c6IDAuNTtcXG59XFxuXFxuI2NvbnRlbnQgPiAuYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5kYWlseS1wYW5lbCA+IC5tZWQtcGFuZWwsXFxuLmRhaWx5LXBhbmVsID4gLmxvd2VyLXBhbmVsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5mdWxsLXBhbmVsLmFjdGl2ZSA+ICoge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCIvKipcbiAqIFJldHVybnMgdGhlIGZvcm1hdHRlZCB0aW1lIHpvbmUgbmFtZSBvZiB0aGUgcHJvdmlkZWQgYHRpbWVab25lYCBvciB0aGUgY3VycmVudFxuICogc3lzdGVtIHRpbWUgem9uZSBpZiBvbWl0dGVkLCBhY2NvdW50aW5nIGZvciBEU1QgYWNjb3JkaW5nIHRvIHRoZSBVVEMgdmFsdWUgb2ZcbiAqIHRoZSBkYXRlLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0ekludGxUaW1lWm9uZU5hbWUobGVuZ3RoLCBkYXRlLCBvcHRpb25zKSB7XG4gIHZhciBkdGYgPSBnZXREVEYobGVuZ3RoLCBvcHRpb25zLnRpbWVab25lLCBvcHRpb25zLmxvY2FsZSlcbiAgcmV0dXJuIGR0Zi5mb3JtYXRUb1BhcnRzID8gcGFydHNUaW1lWm9uZShkdGYsIGRhdGUpIDogaGFja3lUaW1lWm9uZShkdGYsIGRhdGUpXG59XG5cbmZ1bmN0aW9uIHBhcnRzVGltZVpvbmUoZHRmLCBkYXRlKSB7XG4gIHZhciBmb3JtYXR0ZWQgPSBkdGYuZm9ybWF0VG9QYXJ0cyhkYXRlKVxuICByZXR1cm4gZm9ybWF0dGVkW2Zvcm1hdHRlZC5sZW5ndGggLSAxXS52YWx1ZVxufVxuXG5mdW5jdGlvbiBoYWNreVRpbWVab25lKGR0ZiwgZGF0ZSkge1xuICB2YXIgZm9ybWF0dGVkID0gZHRmLmZvcm1hdChkYXRlKS5yZXBsYWNlKC9cXHUyMDBFL2csICcnKVxuICB2YXIgdHpOYW1lTWF0Y2ggPSAvIFtcXHctKyBdKyQvLmV4ZWMoZm9ybWF0dGVkKVxuICByZXR1cm4gdHpOYW1lTWF0Y2ggPyB0ek5hbWVNYXRjaFswXS5zdWJzdHIoMSkgOiAnJ1xufVxuXG4vLyBJZiBhIGxvY2FsZSBoYXMgYmVlbiBwcm92aWRlZCBgZW4tVVNgIGlzIHVzZWQgYXMgYSBmYWxsYmFjayBpbiBjYXNlIGl0IGlzIGFuXG4vLyBpbnZhbGlkIGxvY2FsZSwgb3RoZXJ3aXNlIHRoZSBsb2NhbGUgaXMgbGVmdCB1bmRlZmluZWQgdG8gdXNlIHRoZSBzeXN0ZW0gbG9jYWxlLlxuZnVuY3Rpb24gZ2V0RFRGKGxlbmd0aCwgdGltZVpvbmUsIGxvY2FsZSkge1xuICBpZiAobG9jYWxlICYmICFsb2NhbGUuY29kZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIFwiZGF0ZS1mbnMtdHogZXJyb3I6IFBsZWFzZSBzZXQgYSBsYW5ndWFnZSBjb2RlIG9uIHRoZSBsb2NhbGUgb2JqZWN0IGltcG9ydGVkIGZyb20gZGF0ZS1mbnMsIGUuZy4gYGxvY2FsZS5jb2RlID0gJ2VuLVVTJ2BcIlxuICAgIClcbiAgfVxuICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jYWxlID8gW2xvY2FsZS5jb2RlLCAnZW4tVVMnXSA6IHVuZGVmaW5lZCwge1xuICAgIHRpbWVab25lOiB0aW1lWm9uZSxcbiAgICB0aW1lWm9uZU5hbWU6IGxlbmd0aCxcbiAgfSlcbn1cbiIsImltcG9ydCB0elRva2VuaXplRGF0ZSBmcm9tICcuLi90elRva2VuaXplRGF0ZS9pbmRleC5qcydcblxudmFyIE1JTExJU0VDT05EU19JTl9IT1VSID0gMzYwMDAwMFxudmFyIE1JTExJU0VDT05EU19JTl9NSU5VVEUgPSA2MDAwMFxuXG52YXIgcGF0dGVybnMgPSB7XG4gIHRpbWV6b25lOiAvKFtaKy1dLiopJC8sXG4gIHRpbWV6b25lWjogL14oWikkLyxcbiAgdGltZXpvbmVISDogL14oWystXSkoXFxkezJ9KSQvLFxuICB0aW1lem9uZUhITU06IC9eKFsrLV0pKFxcZHsyfSk6PyhcXGR7Mn0pJC9cbn1cblxuLy8gUGFyc2UgdmFyaW91cyB0aW1lIHpvbmUgb2Zmc2V0IGZvcm1hdHMgdG8gYW4gb2Zmc2V0IGluIG1pbGxpc2Vjb25kc1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdHpQYXJzZVRpbWV6b25lKHRpbWV6b25lU3RyaW5nLCBkYXRlLCBpc1V0Y0RhdGUpIHtcbiAgdmFyIHRva2VuXG4gIHZhciBhYnNvbHV0ZU9mZnNldFxuXG4gIC8vIFpcbiAgdG9rZW4gPSBwYXR0ZXJucy50aW1lem9uZVouZXhlYyh0aW1lem9uZVN0cmluZylcbiAgaWYgKHRva2VuKSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuXG4gIHZhciBob3Vyc1xuXG4gIC8vIMKxaGhcbiAgdG9rZW4gPSBwYXR0ZXJucy50aW1lem9uZUhILmV4ZWModGltZXpvbmVTdHJpbmcpXG4gIGlmICh0b2tlbikge1xuICAgIGhvdXJzID0gcGFyc2VJbnQodG9rZW5bMl0sIDEwKVxuXG4gICAgaWYgKCF2YWxpZGF0ZVRpbWV6b25lKGhvdXJzKSkge1xuICAgICAgcmV0dXJuIE5hTlxuICAgIH1cblxuICAgIGFic29sdXRlT2Zmc2V0ID0gaG91cnMgKiBNSUxMSVNFQ09ORFNfSU5fSE9VUlxuICAgIHJldHVybiB0b2tlblsxXSA9PT0gJysnID8gLWFic29sdXRlT2Zmc2V0IDogYWJzb2x1dGVPZmZzZXRcbiAgfVxuXG4gIC8vIMKxaGg6bW0gb3IgwrFoaG1tXG4gIHRva2VuID0gcGF0dGVybnMudGltZXpvbmVISE1NLmV4ZWModGltZXpvbmVTdHJpbmcpXG4gIGlmICh0b2tlbikge1xuICAgIGhvdXJzID0gcGFyc2VJbnQodG9rZW5bMl0sIDEwKVxuICAgIHZhciBtaW51dGVzID0gcGFyc2VJbnQodG9rZW5bM10sIDEwKVxuXG4gICAgaWYgKCF2YWxpZGF0ZVRpbWV6b25lKGhvdXJzLCBtaW51dGVzKSkge1xuICAgICAgcmV0dXJuIE5hTlxuICAgIH1cblxuICAgIGFic29sdXRlT2Zmc2V0ID0gaG91cnMgKiBNSUxMSVNFQ09ORFNfSU5fSE9VUiArIG1pbnV0ZXMgKiBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFXG4gICAgcmV0dXJuIHRva2VuWzFdID09PSAnKycgPyAtYWJzb2x1dGVPZmZzZXQgOiBhYnNvbHV0ZU9mZnNldFxuICB9XG5cbiAgLy8gSUFOQSB0aW1lIHpvbmVcbiAgaWYgKGlzVmFsaWRUaW1lem9uZUlBTkFTdHJpbmcodGltZXpvbmVTdHJpbmcpKSB7XG4gICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUgfHwgRGF0ZS5ub3coKSlcbiAgICB2YXIgdXRjRGF0ZSA9IGlzVXRjRGF0ZSA/IGRhdGUgOiB0b1V0Y0RhdGUoZGF0ZSlcblxuICAgIHZhciBvZmZzZXQgPSBjYWxjT2Zmc2V0KHV0Y0RhdGUsIHRpbWV6b25lU3RyaW5nKVxuXG4gICAgdmFyIGZpeGVkT2Zmc2V0ID0gaXNVdGNEYXRlID8gb2Zmc2V0IDogZml4T2Zmc2V0KGRhdGUsIG9mZnNldCwgdGltZXpvbmVTdHJpbmcpXG5cbiAgICByZXR1cm4gLWZpeGVkT2Zmc2V0XG4gIH1cblxuICByZXR1cm4gMFxufVxuXG5mdW5jdGlvbiB0b1V0Y0RhdGUoZGF0ZSkge1xuICByZXR1cm4gbmV3IERhdGUoXG4gICAgRGF0ZS5VVEMoXG4gICAgICBkYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICBkYXRlLmdldE1vbnRoKCksXG4gICAgICBkYXRlLmdldERhdGUoKSxcbiAgICAgIGRhdGUuZ2V0SG91cnMoKSxcbiAgICAgIGRhdGUuZ2V0TWludXRlcygpLFxuICAgICAgZGF0ZS5nZXRTZWNvbmRzKCksXG4gICAgICBkYXRlLmdldE1pbGxpc2Vjb25kcygpXG4gICAgKVxuICApXG59XG5cbmZ1bmN0aW9uIGNhbGNPZmZzZXQoZGF0ZSwgdGltZXpvbmVTdHJpbmcpIHtcbiAgdmFyIHRva2VucyA9IHR6VG9rZW5pemVEYXRlKGRhdGUsIHRpbWV6b25lU3RyaW5nKVxuXG4gIHZhciBhc1VUQyA9IERhdGUuVVRDKHRva2Vuc1swXSwgdG9rZW5zWzFdIC0gMSwgdG9rZW5zWzJdLCB0b2tlbnNbM10gJSAyNCwgdG9rZW5zWzRdLCB0b2tlbnNbNV0pXG5cbiAgdmFyIGFzVFMgPSBkYXRlLmdldFRpbWUoKVxuICB2YXIgb3ZlciA9IGFzVFMgJSAxMDAwXG4gIGFzVFMgLT0gb3ZlciA+PSAwID8gb3ZlciA6IDEwMDAgKyBvdmVyXG4gIHJldHVybiBhc1VUQyAtIGFzVFNcbn1cblxuZnVuY3Rpb24gZml4T2Zmc2V0KGRhdGUsIG9mZnNldCwgdGltZXpvbmVTdHJpbmcpIHtcbiAgdmFyIGxvY2FsVFMgPSBkYXRlLmdldFRpbWUoKVxuXG4gIC8vIE91ciBVVEMgdGltZSBpcyBqdXN0IGEgZ3Vlc3MgYmVjYXVzZSBvdXIgb2Zmc2V0IGlzIGp1c3QgYSBndWVzc1xuICB2YXIgdXRjR3Vlc3MgPSBsb2NhbFRTIC0gb2Zmc2V0XG5cbiAgLy8gVGVzdCB3aGV0aGVyIHRoZSB6b25lIG1hdGNoZXMgdGhlIG9mZnNldCBmb3IgdGhpcyB0c1xuICB2YXIgbzIgPSBjYWxjT2Zmc2V0KG5ldyBEYXRlKHV0Y0d1ZXNzKSwgdGltZXpvbmVTdHJpbmcpXG5cbiAgLy8gSWYgc28sIG9mZnNldCBkaWRuJ3QgY2hhbmdlIGFuZCB3ZSdyZSBkb25lXG4gIGlmIChvZmZzZXQgPT09IG8yKSB7XG4gICAgcmV0dXJuIG9mZnNldFxuICB9XG5cbiAgLy8gSWYgbm90LCBjaGFuZ2UgdGhlIHRzIGJ5IHRoZSBkaWZmZXJlbmNlIGluIHRoZSBvZmZzZXRcbiAgdXRjR3Vlc3MgLT0gbzIgLSBvZmZzZXRcblxuICAvLyBJZiB0aGF0IGdpdmVzIHVzIHRoZSBsb2NhbCB0aW1lIHdlIHdhbnQsIHdlJ3JlIGRvbmVcbiAgdmFyIG8zID0gY2FsY09mZnNldChuZXcgRGF0ZSh1dGNHdWVzcyksIHRpbWV6b25lU3RyaW5nKVxuICBpZiAobzIgPT09IG8zKSB7XG4gICAgcmV0dXJuIG8yXG4gIH1cblxuICAvLyBJZiBpdCdzIGRpZmZlcmVudCwgd2UncmUgaW4gYSBob2xlIHRpbWUuIFRoZSBvZmZzZXQgaGFzIGNoYW5nZWQsIGJ1dCB0aGUgd2UgZG9uJ3QgYWRqdXN0IHRoZSB0aW1lXG4gIHJldHVybiBNYXRoLm1heChvMiwgbzMpXG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZXpvbmUoaG91cnMsIG1pbnV0ZXMpIHtcbiAgaWYgKG1pbnV0ZXMgIT0gbnVsbCAmJiAobWludXRlcyA8IDAgfHwgbWludXRlcyA+IDU5KSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIHRydWVcbn1cblxuZnVuY3Rpb24gaXNWYWxpZFRpbWV6b25lSUFOQVN0cmluZyh0aW1lWm9uZVN0cmluZykge1xuICB0cnkge1xuICAgIEludGwuRGF0ZVRpbWVGb3JtYXQodW5kZWZpbmVkLCB7dGltZVpvbmU6IHRpbWVab25lU3RyaW5nfSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iLCIvKipcbiAqIFJldHVybnMgdGhlIFt5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZHNdIHRva2VucyBvZiB0aGUgcHJvdmlkZWRcbiAqIGBkYXRlYCBhcyBpdCB3aWxsIGJlIHJlbmRlcmVkIGluIHRoZSBgdGltZVpvbmVgLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0elRva2VuaXplRGF0ZShkYXRlLCB0aW1lWm9uZSkge1xuICB2YXIgZHRmID0gZ2V0RGF0ZVRpbWVGb3JtYXQodGltZVpvbmUpXG4gIHJldHVybiBkdGYuZm9ybWF0VG9QYXJ0cyA/IHBhcnRzT2Zmc2V0KGR0ZiwgZGF0ZSkgOiBoYWNreU9mZnNldChkdGYsIGRhdGUpXG59XG5cbnZhciB0eXBlVG9Qb3MgPSB7XG4gIHllYXI6IDAsXG4gIG1vbnRoOiAxLFxuICBkYXk6IDIsXG4gIGhvdXI6IDMsXG4gIG1pbnV0ZTogNCxcbiAgc2Vjb25kOiA1LFxufVxuXG5mdW5jdGlvbiBwYXJ0c09mZnNldChkdGYsIGRhdGUpIHtcbiAgdmFyIGZvcm1hdHRlZCA9IGR0Zi5mb3JtYXRUb1BhcnRzKGRhdGUpXG4gIHZhciBmaWxsZWQgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGZvcm1hdHRlZC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBwb3MgPSB0eXBlVG9Qb3NbZm9ybWF0dGVkW2ldLnR5cGVdXG5cbiAgICBpZiAocG9zID49IDApIHtcbiAgICAgIGZpbGxlZFtwb3NdID0gcGFyc2VJbnQoZm9ybWF0dGVkW2ldLnZhbHVlLCAxMClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZpbGxlZFxufVxuXG5mdW5jdGlvbiBoYWNreU9mZnNldChkdGYsIGRhdGUpIHtcbiAgdmFyIGZvcm1hdHRlZCA9IGR0Zi5mb3JtYXQoZGF0ZSkucmVwbGFjZSgvXFx1MjAwRS9nLCAnJylcbiAgdmFyIHBhcnNlZCA9IC8oXFxkKylcXC8oXFxkKylcXC8oXFxkKyksPyAoXFxkKyk6KFxcZCspOihcXGQrKS8uZXhlYyhmb3JtYXR0ZWQpXG4gIC8vIHZhciBbLCBmTW9udGgsIGZEYXksIGZZZWFyLCBmSG91ciwgZk1pbnV0ZSwgZlNlY29uZF0gPSBwYXJzZWRcbiAgLy8gcmV0dXJuIFtmWWVhciwgZk1vbnRoLCBmRGF5LCBmSG91ciwgZk1pbnV0ZSwgZlNlY29uZF1cbiAgcmV0dXJuIFtwYXJzZWRbM10sIHBhcnNlZFsxXSwgcGFyc2VkWzJdLCBwYXJzZWRbNF0sIHBhcnNlZFs1XSwgcGFyc2VkWzZdXVxufVxuXG4vLyBHZXQgYSBjYWNoZWQgSW50bC5EYXRlVGltZUZvcm1hdCBpbnN0YW5jZSBmb3IgdGhlIElBTkEgYHRpbWVab25lYC4gVGhpcyBjYW4gYmUgdXNlZFxuLy8gdG8gZ2V0IGRldGVybWluaXN0aWMgbG9jYWwgZGF0ZS90aW1lIG91dHB1dCBhY2NvcmRpbmcgdG8gdGhlIGBlbi1VU2AgbG9jYWxlIHdoaWNoXG4vLyBjYW4gYmUgdXNlZCB0byBleHRyYWN0IGxvY2FsIHRpbWUgcGFydHMgYXMgbmVjZXNzYXJ5LlxudmFyIGR0ZkNhY2hlID0ge31cbmZ1bmN0aW9uIGdldERhdGVUaW1lRm9ybWF0KHRpbWVab25lKSB7XG4gIGlmICghZHRmQ2FjaGVbdGltZVpvbmVdKSB7XG4gICAgLy8gTmV3IGJyb3dzZXJzIHVzZSBgaG91ckN5Y2xlYCwgSUUgYW5kIENocm9tZSA8NzMgZG9lcyBub3Qgc3VwcG9ydCBpdCBhbmQgdXNlcyBgaG91cjEyYFxuICAgIHZhciB0ZXN0RGF0ZUZvcm1hdHRlZCA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdlbi1VUycsIHtcbiAgICAgIGhvdXIxMjogZmFsc2UsXG4gICAgICB0aW1lWm9uZTogJ0FtZXJpY2EvTmV3X1lvcmsnLFxuICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgbW9udGg6ICcyLWRpZ2l0JyxcbiAgICAgIGRheTogJzItZGlnaXQnLFxuICAgICAgaG91cjogJzItZGlnaXQnLFxuICAgICAgbWludXRlOiAnMi1kaWdpdCcsXG4gICAgICBzZWNvbmQ6ICcyLWRpZ2l0JyxcbiAgICB9KS5mb3JtYXQobmV3IERhdGUoJzIwMTQtMDYtMjVUMDQ6MDA6MDAuMTIzWicpKVxuICAgIHZhciBob3VyQ3ljbGVTdXBwb3J0ZWQgPVxuICAgICAgdGVzdERhdGVGb3JtYXR0ZWQgPT09ICcwNi8yNS8yMDE0LCAwMDowMDowMCcgfHxcbiAgICAgIHRlc3REYXRlRm9ybWF0dGVkID09PSAn4oCOMDbigI4v4oCOMjXigI4v4oCOMjAxNOKAjiDigI4wMOKAjjrigI4wMOKAjjrigI4wMCdcblxuICAgIGR0ZkNhY2hlW3RpbWVab25lXSA9IGhvdXJDeWNsZVN1cHBvcnRlZFxuICAgICAgPyBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgnZW4tVVMnLCB7XG4gICAgICAgICAgaG91cjEyOiBmYWxzZSxcbiAgICAgICAgICB0aW1lWm9uZTogdGltZVpvbmUsXG4gICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICAgIG1vbnRoOiAnMi1kaWdpdCcsXG4gICAgICAgICAgZGF5OiAnMi1kaWdpdCcsXG4gICAgICAgICAgaG91cjogJzItZGlnaXQnLFxuICAgICAgICAgIG1pbnV0ZTogJzItZGlnaXQnLFxuICAgICAgICAgIHNlY29uZDogJzItZGlnaXQnLFxuICAgICAgICB9KVxuICAgICAgOiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgnZW4tVVMnLCB7XG4gICAgICAgICAgaG91ckN5Y2xlOiAnaDIzJyxcbiAgICAgICAgICB0aW1lWm9uZTogdGltZVpvbmUsXG4gICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICAgIG1vbnRoOiAnMi1kaWdpdCcsXG4gICAgICAgICAgZGF5OiAnMi1kaWdpdCcsXG4gICAgICAgICAgaG91cjogJzItZGlnaXQnLFxuICAgICAgICAgIG1pbnV0ZTogJzItZGlnaXQnLFxuICAgICAgICAgIHNlY29uZDogJzItZGlnaXQnLFxuICAgICAgICB9KVxuICB9XG4gIHJldHVybiBkdGZDYWNoZVt0aW1lWm9uZV1cbn1cbiIsImltcG9ydCB0ekludGxUaW1lWm9uZU5hbWUgZnJvbSAnLi4vLi4vX2xpYi90ekludGxUaW1lWm9uZU5hbWUnXG5pbXBvcnQgdHpQYXJzZVRpbWV6b25lIGZyb20gJy4uLy4uL19saWIvdHpQYXJzZVRpbWV6b25lJ1xuXG52YXIgTUlMTElTRUNPTkRTX0lOX01JTlVURSA9IDYwICogMTAwMFxuXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGFsd2F5cyBgJ1onYClcbiAgWDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZVxuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9wdGlvbnMudGltZVpvbmVcbiAgICAgID8gdHpQYXJzZVRpbWV6b25lKG9wdGlvbnMudGltZVpvbmUsIG9yaWdpbmFsRGF0ZSkgLyBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFXG4gICAgICA6IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpXG5cbiAgICBpZiAodGltZXpvbmVPZmZzZXQgPT09IDApIHtcbiAgICAgIHJldHVybiAnWidcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAnWCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpXG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltZXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYYFxuICAgICAgY2FzZSAnWFhYWCc6XG4gICAgICBjYXNlICdYWCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltZXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpXG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltZXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYWGBcbiAgICAgIGNhc2UgJ1hYWFhYJzpcbiAgICAgIGNhc2UgJ1hYWCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltZXRlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpXG4gICAgfVxuICB9LFxuXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBgJyswMDowMCdgIG9yIGVxdWl2YWxlbnQpXG4gIHg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGVcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcHRpb25zLnRpbWVab25lXG4gICAgICA/IHR6UGFyc2VUaW1lem9uZShvcHRpb25zLnRpbWVab25lLCBvcmlnaW5hbERhdGUpIC8gTUlMTElTRUNPTkRTX0lOX01JTlVURVxuICAgICAgOiBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ3gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KVxuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWV0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eGBcbiAgICAgIGNhc2UgJ3h4eHgnOlxuICAgICAgY2FzZSAneHgnOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWV0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KVxuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWV0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eHhgXG4gICAgICBjYXNlICd4eHh4eCc6XG4gICAgICBjYXNlICd4eHgnOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWV0ZXJcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKVxuICAgIH1cbiAgfSxcblxuICAvLyBUaW1lem9uZSAoR01UKVxuICBPOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlXG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3B0aW9ucy50aW1lWm9uZVxuICAgICAgPyB0elBhcnNlVGltZXpvbmUob3B0aW9ucy50aW1lWm9uZSwgb3JpZ2luYWxEYXRlKSAvIE1JTExJU0VDT05EU19JTl9NSU5VVEVcbiAgICAgIDogb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KClcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICdPJzpcbiAgICAgIGNhc2UgJ09PJzpcbiAgICAgIGNhc2UgJ09PTyc6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6JylcbiAgICAgIC8vIExvbmdcbiAgICAgIGNhc2UgJ09PT08nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6JylcbiAgICB9XG4gIH0sXG5cbiAgLy8gVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdGlvbilcbiAgejogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgJ3onOlxuICAgICAgY2FzZSAnenonOlxuICAgICAgY2FzZSAnenp6JzpcbiAgICAgICAgcmV0dXJuIHR6SW50bFRpbWVab25lTmFtZSgnc2hvcnQnLCBvcmlnaW5hbERhdGUsIG9wdGlvbnMpXG4gICAgICAvLyBMb25nXG4gICAgICBjYXNlICd6enp6JzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0ekludGxUaW1lWm9uZU5hbWUoJ2xvbmcnLCBvcmlnaW5hbERhdGUsIG9wdGlvbnMpXG4gICAgfVxuICB9LFxufVxuXG5mdW5jdGlvbiBhZGRMZWFkaW5nWmVyb3MobnVtYmVyLCB0YXJnZXRMZW5ndGgpIHtcbiAgdmFyIHNpZ24gPSBudW1iZXIgPCAwID8gJy0nIDogJydcbiAgdmFyIG91dHB1dCA9IE1hdGguYWJzKG51bWJlcikudG9TdHJpbmcoKVxuICB3aGlsZSAob3V0cHV0Lmxlbmd0aCA8IHRhcmdldExlbmd0aCkge1xuICAgIG91dHB1dCA9ICcwJyArIG91dHB1dFxuICB9XG4gIHJldHVybiBzaWduICsgb3V0cHV0XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGlydHlEZWxpbWV0ZXIpIHtcbiAgdmFyIGRlbGltZXRlciA9IGRpcnR5RGVsaW1ldGVyIHx8ICcnXG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJ1xuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KVxuICB2YXIgaG91cnMgPSBhZGRMZWFkaW5nWmVyb3MoTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCksIDIpXG4gIHZhciBtaW51dGVzID0gYWRkTGVhZGluZ1plcm9zKGFic09mZnNldCAlIDYwLCAyKVxuICByZXR1cm4gc2lnbiArIGhvdXJzICsgZGVsaW1ldGVyICsgbWludXRlc1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXMob2Zmc2V0LCBkaXJ0eURlbGltZXRlcikge1xuICBpZiAob2Zmc2V0ICUgNjAgPT09IDApIHtcbiAgICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKydcbiAgICByZXR1cm4gc2lnbiArIGFkZExlYWRpbmdaZXJvcyhNYXRoLmFicyhvZmZzZXQpIC8gNjAsIDIpXG4gIH1cbiAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGlydHlEZWxpbWV0ZXIpXG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lU2hvcnQob2Zmc2V0LCBkaXJ0eURlbGltZXRlcikge1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKydcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldClcbiAgdmFyIGhvdXJzID0gTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MClcbiAgdmFyIG1pbnV0ZXMgPSBhYnNPZmZzZXQgJSA2MFxuICBpZiAobWludXRlcyA9PT0gMCkge1xuICAgIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKVxuICB9XG4gIHZhciBkZWxpbWV0ZXIgPSBkaXJ0eURlbGltZXRlciB8fCAnJ1xuICByZXR1cm4gc2lnbiArIFN0cmluZyhob3VycykgKyBkZWxpbWV0ZXIgKyBhZGRMZWFkaW5nWmVyb3MobWludXRlcywgMilcbn1cblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVyc1xuIiwiaW1wb3J0IGRhdGVGbnNGb3JtYXQgZnJvbSAnZGF0ZS1mbnMvZXNtL2Zvcm1hdCdcbmltcG9ydCBmb3JtYXR0ZXJzIGZyb20gJy4vZm9ybWF0dGVycydcbmltcG9ydCB0b0RhdGUgZnJvbSAnLi4vdG9EYXRlJ1xuXG52YXIgdHpGb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gLyhbeFhPel0rKXwnJ3wnKCcnfFteJ10pKygnfCQpL2dcblxuLyoqXG4gKiBAbmFtZSBmb3JtYXRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgRm9ybWF0IHRoZSBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmcgaW4gdGhlIGdpdmVuIGZvcm1hdC4gVGhlIHJlc3VsdCBtYXkgdmFyeSBieSBsb2NhbGUuXG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGUgYGZvcm1hdGAgdG9rZW5zIGRpZmZlciBmcm9tIE1vbWVudC5qcyBhbmQgb3RoZXIgbGlicmFyaWVzLlxuICogPiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKlxuICogVGhlIGNoYXJhY3RlcnMgd3JhcHBlZCBiZXR3ZWVuIHR3byBzaW5nbGUgcXVvdGVzIGNoYXJhY3RlcnMgKCcpIGFyZSBlc2NhcGVkLlxuICogVHdvIHNpbmdsZSBxdW90ZXMgaW4gYSByb3csIHdoZXRoZXIgaW5zaWRlIG9yIG91dHNpZGUgYSBxdW90ZWQgc2VxdWVuY2UsIHJlcHJlc2VudCBhICdyZWFsJyBzaW5nbGUgcXVvdGUuXG4gKiAoc2VlIHRoZSBsYXN0IGV4YW1wbGUpXG4gKlxuICogRm9ybWF0IG9mIHRoZSBzdHJpbmcgaXMgYmFzZWQgb24gVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZVxuICogd2l0aCBhIGZldyBhZGRpdGlvbnMgKHNlZSBub3RlIDcgYmVsb3cgdGhlIHRhYmxlKS5cbiAqXG4gKiBBY2NlcHRlZCBwYXR0ZXJuczpcbiAqIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBhdHRlcm4gfCBSZXN1bHQgZXhhbXBsZXMgICAgICAgICAgICAgICAgICAgfCBOb3RlcyB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tfFxuICogfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRy4uR0dHICB8IEFELCBCQyAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0cgICAgfCBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHRyAgIHwgQSwgQiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBDYWxlbmRhciB5ZWFyICAgICAgICAgICAgICAgICAgIHwgeSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHlvICAgICAgfCA0NHRoLCAxc3QsIDB0aCwgMTd0aCAgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5ICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5eSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgIHwgWSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlvICAgICAgfCA0NHRoLCAxc3QsIDE5MDB0aCwgMjAxN3RoICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZWSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgIHwgUiAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSICAgICAgfCAtNDMsIDAwLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlIgICAgIHwgLTA0MywgMDAwLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUiAgICB8IC0wMDQzLCAwMDAwLCAwMDAxLCAxOTAwLCAyMDE3ICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlJSICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUsNyB8XG4gKiB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICAgfCB1ICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXUgICAgICB8IC00MywgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dSAgICAgfCAtMDQzLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1ICAgIHwgLTAwNDMsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dXUgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgUXVhcnRlciAoZm9ybWF0dGluZykgICAgICAgICAgICB8IFEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUVEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgUXVhcnRlciAoc3RhbmQtYWxvbmUpICAgICAgICAgICB8IHEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcXEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgTW9udGggKGZvcm1hdHRpbmcpICAgICAgICAgICAgICB8IE0gICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU0gICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTSAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTU0gICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTW9udGggKHN0YW5kLWFsb25lKSAgICAgICAgICAgICB8IEwgICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTEwgICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTCAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTEwgICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgICB8IHcgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3byAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd3cgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgICB8IEkgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSUkgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgICB8IGQgICAgICAgfCAxLCAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzFzdCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZGQgICAgICB8IDAxLCAwMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgICB8IEQgICAgICAgfCAxLCAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgICAgfCA4ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzY1dGgsIDM2NnRoICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREQgICAgICB8IDAxLCAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICB8IDggICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERERCAgICAgfCAwMDEsIDAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREREICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBEYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgICAgIHwgRS4uRUVFICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3UgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUVFICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU3UsIFNhICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICB8IGkgICAgICAgfCAxLCAyLCAzLCAuLi4sIDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgN3RoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWkgICAgICB8IDAxLCAwMiwgLi4uLCAwNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1ICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWkgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpaSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFN1LCBTYSAgICAgICAgfCA3ICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgfCBlICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZW8gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWUgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdSAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZWUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTdSwgU2EgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoc3RhbmQtYWxvbmUpIHwgYyAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjYyAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3UgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2MgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjYyAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2NjICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU3UsIFNhICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICB8IGEuLmFhYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhICAgIHwgYS5tLiwgcC5tLiAgICAgICAgICAgICAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYWEgICB8IGEsIHAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICB8IGIuLmJiYiAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiICAgIHwgYS5tLiwgcC5tLiwgbm9vbiwgbWlkbmlnaHQgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYmIgICB8IGEsIHAsIG4sIG1pICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgICB8IEIuLkJCQiAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCICAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQkIgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgICB8IGggICAgICAgfCAxLCAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBobyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMTJ0aCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaGggICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgICB8IEggICAgICAgfCAwLCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBIbyAgICAgIHwgMHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSEggICAgICB8IDAwLCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgICB8IEsgICAgICAgfCAxLCAyLCAuLi4sIDExLCAwICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMHRoICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS0sgICAgICB8IDEsIDIsIC4uLiwgMTEsIDAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgICB8IGsgICAgICAgfCAyNCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrbyAgICAgIHwgMjR0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga2sgICAgICB8IDI0LCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgICB8IG0gICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW0gICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgICB8IHMgICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc3MgICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgICB8IFMgICAgICAgfCAwLCAxLCAuLi4sIDkgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTUyAgICAgIHwgMDAsIDAxLCAuLi4sIDk5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTICAgICB8IDAwMCwgMDAwMSwgLi4uLCA5OTkgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTU1MgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3LyBaKSAgICAgICAgfCBYICAgICAgIHwgLTA4LCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFggICAgICB8IC0wODAwLCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWCAgICAgfCAtMDg6MDAsICswNTozMCwgWiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYICAgIHwgLTA4MDAsICswNTMwLCBaLCArMTIzNDU2ICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWFggICB8IC0wODowMCwgKzA1OjMwLCBaLCArMTI6MzQ6NTYgICAgICB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgICB8IHggICAgICAgfCAtMDgsICswNTMwLCArMDAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eCAgICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4ICAgICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHggICAgfCAtMDgwMCwgKzA1MzAsICswMDAwLCArMTIzNDU2ICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4eCAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCwgKzEyOjM0OjU2IHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgIHwgTy4uLk9PTyB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE9PT08gICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyICAgICB8XG4gKiB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSAgfCB6Li4uenp6IHwgUERULCBFU1QsIENFU1QgICAgICAgICAgICAgICAgICAgIHwgNiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgenp6eiAgICB8IFBhY2lmaWMgRGF5bGlnaHQgVGltZSAgICAgICAgICAgICB8IDIsNiAgIHxcbiAqIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgICB8IHQgICAgICAgfCA1MTI5Njk1MjAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0dCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgIHwgVCAgICAgICB8IDUxMjk2OTUyMDkwMCAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFRUICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICAgfCBQICAgICAgIHwgMDUvMjkvMTQ1MyAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFAgICAgICB8IE1heSAyOSwgMTQ1MyAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUCAgICAgfCBNYXkgMjl0aCwgMTQ1MyAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQICAgIHwgU3VuZGF5LCBNYXkgMjl0aCwgMTQ1MyAgICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgIHwgcCAgICAgICB8IDEyOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwICAgICAgfCAxMjowMDowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHAgICAgIHwgMTI6MDA6MDAgQU0gR01UKzIgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwcCAgICB8IDEyOjAwOjAwIEFNIEdNVCswMjowMCAgICAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgQ29tYmluYXRpb24gb2YgZGF0ZSBhbmQgdGltZSAgICB8IFBwICAgICAgfCAwNS8yOS8xNDUzLCAxMjowMCBBTSAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUHBwICAgIHwgTWF5IDI5LCAxNDUzLCAxMjowMDowMCBBTSAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQcHBwICB8IE1heSAyOXRoLCAxNDUzIGF0IC4uLiAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFBwcHBwfCBTdW5kYXksIE1heSAyOXRoLCAxNDUzIGF0IC4uLiAgICAgfCAyLDcgICB8XG4gKiBOb3RlczpcbiAqIDEuIFwiRm9ybWF0dGluZ1wiIHVuaXRzIChlLmcuIGZvcm1hdHRpbmcgcXVhcnRlcikgaW4gdGhlIGRlZmF1bHQgZW4tVVMgbG9jYWxlXG4gKiAgICBhcmUgdGhlIHNhbWUgYXMgXCJzdGFuZC1hbG9uZVwiIHVuaXRzLCBidXQgYXJlIGRpZmZlcmVudCBpbiBzb21lIGxhbmd1YWdlcy5cbiAqICAgIFwiRm9ybWF0dGluZ1wiIHVuaXRzIGFyZSBkZWNsaW5lZCBhY2NvcmRpbmcgdG8gdGhlIHJ1bGVzIG9mIHRoZSBsYW5ndWFnZVxuICogICAgaW4gdGhlIGNvbnRleHQgb2YgYSBkYXRlLiBcIlN0YW5kLWFsb25lXCIgdW5pdHMgYXJlIGFsd2F5cyBub21pbmF0aXZlIHNpbmd1bGFyOlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTExMTCcsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWQnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTU1NTScsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWR1J2BcbiAqXG4gKiAyLiBBbnkgc2VxdWVuY2Ugb2YgdGhlIGlkZW50aWNhbCBsZXR0ZXJzIGlzIGEgcGF0dGVybiwgdW5sZXNzIGl0IGlzIGVzY2FwZWQgYnlcbiAqICAgIHRoZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyAoc2VlIGJlbG93KS5cbiAqICAgIElmIHRoZSBzZXF1ZW5jZSBpcyBsb25nZXIgdGhhbiBsaXN0ZWQgaW4gdGFibGUgKGUuZy4gYEVFRUVFRUVFRUVFYClcbiAqICAgIHRoZSBvdXRwdXQgd2lsbCBiZSB0aGUgc2FtZSBhcyBkZWZhdWx0IHBhdHRlcm4gZm9yIHRoaXMgdW5pdCwgdXN1YWxseVxuICogICAgdGhlIGxvbmdlc3Qgb25lIChpbiBjYXNlIG9mIElTTyB3ZWVrZGF5cywgYEVFRUVgKS4gRGVmYXVsdCBwYXR0ZXJucyBmb3IgdW5pdHNcbiAqICAgIGFyZSBtYXJrZWQgd2l0aCBcIjJcIiBpbiB0aGUgbGFzdCBjb2x1bW4gb2YgdGhlIHRhYmxlLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NJykgLy89PiAnTm92J2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTScpIC8vPT4gJ04nYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAzLiBTb21lIHBhdHRlcm5zIGNvdWxkIGJlIHVubGltaXRlZCBsZW5ndGggKHN1Y2ggYXMgYHl5eXl5eXl5YCkuXG4gKiAgICBUaGUgb3V0cHV0IHdpbGwgYmUgcGFkZGVkIHdpdGggemVyb3MgdG8gbWF0Y2ggdGhlIGxlbmd0aCBvZiB0aGUgcGF0dGVybi5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ3l5eXl5eXl5JykgLy89PiAnMDAwMDIwMTcnYFxuICpcbiAqIDQuIGBRUVFRUWAgYW5kIGBxcXFxcWAgY291bGQgYmUgbm90IHN0cmljdGx5IG51bWVyaWNhbCBpbiBzb21lIGxvY2FsZXMuXG4gKiAgICBUaGVzZSB0b2tlbnMgcmVwcmVzZW50IHRoZSBzaG9ydGVzdCBmb3JtIG9mIHRoZSBxdWFydGVyLlxuICpcbiAqIDUuIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBwYXR0ZXJucyBhcmUgQi5DLiB5ZWFyczpcbiAqXG4gKiAgICB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICogICAgfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAqICAgIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gKiAgICB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICogICAgfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAqXG4gKiAgICBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gKiAgICB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQ6XG4gKlxuICogICAgfCBZZWFyIHwgYHl5YCB8IGB1dWAgfFxuICogICAgfC0tLS0tLXwtLS0tLS18LS0tLS0tfFxuICogICAgfCAxICAgIHwgICAwMSB8ICAgMDEgfFxuICogICAgfCAxNCAgIHwgICAxNCB8ICAgMTQgfFxuICogICAgfCAzNzYgIHwgICA3NiB8ICAzNzYgfFxuICogICAgfCAxNDUzIHwgICA1MyB8IDE0NTMgfFxuICpcbiAqICAgIFRoZSBzYW1lIGRpZmZlcmVuY2UgaXMgdHJ1ZSBmb3IgbG9jYWwgYW5kIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFycyAoYFlgIGFuZCBgUmApLFxuICogICAgZXhjZXB0IGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJzIGFyZSBkZXBlbmRlbnQgb24gYG9wdGlvbnMud2Vla1N0YXJ0c09uYFxuICogICAgYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKGNvbXBhcmUgW2dldElTT1dlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldElTT1dlZWtZZWFyfVxuICogICAgYW5kIFtnZXRXZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRXZWVrWWVhcn0pLlxuICpcbiAqIDYuIFNwZWNpZmljIG5vbi1sb2NhdGlvbiB0aW1lem9uZXMgYXJlIGNyZWF0ZWQgdXNpbmcgdGhlIEludGwgYnJvd3NlciBBUEkuIFRoZSBvdXRwdXQgaXMgZGV0ZXJtaW5lZCBieSB0aGVcbiAqICAgIHByZWZlcnJlZCBzdGFuZGFyZCBvZiB0aGUgY3VycmVudCBsb2NhbGUgKGVuLVVTIGJ5IGRlZmF1bHQpIHdoaWNoIG1heSBub3QgYWx3YXlzIGdpdmUgdGhlIGV4cGVjdGVkIHJlc3VsdC5cbiAqICAgIEZvciB0aGlzIHJlYXNvbiBpdCBpcyByZWNvbW1lbmRlZCB0byBzdXBwbHkgYSBgbG9jYWxlYCBpbiB0aGUgZm9ybWF0IG9wdGlvbnMgd2hlbiBmb3JtYXR0aW5nIGEgdGltZSB6b25lIG5hbWUuXG4gKlxuICogNy4gVGhlc2UgcGF0dGVybnMgYXJlIG5vdCBpbiB0aGUgVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogICAgLSBgaWA6IElTTyBkYXkgb2Ygd2Vla1xuICogICAgLSBgSWA6IElTTyB3ZWVrIG9mIHllYXJcbiAqICAgIC0gYFJgOiBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICogICAgLSBgdGA6IHNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBUYDogbWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgb2A6IG9yZGluYWwgbnVtYmVyIG1vZGlmaWVyXG4gKiAgICAtIGBQYDogbG9uZyBsb2NhbGl6ZWQgZGF0ZVxuICogICAgLSBgcGA6IGxvbmcgbG9jYWxpemVkIHRpbWVcbiAqXG4gKiA4LiBUaGVzZSB0b2tlbnMgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggb3RoZXJzLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlXG4gKiAgIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogLSBUaGUgc2Vjb25kIGFyZ3VtZW50IGlzIG5vdyByZXF1aXJlZCBmb3IgdGhlIHNha2Ugb2YgZXhwbGljaXRuZXNzLlxuICpcbiAqICAgYGBgamF2YXNjcmlwdFxuICogICAvLyBCZWZvcmUgdjIuMC4wXG4gKiAgIGZvcm1hdChuZXcgRGF0ZSgyMDE2LCAwLCAxKSlcbiAqXG4gKiAgIC8vIHYyLjAuMCBvbndhcmRcbiAqICAgZm9ybWF0KG5ldyBEYXRlKDIwMTYsIDAsIDEpLCBcInl5eXktTU0tZGQnVCdISDptbTpzcy5TU1N4eHhcIilcbiAqICAgYGBgXG4gKlxuICogLSBOZXcgZm9ybWF0IHN0cmluZyBBUEkgZm9yIGBmb3JtYXRgIGZ1bmN0aW9uXG4gKiAgIHdoaWNoIGlzIGJhc2VkIG9uIFtVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZFxuICogICAjMzVdKGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9GaWVsZF9TeW1ib2xfVGFibGUpLiBTZWUgW3RoaXNcbiAqICAgcG9zdF0oaHR0cHM6Ly9ibG9nLmRhdGUtZm5zLm9yZy9wb3N0L3VuaWNvZGUtdG9rZW5zLWluLWRhdGUtZm5zLXYyLXNyZWF0eWtpOTFqZykgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiAtIENoYXJhY3RlcnMgYXJlIG5vdyBlc2NhcGVkIHVzaW5nIHNpbmdsZSBxdW90ZSBzeW1ib2xzIChgJ2ApIGluc3RlYWQgb2Ygc3F1YXJlIGJyYWNrZXRzLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBmb3JtYXQgLSB0aGUgc3RyaW5nIG9mIHRva2Vuc1xuICogQHBhcmFtIHtPcHRpb25zV2l0aFRafSBbb3B0aW9uc10gLSB0aGUgb2JqZWN0IHdpdGggb3B0aW9ucy4gU2VlIFtPcHRpb25zXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL09wdGlvbnN9XG4gKiBAcGFyYW0gezB8MXwyfSBbb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzPTJdIC0gcGFzc2VkIHRvIGB0b0RhdGVgLiBTZWUgW3RvRGF0ZV17QGxpbmtcbiAqICAgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy90b0RhdGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZT0xXSAtIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXNcbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlXG4gKiAgIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5hd2FyZU9mVW5pY29kZVRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgVW5pY29kZSB0b2tlbnMgY2F1c2VzIGNvbmZ1c2lvbjpcbiAqICAgLSBTb21lIG9mIHRoZSBkYXkgb2YgeWVhciB0b2tlbnMgKGBEYCwgYEREYCkgdGhhdCBhcmUgY29uZnVzZWQgd2l0aCB0aGUgZGF5IG9mIG1vbnRoIHRva2VucyAoYGRgLCBgZGRgKS5cbiAqICAgLSBTb21lIG9mIHRoZSBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyIHRva2VucyAoYFlZYCwgYFlZWVlgKSB0aGF0IGFyZSBjb25mdXNlZCB3aXRoIHRoZSBjYWxlbmRhciB5ZWFyIHRva2Vuc1xuICogICAoYHl5YCwgYHl5eXlgKS4gU2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLnRpbWVab25lPScnXSAtIHVzZWQgdG8gc3BlY2lmeSB0aGUgSUFOQSB0aW1lIHpvbmUgb2Zmc2V0IG9mIGEgZGF0ZSBTdHJpbmcuXG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzYCBtdXN0IGJlIDAsIDEgb3IgMlxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGxvY2FsaXplYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdExvbmdgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5hd2FyZU9mVW5pY29kZVRva2Vuc2AgbXVzdCBiZSBzZXQgdG8gYHRydWVgIHRvIHVzZSBgWFhgIHRva2VuOyBzZWU6XG4gKiAgIGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAxMSBGZWJydWFyeSAyMDE0IGluIG1pZGRsZS1lbmRpYW4gZm9ybWF0OlxuICogdmFyIHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCAxLCAxMSksICdNTS9kZC95eXl5JylcbiAqIC8vPT4gJzAyLzExLzIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAyIEp1bHkgMjAxNCBpbiBFc3BlcmFudG86XG4gKiBpbXBvcnQgeyBlb0xvY2FsZSB9IGZyb20gJ2RhdGUtZm5zL2VzbS9sb2NhbGUvZW8nXG4gKiB2YXIgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIpLCBcImRvICdkZScgTU1NTSB5eXl5XCIsIHtcbiAqICAgbG9jYWxlOiBlb0xvY2FsZVxuICogfSlcbiAqIC8vPT4gJzItYSBkZSBqdWxpbyAyMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBFc2NhcGUgc3RyaW5nIGJ5IHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzOlxuICogdmFyIHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxNSksIFwiaCAnbycnY2xvY2snXCIpXG4gKiAvLz0+IFwiMyBvJ2Nsb2NrXCJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0KGRpcnR5RGF0ZSwgZGlydHlGb3JtYXRTdHIsIGRpcnR5T3B0aW9ucykge1xuICB2YXIgZm9ybWF0U3RyID0gU3RyaW5nKGRpcnR5Rm9ybWF0U3RyKVxuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fVxuXG4gIHZhciBtYXRjaGVzID0gZm9ybWF0U3RyLm1hdGNoKHR6Rm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cClcbiAgaWYgKG1hdGNoZXMpIHtcbiAgICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUsIG9wdGlvbnMpXG4gICAgZm9ybWF0U3RyID0gbWF0Y2hlcy5yZWR1Y2UoZnVuY3Rpb24gKHJlc3VsdCwgdG9rZW4pIHtcbiAgICAgIHJldHVybiB0b2tlblswXSA9PT0gXCInXCJcbiAgICAgICAgPyByZXN1bHRcbiAgICAgICAgOiByZXN1bHQucmVwbGFjZSh0b2tlbiwgXCInXCIgKyBmb3JtYXR0ZXJzW3Rva2VuWzBdXShkYXRlLCB0b2tlbiwgbnVsbCwgb3B0aW9ucykgKyBcIidcIilcbiAgICB9LCBmb3JtYXRTdHIpXG4gIH1cblxuICByZXR1cm4gZGF0ZUZuc0Zvcm1hdChkaXJ0eURhdGUsIGZvcm1hdFN0ciwgb3B0aW9ucylcbn1cbiIsImltcG9ydCB0b0ludGVnZXIgZnJvbSAnZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzJ1xuaW1wb3J0IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgZnJvbSAnZGF0ZS1mbnMvZXNtL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qcydcbmltcG9ydCB0elBhcnNlVGltZXpvbmUgZnJvbSAnLi4vX2xpYi90elBhcnNlVGltZXpvbmUnXG5cbnZhciBNSUxMSVNFQ09ORFNfSU5fSE9VUiA9IDM2MDAwMDBcbnZhciBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFID0gNjAwMDBcbnZhciBERUZBVUxUX0FERElUSU9OQUxfRElHSVRTID0gMlxuXG52YXIgcGF0dGVybnMgPSB7XG4gIGRhdGVUaW1lRGVsaW1ldGVyOiAvW1QgXS8sXG4gIHBsYWluVGltZTogLzovLFxuICB0aW1lWm9uZURlbGltZXRlcjogL1taIF0vaSxcblxuICAvLyB5ZWFyIHRva2Vuc1xuICBZWTogL14oXFxkezJ9KSQvLFxuICBZWVk6IFtcbiAgICAvXihbKy1dXFxkezJ9KSQvLCAvLyAwIGFkZGl0aW9uYWwgZGlnaXRzXG4gICAgL14oWystXVxcZHszfSkkLywgLy8gMSBhZGRpdGlvbmFsIGRpZ2l0XG4gICAgL14oWystXVxcZHs0fSkkLywgLy8gMiBhZGRpdGlvbmFsIGRpZ2l0c1xuICBdLFxuICBZWVlZOiAvXihcXGR7NH0pLyxcbiAgWVlZWVk6IFtcbiAgICAvXihbKy1dXFxkezR9KS8sIC8vIDAgYWRkaXRpb25hbCBkaWdpdHNcbiAgICAvXihbKy1dXFxkezV9KS8sIC8vIDEgYWRkaXRpb25hbCBkaWdpdFxuICAgIC9eKFsrLV1cXGR7Nn0pLywgLy8gMiBhZGRpdGlvbmFsIGRpZ2l0c1xuICBdLFxuXG4gIC8vIGRhdGUgdG9rZW5zXG4gIE1NOiAvXi0oXFxkezJ9KSQvLFxuICBEREQ6IC9eLT8oXFxkezN9KSQvLFxuICBNTUREOiAvXi0/KFxcZHsyfSktPyhcXGR7Mn0pJC8sXG4gIFd3dzogL14tP1coXFxkezJ9KSQvLFxuICBXd3dEOiAvXi0/VyhcXGR7Mn0pLT8oXFxkezF9KSQvLFxuXG4gIEhIOiAvXihcXGR7Mn0oWy4sXVxcZCopPykkLyxcbiAgSEhNTTogL14oXFxkezJ9KTo/KFxcZHsyfShbLixdXFxkKik/KSQvLFxuICBISE1NU1M6IC9eKFxcZHsyfSk6PyhcXGR7Mn0pOj8oXFxkezJ9KFsuLF1cXGQqKT8pJC8sXG5cbiAgLy8gdGltZXpvbmUgdG9rZW5zICh0byBpZGVudGlmeSB0aGUgcHJlc2VuY2Ugb2YgYSB0eilcbiAgdGltZXpvbmU6IC8oW1orLV0uKnwgVVRDfCg/OlthLXpBLVpdK1xcL1thLXpBLVpfXSsoPzpcXC9bYS16QS1aX10rKT8pKSQvLFxufVxuXG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiBhbiBhcmd1bWVudCBpcyBhIHN0cmluZywgdGhlIGZ1bmN0aW9uIHRyaWVzIHRvIHBhcnNlIGl0LlxuICogRnVuY3Rpb24gYWNjZXB0cyBjb21wbGV0ZSBJU08gODYwMSBmb3JtYXRzIGFzIHdlbGwgYXMgcGFydGlhbCBpbXBsZW1lbnRhdGlvbnMuXG4gKiBJU08gODYwMTogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMVxuICogSWYgdGhlIGZ1bmN0aW9uIGNhbm5vdCBwYXJzZSB0aGUgc3RyaW5nIG9yIHRoZSB2YWx1ZXMgYXJlIGludmFsaWQsIGl0IHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICogQWxsICpkYXRlLWZucyogZnVuY3Rpb25zIHdpbGwgdGhyb3cgYFJhbmdlRXJyb3JgIGlmIGBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHNgIGlzIG5vdCAwLCAxLCAyIG9yIHVuZGVmaW5lZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHBhcmFtIHtPcHRpb25zV2l0aFRafSBbb3B0aW9uc10gLSB0aGUgb2JqZWN0IHdpdGggb3B0aW9ucy4gU2VlIFtPcHRpb25zXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL09wdGlvbnN9XG4gKiBAcGFyYW0gezB8MXwyfSBbb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzPTJdIC0gdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXRcbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy50aW1lWm9uZT0nJ10gLSB1c2VkIHRvIHNwZWNpZnkgdGhlIElBTkEgdGltZSB6b25lIG9mZnNldCBvZiBhIGRhdGUgU3RyaW5nLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHNgIG11c3QgYmUgMCwgMSBvciAyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcyMDE0LTAyLTExVDExOjMwOjMwJyB0byBkYXRlOlxuICogdmFyIHJlc3VsdCA9IHRvRGF0ZSgnMjAxNC0wMi0xMVQxMTozMDozMCcpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnKzAyMDE0MTAxJyB0byBkYXRlLFxuICogLy8gaWYgdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXQgaXMgMTpcbiAqIHZhciByZXN1bHQgPSB0b0RhdGUoJyswMjAxNDEwMScsIHthZGRpdGlvbmFsRGlnaXRzOiAxfSlcbiAqIC8vPT4gRnJpIEFwciAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCwgZGlydHlPcHRpb25zKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJzEgYXJndW1lbnQgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmd1bWVudHMubGVuZ3RoICsgJyBwcmVzZW50JylcbiAgfVxuXG4gIGlmIChhcmd1bWVudCA9PT0gbnVsbCkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pXG4gIH1cblxuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fVxuXG4gIHZhciBhZGRpdGlvbmFsRGlnaXRzID1cbiAgICBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHMgPT0gbnVsbFxuICAgICAgPyBERUZBVUxUX0FERElUSU9OQUxfRElHSVRTXG4gICAgICA6IHRvSW50ZWdlcihvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHMpXG4gIGlmIChhZGRpdGlvbmFsRGlnaXRzICE9PSAyICYmIGFkZGl0aW9uYWxEaWdpdHMgIT09IDEgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdhZGRpdGlvbmFsRGlnaXRzIG11c3QgYmUgMCwgMSBvciAyJylcbiAgfVxuXG4gIC8vIENsb25lIHRoZSBkYXRlXG4gIGlmIChcbiAgICBhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHxcbiAgICAodHlwZW9mIGFyZ3VtZW50ID09PSAnb2JqZWN0JyAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpID09PSAnW29iamVjdCBEYXRlXScpXG4gICkge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpXG4gIH0gZWxzZSBpZiAoXG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fFxuICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCkgPT09ICdbb2JqZWN0IE51bWJlcl0nXG4gICkge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudClcbiAgfSBlbHNlIGlmIChcbiAgICAhKFxuICAgICAgdHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpID09PSAnW29iamVjdCBTdHJpbmddJ1xuICAgIClcbiAgKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTilcbiAgfVxuXG4gIHZhciBkYXRlU3RyaW5ncyA9IHNwbGl0RGF0ZVN0cmluZyhhcmd1bWVudClcblxuICB2YXIgcGFyc2VZZWFyUmVzdWx0ID0gcGFyc2VZZWFyKGRhdGVTdHJpbmdzLmRhdGUsIGFkZGl0aW9uYWxEaWdpdHMpXG4gIHZhciB5ZWFyID0gcGFyc2VZZWFyUmVzdWx0LnllYXJcbiAgdmFyIHJlc3REYXRlU3RyaW5nID0gcGFyc2VZZWFyUmVzdWx0LnJlc3REYXRlU3RyaW5nXG5cbiAgdmFyIGRhdGUgPSBwYXJzZURhdGUocmVzdERhdGVTdHJpbmcsIHllYXIpXG5cbiAgaWYgKGlzTmFOKGRhdGUpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTilcbiAgfVxuXG4gIGlmIChkYXRlKSB7XG4gICAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpXG4gICAgdmFyIHRpbWUgPSAwXG4gICAgdmFyIG9mZnNldFxuXG4gICAgaWYgKGRhdGVTdHJpbmdzLnRpbWUpIHtcbiAgICAgIHRpbWUgPSBwYXJzZVRpbWUoZGF0ZVN0cmluZ3MudGltZSlcblxuICAgICAgaWYgKGlzTmFOKHRpbWUpKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRhdGVTdHJpbmdzLnRpbWV6b25lIHx8IG9wdGlvbnMudGltZVpvbmUpIHtcbiAgICAgIG9mZnNldCA9IHR6UGFyc2VUaW1lem9uZShkYXRlU3RyaW5ncy50aW1lem9uZSB8fCBvcHRpb25zLnRpbWVab25lLCBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lKSlcbiAgICAgIGlmIChpc05hTihvZmZzZXQpKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGdldCBvZmZzZXQgYWNjdXJhdGUgdG8gaG91ciBpbiB0aW1lem9uZXMgdGhhdCBjaGFuZ2Ugb2Zmc2V0XG4gICAgICBvZmZzZXQgPSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUpKVxuICAgICAgb2Zmc2V0ID0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lICsgb2Zmc2V0KSlcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSArIG9mZnNldClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKVxuICB9XG59XG5cbmZ1bmN0aW9uIHNwbGl0RGF0ZVN0cmluZyhkYXRlU3RyaW5nKSB7XG4gIHZhciBkYXRlU3RyaW5ncyA9IHt9XG4gIHZhciBhcnJheSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMuZGF0ZVRpbWVEZWxpbWV0ZXIpXG4gIHZhciB0aW1lU3RyaW5nXG5cbiAgaWYgKHBhdHRlcm5zLnBsYWluVGltZS50ZXN0KGFycmF5WzBdKSkge1xuICAgIGRhdGVTdHJpbmdzLmRhdGUgPSBudWxsXG4gICAgdGltZVN0cmluZyA9IGFycmF5WzBdXG4gIH0gZWxzZSB7XG4gICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGFycmF5WzBdXG4gICAgdGltZVN0cmluZyA9IGFycmF5WzFdXG4gICAgZGF0ZVN0cmluZ3MudGltZXpvbmUgPSBhcnJheVsyXVxuICAgIGlmIChwYXR0ZXJucy50aW1lWm9uZURlbGltZXRlci50ZXN0KGRhdGVTdHJpbmdzLmRhdGUpKSB7XG4gICAgICBkYXRlU3RyaW5ncy5kYXRlID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy50aW1lWm9uZURlbGltZXRlcilbMF1cbiAgICAgIHRpbWVTdHJpbmcgPSBkYXRlU3RyaW5nLnN1YnN0cihkYXRlU3RyaW5ncy5kYXRlLmxlbmd0aCwgZGF0ZVN0cmluZy5sZW5ndGgpXG4gICAgfVxuICB9XG5cbiAgaWYgKHRpbWVTdHJpbmcpIHtcbiAgICB2YXIgdG9rZW4gPSBwYXR0ZXJucy50aW1lem9uZS5leGVjKHRpbWVTdHJpbmcpXG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lID0gdGltZVN0cmluZy5yZXBsYWNlKHRva2VuWzFdLCAnJylcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWV6b25lID0gdG9rZW5bMV1cbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmdcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGF0ZVN0cmluZ3Ncbn1cblxuZnVuY3Rpb24gcGFyc2VZZWFyKGRhdGVTdHJpbmcsIGFkZGl0aW9uYWxEaWdpdHMpIHtcbiAgdmFyIHBhdHRlcm5ZWVkgPSBwYXR0ZXJucy5ZWVlbYWRkaXRpb25hbERpZ2l0c11cbiAgdmFyIHBhdHRlcm5ZWVlZWSA9IHBhdHRlcm5zLllZWVlZW2FkZGl0aW9uYWxEaWdpdHNdXG5cbiAgdmFyIHRva2VuXG5cbiAgLy8gWVlZWSBvciDCsVlZWVlZXG4gIHRva2VuID0gcGF0dGVybnMuWVlZWS5leGVjKGRhdGVTdHJpbmcpIHx8IHBhdHRlcm5ZWVlZWS5leGVjKGRhdGVTdHJpbmcpXG4gIGlmICh0b2tlbikge1xuICAgIHZhciB5ZWFyU3RyaW5nID0gdG9rZW5bMV1cbiAgICByZXR1cm4ge1xuICAgICAgeWVhcjogcGFyc2VJbnQoeWVhclN0cmluZywgMTApLFxuICAgICAgcmVzdERhdGVTdHJpbmc6IGRhdGVTdHJpbmcuc2xpY2UoeWVhclN0cmluZy5sZW5ndGgpLFxuICAgIH1cbiAgfVxuXG4gIC8vIFlZIG9yIMKxWVlZXG4gIHRva2VuID0gcGF0dGVybnMuWVkuZXhlYyhkYXRlU3RyaW5nKSB8fCBwYXR0ZXJuWVlZLmV4ZWMoZGF0ZVN0cmluZylcbiAgaWYgKHRva2VuKSB7XG4gICAgdmFyIGNlbnR1cnlTdHJpbmcgPSB0b2tlblsxXVxuICAgIHJldHVybiB7XG4gICAgICB5ZWFyOiBwYXJzZUludChjZW50dXJ5U3RyaW5nLCAxMCkgKiAxMDAsXG4gICAgICByZXN0RGF0ZVN0cmluZzogZGF0ZVN0cmluZy5zbGljZShjZW50dXJ5U3RyaW5nLmxlbmd0aCksXG4gICAgfVxuICB9XG5cbiAgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcbiAgcmV0dXJuIHtcbiAgICB5ZWFyOiBudWxsLFxuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZShkYXRlU3RyaW5nLCB5ZWFyKSB7XG4gIC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG4gIGlmICh5ZWFyID09PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHZhciB0b2tlblxuICB2YXIgZGF0ZVxuICB2YXIgbW9udGhcbiAgdmFyIHdlZWtcblxuICAvLyBZWVlZXG4gIGlmIChkYXRlU3RyaW5nLmxlbmd0aCA9PT0gMCkge1xuICAgIGRhdGUgPSBuZXcgRGF0ZSgwKVxuICAgIGRhdGUuc2V0VVRDRnVsbFllYXIoeWVhcilcbiAgICByZXR1cm4gZGF0ZVxuICB9XG5cbiAgLy8gWVlZWS1NTVxuICB0b2tlbiA9IHBhdHRlcm5zLk1NLmV4ZWMoZGF0ZVN0cmluZylcbiAgaWYgKHRva2VuKSB7XG4gICAgZGF0ZSA9IG5ldyBEYXRlKDApXG4gICAgbW9udGggPSBwYXJzZUludCh0b2tlblsxXSwgMTApIC0gMVxuXG4gICAgaWYgKCF2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKVxuICAgIH1cblxuICAgIGRhdGUuc2V0VVRDRnVsbFllYXIoeWVhciwgbW9udGgpXG4gICAgcmV0dXJuIGRhdGVcbiAgfVxuXG4gIC8vIFlZWVktREREIG9yIFlZWVlERERcbiAgdG9rZW4gPSBwYXR0ZXJucy5EREQuZXhlYyhkYXRlU3RyaW5nKVxuICBpZiAodG9rZW4pIHtcbiAgICBkYXRlID0gbmV3IERhdGUoMClcbiAgICB2YXIgZGF5T2ZZZWFyID0gcGFyc2VJbnQodG9rZW5bMV0sIDEwKVxuXG4gICAgaWYgKCF2YWxpZGF0ZURheU9mWWVhckRhdGUoeWVhciwgZGF5T2ZZZWFyKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTilcbiAgICB9XG5cbiAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGRheU9mWWVhcilcbiAgICByZXR1cm4gZGF0ZVxuICB9XG5cbiAgLy8geXl5eS1NTS1kZCBvciBZWVlZTU1ERFxuICB0b2tlbiA9IHBhdHRlcm5zLk1NREQuZXhlYyhkYXRlU3RyaW5nKVxuICBpZiAodG9rZW4pIHtcbiAgICBkYXRlID0gbmV3IERhdGUoMClcbiAgICBtb250aCA9IHBhcnNlSW50KHRva2VuWzFdLCAxMCkgLSAxXG4gICAgdmFyIGRheSA9IHBhcnNlSW50KHRva2VuWzJdLCAxMClcblxuICAgIGlmICghdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXkpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKVxuICAgIH1cblxuICAgIGRhdGUuc2V0VVRDRnVsbFllYXIoeWVhciwgbW9udGgsIGRheSlcbiAgICByZXR1cm4gZGF0ZVxuICB9XG5cbiAgLy8gWVlZWS1Xd3cgb3IgWVlZWVd3d1xuICB0b2tlbiA9IHBhdHRlcm5zLld3dy5leGVjKGRhdGVTdHJpbmcpXG4gIGlmICh0b2tlbikge1xuICAgIHdlZWsgPSBwYXJzZUludCh0b2tlblsxXSwgMTApIC0gMVxuXG4gICAgaWYgKCF2YWxpZGF0ZVdlZWtEYXRlKHllYXIsIHdlZWspKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKVxuICAgIH1cblxuICAgIHJldHVybiBkYXlPZklTT1dlZWtZZWFyKHllYXIsIHdlZWspXG4gIH1cblxuICAvLyBZWVlZLVd3dy1EIG9yIFlZWVlXd3dEXG4gIHRva2VuID0gcGF0dGVybnMuV3d3RC5leGVjKGRhdGVTdHJpbmcpXG4gIGlmICh0b2tlbikge1xuICAgIHdlZWsgPSBwYXJzZUludCh0b2tlblsxXSwgMTApIC0gMVxuICAgIHZhciBkYXlPZldlZWsgPSBwYXJzZUludCh0b2tlblsyXSwgMTApIC0gMVxuXG4gICAgaWYgKCF2YWxpZGF0ZVdlZWtEYXRlKHllYXIsIHdlZWssIGRheU9mV2VlaykpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pXG4gICAgfVxuXG4gICAgcmV0dXJuIGRheU9mSVNPV2Vla1llYXIoeWVhciwgd2VlaywgZGF5T2ZXZWVrKVxuICB9XG5cbiAgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIGRhdGVcbiAgcmV0dXJuIG51bGxcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lKHRpbWVTdHJpbmcpIHtcbiAgdmFyIHRva2VuXG4gIHZhciBob3Vyc1xuICB2YXIgbWludXRlc1xuXG4gIC8vIGhoXG4gIHRva2VuID0gcGF0dGVybnMuSEguZXhlYyh0aW1lU3RyaW5nKVxuICBpZiAodG9rZW4pIHtcbiAgICBob3VycyA9IHBhcnNlRmxvYXQodG9rZW5bMV0ucmVwbGFjZSgnLCcsICcuJykpXG5cbiAgICBpZiAoIXZhbGlkYXRlVGltZShob3VycykpIHtcbiAgICAgIHJldHVybiBOYU5cbiAgICB9XG5cbiAgICByZXR1cm4gKGhvdXJzICUgMjQpICogTUlMTElTRUNPTkRTX0lOX0hPVVJcbiAgfVxuXG4gIC8vIGhoOm1tIG9yIGhobW1cbiAgdG9rZW4gPSBwYXR0ZXJucy5ISE1NLmV4ZWModGltZVN0cmluZylcbiAgaWYgKHRva2VuKSB7XG4gICAgaG91cnMgPSBwYXJzZUludCh0b2tlblsxXSwgMTApXG4gICAgbWludXRlcyA9IHBhcnNlRmxvYXQodG9rZW5bMl0ucmVwbGFjZSgnLCcsICcuJykpXG5cbiAgICBpZiAoIXZhbGlkYXRlVGltZShob3VycywgbWludXRlcykpIHtcbiAgICAgIHJldHVybiBOYU5cbiAgICB9XG5cbiAgICByZXR1cm4gKGhvdXJzICUgMjQpICogTUlMTElTRUNPTkRTX0lOX0hPVVIgKyBtaW51dGVzICogTUlMTElTRUNPTkRTX0lOX01JTlVURVxuICB9XG5cbiAgLy8gaGg6bW06c3Mgb3IgaGhtbXNzXG4gIHRva2VuID0gcGF0dGVybnMuSEhNTVNTLmV4ZWModGltZVN0cmluZylcbiAgaWYgKHRva2VuKSB7XG4gICAgaG91cnMgPSBwYXJzZUludCh0b2tlblsxXSwgMTApXG4gICAgbWludXRlcyA9IHBhcnNlSW50KHRva2VuWzJdLCAxMClcbiAgICB2YXIgc2Vjb25kcyA9IHBhcnNlRmxvYXQodG9rZW5bM10ucmVwbGFjZSgnLCcsICcuJykpXG5cbiAgICBpZiAoIXZhbGlkYXRlVGltZShob3VycywgbWludXRlcywgc2Vjb25kcykpIHtcbiAgICAgIHJldHVybiBOYU5cbiAgICB9XG5cbiAgICByZXR1cm4gKGhvdXJzICUgMjQpICogTUlMTElTRUNPTkRTX0lOX0hPVVIgKyBtaW51dGVzICogTUlMTElTRUNPTkRTX0lOX01JTlVURSArIHNlY29uZHMgKiAxMDAwXG4gIH1cblxuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgdGltZVxuICByZXR1cm4gbnVsbFxufVxuXG5mdW5jdGlvbiBkYXlPZklTT1dlZWtZZWFyKGlzb1dlZWtZZWFyLCB3ZWVrLCBkYXkpIHtcbiAgd2VlayA9IHdlZWsgfHwgMFxuICBkYXkgPSBkYXkgfHwgMFxuICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApXG4gIGRhdGUuc2V0VVRDRnVsbFllYXIoaXNvV2Vla1llYXIsIDAsIDQpXG4gIHZhciBmb3VydGhPZkphbnVhcnlEYXkgPSBkYXRlLmdldFVUQ0RheSgpIHx8IDdcbiAgdmFyIGRpZmYgPSB3ZWVrICogNyArIGRheSArIDEgLSBmb3VydGhPZkphbnVhcnlEYXlcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpICsgZGlmZilcbiAgcmV0dXJuIGRhdGVcbn1cblxuLy8gVmFsaWRhdGlvbiBmdW5jdGlvbnNcblxudmFyIERBWVNfSU5fTU9OVEggPSBbMzEsIDI4LCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV1cbnZhciBEQVlTX0lOX01PTlRIX0xFQVBfWUVBUiA9IFszMSwgMjksIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXVxuXG5mdW5jdGlvbiBpc0xlYXBZZWFySW5kZXgoeWVhcikge1xuICByZXR1cm4geWVhciAlIDQwMCA9PT0gMCB8fCAoeWVhciAlIDQgPT09IDAgJiYgeWVhciAlIDEwMCAhPT0gMClcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXRlKSB7XG4gIGlmIChtb250aCA8IDAgfHwgbW9udGggPiAxMSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgaWYgKGRhdGUgIT0gbnVsbCkge1xuICAgIGlmIChkYXRlIDwgMSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgdmFyIGlzTGVhcFllYXIgPSBpc0xlYXBZZWFySW5kZXgoeWVhcilcbiAgICBpZiAoaXNMZWFwWWVhciAmJiBkYXRlID4gREFZU19JTl9NT05USF9MRUFQX1lFQVJbbW9udGhdKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgaWYgKCFpc0xlYXBZZWFyICYmIGRhdGUgPiBEQVlTX0lOX01PTlRIW21vbnRoXSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWVcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikge1xuICBpZiAoZGF5T2ZZZWFyIDwgMSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgdmFyIGlzTGVhcFllYXIgPSBpc0xlYXBZZWFySW5kZXgoeWVhcilcbiAgaWYgKGlzTGVhcFllYXIgJiYgZGF5T2ZZZWFyID4gMzY2KSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgaWYgKCFpc0xlYXBZZWFyICYmIGRheU9mWWVhciA+IDM2NSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIHRydWVcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVXZWVrRGF0ZSh5ZWFyLCB3ZWVrLCBkYXkpIHtcbiAgaWYgKHdlZWsgPCAwIHx8IHdlZWsgPiA1Mikge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgaWYgKGRheSAhPSBudWxsICYmIChkYXkgPCAwIHx8IGRheSA+IDYpKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gdHJ1ZVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVRpbWUoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpIHtcbiAgaWYgKGhvdXJzICE9IG51bGwgJiYgKGhvdXJzIDwgMCB8fCBob3VycyA+PSAyNSkpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGlmIChtaW51dGVzICE9IG51bGwgJiYgKG1pbnV0ZXMgPCAwIHx8IG1pbnV0ZXMgPj0gNjApKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBpZiAoc2Vjb25kcyAhPSBudWxsICYmIChzZWNvbmRzIDwgMCB8fCBzZWNvbmRzID49IDYwKSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIHRydWVcbn1cbiIsImltcG9ydCB0elBhcnNlVGltZXpvbmUgZnJvbSAnLi4vX2xpYi90elBhcnNlVGltZXpvbmUnXG5pbXBvcnQgdG9EYXRlIGZyb20gJy4uL3RvRGF0ZSdcblxuLyoqXG4gKiBAbmFtZSB1dGNUb1pvbmVkVGltZVxuICogQGNhdGVnb3J5IFRpbWUgWm9uZSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgYSBkYXRlL3RpbWUgcmVwcmVzZW50aW5nIGxvY2FsIHRpbWUgaW4gYSBnaXZlbiB0aW1lIHpvbmUgZnJvbSB0aGUgVVRDIGRhdGVcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgYSBkYXRlIGluc3RhbmNlIHdpdGggdmFsdWVzIHJlcHJlc2VudGluZyB0aGUgbG9jYWwgdGltZSBpbiB0aGUgdGltZSB6b25lXG4gKiBzcGVjaWZpZWQgb2YgdGhlIFVUQyB0aW1lIGZyb20gdGhlIGRhdGUgcHJvdmlkZWQuIEluIG90aGVyIHdvcmRzLCB3aGVuIHRoZSBuZXcgZGF0ZVxuICogaXMgZm9ybWF0dGVkIGl0IHdpbGwgc2hvdyB0aGUgZXF1aXZhbGVudCBob3VycyBpbiB0aGUgdGFyZ2V0IHRpbWUgem9uZSByZWdhcmRsZXNzXG4gKiBvZiB0aGUgY3VycmVudCBzeXN0ZW0gdGltZSB6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgd2l0aCB0aGUgcmVsZXZhbnQgVVRDIHRpbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSB0aW1lWm9uZSAtIHRoZSB0aW1lIHpvbmUgdG8gZ2V0IGxvY2FsIHRpbWUgZm9yLCBjYW4gYmUgYW4gb2Zmc2V0IG9yIElBTkEgdGltZSB6b25lXG4gKiBAcGFyYW0ge09wdGlvbnNXaXRoVFp9IFtvcHRpb25zXSAtIHRoZSBvYmplY3Qgd2l0aCBvcHRpb25zLiBTZWUgW09wdGlvbnNde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvT3B0aW9uc31cbiAqIEBwYXJhbSB7MHwxfDJ9IFtvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHM9Ml0gLSBwYXNzZWQgdG8gYHRvRGF0ZWAuIFNlZSBbdG9EYXRlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL3RvRGF0ZX1cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgZXF1aXZhbGVudCB0aW1lIGluIHRoZSB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHNgIG11c3QgYmUgMCwgMSBvciAyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEluIEp1bmUgMTBhbSBVVEMgaXMgNmFtIGluIE5ldyBZb3JrICgtMDQ6MDApXG4gKiBjb25zdCByZXN1bHQgPSB1dGNUb1pvbmVkVGltZSgnMjAxNC0wNi0yNVQxMDowMDowMC4wMDBaJywgJ0FtZXJpY2EvTmV3X1lvcmsnKVxuICogLy89PiBKdW4gMjUgMjAxNCAwNjowMDowMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1dGNUb1pvbmVkVGltZShkaXJ0eURhdGUsIHRpbWVab25lLCBvcHRpb25zKSB7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSwgb3B0aW9ucylcblxuICB2YXIgb2Zmc2V0TWlsbGlzZWNvbmRzID0gdHpQYXJzZVRpbWV6b25lKHRpbWVab25lLCBkYXRlLCB0cnVlKSB8fCAwXG5cbiAgdmFyIGQgPSBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSAtIG9mZnNldE1pbGxpc2Vjb25kcylcblxuICB2YXIgem9uZWRUaW1lID0gbmV3IERhdGUoXG4gICAgZC5nZXRVVENGdWxsWWVhcigpLFxuICAgIGQuZ2V0VVRDTW9udGgoKSxcbiAgICBkLmdldFVUQ0RhdGUoKSxcbiAgICBkLmdldFVUQ0hvdXJzKCksXG4gICAgZC5nZXRVVENNaW51dGVzKCksXG4gICAgZC5nZXRVVENTZWNvbmRzKCksXG4gICAgZC5nZXRVVENNaWxsaXNlY29uZHMoKVxuICApXG5cbiAgcmV0dXJuIHpvbmVkVGltZVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTGVhZGluZ1plcm9zKG51bWJlciwgdGFyZ2V0TGVuZ3RoKSB7XG4gIHZhciBzaWduID0gbnVtYmVyIDwgMCA/ICctJyA6ICcnO1xuICB2YXIgb3V0cHV0ID0gTWF0aC5hYnMobnVtYmVyKS50b1N0cmluZygpO1xuXG4gIHdoaWxlIChvdXRwdXQubGVuZ3RoIDwgdGFyZ2V0TGVuZ3RoKSB7XG4gICAgb3V0cHV0ID0gJzAnICsgb3V0cHV0O1xuICB9XG5cbiAgcmV0dXJuIHNpZ24gKyBvdXRwdXQ7XG59IiwiaW1wb3J0IGxpZ2h0Rm9ybWF0dGVycyBmcm9tIFwiLi4vbGlnaHRGb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDRGF5T2ZZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0RheU9mWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ0lTT1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDV2Vla1llYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBhZGRMZWFkaW5nWmVyb3MgZnJvbSBcIi4uLy4uL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qc1wiO1xudmFyIGRheVBlcmlvZEVudW0gPSB7XG4gIGFtOiAnYW0nLFxuICBwbTogJ3BtJyxcbiAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gIG5vb246ICdub29uJyxcbiAgbW9ybmluZzogJ21vcm5pbmcnLFxuICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICBldmVuaW5nOiAnZXZlbmluZycsXG4gIG5pZ2h0OiAnbmlnaHQnXG59O1xuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgTWlsbGlzZWNvbmRzIGluIGRheSAgICAgICAgICAgIHxcbiAqIHwgIGIgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgIHwgIEIgIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgIHxcbiAqIHwgIGMgIHwgU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWsgIHwgIEMqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGUgIHwgTG9jYWwgZGF5IG9mIHdlZWsgICAgICAgICAgICAgIHwgIEUgIHwgRGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGYgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEYqIHwgRGF5IG9mIHdlZWsgaW4gbW9udGggICAgICAgICAgIHxcbiAqIHwgIGcqIHwgTW9kaWZpZWQgSnVsaWFuIGRheSAgICAgICAgICAgIHwgIEcgIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGkhIHwgSVNPIGRheSBvZiB3ZWVrICAgICAgICAgICAgICAgIHwgIEkhIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgIHxcbiAqIHwgIGoqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHwgIEoqIHwgTG9jYWxpemVkIGhvdXIgdy9vIGRheSBwZXJpb2QgIHxcbiAqIHwgIGsgIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgIHwgIEsgIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGwqIHwgKGRlcHJlY2F0ZWQpICAgICAgICAgICAgICAgICAgIHwgIEwgIHwgU3RhbmQtYWxvbmUgbW9udGggICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG8hIHwgT3JkaW5hbCBudW1iZXIgbW9kaWZpZXIgICAgICAgIHwgIE8gIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHAhIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgIHwgIFAhIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgIHxcbiAqIHwgIHEgIHwgU3RhbmQtYWxvbmUgcXVhcnRlciAgICAgICAgICAgIHwgIFEgIHwgUXVhcnRlciAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHIqIHwgUmVsYXRlZCBHcmVnb3JpYW4geWVhciAgICAgICAgIHwgIFIhIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHQhIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgIHwgIFQhIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgIHxcbiAqIHwgIHUgIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgIHwgIFUqIHwgQ3ljbGljIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHYqIHwgVGltZXpvbmUgKGdlbmVyaWMgbm9uLWxvY2F0LikgIHwgIFYqIHwgVGltZXpvbmUgKGxvY2F0aW9uKSAgICAgICAgICAgIHxcbiAqIHwgIHcgIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgIHwgIFcqIHwgV2VlayBvZiBtb250aCAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHggIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgIHwgIFggIHwgVGltZXpvbmUgKElTTy04NjAxKSAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgIHxcbiAqIHwgIHogIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pIHwgIFoqIHwgVGltZXpvbmUgKGFsaWFzZXMpICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgISBhcmUgbm9uLXN0YW5kYXJkLCBidXQgaW1wbGVtZW50ZWQgYnkgZGF0ZS1mbnM6XG4gKiAtIGBvYCBtb2RpZmllcyB0aGUgcHJldmlvdXMgdG9rZW4gdG8gdHVybiBpdCBpbnRvIGFuIG9yZGluYWwgKHNlZSBgZm9ybWF0YCBkb2NzKVxuICogLSBgaWAgaXMgSVNPIGRheSBvZiB3ZWVrLiBGb3IgYGlgIGFuZCBgaWlgIGlzIHJldHVybnMgbnVtZXJpYyBJU08gd2VlayBkYXlzLFxuICogICBpLmUuIDcgZm9yIFN1bmRheSwgMSBmb3IgTW9uZGF5LCBldGMuXG4gKiAtIGBJYCBpcyBJU08gd2VlayBvZiB5ZWFyLCBhcyBvcHBvc2VkIHRvIGB3YCB3aGljaCBpcyBsb2NhbCB3ZWVrIG9mIHllYXIuXG4gKiAtIGBSYCBpcyBJU08gd2Vlay1udW1iZXJpbmcgeWVhciwgYXMgb3Bwb3NlZCB0byBgWWAgd2hpY2ggaXMgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhci5cbiAqICAgYFJgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgSWAgYW5kIGBpYFxuICogICBmb3IgdW5pdmVyc2FsIElTTyB3ZWVrLW51bWJlcmluZyBkYXRlLCB3aGVyZWFzXG4gKiAgIGBZYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYHdgIGFuZCBgZWBcbiAqICAgZm9yIHdlZWstbnVtYmVyaW5nIGRhdGUgc3BlY2lmaWMgdG8gdGhlIGxvY2FsZS5cbiAqIC0gYFBgIGlzIGxvbmcgbG9jYWxpemVkIGRhdGUgZm9ybWF0XG4gKiAtIGBwYCBpcyBsb25nIGxvY2FsaXplZCB0aW1lIGZvcm1hdFxuICovXG5cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBFcmFcbiAgRzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBlcmEgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgPiAwID8gMSA6IDA7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBBRCwgQkNcbiAgICAgIGNhc2UgJ0cnOlxuICAgICAgY2FzZSAnR0cnOlxuICAgICAgY2FzZSAnR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEEsIEJcblxuICAgICAgY2FzZSAnR0dHR0cnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93J1xuICAgICAgICB9KTtcbiAgICAgIC8vIEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0XG5cbiAgICAgIGNhc2UgJ0dHR0cnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgLy8gT3JkaW5hbCBudW1iZXJcbiAgICBpZiAodG9rZW4gPT09ICd5bycpIHtcbiAgICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoeWVhciwge1xuICAgICAgICB1bml0OiAneWVhcidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMueShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgWTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBzaWduZWRXZWVrWWVhciA9IGdldFVUQ1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgdmFyIHdlZWtZZWFyID0gc2lnbmVkV2Vla1llYXIgPiAwID8gc2lnbmVkV2Vla1llYXIgOiAxIC0gc2lnbmVkV2Vla1llYXI7IC8vIFR3byBkaWdpdCB5ZWFyXG5cbiAgICBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICAgIHZhciB0d29EaWdpdFllYXIgPSB3ZWVrWWVhciAlIDEwMDtcbiAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModHdvRGlnaXRZZWFyLCAyKTtcbiAgICB9IC8vIE9yZGluYWwgbnVtYmVyXG5cblxuICAgIGlmICh0b2tlbiA9PT0gJ1lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vla1llYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9IC8vIFBhZGRpbmdcblxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgUjogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGlzb1dlZWtZZWFyID0gZ2V0VVRDSVNPV2Vla1llYXIoZGF0ZSk7IC8vIFBhZGRpbmdcblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEV4dGVuZGVkIHllYXIuIFRoaXMgaXMgYSBzaW5nbGUgbnVtYmVyIGRlc2lnbmF0aW5nIHRoZSB5ZWFyIG9mIHRoaXMgY2FsZW5kYXIgc3lzdGVtLlxuICAvLyBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgbG9jYWxpemVycyBhcmUgQi5DLiB5ZWFyczpcbiAgLy8gfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAgLy8gfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAgLy8gfCBBQyAxIHwgICAxIHwgICAxIHxcbiAgLy8gfCBCQyAxIHwgICAxIHwgICAwIHxcbiAgLy8gfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAgLy8gQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICAvLyB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQuXG4gIHU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gUXVhcnRlclxuICBROiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdRJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG5cbiAgICAgIGNhc2UgJ1FRJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuXG4gICAgICBjYXNlICdRbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuXG4gICAgICBjYXNlICdRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG5cbiAgICAgIGNhc2UgJ1FRUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuXG4gICAgICBjYXNlICdRUVFRJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIHF1YXJ0ZXJcbiAgcTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAncSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuXG4gICAgICBjYXNlICdxcSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcblxuICAgICAgY2FzZSAncW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcblxuICAgICAgY2FzZSAncXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuXG4gICAgICBjYXNlICdxcXFxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cblxuICAgICAgY2FzZSAncXFxcSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnTSc6XG4gICAgICBjYXNlICdNTSc6XG4gICAgICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuTShkYXRlLCB0b2tlbik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG5cbiAgICAgIGNhc2UgJ01vJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuXG4gICAgICBjYXNlICdNTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcblxuICAgICAgY2FzZSAnTU1NTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcblxuICAgICAgY2FzZSAnTU1NTSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIG1vbnRoXG4gIEw6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAuLi4sIDEyXG4gICAgICBjYXNlICdMJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhtb250aCArIDEpO1xuICAgICAgLy8gMDEsIDAyLCAuLi4sIDEyXG5cbiAgICAgIGNhc2UgJ0xMJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuXG4gICAgICBjYXNlICdMbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcblxuICAgICAgY2FzZSAnTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG5cbiAgICAgIGNhc2UgJ0xMTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG5cbiAgICAgIGNhc2UgJ0xMTEwnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCB3ZWVrIG9mIHllYXJcbiAgdzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciB3ZWVrID0gZ2V0VVRDV2VlayhkYXRlLCBvcHRpb25zKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ3dvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWsgb2YgeWVhclxuICBJOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGlzb1dlZWsgPSBnZXRVVENJU09XZWVrKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSAnSW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29XZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdkbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDRGF0ZSgpLCB7XG4gICAgICAgIHVuaXQ6ICdkYXRlJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5kKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHllYXJcbiAgRDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZlllYXIgPSBnZXRVVENEYXlPZlllYXIoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09ICdEbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRheU9mWWVhciwge1xuICAgICAgICB1bml0OiAnZGF5T2ZZZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXlPZlllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB3ZWVrXG4gIEU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSAnRSc6XG4gICAgICBjYXNlICdFRSc6XG4gICAgICBjYXNlICdFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdFRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnRUVFRSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgZGF5IG9mIHdlZWtcbiAgZTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChOdGggZGF5IG9mIHdlZWsgd2l0aCBjdXJyZW50IGxvY2FsZSBvciB3ZWVrU3RhcnRzT24pXG4gICAgICBjYXNlICdlJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG5cbiAgICAgIGNhc2UgJ2VlJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcblxuICAgICAgY2FzZSAnZW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdlZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnZWVlZSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWtcbiAgYzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChzYW1lIGFzIGluIGBlYClcbiAgICAgIGNhc2UgJ2MnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcblxuICAgICAgY2FzZSAnY2MnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG5cbiAgICAgIGNhc2UgJ2NvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnY2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2NjY2MnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIElTTyBkYXkgb2Ygd2Vla1xuICBpOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGlzb0RheU9mV2VlayA9IGRheU9mV2VlayA9PT0gMCA/IDcgOiBkYXlPZldlZWs7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAyXG4gICAgICBjYXNlICdpJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhpc29EYXlPZldlZWspO1xuICAgICAgLy8gMDJcblxuICAgICAgY2FzZSAnaWknOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb0RheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDJuZFxuXG4gICAgICBjYXNlICdpbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb0RheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlXG5cbiAgICAgIGNhc2UgJ2lpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2lpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdpaWlpJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNLCBQTSwgbWlkbmlnaHQsIG5vb25cbiAgYjogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgaWYgKGhvdXJzID09PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPT09IDApIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubWlkbmlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2InOlxuICAgICAgY2FzZSAnYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYmJiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2JiYmInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIGluIHRoZSBtb3JuaW5nLCBpbiB0aGUgYWZ0ZXJub29uLCBpbiB0aGUgZXZlbmluZywgYXQgbmlnaHRcbiAgQjogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgaWYgKGhvdXJzID49IDE3KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmV2ZW5pbmc7XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5hZnRlcm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSA0KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1vcm5pbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubmlnaHQ7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnQic6XG4gICAgICBjYXNlICdCQic6XG4gICAgICBjYXNlICdCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnQkJCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ0JCQkInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdobycpIHtcbiAgICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuICAgICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDEyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnSG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0hvdXJzKCksIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLkgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTExXVxuICBLOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpICUgMTI7XG5cbiAgICBpZiAodG9rZW4gPT09ICdLbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSG91ciBbMS0yNF1cbiAgazogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMjQ7XG5cbiAgICBpZiAodG9rZW4gPT09ICdrbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdtbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDTWludXRlcygpLCB7XG4gICAgICAgIHVuaXQ6ICdtaW51dGUnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLm0oZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ3NvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHtcbiAgICAgICAgdW5pdDogJ3NlY29uZCdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMucyhkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLlMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYWx3YXlzIGAnWidgKVxuICBYOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIGlmICh0aW1lem9uZU9mZnNldCA9PT0gMCkge1xuICAgICAgcmV0dXJuICdaJztcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAnWCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhgXG5cbiAgICAgIGNhc2UgJ1hYWFgnOlxuICAgICAgY2FzZSAnWFgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYWGBcblxuICAgICAgY2FzZSAnWFhYWFgnOlxuICAgICAgY2FzZSAnWFhYJzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBgJyswMDowMCdgIG9yIGVxdWl2YWxlbnQpXG4gIHg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ3gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4YFxuXG4gICAgICBjYXNlICd4eHh4JzpcbiAgICAgIGNhc2UgJ3h4JzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eHhgXG5cbiAgICAgIGNhc2UgJ3h4eHh4JzpcbiAgICAgIGNhc2UgJ3h4eCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoR01UKVxuICBPOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICdPJzpcbiAgICAgIGNhc2UgJ09PJzpcbiAgICAgIGNhc2UgJ09PTyc6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG5cbiAgICAgIGNhc2UgJ09PT08nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0aW9uKVxuICB6OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICd6JzpcbiAgICAgIGNhc2UgJ3p6JzpcbiAgICAgIGNhc2UgJ3p6eic6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG5cbiAgICAgIGNhc2UgJ3p6enonOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBTZWNvbmRzIHRpbWVzdGFtcFxuICB0OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXN0YW1wID0gTWF0aC5mbG9vcihvcmlnaW5hbERhdGUuZ2V0VGltZSgpIC8gMTAwMCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAgVDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lU2hvcnQob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKTtcbiAgdmFyIG1pbnV0ZXMgPSBhYnNPZmZzZXQgJSA2MDtcblxuICBpZiAobWludXRlcyA9PT0gMCkge1xuICAgIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKTtcbiAgfVxuXG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpICsgZGVsaW1pdGVyICsgYWRkTGVhZGluZ1plcm9zKG1pbnV0ZXMsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXMob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICBpZiAob2Zmc2V0ICUgNjAgPT09IDApIHtcbiAgICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gICAgcmV0dXJuIHNpZ24gKyBhZGRMZWFkaW5nWmVyb3MoTWF0aC5hYnMob2Zmc2V0KSAvIDYwLCAyKTtcbiAgfVxuXG4gIHJldHVybiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IGFkZExlYWRpbmdaZXJvcyhNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKSwgMik7XG4gIHZhciBtaW51dGVzID0gYWRkTGVhZGluZ1plcm9zKGFic09mZnNldCAlIDYwLCAyKTtcbiAgcmV0dXJuIHNpZ24gKyBob3VycyArIGRlbGltaXRlciArIG1pbnV0ZXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwiaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqL1xuXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICAvLyBGcm9tIGh0dHA6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtMzEvdHIzNS1kYXRlcy5odG1sI0RhdGVfRm9ybWF0X3Rva2Vuc1xuICAgIC8vIHwgWWVhciAgICAgfCAgICAgeSB8IHl5IHwgICB5eXkgfCAgeXl5eSB8IHl5eXl5IHxcbiAgICAvLyB8LS0tLS0tLS0tLXwtLS0tLS0tfC0tLS18LS0tLS0tLXwtLS0tLS0tfC0tLS0tLS18XG4gICAgLy8gfCBBRCAxICAgICB8ICAgICAxIHwgMDEgfCAgIDAwMSB8ICAwMDAxIHwgMDAwMDEgfFxuICAgIC8vIHwgQUQgMTIgICAgfCAgICAxMiB8IDEyIHwgICAwMTIgfCAgMDAxMiB8IDAwMDEyIHxcbiAgICAvLyB8IEFEIDEyMyAgIHwgICAxMjMgfCAyMyB8ICAgMTIzIHwgIDAxMjMgfCAwMDEyMyB8XG4gICAgLy8gfCBBRCAxMjM0ICB8ICAxMjM0IHwgMzQgfCAgMTIzNCB8ICAxMjM0IHwgMDEyMzQgfFxuICAgIC8vIHwgQUQgMTIzNDUgfCAxMjM0NSB8IDQ1IHwgMTIzNDUgfCAxMjM0NSB8IDEyMzQ1IHxcbiAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0b2tlbiA9PT0gJ3l5JyA/IHllYXIgJSAxMDAgOiB5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgcmV0dXJuIHRva2VuID09PSAnTScgPyBTdHJpbmcobW9udGggKyAxKSA6IGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENEYXRlKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXRlLmdldFVUQ0hvdXJzKCkgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgICBjYXNlICdhYWFhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWVbMF07XG5cbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZSA9PT0gJ2FtJyA/ICdhLm0uJyA6ICdwLm0uJztcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpICUgMTIgfHwgMTIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ01pbnV0ZXMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbnVtYmVyT2ZEaWdpdHMgPSB0b2tlbi5sZW5ndGg7XG4gICAgdmFyIG1pbGxpc2Vjb25kcyA9IGRhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCk7XG4gICAgdmFyIGZyYWN0aW9uYWxTZWNvbmRzID0gTWF0aC5mbG9vcihtaWxsaXNlY29uZHMgKiBNYXRoLnBvdygxMCwgbnVtYmVyT2ZEaWdpdHMgLSAzKSk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhmcmFjdGlvbmFsU2Vjb25kcywgdG9rZW4ubGVuZ3RoKTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwiZnVuY3Rpb24gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlICdQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUFBQJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRpbWVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAncCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHBwcCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkYXRlVGltZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICB2YXIgbWF0Y2hSZXN1bHQgPSBwYXR0ZXJuLm1hdGNoKC8oUCspKHArKT8vKTtcbiAgdmFyIGRhdGVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMV07XG4gIHZhciB0aW1lUGF0dGVybiA9IG1hdGNoUmVzdWx0WzJdO1xuXG4gIGlmICghdGltZVBhdHRlcm4pIHtcbiAgICByZXR1cm4gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZyk7XG4gIH1cblxuICB2YXIgZGF0ZVRpbWVGb3JtYXQ7XG5cbiAgc3dpdGNoIChkYXRlUGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIGRhdGVUaW1lRm9ybWF0LnJlcGxhY2UoJ3t7ZGF0ZX19JywgZGF0ZUxvbmdGb3JtYXR0ZXIoZGF0ZVBhdHRlcm4sIGZvcm1hdExvbmcpKS5yZXBsYWNlKCd7e3RpbWV9fScsIHRpbWVMb25nRm9ybWF0dGVyKHRpbWVQYXR0ZXJuLCBmb3JtYXRMb25nKSk7XG59XG5cbnZhciBsb25nRm9ybWF0dGVycyA9IHtcbiAgcDogdGltZUxvbmdGb3JtYXR0ZXIsXG4gIFA6IGRhdGVUaW1lTG9uZ0Zvcm1hdHRlclxufTtcbmV4cG9ydCBkZWZhdWx0IGxvbmdGb3JtYXR0ZXJzOyIsIi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIHZhciB1dGNEYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLCBkYXRlLmdldEhvdXJzKCksIGRhdGUuZ2V0TWludXRlcygpLCBkYXRlLmdldFNlY29uZHMoKSwgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSkpO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSAtIHV0Y0RhdGUuZ2V0VGltZSgpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDg2NDAwMDAwOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDRGF5T2ZZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICBkYXRlLnNldFVUQ01vbnRoKDAsIDEpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlllYXJUaW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIGRpZmZlcmVuY2UgPSB0aW1lc3RhbXAgLSBzdGFydE9mWWVhclRpbWVzdGFtcDtcbiAgcmV0dXJuIE1hdGguZmxvb3IoZGlmZmVyZW5jZSAvIE1JTExJU0VDT05EU19JTl9EQVkpICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDSVNPV2VlayhkYXRlKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGF0ZSkuZ2V0VGltZSgpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhcik7XG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENXZWVrKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGU7XG4gIHZhciBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGUgJiYgbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlO1xuICB2YXIgZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gMSA6IHRvSW50ZWdlcihsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgOiB0b0ludGVnZXIob3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBmaXJzdFdlZWtPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZk5leHRZZWFyLCBkaXJ0eU9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrT2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZlRoaXNZZWFyLCBkaXJ0eU9wdGlvbnMpO1xuXG4gIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn0iLCJ2YXIgcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zID0gWydEJywgJ0REJ107XG52YXIgcHJvdGVjdGVkV2Vla1llYXJUb2tlbnMgPSBbJ1lZJywgJ1lZWVknXTtcbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMuaW5kZXhPZih0b2tlbikgIT09IC0xO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkV2Vla1llYXJUb2tlbnMuaW5kZXhPZih0b2tlbikgIT09IC0xO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRocm93UHJvdGVjdGVkRXJyb3IodG9rZW4sIGZvcm1hdCwgaW5wdXQpIHtcbiAgaWYgKHRva2VuID09PSAnWVlZWScpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ1lZJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdEJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnREQnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXCIpKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSAxO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGdldFVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgeWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSk7XG4gIHZhciBmb3VydGhPZkphbnVhcnkgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ1dlZWsoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGU7XG4gIHZhciBsb2NhbGVXZWVrU3RhcnRzT24gPSBsb2NhbGUgJiYgbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMud2Vla1N0YXJ0c09uO1xuICB2YXIgZGVmYXVsdFdlZWtTdGFydHNPbiA9IGxvY2FsZVdlZWtTdGFydHNPbiA9PSBudWxsID8gMCA6IHRvSW50ZWdlcihsb2NhbGVXZWVrU3RhcnRzT24pO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gb3B0aW9ucy53ZWVrU3RhcnRzT24gPT0gbnVsbCA/IGRlZmF1bHRXZWVrU3RhcnRzT24gOiB0b0ludGVnZXIob3B0aW9ucy53ZWVrU3RhcnRzT24pOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlO1xuICB2YXIgbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlICYmIGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZTtcbiAgdmFyIGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IDEgOiB0b0ludGVnZXIobG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlIDogdG9JbnRlZ2VyKG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgdmFyIHllYXIgPSBnZXRVVENXZWVrWWVhcihkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWsgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vlay5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIGRhdGUgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWssIGRpcnR5T3B0aW9ucyk7XG4gIHJldHVybiBkYXRlO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbGxpc2Vjb25kcyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgNzUwIG1pbGxpc2Vjb25kcyB0byAxMCBKdWx5IDIwMTQgMTI6NDU6MzAuMDAwOlxuICogY29uc3QgcmVzdWx0ID0gYWRkTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MzAuNzUwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciB0aW1lc3RhbXAgPSB0b0RhdGUoZGlydHlEYXRlKS5nZXRUaW1lKCk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wICsgYW1vdW50KTtcbn0iLCJpbXBvcnQgaXNWYWxpZCBmcm9tIFwiLi4vaXNWYWxpZC9pbmRleC5qc1wiO1xuaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uL2xvY2FsZS9lbi1VUy9pbmRleC5qc1wiO1xuaW1wb3J0IHN1Yk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXR0ZXJzIGZyb20gXCIuLi9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9uZ0Zvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuLCBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4sIHRocm93UHJvdGVjdGVkRXJyb3IgfSBmcm9tIFwiLi4vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIFJlZ0V4cCBjb25zaXN0cyBvZiB0aHJlZSBwYXJ0cyBzZXBhcmF0ZWQgYnkgYHxgOlxuLy8gLSBbeVlRcU1Md0lkRGVjaWhIS2ttc11vIG1hdGNoZXMgYW55IGF2YWlsYWJsZSBvcmRpbmFsIG51bWJlciB0b2tlblxuLy8gICAob25lIG9mIHRoZSBjZXJ0YWluIGxldHRlcnMgZm9sbG93ZWQgYnkgYG9gKVxuLy8gLSAoXFx3KVxcMSogbWF0Y2hlcyBhbnkgc2VxdWVuY2VzIG9mIHRoZSBzYW1lIGxldHRlclxuLy8gLSAnJyBtYXRjaGVzIHR3byBxdW90ZSBjaGFyYWN0ZXJzIGluIGEgcm93XG4vLyAtICcoJyd8W14nXSkrKCd8JCkgbWF0Y2hlcyBhbnl0aGluZyBzdXJyb3VuZGVkIGJ5IHR3byBxdW90ZSBjaGFyYWN0ZXJzICgnKSxcbi8vICAgZXhjZXB0IGEgc2luZ2xlIHF1b3RlIHN5bWJvbCwgd2hpY2ggZW5kcyB0aGUgc2VxdWVuY2UuXG4vLyAgIFR3byBxdW90ZSBjaGFyYWN0ZXJzIGRvIG5vdCBlbmQgdGhlIHNlcXVlbmNlLlxuLy8gICBJZiB0aGVyZSBpcyBubyBtYXRjaGluZyBzaW5nbGUgcXVvdGVcbi8vICAgdGhlbiB0aGUgc2VxdWVuY2Ugd2lsbCBjb250aW51ZSB1bnRpbCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcuXG4vLyAtIC4gbWF0Y2hlcyBhbnkgc2luZ2xlIGNoYXJhY3RlciB1bm1hdGNoZWQgYnkgcHJldmlvdXMgcGFydHMgb2YgdGhlIFJlZ0V4cHNcblxudmFyIGZvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvW3lZUXFNTHdJZERlY2loSEtrbXNdb3woXFx3KVxcMSp8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7IC8vIFRoaXMgUmVnRXhwIGNhdGNoZXMgc3ltYm9scyBlc2NhcGVkIGJ5IHF1b3RlcywgYW5kIGFsc29cbi8vIHNlcXVlbmNlcyBvZiBzeW1ib2xzIFAsIHAsIGFuZCB0aGUgY29tYmluYXRpb25zIGxpa2UgYFBQUFBQUFBwcHBwcGBcblxudmFyIGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1ArcCt8UCt8cCt8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG52YXIgZXNjYXBlZFN0cmluZ1JlZ0V4cCA9IC9eJyhbXl0qPyknPyQvO1xudmFyIGRvdWJsZVF1b3RlUmVnRXhwID0gLycnL2c7XG52YXIgdW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHAgPSAvW2EtekEtWl0vO1xuLyoqXG4gKiBAbmFtZSBmb3JtYXRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgRm9ybWF0IHRoZSBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmcgaW4gdGhlIGdpdmVuIGZvcm1hdC4gVGhlIHJlc3VsdCBtYXkgdmFyeSBieSBsb2NhbGUuXG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGUgYGZvcm1hdGAgdG9rZW5zIGRpZmZlciBmcm9tIE1vbWVudC5qcyBhbmQgb3RoZXIgbGlicmFyaWVzLlxuICogPiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKlxuICogVGhlIGNoYXJhY3RlcnMgd3JhcHBlZCBiZXR3ZWVuIHR3byBzaW5nbGUgcXVvdGVzIGNoYXJhY3RlcnMgKCcpIGFyZSBlc2NhcGVkLlxuICogVHdvIHNpbmdsZSBxdW90ZXMgaW4gYSByb3csIHdoZXRoZXIgaW5zaWRlIG9yIG91dHNpZGUgYSBxdW90ZWQgc2VxdWVuY2UsIHJlcHJlc2VudCBhICdyZWFsJyBzaW5nbGUgcXVvdGUuXG4gKiAoc2VlIHRoZSBsYXN0IGV4YW1wbGUpXG4gKlxuICogRm9ybWF0IG9mIHRoZSBzdHJpbmcgaXMgYmFzZWQgb24gVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZVxuICogd2l0aCBhIGZldyBhZGRpdGlvbnMgKHNlZSBub3RlIDcgYmVsb3cgdGhlIHRhYmxlKS5cbiAqXG4gKiBBY2NlcHRlZCBwYXR0ZXJuczpcbiAqIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBhdHRlcm4gfCBSZXN1bHQgZXhhbXBsZXMgICAgICAgICAgICAgICAgICAgfCBOb3RlcyB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tfFxuICogfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRy4uR0dHICB8IEFELCBCQyAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0cgICAgfCBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHRyAgIHwgQSwgQiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBDYWxlbmRhciB5ZWFyICAgICAgICAgICAgICAgICAgIHwgeSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHlvICAgICAgfCA0NHRoLCAxc3QsIDB0aCwgMTd0aCAgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5ICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5eSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgIHwgWSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlvICAgICAgfCA0NHRoLCAxc3QsIDE5MDB0aCwgMjAxN3RoICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZWSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgIHwgUiAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSICAgICAgfCAtNDMsIDAwLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlIgICAgIHwgLTA0MywgMDAwLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUiAgICB8IC0wMDQzLCAwMDAwLCAwMDAxLCAxOTAwLCAyMDE3ICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlJSICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUsNyB8XG4gKiB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICAgfCB1ICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXUgICAgICB8IC00MywgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dSAgICAgfCAtMDQzLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1ICAgIHwgLTAwNDMsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dXUgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgUXVhcnRlciAoZm9ybWF0dGluZykgICAgICAgICAgICB8IFEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUVEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgUXVhcnRlciAoc3RhbmQtYWxvbmUpICAgICAgICAgICB8IHEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcXEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgTW9udGggKGZvcm1hdHRpbmcpICAgICAgICAgICAgICB8IE0gICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU0gICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTSAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTU0gICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTW9udGggKHN0YW5kLWFsb25lKSAgICAgICAgICAgICB8IEwgICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTEwgICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTCAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTEwgICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgICB8IHcgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3byAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd3cgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgICB8IEkgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSUkgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgICB8IGQgICAgICAgfCAxLCAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzFzdCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZGQgICAgICB8IDAxLCAwMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgICB8IEQgICAgICAgfCAxLCAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzY1dGgsIDM2NnRoICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREQgICAgICB8IDAxLCAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERERCAgICAgfCAwMDEsIDAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREREICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBEYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgICAgIHwgRS4uRUVFICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUVFICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU3UsIFNhICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICB8IGkgICAgICAgfCAxLCAyLCAzLCAuLi4sIDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgN3RoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWkgICAgICB8IDAxLCAwMiwgLi4uLCAwNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWkgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpaSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFN1LCBTYSAgICAgICAgfCA3ICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgfCBlICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZW8gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWUgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZWUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTdSwgU2EgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoc3RhbmQtYWxvbmUpIHwgYyAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjYyAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2MgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjYyAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2NjICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU3UsIFNhICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICB8IGEuLmFhICAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWEgICAgIHwgYW0sIHBtICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYSAgICB8IGEubS4sIHAubS4gICAgICAgICAgICAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWFhICAgfCBhLCBwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgfCBiLi5iYiAgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiICAgICB8IGFtLCBwbSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmIgICAgfCBhLm0uLCBwLm0uLCBub29uLCBtaWRuaWdodCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiYiAgIHwgYSwgcCwgbiwgbWkgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgIHwgQi4uQkJCICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkIgICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCQiAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgIHwgaCAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAxMnRoICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBoaCAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgIHwgSCAgICAgICB8IDAsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhvICAgICAgfCAwdGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBISCAgICAgIHwgMDAsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgIHwgSyAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAwdGggICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLSyAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgIHwgayAgICAgICB8IDI0LCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtvICAgICAgfCAyNHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrayAgICAgIHwgMjQsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbSAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1vICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbSAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcyAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNvICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzcyAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgIHwgUyAgICAgICB8IDAsIDEsIC4uLiwgOSAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTICAgICAgfCAwMCwgMDEsIC4uLiwgOTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1MgICAgIHwgMDAwLCAwMDEsIC4uLiwgOTk5ICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTUyAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvIFopICAgICAgICB8IFggICAgICAgfCAtMDgsICswNTMwLCBaICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWCAgICAgIHwgLTA4MDAsICswNTMwLCBaICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYICAgICB8IC0wODowMCwgKzA1OjMwLCBaICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFggICAgfCAtMDgwMCwgKzA1MzAsIFosICsxMjM0NTYgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYWCAgIHwgLTA4OjAwLCArMDU6MzAsIFosICsxMjozNDo1NiAgICAgIHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgIHwgeCAgICAgICB8IC0wOCwgKzA1MzAsICswMCAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4ICAgICAgfCAtMDgwMCwgKzA1MzAsICswMDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHggICAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eCAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAsICsxMjM0NTYgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHh4ICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwLCArMTI6MzQ6NTYgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICAgfCBPLi4uT09PIHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgT09PTyAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIgICAgIHxcbiAqIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pICB8IHouLi56enogfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCA2ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB6enp6ICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiw2ICAgfFxuICogfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgIHwgdCAgICAgICB8IDUxMjk2OTUyMCAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHR0ICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgfCBUICAgICAgIHwgNTEyOTY5NTIwOTAwICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgVFQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgICB8IFAgICAgICAgfCAwNC8yOS8xNDUzICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUCAgICAgIHwgQXByIDI5LCAxNDUzICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQICAgICB8IEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFAgICAgfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICAgfCBwICAgICAgIHwgMTI6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHAgICAgICB8IDEyOjAwOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcCAgICAgfCAxMjowMDowMCBBTSBHTVQrMiAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHBwICAgIHwgMTI6MDA6MDAgQU0gR01UKzAyOjAwICAgICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBDb21iaW5hdGlvbiBvZiBkYXRlIGFuZCB0aW1lICAgIHwgUHAgICAgICB8IDA0LzI5LzE0NTMsIDEyOjAwIEFNICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQcHAgICAgfCBBcHIgMjksIDE0NTMsIDEyOjAwOjAwIEFNICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBwcHAgIHwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUHBwcHB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICB8IDIsNyAgIHxcbiAqIE5vdGVzOlxuICogMS4gXCJGb3JtYXR0aW5nXCIgdW5pdHMgKGUuZy4gZm9ybWF0dGluZyBxdWFydGVyKSBpbiB0aGUgZGVmYXVsdCBlbi1VUyBsb2NhbGVcbiAqICAgIGFyZSB0aGUgc2FtZSBhcyBcInN0YW5kLWFsb25lXCIgdW5pdHMsIGJ1dCBhcmUgZGlmZmVyZW50IGluIHNvbWUgbGFuZ3VhZ2VzLlxuICogICAgXCJGb3JtYXR0aW5nXCIgdW5pdHMgYXJlIGRlY2xpbmVkIGFjY29yZGluZyB0byB0aGUgcnVsZXMgb2YgdGhlIGxhbmd1YWdlXG4gKiAgICBpbiB0aGUgY29udGV4dCBvZiBhIGRhdGUuIFwiU3RhbmQtYWxvbmVcIiB1bml0cyBhcmUgYWx3YXlzIG5vbWluYXRpdmUgc2luZ3VsYXI6XG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBMTExMJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZCdgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBNTU1NJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZHUnYFxuICpcbiAqIDIuIEFueSBzZXF1ZW5jZSBvZiB0aGUgaWRlbnRpY2FsIGxldHRlcnMgaXMgYSBwYXR0ZXJuLCB1bmxlc3MgaXQgaXMgZXNjYXBlZCBieVxuICogICAgdGhlIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIChzZWUgYmVsb3cpLlxuICogICAgSWYgdGhlIHNlcXVlbmNlIGlzIGxvbmdlciB0aGFuIGxpc3RlZCBpbiB0YWJsZSAoZS5nLiBgRUVFRUVFRUVFRUVgKVxuICogICAgdGhlIG91dHB1dCB3aWxsIGJlIHRoZSBzYW1lIGFzIGRlZmF1bHQgcGF0dGVybiBmb3IgdGhpcyB1bml0LCB1c3VhbGx5XG4gKiAgICB0aGUgbG9uZ2VzdCBvbmUgKGluIGNhc2Ugb2YgSVNPIHdlZWtkYXlzLCBgRUVFRWApLiBEZWZhdWx0IHBhdHRlcm5zIGZvciB1bml0c1xuICogICAgYXJlIG1hcmtlZCB3aXRoIFwiMlwiIGluIHRoZSBsYXN0IGNvbHVtbiBvZiB0aGUgdGFibGUuXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU0nKSAvLz0+ICdOb3YnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NJykgLy89PiAnTidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqIDMuIFNvbWUgcGF0dGVybnMgY291bGQgYmUgdW5saW1pdGVkIGxlbmd0aCAoc3VjaCBhcyBgeXl5eXl5eXlgKS5cbiAqICAgIFRoZSBvdXRwdXQgd2lsbCBiZSBwYWRkZWQgd2l0aCB6ZXJvcyB0byBtYXRjaCB0aGUgbGVuZ3RoIG9mIHRoZSBwYXR0ZXJuLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAneXl5eXl5eXknKSAvLz0+ICcwMDAwMjAxNydgXG4gKlxuICogNC4gYFFRUVFRYCBhbmQgYHFxcXFxYCBjb3VsZCBiZSBub3Qgc3RyaWN0bHkgbnVtZXJpY2FsIGluIHNvbWUgbG9jYWxlcy5cbiAqICAgIFRoZXNlIHRva2VucyByZXByZXNlbnQgdGhlIHNob3J0ZXN0IGZvcm0gb2YgdGhlIHF1YXJ0ZXIuXG4gKlxuICogNS4gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIHBhdHRlcm5zIGFyZSBCLkMuIHllYXJzOlxuICpcbiAqICAgIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICogICAgfCBBQyAxIHwgICAxIHwgICAxIHxcbiAqICAgIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gKiAgICB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICpcbiAqICAgIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAqICAgIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZDpcbiAqXG4gKiAgICB8IFllYXIgfCBgeXlgIHwgYHV1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tLXwtLS0tLS18XG4gKiAgICB8IDEgICAgfCAgIDAxIHwgICAwMSB8XG4gKiAgICB8IDE0ICAgfCAgIDE0IHwgICAxNCB8XG4gKiAgICB8IDM3NiAgfCAgIDc2IHwgIDM3NiB8XG4gKiAgICB8IDE0NTMgfCAgIDUzIHwgMTQ1MyB8XG4gKlxuICogICAgVGhlIHNhbWUgZGlmZmVyZW5jZSBpcyB0cnVlIGZvciBsb2NhbCBhbmQgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJzIChgWWAgYW5kIGBSYCksXG4gKiAgICBleGNlcHQgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhcnMgYXJlIGRlcGVuZGVudCBvbiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gXG4gKiAgICBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAoY29tcGFyZSBbZ2V0SVNPV2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0SVNPV2Vla1llYXJ9XG4gKiAgICBhbmQgW2dldFdlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldFdlZWtZZWFyfSkuXG4gKlxuICogNi4gU3BlY2lmaWMgbm9uLWxvY2F0aW9uIHRpbWV6b25lcyBhcmUgY3VycmVudGx5IHVuYXZhaWxhYmxlIGluIGBkYXRlLWZuc2AsXG4gKiAgICBzbyByaWdodCBub3cgdGhlc2UgdG9rZW5zIGZhbGwgYmFjayB0byBHTVQgdGltZXpvbmVzLlxuICpcbiAqIDcuIFRoZXNlIHBhdHRlcm5zIGFyZSBub3QgaW4gdGhlIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqICAgIC0gYGlgOiBJU08gZGF5IG9mIHdlZWtcbiAqICAgIC0gYElgOiBJU08gd2VlayBvZiB5ZWFyXG4gKiAgICAtIGBSYDogSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqICAgIC0gYHRgOiBzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgVGA6IG1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYG9gOiBvcmRpbmFsIG51bWJlciBtb2RpZmllclxuICogICAgLSBgUGA6IGxvbmcgbG9jYWxpemVkIGRhdGVcbiAqICAgIC0gYHBgOiBsb25nIGxvY2FsaXplZCB0aW1lXG4gKlxuICogOC4gYFlZYCBhbmQgYFlZWVlgIHRva2VucyByZXByZXNlbnQgd2Vlay1udW1iZXJpbmcgeWVhcnMgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggeWVhcnMuXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKlxuICogOS4gYERgIGFuZCBgRERgIHRva2VucyByZXByZXNlbnQgZGF5cyBvZiB0aGUgeWVhciBidXQgdGhleSBhcmUgb2Z0aGVuIGNvbmZ1c2VkIHdpdGggZGF5cyBvZiB0aGUgbW9udGguXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogLSBUaGUgc2Vjb25kIGFyZ3VtZW50IGlzIG5vdyByZXF1aXJlZCBmb3IgdGhlIHNha2Ugb2YgZXhwbGljaXRuZXNzLlxuICpcbiAqICAgYGBgamF2YXNjcmlwdFxuICogICAvLyBCZWZvcmUgdjIuMC4wXG4gKiAgIGZvcm1hdChuZXcgRGF0ZSgyMDE2LCAwLCAxKSlcbiAqXG4gKiAgIC8vIHYyLjAuMCBvbndhcmRcbiAqICAgZm9ybWF0KG5ldyBEYXRlKDIwMTYsIDAsIDEpLCBcInl5eXktTU0tZGQnVCdISDptbTpzcy5TU1N4eHhcIilcbiAqICAgYGBgXG4gKlxuICogLSBOZXcgZm9ybWF0IHN0cmluZyBBUEkgZm9yIGBmb3JtYXRgIGZ1bmN0aW9uXG4gKiAgIHdoaWNoIGlzIGJhc2VkIG9uIFtVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzVdKGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9GaWVsZF9TeW1ib2xfVGFibGUpLlxuICogICBTZWUgW3RoaXMgcG9zdF0oaHR0cHM6Ly9ibG9nLmRhdGUtZm5zLm9yZy9wb3N0L3VuaWNvZGUtdG9rZW5zLWluLWRhdGUtZm5zLXYyLXNyZWF0eWtpOTFqZykgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiAtIENoYXJhY3RlcnMgYXJlIG5vdyBlc2NhcGVkIHVzaW5nIHNpbmdsZSBxdW90ZSBzeW1ib2xzIChgJ2ApIGluc3RlYWQgb2Ygc3F1YXJlIGJyYWNrZXRzLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGZvcm1hdCAtIHRoZSBzdHJpbmcgb2YgdG9rZW5zXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU9MV0gLSB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIgdG9rZW5zIGBZWWAgYW5kIGBZWVlZYDtcbiAqICAgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgZGF5IG9mIHllYXIgdG9rZW5zIGBEYCBhbmQgYEREYDtcbiAqICAgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZ1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGxvY2FsaXplYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdExvbmdgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gZm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAxMSBGZWJydWFyeSAyMDE0IGluIG1pZGRsZS1lbmRpYW4gZm9ybWF0OlxuICogdmFyIHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCAxLCAxMSksICdNTS9kZC95eXl5JylcbiAqIC8vPT4gJzAyLzExLzIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAyIEp1bHkgMjAxNCBpbiBFc3BlcmFudG86XG4gKiBpbXBvcnQgeyBlb0xvY2FsZSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcbiAqIHZhciByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiksIFwiZG8gJ2RlJyBNTU1NIHl5eXlcIiwge1xuICogICBsb2NhbGU6IGVvTG9jYWxlXG4gKiB9KVxuICogLy89PiAnMi1hIGRlIGp1bGlvIDIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEVzY2FwZSBzdHJpbmcgYnkgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnM6XG4gKiB2YXIgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIsIDE1KSwgXCJoICdvJydjbG9jaydcIilcbiAqIC8vPT4gXCIzIG8nY2xvY2tcIlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdChkaXJ0eURhdGUsIGRpcnR5Rm9ybWF0U3RyLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBmb3JtYXRTdHIgPSBTdHJpbmcoZGlydHlGb3JtYXRTdHIpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlIHx8IGRlZmF1bHRMb2NhbGU7XG4gIHZhciBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU7XG4gIHZhciBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyAxIDogdG9JbnRlZ2VyKGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA6IHRvSW50ZWdlcihvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGxvY2FsZVdlZWtTdGFydHNPbiA9IGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLndlZWtTdGFydHNPbjtcbiAgdmFyIGRlZmF1bHRXZWVrU3RhcnRzT24gPSBsb2NhbGVXZWVrU3RhcnRzT24gPT0gbnVsbCA/IDAgOiB0b0ludGVnZXIobG9jYWxlV2Vla1N0YXJ0c09uKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IG9wdGlvbnMud2Vla1N0YXJ0c09uID09IG51bGwgPyBkZWZhdWx0V2Vla1N0YXJ0c09uIDogdG9JbnRlZ2VyKG9wdGlvbnMud2Vla1N0YXJ0c09uKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICBpZiAoIWxvY2FsZS5sb2NhbGl6ZSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGxvY2FsaXplIHByb3BlcnR5Jyk7XG4gIH1cblxuICBpZiAoIWxvY2FsZS5mb3JtYXRMb25nKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gZm9ybWF0TG9uZyBwcm9wZXJ0eScpO1xuICB9XG5cbiAgdmFyIG9yaWdpbmFsRGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuXG4gIGlmICghaXNWYWxpZChvcmlnaW5hbERhdGUpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdGltZSB2YWx1ZScpO1xuICB9IC8vIENvbnZlcnQgdGhlIGRhdGUgaW4gc3lzdGVtIHRpbWV6b25lIHRvIHRoZSBzYW1lIGRhdGUgaW4gVVRDKzAwOjAwIHRpbWV6b25lLlxuICAvLyBUaGlzIGVuc3VyZXMgdGhhdCB3aGVuIFVUQyBmdW5jdGlvbnMgd2lsbCBiZSBpbXBsZW1lbnRlZCwgbG9jYWxlcyB3aWxsIGJlIGNvbXBhdGlibGUgd2l0aCB0aGVtLlxuICAvLyBTZWUgYW4gaXNzdWUgYWJvdXQgVVRDIGZ1bmN0aW9uczogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuXG4gIHZhciB0aW1lem9uZU9mZnNldCA9IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlKTtcbiAgdmFyIHV0Y0RhdGUgPSBzdWJNaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlLCB0aW1lem9uZU9mZnNldCk7XG4gIHZhciBmb3JtYXR0ZXJPcHRpb25zID0ge1xuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogZmlyc3RXZWVrQ29udGFpbnNEYXRlLFxuICAgIHdlZWtTdGFydHNPbjogd2Vla1N0YXJ0c09uLFxuICAgIGxvY2FsZTogbG9jYWxlLFxuICAgIF9vcmlnaW5hbERhdGU6IG9yaWdpbmFsRGF0ZVxuICB9O1xuICB2YXIgcmVzdWx0ID0gZm9ybWF0U3RyLm1hdGNoKGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcblxuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gJ3AnIHx8IGZpcnN0Q2hhcmFjdGVyID09PSAnUCcpIHtcbiAgICAgIHZhciBsb25nRm9ybWF0dGVyID0gbG9uZ0Zvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuICAgICAgcmV0dXJuIGxvbmdGb3JtYXR0ZXIoc3Vic3RyaW5nLCBsb2NhbGUuZm9ybWF0TG9uZywgZm9ybWF0dGVyT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJykubWF0Y2goZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICAvLyBSZXBsYWNlIHR3byBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyB3aXRoIG9uZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyXG4gICAgaWYgKHN1YnN0cmluZyA9PT0gXCInJ1wiKSB7XG4gICAgICByZXR1cm4gXCInXCI7XG4gICAgfVxuXG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSBcIidcIikge1xuICAgICAgcmV0dXJuIGNsZWFuRXNjYXBlZFN0cmluZyhzdWJzdHJpbmcpO1xuICAgIH1cblxuICAgIHZhciBmb3JtYXR0ZXIgPSBmb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcblxuICAgIGlmIChmb3JtYXR0ZXIpIHtcbiAgICAgIGlmICghb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnMgJiYgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBkaXJ0eURhdGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2VucyAmJiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBkaXJ0eURhdGUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZm9ybWF0dGVyKHV0Y0RhdGUsIHN1YnN0cmluZywgbG9jYWxlLmxvY2FsaXplLCBmb3JtYXR0ZXJPcHRpb25zKTtcbiAgICB9XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIubWF0Y2godW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHApKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignRm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyIGAnICsgZmlyc3RDaGFyYWN0ZXIgKyAnYCcpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBjbGVhbkVzY2FwZWRTdHJpbmcoaW5wdXQpIHtcbiAgcmV0dXJuIGlucHV0Lm1hdGNoKGVzY2FwZWRTdHJpbmdSZWdFeHApWzFdLnJlcGxhY2UoZG91YmxlUXVvdGVSZWdFeHAsIFwiJ1wiKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVmFsaWRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdmFsaWQ/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIGZhbHNlIGlmIGFyZ3VtZW50IGlzIEludmFsaWQgRGF0ZSBhbmQgdHJ1ZSBvdGhlcndpc2UuXG4gKiBBcmd1bWVudCBpcyBjb252ZXJ0ZWQgdG8gRGF0ZSB1c2luZyBgdG9EYXRlYC4gU2VlIFt0b0RhdGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvdG9EYXRlfVxuICogSW52YWxpZCBEYXRlIGlzIGEgRGF0ZSwgd2hvc2UgdGltZSB2YWx1ZSBpcyBOYU4uXG4gKlxuICogVGltZSB2YWx1ZSBvZiBEYXRlOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjkuMS4xXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiAtIE5vdyBgaXNWYWxpZGAgZG9lc24ndCB0aHJvdyBhbiBleGNlcHRpb25cbiAqICAgaWYgdGhlIGZpcnN0IGFyZ3VtZW50IGlzIG5vdCBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICogICBJbnN0ZWFkLCBhcmd1bWVudCBpcyBjb252ZXJ0ZWQgYmVmb3JlaGFuZCB1c2luZyBgdG9EYXRlYC5cbiAqXG4gKiAgIEV4YW1wbGVzOlxuICpcbiAqICAgfCBgaXNWYWxpZGAgYXJndW1lbnQgICAgICAgIHwgQmVmb3JlIHYyLjAuMCB8IHYyLjAuMCBvbndhcmQgfFxuICogICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS18XG4gKiAgIHwgYG5ldyBEYXRlKClgICAgICAgICAgICAgICB8IGB0cnVlYCAgICAgICAgfCBgdHJ1ZWAgICAgICAgIHxcbiAqICAgfCBgbmV3IERhdGUoJzIwMTYtMDEtMDEnKWAgIHwgYHRydWVgICAgICAgICB8IGB0cnVlYCAgICAgICAgfFxuICogICB8IGBuZXcgRGF0ZSgnJylgICAgICAgICAgICAgfCBgZmFsc2VgICAgICAgIHwgYGZhbHNlYCAgICAgICB8XG4gKiAgIHwgYG5ldyBEYXRlKDE0ODgzNzA4MzUwODEpYCB8IGB0cnVlYCAgICAgICAgfCBgdHJ1ZWAgICAgICAgIHxcbiAqICAgfCBgbmV3IERhdGUoTmFOKWAgICAgICAgICAgIHwgYGZhbHNlYCAgICAgICB8IGBmYWxzZWAgICAgICAgfFxuICogICB8IGAnMjAxNi0wMS0wMSdgICAgICAgICAgICAgfCBgVHlwZUVycm9yYCAgIHwgYGZhbHNlYCAgICAgICB8XG4gKiAgIHwgYCcnYCAgICAgICAgICAgICAgICAgICAgICB8IGBUeXBlRXJyb3JgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqICAgfCBgMTQ4ODM3MDgzNTA4MWAgICAgICAgICAgIHwgYFR5cGVFcnJvcmAgICB8IGB0cnVlYCAgICAgICAgfFxuICogICB8IGBOYU5gICAgICAgICAgICAgICAgICAgICAgfCBgVHlwZUVycm9yYCAgIHwgYGZhbHNlYCAgICAgICB8XG4gKlxuICogICBXZSBpbnRyb2R1Y2UgdGhpcyBjaGFuZ2UgdG8gbWFrZSAqZGF0ZS1mbnMqIGNvbnNpc3RlbnQgd2l0aCBFQ01BU2NyaXB0IGJlaGF2aW9yXG4gKiAgIHRoYXQgdHJ5IHRvIGNvZXJjZSBhcmd1bWVudHMgdG8gdGhlIGV4cGVjdGVkIHR5cGVcbiAqICAgKHdoaWNoIGlzIGFsc28gdGhlIGNhc2Ugd2l0aCBvdGhlciAqZGF0ZS1mbnMqIGZ1bmN0aW9ucykuXG4gKlxuICogQHBhcmFtIHsqfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB2YWxpZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsaWQgZGF0ZTpcbiAqIHZhciByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKDIwMTQsIDEsIDMxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbHVlLCBjb252ZXJ0YWJsZSBpbnRvIGEgZGF0ZTpcbiAqIHZhciByZXN1bHQgPSBpc1ZhbGlkKDEzOTM4MDQ4MDAwMDApXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSBpbnZhbGlkIGRhdGU6XG4gKiB2YXIgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgnJykpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNWYWxpZChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHJldHVybiAhaXNOYU4oZGF0ZSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRGb3JtYXRMb25nRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAvLyBUT0RPOiBSZW1vdmUgU3RyaW5nKClcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgdmFyIGZvcm1hdCA9IGFyZ3MuZm9ybWF0c1t3aWR0aF0gfHwgYXJncy5mb3JtYXRzW2FyZ3MuZGVmYXVsdFdpZHRoXTtcbiAgICByZXR1cm4gZm9ybWF0O1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlydHlJbmRleCwgZGlydHlPcHRpb25zKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gICAgdmFyIGNvbnRleHQgPSBvcHRpb25zLmNvbnRleHQgPyBTdHJpbmcob3B0aW9ucy5jb250ZXh0KSA6ICdzdGFuZGFsb25lJztcbiAgICB2YXIgdmFsdWVzQXJyYXk7XG5cbiAgICBpZiAoY29udGV4dCA9PT0gJ2Zvcm1hdHRpbmcnICYmIGFyZ3MuZm9ybWF0dGluZ1ZhbHVlcykge1xuICAgICAgdmFyIGRlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdEZvcm1hdHRpbmdXaWR0aCB8fCBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBkZWZhdWx0V2lkdGg7XG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1t3aWR0aF0gfHwgYXJncy5mb3JtYXR0aW5nVmFsdWVzW2RlZmF1bHRXaWR0aF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhciBfd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy52YWx1ZXNbX3dpZHRoXSB8fCBhcmdzLnZhbHVlc1tfZGVmYXVsdFdpZHRoXTtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXggPSBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sgPyBhcmdzLmFyZ3VtZW50Q2FsbGJhY2soZGlydHlJbmRleCkgOiBkaXJ0eUluZGV4OyAvLyBAdHMtaWdub3JlOiBGb3Igc29tZSByZWFzb24gVHlwZVNjcmlwdCBqdXN0IGRvbid0IHdhbnQgdG8gbWF0Y2ggaXQsIG5vIG1hdHRlciBob3cgaGFyZCB3ZSB0cnkuIEkgY2hhbGxhbmdlIHlvdSB0byB0cnkgdG8gcmVtb3ZlIGl0IVxuXG4gICAgcmV0dXJuIHZhbHVlc0FycmF5W2luZGV4XTtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIHZhciBtYXRjaFBhdHRlcm4gPSB3aWR0aCAmJiBhcmdzLm1hdGNoUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MubWF0Y2hQYXR0ZXJuc1thcmdzLmRlZmF1bHRNYXRjaFdpZHRoXTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2gobWF0Y2hQYXR0ZXJuKTtcblxuICAgIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUGF0dGVybnMgPSB3aWR0aCAmJiBhcmdzLnBhcnNlUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MucGFyc2VQYXR0ZXJuc1thcmdzLmRlZmF1bHRQYXJzZVdpZHRoXTtcbiAgICB2YXIga2V5ID0gQXJyYXkuaXNBcnJheShwYXJzZVBhdHRlcm5zKSA/IGZpbmRJbmRleChwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KSA6IGZpbmRLZXkocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSk7XG4gICAgdmFyIHZhbHVlO1xuICAgIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKGtleSkgOiBrZXk7XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmluZEtleShvYmplY3QsIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHByZWRpY2F0ZShvYmplY3Rba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5ID0gMDsga2V5IDwgYXJyYXkubGVuZ3RoOyBrZXkrKykge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoUGF0dGVybkZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MubWF0Y2hQYXR0ZXJuKTtcbiAgICBpZiAoIW1hdGNoUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLnBhcnNlUGF0dGVybik7XG4gICAgaWYgKCFwYXJzZVJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKHBhcnNlUmVzdWx0WzBdKSA6IHBhcnNlUmVzdWx0WzBdO1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59IiwidmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICcxIHNlY29uZCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICdoYWxmIGEgbWludXRlJyxcbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIG1pbnV0ZScsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnMSBtaW51dGUnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBob3VyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAnMSBob3VyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeERheXM6IHtcbiAgICBvbmU6ICcxIGRheScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gZGF5cydcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICdhYm91dCAxIHdlZWsnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICcxIHdlZWsnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6ICdhYm91dCAxIG1vbnRoJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICcxIG1vbnRoJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiAnMSB5ZWFyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogJ292ZXIgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ292ZXIge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICdhbG1vc3QgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2FsbW9zdCB7e2NvdW50fX0geWVhcnMnXG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZSh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciByZXN1bHQ7XG5cbiAgaWYgKHR5cGVvZiBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl0gPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl0ub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgY291bnQpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiAnaW4gJyArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcgYWdvJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufSIsImltcG9ydCBidWlsZEZvcm1hdExvbmdGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qc1wiO1xudmFyIGRhdGVGb3JtYXRzID0ge1xuICBmdWxsOiAnRUVFRSwgTU1NTSBkbywgeScsXG4gIGxvbmc6ICdNTU1NIGRvLCB5JyxcbiAgbWVkaXVtOiAnTU1NIGQsIHknLFxuICBzaG9ydDogJ01NL2RkL3l5eXknXG59O1xudmFyIHRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiAnaDptbTpzcyBhIHp6enonLFxuICBsb25nOiAnaDptbTpzcyBhIHonLFxuICBtZWRpdW06ICdoOm1tOnNzIGEnLFxuICBzaG9ydDogJ2g6bW0gYSdcbn07XG52YXIgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIG1lZGl1bTogJ3t7ZGF0ZX19LCB7e3RpbWV9fScsXG4gIHNob3J0OiAne3tkYXRlfX0sIHt7dGltZX19J1xufTtcbnZhciBmb3JtYXRMb25nID0ge1xuICBkYXRlOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgZGF0ZVRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXRMb25nOyIsInZhciBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiJ2xhc3QnIGVlZWUgJ2F0JyBwXCIsXG4gIHllc3RlcmRheTogXCIneWVzdGVyZGF5IGF0JyBwXCIsXG4gIHRvZGF5OiBcIid0b2RheSBhdCcgcFwiLFxuICB0b21vcnJvdzogXCIndG9tb3Jyb3cgYXQnIHBcIixcbiAgbmV4dFdlZWs6IFwiZWVlZSAnYXQnIHBcIixcbiAgb3RoZXI6ICdQJ1xufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdFJlbGF0aXZlKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykge1xuICByZXR1cm4gZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xufSIsImltcG9ydCBidWlsZExvY2FsaXplRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzXCI7XG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnQicsICdBJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0JDJywgJ0FEJ10sXG4gIHdpZGU6IFsnQmVmb3JlIENocmlzdCcsICdBbm5vIERvbWluaSddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJ1ExJywgJ1EyJywgJ1EzJywgJ1E0J10sXG4gIHdpZGU6IFsnMXN0IHF1YXJ0ZXInLCAnMm5kIHF1YXJ0ZXInLCAnM3JkIHF1YXJ0ZXInLCAnNHRoIHF1YXJ0ZXInXVxufTsgLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxuXG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydKJywgJ0YnLCAnTScsICdBJywgJ00nLCAnSicsICdKJywgJ0EnLCAnUycsICdPJywgJ04nLCAnRCddLFxuICBhYmJyZXZpYXRlZDogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxuICB3aWRlOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXVxufTtcbnZhciBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydTJywgJ00nLCAnVCcsICdXJywgJ1QnLCAnRicsICdTJ10sXG4gIHNob3J0OiBbJ1N1JywgJ01vJywgJ1R1JywgJ1dlJywgJ1RoJywgJ0ZyJywgJ1NhJ10sXG4gIGFiYnJldmlhdGVkOiBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddLFxuICB3aWRlOiBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH1cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9XG59O1xuXG5mdW5jdGlvbiBvcmRpbmFsTnVtYmVyKGRpcnR5TnVtYmVyLCBfZGlydHlPcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpOyAvLyBJZiBvcmRpbmFsIG51bWJlcnMgZGVwZW5kIG9uIGNvbnRleHQsIGZvciBleGFtcGxlLFxuICAvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgZm9yIGRpZmZlcmVudCBncmFtbWF0aWNhbCBnZW5kZXJzLFxuICAvLyB1c2UgYG9wdGlvbnMudW5pdGA6XG4gIC8vXG4gIC8vICAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge31cbiAgLy8gICB2YXIgdW5pdCA9IFN0cmluZyhvcHRpb25zLnVuaXQpXG4gIC8vXG4gIC8vIHdoZXJlIGB1bml0YCBjYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RhdGUnLCAnZGF5T2ZZZWFyJyxcbiAgLy8gJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnXG5cbiAgdmFyIHJlbTEwMCA9IG51bWJlciAlIDEwMDtcblxuICBpZiAocmVtMTAwID4gMjAgfHwgcmVtMTAwIDwgMTApIHtcbiAgICBzd2l0Y2ggKHJlbTEwMCAlIDEwKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnc3QnO1xuXG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnbmQnO1xuXG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAncmQnO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudW1iZXIgKyAndGgnO1xufVxuXG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgYXJndW1lbnRDYWxsYmFjazogZnVuY3Rpb24gKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBOdW1iZXIocXVhcnRlcikgLSAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxpemU7IiwiaW1wb3J0IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qc1wiO1xuaW1wb3J0IGJ1aWxkTWF0Y2hGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanNcIjtcbnZhciBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL14oXFxkKykodGh8c3R8bmR8cmQpPy9pO1xudmFyIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xudmFyIG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYnxhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oYlxcLj9cXHM/Y1xcLj98YlxcLj9cXHM/Y1xcLj9cXHM/ZVxcLj98YVxcLj9cXHM/ZFxcLj98Y1xcLj9cXHM/ZVxcLj8pL2ksXG4gIHdpZGU6IC9eKGJlZm9yZSBjaHJpc3R8YmVmb3JlIGNvbW1vbiBlcmF8YW5ubyBkb21pbml8Y29tbW9uIGVyYSkvaVxufTtcbnZhciBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXmIvaSwgL14oYXxjKS9pXVxufTtcbnZhciBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15xWzEyMzRdL2ksXG4gIHdpZGU6IC9eWzEyMzRdKHRofHN0fG5kfHJkKT8gcXVhcnRlci9pXG59O1xudmFyIHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXVxufTtcbnZhciBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bamZtYXNvbmRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXihqYW58ZmVifG1hcnxhcHJ8bWF5fGp1bnxqdWx8YXVnfHNlcHxvY3R8bm92fGRlYykvaSxcbiAgd2lkZTogL14oamFudWFyeXxmZWJydWFyeXxtYXJjaHxhcHJpbHxtYXl8anVuZXxqdWx5fGF1Z3VzdHxzZXB0ZW1iZXJ8b2N0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikvaVxufTtcbnZhciBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9eai9pLCAvXmYvaSwgL15tL2ksIC9eYS9pLCAvXm0vaSwgL15qL2ksIC9eai9pLCAvXmEvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldLFxuICBhbnk6IFsvXmphL2ksIC9eZi9pLCAvXm1hci9pLCAvXmFwL2ksIC9ebWF5L2ksIC9eanVuL2ksIC9eanVsL2ksIC9eYXUvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldXG59O1xudmFyIG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bc210d2ZdL2ksXG4gIHNob3J0OiAvXihzdXxtb3x0dXx3ZXx0aHxmcnxzYSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHN1bnxtb258dHVlfHdlZHx0aHV8ZnJpfHNhdCkvaSxcbiAgd2lkZTogL14oc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpL2lcbn07XG52YXIgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15zL2ksIC9ebS9pLCAvXnQvaSwgL153L2ksIC9edC9pLCAvXmYvaSwgL15zL2ldLFxuICBhbnk6IFsvXnN1L2ksIC9ebS9pLCAvXnR1L2ksIC9edy9pLCAvXnRoL2ksIC9eZi9pLCAvXnNhL2ldXG59O1xudmFyIG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYXxwfG1pfG58KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxuICBhbnk6IC9eKFthcF1cXC4/XFxzP21cXC4/fG1pZG5pZ2h0fG5vb258KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pXG59O1xudmFyIHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXmEvaSxcbiAgICBwbTogL15wL2ksXG4gICAgbWlkbmlnaHQ6IC9ebWkvaSxcbiAgICBub29uOiAvXm5vL2ksXG4gICAgbW9ybmluZzogL21vcm5pbmcvaSxcbiAgICBhZnRlcm5vb246IC9hZnRlcm5vb24vaSxcbiAgICBldmVuaW5nOiAvZXZlbmluZy9pLFxuICAgIG5pZ2h0OiAvbmlnaHQvaVxuICB9XG59O1xudmFyIG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiBidWlsZE1hdGNoUGF0dGVybkZuKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9KSxcbiAgZXJhOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55JyxcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5OiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICdhbnknLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbWF0Y2g7IiwiaW1wb3J0IGZvcm1hdERpc3RhbmNlIGZyb20gXCIuL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRMb25nIGZyb20gXCIuL19saWIvZm9ybWF0TG9uZy9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdFJlbGF0aXZlIGZyb20gXCIuL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanNcIjtcbmltcG9ydCBsb2NhbGl6ZSBmcm9tIFwiLi9fbGliL2xvY2FsaXplL2luZGV4LmpzXCI7XG5pbXBvcnQgbWF0Y2ggZnJvbSBcIi4vX2xpYi9tYXRjaC9pbmRleC5qc1wiO1xuLyoqXG4gKiBAdHlwZSB7TG9jYWxlfVxuICogQGNhdGVnb3J5IExvY2FsZXNcbiAqIEBzdW1tYXJ5IEVuZ2xpc2ggbG9jYWxlIChVbml0ZWQgU3RhdGVzKS5cbiAqIEBsYW5ndWFnZSBFbmdsaXNoXG4gKiBAaXNvLTYzOS0yIGVuZ1xuICogQGF1dGhvciBTYXNoYSBLb3NzIFtAa29zc25vY29ycF17QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2tvc3Nub2NvcnB9XG4gKiBAYXV0aG9yIExlc2hhIEtvc3MgW0BsZXNoYWtvc3Nde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9sZXNoYWtvc3N9XG4gKi9cblxudmFyIGxvY2FsZSA9IHtcbiAgY29kZTogJ2VuLVVTJyxcbiAgZm9ybWF0RGlzdGFuY2U6IGZvcm1hdERpc3RhbmNlLFxuICBmb3JtYXRMb25nOiBmb3JtYXRMb25nLFxuICBmb3JtYXRSZWxhdGl2ZTogZm9ybWF0UmVsYXRpdmUsXG4gIGxvY2FsaXplOiBsb2NhbGl6ZSxcbiAgbWF0Y2g6IG1hdGNoLFxuICBvcHRpb25zOiB7XG4gICAgd2Vla1N0YXJ0c09uOiAwXG4gICAgLyogU3VuZGF5ICovXG4gICAgLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogMVxuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxlOyIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9hZGRNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN1Yk1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIHN1YnRyYWN0ZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIHN1YnRyYWN0ZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3VidHJhY3QgNzUwIG1pbGxpc2Vjb25kcyBmcm9tIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdWJNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NToyOS4yNTBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdWJNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCAtYW1vdW50KTtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXQuaW8vZmp1bGVcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiB0emxvb2t1cChZLFcpe1widXNlIHN0cmljdFwiO3ZhciBVPVwiWElYSFhIWEdYR1hRWFFYUFhQWE9YT1hOIyNVNlU2VVcjJFUlVSVVJVUlVSVYRlhFWEVYUlhSWFZYVlhXWFdYWFhYWFlYWVhaWFpZI1kjWSRZJFklWSVYU1hTWFRYVFhVWElYSFhIWEdYR1hRWFFWQVZBIyUjJlYnIydVNiMoIylVJVUlVSVVJVUlIypVJVhFWEVWTFZMVkxWTFlHWUdZR1lHIytXPVc9Vz1XPVc9Vz1ZJFgrWCtYK1grWCtYVFhVVlBVUSMsVCpUKiMtVkFWQSMuIy8jMCMxIzJVNlU2VVdVJVUlVSVVJVUlIzNWTFZMWEVZSCM0IzUjNllHWUdZRyM3WC4jOFc9Vz1XPSM5WCxYLCM6IzsjPCM9Iz5WUFZQIz8jQCNBVCpUKiNCI0MjRCNFI0YjR1YnI0gjSSNKVVdVJVUlVSVVJVg2WDYjSyNMWUgjTSNOI08jUFlHI1EjUiNTWC4jVCNVVz1XPSNWI1dYLCNYI1kjWiQjJCQkJSQmVCkkJyQoVCpUKiQpJCokK1RXJCwkLSQuJC8kMCQxJDIkM1UlVSVYSlhKWEYkNCQ1JDYkNyQ4JDkkOllHJDskPCQ9JD4kPyRAJEEkQlczJEMkRCRFJEYkRyRIVzgkSVQpVClUKVhIWEdYR1hRVj0kSiRLJEwkTSROJE8kUCRRJFIkU1YyWEtYSlhKWEZZNCRUJFUkViRXJFgkWSRaJSMlJCUlVk4lJiUnJSglKSUqJSslLCUtJS4lLyUwVzhYVFQpWElYSFhIWEdYR1hRWFFVPiUxJTIlM1RMJTQlNSU2JTdVLVhLWEtYMFgwWEYlOCU5JTolOyU8JT0lPiU/JUAlQSVCJUMlRFgoJUUlRiVHV1UlSCVJJUolS1hTWFRYVFhVWElYSFhIWEdYR1hRWFFVPiVMJU0lTlRMJU9VUFhNWDFYTFhLWEtYSlgwWDUlUCVRUzAlUiVTJVQlVSVWJVclWCVZJVomI1dVV1VXVVdVV1UmJCYlWCVYU1hTWFRYVFhVJiZaRFpEWEdYR1hRWFFYUCYnJigmKSYqJismLFVPWExYTFhLWEtYSlhKJi0mLiYvUzAmMFQmJjEmMldRJjMmNCY1JjYmNyY4JjkmOiY7JjwmPVglWCVYU1glWFRYVFhVWElaRFpEWkRYR1hRWFFYUFVJJj4mPyZAJkEmQiZDJkRYTFhLWEtYSlgzJkUmRiZHJkgmSSZKJksmTCZNJk4mT1dFVzxXPCZQJlEmUiZTJlQmVVklWCVaVVhTWFRaWVhVWElYSFhIWEdYR1hRWFFYUFhQWE9YTyZWJlcmWCZZJlonI1hLWEtYSlgzJyQnJScmJycnKCcpJyonKycsJy1WTVhYVzwnLlhaJy8nMCcxJzJXRFpQWjknMyc0WkgnNVhVWElYSFpFWkVYR1hRWFFYUFhQWE9YT1pAJzYnNyc4JzknOic7WEtYSlhKWEYnPCc9Jz4nPydAJ0EnQidDJ0RYWFhYWjFXJ1haJ0UnRidHJ0gnSSdKVzVaOSdLJ0wnTVpXWjxaPFhIWkVYR1hRWFFYUFhQWE9YT1pAJ04nTydQVUInUSdSJ1MnVFhKWEZYRlhFU1EnVSdWJ1cnWCdZWFdaMFhYJ1pYWVhaWFpXNCgjKCQoJVc1KCZaUygnWkIoKCgpKCooK1pUWkUoLCgtWFFYUFhQWE9YT1hOVT1VPSguKC8oMCgxKDIoM1hKWEZYOFhFWEVTTig0KDUoNig3KDhaMlhYWitYWVhaWi1ZIyg5KDooOyg8KD0oPig/WkIoQChBKEJaTFpUKENaVihEWFFYUFhQWE9YT1hOWE5VPShFKEYoRyhIKElYSlhKWEZYRlg4WEUoSihLKEwoTShOWiooT1oyWFlYWVhaWFpZI1kjWENYQyhQKFFYO1g7Wk4oUlo+KFNYSFhIWlZaVlpBKFRaUVhQWjpYT1hOWE5WLChVKFYoV1YuVi5YSlhKWEZYRlhFWEVUKChYKFkoWloqWipYWFhYWFlYWVhaWFpZI1kjWENYQykjKSQpJSkmWFQpJ1hVWjZYSFhIWEdYR1hRWFFYUFhQWE9YT1hOWE5WLCkoKSkpKlYuWEtYSlhKWEZYOFhFWEVYUlNFKStTRVhXWFdYWFhYWFlYWVhaWFpZI1kjWEMpLCktKS4pL1hEWEFaNlo2WjhYSFhIWEdYR1hRWFFYUFhQWE9YT1hOWE5WLCkwKTFULlhLWEtYSlhKWEZYOFhFWEVYUlhSWFZYVlhXWFdYWFhYWFlaL1haWFpZI1kjWSRZJFklKTIpM1hEWFRaNlo2WElYSFhIWEdYR1hRWFFYUFhQWE9YT1hOWE4pNCk1KTZYOVhLWEtYSlhKWEZYRlhFWEVYUlhSWFZTRVNFWi9aL1hYWi9YWVhaWFpZI1kjWSRZJFklWSVYU1hTWFRaNlo2WElYSFhIWEdYR1hRWFFYUFhQWE9YT1hOWE5WJik3KThYOVhLWDdYN1g3WEZYRlhFWEVYUlhSWFZYVlhXWFdYWFhYWFlYWVhaWFpZI1kjWSRZJFklWSVYU1hTVkVaNlhVWElYSFhIWEdYR1hRWFFYUFhQWE9YT1hOWE5WSFZIKTkpOlQ5VDlYSlhKWEZYRlhFWEVYUlhSVklWSVZJVkkpO1ZGVkZWQyk8VktWQlZCVkJWRFZEVkRWRFZEKT1WR1hVWElYSFhIWEdYR1hRWFFYUFhQWE9YT1hOWE5WSFZIVDlUOVQ5VDkpPlZIKT9ZJilAVkpWSlZKKUFWSVZJVkkpQlZGVkYpQylEVkspRSlGKUcpSClJKUopSylMKU1WR1ZHVkdWR1ZHVkdYR1hRWFFYUFhQWE9YT1hOWE5WSFZIVDlUOVQ5VDkpTlZIKU9ZJilQVkpWSlZKKVFWSVZJVkkpUlZGVkYpUylUVktWS1ZLKVVYQ1hDWENYQ1hDKVZWR1ZHVkdWR1ZHVkdWR1ZHVkdWR1ZHVkdWR1ZHVkcpVylYKVkpWiojKiQqJSomKicqKCopKioqKyosKi0qLiovKjAqMSoyKjMqNCo1KjYqNyo4KjkqOio7KjwqPSo+Kj9WR1ZHWE5YTlYnKj9YTFhMVVdVJSo+VEYqP1RGVEZWJ1RGVidWJyo+VicqP1U2Kj9WOFY4Kj9VJVY4KkBVJVUlVSUqQFhZVz1ZR1hZWEhUKlVRVCpYUVhRKj4qP1ZBVkEqPypAKkBURipBVEZURipBVEZURipBVidURlRGVicqQSpCKkMqQ1RSVi9YRlZMVkxZSCpDWUhZSCpDKkRYVlhWKkRZR1lHWC5ZRypEKkRXPVguKkVXPSpFKkYqR1gsWCtYLCpHWCtYK1grKkcqRypIV1dXVypIV1dXV1dXWFRYVFdXKkhWUFZQVlBVUSpHVVFVUVVRVVFUKlVRVCoqRlY+KkdWPipHVkFWPipIVkFWQSpIVkFWQSpIVkFWQSpIKklWQVZBVEZWJ1ZBVidWJypIVicqSVU2VTZVNipJVTZVNipJVTZYNlhGWEZYNFhFWEVYNFlAWUgqR1lIKkhZVVlVWVUqSCpIWTdZNypJKklZR1lHWUdZR1lHKklZR1lHWUcqSSpKKkoqS1guWC5YLlguKksqTCpMVz0qTVc9Kk1YLCpOKk9YLFgsKk9YLFgsKk9YLCpQKlAqUVc7KlIqUldXKlNXQipTKlRXQldCKlQqVVdCKlZWUFZQVzgqVlZQVlAqVlZQVVFVUVQpVVEqVVQqVVFUKipVKlZYUVYwKlZWPSpXVj0qVypYVj0qWSpZVikqWlYpVilWPypaVj9WPypaVj9WP1YnKlpWOysjVTYrI1U2VjtWOysjVjtWOysjVSYrJFUmWExYTFUmVjJZQFlAWEYrI1lAWUArI1lAWEVZSFlAKyMrIyskKyUrJllVKyYrJysoKygrKSsqKytZR1lHKytZRysrKywrLSsuKy5YLisvWC5YLlguKy8rMFguKzArMSsyKzIrMys0KzUrNSs2KzcrOFc9Vz1XPSs4KzgrOVczVzNXMys5KzpXJVgsWCwrOis7WCwrO1gsWCtYK1grWCsrO1grV0JXUlhTV0IrOlhTVzhXOFc4VzhUKVY9KzkrOis7KzsrPCs9Kz4rPlYpVFRUVFYpVj8rPis/Vj9WP1RMKz9WO1Y7Kz8rQCtAVjtWO1Y7VjtWO1Y7K0BWOytAK0ErQitCVjIrQ1YyK0MrRFlJWUkrRCtFWUkrRitGK0crSCtJK0krSitLK0wrTCtNK04rTytPK1ArUStSK1IrUytUK1UrVStWK1crWCtYK1krWlZSK1osIywkLCVWTiwlVk5WTiwlLCYsJ1goLCcsKCwpVzJYJywpLCpYJywqLCtYJ1gnLCssLFcmLC0sLSwuV1VXVSwuLC8sMCwxWCssMVgrLDJXUlhTV1JYKVdXLDEsMldXLDIsM1U+LDQsNFRUVFRUVFRULDRUVFRMLDQsNSw2LDcsNyw4VVBVUCw4VVBVUFVQLDhVLVhMWExYRiw4WEZZPiw4LDksOllCLDosO1lCWUIsOyw8WU1ZTSw8LD1ZTSw+LD4sPyxALEEsQSxCWTlZOSxCLENZOSxELEQsRSxGLEcsRyxIVlMsSSxJLEosSyxMLEwsTSxOLE8sTyxQLFFYKFgoLFFXVVdVLFEsUldVV1UsUixTV1VXVVdVLFNXVSxULFRYKyxVWSVYK1glWCVYJSxUWClYU1hTVT4sVCxVLFYsVlRULFcsWCxYVEwsWVRMVEwsWVRMLFpYRixaWEZTOixaLSNTOi0kLSQtJS0mLSdZTVkqVCZUJlkqLSYtJ1M5LSctKFM5LSktKS0qLSstLC0sWCMtLVgjLS0tLlgjWCMtLi0vLTAtMS0xLTItMy00LTQtNS02LTdXVVdUV1VXVC02WCVYJVglWkpaRFhJWkRWOi01WFBVRi01LTZVRi03LTctOC05LTpUTFRMLTpVSFRMLTpVSC07LTtVTy08VU9YRlgyWEZTQS07LTwtPVNaUzBTMC09LT4tPlQmLT8tQC1AUzktQVM5UzktQVM5LUItQi1DV1EtRFgjLUQtRS1GLUZXOS1HVzktRy1ILUlXPFc8LUlXPFc8LUktSlc8LUstSy1MLU0tTi1OV1UtTy1QV1VXVS1QV1VXVVdVLVAtUVdVWCUtUVglVUktUVVJWE8tUS1SVUlVSVVJVUhVSS1SLVJVLi1TVjctUy1ULVUtVi1WVi0tVy1YVjxUKy1YLVlYRi1ZWDMtWi1aU1ouI1NaLiNTMi4kUzIuJC4lUzJTWS4lU1lTWVNZU1guJVNYU1guJVNILiZTSC4mU0hTSC4nLidXUS4oLilXUVdRLilWTS4pV0UuKldFVzwuKlc8WFouKlgtWC1YLS4qLisuLC4tLi1XVS4uLi8uL1dYV1UuMC4wWSRXRFkkWE4uMFhOWE4uMFVBWE5UTlREVERVVi4wVEQuMC4xVElUSS4xVEkuMlQ/WExVLFhMWEYuMVhGUzUuMS4yLjMuNC40LjUuNi43LjcuOC45U0suOS46U0suOy47U1guPC49U0hTSC49Lj5TSC4+Lj9TLy4/LkBTLy5BLkEuQlNVU1VXPFc8VzwuQlc8LkJXPC5DLkMuRC5FLkYuRlcwVzBXMFcwV0QuRldEWkNYU1o5WjlYU1hTWjlaUlpIWkguRFpIVE5YTlpAWE4uQ1RELkRURFRELkRURC5FVEkuRS5GLkcuRy5ILkkuSi5KWEtUQFRAU0IuSlhGWEZTLS5KWEVYRS5KU0tYRVQlLkpTQC5LLkwuTC5NLk5TSi5OLk8uUC5RU0YuUS5SLlNTLy5TU1dTVS5TU1VTVVhXVzwuU1haVzQuUy5UVzQuVVc0VzRXNC5VLlUuVi5XV0NXRC5XV0MuWFklWlAuWC5ZWjlaUlhTWlJaUlpGWFRYVFpIWkhYVFpXWkBVPVhOVT0uVS5WLldVPS5XLlguWS5aLlpWKy8jVitUQC8jVEAvJFUjVSNVIy8kWEpVUlUjVVJTTC8jU0wvJC8kLyUvJi8nLycvKFNPLykvKS8qUz5TPi8qLysvLFhXWFlaMVorWitXNC8rVzQvLC8sV0MvLVdDV0NXNVdDLy1XNS8tVzUvLlpTWjdaUy8uWktaV1hUWFRaV1pXWj9aP1o/Wj1aWi8sLyxaVC8tWlRaRVhHWlZaVlpJWklaVlpWLysvLFU9Ly0vLS8uVTwvLy8vLzBUUFRQLzAvMS8yLzMvMy80VD0vNS81WEpUPVhKU04vNVNOU05TTy81LzYvNy83Uz4vOC85Uz5aLlNSLzlaMFowLzlaKi85VzRZI1kjLzlXQ1kkWSRXQy85WENYQy85LzovO1g+LzsvPFg+WDsvPFpTWDtYU1pTLzxaU1pTWkJYVC88WkJYVVo/WFVaPlo+WlgvO1pYWlZaVi87WlZaVlpWWlYvO1U9LztVPS88VTxVPC88Lz0vPS8+Lz8vQC9AVi4vQVYuVi4vQVYuVi5YUi9BWFJUKC9BU05UKC9CL0IvQ1NDL0QvRC9FL0ZTUlNSWipYV1oqWFhaMlo0WjIvRFg+L0VYPlg+WDsvRVg7WjtaO1pOL0VaWFpYWjZYSVpBWlFYUVhRWE1WLFYsL0MvQy9EL0VUMC9FL0YvRy9IVCgvSC9JL0ovSi9LU0UvTC9MU1IvTVhWL01YPi9OWDpYPlg7WDovTlg7WDsvTi9PWDtYUy9PWFNaTlpOWk1YVFYsL05WLC9PL08vUC9RL1IvUi9TL1QvVVNFL1VTRVNFWEMvVVhDWEMvVVg6WSVYOlg6L1VYOi9WWERYRC9WL1cvVy9YL1lUL1Q1L1kvWlQ1WSUvWlklWSUvWjAjWEBYQFhNVixYTVYmL1owIzAkMCUwJVhMVDRYOVYmMCVYTVYmVDkwJVhMWExWJlYmVDlUOTAkVDlUOVQ5WFhYWDAkVkZYWlhaVkNWS1hUWFQwI1ZHWEpYSjAjVkhYRjAjVkgwJDAkU0UwJVNFMCVWSTAmVkkwJlZGMCdWRjAnVkMwKFZDVkNWS1ZDVkswJzAoVktWSzAoMClWS1ZLMCkwKjArWEMwKzAsWENYQzAsMC1YQ1hDMC0wLlhDWEMwLjAvWENYQzAvMDBYQ1hDMDBWRzAxVkcwMVZIMDJWSFZIMDJWSDAzMDNTRTA0U0UwNFZJMDVWSTA1VkYwNlZGMDZWQzA3VkNWQ1ZLVkNWSzA2WEMwN1hDMDdWRzA4VkcwOFZIVkdWR1ZIVkhWR1ZHVDlUOVZHVkdUOVQ5VkdWR1Q5VDlWR1ZHVDlUOVZHVkcwM1ZIVkdWR1ZIVkhWR1ZHVkgwMlZHVkdZJlkmVkdWRzAxU0VWR1ZHVkpWSlZHVkdWSlZKVkdWR1ZKVkpWR1ZHMC5WSVZHVkdWSVZJVkdWR1ZJVklWR1ZHVklWSVZHVkcwK1ZGVkdWR1ZGVkZWR1ZHVkZWRlZHVkcwKVZDVkdWR1ZDVktWR1ZHVktWS1ZHVkdWS1ZLVkdWR1ZLVktWR1ZHMCVYQ1ZHVkdYQ1hDVkdWR1hDWENWR1ZHWENYQ1ZHVkdYQ1hDVkdWR1hDWENWR1ZHL1hWR1ZHVkdYTlhOVidVNlhPWE9WQVRGVkFURlZBVEZWJ1U2VidVNlYnVTZWJ1U2VTZVNlU2VjhVV1VXVSVVJVY4VSVWOFUlVSVVJVUlVFJUKlY+VCpWPlY+VkFWPlZBVkFWQVRGVEZWQVZBVEZURlZBVEZWQVRGVkFURlRGVEZWJ1YnVEZURlYnVidURlRGVidVNlYnVTZWJ1YnVEZWJ1YnVTZWJ1U2VFJUUlUlVFJZSFlIWVVZVVlIWUgvQlk3WUhZSFk3WUcvQVlHWUdZR1lHWC4vQVguWC5XPVguWC5YLlc9WC5YLlc9WCxXPVgsVz1XPVc9WCxXPVgsWCxYLFgsWCtYLFgrWCtYK1grV1dYK1grWCtXV1grWCtXV1dXWCtYU1dXV1dXV1ZQVlBWUFZQVlBWUFVRVCpWPlQqVj5UKlY+VCpWPlY+VkFWPlY+Vj5WQVY+Vj5WQVZBVj5WQVRGVEZWQVZBVEZURlZBVkFURlRGVkFURlYnVTZUPFQ8VidVNlYnVTZVNlU2VTZWO1U2VTZWO1Y7WUhZSC8pWVVZVVlVLylZVVlVLykvKi8rWVVZNy8rWTdZN1k3LysvLFlHWUcvLFlHWUdZR1lHLyxZR1lHWUdYLllHWUdYLlguWUdZR1guWC4vKVguWC5YLlguWC5YLi8pWC5YLi8pWC5XPVc9WC5XPVguVz1YLlc9Vz1YLFc9WCxXPVczVzNXM1gsWCxXM1gsWCxYLFgsLyRYK1grWCxXO1gsLyNYLFc7WCtYK1c7VztXV1dXVztYKVc7WClYK1grV1dXV1gpV1dYKVdCWCtYK1dXV1dXV1dCV1dXV1dCV0JXV1ZQV0JXQlZQVlBXQlc4V0JXOFc4VzhXOFZQVzhXOFZQVlBXOFZQVVFUKlhIWEhUKlZAWFFYUVY9VThVOFYwLkxWPVYwVj1WMFYwVj1WPVRaVFpWPVY9VFpUWlRTVFNWPVRTVj1WPVRXVilUV1YpVFdWKVRXLkdWKS5HVikuSFYnVidWP1YnVidVNlYnVTZWO1U2VjtWO1Y7VjtVNlY7VjtVNlY7VjtVV1Y7VjtWO1Y7VjtVJlUmWTQuQVk0WTQuQVlALkIuQ1hFWEVZJy5DWUguQy5ELkUuRVlVLkZZVS5GLkdZLFksLkcuSFksLkkuSS5KWVUuSy5LLkxaJlomLkwuTVomWiYuTVlWLk4uTy5PLlAuUVlHLlEuUi5TLlQuVC5VWUVZRS5VWUcuVi5XWUdZPVlHLlcuVy5YLlkuWi5aLyMvJC8lWUcvJS8mLycvJ1guLygvKS8pWC4vKlguWC5YLi8qV09YLlguV09WTlguWC5XSVdJLygvKVZOVk5XSVdJVk5WTi8oWCYvKS8qWCZYJi8qWCYvKldIVk4vK1dIV0hWWS8rWCZYJlgmLytYJlc9WCZXPS8qLysvLC8tV0cvLS8uLy9XPS8vVz1XPVc9Vz0vL1czVz1XPVczVzNXM1gsVyVXJVczVzNXM1clVyVYLFclLyxYLFgsLyxYLFgsWCtYK1grWCtXUlgrV1JXQldCVzhXOFY9Vj0vKVY9Vj1VPlhQVT4vKFU+VT5VPlY9LygvKS8qVFdUVy8qLytVPlU+VT4vK1RUVFRVPlRUVFdWKVRXVilUVC8pVFRUVFRMVEwvKVRMLylUTFRMLyovKlRVLysvLFY7VjsvLC8tVjtVNlY7VjtWOy8sLy0vLlY7VEJWO1RCLy1VS1VLLy5VLVUtVS0vLlRCLy5WMlYyVjJWMlUkVUovLVlAWUAvLllAWUAvLi8vLy8vMFlJLzEvMS8yLzMvNFlJLzRZSS81WSxZLC81WSxZLC81LzYvNy83LzgvOS86LzovOy88Lz0vPVomLz4vP1omWiYvPy9AL0AvQS9CL0MvQy9EL0UvRi9GL0cvSFk8L0gvSVk8WTwvSS9KWS9ZLy9KL0tZLy9ML0wvTVk8WTwvTVlHL04vT1k8WTxZPC9PL08vUC9RL1JZR1lHL1IvUy9TL1QvVVolL1UvVllHWUcvVi9XWUdZRy9XWVFaJS9YL1gvWVdKV0ovWS9aWUcwI1ZUVlRWVDAjMCNYLldKVlIwIzAkVlJWUlZUVlIwJDAlWC5XT1ZSV09XT1ZOV09XT1ZSVlJXUFdQVk5WTldQV1BWWS9ZVk5WTlZZVllWTlZOVllXPVZZVllWTlZOL1dYKFc9Vz1XMlcyVz1XPVcyVzJXMlcyWChXMlczVzNYJ1gnVzJYJ1gnWCdXM1czL1JYJy9SVyVXJVclVyVXJVcmVyZXJVclL1EvUlcmV1VXVVdVL1FXVVdVV1VXVVdVV1UvUVgsWCwvUVgsL1FYK1grWCtXVS9RV1VXVS9RV1UvUi9TWCtXUlgrV1JYK1dSWCsvUldXVzhXV1dXWClXV1gpWClVPi9QVT5VPlRFVEUvUC9RVT4vUVU+VFQvUVRUL1JUVC9SVExUTFRMVEwvUlRML1NUVVRVL1MvVFRML1RUTC9VL1VVUC9WVVBWOy9WL1cvWC9YL1lVUFVQL1lVUFVQVVAvWVUtWExYTFlCWUJZQi9ZWUJZQi9ZWUJZQi9ZWUIvWi9aWUIwI1lCWUlZSTAjMCRZSTAkWUlZSTAkWU0wJTAmMCYwJ1lNWU0wJzAoMCkwKjAqMCswLDAtMC0wLlkqWSowLjAvMDAwMTAxMDIwMzA0WSowNFkqMDVZOVk5MDVZOVhWWVJZOVk5WVIwNFk5WTlZRzA0WTkwNVlHWUcwNTA2WTkwNlk5MDdZR1lHMDcwOFZRVlFWV1ZRMDcwODA5MDpWV1ZXMDpYV1ZRVlFWU1ZRV1NXU1dTMDlWU1ZTMDkwOldTV1AwOldTV1BXUFdTVk5WUzA5VlMwOldTMDowOzA8MDxWTjA9MD5WTlZOMD4wPzA/MEAwQTBCMEIwQ1csVyxWTlZOMEMwRFZOWChYKFgoMENYKFgoWChYKFcyV1VXVVgnWCdXVVdVWCdYJ1dVWCdYJ1gnWCcwQFgnV1UwQFdVV1VXVVdVMEAwQDBBV00wQldVMEIwQzBEV01XTTBEV1RYJTBEWCVYJTBEMEUwRjBHVT4wR1hQVjowR1VZVjpVLzBHVFQwSDBJVVkwSTBKMEtUVFRUVVUwS1RUMEtUVFRMVFQwS1RMVEwwS1VQMExVUDBMVVAwTVVQWEZZPlhGUzowTDBNUzpTOllCME0wTjBPUzowT1MwUzAwT1QnMFBUJ1lNMFBUJ1lDMFBUJ1MwVCYwUFQmVCZUJjBQMFFZKlhWVCZUJlQmUzlZOVk5WFYwUDBQMFEwUjBTMFMwVDBVVk8wVTBWVygwVzBXMFhWVVZVVk9WVVdRMFhWVVZVV1FWVTBXWCMwWFgjMFgwWVZVMFowWlgjWCNYI1gjMFpYI1gjMFpWUzEjMSQxJDElVzdXN1c3VzcxJVc3VzdXN1c3MSUxJTEmVzcxJzEnMSgxKTEqMSoxK1c5VzlXOTErVzkxLFgoWChXOVc8WChXVVdVV1UxKlc8VzxXPFdVV1VXPFdVV1RXVDEpMSpWOjEqVUZVRlUvVS8xKlUvVE0xKlRNMStVRlVMVUYxKzErVUUxLDEtMS1UTDEuMS9VTFVMMS9VSTEvMTAxMVVMMTFYTlVMWE4xMVVQWE5VUFhOVVBVLlUuVVBVUFVQMTBVUDEwMTFVT1gyUzoxMTEyUzpTOlNBMTJTQVNBU0FTWlNaUzBTWlMyUzBTMFMyUzBTMFQmUzBUJlMwVCZTMFMwVCZUJlNZVCZUJjEsVCZTOVQmUzlUJlM5MSsxLDEtV1FTOTEtUzlTOTEtMS5XUVdRMS5YIzEvWCMxLzEwV1FXUVgjWCMxMFgjMTAxMVcrMTIxMlgjV0VXRTEyVzlYIzEzWCNXOVdFWFhXOVc5VzkxMjEyMTNXPFc8VzkxM1c8VzwxM1c6VzwxNDE0V1UxNTE2V1VXVTE2MTcxNzE4VzwxOVdVV1UxOVc8VzxXVTE5WC0xOTE6MTtXPDE7WC1YLVgtV1VXVVgtV1UxOldVMTtXVVdVV1VXVTE7V1VXVTE7V1VXVVdVMTsxPFdVMTxXVTE9MT0xPldYWCVVRjE+WE9VSTE+VUlVSVVJVUkxPlVJVUlVSTE+VUlVKlVIMT4xP1RIMT9UQVUqVjdVLlUuVEtUS1UuVU9VLlUuWE1YTVY3VERVNzE8VTdYTVVPVSdVLlVaVVoxO1hNWE1WLTE7WE1YTVYlMTtYTFRJMTtULFVOMTwxPFNBU0FTWlhGU1pTPTE8U0FTWlNaU1pTWlNaUz1TWlNaUzJTWlMyU1pTMlNaUzJTMFMwUzJTMlMwUzBTMDE3UzBTWVNZU1lTWFQmU1hTWFQmU0hTWFNIU1hTSFNYU0gxM1NIU0hTSFNIU0hTSDEzMTNXUVNIV1ExM1dRUzFTMVdRMTMxNFZNV1FXUVZNVk1XUVdRV1FXRVdFV0VWTVdFVzwxMVc8WFpXKTExWFpYLVgtMTExMjEzWCpWWFgqWCoxMlZYMTNWWDEzMTRWWDE1VlgxNVZYMTYxNlcwWCoxN1dVV1VXMFdVMTZXVVkkWSRZJFdEV1VXRDE1V0RXRFdEMTVVKlhOWE4xNTE2VFlVQVVWVERVVlREWE1YTTE1MTZURDE2VEQxN1hMMTdUSVUoVEkxN1RJVElTPTE3Uz0xOFM9MThTNVM8UzJTMlMyMThTPFM8MThTQlM8MTgxOVM8UzJTMlMyMTkxOVQjVCNUIzE5MTpTLVMtVCMxOjE7Uy4xO1NZVCNTWTE7U1kxPFNLMTxUJDE9MT5TWVNZU0sxPlNZU1hTSzE+U0sxPjE/U0BTWFNYMT9TWDE/U1hTWDFAU1hTWFMzUzNTSFNIUzNTRlNIMT5TRlNGU0gxPlNIUy9TSFNGU0ZTRjE9MT5TL1MvMT5WTTE/MUBTL1NVUy9TL1ZNVk1WTVNVVk1WTVNVU1UxPVcnMT5XJ1c8WFpXPFgtWFpYLVc8VlhYLVZYWC0xPDE8MT0xPldLMT5WWFZYVlhXS1dLVlhXMFdLMT1XSzE+V0RXRFcwWSRaSFpHWkhaR1VWVVZURFhNWE1URFUrVStURDE6VERURFREVERURFVCVElVLFRJVENUSVRJVUJVQlRDVENVQlRDVSwxNlUsVVhVWFVYVVhUSlUsVSxUQ1YrVVhUSlYrVEBYS1hLMTNYS1NWMTNTVlNWMTNTLjE0Uy4xNDE1Uy5YRVNLMTUxNlNAU1FTQFNMMTZTQFNAU0xTN1MzUzNTMzE1UzNTM1NKUzNTQFM3UzcxNFMzUzMxNFNPU0ZTRlNPMTQxNFNPU09TT1NPU09TTzE0Uy9TL1NGUy8xM1NHMTRTR1NHU1cxNFNXUy9TL1MvU1VTL1NVU1VTVVc8VzRXNFc0VlgxMVc0Vz4xMVc+Vz5XPjExVz4xMjEzVzRXPzEzV0xZJFc/MTMxNFc/V0QxNFc/Vz9XQ1dMV0NXRDEzV0NXQ1dDV0NXQ1c1VzVaUFc1VzVaUFklVzVXNVUrVSsxMDExVStVKzExVT1VPTExVT1VPVREVERVPVU9VERVQlREVUJVPVU9VT1UWFRYVUJUWFVCVUJWK1VCVUJVQlYrVUJWK1RAVSNUQFUjMSpVIzErVSNVI1UjMStVI1NMMStTN1M3MSsxLDEtMS5TNzEuUzdTSlNKU0pTSlNPMS1TSlNOU0oxLVNPU0pTT1NKU09TT1NPU08xLFNPMS1TTzEtU09TTzEtU0cxLlM+MS5TV1M+MS9TV1NXMS9TV1NVU1VTV1hXMS4xL1M+Uz4xL1dMV0xXTFc0V0xXNFc0V0xXTFdMMS5XTFdDVzRXNFdDVzVXQ1c1VzVZJVc1WlNXNVpTVzVaU1o3WjdaN1pCWlpYSVpaWjVaPVhIWk9YSFpPWEhaNVpPMSZWKlU9VT1WKlRYVioxJlU9VTxVPVU8VUIxJVU8ViRWJFVCViRUUFYkMSRVPFU8VUJWK1RQVFBWK1YrVFBUUFRAVEBUUFQtVC1VI1QtVSNUUFQtVFBWLlQtMFcwWFQ9VSNVI1Q9VD0wVzBYMFkwWlQ9MFpUPVQ9MFoxI1VAVUBTTlNOU04xI1NPU09TT1NQU05TUFNQU1AwWTBaU1BTUDBaMSNTUFNQU1AxI1NQMSQxJFNSMSVTUlouWi5YV1ozWjNaKlozWipXNFc0WixZI1c0MFpZJFkkV0NXKldDVypXNVc1WSVYPlc1WSVYPlklWSVYPlhDWD5ZJVc1WD5ZJVc1WlNZJVg7WlNaU1g7WFNaQlpCWlNYU1pCWkJaO1o7Wj5aPlo+WlhaVFhHWEdaVlpWWlZaVlpBVT1VPDBOVTxWLDBOViwwT1U8VTxVPDBPVTxUOzBPVDtUUFRQVTxUR1RQVFBUR1RHVDswTVQ7VEdUR1RHME1URzBNVi5WLlYuME1WLjBOVi4wTlQ9ME9UPVNOU05UKFQoU05TTjBOVChUKFNDVChTQ1NQU1BTQzBNU1AwTTBOU0RTRFNEME4wT1NEU1JTRFNEME5TUlNSU1JTRDBOME9TUlhDWD5YQ1g+WENYPlhDWD5YPjBNWD5YPlo7WFRaTlpOVixULzBMME1UMTBNVDUwTjBOVDtUMFQwME4wTzBQMFFUO1Q7MFEwUjBSMFMwVFYuVDBUO1QwMFQwVDBVMFZWLlQoU0NUKFNDVChUKFQoU0VUKFNFU0VTRVNDU0NTQzBTMFNTRVNFU0VTRVNFMFMwVFNFU1IwVFNSMFRTRVNFU0VYQ1g+WENYPlhDWDpYQ1g6WDpYO1g6WERYO1g7WERYRFg7WDtYRDBQWDtYOzBQMFEwUVQ2MFIwUzBTVDMwVDBVVDJUMFQ3MFVUMFQwVDAwVVQ3MFVUNVQ1MFUwVjBXVC5UMDBXMFgwWTBZVi5VTTBaMFoxI1QuVC5VTVVNVC5YTDBaU0VTRVNFWENYQ1hDWD8wWVg6WD9ZJVg6WERYOjBZWDowWVg6MFpYRFhEWEIwWlhEWEQwWlhEVixWLFYsMFowWlQ1VDVUNVYsMFpWLFYsVC5ULjBaVC5ULzBaVC9UL1g6MFpZJVklWEJYQlg9MFpYQlhCWEBYQFYsMFlWLFQ0MFkwWlQ0VDRWJlQ0ViZWJlQ0VDQwWVQ0MFlUL1Q0VDRWJlQ5ViZWJlhMWDlUOVhMVDlUOVYmVDlWSVZGVklWRlZEVkdWRFZHWEpYSlQ5VkhYRlhGVkhZJlZIWSZWSFkmWSZTRVkmU0VZJlNFWSZTRVZKVklWSlZJVkpWSVZKVklWSVZGVklWRlZJVkZWSVZGVkZWQ1ZGVkNWRlZDVkZWQ1ZCVkJWS1ZLVkJWQlZLVktWQlZCVktWS1ZCVkJWS1ZLVkJWQlZLWENWQlZCWENYQ1ZLWENWS1hDVkRWRFhDWENWRFZEWENYQ1ZEVkRYQ1hDVkRWRFhDWENWRFZEWENYQ1ZEVkRYQ1hDVkRWRFhDWENWRFZEWENYQ1ZEVkRYQ1hDVkRWRFhDWENWRFZHWENWR1hDVkdYQ1ZHVDlWSFQ5VkhUOVZIVDlWSFZIWSZWSFkmVkhZJlZIWSZZJlNFWSZTRVkmU0VZJlNFVkpWSVZKVklWSlZJVkpWSVZJVkZWSVZGVklWRlZJVkZWRlZDVkZWQ1ZGVkNWRlZDVktYQ1ZLWENWS1hDVktYQ1hDVkdYQ1ZHWENWR1hDVkdYTVZIVkdWSFQ5VkhUOVZIVkhZJlZIWSZZJlNFWSZTRVZKVklWSlZJVklWRlZJVkZWRlZDVkZWQ1ZLWENWS1hDWENWR1hDVkdZSFlIL1UvVllIWUgvVllHWUdYLllHWUdZSFlIWUgvVVlIL1VZSFlVL1VZN1k3WTdYUlk3L1VZRFk3WTcvVVk3WVUvVVk3WTdZN1k3L1UvVlk3L1ZZR1lHWUdZRy9WWUdZR1lHL1ZZPVlHWC5YLlguWC5YLi9VL1ZYLlguWCZYJlgsWCwvVVczWCxXO1gsWCxWPVY9VThWPVRXVilUV1YpVilWP1YpVj9WKS9RVilWKVk0WTRZNC9RWUBZQC9RWUAvUS9SWTRZNFk4L1JZQFlAWSdZLFknL1JZSFlIWUgvUllIWTNZM1kzWTMvUVkzWTMvUVlVWVVZVVlVWVVZM1lVWTNZMy9QL1FZM1kzL1EvUlkzL1JZM1kzWVVZVS9SL1NZLC9TWSwvVFlVWURZVVlVWURZN1lWWVYvUi9TWUwvVC9UWVVZM1omWVVYUlomWiZYUlk7L1NZOy9TWiRZOy9UWTcvVFlWWVZZTFlMWUwvVFlML1RZTFlML1QvVVlWWUcvVVlHWUdZRy9VWUdZTC9WWiRaJC9WWiRaJFokWiQvVi9WL1daJi9YL1gvWVlFWUUvWVlFWUVZRS9ZWUVZRVlFWUdZR1lFWUdZRS9YWUVZRVlHWUcvWFlHL1hZPS9ZWUcvWVk9WT1ZPVk9WT1ZPS9ZWT1ZPVlHWT1ZPVlOL1hZTllHWUdZRy9YWUdZR1lHL1hZRy9YWUdZR1lYWVhZWC9YL1gvWS9aMCMwIzAkWU5ZTllOMCRZTjAlWT1YLjAlWC5ZTjAlMCYwJ1guWC4wJ1guMCcwKDApMCowKlguWC5YLlguMCpYLldPWC5YLlZOVk5YLldJVk4wKTApMCowK1gmV0lYJldJV0hYJlgmV0hXSFgmWCZXSFgmV0hXSFdJV0hXSDAnVk4wKDAoV0hWWVZZWCZYJlgmMChXSDAoV0hXSDAoV0cwKVdHV0gwKVZZVllWWTApVllWWTApMCpXPVc9MCpXR1ZZV0dXR1c9V0dXPVc9MClXPVczMClXM1czVzNYLFgsV1VXVVgsWCxXVVdVVj1WPTAnMCgwKFU+VT5VPlRXVFdWPVRXVj1WPTAnMChWPVY9MChUT1RXVFcwKFRXVFdUV1RXMChVPlU+VT4wKFRMVEwwKFVTMChUTFRUVEwwKFRMVExUTFRMMChUTFRMMChWO1RVVFUwKFRVVExUTDAoVFUwKTAqVFUwKlRVVFUwKlY7VFUwK1Y7VjtVUDArVjtVUFY7VVBVUDAqVVAwK1Y7VjtVS1VLVUtVLVVLVS1VLTApVS1VLVUmVjIwKVYyWTRZNFhFWUBZQFlAWUlZSVlAMCdZSTAoWUBZQFlJWUlZQFlAWUAwJ1lAWScwJzAoWUkwKFlJWUlZJ1knMCgwKTApMCowK1ksMCswLFlJWUkwLFksMC0wLllJWUlZSTAuMC4wL1lJMDBZLFksMDBZLFksMDAwMTAyWSwwMlksMDMwM1lLMDRZSzA0WSwwNTA2WSxZLDA2MDcwNzA4WU0wOTA5MDpZTVlNWSwwOjA7MDwwPDA9WiNaI1lNMD1ZTVlNMD0wPjA/MEBaJlomMEBaJllLMEAwQTBCMEIwQzBEMEVaJlomMEUwRlomWiYwRjBHWiMwR1ojMEgwSFktMEkwSjBKMEswTDBNME1ZMDBOME8wTzBQWTBZMDBQMFFZMDBSMFIwUzBUWSswVFkvMFVZLzBVMFZaJjBXMFcwWFk8WTwwWDBZWTxZPDBZWUVZPFk8WUVZRVk8WTwwWDBZWS9ZL1k8MFlZL1kvMFkwWlkvMSMxI1k8WTIxJDEkMSUxJjEnMScxKDEpWTwxKVk8WTxZPFlHWUdZPDEpWTwxKVk8WTwxKTEqWTxZPFk8MSpZUllSWTwxKjErMSwxLFk8WigxLTEtMS5ZUllSWigxLllSWUcxLjEvWTxZPFlHWUcxL1lHWUcxLzEwMTExMTEyMTMxNFolWiVZR1olWTxZPDEzMTQxNFlHWUdZR1lHMTRZRzE1WiUxNTE2WUcxNllRMTcxODE4WVFXSldKWVExOFlRV0oxOFguV0pXSjE4MTlZR1lHV0pXSlkpMTlZKVkpWUdZKVZUVlRWUVZRWC5YLjE3V0pYLlguWC4xN1guWC4xN1guMTcxOFZRVlExOFZRVlFWUVZZVlkxOFZZWChYKDE4WChYJzE4WCdYJ1czVzMxOFclMThXJVdVMTkxOVdVV1VXVVclV1VXVVdVV1UxOFdVV1UxOFgsV1VXVVgsWCtYK1grV1VYK1dVV1VYK1grV1VXVVdVV1UxNVdVMTVYKzE2WCtXUldSWCUxNlU+VEVURVRFVEVURVU+VT5URVRFVFRUVDEzVFRUVFRUVEVUVFRFVEVURVRFMTJUVDEyVExUTFRMVEwxMlRMVFVUTFRVVEwxMlRVVFUxMlRVVFUxMjEzMTQxNDE1MTZVMDE2MTcxODE5VTAxOVUwMTpVMDE6MTtVUFY7VjtWOzE7MTtWOzE8VVAxPDE9VVBVUFY7VjsxPTE+VjsxPlVQVVAxPlVQVVBVUDE+VS1YTFUtWUJZQjE+MT9ZQllCMT8xQFlJWUkxQFlJMUAxQVlCWUIxQVlCMUJZQjFCWUJZQllCMUIxQ1lCWUIxQzFEWUJZQllJMURZSTFFMUVZTTFGWU1ZSVlJWUkxRjFGWU0xR1lNWU1ZTVlNMUdaJ1onWU1aJzFGMUdaJ1onWVBZUDFHWVBaJ1onWU1ZTTFGMUdZTVlKMUdZK1lQWStZKzFHWSsxSDFIMUkxSjFLWSsxSzFMWVNZV1lXWSpZKjFLMUxZKlkqMUxZLzFNMU5ZL1kvMU4xT1lUWVQxTzFQWVRZVDFQWVQxUDFRMVIxU1kvWS8xU1hWWVRZVDFTWTlZVFhWWTlZOVkqMVJZKlkqWSpZKlkqMVIxUlk5MVNZOVlSWUdYVlhWWUdZRzFSWUdXWldaWTlZOVdaV1pXWjFRV1oxUVdaV1oxUVgvMVIxU1k5MVNZOTFUMVRZRzFVV1pZR1lHMVUxVjFWVlcxVzFYVldWV1ZXMVgxWDFZWCNYIzFZMVpYI1gjMVpYVzIjWCMyIzIkVlNWU1ZTVlNYIzIkVlNWUzIkMiVXU1dTMiVXU1dTV1MyJTImVlMyJlZTVlNXU1dZV1MyJjImMidWU1ZTV1NXU1ZTV1MyJlZOMidWTlZOVk5WTjInVk5WTjInMigyKDIpMipXIzIqMitXI1cjV1kyKzIsMi0yLTIuMi8yMDIwVywyMVcsVyxXLDIxVzcyMTIyMjNXI1cjVyNXI1goMjJXI1cjVyNXIzIyVyNXI1cjVyNYKFgoWCdYJ1dVV1VYJ1dVV1VXVVdVV1VXVTIvV1UyLzIwV00yMFdNV01XTVdNV00yMDIxV1UyMVdVV1VXVVdVMjFXTTIxMjJXTVdNMjJXVDIzV1RYJVgpWCVYKVU+VT5VPjIyMjJUVFVZVVlVPjIyVT5VPlVZVVkyMlVZVT5VPjIyMjNVPlU+MjMyNFRUMjRVWVRUVVkyNFVZVVlVWTI0VVkyNVVZMjVVWVVZVS8yNVUvVS8yNTI2VS9VLzI2VFRUTVVVVFRUTFRMVExUTFRMMjVUTDI1MjZUTDI3MjcyOFRMVVBUTDI4VEwyOVRMMjlUTDI6MjpZQllCMjtZQllCMjtZQllCWUJTMFMwMjoyO1M6UzoyO1MwMjxTMFMwUzBTOlMwUzBUJzI7VCcyO1QnMjxUJ1lNWU1ZQ1lDVCdUJ1MwVCcyOlQmVCZUJlkqMjpZKjI7WTlZOTI7MjwyPDI9V0ZXRlk5WTkyPVk5WTkyPTI+Mj8yP1coV0ZWWlcoVygyP1coWFYyP1c2MkAyQFcoMkEyQjJCMkNTOVc2MkNZOVcoVygyQzJEVyhXKFcoMkRXKDJFMkUyRjJHVlUyR1ZVVlVWVVdRMkdXUVdRMkdYIzJIMklWVTJJMkpYI1ZVMkpWVVZVWCNYIzJKWCMySlgjVlUyS1gjMktYI1gjWCMyS1gjWCMySzJMWCMyTVgjVzcyTVc3Mk1XN1c3VzdWUzJNVzdXN1c3Mk1XN1c3WCMyTVgjWCNXN1c3VzdXOVc3MkxXN1c3MkxXN1c3VzdXN1c3MkwyTVcsVywyTVc5VzdXOVc5VzkyTFc5VzlXOVc5VzlXOVc8VzdXN1c3MksyS1c5MkxXOTJMMk1XOTJOVzkyTjJPMlBXPFc8MlBXPFdUMlBXVFglMlBYJVglWCVWOlUvVjpWOlVGVS9VRlVGVE1VVVRNVE1UTVRNVE0yTVVGVUxVRlVGMkxUTFRNVUVUTTJMMk0yTlVFVUxVTFVMVExUTDJNVExVTDJNVUxVTFRMVEwyTVRMVUxVSVVMVUlVTFVMMkxVTFVMMkxVTFVMMkxVTFVJVUwyTFhOVUVYTjJMVVBYTlhOVVBVT1VQVU9VUFVPVVBVT1VQVS5VLlUuWDJTQVNBU0FTOlM6U0FTQVNBUzBTQVNaMkZTOVQmUzlTOVZPMkYyR1ZPV1FXUVdRUzlXUVM5UzlXUVdRUzlXUVZVVlVXUVdRV0AyQ1dRMkRYI1gjV1FYI1dRV1FXUTJDV1EyQ1dRV1EyQ1dOMkQyRVgjWCMyRVgjV05YI1crVytYIzJEVysyRVcrMkVXK1dFMkVYIzJGWFhYIzJGWCMyR1gjVzlYI1c5MkZXPFc8VzxXOTJGVzkyRzJHVzxXPFc8VzlXPFc5VzlXPDJGVzwyR1c8MkdXPFc8VzpXVVc6VzpXOlc6VzxXPFc6VzoyRVc6MkVXOlc6MkZXPFgkMkYyR1c8VzxXPDJHMkcySDJJVykySVcpVzxXKVgkWCQySVc8VzxXPFc8MklXPFc8VykySVc8VzwySVc8VykySVcpMkpXPFgtVzxYLVgtV1UySVdVMklXVVgtWC1XVVdVV1UySVdVV1VWWFdVV1VXVVdVMkhXVVdVMkhXVVdVV1UySFdVV1VXWFkkV1hXVVdYMkdXWFdYWSQyR1glVUZVRlVGMkdVRlVJMkdVSVVJMkdVSVVJVUhVSFVJVSpVSFRIMkZUSFVIMkZVSFRIVUgyRlUqVEFVN1VaVTdVN1VaVi1YTVYtVi1WJVhNWE0yQ1Y8VjVWNTJDVjFVOzJEVSlVKVRWVURYRlNBWEYyQzJDUz1TPVM9UzBTWVNZU1lTOTJCU0hTSFNIUzFTSFMxWFdXUVNIV1FTSFNIUzFTMVdRV1FWTTI/V1EyP1ZNVk1XPFcpVzxXKVcpWC0yPlgtV1VXVVgtWCpYLVgtVlhWWDI8WCpWWFZYVlhWWFgtVlhYLTI7WC1WWFgqMjtWWFZYVlhYKlZYMjtWWDI7VlhWWFdVV1VWWFZYVlhWWFkjV1UyOVZYWCpWWDI5VzBYKlcwV1UyOVdVV1VXWFdYV1hXRFVJMjhYTlhOVSpWN1RZVFlWN1Y3MjcyOFRJMjhUSVRJVFFVOzI4VElURFRJVElUSVRJVEkyN1RJVURVRFY2VjRWI1YjMjZUSVM9Uz0yNjI3MjdTPVM1UzVTPVMyUz1TMlMyUzJTPFMyWEYyNVhGU0JTPFMyUzxTLVNCUzwyNFNWUzJUI1MyVCNTMlMyUzJUI1MyUzJTLVMtVCNUIzIxVCNTLjIxUy5TLlMtUy5TLTIxU1lTWTIxU1lTWVNZU1kyMTIxU0tTS1NLMjFUJFNNVCRTLjIxUy5TTVQkU0tUJFNLMjBTS1NLU0tTS1NAU0syMDIwU0AyMVNYU0syMVNLU0BTWFNYMjFTWDIxU1gyMlNYU1hTWFNYUzNTSFNIU0hTRlNIUzFTSFMvUy8yL1MvUy8yL1MxUy9TL1MxVk1TMVMxUy8yLlMvUz9WTVZNMi5YV1c8VzwyLlcnVzxXJ1cnVydWWFZYMi1ZI1ZYVlhWWFdLMixWWFdLV0tWWDIsVlhWWFgtMixYLVZYWCpXMFdLVzBXS1cwVzBXMFRJVElURDIqVSxYTFUsVVhUSlhLVEpUQFNWMihTVlNWMihTLlMtUy4yKFMuWEVTLjIoMikyKjIrMitTSzIsU0tTS1NLU0BTQFNLU0AyKzIsU1FTUVNMU0xTM1MzUzMyK1M3U0pTN1NKMipTM1NPU09TRlNGMipTT1NPU09TSlNPU09TT1NPMilTT1NHU08yKTIpU0dTR1NHU0cyKTIqU1dWWFZYVz4yKlZYVlhWWFc+Vz5XPjIpVz5XNDIpVzRXNDIpVzRXNFc0V0wyKVdMV0xZJFckVz8yKTIpVz9XP1c/Vz9XP1dDMilXRFdEV0RXQ1hNVStVPVUrVStVKzInVStVK1UrMidVPVU9VStVPVU9VEBVI1RAMiZULVUjVC1VI1UjVSNVIzIlU0xTN1NMUzdTNzIkMiUyJlM3UzdTSjImU04yJlhSU04yJlNOU05TTlM3U0pTSlNKMiVTSlNKU0pTSlNKU0pTT1NPMiRTTzIlMiUyJlNPMidTT1M4U08yJ1NHU0cyJ1M+MidTPlM4Uz4yJ1NXMigyKVM+U1dTPlM+U1dTVzIoU1dTPlNXUz5TPlNXWFcyJ1hXV0xXTFc0V0xXTFdDMiZXQ1U9VipVPVU9VipWKlYqVTxVQlVCVUIyJFYkViRWJDIkVC1UPVQtVD0yI1YuVi5WLlUjVigyI1Q9VihWKFQ9MiMyI1Q9VD1UPVQ9MiNUPVVAVD0yI1Q9VD0yIzIkMiUyJlYoVigyJlhKU05TTlNOMiZTTzImU1AyJ1NQU1AyJ1NPU09TPlNQU1BTPlM+MiZTPlNQU1BTUDImMiYyJ1NSMihTNlNSUzZTUlM2U1IyJ1M2V0NXQzInV0NVPVU9MicyKDIoVTxWLFU8VixVPFYsVTxVPFU8MidVPFU8VTwyJ1Q7MidUR1RHVEdUR1RHMidURzInVi5WLlYuVEdWLlRHMicyJ1YuVi5WLlQ9VD1WLjInVi5UPVYuVi4yJlNOVChUKFNQU1BTQzImU1BTUFNQU0RTUFNEU0RTRFNDMiRTQ1NDU0RTRFNDMiRTUlM2U1IyJDIkU1JTRFNSU0RTRDIkU0RYPlg7WD5YO1YsVixWLFQ2VDJUMlQ2VDJUMVQ1VDFUNTFYVDVUNVQ1VDUxWFQ1VDVUL1QvVC8xWFQ4VDAxWFQwVDIxWFQyVDIxWFQwVC9UMFQwVDBUMDFYMVhUOzFZVDsxWVRHVDtUR1RHVi5WLlYuVDtUO1Q7MVhUMFQwVDAxWFQ7VDAxWDFZVDBWLlYuVi4xWFYuVi5WLlNDMVhTRTFZU0MxWVNDU0VTRTFZU0UxWjFaU0VTU1NFU0VTRVNFMVpTRVNUU0VTRVg7WDtYRFhEWDtYO1hEWEQxVzFYWERYRFYsVDZWLFQ2VixUNlYsVDMxVlQzVDNUM1YsVDNWLFQzVixUM1Q1MVVUM1QzMVVUNTFVVDAxVlQwVDBUMFQwMVZUN1QwVDcxVlQwMVYxV1QuMVdULlQuVC4xV1QuVC5ULjFXMVgxWVVNVDAxWTFaMiMyI1VNVU1VTTIjVi5VTTIkMiQyJVVNVi5ULjIlVC5ULjIlVU1ULjImU0UyJlNFU0VYQ1hDWD8yJjImWERYRFhEWEIyJlhCWEJYQlhCMiZYQjImMidYQlhCMidYQlhCWEJWLDInViwyKDIoVDVUNVQ1VixUNVYsVC9ULlQuMidULlQ1VDVUL1QvMiZYQlhCWEJYPVhTWEBYQFYsMiVWLFQ0VC9UL1Q0MiVUL1QvMiUyJlQ0VDRWJlQ0VC9UL1Q0VDRZVTIkWVVZVTIkWTcyJVk3WUhZSDIlMiZZSFlIWUhZVVlVWVVZSDIlWVVZN1k3WTdZVVlEWVVZRFlEWTdZRFk3WVVZN1k3WTdZN1k3WTcxWVk3WTdZR1lHWTdZN1lHWUdZR1lHWTdZRzFWWT1ZPVk9MVYxV1gmWCZYJjFXWCZYJlgsWCxYLFczVj9WP1YpVj9ZNFk0WTQxVTFVWUBZQDFWMVYxV1k0WTRZQFlAWTRZNFk4WThZQFlAMVUxVjFXMVhZSDFYWVVZVVkzWVVZM1kzWUhZVTFXWVVZLDFXWSxZLDFXWTNZLDFYWTNZMzFYWSxZM1kzWTMxWDFYWVVZMzFZWVVZVVksWSxZM1kzWSxZM1omWiYxV1omMVdaJjFYMVlYUllWWUxZTFlWWVZZTFlMWUxZTFlMMVdZVVlVWTNZVVomWTtaJlomWiQxVVokWiRZO1okWTtZO1k3WTdZVllWWUxZTDFTWUxZTDFTWUxZTFlWWUdZVllWWUdZR1lWMVJZR1lHMVJZR1lWWVZZTFlMWUxZR1lMWUxaJFokWTtaJFokWiRaJFlFWiYxTlomWiZaJFokMU5ZRTFOWUVaJllFWiQxTllFWUUxTllFWUVZRVlMWUxaJFlFWUVZR1lFWUVZRVlHWUUxTFlFWUdZR1lHMUtZPVk9WT1ZPVk9WUdZR1lHWUdZPTFKWT1ZPVk9MUpZPVk9WT0xSllHWUdZRzFKWUdZR1lYMUpZR1lYMUpZWDFKMUtZUVlOMUsxTFlHWUdZTjFMWUdZR1lHWUdZRzFMWUdZR1lHMUxZWFlYMUxZTllYWU4xTFlOWU5ZTllOMUxZTlguWC5YLlk9WT0xS1lOWU5YLllOWU5ZTllOMUoxS1lOMUtZTjFMWC5YLjFMWC4xTFlHWUdZR1lOMUxZRzFNWUdZR1lHMU1YLlguMU1YLlguMU1YLlguWC4xTVguV09WTjFNVk5WTlguWC5YLjFNWC5YLlgmWCZYLjFMWCZYJldIV0gxTFdIVllWWVZOMUxWWVdIVllWWVgmWCZYJldHWCZXSFdIV0hXR1dHMUlXR1dIV0dXSFdHV0hWWVZZVllWWTFHVllWWVdHV0dXR1c9Vz1XPTFGVz1XR1dHMUZXR1c9MUZXPVczVz1XPTFGVzNWPVY9Vj0xRlY9Vj0xRjFHVj0xR1U+VT5WPVY9VT5VPlY9Vj1VPjFGVj1WPTFGVT5UV1RXVFRUVFRXVFdUVFRUVT5URVU+MURUVDFEVFRUVDFEMUVUTFRMMUVUTFRMVExUTDFFVExUTFY7MUVWO1Y7MUVUVTFGMUdUVVRVVUdUVTFGVUcxRzFIVFVUVVRMVExUVTFHVFVUVTFHVjtUVVY7VjtWO1RVVFUxRlVLVVBVS1VQMUZVUFVLVVAxRlVQVVBVLVUtVS0xRlRCVEJUQlYyWUBZQFk2MUUxRVk2WUkxRllAWUAxRllJWUkxRllJMUcxRzFIMUlZLllJMUlZSVlJMUkxSlkuWS4xSjFLWS5ZLlknWScxSzFMMUwxTTFOWSwxTjFPMVAxUTFRWS5ZSTFSWS5ZLjFSWS5ZLlksMVIxUzFTMVRZSVlJMVRZLDFVMVYxVjFXWilaKVlJMVcxWDFZMVlaKTFaWikxWjIjMiQyJVksWSwyJTImWSwyJlksMidZLFksWSwyJ1ksMicyKDIpMikyKjIrWUtZLFlLWSxZLDIqWUtZS1lLWUtZS1ksWUsyKVksMipZLDIqMitaKVopMisyLFopWikyLDItMi5aIzIuWSxaIzIvWilaKVopMi9aKVopMi8yMFlNMjBZTVlNWikyMDIxMjIyMllNWU1ZTVksWSxZLDIyMjIyMzI0MjVaIzI1WiNaIzI1WiNaI1ojMjUyNlojWiMyNjI3WU1ZTTI3MjgyOTI6MjoyO1k/WT8yOzI8WidaJ1k/WT9aJ1onWiZaJjI7MjxZS1omWUtZS1lLWUtZSzI7WUtZSzI7MjwyPFomWUtZS1omWiYyPDI9WUtZSzI9Mj5ZSzI+Mj9ZLTI/MkBZLVktWiZaJlktWS0yPzJAWS1ZLTJAWiZZLVktWiMyQFojWiNaIzJAMkEyQjJCWS0yQzJEWTAyRFkwWTAyRDJFWTBZMFk/MkVZP1k/MkUyRlonWicyRjJHWidaJ1onWicyRzJIWTBZMFkwMkhaJ1onWicySFonMkgySTJKWS1ZLTJKMktZLTJLMkwyTTJNMk5ZMFkwMk4yT1kwWTBZMFkvMk9ZL1kwWTAyTzJQWTBZMDJQMlEyUVkrMlJZK1kwMlJZLzJTWS9ZL1krMlNaJjJTWiZaJjJTWUVZRVlFMlNZPFomMlRZRVlFMlRZPFlFWUVZPFk8WiZaJjJTWTwyU1k8WTxZPFlFWUVZPFlFWVlZWTJSWVlZWVk8MlIyU1k8WTxZPDJTWTxZPFkvWS9ZPDJSWTJZMlkyWTJZLzJSWTxZPDJSMlMyU1k8WTIyVFkyWTJZMjJUWTIyVFk8WTwyVFk8MlUyVlk8WTwyVlkvWUVZRVlFMlZZRVlFWTxZPDJVMlZZPFk8WUdZPFk8WTxZR1lHWTxZPFk8MlRZPFk8MlQyVVk8WTwyVVk8WTxZPFk8WTxZPDJVWTxZPDJVMlZZPDJWWTxZPDJWWihaKFooWTxZPFooWTxaKFk8WihZPFk8WTwyVFk8WihaKFk8WihaKFk8WFZYVllHWUdZPDJSWUdZR1k8WUdZPDJRWTxZR1lHWUdZR1lRWUdZRzJQWiUyUDJRWiVaJVlRMlFZUVlRMlFZUVlRWVFZUVlRWiUyUVlRWVFaJVolWTwyUFk8WTwyUFlHWUdZR1k8MlAyUTJSMlJaJVolWiVZRzJSWUdZR1olWiVaJVlHMlFZR1lHWUcyUVlRWVFZUVlRWVEyUTJSWVFZUTJSWVFaJVdKMlJXSllOWU5ZUVlRWU5ZTllOMlEyUTJSWUdZKVkpV0pZKVkpWSlWVFkpWSlXSjJQV0pXSlguWC5WUlZSMk9YLlZSWC5WVFZUVlQyT1ZUVlQyTzJQVlRWVDJQVlFWWVZZVk5WTlgoWCgyT1goMk8yUFgnWCcyUFclVyVXJVclVyVXJlclMk8yUFdVV1VXJVclMlBXVVdVMlBXVVdVMlBYLFgsWCxXVVdVV1VYK1dVV1VXVVgrMk5YK1grWCtXUldSWCVYJTJNVFQyTlRUVFQyTlRUVFRUVFRUVFQyTlRMVFVUTFRVMk0yTlRMMk8yT1RVVTBVMFRVVFUyTzJQVFUyUFVQVVAyUFY7VVBVUFRMVExUTFUwVExVMFUwVTBUTDJOVEwyT1RMVTBUTDJPVTBVMFU1VTBUTDJOVExUTDJOVTIyT1RMVTBVUFUwVVBVMDJOVTAyT1UwVVBVUFVQMk4yT1VQVVBWO1Y7VjsyTzJPVjtWO1Y7VjtVUFVQVVBWO1Y7VjtVUFY7Mk1VUFVQVjtWO1VQVVBWO1Y7VVBVUDJLVVBVUFVQMktVUFVQVVBVUFVLVVBVS1lCMkpZPlk+WT4ySlk+WT4ySjJLWT5ZPllCWUIyS1lCWUlZSTJLWUlZQjJLWUJZQllJWUlZQllCWT4ySlk+MktZPjJLWT5ZQlk+MktZPllCWUlZSVlCWUJZSVlJWUIySllJWUkySjJLWUlZSTJLMkwyTFlNMk0yTllJMk5ZSVlJWU1ZTTJOWU0yTllNWUlYUllJWUlZSTJOMk5ZTVlJWU1ZSVlNWUlYUjJNWU1ZTVlNWicyTVonWidZUFlQMk1ZUFlQWVBaJzJNWicyTVonWicyTTJOMk8yUDJQMlEyUjJTWS9ZL1krWStZKzJSWStZK1lKWUpZSjJSWUoyUllXMlNZSjJTWFJZV1lXWVdZVzJTWStZKzJTWSsyUzJUWVNZUzJUMlVZV1kqMlVZKlkqWSoyVVkvWS9ZLzJVMlYyV1lUWS9ZL1lUWVRZLzJWWVRZVDJWMldZVFlUWVNZVFlTWVRZVFlUWVRZKllUWVQyVVlUWS9ZLzJVWS9ZL1kvMlVZLzJVWVRZVFlUWVQyVVlUWVQyVTJWWVRZVDJWWTkyV1k5WSpZKlkqWTlZKjJWWSpZKlkqWTlZOVk5MlVZOVkqWSpZR1lHWUcyVVdaV1pZOVdaWUdZR1daV1pZOTJTWTkyVFk5MlRZOVk5MlQyVTJWWCMyVlgjWCNYI1k5WCNZOVgjWUdZR1daWUdXWldaMlRXWllHWUcyVFlHWUcyVFlHVldYL1ZXWC9WV1gvWC8yU1gvVldWV1gvVldWV1ZXMlJWVzJSMlNYI1gjMlMyVFgjWCMyVFgjWCNYI1gjVldYIzJUVldWVzJUVldYI1ZXWCNYI1dTV1NWU1ZTV1NXUzJSMlNWU1ZTWCNYI1ZTVlMyUlZTVlNWUzJSVlMyUldTMlNXU1ZTMlNWU1ZTV1NXU1ZTV1NWUzJSVlNWU1dTV1lXUzJSMlIyU1ZTMlRXU1dTMlRXU1ZOVk4yVFZOV1AyVFdQVk5WTlZOVk4yVFZOVk4yVFdZV1lXI1cjVyMyU1ZOVyNXI1ZOVk5XI1cjVyNXIzJSMlNWTlcjVyNXI1cjMlJXI1cjMlIyUzJUV1lXWVdZMlQyVTJVMlYyV1csV1kyVzJYMlkyWTJaMyMzJDMkMyVXIzMmMyYzJ1cjVyNXLDMnV1MzKFdTMyhXU1csVyxXLDMoVywzKDMpMyozKzMrMywzLTMuMy4zL1cjVyMzLzMwVyNXI1ZOVk5XI1cjMy9XVVdNV01XVVdVMy9XTVdVMy8zMFdNV1UzMFdNV01XTVdNV00zMDMwMzEzMldUV1VXVVdVMzJXVVdVV1UzMldVMzJXTVdNMzJYK1dNWCtXTVdNV00zMjMyMzNXVFdUVT5VPlU+MzNVPlRUVT5VWVU+MzJVPjMzMzNVWVVZVVlVPjMzWFBWOjMzMzRWOlY6VjozNFY6VjpWOjM0VjpVL1RUVFQzNFRUMzRUVFVZVVlUVFRUVVlUVFVZVFRVWTMzVVlUVFVZVFRVWVVZVS8zMlVZVVlVL1UvVVlUVDMxVS8zMTMyVVVVVTMyVExUTFRMVEwzMlRMVExVUFVQMzIzM1RMVVBUTFVQVExUTFRMMzIzMlVQVVBVUFVQVVAzMlVQMzJVUDMzVVAzM1VQVExVUFRMVVBVUFVQMzJZQllCWUJZQllCUzozMjMyWUIzM1M6UzozM1M6UzpTOlMwUzozM1MwUzAzM1MwMzNTMFMwUzBTMDMzUzAzNFMwUzBTMDM0UzAzNFQnVCdUJ1QmMzRUJlk5WTkzNDM1WSozNVkqWSozNVk5WSpYVjM1WTlZKlk5V0ZXLVdGV0ZXLTM0V0YzNVk5WTlXLVctWTlZOTM0MzVZOTM1MzYzNzM3VyhXKFcoVy1XLTM3V0YzNzM4MzkzOlZaVlozOjM7MzszPDM9Vy8zPVcoMz5XKDM+Mz9WT1ZPVyhXKFZPVk9XLjM+UzkzPzM/M0BXNjNBWTlZOTNBM0JZOVk5WTlXKFk5M0FXKFcoVyhXKFcoM0FXKDNBVlVWVTNBWTlXKFcoM0EzQlZVVlUzQlZVVlVWVTNCM0NWVVZVV1FWVVdRV1FYI1gjM0JYIzNCWCNWVTNDWCNYIzNDWCMzQ1gjWCNYI1ZVM0MzRDNFM0VYIzNGWCMzRlgjVlUzR1ZVVlVWVTNHM0dYIzNIM0lWU1gjWCNYIzNIVlNYI1gjVlNWU1ZTM0hWU1ZTM0hWUzNIVlNYI1ZTWCNYI1gjVzdWU1ZTVzdXNzNGM0dXN1c3VzczR1c3VzdXN1c3WCMzR1csM0dXN1c3M0dXN1c3VzdXN1c3VzczR1c3VzczRzNIVzdXOTNIVzlXN1c5VzlXOVc3M0dXN1c3VzczRzNIM0kzSVc5VzlXOVc5M0lXOTNKM0pXPDNLVzxXOTNLVzlXOVc5M0szTDNNVzkzTVc5M04zTlc8VzxXPFc8VzwzTlc8V1RXVFdUM05XVFklWCVZJVRNVE1VTFVMVVUzTFVVVVVVTFVFVUwzTFRNM0xUTVVMM0xVTFVMVUxVRTNMVUxVRVVFVExVRTNMVExUTFVFM0xVTFVMM0xVTDNMM01VRVVFVUlVTFVJM00zTVRMVUVVRVRMM01YTlVQVCZTOVQmM01TOVM5UzkzTTNNV1FXUVdRV0AzTVdAV0BXQFdAV1EzTVdRV1FXUTNNV1EzTVdRV1FWVldOM01XTldOV05XUVdOV05XTlcrVytYI1gjV0VYI1gjM0pXKzNLVytXK1crV0UzSjNLV0VXRVdFWCMzS1gjM0tYWFdFV0UzS1c3WCMzTFgjM0xYI1gjVzlXOVc5VzxXOVc5VzkzS1c5VzxXPFc8M0pXPFc8VzxXPFc8M0pXOjNKVzpXPFc8VzxXOlc8VzwzSTNKVzxXPFc6M0pXOlc6VzpXOjNKVzpXPFc8M0pXPFgkWCRXPFc8VzxXPFc8M0lXKVcpM0kzSjNKVzxXKVcpM0ozSzNMVykzTDNNVzxXKVgkWCRXPFc8VzxXPFc8WC1XKTNLVylXKTNLVzxXKVc8VylXKTNLVzxXKVc8VylXKVgtV1VXVVdVM0lXVVgtWC1XVVdVVlhWWFdVV1VXVTNIV1VXVTNIV1VXVVdVM0hXVVdVV1hXWFdYV1hZJFdYWCVVRlVGVD4zRlVGVUZVSVVJVUkzRVVJVUlVSDNFVUgzRlVIVUgzRlRIVEgzRlRIVEFWJTNGViVWNVQrVCtUKzNGVjNULDNGVCxYRlNBU0EzRlNaU1ozRlM9UzlTOVNIU0gzRVdRVk1WTVdRV1FWTVZNM0RYLVcpWC1YLTNEVlhWWFZYVlhYLVZYWCpYKjNDM0RWWDNEVlhWWFZYM0RWWFZYVlhWWFgqVlhXMFcwWCpXMDNCM0NXVVdVVUkzQ1VJVSpUWVY3VFlWN1Y3VjdWN1VBVDpUOjNBVDozQVRRVElUSVREVERURDNBM0FWI1RJVElTPVM9M0FTNFM9M0EzQjNDUz1TPVM9M0NTPFM8WEZTQlNCU0JTQlNWUy1UI1MtUy1UIzNAUy5TLjNAUy5TLlMuVCNTWVQjVCNTWVNZU0tTS1NZU0tTS1NLU01UI1NNMz1TTVQkU01UJFNZU0tTS1NLU0szO1NLU0BTS1NAU0tTQDM6U0BTQFNAU0tTQFNLU0AzOVNYU1hTWFNYU1gzOVNYMzlTWFNYU1hTMVMxUy9TL1MxUzFTL1MvUzFTMVM/Uz9TP1M/MzZTVVc8VzxXPFcnMzVWWFZYVlhWWFZYV0tXS1ZYV0tWWFdLWC1WWFgtVlhUSVRJVEQzMjMyUy1TLVMtUy1TLVMtUy5TLVMtUy1TLlMuMzBTLjMxU01TTVNNMzFTLjMxUy5TLjMxMzIzM1NNVCRUJFQkMzNUJDMzVCRYRVNLU0tYUlNRU0BTQFNRU0BTMzMxUzNTM1MzUzMzMVMzMzFTT1NPU09TT1NPU08zMTMxU0czMlNHU09TTzMyU0dTR1NXU1dTVzMxMzJTR1NXVz5WWFc+Vz5XPlc+VzQzMVc0MzFXNFc0Vz4zMVc0MzJXP1c/V0xXP1c/MzFXP1c/WSRXP1ckMzFXP1c/V0NXQ1UrVStVPVUrVStVK1UrVT1VI1UjMy5VI1UjVSNVIzMuUzdTN1M3My5TNzMuWFJTTlNOU0ozLlNKMy5TSlNKU0ozLlNKU05TTjMuU0pTTlNOUzdTNzMuU0pTT1NHU08zLlNPMy4zL1NJU09TT1NPMy9TSVNJU0kzL1M4UzgzL1M4U09TPlNPUz4zLlM+U0lTSVNJMy4zLzMwMzBTV1NXU1dTPjMwUz5TPjMwU1dTPlNXU1dTVzMwU1czMFM+Uz5TPjMwV0NXQ1dDVUIzMFYkViRWJFYkViQzMFYuMzBWLlYuVihWKFQ9MzBWKFYoMzBVQFQ9MzBUPVQ9MzBVQFQ9VUBUPVVAVD1UPVYoVSMzL1YoMy9VI1YoVihWKFYoMy9WKFYoVihWKFVAMy5WKFVAVUBTTjMuU05TT1NPU08zLlNPU1AzLlNQU1AzLlNPMy8zMFM+Uz5TUDMwU1BTNlM2UzZTUFNQU1AzL1M2UzZTNjMvU1IzL1NSMzBTNjMwU1JTUlc0V0NXNFdDVT1VPVU9My9VPVYsVixWLFYsVTxWLFYsVTxVPDMtVDVVPFU8VDVUNTMsVEdUR1RHVEdUR1RHMyxUUFRQMyxWLlRHVi4zLFYuVEczLFRHVi5WLlQ9VD1UPVNOU05UKFQoU0QzKlNDU0RTQ1NEU0NTRFNEU0RTRTMpUzZTNjMpU1JTRDMpU0RTRFNEU0QzKVNEVDUzKVQ1VDVUNVQ7VDUzKVQvMylUL1QvVDgzKVQ4VDBUL1QvVDJUL1QvVDAzKDMpVDBUMFQwMylUO1Q7MylUOzMpMypUO1Q7VDszKlQ7VEdUOzMqVDtUMFQwMyozK1YuMytUMFQwVDBUMFQwVi5WLlQwVi4zKlYuU0MzKjMrU0VTQ1NFU0VTRVNDU0NTQzMqU0VTRVNFMyozKlNTU1NTU1NFU0VTU1NTU0VTRTMpU1QzKVhEWERYRFhEMylYRFhEVDNUNlQzVDNUNTMoVDUzKVQzVDMzKTMqMyozK1Q3MyxUN1QwVDdUMFQwVDBUMDMrVDBUMFQ1VDVUMFQwMypULlQwVC5UNVQuVDAzKVQuVC5UNVQuVDVULlQwMygzKVVNVU0zKVVNVU0zKVVNMypVTVQwMypUMDMrVDBUMDMrVDBUMDMrVDBVTTMrVU1VTVVNVi5WLlYuMytWLlYuVU1VTVVNVi5VTVVNVi5WLjMpVi4zKVVNVC5ULlVNVU0zKVVNVU1VTVQuVC4zKFNTU0VTRVhDWDpYP1g6WDozJ1g6WERYRDMnWEJYQlg6WEIzJ1hCWERYRDMnWEJYRFhEWEJYQlhEMyZYQjMnVixUNVYsVDVWLFQ1VixUNVQ1VDVWLFQ1VDVULlQ1MyQzJFhCWDpYQlYsVixWLFQvVDQzI1Q0VDQzI1Q0VDRUNFQ0MyNUNFQ0WTdZNzMjMyRZN1k3MyRZNzMkWTdZN1k3WUhZSDMkWUdZSFlIMyQzJVlIWVVZVVlVWTdZN1lHWUdZR1k9WT1ZPTJaMyNYLlgmMyMzJFgmWCYzJFguWCZYJlk0MyQzJVlAWTRZNDMlWUBZQFlAMyVZQFlAWTQzJVk0WTQzJVk0WTRZJzMlWSdZJzMlWSwzJlksWSdZJ1knMyYzJlksMydZLFlIMydZVVlVWUhZSDMnWUhZM1kzWSxZLFkzWTNZLDMmWSwzJlksWSwzJlksWSxZLFkzWTNZLFksWTMzJVkzWTMzJVlVWVVZVVksWiZZLFomWSwzJDMlMyYzJlomWSxZLFomWiYzJlomWUxZTDMmMydZTFokWiRaJFlMWUwzJllMWVZZVjMmMydZVjMnWVZZRzMnWUdZR1lHWiZaJFomWiZaJllFWiZZRVomWUVaJlomWiRaJFlFWUVZRVokWUVZRVlFMlpZRVlFMlozI1lHWUdZPVlHWT1ZPVk9WT1ZTllOWU5ZTjJZWU4yWVlHWVhZWFlHWUdZWFlYWUcyWFlHWUdZWFlOWVgyWFlOWU4yWFlOWUcyWFlHWUcyWFlOWUdZR1lOWU4yWFlHWUdZR1lOWU5ZR1lHWUcyV1lYWU5ZTllOWU4yVllOWU5ZTjJWMldYLlk9WT1ZTllOWU4yVllOWUcyVllOWU5ZTllOWU4yVlguMlZYLllOWU5YLlguMlZYLllOWUdZR1lHWU4yVVguWC4yVVguWC5YLllHWUdZRzJVMlVYLjJWWC4yVllHWC4yV1guWC4yV1guV0lXSVZOV0lYLlguMlYyV1guWCZYJlgmV0hXSFdIVllWWVZZVk5WWVdIV0dXSFdIV0dXR1ZZV0cyUlc9Vz1XPVdHV0dWWVdHMlFXPVczVzNXPVczMlFXM1Y9MlFWPVU+MlEyUlU+VT4yUlY9VT5VPlU+VT4yUlU+MlJWPVU+VT5WPVY9VT5VPjJRVEVURVRFVExUTFRUVFRVVDJQVVRVVFRMVExVVFRMVj8yT1RMVExUTFRVVEwyT1Y7VjsyTzJQVFVUVVVHVFVUTDJPVExUTFVHMk9UTFRMMk9VR1RMVUdUTFRMVEwyT1VHVFUyT1RMVjtWO1RVMk9WO1Y7Mk9WO1VLVUsyT1VLVVBVSzJPVUtVUFVLVVAyTzJPVSRVJFUkWTZZSVk2WUlZNlk2WTYyTlk6WTpZSVlJWUAyTVlAWUlZLlkuMk1ZLjJNWS5ZSTJOWS4yTlkuWS4yTlknMk8yUFkuWS4yUDJRMlEyUllJMlNZJ1knMlMyVDJUMlVZLlkuMlUyVlkuWS5ZJ1knMlYyV1knMldZJzJYMlgyWTJaWSwyWjMjWSczJDMkWSwzJVksMyVZLFksWSxZJ1knMyUzJjMmWSwzJ1ksMyczKDMpMypZLFksMypZLFkuWS4zKjMrWS5ZLllJWUkzKlkuWUkzK1kuWUEzKzMsWSxZLFlBWSwzKzMsWUlZSTMsMy1ZSVlJWSxZLDMtWSwzLTMuWUlZSTMuWUlZSVlJWUlZSVlJMy5ZSVlJWilZSVlJWilaKTMtWUkzLVlJMy4zLllJMy9ZSVopWikzL1opWUlaKVlJMy9ZSTMvWUkzMDMwWU0zMVlNWUlZSTMxMzJZTVlNMzJZTTMyMzNZSVlJMzNZLDM0MzUzNVomMzZaJjM2WiYzN1omWSxZLDM3MzhZLFksWSwzOFksMzgzOVlLMzkzOllLWUtZLFksWSxZS1ksMzlZS1lLMzlZS1ksWUszOVlLWUtZS1lJMzlZSTM6MzpZLDM7WSwzOzM8Mz0zPjM+Mz8zQFopM0AzQVopWikzQTNCWilaKTNCWSwzQzNEWSxZLFojWSwzQ1ojWilaKVksWSxZLFojWiNaI1ojM0IzQllNM0NZTVopWilZTTNDWilZTTNDWU0zQ1lNWU1ZTVopWikzQzNEM0RZTVlNWU0zRDNFWU1ZTVopWU0zRVlNM0UzRlksM0dZLFksWSwzR1ksWSxaI1ojWiNaI1ojWU1aI1ojWU1ZTVksM0RaI1ojWSwzRDNFWiNZS1lLWiNaI1lLWiNaI1ojWU1aI1lNWU1aI1ojWU1ZTVojWiNZTVlNWiNaIzNAM0FZTVk/WU0zQVk/WT8zQVk/WiNaIzNBWiNaI1ojWiNZP1lNM0AzQTNCM0JZPzNDM0RZS1omWUtZS1omWiYzQ1omWUtZS1ojWUtZS1lLM0JZS1lLWUszQjNDWiZaJllLWUszQjNDWUtZSzNDWiYzRDNFWUtZSzNFM0ZZS1lLM0ZZLVlLWUtZLVktWUszRVktWS1aJlomWS1ZLTNEWiZZLVktWiZaJlktWS1aJlomWS1ZLVomWiZZLVktWiMzQVojWiMzQTNCWiNZMFojWiNaIzNCM0JZMDNDWTAzQ1ktWS1ZLTNDWS0zRDNFWS1ZLTNFWS1ZMDNFWTBZMDNFM0ZZMFkwM0YzR1kwWTAzR1ojWT9ZPzNHM0hZPzNJM0lZMDNKWTBZP1k/WT9aJzNJWidaJ1onWidaJ1lQWidaJ1onWVBZUFkwWTAzR1kwWidaJ1lQWidZMFonWidaJ1onWiczRTNGWidaJ1onM0ZZLVktM0ZZMDNGWTBZMFkwWS1ZLVktM0YzRlkwWTBZMDNGWTBZMFkwWS1ZLVkwWTBZLVktWTBZMFktWS0zRDNFM0UzRjNHM0hZMDNIM0lZL1kwWTBZMDNJWTAzSVkwM0ozSlkwWStZK1kwM0ozSzNMWidZK1onWStaJ1krWiczS1kwWTAzS1kvM0tZL1kvWS9ZL1kvWSszS1omWUVaJjNLWUVZRTNLWUVaJlk8WiZZPFk8WTxaJlk8WUUzSVk8WTxaJlomWiYzSVomWiZaJlk8WVlZWVkwM0hZWVlZWS8zSFlZWVkzSFlZWTxZPFkvWS9ZPFk8M0dZPDNHWTJZL1kvM0dZPFkyWTJZPFk8WTIzRzNHWTwzSFk8WTxZPDNIWTxZMjNIWTJZMlkyM0hZMjNJWTJZMjNJWTIzSVk8WS9ZLzNJM0ozS1kvM0tZL1kvWS9ZRVk8WTxZPDNKWUVZPFk8WUVZPFk8WTxZPFlHWTxZPFlHWUdZPFk8M0dZRzNIWTxZR1lHWUczSFk8WTxZPDNIWTxZPFk8WihZPFk8WihaKFk8WTwzRjNHWTxaKDNHWihZPFk8WVJZUllHWTxZPFk8WTxZR1k8M0VZRzNFWiVaJVlHWUczRVlHWVFZUVolWVEzRDNFWVFZUTNFWVFZUVlRM0VaJVolWiVZPFk8WTxZRzNEM0VZR1lHWUdZRzNFWUdZPFk8WTwzRTNFWUdZR1lHWUczRVolWiVZR1olWUdZR1olWiVZR1lHWUczQ1lRWVFaJVlRWiVZUVlRWVFZUVolWVFZUTNBWVFaJVolV0pXSjNAWC5YLlguWiVaJVkpWSkzPzNAWSlZKVdKM0BXSldKWC5YLjNAWC5WVFZUVlQzQFZUVlQzQFZRVlQzQFZRVlEzQFZRVlFWUTNAWCgzQVgoVzNXMzNBWCdXM1czM0FYJ1czVyVXJVclM0AzQVdVV1UzQVdVV1VXVVclVyVXJVdVV1VYLFdVM0BYLFgsM0BYLFdVV1VXVTNAVT5UVFU+M0BVPjNAVT5UVFRFVEVUVFRUVFRUTFRMVExUVVRVVFUzPlRVVFVUVTM+Mz5VMFUxVTBUVVRVMz4zP1RVVFVUVTM/VFVWOzM/VjtUVVRVMz8zQFRVM0AzQVVQM0FVMFRMVTAzQVUwM0JVMDNCVTUzQ1U1VExVM1RMVExVNVU1VEwzQlRMM0JUTFRMVVBVUDNCVVAzQlVQVVBVUFU5VTlVOTNCM0IzQzNEM0VWO1VQM0VVUDNFVjszRlY7M0YzRzNIM0lWO1Y7M0kzSjNKVVBVUFVQWUIzSjNLWT5ZQllCWT4zS1lCWUIzS1k+WUJZQlk+WT5ZPjNKWT4zSzNLWUkzTFlCWUJZSVlCWUJZPllCWT5ZQlk+WUJZPllCWUJZQlk+WUJZQllCM0hZQjNIM0lZQllCM0lZSTNKWUJZSVlJM0pZQjNKM0tZQllCWUlZQllCWUIzSjNLWUlZSVlJWU1ZSVlJWU1ZTTNKWU1ZSVlJWUkzSllNWU0zSllNM0pZTTNLWU1ZSVlJWUkzS1lJWU1ZSVlJM0ozS1lNWU1aJ1lQWidaJ1onWVBaJzNKWVBZUDNKWVBaJzNKWidaJ1lQWVAzSjNLWVBZSllQWUpaJzNKWidaJzNKWUpaJ1lKWiczSllQM0szS1krM0xZK1lQM0xZUFlQWStZK1lQWStZKzNLWSszTFlKWUozTFlXWStZKzNMWStZK1krM0wzTTNNWVczTllXWVczTllXWVdZK1krM05ZU1krM05ZU1lTM05ZU1lTWVNZU1lTWVdZU1lTWVMzTTNOWVNZU1kqWSpZL1kvM01ZL1lUM01ZVFlUM01ZL1lUWVRZVFlUWStZK1kvWS9ZVDNMWS9ZLzNMWS8zTDNNM05ZVFlUWVRZKlkqWS9ZL1kvM01ZL1kvM01ZL1lUM01ZVFlUWVRZL1lUWVRZL1kvWVQzTFkvWS8zTFkvWVRZVFlUM0xZKjNMWSozTVkqM01ZKlkqWTlZOVkqWTkzTFdaV1pXWldaWC8zTFgvWTlYL1gvWC9YL1gvWTkzS1gvWC8zSzNMWC9YLzNMWC9ZOVk5WTkzTFgjWCNZOVgjV1pXWldaVldWV1lHVlczSllHWUdZR1ZXWC9YLzNJVlczSVZXWCNYIzNJVldYI1gjVldWVzNJVldYL1gvVldYLzNIVldYL1gjVldYI1gjWCNWV1ZXM0dWV1ZXVlczR1ZXV1NXU1ZTM0dXU1dTM0dXU1ZTVlNYI1gjVlNWUzNGVlNXU1dTM0ZXU1ZTV1NWUzNGM0ZXU1ZTV1NWUzNGVlNWU1dTM0ZXUzNHV1NXU1ZTM0dXU1dTM0dXU1ZTM0dWU1ZTM0dXU1ZTVlNWTlZOV1AzRzNHVk5WTlZOVk5WTjNHM0gzSFdZM0lXWVZOVk4zSTNKVyNXIzNKM0tXI1cjM0tXIzNLM0xXI1cjVk5WTjNMM00zTVdZV1lXWVZOV1lXWVdZM0wzTVcsVyxXWVdZM00zTjNOM09XWVdZM08zUFcsVyxXWVcsM1BXLFdZV1lXWTNQVywzUFcsVywzUFcsVyxXLFdZV1kzUDNRV1kzUVdZV1lXLDNRM1IzUzNTV1lXWTNUM1QzVVcjVyMzVVcsVyNXI1cjVyNXLFcsVywzVDNVM1YzVjNXVyMzWFcsVywzWFcsV1NXLDNYVywzWFcsV1NXU1csVywzWFcsM1hXWVdZV1kzWDNZV1lXWVdZV1kzWVdZV1lXWVdZM1kzWVcjV1kzWlcjVyMzWjQjNCM0JDQlVyM0JTQmVyNXI1cjNCZXI1cjNCY0J1cjVyNWTlZONCc0KFZOVk40KDQpV1VXVVdVNClXVVdVV1VXTTQoNCk0KldNV1U0KldVV000KldNV01XTVdNNCpXVFdUV01XTVdNNCo0KjQrV1RXVDQrV1RXVFdUV1U0K1dVV1VXVVdNNCtXTTQrV1VXTVdNV1VXVTQrWCtXTVdNV000K1dUNCtXVFdUNCtXVFdUV1Q0K1VZVT5VWVU+VVlVPjQrNCs0LFU+VVlVWVVZVT5VWVU+VT5WOlY6VT5VPjQqNCtVPlU+VjpWOjQqNCtWOlY6NCs0LDQtVVk0LVRUVFRUVFVZVFRVWVRUNCxUVFVZVFQ0LFUvVS9VLzQsVS9VL1UvVVU0LFVVVVU0LFRUNC1UVDQtVExUTFRMVEw0LVRMVExUTDQtVExVOjQtVVBVOlVQVEw0LVRMVVBUTFVQNC1VUFVQVVA0LVVQVVBVUDQtNC5UTFVQNC5VUDQuVVBUTFVQWUJZQjQuWUJZQllCUzpTOllCWUJZQjQtWUI0LVM6UzpTOlM6Uzo0LTQtNC5TOjQvUzBTMDQvUzA0L1MwUzpTMFMwVCdTMFMwUzBUJ1MwVCdTMFMwUzBUJ1MwVCdUJ1QnVCdUJlQnVCY0Klk5WTlZOVk5WTk0Klk5WSo0KlkqWSpZKlk5WSpYVlk5WTlZOTQpVy1XLTQpVy00KTQqV0ZXRlk5WTlXKFcoWTlZOTQpWTlZOVk5WTk0KVcoNClXKFcoWTlXKFcoVyhXKFcoNChXKDQoV0ZXRldGVlo0KFZaVlo0KDQpVlpWWlZaVlpWWjQpVlpWWjQpVyhXNlZaVzZXNlZaNChXNlc2VzZXNlc2NChXNlc2NCg0KVc2NClXNjQqVlo0KjQrVyg0K1coVzZXKDQrNCxWTzQtVyhXKDQtVyhXNlc2Vy40LTQtVzZXNlc2VzZXNlc2Vy80LFcvVy9WT1c2Vk9XNjQsWTlZOVcoVyg0K1k5VyhXKFk5WTlZOTQrVyg0K1coVyhXKFZVNCtWVVk5WTk0K1k5WTlZOVcoNCtZOVk5VlVWVTQqVlVWVVZVWTlZOVZVNCpZOVk5NCpWVVgjWCM0KlgjVlVYI1ZVNCpYI1gjVlVWVVgjWCNWVVgjNChYI1ZVWCM0KFgjWCNYI1ZVNChWVTQpNClYIzQqWCNYI1gjVlVYIzQpWCNWVVZVWCNYI1ZVNClWVVgjVlVWVVZVWCNWVVZVVlVYI1ZVWCNWVTQmNCdWVTQnWCM0KFgjWCNWU1gjWCNWU1ZTNCc0KFZTVlM0KDQpNCk0KlgjVlNWU1ZTVlNXN1ZTVlNXN1c3NChXUzQpNCpYI1c3WCNYIzQpVyw0KjQrNCtXN1c3VzdXN1c3NCtXOVc3VzdXOVc5Vzc0Klc5VzlXOVc5VzdXOVc3VzdXNzQpNCk0Klc3Vzc0KjQrNCxXOVc3VzlXOVc5NCtXOVc5VzlXOTQrVzlXOVc5NCtXOVc5VzxXPDQrVzxXPFc8VzlXPDQqVzw0K1c5VzxXPDQrVzxXOVc5Vzk0K1c8Vzw0K1c8VzlXOVc5NCtXOTQrVzlXPFc5VzxXPFc8VzlXPFc8VzxXVFdUV1RYJVRMVEw0KFRMVUVVRVVMVUVUTVRNVE00J1RNNCdUTTQoVUVUTFVFNChVRTQoVUVVRVRMVEw0KFRMVUxVTDQoVUk0KDQpVUVVRVRMVExVRTQpVUlVTFVJVUxUTFRMNChVRVRMNChVUFVQUzlTOVQmUzlTOTQnUzlXUTQnV1FXUVdRNCc0KFdAVlU0KFdRV1FXUVdRVlY0KFZWNChWVldRVlZWVldOV05XTlcrV0VXKzQnVys0J1crVytXKzQnVytXRTQnV0VXRVdFNCdXK1crVys0J1crNChXRVc3Vzc0KFc5VzlXOTQoVzk0KFc5WCNXOVc5VzlXOTQoVzlXPDQoVzxXPFc8Vzw0KFc8NChXPFc8Vzw0KFc8Vzw0KFc6VzxXOjQoV1VXOlc6VzpXOjQoVzxXPDQoVzxXKVc8NChXPFc8Vzw0KFc8VzxXKVcpVzxXKVcpVzxXKVcpVzxXPDQmVyk0JjQnVylXKVcpVyk0J1cpVzw0J1c8Vzw0J1cpVzxXKVc8VzxXKVcpVzxXPFcpVyk0JTQmNCc0KFgtV1VYLTQoV1VXVTQoNClXVVdVNClXVVdVV1U0KTQqVUZVRjQqVUlVTFVMNCpVSVVIVEg0KlRINCpUSFRIVEhVSFRIVEhUSFRIVEhUQTQpVjVWPFY1NCk0KTQqNCs0LFYzVjNWM1QsU0E0K1NBU1pTWlNaUz00K1dRV1E0K1dRVylXKVcpWC00KlgqVlhWWFgqWCpWWDQqWCpYKjQqVlhYKlgqNCo0K1ZYWCo0K1gqV1U0KzQsV1U0LFcxNC00LjQuVSpVSVUqVDpUOlRJNC5UUVRRVElUSTQtVElURFRJViNWI1RJVElTNFM0UzQ0LFM9Uz00LFM0UzQ0LFM9Uz1TNFM9Uz1TPVM9Uz1TNVM1NCo0K1MuUy5TLVMuNCtTLlNNVCRTTVQkU0A0KlNAU0BTS1NAU0tTQDQpU1hTWFNYU0BTWDQpU1hTQDQpU1hTQDQpU1VTVVNVWC1WWFgtVlhURFREVEQ0KFMtUy1TVlMtUy5TTTQnU000J1NNNChTTVNNVCRTTVQkUy5TTVMuUy5TTVNNNCY0J1NNNCc0KDQpUy5TTVMuUy5UJFQkVCQ0KFQkNChUJFQkUzNTM1MzNChTM1MzUzM0KFNGU0ZTT1NGU080J1NPU0dTR1NHNCdTRzQnU0dTT1NHU09TT1NPU0dTR1NHU0c0JjQmU1c0J1NXVz5XPlc0VzRXPlc+VzRXPlc+Vz40JTQmNCY0J1c0VzRXP1ckVz9XP1ckVz80JlckVSNVI1QtNCZVI1UjVihVI1M3UzdTTlM3UzdTN1M3U05TTlNKU05TSlNKM1pTSlNKM1pTSjQjNCRTSlNKU05TTjQjNCQ0JVNKNCVTRzQmU0dTR1NHU0c0JlNPNCY0J1NJU080J1NPNChTSTQoU0lTSTQoUzhTT1M4U0dTRzQoU0lTSVNJU0k0KDQoUzhTODQpUz40KVM+Uz5TR1NXU0dTV1NXU1dTPjQoU1dTVzQoU1c0KFNXUz5TV1NXUz5TPlM+V0xXQzQnV0NVQlYkViRWJFYkNCZWJFRQVi5ULVYuVi5WKFYoNCU0JlYoVig0JjQnNCc0KFQ9VD1UPTQoVD1UPVYoVSNWKFYoVSNVI1UjNCdWKFYoVUA0J1YoVig0J1YoU05TT1NOU080JlNPU1BTTzQmU09TUFNQU09TT1NQU09TUFNQU1A0JVNPU09TUFNPUz5TPlNQNCRTUDQkU1BTUFM2UzY0JFM2NCRTNlNSNCVTUjQlU1JTUlM2UzY0JVM2VT00JVYsViw0JVQxVDFUNVU8VTxVPDQlVEdURzQlVEdUUFRQVFA0JVRHVEdWLlYuVEc0JFRHVi40JFNQU0RTRFNFU0RTRVNFUzY0I1NSUzZTRDQjU0RTRFNEU0Q0I1NFNCNUMVQ1VDVUMDQjVDBUMFQ4VDhUL1Q4VDhUMFQ4VDBULzNZVC9ULzNZVDBUL1QwVDBUMFQwM1lUO1Q7VDAzWVQwM1lUMFQwM1lUO1Q7VDszWVRHVDtURzNZM1pUOzQjNCNWLlYuVi40I1YuVi5WLlQ7NCNUMFQwNCNWLlYuVi5TQ1NDNCNTRVNDU0NTQzQjU0NTRVNFU0VTRVNFM1o0I1NFNCNTRTQkU0VTVFNUU1RYO1g7WDtYRDNaNCNYRFhEVDNUMzQjVDM0IzQkVDVUNTQkVDNUNTQlVDNUMzQlVDNUNzQlVDdUN1QwVDA0JVQwVDdUMFQ3VDA0JDQlVC5ULjQlVDBULlQuVDA0JVQuVC40JVYuNCZVTVQwVU1UMFVNVi5WLjQlNCZUMFVNNCZVTTQmVU1VTVVNVDBUMFQwNCZUMDQmVDBUMDQmVDBULjQnVDBUMFQwVU1VTVVNNCZVTVYuVi40JjQnVi5WLjQnVi5UMFQwVC5ULjQmVU1ULlVNNCZTU1NFU1NYPFg8WERYPFhEWEQ0JVhEWDpYQlg6WEJYQjQkWEJYQlhEWEQ0JDQlNCVYQlhCWEJUNTQlVDVUNVg6WEJYOlhCNCQ0JVQ0VDQ0JTQmVDRUNFQ0NCZUNFQ0WVU0JllVWVU0JjQnWVU0KFk3WTc0KFk3NCg0KVk3WTdZSFlHWUdZR1lIWUhZR1lHWUhZSFlHWUdYLjQmWC5YLjQmWC5YJlgmWC5YLjQmNCdYLlguWCZYJlguWC5YJjQmWTQ0JllAWUBZNDQmWUBZQFk0NCZZQFlAWUBZQDQmWUBZNDQmWTRZNFlAWUA0JllAWSc0JlknWSdZLFksWSdZLFknWSxZJ1ksNCRZJ1ksWSxZJ1ksNCRZLDQkWSxZLFksWUhZVVlVWVVZSFlINCM0JFkzWTNZMzQkWSw0JFksWSw0JFksWSxZLDQkWVVZMzQlWTNZVVkzWTNZLFomWSxaJlksWSxZLDQjNCNaJjQkWiY0JFomWSxZLFomWiY0JFomNCQ0JVokWiRZTFlMWiRaJFlMWUxaJFokWUw0I1lMWUw0I1lWNCRZVllWWUdZVllWWUdZRzQjWUdZRVlHWUVZRVk9WT1ZR1lHWT1ZPVlHWUdZPVlOWT1ZPVlHWUdZR1lYWVhZWFlHWVhZWFlOWVhZWFlOWU4zVFlOWUdZPVlHWUdZPVk9WUdZR1lOWUdZR1lHWUdZR1lHWU5ZWFlOWU5ZTllOWC4zT1guWU4zT1lOWC5ZTllOWU4zT1lOWU4zTzNQWU5ZTjNQM1EzUVguWU5ZTlguWC4zUVguM1FYLlguWC5ZRzNRWUdZR1lHM1FZRzNSWUdZRzNSWC4zUlguWC5YLjNSM1NZR1lHM1NZR1guWC4zU1guV09XT1guM1NYLlguM1MzVFgmWCYzVDNVVz1XPVc9Vz1XPTNVM1VXM1czVzNWPVY9Vj0zVVY9Vj0zVVY9Vj1WPVY9M1VWPVY9M1VWPVY9VT5WPVU+Vj1WPTNUM1VVPlRFVEVURVVUM1RVVFVUVj9WPzNUM1VVR1VHM1VVR1Y7VjlWOzNVVjkzVTNWVjtVR1VHVExUTFRVVFVVR1VHM1RVRzNVVExUTDNVVExUTDNVVFUzVlRMVjtWO1RVVFVWO1Y7M1VUVVVLVUszVTNWVVBVUFVQM1ZVSzNWVVBVUFUtVSRVJFUkWTZZNlk2WTpZQFlAWUBZSVlJWS5ZSTNTWUkzU1lJWUlZSVkuWUlZSVkuWSdZLlkuWSdZJzNRWSdZLlknWS5ZLjNQWS5ZLlkuWS4zUDNRM1IzUjNTWUkzVFkuM1RZSVlJWS5ZLjNUM1VZSTNVWUlZSTNVWSdZLlkuM1UzVlkuWS5ZJ1knM1YzVzNXWSdZLlkuM1dZJ1kuM1hZJ1knM1gzWTNZM1pZLlkuM1o0I1kuWS5ZJ1knWSc0IzQjNCRZJzQlWSdZJzQlNCZZJ1knNCZZLFksWSw0JlksWSc0JlknWSdZJzQmWSdZJzQmNCc0KFksNChZLFksWSw0KFksWSxZLFknNCg0KTQqWSdZJzQqNCtZJzQrWSc0LDQsNC00LjQvNC9ZLDQwWSxZLjQwNDE0MjQyWSxZJzQzNDM0NFkuWS5ZJzQ0WS5ZLlksWSw0NFksWUk0NFlJWUk0NDQ1WUlZSTQ1NDZZSVkuWS5ZLllJWUlZLllBWS40NVlBWUE0NVlBWS40NTQ2NDc0N1lBNDg0OVlBWUE0OVlBNDlZLDQ6WSxZLFksNDo0O1lJNDtZSVlJNDs0PFlJWUk0PFksWUlZSVlJWUlZSVopWilaKVopNDtZSVlJWUk0O1lJNDtZSVlJNDs0PDQ9ND40PllJWUlZSVopWik0PjQ/WilaKVlJWUlZSTQ+WU1ZTVlJWU1ZSTQ+ND5ZTVlNWU1ZTVlNND5ZTVlJND40P1lNWUlZTVlNWU00PllNWU1ZTVksWSxZSVlJWSxZLFlJND1ZLFksND1ZLFlJND00PjQ/ND9ZLFksWSw0P1omNEBaJlksNEBZLDRBWSw0QTRCWiZZLDRCWSxZLFksWSxZS1lLWSxZSzRBWUtZLFksWSw0QTRBNEJZS1lLNEJZS1lLWUs0QlksNENZLFksNEM0RDRFWSxZLFksWUtZS1lLWSxZLFksWUtZS1lLNEI0QzREWSw0RFksWSxZLFlJWSw0RFksNERZLDRFWSw0RVksNEY0R1ksWSw0R1ksNEc0SFopWik0SDRJWilaKVksWSxZLDRJWSxZLDRJWSw0SVopWilaKVopNElaKTRKNEo0S1opNExZLFksNExaKVksWSw0TFopWSxZLDRMWSxaKTRMWilaKTRMWiM0TVojWik0TVopNE5aI1ojNE5ZTVopWilaKVlNNE1ZTVlNWU00TTROWU1aKVopNE40T1lNNE80UFlNWU1aKTRQWilaKTRQWU1ZTVlNNFBaKVlNWU1ZTVopWU1ZTVlNWU00T1lNNE80UFlNWU1ZLDRQWSw0UTRRNFJaI1ojWiNaIzRSWiNZLFojWiNaIzRRWiNZLFksWSxZLDRRNFJZLFksWSw0UlojWiNZTVk/WiNaI1k/NFFZTTRRWU00Ulk/WT80Ulk/WiNaIzRSWiNZTTRSWU1ZTVlNWU1ZTVonWU1ZTVonNFE0UVk/NFI0U1lNNFNZP1k/NFNZP1k/WT9aJlomWUtZS1lLWUs0UllLWUtZSzRSNFNZS1lLNFNZS1omWiY0UzRUWiZaJllLNFRaJlomNFQ0VVlLNFVZS1lLNFVaJjRWNFdZS1lLWUs0VzRXWUs0WDRZWUtZS1ktWS1ZS1ktNFhZLVomWiZZLVktWiM0V1ojWiM0VzRYNFk0WjRaWiNZMFkwWiM0WjUjWTBaI1kwWTBZMFojWTBZMFkwNFlZLVojWS00WVktWiM0WlojNFpaIzUjNSM1JFkwWTBZLVktWTA1JDUkNSVZMFkwWS01JVkwWTA1JTUmWTBZMDUmNSdZMFkwNSc1KFkwWTBaI1ojWiM1KFojWT81KFk/WT9ZMFk/WT9ZP1k/WT9aJ1kwWTA1JlkwNSZZMFonWidZPzUmWidaJ1kwWTA1JlkwWic1JlonWVA1JlonWVBZUFonWidZUDUmWTBZMDUmWTBZLVktNSZZLVktWTBZMFkwWS1ZLTUlWTA1JTUmWTBZMFkwWS1ZMFkwWS1ZLVkwWTBZLTUkWS01JTUlWVlZWVlZNSU1JjUnWTBZWVlZNSdZWVkwWS81J1kvWTA1J1kwWS9ZMFkwWTBZK1kwWTBZMDUmNSZZK1krWStZMFkwNSZZMFkwWTA1JlkwWStZL1krNSZZL1kvNSZZL1onWidaJ1krWTA1JVkwWTBZMFkvWS9ZL1krWS81JFkvWiZZRVomWiZZRVlFWiY1I1lFWUU1IzUkWiZaJlomWTxZMFlZNSNZL1kvNSNZL1kvNSNZWVkvWS81IzUkWTJZMlkyWTJZLzUkWTI1JFkyNSVZMlk8WTJZMlkyWTxZMlk8WTJZPFkyWTJZMlk8NFo1I1kyNSNZMlkyWTI1I1kyNSRZMjUkWTJZMlkyWTJZMjUkWS81JFkvWS9ZPFk8WTw1JFk8WTw1JFkvWS81JFkvWS9ZPDUkWS9ZL1lFWUVZPFk8WUdZRzUjWUdZPDUjWTxZPDUjNSRZPFk8WTxZUllSWVI1IzUkWihaKDUkNSVaKFooNSVaKFooWig1JVlHWTxZR1lHWUdaJVolWUdZRzUkWUdZR1lHWVFZUVlHWUdZUVlRWUdZR1lRWUc0WVolWiVaJVk8WTxZR1lHWTxZR1lHWUc0V1lHNFg0WVk8WTxZPDRZWTxZRzRZWUdZR1lHNFlZR1lHWUdZUVlRWVFZUTRYWVFZTlguWC5YLlolWiVZKVkpNFZZKVkpWSlYLjRWV0pXSlguWC5YLjRWVlRWVDRWNFdWVFZUVlFWUVZUVlRWUTRWVlRWVDRWVlFYKFgoNFZYKDRWWChYKFgoWCc0VlgnWCc0VlgnWCdYJ1dVNFZXVVdVNFY0V1dVV1VXJVclNFc0WFdVWCxXVTRYWCxYLDRYWCxXVVgrWCtYK1U+VFQ0V1RUNFdUVFU+VFRUVVRVNFdUVVRVVFVUVTRXVEw0V1RMVExUVVRVNFdUVVRVVFU0V1RVVFU0VzRYVjs0WDRZVjtWO1RVVFVUVTRZVFVUVTRZNFo0WlY7VFVWO1RVVFU0WlVQVExVMFRMVTBUTFUwVExVMFRMVTBUTFUwVExVNVRMNFc0V1U1VTVUTFRMVTRUTDRXVEw0V1RMVExVUFVQNFdVUDRXVVBVUFVQVTlVOVU5VVBVOTRWVTlVOVVQVVA0VlVQVTlVOVVQVVBVOVVQVVBVUFY7VVBWOzRUNFRWOzRVVjs0VVY7NFZWO1Y7NFZWO1Y7VVBVUDRWVVBWO1Y7VVBVUDRVVVBVUFVQVjtWO1Y7NFVWO1Y7NFVVUDRVVVBVUFVQWUJZQjRVWT40VVk+WT5ZPllCWUJZPlk+WUJZQlk+WT5ZQllCNFNZQjRTWUJZQllCWUJZSTRTWUk0UzRUWUJZQllCWUI0VFlCWSg0VFkoWSg0VFlJWUJZQllJWUk0VDRVNFVZSVlCWUJZQllJWUJZQllJWUk0VDRVWUlZSTRVNFZZSTRWWUlZSVlNWU1ZSVlJWU00VVlJWUlZSTRVWUlZSVlNWU1ZSVlJWUlZTTRUWU00VFlNWUlZTVlJWUlZSVlNWU00U1lNNFQ0VFlNNFVZTVlQWVBaJ1lQWVBZUFonWVA0U1lQWidZUFonWVBaJ1onWVBZUDRSWVBaJzRSWidaJ1onWVBaJzRSWidZK1lQWVBZUFlQWVA0UVkrWStZUFkrNFBZK1krWStZUDRQWVBZK1krWStZK1lUWStZVFkrWStZSllKWUpZV1lKWStZK1krWVdZK1lXWVdZK1krWVdZK1lKWVdZSllXWUpZV1lKWVdZV1lTNEg0SVkrWStZUzRJWStZU1lTWVNZU1krWVNZU1lTWVNZKlkqWVNZU1kqWSo0RVkvNEY0R1lUNEdZVFkvNEdZL1kvWS9ZL1kvWVQ0R1kvWS80R1kvWS9ZL1kvNEdZL1kvNEdZVFkvNEdZVFlUWS9ZL1kvNEdZL1kvNEdZL1lUNEdZVFlUWS9ZL1lUWVRZL1kvWVRZVFlUWTlZOVk5NERZOTRFWTlZKlk5WTlZOVkqNERZKjRFWUdZR1lHNEVYL1gvWTlYL1k5NERZOVk5NERZOVk5WTlZOVgvWTlZOVgvWC80Q1gvWTlYIzRDNERWV1lHVldWV1ZXVlc0Q1ZXVldWVzRDNEQ0RFZXWCNYI1ZXVlc0RDRFWC9WVzRFVldWV1ZXWCNYI1ZXVlc0RFZXNERXU1ZTVlNXU1dTVlNWU1ZTVlM0Q1ZTNENXUzREV1NXU1dTVlNXUzRDV1NWU1dTVlNXU1ZTNENXU1dTV1NXWVdTNEJXU1dTV1NXU1ZTVlNXU1dTVlM0QVZTNEFWUzRCV1NXUzRCV1NWTlZONEI0Q1dQVk5WTlZOVk40QlZONEM0QzREV1lXWVZOVk5WTjRENERXWVdZV1lWTlZOVyNXI1ZOVk5XI1cjVyNXI1cjNEJXI1cjNEI0Q1cjVyNXWTRDVyM0Q1cjVyNWTlZONEM0RFZOV1lWTldZNENXWVdZV1k0Q1dZV1lXWVdZV1lXWTRDV1lXWTRDV1k0QzREVyxXLDRENEVXLFcsV1lXWTRFNEZXWTRGVyxXLDRGNEdXLFcsNEc0SFcsVyxXWVcsVyxXLFdZV1lXWVcsV1k0RlcsVyw0RlcsVyxXLFdZVyxXLFcsV1lXWVcsV1k0RDRFV1lXWVcsNEU0RjRHVyxXWTRHNEhXWVdZNEhXWTRIV1lXWVdZV1lXWTRINElXLFcsVyw0SVcsVyw0STRKVyxXLFcjVyNXWVdZNEk0SlcjNEpXI1cjNEpXI1cjVyM0SldZNEtXIzRLVyM0TFcjNEw0TTRONE9XLFcsV1NXU1dTVyxXU1csNE00TldTV1NXLFcsVyw0TlcjNE5XWVdZV1k0TldZV1lXIzRONE80UFdZV1k0UFdZV1k0UDRRVyNXI1cjVyM0UTRRNFJXWVdZVyNXIzRSNFNXI1cjNFM0VFdZV1lXWTRUV1lXWTRUV1k0VFdZVyNXIzRUNFU0VjRXNFc0WFcjVyM0WDRZVyM0WldZNFo1I1cjNSNXI1cjVyNXIzUjVyNXIzUjVyNXI1cjVyM1I1cjVyM1I1cjVyNXI1dVV1U1IzUkV1VXVVdVNSRXVVdNNSRXTVdVNSRXTVdNV1U1JFdVV01XVVdVNSRXTVdNV01XVDUkV001JFdUV1RXTTUkNSU1JldNV01XVFdUV01XVDUlNSZXVVgrV1U1JldVNSZXTVdNV1VXVTUmV01XVVdVV1VYK1dNV1Q1JVdUV001JVdUV1RXTTUlNSZXVFU+VVlVPlVZVVlVWTUlVVlVPjUlVT5VPjUlVVlVWVVZNSU1JlY6Vjo1JlY6VjpWOlU+VT5WOjUmVT5VPjUmNSdVPjUnVjpVWTUnVVlVWVVZNSdVWVUvVS81JzUoNSk1KlVZVFRVWVRUNSk1KlUvVS81KjUrVS9VLzUrNSxVVTUtVFRUVDUtVFQ1LVRUVVVVVTUtVExUVFRMVVBVUFRMVVBUTFRMVTpVOlU6VVBVOlU6VEw1KlVQVVBUTFVQVVBVUFRMVVA1KVVQVExVUFRMVExVUFVQNShVUFRMVExUTDUoVEw1KFRMVEw1KFlCWT5ZQllCWUI1KFlCWUJTOjUoUzo1KFM6UzpTOlM6UzBTOjUoUzBTMDUoUzBTOlMwUzpTOlMwUzA1J1MwNSdTMFM6UzBZOVk5WSpZKlk5WTlZKlkqWSpZOVkqWSpZOVk5WTlZKlctVy01IzUkV0Y1JFdGV0ZXLVctV0ZXRlk5WTk1I1coWTk1I1coVyhZOVk5VyhZOTRaVyhXKFcoVy00WldGV0Y0WjUjVlpWWjUjNSRWWlZaNSQ1JVZaVyhWWlZaVlo1JVZaVlo1JVcoVlo1JVZaVzZXNlc2VzZXLzUkNSVXL1cvVzZXNlc2Vk9XNlcvNSRXL1c2Vy9XNlc2VlpXKFZaVyhWWlZaNFo1I1c2NSNXNlc2VzZXKFZPVk9XKFcoVk80WlZPNFpWT1ZPNFo1I1ZPVk81I1c2NSRXNlcuNSRTOVc2VzZXLzUkVy81JFZPNSVWT1k5WTlZOVcoWTlZOVcoNSRXKFcoVyg1JFcoNSRWVVZVWTlZOTUkWTlZOTUkVlVWVVcoVlVXKFZVVlU1I1ZVVlU1I1ZVVlVWVTUjWCM1JFgjWCNYI1ZVWCNWVVgjVlVYI1ZVVlU0WjUjVlVWVVZVNSNWVTUjVlVWVVZVWCM1I1gjNSNYI1ZVWCNWVVZVVlU1IzUjNSRWVVZVNSQ1JVZVNSZWVVZVNSZWVVgjWCM1JlgjVlVYI1ZVNSZWU1ZTWCM1JlZTVlM1JlgjVlNWU1gjNSZWU1ZTNSZWU1gjNSZYI1gjNSZWU1ZTVlNXU1dTVzdXU1c3NSVXN1c3NSVXN1c3VzdXLFcsNSVXLFc3NSVXN1c3NSVXLDUmVzdXN1c3NSZXNzUmVzk1J1c5NSdXOTUoVzlXN1c5VzdXOVc3NSdXN1c3NSdXOVc3VzlXN1c3Vzc1J1c3VzdXNzUnVzc1JzUoNSk1KVc5NSpXOVc5VzxXOTUqVzk1Klc5VzlXOVc8NSpXPFc5VzxXOVc8VzlXPFc5Vzk1KFc8VzlXPFc5NShXOTUpVzxXPDUpVzxXOVc5NSk1KjUqVzxXOVc8VExUTDUqNStUTVRNVUxUTVVMVUw1KlVMNSpVTFRNVUw1KlRMNStUTDUrVEw1LDUtVExUTFVFVExVSTUsVUlVSTUsVExVRTUtVExUTDUtVExVRTUtVUU1LlRMVEw1LlVFVEw1LlVQVVBTOVM5UzlXUTUtV1FXUVdRVlU1LVdAVlU1LVgjVlVWVVdANS1XUVdRV1FXUVdRVlZXUVZWV1FWVlcrV0VXK1dFVytXRVcrNSpXKzUqVys1KzUrV0U1LFdFV0VXRTUsVys1LFcrVytXK1crVytXK1dFWCNXOVgjVzlXOVc5NSpXOTUqVzlYI1gjVzlXOVc5VzxXOVc5VzlXPFc8VzxXPDUoVzw1KFc8VzpXPFc6Vzw1KFc6Vzo1KFc6V1VXVVc6NSg1KDUpVzxXPFc8VzxXKVc8VzxXPFc8VylXKVcpVzxXKVc8VzxXKVc8VzxXPFcpVylXPFcpVylXKVcpVylXPFc8Vzw0Wlc8Vzw0WlcpVzxXKVcpVylXKTRaNFpXPDUjVzxXKTUjVylXKTUjVzw1JFc8V1VXVTUkNSVXVVdVNSU1JldVV1U1JjUnV1VXVTUnV1VXVVdVNSdXWDUnV1VXWFdVVD5UPlQ+NSc1JzUoVUlVSVVIVEhVSFRIVUhUSFVIVEg1JlRIVEFUQVY8VjxWNVY1VCtUK1QrNSVUK1QrNSVVQ1VDVT9VP1U/NSRWMVYxVjFTQVNaNSRTWlNaU1pTPVM9V1FXUVdRVk1YLVgtNFpYLVgqNFpWWDUjWCo1IzUkVlhWWDUkVlg1JVgqWCo1JVgqVlg1JVZYVlhXVTUlV1VXVTUlNSY1JzUoNShXMVcxVzFXMVcxV1VXVVcxVzFXVVdVVUlVSVVJVSpUOlQ6VElUSVRENSRURDUlUzRTNDUlUzRTPVM0UzRTNFM0NSRTNFM0VCNUI1MuUy5UI1QjUy5TLlMtUy1TLVMuU0A0WVNAU0A0WVNYNFpTWFNANFpTQFNANFo1I1NAU0BTP1M/Uz9TVVREVEk0WlRJUy5TTVMuU01TLlNNUy5TTVMuU01TLlMuNFdTTVMuNFhTTVNNNFhTTTRYVCRTTVQkU000WFNNU000WFQkVCRUJFQkNFhUJDRZVCQ0WVQkNFo0WjUjU0pTSlMzUzM1IzUkU081JFNPU0dTR1NHNSRTR1NPNSRTT1NPU0c1JFNHU1dTR1NHU0dTVzUjU1dTV1NXVz5XPjUjNSRXPlc+NSQ1JTUlV1ZXVldWV1ZXVjUlNSZXJDUmVz9XPzUmVSM1J1UjU0pTNzUnUzdTTlNOU0pTSlNKU0pTTlNKU0pTSlNKU05TNzUkUzc1JTUlNSZTSlNKUzdTSlNKU0pTT1NHNSU1JjUmU0dTT1NHU0dTR1NJU0dTT1NPNSVTSVNPNSVTT1NJU09TSTUlU0k1JVNJU09TT1NJU0lTSVM4U081JFNPUzhTR1NHU0c1JFNJUz5TSVM+NSM1JFM4UzhTODUkUzhTODUkUz5TPlM+U1dTV1M+NSRTV1NXNSRTV1M+Uz41JFNXV0xXQ1dDV0NWJDUjViRUUFQ9VihWKFYoVihWKDRaVihUPVYoVD00WlYoVUBVQFVAVig0WVQ9VD00WVQ9VD1UPTRZVUBUPVQ9VSNWKFYoVihWKFYoVUBVQFYoVihVQFVANFZTT1NQU1BTT1NQU1BTUFNQNFVTUFNQUz5TPlNQNFU0VVM2U1BTUFM2UzY0VVM2NFVTNlNSUzZTNlM2U1I0VVNSNFVTUlNSNFVTNjRWNFdVPVYsVixWLDRWVDFUMVQxVTw0VlRHVEdUR1RHNFZUR1RQVFA0VlRQVEdUR1RHNFY0VlNQU0RTUFM2UzZTNjRWU0RTRFNENFY0VlNFU0VTRVQxVDFUNVQxVDBUO1QwVDBULzRUVC9ULzRUVDBUL1QwVDBUMFQwNFRUMFQ7VDA0VFQwNFRUMFQwNFRUOzRVVDs0VVRHVDtUR1Q7VDtUOzRVVi5WLjRVVi40VVYuVDBUMFQwNFVUMFYuVDBUMDRVNFZUO1Q7NFY0V1QwNFdWLlYuU0NTQ1NDU0VTQ1NDU0M0VlNFNFZTU1NTNFZTU1NTU1NTRVNFNFZTUzRWU1NTU1NTWDs0VlhEWEQ0VlhEWERYRFQzVDNUNVQzVDU0VVQ1VDVUM1QzNFVUNVQzVDNUNTRVNFU0VlQ1VDVUM1QzNFZUNVQwVDBUN1QwVDBUMDRVNFZUMDRWVDBULjRWNFdULjRYVDBUMFQuVC40V1QuVC5ULlQwVDA0V1YuNFdVTVVNVU1VTVYuVU00V1YuVi40V1YuVDBUMFQwNFc0V1VNVDBVTVQwNFdUMFQwVDA0V1QwNFhUMFQwNFhUMFQwVDBULjRYVU1VTTRYVU1WLlYuVi40WFYuVi40WFYuNFhVTVVNVU1VTVVNVC40WFNFU1NTRTRYWERYRDRYNFlYQjRZWEJYQlhEWEQ0WTRaWERYRDRaWEJYQjRaWEJYQjRaVC5UNVQ1NFo1I1Q0VDRUL1QvVDRUNFQvNFpUNFQ0NFpUL1Q0VDRULzRaVDRUNFlVWTdZVTRaWTdZN1lVWVVZN1k3NFlZN1lVNFlZVVlVNFlZN1lVWVVZVVlVWVVZN1lVNFhZN1k3WC5YLlguNFhYLlguNFg0WVgmNFlYJlgmNFlYJlgmWCY0WTRaWCZYJlk0WTQ0WjUjNSM1JDUlWUA1JTUmWUBZQFlAWUA1JjUnNSdZNFk0WTRZQFlANSc1KFksWSw1KFksWSdZJ1ksWSw1J1ksNShZLDUoWSw1KVksWUhZSDUpNSpZSFlINSpZSFkzWTNZLFksWTM1KVksWSw1KVksWSxZLFlVWVVZM1lVWTNZVVkzNShZLFksWSxaJlksWiZZLFomNSZaJlomWiZZLFomWSw1JlksNSZZLFomWUxZTFokWiRZTFlMWiQ1JVlWNSVZTFlMWVZZVjUlWVY1JVlMWUxZTDUlNSY1J1lHNSc1KFlYWU5ZTlguWC5YLllONSdZTlguWU5ZTllONSdZTllONSc1KFlOWU41KFlOWU5ZTjUoNSk1KVguNSpYLlguWC5ZTllOWC5YLjUpWC5ZTllONSlYLjUpNSpZR1lHWUdZR1lHNSpZRzUqWUdYLllHWUdZRzUqNSpYLlguWC5ZRzUqWC5YLllHWUdYLllHWUdZR1guNSlYLlguV081KVguWC5YLlgmNSg1KVgmWCY1KVgmWCZYJldHV0dXPTUpNSlXR1c9Vz1XMzUpVzNXM1c9Vz1XPVczVj1WPVY9NShWPVY9NShWPVY9Vj1WPTUoVj1WPTUoNSlWPVY9Vj01KVY9Vj01KVY9NSlUTFVUNSo1KjUrVj9UTDUrVExUTFRMNStVRzUsNS01LVY5Vjs1LjUuVjtWO1Y7NS41L1Y7VjtVR1VHNS9VRzUvNTBUTFRMVExVR1RMNTBVR1VHNTBUVTUwVExUTFRMNTA1MVRVVFVVS1VLVUs1MVVLVUs1MVVLVVBVS1VQVUtVS1VLNTBVS1kuWS5ZSTUwWUk1MFlJWUlZLlknWS41MFknWSdZLlkuWS5ZLjUvNTA1MDUxWUlZSTUxWUlZSVlJWS5ZLjUxNTJZLlkuNTJZLjUyNTNZSTU0WS5ZLlkuNTQ1NDU1WUlZSTU1WS41NlkuNTZZLllJWUlZJ1knNTZZJ1knWSc1NjU3NTc1OFkuWS5ZJ1knNTg1OVknWS41OTU6WSdZJ1kuWSdZJ1knWSdZLlkuWSdZLlkuNTdZLlkuWS5ZLlknWS41N1kuNTdZLlkuWSdZJzU3WS5ZJzU3WS5ZLjU3WSc1ODU5WSdZJ1ksWSxZJzU4WSdZJ1ksWSxZJ1ksWSc1N1knWSdZJzU3WSxZLDU3NThZLFksWSdZJ1ksWSxZLFksNTdZLFknWSxZJ1knWSw1NlknNTdZJ1knWSc1N1knNTc1OFksWSdZLFksWSxZLFksNTdZLDU3WSxZLFksWSc1N1knWSc1NzU4WSxZLDU4WSxZLFksNThZLlkuWS5ZJzU4WS41OVknWSdZJzU5WSc1OVknNTpZJzU6WSdZJ1ksWSw1OlksWSdZJ1knNTpZLFksNTpZLDU6NTtZLFksNTtZLDU8WSw1PFknNT1ZJ1kuNT01PjU/NT9ZJ1knWSc1P1knNUA1QTVBNUJZJzVDNUM1RFkuNUVZJ1knNUVZJzVFNUZZJ1ksWSxZLFkuWSxZLlkuWUlZSVkuWS5ZSTVEWS5ZLjVEWS5ZLjVEWUlZSVlJWS5ZSVkuWS5ZQVkuNUNZQVlBNUNZQVkuWS5ZLjVDWUk1Q1lJWUk1QzVEWUlZSTVEWUFZQVlBWUFZQTVENUVZQVlBWUE1RVlBWUE1RVlJWUFZQTVFNUY1RlksWUFZLFlJNUZZSTVHWSxZLDVHWSw1R1ksWUlZSTVHNUg1SVlJNUk1SllJWUlZLFksNUo1S1opWilZSVlJWUk1SlopWilaKTVKWUlZSTVKNUs1TFopNUw1TVlJWUk1TVopWik1TlopWUk1TjVPNU81UFlJWUlaKVopWUlZSVopWilZSVlJWUlZSVlNWU1ZSVlNWUk1TVopWilZTVlNWU1ZTTVMWU1ZSVlJNUw1TVlJWU1ZSVlJNUxZTVlNWU1ZLDVMWUlZSVksWSw1TFksWUk1TDVNNU5ZSVlJNU5ZLDVOWSxZLFksNU5ZLFksWSxZLFomNU5aJjVOWiY1T1omWSxaJjVPWiY1T1omWSxZLFksNU9ZLDVQWSxZLFksWiY1T1omNVBaJjVQWUtZS1lLWSxZLFksNVBZLFksWUtZS1ksWSxZS1lLWSxZS1lLWUtZLFksNU1ZLFlLWSxZS1lLWSw1TDVNWiZZLDVNWSw1TjVOWiZaJlomWUlZSVlJNU5ZSTVONU9ZLFlJNU9ZSTVQNVA1UTVSWSxZSVlJWUk1UllJNVJZSVlJWUlZLDVSWSw1UlksWUlZLDVSWSxZSTVTWSxZLDVTWSxZLFksWSw1UzVTWilaKVopNVM1VFopWik1VDVVWilaKVopNVVaKVopWSxZLFksNVVZLFksNVVZLDVVNVZaKVopWilZLFopWik1VVopWilaKVksWSw1VVksWSxZLDVVWSxaKVksWilaKVksWilaKVopNVM1VFopWilZLFksWilZLFksWSxaKTVTWSxZLFojWiM1UlojNVNaI1opWiNaKTVTNVNaIzVUWVpaI1ojWiNZTVopWilaKVlNWilaKVlNWU1aKVopWU1aKVopWilaKVlNWilaKVopNU81T1opNVA1UVopWU01UVlNWilaKVopNVE1UVlNNVJZTVlNNVJZTVlNWik1UllNWU1aKVopWik1UlopWU01UllNWSxZLFksNVI1UlojWiNaI1ksWSxaI1ojNVFaI1ojWiNZLFojWSw1UVksNVFZLFojWSxZLFksNVFZLFksNVFaI1ksWSxZLFojWT9aI1k/WT9ZTVlNWU1ZPzVOWT81TzVQWT9ZPzVQWT9aI1ojWT9ZP1lNWU1ZTTVPWT9ZP1onNU81T1k/WT9ZPzVPNVBZTVlNWT9ZPzVQNVFZTVlNNVFZTTVRWT81UjVTWUtZS1ojWUtZS1lLWUtaI1lLWUtaIzVRWUtZSzVRWUtaJlomWUtZS1omWUtZS1lLWiZaJllLNU9aJlomNU81UFomWiY1UFomWUs1UFlLWUs1UFomWUs1UVlLNVFZS1lLWiZaJjVRWiZZS1lLWUtZLVlLWUtZSzVQNVBZLVktWS01UFktWS1ZLVlLWS1ZLVktWUs1T1ojWiNaI1ojWiM1T1ojWiM1T1kwWiNZMFojWiNZMFkwWiNaI1ojWiM1TVojWiNaIzVNWiNaIzVNWTBZMDVNWUtaI1lLWiM1TVojNU41TjVPWiM1UFojNVBaIzVRWiM1UVojWTA1UVktWTBZMFktWS1ZMFkwWS1ZLVkwNVBZMDVQWTBZMFktWS1ZMFkwWS1ZLVkwWTBZLVktWTA1TlktWS01TjVPWS1ZLTVPNVBZLTVQWTBZMDVQWS1ZMFkwNVA1UVkwWTBaIzVRWT9ZP1ojNVE1UjVTWTBZMDVTWTA1U1kwWT9ZP1k/WT9ZPzVTWTBZMDVTWTBaJ1onNVM1VFonWic1VFonNVRaJ1lQNVVZMFkwNVVZMFktWS01VTVWWTA1VlkwWTBZLVkwWTBZMDVVWTBZMFkwWS1ZLVktNVVZLVlZWVlZWVktWVk1VFlZWS1ZLVktNVRZWVlZNVQ1VTVVNVZZMFkwWVlZWVkwWVlZMFkvWS9ZL1kwWS9ZL1kvWTBZMFkwNVNZMDVTWStZK1kwWTA1U1kwWTBZMFkwNVNZK1kvWStZK1kvWS81UjVTWTA1U1kwWS9ZK1krWStZLzVSWUVaJjVTWTw1U1k8WTw1U1k8WTxZPFkwWS9ZL1kvWVlZWVkvNVJZWVlZNVJZL1k8WTxZMlkyWTxZPDVRWTw1UVkyWS9ZMlk8WTxZMlkyWTI1UFkyWTJZMlk8WTJZMlk8WTxZMlk8NU5ZPDVPWTxZPFk8WTI1T1kyNU9ZMjVQWTI1UFkyWTxZMlkyWTxZPDVPWTw1UFk8WTw1UFk8WS81UFk8WS9ZLzVQWS9ZL1kvWTw1UFkvWS9ZR1lHWTw1UDVQWUdZPFlHWUdZR1k8WTxZR1lHWTxZPFk8WTxaKFooWTw1TVooWig1TVooWihaKDVNNU5aKFooWTxZPFooWihZR1lHNU01TllHWUdaJVolWVFaJVolWiVZR1lHWTxZR1k8NUs1TDVNWUdZRzVNWUdZPFlHWUdZR1k8WUc1TFlHWUdZR1lHNUxZUVlRWiVaJVolWiU1S1kpWC5YLldKV0pYLlguVlJWUlZUVlRWUVZRVlRWVFZRVlFWVDVHVlFWUTVHVlFWUVZRVk5YKFZONUc1RzVIWChYKDVIVzNYJ1gnVzM1SDVJNUpXJVclV1VXVVclVyVXVTVJVyVXJTVJVyVXVVclV1VXVVclVyVXVVdVV1U1R1dVV1U1RzVIV1VXVVU+VT5VPjVINUg1SVU+VT5UVVRVNUk1SlRVVFU1SjVLVEw1S1RMNUxUVVRVNUw1TVRVVFU1TTVOVFVUVTVONU9UVTVPVFU1UFRVVFU1UFY7VFVWO1Y7VjtUVVRVVFU1T1RVVFU1TzVQVFVUVTVQNVFUVTVRVFU1UlRVVFU1UlVQVExVNTVSVTVUTFU1VTVVNVRMVTRUTFU0VEw1UFRMVExVMFVQNVBVUDVQVVBVMFVQVTlVUFU5NVA1UFVQVTlVOTVQVVA1UVVQVFVUVVRVNVFUVTVRNVJWOzVSVjs1U1Y7NVNWO1Y7Vjs1U1VQVjtWOzVTVVBWOzVUVjtVUFVQVVBWO1Y7Vjs1U1Y7VVA1U1VQVVA1U1VQVVA1UzVUWT5ZPllCNVQ1VVk+WT5ZPlk+NVU1VVlCWUJZQllCWUJZQjVVWUI1VVlCWUI1VVlJWUJZQlk+WUI1VVlCWSg1VVkoWShZSVlJWShZKFlJNVQ1VTVWWUlZSTVWWUlZQjVWWUJZQllJWUk1VjVXWUlZSVlCWUJZSVlJNVY1V1lJWUk1V1lJWUlZTVlJWU1ZTVlNNVZZTVlJWUk1VjVXWUlZTTVXWU01V1lNWUlZTVlNWU1ZTTVXWU01V1lNWU1ZTVlNNVc1WDVYNVlZTVlNNVk1WlonNiM2I1lQWic2JDYkWVBaJ1onNiRZSlonNiVZUFlQWVA2JVlQWVBZUFkrWVBZK1lQWStZVzYjWVc2JDYkWVNZU1lTWStZK1lTWVNZL1kvNiNZL1krNiNZK1krNiM2JFkrWStZVFlUNiRZL1lUWS9ZL1kvWVRZL1lUWVRZL1kvNVo2I1kvWS82IzYkNiRZVFlUWVQ2JFlUWVRZVFkvWS9ZLzYkWS9ZL1lUNiQ2JFlUWVRZVDYkWTk2JVk5WSo2JVkqNiZZKlkqWSpZOVkqWTlZKlk5WUdXWllHV1pYL1gvWTlZOVgvWC9ZOVk5WC9YL1k5WC9ZOVk5NVg1WVgjWCM1WVgjVldWVzVZVldWV1ZXWCNYIzVYVldYI1gjWCM1WFgjWCNWV1ZXWCNYI1ZXVlc1VzVYWC9YLzVYVldWV1ZXNVg1WVdTV1NWU1ZTWCNWU1gjWCM1V1dTVlNWU1ZTVlNWU1dTNVZXUzVXV1NWU1dTVlNWU1dTV1M1VlcsNVZXU1ZTNVdXU1dTNVdXU1ZTNVdWU1ZTNVdXU1ZTVlNXUDVXV1BXUFZOVk5XUDVXVk5WTlZONVdXWTVXV1lXWTVXNVg1WVdZNVk1WldZV1lWTldZV1lXWTVZNVpXWVdZVyNXI1cjNVpXI1cjNVo2IzYjV1lXWVdZNiNXI1dZVyNWTlZONiM2JFcjNiRXI1cjVk5WTlcjVyM2IzYkV1lXWVZOVk5XWVdZV1lXWVdZNiNXWVdZNiNXLFcsNiNXLFcsV1lXWVcsVyxXWVdZVyxXLFdZV1lXLFcsV1k1WFdZNVk1WVcsVyxXLFdZV1lXWTVZV1lXWTVZV1lXWVdZVyw1WVdZNVk1WjYjNiNXLDYkVyxXWVdZV1k2JFdZV1lXLFcsVyNXI1dZNiNXI1cjNiNXWVcsVyxXLDYjVyw2I1csV1k2IzYkV1lXWVcsV1lXLFcsV1lXWTYjNiRXWVdZNiRXWTYkV1lXWVdZV1lXWVdZNiRXWVdZV1k2JFcsVyxXLFcjVyxXLFcjVyM1WjYjVyNXI1csNiNXLFcsNiM2JDYlVyNXI1csVyM2JVcsVyw2JTYmV1lXWTYmVyw2JlcjVyNXIzYmVyM2J1cjNidXI1dZVyNXWVdZVyM2J1cjVyM2J1cjVyM2J1cjVyM2J1cjVyNXI1dTNidXU1dTNidXLFdTV1NXLDYnVzdXN1cjNidXI1dZNidXI1dZVyNXI1cjNic2KFdZNihXWVdZNig2KVdZV1lXWVdZNilXWVdZV1lXWVcjV1lXWTYoNilXI1cjNik2KldZNipXWVdZVyNXIzYqVyNXIzYqV1lXWTYqVyNXWVdZVyNXIzYqNitXI1cjV1lXWVdZV1lXWVcjV1lXWVcjV1lXWVdZVyM2KFdZV1lXWTYoV1lXWTYoNilXWTYpNio2KzYrVyNXI1cjNis2LFcjVyM2LFcjVyNXIzYsV1lXIzYtNi1XWTYuVyNXIzYuVyNXI1dZV1lXI1cjNi1XI1cjVyM2LTYuVyNXI1cjNi5XI1cjNi42L1cjVyNWTlZONi82MFZOVyM2MFcjV1U2MFdVV002MFdVV01XTVdVNjA2MVdNNjFXTVdNV002MVdNNjJXTVdVV01XVVdNV1U2MVdNV002MVdNV1Q2MjYyV1Q2M1dUV01XTVdNNjNXTTYzV1RXVDYzV1RXVFdUV002MzY0NjU2NVdUV1RXVFdVWCtXVVgrV1VXVVdVNjQ2NFdNV01XTVdNNjRXTVdNV01XTTY0V01XTVdNNjRXVFdUNjRXVFdUNjRVWTY1VVlVPjY1VT42NjY2VVlVWVVZVT42NlY6Vjo2NjY3VjpWOjY3NjhWOlY6VT42OFY6Vjo2ODY5VjpWOjY5NjpWOlY6VT5VPjY6NjtVPlVZNjtVWTY7VVk2PDY9VFRUVFVZVVlUVFRUNjxUVFVZNjxUVFRUNjxUVFRUVFRVWVVZVS82PFVZVVk2PDY9VVlVWVUvNj1VWVVZNj1VL1RUVFQ2PTY+VFRUVDY+VFQ2PjY/VVVVVTY/VFRVVTZAVVU2QFVVVVVUVFRMVFRUTFRMVVBUTFVQVExVUFRMVVBVUFVQVVA2PVRMVExUTDY9VExVUFRMVVBZPjY8WT42PVlCWUJZNVk1UzpTOjY8Nj1TOlM6Uzo2PVM6Nj1TOlM6UzBTMDY9UzBTOlMwUzpTOlM6UzBTOlMwVy1XLTY7NjxXLVctNjxXLTY8Vy1XRldGNjw2PVcoVyhZOVk5WTk2PVk5WTk2PVk5Nj1XLVdGNj5XKFcoVlpWWjY9VyhWWlZaNj1XKFZaVlpXKFcoVlpWWlZaVyhWWjY8VyhXKDY8VyhWWjY8Nj1XKFZaVyhXKFcoVlpXNjY8VzZXNlc2Vy9XL1c2VzZXL1c2NjpXNlc2VzZWWlZaVlpXNlZaVyhXNlcoNjg2OVc2NjpXKFcoNjo2O1ZPNjtWT1ZPVyhXKFZPVk9XKFcoVk9XKDY5VzZXLlcuNjlXNlc2VzY2OVc2Vy5XNjY5NjpXL1cvVzZWTzY6Vk82OlZPVk9WT1k5WTlXKDY6VyhXKFcoNjpXKDY6VlVWVVk5WTk2OlcoWTlZOTY6VlVWVTY6VlVWVTY6WTlWVVZVWCNYI1ZVWCNWVVgjVlVYI1ZVNjhWVVgjNjhYI1gjWCNWVVZVVlU2OFZVNjhWVVZVNjhYI1gjWCM2OFgjVlVYI1ZVNjhWVTY5WCNYIzY5WCNYI1gjNjk2OlZVNjpWVVZVWCNYIzY6WCM2OjY7VlVWVVZVVlVXQDY7NjtYI1ZVNjxYI1gjNjxYI1ZTVlNYI1gjVlNWU1gjWCNWUzY6WCM2O1ZTVlM2O1ZTWCM2O1gjWCM2O1ZTVlNWUzY7NjxXNzY9V1NXUzY9VzdXLFcsVzc2PTY9Nj5XNzY/VyxXLDY/Vyw2PzZAVzdXNzZAVzc2QVc3NkFXOTZCNkNXNzZDVzdXN1c3VzdXNzZDVzdXOVc5VzlXNzZCVzdXNzZCNkNXNzZEVzdXN1c3Vzk2Q1c3VzlXOTZDVzlXOVc5VzdXN1c3NkNXOVc5NkNXOVc5Vzk2Q1c5VzdXOVc3VzlXOVc8VzlXOVc5NkFXOVc5VzlXOTZBNkI2Qlc8VzlXPFc5NkJXOVc5VzlXOTZCNkM2Q1c8VzxXPFc5VzlXOTZDVzlXOTZDVzxXOTZDVzlXPFVVVExVVVVVVExUTDZCVExUTVVMNkJVTFVMVUw2QlVMVExUTDZCVEw2QlRMVUVVRVRMNkJVRTZDVUU2Q1VFVUU2Q1RMNkRUTFVJVUxVSVVJVExUTFVFNkM2Q1RMVUVVRVRMVExVRVVFVExUTDZCNkNVRTZDVUVVRTZDVExVRVVFNkNUTDZEVVBTOVdRUzlXUVZVNkNWVVZVNkNYI1ZVVlVXQFdRV1FXUVcrV0VXK1crVytXK1crNkFXKzZBVytXK1crV0U2QVdFNkE2QlcrVys2QjZDVytXK1dFNkNXK1crVzlXOVgjNkNYIzZDWCNYI1c8VzxXPDZDVzw2Q1c8VzpXOlc6VzxXPFc6Vzo2Qlc6Vzo2Qlc6VzpXOlc6VzxXOlc6VzpXOlc8VylXKVc8VzxXKVcpVzxXPFcpVylXKTY+Vyk2PlcpNj9XKVc8Nj9XPFcpNj9XKVcpNj9XPFc8VzxXKVc8VylXPFdVV1VXVVgtNj1YLVgtWC1XVVdVV1U2PVdVV1U2PTY+V1VXVTY+VzFXVVdVVzFXMVdVV1VXMVdVV1U2PDY9V1hXVVdVV1hXWFQ+VD5UPjY8VUk2PFVJVUk2PFVJVUlVSTY8Nj1UQVRBVCs2PVVDNj5VQ1VDNj5VQ1U/VUNVP1YxU0FTWjY9U1pYLTY9Nj5WWFgqWCo2PjY/Vlg2P1ZYWCpYKlgqNj9WWDY/NkA2QVZYWCpYKlZYNkFWWDZBVlhWWDZBWCo2QlgqVlhWWFZYNkJXVVdVV1U2QldVNkJXVTZDV1VXVVdBV1VXVTZCV1VXVTZCV1VXVVdVNkI2Q1cxVzFURDZDVEQ2RFREVElURFRJUzRTNFM9Uz1TNDZCUzRTNFNYU1hTQDZCU1hTWDZCU1hTQFNYU0BTWDZBU1hTQFNAU0A2QVNAU0A2QVNYNkJTWFREVERURDZCUy5TTVMuNkI2QjZDUy5TLjZDU002RFNNNkRUJFNNU01TTVNNU002RFNNU002RFQkVCRTS1QkNkQ2RFNLNkVTSzZFU0s2RlNLU0tTSzZGU0tTM1MzUzM2RlMzUzM2RlNKUzNTMzZGNkc2R1NPNkhTTzZIU0dTR1NHU0dTR1NPNkg2SFNHNkk2SlNHU0dTRzZKU0dTV1NXU1dXPlc+Vz42SVc+Nkk2SjZLNktXPjZMNk1XPlc+Nk1XVlc+V1Y2TVdWV1ZXVldWVzRXVlc0VzRXNDZLVyQ2TFckVSNVI1QtVSNULTZLVC1ULVNKNktTSjZMUzdTN1M3NkxTN1NKU0pTSlM3Uzc2S1NKUzdTN1NKU0pTT1NPU082SjZKU0dTR1NHU082SlNPU09TT1NJU0lTSVNPNklTT1NJU09TSVNPNklTTzZJU09TSTZJUzg2SlM4NkpTSVNJU0lTOFNJUzhTOFNJNklTSVM4Uzg2SVM4Uz42STZKUz5TPlM+U1dTPjZKU1dTVzZKU1dTPjZKUz5TPjZKVFA2S1RQVihWKFYoNktUPVYoVD02S1YoVihWKDZLNks2TFQ9VD02TFVAVD1UPTZMU082TTZOU1A2TlNQU1A2TjZPU1A2UFNQNlBTUFNQUzZTNjZQUzZTUlM2UzZTNlM2UzZTNjZPUzY2TzZQU1JTNlM2UzY2UDZQU1JTUlNSU1JTNlNSU1I2TzZQVDFUMVU8NlBUR1RHVDtURzZQVEdUUFRQNlBWLlRHVi5UR1YuU1BTUDZPNlBTNjZQUzZTNlNSU1I2UFNSU0U2UFNFU0VULzZQVC9ULzZQVDA2UVQwVDA2UVQwNlI2UlQ7NlM2VFQwNlRUMFQwVDtUOzZUNlVUMDZVVDBUOzZVVEdUOzZWVDs2VlQ7VDtWLlYuNlZWLjZWNlc2WFQwVDA2WDZZVi5UMFQwVDA2WTZZVi42WlYuVDs2WlQwVDA2WlQ7NyNUO1QwNyNWLlYuU0NTRVNDU0VTRVNFU1M2WjZaU0VTU1NTU0VTRVNFNlo2WlNTU1NTU1g7NlpYRFhENlpYRFhEWERUM1QzNlo3I1Q1NyNUNVQ1VDVUM1Q1VDVUNTZaVDU3I1QzVDNUMzcjNyNUNVQ1VDVUMFQwVDA3I1QwVDA3I1QwVDA3I1QuVC43I1QwVC43JFQwVDA3JFQwVC5UMFQuNyRUMFQwVDBULlQwVDA3IzckNyQ3JVVNVU1VTTclVU1VTTclVi43JjcnNydVTTcoVU1UMDcoVDBVTVQwVU1UMDcoVDBVTTcoVU03KFVNVDBVTVQwVDA3KFQwNyhULlQuVC43KFVNNylVTVYuNylVTVVNVi5WLjcpVi5VTTcpVU1VTVVNVU1ULlVNU0U3KFNFNylYRFhEWEI3KTcpWEQ3KjcrNys3LFhCWEJYRFhEWEI3LFhEWEQ3LFhEWERYRDcsWERYQjcsWEJYQjcsNy1UNVQ1VC9UL1Q0VDRUL1QvVDRUNFQvVC9UNFQ0VC9UL1Q0VDRUL1QvVDRUNDcoWVVZVVlVWTdZNzcoWTdZN1k3WVU3KFk3WTc3KFk3WVVZN1lVWTdYLlguWC5YJjcmNydYJlgmWC5YLlgmWCY3JjcnWCZYJjcnWCZYJlgmWC5YLjcnNyhYLlguWC43KFk0WTRZQDcoNyhZQDcpWUBZNFk0WTQ3KVk0NylZQFlANylZQFlAWUBZNFk0NylZQFk0WTRZQFlAWUBZQFk0WTRZQFlANydZQDcnNyhZNFk0WTQ3KFk0WTQ3KFk0WTRZNFknWSxZJ1knWSdZJ1knNydZJzcnWSdZLFknWSxZJ1ksWSdZLFksWSxZSDclWVVZVTclWVVZVVlVWUhZSFlVWUhZM1kzNyRZLFksNyRZLFksWTNZVVkzWTNZLFksNyNaJlksNyM3JFomNyRaJlksNyU3JVlMWiRaJFlWWVZZTFlMWUxZVjckWVZZTDckWUxZTFlWNyRZVllWNyRZRzclWUdZVjclWVZZRzclNyZZWFlYWU5ZTjcmWU5ZTjcmNydYLllONydZTllHNyc3KFlHWUc3KDcpWUdZRzcpWU5ZTllOWC43KVguWC5ZTllOWC5YLllOWU5ZTjcoNyhYLlguWC5ZTlguNyhYLllOWC5YLlguWC5ZR1lHWUdZR1guWUdZR1lHNyVZRzcmWUc3JllHWC5ZR1lHWUdYLllHNyVYLlguWUdZR1guNyVYLllHWC5ZR1guWC5XT1guWC5YLlguNyNYLlguNyNYJlguWCZYJlgmV0dXPVc9Vz1XR1dHNlk2Wlc9Vz1XM1c9Vj1WPVU+VT5WPVY9VT5VPlY9Vj1VPlU+Vj1WPVU+VT5WPVY9VT5VPlY9Vj1VPlU+Vj1WPVU+VT42UlRMVVQ2UzZTVExUTFRMVj9WP1Y/NlNWP1Y/NlNUTFY/Vj9UTFRMVUdVR1RMNlJUTDZSVExUTFVHVUdUTFVHVjtWOVY7VjlWOTZQVjtWO1Y7Vjs2UFY7VjlWOTZQNlFWOVY5VjlWO1RMNlA2UVVHNlFVR1RMVExVR1VHVExUTFVHVUdUTDZQVUdVR1VHNlA2UDZRVExUTFY7NlFUVVRVVjtWO1RVVFVVS1VLNlA2UVVLVUs2UVVLVUtVS1VQVUtZLlkuNlBZLllJNlBZSVlJNlBZJ1kuWSdZLlkuWS42UFkuWS42UFlJWS5ZLllJWUlZLlkuNk82UDZQWUlZSVlJNlA2UVlJWUk2UTZSWUlZSVkuWS42UlkuWUk2UllJWUlZLlkuWUlZLjZRWS5ZSVkuWS5ZLllJWUlZSTZQWUlZSTZQNlFZSVlJWS5ZLjZRWS5ZSTZRWUk2UllJWS5ZSVkuWS42UVkuNlJZJ1knWS5ZLlknNlFZLlkuWSdZJ1knNlFZJzZRWS5ZLlkuNlE2UlkuNlI2U1kuWS5ZJ1knWS5ZLlknWS5ZLlkuWSdZJ1kuWS42UFknWS5ZJ1knWSc2UFknNlBZLlkuWS5ZJ1knNlBZLlknWSc2UFknWS42UFkuNlFZJ1knNlFZJ1knWSdZJzZRWSdZLFknWSdZLFknWSw2UFknWSc2UDZRWSdZJzZRWSdZLFksWSc2UVksWSxZJ1ksWSc2UFknWSdZJ1knWSdZLFknWSdZLDZPWSc2T1ksWSxZLFksNk9ZLDZPWSw2UFksWSdZLFknWSdZJzZPWSxZLDZPWSxZLFksWSxZJ1ksWSxZLlknWS5ZLlknWSc2TVknWS42TTZOWSdZJ1knWSdZLFknWSxZJzZNWSdZJzZNWSxZJ1ksWSc2TTZNWSw2TlksWSdZJ1knNk42TlksWSxZLFknWSdZJzZONk5ZLFksWSxZLFksNk5ZJzZONk9ZLFksWS5ZLlkuWSdZLlknNk5ZJ1kuNk5ZLjZPWS5ZLjZPNlA2UDZRWSdZJzZRWSdZJ1knWSdZJzZRNlI2UlksWSc2U1ksWSw2U1ksWSc2U1knNlRZLFksNlRZLFknNlRZJzZVNlVZJ1kuNlZZJ1knNlZZJzZWWSc2VzZYNlhZJ1kuWS5ZJzZYWSdZLDZYNllZLFksWUk2WVlJWUlZLlkuNllZLlkuNllZSVlJWS5ZQVkuWS5ZQVlBNlhZQVkuWS5ZLjZYWS5ZLllJWUk2VzZYWUlZSTZYNllZSTZaNlo3I1kuNyQ3JDclWUlZSTclNyZZSVlJWUFZQTcmNydZQVlBNydZSVlBWUFZQTcnWUFZLFksWSxZQTcmWUFZLFksWSw3JlksWUk3JllJWUlZLFksNyZZLFlJNyZZSTcnWSw3J1ksNyhZSTcoWUlZSVlJNyhZSVlJWUk3KFlJWUk3KFksWUlZSTcoWSw3KTcqNyo3K1lJWUlZSVlJNys3LDcsNy1ZSVlJWUlaKVlJWUlaKVopNyxaKVlJNyxZSVopWilaKVopNyxaKVlJWUlZSTcrWik3LFopWilaKVopNyxaKTcsWUlZSTcsWUlZSVlJWilaKVlJWUk3K1lJWUlZSVlJWU1ZSVlJWU1ZTTcqWU1ZSVlJWU03KllJWUlZTVlNWU1ZSVlNWU1ZLFksWSw3KDcoWSxZSVlJWUk3KFlJWSxZSVlJWUk3KDcoWSxZLFksWUlZSTcoWUlZSVksWUlZLDcnWSxZLFksWSxaJjcnWiY3J1omWSxaJlksNydZLFksWSw3J1ksNyhZLFomWSxZLDcnWiY3KFomNyhaJlomWiZaJlomNyhaJjcoWiZZLFksWSxZS1lLWUtZLFksWSw3J1ksWSxZSzcnWSw3J1ksWiZZLFksWSw3J1ksWSxZLDcnNydaJjcoNyk3KVomNypaJllJWUlZSTcqWUlZSVlJWSxZSVlJNylZLFlJNyk3KlksNypZLDcrWSxZSTcrWUlZLDcrWSxZLFksWUlZLFksWSw3KlksNytZLDcrWSxZSVlJWUlZSVlJNytZSTcrWUlZLDcrWSxZSTcsNyxZLFlJNy1ZLFksNy03LlksWSxZLDcuWUk3LlopWilaKTcuWik3L1ksWSw3LzcwWSxZLFopWik3L1opWilaKVksNy9aKVopWSw3L1opWik3L1ksWilaKVksWSxaKVopNy43L1opWilaKVopWSxZLFopWik3LlopWSxZLFopWilZLFksWik3LVksWSw3LVopNy1aI1opNy5aKTcuWik3L1opWik3L1ojWiNaIzcvWiM3L1laWVpZWjcvWVo3MFlaNzBZTVopWilaKVopNzBaKVlNWik3MDcxWilaKTcxWilaKVlNNzFZTVopWilaKVlNWilaKTcwWU03MFlNWU1ZTVlNWilZTTcwWilZTTcwWU1aKVopWU1ZTVopWik3LzcwWSw3MDcxWiNZLDcxWiNaIzcxNzJaI1ojWSw3MlksNzM3M1ojWiNaIzczNzRZLFojNzRaI1ojWiNZTVk/NzRZPzc0WT9ZTVlNWT83NFlNWU03NDc1WU03NllNNzZZTTc3WT9ZP1onNzdZTTc3NzhZPzc4WT9ZTVlNWT9ZP1lNNzhZTTc4WU1ZTTc4WT9ZTTc5WU1ZTTc5Nzo3Olk/WU03O1lNWU1ZTTc7NztZP1k/WT9ZS1lLWiNaI1lLWUtaI1lLWUtaJllLWUtaJlomNzhaJlomWiY3ODc5WiZaJjc5Nzo3Ojc7WUtZSzc7WUtZS1lLNztaJjc8WiY3PFomWUs3PVomWiZZSzc9WUtZS1lLNz1ZSzc9WS1ZLVktNz1ZLVktWUtZS1ojWiNaI1ojWiM3PDc8WTA3PVkwNz03PlkwWTBaI1ojNz5aI1ojNz43P1kwWUtZS1ojWUtZLVktNz5ZLVojWS1aI1ojNz1ZLVojWiNZLVktNz1ZLVojNz1aI1ktWiNZLVojWiNaI1ojWiM3PFojNzxaI1kwWS1ZLVojWTA3O1ktWTBZLVktWS1ZMDc7WTA3O1kwWTA3Ozc8WTBZMDc8Nz1ZMFkwNz1ZLVkwWTA3PVkwWTBZMFktWS03PVktWS1ZLTc9WS1ZLVktWS03PVktNz1ZMFkwWiNaIzc9WiNZP1k/Nz1ZPzc9Nz5ZP1k/WiM3Plk/WT9ZP1kwNz5ZMDc+WTBZP1k/WT9ZP1onNz43PlkwNz83QFonWidaJzdAWidaJ1lQN0BaJ1onWVBaJ1onWidaJzc/Nz9aJ1lQWidZLVktWS03P1ktWS1ZLVkwNz43P1kwWTBZMDc/WTBZMDc/N0BZMFkwWS1ZLVktN0BZLTdAWVlZWVktN0BZLTdBWVlZWTdBN0JZWVlZN0JZWVktWS1ZMFkwN0E3QlkwWTBZMFkwN0I3Q1kwN0NZK1krWTBZMDdDWTBZMFkwWTA3Q1kvWS9ZK1krWS9ZLzdCWS9ZMDdCWTBZL1lFWUVaJlomWiY3QVomWUVZRTdBWTxZPFlFWUVZPFk8WVlZWVlZN0BZWVlZN0A3QTdBWTxZMlkyN0FZMlkvWTJZPFk8WTJZMlk8WTxZMlk8WTI3P1kyWTxZPFk8WTJZPFkyWTxZMlk8WTJZPDc9WTw3PVk8WTJZPDc9WTxZLzc+WS83PlkvWS83Pjc/WTxZL1k8WTxZL1kvNz5ZL1kvWS9ZPFk8WS9ZL1lHWUc3PTc+WUdZR1k8WTxZPFk8Nz1ZPFk8WTxZPFooWTxZPFooWihZPFk8WihaKFk8NzpZPFk8NzpZR1k8WTw3OllHNztZR1lHWUdZPFk8WUdZRzc6NztZR1lHWTxZR1k8WUc3OllHWUdZR1lHNzpaJVkpWSlZKVZUNzlWUVZRNzk3OlZRVlFWTlgoVk5YKFZOVk43OTc6NzpYKFgoWChYJ1czWCdXM1czVzNXMzc5VzM3OVgnWCc3OVgnWCdYJzc5NzpXVVdVVyVXJVdVVyU3OTc6V1VXVTc6WCxXVVdVWCxYLFdVNzpVPlRUVT43OlU+VT5VPlRUVT43OVRUVFRUVVRVVExUTFRVVFVUTFRMVFVUVVUwVTA3Njc3VTBVMFRMVTA3N1UwNzc3OFRMVEw3OFRVVTBVMFRVVFVVMFUwNzc3OFUwVTBUVVRVVTBVMFRVVFU3Nzc4VFVUVVY7VjtUVTc3VFU3ODc4Vjs3OVY7Nzk3OlY7VjtUVVRVVFU3OlRVVFU3Ojc7VFVUVTc7NzxUVVRVNzw3PVRVVFU3PTc+Nz5WOzc/Vjs3P1Y7VjtWO1RVVFVVUFVQNz5VNTc/VTVVNFU0VExVNFUwVVBVMFVQVTBVUFUwVVBVUFVQVTk3PFU5NzxVOVU5Vjs3PFY7Nz1WOzc9Vjs3PlRVVFVUVTc+Nz5WOzc/VjtUVTc/VFU3QFRVVjtUVVY7Nz9WO1RVVjtUVVY7VFVWO1Y7Nz5WOzc/VVBVUDc/N0A3QFVQN0FVUFY7VjtWO1VQN0BVUFVQVVBWO1VQVVBVUFlCNz9ZQlk+Nz9ZQlk+WT5ZQllCNz9ZPllCNz9ZPlk+WT5ZQjc/WUJZPjc/WT5ZQllCWUJZQllJWUI3PllCWUJZSVlJWUJZSVk+WUJZQllCWUlZSVkoWShZSVlJWUk3O1lJWUlZQllCWUlZQjc6WUk3OllJWUlZSVlCWUlZQllJWUlZSVlCWUJZSVlJWUJZQllJWUlZQllJWUlZSTc2NzdZSVlJNzdZSVlNWU1ZSTc3WUk3N1lJNzhZSVlJWUZZSVlNWU03N1lNNzdZTVlJWU1ZTVlNWU03N1lNNzdZTVlNWU1ZTTc3WU83N1lNWU9ZTVlPWU83Nzc4NzhZTVlNWU03OFlQWidaJ1lQWVA3OFlQNzhZUFonWVBZUFlQWidZUFlQWVBaJzc3WidZUFonWidaJ1lKWic3Njc2WUpaJ1lKWVA3NllQWStZV1lXWVc3NllTWVNZV1lTWVc3NTc2WVM3NlkvWSs3Nzc3WS9ZK1krWS9ZL1krWStZL1kvWStZL1lUNzU3NlkvNzZZL1lUWVRZL1kvWVRZVFkvWS9ZLzc1NzVZVFlUWVRZL1kvNzU3Njc2WVRZVFlUWS9ZLzc2WS9ZVFkvWVRZVDc1WVRZVFlUWTlZOTc1WTlZKlk5WSpZKlkqWSpZKjc0WSo3NFkqWSpZOVk5WTlYI1k5NzNYI1gjNzNYI1gjWCNWV1ZXWCM3M1ZXNzM3NFgjNzRWV1gjVldYIzc0WCNYIzc0NzVYI1gjWC9WV1gvWC9WV1ZXVlc3NFZXVlc3NDc1VlNXU1ZTNzVWU1ZTVlM3NVZTNzVWU1ZTNzVXU1dTVyxXU1dTNzVXU1dTV1NWU1dTV1NXUzc0NzU3NTc2VlNWU1dTV1NWU1dTV1BWTldQV1A3NFZOV1A3NVZOVk43NVdZNzVXWVdZV1lWTlZONzU3NlZONzZXWVdZNzZXWVdZV1lWTlZONzY3N1ZONzdXWVdZNzc3OFdZV1lWTldZV1lXWVcjNzdXI1dZV1k3N1dZV1k3Nzc4V1lXWVcjV1lXWVdZVyNXWVdZV1lWTlZOVyNXI1ZOVk43NVZOVyNWTlcjVyNWTlZOVk43NDc0V1k3NVdZV1k3NVcsVyw3NVdZVyxXLFdZV1lXLFcsV1lXWVdZNzRXWTc0V1lXWVdZV1lXLFcsV1lXWTczNzRXWVdZNzRXLFdZV1lXLFcsV1lXWVdZNzNXWVdZNzM3NFdZV1k3NDc1NzVXWVcsVyxXWTc1V1k3NldZV1lXLFcsVyNXI1dZNzVXI1cjNzVXWVcsVyw3NTc2VyxXLFcsNzY3NldZV1lXWTc2V1lXWVdZVyw3NlcsVyw3NldZVyxXLFdZV1lXLFdZV1lXWTc1V1lXWVdZV1k3NVdZV1lXI1cjVyxXLFcjVyM3M1cjVyNXIzczNzRXLFcsNzQ3NVcsVyw3NVcsVyxXLFcsVyxXI1cjVyNXI1cjNzRXI1csNzRXLFcsVyxXLFcjV1lXWTczV1lXLFcsVyxXI1dZV1lXI1cjNzFXI1cjVyM3MTcyV1lXWVcjNzI3Mzc0V1lXWVdZVyNXI1dZV1lXWTcyV1lXWVdZV1M3MldTNzNXLFcsNzNXU1csVyw3Mzc0VyNXWVcjV1lXWTczV1lXI1cjVyNXIzczVyNXI1dZVyNXWTcyV1lXWTcyV1lXWVdZV1lXI1dZV1lXWVdZNzE3MldZV1k3MlcjNzJXI1cjVyNXI1cjV1lXWVcjVyM3MVcjVyNXIzcxNzI3MlcjV1lXWVcjVyNXIzcyVyNXIzcyNzM3M1cjV1k3NDc0NzVXWVdZV1lXWVcjV1lXWVdZV1k3NFdZV1lXWTc0V1k3NDc1VyNXWVdZV1k3NTc1NzZXI1cjNzY3N1cjVyM3N1cjVyNXI1dZV1lXWTc3V1k3Nzc4VyM3OFcjVyNXI1dZV1lXI1dZV1lXWVcjVyNXWVdZNzY3Nzc3VyNXI1cjVyM3N1cjVyNXWTc3NzhXI1dZNzhXWTc5NzlXIzc6VyNWTlZOVyNXI1ZOVk5XI1cjVk5WTlcjNzhXIzc4VyNXIzc4Vk5XI1cjVk5XI1cjVyNXVVdVV1U3N1dVV1U3N1dVV1VXVVdVNzdXVVdVNzdXTTc3V01XTVdNV01XTTc3V01XVVdNV01XTVdVNzZXTVdNV01XTVdUNzZXVDc2V1RXVFdNV01XTTc2NzY3N1dUV1RXTVdNV003N1dNNzc3OFdUNzhXVFdUV1RXTVdNV003OFdNNzhXVFdUNzhXVFdUV1Q3OFdUV1RXVFdVNzhXTVdNV1VXTTc4NzlXTTc5V003OldNV01XTTc6V01XTTc6NztXVDc7V1RXVFU+VVlVPlVZVT43OlU+NztVPlU+VT43O1U+NztVPlU+VT5VWVVZVVlVPlU+Nzo3O1U+VT43O1Y6VT5VPlY6VjpVPlU+VjpWOlU+NzlWOlY6VT5VPjc5VjpVPlU+VjpWOlU+VT5WOlY6VT43N1Y6Vjo3N1U+VjpWOlU+NzdVWVVZNzdVPlVZVVk3Nzc4VVlVWVY6VVlWOjc4VjpVWTc4VS9VWVVZNzg3OVVZVVlVWVRUVVlVWVRUVFQ3N1RUVFRUVFVZNzdVL1UvNzc3OFUvVS83OFUvVS9VL1UvNzhVL1UvNzg3OVUvVS9UVFRUVVVVVVRUVFRVVVVVVFRUVDc3VFRVVTc3VVVVVVVVNzdVVVVVNzdUVFVVNzhUVFRUNzhUVFVVVFRVVVVVVVBVUDc3VVBUTFVQNzdVUDc3WUJZPllCWT5ZQlk+Nzc3Nzc4Uzo3OTc5NzpTOlM6Uzo3Ojc7UztTMFMwNzs3PDc8UzBTOlM6Vy1XLTc8Nz1XLTc9Nz5XRlctVy03PlctV0ZXLVdGV0ZZOVk5Vyg3PTc9VyhXKFcoWTlZOVcoNz1ZOVk5Nz1ZOVctVy1XRlctVy1XLVdGV0ZXKFcoNzs3PFcoVyg3PDc9Vlo3PVZaVyg3PVcoVyhXKFZaVlpWWlcoVlpWWlZaVyhWWlc2VlpXNlc2VzZXNlcvVzY3OVc2VzZXKFcoNzlXKDc5VyhXNlcoVk83OVZPVk9XKFcoNzlXKFZPVyhWT1coVzZXNlcuNzhXLlcuNzhXNlcuVy5XLlc2VzZXNlcvVy9XNlcvVy9XL1c2VzZXNjc1VzZWT1c2Vk83NDc1VyhXKFcoVlVXKFZVVyg3NFcoVlU3NFcoVyhXKFk5WTlZOTc0VlU3NFZVVlVZOVk5VlVZOVgjNzNYI1gjNzM3NFgjWCNWVVZVNzQ3NTc1WCNWVVZVNzVYIzc2WCNYI1gjVlVYI1ZVNzU3NlgjWCNYI1ZVWCNYI1gjNzU3NlgjWCNYIzc2WCNYI1ZVVlVYI1gjVlU3NTc1WCNWVVgjVlVYI1ZVVlU3NDc1VlVWVVZVVlVXQFdAWCNYIzc0WCNYI1gjVlVYI1ZVNzNWVTc0VlNWU1gjVlNYIzczWCNYI1ZTVlM3M1ZTWCNYI1gjNzM3M1ZTVlNWU1c3NzNXN1c3NzNXU1c3V1NXNzczVzdXNzczNzRXN1c3NzQ3NVc3NzY3NlcsVzc3N1csVyw3N1csNzdXLFc3NzhXLFcsNzhXLFc3NzhXN1c3NzhXLFc3VyxXN1c3VyxXN1csVzdXLFcsVzdXOVc3VzlXNzc1VzdXN1c5Vzk3NVc5NzVXOVc3VzdXNzc1VzlXOTc1NzZXN1c3VzlXOVc3VzdXOVc5NzVXOTc1VzlXN1c5VzdXNzc1Vzk3NVc5VzlXOVc3VzlXN1c5NzRXOVc5VzlXN1c5VzdXNzczVzxXPFc8VzlXOVc5NzM3M1c8VzxXPDczVzxXOVc5VzlXPFc5VzlXOVc5Vzk3Mlc5NzJXPFc8VzlXPFc8VzxXOVc5Vzk3MVc5VzlXOVc8Vzk3MFc5Vzk3MFRMVVU3MVRNNzE3MlVMNzJVTDczNzQ3NFRMVUU3NVVFNzVVRVVFVExUTDc1VEw3NVRMVUU3NlVFVExVRTc2VExUTDc2VEw3NlRMVExUTFRMVExVRTc2NzY3N1VFNzhVRTc4VUVVRTc4VEw3OVRMVUU3OVVFVUU3OTc6VUVVRVRMVVBUTDc6VEw3OlVQVVA3OlgjVlVWVVgjWCM3Ojc7VytXK1crNztXK1dFVytXKzc6V0U3O1dFV0VXRTc7NzxXRVdFNzw3PVdFV0U3PVcrV0VXK1crVytXRTc8V0VXK1c5Vzk3PFc5WCM3PFgjVzlXPDc8Vzw3PVc8VzpXPFc6NzxXOlc8Vzw3PFdVVzo3PVcpVzxXKTc9VzxXPDc9Vzw3PVc8VzxXPFc8Vzw3PVc8Vyk3PVcpNz43Plc8VzxXPFdVNz43PzdAV1VXVVdVN0BXVVdVV1U3QFdVN0BXMVcxN0BXMVcxVzFXVVdVV1VXWFdVV1hXWFdYNz5VSVVJVUlVTFVMNz43P1VMNz83QFVJVEhUSFRBVEFUSFRIVEFUSFQrVCtVQ1VDVUNVQ1VDNz1VQ1VDNz1VQ1NBNz1TQVNaWC1YLVgtNz03PVZYVlhWWDc9WCpWWFZYWCpYKjc9WCo3PVgqWCpYKlgqWCo3PVgqWCpYKlgqNz1YKlgqNz03PlgqVlhYKlZYWCpYKlZYWCpWWDc8VlhWWFgqWCo3PFgqVlg3PFZYNz1WWFgqVlhYKldVVzFXVVcxV1VXVVdVNztXVTc7V1U3PFdVNzxXVVdVV0FXQTc8V0FXVTc8VzFXMTc8VzFXMVcxNzxUSTc9VEk3PVRJVERUSTc9UzRTNFM0U1g3PVNANz43PlNYU0A3P1NANz9TQFNAU0A3P1NAU0BTWFNYNz9TWFNANz9TQFNAVEQ3P1REN0BTLlNNUy5TLlMuU01TLlMuU01TTTc+Nz9TTVNNNz9TTVMuU01TLlNNU003PlNNU01TTVNNU003Pjc+Nz9UJFQkVCRTSzc/U0tUJDc/VCQ3QFQkN0BUJDdBVCQ3QTdCU0tUJFNLU0tTSzdBU0tUJFNLUzNTMzdBN0JTM1MzU0pTSlMzUzNTMzdBN0FTM1NPN0JTM1NPUzNTTzdBU09TT1NPU083QTdCU0c3QlNHU09TT1NPU0dTT1NHU083QVNPU083QVNPU09TT1NHU0dTV1NXVz5XPlc+V1ZXPlc+Vz43P1dWNz9XVldWNz9XVldWV1ZXPlc+Nz9XPldWNz9XVldWVz5XPjc/N0BXPlc+V1ZXVlc+V1ZXPldWVyRXJFckVz9XJFc/Vz9XPzc8VSNULVUjU0pTSlNKNzxTSjc8U0pTSlM3Uzc3PDc9Uzc3PTc+U0pTT1NPU083PlNHU0c3PlNHU083PlNPU0c3PlNJU0lTSVNJU0k3PlNJU0lTSVNPU0lTT1M4U09TOFNPUzhTT1M4U0c3O1NHNzxTSVNJU0lTOFM4UzhTOFM+U0lTSVM+Uz5TSVNJUz5TPlM+NzhTPlM+NzhTV1M+NzlTPlM+Uz5TV1YkVFBWJDc4ViRUUFYkVFBWKFYoVig3Nzc3VUBUPTc4VihWKFQ9VD1WKFYoNzdUPVYoNzc3OFQ9VUBVQDc4VUBTUFNPU1A3OFNQNzhTUFNQNzhTT1NQU1BTUDc4U1BTUFM+Uz5TUFNQUz5TPjc3Uz5TUDc3U1BTUFNQUzZTUFNQUzZTNlNSUzZTNlM2UzZTUlNSU1I3NFNSNzQ3NVNSU1JTNlM2NzU3NlM2NzZTUlNSVTxVPFU8NzZVPFU8NzZVPFU8VEdUR1RHVDtUR1Q7VEc3NDc1NzZWLlNENzZTRFNEU1BTUDc2U1BTNlM2UzY3NlNSU1I3NlNSU0VTRFNFU0VULzc1VC83Njc2VDA3N1QwNzdUMFQvVDBUMFQwVDA3N1QwNzdUMFQwVDBUO1QwNzdUMDc3VDBUMFQ7VDs3N1Q7VDBUO1QwVDA3Njc3VDBUMFQ7VDs3N1Q7VDA3N1QwVDtUOzc3VDs3OFQ7VEdUO1Q7VDtUO1Q7Nzc3N1YuNzhWLjc4Vi43OTc6Vi5WLjc6Vi5UMFQwVDtUMFQwVDA3OVYuNzlWLlYuVi5UMFQwNzlWLlQwVDBUMFYuNzhWLlYuVi5UO1Q7Nzg3OVQ7VDs3OVQ7VDA3OVQwVDBUMFQwNzlWLlNFU0VTU1NTU0VTRVNFU1NTRVNFNzc3OFNFNzhTRVNTWDtYOzc4NzlYO1g7Nzk3OlQ1NzpUNVQ1VDNUMzc6Nzs3Ozc8VDVUNVQ1VDNUNVQzVDVUM1Q1VDVUM1QzNzpUM1Q1NzpUNVQ1VDBUMFQ3VDdUMFQwVDdUN1QwVC5ULlQuVC5UMFQuVC43Njc3VC5ULlQwVDA3N1QwVC43N1QuVC5VTVVNVDBVTVYuVi5VTVYuVDA3NVQwVU1VTVYuVU1VTVVNVi5VTTc0Vi5WLjc0Vi5VTTc0VU1VTVYuVi5VTVYuVDBVTVQwVU03MlVNNzNVTTczNzRVTVVNNzRVTVQwNzVUMFQwVDBVTVQwVU1UMFQwNzNULlQuVC5UMFQwNzNUMDczVU1UMFVNVDBVTTczVU1WLlYuVU03MzczVi5VTTc0NzQ3NVVNVU1TU1NTU0U3NVNFU1NTU1NTNzRYQlhCWEJYRFhENzRYRDc0NzVYQlhCNzVYRDc2WEQ3NlhEWEJYQlhEWEJYQlhCWERYRFhCNzVYRFhENzU3NlhEWEQ3NlhENzY3N1hCWEI3Nzc4VDVUNVQuVC5UNVQuWVVZN1lVWVVZVVk3WVVZVVk3WTdZVVlVWTdZN1lVWTdYLlguWCZYJlguWC5YJlgmWCZYLlgmWCZYLlguWCZYJlguWCZYJlgmWC5YLlgmWCZYLlguWCZYJlguWC5YLlgmWTRZNFlAWUBZNFlAWTRZQFk0WUBZQFlAWTRZNFlAWUBZNFk0WUBZQFk0WUBZQFlAWTRZQFlAWUBZNFlAWTRZNFlAWUBZNFk0WUBZQFk0WTRZNFlAWTRZNFlAWUBZNFk0WSdZLFknWSxZJ1ksWSdZLFlIWUhZVVlVWUhZSFlVWVVZM1kzWSxZLFksWTNZLFksWSxZLFksWiZaJlomWSxaJlksWSxZLFomWiZaJlksWiZaJlomWSxaJllMWUxaJFokWUxZVllMWVZZVllWWUxZTFlWWUdZVllWWUdZR1lWWUdZVllWWVZZR1lWWVZZVllHWU5ZTllYWVhZTllOWVhZTllYWVhZWFlOWU5ZTlguWC5ZTllOWU5YLllOWUdZTllOWUdZTllHWUdZTllOWUdZR1lHWU5ZR1lHWU5ZTllHWUdZTllOWU5ZR1lOWU5YLlguWU5YLlguWC5ZTllOWC5YLllOWC5ZTlguWUdZR1lHWC5ZR1guWUdYLllHWUdZR1guWUdZR1guWC5YLllHWC5ZR1guWC5YLlgmWC5YJlgmWCZXR1dHVz1XPVdHV0dXPVc9VVRUTFVUVVRVVFRMVVRVVFVUVExVVFRMVj9WP1Y/VExWP1Y/VExUTFVHVUdUTFVHVExVR1RMVExWOVY7VjlWO1Y5VjlWOVY7VjlWOVY7VjtWOVY5VjtWO1RMVUdVR1VHVExVR1VHVUdVR1VHVExVR1VHVUdUTFVHVUdVR1VHVFVVR1VHVExUTFVHVFVUTFRMVjtWO1RVVjtVS1VLVUtVUFVLVUtVUFVQVUtVS1VQVVBZLlkuWUlZLlkuWS5ZSVkuWS5ZJ1kuWS5ZLlkuWUlZSVkuWUlZSVlJWS5ZLllJWUlZLlkuWUlZSVkuWUlZSVlJWS5ZLllJWS5ZLlkuWS5ZSVkuWS5ZSVlJWS5ZLllJWS5ZLlkuWUlZLlkuWS5ZSVkuWUlZSVlJWS5ZLlkuWUlZSVkuWS5ZSVlJWS5ZLllJWS5ZLlkuWUlZSVkuWS5ZSVkuWUlZLllJWS5ZJ1knWS5ZJ1kuWSdZLlknWSdZJ1kuWS5ZJ1knWS5ZLlknWS5ZLlkuWSdZJ1kuWS5ZJ1kuWS5ZLlknWSdZLlkuWSdZJ1kuWS5ZJ1knWS5ZJ1kuWSdZLlknWS5ZJ1kuWS5ZJ1knWS5ZLlkuWSdZLlkuWS5ZJ1kuWSdZLlknWS5ZLlknWSdZLlknWSdZJ1ksWSxZLFknWSxZLFknWSdZLFksWSdZJ1ksWSxZJ1knWSxZLFksWSxZJ1knWSdZLFknWSxZJ1knWSxZLFknWSdZJ1ksWSxZLFknWSdZJ1ksWSdZJ1knWSxZLFksWSdZJ1ksWSxZJ1knWSxZLFknWSdZLlkuWS5ZJ1knWSdZLlknWS5ZLlknWSxZJ1knWSdZJ1knWSxZJ1ksWSdZJ1ksWSxZJ1ksWSdZLFknWSxZJ1knWSxZLFknWSxZJ1ksWSdZLFksWSxZJ1ksWSxZLFksWSdZJ1knWSdZJ1ksWSxZJ1ksWSxZLFkuWS5ZLlknWS5ZJ1kuWS5ZLlkuWS5ZJ1kuWS5ZLlknWS5ZJ1knWSdZLlknWS5ZJ1kuWSdZJ1knWSdZJ1kuWSdZJ1knWSdZLFknWSxZLFksWSdZLFknWSdZJ1ksWSdZLFksWSxZLFknWSdZLFksWSxZJ1ksWSdZJ1ksWSxZJ1ksWSdZLFknWSxZJ1ksWSdZLFkuWSdZLlknWSdZJ1kuWS5ZJ1knWS5ZJ1kuWSdZLlknWSdZJ1kuWS5ZJ1knWS5ZLlknWSdZJ1kuWSdZJ1knWSxZJ1ksWSxZLFknWSxZLFksWS5ZLllJWUlZSVkuWUlZSVkuWS5ZSVlJWS5ZLlkuWUFZLllBWS5ZLlkuWS5ZLllJWS5ZLllJWUlZLlkuWUlZQVkuWUFZQVlBWUlZQVlJWUFZQVlBWS5ZLllBWUFZLllBWS5ZQVkuWUFZQVlBWUlZSVlBWUFZSVlJWUFZQVlJWUlZQVlBWUlZQVlBWUFZQVlJWUFZQVlJWUFZQVlBWUlZSVlBWSxZQVksWUFZLFlBWSxZLFksWUlZSVlJWSxZSVlJWUlZLFlJWSxZSVksWUlZLFksWSxZSVlJWSxZSVksWSxZLFksWSxZSVksWUlZSVlJWSxZSVlJWUlZLFksWUlZSVksWSxZSVlJWSxZLFlJWSxZSVksWUlZSVksWUlZSVlJWUlZLFlJWUlZLFksWUlZLFlJWUlZSVopWUlZSVopWilaKVopWilZSVopWilaKVlJWUlaKVopWilZSVopWUlaKVopWilaKVlJWUlaKVlJWilZSVlJWilaKVopWilaKVlJWilaKVopWUlaKVlJWUlZSVopWilZSVlJWUlZTVlJWU1ZTVlJWU1ZTVksWSxZSVksWSxZLFlJWUlZSVksWUlZSVlJWSxZSVksWUlZLFksWSxZSVlJWSxZLFksWSxZSVksWSxaJlomWiZZLFomWSxaJlksWiZZLFomWSxaJlksWiZZLFksWSxaJlksWSxZLFomWSxaJlomWiZaJlomWSxaJlksWiZZLFomWSxaJlksWSxZLFomWSxaJllLWSxZS1lLWSxaJlomWiZZLFomWiZaJlksWSxZLFomWSxZLFksWiZaJlomWUtZS1omWiZZS1lLWSxZLFksWiZZLFomWiZaJllJWUlZSVksWUlZLFksWSxZSVksWSxZLFlJWSxZSVksWUlZLFlJWSxZSVksWUlZLFlJWUlZSVksWUlZLFksWSxZSVksWUlZLFlJWSxZSVksWUlZLFlJWSxZSVlJWUlZLFlJWSxZLFksWUlZLFlJWSxZLFksWUlZLFlJWSxZSVksWSxZLFopWSxZLFksWSxaKVksWSxaKVopWSxZLFopWSxZSVlJWilaKVopWilZLFksWilZLFopWilZLFksWilaKVksWilaKVopWSxaKVopWilZLFksWSxaKVksWSxZLFopWSxZLFopWSxZLFksWSxaKVksWSxaKVopWilaKVkxWTFZLFksWilaKVksWSxaKVopWilaI1opWiNaI1ojWilaI1opWiNaKVojWilaI1opWiNaKVojWiNaI1laWiNZWlojWilZWllaWVpZWllaWilZWlopWVpaKVopWilaKVlNWilZTVopWU1ZTVlNWilZTVlNWilaKVlNWU1aKVopWU1ZTVopWU1aKVlNWilaKVopWU1aKVlNWU1ZTVlNWilZTVlNWilaKVopWU1aKVopWU1ZTVopWU1ZTVlNWSxZLFksWiNZLFksWSxaI1ksWSxaI1ojWSxZLFksWiNZLFksWiNaI1ksWiNZLFksWSxaI1ojWiNZLFojWiNaI1ksWSxZLFojWSxZLFojWiNZLFojWiNaI1lNWT9ZP1k/WU1ZP1lNWU1ZP1k/WT9ZTVk/WT9ZTVlNWT9ZP1lNWT9ZTVk/WU1ZP1lNWU1ZTVk/WU1ZP1lNWU1aJ1k/WidaJ1lNWT9ZP1k/WU1ZP1k/WT9ZP1k/WU1ZTVlNWT9ZTVlNWU1ZP1lNWU1ZP1k/WU1ZTVlNWT9ZTVlNWU1ZTVk/WT9ZTVlNWT9ZTVk/WT9ZTVk/WT9ZP1lNWU1ZTVk/WT9ZP1lNWU1ZTVk/WiZaJllLWiZaJlomWUtZS1omWiZZS1lLWiZaJllLWUtaJlomWUtaJllLWiZZS1lLWiZaJllLWUtaJlomWUtZS1lLWUtZS1omWiZaJllLWiZZS1omWUtZS1omWiZZS1omWiZaJllLWUtZS1lLWS1ZS1lLWUtZS1ktWS1ZS1ktWS1aI1ojWTBZMFojWiNaI1kwWiNZMFkwWTBaI1ojWTBZMFojWiNZMFkwWiNaI1kwWTBaI1kwWiNZMFojWTBZMFkwWiNZLVojWS1aI1ktWiNaI1ojWS1aI1ojWiNZLVktWS1aI1ojWiNZMFojWiNaI1kwWTBZLVkwWTBZMFktWTBZMFkwWS1ZMFkwWS1ZLVkwWTBZLVktWTBZMFktWS1ZMFkwWS1ZLVkwWTBZLVktWS1ZMFktWS1ZMFkwWS1ZLVkwWS1ZLVktWS1ZMFktWS1ZMFkwWS1ZMFkwWTBaI1ojWiNZP1k/WT9aI1ojWiNaI1k/WT9aI1ojWT9ZP1ojWT9aI1k/WT9ZMFkwWTBZMFkwWT9ZMFk/WidaJ1onWTBaJ1onWidaJ1kwWTBZMFkwWTBaJ1kwWidaJ1onWVBZUFonWVBZUFlQWVBZUFonWidaJ1lQWVBZLVktWTBZMFktWS1ZLVkwWS1ZLVkwWTBZMFktWTBZMFktWS1ZMFkwWS1ZMFkwWTBZLVktWS1ZWVktWS1ZWVlZWS1ZWVktWVlZLVlZWS1ZLVlZWVlZMFkwWVlZMFkwWTBZMFlZWTBZMFktWS1ZMFkwWS1ZMFkwWTBZMFkwWTBZK1kwWTBZK1krWTBZK1krWStZMFkwWStZK1kwWTBZMFkvWStZL1krWStZMFkwWTBZL1lFWUVaJllFWUVZRVk8WTxZWVlZWS9ZL1lZWVlZL1kvWVlZL1kvWS9ZPFk8WTJZMlkyWTJZL1kyWTJZPFkyWTJZMlk8WTxZPFkyWTxZMlk8WTxZPFkvWS9ZL1k8WS9ZPFkvWTxZL1kvWTxZPFk8WS9ZPFk8WS9ZL1k8WS9ZL1kvWTxZR1k8WTxZR1lHWTxZR1k8WTxaKFooWUdZR1k8WTxZR1lHWTxZR1k8WUdZPFlHWTxZPFk8WUdZR1lHWTxZR1lHWUdZPFk8WUdZR1k8WUdZR1lHWiVaJVZUVlRWVFZRVlRWVFZRVlFWVFZRVlFWUVZOVk5YKFgoVk5YKFgoWChWTlZOVk5YKFczVzNXM1gnVzNXM1gnWCdXM1czWCdYJ1clVyVXVVdVVyVXJVdVVyVXVVgsV1VXVVgsWCxXVVdVWCxYLFdVV1VXVVgsV1VYLFU+VFRVPlRUVT5UVFRUVFRUVVRVVTBVMFRVVFVVMFUwVExVMFRMVTBUTFUwVExUTFUwVTBUTFRMVFVUVVUwVTBUVVRVVTBVMFRVVFVVMFUwVFVUVVRVVjtUVVRVVjtWO1RVVFVUVVY7VFVWO1Y7VjtUVVY7VFVWO1RVVjtUVVY7VFVUVVRVVjtUVVRVVjtWO1RVVFVUVVVQVFVUVVVQVVBUVVRVVVBVUFRVVFVVUFVQVFVUVVVQVVBUVVRVVVBVUFRVVFVVUFVQVFVUVVVQVVBUVVRVVVBVUFRVVjtUVVY7VFVWO1RVVjtUVVRVVFVWO1RMVExUTFU1VExVNVU1VTVVUFVQVTlVOVVQVVBVOVU5VjtVUFY7VVBWO1VQVjtVUFY7VVBWO1Y7VjtWO1Y7VVBUVVY7VjtWO1RVVjtUVVY7VFVUVVRVVjtUVVRVVFVWO1RVVjtWO1Y7VFVUVVRVVjtWO1VQVjtVUFVQVVBWO1Y7VVBVUFY7VjtVUFVQVjtVUFY7VVBWO1VQVjtVUFY7VVBWO1Y7VVBVUFlCWUJZQlk+WUJZQlk+WT5ZQllCWUJZPllCWUJZQlk+WT5ZQllCWUJZPllCWUJZQllJWUlZQllCWUlZSVlJWUJZQllJWUJZSVlJWUlZQllJWUlZSVlCWUJZSVlJWUJZQllJWUlZQllCWU1ZTVlJWU1ZSVlJWUlZRllGWUZZSVlGWU1ZTVlJWU1ZSVlNWUlZTVlNWU1ZTVlPWU1ZT1lNWU9ZTVlNWU9ZT1lNWU1ZT1lPWU9ZT1lNWU1ZT1lPWU1ZTVlPWU9ZT1lNWVBZUFonWidZUFlQWidZUFonWVBaJ1onWVBZUFonWVBaJ1lKWidZSllKWUpaJ1lKWVBZK1krWStZV1lXWVNZU1lXWVNZV1lTWVdZU1lTWVNZL1kvWStZL1kvWS9ZK1kvWStZL1krWStZVFlUWS9ZL1lUWVRZVFkvWS9ZL1lUWVRZL1lUWVRZVFkvWS9ZVFlUWS9ZL1kvWVRZL1lUWVRZVFkvWVRZVFlUWS9ZL1kvWVRZL1lUWVRZVFk5WTlZKlk5WSpZOVkqWSpZKlkqWSpZOVk5WTlYI1gjWTlYI1gjWCNWV1ZXWCNWV1ZXVldWV1gjVldWV1gjWCNWV1ZXWCNYI1ZXVldYI1gjVldWV1gjWCNWV1ZXWCNYI1ZXVldYI1gjVldWV1gjWCNWV1ZXWCNYI1dTV1NWU1ZTVlNXU1ZTV1NWU1dTVlNXU1dTV1NXU1csV1NXU1ZTVlNWU1dTVlNWU1dTV1NWU1dTVlNXU1ZTVlNXU1dTVlNXU1ZOVk5XUFZOVk5WTldQV1BWTlZOVk5XWVZOV1lXWVdZVk5WTlZOV1lWTldZV1lXWVZOVk5WTldZVk5XWVZOVk5XWVZOV1lXWVZOVk5XWVdZVk5WTldZV1lWTlZOV1lXWVZOVk5XWVdZVyNXWVdZV1lXWVcjV1lXWVcjVyNXWVdZVyNXWVdZV1lWTlZOVyNWTlZOVk5XWVdZVk5XWVZOV1lWTldZV1lXWVdZV1lXLFcsV1lXWVcsV1lXWVdZV1lXLFcsVyxXWVcsV1lXWVcsVyxXWVdZVyxXLFdZVyxXLFcsV1lXLFdZV1lXWVdZVyxXLFdZV1lXLFcsV1lXWVcsVyxXWVdZVyxXLFdZV1lXLFcsVyxXLFdZVyxXLFcsV1lXLFcjVyNXWVdZVyNXWVdZV1lXLFcsVyxXWVcsV1lXWVdZVyxXWVdZV1lXLFcsVyxXWVcsV1lXWVdZV1lXWVcsVyxXWVdZVyxXLFdZV1lXLFdZV1lXWVcjVyNXLFcsVyNXI1csV1lXLFcsV1lXWVcsVyxXWVdZVyxXLFdZVyxXLFcsVyxXWVcsVyxXI1cjVyNXLFcjVyxXLFcsV1lXWVdZVyxXI1dZVyNXWVcjVyNXWVdZVyNXI1dZVyNXI1dZVyNXWVcjV1lXI1cjV1lXWVcjV1lXWVcjV1lXWVdTV1NXU1csVyxXLFdTV1NXLFcsV1NXU1csVyxXN1c3VyxXLFc3VzdXWVcjV1lXI1cjVyNXWVdZV1lXI1dZV1lXI1dZV1lXWVdZVyNXI1cjVyNXWVcjV1lXWVdZV1lXI1dZV1lXI1cjV1lXI1dZV1lXWVcjV1lXWVcjVyNXWVcjV1lXI1dZV1lXI1cjV1lXWVcjVyNXWVdZVyNXI1dZV1lXI1cjV1lXI1dZVyNXWVdZVyNXI1cjV1lXI1dZV1lXWVdZV1lXWVcjV1lXWVcjVyNXWVdZVyNXI1dZV1lXI1cjV1lXI1dZVyNXWVdZV1lXI1dZV1lXI1cjV1lXWVcjV1lXI1cjV1lXI1dZVyNXI1cjV1lXWVdZVyNXWVdZVyNXI1dZVyNXI1cjV1lXWVcjVyNXWVdZV1lXI1dZV1lXI1cjV1lXI1dZVyNXWVdZVyNXI1dZVyNXI1cjV1lXI1cjVyNXI1cjV1lXWVdZV1lXI1cjVyNXI1dZV1lXWVdZVyNXI1cjVk5XI1cjVk5WTlcjVyNWTlZOVyNWTldVV1VXTVdNV01XTVdNV1VXVVdVV1VXTVdVV1VXVVdNV1VXVVdVV01XVVdNV1VXVVdVV1VXTVdNV01XTVdUV1RXTVdNV1RXVFdNV1RXTVdUV01XTVdNV1RXTVdUV1RXVFdNV01XVFdNV01XTVdUV1RXTVdUV1RXVFdNV01XVFdUV01XVFdUV1RXTVdNV01XVFdNV01XVFdUV01XVFdUV1RXVVdVV01XTVdVV01XTVdNV01XVVdNV01XTVdUV01XTVdNV1RXTVdUV01XTVdUV01XTVdNV01XVFdNV01XVFdUV01XVFdUV1RVWVVZVT5VWVU+VVlVPlVZVT5VWVVZVVlVPlVZVT5VPlU+VT5WOlY6VT5VPlY6VjpVPlU+VjpWOlU+VT5WOlY6VT5VPlY6VjpVPlU+VT5WOlU+VT5WOlY6VT5VPlVZVVlVPlU+VVlVWVU+VT5VWVVZVT5VWVVZVVlWOlVZVjpVWVY6VjpVL1UvVS9VWVUvVS9VWVVZVS9VL1VZVVlVWVRUVVlVWVUvVS9VWVVZVS9VL1VZVVlVL1UvVVlVWVUvVS9VWVVZVS9VL1VZVVlVL1UvVVlVWVUvVS9UVFRUVVVUVFRUVVVVVVVVVVVUVFVVVVVUVFRUVVVUVFRUVFRVVVRUVVVUVFVVVVVVUFVQVExVUFRMVExVUFVQWT5ZQlk+WUJZPllCWT5ZQlM6UztTOlM7UzpTOlM7UztTO1M7UzpTOlM6UzpTO1M6UzpTOlM7UzpTOlM6UztTOlM6UztTOlM6UzpTMFM6UzpTMFMwUzpTMFMwUzBTOlMwVy1XLVdGV0ZXLVdGV0ZXRlctVy1XLVdGV0ZXLVdGV0ZXRlctV0ZXLVk5WTlXKFcoWTlZOVk5VyhXKFk5VyhXKFcoWTlXKFcoVyhXKFZaVlpXKFcoVlpXKFcoVyhXKFZaVyhXKFZaVyhWWlZaVyhWWlZaVyhWWlcoVzZXKFc2VzZXNlcoVzZXKFc2VyhXNlc2Vk9XKFZPVyhXKFcoVk9XKFc2VzZXLlc2Vy5XLlcuVzZXNlc2VzZWT1k5WTlXKFk5WTlZOVcoVyhXKFcoVyhWVVk5WTlXKFcoWTlWVVk5VlVZOVk5VlVZOVgjVlVYI1gjVlVWVVgjWCNWVVZVWCNYI1ZVVlVWVVgjVlVYI1gjWCNYI1gjVlVYI1ZVVlVWVVgjWCNYI1ZVWCNWVVZVVlVYI1ZVVlVYI1gjVlVYI1ZVVlVYI1gjVlVYI1gjVlVWVVZVVlVYI1ZVVlVWVVgjVlVYI1gjWCNYI1ZVWCNYI1ZVVlVWVVgjVlVWVVZVWCNWVVgjVlVYI1ZVWCNYI1ZTWCNYI1ZTVlNYI1ZTWCNYI1gjVlNYI1ZTVlNWU1c3V1NXN1c3V1NXU1c3V1NXU1dTVzdXU1dTV1NXU1c3V1NXU1c3VzdXN1csVzdXN1csVyxXN1csVzdXLFc3VzdXLFcsVzdXLFc3VyxXN1c3VyxXLFc3VyxXN1csVzdXN1c3VyxXN1c3VyxXLFc3VyxXN1csVzdXN1csVyxXN1csVzdXOVc3VzdXN1c5VzdXOVc3VzlXN1c3VzdXOVc5VzlXOVc5VzdXN1c5VzlXN1c5VzlXOVc3VzlXN1c5VzdXOVc3VzdXN1c5VzdXN1c3VzlXN1c5VzlXOVc5VzlXOVc8VzlXOVc8VzxXOVc5VzlXPFc5VzxXOVc8VzlXPFc8VzxXOVc5VzlXPFc5VzlXOVc8VzlXPFc5VzxUTFRMVVVUTFRMVExVVVRMVE1VTFRNVUxUTVRNVE1VTFVMVUxUTVVMVE1VTFRNVE1VTFVMVE1VTFVFVExVRVVFVUVUTFVFVExUTFRMVUVUTFRMVExVRVRMVUVUTFVFVUVVRVRMVExUTFRMVExVRVVFVExUTFVFVExVRVRMVExUTFVFVExVRVRMVExUTFVFVUVUTFRMVUVUTFVFVExVRVVFVExUTFVFVExUTFRMVUVUTFVFVExVRVVFVUVUTFVFVUVUTFRMVUVVRVRMVExVRVRMVExVUFRMVVBUTFVQVVBVUFgjWCNWVVZVWCNYI1ZVVlVYI1gjVlVYI1crVytXK1dFVytXK1crV0VXK1dFV0VXRVcrV0VXK1crV0VXRVcrV0VXRVdFVytXK1dFV0VXK1crV0VXK1dFVytXK1crV0VXK1gjVzlYI1gjWCNXOVc5VzlXPFc8VzxXOlc8VzpXOlc6VzxXOlc8VzpXVVdVVzpXOlc6V1VXOlc6VylXPFcpVylXKVc8VylXPFcpVylXKVc8VzxXPFcpVylXKVcpVylXPFcpVzxXKVc8VylXKVc8VylXVVgtWC1YLVdVV1VYLVgtV1VYLVgtWC1XVVdVVzFXVVdVVzFXMVcxV1VXVVdVVzFXVVcxVzFXMVQ+VUlVSVVJVUlVTFVJVUlVTFVMVUlVTFVMVUxVSVVJVUxVSVVMVUlVQ1VDVT9VP1VDVUNVP1U/U0FTWlNBU1pYLVgtWC1WWFgtVlhYLVZYWCpYKlZYVlhWWFgqVlhYKlZYWCpWWFgqWCpYKlgqVlhYKlgqWCpWWFgqWCpWWFZYWCpWWFZYVlhWWFgqVlhWWFZYWCpWWFZYWCpYKlZYWCpWWFgqVlhYKldVV1VXVVdBV1VXQVdBV0FXVVdBV1VXQVdVV1VXVVdBV0FXQVdVV0FXVVdVV1VXMVdVVzFXMVcxVERUSVRJVElUSVRJVERUSVREVElURFREUzRTPVM0UzRTWFNYU1hTQFNYU1hTQFNAU1hTWFNAU0BTWFNYU0BTWFNYU1hTQFNYU1hTWFNAU0BTQFNYU0BTQFNAU1hTQFNYVERUSVREVElURFRJVERUSVNNU01TLlMuU01TTVMuUy5TTVNNUy5TLlNNVCRTTVNNU01UJFNNU01TTVNNU01UJFNNU01UJFQkVCRUJFQkU0tUJFQkVCRTS1QkU0tUJFNLVCRTS1QkU0tUJFNLVCRUJFQkU0tTS1NLVCRTS1QkU0tUJFNLVCRTS1MzU0pTSlNKU0pTM1NKU0pTM1NPUzNTT1MzUzNTT1NPU09TM1NPU09TM1NPUzNTT1NPU0dTR1NHU09TT1NPU0dTT1NHU09TT1NPU0dTT1NPU0dTR1NPU09XPlc+V1ZXVlc+Vz5XVldWVz5XVldWV1ZXPlc+V1ZXPldWVz5XVldWV1ZXPldWV1ZXPldWV1ZXVlQtVSNULVUjU0pTN1NKUzdTSlM3U0pTSlM3UzdTN1NKUzdTN1NKU0pTN1M3UzdTSlM3UzdTSlNKU09TR1NPU0dTT1NHU0dTR1NPU0dTT1NHU09TT1NPU0lTSVNJU09TSVNHU0dTR1NJU0dTSVNHU0lTPlNXUz5TPlNXU1dTPlNXU1dTV1M+Uz5WJFRQVFBUUFYoVihWKFQ9VD1WKFQ9VD1UPVVAVD1UPVYoVihUPVQ9VihUPVQ9VD1WKFYoVD1UPVVAVUBUPVQ9U09TT1NQU09TUFNPU1BTUFNPU09TT1NQU09TUFNQU1BTPlM+U1BTPlNQUz5TUFNQUzZTNlM2U1JTUlM2U1JTUlM2UzZTNlNSUzZTNlM2U1JTNlM2U1JTUlM2UzZTUlNSVTxVPFU8VDFVPFU8VDFVPFRQVFBUUFYuVFBUUFYuVi5UUFYuVi5WLlNQU1BTRFNQU0RTUFNEU1BTNlNSUzZTNlNEU1JTRFNSVC9UL1QwVDBUL1QwVC9UL1QvVC9UMFQwVDBUMFQvVDBUL1QwVC9UMFQwVDBUO1Q7VDBUO1QwVDBUO1Q7VDBUO1QwVDtUMFQwVDBUO1QwVDtUMFQ7VDBUMFQ7VDtUMFQ7VDtUO1QwVDtUO1Q7VDBUO1RHVEdUO1RHVDtUR1Q7VDtUO1YuVDtUO1YuVi5UO1YuVDtWLlQ7Vi5UO1YuVDtWLlQ7Vi5UO1QwVi5WLlQwVDBWLlYuVDBWLlQwVDBWLlYuVDBWLlYuVi5UMFQwVDBWLlQwVi5WLlYuVDtUO1QwVDBUO1Q7VDBUMFQ7VDtUMFQ7VDtUO1QwVDtUMFYuVi5WLlNFU0VTRVNTU0VTU1NTU1NTRVNTU0VTU1g7WERYRFhEWERYO1hEWERYO1g7WERYRFg7WERYRFhEVDNUM1Q1VDNUNVQzVDVUNVQzVDNUNVQzVDNUM1Q1VDNUM1QzVDVUNVQzVDNUNVQ1VDNUM1Q1VDVULlQwVC5ULlQwVDBULlQwVC5UMFQuVC5ULlQwVC5ULlVNVU1UMFVNVU1WLlVNVU1WLlVNVU1VTVYuVi5VTVYuVDBVTVQwVU1UMFQwVDBVTVQwVDBUMFVNVDBVTVVNVU1UMFVNVDBUMFQwVU1UMFQwVDBUMFQuVC5ULlQwVC5ULlQwVU1UMFVNVDBVTVVNVU1VTVYuVU1WLlYuVi5VTVVNVU1WLlVNVU1VTVYuVU1VTVYuVi5VTVVNU0VTU1NTU1NYRFhEWEJYQlhEWERYQlhEWEJYRFhCWERYRFhEWEJYRFhEWERYQlhEWEJYRFhCWEJYRFhEWEJYRFhCWERYQlhCWERYRFhCWEJYRFhEWEJYRFhEWERYQlhEWEJYRFhCWEJYRFhEWEJYQlQ1VC5UNVQ1VC5ULlQ1VDVcIixUPVtcIkFmcmljYS9BYmlkamFuXCIsXCJBZnJpY2EvQWNjcmFcIixcIkFmcmljYS9BZGRpc19BYmFiYVwiLFwiQWZyaWNhL0FsZ2llcnNcIixcIkFmcmljYS9Bc21hcmFcIixcIkFmcmljYS9CYW1ha29cIixcIkFmcmljYS9CYW5ndWlcIixcIkFmcmljYS9CYW5qdWxcIixcIkFmcmljYS9CaXNzYXVcIixcIkFmcmljYS9CbGFudHlyZVwiLFwiQWZyaWNhL0JyYXp6YXZpbGxlXCIsXCJBZnJpY2EvQnVqdW1idXJhXCIsXCJBZnJpY2EvQ2Fpcm9cIixcIkFmcmljYS9DYXNhYmxhbmNhXCIsXCJBZnJpY2EvQ2V1dGFcIixcIkFmcmljYS9Db25ha3J5XCIsXCJBZnJpY2EvRGFrYXJcIixcIkFmcmljYS9EYXJfZXNfU2FsYWFtXCIsXCJBZnJpY2EvRGppYm91dGlcIixcIkFmcmljYS9Eb3VhbGFcIixcIkFmcmljYS9FbF9BYWl1blwiLFwiQWZyaWNhL0ZyZWV0b3duXCIsXCJBZnJpY2EvR2Fib3JvbmVcIixcIkFmcmljYS9IYXJhcmVcIixcIkFmcmljYS9Kb2hhbm5lc2J1cmdcIixcIkFmcmljYS9KdWJhXCIsXCJBZnJpY2EvS2FtcGFsYVwiLFwiQWZyaWNhL0toYXJ0b3VtXCIsXCJBZnJpY2EvS2lnYWxpXCIsXCJBZnJpY2EvS2luc2hhc2FcIixcIkFmcmljYS9MYWdvc1wiLFwiQWZyaWNhL0xpYnJldmlsbGVcIixcIkFmcmljYS9Mb21lXCIsXCJBZnJpY2EvTHVhbmRhXCIsXCJBZnJpY2EvTHVidW1iYXNoaVwiLFwiQWZyaWNhL0x1c2FrYVwiLFwiQWZyaWNhL01hbGFib1wiLFwiQWZyaWNhL01hcHV0b1wiLFwiQWZyaWNhL01hc2VydVwiLFwiQWZyaWNhL01iYWJhbmVcIixcIkFmcmljYS9Nb2dhZGlzaHVcIixcIkFmcmljYS9Nb25yb3ZpYVwiLFwiQWZyaWNhL05haXJvYmlcIixcIkFmcmljYS9OZGphbWVuYVwiLFwiQWZyaWNhL05pYW1leVwiLFwiQWZyaWNhL05vdWFrY2hvdHRcIixcIkFmcmljYS9PdWFnYWRvdWdvdVwiLFwiQWZyaWNhL1BvcnRvLU5vdm9cIixcIkFmcmljYS9TYW9fVG9tZVwiLFwiQWZyaWNhL1RyaXBvbGlcIixcIkFmcmljYS9UdW5pc1wiLFwiQWZyaWNhL1dpbmRob2VrXCIsXCJBbWVyaWNhL0FkYWtcIixcIkFtZXJpY2EvQW5jaG9yYWdlXCIsXCJBbWVyaWNhL0FuZ3VpbGxhXCIsXCJBbWVyaWNhL0FudGlndWFcIixcIkFtZXJpY2EvQXJhZ3VhaW5hXCIsXCJBbWVyaWNhL0FyZ2VudGluYS9CdWVub3NfQWlyZXNcIixcIkFtZXJpY2EvQXJnZW50aW5hL0NhdGFtYXJjYVwiLFwiQW1lcmljYS9BcmdlbnRpbmEvQ29yZG9iYVwiLFwiQW1lcmljYS9BcmdlbnRpbmEvSnVqdXlcIixcIkFtZXJpY2EvQXJnZW50aW5hL0xhX1Jpb2phXCIsXCJBbWVyaWNhL0FyZ2VudGluYS9NZW5kb3phXCIsXCJBbWVyaWNhL0FyZ2VudGluYS9SaW9fR2FsbGVnb3NcIixcIkFtZXJpY2EvQXJnZW50aW5hL1NhbHRhXCIsXCJBbWVyaWNhL0FyZ2VudGluYS9TYW5fSnVhblwiLFwiQW1lcmljYS9BcmdlbnRpbmEvU2FuX0x1aXNcIixcIkFtZXJpY2EvQXJnZW50aW5hL1R1Y3VtYW5cIixcIkFtZXJpY2EvQXJnZW50aW5hL1VzaHVhaWFcIixcIkFtZXJpY2EvQXJ1YmFcIixcIkFtZXJpY2EvQXN1bmNpb25cIixcIkFtZXJpY2EvQXRpa29rYW5cIixcIkFtZXJpY2EvQmFoaWFcIixcIkFtZXJpY2EvQmFoaWFfQmFuZGVyYXNcIixcIkFtZXJpY2EvQmFyYmFkb3NcIixcIkFtZXJpY2EvQmVsZW1cIixcIkFtZXJpY2EvQmVsaXplXCIsXCJBbWVyaWNhL0JsYW5jLVNhYmxvblwiLFwiQW1lcmljYS9Cb2FfVmlzdGFcIixcIkFtZXJpY2EvQm9nb3RhXCIsXCJBbWVyaWNhL0JvaXNlXCIsXCJBbWVyaWNhL0NhbWJyaWRnZV9CYXlcIixcIkFtZXJpY2EvQ2FtcG9fR3JhbmRlXCIsXCJBbWVyaWNhL0NhbmN1blwiLFwiQW1lcmljYS9DYXJhY2FzXCIsXCJBbWVyaWNhL0NheWVubmVcIixcIkFtZXJpY2EvQ2F5bWFuXCIsXCJBbWVyaWNhL0NoaWNhZ29cIixcIkFtZXJpY2EvQ2hpaHVhaHVhXCIsXCJBbWVyaWNhL0Nvc3RhX1JpY2FcIixcIkFtZXJpY2EvQ3Jlc3RvblwiLFwiQW1lcmljYS9DdWlhYmFcIixcIkFtZXJpY2EvQ3VyYWNhb1wiLFwiQW1lcmljYS9EYW5tYXJrc2hhdm5cIixcIkFtZXJpY2EvRGF3c29uX0NyZWVrXCIsXCJBbWVyaWNhL0RlbnZlclwiLFwiQW1lcmljYS9EZXRyb2l0XCIsXCJBbWVyaWNhL0RvbWluaWNhXCIsXCJBbWVyaWNhL0VkbW9udG9uXCIsXCJBbWVyaWNhL0VpcnVuZXBlXCIsXCJBbWVyaWNhL0VsX1NhbHZhZG9yXCIsXCJBbWVyaWNhL0ZvcnRfTmVsc29uXCIsXCJBbWVyaWNhL0ZvcnRhbGV6YVwiLFwiQW1lcmljYS9HbGFjZV9CYXlcIixcIkFtZXJpY2EvR29kdGhhYlwiLFwiQW1lcmljYS9Hb29zZV9CYXlcIixcIkFtZXJpY2EvR3JhbmRfVHVya1wiLFwiQW1lcmljYS9HcmVuYWRhXCIsXCJBbWVyaWNhL0d1YWRlbG91cGVcIixcIkFtZXJpY2EvR3VhdGVtYWxhXCIsXCJBbWVyaWNhL0d1YXlhcXVpbFwiLFwiQW1lcmljYS9HdXlhbmFcIixcIkFtZXJpY2EvSGFsaWZheFwiLFwiQW1lcmljYS9IYXZhbmFcIixcIkFtZXJpY2EvSGVybW9zaWxsb1wiLFwiQW1lcmljYS9JbmRpYW5hL0luZGlhbmFwb2xpc1wiLFwiQW1lcmljYS9JbmRpYW5hL0tub3hcIixcIkFtZXJpY2EvSW5kaWFuYS9NYXJlbmdvXCIsXCJBbWVyaWNhL0luZGlhbmEvUGV0ZXJzYnVyZ1wiLFwiQW1lcmljYS9JbmRpYW5hL1RlbGxfQ2l0eVwiLFwiQW1lcmljYS9JbmRpYW5hL1ZpbmNlbm5lc1wiLFwiQW1lcmljYS9JcWFsdWl0XCIsXCJBbWVyaWNhL0phbWFpY2FcIixcIkFtZXJpY2EvSnVuZWF1XCIsXCJBbWVyaWNhL0tlbnR1Y2t5L0xvdWlzdmlsbGVcIixcIkFtZXJpY2EvS2VudHVja3kvTW9udGljZWxsb1wiLFwiQW1lcmljYS9LcmFsZW5kaWprXCIsXCJBbWVyaWNhL0xhX1BhelwiLFwiQW1lcmljYS9MaW1hXCIsXCJBbWVyaWNhL0xvc19BbmdlbGVzXCIsXCJBbWVyaWNhL0xvd2VyX1ByaW5jZXNcIixcIkFtZXJpY2EvTWFjZWlvXCIsXCJBbWVyaWNhL01hbmFndWFcIixcIkFtZXJpY2EvTWFuYXVzXCIsXCJBbWVyaWNhL01hcmlnb3RcIixcIkFtZXJpY2EvTWFydGluaXF1ZVwiLFwiQW1lcmljYS9NYXRhbW9yb3NcIixcIkFtZXJpY2EvTWF6YXRsYW5cIixcIkFtZXJpY2EvTWVub21pbmVlXCIsXCJBbWVyaWNhL01lcmlkYVwiLFwiQW1lcmljYS9NZXhpY29fQ2l0eVwiLFwiQW1lcmljYS9NaXF1ZWxvblwiLFwiQW1lcmljYS9Nb25jdG9uXCIsXCJBbWVyaWNhL01vbnRlcnJleVwiLFwiQW1lcmljYS9Nb250ZXZpZGVvXCIsXCJBbWVyaWNhL01vbnRzZXJyYXRcIixcIkFtZXJpY2EvTmFzc2F1XCIsXCJBbWVyaWNhL05ld19Zb3JrXCIsXCJBbWVyaWNhL05vbWVcIixcIkFtZXJpY2EvTm9yb25oYVwiLFwiQW1lcmljYS9Ob3J0aF9EYWtvdGEvQmV1bGFoXCIsXCJBbWVyaWNhL05vcnRoX0Rha290YS9OZXdfU2FsZW1cIixcIkFtZXJpY2EvT2ppbmFnYVwiLFwiQW1lcmljYS9QYW5hbWFcIixcIkFtZXJpY2EvUGFuZ25pcnR1bmdcIixcIkFtZXJpY2EvUGFyYW1hcmlib1wiLFwiQW1lcmljYS9QaG9lbml4XCIsXCJBbWVyaWNhL1BvcnQtYXUtUHJpbmNlXCIsXCJBbWVyaWNhL1BvcnRfb2ZfU3BhaW5cIixcIkFtZXJpY2EvUG9ydG9fVmVsaG9cIixcIkFtZXJpY2EvUHVlcnRvX1JpY29cIixcIkFtZXJpY2EvUHVudGFfQXJlbmFzXCIsXCJBbWVyaWNhL1Jhbmtpbl9JbmxldFwiLFwiQW1lcmljYS9SZWNpZmVcIixcIkFtZXJpY2EvUmVnaW5hXCIsXCJBbWVyaWNhL1Jpb19CcmFuY29cIixcIkFtZXJpY2EvU2FudGFyZW1cIixcIkFtZXJpY2EvU2FudGlhZ29cIixcIkFtZXJpY2EvU2FudG9fRG9taW5nb1wiLFwiQW1lcmljYS9TYW9fUGF1bG9cIixcIkFtZXJpY2EvU2NvcmVzYnlzdW5kXCIsXCJBbWVyaWNhL1NpdGthXCIsXCJBbWVyaWNhL1N0X0JhcnRoZWxlbXlcIixcIkFtZXJpY2EvU3RfSm9obnNcIixcIkFtZXJpY2EvU3RfS2l0dHNcIixcIkFtZXJpY2EvU3RfTHVjaWFcIixcIkFtZXJpY2EvU3RfVGhvbWFzXCIsXCJBbWVyaWNhL1N0X1ZpbmNlbnRcIixcIkFtZXJpY2EvVGVndWNpZ2FscGFcIixcIkFtZXJpY2EvVGh1bGVcIixcIkFtZXJpY2EvVGh1bmRlcl9CYXlcIixcIkFtZXJpY2EvVGlqdWFuYVwiLFwiQW1lcmljYS9Ub3JvbnRvXCIsXCJBbWVyaWNhL1RvcnRvbGFcIixcIkFtZXJpY2EvVmFuY291dmVyXCIsXCJBbWVyaWNhL1doaXRlaG9yc2VcIixcIkFtZXJpY2EvV2lubmlwZWdcIixcIkFtZXJpY2EvWWFrdXRhdFwiLFwiQW1lcmljYS9ZZWxsb3drbmlmZVwiLFwiQW50YXJjdGljYS9DYXNleVwiLFwiQW50YXJjdGljYS9EYXZpc1wiLFwiQW50YXJjdGljYS9EdW1vbnREVXJ2aWxsZVwiLFwiQW50YXJjdGljYS9NYWNxdWFyaWVcIixcIkFudGFyY3RpY2EvTWF3c29uXCIsXCJBbnRhcmN0aWNhL01jTXVyZG9cIixcIkFudGFyY3RpY2EvUm90aGVyYVwiLFwiQW50YXJjdGljYS9TeW93YVwiLFwiQW50YXJjdGljYS9Ucm9sbFwiLFwiQW50YXJjdGljYS9Wb3N0b2tcIixcIkFyY3RpYy9Mb25neWVhcmJ5ZW5cIixcIkFzaWEvQWRlblwiLFwiQXNpYS9BbG1hdHlcIixcIkFzaWEvQW1tYW5cIixcIkFzaWEvQW5hZHlyXCIsXCJBc2lhL0FxdGF1XCIsXCJBc2lhL0FxdG9iZVwiLFwiQXNpYS9Bc2hnYWJhdFwiLFwiQXNpYS9BdHlyYXVcIixcIkFzaWEvQmFnaGRhZFwiLFwiQXNpYS9CYWhyYWluXCIsXCJBc2lhL0Jha3VcIixcIkFzaWEvQmFuZ2tva1wiLFwiQXNpYS9CYXJuYXVsXCIsXCJBc2lhL0JlaXJ1dFwiLFwiQXNpYS9CaXNoa2VrXCIsXCJBc2lhL0JydW5laVwiLFwiQXNpYS9DaGl0YVwiLFwiQXNpYS9DaG9pYmFsc2FuXCIsXCJBc2lhL0NvbG9tYm9cIixcIkFzaWEvRGFtYXNjdXNcIixcIkFzaWEvRGhha2FcIixcIkFzaWEvRGlsaVwiLFwiQXNpYS9EdWJhaVwiLFwiQXNpYS9EdXNoYW5iZVwiLFwiQXNpYS9GYW1hZ3VzdGFcIixcIkFzaWEvR2F6YVwiLFwiQXNpYS9IZWJyb25cIixcIkFzaWEvSG9fQ2hpX01pbmhcIixcIkFzaWEvSG9uZ19Lb25nXCIsXCJBc2lhL0hvdmRcIixcIkFzaWEvSXJrdXRza1wiLFwiQXNpYS9KYWthcnRhXCIsXCJBc2lhL0pheWFwdXJhXCIsXCJBc2lhL0plcnVzYWxlbVwiLFwiQXNpYS9LYWJ1bFwiLFwiQXNpYS9LYW1jaGF0a2FcIixcIkFzaWEvS2FyYWNoaVwiLFwiQXNpYS9LYXRobWFuZHVcIixcIkFzaWEvS2hhbmR5Z2FcIixcIkFzaWEvS29sa2F0YVwiLFwiQXNpYS9LcmFzbm95YXJza1wiLFwiQXNpYS9LdWFsYV9MdW1wdXJcIixcIkFzaWEvS3VjaGluZ1wiLFwiQXNpYS9LdXdhaXRcIixcIkFzaWEvTWFjYXVcIixcIkFzaWEvTWFnYWRhblwiLFwiQXNpYS9NYWthc3NhclwiLFwiQXNpYS9NYW5pbGFcIixcIkFzaWEvTXVzY2F0XCIsXCJBc2lhL05pY29zaWFcIixcIkFzaWEvTm92b2t1em5ldHNrXCIsXCJBc2lhL05vdm9zaWJpcnNrXCIsXCJBc2lhL09tc2tcIixcIkFzaWEvT3JhbFwiLFwiQXNpYS9QaG5vbV9QZW5oXCIsXCJBc2lhL1BvbnRpYW5ha1wiLFwiQXNpYS9QeW9uZ3lhbmdcIixcIkFzaWEvUWF0YXJcIixcIkFzaWEvUW9zdGFuYXlcIixcIkFzaWEvUXl6eWxvcmRhXCIsXCJBc2lhL1JpeWFkaFwiLFwiQXNpYS9TYWtoYWxpblwiLFwiQXNpYS9TYW1hcmthbmRcIixcIkFzaWEvU2VvdWxcIixcIkFzaWEvU2hhbmdoYWlcIixcIkFzaWEvU2luZ2Fwb3JlXCIsXCJBc2lhL1NyZWRuZWtvbHltc2tcIixcIkFzaWEvVGFpcGVpXCIsXCJBc2lhL1Rhc2hrZW50XCIsXCJBc2lhL1RiaWxpc2lcIixcIkFzaWEvVGVocmFuXCIsXCJBc2lhL1RoaW1waHVcIixcIkFzaWEvVG9reW9cIixcIkFzaWEvVG9tc2tcIixcIkFzaWEvVWxhYW5iYWF0YXJcIixcIkFzaWEvVXJ1bXFpXCIsXCJBc2lhL1VzdC1OZXJhXCIsXCJBc2lhL1ZpZW50aWFuZVwiLFwiQXNpYS9WbGFkaXZvc3Rva1wiLFwiQXNpYS9ZYWt1dHNrXCIsXCJBc2lhL1lhbmdvblwiLFwiQXNpYS9ZZWthdGVyaW5idXJnXCIsXCJBc2lhL1llcmV2YW5cIixcIkF0bGFudGljL0F6b3Jlc1wiLFwiQXRsYW50aWMvQmVybXVkYVwiLFwiQXRsYW50aWMvQ2FuYXJ5XCIsXCJBdGxhbnRpYy9DYXBlX1ZlcmRlXCIsXCJBdGxhbnRpYy9GYXJvZVwiLFwiQXRsYW50aWMvTWFkZWlyYVwiLFwiQXRsYW50aWMvUmV5a2phdmlrXCIsXCJBdGxhbnRpYy9Tb3V0aF9HZW9yZ2lhXCIsXCJBdGxhbnRpYy9TdF9IZWxlbmFcIixcIkF0bGFudGljL1N0YW5sZXlcIixcIkF1c3RyYWxpYS9BZGVsYWlkZVwiLFwiQXVzdHJhbGlhL0JyaXNiYW5lXCIsXCJBdXN0cmFsaWEvQnJva2VuX0hpbGxcIixcIkF1c3RyYWxpYS9DdXJyaWVcIixcIkF1c3RyYWxpYS9EYXJ3aW5cIixcIkF1c3RyYWxpYS9FdWNsYVwiLFwiQXVzdHJhbGlhL0hvYmFydFwiLFwiQXVzdHJhbGlhL0xvcmRfSG93ZVwiLFwiQXVzdHJhbGlhL01lbGJvdXJuZVwiLFwiQXVzdHJhbGlhL1BlcnRoXCIsXCJBdXN0cmFsaWEvU3lkbmV5XCIsXCJFdGMvR01UXCIsXCJFdGMvR01UKzFcIixcIkV0Yy9HTVQrMTBcIixcIkV0Yy9HTVQrMTFcIixcIkV0Yy9HTVQrMTJcIixcIkV0Yy9HTVQrMlwiLFwiRXRjL0dNVCszXCIsXCJFdGMvR01UKzRcIixcIkV0Yy9HTVQrNVwiLFwiRXRjL0dNVCs2XCIsXCJFdGMvR01UKzdcIixcIkV0Yy9HTVQrOFwiLFwiRXRjL0dNVCs5XCIsXCJFdGMvR01ULTFcIixcIkV0Yy9HTVQtMTBcIixcIkV0Yy9HTVQtMTFcIixcIkV0Yy9HTVQtMTJcIixcIkV0Yy9HTVQtMlwiLFwiRXRjL0dNVC0zXCIsXCJFdGMvR01ULTRcIixcIkV0Yy9HTVQtNVwiLFwiRXRjL0dNVC02XCIsXCJFdGMvR01ULTdcIixcIkV0Yy9HTVQtOFwiLFwiRXRjL0dNVC05XCIsXCJFdGMvVVRDXCIsXCJFdXJvcGUvQW1zdGVyZGFtXCIsXCJFdXJvcGUvQW5kb3JyYVwiLFwiRXVyb3BlL0FzdHJha2hhblwiLFwiRXVyb3BlL0F0aGVuc1wiLFwiRXVyb3BlL0JlbGdyYWRlXCIsXCJFdXJvcGUvQmVybGluXCIsXCJFdXJvcGUvQnJhdGlzbGF2YVwiLFwiRXVyb3BlL0JydXNzZWxzXCIsXCJFdXJvcGUvQnVjaGFyZXN0XCIsXCJFdXJvcGUvQnVkYXBlc3RcIixcIkV1cm9wZS9CdXNpbmdlblwiLFwiRXVyb3BlL0NoaXNpbmF1XCIsXCJFdXJvcGUvQ29wZW5oYWdlblwiLFwiRXVyb3BlL0R1YmxpblwiLFwiRXVyb3BlL0dpYnJhbHRhclwiLFwiRXVyb3BlL0d1ZXJuc2V5XCIsXCJFdXJvcGUvSGVsc2lua2lcIixcIkV1cm9wZS9Jc2xlX29mX01hblwiLFwiRXVyb3BlL0lzdGFuYnVsXCIsXCJFdXJvcGUvSmVyc2V5XCIsXCJFdXJvcGUvS2FsaW5pbmdyYWRcIixcIkV1cm9wZS9LaWV2XCIsXCJFdXJvcGUvS2lyb3ZcIixcIkV1cm9wZS9MaXNib25cIixcIkV1cm9wZS9ManVibGphbmFcIixcIkV1cm9wZS9Mb25kb25cIixcIkV1cm9wZS9MdXhlbWJvdXJnXCIsXCJFdXJvcGUvTWFkcmlkXCIsXCJFdXJvcGUvTWFsdGFcIixcIkV1cm9wZS9NYXJpZWhhbW5cIixcIkV1cm9wZS9NaW5za1wiLFwiRXVyb3BlL01vbmFjb1wiLFwiRXVyb3BlL01vc2Nvd1wiLFwiRXVyb3BlL09zbG9cIixcIkV1cm9wZS9QYXJpc1wiLFwiRXVyb3BlL1BvZGdvcmljYVwiLFwiRXVyb3BlL1ByYWd1ZVwiLFwiRXVyb3BlL1JpZ2FcIixcIkV1cm9wZS9Sb21lXCIsXCJFdXJvcGUvU2FtYXJhXCIsXCJFdXJvcGUvU2FuX01hcmlub1wiLFwiRXVyb3BlL1NhcmFqZXZvXCIsXCJFdXJvcGUvU2FyYXRvdlwiLFwiRXVyb3BlL1NpbWZlcm9wb2xcIixcIkV1cm9wZS9Ta29wamVcIixcIkV1cm9wZS9Tb2ZpYVwiLFwiRXVyb3BlL1N0b2NraG9sbVwiLFwiRXVyb3BlL1RhbGxpbm5cIixcIkV1cm9wZS9UaXJhbmVcIixcIkV1cm9wZS9VbHlhbm92c2tcIixcIkV1cm9wZS9Vemhnb3JvZFwiLFwiRXVyb3BlL1ZhZHV6XCIsXCJFdXJvcGUvVmllbm5hXCIsXCJFdXJvcGUvVmlsbml1c1wiLFwiRXVyb3BlL1ZvbGdvZ3JhZFwiLFwiRXVyb3BlL1dhcnNhd1wiLFwiRXVyb3BlL1phZ3JlYlwiLFwiRXVyb3BlL1phcG9yb3poeWVcIixcIkV1cm9wZS9adXJpY2hcIixcIkluZGlhbi9BbnRhbmFuYXJpdm9cIixcIkluZGlhbi9DaGFnb3NcIixcIkluZGlhbi9DaHJpc3RtYXNcIixcIkluZGlhbi9Db2Nvc1wiLFwiSW5kaWFuL0NvbW9yb1wiLFwiSW5kaWFuL0tlcmd1ZWxlblwiLFwiSW5kaWFuL01haGVcIixcIkluZGlhbi9NYWxkaXZlc1wiLFwiSW5kaWFuL01hdXJpdGl1c1wiLFwiSW5kaWFuL01heW90dGVcIixcIkluZGlhbi9SZXVuaW9uXCIsXCJQYWNpZmljL0FwaWFcIixcIlBhY2lmaWMvQXVja2xhbmRcIixcIlBhY2lmaWMvQm91Z2FpbnZpbGxlXCIsXCJQYWNpZmljL0NoYXRoYW1cIixcIlBhY2lmaWMvQ2h1dWtcIixcIlBhY2lmaWMvRWFzdGVyXCIsXCJQYWNpZmljL0VmYXRlXCIsXCJQYWNpZmljL0VuZGVyYnVyeVwiLFwiUGFjaWZpYy9GYWthb2ZvXCIsXCJQYWNpZmljL0ZpamlcIixcIlBhY2lmaWMvRnVuYWZ1dGlcIixcIlBhY2lmaWMvR2FsYXBhZ29zXCIsXCJQYWNpZmljL0dhbWJpZXJcIixcIlBhY2lmaWMvR3VhZGFsY2FuYWxcIixcIlBhY2lmaWMvR3VhbVwiLFwiUGFjaWZpYy9Ib25vbHVsdVwiLFwiUGFjaWZpYy9LaXJpdGltYXRpXCIsXCJQYWNpZmljL0tvc3JhZVwiLFwiUGFjaWZpYy9Ld2FqYWxlaW5cIixcIlBhY2lmaWMvTWFqdXJvXCIsXCJQYWNpZmljL01hcnF1ZXNhc1wiLFwiUGFjaWZpYy9NaWR3YXlcIixcIlBhY2lmaWMvTmF1cnVcIixcIlBhY2lmaWMvTml1ZVwiLFwiUGFjaWZpYy9Ob3Jmb2xrXCIsXCJQYWNpZmljL05vdW1lYVwiLFwiUGFjaWZpYy9QYWdvX1BhZ29cIixcIlBhY2lmaWMvUGFsYXVcIixcIlBhY2lmaWMvUGl0Y2Fpcm5cIixcIlBhY2lmaWMvUG9obnBlaVwiLFwiUGFjaWZpYy9Qb3J0X01vcmVzYnlcIixcIlBhY2lmaWMvUmFyb3RvbmdhXCIsXCJQYWNpZmljL1NhaXBhblwiLFwiUGFjaWZpYy9UYWhpdGlcIixcIlBhY2lmaWMvVGFyYXdhXCIsXCJQYWNpZmljL1RvbmdhdGFwdVwiLFwiUGFjaWZpYy9XYWtlXCIsXCJQYWNpZmljL1dhbGxpc1wiXTtpZihXPStXLCEoLTkwPD0oWT0rWSkmJlk8PTkwJiYtMTgwPD1XJiZXPD0xODApKXRocm93IG5ldyBSYW5nZUVycm9yKFwiaW52YWxpZCBjb29yZGluYXRlc1wiKTtpZig5MDw9WSlyZXR1cm5cIkV0Yy9HTVRcIjt2YXIgUz0tMSxWPTQ4KigxODArVykvMzYwLjAwMDAwMDAwMDAwMDA2LFg9MjQqKDkwLVkpLzE4MC4wMDAwMDAwMDAwMDAwMyxaPTB8VixNPTB8WCxHPTk2Kk0rMipaO2ZvcihHPTU2KlUuY2hhckNvZGVBdChHKStVLmNoYXJDb2RlQXQoRysxKS0xOTk1O0crVC5sZW5ndGg8MzEzNjspRz01NipVLmNoYXJDb2RlQXQoRz04KihTPVMrRysxKSs0KihNPTB8KFg9MiooWC1NKSUyKSkrMiooWj0wfChWPTIqKFYtWiklMikpKzIzMDQpK1UuY2hhckNvZGVBdChHKzEpLTE5OTU7cmV0dXJuIFRbRytULmxlbmd0aC0zMTM2XX1cInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlJiYobW9kdWxlLmV4cG9ydHM9dHpsb29rdXApO1xuIiwiaW1wb3J0IGJ1aWxkRWxlbWVudHNUcmVlIGZyb20gJy4vYnVpbGRFbGVtZW50c1RyZWUnO1xuaW1wb3J0IGZ1bGxQYW5lbFRlbXBsYXRlIGZyb20gJy4vZnVsbFBhbmVsVGVtcGxhdGUnO1xuaW1wb3J0IGhvdXJseVRlbXBsYXRlIGZyb20gJy4vaG91cmx5VGVtcGxhdGUnO1xuaW1wb3J0IGRhaWx5VGVtcGxhdGUgZnJvbSAnLi9kYWlseVRlbXBsYXRlJztcbmltcG9ydCBjdXJyZW50VGVtcGxhdGUgZnJvbSAnLi9jdXJyZW50VGVtcGxhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZERpc3BsYXkoZGF0YSwgc2V0dGluZ3MpIHtcbiAgY29uc3QgY3VycmVudCA9IGJ1aWxkRWxlbWVudHNUcmVlKGN1cnJlbnRUZW1wbGF0ZShmdWxsUGFuZWxUZW1wbGF0ZShkYXRhLmN1cnJlbnQsIHNldHRpbmdzKSkpO1xuICBjdXJyZW50LmNoaWxkcmVuWzBdLmNsYXNzTGlzdC5hZGQoJ3BhbmVsX3R5cGVfY3VycmVudCcpO1xuICBjb25zdCBob3VybHlQYW5lbHMgPSBkYXRhLmhvdXJseS5tYXAoKGhvdXIpID0+IGZ1bGxQYW5lbFRlbXBsYXRlKGhvdXIsIHNldHRpbmdzKSk7XG4gIGN1cnJlbnQuY2hpbGRyZW5bMF0uYXBwZW5kQ2hpbGQoYnVpbGRFbGVtZW50c1RyZWUoaG91cmx5VGVtcGxhdGUoaG91cmx5UGFuZWxzKSkpO1xuICBjb25zdCBkYWlseVBhbmVscyA9IGRhdGEuZGFpbHkubWFwKChkYXksIGluZGV4KSA9PiBmdWxsUGFuZWxUZW1wbGF0ZShkYXksIHNldHRpbmdzLCBpbmRleCkpO1xuICBjb25zdCBkYWlseSA9IGJ1aWxkRWxlbWVudHNUcmVlKGRhaWx5VGVtcGxhdGUoZGFpbHlQYW5lbHMpKTtcblxuICByZXR1cm4gW2N1cnJlbnQsIGRhaWx5XTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkRWxlbWVudHNUcmVlKG9iaikge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChvYmoudGFnKTtcblxuICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goKHByb3ApID0+IHtcbiAgICBzd2l0Y2ggKHByb3ApIHtcbiAgICAgIGNhc2UgJ3RhZyc6XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2xhc3Nlcyc6XG4gICAgICAgIG9iai5jbGFzc2VzLmZvckVhY2goKGNzc0NsYXNzKSA9PiBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0ZXh0JzpcbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IG9iai50ZXh0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2F0dHJpYnV0ZXMnOlxuICAgICAgICBvYmouYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyaWJ1dGUpID0+IGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZVswXSwgYXR0cmlidXRlWzFdKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2hpbGRyZW4nOlxuICAgICAgICBvYmouY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ1aWxkRWxlbWVudHNUcmVlKGNoaWxkKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZWxlbWVudDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGN1cnJlbnRUZW1wbGF0ZShwYW5lbCkge1xuICByZXR1cm4ge1xuICAgIHRhZzogJ2RpdicsXG4gICAgY2xhc3NlczogWydjb250ZW50X19jdXJyZW50JywgJ2NvbnRlbnRfX3BhcnQnXSxcbiAgICBjaGlsZHJlbjogW3BhbmVsXSxcbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRhaWx5VGVtcGxhdGUocGFuZWxBcnJheSkge1xuICByZXR1cm4ge1xuICAgIHRhZzogJ2RpdicsXG4gICAgY2xhc3NlczogWydjb250ZW50X19kYWlseScsICdjb250ZW50X19wYXJ0J10sXG4gICAgY2hpbGRyZW46IFsuLi5wYW5lbEFycmF5XSxcbiAgfTtcbn1cbiIsImltcG9ydCB7IHV0Y1RvWm9uZWRUaW1lLCBmb3JtYXQgfSBmcm9tICdkYXRlLWZucy10eic7XG5cbmNvbnN0IGZpeGVkTG9jYWxEYXRlID0gKGRhdGUsIHRpbWVab25lKSA9PiB1dGNUb1pvbmVkVGltZShkYXRlLCB0aW1lWm9uZSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGF0ZUNvbnZlcnNpb25XcmFwcGVyKHVuaXgsIGRhdGVGb3JtYXQsIHRpbWVab25lKSB7XG4gIHJldHVybiBmb3JtYXQoZml4ZWRMb2NhbERhdGUodW5peCAqIDEwMDAsIHRpbWVab25lKSwgZGF0ZUZvcm1hdClcbn0iLCJpbXBvcnQgdHpfbG9va3VwIGZyb20gJ3R6LWxvb2t1cCc7XG5pbXBvcnQgZGF0ZUNvbnZlcnNpb25XcmFwcGVyIGZyb20gJy4vZGF0ZUNvbnZlcnNpb25XcmFwcGVyJztcbmltcG9ydCB1bml0Q29udmVydGVyIGZyb20gJy4vdW5pdENvbnZlcnRlcic7XG5pbXBvcnQgaHVtaWRpdHlJY29uIGZyb20gJy4vYXNzZXRzL2ljb25zL2h1bWlkaXR5LWljb24ucG5nJztcbmltcG9ydCB3aW5kU3BlZWRJY29uIGZyb20gJy4vYXNzZXRzL2ljb25zL3dpbmRfc3BlZWQtaWNvbi5wbmcnO1xuaW1wb3J0IGNsb3VkaW5lc3NJY29uIGZyb20gJy4vYXNzZXRzL2ljb25zL2Nsb3VkaW5lc3MtaWNvbi5wbmcnO1xuaW1wb3J0IHN1bnJpc2VJY29uIGZyb20gJy4vYXNzZXRzL2ljb25zL3N1bnJpc2UtaWNvbi5wbmcnO1xuaW1wb3J0IHN1bnNldEljb24gZnJvbSAnLi9hc3NldHMvaWNvbnMvc3Vuc2V0LWljb24ucG5nJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZnVsbFBhbmVsVGVtcGxhdGUob2JqLCBzZXR0aW5ncywgaW5kZXgpIHtcbiAgY29uc3QgeyB0ZW1wVW5pdCB9ID0gc2V0dGluZ3M7XG4gIGNvbnN0IHRpbWVab25lU3RyaW5nID0gdHpfbG9va3VwKHNldHRpbmdzLmNpdHkubGF0LCBzZXR0aW5ncy5jaXR5Lmxvbik7XG5cbiAgY29uc3Qgc3RyaW5naWZ5VGVtcCA9ICh0ZW1wKSA9PiB7XG4gICAgY29uc3QgdGVtcENoZWNrZWQgPSB0eXBlb2YgdGVtcCA9PT0gJ29iamVjdCcgPyB0ZW1wLmRheSA6IHRlbXA7XG4gICAgcmV0dXJuIGAke3VuaXRDb252ZXJ0ZXIodGVtcENoZWNrZWQsIHRlbXBVbml0KX0gJHt0ZW1wVW5pdH1gO1xuICB9O1xuICBjb25zdCBkYXRlQ29udmVyc2lvbk1peGluID0gKHVuaXgsIGZvcm1hdCkgPT4gZGF0ZUNvbnZlcnNpb25XcmFwcGVyKHVuaXgsIGZvcm1hdCwgdGltZVpvbmVTdHJpbmcpO1xuXG4gIGNvbnN0IG91dHB1dCA9IHtcbiAgICB0YWc6ICdkaXYnLFxuICAgIGNsYXNzZXM6IFsncGFuZWwnXSxcbiAgICBhdHRyaWJ1dGVzOiBbXSxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICBjbGFzc2VzOiBbJ3BhbmVsX19tYWluJ10sXG4gICAgICAgIC8vIGljb24sIG1haW4sIHRlbXAsIGZlZWxzX2xpa2VcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0YWc6ICdpbWcnLFxuICAgICAgICAgICAgY2xhc3NlczogWydwYW5lbF9fd2VhdGhlci1pY29uJ10sXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiBbWydzcmMnLCBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtvYmoud2VhdGhlclswXS5pY29ufUAyeC5wbmdgXV0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgY2xhc3NlczogWydwYW5lbF9fdGV4dCddLFxuICAgICAgICAgICAgdGV4dDogc3RyaW5naWZ5VGVtcChvYmoudGVtcCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0YWc6ICdoMicsXG4gICAgICAgICAgICBjbGFzc2VzOiBbJ3BhbmVsX190ZXh0J10sXG4gICAgICAgICAgICB0ZXh0OiBvYmoud2VhdGhlclswXS5tYWluLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgIGNsYXNzZXM6IFsncGFuZWxfX3RleHQnXSxcbiAgICAgICAgICAgIHRleHQ6IGBGZWVscyBsaWtlICR7c3RyaW5naWZ5VGVtcChvYmouZmVlbHNfbGlrZSl9YCxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuXG4gIGlmIChvYmouc3Vuc2V0KSB7XG4gICAgb3V0cHV0LmNoaWxkcmVuLnB1c2goe1xuICAgICAgdGFnOiAnZGl2JyxcbiAgICAgIGNsYXNzZXM6IFsncGFuZWxfX21vcmUtaW5mbyddLFxuICAgICAgLy8gaHVtaWRpdHksIGNsb3Vkcywgd2luZF9zcGVlZFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgY2xhc3NlczogWydwYW5lbF9fbW9yZS1pbmZvX2hhbGYnXSxcbiAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgICBjbGFzc2VzOiBbJ3BhbmVsX19sYWJlbCddLFxuICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRhZzogJ2ltZycsXG4gICAgICAgICAgICAgICAgICBjbGFzc2VzOiBbJ3BhbmVsX19sYWJlbC1pY29uJ10sXG4gICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBbWydzcmMnLCBodW1pZGl0eUljb25dXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICAgICAgICBjbGFzc2VzOiBbJ3BhbmVsX190ZXh0J10sXG4gICAgICAgICAgICAgICAgICB0ZXh0OiBgJHtvYmouaHVtaWRpdHl9JWAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICAgIGNsYXNzZXM6IFsncGFuZWxfX2xhYmVsJ10sXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGFnOiAnaW1nJyxcbiAgICAgICAgICAgICAgICAgIGNsYXNzZXM6IFsncGFuZWxfX2xhYmVsLWljb24nXSxcbiAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IFtbJ3NyYycsIHdpbmRTcGVlZEljb25dXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICAgICAgICBjbGFzc2VzOiBbJ3BhbmVsX190ZXh0J10sXG4gICAgICAgICAgICAgICAgICB0ZXh0OiBgJHtvYmoud2luZF9zcGVlZH0gbS9zYCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgICAgY2xhc3NlczogWydwYW5lbF9fbGFiZWwnXSxcbiAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0YWc6ICdpbWcnLFxuICAgICAgICAgICAgICAgICAgY2xhc3NlczogWydwYW5lbF9fbGFiZWwtaWNvbiddLFxuICAgICAgICAgICAgICAgICAgYXR0cmlidXRlczogW1snc3JjJywgY2xvdWRpbmVzc0ljb25dXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICAgICAgICBjbGFzc2VzOiBbJ3BhbmVsX190ZXh0J10sXG4gICAgICAgICAgICAgICAgICB0ZXh0OiBgJHtvYmouY2xvdWRzfSVgLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgIGNsYXNzZXM6IFsncGFuZWxfX21vcmUtaW5mb19oYWxmJ10sXG4gICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgICAgY2xhc3NlczogWydwYW5lbF9fbGFiZWwnXSxcbiAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0YWc6ICdpbWcnLFxuICAgICAgICAgICAgICAgICAgY2xhc3NlczogWydwYW5lbF9fbGFiZWwtaWNvbiddLFxuICAgICAgICAgICAgICAgICAgYXR0cmlidXRlczogW1snc3JjJywgc3VucmlzZUljb25dXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICAgICAgICBjbGFzc2VzOiBbJ3BhbmVsX190ZXh0J10sXG4gICAgICAgICAgICAgICAgICB0ZXh0OiBkYXRlQ29udmVyc2lvbk1peGluKG9iai5zdW5yaXNlLCAnSEg6bW0nKSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgICAgY2xhc3NlczogWydwYW5lbF9fbGFiZWwnXSxcbiAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0YWc6ICdpbWcnLFxuICAgICAgICAgICAgICAgICAgY2xhc3NlczogWydwYW5lbF9fbGFiZWwtaWNvbiddLFxuICAgICAgICAgICAgICAgICAgYXR0cmlidXRlczogW1snc3JjJywgc3Vuc2V0SWNvbl1dLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgIGNsYXNzZXM6IFsncGFuZWxfX3RleHQnXSxcbiAgICAgICAgICAgICAgICAgIHRleHQ6IGRhdGVDb252ZXJzaW9uTWl4aW4ob2JqLnN1bnNldCwgJ0hIOm1tJyksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb3V0cHV0LmNsYXNzZXMucHVzaCgncGFuZWxfdHlwZV9ob3VybHknKTtcbiAgICBvdXRwdXQuY2hpbGRyZW5bMF0uY2hpbGRyZW4uc3BsaWNlKC0yKTtcbiAgICBvdXRwdXQuY2hpbGRyZW5bMF0uY2hpbGRyZW4udW5zaGlmdCh7XG4gICAgICB0YWc6ICdoMycsXG4gICAgICBjbGFzc2VzOiBbJ3BhbmVsX19ob3VybHktdGltZSddLFxuICAgICAgdGV4dDogZGF0ZUNvbnZlcnNpb25NaXhpbihvYmouZHQsICdjY2MgaGggYScpLFxuICAgIH0pO1xuICB9XG5cbiAgaWYgKGluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICBvdXRwdXQuY2xhc3Nlcy5wdXNoKFsncGFuZWxfdHlwZV9kYWlseSddKTtcbiAgICBvdXRwdXQuY2hpbGRyZW5bMV0uY2xhc3Nlcy5wdXNoKCdwYW5lbF9fbW9yZS1pbmZvX3R5cGVfZGFpbHknKTtcbiAgICBvdXRwdXQuY2hpbGRyZW5bMF0uY2hpbGRyZW4udW5zaGlmdCh7XG4gICAgICB0YWc6ICdoMycsXG4gICAgICBjbGFzc2VzOiBbJ2RhdGUnXSxcbiAgICAgIHRleHQ6IGRhdGVDb252ZXJzaW9uTWl4aW4ob2JqLmR0LCAnTExMIGRvJyksXG4gICAgfSk7XG4gICAgb3V0cHV0LmNoaWxkcmVuLnB1c2goe1xuICAgICAgdGFnOiAnZGl2JyxcbiAgICAgIGNsYXNzZXM6IFsnY29udGVudF9fZGFpbHktdGVtcHMnXSxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgIHRleHQ6ICdNaW4nLFxuICAgICAgICAgIGNsYXNzZXM6IFsncGFuZWwnLCAncGFuZWxfdHlwZV9kYWlseS10ZW1wcyddLFxuICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICAgIHRleHQ6IHN0cmluZ2lmeVRlbXAob2JqLnRlbXAubWluKSxcbiAgICAgICAgICAgICAgY2xhc3NlczogWydwYW5lbF9fdGV4dCddLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICB0ZXh0OiAnTWF4JyxcbiAgICAgICAgICBjbGFzc2VzOiBbJ3BhbmVsJywgJ3BhbmVsX3R5cGVfZGFpbHktdGVtcHMnXSxcbiAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgICB0ZXh0OiBzdHJpbmdpZnlUZW1wKG9iai50ZW1wLm1heCksXG4gICAgICAgICAgICAgIGNsYXNzZXM6IFsncGFuZWxfX3RleHQnXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgdGV4dDogJ01vcm5pbmcnLFxuICAgICAgICAgIGNsYXNzZXM6IFsncGFuZWwnLCAncGFuZWxfdHlwZV9kYWlseS10ZW1wcyddLFxuICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICAgIHRleHQ6IHN0cmluZ2lmeVRlbXAob2JqLnRlbXAubW9ybiksXG4gICAgICAgICAgICAgIGNsYXNzZXM6IFsncGFuZWxfX3RleHQnXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgdGV4dDogJ0RheScsXG4gICAgICAgICAgY2xhc3NlczogWydwYW5lbCcsICdwYW5lbF90eXBlX2RhaWx5LXRlbXBzJ10sXG4gICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgICAgdGV4dDogc3RyaW5naWZ5VGVtcChvYmoudGVtcC5kYXkpLFxuICAgICAgICAgICAgICBjbGFzc2VzOiBbJ3BhbmVsX190ZXh0J10sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgIHRleHQ6ICdFdmUnLFxuICAgICAgICAgIGNsYXNzZXM6IFsncGFuZWwnLCAncGFuZWxfdHlwZV9kYWlseS10ZW1wcyddLFxuICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICAgIHRleHQ6IHN0cmluZ2lmeVRlbXAob2JqLnRlbXAuZXZlKSxcbiAgICAgICAgICAgICAgY2xhc3NlczogWydwYW5lbF9fdGV4dCddLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICB0ZXh0OiAnTmlnaHQnLFxuICAgICAgICAgIGNsYXNzZXM6IFsncGFuZWwnLCAncGFuZWxfdHlwZV9kYWlseS10ZW1wcyddLFxuICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICAgIHRleHQ6IHN0cmluZ2lmeVRlbXAob2JqLnRlbXAubmlnaHQpLFxuICAgICAgICAgICAgICBjbGFzc2VzOiBbJ3BhbmVsX190ZXh0J10sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvdXJseVRlbXBsYXRlKHBhbmVsQXJyYXkpIHtcbiAgcmV0dXJuIHtcbiAgICB0YWc6ICdkaXYnLFxuICAgIGNsYXNzZXM6IFsnY29udGVudF9faG91cmx5J10sXG4gICAgY2hpbGRyZW46IFsuLi5wYW5lbEFycmF5XSxcbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVuaXRDb252ZXJ0ZXIoaW5wdXQsIHVuaXQpIHtcbiAgaWYgKHVuaXQgPT09ICfCsEYnKSByZXR1cm4gTWF0aC5yb3VuZCgoaW5wdXQgKiA5KSAvIDUgKyAzMik7XG5cbiAgcmV0dXJuIE1hdGgucm91bmQoaW5wdXQpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuL3N0eWxlcy9ub3JtYWxpemUuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvc3R5bGUuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvbWFpbi5zY3NzJztcbmltcG9ydCBidWlsZERpc3BsYXkgZnJvbSAnLi9idWlsZERpc3BsYXknO1xuXG5jb25zdCB1c2VyU2V0dGluZ3MgPSB7fTtcbmNvbnN0IGN1cnJlbnREYXRhID0ge307XG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0nKTtcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuY29uc3QgbG9hZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkaW5nJyk7XG5cbmNvbnN0IGZpbHRlck9iaiA9IGZ1bmN0aW9uIHJldHVybk9ialdpdGhQYXNzZWRJblByb3BzKGJhc2VPYmosIHByb3BzKSB7XG4gIGNvbnN0IGZpbHRlcmVkT2JqID0gcHJvcHMucmVkdWNlKChvYmosIGN1cnJlbnRQcm9wKSA9PiB7XG4gICAgY29uc3QgbmV3T2JqID0geyAuLi5vYmogfTtcbiAgICBuZXdPYmpbY3VycmVudFByb3BdID0gYmFzZU9ialtjdXJyZW50UHJvcF07XG4gICAgcmV0dXJuIG5ld09iajtcbiAgfSwge30pO1xuICByZXR1cm4gZmlsdGVyZWRPYmo7XG59O1xuXG5jb25zdCBjb3B5UHJvcHMgPSBmdW5jdGlvbiBjb3B5RWFjaFByb3BPZk9iaihiYXNlT2JqLCB0YXJnZXRPYmopIHtcbiAgY29uc3QgdGFyZ2V0ID0gdGFyZ2V0T2JqO1xuICBPYmplY3Qua2V5cyhiYXNlT2JqKS5mb3JFYWNoKChwcm9wKSA9PiB7XG4gICAgdGFyZ2V0W3Byb3BdID0gYmFzZU9ialtwcm9wXTtcbiAgfSk7XG59O1xuXG5jb25zdCBnZXRQb3NpdGlvbiA9IGZ1bmN0aW9uIGdldFVzZXJQb3NpdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKFxuICAgICAgKHBvc2l0aW9uKSA9PiB7XG4gICAgICAgIHJlc29sdmUocG9zaXRpb24uY29vcmRzKTtcbiAgICAgIH0sXG4gICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIH1cbiAgICApO1xuICB9KS5jYXRjaCgoZSkgPT4gY29uc29sZS5sb2coZSkpO1xufTtcblxuY29uc3QgcG9zaXRpb25XcmFwcGVyID0gYXN5bmMgZnVuY3Rpb24gZ2V0UG9zaXRpb25XcmFwcGVyKCkge1xuICBjb25zdCBjb29yZHMgPSBhd2FpdCBnZXRQb3NpdGlvbigpO1xuICByZXR1cm4ge1xuICAgIGxhdDogY29vcmRzLmxhdGl0dWRlLFxuICAgIGxvbjogY29vcmRzLmxvbmdpdHVkZSxcbiAgfTtcbn07XG5cbmNvbnN0IGdldENpdHkgPSBmdW5jdGlvbiBmZXRjaENpdHlEYXRhKGNpdHkpIHtcbiAgY29uc3QgZmV0Y2hVcmwgPVxuICAgIHR5cGVvZiBjaXR5ID09PSAnb2JqZWN0J1xuICAgICAgPyBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9yZXZlcnNlP2xhdD0ke2NpdHkubGF0fSZsb249JHtjaXR5Lmxvbn0mYXBwaWQ9YTAxYTJmZTExODQ3ZjRmOGY4Njg3YjUyNmQ0MjlmOGRgXG4gICAgICA6IGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7Y2l0eX0mYXBwaWQ9YTAxYTJmZTExODQ3ZjRmOGY4Njg3YjUyNmQ0MjlmOGRgO1xuXG4gIHJldHVybiBmZXRjaChmZXRjaFVybCwge1xuICAgIG1vZGU6ICdjb3JzJyxcbiAgfSk7XG59O1xuXG5jb25zdCB1cGRhdGVDaXR5ID0gYXN5bmMgZnVuY3Rpb24gZmxvd0NvbnRyb2xDaXR5VXBkYXRlKHBvcykge1xuICB0cnkge1xuICAgIGxldCBpbnB1dDtcbiAgICBsZXQgcG9zaXRpb247XG4gICAgaWYgKCFwb3MpIGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1fX2lucHV0JykudmFsdWU7XG4gICAgaWYgKCFpbnB1dCkgcG9zaXRpb24gPSBhd2FpdCBwb3NpdGlvbldyYXBwZXIoKTtcblxuICAgIGNvbnN0IGNpdHlEYXRhID0gYXdhaXQgZ2V0Q2l0eShpbnB1dCB8fCBwb3NpdGlvbiB8fCAnTW9udHJlYWwsQ0EnKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbigoW3Jlc3BvbnNlXSkgPT4gcmVzcG9uc2UpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IGZpbHRlck9iaihyZXNwb25zZSwgWyduYW1lJywgJ2NvdW50cnknLCAnc3RhdGUnLCAnbGF0JywgJ2xvbiddKSk7XG5cbiAgICB1c2VyU2V0dGluZ3MuY2l0eSA9IHt9O1xuICAgIGNvcHlQcm9wcyhjaXR5RGF0YSwgdXNlclNldHRpbmdzLmNpdHkpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gIH1cbn07XG5jb25zdCBnZXREYXRhID0gZnVuY3Rpb24gZmV0Y2hXZWF0aGVyRGF0YShjaXR5T2JqKSB7XG4gIHJldHVybiBmZXRjaChcbiAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7Y2l0eU9iai5sYXR9Jmxvbj0ke2NpdHlPYmoubG9ufSZleGNsdWRlPW1pbnV0ZWx5JnVuaXRzPW1ldHJpYyZsYW5nPWVuJmFwcGlkPWEwMWEyZmUxMTg0N2Y0ZjhmODY4N2I1MjZkNDI5ZjhkYCxcbiAgICB7XG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgfVxuICApO1xufTtcblxuY29uc3QgdXBkYXRlRGF0YSA9IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUN1cnJlbnREYXRhT2JqKCkge1xuICB0cnkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXREYXRhKHVzZXJTZXR0aW5ncy5jaXR5KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IGZpbHRlck9iaihyZXNwb25zZSwgWydjdXJyZW50JywgJ2RhaWx5JywgJ2hvdXJseSddKSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50UHJvcHMgPSBbXG4gICAgICAgICAgJ2R0JyxcbiAgICAgICAgICAnc3VucmlzZScsXG4gICAgICAgICAgJ3N1bnNldCcsXG4gICAgICAgICAgJ3RlbXAnLFxuICAgICAgICAgICdmZWVsc19saWtlJyxcbiAgICAgICAgICAnaHVtaWRpdHknLFxuICAgICAgICAgICdjbG91ZHMnLFxuICAgICAgICAgICd3aW5kX3NwZWVkJyxcbiAgICAgICAgICAnd2VhdGhlcicsXG4gICAgICAgIF07XG4gICAgICAgIHJlc3BvbnNlLmN1cnJlbnQgPSBmaWx0ZXJPYmoocmVzcG9uc2UuY3VycmVudCwgY3VycmVudFByb3BzKTtcblxuICAgICAgICByZXNwb25zZS5kYWlseSA9IHJlc3BvbnNlLmRhaWx5Lm1hcCgoZGF5KSA9PiBmaWx0ZXJPYmooZGF5LCBjdXJyZW50UHJvcHMpKTtcblxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICB9KTtcblxuICAgIGNvcHlQcm9wcyhkYXRhLCBjdXJyZW50RGF0YSk7XG5cbiAgICBjb25zb2xlLmxvZyh1c2VyU2V0dGluZ3MuY2l0eS5uYW1lKTtcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50RGF0YSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgfVxufTtcblxuY29uc3Qgc2VsZWN0VGFiID0gZnVuY3Rpb24gc2V0QWN0aXZlVGFiKCkge1xuICBpZiAoXG4gICAgIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50X19jdXJyZW50X2FjdGl2ZScpICYmXG4gICAgIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50X19kYWlseV9hY3RpdmUnKVxuICApIHtcbiAgICBsZXQgYWN0aXZlVGFiID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYnKS5jaGlsZHJlbl0uZmluZCgoY2hpbGQpID0+XG4gICAgICBjaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoJ25hdl9fdGFiX2FjdGl2ZScpXG4gICAgKTtcbiAgICBjb25zdCBhY3RpdmVUYWJDbGFzcyA9IGFjdGl2ZVRhYi5kYXRhc2V0LnRhYjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHthY3RpdmVUYWJDbGFzc31gKS5jbGFzc0xpc3QuYWRkKGAke2FjdGl2ZVRhYkNsYXNzfV9hY3RpdmVgKTtcbiAgfVxufTtcblxuY29uc3QgdXBkYXRlRGlzcGxheSA9IGZ1bmN0aW9uIHVwZGF0ZURpc3BsYXlOZXdEYXRhKCkge1xuICBjb250ZW50LnJlcGxhY2VDaGlsZHJlbiguLi5idWlsZERpc3BsYXkoY3VycmVudERhdGEsIHVzZXJTZXR0aW5ncykpO1xuICBzZWxlY3RUYWIoKTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19jaXR5LW5hbWUnKS50ZXh0Q29udGVudCA9IHVzZXJTZXR0aW5ncy5jaXR5Lm5hbWU7XG5cbiAgLy8gZGFyayBtb2RlIGZvciBuaWdodFxuICBpZiAoY3VycmVudERhdGEuY3VycmVudC53ZWF0aGVyWzBdLmljb24uc2xpY2UoLTEpID09PSAnbicpIHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2JvZHlfdGhlbWVfZGFyaycpO1xuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnYm9keV90aGVtZV9kYXJrJyk7XG4gIH1cbn07XG5cbmNvbnN0IHRvZ2dsZUxvYWRpbmcgPSBmdW5jdGlvbiB0b2dnbGVMb2FkaW5nSGlkZGVuKCkge1xuICBsb2FkaW5nLmNsYXNzTGlzdC50b2dnbGUoJ2xvYWRpbmdfdHJhbnNwYXJlbnQnKTtcbiAgaWYgKGxvYWRpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdsb2FkaW5nX2hpZGRlbicpKSB7XG4gICAgbG9hZGluZy5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkaW5nX2hpZGRlbicpO1xuICB9IGVsc2Uge1xuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IGxvYWRpbmcuY2xhc3NMaXN0LmFkZCgnbG9hZGluZ19oaWRkZW4nKSwgMTAwMCk7XG4gIH1cbn07XG5cbmNvbnN0IHVwZGF0ZVdyYXBwZXIgPSBmdW5jdGlvbiB1cGRhdGVEYXRhVGhlbkRpc3BsYXkoKSB7XG4gIHVwZGF0ZURhdGEoKS50aGVuKHVwZGF0ZURpc3BsYXkpLnRoZW4odG9nZ2xlTG9hZGluZyk7XG59O1xuXG5jb25zdCBidXR0b25IYW5kbGVyID0gZnVuY3Rpb24gaGFuZGxlRm9ybUJ1dHRvbnMoZSwgcG9zKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgdG9nZ2xlTG9hZGluZygpO1xuICB1cGRhdGVDaXR5KHBvcykudGhlbih1cGRhdGVXcmFwcGVyKTtcbiAgZm9ybS5yZXNldCgpO1xufTtcblxuKGFzeW5jICgpID0+IHtcbiAgY29uc3QgdGVtcFRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2l0Y2hfX2NoZWNrYm94Jyk7XG4gIGlmICgnd2VhdGhlckFwcCcgaW4gbG9jYWxTdG9yYWdlKSB7XG4gICAgY29uc3Qgc3RvcmFnZU9iaiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLndlYXRoZXJBcHApO1xuICAgIGNvcHlQcm9wcyhzdG9yYWdlT2JqLCB1c2VyU2V0dGluZ3MpO1xuICB9XG5cbiAgaWYgKCF1c2VyU2V0dGluZ3MuY2l0eSkgYXdhaXQgdXBkYXRlQ2l0eSgpO1xuXG4gIGlmICghdXNlclNldHRpbmdzLnRlbXBVbml0KSB1c2VyU2V0dGluZ3MudGVtcFVuaXQgPSAnwrBDJztcblxuICB0ZW1wVG9nZ2xlLmNoZWNrZWQgPSB1c2VyU2V0dGluZ3MudGVtcFVuaXQgPT09ICfCsEYnO1xuXG4gIHVwZGF0ZVdyYXBwZXIoKTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS53ZWF0aGVyQXBwID0gSlNPTi5zdHJpbmdpZnkodXNlclNldHRpbmdzKTtcbiAgfSk7XG5cbiAgdGVtcFRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBpbmRleEFjdGl2ZURhaWx5ID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50X19kYWlseScpLmNoaWxkcmVuXS5maW5kSW5kZXgoXG4gICAgICAoY2hpbGQpID0+IGNoaWxkLmNsYXNzTGlzdC5jb250YWlucygncGFuZWxfYWN0aXZlJylcbiAgICApO1xuXG4gICAgdXNlclNldHRpbmdzLnRlbXBVbml0ID0gdXNlclNldHRpbmdzLnRlbXBVbml0ID09PSAnwrBDJyA/ICfCsEYnIDogJ8KwQyc7XG4gICAgdXBkYXRlRGlzcGxheSgpO1xuXG4gICAgaWYgKGluZGV4QWN0aXZlRGFpbHkgPiAtMSkge1xuICAgICAgZG9jdW1lbnRcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50X19kYWlseScpXG4gICAgICAgIC5jaGlsZHJlbltpbmRleEFjdGl2ZURhaWx5XS5jbGFzc0xpc3QuYWRkKCdwYW5lbF9hY3RpdmUnKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBlO1xuICAgIGlmICghdGFyZ2V0LmNsb3Nlc3QoJy5wYW5lbF90eXBlX2RhaWx5JykpIHJldHVybjtcblxuICAgIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudF9fZGFpbHknKS5jaGlsZHJlbl0uZm9yRWFjaCgoY2hpbGQpID0+XG4gICAgICBjaGlsZC5jbGFzc0xpc3QucmVtb3ZlKCdwYW5lbF9hY3RpdmUnKVxuICAgICk7XG4gICAgdGFyZ2V0LmNsb3Nlc3QoJy5wYW5lbF90eXBlX2RhaWx5JykuY2xhc3NMaXN0LmFkZCgncGFuZWxfYWN0aXZlJyk7XG4gIH0pO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3QgeyB0YXJnZXQgfSA9IGU7XG4gICAgaWYgKCF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCduYXZfX3RhYicpIHx8IHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ25hdl9fdGFiX2FjdGl2ZScpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgWy4uLnRhcmdldC5jbG9zZXN0KCcubmF2JykuY2hpbGRyZW5dLmZvckVhY2goKGNoaWxkKSA9PlxuICAgICAgY2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnbmF2X190YWJfYWN0aXZlJylcbiAgICApO1xuICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCduYXZfX3RhYl9hY3RpdmUnKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50X19jdXJyZW50JykuY2xhc3NMaXN0LnJlbW92ZSgnY29udGVudF9fY3VycmVudF9hY3RpdmUnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudF9fZGFpbHknKS5jbGFzc0xpc3QucmVtb3ZlKCdjb250ZW50X19kYWlseV9hY3RpdmUnKTtcblxuICAgIHNlbGVjdFRhYigpO1xuICB9KTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybV9fYnV0dG9uX3R5cGVfbG9jYXRpb24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgYnV0dG9uSGFuZGxlcihlLCB0cnVlKTtcbiAgfSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX19idXR0b25fdHlwZV9zdWJtaXQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgYnV0dG9uSGFuZGxlcihlKTtcbiAgfSk7XG59KSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9