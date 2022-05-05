// 연습문제 - 4
// 4. 1에서 1000까지 각 숫자의 갯수를 구하시오.
//     예) 10 ~ 15
//          10 => 1, 0
//          11 => 1, 1
//          12 => 1, 2
//          13 => 1, 3
//          14 => 1, 4
//          15 => 1, 5
//     즉, 0: 1개, 1: 7개, 2: 1개, 3: 1개, 4: 1개, 5: 1개

let counts = [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ];

// 한자리 수
for (let i = 1; i < 10; i++) {
  counts[i]++;
}

// 두자리 수
for (let i = 10; i < 100; i++) {
  counts[parseInt(i / 10)]++; // 십의 자리수
  counts[i % 10]++; // 일의 자리수
}

// 세자리 수
for (let i = 100; i < 1000; i++) {
  counts[parseInt(i / 100)]++; // 백의 자리수
  counts[parseInt((i % 100) / 10)]++; // 십의 자리수
  counts[i % 10]++; // 일의 자리수
}

// 네자리 수
for (let i = 1000; i < 1000; i++) {
  counts[parseInt(i / 1000)]++; // 천의 자리수
  counts[parseInt((i % 1000) / 100)]++; // 백의 자리수
  counts[parseInt((i % 100) / 10)]++; // 십의 자리수
  counts[i % 10]++; // 일의 자리수
}

console.log(counts);
