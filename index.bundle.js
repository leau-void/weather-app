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
    console.log(cityData.name);

    Object.keys(cityData).forEach((prop) => {
      userSettings.city[prop] = cityData[prop];
    });
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

    Object.keys(data).forEach((prop) => {
      currentData[prop] = data[prop];
    });
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
    Object.keys(storageObj).forEach((prop) => {
      userSettings[prop] = storageObj[prop];
    });
  }

  window.addEventListener('beforeunload', () => {
    localStorage.weatherApp = JSON.stringify(userSettings);
  });

  if (!userSettings.city) {
    await updateCity();
  }

  form.cityButton.addEventListener('click', (e) => {
    e.preventDefault();
    updateCity().then(updateWrapper);
    form.reset();
  });
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEdBQUcsSUFBSTtBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRCxTQUFTO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELFlBQVksT0FBTyxZQUFZO0FBQzFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB1c2VyU2V0dGluZ3MgPSB7fTtcbmNvbnN0IGN1cnJlbnREYXRhID0ge307XG5jb25zdCBmb3JtID0gZG9jdW1lbnQuY2l0eUZvcm07XG5cbmNvbnN0IGZpbHRlck9iaiA9IGZ1bmN0aW9uIHJldHVybk9ialdpdGhQYXNzZWRJblByb3BzKGJhc2VPYmosIHByb3BzKSB7XG4gIGNvbnN0IGZpbHRlcmVkT2JqID0gcHJvcHMucmVkdWNlKChvYmosIGN1cnJlbnRQcm9wKSA9PiB7XG4gICAgY29uc3QgbmV3T2JqID0geyAuLi5vYmogfTtcbiAgICBuZXdPYmpbY3VycmVudFByb3BdID0gYmFzZU9ialtjdXJyZW50UHJvcF07XG4gICAgcmV0dXJuIG5ld09iajtcbiAgfSwge30pO1xuICByZXR1cm4gZmlsdGVyZWRPYmo7XG59O1xuXG5jb25zdCBnZXRDaXR5ID0gZnVuY3Rpb24gZmV0Y2hDaXR5RGF0YShjaXR5TmFtZSkge1xuICByZXR1cm4gZmV0Y2goXG4gICAgYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtjaXR5TmFtZX0mbGltaXQ9NSZhcHBpZD1hMDFhMmZlMTE4NDdmNGY4Zjg2ODdiNTI2ZDQyOWY4ZGAsXG4gICAge1xuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgIH1cbiAgKTtcbn07XG5cbmNvbnN0IHVwZGF0ZUNpdHkgPSBhc3luYyBmdW5jdGlvbiBmbG93Q29udHJvbENpdHlVcGRhdGUoKSB7XG4gIHRyeSB7XG4gICAgLy8gY2hhbmdlIHRvIGdldCBzZWFyY2ggaW5wdXQsIGFuZCB0byBjb25zdFxuICAgIGNvbnN0IGlucHV0ID0gZm9ybS5jaXR5SW5wdXQudmFsdWU7XG5cbiAgICBjb25zdCBjaXR5RGF0YSA9IGF3YWl0IGdldENpdHkoaW5wdXQgfHwgJ01vbnRyZWFsLENBJylcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKFtyZXNwb25zZV0pID0+IHJlc3BvbnNlKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBmaWx0ZXJPYmoocmVzcG9uc2UsIFsnbmFtZScsICdjb3VudHJ5JywgJ3N0YXRlJywgJ2xhdCcsICdsb24nXSkpO1xuICAgIGNvbnNvbGUubG9nKGNpdHlEYXRhLm5hbWUpO1xuXG4gICAgT2JqZWN0LmtleXMoY2l0eURhdGEpLmZvckVhY2goKHByb3ApID0+IHtcbiAgICAgIHVzZXJTZXR0aW5ncy5jaXR5W3Byb3BdID0gY2l0eURhdGFbcHJvcF07XG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgfVxufTtcbmNvbnN0IGdldERhdGEgPSBmdW5jdGlvbiBmZXRjaFdlYXRoZXJEYXRhKGNpdHlPYmopIHtcbiAgcmV0dXJuIGZldGNoKFxuICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD9sYXQ9JHtjaXR5T2JqLmxhdH0mbG9uPSR7Y2l0eU9iai5sb259JmV4Y2x1ZGU9bWludXRlbHksaG91cmx5JmFwcGlkPWEwMWEyZmUxMTg0N2Y0ZjhmODY4N2I1MjZkNDI5ZjhkYCxcbiAgICB7XG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgfVxuICApO1xufTtcblxuY29uc3QgdXBkYXRlRGF0YSA9IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUN1cnJlbnREYXRhT2JqKCkge1xuICB0cnkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXREYXRhKHVzZXJTZXR0aW5ncy5jaXR5KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IGZpbHRlck9iaihyZXNwb25zZSwgWydjdXJyZW50JywgJ2RhaWx5J10pKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9wcyA9IFtcbiAgICAgICAgICAnZHQnLFxuICAgICAgICAgICdzdW5yaXNlJyxcbiAgICAgICAgICAnc3Vuc2V0JyxcbiAgICAgICAgICAndGVtcCcsXG4gICAgICAgICAgJ2ZlZWxzX2xpa2UnLFxuICAgICAgICAgICdodW1pZGl0eScsXG4gICAgICAgICAgJ2Nsb3VkcycsXG4gICAgICAgICAgJ3dpbmRfc3BlZWQnLFxuICAgICAgICAgICd3ZWF0aGVyJyxcbiAgICAgICAgXTtcbiAgICAgICAgcmVzcG9uc2UuY3VycmVudCA9IGZpbHRlck9iaihyZXNwb25zZS5jdXJyZW50LCBjdXJyZW50UHJvcHMpO1xuXG4gICAgICAgIHJlc3BvbnNlLmRhaWx5ID0gcmVzcG9uc2UuZGFpbHkubWFwKChkYXkpID0+IGZpbHRlck9iaihkYXksIGN1cnJlbnRQcm9wcykpO1xuXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgIH0pO1xuXG4gICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgocHJvcCkgPT4ge1xuICAgICAgY3VycmVudERhdGFbcHJvcF0gPSBkYXRhW3Byb3BdO1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKGN1cnJlbnREYXRhKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICB9XG59O1xuXG5jb25zdCB1cGRhdGVEaXNwbGF5ID0gZnVuY3Rpb24gdXBkYXRlRGlzcGxheU5ld0RhdGEoKSB7XG4gIGNvbnNvbGUubG9nKCd5ZXMnKTtcbn07XG5cbmNvbnN0IHVwZGF0ZVdyYXBwZXIgPSBmdW5jdGlvbiB1cGRhdGVEYXRhVGhlbkRpc3BsYXkoKSB7XG4gIHVwZGF0ZURhdGEoKS50aGVuKHVwZGF0ZURpc3BsYXkpO1xufTtcblxuKGFzeW5jICgpID0+IHtcbiAgaWYgKCd3ZWF0aGVyQXBwJyBpbiBsb2NhbFN0b3JhZ2UpIHtcbiAgICBjb25zdCBzdG9yYWdlT2JqID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2Uud2VhdGhlckFwcCk7XG4gICAgT2JqZWN0LmtleXMoc3RvcmFnZU9iaikuZm9yRWFjaCgocHJvcCkgPT4ge1xuICAgICAgdXNlclNldHRpbmdzW3Byb3BdID0gc3RvcmFnZU9ialtwcm9wXTtcbiAgICB9KTtcbiAgfVxuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLndlYXRoZXJBcHAgPSBKU09OLnN0cmluZ2lmeSh1c2VyU2V0dGluZ3MpO1xuICB9KTtcblxuICBpZiAoIXVzZXJTZXR0aW5ncy5jaXR5KSB7XG4gICAgYXdhaXQgdXBkYXRlQ2l0eSgpO1xuICB9XG5cbiAgZm9ybS5jaXR5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdXBkYXRlQ2l0eSgpLnRoZW4odXBkYXRlV3JhcHBlcik7XG4gICAgZm9ybS5yZXNldCgpO1xuICB9KTtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=