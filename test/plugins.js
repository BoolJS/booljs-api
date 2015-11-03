/* global describe, before, it */ /* jshint -W030 */
'use strict';

var API         = require('..')
,   expect      = require('expect.js')
,   BoolError   = API.Error;

describe('Plugins', () => {

    describe('Middleware', () => {

        it('creates a middleware and registers it', () => {
            new API.Middleware('middleware1');
        });

        it('fails integrity check for a new Middleware plugin', () => {
            var middleware = new API.Middleware('middeware2');
            try {
                middleware.checkIntegrity();
            } catch(err){}
        });
    });

    describe('Route middleware', () => {
        var store = API.Plugins.getInstance();

        it('checks components are valid', () => {
            new API.RouteMiddleware('mand_middleware', {
                type: 'mandatory',
                policies: {
                    always: true
                },
                action: function (req, res, next) {
                    next();
                }
            });

            store.get('mand_middleware', API.RouteMiddleware)
                .checkIntegrity();
        });

        it('fails integrity check on invalid type', () => {
            new API.RouteMiddleware('omit_middleware', {
                type: 'invalid',
                policies: {
                    always: true
                },
                action: function (req, res, next) {
                    next();
                }
            });

            try {
                store.get('omit_middleware', API.RouteMiddleware)
                    .checkIntegrity();
            } catch(err){}
        });

    });

    describe('Store', () => {
        var store = API.Plugins.getInstance();

        it('gets a list of middleware plugins', () => {
            expect(store.list(API.Middleware)).to.have.length(3);
            expect(store.list(API.RouteMiddleware)).to.have.length(2);
        });

        it('looks for an specific middleware', () => {
            expect(store.get('middleware1', API.Middleware)).to.be.ok;
        });
    });

});
