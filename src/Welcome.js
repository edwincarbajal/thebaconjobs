import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Welcome.css';

const Welcome = props => {
  return (
    <div className="row align-items-center">
      <div id="welcome-container" className="col-12">
        <h6 className="text-uppercase text-secondary text-left">
          We help you bring home the bacon
        </h6>
        <h1 className="text-left">
          TheBacon brings <span className="font-weight-bold">new roles</span> to
          the table because,<br /> we're{' '}
          <span className="font-weight-bold">better</span> when we work{' '}
          <span className="font-weight-bold">together</span>.
        </h1>
        <p>
          <Link to="/getting-started">
            <button type="button" className="btn btn-lg">
              Get Started
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Welcome;
