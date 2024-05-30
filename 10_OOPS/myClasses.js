class User {
    constructor(username, email, password){
        this.username = username;
        this.email= email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    convertUppercase(){
        return `${this.username.toUpperCase()}`
    }
}

const myuser = new User("darshan", "db@fb.com", "123")
console.log(myuser.convertUppercase());
console.log(myuser.encryptPassword())


//Behind the scene
function User1(username, email, password){
    this.username = username;
    this.email= email;
    this.password = password;
}

User1.prototype.encryptPassword = function(){
    return `${this.password}asiubcas`
}

User1.prototype.convertLowercase = function(){
    return `${this.username.toLowerCase()}`
}
const myuser1 = new User1("KIRAN", "db@fb.com", "123")
console.log(myuser1.convertLowercase());
console.log(myuser1.encryptPassword())