import './styles/normalize.css';
import './styles/style.css';
import './styles/main.scss';
import buildDisplay from './buildDisplay';

const userSettings = {};
const currentData = {};
const form = document.getElementsByClassName('form')[0];
const content = document.getElementsByClassName('content')[0];
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
    if (!pos) input = document.getElementsByClassName('form__input')[0].value;
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
      child.classList.contains('nav__tab_active_true')
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
    document.body.classList.add('body_theme_dark');
  } else {
    document.body.classList.remove('body_theme_dark');
  }
};

const toggleLoading = function toggleLoadingHidden() {
  loading.classList.toggle('loading__display_transparent');
  if (loading.classList.contains('loading__display_hidden')) {
    loading.classList.remove('loading__display_hidden');
  } else {
    window.setTimeout(() => loading.classList.add('loading__display_hidden'), 1000);
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
  const tempToggle = document.getElementsByClassName('switch__checkbox')[0];
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

  document.getElementsByClassName('nav')[0].addEventListener('click', (e) => {
    const { target } = e;
    if (!target.classList.contains('nav__tab') || target.classList.contains('nav__tab_active_true'))
      return;

    [...target.closest('nav').children].forEach((child) =>
      child.classList.remove('nav__tab_active_true')
    );
    target.classList.add('nav__tab_active_true');

    [...content.children].forEach((child) => child.classList.remove('active'));
    selectTab();
    //    document.getElementById(target.dataset.tab).classList.add('active');
  });

  document
    .getElementsByClassName('form__button_type_location')[0]
    .addEventListener('click', (e) => {
      buttonHandler(e, true);
    });
  document.getElementsByClassName('form__button_type_submit')[0].addEventListener('click', (e) => {
    buttonHandler(e);
  });
})();
