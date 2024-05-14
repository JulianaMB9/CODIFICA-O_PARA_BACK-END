function calcularImc() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let resultado = document.getElementById("resultado");

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultado.innerHTML = "<p>Por favor, insira valores válidos para peso e altura.</p>";
        resultado.style.color = "red";
        return;
    }

    let imc = peso / (altura * altura);
    resultado.style.color = "black"; 

    if (imc < 18.5) {
        resultado.innerHTML = "<p>Abaixo do Peso</p> IMC: " + imc.toFixed(2);
    } else if (imc >= 18.5 && imc < 25) {
        resultado.innerHTML = "<p>Peso Normal</p> IMC: " + imc.toFixed(2);
    } else if (imc >= 25 && imc < 30) {
        resultado.innerHTML = "<p>Sobrepeso</p> IMC: " + imc.toFixed(2);
    } else if (imc >= 30 && imc < 35) {
        resultado.innerHTML = "<p>Obesidade Grau I</p> IMC: " + imc.toFixed(2);
    } else if (imc >= 35 && imc < 40) {
        resultado.innerHTML = "<p>Obesidade Grau II</p> IMC: " + imc.toFixed(2);
    } else {
        resultado.innerHTML = "<p>Obesidade Grau III</p> IMC: " + imc.toFixed(2);
    }
}
