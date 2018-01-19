import React, { Component } from 'react';
import { TODO_PENDING, TODO_IN_PROGRESS, TODO_DONE } from '../utils/status';

class Todo extends Component {
  constructor(props) {
    super(props);

    this.statusMapClass = {
      [TODO_PENDING]: "td-unfin",
      [TODO_IN_PROGRESS]: "td-soonfin", 
      [TODO_DONE]: "td-fin"
    };
    // GUI state
    this.state = {hover: false}
  }

  handleMouseOver = () => {
    this.setState({hover: true});
  }

  handleMouseOut = () => {
    this.setState({hover: false});
  }

  render() {
    const hoverStyle = this.state.hover ? 'td-delete td-delete-hover' : 'td-delete';
    return (
      <li
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
      >
        <span
          onClick={this.props.onClickRemove}
          className={hoverStyle}
        >×</span>
        <span
          onClick={this.props.onClickStatus}
          className={this.statusMapClass[this.props.status]}
        ></span>
        <p>{this.props.text}</p>
      </li>
    );
  }
}

export default Todo;