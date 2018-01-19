import {TODO_ADD, TODO_TOGGLE_STATUS, TODO_REMOVE, DAY_FILTER_SET} from './types';
import {v4} from 'node-uuid';
import { TODO_PENDING } from '../utils/status';


export const addTodoAction = (text, day) => {
  return {
    type: TODO_ADD,
    payload: {
      id: v4(),
      text: text,
      status: TODO_PENDING,
      day: day
    }
  };
}

export const toggleTodoStatusAction = (id) => {
  return {
    type: TODO_TOGGLE_STATUS,
    payload: {
      id
    }
  };
}

export const removeTodoAction = (id) => {
  return {
    type: TODO_REMOVE,
    payload: {
      id
    }
  };
}

export const setDayFilter = (dayFilter) => {
  return {
    type: DAY_FILTER_SET,
    payload: {
      dayFilter
    }
  };
}
