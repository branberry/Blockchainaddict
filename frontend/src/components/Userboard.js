import React, { Component } from 'react';
import Dashboard from 'react-dazzle';
import { Goals } from './Goals.js';
import '../styles/UserBoard.css';

export class Userboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <h1> Your Dashboard </h1>
         <div>
           <Goals/>
        </div>
      </div>
    );
  }
}
