'use strict';

const { App } = require('..');
const expect  = require('chai').expect;

describe('App Instance', () => {
    let instance = App.getInstance('com.boolinc.api');
    let configuration = instance.getComponents().configuration;
    let utilities = instance.getComponents().utilities;

    describe('Component Manager', () => {
        it('adds a component in the root of application', () => {
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
        });

        it('adds a component in the controllers namespace', () => {
            instance.insertComponent(
                'HomeController', {}, instance.getComponents().controllers
            );

            expect(instance.getSkeleton()).to.eql({
                com: {
                    boolinc: {
                        api: {
                            configuration: configuration,
                            controllers: { HomeController: { } },
                            utilities: utilities
                        }
                    }
                }
            });
        });
    });

    describe('Controllers', () => {
        var MathController = function () {
            this.add = (a, b) => { return a + b; };
        };

        var ViewController = function () {
            this.hello = (name) => { return `Hello ${name}`; };
        };

        it('adds a controller', () => {
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
        });

        it('finds a controller, using it', () => {
            const api = instance.getSkeleton().com.boolinc.api;

            const MathController = new api.controllers.MathController();
            expect(MathController.add(2, 2)).to.eql(4);
        });

        it('removes a controller', () => {
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
        });
    });
});
