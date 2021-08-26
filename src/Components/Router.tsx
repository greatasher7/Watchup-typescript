import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import Home from '../Routes/Home';
import Data from '../Routes/Data';
import Header from './Header';

const RouterComponent = () => {
    
    return(
        <>
            <h1>this is Router components</h1>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/data" component={Data} />
                <Redirect from="*" to="/"/>
            </Switch>
        </>
    )
}

export default RouterComponent;