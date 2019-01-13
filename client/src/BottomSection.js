import React, { Component } from "react";
import BottomColumn from "./BottomColumn";

class BottomSection extends Component {
  render() {
    return (
      <div className="bottomContainer">
        <div className="bottomDiv">
          <BottomColumn />
          <div className="sectionOff">
            <div className="column2">
              <h5 className="whiteText bottomTitle">
                OUR AWARD-WINNING PLATFORM
              </h5>
              <ul>
                <li className="bottomChecks">
                  {" "}
                  <span className="positionSpan">
                    {" "}
                    Leverage from 1:1 to 1:500{" "}
                  </span>
                </li>
                <li className="bottomChecks">
                  {" "}
                  <span className="positionSpan">
                    Spread bet or trade CFDs on over 300 major, minor and exotic
                    FX pairs
                  </span>
                </li>
                <li className="bottomChecks">
                  {" "}
                  <span className="positionSpan">
                    {" "}
                    Spreads from just 0.7 points on EUR/USD and USD/JPY
                  </span>
                </li>
                <li className="bottomChecks">
                  {" "}
                  <span className="positionSpan">
                    {" "}
                    Powerful charting and innovative trading tools
                  </span>
                </li>
                <li className="bottomChecks">
                  {" "}
                  <span className="positionSpan">
                    {" "}
                    Trade forex on the move with our mobile and
                  </span>
                </li>
              </ul>
            </div>
            <div className="column3">
              <br />
              <br />
              <ul>
                <li className="bottomChecks">
                  {" "}
                  <span className="positionSpan">
                    {" "}
                    Trade forex on the move with our mobile
                  </span>
                </li>
                <li className="bottomChecks">
                  {" "}
                  <span className="positionSpan">
                    {" "}
                    Buy Stop Limit/Sell Stop Limit orders
                  </span>
                </li>
                <li className="bottomChecks">
                  {" "}
                  <span className="positionSpan">
                    {" "}
                    Market depth information{" "}
                  </span>
                </li>
                <li className="bottomChecks">
                  {" "}
                  <span className="positionSpan">
                    {" "}
                    Integrated development enviornment for EAs
                  </span>
                </li>
                <li className="bottomChecks">
                  {" "}
                  <span className="positionSpan">
                    {" "}
                    Instant and Market Execution available
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BottomSection;
