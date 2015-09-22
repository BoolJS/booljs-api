'use strict';

var BoolError = require('../../error');

module.exports = function (components, dependencies) {
    if(!(dependencies instanceof Array)) throw new BoolError(
        0, 'EINVALIDTYPE', 'Invalid type for dependencies'
    );

    
};
