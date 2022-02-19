import React from 'react';
import { Link } from 'react-router-dom';


const Projects = () => {
    return (
        <div>
            <div>
                Here Are My Projects:
            </div>
            <Link to='/About-Me'><h3>About Me</h3></Link>
        </div>
    );
};

export default Projects;