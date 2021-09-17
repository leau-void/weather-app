export default function dailyTemplate(panelArray) {
  return {
    tag: 'div',
    classes: ['content__daily'],
    children: [...panelArray],
  };
}
