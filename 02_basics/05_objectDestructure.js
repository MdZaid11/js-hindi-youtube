const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

// const {courseInstructor}=course
// console.log(instructor)

 // or we can write like this 

 const {courseInstructor:instructor}=course
 console.log(courseInstructor);

 
// {
//     "name":"hitesh",
//     "coursename":"jsin hindi",
//     "price":'free'
// }