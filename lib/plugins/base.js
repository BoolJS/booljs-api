'use strict';

var Store       = require('.')
,   BoolError   = require('../error')
,   store       = Store.getInstance();

/**
 * @class BasePlugin
 * @description Base for plugins
 * @param {String} name - Name of plugin
 * @param {Object} functions - Functions that compose the plugin
 * @param {String[]} requiredFunctions - Required properties in plugin
 * @param {String[]} [dependants] - Dependencies for plugin
 */
module.exports = class BasePlugin {
    constructor(name, functions, requiredFunctions, dependants) {
        dependants = dependants || [];
        functions = functions || {};

        this.name = name;
        for(var dependant in dependants){
            try{
                var Dependant = require(dependants[dependant]);
            } catch (err) {
                throw err;
            }
        }

        for(var key in requiredFunctions){
            var fn = requiredFunctions[key];
            if(functions[fn]) {
                this[fn] = functions[fn];
            } else {
                this[fn] = undefined;
            }
        }

        store.register(this);
    }

    /**
     * @function BasePlugin#checkIntegrity
     * @description Checks a middleware plugin implements its mandatory fields.
     * @throws {BoolError} In case a field is not implemented
     */
    checkIntegrity(){
        for(var key in this){
            if(!this[key]) throw new BoolError(
                0, "EINTEGRITYFAILED",
                "Integrity check for plugin has failed"
            );
        }
    }
};
