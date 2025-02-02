

const myArr=[0,1,2,3,4,5];

const myHeroes=["Shaktiman", "naagraj"];

const myArr2=new Array(1,2,3,4);

/// Array methods

myArr.push(6);
myArr.pop();
myArr.unshift(9); // its get inserred at first index
myArr.shift();// it pops out from the start
myArr.includes(8);
myArr.indexOf(5)

// slice, splice
console.log(myArr)
const myn1=myArr.slice(1,3)
console.log(myn1)

console.log(myArr)
const myn2=myArr.splice(1,3) // its manipulated in the same array and also last range is included
console.log(myArr) 
console.log(myn2)



const myArr1=[0,1,2,3,4,5];
console.log(myArr1.slice(-5,3));  // starts from -1 from the end ...... 
//When using a negative index with the slice method, negative indices are counted from the end of the array, starting at -1 for the last element, -2 for the second-to-last element, and so on. The negative index -2 itself is included because it is the starting point of the extraction.


