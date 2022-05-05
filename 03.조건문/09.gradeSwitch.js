const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.setPrompt('성적 입력> ');
rl.prompt();

rl.on('line', function (buf) {
  // 입력을 받아서 처리하는 로직
  let score = parseInt(buf);
  let grade;

  switch (parseInt(score / 10)) {
    case 10:
    case 9:
      grade = 'A';
      break;
    case 8:
      grade = 'B';
      break;
    case 7:
      grade = 'C';
      break;
    case 6:
      grade = 'D';
      break;
    default:
      grade = 'F';
      break;
  }

  console.log(`성적: ${score}, 학점: ${grade}`);

  // 끝날 떄 반드시 처리해야 함
  rl.close();
});
