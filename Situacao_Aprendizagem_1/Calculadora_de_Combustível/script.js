function calculadoraCombustivel() {
  let pgasolina = parseFloat(document.getElementById("pgasolina").value);
  let gasolina = parseFloat(document.getElementById("gasolina").value);
  let palcool = parseFloat(document.getElementById("palcool").value);
  let alcool = parseFloat(document.getElementById("alcool").value);

  let resultado = document.getElementById("resultado");

  if (
    isNaN(pgasolina) ||
    isNaN(gasolina) ||
    isNaN(palcool) ||
    isNaN(alcool) ||
    pgasolina < 0 ||
    gasolina < 0 ||
    palcool < 0 ||
    alcool < 0
  ) {
    resultado.innerHTML =
      "<p> Por favor, insira valores válidos para todos os campos.</p>";

    resultado.style.color = "red";
    return;
  }

  let custoGasolina = pgasolina * gasolina;
  let custoAlcool = palcool * alcool;

  let mensagem =
    "<p>Custo total com Gasolina: R$ " + custoGasolina.toFixed(2) + "</p>";
  mensagem +=
    "<p> Custo total com Gasolina: R$ " + custoAlcool.toFixed(2) + "</p>";

  if (custoGasolina < custoAlcool) {
    mensagem += " <p> Gasolina é mais econômica.</p>";
  } else if (custoAlcool < custoGasolina) {
    mensagem += "<p> Álcool é mais econômico.</p>";
  } else {
    mensagem += "<p> Ambos têm o mesmo custo.</p>";
  }
  resultado.style.color = "black";
  resultado.innerHTML = mensagem;
}
