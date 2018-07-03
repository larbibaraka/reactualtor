import React, { Component } from "react";
import Buttons  from './buttons';
import Result from './result';
import "./calc.css";
class App extends Component {
  render() {
    return (
      <div className="myCalculator">
        <Result result="150"/>
        <Buttons/>
      </div>
    );
  }
}

export default App;
