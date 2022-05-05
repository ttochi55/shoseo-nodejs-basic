let today = new Date();
console.log(today);

setTimeout(function() {
  console.log('3초 경과');
}, 3000);

setTimeout(function() {
  clearInterval(si);
}, 5000);

let si = setInterval(() => {
  console.log(new Date());
}, 1000);
