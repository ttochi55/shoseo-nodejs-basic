let cart = [
  {
    product: { name: '치약', vol: 500, price: 3000 },
    quantity: 5,
  },
  {
    product: { name: '비누', vol: 200, price: 1000 },
    quantity: 4,
  },
];

// console.log(JSON.stringify(cart));
// console.log(cart[0].product.price);

let sum = 0;
for (let i in cart) {
  sum += cart[i].product.price * cart[i].quantity;
}
console.log(sum);
