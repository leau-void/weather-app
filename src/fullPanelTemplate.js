import tz_lookup from 'tz-lookup';
import dateConversionWrapper from './dateConversionWrapper';
import unitConverter from './unitConverter';

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
          tag: 'label',
          classes: ['med-label'],
          text: 'Humidity',
          children: [
            {
              tag: 'div',
              classes: ['med-text'],
              text: `${obj.humidity}%`,
            },
          ],
        },
        {
          tag: 'label',
          classes: ['med-label'],
          text: 'Wind Speed',
          children: [
            {
              tag: 'div',
              classes: ['med-text'],
              text: `${obj.wind_speed} m/s`,
            },
          ],
        },
        {
          tag: 'label',
          classes: ['med-label'],
          text: 'Cloudiness',
          children: [
            {
              tag: 'div',
              classes: ['med-text'],
              text: `${obj.clouds}%`,
            },
          ],
        },
        {
          tag: 'label',
          classes: ['lower-label'],
          text: 'Sunrise',
          children: [
            {
              tag: 'div',
              classes: ['lower-text'],
              text: dateConversionMixin(obj.sunrise, 'HH:mm'),
            },
          ],
        },
        {
          tag: 'label',
          classes: ['lower-label'],
          text: 'Sunset',
          children: [
            {
              tag: 'div',
              classes: ['lower-text'],
              text: dateConversionMixin(obj.sunset, 'HH:mm'),
            },
          ],
        },
      ],
    })
  } else {
    output.children[0].children.splice(-2)
    output.children[0].children.unshift({
      tag: 'h3',
      classes: ['hour'],
      text: `${dateConversionMixin(obj.dt, 'HH')}H`
    })
  }


  return output;
}
