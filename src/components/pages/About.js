import React from 'react';
import bioPic from '../assets/bio-color-reg.jpeg'
function About() {
    return (
            <section id="about">
                <h3>About Me</h3>
                <div className="bio-outer">
                    <div className="pic">
                        <img src={bioPic} alt="Jennifer Fletcher, web developer" />
                    </div>
                    <div className="bio">
                        <p>I'm a web developer in the Salt Lake City area with 15+ years of experience, working closely with customers to design and build custom web applications to best fit their business goals and budget. I love the challenge of creating unique and engaging user interfaces on top of solid code that's easy to maintain and scale as a business grows.</p>
                        <p>I've come a long way since my early days of writing hangman games in BASIC. I've built educational Flash games for kids, created custom websites for small businesses like salons and pubs, all the way up to construction companies and law firms. Currently I'm building MERN stack web apps as well as Wordpress sites, and plan to tackle AWS later this year. In this industry there's always more to learn and something new to try, and I'm always on the lookout for the next exciting challenge.</p>
                    </div>
                </div>
            </section>
    );
}

export default About;