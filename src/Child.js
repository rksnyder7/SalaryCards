import React, { Component } from 'react';
import Sunburst from './Sunburst.js';
import * as d3 from 'd3';

class Child extends Component {
	constructor(props){
		super(props)
	}

	render() {
			console.log(this.props.year)
		return (
			<div>
				<Sunburst year={this.props.year}/>
			</div>
		)
	}
}

export default Child;