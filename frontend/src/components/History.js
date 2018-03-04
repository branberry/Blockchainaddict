import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

export class History extends Component {
    constructor(props) {
        this.state = {
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
        };
    }

    render() {
        return(
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
        );
    }
}