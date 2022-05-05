// 완전수 구하기
for (let i = 2; i <= 10000; i++) {
  // 약수 구하기
  let divArray = [];
  for (let k = 1; k < i; k++) {
    if (i % k === 0) {
      divArray.push(k);
    }
  }
  // 약수의 합 구하기
  let sum = 0;
  for (let divisor of divArray) {
    sum += divisor;
  }
  // 숫자 비교하기
  if (i === sum) {
    console.log(i);
    console.log(divArray);
  }
}
