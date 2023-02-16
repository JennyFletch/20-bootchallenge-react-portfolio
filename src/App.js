// import logo from './logo.svg';
import './normalize.css';
import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import ProjectList from './components/ProjectList';
import Footer from './components/Footer';

function App() {

  const [myProjects] = useState([
   { id:1, name:"The Beer Finder", skills:"JQUERY / BULMA / API INTEGRATION" },
   { id:2, name:"Park Hopper", skills: "NODE / SEQUELIZE / HANDLEBARS / TAILWIND" }, 
   { id:3, name:"Another One", skills: "WHO KNOWS WHAT" }

  ]);

  return (
    <div className="App">
      
      <Header />

      <main>

        <section id="about">
            <h3>About Me</h3>
            <p>Experienced full-stack developer in the Salt Lake City area with the ability to design, build and deploy unique and engaging customer-facing web applications according to W3C coding and accessibility standards.</p>
            <p>Find me on <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jennifer-startup-fletcher/">LinkedIn</a> and <a target="_blank" href="https://my.indeed.com/p/jenniferf-2tby03s">indeed</a> to reach out, and check out my <a target="_blank" href="https://my.indeed.com/p/jenniferf-2tby03s">resume</a> for more details.</p>
        </section>

        <section id="work">
            <h3>Work</h3>
            <ProjectList classProjects={myProjects} />
        </section>
      </main>

      <Footer />

    </div>
  );
}

export default App;
