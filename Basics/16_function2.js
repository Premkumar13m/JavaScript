// function calculateCartPrice(num1){
// return num1
// }
//console.log(calculateCartPrice(2)) //out:- 2

//console.log(calculateCartPrice(200, 400, 500)) //out:- 200

            // to resolve this issue we use the rest operator

// function calculateCartPrice(...num1){   //used rest operator here ...num1
//     return num1
//     }
//     console.log(calculateCartPrice(200, 400, 500))  //out:- [ 200, 400, 500 ]


function calculateCartPrice(val1,val2,...num1){   //used rest operator here ...num1
        return num1
    }
    // console.log(calculateCartPrice(200, 400, 500,2000))  //out:- [ 500, 2000 ]

//here val1 have value =200 and the val2 have value=400 and rest are in the ...num1


const user={
    username:"prem",
    price:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user)    //here we are passing the user object to the handleObject function.
//out:- Username is prem and price is 199

handleObject({           //here we are passing a new object to the handleObject function.
    username:"sam",
    price:399
})
// out:- Username is sam and price is 399
       
       //now passing the array to the handleObject function.

const myNewArray=[200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))  //out:- 400