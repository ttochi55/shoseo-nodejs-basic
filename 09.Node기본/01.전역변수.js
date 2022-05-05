const path = require('path');

console.log('__dirname: ', __dirname);
console.log('__filename: ', __filename);

let filename = path.join(__dirname, 'txt', 'textfile.txt');
let dirtyname = path.join(__dirname, 'txt', '..', 'txt', 'textfile.txt');

console.log('filename: ', filename);
console.log('dirtyname: ', dirtyname);
