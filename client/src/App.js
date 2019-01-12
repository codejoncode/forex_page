import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="App">
          <nav className="navBar">
            <img src="#" alt="logo" />
            <h5>BEST FOREX TRADING PLATFORM</h5>
            <div className="firstPartOfDiv whiteText">
              <a href="#">How it Works</a>
              <a href="#">Range of Markets</a>
              <a href="#">Features &amp; Tools</a>
              <a href="#">Prices</a>
              <a href="#">Training</a>
              <a href="#">Join for free</a>
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
                <li>Leverage from 1:1 to 1:500</li>
                <li>
                  Spread bet or trade CFDs on over 300 major, minor and exotic
                  FX pairs
                </li>
                <li>Spreads from just 0.7 points on EUR/USD and USD/JPY</li>
                <li>Powerful charting and innovative trading tools</li>
                <li>Trade forex on the move with our mobile and</li>
              </ul>
            </div>
            <div className="column3">
              <ul>
                <li>Trade forex on the move with our mobile</li>
                <li>Buy Stop Limit/Sell Stop Limit orders</li>
                <li>Market depth information</li>
                <li>Integrated development enviornment for EAs</li>
                <li>Instant and Market Execution available</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
