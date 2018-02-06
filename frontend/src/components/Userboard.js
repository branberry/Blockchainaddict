import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Link, Route, Switch } from 'react-router-dom';
//import { createStore } from 'redux';
import '../styles/UserBoard.css';

const styles = {
  contentHeaderMenuLink: {
    textDecoration: 'none',
    color: 'white',
    padding: 8,
  },
  content: {
    padding: '16px',
  },
};
export class Userboard extends Component {
   constructor(props) {
    super(props);
    this.state = {
      
      coinVals : {

      },

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
        labels : [

        ],
        datasets : [ 
          {
            label: 'USD ($)',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(255,0,0,0.4)',
            borderColor: 'rgba(255,0,0,0.4)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(255,0,0,0.4)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(255,0,0,0.4)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 3,
            pointHitRadius: 10,
            data: [60,5,7,23,23,5,6],
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

    this.generateDates.bind(this);
  }
  /*
    This function is used to generate the dates for the line graph. This function generates the days from the last week.
  */
  generateDates() {
    let d = new Date();
    let LineChartData = Object.assign({}, this.state.LineChartData);

    for(let i = 0; i < 7; i++) {
      let day = d.getDay();

      if(day - i < 0){
        day = day + 7 - i;
      } else {
        day = day - i
      }
      
      switch(day) {
        case 0:
          LineChartData.labels[i] = 'Sunday'
          break;
        case 1:
          LineChartData.labels[i] = 'Monday'
          break;
        case 2:
          LineChartData.labels[i] = 'Tuesday'
          break;
        case 3:
          LineChartData.labels[i] = 'Wednesday'
          break;
        case 4:
          LineChartData.labels[i] = 'Thursday'
          break
        case 5:
          LineChartData.labels[i] = 'Friday'
          break;
        case 6:
          LineChartData.labels[i] = 'Saturday'
          break;
        default:
          break;
      }
    }
   LineChartData.labels.reverse();
   this.state.LineChartData.labels = LineChartData.labels;
  }
      // using the current time stamp as an index fopr the object which contains the json object from the request as a value
      // let now = new Date(); 
      // let now_utc = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),  now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
      // let testObj = {};

  // this is grabbing the data for several cryptocurriences from the cryptocompare rest API
  componentWillMount() {

    let networth = 0;
    this.setState({networth});
    fetch('https://min-api.cryptocompare.com/data/price?fsym=ADA&tsyms=USD')
    .then(d => d.json())
    .then(d => {
      let ChartData = Object.assign({}, this.state.ChartData);
      let cryptoAmount = Object.assign({}, this.state.cryptoAmount);
      let networth = this.state.networth +  d.USD * this.state.cryptoAmount['Cardano'];
      cryptoAmount['Cardano'] = d.USD;
      ChartData.datasets[0].data[0] = d.USD * this.state.cryptoAmount['Cardano'];
      this.setState({ChartData,networth,cryptoAmount});
    })

    fetch('https://min-api.cryptocompare.com/data/price?fsym=POWR&tsyms=USD')
    .then(d => d.json())
    .then(d => {
      let ChartData = Object.assign({}, this.state.ChartData);
      let cryptoAmount = Object.assign({}, this.state.cryptoAmount);
      let networth = this.state.networth + d.USD * this.state.cryptoAmount['Power Ledger'];
      cryptoAmount['Power Ledger'] = d.USD;
      ChartData.datasets[0].data[1] = d.USD * this.state.cryptoAmount['Power Ledger'];
      this.setState({ChartData,networth,cryptoAmount});
    })

    fetch('https://min-api.cryptocompare.com/data/price?fsym=TRX&tsyms=USD')
    .then(d => d.json())
    .then(d => {
      let ChartData = Object.assign({}, this.state.ChartData);
      let cryptoAmount = Object.assign({}, this.state.cryptoAmount);
      let networth = this.state.networth + d.USD * this.state.cryptoAmount['Tron'];
      cryptoAmount['Tron'] = d.USD;
      ChartData.datasets[0].data[2] = d.USD * this.state.cryptoAmount['Tron'];
      this.setState({ChartData,networth,cryptoAmount});
    })

    fetch('https://min-api.cryptocompare.com/data/price?fsym=LSK&tsyms=USD')
    .then(d => d.json())
    .then(d => {
      let ChartData = Object.assign({}, this.state.ChartData);
      let cryptoAmount = Object.assign({}, this.state.cryptoAmount);
      let networth = this.state.networth + d.USD * this.state.cryptoAmount['Lisk'];
      cryptoAmount['Lisk'] = d.USD;
      ChartData.datasets[0].data[3] = d.USD * this.state.cryptoAmount['Lisk'];
      this.setState({ChartData,networth,cryptoAmount});
    })

    fetch('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD')
    .then(d => d.json())
    .then(d => {
      let ChartData = Object.assign({}, this.state.ChartData);
      let cryptoAmount = Object.assign({}, this.state.cryptoAmount);
      let networth = this.state.networth + d.USD * this.state.cryptoAmount['Bitcoin'];
      cryptoAmount['Bitcoin'] = d.USD;
      ChartData.datasets[0].data[4] = d.USD * this.state.cryptoAmount['Bitcoin'];
      this.setState({ChartData,networth,cryptoAmount});
    })

    fetch('https://min-api.cryptocompare.com/data/price?fsym=POE&tsyms=USD')
    .then(d => d.json())
    .then(d => {
      let ChartData = Object.assign({}, this.state.ChartData);
      let cryptoAmount = Object.assign({}, this.state.cryptoAmount);
      let networth = this.state.networth +  d.USD * this.state.cryptoAmount['Po.et'];
      cryptoAmount['Po.et'] = d.USD;
      ChartData.datasets[0].data[5] = d.USD * this.state.cryptoAmount['Po.et'];
      this.setState({ChartData,networth,cryptoAmount});
    })
    networth = this.state.networth;
    this.setState({networth});
  }

  render() {


    return (

      <div className="container">
      {this.generateDates()}
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
                  <li>Cardano: ${Number(Math.round(this.state.cryptoAmount['Cardano'] +'e2') +'e-2')}</li>
                  <li>Power Ledger: ${Number(Math.round(this.state.cryptoAmount['Power Ledger'] +'e2') +'e-2')}</li>
                  <li>Tron: ${Number(Math.round(this.state.cryptoAmount['Tron'] +'e2') +'e-2')}</li>
                  <li>Lisk: ${Number(Math.round(this.state.cryptoAmount['Lisk'] +'e2') +'e-2')}</li>
                  <li>Bitcoin: ${Number(Math.round(this.state.cryptoAmount['Bitcoin'] +'e2') +'e-2')}</li>
                  <li>Po.et: ${Number(Math.round(this.state.cryptoAmount['Po.et'] +'e2') +'e-2')}</li>
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
