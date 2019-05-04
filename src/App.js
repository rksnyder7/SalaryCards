import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import Homepage from './Homepage.js';
import TeamAnalysis from './TeamAnalysis.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      route: 1,
      team: 'packers'
      // team: 'hold'
    }
  }

  onRouteChange = (parameter, event) => {
    this.setState({route: 1})
    this.setState({team: parameter})
  }

  onBack = (event) => {
    this.setState({route: 0})
    this.setState({team: 'hold'})
  }


  render() {

    const displayPage = [
          <Homepage onRouteChange={this.onRouteChange}/>, 
          <TeamAnalysis team={this.state.team} onBack={this.onBack}/>
        ]

    return (
      <div>

        {displayPage[this.state.route]}

      </div>
    );
  }
}

export default App;
