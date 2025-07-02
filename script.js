// --- Exemplo 1: Jogo dos Números Secretos com alert ---
function iniciarJogoNumeroSecreto() {
  alert("Bem-vindo ao Jogo do Número Secreto!");

  const numeroSecreto = Math.floor(Math.random() * 10) + 1;
  let tentativa;
  let acertou = false;

  while (!acertou) {
    tentativa = prompt("Adivinhe o número secreto (entre 1 e 10):");

    if (tentativa === null) {
      alert("Jogo cancelado.");
      return;
    }

    const numeroTentativa = parseInt(tentativa);

    if (isNaN(numeroTentativa) || numeroTentativa < 1 || numeroTentativa > 10) {
      alert("Por favor, digite um número válido entre 1 e 10.");
    } else if (numeroTentativa === numeroSecreto) {
      acertou = true;
      alert(`Parabéns! Você acertou! O número secreto era ${numeroSecreto}.`);
    } else if (numeroTentativa < numeroSecreto) {
      alert("O número secreto é MAIOR. Tente novamente!");
    } else {
      alert("O número secreto é MENOR. Tente novamente!");
    }
  }
}

// --- Exemplo 2: Jogo para Cálculo de Média ---
function iniciarCalculoMedia() {
  alert("Bem-vindo ao Jogo do Cálculo de Média!");

  let quantidadeNotas;
  while (true) {
    quantidadeNotas = prompt(
      "Quantas notas você deseja inserir para calcular a média?"
    );
    if (quantidadeNotas === null) {
      alert("Cálculo cancelado.");
      return;
    }
    const numNotas = parseInt(quantidadeNotas);
    if (!isNaN(numNotas) && numNotas > 0) {
      quantidadeNotas = numNotas;
      break;
    }
    alert("Por favor, insira um número válido e maior que zero.");
  }

  let soma = 0;
  for (let i = 1; i <= quantidadeNotas; i++) {
    let nota;
    while (true) {
      nota = prompt(`Digite a ${i}ª nota:`);
      if (nota === null) {
        alert("Cálculo cancelado.");
        return;
      }
      const numNota = parseFloat(nota);
      if (!isNaN(numNota) && numNota >= 0) {
        soma += numNota;
        break;
      }
      alert("Por favor, digite uma nota válida.");
    }
  }

  const media = soma / quantidadeNotas;
  alert(`A média das ${quantidadeNotas} notas é: ${media.toFixed(2)}.`);
}

// --- Exemplo 3: Soma dos Números ---
function iniciarSomaNumeros() {
  alert("Calculadora de Soma");

  let numero1, numero2;

  // Solicita o primeiro número
  while (true) {
    const input1 = prompt("Digite o primeiro número:");
    if (input1 === null) {
      alert("Soma cancelada.");
      return;
    }
    numero1 = parseFloat(input1);
    if (!isNaN(numero1)) {
      break;
    }
    alert("Entrada inválida. Por favor, digite um número.");
  }

  while (true) {
    const input2 = prompt("Digite o segundo número:");
    if (input2 === null) {
      alert("Soma cancelada.");
      return;
    }
    numero2 = parseFloat(input2);
    if (!isNaN(numero2)) {
      break;
    }
    alert("Entrada inválida. Por favor, digite um número.");
  }

  const resultado = numero1 + numero2;
  alert(`A soma de ${numero1} e ${numero2} é: ${resultado}.`);
}
