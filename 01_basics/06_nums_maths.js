const score = 539

//Explicitly defining Number (Means It converts to Number)
const marks = new Number(100)       // 100 {in Object with some properties (methods... toString(), toFixed(), toExponential(), toPrecision(), valuesOf(), )}
const marks1 = new Number('A')      //NaN Not a Number 
console.log(marks1);


console.log(marks.toString());
console.log(marks.toString().length);


console.log(marks.toFixed(3));      //100.000 (toFixed() function is used to display the number of values you want after decimal point)
console.log(marks.toFixed(6));      //100.000000 (toFixed() function is used to display the number of values you want after decimal point)


let num = 121.8765
// console.log(num.toPrecision(4)) //121.9
// console.log(num.toPrecision(3)) //122
// console.log(num.toPrecision(2)) //1.2e+2 (exponential)

// let num1 = 24.1235
// console.log(num1.toPrecision(4)) //24.12
// console.log(num1.toPrecision(3)) //24.1
// console.log(num1.toPrecision(2)) //24

let num2 = 100000000
// console.log(num2.toLocaleString())      //100,000,000 (gives autput with added comma's)
// console.log(num2.toLocaleString('en-IN'))      //10,00,00,000 (gives autput with added comma's in Indian Standard)

// console.log(Math)       //Math itself is an Object with its own properties.
// console.log(Math.abs(-95.2)) //abs is converts all negative values into positive values 95.2
// console.log(Math.round(6.32)) //6
// console.log(Math.round(6.52)) //7
// console.log(Math.round(6.52)) //7
// console.log(Math.ceil(6.02)) //7    //ceil gives its next number
// console.log(Math.floor(6.95)) //6
// console.log(Math.min(6,2,8,12,5,1,1100)) //1
// console.log(Math.max(6,2,8,1202,5,1,1100)) //1202


console.log(Math.random()) //generates random number between 0 and 1
console.log(Math.random()*10 +1) 
console.log(Math.round((Math.random()*100)) ) 
console.log(Math.floor((Math.random()*10000)) ) 

const max= 20
const min= 10

console.log(Math.floor(Math.random()*(max-min+1)) +min)