
let user = "admin";
let password = "password";

function login(event) {
    event.preventDefault();
    const inputUser = document.getElementById('username').value;
    const inputPassword = document.getElementById('password').value;
    
    if (inputUser === user && inputPassword === password) {
        alert("Login successful!");
    } else {
        alert("Invalid username or password.");
    }
}

function register() {
    const inputUser = document.getElementById('username').value;
    const inputPassword = document.getElementById('password').value;
    
    if (inputUser === "") {
        alert("Please enter a username!");
        return;
    }
    
    if (inputPassword === "") {
        alert("Please enter a password!");
        return;
    }
    
    user = inputUser;
    password = inputPassword;
    
    alert("Account created successfully for: " + inputUser);
    document.getElementById('username').value = "";
    document.getElementById('password').value = "";
}