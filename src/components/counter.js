import React, { Component } from "react";
import Button from "./button";

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };

        this.calculateCount = this.calculateCount.bind(this);
    }

    calculateCount(action) {
        if(action === "increment") {
            this.setState({ count: this.state.count + 1 });
        } else {
            this.setState({ count: this.state.count - 1 });
        }
    }

    render() {
        const buttonStyle = { marginRight: 10 };

        return(
            <div>
                <h2 className="title">{ this.state.count }</h2>

                <Button
                    type="success"
                    text="Increment"
                    handleOnClick={() => this.calculateCount("increment")}
                    style={buttonStyle}
                    icon="fa fa-plus"
                />

                <Button
                    type="danger"
                    text="Decrement"
                    handleOnClick={() => this.calculateCount("decrement")}
                    icon="fa fa-minus"
                />
            </div>
        );
    }
}

export default Counter;