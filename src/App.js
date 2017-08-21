import React, { Component } from 'react';
import axios from 'axios';

import Navbar from './Navbar';
import Welcome from './Welcome';
import Main from './Main';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    };
  }

  componentWillMount() {
    axios
      .get('http://localhost:3001/v1/posts')
      .then(response => {
        this.setState({ jobs: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  updateJobs = job => {
    this.setState(prevState => ({
      jobs: [job, ...prevState.jobs]
    }));
  };

  fetchData = () => {
    axios
      .get('http://localhost:3001/v1/posts')
      .then(response => {
        this.setState({ jobs: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Navbar />

        <div className="container-fluid">
          <Welcome handleGetStartedClick={this.handleGetStartedClick} />

          <Main
            jobs={this.state.jobs}
            updateJobs={this.updateJobs}
            fetchData={this.fetchData}
          />

          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
