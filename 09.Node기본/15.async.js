const fs = require('fs');
const async = require('async');

// 순서보장이 안되는 문제를 async 를 이용해 해결

async.parallel(
  {
    bufA: (callback) => {
      fs.readFile('tmp/a.txt', 'utf8', callback);
    },
    bufB: (callback) => {
      fs.readFile('tmp/b.txt', 'utf8', callback);
    },
    bufC: (callback) => {
      fs.readFile('tmp/c.txt', 'utf8', callback);
    },
  },
  (e, result) => {
    console.log(result.bufA);
    console.log(result.bufB);
    console.log(result.bufC);
  }
);
