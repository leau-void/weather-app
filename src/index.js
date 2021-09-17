import './styles/normalize.css';
import './styles/style.css';
import buildDisplay from './buildDisplay';

const userSettings = {};
const currentData = {};
const form = document.cityForm;
const content = document.getElementById('content');
const loading = document.getElementsByClassName('loading')[0];

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
    if (!pos) input = form.cityInput.value;
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
    // removed hourly for test
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

const toggleLoading = function toggleLoadingHidden() {
  loading.classList.toggle('loading--transparent');
  if (loading.classList.contains('loading--hidden')) {
    loading.classList.remove('loading--hidden');
  } else {
    window.setTimeout(() => loading.classList.add('loading--hidden'), 1000);
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
    if (!target.closest('.daily-panel')) return;

    [...content.children[1].children].forEach((child) => child.classList.remove('active'));
    target.closest('.daily-panel').classList.add('active');
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

  document.getElementsByClassName('form__button--location')[0].addEventListener('click', (e) => {
    buttonHandler(e, true);
  });
  form.cityButton.addEventListener('click', (e) => {
    buttonHandler(e);
  });
})();
