<p align="center"><img src="https://cdn.rawgit.com/BoolJS/booljs/master/logo.svg" width="50%"></p>

<p align="center">
    <a href="https://travis-ci.org/BoolJS/booljs-api"><img src="https://img.shields.io/travis/BoolJS/booljs-api.svg?style=flat-square" alt="Build Status"></a>
    <a href="LICENSE.md"><img src="https://img.shields.io/badge/License-GPL%20v3-green.svg?style=flat-square" alt="License"></a>
    <a href="https://github.com/BoolJS/booljs-api/releases"><img src="http://github-release-version.herokuapp.com/github/BoolJS/booljs-api/release.svg?style=flat-square" alt="Latest Stable Version"></a>
    <a href="https://david-dm.org/booljs/booljs-api"><img src="https://img.shields.io/david/BoolJS/booljs-api.svg?style=flat-square" alt="Dependency status"></a>
    <a href="https://david-dm.org/booljs/booljs-api?type=dev"><img src="https://img.shields.io/david/dev/BoolJS/booljs-api.svg?style=flat-square" alt="devDependency status"></a>
    <a href="https://david-dm.org/booljs/booljs-api?type=peer"><img src="https://img.shields.io/david/peer/BoolJS/booljs-api.svg?style=flat-square" alt="peerDependency status"></a>
    <a href="https://codeclimate.com/github/BoolJS/booljs-api"><img src="https://img.shields.io/codeclimate/github/BoolJS/booljs-api.svg?style=flat-square" alt="Code Climate"></a>
    <a href="https://codecov.io/gh/BoolJS/booljs-api"><img src="https://img.shields.io/codecov/c/github/BoolJS/booljs-api.svg?style=flat-square" alt="Code Coverage"></a>
    <a href="http://inch-ci.org/github/booljs/booljs-api"><img src="http://inch-ci.org/github/booljs/booljs-api.svg?branch=master" alt="Inline docs"></a>
</p>

<p align="center">
    <a href="https://npmjs.com/packages/@booljs/api"><img src="https://nodei.co/npm/@booljs/api.png" alt="@booljs/api NPM icon"></a>
</p>

# BoolJS API

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
