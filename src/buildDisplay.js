import buildElementsTree from './buildElementsTree';
import fullPanelTemplate from './fullPanelTemplate';
import dailyTemplate from './dailyTemplate';
import currentTemplate from './currentTemplate';

export default function buildDisplay(data) {
  const current = buildElementsTree(currentTemplate(fullPanelTemplate(data.current)));
  const dailyPanels = data.daily.map((day, index) => fullPanelTemplate(day, index));
  const daily = buildElementsTree(dailyTemplate(dailyPanels));
  return [current, daily];
}
