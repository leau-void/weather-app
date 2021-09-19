import buildElementsTree from './buildElementsTree';
import fullPanelTemplate from './fullPanelTemplate';
import hourlyTemplate from './hourlyTemplate';
import dailyTemplate from './dailyTemplate';
import currentTemplate from './currentTemplate';

export default function buildDisplay(data, settings) {
  const current = buildElementsTree(currentTemplate(fullPanelTemplate(data.current, settings)));
  current.children[0].classList.add('panel_type_current');
  const hourlyPanels = data.hourly.map((hour) => fullPanelTemplate(hour, settings));
  current.children[0].appendChild(buildElementsTree(hourlyTemplate(hourlyPanels)));
  const dailyPanels = data.daily.map((day, index) => fullPanelTemplate(day, settings, index));
  const daily = buildElementsTree(dailyTemplate(dailyPanels));

  return [current, daily];
}
