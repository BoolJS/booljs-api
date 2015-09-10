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

    this.checkIntegrity = function () {
        var checklist = [
            'name',
            'action'
        ];
        for(var field in checklist){
            if(checklist[field] === undefined || checklist[field === null]){
                throw new BoolError(
                    0, "EINTEGRITYFAILED",
                    "Integrity check for plugin has failed"
                );
            }
        }
    };
};
