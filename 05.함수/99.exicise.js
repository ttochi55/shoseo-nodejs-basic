// 1. 양의 정수 N을 입력으로 받아 1부터 N까지 제곱의 합과
//     합의 제곱을 구하시오.
// 11.square.js

function reducer(n) {
	let arr = [];
	for (let i = 1; i <= n; i++) {
		arr.push(i);
	}
	let sum = arr.reduce((acc, cur) => Math.pow(acc, 2) + Math.pow(cur, 2));
	let pow = Math.pow(sum, 2);
	console.log(`제곱의합: ${sum}, 합의 제곱근: ${pow}`);
}

// reducer(10);
// 출력
// 제곱의합: 2.5800022600047047e+196, 합의 제곱근: Infinity

// 2. a + b + c = 1000 인 피타고라스 수를 구하시오.
//     즉, a*a + b*b = c*c 을 만족하고
//     a < b < c 이고, a + b > c 이다.
// 12.피타고라스.js

function pythagorean() {
	let a, b, c;
	let outerBreak = false;
	for (a = 1; a < 332; a++) {
		for (b = a + 1; b <= 499; b++) {
			c = 1000 - a - b;
			if (c > a + b) {
				continue;
			}
			if (c * c === a * a + b * b) {
				console.log(a, b, c);
				console.log(a * a, b * b, c * c);
				outerBreak = true;
				break;
			}
		}
		if (outerBreak) {
			break;
		}
	}
}

// pythagorean();
// 출력
// ...
// ...
// 966 88 970
// 969 108 975
// 975 140 985

// 3. 디지털 시계에 하루동안(00:00~23:59) 3이 표시되는 시간을
//     초로 환산하면 총 몇 초(second) 인가?

function timer() {
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
}

// timer();
// 출력
// 29700

// 4. 1에서 1000까지 각 숫자의 갯수를 구하시오.
//     예) 10 ~ 15
//          10 => 1, 0
//          11 => 1, 1
//          12 => 1, 2
//          13 => 1, 3
//          14 => 1, 4
//          15 => 1, 5
//     즉, 0: 1개, 1: 7개, 2: 1개, 3: 1개, 4: 1개, 5: 1개
// 15.count.js

function counter() {
	let counts = [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ];

	for (let i = 1; i <= 1000; i++) {
		let numString = String(i);
		for (let digit of numString) {
			counts[parseInt(digit)]++;
		}
	}

	console.log(counts);
}

// counter();
// 출력
// 0:192개
// 1:301개
// 2:300개
// 3:300개
// 4:300개
// 5:300개
// 6:300개
// 7:300개
// 8:300개
// 9:300개

// 5. 세자리 수를 곱해 만들 수 있는 가장 큰 대칭수(palindrome)와
//     세자리 수를 구하시오.
//     단, 대칭수는 12321과 같은 수를 의미함.
// 16.palindrome.js

function palindrome() {
	let maxPal = 0;
	let maxX, maxY;
	for (let i = 100; i <= 999; i++) {
		for (let k = i; k <= 999; k++) {
			let product = i * k;
			if (isPalindrome(String(product))) {
				if (product > maxPal) {
					maxPal = product;
					maxX = i;
					maxY = k;
				}
			}
		}
	}
	console.log(maxX, maxY, maxPal);
}

// palindrome();
