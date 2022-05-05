let date = new Date();
console.log(`현재 시간은 ${date} 입니다.`);

// 1970.1.1 0시를 기준으로 마이크로 초 단위가 시작 되었다.
let unixDate = new Date(1600000000000);
console.log(`unixDate 시간은 ${unixDate} 입니다.`);

// let stringDate = new Date('Sun Sep 13 2020 21:26:40');
let stringDate = new Date('2020-09-23 14:50');
console.log(`문자열로 만든 시간은 ${stringDate} 입니다.`);

let elementDate = new Date(2020, 9 - 1, 23, 14, 50);
console.log(`요소로 만든 시간은 ${elementDate} 입니다.`);
