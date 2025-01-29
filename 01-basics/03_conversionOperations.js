let score="33abc";

console.log(typeof score); // number


let valueInNumber=Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);
console.log(typeof NaN) // number

// "33" => 33
// "33abc" => NaN

let isLoggedIn=""
let booleanIsLoggedIn= Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);  // false

let isLoggedIn1="Zaid"
let booleanIsLoggedIn1= Boolean(isLoggedIn1);
console.log(booleanIsLoggedIn1); 

// 1  => true ; 0 => false;
// "" =>false;
// "Zaid" => true;

let someNumber= 33
let stringNumber= String(someNumber);

console.log(typeof stringNumber);
