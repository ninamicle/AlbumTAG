import React from 'react';
import LandingPage from './landingpage';
import {Switch, Route} from 'react-router-dom';
import Pokedex from './pokedex';
import MyProfile from './myprofile';
import Utenti from './utenti';

const Main =()=>(
    <Switch>
    <Route exact path="/" component={LandingPage}/>
    <Route  path="/pokedex" component={Pokedex}/>
    <Route  path="/utenti" component={Utenti}/>
    <Route  path="/myprofile" component={MyProfile}/>
    </Switch>

)
export default Main;