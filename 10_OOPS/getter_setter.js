//Maximum call stack exceeded. Eplain this?
class user{
    constructor(email, password){
        this.email = email
        this.password = password
    }
    /*
    get password(){
        this.password = this.password
    }
    set password(value){
        this.password = value

    }
    Here we are used same varibale name, there is confict between constructor and getter, setters.
    Both are getting confused, and starts executing continuously, and at the end, call stack will be become full.
    and throws an error: Maximum call Sa=tack exceeded.
    */

    //To overcome with that error, we need to chaged the varible name in getter and setter methods.

    get password(){
        return this._password.toUpperCase()  //varibale name change (end user will get encrypted value)
    }
    set password(value){
        this._password = value.toUpperCase()    //varibale name change (encrypted value  will be stored in DB)
    }


    /**
     iF YOU WANT TO SEND AN ENCRYPTED PASSWORD TO ANYONE,THEN USE GET METHOD.
     
     get password(){
        return `${this.password}6546ifdcbj`
     }
     IF YOU WANT TO STRORE PASSWORD IN DATABASE, USE SET METHOD.
     */

    /*
    If you want to store the original password, then keep it as value.
    set password(value){
        this._password = value
    }
    Here password is stored as it is in the databse.
    -------------
        set password(value){
        this._password = value.toUpperCase()        //encrypted password is stored
        this._password = value.toUpperCase()        //encrypted password is stored
    }
    --------------------------------------------------------------------------------
    */
   get email(){
    return this._email.toUpperCase();
   }
   set email(value){
    this._email=value.toUpperCase();
   }

}

const myUser = new user('d@helo.com', 'bca')
console.log(myUser.password)