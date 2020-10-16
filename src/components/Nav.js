import React from "react";
import './../index.css';

const Nav = () => {
    return (
        <div className="nav-container">
            <span className='logo'>&lt; Dev-Junaid /&gt;</span>
            <ul className='nav-links'>
                <li className='link'><a href='#'>Home</a></li>
                <li className='link'><a href='#'>About</a></li>
                <li className='link'><a href='#'>Achievements</a></li>
                <li className='link'><a href='#'>Portfolio</a></li>
                <li className='link'><a href='#'>Contact</a></li>
            </ul>
        </div>
    );
};

export default Nav;
