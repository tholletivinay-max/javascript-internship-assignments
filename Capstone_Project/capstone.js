
/*
   CAPSTONE MINI PROJECT
   Interactive Product Inventory & Analytics Dashboard
*/


// ======================================
// 1. INITIALIZING INVENTORY
// ======================================

console.log("--- Initializing Inventory System ---");

const inventory = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 }
];


// Dynamic category price thresholds
const budgetLimit = 50;
const premiumLimit = 200;


// ======================================
// 2. USER INPUT AND VALIDATION
// ======================================

let productName;
let productPrice;

// Get a valid product name
while (true) {

    productName = prompt("Enter the new product name:");

    if (productName === null) {
        console.log("Product entry cancelled.");
        break;
    }

    productName = productName.trim();

    if (productName === "") {
        console.log("Product name cannot be empty. Try again.");
        continue;
    }

    break;
}


// Ask for price only if a product name was provided
if (productName !== null && productName !== "") {

    while (true) {

        const priceInput = prompt("Enter the product price:");

        if (priceInput === null) {
            console.log("Price entry cancelled.");
            productName = null;
            break;
        }

        productPrice = Number(priceInput);

        if (priceInput.trim() === "" ||
            !Number.isFinite(productPrice) ||
            productPrice <= 0) {

            console.log("Please enter a valid positive price.");
            continue;
        }

        break;
    }
}


// ======================================
// 3. CONDITIONAL LOGIC AND SWITCH
// ======================================

if (productName !== null && productName !== "") {

    let categoryCode;

    if (productPrice < budgetLimit) {
        categoryCode = 1;
    } else if (productPrice < premiumLimit) {
        categoryCode = 2;
    } else {
        categoryCode = 3;
    }

    let category;

    switch (categoryCode) {
        case 1:
            category = "Budget";
            break;

        case 2:
            category = "Standard";
            break;

        case 3:
            category = "Premium";
            break;

        default:
            category = "Unclassified";
    }

    // Add the new product to the inventory
    inventory.push({
        name: productName,
        price: productPrice,
        category: category
    });

    console.log(
        `[Prompt executed: User adds "${productName}" at "$${productPrice}"]`
    );
}


// ======================================
// 4. PROCESSING INVENTORY USING LOOPS
// ======================================

console.log("\n--- Processing Inventory Roster (forEach) ---");

// Assign categories to existing products and display all products
inventory.forEach(function(product) {

    if (product.price <= 0) {
        return;
    }

    let categoryCode;

    if (product.price < budgetLimit) {
        categoryCode = 1;
    } else if (product.price < premiumLimit) {
        categoryCode = 2;
    } else {
        categoryCode = 3;
    }

    switch (categoryCode) {
        case 1:
            product.category = "Budget";
            break;

        case 2:
            product.category = "Standard";
            break;

        case 3:
            product.category = "Premium";
            break;
    }

    console.log(
        `* Item: ${product.name} ($${product.price}) -> Category: ${product.category}`
    );

});


// Search inventory using break and continue
console.log("\n--- Inventory Search ---");

const searchName = "Mouse";
let foundProduct = false;

for (let i = 0; i < inventory.length; i++) {

    const product = inventory[i];

    if (product.price <= 0) {
        continue;
    }

    if (product.name.toLowerCase() === searchName.toLowerCase()) {

        console.log("Found product:", product.name);
        foundProduct = true;
        break;
    }
}

if (!foundProduct) {
    console.log("Product not found.");
}


// ======================================
// 5. FUNCTIONS AND FINANCIAL ANALYTICS
// ======================================

console.log("\n--- Financial Analytics ---");

// Regular function to calculate total inventory value
function calculateInventoryValue(items) {

    let total = 0;

    for (const item of items) {
        total += item.price;
    }

    return total;
}

const totalValue = calculateInventoryValue(inventory);

console.log("Total Inventory Value: $" + totalValue);


// Arrow function with custom tax and discount parameters
const calculateFinalAmount = (
    amount,
    taxRate = 0,
    discountRate = 0
) => {

    // These variables are local to this function
    const discount = amount * (discountRate / 100);
    const discountedAmount = amount - discount;
    const tax = discountedAmount * (taxRate / 100);

    return {
        discount: discount,
        tax: tax,
        finalAmount: discountedAmount + tax
    };
};


// Apply a 10% tax and 5% discount
const financialResult = calculateFinalAmount(totalValue, 10, 5);

console.log("Discount (5%): $" + financialResult.discount.toFixed(2));
console.log("Tax (10%): $" + financialResult.tax.toFixed(2));
console.log("Final Amount: $" + financialResult.finalAmount.toFixed(2));


// ======================================
// 6. FILTERING AFFORDABLE PRODUCTS
// ======================================

const affordableItems = inventory.filter(function(product) {

    return product.price < 200;

});

console.log(
    "Filtered Affordable Items (Under $200):",
    affordableItems.map(function(product) {
        return product.name;
    })
);


// ======================================
// 7. GENERATING FORMATTED REPORT USING MAP
// ======================================

const formattedReport = inventory.map(function(product) {

    return `${product.name.toUpperCase()}: $${product.price}`;

});

console.log("Formatted Report List:", formattedReport);
