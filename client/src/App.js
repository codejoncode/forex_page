import React, { Component } from "react";
import "./App.css";
import NavBar from "./NavBar";
import MiddleSection from "./MiddleSection";
import BottomSection from "./BottomSection";


class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="App">
          <NavBar />
          <MiddleSection />
          <BottomSection />
        </div>
      </div>
    );
  }
}

export default App;
