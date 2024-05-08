const myObject = new Object()       //This is singleton Object (Constructor)
// const myObject = {}              //This is non-singleton Object

myObject.id= "123sadas"
myObject.name="Darshan"
myObject.isLoggedIn = false

// console.log(myObject)       //{}


const regularObj = {
    email:"darshan@google.com",
    fullname:{
        userfullname:{
            firstname:"Darshan",
            lastnaem:"Badiger"
        }
    }
}

// console.log(regularObj.fullname.userfullname.firstname)

//merge two-three objects

//Method 1
const obj1 = {1:"A", 2:"B"}
const obj2 = {3:"C", 4:"D"}
const obj4 = {5:"E", 6:"F"}
// const obj3 = {obj1, obj2}   //Output: Object inside object (same as array problem)
// console.log(obj3)       //{ obj1: { '1': 'A', '2': 'B' }, obj2: { '3': 'C', '4': 'D' } }


//Method 2:Using assign() method 
// const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({}, obj1, obj2)
// const obj5 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj3)               //{ '1': 'A', '2': 'B', '3': 'C', '4': 'D' }
// console.log(obj5)               //{ '1': 'A', '2': 'B', '3': 'C', '4': 'D', '5': 'E', '6': 'F' }


//Method 3: Using Spread Operator
// const obj6 = {...obj1, ...obj2, ...obj4}        //Using Spread Operator
// console.log(obj6)



const users = [
    {id:1,email:"d@gmail.com"},
    {id:2,email:"a@gmail.com"},
    {id:3,email:"cd@gmail.com"},
]
// console.log(users[1].email) //a@gmail.com




console.log(myObject)   //{ id: '123sadas', name: 'Darshan', isLoggedIn: false }
// console.log(Object.keys(myObject))      //[ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(myObject))      //[ '123sadas', 'Darshan', false ]
// console.log(Object.values(myObject))      //[ '123sadas', 'Darshan', false ]
// console.log(Object.entries(myObject))      //[[ 'id', '123sadas' ],[ 'name', 'Darshan' ],[ 'isLoggedIn', false ]]


console.log(myObject.hasOwnProperty('isLoggedIn'))      //true
console.log(myObject.hasOwnProperty('isLoggedInDays'))      //false