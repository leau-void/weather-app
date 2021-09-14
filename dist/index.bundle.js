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





function buildDisplay(data) {
  const current = (0,_buildElementsTree__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_currentTemplate__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_fullPanelTemplate__WEBPACK_IMPORTED_MODULE_1__["default"])(data.current)));
  const dailyPanels = data.daily.map((day, index) => (0,_fullPanelTemplate__WEBPACK_IMPORTED_MODULE_1__["default"])(day, index));
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
    classes: ['current-div'],
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
function fullPanelTemplate(obj, index) {
  const output = {
    tag: 'div',
    classes: ['full-panel'],
    attributes: [],
    children: [
      {
        tag: 'div',
        classes: ['top-panel'],
        // icon, main, temp, feels_like
        children: [
          {
            tag: 'img',
            classes: ['weather-icon'],
            attributes: [['src', `http://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`]],
          },
        ],
      },
      {
        tag: 'div',
        classes: ['med-panel'],
        // humidity, clouds, wind_speed
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
  content.replaceChildren(...(0,_buildDisplay__WEBPACK_IMPORTED_MODULE_0__["default"])(currentData));
};

const updateWrapper = function updateDataThenDisplay() {
  updateData().then(updateDisplay);
};

(async () => {
  if ('weatherApp' in localStorage) {
    const storageObj = JSON.parse(localStorage.weatherApp);
    copyProps(storageObj, userSettings);
  }

  if (!userSettings.city) {
    await updateCity();
  }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFvRDtBQUNBO0FBQ1I7QUFDSTs7QUFFakM7QUFDZixrQkFBa0IsOERBQWlCLENBQUMsNERBQWUsQ0FBQyw4REFBaUI7QUFDckUscURBQXFELDhEQUFpQjtBQUN0RSxnQkFBZ0IsOERBQWlCLENBQUMsMERBQWE7QUFDL0M7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDVmU7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzFCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDTmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ05lO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRUFBcUUsb0JBQW9CO0FBQ3pGLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7O1VDcENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOMEM7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEdBQUcsSUFBSTtBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRCxTQUFTO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsWUFBWSxPQUFPLFlBQVk7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsT0FBTzs7QUFFUDs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZCQUE2Qix5REFBWTtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2J1aWxkRGlzcGxheS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9idWlsZEVsZW1lbnRzVHJlZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jdXJyZW50VGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZGFpbHlUZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9mdWxsUGFuZWxUZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBidWlsZEVsZW1lbnRzVHJlZSBmcm9tICcuL2J1aWxkRWxlbWVudHNUcmVlJztcbmltcG9ydCBmdWxsUGFuZWxUZW1wbGF0ZSBmcm9tICcuL2Z1bGxQYW5lbFRlbXBsYXRlJztcbmltcG9ydCBkYWlseVRlbXBsYXRlIGZyb20gJy4vZGFpbHlUZW1wbGF0ZSc7XG5pbXBvcnQgY3VycmVudFRlbXBsYXRlIGZyb20gJy4vY3VycmVudFRlbXBsYXRlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGREaXNwbGF5KGRhdGEpIHtcbiAgY29uc3QgY3VycmVudCA9IGJ1aWxkRWxlbWVudHNUcmVlKGN1cnJlbnRUZW1wbGF0ZShmdWxsUGFuZWxUZW1wbGF0ZShkYXRhLmN1cnJlbnQpKSk7XG4gIGNvbnN0IGRhaWx5UGFuZWxzID0gZGF0YS5kYWlseS5tYXAoKGRheSwgaW5kZXgpID0+IGZ1bGxQYW5lbFRlbXBsYXRlKGRheSwgaW5kZXgpKTtcbiAgY29uc3QgZGFpbHkgPSBidWlsZEVsZW1lbnRzVHJlZShkYWlseVRlbXBsYXRlKGRhaWx5UGFuZWxzKSk7XG4gIHJldHVybiBbY3VycmVudCwgZGFpbHldO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRFbGVtZW50c1RyZWUob2JqKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG9iai50YWcpO1xuXG4gIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaCgocHJvcCkgPT4ge1xuICAgIHN3aXRjaCAocHJvcCkge1xuICAgICAgY2FzZSAndGFnJzpcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjbGFzc2VzJzpcbiAgICAgICAgb2JqLmNsYXNzZXMuZm9yRWFjaCgoY3NzQ2xhc3MpID0+IGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjc3NDbGFzcykpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gb2JqLnRleHQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYXR0cmlidXRlcyc6XG4gICAgICAgIG9iai5hdHRyaWJ1dGVzLmZvckVhY2goKGF0dHJpYnV0ZSkgPT4gZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlWzBdLCBhdHRyaWJ1dGVbMV0pKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjaGlsZHJlbic6XG4gICAgICAgIG9iai5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnVpbGRFbGVtZW50c1RyZWUoY2hpbGQpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBlbGVtZW50O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3VycmVudFRlbXBsYXRlKHBhbmVsKSB7XG4gIHJldHVybiB7XG4gICAgdGFnOiAnZGl2JyxcbiAgICBjbGFzc2VzOiBbJ2N1cnJlbnQtZGl2J10sXG4gICAgY2hpbGRyZW46IFtwYW5lbF0sXG4gIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkYWlseVRlbXBsYXRlKHBhbmVsQXJyYXkpIHtcbiAgcmV0dXJuIHtcbiAgICB0YWc6ICdkaXYnLFxuICAgIGNsYXNzZXM6IFsnZGFpbHktZGl2J10sXG4gICAgY2hpbGRyZW46IFsuLi5wYW5lbEFycmF5XSxcbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZ1bGxQYW5lbFRlbXBsYXRlKG9iaiwgaW5kZXgpIHtcbiAgY29uc3Qgb3V0cHV0ID0ge1xuICAgIHRhZzogJ2RpdicsXG4gICAgY2xhc3NlczogWydmdWxsLXBhbmVsJ10sXG4gICAgYXR0cmlidXRlczogW10sXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgY2xhc3NlczogWyd0b3AtcGFuZWwnXSxcbiAgICAgICAgLy8gaWNvbiwgbWFpbiwgdGVtcCwgZmVlbHNfbGlrZVxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRhZzogJ2ltZycsXG4gICAgICAgICAgICBjbGFzc2VzOiBbJ3dlYXRoZXItaWNvbiddLFxuICAgICAgICAgICAgYXR0cmlidXRlczogW1snc3JjJywgYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7b2JqLndlYXRoZXJbMF0uaWNvbn1AMngucG5nYF1dLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICBjbGFzc2VzOiBbJ21lZC1wYW5lbCddLFxuICAgICAgICAvLyBodW1pZGl0eSwgY2xvdWRzLCB3aW5kX3NwZWVkXG4gICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgIGNsYXNzZXM6IFsnbG93ZXItcGFuZWwnXSxcbiAgICAgICAgLy8gc3VucmlzZSwgc3Vuc2V0XG4gICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcblxuICBpZiAoaW5kZXggIT09IHVuZGVmaW5lZCkgb3V0cHV0LmF0dHJpYnV0ZXMucHVzaChbJ2RhdGEtaW5kZXgnLCBpbmRleF0pO1xuXG4gIHJldHVybiBvdXRwdXQ7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBidWlsZERpc3BsYXkgZnJvbSAnLi9idWlsZERpc3BsYXknO1xuXG5jb25zdCB1c2VyU2V0dGluZ3MgPSB7fTtcbmNvbnN0IGN1cnJlbnREYXRhID0ge307XG5jb25zdCBmb3JtID0gZG9jdW1lbnQuY2l0eUZvcm07XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuY29uc3QgZmlsdGVyT2JqID0gZnVuY3Rpb24gcmV0dXJuT2JqV2l0aFBhc3NlZEluUHJvcHMoYmFzZU9iaiwgcHJvcHMpIHtcbiAgY29uc3QgZmlsdGVyZWRPYmogPSBwcm9wcy5yZWR1Y2UoKG9iaiwgY3VycmVudFByb3ApID0+IHtcbiAgICBjb25zdCBuZXdPYmogPSB7IC4uLm9iaiB9O1xuICAgIG5ld09ialtjdXJyZW50UHJvcF0gPSBiYXNlT2JqW2N1cnJlbnRQcm9wXTtcbiAgICByZXR1cm4gbmV3T2JqO1xuICB9LCB7fSk7XG4gIHJldHVybiBmaWx0ZXJlZE9iajtcbn07XG5cbmNvbnN0IGNvcHlQcm9wcyA9IGZ1bmN0aW9uIGNvcHlFYWNoUHJvcE9mT2JqKGJhc2VPYmosIHRhcmdldE9iaikge1xuICBjb25zdCB0YXJnZXQgPSB0YXJnZXRPYmo7XG4gIE9iamVjdC5rZXlzKGJhc2VPYmopLmZvckVhY2goKHByb3ApID0+IHtcbiAgICB0YXJnZXRbcHJvcF0gPSBiYXNlT2JqW3Byb3BdO1xuICB9KTtcbn07XG5cbmNvbnN0IGdldENpdHkgPSBmdW5jdGlvbiBmZXRjaENpdHlEYXRhKGNpdHlOYW1lKSB7XG4gIHJldHVybiBmZXRjaChcbiAgICBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2NpdHlOYW1lfSZsaW1pdD01JmFwcGlkPWEwMWEyZmUxMTg0N2Y0ZjhmODY4N2I1MjZkNDI5ZjhkYCxcbiAgICB7XG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgfVxuICApO1xufTtcblxuY29uc3QgdXBkYXRlQ2l0eSA9IGFzeW5jIGZ1bmN0aW9uIGZsb3dDb250cm9sQ2l0eVVwZGF0ZSgpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBpbnB1dCA9IGZvcm0uY2l0eUlucHV0LnZhbHVlO1xuXG4gICAgY29uc3QgY2l0eURhdGEgPSBhd2FpdCBnZXRDaXR5KGlucHV0IHx8ICdNb250cmVhbCxDQScpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKChbcmVzcG9uc2VdKSA9PiByZXNwb25zZSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gZmlsdGVyT2JqKHJlc3BvbnNlLCBbJ25hbWUnLCAnY291bnRyeScsICdzdGF0ZScsICdsYXQnLCAnbG9uJ10pKTtcblxuICAgIGNvcHlQcm9wcyhjaXR5RGF0YSwgdXNlclNldHRpbmdzLmNpdHkpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gIH1cbn07XG5jb25zdCBnZXREYXRhID0gZnVuY3Rpb24gZmV0Y2hXZWF0aGVyRGF0YShjaXR5T2JqKSB7XG4gIHJldHVybiBmZXRjaChcbiAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7Y2l0eU9iai5sYXR9Jmxvbj0ke2NpdHlPYmoubG9ufSZleGNsdWRlPW1pbnV0ZWx5LGhvdXJseSZ1bml0cz1tZXRyaWMmbGFuZz1lbiZhcHBpZD1hMDFhMmZlMTE4NDdmNGY4Zjg2ODdiNTI2ZDQyOWY4ZGAsXG4gICAge1xuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgIH1cbiAgKTtcbn07XG5cbmNvbnN0IHVwZGF0ZURhdGEgPSBhc3luYyBmdW5jdGlvbiB1cGRhdGVDdXJyZW50RGF0YU9iaigpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0RGF0YSh1c2VyU2V0dGluZ3MuY2l0eSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBmaWx0ZXJPYmoocmVzcG9uc2UsIFsnY3VycmVudCcsICdkYWlseSddKSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50UHJvcHMgPSBbXG4gICAgICAgICAgJ3N1bnJpc2UnLFxuICAgICAgICAgICdzdW5zZXQnLFxuICAgICAgICAgICd0ZW1wJyxcbiAgICAgICAgICAnZmVlbHNfbGlrZScsXG4gICAgICAgICAgJ2h1bWlkaXR5JyxcbiAgICAgICAgICAnY2xvdWRzJyxcbiAgICAgICAgICAnd2luZF9zcGVlZCcsXG4gICAgICAgICAgJ3dlYXRoZXInLFxuICAgICAgICBdO1xuICAgICAgICByZXNwb25zZS5jdXJyZW50ID0gZmlsdGVyT2JqKHJlc3BvbnNlLmN1cnJlbnQsIGN1cnJlbnRQcm9wcyk7XG5cbiAgICAgICAgcmVzcG9uc2UuZGFpbHkgPSByZXNwb25zZS5kYWlseS5tYXAoKGRheSkgPT4gZmlsdGVyT2JqKGRheSwgY3VycmVudFByb3BzKSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgfSk7XG5cbiAgICBjb3B5UHJvcHMoZGF0YSwgY3VycmVudERhdGEpO1xuXG4gICAgY29uc29sZS5sb2codXNlclNldHRpbmdzLmNpdHkubmFtZSk7XG4gICAgY29uc29sZS5sb2coY3VycmVudERhdGEpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gIH1cbn07XG5cbmNvbnN0IHVwZGF0ZURpc3BsYXkgPSBmdW5jdGlvbiB1cGRhdGVEaXNwbGF5TmV3RGF0YSgpIHtcbiAgY29udGVudC5yZXBsYWNlQ2hpbGRyZW4oLi4uYnVpbGREaXNwbGF5KGN1cnJlbnREYXRhKSk7XG59O1xuXG5jb25zdCB1cGRhdGVXcmFwcGVyID0gZnVuY3Rpb24gdXBkYXRlRGF0YVRoZW5EaXNwbGF5KCkge1xuICB1cGRhdGVEYXRhKCkudGhlbih1cGRhdGVEaXNwbGF5KTtcbn07XG5cbihhc3luYyAoKSA9PiB7XG4gIGlmICgnd2VhdGhlckFwcCcgaW4gbG9jYWxTdG9yYWdlKSB7XG4gICAgY29uc3Qgc3RvcmFnZU9iaiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLndlYXRoZXJBcHApO1xuICAgIGNvcHlQcm9wcyhzdG9yYWdlT2JqLCB1c2VyU2V0dGluZ3MpO1xuICB9XG5cbiAgaWYgKCF1c2VyU2V0dGluZ3MuY2l0eSkge1xuICAgIGF3YWl0IHVwZGF0ZUNpdHkoKTtcbiAgfVxuXG4gIHVwZGF0ZVdyYXBwZXIoKTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS53ZWF0aGVyQXBwID0gSlNPTi5zdHJpbmdpZnkodXNlclNldHRpbmdzKTtcbiAgfSk7XG5cbiAgZm9ybS5jaXR5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdXBkYXRlQ2l0eSgpLnRoZW4odXBkYXRlV3JhcHBlcik7XG4gICAgZm9ybS5yZXNldCgpO1xuICB9KTtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=