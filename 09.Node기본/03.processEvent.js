// exit 이벤트를 연결
process.on('exit', (code) => {
  console.log('프로세스가 종료 되었습니다.');
  console.log('exit code: ', code);
});

// uncaughException 이벤트를 연결
process.on('uncaughException', (error) => {
  console.log('예외가 발생 했습니다.');
  console.log('uncaughException 매개변수:\n ', error);
});

// 임의의 이벤트를 연결
process.on('message', () => {
  console.log('message event');
});

// 예외를 강제로 발생
error.error.error();
