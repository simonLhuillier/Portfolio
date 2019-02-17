import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './home';
import Projects from './projects';
import Contact from './contact';

const Main = () =>(
<Switch>
    <Route  path ="/" exact component= {Home} />
    <Route  path ="/projects" exact component= {Projects} />
    <Route  path ="/contact" exact component= {Contact} />
    
</Switch>

);

export default Main;