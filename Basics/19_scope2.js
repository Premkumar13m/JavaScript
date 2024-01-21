// function one(){
//     const username="prem"

//     function two(){
//         const website="youtube"
//         console.log(username);   // it will print hitesh because username is defined outside the function two it means that username is global variable for function tow()
//     }
//     console.log(website);   //error because variable website have scope only in the function two() outside this function its scope is not defined.
//     two()
// }
// one()      //here we are calling the one() function first 



// if(true){
//     const username="prem"
//     if(username==="prem"){
//         const website ="youtube"
//         console.log(username + website)  // prem youtube
//     }
//     console.log(website)  //error
// }
// console.log(username)   //error this is because username scope is only in the if statement outside if statement it is not defined.



function addone(num){
    return num+1
}
addone(5)  

      //or

addone(5)
function addone(num){
     return num+1
    }
  
//both the technique is true in both the cases output will be the same

           //but

// const addTwo=function(num){
//     return num+2
// }
// addTwo(8)    //this is true way to call this expression 


addTwo(8)
const addTwo=function(num){
    return num+2
}
// this is the error because we Cannot access 'addTwo' before initialization