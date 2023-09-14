// //              -------    ARRAY    -------

 const myArr=[0,1,2,3,4,5]
const myHeors=["hello","world"]
const myArr2=new Array(1,2,3,4,5)
console.log(myArr[0])             //out-->0

 //Array  method

 myArr.push(6)              //push method add the element in the end
 console.log(myArr)         //out-->[
                                //          0,1,2,3,
                           //         4,5,6
                             //     ]
// //push(element) --> this method  is used to insert the element in the array                            
// //pop() --->method delete the element from the last of given array 
// //unshift(element) --->method insert he element at the  beginning
// //shift() -----> method delete the 0th index element from the array
// //includes(element)---->it return the boolean values ,if the element present in the given array then it will return true otherwise it retun false
// //indexOf(element)--->it return the index of the given element ,if element not found in the given array then it will return -1.

 myArr.unshift(9)
 console.log(myArr)            //out-->[
                                   //          9, 0, 1, 2,
                            //        3, 4, 5, 6
                               //         ]

myArr.pop()
console.log(myArr)        //out-->[9,0,1,2,3,4,5]

myArr.shift()
console.log(myArr)       //[0,1,2,3,4,5]         

 console.log(myArr.includes(9))    //note:- it return the true and false if the array includes the  element then it return true else it return  false
//                                   //out--> false

console.log(myArr.indexOf(9))     //out-->-1   //-1 means the array doesn't have the element

const newArr=myArr.join()         //note-->it will convert given the array into a string.
console.log(newArr)              //out-->0,1,2,3,4,5
console.log(typeof newArr)       //out-->string
console.log(typeof myArr)        //out-->object

//slice(index,index)---->it will return the element present between the given index ,where starting index  is included and ending index is excluded
//splice(index,index)---->it will delete the element the present between the both the indexes,where starting and ending indexes are included.


console.log("A ",myArr)          //out-->A [0,1,2,3,4,5]
const my1=myArr.slice(1,3)     

console.log(my1)                 //out-->[1,2]
console.log("B ",myArr)          //out-->B [0,1,2,3,4,5]

const myn2=myArr.splice(1,3)
console.log("C ",myArr)            //out-->C [0,4,5]
console.log(myn2)                  //out-->[1,2,3]