const handler = require('serve-handler');
const http = require('http');
import config from '../constant/config'

const { STATICPORT } = config
const server = http.createServer((request: Request, response: Response) => {
  return handler(request, response);
})

server.listen(STATICPORT, () => {
  console.log(`Running at http://localhost:${STATICPORT}`);
});