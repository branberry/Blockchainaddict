import React, { Component } from 'react';
import {slide as Menu } from 'react-burger-menu';

export default class Nav extends Component {
    showSettings(event) {
        event.preventDefault();
    }

    render() {
        return (
            <Menu isOpen={this.props.menuState}>
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="about" className="menu-item" href="/userboard">Userboard</a>
                <a id="contact" className="menu-item" href="/contact">Contact</a>
                <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
            </Menu>
        );
    }
}