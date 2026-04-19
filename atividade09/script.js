function calcularOperacao() {
  let numero1 = prompt("Digite o primeiro número:");
  let numero2 = prompt("Digite o segundo número:");
  let operacao = prompt("Digite a operação (+, -, *, /):");

  if (numero1 === "" || numero2 === "" || operacao === "") {
    alert("Preencha todos os campos!");
    return;
  }

  numero1 = Number(numero1);
  numero2 = Number(numero2);

  if (isNaN(numero1) || isNaN(numero2)) {
    alert("Digite apenas números válidos!");
    return;
  }

  let resultado;

  switch (operacao) {
    case "+":
      resultado = numero1 + numero2;
      break;

    case "-":
      resultado = numero1 - numero2;
      break;

    case "*":
      resultado = numero1 * numero2;
      break;

    case "/":
      if (numero2 === 0) {
        alert("Não é possível dividir por zero!");
        return;
      }
      resultado = numero1 / numero2;
      break;

    default:
      alert("Operação inválida!");
      return;
  }

  alert(
    "Primeiro número: " + numero1 +
    "\nSegundo número: " + numero2 +
    "\nOperação: " + operacao +
    "\nResultado: " + resultado
  );
}