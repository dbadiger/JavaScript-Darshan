# String in JavaScript

#### Ways to write string 

    let s1 = "String 1"
    let s2 = 'String 2'
    
    // Using backticks. String interpolation (We can write multiple lines using backticks. we can inject variables easily.
    
    //Use String Interpolation for concatenating.
        let s3 = `String 3`       
    
    let s4 = 
    `Hi this is line 1
    Here I'm injecting variable ${var_name}
    This is the third line, I'm passing one more variable ${s2}`


#### Old way:
    Let a = name
    Let b = age
    let a = prompt("What is your name");
            let b = prompt("What is your age");
            document.write("My name is " + a + "and i am " + b + "years old")


#### New way:
    let a = 
    prompt("What is your name");
    let b = prompt("What is your age");
    document.write(``Hello my name is ${a} and I'm ${b} years old `);

We use ` `` to write a complete string and will use ${} to inject variables in it.
### String Methods

    let s = new String("Darshan"); // here string s is an object
    
    
    console.log(s.toLowerCase());  // in lowercase
    console.log(s.toUpperCase());  // in uppercase
    console.log(s.indexOf('a'));  // return index from beginning
    console.log(s.lastIndexOf('a'));  // return index from ending position
    console.log(s.length);
    
    console.log(s.slice(0,4));  //print string from 0th index to 3rd index as ending index is excluded
    
    console.log(s.substring(0,4)) // Similar to slice but can't take a negative value as an argument 
    
    
    console.log(s.charAt(1)); //print char present on given index value
    
    console.log(s.includes("Dars")); //If given input present then return true otherwise false
    console.log(s.includes("Kira")); // return false
    console.log(s.endsWith("an")); //return true if string is found from last
    
    let url = "www.userid?20.com"
    console.log(url.replace('20', '-')); //replace 20 with underscore
    
    let word = "Chhaya is Shanaya and she is a baby girl";
    console.log(word.split(" ")); // return all the words from given string in the form of array
    
    
    let name = "Darshan"
    console.log(name.concat(" Badiger")); //return String after appending given string
    
    let remSpace = "  good bye guys  "
    console.log(remSpace.trim()); // return string after removing unwanted space from beginning and ending but not from mid
