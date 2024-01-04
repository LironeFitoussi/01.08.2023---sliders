const product = {
  name: "laptop",
  price: 900,
  description: "Lenovo Gaming PC",
};

for (const key in product) {
  //   console.log(key);
  console.log(key, product[key]);
}

// dot notation
console.log(product.price);

// bracket notation
console.log(product["price"]);
