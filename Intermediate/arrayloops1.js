const coding=["js","java","php","cpp"]
coding.forEach( (items) => {
    //console.log(items)    // it will print all the element of the array
})

// const value=coding.forEach( (items) => {
//     //console.log(items)    // it will print all the element of the array
// })
// console.log(value)    // out:- undefined


const value=coding.forEach( (items) => {
    //console.log(items)    // it will print all the element of the array
    return items;
})
//console.log(value)    // out:- undefined

//  note:- it indicates that forEach loops does not return any value.


                // filter:- The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

const num=[1,2,3,4,5,6,7]
// const result=num.filter( (element) => element>5)
// console.log(result)           //out:- [ 6, 7 ]

                //or


// const result=num.filter( (element) => {
//           return element>5;
// })
// console.log(result)   //out:- [ 6, 7 ]

          // if we want  to do this by using forEach loops then also we can use it

const newNum=[]
num.forEach( (items) => {
    if(items>5)
    newNum.push(items)
})
// console.log(newNum)

  // some more examples of filter method.

  const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
  
let  userBooks=books.filter( (items) => items.genre==='History')
  //console.log(userBooks)   // it will only  print all the objects having the genre is equals to the History

  userBooks=books.filter( (value) => {
    return value.publish>=1995 && value.genre==="History";
  })
  //console.log(userBooks)    // it will print the all the object of the array whose genre is history' and publish date is greater than the year 1995

           // this can be done with the help of the  map also

const numbers=[1,2,3,4,5,6]
const res=numbers.map( (items) => {
    return items+10;
})
//console.log(res)            //  out:- [ 11, 12, 13, 14, 15, 16 ]

// const newResult=numbers.map( (items) => items*10)
//                         .map( (items) => items+1)
    
// console.log(newResult)  //  [ 11, 21, 31, 41, 51, 61 ]


const newResult1=numbers.map( (items) => items*10)
                        .map( (items) => items+1)
                        .filter( (items) => items>40)

//console.log(newResult1)         // [ 41, 51, 61 ]

                           // reduce() method:- 

const myNumbers=[1,2,3]
// let result2=myNumbers.reduce( function(accumulator, currentValue){
//         return accumulator+currentValue
// }, 0)   //Here the intialValue is starts with 0,but we can starts intialValue from any numbers ,also intial value is compulsory if it is not given then it will generate an error.
// console.log(result2)           //6


                //or

let result2=myNumbers.reduce( (accumulator, currentValue) => accumulator+currentValue,0)
console.log(result2)  //6

// let result2=myNumbers.reduce( function(accumulator, currentValue){
//     console.log(`accumulator:${accumulator} and curentValue:${currentValue}`)
//         return accumulator+currentValue
// }, 0)
// console.log(result2)

//  accumulator:0 and curentValue:1
//  accumulator:1 and curentValue:2
//  accumulator:3 and curentValue:3
//  6

//note:- here first of all accumulator is starts with the intialValue i.e.,0  and then it is recursively replace with the value of summation of the accumulator+currentValue. 


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const total =shoppingCart.reduce( (items,rupya) => items+rupya.price,0)
console.log(total)      //out:- 22996











