// 비동기적으로 파일 쓰기

const fs = require('fs');

let buffer = `비동기적으로 파일 쓰기
비동기적으로 파일 쓰기
`;
fs.writeFile('tmp/sync.txt', buffer, (error) => {
  if (error) {
    console.log(error);
  }
});

// 기존 파일에 데이터를 추가하는 경우
buffer = '추가 데이터입니다.\n';
fs.writeFile('tmp/sync.txt', buffer, { flag: 'a' }, (error) => {
  if (error) {
    console.log(error);
  }
});
