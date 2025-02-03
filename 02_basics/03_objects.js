
 const mySym=Symbol("mySym");
const obj={
    name:"Zaid",
    age:22,
    [mySym]:"mykey1",
    gender:"Male",
    location:{
        city:"Patna",
        state:"Bihar",
        country:"India"
    },
    MobileNo:["7870186233","7091174365"],
    isLoggedIn:false,
    "full name":"Md Zaid"
    
}
Object.keys(obj)[1]="ages";
console.log(Object.keys(obj)[1]);


// console.log(obj.age);
// console.log(obj["age"]);
// console.log(obj["full name"])
// console.log(obj[mySym]);

// obj.age=23;
//Object.freeze(obj); // it will not allowed  user to change the object;
//console.log(obj);

// obj.greeting=function(){
//     console.log("Hello js user form cognizant");
    
//  }
//  console.log(Object.keys(obj));
//  console.log(Object.values(obj));
// obj.greeting2=function(){
//     console.log(`Hello Js user ${this.name}`)
// }
// console.log(obj.greeting2());
