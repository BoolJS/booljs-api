'use strict';

const { dirname, basename, extname } = require('path');
const BoolError = require('../../error');
const BasePlugin = require('../../plugins/base');

/** @ignore */
module.exports = async function (instance, dependencies) {
    if (!(dependencies instanceof Array)) {
        throw new BoolError(0, 'EINVALIDTYPE', 'Invalid type for dependencies');
    }

    const { utilities } = instance.getComponents();

    for (const route of dependencies) {
        let Dependency;

        try {
            Dependency = await require(route);
        } catch (error) {
            if (error.code === 'ERR_REQUIRE_ESM') {
                Dependency = await import(route);
            } else {
                throw error;
            }
        }

        if (Dependency.prototype instanceof BasePlugin) {
            const dependency = new Dependency();
            if (dependency instanceof BasePlugin) {
                // Dumb check imposed to satisfy the use of `new`.
            }
        } else {
            let name;

            if (!route.match(/^@.*\/.*/)) {
                name = basename(route, extname(route));
            } else {
                name = route;
            }

            if (name === 'index') {
                name = basename(dirname(route));
            }

            name = name
                .replace(/@/g, '')
                .split(/-|_|\//)
                .map(([w, ...ord]) => `${w.toUpperCase()}${ord.join('')}`)
                .join('');

            utilities.set(name, Dependency);
        }
    }

    utilities.freeze();
};
