import React from 'react';
import {NavLink} from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h3>Version 1.0.0</h3>
            <NavLink to={'/'}>Go Back</NavLink>
        </div>
    )
}

export default About;
