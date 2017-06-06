/* eslint no-console: 0 */

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 7001 : process.env.PORT;
const app = express();

const mongoose = require('mongoose');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

let configDB = require('./config/database');

mongoose.connect(configDB.url); //Database coonection url;

if (isDeveloping) {
    const compiler = webpack(config);
    const middleware = webpackMiddleware(compiler, {
        publicPath: config.output.publicPath,
        contentBase: 'src',
        stats: {
            colors: true,
            hash: false,
            timings: true,
            chunks: false,
            chunkModules: false,
            modules: false
        }
    });

    app.use(middleware);
    app.use(webpackHotMiddleware(compiler));
    app.get('*', function response(req, res) {
        res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'app/index.html')));
        res.end();
    });
} else {
    app.use(express.static(__dirname + '/app'));
    app.get('*', function response(req, res) {
        res.sendFile(path.join(__dirname, 'public/index.html'));
    });

    app.use(cookieParser); // Read Cookies, for  authentication
    app.use(bodyParser); // Get data form html forms

    app.use(passport.initialize());
    app.use(passport.session()); // persistent login sessions

    require('./src/routes')(app, passport);
}

app.listen(port, 'Liron', function onStart(err) {
    if (err) {
        console.log(err);
    }
    console.info('==> 🌎 Listening on port %s. Open up http://Liron:%s/ in your browser.', port, port);
});
