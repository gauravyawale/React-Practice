import React, {Component} from "react";
import Counter from "./Counter";
import "./index.css"

export default class App extends Component {
    render () {
        return(
            <React.Fragment>
            <div className="row-one">
            <Counter diff={1} />
            <Counter diff={5} />
            <Counter diff={10} />
            <Counter diff={15} />
            </div>
            <div className="row-one">
            <Counter diff={20} />
            <Counter diff={25} />
            <Counter diff={30} />
            <Counter diff={35} />
            </div>
            </React.Fragment>
        )
    }
}