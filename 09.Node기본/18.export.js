// from 에서 to 까지의 랜덤 값 구하기
exports.randInt = (from, to) => {
  return Math.floor(Math.random() * (to - from + 1) + from);
};

// 원의 면적 구하기
exports.area = (radius) => {
  return Math.PI * radius * radius;
};
