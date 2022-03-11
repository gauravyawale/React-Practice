import axios from "axios";
import React, { Component } from "react";

class CDMountActivity extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };
  }

  async componentDidMount () {
      let res = await axios.get("https://reqres.in/api/users/1");

      let emailOfUser = res.data.data.email;

      this.setState({
          email : emailOfUser
      })
  }
  
  render() {
    return (
        <div>
            <h1>Email: {this.state.email}</h1>
        </div>
    )
  }
}

export default CDMountActivity;