import React, { Component } from 'react';
import { Userboard } from './components/Userboard.js';
import { MenuButton } from './components/MenuButton.js';
import './styles/App.css';
import { Sidebar } from './components/Sidebar.js';
//
/*
  An array with hardcoded todo values which are objects.
*/

class App extends Component {
  render() {
    return(
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Life Artificer</h1>
        </header>
        <div className="line-separator"></div>
        <Sidebar/>
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
