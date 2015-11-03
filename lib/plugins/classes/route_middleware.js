'use strict';
var Middleware = require('./middleware')
,   BoolError   = require('../../error');

/**
 * Enumeration of possible types
 * @enum {String}
 */
var TypesEnum = {
    mandatory: `The route must have at least one of the applyable policies
    to be enabled`,
    omittable: `The route gets enabled by default, being supressed when an
    specific policy is declared`
};

/**
 * @class RouteMiddleware
 * @memberof API
 * @description RouteMiddleware defines a middleware to be activated with route
 * policies. Those can be mandatory or omittable.
 */
module.exports = class RouteMiddleware extends Middleware {
    constructor(name, functions, dependants) {
        super(name, functions, dependants, [
            /**
             * @property {TypesEnum} type - the type of route middleware.
             */
            'type',
            /**
             * @property {Object} policies - valid policies to enable or supress
             * the middleware in a route.
             */
            'policies'
        ]);
    }

    checkIntegrity(){
        super.checkIntegrity();
        if(!TypesEnum.hasOwnProperty(this.type)) throw new BoolError(
            0, 'EINVALIDTYPE', 'Invalid route middleware type'
        );
    }
};
