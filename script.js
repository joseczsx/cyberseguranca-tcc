
// ========================================
// VARIÁVEIS DO PAINEL
// ========================================

var dicasConsultadas = 0;
var perguntasRespondidas = 0;
var acertos = 0;

// ========================================
// CONSULTAR SITUAÇÃO
// ========================================

function consultarSituacao() {

    var situacao = document.getElementById("situacao").value;
    var resultado = document.getElementById("resultado");
    var msg = "";

    if (situacao == "") {
        msg = "Selecione uma situação para receber uma orientação.";
    }
    else if (situacao == "link") {
        msg = "Não clique imediatamente. Verifique o endereço do site e confirme se o remetente é confiável.";
    }
    else if (situacao == "email") {
        msg = "Evite clicar em links ou baixar arquivos de e-mails desconhecidos. Confira o endereço do remetente.";
    }
    else if (situacao == "senha") {
        msg = "Nunca informe sua senha por mensagem, e-mail ou telefone. Mantenha seus dados protegidos.";
    }
    else if (situacao == "promocao") {
        msg = "Desconfie de ofertas muito abaixo do preço normal. Pesquise a empresa e confira o endereço do site.";
    }
    else if (situacao == "perfil") {
        msg = "Tenha cuidado com perfis desconhecidos. Verifique informações e evite compartilhar dados pessoais.";
    }
    else if (situacao == "arquivo") {
        msg = "Não abra arquivos desconhecidos. Confirme quem enviou antes de abrir.";
    }

    resultado.querySelector("p").textContent = msg;

    if (situacao != "") {
        dicasConsultadas++;

        document.getElementById("dicas").textContent =
            dicasConsultadas;
    }
}

// ========================================
// PERGUNTAS DO QUIZ - 25 QUESTÕES
// ========================================

var perguntas = [

    {
        pergunta: "1. O que é phishing?",
        opcoes: ["Um jogo", "Um golpe para roubar dados", "Um aplicativo", "Uma rede social"],
        correta: 1
    },

    {
        pergunta: "2. Como proteger sua senha?",
        opcoes: ["Compartilhar", "Usar 123456", "Criar uma senha forte", "Publicar na internet"],
        correta: 2
    },

    {
        pergunta: "3. O que fazer com um link suspeito?",
        opcoes: ["Clicar", "Compartilhar", "Verificar a origem", "Informar sua senha"],
        correta: 2
    },

    {
        pergunta: "4. O que é uma fake news?",
        opcoes: ["Notícia falsa", "Notícia oficial", "Livro digital", "Mensagem privada"],
        correta: 0
    },

    {
        pergunta: "5. O que significa HTTPS?",
        opcoes: ["Um jogo", "Conexão protegida por criptografia", "Uma senha", "Um vírus"],
        correta: 1
    },

    {
        pergunta: "6. O que é um vírus digital?",
        opcoes: ["Um programa malicioso", "Um navegador", "Um site", "Uma senha"],
        correta: 0
    },

    {
        pergunta: "7. O que fazer ao receber um e-mail desconhecido?",
        opcoes: ["Abrir tudo", "Verificar o remetente", "Enviar senha", "Clicar nos links"],
        correta: 1
    },

    {
        pergunta: "8. O que é autenticação em duas etapas?",
        opcoes: ["Duas contas", "Uma proteção extra de acesso", "Duas senhas iguais", "Um aplicativo de jogos"],
        correta: 1
    },

    {
        pergunta: "9. Qual destes é um dado pessoal?",
        opcoes: ["CPF", "Nome de um planeta", "Cor azul", "Número aleatório"],
        correta: 0
    },

    {
        pergunta: "10. O que fazer com uma promoção suspeita?",
        opcoes: ["Comprar rápido", "Enviar dados", "Conferir o site oficial", "Compartilhar"],
        correta: 2
    },

    {
        pergunta: "11. O que é cyberbullying?",
        opcoes: ["Jogo online", "Intimidação e agressão no ambiente digital", "Pesquisa escolar", "Aplicativo"],
        correta: 1
    },

    {
        pergunta: "12. Por que atualizar aplicativos?",
        opcoes: ["Para ocupar espaço", "Para melhorar segurança e funcionamento", "Para apagar contas", "Para perder dados"],
        correta: 1
    },

    {
        pergunta: "13. O que é uma senha forte?",
        opcoes: ["123456", "Data de nascimento", "Combinação difícil de adivinhar", "Nome próprio"],
        correta: 2
    },

    {
        pergunta: "14. O que fazer em computadores públicos?",
        opcoes: ["Salvar senhas", "Deixar a conta aberta", "Sair da conta ao terminar", "Compartilhar dados"],
        correta: 2
    },

    {
        pergunta: "15. O que é malware?",
        opcoes: ["Programa malicioso", "Rede social", "Site educativo", "Jogo"],
        correta: 0
    },

    {
        pergunta: "16. Como identificar uma notícia falsa?",
        opcoes: ["Acreditar no título", "Verificar fontes confiáveis", "Compartilhar", "Ignorar a fonte"],
        correta: 1
    },

    {
        pergunta: "17. O que é roubo de identidade digital?",
        opcoes: ["Criar um perfil", "Usar dados de outra pessoa sem autorização", "Trocar uma senha", "Baixar um aplicativo"],
        correta: 1
    },

    {
        pergunta: "18. O que fazer ao perder acesso à conta?",
        opcoes: ["Ignorar", "Procurar a recuperação oficial da conta", "Divulgar a senha", "Publicar seus dados"],
        correta: 1
    },

    {
        pergunta: "19. Qual é o risco de baixar arquivos desconhecidos?",
        opcoes: ["Melhorar a internet", "Instalar programas maliciosos", "Aumentar a bateria", "Proteger a conta"],
        correta: 1
    },

    {
        pergunta: "20. O que é privacidade digital?",
        opcoes: ["Proteção de informações pessoais", "Compartilhar tudo", "Publicar senhas", "Usar qualquer site"],
        correta: 0
    },

    {
        pergunta: "21. O que fazer com um perfil falso?",
        opcoes: ["Enviar dados", "Denunciar e bloquear", "Compartilhar informações", "Confiar imediatamente"],
        correta: 1
    },

    {
        pergunta: "22. Para que serve um antivírus?",
        opcoes: ["Criar sites", "Ajudar a detectar ameaças digitais", "Aumentar seguidores", "Criar senhas"],
        correta: 1
    },

    {
        pergunta: "23. O que é engenharia social?",
        opcoes: ["Construção de prédios", "Manipulação de pessoas para obter informações", "Criação de jogos", "Programação de sites"],
        correta: 1
    },

    {
        pergunta: "24. Para que serve o backup?",
        opcoes: ["Apagar arquivos", "Criar cópias de segurança", "Compartilhar senhas", "Excluir aplicativos"],
        correta: 1
    },

    {
        pergunta: "25. Qual é a melhor atitude na internet?",
        opcoes: ["Confiar em tudo", "Compartilhar dados", "Pensar e verificar antes de clicar", "Usar qualquer senha"],
        correta: 2
    }

];

// ========================================
// VARIÁVEIS DO QUIZ
// ========================================

var perguntaAtual = 0;
var pontos = 0;
var respondeu = false;

// ========================================
// MOSTRAR PERGUNTA
// ========================================

function mostrarPergunta() {

    respondeu = false;

    var p = perguntas[perguntaAtual];

    document.getElementById("numero-pergunta").textContent =
        "Pergunta " + (perguntaAtual + 1) + "/25";

    document.getElementById("pergunta").textContent =
        p.pergunta;

    document.getElementById("pontos").textContent =
        pontos;

    document.getElementById("progresso").style.width =
        (perguntaAtual / perguntas.length * 100) + "%";

    document.getElementById("resposta-quiz").textContent = "";

    document.getElementById("proxima-pergunta").disabled = true;

    document.getElementById("proxima-pergunta").textContent =
        perguntaAtual == perguntas.length - 1
        ? "Ver resultado"
        : "Próxima pergunta";

    var opcoes = document.getElementById("opcoes");

    opcoes.innerHTML = "";

    // CRIAR ALTERNATIVAS

    for (var i = 0; i < p.opcoes.length; i++) {

        var botao = document.createElement("button");

        botao.type = "button";
        botao.textContent = p.opcoes[i];

        botao.onclick = function() {

            var indice = Array.from(opcoes.children).indexOf(this);

            responderQuiz(indice);

        };

        opcoes.appendChild(botao);
    }
}

// ========================================
// RESPONDER PERGUNTA
// ========================================

function responderQuiz(indice) {

    if (respondeu == true) {
        return;
    }

    respondeu = true;

    var p = perguntas[perguntaAtual];

    var botoes = document.querySelectorAll("#opcoes button");

    // ATUALIZAR CONTADOR

    perguntasRespondidas++;

    document.getElementById("perguntas").textContent =
        perguntasRespondidas;

    // VERIFICAR RESPOSTA

    if (indice == p.correta) {

        pontos++;

        acertos++;

        document.getElementById("acertos").textContent =
            acertos;

        document.getElementById("resposta-quiz").textContent =
            "✓ Correto! Você ganhou 1 ponto.";

        botoes[indice].classList.add("correta");

    } else {

        document.getElementById("resposta-quiz").textContent =
            "✕ Resposta incorreta! A alternativa correta está destacada.";

        botoes[indice].classList.add("incorreta");

        botoes[p.correta].classList.add("correta");
    }

    // BLOQUEAR ALTERNATIVAS

    for (var i = 0; i < botoes.length; i++) {
        botoes[i].disabled = true;
    }

    document.getElementById("pontos").textContent =
        pontos;

    document.getElementById("progresso").style.width =
        ((perguntaAtual + 1) / perguntas.length * 100) + "%";

    document.getElementById("proxima-pergunta").disabled =
        false;
}

// ========================================
// PRÓXIMA PERGUNTA
// ========================================

function proximaPergunta() {

    if (respondeu == false) {
        return;
    }

    if (perguntaAtual < perguntas.length - 1) {

        perguntaAtual++;

        mostrarPergunta();

    } else {

        finalizarQuiz();
    }
}

// ========================================
// RESULTADO FINAL
// ========================================

function finalizarQuiz() {

    document.getElementById("numero-pergunta").textContent =
        "QUIZ CONCLUÍDO";

    document.getElementById("pergunta").textContent =
        "Seu resultado final:";

    document.getElementById("opcoes").innerHTML = "";

    document.getElementById("resposta-quiz").textContent = "";

    document.getElementById("progresso").style.width = "100%";

    document.getElementById("proxima-pergunta").style.display =
        "none";

    var mensagem = "";

    if (pontos >= 20) {

        mensagem = "Excelente! Você entende muito de segurança digital!";

    } else if (pontos >= 15) {

        mensagem = "Muito bem! Você tem bons conhecimentos!";

    } else if (pontos >= 10) {

        mensagem = "Bom trabalho! Continue aprendendo!";

    } else {

        mensagem = "Continue estudando! Você pode melhorar!";
    }

    document.getElementById("resultado-final").textContent =
        pontos + "/25 pontos — " + mensagem;

    document.getElementById("reiniciar-quiz").hidden = false;
}

// ========================================
// REINICIAR QUIZ
// ========================================

function reiniciarQuiz() {

    perguntaAtual = 0;

    pontos = 0;

    document.getElementById("resultado-final").textContent = "";

    document.getElementById("proxima-pergunta").style.display =
        "block";

    document.getElementById("reiniciar-quiz").hidden = true;

    mostrarPergunta();
}

// ========================================
// REGISTRAR RISCO
// ========================================

function registrarRisco() {

    var tipo = document.getElementById("tipoRisco").value;

    var descricao = document.getElementById("descricao").value.trim();

    var lista = document.getElementById("lista");

    if (tipo == "" || descricao == "") {

        alert("Preencha o tipo de risco e a descrição.");

        return;
    }

    // REMOVER MENSAGEM INICIAL

    var itemVazio = document.querySelector(".vazio");

    if (itemVazio) {
        itemVazio.remove();
    }

    // CRIAR NOVO ITEM

    var novoRisco = document.createElement("li");

    var tipoRisco = document.createElement("div");

    tipoRisco.className = "risco-tipo";

    tipoRisco.textContent = tipo;

    var descricaoRisco = document.createElement("div");

    descricaoRisco.className = "risco-descricao";

    descricaoRisco.textContent = descricao;

    novoRisco.appendChild(tipoRisco);

    novoRisco.appendChild(descricaoRisco);

    lista.appendChild(novoRisco);

    // ATUALIZAR CONTADOR

    var total = lista.querySelectorAll("li:not(.vazio)").length;

    document.getElementById("total-riscos").textContent = total;

    // LIMPAR CAMPOS

    document.getElementById("tipoRisco").value = "";

    document.getElementById("descricao").value = "";

}

// ========================================
// INICIAR O QUIZ
// ========================================

mostrarPergunta();
