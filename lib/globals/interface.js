'use strict';

/**
 * @class Interface
 * @description Defines an interface, based on
 * [duck-typing]{@link http://bit.ly/1E30I3I} approach.
 * @param {String} name - The name of the interface
 * @param {String[]} methods - The methods to be implemented by child classes
 */
var Interface = module.exports = function(name, methods){

    return{
        name: name,
        methods: methods
    };

}

/**
 * @function Interface.ensureImplements
 * @description Ensures a Class completely fulfills the Interface definition
 * @param {Object} child - The child class.
 * @param {Interface} i - The interface to ensure.
 * @throws {Error} In case a method of the interface is not implemented.
 */
Interface.ensureImplements = function(child, i){

    for(var fn in i.methods){
        fn = i.methods[fn];
        if(typeof child[fn] !== 'function'){
            throw new Error(fn + " wasn't implemented");
        }
    }

};

/**
 * @function Interface.checkImplements
 * @description Checks if a Class completely fulfills the Interface definition.
 * A less severe form of [ensureImplements]{@link Interface.ensureImplements}
 * @param {Object} child - The child class.
 * @param {Interface} i - The interface to ensure.
 * @return {Boolean} A boolean stating false in case a method of the interface
 * is not implemented and true otherwise.
 */
Interface.checkImplements = function(child, i){

    for(var fn in i.methods){
        fn = i.methods[fn];
        if(typeof child[fn] !== 'function'){
            return false;
        }
    }

    return true;

}
