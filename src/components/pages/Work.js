import React, { useState } from 'react';
import ProjectList from '../ProjectList';

export default function Work() {

    const [myProjects] = useState([
        { 
            id:1, 
            name:"The Beer Finder", 
            skills:"JQUERY / BULMA / API INTEGRATION", 
            repo:"https://github.com/Canadianfaller7/beer-finder", 
            deployed:"https://canadianfaller7.github.io/beer-finder/" 
        },
        { 
            id:2, 
            name:"Park Hopper", 
            skills: "SEQUELIZE / HANDLEBARS / TAILWIND", 
            repo:"https://github.com/MattThurn/Park-Hopper", 
            deployed:"https://park-hopper.herokuapp.com/" 
        }, 
        { 
            id:3, 
            name:"JS Coding Quiz", 
            skills: "JAVASCRIPT / LOCALSTORAGE", 
            repo:"https://github.com/JennyFletch/04-bootchallenge-js-coding-quiz", 
            deployed:"https://jennyfletch.github.io/04-bootchallenge-js-coding-quiz/" 
        },
        { 
            id:4, 
            name:"The MVC Tech Blog", 
            skills:"EXPRESS / SEQUELIZE / HANDLEBARS", 
            repo:"https://github.com/JennyFletch/14-bootchallenge-mvc-tech-blog", 
            deployed:"https://mvctechblog.herokuapp.com/" 
        },
        { 
            id:5, 
            name:"Weather Dashboard", 
            skills: "JAVASCRIPT / REST API", 
            repo:"https://github.com/JennyFletch/06-bootchallenge-api-weather-dashboard", 
            deployed:"https://jennyfletch.github.io/06-bootchallenge-api-weather-dashboard/"
        }, 
        { 
            id:6, 
            name:"Day Planner", 
            skills: "JQUERY / BOOTSTRAP / DAY.JS", 
            repo:"https://github.com/JennyFletch/05-bootchallenge-jquery-day-planner", 
            deployed:"https://jennyfletch.github.io/05-bootchallenge-jquery-day-planner/" 
        }
     
     
    ]);

    return (
            <section id="work">
                    <h3>Portfolio</h3>
                    <ProjectList classProjects={myProjects} />
            </section>
    );
}