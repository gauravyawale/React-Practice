import React, { Component } from "react";
import "./index.css";

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : ""
        }
    }

    onChangeHandle = (event) => {
        console.log(event.target.value);
        this.setState({
            name : event.target.value,
        })
    }

    onSubmitHandle = (event) => {
        event.preventDefault();
        console.log("Form Submitted");
    }
  render() {
    return (
      <form onSubmit={(e) => this.onSubmitHandle(e)}>
        <label>
          Name:
          <input type="text" name="name" value={this.state.name} onChange={this.onChangeHandle} />
        </label>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}
