import React, { useState } from 'react';


function Project({classProject}) {
    return [(
        <div key={classProject.id}>
            {classProject.name}
        </div>
    )];
}

export default Project;