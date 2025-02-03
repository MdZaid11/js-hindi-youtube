//const tinderUser=new Object()  --> Singleton object

//const tinderUser={}  // non singletion object

const obj1={1:'a',2:"b"};
const obj2={3:"a",2:"b"};


      // spread operator 
// const obj3={...obj1,...obj2};
// console.log(obj3);

 //const obj3=Object.assign({},obj1,obj2); // it will basicaaly join both the obj into new object without changing the originnal object obj1;
 //console.log(obj3);

 //const obj4=Object.assign(obj1,obj2); // it will join both the array in obj1 means it will change the oringinal object obj1;
 //console.log(obj4);


 const users=[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:2,
        email:"z@gmail.com"
    }
 ]
console.log(users[0].email);
console.log(users[0].hasOwnProperty('email'))