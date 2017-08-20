import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = (props) => {
  return(
    <div className="row">
      <div className="col-md-7">
        <p className="text-uppercase text-secondary text-left">We help you bring home the bacon</p>
        <p className="lead text-left">The Bacon brings <span className="font-weight-bold">new roles</span> to the table, because<br/> we're <span className="font-weight-bold">better</span> when we work <span className="font-weight-bold">together</span>.</p>
        <p>
          <Link to="/getting-started">
            <button type="button" onClick={props.handleGetStartedClick} className="btn btn-primary">Get Started</button>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Welcome;
