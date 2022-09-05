const express = require('express');
const newsRouter = require('./news');

const siteController = require('../app/controllers/SiteController');

function route(app){
    // News router use new.js in folder routes
    app.use('/news', newsRouter);

    // Site router
    app.use('/search', siteController.search);
    app.use('/', siteController.index);
}

module.exports = route;