const Lab = require('lab');
const lab = exports.lab = Lab.script();
const assert = require('assert');
const server = require('../index');

lab.experiment('GET /', () => {
  lab.test('should return "Hello World from Hapi"', async () => {
    let res = await server.inject({ url: '/',method: 'GET' });
    assert.equal(res.statusCode, 200);
    assert.equal(res.result, 'Hello World from Hapi');

  })
})