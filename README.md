# Bool.js API Core

[![Build Status](https://travis-ci.org/BoolJS/booljs-api.svg?branch=master)](https://travis-ci.org/BoolJS/booljs-api) [![Dependencies status for bool.js](https://david-dm.org/booljs/booljs-api.svg)](https://david-dm.org/booljs/booljs-api) [![devDependency Status](https://david-dm.org/booljs/booljs-api/dev-status.svg)](https://david-dm.org/booljs/booljs-api#info=devDependencies) [![Code Climate](https://codeclimate.com/github/BoolJS/booljs-api/badges/gpa.svg)](https://codeclimate.com/github/BoolJS/booljs-api) [![Inline docs](http://inch-ci.org/github/booljs/booljs-api.svg?branch=master)](http://inch-ci.org/github/booljs/booljs-api)

[![Bool.js NPM icon](https://nodei.co/npm/booljs-api.png)](https://npmjs.com/packages/booljs-api)

[![Join the chat at https://gitter.im/BoolJS/booljs](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/BoolJS/booljs-api?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## FAQ

### What is bool.js?
Bool.js is an MVC Framework. But is not just any other framework; it gives us back the power to choose how to organize a well-designed project, so we can choose our dependencies, craft our architecture, choose our data connectors, and finally, work based on cool development structures without hesitating about learning the framework as is.

Bool.js also reminds the importance of having a cool workspace structure. That's why it's based on namespaces, leading us to focus on our code rather than focusing on managing complicated references to other files in our project.

### Can I migrate my projects to bool.js?
Of course you can. Bool.js is Free Software (not as in a *free* beer, but in *free* as a bird). Just remember to update all of your dependencies, arrange your code in the right project structure (we're very tight at that) and finally, use Node `0.12`, iojs and further versions.

### What is Bool.js API Core?

API Core is a Bool.js module designed for implementing the API of framework bootstraping.

## Components and Bootstraping Process

Definition and order of components to be loaded into the process of bool.js bootstraping.

| Component    | 0    | 1      | 2       | 3          |
| ------------ | ---- | ------ | ------- | ---------- |
| Core         | API  |        |         |            |
| Loader       | `->` | Config |         |            |
|              | `->` | DBConn |         |            |
| Code         |      | `->`   | Models  |            |
|              |      | `->`   | B.Logic |            |
|              |      | `->`   | Ctrls   |            |
|              |      | `->`   | Routes  |            |
|              |      | `->`   | Views   |            |
| Config       |      |        | `->`    | Middleware |
| Listen       |      |        | `->`    | Mountpoint |


### App
In charge of loading the namespace schema, and serving as a point for global access to the applications pool.
