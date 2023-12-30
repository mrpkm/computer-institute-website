import React from 'react';
import './style.scss';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <span className="logo">ms office</span>
            </div>
            <div className="nav">
                <li>home</li>
                <li>course
                    <ul>
                        <li>course</li>
                        <li>course details</li>
                    </ul>
                </li>
                <li>gallery</li>
                <li>contact</li>
            </div>
        </div>
    )
}

export default Navbar
