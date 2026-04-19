function verificarParOuImpar() {
  let numero = Number(prompt("Digite um número inteiro:"));

  if (numero % 2 === 0) {
    alert("O número " + numero + " é par.");
  } else {
    alert("O número " + numero + " é ímpar.");
  }
}