'use strict';

/** @ignore */
module.exports = function (store) {
    /**
     * @function Plugins.register
     * @memberof API
     * @description Registers a plugin.
     * @param  {Plugin} plugin - A plugin to be registered in store
     */
    return function (plugin) {
        var _plugin;
        if(typeof plugin == 'string'){
            var Plugin = require(plugin);
            _plugin = new Plugin();
        } else {
            _plugin = plugin;
        }

        store.push(_plugin);
    };
};
