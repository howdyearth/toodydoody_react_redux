import React, { Component } from 'react';
import Menu from './components/Menu';
import VisibleTodoList from './containers/VisibleTodoList';
import AddTodo from './containers/AddTodo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="center-block">
        <Menu />
        <VisibleTodoList />
        <AddTodo />
      </div>
    );
  }
}

export default App;
