let today = new Date(2020, 9, 23);
let examDay = new Date(2020, 12, 3);

let diff = examDay.getTime() - today.getTime();
let dDay = diff / (1000 * 60 * 60 * 24);
// let dDay = diff / (밀리초 * 초 * 분 * 시간);

console.log(`오늘은 수능 D-${dDay} 입니다.`);
