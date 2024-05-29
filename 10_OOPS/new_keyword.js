/*
Javascript's by default behaviour is prototypal behavior. (Prototypal inheritance)

Function also acts like object sometimes.

*/

function multipleBy5(num){
    return num*5;
}
multipleBy5.power = 2

console.log(multipleBy5(6))     //30
console.log(multipleBy5.power)  //2
console.log(multipleBy5.prototype)  //{}


function createUSER(username, score){
    this.username = username
    this.score = score
    //you can inject other functions in a function
}
createUSER.prototype.increment = function(){
    this.score++;
}

createUSER.prototype.printmyName = function(){
    console.log(`Score is ${this.score}`);
}

const ad = new createUSER("Darshan", 10)
const db =new createUSER("kiran", 20)

ad.printmyName()

/*
here's what happens behid thge scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new Javascript object.

A prototype is linked: The newly created object gets linked to the prototype property of the
constructor function. This means that is has access to properties and methods defined on the
constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments 
and this is bound to the newly created object. If no explicit return value is specified from the 
constructor, Javascript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, 
if it doesn't return a non-primitive value(objet, array, function, etc), the newly cretaed object is returned. 


*/

