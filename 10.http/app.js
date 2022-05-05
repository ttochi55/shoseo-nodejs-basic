const http = require('http');
const url = require('url');
const qs = require('querystring');
const fs = require('fs');
const view = require('./view/index');

http
  .createServer((req, res) => {
    let pathname = url.parse(req.url).pathname;
    switch (pathname) {
      case '/':
        fs.readdir(__dirname + '/data/', (err, files) => {
          let list = '';
          for (let file of files) {
            let filename = file.split('.').slice(0, -1).join('');
            list += `<li><a href="/?id=${filename}">${filename}</a></li>`;
          }
          let html = view.index(list);
          res.end(html);
        });
        break;
      default:
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('404 Page Not Found');
        break;
    }
  })
  .listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
  });
