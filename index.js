const Hapi = require('hapi');

const server = Hapi.server({
  host: 'localhost',
  port: '3000'
});

server.route({
  method: 'GET',
  path: '/',
  handler: (request, h) => 'Hello World from Hapi'
});

server.route({
  method: 'POST',
  path: '/user',
  handler: (request, h) => 'Hello' })

async function start() {
  try{
    await server.start();
  }
  catch (err) {
    console.log(err);
    process.exit(1);
  }
  console.log('Server running at:', server.info.uri);
}

start();

module.exports = server;