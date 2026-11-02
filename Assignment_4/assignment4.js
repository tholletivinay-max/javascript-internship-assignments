// Assignment 4: Loop Control Structures


// TASK 1: Multiplication Table using for loop

console.log("-- Multiplication Table of 5 --");

for (let i = 1; i <= 5; i++) {

    console.log("5 x " + i + " = " + (5 * i));

}


// TASK 2: Find first number greater than 10
// that is divisible by 6 using while loop and break

console.log("\n-- First number > 10 divisible by 6 --");

let number = 11;

while (true) {

    if (number > 10 && number % 6 === 0) {

        console.log("Found:", number);

        break;

    }

    number++;

}


// TASK 3: Skip numbers using do...while and continue

console.log("\n-- do...while loop with continue --");

let count = 1;

do {

    if (count === 3) {

        count++;

        continue;

    }

    console.log("Number:", count);

    count++;

} while (count <= 5);