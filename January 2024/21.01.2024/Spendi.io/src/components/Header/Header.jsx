import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/transactions">Transactions</Link>
                </li>
                <li>
                    <Link to="/services">New Transactions</Link>
                </li>
                <li>
                    <Link to="/contact">Settings</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
