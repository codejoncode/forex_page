import React, { Component } from "react";

class MiddleSection extends Component {
  render() {
    return (
      <div className="middlePointDiv">
        <h1 className="bigTitle">FOREX</h1>
        <h3 className="whiteText midTitle">
          Spread Betting and CFD on 10,000+ global markets.
        </h3>
        <p className="littleScript">
          Low margins, tight spreads and fast execution on award-winning
          platform with powerful technology.
        </p>
        <div className="optionsDiv">
          <button className="tradeNowButton">TRADE NOW</button>
          <h6 className="underlineOption">
            or create a risk-free Demo account
          </h6>
        </div>
      </div>
    );
  }
}
export default MiddleSection;