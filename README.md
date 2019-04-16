# @morphatic/feathers-auth0-management-api-service

[![Build Status](https://travis-ci.org/morphatic/feathers-auth0-management-api-service.png?branch=master)](https://travis-ci.org/morphatic/feathers-auth0-management-api-service)
[![Code Climate](https://codeclimate.com/github/morphatic/feathers-auth0-management-api-service/badges/gpa.svg)](https://codeclimate.com/github/morphatic/feathers-auth0-management-api-service)
[![Test Coverage](https://codeclimate.com/github/morphatic/feathers-auth0-management-api-service/badges/coverage.svg)](https://codeclimate.com/github/morphatic/feathers-auth0-management-api-service/coverage)
[![Dependency Status](https://img.shields.io/david/morphatic/feathers-auth0-management-api-service.svg?style=flat-square)](https://david-dm.org/morphatic/feathers-auth0-management-api-service)
[![Download Status](https://img.shields.io/npm/dm/@morphatic/feathers-auth0-management-api-service.svg?style=flat-square)](https://www.npmjs.com/package/@morphatic/feathers-auth0-management-api-service)

> A FeathersJS service for interacting with the Auth0 Management API.

## Installation

```
npm install @morphatic/feathers-auth0-management-api-service --save
```

## Documentation

TBD

## Complete Example

Here's an example of a Feathers server that uses `@morphatic/feathers-auth0-management-api-service`. 

```js
const feathers = require('@feathersjs/feathers');
const plugin = require('@morphatic/feathers-auth0-management-api-service');

// Initialize the application
const app = feathers();

// Initialize the plugin
app.configure(plugin());
```

## License

Copyright (c) 2018

Licensed under the [MIT license](LICENSE).
