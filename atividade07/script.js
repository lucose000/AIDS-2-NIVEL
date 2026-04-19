function verificarTriangulo() {
  let a = prompt("Digite o primeiro lado:");
  let b = prompt("Digite o segundo lado:");
  let c = prompt("Digite o terceiro lado:");

  if (a === "" || b === "" || c === "") {
    alert("Preencha todos os valores!");
    return;
  }

  a = Number(a);
  b = Number(b);
  c = Number(c);

  if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
    alert("Digite valores válidos!");
    return;
  }

  // Verifica se forma triângulo
  if (a + b > c && a + c > b && b + c > a) {

    let tipo;

    if (a === b && b === c) {
      tipo = "Equilátero 🔺";
    } else if (a === b || a === c || b === c) {
      tipo = "Isósceles 🔻";
    } else {
      tipo = "Escaleno 🔸";
    }

    alert(
      "Forma um triângulo ✅" +
      "\nTipo: " + tipo
    );

  } else {
    alert("Não forma um triângulo ❌");
  }
}