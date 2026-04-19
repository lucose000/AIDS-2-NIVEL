function calcularMedia() {
  let nota1 = prompt("Digite a primeira nota:");
  let nota2 = prompt("Digite a segunda nota:");

  // validação de vazio
  if (nota1 === "" || nota2 === "") {
    alert("Preencha as duas notas!");
    return;
  }

  nota1 = Number(nota1);
  nota2 = Number(nota2);

  // validação de número
  if (isNaN(nota1) || isNaN(nota2)) {
    alert("Digite apenas números válidos!");
    return;
  }

  let media = (nota1 + nota2) / 2;
  let situacao;

  if (media >= 7) {
    situacao = "Aprovado ✅";
  } else if (media >= 5) {
    situacao = "Em Recuperação ⚠️";
  } else {
    situacao = "Reprovado ❌";
  }

  alert(
    "Nota 1: " + nota1 +
    "\nNota 2: " + nota2 +
    "\nMédia: " + media.toFixed(2) +
    "\nSituação: " + situacao
  );
}