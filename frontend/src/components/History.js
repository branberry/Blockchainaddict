import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

export class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
          /**
           * the linechartdata object contains all of the relevant information pertaining
           * to the line chart.  Adding data goes under the LineChartData.datasets.data array
           * the corresponding labels are filled in the LineChartData.labels array
           * The labels array is being filled in the generateDates method
           */
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

    /** 
     * creates the labels for the linechart to show dates from the last 7 days
     * including today
    */
    generateDates() {
        // instantiating a date object
        let d = new Date();
        // creating a copy of the linechartdata so we do not mutate it
        let LineChartData = Object.assign({}, this.state.LineChartData);

        // iterating through the 7 days
        for(let i = 0; i < 7; i++) {
          // day retrieves the current day as an integer value
          let day = d.getDay();

          /** 
           * since each day corresponds to a positive value from 0 to 6, (0 being sunday, 6 being friday)
           * we must check if we get a value less than 0 meaning that the day may be monday and we are looking 4 days
           * prior.  Adding 7 to the subtraction give the correct date
          */
          (day - i < 0) ? day = day + 7 - i : day = day - i;
          

          // assigning the date integer with the proper date string
          switch(day) {
            case 0:
              LineChartData.labels[i] = 'Sunday';
              break;
            case 1:
              LineChartData.labels[i] = 'Monday';
              break;
            case 2:
              LineChartData.labels[i] = 'Tuesday';
              break;
            case 3:
              LineChartData.labels[i] = 'Wednesday';
              break;
            case 4:
              LineChartData.labels[i] = 'Thursday';
              break
            case 5:
              LineChartData.labels[i] = 'Friday';
              break;
            case 6:
              LineChartData.labels[i] = 'Saturday';
              break;
            default:
              break;
          }
        }

       /**
        * the array is reversed to have the current date on the right and the day from a 
        * week prior on the left side.
        */
       LineChartData.labels.reverse();
       this.state.LineChartData.labels = LineChartData.labels;
      }
    

    componentWillMount() {
       // fetch() 
    }

    render() {
        return(
            <div className="col-lg-4"> 
            {/*Calls the generate date function to fill the linechart data*/}
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