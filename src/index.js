import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";

import App from "./app";

const appEl = document.getElementById("app");

ReactDOM.render(
    <AppContainer>
        <App />
    </AppContainer>, appEl
);

if(module.hot) {
    module.hot.accept("./app", () => {
        require("./app");

        ReactDOM.render(
            <AppContainer>
                <App />
            </AppContainer>, appEl
        );
    });
}
