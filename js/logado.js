// Função exibir nome
let userLogado = JSON.parse(localStorage.getItem("userLogado"))
let logado = document.querySelector("#Logado")

logado.innerHTML = `Bem vindo (a)  ${userLogado.nome}`


// Em caso de tentatifa de login diretamente pelo link, exibe o alerta
if(localStorage.getItem("token") == null){
    alert("voce precisa estar logado para acessar essa página")
    window.location.href = "index.html"
}

// botção log out
function sair() {
    localStorage.removeItem("token")
    localStorage.removeItem("userLogado")
    window.location.href = "index.html"
    
}