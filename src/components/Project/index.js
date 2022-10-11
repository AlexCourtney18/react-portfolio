import React, { useState } from 'react';


function Project({ title }) {

    const [projects] = useState([
        {
            name: 'Homebase',
            repo: 'https://github.com/AlexCourtney18/homebase',
            deployed: 'https://enigmatic-bastion-69025.herokuapp.com/'
        },
        {
            name: 'Doggypedia',
            repo: 'https://github.com/AlexCourtney18/cocktail-doggo',
            deployed: 'https://alexcourtney18.github.io/cocktail-doggo/'
        },
        {
            name: 'Tech Blog',
            repo: 'https://github.com/AlexCourtney18/tech-blog',
            deployed: 'https://protected-sea-60494.herokuapp.com/'
        },
        {
            name: 'Note Taker',
            repo: 'https://github.com/AlexCourtney18/note-taker',
            deployed: 'https://intense-fortress-40157.herokuapp.com/'
        },
        {
            name: 'Text Editor',
            repo: 'https://github.com/AlexCourtney18/text-editor',
            deployed: 'https://nameless-journey-88318.herokuapp.com/'
        },
        {
            name: 'Weather Man',
            repo: 'https://github.com/AlexCourtney18/weather-man',
            deployed: 'https://alexcourtney18.github.io/weather-man/'
        },
    ]);

    const openRepo = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const openDeployed = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

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
                    <h3>{image.name}</h3>
                    <img
                        src={require(`../../assets/projects/${i}.png`)}
                        alt={image.name}
                    />
                    <button onClick={() => openRepo(`${image.repo}`)}>GitHub Repository</button>
                    <button onClick={() => openDeployed(`${image.deployed}`)}>Deployed Application</button>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default Project;