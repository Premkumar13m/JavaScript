// if(true){
//     let a=10
//     const b=20
//     var c=30    
// }
// console.log(a)  //error a is not defined
// console.log(b)  //error  b is not defined
// console.log(c)  // out:- 30

var c=300       //global variable
if(true){
    let a=10
    const b=20    //these all are the block variable
    var c=30    
}
//console.log(c)  //out:-30

         // therefore avoid the using var variable


let a=300
if(true){
    let a=10
    const b=20
    console.log("inner : ", a)      //out - inner 10
}
console.log(a)       //out- 300