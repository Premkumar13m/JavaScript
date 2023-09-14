
//const tinderUser=new Object()          //singleton object
//console.log(tinderUser)            //out-->{}   //because this object is empty.
// const rinderUser={}               //non singleton object
// console.log(rinderUser)           //out-->{}

const tinderUser={}
tinderUser.Id="123abc"
tinderUser.name="prem"
tinderUser.isLogged=false
console.log(tinderUser)             //out-->{ Id: '123abc', name: 'prem', isLogged: false }
const regularUser={
    email:"some@gamil.com",
    fullname:{
          userfullname:{
            firstname:"ravi",
            lastname:"kumar"
          }
    }
}
console.log(regularUser.fullname.userfullname.firstname)   //out-->ravi

//how to merze to object

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={obj1,obj2}
console.log(obj3)     //out-->{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

//better way to merze objects

const obj4=Object.assign(obj1,obj2)
console.log(obj4)                   //out-->{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//   also another better way

const obj5=Object.assign({},obj1,obj2)
console.log(obj5)                        //out-->{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// best way to combine the two object is by using the spread opertion

const obj6={...obj1,...obj2}
console.log(obj6)                     //out-->{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' } //used this method only .


//  
const users=[
    {
        id:1,
        email:"pk@gmail.com"
    },
    {
        id:2,
        email:"sk@gmail.com"
    }
]
 
console.log(users[1].email)             //out-->sk@gnail.com

console.log(Object.keys(tinderUser))     //out-->[ 'Id', 'name', 'isLogged' ]

console.log(Object.values(tinderUser))   //out-->[ '123abc', 'prem', false ]

console.log(Object.entries(tinderUser))   //out-->[ [ 'Id', '123abc' ], [ 'name', 'prem' ], [ 'isLogged', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'))   //out-->false

console.log(tinderUser.hasOwnProperty('isLogged'))   //out-->true
