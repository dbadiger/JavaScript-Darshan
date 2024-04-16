let value = "12"
let value1 = 12
let value2 = "12abc"
let value3 = null
let value4 = undefined
let value5 = true

console.log(typeof value)
console.log(typeof value1)
console.log(typeof value2)
console.log(typeof value3)
console.log(typeof value4)
console.log(typeof value5)

let valueInNumber = Number(value); //converting String to Number
let valueInNumber2 = Number(value2); //converting String to Number
let valueInNumber3 = Number(value3); //converting NULL to Number
let valueInNumber4 = Number(value4); //converting NULL to Number
let valueInNumber5 = Number(value5); //converting Boolean to Number

console.log(valueInNumber)
console.log(typeof valueInNumber)

console.log(valueInNumber2)
console.log(typeof valueInNumber2)

console.log(valueInNumber3)
console.log(typeof valueInNumber3)

console.log(valueInNumber4)
console.log(typeof valueInNumber4)

console.log(valueInNumber5)
console.log(typeof valueInNumber5)

/* other data type to number
"12" ==> 12
"12abc" ==> NaN (Not a Number)
true ==>1; false ==> 0;

*/

let isLoggedIn = 1;
let boolenLoggedIn = Boolean(isLoggedIn);   //convert number to boolean (0-false, 1 - true)
console.log(boolenLoggedIn);

/* other data type to boolean
1==> true, 0==> false
"" ==> false(Empty String)
"Some Value"==> true
*/

let someval = 24
let stringsome = String(someval);
console.log(typeof stringsome)
console.log(stringsome)