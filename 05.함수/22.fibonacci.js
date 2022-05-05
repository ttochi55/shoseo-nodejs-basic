// 피보나찌 수열

function fibo(n) {
	// if (n === 0 || n === 1) {
	// 	return 1;
	// }
  // return fibo(n - 1) + fibo(n - 2);
  return (n === 0 || n === 1) ? 1 : fibo(n - 1) + fibo(n - 2);
}

for (let i = 0; i < 10; i++) {
	console.log(`fibonacci(${i}) = ${fibo(i)}`);
}
