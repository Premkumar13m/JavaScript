// IMMEDIATE INVOKED FUNCTION EXPRESSIONS(IIFE)

// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined
// It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts:-

// The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
// The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.


(function chai(){
  console.log(`DB CONNECTED`)
})();                           // here ; is compulsory because if it is not given then next function will not excute,it will give the error.

// out:- DB CONNECTED

( () => {
    console.log((`DB2 CONNECTECTED`))
})();

// out:- DB2 CONNECTED

( (name) => {
console.log(`this is the ${name}`)
})("prem")
// out:- this is the prem