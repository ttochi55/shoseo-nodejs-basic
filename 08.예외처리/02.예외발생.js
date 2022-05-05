function callThreeTimes(callback) {
  for (let i = 0; i < 3; i++) {
    callback();
  }
}

callThreeTimes(function () {
  console.log('호출');
});

callThreeTimes();
