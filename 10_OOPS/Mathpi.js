// Object.getOwnPropertyDescriptor()


// console.log(Math.PI);
// Math.PI = 10;   //If i try to change the constant value, it will not change.
// console.log(Math.PI); //It still gives the original PI constant Value. //3.141592653589793
//------------------------------------
// const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descripter);
/*Output:
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/
//------------------
// const myObj = Object.create(null)

const abc = {
    name: 'ginger chai',
    price:100,
    isAvailable: true,

    orderChai:function(){
        console.log("Code Error");
    }
}

console.log(Object.getOwnPropertyDescriptor(abc, "name"))



//Change its property
// Object.defineProperty(abc, "name", {
//     writable:false,
//     enumerable:false
// })
// console.log(Object.getOwnPropertyDescriptor(abc, "name"))

for (let [key, value] of Object.entries(abc)) {
    if(typeof value !== 'function'){
        console.log(`${key}:${value}`);
    }
}

Object.defineProperty(abc, "name", {
    // writable:false,
    enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(abc, "name"))