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
  const timeZoneString = tz_lookup(settings.city.lat, settings.city.lon);

  const stringifyTemp = (temp) => {
    const tempChecked = typeof temp === 'object' ? temp.day : temp;
    return `${unitConverter(tempChecked, tempUnit)} ${tempUnit}`;
  };
  const dateConversionMixin = (unix, format) => dateConversionWrapper(unix, format, timeZoneString);

  const output = {
    tag: 'div',
    classes: ['panel'],
    attributes: [],
    children: [
      {
        tag: 'div',
        classes: ['panel__main'],
        // icon, main, temp, feels_like
        children: [
          {
            tag: 'img',
            classes: ['panel__weather-icon'],
            attributes: [['src', `http://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`]],
          },
          {
            tag: 'div',
            classes: ['panel__text'],
            text: stringifyTemp(obj.temp),
          },
          {
            tag: 'h2',
            classes: ['panel__text'],
            text: obj.weather[0].main,
          },
          {
            tag: 'div',
            classes: ['panel__text'],
            text: `Feels like ${stringifyTemp(obj.feels_like)}`,
          },
        ],
      },
    ],
  };

  if (obj.sunset) {
    output.children.push({
      tag: 'div',
      classes: ['panel__more-info'],
      // humidity, clouds, wind_speed
      children: [
        {
          tag: 'div',
          classes: ['panel__more-info_half'],
          children: [
            {
              tag: 'div',
              classes: ['panel__label'],
              children: [
                {
                  tag: 'img',
                  classes: ['panel__label-icon'],
                  attributes: [['src', humidityIcon]],
                },
                {
                  tag: 'div',
                  classes: ['panel__text'],
                  text: `${obj.humidity}%`,
                },
              ],
            },
            {
              tag: 'div',
              classes: ['panel__label'],
              children: [
                {
                  tag: 'img',
                  classes: ['panel__label-icon'],
                  attributes: [['src', windSpeedIcon]],
                },
                {
                  tag: 'div',
                  classes: ['panel__text'],
                  text: `${obj.wind_speed} m/s`,
                },
              ],
            },
            {
              tag: 'div',
              classes: ['panel__label'],
              children: [
                {
                  tag: 'img',
                  classes: ['panel__label-icon'],
                  attributes: [['src', cloudinessIcon]],
                },
                {
                  tag: 'div',
                  classes: ['panel__text'],
                  text: `${obj.clouds}%`,
                },
              ],
            },
          ],
        },
        {
          tag: 'div',
          classes: ['panel__more-info_half'],
          children: [
            {
              tag: 'div',
              classes: ['panel__label'],
              children: [
                {
                  tag: 'img',
                  classes: ['panel__label-icon'],
                  attributes: [['src', sunriseIcon]],
                },
                {
                  tag: 'div',
                  classes: ['panel__text'],
                  text: dateConversionMixin(obj.sunrise, 'HH:mm'),
                },
              ],
            },
            {
              tag: 'div',
              classes: ['panel__label'],
              children: [
                {
                  tag: 'img',
                  classes: ['panel__label-icon'],
                  attributes: [['src', sunsetIcon]],
                },
                {
                  tag: 'div',
                  classes: ['panel__text'],
                  text: dateConversionMixin(obj.sunset, 'HH:mm'),
                },
              ],
            },
          ],
        },
      ],
    });
  } else {
    output.classes.push('panel_type_hourly');
    output.children[0].children.splice(-2);
    output.children[0].children.unshift({
      tag: 'h3',
      classes: ['panel__hourly-time'],
      text: dateConversionMixin(obj.dt, 'ccc hh a'),
    });
  }

  if (index !== undefined) {
    output.classes.push(['panel_type_daily']);
    output.children[1].classes.push('panel__more-info_type_daily');
    output.children[0].children.unshift({
      tag: 'h3',
      classes: ['date'],
      text: dateConversionMixin(obj.dt, 'LLL do'),
    });
    output.children.push({
      tag: 'div',
      classes: ['panel__daily-temps'],
      children: [
        {
          tag: 'div',
          text: 'Min',
          classes: ['panel', 'panel_type_daily-temps'],
          children: [
            {
              tag: 'div',
              text: stringifyTemp(obj.temp.min),
              classes: ['panel__text'],
            },
          ],
        },
        {
          tag: 'div',
          text: 'Max',
          classes: ['panel', 'panel_type_daily-temps'],
          children: [
            {
              tag: 'div',
              text: stringifyTemp(obj.temp.max),
              classes: ['panel__text'],
            },
          ],
        },
        {
          tag: 'div',
          text: 'Morning',
          classes: ['panel', 'panel_type_daily-temps'],
          children: [
            {
              tag: 'div',
              text: stringifyTemp(obj.temp.morn),
              classes: ['panel__text'],
            },
          ],
        },
        {
          tag: 'div',
          text: 'Day',
          classes: ['panel', 'panel_type_daily-temps'],
          children: [
            {
              tag: 'div',
              text: stringifyTemp(obj.temp.day),
              classes: ['panel__text'],
            },
          ],
        },
        {
          tag: 'div',
          text: 'Eve',
          classes: ['panel', 'panel_type_daily-temps'],
          children: [
            {
              tag: 'div',
              text: stringifyTemp(obj.temp.eve),
              classes: ['panel__text'],
            },
          ],
        },
        {
          tag: 'div',
          text: 'Night',
          classes: ['panel', 'panel_type_daily-temps'],
          children: [
            {
              tag: 'div',
              text: stringifyTemp(obj.temp.night),
              classes: ['panel__text'],
            },
          ],
        },
      ],
    });
  }

  return output;
}
