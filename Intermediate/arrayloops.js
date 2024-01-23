const arr=[1,2,3,4,5,6]
for (const num of arr) {
    //console.log(num)             //it will print the number from 1 to 6
}

const greetings="hello world"
for (const word of greetings) {
    //console.log(word)           
       //or            both will print the hello world each letter line by line .
    //console.log(`${word}`)            
    }

                //Maps :- it is an object and it doesnot store the duplicate values.

const map=new Map()
map.set("IN","INDIA")
map.set("usa","UNITED STATE OF AMERICA")
map.set("UP","UTTER PRADESH")
//console.log(map)                      //Map(3) {
                                            //      'IN' => 'INDIA',
                                            //      'usa' => 'UNITED STATE OF AMERICA',
                                            //      'UP' => 'UTTER PRADESH'
                                            //    }
for (const key of map) {
    //console.log(key)                    //[ 'IN', 'INDIA' ]
                                        //   [ 'usa', 'UNITED STATE OF AMERICA' ]
                                        //   [ 'UP', 'UTTER PRADESH' ]
} 
                    
for (const [key,value] of map) {
    //console.log(key , value)           //IN INDIA
                                        // usa UNITED STATE OF AMERICA
                                        // UP UTTER PRADESH
}




// const myObject={
//     'game1':"hockey",
//     game2 :'cricket'
// }
// for(const [key,value] of myObject){  //error:-  myObject is not iterable
//     console.log(key , value)
// }

              // to access the key and value of the object we need the forin loops.

const myObject={
"js":"javascript",
cpp:"c++",
rb:'ruby',
swift:"swift by apple"
}

          //if you want to access the key

for (const key in myObject) {
        //console.log(key)                     //js
}                                           //  cpp
                                            //  rb
                                            //  swift

                    //if you want to access the key and value pair

for (const key in myObject) {
   
        //console.log(`${key} , ${myObject[key]}`)
    }                 //  js , javascript
                    //    cpp , c++
                    //    rb , ruby
                    //    swift , swift by apple


const arr1=["rb","js","java"]
for (const key in arr1) {
  //console.log(key)                 //0
}                                  //1
                                   //2
//it is printing the indexes of the array as a key


for (const key in arr1) {
    //console.log(arr1[key])         //  rb
                                    // js
                                    // java
}

//it is printing the value as a element of the array arr1

const map1=new Map()
map.set("IN","INDIA")
map.set("usa","UNITED STATE OF AMERICA")
map.set("UP","UTTER PRADESH")
for (const key in map) {
    //console.log(key)
    
}
// it will not print anything this is because we can not iterator over the maps.


                       //FOR EACH LOOP :-for each  loop takes the callback function as an argument.
                    
const arr2=["java","ruby","python"]
arr2.forEach(function(value){
   // console.log(value);            //java
                                   //ruby
                                   //python
})
            //or

arr2.forEach( (items) => {
    //console.log(items)
})

             //or by using printMe function

function printMe(items){
    //console.log(items)
}
arr2.forEach(printMe)


arr2.forEach( (items,index,arr2) =>  {
    // console.log(items, index, arr2)       //java 0 [ 'java', 'ruby', 'python' ]
                                            //  ruby 1 [ 'java', 'ruby', 'python' ]
                                            //  python 2 [ 'java', 'ruby', 'python' ]                                          
})


const myCoding=[
    {
        language:"java",
        languageFileName:"java"
    },
    {
        language:"python",
        languageFileName:"py"
    },
    {
        language:"javascript",
        languageFileName:"js"
    }
]
myCoding.forEach( (items) => {
//console.log(items.language)              // java
                                        //  python
                                        //  javascript
})

myCoding.forEach( (items) => {
    console.log(items.languageFileName)           //java
                                                //   py
                                                //   js
})