export default function dailyTemplate(panelArray) {
  return {
    tag: 'div',
    classes: ['content__daily', 'content__part'],
    children: [...panelArray],
  };
}
