export default function hourlyTemplate(panelArray) {
  return {
    tag: 'div',
    attributes: [['id', 'hourly-div']],
    classes: [],
    children: [...panelArray],
  };
}
