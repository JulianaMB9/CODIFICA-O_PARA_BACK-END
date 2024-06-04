var descricao = "Calculadora de IMC";

function calcularIMC(peso, altura) {

  let imc = {};
  imc.status = true
  if (!peso || !altura || peso <= 0 || altura <= 0){
      imc.status = false
      imc.resultado = "Valores inválidos para peso ou altura!";
  }
  else {
    imc.calculo = peso / (altura * altura);
    imc.classificacao = ""; 
    if (imc.calculo < 18.5){
      imc.classificacao = "Abaixo do Peso";
    } else if (imc.calculo < 29.9){
      imc.classificacao = "Excesso de Peso";
    } else if (imc.calculo < 34.9){
      imc.classificacao = "Obesidade Classe I";
    } else if (imc.calculo < 39.9){
      imc.classificacao = "Obesidade Classe II";
    } else {
      imc.classificacao = "Obesidade Mórbida";
    }
    imc.resultado = "IMC: " + imc.calculo.toFixed(2) + "\nClassificação: " + imc.classificacao
  }

  return imc;

}

// Exporta um objeto contendo propriedades e funções relacionadas a calculadora
module.exports = {
  descricao,    // Exporta a propriedade 'descricao'
  calcularIMC,  // Exporta a função 'calcularIMC'
};
