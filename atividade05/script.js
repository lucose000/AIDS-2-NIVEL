function verificarAno() {
  let ano = prompt("Digite um ano (ex: 2024):");

  if (ano === "") {
    alert("Digite um ano válido!");
    return;
  }

  ano = Number(ano);

  if (isNaN(ano)) {
    alert("Digite apenas números!");
    return;
  }

  let bissexto;

  if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
    bissexto = "É bissexto ✅";
  } else {
    bissexto = "Não é bissexto ❌";
  }

  alert("Ano: " + ano + "\n" + bissexto);
}