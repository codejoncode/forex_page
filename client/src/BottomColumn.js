import React, { Component } from "react";

class BottomColumn extends Component {
  render() {
    return (
      <nav className="navBar secondNav">
        <p className="whiteText bolder">ID</p>
        <p className="bolder">
          <span className="whiteText">BUY</span>
          <span>/</span>
          <span className = "darkBlack">SELL</span>
        </p>
        <p className = "whiteText bolder">&equiv;</p>

      </nav>
    );
  }
}

export default BottomColumn;
