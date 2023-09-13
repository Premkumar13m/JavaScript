// Primitive --->7 types ,they  all are call by value
//String,Number,Boolean,null,Undefined,Symbol,BigInt

//example:-
const score=100
const scoreValue=100.3
const isLoggedIn=false
const outsideTemp=null
let userEmail
const id=Symbol(`123`)
const anotherid=Symbol(`123`)
console.log(id==anotherid)  //out-->false, because id is unique it cant be equal
const bigNumber=1234567889472643664534576585358585757349n    // note:-->at the end of the number we add small "n".for BIgInteger 
console.log(typeof bigNumber)     // out-->bigint
console.log(typeof id)                   // out-->symbol
console.log(typeof outsideTemp)     //out-->object
console.log(typeof userEmail)       //out-->undefined
//Non-Primitive or Reference
//Array,Objects,Functions

//examples
 const heros=["prem","kumar","Engineer"];  //array

 let obj={
    name:"prem",     //here  we are storing the object in a const variables,and inside the curly brackets all are objects.
    age:23,
 }

 const myFunction=function(){        //function,here we are storing the value of function in a const variable.
    console.log("hello world")
 }

// to find the datatypes of each variables we have a "typeof method".

console.log(typeof heros)            //out-->object
console.log(typeof obj)               //out-->object
console.log(typeof myFunction)       //out-->function




// Stack(Primitive),Heap(Non-Primitive)

let myYoutubename="Premkumar"
let anothername=myYoutubename
anothername="KumarPrem"
console.log(myYoutubename)    //out-->Premkumar
console.log(anothername);     //out-->KumarPrem

let userOne={
      email:"google@gamil.com",
      upi:"user@ybl"
}

let userTwo=userOne
userTwo.email="prem@gmail.com"
console.log(userOne.email)      //out-->prem@gmail.com
console.log(userTwo.email)      //out-->prem@gmail.coom