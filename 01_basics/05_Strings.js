//In JS, String is an Object, Not an Arrya.

let Name = "Darshan"
let Score = 50
// console.log(Name + " has scored "+Score +" in JS" );     Outdated stntax to print strings.

/*Now we are using backtick (` `)
Telmpalte Literals(String Interpolishion).
Template literals are literals delimited with backtick (`) characters, 
allowing for multi-line strings, string interpolation with embedded expressions, 
and special constructs called tagged templates.

Here we make placeholders, and we can inject any values in thoseplaceholders using backticks
*/

// console.log(`Hello, My Name is ${Name} and my JS Score is ${Score}.`)
// console.log(`Hello, My Name is ${Name.toUpperCase()} and my JS Score is ${Score}.`)
console.log(typeof Name);   //String
console.log(typeof String); //Function


//Another way to declare string
let Myname = new String('Darshan')
console.log(Myname);    //[String: 'Darshan']
/*
String {'Darshan'}
0: "D"
1: "a"
2: "r"
3: "s"
4: "h"
5: "a"
6: "n"
length: 7
[[Prototype]]: here you will get properties(Functions/Methods) related to String. 
Like valueof(), charAt(), toUpperCase(), replace(), replaceAll(), slice(), split(), 
substring(), strike(), trim(), trimEnd(), trimLeft(), trimRight(), search()...  
String[[PrimitiveValue]]: "Darshan"
*/

// console.log(Myname[2])      //r
// console.log(Myname.__proto__)   //{} object
// console.log(Myname.length)   //7
// console.log(Myname.charAt(4))   //h
// console.log(Myname.charAt(3).toUpperCase())   //S
// console.log(Myname.indexOf('a'))   //1 position of 'a'
// console.log(Myname) //Darshan. here original value is not changed. because String is premitive dataype. it is storeed in stack memory

const name1 = "Darshan-Badiger"
const newname = name1.substring(0,4);   // Gives first 4 characters
//console.log(newname)

// const anothername = name1.slice(3,7)     //gives characters from position 3 to 7
const anothername1 = name1.slice(2,-5)      //Starts with index 2 and cuts the last 5 characters. //rshan-Ba
// console.log(anothername1)       

const anothername2 = name1.slice(2,-10)      //Starts with index 2 and cuts the last 10 characters. //output: rsh
// console.log(anothername2)


//In slice function we can use negative  values, where as in substring we cannot use negative values


//Trim and Replace methods
//Trim method used to remove unwanted spaces in the string. dones not remove extra spaces present in between the strings
let n1 = "          Drahsan          Badiger         "
// console.log(n1)     //displays name with white spaces
console.log(n1.trim())      // removes the white spaces in the string
// console.log(n1.trimEnd())       //removes white spaces at the end
// console.log(n1.trimStart())     //removes whites spaces at the beginning and keeps the white spaces as it is



let url = "https://darshan.com/darshan%20badiger"
// console.log(url.replace('%20','-'))


// console.log(url.includes('arsh'))   //true      //checks whether the passed parameter(string) is present in the main string or not
// console.log(url.includes('karan'))   //false      //karan word is not present in the url


let n3 = "darshan-badiger-be-google-microsoft"      //based on '-' split the string store in array
console.log(n3.split('-'))
console.log(n3.split('-',3))        //splits the string based on '-' and displays first 3 words in array