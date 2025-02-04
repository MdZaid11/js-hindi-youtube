const myObj={
    js:"javascript",
    cpp:"C++",
    rb:"ruby",
    swift:"swift by apple"
}
// console.log(myObj.js)
// for (const key in myObj) {
//   console.log(myObj[key])
// }

const programming = ["js", "rb", "py", "java", "cpp"];

// for (const key in programming) {
//     console.log(key);   // it will print index
//     console.log(programming[key])
// }
const map=new Map();
map.set('IN',"India");
map.set("USA","United State of america")
map.set('Fr',"France");

// for (const key in map) {
//     console.log(key);  // as Map is not iterable so we cantuse loop here
// }