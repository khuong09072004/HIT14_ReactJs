import "../Header/header.css";
import React from "react";

const Header = () => {
    return(
        <div className="nav">
            <ul className="nav-list">
                <p>SoftLand</p>
            </ul>
            <ul className="nav-list">
                <li className="nav-item">Home </li>
                <li className="nav-item">Features</li>
                <li className="nav-item">Pricing</li>
                <li className="nav-item">Blog</li>
                <li className="nav-item">Drop Down </li>
                <li className="nav-item"> Contacts Us</li>
            </ul>
        </div>


    );

};

export default Header;