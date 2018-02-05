import React, { Component } from 'react';
import { Userboard } from './components/Userboard.js';
import Login from './components/Login';
import { BrowserRouter,Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Nav from './components/Nav';
import './styles/App.css';
//
/*
  An array with hardcoded todo values which are objects.
*/



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    this.toggleOpen.bind(this);
  }

  toggleOpen() {
    let open = !this.state.open;
    this.setState({open});
  }
  render() {


    return(
 
      <BrowserRouter>
      
        <div className="App">
            <Nav menuState={this.state.open}/>
            
            <Route path='/login' exact component={Login}/>
            <Route path='/userboard' exact component={Userboard}/>
        </div>
      </BrowserRouter>
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
