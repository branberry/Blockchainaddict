import React, { Component } from 'react';
import {slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import '../styles/SlideMenu.css';

const styles = {
    bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        left: '36px',
        top: '36px'
      },
      bmBurgerBars: {
        background: '#373a47'
      },
      bmCrossButton: {
        height: '24px',
        width: '24px'
      },
      bmCross: {
        background: '#bdc3c7'
      },
      bmMenu: {
        background: '#373a47',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em'
      },
      bmMorphShape: {
        fill: '#373a47'
      },
      bmItemList: {
        color: '#aaaaaa',
        padding: '0.8em'
      },
      bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
      }
}
export default class Nav extends Component {
    constructor(props) {
        super(props);

        this.handleClick.bind(this);
    }

    handleClick(event) {
        console.log(event);
    }

    showSettings(event) {
        event.preventDefault();
    }

    render() {
        return (
            <Menu isOpen={this.props.menuState} styles={styles}  pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } >
                <button  id="home" className="menu-item" href="/">Home</button>
                <button id="about" className="menu-item"><Link to="/userboard">Userboard</Link></button>
                <button id="about" className="menu-item"><Link to="/login">Login</Link></button>
                <button id="about" className="menu-item" href="/userboard">Settings</button>
            </Menu>
        );
    }
}