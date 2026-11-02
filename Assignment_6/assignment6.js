
// Assignment 6: Arrays, Objects, and Core Methods


// 1. Creating an array of product objects

const products = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 45 }
];


// 2. Displaying all products using forEach()

console.log("-- All Products (forEach) --");

products.forEach(function(product) {

    console.log("Item:", product.name, "- Price: $" + product.price);

});


// 3. Filtering products under $50

console.log("\n-- Filtered Products (Price < $50) --");

const affordableProducts = products.filter(function(product) {

    return product.price < 50;

});

console.log(affordableProducts);


// 4. Creating formatted product tags using map()

console.log("\n-- Mapped Product Tags (map) --");

const productTags = products.map(function(product) {

    return product.name.toUpperCase() + " costs $" + product.price;

});

console.log(productTags);
