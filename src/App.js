import React, { Component } from 'react';
import axios from 'axios';

import Navbar from './Navbar';
import Welcome from './Welcome';
import Main from './Main';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      getStartedClicked: false,
    }
    this.handleGetStartedClick = this.handleGetStartedClick.bind(this);
  }

  componentWillMount() {
    axios.get('http://localhost:3001/v1/posts')
      .then((response) => {
        this.setState({ jobs: response.data })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleGetStartedClick() {
    this.setState({ getStartedClicked: !this.state.getStartedClicked });
  }

  render() {
    return (
      <div>
        {/* navbar component */}
          <Navbar />
        {/* navbar component */}

        {/* body component */}
        <div className="container-fluid">
          {/* welcome content */}
          {!this.state.getStartedClicked && <Welcome handleGetStartedClick={this.handleGetStartedClick}/>}
          {/* welcome content */}

          {/* body component */}
          <Main jobs={this.state.jobs}/>
          {/* body component */}
        </div>
      </div>
    );
  }
}

export default App;
