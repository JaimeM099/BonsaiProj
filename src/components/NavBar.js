//new navbar for testing
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
    const [isLoggedIn, setisLoggedIn] = useState(false);

    useEffect(() => {
            const token = localStorage.getItem("authToken");
            setisLoggedIn(!!token); //This will dynamically update the login state
    }, []);

    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/membership">Membership</Link></li>

                {isLoggedIn ? (
                    <>
                        <li><Link to="/profile">Profile</Link></li>
                    </>
                ) : (
                    <>
                        <li><Link to="/login">Sign-in</Link></li>
                        <li><Link to="/signup">Sign-up</Link></li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default NavBar;


//old navbar if test doesn't work
// import React from "react";
// import { Link } from "react-router-dom";
// import './NavBar.css';

// const NavBar = () => {
//     return (
//         <nav className="navbar">
//             <ul className="nav-links">
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="/about">About</Link></li>
//                 <li><Link to="/contact">Contact</Link></li>
//                 <li><Link to="/membership">Membership</Link></li>
//                 <li><Link to="/login">Sign-in</Link></li>
//                 {/* <li><Link to="/signup">Sign-up</Link></li> */}
//             </ul>
//         </nav>
//     );
// };

// export default NavBar;