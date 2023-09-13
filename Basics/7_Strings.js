const name="prem"
const repoCount=50
//console.log(name+repoCount+" Value")  //out-->prem50 Value     //note:-->old technique

//    or   note:-used only new technique rather than old technique

console.log(`name is ${name} and repocount is ${repoCount}`)  //out-->name is prem and repocount is 50

const gameName=new String("premkumar")
console.log(gameName[0])     //out-->p
console.log(__proto__)       //out-->{}
console.log(gameName.length)   //out-->9
console.log(gameName.toUpperCase())    //out-->PREMKUMAR
console.log(gameName.charAt(2))        //out-->e
console.log(gameName.indexOf('k'))     //out-->4    //note if we give any other character rather than our given string then it will return -1. 
const newString =gameName.substring(0,4)   
console.log(newString)                     //out-->prem
const anotherString=gameName.slice(-10,5)      
console.log(anotherString)             //out-->premk
/*
const str = "The morning is upon us.";
str.slice(-3); // 'us.'
str.slice(-3, -1); // 'us'
str.slice(0, -1); // 'The morning is upon us'
str.slice(4, -1); // 'morning is upon
*/

const newStringOne="  prem  "
console.log(newStringOne)        //out-->  prem  
console.log(newStringOne.trim())  //out-->prem

const url="https://premkumar.com/prem%13kumar"
console.log(url.replace('%13','-'))              //out-->https://premkumar.com/prem-kumar
console.log(url.includes('prem'))            //out-->true
const myName="prem.kumar.123"
console.log(myName.split('.'))              //out-->[ 'prem', 'kumar', '123' ]