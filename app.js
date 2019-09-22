const express = require('express');
const path = require('path');
const httpProxy = require('http-proxy');
const requestHandler = require('./requestHandler');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

const apiProxy = httpProxy.createProxyServer({
    target:"http://localhost:4001"
});

app.use('/api', function(req, res){

    apiProxy.web(req, res);
});

app.get('*', requestHandler);

app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

module.exports = app;
