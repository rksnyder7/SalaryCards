import React, { Component } from 'react';
import LineChart from './LineChart.js';

class PlayerData extends Component {
	render() {
		return (
			<div>
				{this.props.player}
				<LineChart player={this.props.player}/>
			</div>
		)
	}
}

export default PlayerData;