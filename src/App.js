import React from 'react';

import logo from './logo.svg';
import './App.css';
// eslint-disable-next-line
import { configure } from '@testing-library/react';

function App() {
  return (
      <header className="App-header">
        <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        </div>
        {/* Title */}
        <div className="title">
          theLaxerz 
        </div>
        {/* HeaderItems */}
        <div className="block2">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </div>  
        <div>  
          <a
            className="block3"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>   
      </header>
     
  );
}

export default App;
