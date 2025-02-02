// let x=function sayMYName(){
//     console.log("My name is zaid")
// }
// x();
// sayMYName();
// console.log(x());
// function add( a, b){
//    return a+b;
// }
// let res=add(2,3);
// console.log(res);
   

function calculateCartPrice(val,val2,...num1){
    return num1;
}

console.log(calculateCartPrice(200,400,500,2000));

const user={
    username:"hitesh",
    price:199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and proce is ${anyObject.price}`)
}
// handleObject(user);

handleObject({
    username:"Sam",
    price:399
})

const myNewArray=[200,400,100,600];

function handleArray(getArray){
   return getArray[1];

}
// console.log(handleArray(myNewArray));

console.log(handleArray([100,3000,200]))