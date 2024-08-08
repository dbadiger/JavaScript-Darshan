# JavaScript-Darshan
JavaScript Basic to Advance

#### Variables and Data Types
const = can't be re-assigned a value and can't be declared again  (block scope)
let = can be re-assigned a value but can't be declared again (block scope)
var = it can be re-assigned a value and it can also be declared again  (Global scope)

=> Never use var in your code instead of let because of block and functional scope issues.
 console.table([group of variables you want to show in tabular form])

 #### var, let, and const are all ways to declare variables in JavaScript, but they differ in scope, hoisting behavior, and mutability.

var: It's function-scoped and hoisted, meaning it can be accessed before declaration within its function. Variables declared with var can be re-declared and re-assigned. It's now generally replaced by let and const in modern JavaScript due to its less predictable behavior.

let: Introduced in ES6, let provides block-scoping, which confines it to the block (like loops or if-statements) where it's declared. It's not accessible before its declaration due to the Temporal Dead Zone. let allows re-assignment but not re-declaration in the same scope.

const: Also block-scoped and subject to the Temporal Dead Zone. It must be initialized upon declaration and cannot be re-assigned or re-declared. It's ideal for declaring constants whose values should remain unchanged throughout the execution.

In summary, prefer let and const for their block-level scoping, which enhances code readability and maintainability. 
Use let for variables that change and const for variables that should remain constant.


#### Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

### Explanation:
Primitive DataTypes:

1. Number: Represents both integer and floating-point numbers. Example: 5, 3.14.
 
2. String: Represents a sequence of characters enclosed in single or double quotes. Example: "Hello, world!".

3. Boolean: Represents a binary value, either true or false, often used for conditional logic.

4. Undefined: Represents a variable that has been declared but hasn't been assigned a value yet. Example: let x.

5. Null:  standalone value, it is a representation of an empty value it is a special type and it is an object type. Example: let y = null; 

6. Symbol (ES6): it is mostly used to find unique.

7. BigInt(ES11): Represents large integers that cannot be represented by the Number type.

 Reference (Object Data Types):

1. Object: Represents a collection of key-value pairs (properties and methods). Example: { name: "John", age: 30 }.

2. Array: Represents a list-like collection of values, indexed by numbers (integer indices). Example: [1, 2, 3, 4].

3. Function: Represents a reusable block of code that can be invoked or called with arguments. Example: function add(x, y) { return x + y; }.

4. Date: Represents dates and times.

5.RegExp: Represents regular expressions for pattern matching.


let's talk about some Range of Primitive DataType:
   1. Number:
        Represents both integers and floating-point numbers.
        Typical Range: -9,007,199,254,740,992 (-2^53) to 9,007,199,254,740,992 (2^53) inclusive.
        Smallest Increment: 2^(-52).
     
   2. String:
        Represents a sequence of characters.
        No specific range limit, but practical limits depend on memory and system resources.
        
   3. Boolean:
        Represents true or false.
        Only two possible values: true and false.
        
   4. Undefined:
        Represents a variable that has been declared but hasn't been assigned a value.
        It has only one possible value: undefined.
        
   5. Null:
        Represents the intentional absence of any object or value.
        It has only one possible value: null.
        
   6. Symbol (ES6):
        Represents a unique and immutable value.
        No specific range limit.
        
   7.BigInt (ES11):
        Represents large integers that cannot be represented by the Number type.
        The range is practically unlimited and depends on available memory.
