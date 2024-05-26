//LET in ES6....
let x = 10;
x = 20; // Valid
{
  let x = 30;
  console.log(x); // Output: 30
}
console.log(x); // Output: 20

//CONST in ES6...
const PI = 3.14; //always assigned with value..
PI = 3.14159; // Error: Assignment to constant variable
{
 const PI = 3.14159;
 console.log(PI); // Output: 3.14159
}
console.log(PI); // Output: 3.14

//let and const are block scoped..........
