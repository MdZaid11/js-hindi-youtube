const userEmail="hitest@gmail.com"  

if(userEmail){   // string is a truthy value 
    console.log("Got user email");
}
else {
    console.log("Dont have user email");
}
 const userEmail1=""; // false;
 const userEmail2=[];  // true;

 // falsy values

//  false, 0, -0, BigInt 0n, "", null, NaN

//truthy values

//truthy values
// "0"," ","false",[],{},function(){}



function sum(num1){   // function currying
    return function sum1(num2){
        return function sum2(num3){
             return num1+num2+num3;
        }
    }
}
const temp=sum(2);
console.log(temp)
const tem1=temp(3);
const temp2=tem1(4);
console.log(temp2);
console.log(sum(2)(3)(4));



