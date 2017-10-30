/**
 *
 * Bool MVC Framework - API Core
 * Copyright (C) 2015 Bool Inc
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

'use strict';

console.log([
    '\n\t\tDEPRECATION NOTE\n',
    'booljs is soon deprecating (in v0.6.0) the module booljs.globals that',
    'globally exposes the Q library (no longer used here), as well as',
    'underscore and the variables PATH and log (which are being included',
    'inside the API itself).'
].join(' '));
require('booljs.globals');

const injector = require('object-injector');

/**
 * @namespace API
 * @description The classes from Bool MVC Framework API
 */
const API = {
    App: require('./app'),
    Error: require('./error'),
    Plugins: require('./plugins').getInstance()
};

injector(API, require('./plugins/list'));

module.exports = API;
