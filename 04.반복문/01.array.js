let array = [52, 273, '아침밥', '점심밥', true, false];
console.log(array.length);
console.log(array);

console.log(array[2], array[3]);
array[0] = 0;
console.log(array);

// element 추가
array[6] = 'new item';
console.log(array);
array.push('push ');
console.log(array);

for (let i = 0; i < array.length; ++i) {
  console.log(array[i], typeof array[i]);
}

// Enhanced For Loop
for (let item of array) {
  console.log(item[i], typeof item[i]);
}
