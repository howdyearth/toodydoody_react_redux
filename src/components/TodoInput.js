import React, { Component } from 'react';

class TodoInput extends Component {

  handleAddClick = () => {
    this.props.onClickAdd(this.input.value);
    this.input.value = '';
  }

  handleAddEnter = (event) => {
    if (event.key === 'Enter')
      this.handleAddClick();
  }

  render() {
    return (
      <div className="add-todo-box">
        <input
          ref={node => {this.input = node}}
          onKeyPress={this.handleAddEnter}
          className="add-todo"
          type="text"
          placeholder="Type your task here"
        />
        <span
          className="td-add"
          onClick={this.handleAddClick}
        >+</span>
      </div>
    );
  }
}

export default TodoInput;