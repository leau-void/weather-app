/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const userSettings = {};
const currentData = {};
const form = document.cityForm;

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
    // change to get search input, and to const
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
    `https://api.openweathermap.org/data/2.5/onecall?lat=${cityObj.lat}&lon=${cityObj.lon}&exclude=minutely,hourly&appid=a01a2fe11847f4f8f8687b526d429f8d`,
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

const updateDisplay = function updateDisplayNewData() {
  console.log('yes');
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEdBQUcsSUFBSTtBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRCxTQUFTO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxZQUFZLE9BQU8sWUFBWTtBQUMxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLE9BQU87O0FBRVA7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdXNlclNldHRpbmdzID0ge307XG5jb25zdCBjdXJyZW50RGF0YSA9IHt9O1xuY29uc3QgZm9ybSA9IGRvY3VtZW50LmNpdHlGb3JtO1xuXG5jb25zdCBmaWx0ZXJPYmogPSBmdW5jdGlvbiByZXR1cm5PYmpXaXRoUGFzc2VkSW5Qcm9wcyhiYXNlT2JqLCBwcm9wcykge1xuICBjb25zdCBmaWx0ZXJlZE9iaiA9IHByb3BzLnJlZHVjZSgob2JqLCBjdXJyZW50UHJvcCkgPT4ge1xuICAgIGNvbnN0IG5ld09iaiA9IHsgLi4ub2JqIH07XG4gICAgbmV3T2JqW2N1cnJlbnRQcm9wXSA9IGJhc2VPYmpbY3VycmVudFByb3BdO1xuICAgIHJldHVybiBuZXdPYmo7XG4gIH0sIHt9KTtcbiAgcmV0dXJuIGZpbHRlcmVkT2JqO1xufTtcblxuY29uc3QgY29weVByb3BzID0gZnVuY3Rpb24gY29weUVhY2hQcm9wT2ZPYmooYmFzZU9iaiwgdGFyZ2V0T2JqKSB7XG4gIGNvbnN0IHRhcmdldCA9IHRhcmdldE9iajtcbiAgT2JqZWN0LmtleXMoYmFzZU9iaikuZm9yRWFjaCgocHJvcCkgPT4ge1xuICAgIHRhcmdldFtwcm9wXSA9IGJhc2VPYmpbcHJvcF07XG4gIH0pO1xufTtcblxuY29uc3QgZ2V0Q2l0eSA9IGZ1bmN0aW9uIGZldGNoQ2l0eURhdGEoY2l0eU5hbWUpIHtcbiAgcmV0dXJuIGZldGNoKFxuICAgIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7Y2l0eU5hbWV9JmxpbWl0PTUmYXBwaWQ9YTAxYTJmZTExODQ3ZjRmOGY4Njg3YjUyNmQ0MjlmOGRgLFxuICAgIHtcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICB9XG4gICk7XG59O1xuXG5jb25zdCB1cGRhdGVDaXR5ID0gYXN5bmMgZnVuY3Rpb24gZmxvd0NvbnRyb2xDaXR5VXBkYXRlKCkge1xuICB0cnkge1xuICAgIC8vIGNoYW5nZSB0byBnZXQgc2VhcmNoIGlucHV0LCBhbmQgdG8gY29uc3RcbiAgICBjb25zdCBpbnB1dCA9IGZvcm0uY2l0eUlucHV0LnZhbHVlO1xuXG4gICAgY29uc3QgY2l0eURhdGEgPSBhd2FpdCBnZXRDaXR5KGlucHV0IHx8ICdNb250cmVhbCxDQScpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKChbcmVzcG9uc2VdKSA9PiByZXNwb25zZSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gZmlsdGVyT2JqKHJlc3BvbnNlLCBbJ25hbWUnLCAnY291bnRyeScsICdzdGF0ZScsICdsYXQnLCAnbG9uJ10pKTtcblxuICAgIGNvcHlQcm9wcyhjaXR5RGF0YSwgdXNlclNldHRpbmdzLmNpdHkpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gIH1cbn07XG5jb25zdCBnZXREYXRhID0gZnVuY3Rpb24gZmV0Y2hXZWF0aGVyRGF0YShjaXR5T2JqKSB7XG4gIHJldHVybiBmZXRjaChcbiAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7Y2l0eU9iai5sYXR9Jmxvbj0ke2NpdHlPYmoubG9ufSZleGNsdWRlPW1pbnV0ZWx5LGhvdXJseSZhcHBpZD1hMDFhMmZlMTE4NDdmNGY4Zjg2ODdiNTI2ZDQyOWY4ZGAsXG4gICAge1xuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgIH1cbiAgKTtcbn07XG5cbmNvbnN0IHVwZGF0ZURhdGEgPSBhc3luYyBmdW5jdGlvbiB1cGRhdGVDdXJyZW50RGF0YU9iaigpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0RGF0YSh1c2VyU2V0dGluZ3MuY2l0eSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBmaWx0ZXJPYmoocmVzcG9uc2UsIFsnY3VycmVudCcsICdkYWlseSddKSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50UHJvcHMgPSBbXG4gICAgICAgICAgJ2R0JyxcbiAgICAgICAgICAnc3VucmlzZScsXG4gICAgICAgICAgJ3N1bnNldCcsXG4gICAgICAgICAgJ3RlbXAnLFxuICAgICAgICAgICdmZWVsc19saWtlJyxcbiAgICAgICAgICAnaHVtaWRpdHknLFxuICAgICAgICAgICdjbG91ZHMnLFxuICAgICAgICAgICd3aW5kX3NwZWVkJyxcbiAgICAgICAgICAnd2VhdGhlcicsXG4gICAgICAgIF07XG4gICAgICAgIHJlc3BvbnNlLmN1cnJlbnQgPSBmaWx0ZXJPYmoocmVzcG9uc2UuY3VycmVudCwgY3VycmVudFByb3BzKTtcblxuICAgICAgICByZXNwb25zZS5kYWlseSA9IHJlc3BvbnNlLmRhaWx5Lm1hcCgoZGF5KSA9PiBmaWx0ZXJPYmooZGF5LCBjdXJyZW50UHJvcHMpKTtcblxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICB9KTtcblxuICAgIGNvcHlQcm9wcyhkYXRhLCBjdXJyZW50RGF0YSk7XG5cbiAgICBjb25zb2xlLmxvZyh1c2VyU2V0dGluZ3MuY2l0eS5uYW1lKTtcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50RGF0YSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgfVxufTtcblxuY29uc3QgdXBkYXRlRGlzcGxheSA9IGZ1bmN0aW9uIHVwZGF0ZURpc3BsYXlOZXdEYXRhKCkge1xuICBjb25zb2xlLmxvZygneWVzJyk7XG59O1xuXG5jb25zdCB1cGRhdGVXcmFwcGVyID0gZnVuY3Rpb24gdXBkYXRlRGF0YVRoZW5EaXNwbGF5KCkge1xuICB1cGRhdGVEYXRhKCkudGhlbih1cGRhdGVEaXNwbGF5KTtcbn07XG5cbihhc3luYyAoKSA9PiB7XG4gIGlmICgnd2VhdGhlckFwcCcgaW4gbG9jYWxTdG9yYWdlKSB7XG4gICAgY29uc3Qgc3RvcmFnZU9iaiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLndlYXRoZXJBcHApO1xuICAgIGNvcHlQcm9wcyhzdG9yYWdlT2JqLCB1c2VyU2V0dGluZ3MpO1xuICB9XG5cbiAgaWYgKCF1c2VyU2V0dGluZ3MuY2l0eSkge1xuICAgIGF3YWl0IHVwZGF0ZUNpdHkoKTtcbiAgfVxuXG4gIHVwZGF0ZVdyYXBwZXIoKTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS53ZWF0aGVyQXBwID0gSlNPTi5zdHJpbmdpZnkodXNlclNldHRpbmdzKTtcbiAgfSk7XG5cbiAgZm9ybS5jaXR5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdXBkYXRlQ2l0eSgpLnRoZW4odXBkYXRlV3JhcHBlcik7XG4gICAgZm9ybS5yZXNldCgpO1xuICB9KTtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=