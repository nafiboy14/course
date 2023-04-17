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
let loadingProses = document.getElementById('loadingProses')
function Login() {
 let emailcek =  localStorage.getItem("emailvalue")
   let pascek = localStorage.getItem("passwordvalue")
    if (emailLogin.value!=emailcek) {

        LoginButton.style.display="none"
        loadingProses .style.display="flex"
        setTimeout (load,4000);
        function load(){
        
            loadingProses .style.display="none"
            LoginButton.style.display="flex"
            load.break
            focus;
           return false;
        }
  
   
        
    }
    if (passwordLogin.value!=pascek) {
        LoginButton.style.display="none"
        loadingProses .style.display="flex"
        setTimeout (load,4000);
        function load(){
            alert('login tak sukses')
            loadingProses .style.display="none"
            LoginButton.style.display="flex"
            load.break
            focus;
           return false;
        }
    }
    else{
        setTimeout (load,2000);
        function load(){
            LoginButton.style.display="none"
            loadingProses .style.display="flex"
        }
        alert('login sukses')
    }
}
