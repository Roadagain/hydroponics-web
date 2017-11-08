import React from 'react';
import ReactDOM from 'react-dom';
import MockUp from './MockUp';
import {BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render(<BrowserRouter>
    <div>
        <Route path="/" component={MockUp}/>
    </div>
</BrowserRouter>, document.getElementById('container'));
//ReactDOM.render(<MockUp></MockUp>, document.getElementById('container'));
