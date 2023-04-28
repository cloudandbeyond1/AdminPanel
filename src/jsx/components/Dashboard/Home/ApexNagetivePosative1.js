import React from "react";
import ReactApexChart from "react-apexcharts";

class ApexNagetivePosative1 extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
		  render: false,
         series: [
            {
               name: "New Clients",
               data: [35, 40, 50, 60, 75, 40, 25, 70, 20, 40, 65, 50,20, 40, 60, 35, 50, 70, 30, 15, ],
            },
            {
               name: "Retained Clients",
               data: [-25, -38, -12, -22, -39, -35, -30, -10, -20, -35, -38, -28, -32, -12, -5, -35, -10, -30, -29, -18,  ],
            },
         ],
         options: {
            chart: {
               type: "bar",
               height: 400,
               stacked: true,
               toolbar: {
                  show: false,
               },
               sparkline: {
                  //enabled: true
               },
               backgroundBarRadius: 5,
               offsetX: -10,
            },
            plotOptions: {
               bar: {
                  columnWidth: "45%",
                  endingShape: "rounded",
                  colors: {
                     backgroundBarColors: [
                        "rgba(0,0,0,0)",
                        "rgba(0,0,0,0)",
                        "rgba(0,0,0,0)",
                        "rgba(0,0,0,0)",
                        "rgba(0,0,0,0)",
                        "rgba(0,0,0,0)",
                        "rgba(0,0,0,0)",
                        "rgba(0,0,0,0)",
                        "rgba(0,0,0,0)",
                        "rgba(0,0,0,0)",
                     ],
                     backgroundBarOpacity: 1,
                     backgroundBarRadius: 5,
                     opacity: 0,
                  },
               },
               distributed: true,
            },
            colors:['#dd2f6e', '#3e4954'],

            grid: {
               show: true,
            },
            legend: {
               show: false,
            },
            fill: {
               opacity: 1,
            },
            dataLabels: {
               enabled: false,
               colors:['#dd2f6e', '#3e4954'],
               dropShadow: {
                  enabled: true,
                  top: 1,
                  left: 1,
                  blur: 1,
                  opacity: 1,
               },
            },
            xaxis: {
               categories: ["01","02","03","04","05","06","07","08","09","10","11","12","13","14",
							"15","16","17","18","19","20",],
               labels: {
                  style: {
                     colors: "#787878",
                     fontSize: "13px",
                     fontFamily: "Poppins",
                     fontWeight: 400,
                  },
               },
               crosshairs: {
                  show: false,
               },
               axisBorder: {
                  show: false,
               },
            },

            yaxis: {
               //show: false
               labels: {
                  style: {
                     colors: "#787878",
                     fontSize: "13px",
                     fontFamily: "Poppins",
                     fontWeight: 400,
                  },
               },
            },

            tooltip: {
               x: {
                  show: true,
               },
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
				<ReactApexChart  options={this.state.options}  series={this.state.series}   type="bar"	 height={400}	/>
			 </div>;
		}
			
        return (
				
			renderContainer //Render the dom elements, or, when this.state == false, nothing.
		);
	}
}

export default ApexNagetivePosative1;
