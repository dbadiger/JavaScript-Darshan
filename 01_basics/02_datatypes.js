"use strict"; //treat all JS code as newer version.
/*
when we use strict mode, all code should be written in new version o JavaScript.
*/

//alert("Hello" 6+4);  this is directly will not work in Node JS. this will work in browser

//Datatypes:
/*
number = range till 2 ^ 53
bigint = for large numbers
string = "group of characters"
boolean = true or false
null = stand alone value (type = object)
undefined = kind a place holder for a value which is not defined yet (type = undefined)
symbol = uniquness
object


JavaScript primarily has six basic data types: 
Number, String, Boolean, Undefined, Null, and Object. 
Additionally, ES6 introduced Symbol for unique identifiers, 
and ES2020 introduced BigInt for large integers. 

ECMAScript standards are crucial as they define the specifications for JavaScript. 
Key milestones include ES6 in 2015, which introduced major features like arrow functions, 
let/const, and classes. ES2017 brought in async/await for better asynchronous programming.


*/

console.log(typeof 123)     //dataype: number
console.log(typeof "")      //datatpe: String
console.log(typeof true)    //datatype: boolen
console.log(typeof null)    //datatype: object
console.log(typeof undefined)   //datatype: undefined