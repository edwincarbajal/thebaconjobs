import React, { Component } from 'react';
import Navbar from './Navbar';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
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

        </div>
        {/* body component */}
      </div>
    );
  }
}

export default App;
