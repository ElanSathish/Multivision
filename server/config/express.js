/**
 * Created by sathishsubramanian on 1/16/16.
 */

var express = require('express'),
    bodyParser = require("body-parser"),
    morgan = require('morgan'),
    stylus = require('stylus');


module.exports = function(app, config) {
    function compile(str, path) {
        return (stylus(str).set('filename', path));
    };

    /*Express Configure*/
    app.set('views', config.rootPath + '/server/views');
    app.set('view engine', 'jade');

//Depricated: app.use(logger());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(morgan('combined'));
    app.use(stylus.middleware(
        {
            src: config.rootPath + '/public',
            compile: compile
        }
    ));
    app.use(express.static(config.rootPath + '/public'));
}