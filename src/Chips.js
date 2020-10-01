import React, { Component } from "react";
import chips from "./images/chips.jfif";

class Chips extends Component {
  render() {
    return (
      <div>
        <h1>Chips</h1>
        <img src={chips} alt="chips" />
      </div>
    );
  }
}

export default Chips;
