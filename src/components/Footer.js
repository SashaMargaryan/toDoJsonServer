import React from 'react';
import {NavLink} from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <p>Copyright &copy; 2021</p>
            <NavLink to={'/about'}>About</NavLink>
        </footer>
    )
}

export default Footer

