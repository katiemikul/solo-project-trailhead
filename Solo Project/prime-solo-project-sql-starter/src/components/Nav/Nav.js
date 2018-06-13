import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="navbar">
    <div>
      <ul>
        <li>
          <Link to="/search">
            Search
          </Link>
        </li>
        <li>
          <Link to="/favoritetrails">
            View My Trails
          </Link>
        </li>
      </ul>
      <button
            onClick={this.logout}
          >
            Log Out
          </button>
    </div>
  </div>
);

export default Nav;
