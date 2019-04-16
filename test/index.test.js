const { expect } = require('chai');
const plugin = require('../lib');

describe('@morphatic/feathers-auth0-management-api-service', () => {
  it('basic functionality', () => {
    expect(typeof plugin).to.equal('function', 'It worked');
    expect(plugin()).to.equal('@morphatic/feathers-auth0-management-api-service');
  });
});
