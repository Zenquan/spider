const handler = require('serve-handler');
const http = require('http');
const { STATICPORT } = require('../constant/config');

const server = http.createServer((request, response) => {
  return handler(request, response);
});

server.listen(STATICPORT, () => {
  console.log(`Running at http://localhost:${STATICPORT}`);
});