// 사용자가 입력한 글을 받는 방법
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.setPrompt('정수 입력> ');
rl.prompt();

// 3, 4, 8, 9
rl.on('line', function (buf) {
  // 입력을 받아서 처리하는 로직
  let bufArray = buf.split(',');

  console.log(bufArray);

  for (let item of bufArray) {
    let input = parseInt(item);
    if (input % 3 === 0) {
      console.log(`${input} 은/는 3의 배수입니다.`);
    } else {
      console.log(`${input} 은/는 3의 배수가 아닙니다.`);
    }
  }

  // 끝날 떄 반드시 처리해야 함
  rl.close();
});
