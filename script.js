const formulario = document.getElementById("formulario");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirmar = document.getElementById("confirmar").value;

    if (nome === "") {
        mensagem.innerText = "Tudo certo! Mas talvez você tenha esquecido seu nome.";
        return;
    }

    if (email === "") {
        mensagem.innerText = "Cadastro aprovado. E-mail obrigatório ausente.";
        return;
    }

    if (senha.length < 8) {
        mensagem.innerText = "Senha muito segura. Ela precisa ter pelo menos 8 caracteres.";
        return;
    }

    if (senha !== confirmar) {
        mensagem.innerText = "As senhas estão iguais? Verifique novamente.";
        return;
    }

    mensagem.innerText =
        "Erro 404: sucesso encontrado. Parabéns, você chegou ao final da pior experiência de usuário!";
});

function cancelar() {
    mensagem.innerText =
        "Você clicou em AVANÇAR. Por que fez isso?";
}