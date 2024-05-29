/* Object Literal */
const user={
    //object properties(variables)
    username:"Darshan",
    loginCount:2,
    signedIn: true,
    //object methods(functions)
    getUserDetails: function(){
        // console.log("Get User details from database")
        // console.log(`Username: ${username}`);
        // console.log(`Username: ${this.username}`);
        console.log(this);  
    }
}
// console.log(user.signedIn)
// // console.log(user.getUserDetails())
// console.log(this); //output: {} empty object(in node enviornment) / window object(in browser) 


// ------------------------------------
// const promiseOne = new Promise()
// const date = new Date()
/*
'new' keyword is a constructor function.
this will hep us to create multiple instances with one object literal. 
*/

function User(username, loginCount, signedIn){
    this.username = username;                //LHS = varibale, RHS = parameter(passed value)
    this.loginCount = loginCount;
    this.signedIn = signedIn;

    this.greets = function(){
        console.log(`welcome ${this.username}`)
    }
    return this;
}

// const userOne = User("Darshan",8, true)
// const userTwo = User("Kiran", 45, false)
//  console.log(userOne)    //User { username: 'Kiran', loginCount: 45, signedIn: false }
/*Here 'UserTwo' overwrites values with UserOne.
 Altough we are using two dierent varibales to store two object values, but first User data is vanished. 
 this will leads to a huge problem. whenever many programmers working on same instance, any one programmer 
 tries this type, then whole code will be lost. So to overcome with problem we use 'new' keyword.
 As mentioned earlier, 'new' is constructor function, which will creates new instance(new copy)every time we use.
 Whatever operations, modifications you do, it will not affect to others. only aftects to your instance.
 
 in the above code, we add 'new' keyword, then two instnces will creates.
 */
//------------------------


const userOne =new User("Darshan",8, true)
const userTwo =new User("Kiran", 45, false)
//  console.log(userOne)       //User { username: 'Darshan', loginCount: 8, signedIn: true }
//  console.log(userTwo)       //User { username: 'Kiran', loginCount: 45, signedIn: false }
 console.log(userOne.constructor)  //[Function: User]
/*-----------------
1. whenever we use 'new' keyword, an empty object {} will be created. It is called Instance.
2. Constructor function will be called because of 'new' keyword.
3. All the arguments are injected in the constructor function


//read about 'instanceof()' method
-----------------*/