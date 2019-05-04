import React, { Component } from 'react';

class Homepage extends Component {
	render() {
		return (
	        <div className="container">
	          <div className="row">
	            <p className="black b f-headline-ns tc db mb3 mb4-ns center">NFL Salaries</p>
	          </div>
	          <div className="row">
	            <div onClick= {this.props.onRouteChange.bind(this, "packers")} className="col-sm-4">
	                <img className="card-img-top img-fluid" src="https://a.espncdn.com/i/teamlogos/nfl/500/gb.png" alt=''></img>
	                <div className="card-body">
	                  <h5 className="card-title">Packers</h5>
	                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
	                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
	                </div>
	            </div>
	            <div onClick= {this.props.onRouteChange.bind(this, "chargers")} className="col-sm-4">
	                <img className="card-img-top img-fluid" src="https://a.espncdn.com/i/teamlogos/nfl/500/lac.png" alt=''></img>
	                <div className="card-body">
	                  <h5 className="card-title">Chargers</h5>
	                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
	                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
	                </div>
	            </div>
	            <div onClick= {this.props.onRouteChange.bind(this, "bears")} className="col-sm-4">
	                <img className="card-img-top img-fluid" src="https://a.espncdn.com/i/teamlogos/nfl/500/chi.png" alt=''></img>
	                <div className="card-body">
	                  <h5 className="card-title">Bears</h5>
	                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
	                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
	                </div>
	            </div>
	          </div>
	        </div>
		)
	}
}

export default Homepage;