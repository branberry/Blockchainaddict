import React, { Component } from 'react';
import { Goals } from './Goals.js';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Sidebar } from './Sidebar.js';
import '../styles/UserBoard.css';

export class Userboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      power: {},
      bitcoin: {},
      ada: {},
      tron: {},
      lisk: {}

    };
  }
  // this is grabbing the dat for ada from the cryptocompare rest API
  componentDidMount(){
    fetch('https://min-api.cryptocompare.com/data/price?fsym=ADA&tsyms=USD')
    .then(results => {
      // using the current time stamp as an index fopr the object which contains the json object from the request as a value
      let now = new Date(); 
      let now_utc = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),  now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
      let testObj = {};
      testObj[now_utc] = results.json();
      console.log(testObj[now_utc]);
     // this.state.ada[now_utc] = results.json();
    })
  }
  render() {
    return (
      <div className="dashboard">
        <h1> Your Dashboard </h1>
         <div>
         <Sidebar/>
           <Goals/>
           <Bar
             data={this.state.ada}
             options={{
               maintainAspectRatio: false
             }} />

        </div>
      </div>
    );
  }
}
