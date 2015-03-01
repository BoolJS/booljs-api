'use strict';

module.exports = function(){

    var _components = {};

    return {
        /**
         * @function API.AppInstance#insertComponent
         */
        insertComponent: function(name, component, position){
            Object.defineProperty(position || _components, name, {
                value: component,
                writable: true,
                enumerable: true,
                configurable: true
            });
        },
        /**
         * @function API.AppInstance#getComponents
         * @description Retrieves the instance of application components
         * @returns {API.Component.BaseComponent[]} The internal components of the
         * application
         */
        getComponents: function(){
            return _components;
        },

        removeComponent: function(name, position){
            delete (position || _components)[name];
        }

    };

};
