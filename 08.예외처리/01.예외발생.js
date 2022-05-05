try {
  error.error.error();
} catch (e) {
  console.log(e.name);
  console.log(e.message);
}

console.log('프로그램 정상 종료');
