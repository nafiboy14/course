let menu = document.getElementById('menu')
let nav = document.getElementById('nav')
let toggle = document.getElementById('toggle')

toggle.addEventListener('click', function () {
    menu.classList.toggle('menuactive')

})

let name = document.getElementById('name')
let email = document.getElementById('email')
let password = document.getElementById('password')
let register = document.getElementById('register')
let loginPage= "/loginpage/login.html"
function submit(){
    localStorage.setItem("nameUser", name.value)
    localStorage.setItem("emailUser", email.value)
    localStorage.setItem("passwordUser", password.value)

    if(name.value==""){
        console.log('plis input your name')
        
    }
    if(email.value=="" && ! email){
        console.log('plis input your email')

    }
    if(name.value==""){
        console.log('plis input your name')

    }
    if(password.value==""){
        console.log('plis input your password')

    }
    if(password.value.length <= 8){
        console.log('minimal passsword 8 carakter')

    }
    else{
        window.location=loginPage;
    }
}