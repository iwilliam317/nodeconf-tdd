const Lab = require('lab');
const lab = exports.lab = Lab.script();
const assert = require('assert');
const server = require('../index');

lab.experiment('GET /', () => {
  lab.test('should return "Hello World from Hapi"', async () => {
    let res = await server.inject({ url: '/',method: 'GET' });
    assert.equal(res.statusCode, 200);
    assert.equal(res.result, 'Hello World from Hapi');

  });
});

lab.experiment('POST /', () => {
  lab.test('should create a user', async () => {
    let res = await server.inject({ url: '/user', method: 'POST', payload: { 'name': 'William' } });
    assert.equal(res.statusCode, 200);
  });
});