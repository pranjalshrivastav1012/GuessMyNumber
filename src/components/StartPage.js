import React from 'react';
import { NavLink } from 'react-router-dom'

const Start = () => (
    <header>
        <h1>Welcome to the Game</h1>
        <NavLink to="/play" activeClassName="is-active" exact={true}>Start</NavLink>

    </header>
);

export default Start;





