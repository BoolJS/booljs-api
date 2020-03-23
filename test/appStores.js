'use strict';

const { App } = require('..');
const expect  = require('chai').expect;

describe('App Stores', () => {
    const instance = App.getInstance('com.boolinc.api');
    const Configuration = instance.getComponents().configuration;
    const Utilities = instance.getComponents().utilities;

    describe('Non-code stores', () => {
        it('inserts an object into the store', () => {
            Configuration.set('db', {
                host: 'db.boolinc.co',
                port: 3306,
                database: 'myDatabase'
            });

            expect(Configuration.get('db')).to.eql({
                host: 'db.boolinc.co',
                port: 3306,
                database: 'myDatabase'
            });
        });

        it('fails at inserting a function into the store', () => {
            expect(() => Configuration.set('dbFunction', function () {
                return {
                    host: 'db.boolinc.co',
                    port: 3306,
                    database: 'myDatabase'
                };
            })).to.throw(Error, 'Configuration can\'t store executable code');
        });

        it('Fails at rewriting an object into the store', () => {
            expect(() => Configuration.set('db', {
                host: 'db.boolinc.co',
                port: 3306,
                database: 'myDatabase'
            })).to.throw(TypeError, 'Cannot redefine property: db');
        });

        it('Freezes the configuration store', () => Configuration.freeze());

        it('Fails inserting objects in a frozen store', () => {
            expect(() => Configuration.set('newdb', {
                host: 'db.boolinc.co',
                port: 3306,
                database: 'myDatabase'
            })).to.throw(TypeError,
                'Cannot define property newdb, object is not extensible'
            );
        });
    });

    describe('Code stores', () => {
        it('disallow inserting a function into the store', async () => {
            expect(() => Utilities.set('dbFunction', function () {
                return {
                    host: 'db.boolinc.co',
                    port: 3306,
                    database: 'myDatabase'
                };
            })).to.throw();
        });
    });
});
