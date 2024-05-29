/*
The call() method is a predefined JavaScript method.

It can be used to invoke (call) a method with an owner object as an argument (parameter).

With call(), an object can use a method belonging to another object.

*/


function SetUsername(username){
    this.username = username;
    console.log("Called")
}

function createUser(username, email, password){
    // SetUsername(username)   //method is called, but it is not holding the username. Just reference is given. execution context is created, adter execution, its context will be removed along with its varibles, but we are not sent any values. So in the output username is not printing.
   // SetUsername.call(username)  //call method is an object, which substitutes another objectfor current object. Here it holds the reference of that object. But usernames are disappereing.
    SetUsername.call(this, username)    //when we use 'this', it is optional parameter when using call method. But when we use it, the context of current object/unction is passed to calling function/method, like here, Createuser function's context is passed to Setuser function, so that Setuser function will get access to the varibales (and its values) which are present in Createuser function.
    this.email=email
    this.password=password
}

const fbuser =new createUser("Darshan", "db@fb.com", "1230")
console.log(fbuser)