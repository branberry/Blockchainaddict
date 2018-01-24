import React, { Component } from 'react';
import { Userboard } from './components/Userboard.js';
import Sidebar from 'react-sidebar';
import MaterialTitlePanel from './components/MaterialTitlePanel';
import SidebarContent from './components/SidebarContent';
import './styles/App.css';

//
/*
  An array with hardcoded todo values which are objects.
*/

const styles = {
  contentHeaderMenuLink: {
    textDecoration: 'none',
    color: 'white',
    padding: 8,
  },
  content: {
    padding: '16px',
  },
};

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

    this.renderPropCheckbox = this.renderPropCheckbox.bind(this);
    this.renderPropNumber = this.renderPropNumber.bind(this);
    this.onSetOpen = this.onSetOpen.bind(this);
    this.menuButtonClick = this.menuButtonClick.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  onSetOpen(open) {
    this.setState({open: open});
  }

  toggleOpen(ev) {
    this.setState({open: !this.state.open});

    if (ev) {
      ev.preventDefault();
    }
  }

  onSetOpen(open) {
    this.setState({open: open});
  }

  menuButtonClick(ev) {
    ev.preventDefault();
    this.onSetOpen(!this.state.open);
  }

  renderPropCheckbox(prop) {
    const toggleMethod = (ev) => {
      const newState = {};
      newState[prop] = ev.target.checked;
      this.setState(newState);
    };

    return (
      <p key={prop}>
        <input type="checkbox" onChange={toggleMethod} checked={this.state[prop]} id="prop"/>
        <label htmlFor={prop}> {prop}</label>
      </p>
    );
  }

  renderPropNumber(prop) {
    const setMethod = (ev) => {
      const newState = {};
      newState[prop] = parseInt(ev.target.value,10);
      this.setState(newState);
    };

    return (
      <p key={prop}>
        {prop} <input type="number" onChange={setMethod} value={this.state[prop]}/>
      </p>
    );
  }
  render() {
    const sidebar = <SidebarContent/>;

    const contentHeader = (
      <span>
        {!this.state.docked && <a onClick={this.toggleOpen.bind(this)} href="#" style={styles.contentHeaderMenuLink}>=</a>}
        <span> Responsive React Sidebar</span>
      </span>
    );
    const sidebarProps = {
      sidebar: sidebar,
      docked: this.state.docked,
      sidebarClassName: 'custom-sidebar-class',
      open: this.state.open,
      touch: this.state.touch,
      shadow: this.state.shadow,
      pullRight: this.state.pullRight,
      touchHandleWidth: this.state.touchHandleWidth,
      dragToggleDistance: this.state.dragToggleDistance,
      transitions: this.state.transitions,
      onSetOpen: this.onSetOpen,
    };

    return(

      <div className="App">
      
        <Sidebar {...sidebarProps}>
          <MaterialTitlePanel>
            <button onClick={this.toggleOpen}>Menu</button>
          </MaterialTitlePanel>
        </Sidebar>
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
