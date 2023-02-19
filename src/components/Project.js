import React from 'react';
import iconGithub from './assets/icon-github.png'


function Project({classProject}) {
    var cardClass = "card-" + classProject.id;
    return [(
        <div key={classProject.id} className={cardClass}>
            <div className="card-info">
                <div className="repo-link">
                    <a href={classProject.repo} rel="noreferrer" target="_blank"><img src={iconGithub} alt="Code Repository" /></a>
                </div>
                <div className="project-info">
                    <h4><a href={classProject.deployed} rel="noreferrer" target="_blank">{classProject.name}</a></h4>
                    <p><a href={classProject.deployed} rel="noreferrer" target="_blank">{classProject.skills}</a></p>
                </div>
            </div>
            
        </div>
    )];
}

export default Project;