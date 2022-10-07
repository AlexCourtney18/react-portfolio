import React from 'react';
import headShot from "../../assets/headshot.jpg";

function About() {
    return (
        <section className='about-me my-5'>
        <h1 id="about">Who am I?</h1>
        <img src={headShot} className="my-2" alt="headshot" />
        <h3>I graduated from UW-Milwaukee in 2014 with a Bachelors degree in business administration. Since graduating I worked in customer facing sales roles for a few different
            organizations. In April 2022 I decided to change fields to web development. I am currently enrolled in a Full-Stack Development coding bootcamp through University of Wisconsin.
            I most enjoy working on the back-end functionality of applications.
        </h3>
        </section>
    );
}


export default About;