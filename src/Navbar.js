import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return(
    <nav className="navbar sticky-top navbar-light bg-light">
      <Link to="/" className="navbar-brand">theBaconJobs</Link>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <Link to="/job/new" type="button" className="btn btn-warning">Post Job</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
