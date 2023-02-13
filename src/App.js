// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import ProjectList from './components/ProjectList';
import Footer from './components/Footer';

function App() {

  const [myProjects] = useState([
   { id:1, name:"First project" },
   { id:2, name:"Second project" } 
  ]);

  return (
    <div className="App">
      <Header />
      <div id="portfolio">
        <h3>Project Listing</h3>
        <ProjectList classProjects={myProjects} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
