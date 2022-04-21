// Variaveis
let btn = document.querySelector("#verSenha")
let btnConfirm = document.querySelector("#verConfirmsenha")

let nome = document.querySelector("#nome")
let labelNome = document.querySelector("#labelNome")
let validnome = false

let usuario = document.querySelector("#usuario")
let labelUsuario = document.querySelector("#labelUsuario")
let validusuario = false

let senha = document.querySelector("#senha")
let labelSenha = document.querySelector("#labelSenha")
let validsenha = false

let confirmsenha = document.querySelector("#confirmsenha")
let labelConfirmsenha = document.querySelector("#labelConfirmsenha")
let validconfirmsenha = false


// Função validar campos
nome.addEventListener('keyup', () => {
    if (nome.value.length <= 2) {
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = "*Insira no minimo 3 caracteres"
        nome.setAttribute('style', 'border-color: red')
        validnome = false
    } else {
        labelNome.setAttribute("style", "color: green")
        labelNome.innerHTML = ""
        nome.setAttribute('style', 'border-color: green')
        validnome = true
    }
})


usuario.addEventListener('keyup', () => {
    if (usuario.value.length <= 4) {
        labelUsuario.setAttribute('style', 'color: red')
        labelUsuario.innerHTML = "*Insira no minimo 3 caracteres"
        usuario.setAttribute('style', 'border-color: red')
        validusuario = false
    } else {
        labelUsuario.setAttribute("style", "color: green")
        labelUsuario.innerHTML = ""
        usuario.setAttribute('style', 'border-color: green')
        validusuario = true
    }
})


senha.addEventListener('keyup', () => {
    if (senha.value.length <= 5) {
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = "*Insira no minimo 3 caracteres"
        senha.setAttribute('style', 'border-color: red')
        validsenha = false
    } else {
        labelSenha.setAttribute("style", "color: green")
        labelSenha.innerHTML = ""
        senha.setAttribute('style', 'border-color: green')
        validsenha = true
    }
})


confirmsenha.addEventListener('keyup', () => {
    if (senha.value != confirmsenha.value) {
        labelConfirmsenha.setAttribute('style', 'color: red')
        labelConfirmsenha.innerHTML = "*As senhas não conferem"
        confirmsenha.setAttribute('style', 'border-color: red')
        validconfirmsenha = false
    } else {
        labelConfirmsenha.setAttribute("style", "color: green")
        labelConfirmsenha.innerHTML = ""
        confirmsenha.setAttribute('style', 'border-color: green')
        validconfirmsenha = true
    }
})




// Funcções
function cadastrar() {
    if (validnome && validusuario && validsenha && validconfirmsenha) {
        alert("jesus é rei")
    } else {
        alert("vazio")
        }

}


// Função mostrar senha
btn.addEventListener("click", () => {

    let inputsenha = document.querySelector("#senha")

    if (inputsenha.getAttribute("type") == "password") {
        inputsenha.setAttribute("type", "text")
    } else {
        inputsenha.setAttribute("type", "password")
    }

})


btnConfirm.addEventListener("click", () => {

    let inputsenha = document.querySelector("#confirmsenha")

    if (inputsenha.getAttribute("type") == "password") {
        inputsenha.setAttribute("type", "text")
    } else {
        inputsenha.setAttribute("type", "password")
    }

})

