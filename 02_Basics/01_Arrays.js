//Array size is resizable and can contain a mix of different dataypes. 
//Javascript Arrays are zero indexed. (The first element of array is at 0 index.)
//JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies)

const arr = ["Ram", "Hanuman", "Krishna", "Shiva"]
const arr1 = new Array(10,20,50,11,32)

// arr.push(10)
// arr.push(12)    //inserts new element to last postion 
// arr.pop()       //removes last element of an array

// arr.unshift(23)     //inserts new element at the beginning
// arr.shift()         //removes first element
// arr.shift()         //removes first element
// console.log(arr)

// console.log(arr.includes("Ram"))    //True
// console.log(arr.includes(20))       //False
// console.log(arr.indexOf(20))       //-1 (Element is not present in the array so it gives -1)
// console.log(arr.indexOf("Krishna"))       //2

// const newArr = arr.join()
// console.log(newArr)         //Ram,Hanuman,Krishna,Shiva (without array symbol[])
// console.log(typeof newArr)  //String


//slice: Last range is not included, original array will not modified
//splice: Last range is included and original array is updated.

const myArr = [10,20,30,40,50]
const myAr1 = myArr.slice(1,4)      
console.log(myAr1)                  //[ 20, 30, 40 ]        In slice, last element is not icluded. and it will not manipulate the original array.
console.log("A ", myArr)            //A  [ 10, 20, 30, 40, 50 ]

const myA2 = myArr.splice(2,4)      //[ 30, 40, 50 ]        //In Splice last range is included. And the elements are deleted from the original Array in Splice.
console.log(myA2)           
console.log("B ", myArr)            //B  [ 10, 20 ]     //After Splice, final updated array. (Array is modified, when we use splice operation.)