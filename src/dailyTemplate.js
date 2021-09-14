export default function dailyTemplate(panelArray) {
  return {
    tag: 'div',
    attributes: [['id', 'daily-div']],
    classes: [],
    children: [...panelArray],
  };
}
