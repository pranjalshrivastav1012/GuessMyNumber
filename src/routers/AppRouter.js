import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Start from "../components/StartPage";
import App from "../App";

const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Start} exact={true}/>
            <Route  path="/play" component={App} exact={true}/>

        </Switch>
    </BrowserRouter>

);

export default AppRouter;
