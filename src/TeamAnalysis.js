import React, { Component } from 'react';
import Chart from './Chart.js';
import Sunburst from './Sunburst.js';
import PlayerList from './PlayerList.js';
import PlayerData from './PlayerData.js';


class TeamAnalysis extends Component {
	constructor(props){
		super(props)
		this.state = {
			year: "2017",
			player: "none"
		}
	}

	yearSelect = (event) => {
		this.setState({year: event.target.value})
	}

	playerSelect = (event) => {
		console.log(event["element"])
		this.setState({player: event["element"]})
	}

	render() {
		console.log(this.state.year)
		return (
			<div>
				<div>
					<p className="ttu  f1 black b tc db mb3 mb4-ns bb bw2">{this.props.team}</p>
				</div>
				<div className="row ">
					<div className="col-sm-6">
						<Chart onBack={this.props.onBack} team={this.props.team}/>
					</div>
					<div className="col-sm-6">
						<p>Player Data Coming Soon</p>
						<PlayerData player={this.state.player}/>
					</div>
				</div>

				<div className="btn-group" role="group" aria-label="Basic example">
				  <button onClick={this.yearSelect} value="2017" type="button" className="btn btn-secondary">2017</button>
				  <button onClick={this.yearSelect} value="2018" type="button" className="btn btn-secondary">2018</button>
				  <button type="button" className="btn btn-secondary">hold</button>
				</div>
				<div className="row">
					<div className="col-sm-6">
						<Sunburst year={this.state.year}/>
					</div>
					<div className="col-sm-6">
						<PlayerList playerSelect={this.playerSelect}/>
					</div>
				</div>
			</div>
		)
	}
}

export default TeamAnalysis;