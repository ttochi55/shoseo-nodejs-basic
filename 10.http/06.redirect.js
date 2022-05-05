const http = require('http');

let server = http.createServer((request, response) => {
  response.writeHead(
    302, // Redirection Found
    {
      'Content-Type': 'text/html',
      Location: 'http://www.hanbit.com',
    }
  );
  response.end('my first server');
});

server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
