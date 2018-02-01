import React, { Component } from 'react';
import { Userboard } from './components/Userboard.js';
import Login from './components/Login';
import './styles/App.css';

//
/*
  An array with hardcoded todo values which are objects.
*/



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      docked: false,
      open: false,
      transitions: true,
      touch: true,
      shadow: true,
      pullRight: false,
      touchHandleWidth: 20,
      dragToggleDistance: 30,
    };


  }


  render() {


    return(

      <div className="App">
          <header className="App-header">
            <h1 className="App-title">Blockchain Addict</h1>
          </header>
          <div className="line-separator"></div>

        <Userboard/>
      </div>

    );
  }
}
export default App;

/*
 ---- Code for the original display ----
<div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">Life Artificer</h1>
    <h2 className="App-subtitle">Design the life you want to live</h2><br/>
  </header>

</div>
*/
