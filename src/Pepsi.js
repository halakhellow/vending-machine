import React, { Component } from "react";
import pepsi from "./images/pepsi.jpg";

class Pepsi extends Component {
  render() {
    return (
      <div>
        <h1>Pepsi</h1>
        <img src={pepsi} alt="pepsi" />
      </div>
    );
  }
}

export default Pepsi;
