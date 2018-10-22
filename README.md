# BoolJS API

<p align="center"><img src="https://cdn.rawgit.com/BoolJS/booljs/master/logo.svg" width="50%"></p>

<p align="center">
    [![Build Status](https://travis-ci.org/BoolJS/booljs-api.svg?branch=master)](https://travis-ci.org/BoolJS/booljs-api) [![Dependencies status for bool.js](https://david-dm.org/booljs/booljs-api.svg)](https://david-dm.org/booljs/booljs-api) [![devDependency Status](https://david-dm.org/booljs/booljs-api/dev-status.svg)](https://david-dm.org/booljs/booljs-api#info=devDependencies) [![Code Climate](https://codeclimate.com/github/BoolJS/booljs-api/badges/gpa.svg)](https://codeclimate.com/github/BoolJS/booljs-api) [![Inline docs](http://inch-ci.org/github/booljs/booljs-api.svg?branch=master)](http://inch-ci.org/github/booljs/booljs-api) [![API Doc](https://doclets.io/BoolJS/booljs-api/master.svg)](https://doclets.io/BoolJS/booljs-api/master)
</p>

<p align="center">
    [![Bool.js NPM icon](https://nodei.co/npm/@booljs/api.png)](https://npmjs.com/packages/@booljs/api)
</p>

BoolJS API is a BoolJS module designed to define the API that is implemented in the framework bootstrapping. Here you can find the available plugins and base classes that make part of an instance.

Here's also located the logic of application instances and stores.

## Install

API Core comes as a dependency of BoolJS, so —in normal circumstances, there should be no need of installing it as a separate dependency.

If you need to install it as a part of a plugin, run the command

```bash
$ npm install @booljs/api@latest --save-peer
```

## Usage

You'll probably need to use API when building a plugin. In that case, you can call the necessary classes requiring `@booljs/api`. For instance:

```javascript
'use strict';

const { RouteMiddleware } = require('@booljs/api');

module.exports class MyMiddleware extends RouteMiddleware {
    // ...
};
```

## Contributing
We're still making -or looking for- a serious contributing document. By now, feel free to contribute the way you usually do in other projects. If this is your first time, follow these steps:

1. Fork us
2. Make your changes
3. Commit by each file change, indicating what you did in that file.
4. Please –¡please!-, don't push until you get the tests completely passing (in this case is just once).
5. Push and make a pull request, describing what you did in general.
6. PR will go through an automated revision in Travis CI. If everything is correct, a peer-revision will start.
