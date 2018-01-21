import React, { Component } from 'react';
import { Userboard } from './components/Userboard.js';
import { MenuButton } from './components/MenuButton.js';
import Sidebar from 'react-sidebar';
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

const mql = window.matchMedia(`(min-width: 800px)`);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mql: mql,
      docked: false,
      open: false,
    }

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
    this.onSetOpen = this.onSetSidebarOpen.bind(this);
  }
onSetSidebarOpen = (open) => {
    this.setState({sidebarOpen: open});
  }

  componentWillMount = () => {
    mql.addListener(this.mediaQueryChanged);
    this.setState({mql: mql, sidebarDocked: mql.matches});
  }

  componentWillUnmount = () => {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }

  mediaQueryChanged = () => {
    this.setState({
      sidebarDocked: this.state.mql.matches,
      docked: this.state.mql.matches,
    });
  }
  toggleOpen(ev) {
    this.setState({open: !this.state.open});

    if (ev) {
      ev.preventDefault();
    }
  }
  
  render() {
    const sidebarContent = <b> Sidebar Content </b>;
    const sidebarProps = {
      sidebar: this.state.sidebarOpen,
      docked: this.state.sidebarDocked,
      onSetOpen: this.onSetSidebarOpen
    };

    return(

      <div className="App">
      <Sidebar sidebar={sidebarContent}
      open={this.state.sidebarOpen}
      docked={this.state.sidebarDocked}
      onSetOpen={this.onSetSidebarOpen}>
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
