import React from 'react';
import logo from './logo.svg';
import './App.css';
// import { makeStyles } from '@material-ui/core/styles';
// import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
// import Button from '@material-ui/core/Button';
// import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
import sideNav from './sidenav.js';

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
      <body>
        <SwipeableDrawer
        open={state.left}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
        ></SwipeableDrawer>
      </body>

      
  );
}

export default App;
