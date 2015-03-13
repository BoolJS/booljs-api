'use strict';

var API = require('..')
,   expect = require('expect.js');

describe('App', function(){

    it(
        "App namespace generator must check correctly bad namespaces and " +
        "generate a skeleton for good ones", function(done){

            var App = API.App;

            var badNamespaceApp, secondBadNamespace, thirdBadNamespace;
            var anApp, aSecondApp, aThirdApp;

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

            anApp = App.getInstance("com.boolinc.dogapi");
            var configuration   = anApp.getComponents().configuration
            ,   utilities       = anApp.getComponents().utilities;

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

            aSecondApp = App.getInstance("com.bool_inc.dogapi");
            var configuration   = aSecondApp.getComponents().configuration
            ,   utilities       = aSecondApp.getComponents().utilities;

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

            aThirdApp = App.getInstance("com.bool_inc.dog2api");
            var configuration   = aThirdApp.getComponents().configuration
            ,   utilities       = aThirdApp.getComponents().utilities;

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

            done();

        }
    );

    it("Applications created can be listed", function(done){

        expect(API.App.listInstances()).to.eql([
            "com.boolinc.api",
            "com.boolinc.dogapi",
            "com.bool_inc.dogapi",
            "com.bool_inc.dog2api"
        ]);

        done();

    });

    it("Applications created in pool can be removed", function(done){

        var App = API.App;

        App.removeInstance("com.boolinc.dogapi");
        App.removeInstance("com.bool_inc.dogapi");
        App.removeInstance("com.bool_inc.dog2api");

        done();

    });

});
