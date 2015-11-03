/* global describe, it */
'use strict';

var API     = require('..')
,   expect  = require('expect.js')
,   resolve = require('../lib/utilities/resolve');

describe('App', function(){
    var App = API.App;

    describe('Namespaces', () => {

        it('fail on bad forms', (done) => {
                var badNamespaceApp, secondBadNamespace, thirdBadNamespace;

                try {
                    badNamespaceApp = App.getInstance("my.bad-namespace.1app");
                    done(new Error("The namespace checker is failing"));
                } catch(x){}

                try {
                    secondBadNamespace = App.getInstance("my.bad_namespace.1app");
                    done(new Error("The namespace checker is failing"));
                } catch(x){}

                try {
                    thirdBadNamespace = App.getInstance("my.:bad_namespace.app2");
                    done(new Error("The namespace checker is failing"));
                } catch(x){}

                done();
            }
        );

        it('create skeletons for good forms', () => {
            var anApp, aSecondApp, aThirdApp, configuration, utilities;

            anApp           = App.getInstance("com.boolinc.dogapi");
            configuration   = anApp.getComponents().configuration;
            utilities       = anApp.getComponents().utilities;

            expect(anApp.getSkeleton()).to.eql({
                com: {
                    boolinc: {
                        dogapi: {
                            configuration: configuration,
                            utilities: utilities
                        }
                    }
                }
            });

            aSecondApp      = App.getInstance("com.bool_inc.dogapi");
            configuration   = aSecondApp.getComponents().configuration;
            utilities       = aSecondApp.getComponents().utilities;

            expect(aSecondApp.getSkeleton()).to.eql({
                com: {
                    bool_inc: {
                        dogapi: {
                            configuration: configuration,
                            utilities: utilities
                        }
                    }
                }
            });

            aThirdApp       = App.getInstance("com.bool_inc.dog2api");
            configuration   = aThirdApp.getComponents().configuration;
            utilities       = aThirdApp.getComponents().utilities;

            expect(aThirdApp.getSkeleton()).to.eql({
                com: {
                    bool_inc: {
                        dog2api: {
                            configuration: configuration,
                            utilities: utilities
                        }
                    }
                }
            });
        });

    });

    describe('Builder', () => {
        it('creates an application using dependencies', () => {
            App.getInstance('com.bool_inc.dog3api', [
                resolve('example/plugin1.js')
            ]);
        });
    });


    describe('Applications Pool', () => {

        it("applications created can be listed", () => {
            expect(App.listInstances()).to.eql([
                "com.boolinc.api",
                "com.boolinc.dogapi",
                "com.bool_inc.dogapi",
                "com.bool_inc.dog2api",
                "com.bool_inc.dog3api"
            ]);
        });

        it("applications created in pool can be removed", () => {

            App.removeInstance("com.boolinc.dogapi");
            App.removeInstance("com.bool_inc.dogapi");
            App.removeInstance("com.bool_inc.dog2api");
        });
    });

});
