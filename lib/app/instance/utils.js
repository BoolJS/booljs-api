'use strict';

var BoolError   = require('../../error')
,   BasePlugin  = require('../../plugins/base');

/** @ignore */
module.exports = function (_instance, dependencies) {
    if(!(dependencies instanceof Array)) throw new BoolError(
        0, 'EINVALIDTYPE', 'Invalid type for dependencies'
    );

    let utilities = _instance.getComponents().utilities;

    for(let route of dependencies) {
        var Dependency = require(route);

        if(Dependency.prototype instanceof BasePlugin){
            new Dependency();
        } else {
            utilities.set(route, Dependency);
        }
    }
};
