'use strict';

const { Middleware } = require('..');

module.exports = class DependantMiddleware extends Middleware {
    constructor () {
        super('dependant-middleware');
    }

    action (req, res, next) {
        next();
    }
};
