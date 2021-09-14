import { fromUnixTime, lightFormat } from 'date-fns';
import { te } from 'date-fns/locale';
import unitConverter from './unitConverter';

export default function fullPanelTemplate(obj, settings, index) {
  const { tempUnit } = settings;
  const stringifyTemp = (temp) => {
    const tempChecked = typeof temp === 'object' ? temp.day : temp;
    return `${unitConverter(tempChecked, tempUnit)} ${tempUnit}`;
  };
  const convertUnix = (unix) => lightFormat(fromUnixTime(unix), 'HH:mm');
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
            tag: 'h1',
            classes: ['desc'],
            text: obj.weather[0].main,
          },
          {
            tag: 'div',
            classes: ['temp'],
            text: stringifyTemp(obj.temp),
          },
          {
            tag: 'div',
            classes: ['feels'],
            text: `Feels like ${stringifyTemp(obj.feels_like)}`,
          },
        ],
      },
      {
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
        ],
      },
      {
        tag: 'div',
        classes: ['lower-panel', 'panel-part'],
        // sunrise, sunset
        children: [
          {
            tag: 'label',
            classes: ['lower-label'],
            text: 'Sunrise',
            children: [
              {
                tag: 'div',
                classes: ['lower-text'],
                text: convertUnix(obj.sunrise),
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
                text: convertUnix(obj.sunset),
              },
            ],
          },
        ],
      },
    ],
  };

  if (index !== undefined) output.attributes.push(['data-index', index]);

  return output;
}
