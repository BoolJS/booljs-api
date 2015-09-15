'use strict';

let instance = null;
var BoolError = require('../error');

/**
 * @class PluginStore
 * Store plugins
 */
module.exports = class PluginStore {
    static getInstance(){
        if(instance === null){
            instance = new PluginStore();
        }
        return instance;
    }

    constructor() {
        this._store = [];
    }

    /**
     * @function get
     * @description Retrieves a plugin identified by its name
     * @param  {String} name - The name of the plugin to retrieve
     * @return {BasePlugin} A plugin
     */
    get(name) {
        var plugins = _.filter(this._store, function (plugin) {
            return plugin.name === name;
        });
        if(plugins.length !== 1) return undefined;
        return plugins[0];
    }

    /**
     * @function list
     * Retrieves a list of plugins filtered by type
     * @param  {String} type - The type of plugins to retrieve
     * @return {BasePlugin[]} An array containing plugins of specified type
     */
    list(type){
        return _.filter(this._store, function (plugin) {
            return plugin.type instanceof type;
        });
    }

    /**
     * @function register
     * Registers a plugin.
     * @param {BasePlugin} plugin - A plugin to be registered in store
     */
    register(plugin) {
        if(this.get(plugin.name) === undefined){
            this._store.push(plugin);
        }
        return instance;
    }
};
