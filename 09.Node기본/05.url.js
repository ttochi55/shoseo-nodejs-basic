const url = require('url');

let urlSample =
  'https://www.hanbit.co.kr/store/books/look.php?p_code=B4872223435';
let parsedObject = url.parse(urlSample);
// Url {
//   protocol: 'https:',
//   slashes: true,
//   auth: null,
//   host: 'www.hanbit.co.kr',
//   port: null,
//   hostname: 'www.hanbit.co.kr',
//   hash: null,
//   search: '?p_code=B4872223435',
//   query: 'p_code=B4872223435',
//   pathname: '/store/books/look.php',
//   path: '/store/books/look.php?p_code=B4872223435',
//   href: 'https://www.hanbit.co.kr/store/books/look.php?p_code=B4872223435'
// }
console.log(parsedObject);
console.log(parsedObject.query);

//getting the derieved URL from urlObject using the url.format function
console.log(url.format(parsedObject));
