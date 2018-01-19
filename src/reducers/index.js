import { combineReducers } from 'redux';
import todosReducer from './todos';
import dayFilterReducer from './dayFilter'

const todoAppReducer = combineReducers({
  todos: todosReducer,
  dayFilter: dayFilterReducer,
});

export default todoAppReducer;