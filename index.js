// Question 76
function AddNumber(num1, num2) {
    return num1 + num2;
}
console.log(`Sum of two number is ${AddNumber(4, 5)}`);
// Question 77
function greet(name = "Maham") {
    console.log(`Hello ${name}`);
}
greet("Sabar"); //Pass an argument
greet(); //Pass not an argument.
// Question 78
// Function Declaration for squaring a numbers array
function SquareNumber(...num) {
    let square = num.map((num) => num * num);
    console.log(square);
}
SquareNumber(1, 3, 6, 9);
// Function Expression for squaring a number array.
const Square = (...num) => {
    let square = num.map((num) => num * num);
    console.log(square);
};
Square(2, 4, 7, 8);
export {};
