'use strict';

var API = require('..');

module.exports = class ExampleMiddleware extends API.Middleware {
    constructor(){
        super('example-middleware');
    }
    action(req, res, next) {
        next();
    }
};
