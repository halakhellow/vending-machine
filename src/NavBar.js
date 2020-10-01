import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/pepsi">Pepsi</NavLink>
        <NavLink to="/chips">Chips</NavLink>
        <NavLink to="/swiss-roll">SwissRoll</NavLink>
      </div>
    );
  }
}

export default NavBar;
