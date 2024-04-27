/*
Premitive DataTypes: Number, BigInt, Boolean, String, null, undefined, Symbol  -- all are call by value
Non-Premitive DataTypes: Object, Array, functions --  all are call by reference

#Reference (Non-Premetive )



//JavaScript is a dynamically typed language. 
Because data type will automatically assigned at the time of compilation or code execution.






Primitive DataTypes:


1.Number: Represents both integer and floating-point numbers. Example: 5, 3.14.
 
2.String: Represents a sequence of characters enclosed in single or double quotes. Example: "Hello, world!".

3,Boolean: Represents a binary value, either true or false, often used for conditional logic.

4.Undefined: Represents a variable that has been declared but hasn't been assigned a value yet. Example: let x;.

5.Null:  standalone value it is represenataion of empty value it is special type and it is a object type. Example: let y = null; 

6.Symbol (ES6): it is mostly used used to find uniqnece.

7.BigInt (ES11): Represents large integers that cannot be represented by the Number type.

 Refence (Object Data Types):

1.Object: Represents a collection of key-value pairs (properties and methods). Example: { name: "John", age: 30 }.

2.Array: Represents a list-like collection of values, indexed by numbers (integer indices). Example: [1, 2, 3, 4].

3.Function: Represents a reusable block of code that can be invoked or called with arguments. Example: function add(x, y) { return x + y; }.

4.Date: Represents dates and times.

5.RegExp: Represents regular expressions for pattern matching.



lets talk about some Range of Primitive DataType:

    1.Number:
        Represents both integers and floating-point numbers.
        Typical Range: -9,007,199,254,740,992 (-2^53) to 9,007,199,254,740,992 (2^53) inclusive.
        Smallest Increment: 2^(-52).

    2.String:
        Represents a sequence of characters.
        No specific range limit, but practical limits depend on memory and system resources.

    3.Boolean:
        Represents true or false.
        Only two possible values: true and false.

    4.Undefined:
        Represents a variable that has been declared but hasn't been assigned a value.
        It has only one possible value: undefined.

    5.Null:
        Represents the intentional absence of any object or value.
        It has only one possible value: null.

    6.Symbol (ES6):
        Represents a unique and immutable value.
        No specific range limit.

    7.BigInt (ES11):
        Represents large integers that cannot be represented by the Number type.
        The range is practically unlimited and depends on available memory.



* Premitive Datatypes

                  Type                                   typeof

i)             Number                               number
ii)            String                                   string
iii)           Boolean                               boolean
iv)           Bigint                                   bigint
v)            Symbol                                symbol
vi)           Null                                      object
vii)          Undefined                           undefined


* Non-Premitive OR Referance OR Object datatype

                  Type                                   typeof

i)               Object                                object
ii)              Array                                  object
iii)             Function                            function(object)
*/






// Memory Management
/*
Two types of memory used in JS
a. Stack Memory
b. Heap Memory

Stack Memory is used in Premitive Datatypes.
Hap Memory is used in Non-premitive Datatypes.

Whenever we use stack memory, whenever we declare any variables, we get its copy.
whereas In Heap Meomry, variables declared, we get its original value/address, refernce.

*/

//Stack Memory Example:
let Name = "Darshan"
console.log(Name)   //Darshan
let anotherName = Name; // Copy of Name value is given to anotherName varible.
console.log(anotherName)    //Darshan
anotherName = "Badiger"     //value of anotherName vaible is changed from "Darshan" to "Badiger". but value of Name variable is "Darshan".
console.log(anotherName)        //Badiger
//All the varibales are stored in Stack, and its values are also stored in stack memory as a copy.



//Heap Memory Example
let upiData = {
    email:"darshan@google.com",
    upi: "darshan@ybl"
}

let upiData1 = upiData;
console.log(upiData)
console.log(upiData1)
/*
output or both variables is same
{
    email:"darshan@google.com",
    upi: "darshan@ybl"
}

here upiData, and upiData1 are varibles they are stored in stack.
but its values are object. SO these values are directly stored in Heap Memory.
and upiData, upiData1 both are pinting to one value itself (Not a copy of value).
whenever we change any value of the object, it is direclty updated(Original Vlaue is updated).
Below is example, how it will get updated in heap memoory, if we use object.

*/

upiData1.email = "darshan_badiger@microsoft.com"
console.log(upiData);
console.log(upiData1);
/*
output or both variables is updated email Id and upi ID:
 {
    email:"darshan_badiger@microsoft.com",
    upi: "darshan@ybl"
}
*/