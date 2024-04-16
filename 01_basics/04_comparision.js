// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2!=1);
// console.log(2==1);

// console.log("2" > 1)        //true
// console.log("02" > 1)       //true
// console.log("02" > "1")     //false
// console.log("2" > "1")      //true
// console.log("2" < "1")      //false


// console.log(null>0);        //false
// console.log(null==0);        //false
// console.log(null>=0);        //true
// console.log(null<=0);        //true
/*The reason is that an eqquality check == and comparisions >, >=, <, <= wors differently.
Comparisions convert null to number, trating it as zero (0). That's why (case 3) null >= 0 is true 
and (case 1) null > 0 is false   */


console.log(undefined>0);        //false
console.log(undefined==0);        //false
console.log(undefined<=0);        //false
console.log(undefined>=0);        //false


// === strict check: it checks the datatype also. if value and dataype same, then only it gives answer as true. else false.