// 완전수 구하기
// 약수 구하는 함수

function getDivisors(num) {
  let divArray = [];
  for (let k = 1; k < i; k++) {
    if (i % k === 0) {
      divArray.push(k);
    }
  }
  return divArray;
}

// Array 원소의 합을 계산해주는 함수
function sumArray(arr) {
  let sum = 0;
  for (let element of arr) {
    sum += element;
  }
  return sum;
}

for (let i = 2; i <= 10000; i++) {
  // 약수 구하기
  let array = getDivisors(i);
  // 약수의 합 구하기
  let divSum = sumArray(array);
  // 숫자 비교하기
  if (i === divSum) {
    console.log(i);
    console.log(divArray);
  }
}