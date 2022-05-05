const http = require('http');
const view = require('./view/01.first');

let server = http.createServer((request, response) => {
  // console.log(response);
  let html = view.first();
  response.writeHead(
    200, // Status code, OK
    { 'Content-Type': 'text/html' }
  );
  response.end(html);
  // response.end('First Server');
});

server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
