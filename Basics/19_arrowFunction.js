const user={
    username:"prem",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to the website`)
        console.log(this)                                                 // out:- {
    }                                                                 //             username: 'sam',
 }                                                                         //              price: 999,
                                                                           //             welcomeMessage: [Function: welcomeMessage]
                                                                             //         

user.welcomeMessage()   // out:- prem , welcome to the website
user.username="sam"
user.welcomeMessage()   // out:- sam , welcome to the website
console.log(this)      //out:-{}       //this will return the empty object 

        //note:- this can only be used inside the object not inside the function lets take an example

// function chai(){
//     let username="prem"
//     console.log(this.username)
// }
// chai()
// it will print undefined that is why never used this inside the function.only used inside the object.


// const chai=function(){
//     let username="prem"
//     console.log(this.username)
// }
// chai()         
// out:- undefined

        // ARROW FUNCTION

const chai = () => {
    let username="prem"
    console.log(this.username)
}
chai() 
//out:-  undefined


// function name(){
//     console.log(this)   // it will print all the object of window i.e., global,clone .....etc. 
// }
// name()

// const addTwo = (num1,num2) => {
//     return num1+num2
// }
// console.log(addTwo(3,4))  //out:-7

// since the above function have only one statement then we can also represent it emplicitly as

const addTwo = (num1,num2) => num1+num2
console.log(addTwo(3,4))     //out:- 7

         // we can return the object also

const add = (num1,num2) => ({username:"prem"})

console.log(add(3,4))     //out:- {username:"prem"}
console.log(add())         //out:- {username:"prem"}