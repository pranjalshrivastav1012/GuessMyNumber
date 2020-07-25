import React from 'react';
import { NavLink } from 'react-router-dom'

const Start = () => (
    <header className="start">
        <h2 className="header">Welcome to Guessing Game !</h2>
        <NavLink className= "header__title" to="/play" activeClassName="is-active" exact={true}>Start</NavLink>

    </header>
);

export default Start;





