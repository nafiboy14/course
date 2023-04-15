let menu = document.getElementById('menu')
let nav = document.getElementById('nav')
let toggle = document.getElementById('toggle')

toggle.addEventListener('click', function () {
    menu.classList.toggle('menuactive')

})

let name = document.getElementById('nameRegister')
let email = document.getElementById('emailRegister')
let password = document.getElementById('passwordRegister')
let register = document.getElementById('register')
let warning = document.getElementById('warning')
let warningErr = document.getElementById('warningErr')
let loginPage = "/loginpage/login.html"

function submit() {

    localStorage.setItem("emailvalue",emailRegister.value)
    localStorage.setItem("passwordvalue",passwordRegister.value)
 
    if (name.value == "") {
       warning.innerHTML="plis input your name"
       warning.style.color="red";
       focus;
        return false;

    }
    if (email.value == "") {
        warning.innerHTML="plis input your email"
        warning.style.color="red";
        focus;
        return false;

    }

    
    if (password.value == "") {
        warning.innerHTML="plis input your password"
        warning.style.color="red";
        focus;
        return false;


    }
    if (password.value.length <= 8) {
        warning.innerHTML="minimal password is 8 carakter"
        warning.style.color="red";
        focus;
        return false;

    }
    else {
        window.location = loginPage;
        alert(pas)

       
    }
}



let nameLOgin = document.getElementById('nameLogin')
let emailLogin = document.getElementById('emailLOgin')
let passwordLogin = document.getElementById('passwordLogin')
let LoginButton = document.getElementById('LoginButton')

function Login() {
 let emailcek =  localStorage.getItem("emailvalue")
   let pascek = localStorage.getItem("passwordvalue")
    if (emailLogin.value!=emailcek) {
        alert('login tidak sukses')
        console.log(emailLogin)
        console.log(passwordLogin)
        focus;
       return false;
    }
    if (passwordLogin.value!=pascek) {
        alert('login tak sukses')

        focus;
        return false;
    }
    else{
        alert('login sukses')
    }
}
