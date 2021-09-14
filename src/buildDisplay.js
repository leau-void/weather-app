import buildElementsTree from './buildElementsTree';
import fullPanelTemplate from './fullPanelTemplate';
import dailyTemplate from './dailyTemplate';
import currentTemplate from './currentTemplate';

export default function buildDisplay(data, settings) {
  const current = buildElementsTree(currentTemplate(fullPanelTemplate(data.current, settings)));
  const dailyPanels = data.daily.map((day, index) => fullPanelTemplate(day, settings, index));
  const daily = buildElementsTree(dailyTemplate(dailyPanels));

  return [current, daily];
}
