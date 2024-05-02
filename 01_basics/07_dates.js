/*
JavaScript Date objects represent a single moment in time in a platform-independent format. 
Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).
*/

const myDate = new Date()
// console.log(typeof myDate)              //object
// console.log(myDate.toString())              //Thu May 02 2024 06:40:20 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString())          //Thu May 02 2024
// console.log(myDate.toISOString())           //2024-05-02T06:40:20.533Z
// console.log(myDate.toLocaleString())        //5/2/2024, 6:40:20 AM
// console.log(myDate.toLocaleDateString())   // 5/2/2024
// console.log(myDate.toTimeString())   // 06:41:41 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toUTCString())   // Thu, 02 May 2024 06:42:04 GMT
// console.log(myDate.toJSON())        // 2024-05-02T06:42:34.141Z

// console.log(myDate.toLocaleTimeString()) // Output : 7:45:31 AM


// let mycreatedDate = new Date(2022, 7, 2)        //Year, Month, Date. (here moth starts with 0)
// console.log(mycreatedDate.toDateString())      // Tue Aug 02 2022

// let mycreatedDate1 = new Date(2022, 7, 2,3,25)        //Year, Month, Date. (here moth starts with 0)
// console.log(mycreatedDate1.toLocaleString())      // 8/2/2022, 3:25:00 AM

 let mycreatedDate2 = new Date("2024-05-02")        //Year, Month, Date. (here moth starts with 0)
// console.log(mycreatedDate2.toLocaleString())      // 5/2/2024, 12:00:00 AM


let myTimeStamp =Date.now()
// console.log(myTimeStamp) 
// console.log(mycreatedDate2.getTime())


// console.log(Date.now()/1000)
// console.log(Math.round(Date.now()/1000))

let newDate = new Date()
// console.log(newDate.getDate())
// console.log(newDate.getDay())
// console.log(newDate.getFullYear())
// console.log(newDate.getMonth()+1)   //because month starts with 0


// console.log(`Day is ${newDate.getDay()} and month is ${newDate.getMonth()+1} and year is ${newDate.getFullYear}`)


console.log(newDate.toLocaleString('default', {
    weekday:"long",
   
}))