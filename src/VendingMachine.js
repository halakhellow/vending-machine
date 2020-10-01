import React, { Component } from "react";
import machine from "./images/machine.jpg";

class VendingMachine extends Component {
  render() {
    return (
      <div>
        <h1>VENDING MACHINE</h1>
        <h3>What would you like to take ?</h3>
        <img src={machine} alt="machine" />
      </div>
    );
  }
}

export default VendingMachine;
