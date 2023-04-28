import React from 'react';
import ReactApexChart from 'react-apexcharts';

class Chartcircle extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
			render: false, //Set render state to false        
            
			series: [71, 63, 90],
            options: {
				chart: {
					type: 'radialBar',
					//width:320,
					height: 350,
					offsetY: 0,
					offsetX: 0,
					
				  },
            plotOptions: {
                radialBar: {
						size: undefined,
						inverseOrder: false,
						hollow: {
							margin: 0,
							size: '30%',
							background: 'transparent',
					},
					  
					  
					  
					track: {
						show: true,
						background: '#e1e5ff',
						strokeWidth: '10%',
						opacity: 1,
						margin: 15, // margin is in pixels
					},


					},
              },
			  responsive: [{
				  breakpoint: 480,
				  options: {
					chart: {
					offsetY: 0,
					offsetX: 0
				  },	
					legend: {
					  position: 'bottom',
					  offsetX:0,
					  offsetY: 0
					}
				  }
				}],
				fill: {
					opacity: 1
				},
				colors:['#ea4989', '#ffb800', '#f35757'],
				
				labels: ['New', 'Recover', 'In Treatment'],
				legend: {
					fontSize: '16px',  
					show: false,
				  },
            },
          
          
          };
        }
		
		componentDidMount() {
		  setTimeout(function() { //Start the timer
			  this.setState({render: true}) //After 1 second, set render to true
		  }.bind(this), 1000)
		}	
		
		 render() {
		let renderContainer = false;
		if(this.state.render) {
		 renderContainer = <div id="chart">
					<ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={400} />
				</div>;
		}	
        return (
			renderContainer //Render the dom elements, or, when this.state == false, nothing.	
		);
	}
}


export default Chartcircle;