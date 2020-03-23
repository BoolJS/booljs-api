'use strict';

const { Middleware } = require('..');

module.exports = class ExampleMiddleware extends Middleware {
    constructor () {
        super('example-middleware', [require.resolve('./dependant-class')]);
    }

    action (req, res, next) {
        next();
    }
};
