export default function currentTemplate(panel) {
  return {
    tag: 'div',
    attributes: [['id', 'current-div']],
    children: [panel],
  };
}
