/*

const user={
    username:"prem",
    logInCount:8,
    signIn:true,
getUserDetails:function(){
    console.log("got user details from the database")
   // console.log(`username: ${this.username}`)         //out :- username: prem
   console.log(this)                                 //out :-  {
                                                                //   username: 'prem',
                                                                //   loginCount: 8,
                                                                //   signIn: true,
                                                                //   getUserDetails: [Function: getUserDetails]
                                                                // }
}
}
console.log(user.getUserDetails())   // calling he getUserDetails.
console.log(this);             // out:- {}   ,this is because this is calling globally and hence it return the empty object.

*/

// const promise=new Promise   
// const date=new Date();

//here new is called constructor function


function User(username,logInCount,isLogIn){
    this.username=username
    this.logInCount=logInCount
    this.isLogIn=isLogIn
    return this
}
const userone=new User("prem",12,true)
const usertwo=new User("kumar",13,false)
console.log(userone)           //User { username: 'prem', logInCount: 12, isLogIn: true }
console.log(usertwo)          //User { username: 'kumar', logInCount: 13, isLogIn: false }

