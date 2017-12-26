import React, { Component } from 'react';
import Menu, {SubMenu, MenuItem} from 'rc-menu';
export class Sidebar extends Component {
  showSettings (event) {
    event.preventDefault();
  }

  render() {
    return (
    
      <Menu>
        <MenuItem>Home</MenuItem>
        <MenuItem>Stuff</MenuItem>
      </Menu>
    );
  }
}
