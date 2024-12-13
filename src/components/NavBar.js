import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/membership">Membership</Link></li>
                <li><Link to="/login">Login</Link></li>
                {/* <li><Link to="/signup">Sign-up</Link></li> */}
            </ul>
        </nav>
    );
};

export default NavBar;