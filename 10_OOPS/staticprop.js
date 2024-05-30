class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username:${this.username}`);
    }
    static createID(){
        return `123`
    }
}
const db = new User ("darshan")
// console.log(db.createID());     //createID is static method, doesnot has access to all.


class Teacher extends User{
    constructor(email, username){
        super(username)
        this.email = email;
    }
}

const laptop = new Teacher("Laptop", "emali@gmail.com")
laptop.logMe()
// console.log(laptop.logMe());