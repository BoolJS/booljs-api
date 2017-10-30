'use strict';

/**
 * @class Error
 * @memberof API
 * @description Creates a Bool.js custom Error
 * @param {Number} [status=500] - Status code for HTTP response.
 * @param {String} code - The error code.
 * @param {String} message - General description of error.
 * @param {String} uri - URI to get more information about error.
 * @return {API.Error} An {@link API.Error} instance.
 */
module.exports = class BoolError extends Error {
    constructor (status, code, message, uri) {
        super();
        // Executed in case first argument is `code`.
        if (!(typeof status === 'number' && (status % 1) === 0)) {
            status = 500;
            code = status || 'server_error';
            message = code || null;
            uri = message || null;
        } else {
            status = status || 500;
            code = code || 'server_error';
            message = message || null;
            uri = uri || null;
        }

        /**
         * @value name
         * @description Name of error
         * @memberof API.Error
         * @type {String}
         */
        this.name = code;
        /**
         * @value status
         * @description Status Code for HTTP response.
         * @memberof API.Error
         * @type {Number}
         * @default 500
         */
        this.status = status;
        /**
         * @value code
         * @description The error code.
         * @memberof API.Error
         * @type {String}
         */
        this.code = code;
        /**
         * @value message
         * @description General description of error.
         * @memberof API.Error
         * @type {String}
         */
        this.message = message;
        /**
         * @value uri
         * @description URI to get more information about error
         * @memberof API.Error
         * @type {String}
         */
        this.uri = uri;

        this.stack = (new Error()).stack;
    }
};
