const Lab = require('lab');
const lab = exports.lab = Lab.script();
const assert = require('assert');

lab.experiment('GET /', () => {
  lab.test('should return "Hello World from Hapi"', () => {
    assert(true);
    //done();
  })
})