// 동기적으로 파일 읽기
// 동기적이란 파일을 순차적으로 읽어 들인다.

const fs = require('fs');
let buffer = fs.readFileSync('tmp/textfile.txt');
console.log(buffer);
console.log(buffer.toString());

// Text data 읽기
let text = fs.readFileSync('tmp/textfile.txt', 'utf8');
console.log(text);
