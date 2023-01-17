// Create a program that accepts a number (1-12) 
// as input and logs to the console that number and its corresponding month. 
// For example: if the user enters the number 3, then it should return the month “March.”
//  Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12).

let userInput = parseInt(prompt("Enter number 1-12:", "Enter number here"));

switch (userInput) {
    case 1:
        console.log("January");
    break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April"); 
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("ERROR");
}