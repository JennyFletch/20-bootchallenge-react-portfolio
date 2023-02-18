import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <ul>
                <li><Link to="/">About Me</Link></li>
                <li><Link to="/work">Work</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><a target="_blank" rel="noreferrer" href="https://jenniferkfletcher.com/wp-content/uploads/2023/01/JenniferKFletcherWebDev.pdf" alt="Jennifer Fletcher - Web Developer Resume">Resume</a></li>
            </ul>
        </nav>
    )
}

export default Nav;