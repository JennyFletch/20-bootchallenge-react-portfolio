import React from 'react';
import Project from './Project';

function ProjectList({classProjects}) {
    
    return (
        classProjects.map(classProject => {
            return <Project key={classProject.id} classProject={classProject} />
        })
    );
}

export default ProjectList;