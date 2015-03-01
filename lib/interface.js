'use strict';

/**
 * @class Interface
 * @description Defines an interface, based on
 * [duck-typing](http://bit.ly/1E30I3I) approach.
 * @param {String} name - The name of the interface
 * @param {String[]} methods - The methods to be implemented by child classes
 */
var Interface = module.exports = function(name, methods){

    return{
        name: name,
        methods: methods
    };

}

Interface.ensureImplements = function(child, i){

    for(var fn in i.methods){
        fn = i.methods[fn];
        if(typeof child[fn] !== 'function'){
            throw new Error(child[fn] + " wasn't implemented");
        }
    }

};
