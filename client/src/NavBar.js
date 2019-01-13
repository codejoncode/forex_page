import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navBar">
        <div className="firstPartOfDiv">
          <h2 className="whiteText logoText">ID</h2>
          <h6 className="firstPartText">BEST FOREX TRADING PLATFORM</h6>
        </div>
        <div className="secondPartDiv whiteText">
          <a href="#" className="whiteText bolder">
            How it Works
          </a>
          <a href="#" className="whiteText bolder">
            Range of Markets
          </a>
          <a href="#" className="whiteText bolder">
            Features &amp; Tools
          </a>
          <a href="#" className="whiteText bolder">
            Prices
          </a>
          <a href="#" className="whiteText bolder">
            Training
          </a>
          <a href="#" className="whiteText bolder">
            Join for free
          </a>
          <button className="signinButton">SIGN IN</button>
        </div>
      </nav>
    );
  }
}

export default NavBar; 