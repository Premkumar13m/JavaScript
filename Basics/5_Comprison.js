console.log(2>1)  //out-->true
console.log(2>=1)  //out-->true
console.log(2<1)    //out-->false
console.log(2==1)   //out-->false
console.log(2!=1)   //out-->true


console.log("2">1)  //out-->true
console.log("01">1)  //out-->true



console.log(null>0)  //out-->false
console.log(null<0)  //out-->false
console.log(null==0)  //out-->false
console.log(null>=0)  //out-->true
console.log(null<=0)  //out-->true  /* note:-the reason is that an equality check == and comprisons >,<,>=,<= work differntly
                                            Comprisons convert null to a number , treating it as 0.thats why null>=0 is true
                                            and null>0 is false
                                      */


console.log(undefined>0)  //out-->false
console.log(undefined<0)  //out-->false
console.log(undefined==0)  //out-->false
console.log(undefined==0)  //out-->false
console.log(undefined>=0)  //out-->false
console.log(undefined<=0)  //out-->false


console.log("2"===2) //out-->false  note:- it compare the value



