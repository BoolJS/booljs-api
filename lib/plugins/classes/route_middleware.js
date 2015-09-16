'use strict';
var Middleware = require('./middleware');

/**
 * @class RouteMiddleware
 * @memberof API
 * @description RouteMiddleware defines a middleware to be activated with route
 * policies. Those can be mandatory or omittable.
 */
module.exports = class RouteMiddleware extends Middleware {
    constructor(name, functions, dependants) {
        super(name, functions, dependants, [ 'type', 'policies' ]);
    }
};
