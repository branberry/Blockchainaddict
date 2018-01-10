import React, { Component } from 'react';
import { Goals } from './Goals.js';
import { Bar, Line, Pie } from 'react-chartjs-2';
import '../styles/UserBoard.css';
import { setInterval } from 'timers';

export class Userboard extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      previousCryptoVals: {},
      networth: 0,
      cryptoAmount: {
        'Cardano' : 316.682,
        'Power Ledger' : 144.855,
        'Tron' : 1641.36,
        'Lisk' : 2.00087,
        'Bitcoin' : 0.0112659,
        'Po.et' : 843.156
      },

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
    setInterval(()=> {
      let networth = 0;
      this.setState({networth});
    fetch('https://min-api.cryptocompare.com/data/price?fsym=ADA&tsyms=USD')
    .then(d => d.json())
    .then(d => {
      let ChartData = Object.assign({}, this.state.ChartData);
      networth = this.state.networth +  Number(Math.round(d.USD * this.state.cryptoAmount['Cardano'] +'e2') +'e-2');
      ChartData.datasets[0].data[0] = d.USD * this.state.cryptoAmount['Cardano'];
      this.setState({ChartData,networth});
    })

    fetch('https://min-api.cryptocompare.com/data/price?fsym=POWR&tsyms=USD')
    .then(d => d.json())
    .then(d => {
      let ChartData = Object.assign({}, this.state.ChartData);
      let networth = this.state.networth +  Number(Math.round(d.USD * this.state.cryptoAmount['Power Ledger'] +'e2') +'e-2');
      ChartData.datasets[0].data[1] = d.USD * this.state.cryptoAmount['Power Ledger'];
      this.setState({ChartData,networth});
    })

    fetch('https://min-api.cryptocompare.com/data/price?fsym=TRX&tsyms=USD')
    .then(d => d.json())
    .then(d => {
      let ChartData = Object.assign({}, this.state.ChartData);
      let networth = this.state.networth +  Number(Math.round(d.USD * this.state.cryptoAmount['Tron'] +'e2') +'e-2');
      ChartData.datasets[0].data[2] = d.USD * this.state.cryptoAmount['Tron'];
      this.setState({ChartData,networth});
    })

    fetch('https://min-api.cryptocompare.com/data/price?fsym=LSK&tsyms=USD')
    .then(d => d.json())
    .then(d => {
      let ChartData = Object.assign({}, this.state.ChartData);
      let networth = this.state.networth +  Number(Math.round(d.USD * this.state.cryptoAmount['Lisk'] +'e2') +'e-2');
      ChartData.datasets[0].data[3] = d.USD * this.state.cryptoAmount['Lisk'];
      this.setState({ChartData,networth});
    })

    fetch('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD')
    .then(d => d.json())
    .then(d => {
      let ChartData = Object.assign({}, this.state.ChartData);
      let networth = this.state.networth +  Number(Math.round(d.USD * this.state.cryptoAmount['Bitcoin'] +'e2') +'e-2');
      ChartData.datasets[0].data[4] = d.USD * this.state.cryptoAmount['Bitcoin'];
      this.setState({ChartData,networth});
    })

    fetch('https://min-api.cryptocompare.com/data/price?fsym=POE&tsyms=USD')
    .then(d => d.json())
    .then(d => {
      let ChartData = Object.assign({}, this.state.ChartData);
      let networth = this.state.networth +  Number(Math.round(d.USD * this.state.cryptoAmount['Po.et'] +'e2') +'e-2');
      ChartData.datasets[0].data[5] = d.USD * this.state.cryptoAmount['Po.et'];
      this.setState({ChartData,networth});
    })
    networth = Number(Math.round(this.state.networth +'e2') +'e-2');
    this.setState({networth});
    },10000);
  }
  
  render() {
    return (
      <div className="container">
        <h1 className="dashboard"> Your Dashboard </h1>
         <div className="row">
         <h2 className="dashboard"> Your Net Worth: ${this.state.networth} </h2>
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
                <h2 className="dashboard">Currency Values</h2>
                <ul className="dashboard"> 
                  <li>Cardano: ${this.state.ChartData.datasets[0].data[0]}</li>
                  <li>Power Ledger: ${this.state.ChartData.datasets[0].data[1]}</li>
                  <li>Tron: ${this.state.ChartData.datasets[0].data[2]}</li>
                  <li>Lisk: ${this.state.ChartData.datasets[0].data[3]}</li>
                  <li>Bitcoin: ${this.state.ChartData.datasets[0].data[4]}</li>
                  <li>Po.et: ${this.state.ChartData.datasets[0].data[5]}</li>
                </ul>
             </div>
        </div>
      </div>
    );
  }
}
