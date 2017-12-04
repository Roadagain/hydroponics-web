import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation';
import Measured from './Measured';
import Analysed from './Analysed';
import {BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path="/" component={Navigation}/>
            <Route path="/measured" component={Measured}/>
            <Route path="/analysed" component={Analysed}/>
        </div>
    </BrowserRouter>,
    document.getElementById('container'));
//ReactDOM.render(<MockUp></MockUp>, document.getElementById('container'));
