let myDate=new Date()
console.log(myDate)                    //out-->2023-09-14T07:25:03.773Z
console.log(myDate.toString())        //out-->Thu Sep 14 2023 07:26:13 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString())    //out--->Thu Sep 14 2023
console.log(myDate.toLocaleString())  //out-->9/14/2023, 7:28:29 AM
console.log(typeof myDate)             //out-->object

let myCreateDate=new Date(2023,0,23)
console.log(myCreateDate.toDateString())   //out-->Mon Jan 23 2023

let myCreateDate1=new Date(2023,0,23,5,3)
console.log(myCreateDate1.toLocaleString())    //out-->1/23/2023, 5:03:00 AM

let myCreateDate2=new Date("2023-01-23")
console.log(myCreateDate2.toLocaleString())      //out-->1/23/2023, 12:00:00 AM

let myCreateDate3=new Date("01-14-2023")
console.log(myCreateDate3.toLocaleString())     //out-->1/14/2023, 12:00:00 AM

let myTimeStamp=Date.now()        //note:- Date.now give the output in millisecond
console.log(myTimeStamp)                       //out-->1694681516578      //iin millisecond
console.log(myCreateDate.getTime())             //out-->1674432000000     //in millisecond
console.log(Math.floor(Date.now()/1000))    //out-->1694681846           //in millisecond


let newDate=new Date()
console.log(newDate.getMonth())       //out-->8    //it give the latest month number which is going on currently
console.log(newDate.getDay())         //out-->4    //it gives current day number (like monday-1,tuesday-2......sunday-7)


newDate.toLocaleString('default',{
    weekday:"long",
})
console.log(newDate.toLocaleString('default',{
    weekday:"long",                                //output-->thursday    //it gives full day name
}))