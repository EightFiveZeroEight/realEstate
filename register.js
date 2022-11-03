function register(){
    User.register(username.value, password.value);
    // to call this without creating an instance of the class first I had to go into the class and make that function 'static' by adding the 'static' keyword in fronto of it. 
}