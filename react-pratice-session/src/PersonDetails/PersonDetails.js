import React, { Component } from "react";
import "./index.css";
import axios from "axios";

class Button extends Component {
    
    render() {
        return (
        
        <button className="button-item " onClick={() => this.props.onClick(this.props.value)}>
            {this.props.value}
        </button>
    )
    }
}



export default class PersonDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
        userData: {
          id: null,
          email: "_____________",
          fname: "_____________",
          lname: "",
          avatar: "https://pdtxar.com/wp-content/uploads/2019/04/person-placeholder.jpg",
        },
      };
  }


  onClickHandle = async (id) => {
    let response = await axios
      .get(`https://reqres.in/api/users/${id}`)
      .catch((error) => {
        if (error.response) {
            this.setState({
                userData: {
                  id: "No Data Available",
                  email: "No Data Available",
                  fname: "No Data Available",
                  lname: "",
                  avatar: "https://pdtxar.com/wp-content/uploads/2019/04/person-placeholder.jpg",
                },
              });
          alert("Failed to fetch the data..");
        } else {
          console.log("Error : ", error.message);
        }
      });
  
    if (response) {
      let userData = response.data.data;
      this.setState({
        userData: {
          id: userData.id,
          email: userData.email,
          fname: userData.first_name,
          lname: userData.last_name,
          avatar: userData.avatar,
        },
      });
    }
  }

  render() {
    return (
      <div className="personDetails">
        <div>
          {/* <button className="button-item" onClick={() => this.onClickHandle(1)}>1</button>
          <button className="button-item" onClick={() => this.onClickHandle(2)}>2</button>
          <button className="button-item" onClick={() => this.onClickHandle(3)}>3</button>
          <button className="button-item" onClick={() => this.onClickHandle(100)}>100</button> */}
          <Button value={1} onClick={(id) => this.onClickHandle(id)} />
          <Button value={2} onClick={(id) => this.onClickHandle(id)} />
          <Button value={3} onClick={(id) => this.onClickHandle(id)} />
          <Button value={4} onClick={(id) => this.onClickHandle(id)} />
          <Button value={5} onClick={(id) => this.onClickHandle(id)} />
          <Button value={6} onClick={(id) => this.onClickHandle(id)} />
          <Button value={7} onClick={(id) => this.onClickHandle(id)} />
          <Button value={8} onClick={(id) => this.onClickHandle(id)} />
          <Button value={9} onClick={(id) => this.onClickHandle(id)} />
          <Button value={100} onClick={(id) => this.onClickHandle(id)} />
        </div>
        <div>
          <h2>Email : {this.state.userData.email}</h2>
          <h2>Name : {this.state.userData.fname + " " + this.state.userData.lname}</h2>
          <img
            src={this.state.userData.avatar}
            alt={this.state.userData.id}
            className="img-item"
          />
        </div>
      </div>
    );
  }
}
