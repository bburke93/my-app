import React, { Component } from 'react';
import avatar from './avatar.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={avatar} className="App-avatar" alt="avatar" />
          <h2>Brandon's First React App</h2>
        </div>
        <p className="App-intro">
          This is my "Hello World" React App.
        </p>
      </div>
    );
  }
}

export default App;
