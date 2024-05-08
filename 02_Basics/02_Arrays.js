const ramayan = ["Valmiki","Ram", "Lakshman", "Seeta", "Hanuman", "Sugreev", "Ravan"]
const mahabharat = ["Vyasa","Krishna", "Bheeshma", "Karna", "Arjun", "Bheem", "Durypdhana"]

//ramayan.push(mahabharat)        //mahabharat array is inside the ramayan array. (Array within array)
// console.log(ramayan)
// console.log(ramayan[7])     //you will get full mahabharat array as 7th element of ramayan array
// console.log(ramayan[7][2])     //Bheeshma (Accessing Mahabharat array elemts from ramayana array)

// const all_heros = ramayan.concat(mahabharat)        //combines two or more array and stores in new array
// console.log(all_heros);

// const all_heros = [...ramayan, ...mahabharat]       //spread operator: used to spread the array 
// console.log(all_heros)

// const another_array = [1,2,3,4, [5,6,7], [8,9, [10,11]]]

// const new_array = another_array.flat(Infinity)      //The maximum recursion depth: Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// console.log(new_array)      //[1, 2, 3, 4, 5,6, 7, 8, 9, 10, 11]



console.log(Array.isArray("Darshan"))           //false
console.log(Array.from("Darshan"))           //['D', 'a', 'r','s', 'h', 'a','n']        //converts any elemnts into an array
console.log(Array.from(12354))           //[]        //converts any elemnts into an array
console.log(Array.from({name:"Darshan"}))           //[]        //interesting concept (Here you have to specify which values need to be converted to array.. either 'key' or 'value')

let s1 = 100,s2 = 200, s3 = 487, s4="helo"

console.log(Array.of(s1, s2, s3))           //[ 100, 200, 487 ]     //merges multiple varibales into one single array
console.log(Array.of(s1, s2, s3,s4))           //[ 100, 200, 487, 'helo' ]     //merges multiple varibales into one single array