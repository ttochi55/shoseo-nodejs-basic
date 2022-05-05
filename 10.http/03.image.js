const http = require('http');
const fs = require('fs');

let server = http.createServer((req, res) => {
  fs.readFile('media/Elvis.png', (error, image) => {
    res.writeHead(200, { 'Content-Type': 'image/png' });
    res.end(image);
  });
});

server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
