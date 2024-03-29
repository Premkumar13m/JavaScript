//object literals
const mySym=Symbol("key1")   // this line  indicates that we are using the mySym Symbol as the key.

const Juser={
    name:"prem" ,  //or  "name":"prem"
    "full name":"prem kumar",
    [mySym]:"mykey1",                                 //note:-->we only use symbol in [] bracket.its a rule.
    age:18,
    locatiopn:"Bhopal",
    email:"pk@gamail.com",
    isLoggedIn:false,
    lastLoginDays:["monday","saturrday"]
}

// console.log(Juser.email)        //out-->pk@gmail.com
   //   or
// console.log(Juser["email"])     //out-->pk@gmail.com


// console.log(Juser["full name"])  
//console.log(Juser."full name")  or console.log(Juser.full name)   //wrong therefore always use Juser[] method.

// console.log(Juser[mySym])       //out-->mykey1    //note:--> we access symbol like this only its a rule.
// console.log(typeof mySym)       //out-->Symbol

// Juser["email"]="premkumar@gmail.com"      //note:- it will change the email value in the present Object.
// Object.freeze(Juser)                      // the freeze() method should be commented while accessing the Juser from any function if it is not commented then the function will give the error.
// Juser["email"]="premkumar2234@gmail.com"    //note:- it will not affect the email value because before this we have allready freeze the Juser.
// console.log(Juser)         

//out-->{
//     name: 'prem',
//     'full name': 'prem kumar',
//     age: 18,
//     locatiopn: 'Bhopal',
//     email: 'premkumar@gmail.com',
//     isLoggedIn: false,
//     lastLoginDays: [ 'monday', 'saturrday' ],
//     [Symbol(key1)]: 'mykey1'
//   }


Juser.greetingTwo = function(){              //here we are creating the function called greetingTwo which access the Juser Object. 
    console.log(`hello js user ${this.name}`)   //out-->hello js user prem
}
Juser.greetingTwo()        // here we are calling the greeting method.