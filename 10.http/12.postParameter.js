const http = require('http');
const url = require('url');
const qs = require('querystring');
const fs = require('fs');
const myCache = require('./my/cache');

myCache.clear();

// pathname
// http
//   .createServer((req, res) => {
// 		let pathname = url.parse(req.url).pathname;
//     if (pathname === '/') {
//       fs.readFile('view/12.form.html', 'utf8', (error, html) => {
//         res.end(html);
//       });
//     } else if (pathname === '/proc') {
//       req.on('data', (param) => {
//         console.log(param);
//         res.end(`<h1>${param}</h1>`);
//       });
//     }
//   })
//   .listen(3000, () => {
//     console.log('Server is running at http://localhost:3000');
//   });

// method-1
// http
//   .createServer((req, res) => {
//     let method = req.method;
//     if (method === 'GET') {
//       fs.readFile('view/12.form.html', 'utf8', (error, html) => {
//         res.end(html);
//       });
//     } else if (method === 'POST') {
//       req.on('data', (param) => {
//         console.log(param);
//         console.log(qs);
//         res.end(`<h1>${param}</h1>`);
//       });
//     }
//   })
//   .listen(3000, () => {
//     console.log('Server is running at http://localhost:3000');
//   });

// method-2
http
  .createServer((req, res) => {
    let method = req.method;
    if (method === 'GET') {
      fs.readFile('view/12.form.html', 'utf8', (error, html) => {
        res.end(html);
      });
    } else if (method === 'POST') {
      let body = '';
      req.on('data', (data) => {
        body += data;
      });
      req.on('end', () => {
        let param = qs.parse(body);
        console.log(param);
        console.log(param.uid, param.pwd);
        res.end(`<h1>${JSON.stringify(param)}</h1>`);
      });
    }
  })
  .listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
  });
