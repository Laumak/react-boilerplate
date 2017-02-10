import React, { PropTypes } from "react";

const propTypes = {
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
    handleOnClick: PropTypes.func,
    style: PropTypes.object,
    icon: PropTypes.string,
};

const Button = ({type, text, handleOnClick, style, icon}) => {
    let buttonClasses;

    switch(type) {
        case "success": {
            buttonClasses = "button is-success";
            break;
        }
        case "danger": {
            buttonClasses = "button is-danger";
            break;
        }
        case "info": {
            buttonClasses = "button is-info";
            break;
        }
        default: {
            buttonClasses = "button is-primary";
        }
    }

    return(
        <a
            className={buttonClasses}
            onClick={() => handleOnClick("increment")}
            style={style}
        >
            <span className="icon is-small">
                <i className={icon}></i>
            </span>
            <span>{text}</span>
        </a>
    );
};

Button.propTypes = propTypes;

export default Button;