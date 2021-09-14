export default function fullPanelTemplate(obj, index) {
  const output = {
    tag: 'div',
    classes: ['full-panel'],
    attributes: [],
    children: [
      {
        tag: 'div',
        classes: ['top-panel'],
        // icon, main, temp, feels_like
        children: [
          {
            tag: 'img',
            classes: ['weather-icon'],
            attributes: [['src', `http://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`]],
          },
        ],
      },
      {
        tag: 'div',
        classes: ['med-panel'],
        // humidity, clouds, wind_speed
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
