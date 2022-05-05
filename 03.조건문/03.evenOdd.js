let input = 5;

// if (input % 2 === 0) {
//   console.log(`${input} 은/는 짝수입니다.`);
// }

// if (input % 2 === 1) {
//   console.log(`${input} 은/는 홀수입니다.`);
// }

// if (input % 2 === 0) {
//   console.log(`${input} 은/는 짝수입니다.`);
// } else {
//   console.log(`${input} 은/는 홀수입니다.`);
// }

// Input을 command argument로 받는 방법
// process.argv 배열에 argument가 전달됨.

// for (let arg of process.argv) {
//   input = parseInt(arg);
//   console.log(process.argv);
//   if (isNaN(input)) {
//     continue;
//   }
//   if (input % 2 === 0) {
//     console.log(`${input} 은/는 짝수입니다.`);
//   } else {
//     console.log(`${input} 은/는 홀수입니다.`);
//   }
// }

for (let i = 2; process.argv.length; i++) {
  input = parseInt(process.arg[i]);
  if (input % 2 === 0) {
    console.log(`${input} 은/는 짝수입니다.`);
  } else {
    console.log(`${input} 은/는 홀수입니다.`);
  }
}
