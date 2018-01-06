import React, { Component } from 'react';
import { Goals } from './Goals.js';
import { Bar, Line, Pie } from 'react-chartjs-2';
import '../styles/UserBoard.css';

export class Userboard extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      networth: 0,
      ChartData: {
        labels: ['Cardano','Power Ledger','Tron','Lisk', 'Bitcoin','Po.et'],
        datasets: [
          {
            label: 'Price (USD)',
            data:[],
            backgroundColor: [
              'rgba(255,99,132,0.6)',
              'rgba(25,99,132,0.6)',
              'rgba(255,99,12,0.6)',
              'rgba(255,255,12,0.6)',
              'rgba(10,255,255,0.6)',
              'rgba(255,255,255,0.6)'
            ]
          }
        ]
      }
    };
  }
  changeHandler(value) {
    this.ChartData.update();
  }

  calculateNetworth(props) {
    
  }
      // using the current time stamp as an index fopr the object which contains the json object from the request as a value
      // let now = new Date(); 
      // let now_utc = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),  now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
      // let testObj = {};

  // this is grabbing the data for several cryptocurriences from the cryptocompare rest API
  componentDidMount(){

    fetch('https://min-api.cryptocompare.com/data/price?fsym=ADA&tsyms=USD')
    .then(d => d.json())
    .then(d => {
      let ChartData = Object.assign({}, this.state.ChartData);
      ChartData.datasets[0].data[0] = d.USD * 316.682;
      this.setState({ChartData})
    })
    fetch('https://min-api.cryptocompare.com/data/price?fsym=POWR&tsyms=USD')
    .then(d => d.json())
    .then(d => {
      let ChartData = Object.assign({}, this.state.ChartData);
      ChartData.datasets[0].data[1] = d.USD * 144.855;
      this.setState({ChartData})
    })

    fetch('https://min-api.cryptocompare.com/data/price?fsym=TRX&tsyms=USD')
    .then(d => d.json())
    .then(d => {
      let ChartData = Object.assign({}, this.state.ChartData);
      ChartData.datasets[0].data[2] = d.USD * 1641.36;
      this.setState({ChartData})
    })

    fetch('https://min-api.cryptocompare.com/data/price?fsym=LSK&tsyms=USD')
    .then(d => d.json())
    .then(d => {
      let ChartData = Object.assign({}, this.state.ChartData);
      ChartData.datasets[0].data[3] = d.USD*2.00087;
      this.setState({ChartData})
    })

    fetch('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD')
    .then(d => d.json())
    .then(d => {
      let ChartData = Object.assign({}, this.state.ChartData);
      ChartData.datasets[0].data[4] = d.USD*0.0112659;
      this.setState({ChartData})
    })
    fetch('https://min-api.cryptocompare.com/data/price?fsym=POE&tsyms=USD')
    .then(d => d.json())
    .then(d => {
      let ChartData = Object.assign({}, this.state.ChartData);
      ChartData.datasets[0].data[5] = d.USD*843.156;
      this.setState({ChartData})
    })
  }
  
  render() {
    return (
      <div className="container">
        <h1 className="dashboard"> Your Dashboard </h1>
         <div className="row">
         <h2 className="dashboard"> Your Net Worth: {this.state.networth} </h2>
           <div className="col-lg-4">
           <Bar
             data={this.state.ChartData}
             width={150}
             height={500}
             onChange={this.state.ChartData}
             redraw={true}
             options={{
              maintainAspectRatio: false,
               title: {
                text: 'Your Portfolio',
                display: true,
               }
              
             }} />
             </div>
             <div className="col-lg-4">
             
             </div>
        </div>
      </div>
    );
  }
}
