import React, { Component } from 'react';
import axios from 'axios';

import Navbar from './Navbar';
import Welcome from './Welcome';
import Main from './Main';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      getStartedClicked: false,
      isLoggedIn: false
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

    this.checkLocalStorage();
  }

  checkLocalStorage = () => {
    const token = localStorage.getItem('jwt');
    token && this.setState({ isLoggedIn: !this.state.isLoggedIn });
  }

  updateJobs = (job) => {
    this.setState((prevState) => ({
      jobs: [job, ...prevState.jobs]
    }));
  }

  handleGetStartedClick() {
    this.setState({ getStartedClicked: !this.state.getStartedClicked });
  }

  render() {
    const tokenStatus = this.state.getStartedClicked || this.state.isLoggedIn;
    return (
      <div>
        <Navbar />
        <div className="container-fluid">
          {/* Welcome component renders if token does not exist */}
          {!tokenStatus &&
            <Welcome handleGetStartedClick={this.handleGetStartedClick}/>
          }
          <Main
            jobs={this.state.jobs}
            checkLocalStorage={this.checkLocalStorage}
            updateJobs={this.updateJobs}
          />
        </div>
      </div>
    );
  }
}

export default App;
