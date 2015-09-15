'use strict';

var Store       = require('.')
,   BoolError   = require('../error')
,   store       = Store.getInstance();

/**
 * @class BasePlugin
 * @description Base class for plugins design
 */
module.exports = class BasePlugin {
    /**
     * @constructor
     * @description Constructor for BasePlugin
     * @param  {String} type - Type of plugin
     * @param  {String} name - Name of plugin, must be unique
     * @param  {Object} functions - Base
     * @param  {String[]} dependants -
     */
    constructor(name, functions, requiredFunctions, dependants) {
        dependants = dependants || [];
        this.name = name;
        for(var dependant in dependants){
            try{
                var Dependant = require(dependants[dependant]);
                new Dependant();
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
