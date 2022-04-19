let btn = document.querySelector ("#verSenha")

btn.addEventListener("click", ()=> {

    let inputsenha = document.querySelector("#senha")

    if(inputsenha.getAttribute("type") == "password"){
        inputsenha.setAttribute("type", "text")
        } else {
            inputsenha.setAttribute("type", "password")
            }

})


let btnConfirm = document.querySelector ("#verConfirmsenha")

btnConfirm.addEventListener("click", ()=> {

    let inputsenha = document.querySelector("#confirmsenha")

    if(inputsenha.getAttribute("type") == "password"){
        inputsenha.setAttribute("type", "text")
        } else {
            inputsenha.setAttribute("type", "password")
            }

})