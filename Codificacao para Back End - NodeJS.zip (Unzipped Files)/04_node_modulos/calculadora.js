var descricao = "Calculadora Básica";

// Definição de função para soma
function somar(valor1, valor2) {
  return valor1 + valor2;
}

// Definição de função para subtração
function subtrair(valor1, valor2) {
  return valor1 - valor2;
}

// Definição de função para multiplicação
function multiplicar(valor1, valor2) {
  return valor1 * valor2;
}

// Definição de função para divisão
function dividir(valor1, valor2) {
  // Verifica se o divisor (b) é diferente de zero
  if (valor2 !== 0) {
    // Se for diferente de zero, realiza a divisão e retorna o resultado
    return valor1 / valor2;
  } else {
    // Se o divisor for zero, retorna uma mensagem de erro
    return "Erro: Divisão por zero.";
  }
}

// Exporta um objeto contendo propriedades e funções relacionadas a calculadora
module.exports = {
  descricao,    // Exporta a propriedade 'descricao'
  somar,        // Exporta a função 'somar'
  subtrair,     // Exporta a função 'subtrair'
  multiplicar,  // Exporta a função 'multiplicar'
  dividir,      // Exporta a função 'dividir'
};
