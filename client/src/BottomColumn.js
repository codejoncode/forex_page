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
        <div className = "column1Underneath">
          <p className = "whiteText bolder">EUR/USD</p>
          <p>some text goes here</p>
          <div>
              <span><button>BUY</button></span>
              
              <span><button>SELL</button></span>
          </div>
          <p>some more text</p>
          <div className = "holdArrows">
          <span></span>
          <p className = "medNumber darkBlack">12,230</p>
          <span className = "arrows"><div><div>&#9650;</div><div>&#9660;</div></div></span>
          </div>
          <p>some text</p>
          <p className = "medNumber whiteText">49,865</p>
          <p className = "yellowText">price</p>
          <p className = "medNumber whiteText">1.1893</p>

          <div className ="holdImage"></div>
        </div>
      </div>
    );
  }
}

export default BottomColumn;
