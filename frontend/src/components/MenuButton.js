import React, {Component} from 'react';
import '../styles/MenuButton.css';

export class MenuButton extends Component {
  render() {
    return(
      <button className="roundButton" onMouseDown={this.props.handleMouseDown}></button>
    );
  }
}
