const http = require('http');
const url = require('url');
const qs = require('querystring');
const fs = require('fs');
const view = require('./view/index');
const template = require('./view/template');

http
  .createServer((req, res) => {
    let pathname = url.parse(req.url).pathname;
    let query = url.parse(req.url, true).query;
    console.log(pathname, query.id);
    switch (pathname) {
      case '/':
        if (query.id === undefined) {
          fs.readdir('data', (error, filelist) => {
            let list = template.listGen(filelist);
            let content = template.HOME_CONTENTS;
            let control = template.buttonGen();
            let html = view.index('Web 기술', list, content, control);
            res.end(html);
          });
        } else {
          fs.readdir('data', (error, filelist) => {
            let list = template.listGen(filelist);
            let title = query.id;
            let control = template.buttonGen(title);
            let filename = 'data/' + title + '.txt';
            fs.readFile(filename, 'utf8', (error, buffer) => {
              let html = view.index(title, list, buffer, control);
              res.end(html);
            });
          });
        }
        break;
      case '/create':
        fs.readdir('data', (error, filelist) => {
          let list = template.listGen(filelist);
          let content = template.createForm();
          let control = template.buttonGen();
          let html = view.index('글 생성', list, content, control);
          res.end(html);
        });
        break;
      case '/create_proc':
        let body = '';
        req.on('data', (data) => {
          body += data;
        });
        req.on('end', () => {
          let param = qs.parse(body);
          //console.log(param.subject, param.description);
          let filepath = 'data/' + param.subject + '.txt';
          fs.writeFile(filepath, param.description, (error) => {
            res.writeHead(302, { Location: `/?id=${param.subject}` });
            res.end();
          });
        });
        break;
      default:
        res.writeHead(404);
        res.end();
    }
  })
  .listen(3000, () => {
    console.log('Server running at http://localhost:3000');
  });
