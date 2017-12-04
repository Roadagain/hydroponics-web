import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation';
import Home from './Home';
import Measured from './Measured';
import Analysed from './Analysed';
import {BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Navigation/>
            <Route exact path="/" component={Home} />
            <Route path="/measured" component={Measured} />
            <Route path="/analysed" component={Analysed} />
        </div>
    </BrowserRouter>,
    document.getElementById('container'));
