// const user={
//     username:"zaid",
//     price:999,

//     welcomeMessage:function(){
//         console.log(`${this.username} , welcome to website`);
//         console.log(this);
//     }
// }

// user.welcomeMessage();
// user.username='kulsum';
// user.welcomeMessage();


// Browser ke andar jo global object jo hia wo window object hai

// this sirf object ke saath hi kaaam krta haii function ke saath nhi
// function chai(){
//     let username="hitesh"
//     console.log(this.username); // will not work
// }
// chai();

// const chai=function(){
//     let username="hitesh"
//     console.log(this.username);
// }

////// Arrow function 

// const chai=()=>{
//     let username="hitesh"
//     console.log(this);  // this will also not work
// }
// chai();


// const addTwo=(num1,num2)=>{
//     return num1+num2;
// }


 // one more way to declare arrow function if we have only one line of statement then we can write like this

 const addTwo=(num1,num2)=>(num1+num2);  // agar hum arrow ke baad circular bracket lagate hai to return likhne ki zaroorat nhi hai
console.log(addTwo(4,5));

const username="zaid"
const user={
    username:"Zaid",
    age:12,
    welcomeMessage:()=>{
        console.log(`${this.username}, welcome to youtube family`)
        console.log(this)
    }
}

// this here keyword will not work beacuse 
//Arrow functions do not have their own this.
//In an arrow function, this refers to the global object (window in browsers, global in Node.js).
//Since there is no username in window or global, it prints undefined.
user.welcomeMessage();