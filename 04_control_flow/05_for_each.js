//const coding=["js","ruby","java","python","cpp"];

// coding.forEach((item)=>console.log(item))

// or we can write like that

// coding.forEach(function (val){
//     console.log(val);
    
// })


// function printMe(item){
//    console.log(item); 
// }

// coding.forEach(printMe) 

// coding.forEach
// ((item,index,arr)=>{
//     console.log(item, index,arr)
// })

// const myCoding=[

//     {
//         languageName:"javascript",
//         languageFileName:"js"
//     },
//     {
//         languageName:"java",
//         languageFileName:"java"
//     },
//     {
//         languageName:"C++",
//         languageFileName:"cpp"
//     },
// ]

// myCoding.forEach((item)=>{
//     // basically here item is individual object
//   console.log(item.languageFileName)
// })

// const values=coding.forEach((item)=>{
//     console.log(item);
//     return item;
// })
// console.log(values)  // for each kuch return nhi krta hai


// const myNums=[1,2,3,4,5,6,7,8,9,10];

// const newNums=myNums.filter( (num)=> num>4)  /// filter conditon check krta hai aur return bhi krta hai value
// console.log(newNums);

// const newNums=myNums.filter((num)=>{
//    return num>4  // agar hum ye {} use krte to return krna zaroorihota hia
// })

// console.log(newNums)

// const myNums=[1,2,3,4,5,6,7,8,9,10];
// const newNums=[];
// myNums.forEach( (nums)=>{
//    if(nums>4){
//       newNums.push(nums);
//    }
// } )
// console.log(newNums);

 const myNumbers=[1,2,3,4,5,6,7,8];

// const newNums=myNumbers.map((num)=>num+10);
//const newNums=myNumbers.map((num)=>{return num+10}); if we want to use {} then we have to use return statement;
// console.log(newNums)

// const newNums=myNumbers
//                   .map((nums)=>nums*10)  // yha pe eak naya array bnega jisme each element me 10 se multiply ho jaayega
//                   .map((nums)=>nums+1)   // yha pe jo nums hai wo actual update value hai array ka means update value aaya hai isme
//                   .filter((nums)=>nums>=40)
                  
//                   console.log(newNums);


// reduce

// const myNums=[1,2,3];

// const myTotal=myNums.reduce((accumulator,currVal)=>{
//    console.log(`acc:${accumulator} and currval: ${currVal}`)
//    return accumulator+currVal
// },0);

// console.log(myTotal)

const shoppingCart=[
   {
     itemName: "js course",
     price:2999
   },
   {
      itemName: "py course",
      price:999 
   },
   {
      itemName: "mobile dev course",
      price:5999
   },
   {
      itemName:"data science course",
      price:2999
   }
]
const totalPrice=shoppingCart.reduce((acc,item)=>  acc+item.price,0);
console.log(totalPrice);
