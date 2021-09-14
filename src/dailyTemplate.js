export default function dailyTemplate(panelArray) {
  return {
    tag: 'div',
    classes: ['daily-div'],
    children: [...panelArray],
  };
}
