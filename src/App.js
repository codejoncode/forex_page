import React, { Component } from "react";
import "./App.css";
import NavBar from "./NavBar";
import MiddleSection from "./MiddleSection";
import BottomSection from "./BottomSection";
import Footer from "./Footer";


class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="App">
          <NavBar />
          <MiddleSection />
          <BottomSection />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
