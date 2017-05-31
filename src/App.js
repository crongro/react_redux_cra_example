import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import TodoContainer from './TodoContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <TodoContainer />
      </div>
    );
  }
}

export default App;
