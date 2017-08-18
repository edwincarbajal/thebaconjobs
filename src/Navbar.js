import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return(
    <nav className="navbar sticky-top navbar-light bg-light">
      <Link to="/" className="navbar-brand">theBaconJobs</Link>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link active" href="#">How it Works</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Why List Your Business</a>
        </li>
        <li className="nav-item">
          <button type="button" className="btn btn-link">Sign Up</button>
        </li>
        <li className="nav-item">
          <button type="button" className="btn btn-warning">Log In</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
