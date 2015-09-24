'use strict';

/**
 * @private
 * @description Path resolver
 * @param {String} _path - Relative path to package's route
 * @return {String} Absolute path
 */
module.exports = function (_path) {
    var path = require('path');
    return path.join(require.resolve('../..'), '../..', _path);
};
