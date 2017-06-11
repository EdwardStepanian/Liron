import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from './App';
import login from './components/login/login';
import Registration from './components/registration/registration';

let Routes = (props) => (
    <Router {...props}>
        <div>
            <Route path='/' component={App} />
            <Route path='/login' component={login}/>
            <Route path='/registration' component={Registration} />
        </div>
    </Router>
);

export default Routes;