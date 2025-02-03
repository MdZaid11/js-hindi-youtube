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