function verificarIdade() {
  let anoNascimento = Number(prompt("Digite seu ano de nascimento:"));
  let anoAtual = Number(prompt("Digite o ano atual:"));

  // validação
  if (isNaN(anoNascimento) || isNaN(anoAtual)) {
    alert("Por favor, digite apenas números válidos!");
    return;
  }

  let idade = anoAtual - anoNascimento;

  if (idade >= 18) {
    alert("Você tem " + idade + " anos.\nPode tirar CNH!");
  } else {
    alert("Você tem " + idade + " anos.\nAinda não pode dirigir");
  }
}