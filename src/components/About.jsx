import React from 'react';
import aboutimage from '../images/about.png';
const About = () => {
    return (
        <div id='about'>
            <div className="about-image">
                <img src={aboutimage} alt="" />
            </div>
            <div className="about-text">
                <h1>LEARN MORE ABOUT US</h1>
                <p>Lorem ipsum dolorsit amet consectetur adipisicing elit.
                     Aliquam molestias libero perferendis nesciunt sunt consequatur dolor harum totam doloribus? Eos, dolor?</p>
                     <button>READ MORE</button>
            </div>
            
        </div>
    )
}

export default About
