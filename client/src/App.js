import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="App">
          <nav className="navBar">
            <h2 className="whiteText logoText">ID</h2>
            <h5>BEST FOREX TRADING PLATFORM</h5>
            <div className="firstPartOfDiv whiteText">
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
            </div>
            <button className="signinButton">SIGN IN</button>
          </nav>
          <div className="middlePointDiv">
            <h1>FOREX</h1>
            <h3 className="whiteText">
              Spread Betting and CFD on 10,000+ global markets.
            </h3>
            <p>
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
          <div className="bottomDiv">
            <div className="column1">{/* possible image */}</div>
            <div className="column2">
              <h5 className="whiteText">OUR AWARD-WINNING PLATFORM</h5>
              <ul>
                <li className="bottomChecks"> Leverage from 1:1 to 1:500</li>
                <li className="bottomChecks">
                  Spread bet or trade CFDs on over 300 major, minor and exotic
                  FX pairs
                </li>
                <li className="bottomChecks">
                  {" "}
                  Spreads from just 0.7 points on EUR/USD and USD/JPY
                </li>
                <li className="bottomChecks">
                  {" "}
                  Powerful charting and innovative trading tools
                </li>
                <li className="bottomChecks">
                  {" "}
                  Trade forex on the move with our mobile and
                </li>
              </ul>
            </div>
            <div className="column3">
              <ul>
                <li className="bottomChecks">
                  {" "}
                  Trade forex on the move with our mobile
                </li>
                <li className="bottomChecks">
                  {" "}
                  Buy Stop Limit/Sell Stop Limit orders
                </li>
                <li className="bottomChecks"> Market depth information</li>
                <li className="bottomChecks">
                  {" "}
                  Integrated development enviornment for EAs
                </li>
                <li className="bottomChecks">
                  {" "}
                  Instant and Market Execution available
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
