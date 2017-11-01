import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodosPlate from './TodosPlate.js';

class App extends Component {
  render() {
    return (
      <div className="flex-box">
        <h1 className="title">TODOS</h1>
        <TodosPlate />
      </div>
    );
  }
}

export default App;
