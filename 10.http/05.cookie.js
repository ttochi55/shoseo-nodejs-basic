const http = require('http');
const fs = require('fs');

let server = http.createServer((request, response) => {
  let cookie = request.headers.cookie;
  response.writeHead(200, {
    'Content-Type': 'text/html',
    'Set-Cookie': ['breakfast = toast', 'dinner = chicken'],
  });
  response.end(`<h1>${cookie}</h1>`);
});

server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
