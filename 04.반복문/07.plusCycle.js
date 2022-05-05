const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.setPrompt('0~99 사이의 숫자 입력> ');
rl.prompt();

rl.on('line', function (buf) {
  // 입력을 받아서 처리하는 로직
  let orgNumber = buf.length > 1 ? buf : '0' + buf[0];
  let number = orgNumber;
  let cycle = 0;
  while (true) {
    let sum = parseInt(number[0]) + parseInt(number[1]);
    let newNumber = number[1] + (sum % 10);
    cycle++;
    console.log(number, newNumber, cycle);
    if (parseInt(orgNumber) === parseInt(newNumber)) break;
    /* if (cycle > 100)
        break; */
    number = newNumber;
  }

  // 끝날 때 반드시 처리해야 함
  rl.close();
});
