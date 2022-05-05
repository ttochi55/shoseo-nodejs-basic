// 디렉토리에 있는 파일 목록 알아내기

const fs = require('fs');

fs.readdir('tmp', (e, files) => {
  files.map((file) => {
    let filename = `tmp/${file}`;
    let stat = fs.statSync(filename);
    console.log(filename, '\t', stat.size, 'byte');
  });
});

// // 파일 삭제하기
fs.unlink('tmp/tmp.txt', (e) => {
  e && console.log(e);
});

// 파일 이름 변경하기
fs.rename('tmp/sync.txt', 'tmp/tmp.txt', (e) => {
  e && console.log(e);
});
