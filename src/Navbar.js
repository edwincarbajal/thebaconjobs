import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-light">
      <Link to="/" className="navbar-brand">
        theBaconJobs
      </Link>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <Link to="/job/new">
            <button type="button" className="btn">
              Post Job
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
