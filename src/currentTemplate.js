export default function currentTemplate(panel) {
  return {
    tag: 'div',
    classes: ['content__current'],
    children: [panel],
  };
}
