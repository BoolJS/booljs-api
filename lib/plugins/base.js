'use strict';

const Store = require('.');
const BoolError = require('../error');
const store = Store.getInstance();

/**
 * @class BasePlugin
 * @description Base for plugins.
 * @param {String} name - Name of plugin.
 * @param {String[]} classInterface - The methods that constitute a plugin's
 * interface.
 * @param {String[]} [dependants] - Dependencies for plugin.
 */
module.exports = class BasePlugin {
    constructor (name, classInterface = [], dependants = []) {
        const missingMethods = [];

        /** @member {Object} name */
        this.name = name;

        for (const route of dependants) {
            const Dependant = require(route);

            const dependant = new Dependant();
            if (dependant instanceof BasePlugin) {
                // Dumb check imposed to satisfy the use of `new`.
            }
        }

        for (const field of classInterface) {
            if (this[field] === undefined || this[field] === null) {
                missingMethods.push(field);
            }
        }

        if (missingMethods.length > 0) {
            throw new BoolError(0, 'EINTEGRITYFAILED', [
                'Integrity check for plugin has failed,',
                `methods \`${missingMethods.join(', ')}\` are missing`
            ].join(' '));
        }

        store.register(this, name);
    }

    /**
     * @deprecated since v0.3.0
     * @function BasePlugin#checkIntegrity
     * @description Checks a plugin implements its interface mehtods.
     * @throws {BoolError} In case a method is not implemented.
     */
    checkIntegrity () {
        throw new BoolError(0, 'E_DEPRECATED');
    }
};
