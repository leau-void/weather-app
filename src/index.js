const userSettings = {};

if ('weatherApp' in localStorage) {
  Object.keys(localStorage.weatherApp).forEach((prop) => {
    userSettings[prop] = localStorage.weatherApp[prop];
  });
}

let currentData;

const getData = async function (cityObj) {};

const getCity = function fetchCityData(cityName) {
  return fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=a01a2fe11847f4f8f8687b526d429f8d`,
    {
      mode: 'cors',
    }
  );
};

const filterCity = function filterCityObjData(cityObj) {
  const filteredObj = { ...cityObj };
  if ('local_names' in filteredObj) delete filteredObj.local_names;
  return filteredObj;
};

const updateCity = async function flowControlCityUpdate() {
  try {
    // change to get search input, and to const
    let input;

    let cityData = await getCity(input || 'Montreal,CA');
    cityData = await cityData.json();
    [cityData] = cityData;
    cityData = filterCity(cityData);

    userSettings.city = cityData;
    console.log(cityData);
  } catch (err) {
    console.log(err);
  }
};

updateCity();
