import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";

import Button from "../../src/components/button";

describe("Button component", () => {
    function setup(props) {
        return shallow(
            <Button
                {...props}
                handleOnClick={() => {}}
            />
        );
    }

    const ButtonComponent = setup({
        type: "success",
        text: "Button Text",
        icon: "fa fa-plus",
    });

    it("displays the correct text when a text is given as a prop", () => {
        expect(
            ButtonComponent.find("span").at(1).text()
        ).to.equal("Button Text");
    });

    it("shows the correct coloring when a color is given as a prop", () => {
        expect(
            ButtonComponent.find("a").hasClass("is-success")
        ).to.be.true;
    });

    it("shows the correct icon when an icon is given as a prop", () => {
        expect(
            ButtonComponent.find("i").hasClass("fa-plus")
        ).to.be.true;
    });
});
