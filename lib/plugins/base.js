'use strict';

var Store       = require('.')
,   BoolError   = require('../error')
,   store       = Store.getInstance();

/**
 * @class BasePlugin
 * @description Base for plugins.
 * @param {String} name - Name of plugin.
 * @param {String[]} classInterface - The methods that constitute a plugin's
 * interface.
 * @param {String[]} [dependants] - Dependencies for plugin.
 */
module.exports = class BasePlugin {
    constructor(name, classInterface, dependants) {
        let missingMethods = [];

        for(let dependant of dependants || []){
            try {
                require(dependant);
            } catch (err) {
                throw err;
            }
        }

        for(let field of classInterface || []) {
            if (this[field] === undefined || this[field] === null) {
                missingMethods.push(field);
            }
        }

        if(missingMethods.length > 0) throw new BoolError(
            0, "EINTEGRITYFAILED",
            `Integrity check for plugin has failed, ` +
            `methods \`${missingMethods.join(', ')}\` are missing`
        );

        store.register(this, name);
    }

    /**
     * @deprecated since v0.3.0
     * @function BasePlugin#checkIntegrity
     * @description Checks a plugin implements its interface mehtods.
     * @throws {BoolError} In case a method is not implemented.
     */
    checkIntegrity(){
        throw new BoolError(0, 'E_DEPRECATED');
    }
};
