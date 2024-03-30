import React, { useState } from "react";
import logo from "../images/Logo.svg";
import { IconMenu2 } from "@tabler/icons-react";

function Nav() {
    const [menuStatus, setMenuStatus] = useState(false);

    const toggleMenu = () => setMenuStatus(!menuStatus);

    return (
        <nav className={`navbar ${menuStatus ? "open" : ""}`}>
            <a href="/" className="logo">
                <img src={logo} alt="logo"/>
            </a>
            
            <IconMenu2 size={36} className="menu-icon" onClick={toggleMenu}/>

            <ul className={`nav-links ${menuStatus ? "visible" : ""}`}>
                <li><a href="/" className>Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#reservations">Reservations</a></li>
                <li><a href="#order_online">Order Online</a></li>
                <li><a href="#login">Login</a></li>
            </ul>
        </nav>
    )
}

export default Nav;