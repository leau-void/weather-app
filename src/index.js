import './styles/normalize.css';
import './styles/style.css';
import './styles/main.scss';
import buildDisplay from './buildDisplay';

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
  if (!coords) return false;
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
  content.replaceChildren(...buildDisplay(currentData, userSettings));
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
