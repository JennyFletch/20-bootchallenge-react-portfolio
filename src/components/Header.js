import React, { useState } from 'react';
import Nav from './Nav';

function Header() {
    return (
        <>
        <header id="header">
            <h1>Jennifer Fletcher</h1>
            <Nav />
        </header>

        <section className="hero">
            <div><h2>Full-Stack Web Developer</h2></div>
        </section>

        </>
    );
}

export default Header;