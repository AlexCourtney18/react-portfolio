import React from 'react';
import headShot from "../../assets/headshot.jpg";

function About() {
    return (
        <section className='my-5'>
        <h1 id="about">Who am I?</h1>
        <img src={headShot} className="my-2" style={{ width: "100%" }} alt="cover" />
        </section>
    );
}


export default About;