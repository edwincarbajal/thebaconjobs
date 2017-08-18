import React, { Component } from 'react';
import axios from 'axios';

import Navbar from './Navbar';
import Main from './Main';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    }
  }

  componentWillMount() {
    axios.get('http://localhost:3001/v1/posts')
      .then((response) => {
        this.setState({ jobs: response.data })
      })
      .catch(function (error) {
        console.log(error);
      });
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
          <div className="row">
            <div className="col-md-7">
              <p className="text-uppercase text-secondary text-left">We help you bring home the bacon</p>
              <p className="lead text-left">The Bacon brings <span className="font-weight-bold">new roles</span> to the table, because<br/> we're <span className="font-weight-bold">better</span> when we work <span className="font-weight-bold">together</span>.</p>
              <p>
                <button type="button" className="btn btn-primary">Get Started</button>
              </p>
            </div>
          </div>
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
