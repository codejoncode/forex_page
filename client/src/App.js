import React, { Component } from "react";
import "./App.css";
import NavBar from "./NavBar";
import MiddleSection from "./MiddleSection";
import BottomSection from "./BottomSection";
import Gadget from "./Gadget";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="App">
          <NavBar />
          <MiddleSection />
          <BottomSection />
          <Gadget />
        </div>
      </div>
    );
  }
}

export default App;
