//Singleton
//Object.create()



//Object Literals

const mySym = Symbol("key1")
const JSUser = {
    name:"Darshan",
    "full name":"Darshan Badiger",
   // mySym:"mykey1",
    [mySym]:"mykey1",
    age:20,
    location:"Hydarabad",
    email:"Darshan@google.com"
}

// console.log( JSUser.name)
// console.log( JSUser["email"])

// //we can't access "Full Name" using . object like JSUser.full name --> not possible to access. so we use [] to access the value
// console.log( JSUser["full name"])

//  console.log(typeof JSUser[mySym])        //string
// console.log( JSUser[mySym])        //mykey1

// JSUser.email = "Darshan@microsoft.com"
// console.log(JSUser)



// Object.freeze(JSUser)
// JSUser.email = "Darshan@adidas.com"
// console.log(JSUser)

JSUser.greetings = function(){
    console.log(`HEllo JS ${this["full name"]}`)
    console.log(`Your Email is: ${this.email}`)
}

console.log(JSUser.greetings)     //[Function (anonymous)]
console.log(JSUser.greetings())     //HEllo JS   undefined