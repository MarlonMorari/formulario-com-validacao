
let nome = document.getElementById("nome")
let email = document.getElementById("email")
let telefone = document.getElementById("telefone")
let mensagem = document.getElementById("mensagem")

const form = document.getElementById("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    validarCampo(nome);
    validarCampo(email);
    validarCampo(telefone);
    validarCampo(mensagem);
})

function validarCampo(campo) {
    if (campo.value.trim() === "") {
        campo.classList.add("errado");
        campo.classList.remove("certo");
        campo.nextElementSibling.style.display = "block";
    } else {
        campo.classList.add("certo");
        campo.classList.remove("errado");
        campo.nextElementSibling.style.display = "none";
    }
}
