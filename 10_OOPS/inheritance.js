class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username:${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password
    }

    addCourses(){
        console.log(`New course is added by ${this.username}`);
    }
}

const myTeacher = new Teacher("darshan", "db@kle.com", "123")
myTeacher.addCourses();
myTeacher.logMe();      //Inherites from User Object

const myUser = new User("Hello")
myUser.logMe()
// myUser.addCourses()      //doesnot have access to addCourse()


// console.log(myUser === Teacher);
// console.log(User === myUser);
// console.log(myTeacher === Teacher);


console.log(myTeacher instanceof Teacher);      //True
console.log(myUser instanceof Teacher);         //False
console.log(myUser instanceof User);      //True
console.log(myTeacher instanceof User);         //true

