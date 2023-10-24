import React from "react";

const LogoComponent = ({selected = false}) => {
    const IMG_PATH = selected
        ? "/icons/bookshelf-selected-logo.svg"
        : "/icons/bookshelf-unselected-logo.svg";

    return (
        <img
        src={IMG_PATH}
        alt="Logo icon"
        width="43.224px"
        height="69.333px"
        />
    );
}

export default LogoComponent;
