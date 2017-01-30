import React, { Component } from "react";
import "./styles/app.scss";
import "../node_modules/font-awesome/css/font-awesome.css";

import Counter from "./components/counter";

class App extends Component {
    render() {
        return(
            <section className="section">
                <div className="container has-text-centered">
                    <h1 className="title">Counter example</h1>
                    <div className="columns">
                        <div className="column is-4 is-offset-4">
                            <Counter />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default App;
