import React, { Component } from 'react';
import '../styles/Goals.css';


export class Goals extends Component {
  constructor(props) {

  }
  render() {
    return(
      <div className="container">
        <label>Goal:
          <input type="text" name="goal"/>
        </label>
          <input type="submit" value="Submit"/>
      </div>
    );
  }
}
