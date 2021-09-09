const userSettings = {};
const currentData = {};

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

    let cityData = await getCity(input || 'Montreal,CA')
      .then((response) => response.json())
      .then(([response]) => response)
      .then((response) => {
        const { local_names, ...noLocNames } = response;
        return noLocNames;
      });
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
      .then((response) => {
        const { lat, lon, timezone, timezone_offset, ...filteredObj } = response;
        return filteredObj;
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
