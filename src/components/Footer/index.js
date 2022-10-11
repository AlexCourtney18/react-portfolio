import React from 'react';


function Footer() {

    const openSite = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <footer className='flex-row px-1' style={{ background: "#8DA9c4" }}>
            <h1 style={{ color: "#0B2545" }}>Alex Courtney</h1>
            <nav>
            <ul className='flex-row'>
                <li className='mx-2'>
                <button onClick={() => openSite('https://github.com/AlexCourtney18')}>GitHub Repository</button>
                </li>
                <li className='mx-2'>
                <button onClick={() => openSite('https://www.linkedin.com/in/alex-courtney-b90106164/')}>LinkedIn Profile</button>
                </li>
                <li className='mx-2'>
                <button onClick={() => openSite('https://stackoverflow.com/')}>Stack Overflow</button>
                </li>
            </ul>
            </nav>
        </footer>
    )
}



export default Footer;