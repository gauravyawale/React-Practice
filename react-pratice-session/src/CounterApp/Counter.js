import React, { Component } from "react";
import "./index.css";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.increseHandle = this.increseHandle.bind(this);
  }

  increseHandle() {
    this.setState((prevState) => {
      return { counter: prevState.counter + this.props.diff };
    });
  }

  decreseHandle() {
    this.setState((prevState) => {
      return { counter: prevState.counter - this.props.diff };
    });
  }
  render() {
    return (
      <div className="counter">
        <h3>Counter of {this.props.diff}</h3>
        <h1 className="counter-value">{this.state.counter}</h1>
        <button className="buttons" onClick={this.increseHandle}>
          +{this.props.diff}
        </button>
        <button className="buttons" onClick={() => this.decreseHandle()}>
          -{this.props.diff}
        </button>
      </div>
    );
  }
}
