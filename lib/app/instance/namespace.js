'use strict';

/**
 * @function API.AppInstance~namespaceGenerator
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
exports.generator = function namespaceGenerator (namespace, final) {
    const packages = namespace.split('.');

    let current = { [packages.pop()]: final() };

    while (packages.length > 1) {
        current = { [packages.pop()]: current };
    }

    return { [packages.pop()]: current };
};

/**
 * @function API.AppInstance~namespaceChecker
 * @description Checks the [naming conventions]{@link http://bit.ly/1AVNV11}
 * of the namespace.
 * @param {String} namespace - A string containing the namespace to check its
 * integrity.
 * @returns {Boolean} A boolean value stating true if the namespace is valid,
 * and false otherwise.
 */
exports.checker = function namespaceChecker (namespace) {
    return /^(@?[a-z_A-Z]\w+(?:\.?[a-z_A-Z]\w+)*)$/.test(namespace);
};
