const formulario = document.getElementById("cadastro");
const mensagem = document.getElementById("mensagem");
const carregando = document.getElementById("carregando");

let tentativas = 0;

function fecharPopup(botao) {

    botao.parentElement.style.display = "none";

    setTimeout(() => {

        const novoAviso = document.createElement("div");

        novoAviso.className = "popup";

        novoAviso.style.top =
            Math.floor(Math.random() * 500) + "px";

        novoAviso.style.left =
            Math.floor(Math.random() * 800) + "px";

        novoAviso.innerHTML = `
            <h3>AVISO IMPORTANTE</h3>
            <p>Você fechou um aviso. Isso foi registrado.</p>
            <button onclick="fecharPopup(this)">
                Fechar
            </button>
        `;

        document.body.appendChild(novoAviso);

    }, 1500);
}


function mostrarAviso() {

    mensagem.innerText =
        "⚠️ Você clicou no botão que dizia para não clicar.";

    setTimeout(() => {

        mensagem.innerText =
            "Parabéns! Essa informação não ajuda em absolutamente nada.";

    }, 2000);
}


function cancelar() {

    tentativas++;

    mensagem.innerText =
        "Você tentou avançar, mas clicou no botão errado.";

    const botao = document.querySelector(".cancelar");

    botao.style.position = "relative";

    botao.style.left =
        Math.floor(Math.random() * 200) - 100 + "px";

    botao.style.top =
        Math.floor(Math.random() * 100) - 50 + "px";

    if (tentativas >= 3) {

        mensagem.innerText =
            "Você já clicou " +
            tentativas +
            " vezes. Talvez o problema seja você.";

    }
}


formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome =
        document.getElementById("nome").value;

    const escola =
        document.getElementById("escola").value;

    const email =
        document.getElementById("email").value;

    const numero =
        document.getElementById("numero").value;

    const senha =
        document.getElementById("senha").value;

    const confirmar =
        document.getElementById("confirmar").value;

    const termos =
        document.getElementById("termos").checked;


    if (nome === "") {

        mensagem.innerText =
            "ERRO: Seu nome não foi encontrado. Tente lembrar quem você é.";

        return;
    }


    if (escola === "") {

        mensagem.innerText =
            "ERRO CRÍTICO: precisamos saber onde você estudou para confirmar que você estudou.";

        return;
    }


    if (email === "") {

        mensagem.innerText =
            "Tudo certo! Porém o e-mail está completamente vazio.";

        return;
    }


    if (numero === "") {

        mensagem.innerText =
            "Você esqueceu de escolher o número mais importante desta página.";

        return;
    }


    if (senha.length !== 8) {

    mensagem.innerText =
        "🔐 A senha precisa ter exatamente 8 caracteres.";

    return;
}

if (!/[A-Z]/.test(senha)) {

    mensagem.innerText =
        "❌ A senha precisa ter pelo menos uma letra MAIÚSCULA.";

    return;
}

if (!/[a-z]/.test(senha)) {

    mensagem.innerText =
        "❌ A senha precisa ter pelo menos uma letra minúscula.";

    return;
}

if (!/[0-9]/.test(senha)) {

    mensagem.innerText =
        "❌ A senha precisa ter pelo menos um número.";

    return;
}

if (!/[!@#$%^&*]/.test(senha)) {

    mensagem.innerText =
        "❌ A senha precisa ter um caractere especial.";

    return;
}

if (/^[0-9]/.test(senha)) {

    mensagem.innerText =
        "❌ A senha não pode começar com número.";

    return;
}

if (/[0-9]$/.test(senha)) {

    mensagem.innerText =
        "❌ A senha não pode terminar com número.";

    return;
}

// CONFIRMAÇÃO

if (senha !== confirmar) {

    mensagem.innerText =
        "❌ As senhas não são iguais.";

    return;
}

    if (!termos) {

        mensagem.innerText =
            "Você precisa concordar que leu algo que provavelmente não leu.";

        return;
    }


    carregando.style.display = "block";

    setTimeout(() => {

        carregando.innerHTML =
            "PROCESSANDO...<br>37%";

    }, 1000);


    setTimeout(() => {

        carregando.innerHTML =
            "PROCESSANDO...<br>87%";

    }, 2000);


    setTimeout(() => {

        carregando.style.display = "none";

        document.querySelector("main").style.display = "none";

        document.getElementById("final").style.display = "block";

    }, 3500);

});

function tentarConectar() {

    alert(
        "Tentando estabelecer conexão..."
    );

    setTimeout(() => {

        alert(
            "Não foi possível conectar. Verifique sua conexão com a internet."
        );

    }, 1500);
}


function continuarMesmoAssim() {

    alert(
        "Boa tentativa. Você encontrou uma opção que não deveria existir."
    );

    document.getElementById("paginaInternet").innerHTML = `

        <div class="erroInternet">

            <div class="iconeInternet">
                ⚠️
            </div>

            <h1>Não foi possível carregar a página</h1>

            <p>
                A conexão com o servidor foi perdida.
            </p>

            <p>
                Tente novamente mais tarde.
            </p>

            <button onclick="location.reload()">
                Voltar
            </button>

        </div>

    `;
}