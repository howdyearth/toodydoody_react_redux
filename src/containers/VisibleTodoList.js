import { connect } from 'react-redux';
import { toggleTodoStatusAction, removeTodoAction } from '../actions';
import TodoList from '../components/TodoList';
import * as dayfilter from '../utils/dayfilter';

const filterTodos = (todos, filter) => {
  switch (filter) {
    case dayfilter.DAY_SHOW_TODAY:
      return todos.filter(t => t.day === dayfilter.DAY_TODAY);
    case dayfilter.DAY_SHOW_TOMORROW:
      return todos.filter(t => t.day === dayfilter.DAY_TOMORROW);
    default:
      return todos;
  }
}

const mapStateToProps = (state) => {
  return {
    todos: filterTodos(state.todos, state.dayFilter)
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickTodoRemove: (id) => {
      dispatch(removeTodoAction(id));
    },
    onClickTodoStatus: (id) => {
      dispatch(toggleTodoStatusAction(id));
    }
  };
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;