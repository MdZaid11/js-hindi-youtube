const score=400;
console.log(score);

const balance=new Number(100);
console.log(balance);

console.log(balance.toString().length);

const hundreds=10000000;
console.log(hundreds.toLocaleString('en-IN'))


/////  +++++++++ Maths +++++++++++

console.log(Math)

console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.round(4.5));
console.log(Math.round(4.3));
console.log(Math.ceil(9.2));
console.log(Math.floor(3.6));

console.log(Math.random())  // 0 to 1

console.log(Math.ceil((Math.random()*10) + 1));   // 1 to 10

const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max-min+1)) + min);

