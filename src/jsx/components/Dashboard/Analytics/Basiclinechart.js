import React from 'react';
import ReactApexChart from 'react-apexcharts';

class Basiclinechart extends React.Component {
        constructor(props) {
          super(props);

          this.state = {
          
            series: [{
                name: "Desktops",
                data: [5,6,4,3,4,3,4,3,6,5,6,4,5,2,3,4,2,1,5,3]
            }],
            options: {
              chart: {
                type: 'line',
                zoom: {
                  enabled: false,
                },
					
				
				toolbar:{
					show:false
				}
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
				colors:['#e3366b'],
                curve: 'straight'
              },
              
              grid: {
				show:false,
              
              },
			 xaxis: {
				show: false,
				lines: {
					show: false,
				},
				labels: {
					show: false,
				},
				axisBorder: {
				  show: false,
				},
				
			},
			yaxis: {
				show: false,
			},
            },
          
          
          };
        }

      

        render() {
          return (
				<div id="chart">
					<ReactApexChart options={this.state.options} series={this.state.series} type="line" height={120}  />
				</div>

          );
        }
      }

  export default Basiclinechart;