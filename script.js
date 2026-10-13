// variaveis do painel
var dicasConsultadas = 0;
var perguntasRespondidas = 0;
var acertos = 0;

// FUNCAO DE CONSULTAR A SITUACAO DA LISTA
function consultarSituacao() {
    var situacao = document.getElementById("situacao").value;
    var resultado = document.getElementById("resultado");
    var msg = "";

    if (situacao == "") {
        msg = "Selecione uma situação para receber uma orientação.";
    } 
    if (situacao == "link") {
        msg = "Não clique imediatamente. Verifique o endereço do site e confirme se o remetente é confiável.";
    }
    if (situacao == "email") {
        msg = "Evite clicar em links ou baixar arquivos de e-mails desconhecidos. Confira o endereço do remetente.";
    }
    if (situacao == "senha") {
        msg = "Nunca informe sua senha por mensagem, e-mail ou telefone. Empresas confiáveis não costumam pedir sua senha dessa forma.";
    }
    if (situacao == "promocao") {
        msg = "Desconfie de ofertas muito abaixo do preço normal. Pesquise a empresa e confira o endereço do site.";
    }
    if (situacao == "perfil") {
        msg = "Tenha cuidado com perfis desconhecidos. Verifique informações, fotos, seguidores e evite compartilhar dados pessoais.";
    }
    if (situacao == "arquivo") {
        msg = "Não abra arquivos desconhecidos. Eles podem conter programas maliciosos. Confirme quem enviou antes de abrir.";
    }

    resultado.querySelector("p").textContent = msg;

    if (situacao != "") {
        dicasConsultadas = dicasConsultadas + 1;
        document.getElementById("dicas").innerHTML = dicasConsultadas;
    }
}

// FUNCAO DO QUIZ
function responderQuiz(correta) {
    var resposta = document.getElementById("resposta-quiz");
    
    perguntasRespondidas = perguntasRespondidas + 1;
    document.getElementById("perguntas").innerHTML = perguntasRespondidas;

    if (correta == true) {
        resposta.textContent = "✓ Resposta correta! Sempre verifique a origem do link antes de clicar.";
        acertos = acertos + 1;
        document.getElementById("acertos").innerHTML = acertos;
    } else {
        resposta.textContent = "✕ Resposta incorreta. O mais seguro é verificar a origem do link.";
    }
}

// BOTAO DE REGISTRAR O RISCO
function registrarRisco() {
    var tipo = document.getElementById("tipoRisco").value;
    var descricao = document.getElementById("descricao").value;
    var lista = document.getElementById("lista");

    if (tipo == "" || descricao == "") {
        alert("Preencha o tipo de risco e a descrição.");
        return;
    }

    var itemVazio = document.querySelector(".vazio");
    if (itemVazio) {
        itemVazio.remove();
    }

    var novoRisco = document.createElement("li");
    // juntando as tags usando o + igual iniciante faz
    novoRisco.innerHTML = '<div class="risco-tipo">' + tipo + '</div><div class="risco-descricao">' + descricao + '</div>';

    lista.appendChild(novoRisco);

    // limpando os campos
    document.getElementById("tipoRisco").value = "";
    document.getElementById("descricao").value = "";
}