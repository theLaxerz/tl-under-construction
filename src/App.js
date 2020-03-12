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
            IT Consultants, Developers, Security Specialists
          </p>
          <p>Linux/Windows Server Administration, System Architecture,</p>
          <p>and all other needs <a href="mailto:support@thelaxerz.us"><code>support@thelaxerz.us</code></a></p>
        </div>    
      </header>
     
  );
}

export default App;
