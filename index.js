"use strict"
class user{
    constructor (username, password, email) {
        this.username = username;
        this.password = password;
        this.email = email;
    }

    static countUser() {
    console.log("countUser number and noe added to user");
    }
    register() {
console.log(this.username+ " is now registered")


    }

}

//let bob = new user('bob', 'bob@gmail.com', '12345')

// bob.register();

//user.countUser();

class Member extends user{
    constructor(username, password, email, memberPakage) {
        super(username, password, email);
        this.pakage = memberPakage;
    }
    getpakage(){
        console.log(this.username + " is subscribed to user" + this.pakage);
    }
}

let mike = new Member('mike', 'mike@gmail.com', '12345'); 

mike.getpakage();
mike.register();
