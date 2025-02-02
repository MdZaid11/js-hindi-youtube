// Immediately Invoked Function Expressions (IIFE)
// An Immediately Invoked Function Expression (IIFE) is a JavaScript function that executes immediately after it is defined.

// It is a self-executing anonymous function that does not pollute the global scope and is mainly used for data encapsulation and avoiding variable conflicts.


(function chai(){
    console.log(`DB Connected `);
})();

( (name)=>{
    console.log(`DB Connected two ${name}`);
})('zaid');




