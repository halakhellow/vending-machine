import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <NavLink exact activeClassName="active" to="/vending-machine">
          Home
        </NavLink>
        <NavLink exact activeClassName="active" to="/pepsi">
          Pepsi
        </NavLink>
        <NavLink exact activeClassName="active" to="/chips">
          Chips
        </NavLink>
        <NavLink exact activeClassName="active" to="/swiss-roll">
          SwissRoll
        </NavLink>
      </div>
    );
  }
}

export default NavBar;
