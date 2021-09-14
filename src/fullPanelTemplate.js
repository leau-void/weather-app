import unitConverter from './unitConverter';

export default function fullPanelTemplate(obj, settings, index) {
  const { tempUnit } = settings;
  const stringifyTemp = (value) => `${unitConverter(value, tempUnit)} ${tempUnit}`;
  const output = {
    tag: 'div',
    classes: ['full-panel'],
    attributes: [],
    children: [
      {
        tag: 'div',
        classes: ['top-panel'],
        // icon, main, temp
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
            tag: 'temp',
            text: stringifyTemp(obj.temp),
          },
        ],
      },
      {
        tag: 'div',
        classes: ['med-panel'],
        // humidity, clouds, wind_speed, feels_like
        children: [],
      },
      {
        tag: 'div',
        classes: ['lower-panel'],
        // sunrise, sunset
        children: [],
      },
    ],
  };

  if (index !== undefined) output.attributes.push(['data-index', index]);

  return output;
}
