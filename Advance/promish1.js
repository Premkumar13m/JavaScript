//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
//A Promise is in one of these states:-

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

/*

const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()                                     //this line will call the promiseOne.then(function());
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})
    

//out:- Async task is compelete
//      Promise consumed


                         //OR another way to create a promise
                         
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

//out:-  Async task 2
//       Async 2 resolved

const promisethree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"prem",email:"prem@gmail.com"});   //passing the object as an argument
    },1000)
})
promisethree.then(function(user){         //recieving the object in the temporary user reference.
    console.log(user)              //out:- { username: 'prem', email: 'prem@gmail.com' }
})

*/

/*

const promisefour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;               //assinging the value true in the variable error.
        if(!error){                   //if condition is false then this statement will run.
            resolve({username:"abcde",email:"abc@gmail.com"})
        }
        else{
            reject(`ERROR:something went wrong`)
        }
    },1000)
})
promisefour.then(function(user){
 console.log(user)
 return user.username;
}).then((username)=>{
    console.log(username)
}).catch((err)=>console(err))

//out:- ERROR:something went wrong

 */


/*

const promisefour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;               //assinging the value false in the variable error.
        if(!error){                   //if condition is true then this statement will run.
            resolve({username:"abcde",email:"abc@gmail.com"})
        }
        else{
            reject(`ERROR:something went wrong`)
        }
    },1000)
})
promisefour.then(function(user){
 console.log(user)
 return user.username;
}).then((username)=>{
    console.log(username)
}).catch((err)=>console.log(err))

//out:- { username: 'abcde', email: 'abc@gmail.com' }
//      abcde

*/


/*

const promisefour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;               //assinging the value false in the variable error.
        if(!error){                   //if condition is true then this statement will run.
            resolve({username:"abcde",email:"abc@gmail.com"})
        }
        else{
            reject(`ERROR:something went wrong`)
        }
    },1000)
})
promisefour.then(function(user){
 console.log(user)
 return user.username;
}).then((username)=>{
    console.log(username)
}).catch(function(err){
    console.log(err);
}).finally(()=>console.log("the promise is either resolve or rejected"));

//out:- { username: 'abcde', email: 'abc@gmail.com' }
//      abcde
//      the promise is either resolve or rejected


// note :- here finally block is alway going to execute.


*/

// now consuming the promise using asnc await not then.


/*

 const promisefive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error)
        resolve({userame:"xyz",password:"123"})
    else
    reject('ERROR:something went wrong')
    },1000);
 })
async function consumePromiseFive(){
const response=await promisefive
console.log(response)
}
consumePromiseFive();

//out:- { userame: 'xyz', password: '123' }

*/

/*

const promisefive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error)
            resolve({ userame: "xyz", password: "123" })
        else
            reject('ERROR:something went wrong')
    }, 1000);
})
async function consumePromiseFive() {
        const response = await promisefive
        console.log(response)
}
consumePromiseFive();
//error occur ,so this error must be handled using try and catch block.

*/

/*

const promisefive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error)
            resolve({ userame: "xyz", password: "123" })
        else
            reject('ERROR:something went wrong')
    }, 1000);
})
async function consumePromiseFive() {
    try{                                              //here we are handling the error using the try and catch block.
        const response = await promisefive
        console.log(response)
    }
    catch(err){
    console.log(err);
    }
}
consumePromiseFive();

//out:-ERROR:something went wrong

*/

/*

async function getAllUser() {
    try{                                             
        const response = await fetch('https://jsonplaceholder.typicode.com/users')   //awaiting and fetching the data from the api
        const data= await response.json()         //convertting the api data into the json format
        console.log(data)                         // displaying the data in json format.
    }
    catch(err){
    console.log(err);
    }
}
getAllUser();

//note :- here awaiting is must because the data fetching from the api is taking time so await is compulsory otherwise it will genenarate an error.


*/


// now by using the 'then' not the async await method


fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json();
    }).then((data) => console.log(data))
    .catch((error)=>console.log(error))
    
//note:-both the above then and async wait is used to fetch the data from the api.

//output will be in the  json format.
