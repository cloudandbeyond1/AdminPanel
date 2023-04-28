import React from 'react';
import ReactApexChart from 'react-apexcharts';

class Apexchartrevenue extends React.Component {
        constructor(props) {
			super(props);	
			this.state = {
			render: false, //Set render state to false
				series: [{
					name: 'series1',
					data: [75, 80, 65, 95, 42, 109, 100]
				}
					],
				options: {
				  chart: {
						height: 350,
						type: 'area',
						toolbar:{
							show:false
						}
					},
					colors:['#f25593'],
					dataLabels: {
					  enabled: false,
					},
					legend: {
						show: true,
						fontSize: '12px',
						
						labels: {
							colors: '#000000',
							
						},
						position: 'bottom',
						horizontalAlign: 'center', 	
						markers: {
							width: 19,
							height: 19,
							strokeWidth: 0,
							strokeColor: '#fff',
							fillColors: undefined,
							radius: 4,
							offsetX: 0,
							offsetY: 0
						}
					},
					xaxis: {
				
					  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July'],
					  labels: {
						style: {
							colors: '#3e4954',
							fontSize: '13px',
							fontFamily: 'Poppins',
							fontWeight: 100,
							cssClass: 'apexcharts-xaxis-label',
						},
					  },
					  crosshairs: {
					  show: false,
					  }
					},
					yaxis: {
						labels: {
					   style: {
							colors: '#3e4954',
							fontSize: '13px',
							fontFamily: 'Poppins',
							fontWeight: 100,
							cssClass: 'apexcharts-xaxis-label',
					  },
					  },
					},
					fill: {
						type: 'solid',
						opacity: 0.8,
					},
					tooltip: {
					  y: {
						formatter: function (val) {
						  return "$ " + val + " thousands"
						}
					  }
					}
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
				<ReactApexChart options={this.state.options} series={this.state.series} type="area" height={440} />
			</div>;
		}	
        return (
			renderContainer //Render the dom elements, or, when this.state == false, nothing.	
		);
	}
}

export default Apexchartrevenue;
