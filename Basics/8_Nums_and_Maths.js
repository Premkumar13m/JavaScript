const score=400
const balance=new Number(100)
console.log(balance)     //out-->[Number:100]
console.log(balance.toString())     //out-->100
console.log(balance.toString().length)   //out-->3
console.log(balance.toFixed(2))      //out-->100.00
console.log(balance.toFixed(1))     //out-->100.0
const otherNumber=23.8966
console.log(otherNumber.toPrecision(3))   //out-->23.9
const otherNumber2=123.89866
console.log(otherNumber2.toPrecision(3))   //out-->124
const otherNumber3=1123.8966
console.log(otherNumber3.toPrecision(3))   //out-->1.12e+3

//note:- we only uses toPrecision() function when we know their is fixed number length .otherwise do not use this.
 const hundered=1000000
 console.log(hundered.toLocaleString())    //out-->1,000,000
 console.log(hundered.toLocaleString('en-IN'))   //out-->10,00,000


 //------------------MATHS------------

 console.log(Math)           //out-->Object [Math] {}
 console.log(Math.abs(-4))          //4
 console.log(Math.round(4.6))      //5
 console.log(Math.ceil(4.2))      //5     it takes upper value
 console.log(Math.floor(4.9))     //4     it takes lower value
 console.log(Math.min(4,3,6,8))   //3
 console.log(Math.max(4,3,6,8))   //8

 console.log(Math.random())                // random output from 0 to 1
 console.log((Math.random()*10)+1)           //  if we want our random greater than or equal to one than we simply
                                             //  multiply the random number by 10 and then add 1 in that particular number
   
//note:-  if we wants our random vaiables to be between the given number then we simply use this technique 
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)  //random number greater than or equal to 10 and less than equal to 20
