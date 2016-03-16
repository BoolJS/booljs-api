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
    constructor(name, fields, requiredFields, dependants) {
        dependants = dependants || [];
        fields = fields || {};

        this.name = name;
        for(var dependant in dependants){
            try{
                var Dependant = require(dependants[dependant]);
            } catch (err) {
                throw err;
            }
        }

        this.priority = fields.priority || 0;
        for(var key of requiredFields){
            if(fields[key]) {
                this[key] = fields[key];
            } else {
                this[key] = undefined;
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
            if(this[key] === undefined) throw new BoolError(
                0, "EINTEGRITYFAILED",
                "Integrity check for plugin has failed"
            );
        }
    }
};
