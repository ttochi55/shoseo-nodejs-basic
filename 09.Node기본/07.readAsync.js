// 비동기적으로 파일 읽기
// 비동기적이란 파일을 비순차적으로 읽어 들인다.

const fs = require('fs');
let buffer = fs.readFile('tmp/textfile.txt', 'utf8', (error, buffer) => {
  console.log(buffer);
});
