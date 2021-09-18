export default function hourlyTemplate(panelArray) {
  return {
    tag: 'div',
    classes: ['content__hourly'],
    children: [...panelArray],
  };
}
