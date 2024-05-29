// let myName = "darshan      "
// let myChar = "db_vlogs      "
// console.log(myName.length)
// console.log(myName.trim().length)
// console.log(myChar.trim().length)
// console.log(myChartruelength) //Write method which gives exct lenght of string


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor:'hammer',
    spiderman:'sling',

    getspiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.darshan = function(){
    console.log(`Darshan is present in all objects`);
}

Array.prototype.ArrayDarshan = function(){
    console.log(`Array function access to myHero Array function`);
}

// heroPower.darshan();
// myHeros.darshan()
myHeros.ArrayDarshan()
// heroPower.ArrayDarshan()        //Error

const User={
    username:"darshan", email:"darshan@gmail.com"
}

const teacher = {
    makeVideo:true
}
const TeachAss = {
    isAvailable: false
}
teacher.__proto__ = User;       //protoypal inheritance (old method)


const TASupport = {
    makeAssignment:'JS Assignment',
    fullTime:true,
    __proto__: TeachAss
}


//Modern syntax
Object.setPrototypeOf(TASupport, teacher)

let anotherUser  = "DarshanBadiger    "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is:${this.trim().length}`);
}

anotherUser.trueLength();
"darshan   ".trueLength();
"greentea".trueLength()
