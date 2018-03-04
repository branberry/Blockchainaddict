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
        this.generateDates.bind(this);
    }
    generateDates() {
        let d = new Date();
        let LineChartData = Object.assign({}, this.state.LineChartData);
    
        for(let i = 0; i < 7; i++) {
          let day = d.getDay();
    
          if(day - i < 0) {
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
    

    componentWillMount() {
        fetch() 
    }

    render() {
        return(
            <div className="col-lg-4"> 
            {this.generateDates()}
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