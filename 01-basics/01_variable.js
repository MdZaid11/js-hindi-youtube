const accountId=144553
let accountEmail="zaid@google.com"
var accountPassword="12345"
accountCity="Jaipur"

let accountSate;  // it will print undefined
// accountId=2;  // not allowed
accountEmail="zaid@amazon.com";
accountPassword="2121212";
accountCity="Bengaluru";
console.log(accountId);
/* 
    Prefer not to use var
    because of issue in block scope and functional scope
*/
console.table([accountEmail,accountPassword,accountCity,accountSate]);
