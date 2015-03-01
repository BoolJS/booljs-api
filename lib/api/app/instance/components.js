'use strict';

module.exports = function(_components){

    return {

        register: function(name, component){
            Object.defineProperty(_components, name, {
                value: component,
                writable: true,
                enumerable: true,
                configurable: true
            });
        },

        list: function(){
            return _components;
        },

        remove: function(name){
            Object.removeProperty(_components, name);
        }

    };

};
