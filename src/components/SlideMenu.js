import React, { Component } from 'react';
import '../styles/SlideMenu.css';

export class SlideMenu extends Component {

  constructor(props, context) {
    super(props,context);
    this.state = {
      visible: false
    }

    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
  }

  handleMouseDown(e) {
    this.toggleMenu();

    console.log("Clicked!");
    e.stopPropagation();
  }
  toggleMenu() {
    this.setState(
      {
        visible: !this.state.visible
      }
    );
  }
  render() {
    return (
      <div className="container">
        <div>
          <ul>
            <li>
              My Profile
            </li>
            <li>
              Goals
            </li>
            <li>
              Settings
            </li>
            <li>
              Report Bug
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
