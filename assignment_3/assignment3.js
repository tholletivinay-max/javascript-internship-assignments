
// Assignment 3: Conditional Logic Implementation

// 1. Declare the student's test score
const score = 85;

let grade;

// 2. Validate the score using if...else
if (score < 0 || score > 100) {
    console.log("Invalid Score");
} 
else {

    // 3. Determine the letter grade using switch
    switch (Math.floor(score / 10)) {

        case 10:
        case 9:
            grade = "A";
            break;

        case 8:
            grade = "B";
            break;

        case 7:
            grade = "C";
            break;

        case 6:
            grade = "D";
            break;

        default:
            grade = "F";
    }

    // 4. Determine pass or fail using ternary operator
    const status = score >= 50 ? "Passed" : "Failed";

    // 5. Display the results
    console.log("Score:", score);
    console.log("Grade:", grade);
    console.log("Status:", status);
}
