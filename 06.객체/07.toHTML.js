let products = [
  { name: '바나나', price: 1200 },
  { name: '사과', price: 2000 },
  { name: '배', price: 3000 },
  { name: '고구마', price: 700 },
  { name: '감자', price: 600 },
  { name: '수박', price: 500 },
];

let html = `<table class="table table-info">
	<tr>
		<th>품목</th>
		<th>가격</th>
	</tr>
`;
for (let product of products) {
  html += '<tr>';
  html += `<td>${product.name}</td>`;
  html += `<td>${product.price}</td>`;
  html += '</tr>';
}
html += '</table>';

document.getElementById('product').innerHTML = html;
