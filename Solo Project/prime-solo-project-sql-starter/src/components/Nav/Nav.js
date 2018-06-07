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
          <Link to="/trails">
            View My Trails
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Nav;
