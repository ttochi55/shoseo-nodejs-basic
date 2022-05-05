let date = new Date();

// 현재 날짜에서 100일 더한 날짜
console.log(date.toDateString());
date.setDate(date.getDate() + 100);
console.log(date.toDateString());
