
// Assignment 2: Operators, Expressions, and Input Handling

// 1. Getting input from the user
let billAmount = Number(prompt("Enter your bill amount:"));

let tipPercentage = Number(prompt("Enter tip percentage:"));

// 2. Calculating the tip
let calculatedTip = (billAmount * tipPercentage) / 100;

// 3. Calculating the total amount using assignment operator
let totalAmount = billAmount;

totalAmount += calculatedTip;

// 4. Displaying the results
console.log("Subtotal: $" + billAmount);

console.log("Tip Percentage: " + tipPercentage + "%");

console.log("Calculated Tip: $" + calculatedTip);

console.log("Total Amount to Pay: $" + totalAmount);
