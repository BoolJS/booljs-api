'use strict';

/** @ignore */
module.exports = function (store) {
    /**
     * @function Plugins.get
     * @memberof API
     * @description Retrieves a list of plugins filtered by type
     * @param  {String} type - The type of plugins to retrieve
     * @return {String} An array containing plugins of specified type
     */
    return function (type) {
        return _.filter(store, function (plugin) {
            return plugin.type === type;
        });
    };
};
