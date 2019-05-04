import React, { Component } from 'react';
import * as d3 from 'd3';
import linedata from './Utils/lineChart.csv';

class LineChart extends Component {

	componentDidUpdate() {
		console.log(this.props.player)
		d3.selectAll("#chart2 svg").remove()
		this.makeChart(this.props.player)
	}

	componentDidMount() {
		this.makeChart()
	}

	makeChart(player) {
			// set the dimensions and margins of the graph
		var margin = {top: 20, right: 40, bottom: 30, left: 50},
		    width = 960 - margin.left - margin.right,
		    height = 500 - margin.top - margin.bottom;

		// parse the date / time
		// var parseTime = d3.timeParse("%y");

		// set the ranges
		var x = d3.scaleLinear().range([0, width]);
		var y0 = d3.scaleLinear().range([height, 0]);
		var y1 = d3.scaleLinear().range([height, 0]);

		// define the 1st line
		var valueline = d3.line()
		    .x(function(d) { return x(d.date); })
		    .y(function(d) { return y0(d.close); });

		// define the 2nd line
		var valueline2 = d3.line()
		    .x(function(d) { return x(d.date); })
		    .y(function(d) { return y1(d.open); });

		// append the svg obgect to the body of the page
		// appends a 'group' element to 'svg'
		// moves the 'group' element to the top left margin
		var svg = d3.select("#chart2").append("svg")
		    .attr("width", width + margin.left + margin.right)
		    .attr("height", height + margin.top + margin.bottom)
		  .append("g")
		    .attr("transform",
		          "translate(" + margin.left + "," + margin.top + ")");

		// Get the data
		if (player) {
			console.log(player)
			player = player.replace(/\s+/g, '')
			var dataVar1 = "d." + player + "close" 
			var dataVar2 = "d." + player + "open" 	
		}
		
		console.log(dataVar1)

		d3.csv(linedata).then(function(data) {
			  data.forEach(function(d) {
			      d.date = +(d.date);
			      d.close = +eval(dataVar1);
			      d.open = +eval(dataVar2);
			  });			
		console.log(data)
		  // format the data

		  // Scale the range of the data
		  x.domain(d3.extent(data, function(d) { return d.date; }));
		  y0.domain([0, d3.max(data, function(d) {return Math.max(d.close);})]);
		  y1.domain([0, d3.max(data, function(d) {return Math.max(d.open); })]);

		  // Add the valueline path.
		  svg.append("path")
		      .data([data])
		      .attr("class", "line")
		      .attr("stroke", "blue")
		      .attr("d", valueline);

		  // Add the valueline2 path.
		  svg.append("path")
		      .data([data])
		      .attr("class", "line")
		      .style("stroke", "red")
		      .attr("d", valueline2);

		  // Add the X Axis
		  svg.append("g")
		      .attr("transform", "translate(0," + height + ")")
		      .call(d3.axisBottom(x));

		  // Add the Y0 Axis
		  svg.append("g")
		      .attr("class", "axisSteelBlue")
		      .call(d3.axisLeft(y0));

		  // Add the Y1 Axis
		  svg.append("g")
		      .attr("class", "axisRed")
		      .attr("transform", "translate( " + width + ", 0 )")
		      .call(d3.axisRight(y1));

		})
	}

	render() {
		return (
			<div id="chart2">
			</div>
		)
	}
}

export default LineChart;