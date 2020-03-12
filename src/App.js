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
          <p className="block2">
            IT Consultants, Developers, Security Specialists
          </p>
          <p className="block2">Linux/Windows Server Administration, System Architecture,</p>
          <p className="block2">and all other needs <a href="mailto:support@thelaxerz.us"><code>support@thelaxerz.us</code></a></p>
        </div>    
      </header>
      
  );
}

export default App;
