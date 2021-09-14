export default function currentTemplate(panel) {
  return {
    tag: 'div',
    classes: ['current-div', 'active'],
    children: [panel],
  };
}
