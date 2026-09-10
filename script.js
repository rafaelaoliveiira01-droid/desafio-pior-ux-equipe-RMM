/* =================================
   POPUPS DA PÁGINA PRINCIPAL
================================= */


function fecharPopup(botao) {

    botao.parentElement.style.display = "none";


    setTimeout(function() {

        const aviso =
            document.createElement("div");


        aviso.className = "popup";


        aviso.style.top =
            Math.floor(Math.random() * 500) + "px";


        aviso.style.left =
            Math.floor(Math.random() * 900) + "px";


        aviso.innerHTML = `

            <h3>
                ⚠️ NOVO AVISO
            </h3>

            <p>
                Você fechou um aviso.
                Portanto, aqui está outro.
            </p>

            <button
                onclick="fecharPopup(this)">

                Fechar

            </button>

        `;


        document.body.appendChild(aviso);


    }, 1200);

}



/* =================================
   BOTÃO ERRADO
================================= */


function botaoErrado() {

    const mensagem =
        document.getElementById("mensagem");


    mensagem.innerText =
        "🤡 Você clicou em AVANÇAR, mas esse botão não faz isso.";


    const botao =
        document.querySelector(".cancelar");


    botao.style.position = "relative";


    botao.style.left =
        Math.floor(Math.random() * 200) - 100 + "px";


    botao.style.top =
        Math.floor(Math.random() * 100) - 50 + "px";

}



/* =================================
   AVISO INÚTIL
================================= */


function mostrarAviso() {

    const mensagem =
        document.getElementById("mensagem");


    mensagem.innerText =
        "⚠️ AVISO: você clicou em um botão que não deveria clicar.";


    setTimeout(function() {

        mensagem.innerText =
            "Este aviso não possui nenhuma utilidade.";

    }, 2000);

}



/* =================================
   IR PARA A PÁGINA DE ZOEIRA
================================= */


function irZoera() {

    window.location.href =
        "zoera.html";

}



/* =================================
   IR PARA SENHA
================================= */


function irSenha() {

    const nome =
        document.getElementById("nome").value;


    const escola =
        document.getElementById("escola").value;


    const email =
        document.getElementById("email").value;


    const numero =
        document.getElementById("numero").value;


    const termos =
        document.getElementById("termos").checked;


    const mensagem =
        document.getElementById("mensagem");


    if (nome === "") {

        mensagem.innerText =
            "❌ Você esqueceu seu nome.";

        return;

    }


    if (escola === "") {

        mensagem.innerText =
            "❌ Você esqueceu sua primeira escola.";

        return;

    }


    if (email === "") {

        mensagem.innerText =
            "❌ Cadê o e-mail?";

        return;

    }


    if (numero === "") {

        mensagem.innerText =
            "❌ Escolha seu número favorito.";

        return;

    }


    if (!termos) {

        mensagem.innerText =
            "☑️ Você precisa concordar com os termos.";

        return;

    }


    sessionStorage.setItem(
        "nome",
        nome
    );


    window.location.href =
        "senha.html";

}



/* =================================
   VERIFICAÇÃO DA SENHA
================================= */


function verificarSenha() {

    const senha =
        document.getElementById("senha").value;


    const confirmar =
        document.getElementById("confirmar").value;


    const mensagem =
        document.getElementById("senhaMensagem");



    /*
       REGRA 1
       EXATAMENTE 8 CARACTERES
    */

    if (senha.length !== 8) {

        mensagem.innerText =
            "❌ A senha precisa ter EXATAMENTE 8 caracteres.";

        return;

    }



    /*
       REGRA 2
       MAIÚSCULA
    */

    if (!/[A-Z]/.test(senha)) {

        mensagem.innerText =
            "❌ Falta uma letra MAIÚSCULA.";

        return;

    }



    /*
       REGRA 3
       MINÚSCULA
    */

    if (!/[a-z]/.test(senha)) {

        mensagem.innerText =
            "❌ Falta uma letra minúscula.";

        return;

    }



    /*
       REGRA 4
       NÚMERO
    */

    if (!/[0-9]/.test(senha)) {

        mensagem.innerText =
            "❌ A senha precisa ter um número.";

        return;

    }



    /*
       REGRA 5
       CARACTERE ESPECIAL
    */

    if (!/[!@#$%^&*]/.test(senha)) {

        mensagem.innerText =
            "❌ Cadê o caractere especial?";

        return;

    }



    /*
       REGRA 6
       NÃO COMEÇAR COM NÚMERO
    */

    if (/^[0-9]/.test(senha)) {

        mensagem.innerText =
            "❌ A senha não pode começar com número.";

        return;

    }



    /*
       REGRA 7
       NÃO TERMINAR COM NÚMERO
    */

    if (/[0-9]$/.test(senha)) {

        mensagem.innerText =
            "❌ A senha não pode terminar com número.";

        return;

    }



    /*
       CONFIRMAÇÃO
    */

    if (senha !== confirmar) {

        mensagem.innerText =
            "❌ As duas senhas não são iguais.";

        return;

    }



    /*
       SENHA CORRETA
    */

    mensagem.style.background =
        "green";


    mensagem.innerText =
        "✅ SENHA ACEITA! NÃO ACREDITO.";



    setTimeout(function() {

        mensagem.innerText =
            "🔄 Verificando servidor...";

    }, 1000);



    setTimeout(function() {

        mensagem.innerText =
            "🔐 Autenticando usuário...";

    }, 2200);



    setTimeout(function() {

        mensagem.innerText =
            "⚠️ Problema inesperado...";

    }, 3200);



    setTimeout(function() {

        window.location.href =
            "internet.html";

    }, 4500);

}