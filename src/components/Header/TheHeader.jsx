import React from "react";
import Logo from "../Logo/Logo";
import Navigation from "./Navigation";
// import { Link } from "react-router-dom";

const TheHeader = () => {

    return (
        <header>
            <h1>First React Site</h1>
            <Logo />
            <Navigation />
        </header>
    );
}

export default TheHeader;