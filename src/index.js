import buildDisplay from './buildDisplay';

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

const selectTab = function setActiveTab() {
  if (
    !content.children[0].classList.contains('active') &&
    !content.children[1].classList.contains('active')
  ) {
    const activeTab = [...document.querySelector('nav').children].find((child) =>
      child.classList.contains('active-tab')
    );
    document.getElementById(activeTab.dataset.tab).classList.add('active');
  }
};

const updateDisplay = function updateDisplayNewData() {
  content.replaceChildren(...buildDisplay(currentData, userSettings));
  selectTab();

  document.querySelector('h1').textContent = userSettings.city.name;

  // dark mode for night
  if (currentData.current.weather[0].icon.slice(-1) === 'n') {
    document.body.dataset.theme = 'dark';
  } else {
    document.body.dataset.theme = 'light';
  }
};

const updateWrapper = function updateDataThenDisplay() {
  updateData().then(updateDisplay);
};

(async () => {
  const tempToggle = document.querySelector('#temp-toggle');
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
    const indexActiveDaily = [...content.children[1].children].findIndex((child) =>
      child.classList.contains('active')
    );

    userSettings.tempUnit = userSettings.tempUnit === '°C' ? '°F' : '°C';
    updateDisplay();

    if (indexActiveDaily > -1) {
      content.children[1].children[indexActiveDaily].classList.add('active');
    }
  });

  content.addEventListener('click', (e) => {
    const { target } = e;
    if (
      !target.closest('.full-panel') ||
      target.closest('.full-panel').dataset.index === undefined //
    )
      return;

    [...content.children[1].children].forEach((child) => child.classList.remove('active'));
    target.closest('.full-panel').classList.add('active');
  });

  document.querySelector('nav').addEventListener('click', (e) => {
    const { target } = e;
    if (!target.classList.contains('tab') || target.classList.contains('active-tab')) return;

    [...target.closest('nav').children].forEach((child) => child.classList.remove('active-tab'));
    target.classList.add('active-tab');

    [...content.children].forEach((child) => child.classList.remove('active'));
    selectTab();
    //    document.getElementById(target.dataset.tab).classList.add('active');
  });

  form.cityButton.addEventListener('click', (e) => {
    e.preventDefault();
    updateCity().then(updateWrapper);
    form.reset();
  });
})();
