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
var BoolError = module.exports = function(status, code, message, uri){

    Error.apply(this, arguments);

    // Executed in case first argument is `code`.
    if(!(typeof status === 'number' && (status % 1) === 0)) {
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

    Error.call(this);
    Error.captureStackTrace(this, arguments.callee);

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

};

/** Inherit from Node.js `Error`. */
BoolError.prototype.__proto__ = Error.prototype;
