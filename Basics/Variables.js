const accountId=144533
let accountEmail="premk@gamil.com"
var accountPass="12345"  //prefer not to use var because of issues  in block scope and functional scope
accountCity="Bihar"
let accountState   // output---> undifined
//accountId=2 --->not allowed

// accountEmail="pk@gamil.com"
// accountPass="54321"               the whole line  will overwrite the value email,pass,city in orginal variables.
// accountCity="siwan"

/*console.log(accountId)
console.log(accountEmail)   --or-- console.table([accountId,accountEmail,accountPass,accountCity])
console.log(accountPass)
console.log(accountCity)*/

console.table([accountId,accountEmail,accountPass,accountCity,accountState])