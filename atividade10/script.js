function calcularPagamento() {
  let preco = prompt("Digite o preço do produto:");

  if (preco === "") {
    alert("Digite um valor!");
    return;
  }

  preco = Number(preco);

  if (isNaN(preco) || preco <= 0) {
    alert("Digite um valor válido!");
    return;
  }

  let opcao = prompt(
    "Escolha a forma de pagamento:\n" +
    "1 - Pix/Dinheiro (10% desconto)\n" +
    "2 - Cartão à vista (5% desconto)\n" +
    "3 - 2x no cartão (sem desconto)\n" +
    "4 - 3x ou mais (10% juros)"
  );

  let total;
  let descricao;

  switch (opcao) {
    case "1":
      total = preco * 0.90;
      descricao = "Pix/Dinheiro (10% desconto)";
      break;

    case "2":
      total = preco * 0.95;
      descricao = "Cartão à vista (5% desconto)";
      break;

    case "3":
      total = preco;
      descricao = "2x no cartão (preço normal)";
      break;

    case "4":
      total = preco * 1.10;
      descricao = "3x ou mais (10% juros)";
      break;

    default:
      alert("Opção inválida!");
      return;
  }

  alert(
    "Preço original: R$ " + preco.toFixed(2) +
    "\nForma de pagamento: " + descricao +
    "\nValor final: R$ " + total.toFixed(2)
  );
}