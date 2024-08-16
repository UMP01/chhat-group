import React from "react";
import { Link } from "react-router-dom";
import { RxSlash } from "react-icons/rx";

const Header = ({ backgroundColor, backgroundImage, backgroundPosition }) => {
    const Style = {
        backgroundColor: backgroundColor || "#D4E6F1",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: backgroundPosition || "center",
    };

    return <div className="header rubik shadow-sm" style={Style}></div>;
};

export default Header;
