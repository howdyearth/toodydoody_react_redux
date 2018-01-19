import {TODO_ADD, TODO_TOGGLE_STATUS, TODO_REMOVE} from '../actions/types';
import { isEmpty } from '../utils/validators';
import { nextStatus } from '../utils/status';


const todo = (state=[], action) => {
  switch (action.type) {
    case TODO_ADD:
      // validate form
      if (isEmpty(action.payload.text))
        return {};

      return {
        id: action.payload.id,
        text: action.payload.text,
        status: action.payload.status,
        day: action.payload.day,
      };
    case TODO_TOGGLE_STATUS:
      if (state.id !== action.payload.id) {
        return state;
      }

      return Object.assign({}, state, {
        status: nextStatus(state.status)
      });
    default:
      return state;
  }
}

const todosReducer = (state=[], action) => {
	switch (action.type) {
		case TODO_ADD:
			return [
        ...state,
        todo(undefined, action)
      ];
    case TODO_TOGGLE_STATUS:
      return state.map(t => todo(t, action));
    case TODO_REMOVE:
      return state.filter(item => item.id !== action.payload.id);
    default:
      return state;
	}
}

export default todosReducer;