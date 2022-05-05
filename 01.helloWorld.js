console.log('Hello World');

let sum = 0;

for (let i = 0; i <= 100; i++) {
  sum += i;
}

console.log(`1에서 100까지 정수의 합은 ${sum} 입니다.`);
console.log('1에서 100까지 정수의 합은 ' + sum + ' 입니다.');

let msg = `1에서 100까지 정수의 합은
${sum} 
입니다.`;

console.log(msg);

let str = "location.href='1.html'";

// Template Literal
let x = `John said "I'm genius."`;

console.log(str);
console.log(x);

let hello = '안녕하세요?';

console.log(hello[1]);

let d = new Date();

console.log(`올해는 ${d.getFullYear()} 입니다.`);
