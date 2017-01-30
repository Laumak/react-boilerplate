import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
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

                <a  className="button is-success"
                    onClick={() => this.calculateCount("increment")} 
                    style={buttonStyle}
                >
                    <span className="icon is-small">
                        <i className="fa fa-plus"></i>
                    </span>
                    <span>Increment</span>
                </a>

                <a  className="button is-danger" 
                    onClick={() => this.calculateCount("decrement")}
                >
                    <span className="icon is-small">
                        <i className="fa fa-minus"></i>
                    </span>
                    <span>Decrement</span>
                </a>
            </div>
        );
    }
}

export default Counter;