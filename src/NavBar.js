import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/pepsi">Pepsi</NavLink>
        <NavLink to="/chips">Chips</NavLink>
        <NavLink to="/swiss-roll">SwissRoll</NavLink>
      </div>
    );
  }
}

export default NavBar;
