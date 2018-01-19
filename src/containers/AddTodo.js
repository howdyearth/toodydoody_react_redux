import { connect } from 'react-redux';
import { addTodoAction } from '../actions';
import TodoInput from '../components/TodoInput';
import { filterToDay } from '../utils/dayfilter';


const mapStateToProps = (state) => {
  return {
    dayFilter: state.dayFilter
  };
}

// https://github.com/reactjs/react-redux/issues/237#issuecomment-168817739
const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dayFilter } = stateProps;
  const { dispatch } = dispatchProps;

  const selectedDay = filterToDay(dayFilter);

  return {
    ...ownProps,
    onClickAdd: (text) => dispatch(addTodoAction(text, selectedDay))
  };
}

const AddTodo = connect(
  mapStateToProps,
  null,
  mergeProps
)(TodoInput);

export default AddTodo;