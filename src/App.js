import React from 'react';
import logo from './weather-25-512.png';
import './App.css';

import Input from './Input.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} width="200px" height="200px" />
        <h1>Weather Tracker</h1>

        <Input />
      </header>
    </div>
  );
}

export default App;
