// String Length - 속성
let hello = '안녕하세요?';
console.log(hello.length);

// String 내에서 문자열을 찾을 때
console.log(hello.indexOf('하'));
console.log(hello.indexOf('한'));

let str = "Please locate where 'locate' occurs!";
let pos = str.search("locate");
console.log(pos);

str = "Apple, Banana, Kiwi";
let res = str.slice(7, 13);
console.log(str.slice(-4)); // 시작 인덱스, 끝 인덱스 
console.log(str.substr(7, 6)); // 시작 인덱스, 갯수

// 문자열을 대체
let newStr = str.replace(',', ':');
console.log(newStr);
newStr = str.replace(/,/g, ':'); // Regular Expression
console.log(newStr);

// 공백 제거
str = "       Hello World!        ";
console.log(str);
console.log(str.trim());

// 문자 추출
console.log(hello.charAt(2), hello[2]);

// 문자열을 Array로 변경
let txt = "a,b,c,d,e"; // String
console.log(txt.split(","));