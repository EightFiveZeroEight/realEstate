let users = [];

class User{
    constructor(username, password){
        this.username = username;
        this.password = password;
        this.loggedin = false;
    }

    loggin(username, password){
        if (username === username && password === password){
            this.loggedin = true;
        }
    }

    static register(username, password){
        let user = new User(username, password);
        users.push(user)
        console.log(users);
    }

    
}