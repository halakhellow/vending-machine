import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar";
import VendingMachine from "./VendingMachine";
import Chips from "./Chips";
import Pepsi from "./Pepsi";
import SwissRoll from "./SwissRoll";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/vending-machine" component={VendingMachine} />
      <Route exact path="/pepsi" component={Pepsi} />
      <Route exact path="/chips" component={Chips} />
      <Route exact path="/swiss-roll" component={SwissRoll} />
    </div>
  );
}

export default App;
