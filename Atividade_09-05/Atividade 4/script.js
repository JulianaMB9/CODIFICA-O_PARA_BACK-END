function calcularFatorial() {
  let numero = parseInt(document.getElementById("numero").value);

  let resultado = document.getElementById("resultado");

  if (isNaN(numero) || numero < 0) {
    resultado.innerHTML = "Por favor, digite um número inteiro positivo.";
    resultado.style.color = "red";
    return
  }

  let fatorial = 1;
  let sequencia = "";
  for (let i = numero; i >= 1; i--) {
    fatorial *= i;
    sequencia += i;
    if (i > 1) {
      sequencia += " x ";
    }
  }

  document.getElementById("resultado").innerHTML = numero + "! = " + sequencia + " = " + fatorial;
}
