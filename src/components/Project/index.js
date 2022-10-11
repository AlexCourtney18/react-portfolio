import React, { useState } from 'react';


function Project({ title }) {

    const [projects] = useState([
        {
            name: 'Homebase'
        },
        {
            name: 'Doggypedia'
        },
        {
            name: 'Tech Blog'
        },
        {
            name: 'Note Taker'
        },
        {
            name: 'Team Profile Generator'
        },
        {
            name: 'Weather Man'
        },
    ]);

    //const currentProjects = projects.filter((project) => project.name === title);
    const [currentProject, setCurrentProject] = useState();
    console.log(projects);

    return (
        <div>
            <h1>
                PROJECTS!
            </h1>
            <div className='flex-row'>
                {projects.map((image, i) => (
                    <div className='img-thumbnail mx-1' key={i}>
                    <img
                        src={require(`../../assets/projects/${i}.png`)}
                        alt={image.name}
                    />
                    {/* <button>GitHub Repository</button> */}
                    </div>
                ))}
            </div>
        </div>
    );
}


export default Project;