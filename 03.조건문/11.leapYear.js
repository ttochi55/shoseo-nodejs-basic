const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.setPrompt('년도 입력> ');
rl.prompt();

rl.on('line', function (buf) {
  // 입력을 받아서 처리하는 로직
  let year = parseInt(buf);

  if (year >= 1 && year < 4000) {
    if (year % 400 === 0) {
      console.log('윤년이 맞습니다.');
    } else if (year % 100 === 0) {
      console.log('윤년이 아닙니다.');
    } else if (year % 4 === ) {
      console.log('윤년이 맞습니다.');
    }
  } else {
    console.log('연도는 1보다 크거나 같고, 4000보다 작거나 같은 자연수만 입력할 수 있습니다.');
  }

  // 끝날 떄 반드시 처리해야 함
  rl.close();
});