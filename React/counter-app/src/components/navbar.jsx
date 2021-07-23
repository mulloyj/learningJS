import React from "react";

// Stateless Functional Component
const NavBar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a href="#" className="navbar-brand">
                Navbar
                <span className="badge bg-pill bg-secondary">
                        {this.props.totalCounters}
                    </span>
            </a>
        </nav>
    );
}

export default NavBar;