export default function currentTemplate(panel) {
  return {
    tag: 'div',
    classes: ['active'],
    attributes: [['id', 'current-div']],
    children: [panel],
  };
}
