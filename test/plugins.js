/* global describe, it */ /* jshint -W030 */
'use strict';

var API     = require('..')
,   expect  = require('chai').expect;

describe('Plugins', () => {

    describe('Middleware', () => {
        it('fails to register new middleware: not fully implemented', () => {
            class DummyMiddleware extends API.Middleware {
                constructor(){
                    super('middleware1');
                }
            }
            return new Promise(function () {
                return new DummyMiddleware();
            }).then(
                () => new Error('Plugin registration should fail.')
            ).catch(() => {});
        });

        it('successfully registers a new middleware', () => {
            class TestMiddleware extends API.Middleware {
                constructor(){
                    super('middleware1');
                }

                action(req, res, next){
                    next();
                }
            }
            new TestMiddleware();
        });
    });

    describe('Route middleware', () => {
        it('registers a valid route middleware', () => {
            class TestRouteMiddleware extends API.RouteMiddleware {
                constructor() {
                    super('route-middleware', 'mandatory', {
                        always: true
                    });
                }

                action(req, res, next) {
                    next();
                }
            }
            new TestRouteMiddleware();
        });

        it('fails integrity check on invalid type', () => {
            class TestInvalidRouteMiddleware extends API.RouteMiddleware {
                constructor(){
                    super('invalid-middleware', 'invalid', {
                        always: true
                    });
                }
                action(req, res, next) {
                    next();
                }
            }

            return new Promise(function () {
                return new TestInvalidRouteMiddleware();
            }).then(
                () => new Error('Plugin registration should fail.')
            ).catch(() => {});
        });

    });

    describe('Store', () => {

        it('gets a list of middleware plugins', () => {
            expect(API.Plugins.list(API.RouteMiddleware)).to.have.length(2);
            expect(API.Plugins.list(API.Middleware)).to.have.length(2);
        });

        it('looks for an specific middleware', () => {
            expect(API.Plugins.get('example-middleware')).to.exist;
        });
    });

});
