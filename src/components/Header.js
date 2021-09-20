import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>React Lil' Playlist</h1>
        <nav className="header__navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="header__navigation--about">
              <i class="fas fa-home"></i>
              <Link to="/about">About us</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
