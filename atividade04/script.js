function mostrarSaudacao() {
  let hora = prompt("Digite a hora atual (0 a 23):");

  if (hora === "") {
    alert("Digite uma hora válida!");
    return;
  }

  hora = Number(hora);

  if (isNaN(hora)) {
    alert("Digite apenas números!");
    return;
  }

  let mensagem;

  if (hora >= 0 && hora <= 11) {
    mensagem = "Bom dia ";
  } else if (hora >= 12 && hora <= 17) {
    mensagem = "Boa tarde ";
  } else if (hora >= 18 && hora <= 23) {
    mensagem = "Boa noite ";
  } else {
    mensagem = "Hora inválida ";
  }

  alert("Hora: " + hora + "\n" + mensagem);
}