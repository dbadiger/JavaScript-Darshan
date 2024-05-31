const User={
    _email:'anc@abc.com',
    _password:'abcdr1',

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value;
    }
}

//Factory Function
const one = Object.create(User)
console.log(one._email);    //anc@abc.com
console.log(one.email);     //ANC@ABC.COM