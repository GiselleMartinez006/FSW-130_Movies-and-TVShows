import React from "react";
import { Link } from "react-router-dom";
import "./../styling/Nav.css";

function Nav() {
  return (
    <div id="nav">
      <h3>
        <div>
          <Link to="/movies">Movies</Link>

          <Link to="/shows">TV Shows</Link>

          <Link to="/">Home</Link>
        </div>
      </h3>
    </div>
  );
}
export default Nav;
