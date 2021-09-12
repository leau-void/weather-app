/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const userSettings = {};
const currentData = {};

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
    let input;

    const cityData = await getCity(input || 'Montreal,CA')
      .then((response) => response.json())
      .then(([response]) => response)
      .then((response) => filterObj(response, ['name', 'country', 'state', 'lat', 'lon']));
    return cityData;
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
  } catch (err) {
    console.error(err);
  }
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
    userSettings.city = await updateCity();
  }

  updateData().then();

  console.log(currentData);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxHQUFHLElBQUk7QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0QsU0FBUztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxZQUFZLE9BQU8sWUFBWTtBQUMxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHVzZXJTZXR0aW5ncyA9IHt9O1xuY29uc3QgY3VycmVudERhdGEgPSB7fTtcblxuY29uc3QgZmlsdGVyT2JqID0gZnVuY3Rpb24gcmV0dXJuT2JqV2l0aFBhc3NlZEluUHJvcHMoYmFzZU9iaiwgcHJvcHMpIHtcbiAgY29uc3QgZmlsdGVyZWRPYmogPSBwcm9wcy5yZWR1Y2UoKG9iaiwgY3VycmVudFByb3ApID0+IHtcbiAgICBjb25zdCBuZXdPYmogPSB7IC4uLm9iaiB9O1xuICAgIG5ld09ialtjdXJyZW50UHJvcF0gPSBiYXNlT2JqW2N1cnJlbnRQcm9wXTtcbiAgICByZXR1cm4gbmV3T2JqO1xuICB9LCB7fSk7XG4gIHJldHVybiBmaWx0ZXJlZE9iajtcbn07XG5cbmNvbnN0IGdldENpdHkgPSBmdW5jdGlvbiBmZXRjaENpdHlEYXRhKGNpdHlOYW1lKSB7XG4gIHJldHVybiBmZXRjaChcbiAgICBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2NpdHlOYW1lfSZsaW1pdD01JmFwcGlkPWEwMWEyZmUxMTg0N2Y0ZjhmODY4N2I1MjZkNDI5ZjhkYCxcbiAgICB7XG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgfVxuICApO1xufTtcblxuY29uc3QgdXBkYXRlQ2l0eSA9IGFzeW5jIGZ1bmN0aW9uIGZsb3dDb250cm9sQ2l0eVVwZGF0ZSgpIHtcbiAgdHJ5IHtcbiAgICAvLyBjaGFuZ2UgdG8gZ2V0IHNlYXJjaCBpbnB1dCwgYW5kIHRvIGNvbnN0XG4gICAgbGV0IGlucHV0O1xuXG4gICAgY29uc3QgY2l0eURhdGEgPSBhd2FpdCBnZXRDaXR5KGlucHV0IHx8ICdNb250cmVhbCxDQScpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKChbcmVzcG9uc2VdKSA9PiByZXNwb25zZSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gZmlsdGVyT2JqKHJlc3BvbnNlLCBbJ25hbWUnLCAnY291bnRyeScsICdzdGF0ZScsICdsYXQnLCAnbG9uJ10pKTtcbiAgICByZXR1cm4gY2l0eURhdGE7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgfVxufTtcbmNvbnN0IGdldERhdGEgPSBmdW5jdGlvbiBmZXRjaFdlYXRoZXJEYXRhKGNpdHlPYmopIHtcbiAgcmV0dXJuIGZldGNoKFxuICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD9sYXQ9JHtjaXR5T2JqLmxhdH0mbG9uPSR7Y2l0eU9iai5sb259JmV4Y2x1ZGU9bWludXRlbHksaG91cmx5JmFwcGlkPWEwMWEyZmUxMTg0N2Y0ZjhmODY4N2I1MjZkNDI5ZjhkYCxcbiAgICB7XG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgfVxuICApO1xufTtcblxuY29uc3QgdXBkYXRlRGF0YSA9IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUN1cnJlbnREYXRhT2JqKCkge1xuICB0cnkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXREYXRhKHVzZXJTZXR0aW5ncy5jaXR5KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IGZpbHRlck9iaihyZXNwb25zZSwgWydjdXJyZW50JywgJ2RhaWx5J10pKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9wcyA9IFtcbiAgICAgICAgICAnZHQnLFxuICAgICAgICAgICdzdW5yaXNlJyxcbiAgICAgICAgICAnc3Vuc2V0JyxcbiAgICAgICAgICAndGVtcCcsXG4gICAgICAgICAgJ2ZlZWxzX2xpa2UnLFxuICAgICAgICAgICdodW1pZGl0eScsXG4gICAgICAgICAgJ2Nsb3VkcycsXG4gICAgICAgICAgJ3dpbmRfc3BlZWQnLFxuICAgICAgICAgICd3ZWF0aGVyJyxcbiAgICAgICAgXTtcbiAgICAgICAgcmVzcG9uc2UuY3VycmVudCA9IGZpbHRlck9iaihyZXNwb25zZS5jdXJyZW50LCBjdXJyZW50UHJvcHMpO1xuXG4gICAgICAgIHJlc3BvbnNlLmRhaWx5ID0gcmVzcG9uc2UuZGFpbHkubWFwKChkYXkpID0+IGZpbHRlck9iaihkYXksIGN1cnJlbnRQcm9wcykpO1xuXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgIH0pO1xuXG4gICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgocHJvcCkgPT4ge1xuICAgICAgY3VycmVudERhdGFbcHJvcF0gPSBkYXRhW3Byb3BdO1xuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gIH1cbn07XG5cbihhc3luYyAoKSA9PiB7XG4gIGlmICgnd2VhdGhlckFwcCcgaW4gbG9jYWxTdG9yYWdlKSB7XG4gICAgY29uc3Qgc3RvcmFnZU9iaiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLndlYXRoZXJBcHApO1xuICAgIE9iamVjdC5rZXlzKHN0b3JhZ2VPYmopLmZvckVhY2goKHByb3ApID0+IHtcbiAgICAgIHVzZXJTZXR0aW5nc1twcm9wXSA9IHN0b3JhZ2VPYmpbcHJvcF07XG4gICAgfSk7XG4gIH1cblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS53ZWF0aGVyQXBwID0gSlNPTi5zdHJpbmdpZnkodXNlclNldHRpbmdzKTtcbiAgfSk7XG5cbiAgaWYgKCF1c2VyU2V0dGluZ3MuY2l0eSkge1xuICAgIHVzZXJTZXR0aW5ncy5jaXR5ID0gYXdhaXQgdXBkYXRlQ2l0eSgpO1xuICB9XG5cbiAgdXBkYXRlRGF0YSgpLnRoZW4oKTtcblxuICBjb25zb2xlLmxvZyhjdXJyZW50RGF0YSk7XG59KSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9