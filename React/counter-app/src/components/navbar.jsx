import React from "react";

// Stateless Functional Component
const NavBar = ({ totalCounters }) => {
    console.log('NavBar - Rendered');

    return (
        <nav className="navbar navbar-light bg-light">
            <a href="#" className="navbar-brand">
                Navbar
                <span className="badge bg-pill bg-secondary">
                    {totalCounters}
                </span>
            </a>
        </nav>
    );
}

export default NavBar;