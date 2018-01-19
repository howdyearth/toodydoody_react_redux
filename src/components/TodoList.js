import React, { Component } from 'react';
import Todo from './Todo';


class TodoList extends Component {
  render() {
    return (
      <div className="todo-lists">
        <ul className="todo-list">
          {this.props.todos.map(todo => 
            <Todo
              key={todo.id}
              {...todo}
              onClickRemove={() => this.props.onClickTodoRemove(todo.id)}
              onClickStatus={() => this.props.onClickTodoStatus(todo.id)}
            />
          )}
        </ul>
      </div>
    );
  }
}

export default TodoList;