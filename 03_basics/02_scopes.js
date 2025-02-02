

var c=300;
let a=10;  // ye totally independent hai if block ke andar waala a se 

if(true){   // block scope 
    let a=10;  // ye a jo hai isko hum bahar access nhi kar skte hai means it has block scope 
    const b=20; // same a hi ki trah isko bhi hum bahar access nhi kar skte hai
    var c=30;    // but isko hum bahar access kar skte hai
}
 console.log(a);
console.log(c);
// console.log(b);

// clousure --> it is property of javascript in which child function can able to use varuable of parent funtction but vice versa is not equal
function one(){
    const username="hitesh";

    function two(){
       const website="youtube";
       console.log(username);
    }
    two();
    console.log(website);
}
one();
