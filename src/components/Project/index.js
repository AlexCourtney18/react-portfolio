import React, { useState } from 'react';


function Project() {

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
            name: 'Style Buddy',
            repo: 'https://github.com/samvrny/style-buddy',
            deployed: 'https://style-buddy22.herokuapp.com/'
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

    return (
        <div>
            <h1 style={{ color: "#134074" }}>
                Deployed Projects
            </h1>
            <div className='flex-row'>
                {projects.map((image, i) => (
                    <div className='img-thumbnail mx-1' key={i}>
                    <h3>{image.name}</h3>
                    <img
                        src={require(`../../assets/projects/${i}.png`)}
                        alt={image.name}
                    />
                    <div className='flex-row space-between'>
                    <button onClick={() => openRepo(`${image.repo}`)}>GitHub Repository</button>
                    <button onClick={() => openDeployed(`${image.deployed}`)}>Deployed Application</button>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default Project;