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