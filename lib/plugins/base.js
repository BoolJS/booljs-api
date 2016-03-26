'use strict';

var Store       = require('.')
,   BoolError   = require('../error')
,   store       = Store.getInstance();

/**
 * @class BasePlugin
 * @description Base for plugins
 * @param {String} name - Name of plugin
 * @param {String[]} requiredFunctions - Required properties in plugin
 * @param {String[]} [dependants] - Dependencies for plugin
 */
module.exports = class BasePlugin {
    constructor(name, requiredFunctions, dependants) {
        dependants = dependants || [];
        functions = functions || {};

        this.methodMissing = null;
        var basePluginClass = this;

        this.name = name;
        for(var dependant in dependants){
            try{
                require(dependants[dependant]);
            } catch (err) {
                throw err;
            }
        }

        requiredFields.forEach(function (field) {
            if ( !basePluginClass[field] && 
                 typeof basePluginClass[field] !== 'function' ) {
                basePluginClass.methodMissing = field;
            }
        })

        store.register(this);
    }

    /**
     * @function BasePlugin#checkIntegrity
     * @description Checks a middleware plugin implements its mandatory fields.
     * @throws {BoolError} In case a field is not implemented
     */
    checkIntegrity(){
        if(this.methodMissing) throw new BoolError(
            0, "EINTEGRITYFAILED",
            `Integrity check for plugin has failed, method ${this.missingMethod} is missing`
        );
    }
};