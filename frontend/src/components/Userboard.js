import React, { Component } from 'react';
import { Goals } from './Goals.js';
import { Bar, Line } from 'react-chartjs-2';
import { setInterval } from 'timers';
import { createStore } from 'redux';
import '../styles/UserBoard.css';


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
      LineChartData : {
        labels : [],
        datasets : [ 
          {
            label: 'Portfolio Historical Values',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [1,3,6,2,4,5,1]
          }
        ]
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

  calculateNetworth(props) {
    
  }
      // using the current time stamp as an index fopr the object which contains the json object from the request as a value
      // let now = new Date(); 
      // let now_utc = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),  now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
      // let testObj = {};

  // this is grabbing the data for several cryptocurriences from the cryptocompare rest API
  componentDidMount(){
    let networth = 0;
    this.setState({networth});
    fetch('https://min-api.cryptocompare.com/data/price?fsym=ADA&tsyms=USD')
    .then(d => d.json())
    .then(d => {
      let ChartData = Object.assign({}, this.state.ChartData);
      networth = this.state.networth +  d.USD * this.state.cryptoAmount['Cardano'];
      ChartData.datasets[0].data[0] = d.USD * this.state.cryptoAmount['Cardano'];
      this.setState({ChartData,networth});
    })

    fetch('https://min-api.cryptocompare.com/data/price?fsym=POWR&tsyms=USD')
    .then(d => d.json())
    .then(d => {
      let ChartData = Object.assign({}, this.state.ChartData);
      let networth = this.state.networth + d.USD * this.state.cryptoAmount['Power Ledger'];
      ChartData.datasets[0].data[1] = d.USD * this.state.cryptoAmount['Power Ledger'];
      this.setState({ChartData,networth});
    })

    fetch('https://min-api.cryptocompare.com/data/price?fsym=TRX&tsyms=USD')
    .then(d => d.json())
    .then(d => {
      let ChartData = Object.assign({}, this.state.ChartData);
      let networth = this.state.networth + d.USD * this.state.cryptoAmount['Tron'];
      ChartData.datasets[0].data[2] = d.USD * this.state.cryptoAmount['Tron'];
      this.setState({ChartData,networth});
    })

    fetch('https://min-api.cryptocompare.com/data/price?fsym=LSK&tsyms=USD')
    .then(d => d.json())
    .then(d => {
      let ChartData = Object.assign({}, this.state.ChartData);
      let networth = this.state.networth + d.USD * this.state.cryptoAmount['Lisk'];
      ChartData.datasets[0].data[3] = d.USD * this.state.cryptoAmount['Lisk'];
      this.setState({ChartData,networth});
    })

    fetch('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD')
    .then(d => d.json())
    .then(d => {
      let ChartData = Object.assign({}, this.state.ChartData);
      let networth = this.state.networth + d.USD * this.state.cryptoAmount['Bitcoin'];
      ChartData.datasets[0].data[4] = d.USD * this.state.cryptoAmount['Bitcoin'];
      this.setState({ChartData,networth});
    })

    fetch('https://min-api.cryptocompare.com/data/price?fsym=POE&tsyms=USD')
    .then(d => d.json())
    .then(d => {
      let ChartData = Object.assign({}, this.state.ChartData);
      let networth = this.state.networth +  d.USD * this.state.cryptoAmount['Po.et'];
      ChartData.datasets[0].data[5] = d.USD * this.state.cryptoAmount['Po.et'];
      this.setState({ChartData,networth});
    })
    networth = this.state.networth;
    this.setState({networth});
     /* 
      This is a duplicate of the above code, but with an interval so it is updated every 10 seconds, but
      it is also initalized above.  If you do not have the duplicate code above, the page will wait 
      10 seconds before reloading.  There is probably a better way to do this without duplicating the code
    */

    setInterval(() => {
    let networth = 0;
    this.setState({networth});
    fetch('https://min-api.cryptocompare.com/data/price?fsym=ADA&tsyms=USD')
    .then(d => d.json())
    .then(d => {
      let ChartData = Object.assign({}, this.state.ChartData);
      networth = this.state.networth +  d.USD * this.state.cryptoAmount['Cardano'];
      ChartData.datasets[0].data[0] = d.USD * this.state.cryptoAmount['Cardano'];
      this.setState({ChartData,networth});
    })

    fetch('https://min-api.cryptocompare.com/data/price?fsym=POWR&tsyms=USD')
    .then(d => d.json())
    .then(d => {
      let ChartData = Object.assign({}, this.state.ChartData);
      let networth = this.state.networth + d.USD * this.state.cryptoAmount['Power Ledger'];
      ChartData.datasets[0].data[1] = d.USD * this.state.cryptoAmount['Power Ledger'];
      this.setState({ChartData,networth});
    })

    fetch('https://min-api.cryptocompare.com/data/price?fsym=TRX&tsyms=USD')
    .then(d => d.json())
    .then(d => {
      let ChartData = Object.assign({}, this.state.ChartData);
      let networth = this.state.networth + d.USD * this.state.cryptoAmount['Tron'];
      ChartData.datasets[0].data[2] = d.USD * this.state.cryptoAmount['Tron'];
      this.setState({ChartData,networth});
    })

    fetch('https://min-api.cryptocompare.com/data/price?fsym=LSK&tsyms=USD')
    .then(d => d.json())
    .then(d => {
      let ChartData = Object.assign({}, this.state.ChartData);
      let networth = this.state.networth + d.USD * this.state.cryptoAmount['Lisk'];
      ChartData.datasets[0].data[3] = d.USD * this.state.cryptoAmount['Lisk'];
      this.setState({ChartData,networth});
    })

    fetch('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD')
    .then(d => d.json())
    .then(d => {
      let ChartData = Object.assign({}, this.state.ChartData);
      let networth = this.state.networth + d.USD * this.state.cryptoAmount['Bitcoin'];
      ChartData.datasets[0].data[4] = d.USD * this.state.cryptoAmount['Bitcoin'];
      this.setState({ChartData,networth});
    })

    fetch('https://min-api.cryptocompare.com/data/price?fsym=POE&tsyms=USD')
    .then(d => d.json())
    .then(d => {
      let ChartData = Object.assign({}, this.state.ChartData);
      let networth = this.state.networth +  d.USD * this.state.cryptoAmount['Po.et'];
      ChartData.datasets[0].data[5] = d.USD * this.state.cryptoAmount['Po.et'];
      this.setState({ChartData,networth});
    })
    networth = this.state.networth;
    this.setState({networth});
    },30000);
  }
  
  render() {
    console.log(Date.now());
    return (
      <div className="container">
        <h1 className="dashboard"> Your Dashboard </h1>
         <div className="row">
         <h2 className="dashboard"> Your Net Worth: ${Number(Math.round(this.state.networth +'e2') +'e-2')} </h2>
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
                  <li>Cardano: ${Number(Math.round(this.state.ChartData.datasets[0].data[0] +'e2') +'e-2')}</li>
                  <li>Power Ledger: ${Number(Math.round(this.state.ChartData.datasets[0].data[1] +'e2') +'e-2')}</li>
                  <li>Tron: ${Number(Math.round(this.state.ChartData.datasets[0].data[2] +'e2') +'e-2')}</li>
                  <li>Lisk: ${Number(Math.round(this.state.ChartData.datasets[0].data[3] +'e2') +'e-2')}</li>
                  <li>Bitcoin: ${Number(Math.round(this.state.ChartData.datasets[0].data[4] +'e2') +'e-2')}</li>
                  <li>Po.et: ${Number(Math.round(this.state.ChartData.datasets[0].data[5] +'e2') +'e-2')}</li>
                </ul>
             </div>
             <div className="col-lg-4"> 
              <Line 
                data={this.state.LineChartData}
                width={150}
                height={500}
                redraw={true}
                options={{
                  maintainAspectRatio:false
                }}
                />
             </div>
        </div>
      </div>
    );
  }
}
