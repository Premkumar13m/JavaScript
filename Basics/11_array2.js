const marvel_heroes=["thor","ironman","spiderman"]
const dc_heroes=["superman","flash","batman"]

marvel_heroes.push(dc_heroes)
console.log(marvel_heroes)   //out-->[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heroes[3][1])   //out-->flash
//  const allHeroes=marvel_heroes.concat(dc_heroes)
//  console.log(allHeroes)          //out-->[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//note :- push(element):--> it will push the element at the end of the given array .
//concat():-------> it will add the element at the end but if we concat the two array then all element of the both the array will combine to each other one after another.

// const  all_newHeros=[...marvel_heroes,...dc_heroes]
// console.log(all_newHeros)         //out-->[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//   --------note:-->concat() or [...array1,...array2]



// if we want to concat more than two array then we use like this


const myArr=["prem","kumar","engineer"]
const arr=["hi","hello"]
const allHeroes=marvel_heroes.concat(dc_heroes,myArr,arr)  //out-->[
//                                                                  'thor',      'ironman',
//                                                                  'spiderman', 'superman',
//                                                                  'flash',     'batman',
//                                                                  'prem',      'kumar',
//                                                                  'engineer',  'hi',
//                                                                  'hello'
//                                                                  ]
console.log(allHeroes)
const  all_newHeros=[...marvel_heroes,...dc_heroes,...myArr]
console.log(all_newHeros)     //out-->[
//                                     'thor',      'ironman',
//                                     'spiderman', 'superman',
//                                     'flash',     'batman',
//                                     'prem',      'kumar',
//                                     'engineer'
//                                     ]

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]          //flat()-->this method will return the flat array by removing the array inside the array.
const real_another_array=another_array.flat(Infinity)     //note:- flat(depth),here depth means how much it includes array inside array,in our case depth=3.
                                                        //  but in many times actually we dont't know the depth therefore we use depth=Infinity.
console.log(real_another_array)          //out-->[1,2,3,4,5,6,7,6,7,4,5]

//  some extra method of an array

// Array.isArray("element")--> it will return boolean value, if element is an array then output will be true else false.
// Array.from("element")----->it will return the array of the element passed in the agument.

console.log(Array.isArray("prem"))        //out-->false
console.log(Array.from("prem"))           //out-->['p','r','e','m']

console.log(Array.from({name:"prem"}))    //out-->[]    // it return empty array because it doesn't understand the key ,value pair.


const score1=100
const score2=200
const score3=300
const score4=400

console.log(Array.of(score1,score2,score3,score4))   //out-->[100,200,300,400]


//note :--  Array.of(ele1,ele2,el3,) -->this method will return the array of the element passing through the argument.

console.log(Array.of(1,2,3,3,4))     //out-->[1,2,3,3,4]
console.log(Array.of("prem","kumar","enginner","btech"))   //out-->[ 'prem', 'kumar', 'enginner', 'btech' ]