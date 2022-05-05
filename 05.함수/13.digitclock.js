// 연습문제 - 3
// 3. 디지털 시계에 하루동안(00:00~23:59) 3이 표시되는 시간을
//     초로 환산하면 총 몇 초(second) 인가?

let total = 0;

for (let hour = 0; hour <= 23; hour++) {
  for (let min = 0; min < 60; min++) {
    let time = hour + '' + min;
    if (time.indexOf('3') > -1) {
      total += 60;
    }
  }
}

console.log(total);