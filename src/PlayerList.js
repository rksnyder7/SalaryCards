import React, { Component } from 'react';

class PlayerList extends Component {

	render() {

	let that = this;
	let list = []
	const players = ["Aaron Rodgers", "Davante Adams", "Kenny Clark"]

	players.forEach(function(element) {
		list.push(<li key={element} onClick={() => that.props.playerSelect({element})}>{element}</li>)
	})

		return (
				<div className="container">
					<ul className="list pl0">
						{list}
					</ul>
				</div>
			)
	}
}

export default PlayerList;