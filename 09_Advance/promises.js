// A promise is an 'object' representing the eventual completion o r failure of an asynchronous operation.
//Promise libraries like 'Q' and 'BlueBird'

//Promise Creation
const promiseOne = new Promise(function(resolve, reject){
    //Do an Asyn Tasks
    //DB Calls, cryptography, network calls
    setTimeout(function(){
        console.log("Async Task is Completed");
        resolve()
    },1000)
})
//Promise Consumption
//.then() is directly related to resolve (direct connection between resolve and .then)
promiseOne.then(function(){
    console.log("Promise consumed");
})          



//Without using additional variable
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task Two")
        resolve()
    },1000)
}).then(function(){
    console.log("Async Two Resolved")
})

//Pass Parameters
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"Darshan", email:"darshan@google.com"})     //You can pass obeject, array, function
    },1000)
})
promiseThree.then(function(user){
    console.log(user)
})



const promiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({username:"darshan", password:"1234"})
        }else{
            reject('ERROR: Something Wrong')
        }
    }, 1000);
})
promiseFour.then(function(user){
    console.log(user)
    return user.username;
}).then((username)=>{                   //chaining
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(()=>{
    console.log("Finally: The promise is either resolved or rejected")
})
//Finally will always executes. irrespective of either promise resolve or reject

const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(function(){
        let err = true;
        if(!err){
            resolve({username:"javscript", password:"123"})
        }else{
            reject("ERROR: Javascript went wrong")
        }
    }, 1000)
})
async function consumePromiseFive(){
   try{
    const reponse = await promiseFive
    console.log(reponse)
   }catch(err){
    console.log(err)
   }
}
consumePromiseFive()


/*
async function getAllUsers(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        // console.log(response)
        const allData =await response.json()
        console.log(allData)
    }catch(err){
        console.log("Error:",err)
    }
}
getAllUsers()
*/

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})
.finally(()=>{
    console.log("Finally Block Excuted")
})

/*The global 'fetch()' method starts the process of fetching a resource from the network, 
returning a promise which is fulfilled once the response is available.
The promise resolves to the 'response' object representing the response to your request. 

in fetch(), if you get HTTP error 404 error, where you will get it? in resolve or reject? 
Ans: It will be always a response. it is not an error in fetch().
you will get error in fetch() only when request itself is not happening.

A fetch() promise only rejects when the request fails,
for example, because of a badly-formed request URL or a network error.
A fetch() promise does not reject if the server responds with HTTP status codes 
that indicate errors (404, 504, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.
*/