let numberFromLiteral = 273;
let numberFromConstructor = new Number(273);

console.log(numberFromLiteral, numberFromConstructor);

let number = 273.12345;
console.log(number.toExponential());
// 소수점이하
console.log(number.toFixed(2));
// 유효자리수: 앞자리부터 문자열로 반환
console.log(number.toPrecision(6));

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

console.log(Math.pow(2, 54));
