"use strict";

// ========================================
// VARIÁVEIS DO PAINEL
// ========================================

let dicasConsultadas = 0;
let perguntasRespondidas = 0;
let acertos = 0;

// ========================================
// CONSULTAR SITUAÇÃO
// ========================================

const orientacoes = {
  link: "Não clique imediatamente. Confira o endereço do site por outro caminho e confirme se o remetente é confiável.",

  email: "Evite clicar em links ou baixar arquivos de e-mails desconhecidos. Confira cuidadosamente o endereço do remetente.",

  senha: "Nunca informe sua senha por mensagem, e-mail ou telefone. Serviços confiáveis não pedem sua senha dessa maneira.",

  promocao: "Desconfie de ofertas muito abaixo do preço normal. Pesquise a empresa e confira se a promoção aparece no site oficial.",

  perfil: "Tenha cuidado com perfis desconhecidos. Verifique as informações e evite compartilhar dados pessoais.",

  arquivo: "Não abra arquivos inesperados. Confirme com a pessoa que enviou e mantenha o aparelho atualizado."
};

function consultarSituacao() {

  const situacao = document.getElementById("situacao").value;
  const texto = document.getElementById("texto-resultado");

  if (situacao === "") {
    texto.textContent = "Selecione uma situação antes de pedir a orientação.";
    return;
  }

  texto.textContent =
    orientacoes[situacao] ||
    "Não foi possível encontrar uma orientação para essa situação.";

  dicasConsultadas++;

  document.getElementById("dicas").textContent =
    dicasConsultadas;
}

// ========================================
// PERGUNTAS DO QUIZ - 25 QUESTÕES
// ========================================

const perguntas = [

  {
    pergunta: "1. O que é phishing?",
    opcoes: [
      "Um jogo",
      "Um golpe para roubar dados",
      "Um aplicativo",
      "Uma rede social"
    ],
    correta: 1
  },

  {
    pergunta: "2. Como proteger sua senha?",
    opcoes: [
      "Compartilhar",
      "Usar 123456",
      "Criar uma senha forte e exclusiva",
      "Publicar na internet"
    ],
    correta: 2
  },

  {
    pergunta: "3. O que fazer com um link suspeito?",
    opcoes: [
      "Clicar",
      "Compartilhar",
      "Verificar a origem sem abrir",
      "Informar sua senha"
    ],
    correta: 2
  },

  {
    pergunta: "4. O que é uma fake news?",
    opcoes: [
      "Notícia falsa ou enganosa",
      "Notícia oficial",
      "Livro digital",
      "Mensagem privada"
    ],
    correta: 0
  },

  {
    pergunta: "5. O que o HTTPS indica?",
    opcoes: [
      "Que o site é sempre confiável",
      "Que a conexão usa criptografia",
      "Que o site não tem anúncios",
      "Que não existem golpes"
    ],
    correta: 1
  },

  {
    pergunta: "6. O que é um vírus digital?",
    opcoes: [
      "Um tipo de programa malicioso",
      "Um navegador",
      "Um site",
      "Uma senha"
    ],
    correta: 0
  },

  {
    pergunta: "7. O que fazer ao receber um e-mail desconhecido?",
    opcoes: [
      "Abrir todos os anexos",
      "Verificar o remetente",
      "Enviar sua senha",
      "Clicar em todos os links"
    ],
    correta: 1
  },

  {
    pergunta: "8. O que é autenticação em duas etapas?",
    opcoes: [
      "Duas contas",
      "Uma proteção extra para confirmar o acesso",
      "Duas senhas iguais",
      "Um aplicativo de jogos"
    ],
    correta: 1
  },

  {
    pergunta: "9. Qual destes é um dado pessoal?",
    opcoes: [
      "CPF",
      "Nome de um planeta",
      "Cor azul",
      "Número aleatório sem relação com alguém"
    ],
    correta: 0
  },

  {
    pergunta: "10. O que fazer com uma promoção suspeita?",
    opcoes: [
      "Comprar rapidamente",
      "Enviar seus dados",
      "Conferir no site oficial da loja",
      "Compartilhar sem verificar"
    ],
    correta: 2
  },

  {
    pergunta: "11. O que é cyberbullying?",
    opcoes: [
      "Jogo online",
      "Intimidação ou agressão no ambiente digital",
      "Pesquisa escolar",
      "Aplicativo"
    ],
    correta: 1
  },

  {
    pergunta: "12. Por que atualizar aplicativos?",
    opcoes: [
      "Para ocupar espaço",
      "Para corrigir falhas e melhorar a segurança",
      "Para apagar contas",
      "Para perder dados"
    ],
    correta: 1
  },

  {
    pergunta: "13. O que é uma senha forte?",
    opcoes: [
      "123456",
      "Data de nascimento",
      "Combinação longa e difícil de adivinhar",
      "Nome próprio"
    ],
    correta: 2
  },

  {
    pergunta: "14. O que fazer em computadores públicos?",
    opcoes: [
      "Salvar suas senhas",
      "Deixar a conta aberta",
      "Sair da conta ao terminar",
      "Compartilhar seus dados"
    ],
    correta: 2
  },

  {
    pergunta: "15. O que é malware?",
    opcoes: [
      "Programa malicioso",
      "Rede social",
      "Site educativo",
      "Jogo"
    ],
    correta: 0
  },

  {
    pergunta: "16. Como identificar uma notícia falsa?",
    opcoes: [
      "Acreditar apenas no título",
      "Verificar fontes e outras publicações confiáveis",
      "Compartilhar imediatamente",
      "Ignorar a fonte"
    ],
    correta: 1
  },

  {
    pergunta: "17. O que é roubo de identidade digital?",
    opcoes: [
      "Criar um perfil próprio",
      "Usar dados de outra pessoa sem autorização",
      "Trocar uma senha",
      "Baixar um aplicativo"
    ],
    correta: 1
  },

  {
    pergunta: "18. O que fazer ao perder acesso à conta?",
    opcoes: [
      "Ignorar o problema",
      "Usar a recuperação oficial da plataforma",
      "Divulgar a senha",
      "Publicar seus dados"
    ],
    correta: 1
  },

  {
    pergunta: "19. Qual é o risco de baixar arquivos desconhecidos?",
    opcoes: [
      "Melhorar a internet",
      "Baixar conteúdo malicioso",
      "Aumentar a bateria",
      "Proteger automaticamente a conta"
    ],
    correta: 1
  },

  {
    pergunta: "20. O que é privacidade digital?",
    opcoes: [
      "Proteção e controle das informações pessoais",
      "Compartilhar tudo",
      "Publicar senhas",
      "Usar qualquer site sem cuidado"
    ],
    correta: 0
  },

  {
    pergunta: "21. O que fazer com um perfil falso?",
    opcoes: [
      "Enviar dados pessoais",
      "Denunciar e bloquear na plataforma",
      "Compartilhar informações",
      "Confiar imediatamente"
    ],
    correta: 1
  },

  {
    pergunta: "22. Para que serve um antivírus?",
    opcoes: [
      "Criar sites",
      "Ajudar a detectar e bloquear ameaças",
      "Aumentar seguidores",
      "Criar senhas"
    ],
    correta: 1
  },

  {
    pergunta: "23. O que é engenharia social?",
    opcoes: [
      "Construção de prédios",
      "Manipulação de pessoas para obter informações",
      "Criação de jogos",
      "Programação de sites"
    ],
    correta: 1
  },

  {
    pergunta: "24. Para que serve o backup?",
    opcoes: [
      "Apagar arquivos",
      "Criar cópias de segurança",
      "Compartilhar senhas",
      "Excluir aplicativos"
    ],
    correta: 1
  },

  {
    pergunta: "25. Qual é uma boa atitude na internet?",
    opcoes: [
      "Confiar em tudo",
      "Compartilhar dados pessoais",
      "Pensar e verificar antes de clicar",
      "Usar a mesma senha em todos os sites"
    ],
    correta: 2
  }

];

// ========================================
// VARIÁVEIS DO QUIZ
// ========================================

let perguntaAtual = 0;
let pontos = 0;
let respondeu = false;

const elemento = (id) => document.getElementById(id);

// ========================================
// ATUALIZAR PAINEL
// ========================================

function atualizarPainelQuiz() {

  elemento("perguntas").textContent =
    perguntasRespondidas;

  elemento("acertos").textContent =
    acertos;

  elemento("pontos").textContent =
    pontos;
}

// ========================================
// MOSTRAR PERGUNTA
// ========================================

function mostrarPergunta() {

  respondeu = false;

  const atual = perguntas[perguntaAtual];

  elemento("numero-pergunta").textContent =
    `Pergunta ${perguntaAtual + 1}/${perguntas.length}`;

  elemento("pergunta").textContent =
    atual.pergunta;

  elemento("resposta-quiz").textContent = "";

  elemento("resultado-final").textContent = "";

  elemento("proxima-pergunta").disabled = true;

  elemento("proxima-pergunta").hidden = false;

  elemento("proxima-pergunta").textContent =
    perguntaAtual === perguntas.length - 1
      ? "Ver resultado"
      : "Próxima pergunta";

  elemento("reiniciar-quiz").hidden = true;

  const progresso =
    (perguntaAtual / perguntas.length) * 100;

  elemento("progresso").style.width =
    `${progresso}%`;

  const opcoes = elemento("opcoes");

  opcoes.replaceChildren();

  // CRIAR BOTÕES DAS ALTERNATIVAS

  atual.opcoes.forEach((opcao, indice) => {

    const botao = document.createElement("button");

    botao.type = "button";

    botao.className = "opcao";

    botao.textContent = opcao;

    botao.addEventListener("click", function() {
      responderQuiz(indice);
    });

    opcoes.appendChild(botao);

  });

}

// ========================================
// RESPONDER QUIZ
// ========================================

function responderQuiz(indice) {

  if (respondeu) {
    return;
  }

  respondeu = true;

  const atual = perguntas[perguntaAtual];

  const botoes =
    elemento("opcoes").querySelectorAll("button");

  perguntasRespondidas++;

  if (indice === atual.correta) {

    pontos++;

    acertos++;

    elemento("resposta-quiz").textContent =
      "✓ Correto! Você ganhou 1 ponto.";

    botoes[indice].classList.add("correta");

  } else {

    elemento("resposta-quiz").textContent =
      `✕ Não foi dessa vez. A resposta correta é: ${atual.opcoes[atual.correta]}.`;

    botoes[indice].classList.add("incorreta");

    botoes[atual.correta].classList.add("correta");

  }

  // BLOQUEAR ALTERNATIVAS

  botoes.forEach(function(botao) {
    botao.disabled = true;
  });

  atualizarPainelQuiz();

  const respondidas = perguntaAtual + 1;

  elemento("progresso").style.width =
    `${(respondidas / perguntas.length) * 100}%`;

  elemento("proxima-pergunta").disabled = false;

}

// ========================================
// PRÓXIMA PERGUNTA
// ========================================

function proximaPergunta() {

  if (!respondeu) {
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

  elemento("numero-pergunta").textContent =
    "QUIZ CONCLUÍDO";

  elemento("pergunta").textContent =
    "Seu resultado final:";

  elemento("opcoes").replaceChildren();

  elemento("resposta-quiz").textContent = "";

  elemento("progresso").style.width = "100%";

  elemento("proxima-pergunta").hidden = true;

  let mensagem = "";

  if (pontos >= 20) {

    mensagem =
      "Excelente! Você entende muito de segurança digital!";

  } else if (pontos >= 15) {

    mensagem =
      "Muito bem! Você tem bons conhecimentos!";

  } else if (pontos >= 10) {

    mensagem =
      "Bom trabalho! Continue aprendendo!";

  } else {

    mensagem =
      "Continue estudando! Você pode melhorar!";

  }

  elemento("resultado-final").textContent =
    `${pontos}/25 pontos — ${mensagem}`;

  elemento("reiniciar-quiz").hidden = false;

}

// ========================================
// REINICIAR QUIZ
// ========================================

function reiniciarQuiz() {

  perguntaAtual = 0;

  pontos = 0;

  perguntasRespondidas = 0;

  acertos = 0;

  atualizarPainelQuiz();

  mostrarPergunta();

}

// ========================================
// REGISTRAR RISCO
// ========================================

function registrarRisco() {

  const tipo =
    elemento("tipoRisco").value;

  const descricao =
    elemento("descricao").value.trim();

  const aviso =
    elemento("aviso-risco");

  if (tipo === "" || descricao === "") {

    aviso.textContent =
      "Preencha o tipo de risco e a descrição.";

    aviso.className = "aviso erro";

    return;
  }

  const lista = elemento("lista");

  // REMOVER MENSAGEM INICIAL

  const vazio = lista.querySelector(".vazio");

  if (vazio) {
    vazio.remove();
  }

  // CRIAR NOVO REGISTRO

  const item = document.createElement("li");

  const tipoTexto = document.createElement("strong");

  tipoTexto.className = "risco-tipo";

  tipoTexto.textContent = tipo;

  const descricaoTexto = document.createElement("p");

  descricaoTexto.className = "risco-descricao";

  descricaoTexto.textContent = descricao;

  // BOTÃO DE EXCLUIR

  const remover = document.createElement("button");

  remover.type = "button";

  remover.className = "botao-remover";

  remover.textContent = "Excluir registro";

  remover.addEventListener("click", function() {

    item.remove();

    atualizarTotalRiscos();

    if (lista.children.length === 0) {

      const mensagem = document.createElement("li");

      mensagem.className = "vazio";

      mensagem.textContent =
        "Nenhum risco registrado ainda.";

      lista.appendChild(mensagem);

    }

  });

  item.append(
    tipoTexto,
    descricaoTexto,
    remover
  );

  lista.appendChild(item);

  // LIMPAR CAMPOS

  elemento("tipoRisco").value = "";

  elemento("descricao").value = "";

  aviso.textContent =
    "Risco registrado com sucesso!";

  aviso.className = "aviso sucesso";

  atualizarTotalRiscos();

}

// ========================================
// ATUALIZAR TOTAL DE RISCOS
// ========================================

function atualizarTotalRiscos() {

  const total =
    elemento("lista").querySelectorAll("li:not(.vazio)").length;

  elemento("total-riscos").textContent = total;

}

// ========================================
// INICIAR E CONECTAR OS BOTÕES
// ========================================

document.addEventListener("DOMContentLoaded", function() {

  elemento("btn-consultar").addEventListener(
    "click",
    consultarSituacao
  );

  elemento("proxima-pergunta").addEventListener(
    "click",
    proximaPergunta
  );

  elemento("reiniciar-quiz").addEventListener(
    "click",
    reiniciarQuiz
  );

  elemento("btn-registrar").addEventListener(
    "click",
    registrarRisco
  );

  mostrarPergunta();

});
