'use strict';

var BoolError   = require('../../error')
,   BasePlugin  = require('../../plugins/base');

/** @ignore */
module.exports = function (_instance, dependencies) {
    if(!(dependencies instanceof Array)) throw new BoolError(
        0, 'EINVALIDTYPE', 'Invalid type for dependencies'
    );

    var utilities   = _instance.getComponents().utilities;

    _.each(dependencies, function (dependency) {
        var _dep = require(dependency);

        if(!(_dep instanceof BasePlugin)){
            utilities.set(dependency, _dep);
        }
    });
};
