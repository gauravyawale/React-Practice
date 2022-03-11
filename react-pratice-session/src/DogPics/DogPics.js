import React, { Component } from "react";
import "./index.css";
import axios from "axios";
export default class DogPics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "random",
      image:
        "https://pdtxar.com/wp-content/uploads/2019/04/person-placeholder.jpg",
      breed: "",
    };
  }

  componentDidMount = () => {
    this.dogsBreedApiRequest(this.state.value);
  };

  dogsBreedApiRequest = async (breedName) => {
    const breedsArray = ["beagle", "boxer", "dalmatian", "husky"];
    let breeds = "";
    if (breedName === "random") {
      breeds = breedsArray[Math.floor(Math.random() * breedsArray.length)];
    } else {
      breeds = breedName;
    }

    let res = await axios.get(
      `https://dog.ceo/api/breed/${breeds}/images/random`
    );

    let breedImage = res.data.message;

    this.setState({
      value: breedName,
      image: breedImage,
      breed: breeds,
    });
  };

  onChangeHandle = (e) => {
    this.dogsBreedApiRequest(e.target.value);
  };

  onClickHandle = () => {
    this.dogsBreedApiRequest(this.state.value);
  };
  render() {
    let divStyle = {};
    if (this.state.value !== "random") {
      divStyle = {
        visibility: "hidden",
      };
    }

    return (
      <div>
        <label className="breed-item" htmlFor="breed">
          Select a breed :{" "}
        </label>
        <select
          value={this.state.value}
          id="breed"
          name="breed"
          onChange={this.onChangeHandle}
        >
          <option value="random">Random</option>
          <option value="beagle">Beagle</option>
          <option value="boxer">Boxer</option>
          <option value="dalmatian">Dalmatian</option>
          <option value="husky">Husky</option>
        </select>

        <div>
          <h4 className="random-item" style={divStyle}>Random Breed : {(this.state.breed).toUpperCase()}</h4>
          <img src={this.state.image} alt="" className="image-item" />
        </div>
        <div>
          <button
            type="button"
            className="button-item"
            onClick={this.onClickHandle}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}
