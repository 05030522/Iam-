// Chnage Label Position

// call when focus on input
function labelUp(input){
    input.parentElement.children[0].setAttribute("class", "change_label");
}

// call when focus out on input
function labelDown(input){
    if(input.value.length === 0){
        input.parentElement.children[0].classList.remove("change_label");
    }

}

// show & hide password
var eye_icon_signup = document.getElementById('eye_icon_signup');
var eye_icon_login = document.getElementById('eye_icon_login');
var sign_up_password = document.getElementById("signup_password");
var login_password = document.getElementById("login_password");
eye_icon_signup.addEventListener('click', ()=>{
    hideAndShowPass(eye_icon_signup, signup_password);
});
eye_icon_login.addEventListener('click', ()=>{
    hideAndShowPass(eye_icon_login, login_password);
});

const hideAndShowPass = (eye_icon, password) => {
    if(eye_icon.classList.contains("fa-eye-slash")){
        eye_icon.classList.remove('fa-eye-slash');
        eye_icon.classList.add('fa-eye');
        password.setAttribute('type', 'text');

    }
    else{
        eye_icon.classList.remove('fa-eye');
        eye_icon.classList.add('fa-eye-slash');
        password.setAttribute('type', 'password');
    }
};


// Sign Up & Sign In Toggle
let to_signup = document.getElementById('to_signup');
let to_login = document.getElementById('to_login');
to_signup.addEventListener('click', function(){
    let_change();
});
to_login.addEventListener('click', function(){
    let_change();
});
const let_change = () => {
    let login = document.getElementById('login');
    login.classList.toggle('login_form');
    let signup = document.getElementById('signup');
    signup.classList.toggle('signup_form');
}