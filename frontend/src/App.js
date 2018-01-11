import React, { Component } from 'react';
import { Userboard } from './components/Userboard.js';
import { MenuButton } from './components/MenuButton.js';
import './styles/App.css';

//
/*
  An array with hardcoded todo values which are objects.
*/
const mql = window.matchMedia(`(min-width: 800px)`);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    var sidebarContent = <b> Sidebar Content </b>;
    var sidebarProps = {
      sidebar: this.state.sidebarOpen,
      docked: this.state.sidebarDocked,
      onSetOpen: this.onSetSidebarOpen
    };

    return(
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Cryptocoinfolio</h1>
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
