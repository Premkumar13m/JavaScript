//Object de-structuring and JSON API intro

const course = {
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"Prem Kumar"

}
// another way of accessing the course Object by using Object de-structuring

// const {courseInstructor} = course
// console.log(courseInstructor)     // out:- Prem Kumar

//if we want to access the courseInstructor with the another name because this is so big.
// const {courseInstructor: ci} = course
// console.log(ci)     //out:- Prem Kumar

