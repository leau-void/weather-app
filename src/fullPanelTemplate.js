import tz_lookup from 'tz-lookup';
import dateConversionWrapper from './dateConversionWrapper';
import unitConverter from './unitConverter';
import humidityIcon from './assets/icons/humidity-icon.png';
import windSpeedIcon from './assets/icons/wind_speed-icon.png';
import cloudinessIcon from './assets/icons/cloudiness-icon.png';
import sunriseIcon from './assets/icons/sunrise-icon.png';
import sunsetIcon from './assets/icons/sunset-icon.png';


export default function fullPanelTemplate(obj, settings, index) {
  const { tempUnit } = settings;
  const timeZoneString = tz_lookup(settings.city.lat, settings.city.lon)

  const stringifyTemp = (temp) => {
    const tempChecked = typeof temp === 'object' ? temp.day : temp;
    return `${unitConverter(tempChecked, tempUnit)} ${tempUnit}`;
  };
  const dateConversionMixin = (unix, format) => dateConversionWrapper(unix, format, timeZoneString)

  const output = {
    tag: 'div',
    classes: ['full-panel'],
    attributes: [],
    children: [
      {
        tag: 'div',
        classes: ['top-panel', 'panel-part'],
        // icon, main, temp, feels_like
        children: [
          {
            tag: 'img',
            classes: ['weather-icon'],
            attributes: [['src', `http://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`]],
          },
          {
            tag: 'div',
            classes: ['temp'],
            text: stringifyTemp(obj.temp),
          },
          {
            tag: 'h2',
            classes: ['desc'],
            text: obj.weather[0].main,
          },
          {
            tag: 'div',
            classes: ['feels'],
            text: `Feels like ${stringifyTemp(obj.feels_like)}`,
          },
        ],
      },
    ],
  };

  if (index !== undefined) {
    output.classes.push(['daily-panel']);
    output.children[0].children.unshift({
      tag: 'h3',
      classes: ['date'],
      text: dateConversionMixin(obj.dt, 'LLL do')
    })
  }

  if (obj.sunset) {
    output.children.push({
      tag: 'div',
      classes: ['med-panel', 'panel-part'],
      // humidity, clouds, wind_speed
      children: [
        {
          tag: 'div',
          classes: ['top-info'],
          children: [
            {
          tag: 'div',
          classes: ['med-label'],
          children: [
            {
              tag: 'img',
              classes: ['panel-icon'],
              attributes:[['src', humidityIcon]]
            },
            {
              tag: 'div',
              classes: ['med-text'],
              text: `${obj.humidity}%`,
            },
          ],
        },
        {
          tag: 'div',
          classes: ['med-label'],
          children: [
                        {
              tag: 'img',
              classes: ['panel-icon'],
              attributes:[['src', windSpeedIcon]]
            },
            {
              tag: 'div',
              classes: ['med-text'],
              text: `${obj.wind_speed} m/s`,
            },
          ],
        },
        {
          tag: 'div',
          classes: ['med-label'],
          children: [
                        {
              tag: 'img',
              classes: ['panel-icon'],
              attributes:[['src', cloudinessIcon]]
            },
            {
              tag: 'div',
              classes: ['med-text'],
              text: `${obj.clouds}%`,
            },
          ],
        },
          ]
        },
        {
          tag: 'div',
          classes: ['bottom-info'],
          children: [
            {
          tag: 'div',
          classes: ['lower-label'],
          children: [
                        {
              tag: 'img',
              classes: ['panel-icon'],
              attributes:[['src', sunriseIcon]]
            },
            {
              tag: 'div',
              classes: ['lower-text'],
              text: dateConversionMixin(obj.sunrise, 'HH:mm'),
            },
          ],
        },
        {
          tag: 'div',
          classes: ['lower-label'],
          children: [
                        {
              tag: 'img',
              classes: ['panel-icon'],
              attributes:[['src', sunsetIcon]]
            },
            {
              tag: 'div',
              classes: ['lower-text'],
              text: dateConversionMixin(obj.sunset, 'HH:mm'),
            },
          ],
        },
          ]
        },
      ],
    })
  } else {
    output.children[0].children.splice(-2)
    output.children[0].children.unshift({
      tag: 'h3',
      classes: ['hour'],
      text: dateConversionMixin(obj.dt, 'ccc hh a')
    })
  }


  return output;
}
