/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/buildDisplay.js":
/*!*****************************!*\
  !*** ./src/buildDisplay.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildDisplay)
/* harmony export */ });
/* harmony import */ var _buildElementsTree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buildElementsTree */ "./src/buildElementsTree.js");
/* harmony import */ var _fullPanelTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fullPanelTemplate */ "./src/fullPanelTemplate.js");
/* harmony import */ var _dailyTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dailyTemplate */ "./src/dailyTemplate.js");
/* harmony import */ var _currentTemplate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./currentTemplate */ "./src/currentTemplate.js");





function buildDisplay(data, settings) {
  const current = (0,_buildElementsTree__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_currentTemplate__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_fullPanelTemplate__WEBPACK_IMPORTED_MODULE_1__["default"])(data.current, settings)));
  const dailyPanels = data.daily.map((day, index) => (0,_fullPanelTemplate__WEBPACK_IMPORTED_MODULE_1__["default"])(day, settings, index));
  const daily = (0,_buildElementsTree__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_dailyTemplate__WEBPACK_IMPORTED_MODULE_2__["default"])(dailyPanels));
  return [current, daily];
}


/***/ }),

/***/ "./src/buildElementsTree.js":
/*!**********************************!*\
  !*** ./src/buildElementsTree.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ currentTemplate)
/* harmony export */ });
function currentTemplate(panel) {
  return {
    tag: 'div',
    classes: ['current-div', 'active'],
    children: [panel],
  };
}


/***/ }),

/***/ "./src/dailyTemplate.js":
/*!******************************!*\
  !*** ./src/dailyTemplate.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dailyTemplate)
/* harmony export */ });
function dailyTemplate(panelArray) {
  return {
    tag: 'div',
    classes: ['daily-div'],
    children: [...panelArray],
  };
}


/***/ }),

/***/ "./src/fullPanelTemplate.js":
/*!**********************************!*\
  !*** ./src/fullPanelTemplate.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ fullPanelTemplate)
/* harmony export */ });
/* harmony import */ var _unitConverter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unitConverter */ "./src/unitConverter.js");


function fullPanelTemplate(obj, settings, index) {
  const { tempUnit } = settings;
  const stringifyTemp = (value) => `${(0,_unitConverter__WEBPACK_IMPORTED_MODULE_0__["default"])(value, tempUnit)} ${tempUnit}`;
  const output = {
    tag: 'div',
    classes: ['full-panel'],
    attributes: [],
    children: [
      {
        tag: 'div',
        classes: ['top-panel'],
        // icon, main, temp
        children: [
          {
            tag: 'img',
            classes: ['weather-icon'],
            attributes: [['src', `http://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`]],
          },
          {
            tag: 'h1',
            classes: ['desc'],
            text: obj.weather[0].main,
          },
          {
            tag: 'temp',
            text: stringifyTemp(obj.temp),
          },
        ],
      },
      {
        tag: 'div',
        classes: ['med-panel'],
        // humidity, clouds, wind_speed, feels_like
        children: [],
      },
      {
        tag: 'div',
        classes: ['lower-panel'],
        // sunrise, sunset
        children: [],
      },
    ],
  };

  if (index !== undefined) output.attributes.push(['data-index', index]);

  return output;
}


/***/ }),

/***/ "./src/unitConverter.js":
/*!******************************!*\
  !*** ./src/unitConverter.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ unitConverter)
/* harmony export */ });
function unitConverter(input, unit) {
  if (unit === '°F') return (input * 9) / 5 + 32;

  return input;
}


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _buildDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buildDisplay */ "./src/buildDisplay.js");


const userSettings = {};
const currentData = {};
const form = document.cityForm;
const content = document.getElementById('content');

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

const getCity = function fetchCityData(cityName) {
  return fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=a01a2fe11847f4f8f8687b526d429f8d`,
    {
      mode: 'cors',
    }
  );
};

const updateCity = async function flowControlCityUpdate() {
  try {
    const input = form.cityInput.value;

    const cityData = await getCity(input || 'Montreal,CA')
      .then((response) => response.json())
      .then(([response]) => response)
      .then((response) => filterObj(response, ['name', 'country', 'state', 'lat', 'lon']));

    copyProps(cityData, userSettings.city);
  } catch (err) {
    console.error(err);
  }
};
const getData = function fetchWeatherData(cityObj) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${cityObj.lat}&lon=${cityObj.lon}&exclude=minutely,hourly&units=metric&lang=en&appid=a01a2fe11847f4f8f8687b526d429f8d`,
    {
      mode: 'cors',
    }
  );
};

const updateData = async function updateCurrentDataObj() {
  try {
    const data = await getData(userSettings.city)
      .then((response) => response.json())
      .then((response) => filterObj(response, ['current', 'daily']))
      .then((response) => {
        const currentProps = [
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

const updateDisplay = function updateDisplayNewData() {
  content.replaceChildren(...(0,_buildDisplay__WEBPACK_IMPORTED_MODULE_0__["default"])(currentData, userSettings));
};

const updateWrapper = function updateDataThenDisplay() {
  updateData().then(updateDisplay);
};

(async () => {
  if ('weatherApp' in localStorage) {
    const storageObj = JSON.parse(localStorage.weatherApp);
    copyProps(storageObj, userSettings);
  }

  if (!userSettings.city) await updateCity();

  if (!userSettings.tempUnit) userSettings.tempUnit = '°C';

  updateWrapper();

  window.addEventListener('beforeunload', () => {
    localStorage.weatherApp = JSON.stringify(userSettings);
  });

  form.cityButton.addEventListener('click', (e) => {
    e.preventDefault();
    updateCity().then(updateWrapper);
    form.reset();
  });
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFvRDtBQUNBO0FBQ1I7QUFDSTs7QUFFakM7QUFDZixrQkFBa0IsOERBQWlCLENBQUMsNERBQWUsQ0FBQyw4REFBaUI7QUFDckUscURBQXFELDhEQUFpQjtBQUN0RSxnQkFBZ0IsOERBQWlCLENBQUMsMERBQWE7QUFDL0M7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDVmU7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzFCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDTmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNONEM7O0FBRTdCO0FBQ2YsVUFBVSxXQUFXO0FBQ3JCLHNDQUFzQywwREFBYSxtQkFBbUIsRUFBRSxTQUFTO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQXFFLG9CQUFvQjtBQUN6RixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2pEZTtBQUNmOztBQUVBO0FBQ0E7Ozs7Ozs7VUNKQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjBDOztBQUUxQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxHQUFHLElBQUk7QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSxzREFBc0QsU0FBUztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELFlBQVksT0FBTyxZQUFZO0FBQzFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLE9BQU87O0FBRVA7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkIseURBQVk7QUFDekM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2J1aWxkRGlzcGxheS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9idWlsZEVsZW1lbnRzVHJlZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jdXJyZW50VGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZGFpbHlUZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9mdWxsUGFuZWxUZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy91bml0Q29udmVydGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJ1aWxkRWxlbWVudHNUcmVlIGZyb20gJy4vYnVpbGRFbGVtZW50c1RyZWUnO1xuaW1wb3J0IGZ1bGxQYW5lbFRlbXBsYXRlIGZyb20gJy4vZnVsbFBhbmVsVGVtcGxhdGUnO1xuaW1wb3J0IGRhaWx5VGVtcGxhdGUgZnJvbSAnLi9kYWlseVRlbXBsYXRlJztcbmltcG9ydCBjdXJyZW50VGVtcGxhdGUgZnJvbSAnLi9jdXJyZW50VGVtcGxhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZERpc3BsYXkoZGF0YSwgc2V0dGluZ3MpIHtcbiAgY29uc3QgY3VycmVudCA9IGJ1aWxkRWxlbWVudHNUcmVlKGN1cnJlbnRUZW1wbGF0ZShmdWxsUGFuZWxUZW1wbGF0ZShkYXRhLmN1cnJlbnQsIHNldHRpbmdzKSkpO1xuICBjb25zdCBkYWlseVBhbmVscyA9IGRhdGEuZGFpbHkubWFwKChkYXksIGluZGV4KSA9PiBmdWxsUGFuZWxUZW1wbGF0ZShkYXksIHNldHRpbmdzLCBpbmRleCkpO1xuICBjb25zdCBkYWlseSA9IGJ1aWxkRWxlbWVudHNUcmVlKGRhaWx5VGVtcGxhdGUoZGFpbHlQYW5lbHMpKTtcbiAgcmV0dXJuIFtjdXJyZW50LCBkYWlseV07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEVsZW1lbnRzVHJlZShvYmopIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQob2JqLnRhZyk7XG5cbiAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKChwcm9wKSA9PiB7XG4gICAgc3dpdGNoIChwcm9wKSB7XG4gICAgICBjYXNlICd0YWcnOlxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NsYXNzZXMnOlxuICAgICAgICBvYmouY2xhc3Nlcy5mb3JFYWNoKChjc3NDbGFzcykgPT4gZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndGV4dCc6XG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBvYmoudGV4dDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdhdHRyaWJ1dGVzJzpcbiAgICAgICAgb2JqLmF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cmlidXRlKSA9PiBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVbMF0sIGF0dHJpYnV0ZVsxXSkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NoaWxkcmVuJzpcbiAgICAgICAgb2JqLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChidWlsZEVsZW1lbnRzVHJlZShjaGlsZCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjdXJyZW50VGVtcGxhdGUocGFuZWwpIHtcbiAgcmV0dXJuIHtcbiAgICB0YWc6ICdkaXYnLFxuICAgIGNsYXNzZXM6IFsnY3VycmVudC1kaXYnLCAnYWN0aXZlJ10sXG4gICAgY2hpbGRyZW46IFtwYW5lbF0sXG4gIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkYWlseVRlbXBsYXRlKHBhbmVsQXJyYXkpIHtcbiAgcmV0dXJuIHtcbiAgICB0YWc6ICdkaXYnLFxuICAgIGNsYXNzZXM6IFsnZGFpbHktZGl2J10sXG4gICAgY2hpbGRyZW46IFsuLi5wYW5lbEFycmF5XSxcbiAgfTtcbn1cbiIsImltcG9ydCB1bml0Q29udmVydGVyIGZyb20gJy4vdW5pdENvbnZlcnRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZ1bGxQYW5lbFRlbXBsYXRlKG9iaiwgc2V0dGluZ3MsIGluZGV4KSB7XG4gIGNvbnN0IHsgdGVtcFVuaXQgfSA9IHNldHRpbmdzO1xuICBjb25zdCBzdHJpbmdpZnlUZW1wID0gKHZhbHVlKSA9PiBgJHt1bml0Q29udmVydGVyKHZhbHVlLCB0ZW1wVW5pdCl9ICR7dGVtcFVuaXR9YDtcbiAgY29uc3Qgb3V0cHV0ID0ge1xuICAgIHRhZzogJ2RpdicsXG4gICAgY2xhc3NlczogWydmdWxsLXBhbmVsJ10sXG4gICAgYXR0cmlidXRlczogW10sXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgY2xhc3NlczogWyd0b3AtcGFuZWwnXSxcbiAgICAgICAgLy8gaWNvbiwgbWFpbiwgdGVtcFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRhZzogJ2ltZycsXG4gICAgICAgICAgICBjbGFzc2VzOiBbJ3dlYXRoZXItaWNvbiddLFxuICAgICAgICAgICAgYXR0cmlidXRlczogW1snc3JjJywgYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7b2JqLndlYXRoZXJbMF0uaWNvbn1AMngucG5nYF1dLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGFnOiAnaDEnLFxuICAgICAgICAgICAgY2xhc3NlczogWydkZXNjJ10sXG4gICAgICAgICAgICB0ZXh0OiBvYmoud2VhdGhlclswXS5tYWluLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGFnOiAndGVtcCcsXG4gICAgICAgICAgICB0ZXh0OiBzdHJpbmdpZnlUZW1wKG9iai50ZW1wKSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgY2xhc3NlczogWydtZWQtcGFuZWwnXSxcbiAgICAgICAgLy8gaHVtaWRpdHksIGNsb3Vkcywgd2luZF9zcGVlZCwgZmVlbHNfbGlrZVxuICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICBjbGFzc2VzOiBbJ2xvd2VyLXBhbmVsJ10sXG4gICAgICAgIC8vIHN1bnJpc2UsIHN1bnNldFxuICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG5cbiAgaWYgKGluZGV4ICE9PSB1bmRlZmluZWQpIG91dHB1dC5hdHRyaWJ1dGVzLnB1c2goWydkYXRhLWluZGV4JywgaW5kZXhdKTtcblxuICByZXR1cm4gb3V0cHV0O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdW5pdENvbnZlcnRlcihpbnB1dCwgdW5pdCkge1xuICBpZiAodW5pdCA9PT0gJ8KwRicpIHJldHVybiAoaW5wdXQgKiA5KSAvIDUgKyAzMjtcblxuICByZXR1cm4gaW5wdXQ7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBidWlsZERpc3BsYXkgZnJvbSAnLi9idWlsZERpc3BsYXknO1xuXG5jb25zdCB1c2VyU2V0dGluZ3MgPSB7fTtcbmNvbnN0IGN1cnJlbnREYXRhID0ge307XG5jb25zdCBmb3JtID0gZG9jdW1lbnQuY2l0eUZvcm07XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuY29uc3QgZmlsdGVyT2JqID0gZnVuY3Rpb24gcmV0dXJuT2JqV2l0aFBhc3NlZEluUHJvcHMoYmFzZU9iaiwgcHJvcHMpIHtcbiAgY29uc3QgZmlsdGVyZWRPYmogPSBwcm9wcy5yZWR1Y2UoKG9iaiwgY3VycmVudFByb3ApID0+IHtcbiAgICBjb25zdCBuZXdPYmogPSB7IC4uLm9iaiB9O1xuICAgIG5ld09ialtjdXJyZW50UHJvcF0gPSBiYXNlT2JqW2N1cnJlbnRQcm9wXTtcbiAgICByZXR1cm4gbmV3T2JqO1xuICB9LCB7fSk7XG4gIHJldHVybiBmaWx0ZXJlZE9iajtcbn07XG5cbmNvbnN0IGNvcHlQcm9wcyA9IGZ1bmN0aW9uIGNvcHlFYWNoUHJvcE9mT2JqKGJhc2VPYmosIHRhcmdldE9iaikge1xuICBjb25zdCB0YXJnZXQgPSB0YXJnZXRPYmo7XG4gIE9iamVjdC5rZXlzKGJhc2VPYmopLmZvckVhY2goKHByb3ApID0+IHtcbiAgICB0YXJnZXRbcHJvcF0gPSBiYXNlT2JqW3Byb3BdO1xuICB9KTtcbn07XG5cbmNvbnN0IGdldENpdHkgPSBmdW5jdGlvbiBmZXRjaENpdHlEYXRhKGNpdHlOYW1lKSB7XG4gIHJldHVybiBmZXRjaChcbiAgICBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2NpdHlOYW1lfSZsaW1pdD01JmFwcGlkPWEwMWEyZmUxMTg0N2Y0ZjhmODY4N2I1MjZkNDI5ZjhkYCxcbiAgICB7XG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgfVxuICApO1xufTtcblxuY29uc3QgdXBkYXRlQ2l0eSA9IGFzeW5jIGZ1bmN0aW9uIGZsb3dDb250cm9sQ2l0eVVwZGF0ZSgpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBpbnB1dCA9IGZvcm0uY2l0eUlucHV0LnZhbHVlO1xuXG4gICAgY29uc3QgY2l0eURhdGEgPSBhd2FpdCBnZXRDaXR5KGlucHV0IHx8ICdNb250cmVhbCxDQScpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKChbcmVzcG9uc2VdKSA9PiByZXNwb25zZSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gZmlsdGVyT2JqKHJlc3BvbnNlLCBbJ25hbWUnLCAnY291bnRyeScsICdzdGF0ZScsICdsYXQnLCAnbG9uJ10pKTtcblxuICAgIGNvcHlQcm9wcyhjaXR5RGF0YSwgdXNlclNldHRpbmdzLmNpdHkpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gIH1cbn07XG5jb25zdCBnZXREYXRhID0gZnVuY3Rpb24gZmV0Y2hXZWF0aGVyRGF0YShjaXR5T2JqKSB7XG4gIHJldHVybiBmZXRjaChcbiAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7Y2l0eU9iai5sYXR9Jmxvbj0ke2NpdHlPYmoubG9ufSZleGNsdWRlPW1pbnV0ZWx5LGhvdXJseSZ1bml0cz1tZXRyaWMmbGFuZz1lbiZhcHBpZD1hMDFhMmZlMTE4NDdmNGY4Zjg2ODdiNTI2ZDQyOWY4ZGAsXG4gICAge1xuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgIH1cbiAgKTtcbn07XG5cbmNvbnN0IHVwZGF0ZURhdGEgPSBhc3luYyBmdW5jdGlvbiB1cGRhdGVDdXJyZW50RGF0YU9iaigpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0RGF0YSh1c2VyU2V0dGluZ3MuY2l0eSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBmaWx0ZXJPYmoocmVzcG9uc2UsIFsnY3VycmVudCcsICdkYWlseSddKSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50UHJvcHMgPSBbXG4gICAgICAgICAgJ3N1bnJpc2UnLFxuICAgICAgICAgICdzdW5zZXQnLFxuICAgICAgICAgICd0ZW1wJyxcbiAgICAgICAgICAnZmVlbHNfbGlrZScsXG4gICAgICAgICAgJ2h1bWlkaXR5JyxcbiAgICAgICAgICAnY2xvdWRzJyxcbiAgICAgICAgICAnd2luZF9zcGVlZCcsXG4gICAgICAgICAgJ3dlYXRoZXInLFxuICAgICAgICBdO1xuICAgICAgICByZXNwb25zZS5jdXJyZW50ID0gZmlsdGVyT2JqKHJlc3BvbnNlLmN1cnJlbnQsIGN1cnJlbnRQcm9wcyk7XG5cbiAgICAgICAgcmVzcG9uc2UuZGFpbHkgPSByZXNwb25zZS5kYWlseS5tYXAoKGRheSkgPT4gZmlsdGVyT2JqKGRheSwgY3VycmVudFByb3BzKSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgfSk7XG5cbiAgICBjb3B5UHJvcHMoZGF0YSwgY3VycmVudERhdGEpO1xuXG4gICAgY29uc29sZS5sb2codXNlclNldHRpbmdzLmNpdHkubmFtZSk7XG4gICAgY29uc29sZS5sb2coY3VycmVudERhdGEpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gIH1cbn07XG5cbmNvbnN0IHVwZGF0ZURpc3BsYXkgPSBmdW5jdGlvbiB1cGRhdGVEaXNwbGF5TmV3RGF0YSgpIHtcbiAgY29udGVudC5yZXBsYWNlQ2hpbGRyZW4oLi4uYnVpbGREaXNwbGF5KGN1cnJlbnREYXRhLCB1c2VyU2V0dGluZ3MpKTtcbn07XG5cbmNvbnN0IHVwZGF0ZVdyYXBwZXIgPSBmdW5jdGlvbiB1cGRhdGVEYXRhVGhlbkRpc3BsYXkoKSB7XG4gIHVwZGF0ZURhdGEoKS50aGVuKHVwZGF0ZURpc3BsYXkpO1xufTtcblxuKGFzeW5jICgpID0+IHtcbiAgaWYgKCd3ZWF0aGVyQXBwJyBpbiBsb2NhbFN0b3JhZ2UpIHtcbiAgICBjb25zdCBzdG9yYWdlT2JqID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2Uud2VhdGhlckFwcCk7XG4gICAgY29weVByb3BzKHN0b3JhZ2VPYmosIHVzZXJTZXR0aW5ncyk7XG4gIH1cblxuICBpZiAoIXVzZXJTZXR0aW5ncy5jaXR5KSBhd2FpdCB1cGRhdGVDaXR5KCk7XG5cbiAgaWYgKCF1c2VyU2V0dGluZ3MudGVtcFVuaXQpIHVzZXJTZXR0aW5ncy50ZW1wVW5pdCA9ICfCsEMnO1xuXG4gIHVwZGF0ZVdyYXBwZXIoKTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS53ZWF0aGVyQXBwID0gSlNPTi5zdHJpbmdpZnkodXNlclNldHRpbmdzKTtcbiAgfSk7XG5cbiAgZm9ybS5jaXR5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdXBkYXRlQ2l0eSgpLnRoZW4odXBkYXRlV3JhcHBlcik7XG4gICAgZm9ybS5yZXNldCgpO1xuICB9KTtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=