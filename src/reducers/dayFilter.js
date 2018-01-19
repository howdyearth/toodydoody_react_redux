import { DAY_FILTER_SET } from '../actions/types'
import { DAY_SHOW_TODAY } from '../utils/dayfilter';

const dayFilter = (state=DAY_SHOW_TODAY, action) => {
  if (action.type === DAY_FILTER_SET) {
    return action.payload.dayFilter;
  }
  return state;
}

export default dayFilter;