import React, { Component } from "react";

class BottomColumn extends Component {
  render() {
    return (
      <nav className="navBar">
        <p className="whiteText logoText">ID</p>
        <p className="bolder">
          <span className="whiteText">BUY</span>
          <span>/</span>
          <span>SELL</span>
        </p>

      </nav>
    );
  }
}

export default BottomColumn;
