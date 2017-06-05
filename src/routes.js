// module.exports = function (app, passport) {
//     app.get('/', function (req, res) {
//         res.
//     })
//
//
//
// }


import React from 'react';
import {Router, Route} from 'react-router';
import  App from 'App';
import login from 'components/login/login';
import registration from 'components/registration/registration';

let Routes = (props) => (
    <Router {...props}>
        <Route path = '/' component = {App} />
        <Route path = '/login' component = {login}/>
        <Route path = '/registration' component = {registration} />
    </Router>
);

export default Routes;