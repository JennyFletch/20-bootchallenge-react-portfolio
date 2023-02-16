import React, { useState } from 'react';


function Project({classProject}) {
    var cardClass = "card-" + classProject.id;
    return [(
        <div key={classProject.id} className={cardClass}>
            <div className="card-info">
                <h4>{classProject.name}</h4>
                <p>{classProject.skills}</p>
            </div>
            
        </div>
    )];
}

export default Project;