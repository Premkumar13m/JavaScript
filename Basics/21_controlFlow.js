             // js operator

// ==	equal to
// ===	equal value and equal type
// !=	not equal
// !==	not equal value or not equal type
// >	greater than
// <	less than
// >=	greater than or equal to
// <=	less than or equal to
// ?	ternary operator



//  !=  :  The inequality (!=) operator checks whether its two operands are not equal, returning a Boolean result

                     //examples:-
                     
                     //console.log(1 != 1);
                     // Expected output: false
                     
                     //console.log('hello' != 'hello');
                     // Expected output: false
                     
                     //console.log('1' != 1);
                     // Expected output: false
                     
                     //console.log(0 != false);
                     // Expected output: false
                     
//  !==  : The strict inequality (!==) operator checks whether its two operands are not equal, returning a Boolean result. Unlike the inequality operator, the strict inequality operator always considers operands of different types to be different.

                   //examples

//console.log(1 !== 1);
// Expected output: false

//console.log('hello' !== 'hello');
// Expected output: false

//console.log('1' !== 1);
// Expected output: true

//console.log(0 !== false);
// Expected output: true


                     // if statement

const balance=500;
// if(balance>200){
//     console.log(`balance is greater than `)
//     console.log(`test`)
// }
        //  or  

// if(balance>200)console.log(`balance is greater than `),console.log(`test`)

        //   falsy value
    
// false , 0 , -0 ,undefined , null , BigInt On , "" , NaN

            // Truthy value

// "0" , "false" , [] , {} , function(){} , " "

// question 1.> who to check whether the given object is empty or not.

// const emptyObject ={}
// if(Object.keys(emptyObject).length === 0){
// console.log(`object is empty`)
// }

// Nullish Coalescing Operator (??)  :- null undefined

// let val1=5??10
// let val2=null??10
// let val3=undefined??15
// val4=null??10??20
// console.log(val1, val2, val3 , val4)  //out:- 5 10 15 10

            // ternary operator

// const price=5
// price>=80?console.log(`less than 80 `):console.log(`greater than 80`)

// let myArray = ['flash', 'batman', 'superman']
// let arr=0
// while(arr<myArray.length){
//     console.log(`value is ${myArray[arr]}`)
//     arr=arr+1;
// }
//output
// value is flash
//value is batman
// value is superman

let score=1
do{
console.log(`${score}`);   // it will print the number from 1 to 10 line by line.
score++
}while(score<=10)