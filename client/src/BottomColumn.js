import React, { Component } from "react";

class BottomColumn extends Component {
  render() {
    return (
      <div className="column1">
        <nav className="navBar secondNav">
          <p className="whiteText bolder">ID</p>
          <p className="bolder">
            <span className="whiteText">BUY</span>
            <span>/</span>
            <span className="darkBlack">SELL</span>
          </p>
          <p className="whiteText bolder">&equiv;</p>
        </nav>
        <div className = "">
          <p>EUR/USD</p>
          <p>some text goes here</p>
          <div className ="holdImage"></div>
        </div>
      </div>
    );
  }
}

export default BottomColumn;
