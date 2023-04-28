import React from 'react';
import ReactApexChart from 'react-apexcharts';

class Chartcircle extends React.Component {
        constructor(props) {
          super(props);

			this.state = {
          
				series: [42, 47, 52],
				options: {
					chart: {
						width: 250,
						type: 'polarArea',
						sparkline: {
							enabled: true,
						},
					},
						labels: ['VIP', 'Reguler', 'Exclusive'],
						fill: {
							opacity: 1,
							colors: ['#ea4989', '#ffc977', '#7d49ea']
						},
						stroke: {
							width: 0,
							colors: undefined
						},
						yaxis: {
							show: false
						},
						legend: {
							position: 'bottom'
						},
						plotOptions: {
							polarArea: {
								rings: {
									strokeWidth: 0
								}
							}
						},
						theme: {
							monochrome: {
								enabled: true,
								shadeTo: 'light',
								shadeIntensity: 0.6
							}
						}
				
				},
          
          
			};
        }
		
    render() {
		return (
			<div id="chart">
				<ReactApexChart options={this.state.options} series={this.state.series} type="polarArea" width={250} />
			</div>
        );
    }
}

export default Chartcircle;