import React, { Component } from "react";
import swiss from "./images/swiss-roll.webp";

class SwissRoll extends Component {
  render() {
    return (
      <div>
        <h1>SwissRoll</h1>
        <img src={swiss} alt="swiss-roll" />
      </div>
    );
  }
}

export default SwissRoll;
