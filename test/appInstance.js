'use strict';

var API = require('..');

describe('App Instance', function(){

    var instance        = API.App.getInstance('com.boolinc.api')
    ,   configuration   = instance.getComponents().configuration
    ,   utilities       = instance.getComponents().utilities;

    it('Should add a component in the root of application', function(done){

        instance.insertComponent('controllers', {});
        expect(instance.getSkeleton()).to.eql({
            com: {
                boolinc: {
                    api: {
                        configuration: configuration,
                        controllers: { },
                        utilities: utilities
                    }
                }
            }
        });
        done();

    });

    it('Should add a component in the controllers namespace', function(done){

        instance.insertComponent(
            'HomeController', {}, instance.getComponents().controllers
        );

        expect(instance.getSkeleton()).to.eql({
            com: {
                boolinc: {
                    api: {
                        configuration: configuration,
                        controllers: {
                            HomeController: { }
                        },
                        utilities: utilities
                    }
                }
            }
        });
        done();

    });

    var MathController = function(){

        return {
            add: function(a, b){
                return a + b;
            }
        };

    };

    var ViewController = function(){

        return {
            hello: function(name){
                return "Hello " + name;
            }
        };

    };

    it('Should add complex objects into controllers namespace', function(done){

        instance.insertComponent(
            'MathController', MathController,
            instance.getComponents().controllers
        );

        expect(instance.getSkeleton()).to.eql({
            com: {
                boolinc: {
                    api: {
                        configuration: configuration,
                        controllers: {
                            HomeController: { },
                            MathController: MathController
                        },
                        utilities: utilities
                    }
                }
            }
        });
        done();

    });

    it('Should add complex objects into controllers namespace', function(done){

        instance.insertComponent(
            'ViewController', ViewController,
            instance.getComponents().controllers.HomeController
        );

        expect(instance.getSkeleton()).to.eql({
            com: {
                boolinc: {
                    api: {
                        configuration: configuration,
                        controllers: {
                            HomeController: {
                                ViewController: ViewController
                            },
                            MathController: MathController
                        },
                        utilities: utilities
                    }
                }
            }
        });
        done();

    });

    it('Inject the namespace and execute a controller', function(done){

        var com = instance.getSkeleton().com, MathController;

        MathController = new com.boolinc.api.controllers.MathController();

        expect(MathController.add(2, 2)).to.eql(4);
        done();

    });

    it('Removes a component from the controllers namespace', function(done){

        instance.removeComponent(
            'MathController', instance.getComponents().controllers
        );

        expect(instance.getSkeleton()).to.eql({
            com: {
                boolinc: {
                    api: {
                        configuration: configuration,
                        controllers: {
                            HomeController: {
                                ViewController: ViewController
                            }
                        },
                        utilities: utilities
                    }
                }
            }
        });
        done();

    });

});
