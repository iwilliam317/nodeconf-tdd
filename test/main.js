const Lab = require('lab');
const lab = exports.lab = Lab.script();
const assert = require('assert');
const server = require('../index');

lab.experiment('GET /', () => {
  lab.test('should return "Hello World from Hapi"', () => {
    server.inject({
      url: '/',
      method: 'GET'
    })
      .then((res) => {
        assert.equal(res.statusCode, 200);
        assert.equal(res.result, 'Hello World from Hapi');
      })      
  })
})