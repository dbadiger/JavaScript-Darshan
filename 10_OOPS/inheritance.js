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

