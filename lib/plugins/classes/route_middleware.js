'use strict';
const Middleware = require('./middleware');
const BoolError = require('../../error');

/**
 * Enumeration of possible types
 * @enum {String}
 * @ignore
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
 * @augments API.Middleware
 * @description RouteMiddleware defines a middleware to be activated
 * with route policies. Those can be mandatory or omittable.
 */
module.exports = class RouteMiddleware extends Middleware {
    constructor (name, type, policies, dependants) {
        super(name, dependants);
        this.checkParameters(type, policies);

        /** @member {TypesEnum} type */
        this.type = type;
        /** @member {Object} policies */
        this.policies = policies;
    }

    checkParameters (type, policies) {
        if (type === undefined || !TypesEnum.hasOwnProperty(type)) {
            throw new BoolError(0, 'E_MISSINGTYPE',
                'Field `type` is either missing or invalid'
            );
        }
        if (policies === undefined || typeof policies !== 'object') {
            throw new BoolError(0, 'E_MISSINGTYPE',
                'Field `policies` is either missing or invalid'
            );
        }
    }
};
