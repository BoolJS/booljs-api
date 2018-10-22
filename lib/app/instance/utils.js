'use strict';

const { dirname, basename, extname } = require('path');
const BoolError = require('../../error');
const BasePlugin = require('../../plugins/base');

/** @ignore */
module.exports = function (instance, dependencies) {
    if (!(dependencies instanceof Array)) {
        throw new BoolError(0, 'EINVALIDTYPE', 'Invalid type for dependencies');
    }

    let utilities = instance.getComponents().utilities;

    for (let route of dependencies) {
        let Dependency = require(route);

        if (Dependency.prototype instanceof BasePlugin) {
            let dependency = new Dependency();
            if (dependency instanceof BasePlugin) {
                // Dumb check imposed to satisfy the use of `new`.
            }
        } else {
            let name = basename(route, extname(route));

            if (name === 'index') {
                name = basename(dirname(route));
            }

            name = name
                .split(/-|_/)
                .map(([w, ...ord]) => `${w.toUpperCase()}${ord.join('')}`)
                .join('');

            utilities.set(name, Dependency);
        }
    }
};
