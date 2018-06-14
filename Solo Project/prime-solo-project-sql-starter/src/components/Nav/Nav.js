import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="navbar">
  <div className="header">
  <img src="trailpics/road.jpg"/>
  </div>
    <div>
      <ul>
      <li>
          <Link to="/user">
            Home
          </Link>
        </li>
        <li>
          <Link to="/search">
            Search
          </Link>
        </li>
        <li>
          <Link to="/favorite">
            View My Trails
          </Link>
        </li>
        <li>
          <Link to="/home">
            Log Out
          </Link>
        </li>
      </ul>
      
    </div>
  </div>
);

export default Nav;
