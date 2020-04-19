import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className="Header">
            <nav>
                <a href="home">Home</a>
                <a href="Empoyees">Employees</a>
                <a href="job">Job</a>
            </nav>
        </div>
    );
};

export default Header;