const http = require('http');
const fs = require('fs');

let server = http.createServer((req, res) => {
  fs.readFile('media/EmbraceableYou.mp3', (error, audio) => {
    res.writeHead(200, { 'Content-Type': 'audio/mp3' });
    res.end(audio);
  });
});

server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
