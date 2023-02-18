import React from 'react';
import iconGithub from './assets/icon-github.png'
import iconLinkedin from './assets/icon-linkedin.png'
import iconIndeed from './assets/icon-indeed.png'

function Footer() {
    return (
        <footer id="contact">
            <ul className="soc-net">
                <li><a target="_blank" rel="noreferrer" href="https://github.com/JennyFletch"><img src={iconGithub} alt="github" /></a></li>
                <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jennifer-startup-fletcher/"><img src={iconLinkedin} alt="linkedin" /></a></li>
                <li><a target="_blank" rel="noreferrer" href="https://my.indeed.com/p/jenniferf-2tby03s"><img src={iconIndeed} alt="indeed" /></a></li>
            </ul>
        </footer>
    );
}

export default Footer;