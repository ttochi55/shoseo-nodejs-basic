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

for (let i = 1; i <= 1000; i++) {
	let numString = String(i);
	for (let digit of numString) {
		counts[parseInt(digit)]++;
	}
}

console.log(counts);
