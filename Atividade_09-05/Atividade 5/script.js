function calcularArea() {
  let largura = parseFloat(document.getElementById("largura").value);
  let comprimento = parseFloat(document.getElementById("comprimento").value);

  let resultado = document.getElementById("resultado");

  if (isNaN(largura) || largura <= 0 || isNaN(comprimento) || comprimento <= 0) {
    resultado.innerHTML = "Por favor, insira valores válidos e maiores que zero para largura e comprimento.";
    resultado.style.color = "red";
    return;
  }

  let area = largura * comprimento;

  resultado.style.color = "black";
  resultado.innerHTML = "Área do Terreno: " + area.toFixed(2) + " m²";

  let classificacao;
  if (area < 100) {
    classificacao = "TERRENO POPULAR";
  } else if (area >= 100 && area <= 500) {
    classificacao = "TERRENO MASTER";
  } else {
    classificacao = "TERRENO VIP";
  }

  resultado.innerHTML += "<br>Classificação do Terreno: " + classificacao;
}
