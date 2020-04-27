import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark dark-color">
        <Link className="navbar-brand navbar-title" to="/">My Assignment</Link>    
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/question/1">Question 1</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/question/2">Question 2</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/question/3">Question 3</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/question/4">Question 4</Link>
                </li>
            </ul>
        </div>
    </nav>
)

export default Navbar;