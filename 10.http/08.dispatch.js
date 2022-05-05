const http = require('http');
const url = require('url');
const fs = require('fs');
const view = require('./view/01.first');

let server = http.createServer((req, res) => {
  let pathname = url.parse(req.url).pathname;

  // if 구문
  if (pathname === '/') {
    let html = view.first();
    res.end(html);
  } else if (pathname === '/image') {
    fs.readFile('media/Elvis.png', (error, image) => {
      res.writeHead(200, { 'Content-Type': 'image/png' });
      res.end(image);
    });
  } else if (pathname === '/audio') {
    fs.readFile('media/EmbraceableYou.mp3', (error, audio) => {
      res.writeHead(200, { 'Content-Type': 'audio/mp3' });
      res.end(audio);
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 Error</h1>');
  }
});

server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
