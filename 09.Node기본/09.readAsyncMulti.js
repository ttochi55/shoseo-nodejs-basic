// 여러개 파일 비동기적으로 읽기

const fs = require('fs');

fs.readFile('tmp/a.txt', 'utf8', (e, bufA) => console.log(bufA));
fs.readFile('tmp/b.txt', 'utf8', (e, bufB) => console.log(bufB));
fs.readFile('tmp/c.txt', 'utf8', (e, bufC) => console.log(bufC));

// 순서보장 방법
fs.readFile('tmp/a.txt', 'utf8', (e, bufA) => {
  fs.readFile('tmp/b.txt', 'utf8', (e, bufB) => {
    fs.readFile('tmp/c.txt', 'utf8', (e, bufC) => {
      console.log(bufA);
      console.log(bufB);
      console.log(bufC);
    });
  });
});
// 콜백지옥
