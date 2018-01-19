export const DAY_TODAY = 'utils/dayfilter/DAY_TODAY';
export const DAY_TOMORROW = 'utils/dayfilter/DAY_TOMORROW';

export const DAY_SHOW_TODAY = 'utils/dayfilter/DAY_SHOW_TODAY';
export const DAY_SHOW_TOMORROW = 'utils/dayfilter/DAY_SHOW_TOMORROW';

const filterMapDay = {
  [DAY_SHOW_TODAY]: DAY_TODAY,
  [DAY_SHOW_TOMORROW]: DAY_TOMORROW
}

export function filterToDay(dayFilter) {
  return filterMapDay[dayFilter];
}