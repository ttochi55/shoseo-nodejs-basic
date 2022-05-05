const moment = require('moment');

require('moment-timezone');
moment.tz.setDefault('Asia/Seoul');

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.setPrompt('시:분 입력> ');
rl.prompt();

rl.on('line', function (buf) {
  // 입력을 받아서 처리하는 로직
  let input = buf.split(':'),
    HH = parseInt(input[0]),
    mm = parseInt(input[1]),
    alarm = moment(`YYYY-MM-DD ${HH}:${mm}:ss`, 'HHmmss')
      .subtract(45, 'minutes')
      .format('YYYY년 MM월 DD일 HH시 mm분');

  console.log(`${alarm}에 알람이 설정 되었습니다.`);

  // 끝날 떄 반드시 처리해야 함
  rl.close();
});
