import React, {Component} from "react";
import "./index.css"

export default class App extends Component {
    constructor(props) {
        console.log("Constructor Reporting");
        super(props);
        this.state = {
            value : "I am Gaurav!"
        }
    }

    componentDidMount = () => {
        console.log("Component Did Mount Present? Present")
    }

    componentDidUpdate = (prevProps,prevState) => {
        console.log("Update Reporting")
        if (prevProps.value === "I am Gaurav!") {
            this.setState({
                value : "I am Developer"
            })
        }
    }
    render () {
        console.log("Render Reporting")
        return (
            <h1>Hello React, {this.state.value}</h1>
        )
    }
}