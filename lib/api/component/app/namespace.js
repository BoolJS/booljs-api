/**
 * @function API.Component.App~namespaceGenerator
 * @description Loads a skeleton for application.
 * @param {String} namespace - A well-defined namespace.
 * @param {?Object} skel - Sets the skeleton sub-component for recursivity
 * load.
 * @param {Function} final - A reference for the final object to be inserted
 * into the last part of the skeleton, and ensure its recreation
 * @return {Object} A namespace skeleton.
 * @throws {Error} In case namespace is not according to standard naming
 * conventions.
 */
var namespaceGenerator = exports.generator = function(namespace, skel, final){

    var skeleton = {};
    skel = skel || {}; //Empty object for initial call

    var ns = namespace.split('.');

    if(ns.length > 0 && ns[0] != ''){
        skeleton[ns[0]] = namespaceGenerator(
            ns.slice(1).join("."), {}, final
        );
        return skeleton;
    } else {
        return final();
    }

};

/**
 * @function API.Component.App~namespaceChecker
 * @description Checks the naming conventions of the namespace
 * (http://stackoverflow.com/questions/5975257/regular-expression-to-match-valid-namespace-name)
 * @param {String} namespace - A string containing the namespace to check its
 * integrity.
 * @returns {Boolean} A boolean value stating true if the namespace is valid,
 * and false otherwise.
 */
var namespaceChecker = exports.checker = function(namespace){
    return /^(@?[a-z_A-Z]\w+(?:\.?[a-z_A-Z]\w+)*)$/.test(namespace);
};
