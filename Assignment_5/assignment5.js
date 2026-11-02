
// Assignment 5: Function Architecture and Scope


// TASK 1: Standard Function with Default Parameters

function calculateArea(length = 5, width = 4) {

    return length * width;

}

let standardArea = calculateArea();

console.log("Standard Function Area (Default 5x4):", standardArea);


// TASK 2: Arrow Function with Parameters

const calculateAreaArrow = (length = 5, width = 4) => {

    return length * width;

};

let arrowArea = calculateAreaArrow(10, 3);

console.log("Arrow Function Area (Custom 10x3):", arrowArea);


// TASK 3: Demonstrating Function Scope

function scopeDemo() {

    var functionVar = "I am inside the function";

    console.log("Function Scope:", functionVar);

}

scopeDemo();


// TASK 4: Demonstrating Block Scope

{

    let blockVar = "I am inside the block";

    console.log("Inside Block:", blockVar);

}


// Accessing block-scoped variable outside the block

try {

    console.log(blockVar);

} catch (error) {

    console.log("Scope Test Error:", error.toString());

}
