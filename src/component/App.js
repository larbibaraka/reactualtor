import React, { Component } from "react";
import "./calc.css";
class App extends Component {
  render() {
    return (
      <div className="myCalculator">
        <div className="result">
          <p>24</p>
        </div>
        <div className="buttons">
          <div className="row1">
            <button className="btn btn-action">C</button>
            <button className="btn btn-action">+/-</button>
            <button className="btn btn-action">%</button>
            <button className="btn btn-calc">./.</button>
          </div>
          <div className="row2">
            <button className="btn">7</button>
            <button className="btn">8</button>
            <button className="btn">9</button>
            <button className="btn btn-calc">x</button>
          </div>
          <div className="row3">
            <button className="btn">4</button>
            <button className="btn">5</button>
            <button className="btn">6</button>
            <button className="btn btn-calc">-</button>
          </div>
          <div className="row4">
            <button className="btn">1</button>
            <button className="btn">2</button>
            <button className="btn">3</button>
            <button className="btn btn-calc">+</button>
          </div>
          <div className="row5">
            <button className="btn btn-0">0</button>
            <button className="btn">0</button>
            <button className="btn">.</button>
            <button className="btn">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
