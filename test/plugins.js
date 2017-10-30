'use strict';

const { Error, Plugins, Middleware, RouteMiddleware } = require('..');
const expect = require('chai').expect;

describe('Plugins', () => {
    describe('Middleware', () => {
        it('fails to register new middleware: not fully implemented', () => {
            class DummyMiddleware extends Middleware {
                constructor () { super('middleware1'); }
            }

            expect(
                () => new DummyMiddleware()
            ).to.throw(Error).and.have.property('code', 'EINTEGRITYFAILED');
        });

        it('successfully registers a new middleware', () => {
            class TestMiddleware extends Middleware {
                constructor () { super('middleware1'); }

                action (req, res, next) {
                    next();
                }
            }

            return expect(new TestMiddleware()).to.be.ok;
        });
    });

    describe('Route middleware', () => {
        it('registers a valid route middleware', () => {
            class TestRouteMiddleware extends RouteMiddleware {
                constructor () {
                    super('route-middleware', 'mandatory', {
                        always: true
                    });
                }

                action (req, res, next) {
                    next();
                }
            }

            return expect(new TestRouteMiddleware()).to.be.ok;
        });

        it('fails integrity check on invalid type', () => {
            class TestInvalidRouteMiddleware extends RouteMiddleware {
                constructor () {
                    super('invalid-middleware', 'invalid', {
                        always: true
                    });
                }
                action (req, res, next) {
                    next();
                }
            }

            expect(
                () => new TestInvalidRouteMiddleware()
            ).to.throw(Error).and.have.property('code', 'E_MISSINGTYPE');
        });
    });

    describe('Store', () => {
        it('gets a list of middleware plugins', () => {
            expect(Plugins.list(RouteMiddleware)).to.have.length(2);
            expect(Plugins.list(Middleware)).to.have.length(3);
        });

        it('looks for an specific middleware', () => {
            return expect(Plugins.get('example-middleware')).to.exist;
        });
    });
});
