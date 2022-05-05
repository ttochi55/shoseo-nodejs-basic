const http = require('http');
const url = require('url');
const myCache = require('./my/cache');

myCache.clear();

http
  .createServer((req, res) => {
    let query = url.parse(req.url, true).query;
    console.log(query);
    // GET 파라메터 출력
    res.end(`<h1>${JSON.stringify(query)}</h1>`);
  })
  .listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
  });
