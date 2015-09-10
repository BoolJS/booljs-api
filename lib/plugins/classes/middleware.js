'use strict';

var BoolError = require('../../error');

/**
 * @class Middleware
 * @memberof API
 * @description Middleware defines a middleware to be used in web server
 * settings.
 */
module.exports = function () {
    this.type = 'middleware';

    /**
     * @function Middleware#checkIntegrity
     * @description Checks a middleware plugin implements its mandatory fields.
     * @throws {BoolError} In case a field is not implemented
     */
    this.checkIntegrity = function () {
        var checklist = [
            'name',
            'action'
        ];

        for(var field in checklist){
            if(
                this[checklist[field]] === undefined ||
                this[checklist[field]] === null
            ){
                throw new BoolError(
                    0, "EINTEGRITYFAILED",
                    "Integrity check for plugin has failed"
                );
            }
        }
    };
};
