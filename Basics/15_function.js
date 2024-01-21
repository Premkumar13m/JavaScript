// console.log("p")
// console.log("r")       //this all 5 lines will print the letter p r e m  line by line.
// console.log("e")
// console.log("m")

function addTwoNumbers(number1, number2){    //here number1 and number2 are parameters
console.log(number1+number2)
}
// addTwoNumbers(3,4);    //out:- 7    //here 3,4 is an arguments
// addTwoNumbers(3,"a");  //out:- 3a
// addTwoNumbers(3,null);  //out:- 3

// addTwoNumbers(3,5);   //out:- 8

// const result=addTwoNumbers(3,5);
// console.log("Result : ", result);  // out:- undefined 
// this is because the function addTwoNumbers does not return any value.

//therefor the solution of this problem is that

function add(number1, number2){
//   let result=number1+number2
//   return result
       //or
       return number1+number2
    }

    // const result=add(3,5);
    // console.log("Result : ", result); //out:- Result :  8

    function loginUserMessage(username){
        return `${username} just logged in`
    }
//console.log(loginUserMessage("prem"));  //out:-premjust logged in
//console.log(loginUserMessage(""));        //out:-just logged in
//console.log(loginUserMessage());            //out:-undefined just logged in

// function loginUser(username){
//     if(username===undefined){
//         console.log("please enter a username")
//         return
//     }

//     return `${username} just logged in`
// }
//console.log(loginUser());    //out:- please enter a username
                            //       undefine


// function loginUser(username){
//     if(!username){
//         console.log("please enter a username")
//         return
//     }

//     return `${username} just logged in`
// }
// console.log(loginUser());    //out:- please enter a username
                              //       undefine


function loginUser(username="sam"){
    if(!username){
        console.log("please enter a username")
        return
    }

    return `${username} just logged in`
}
// console.log(loginUser());     //out:- sam just logged in
//here this is because in argument we are not passing any thing that is why it is automatically taking the defoult value "sam".but if we pass any argument then it automatically take the output rather than the defoult value "sam"
console.log(loginUser("prem"));  //out:- prem just logged in