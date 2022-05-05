const myModule = require('./19.module');

for (let i = 0; i < 5; i++) {
  // 1 에서 5 사이의 랜덤 값 구하기
  console.log(myModule.randInt(1, 5));
  // 랜덤한 원의 면적 구하기
  console.log(myModule.area(myModule.randInt(1, 5)));
}
