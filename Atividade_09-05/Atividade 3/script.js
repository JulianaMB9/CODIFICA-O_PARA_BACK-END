function verificarSituacao() {
  let nome = document.getElementById("nome").value.trim();
  let matricula = document.getElementById("matricula").value.trim();
  let disciplina = document.getElementById("disciplina").value.trim();
  let nota = parseFloat(document.getElementById("nota").value);

  let resultado = document.getElementById("resultado");

  if (nome === "" || matricula === "" || disciplina === "" || isNaN(nota)) {
    resultado.innerHTML = "Por favor, preencha todos os campos corretamente.";
    resultado.style.color = "red";
    return;
  }

  let situacao;
  if (nota >= 60) {
    situacao = "Aprovado";
  } else if (nota >= 50) {
    situacao = "Em recuperação";
  } else {
    situacao = "Reprovado";
  }

  let mensagem = "Nome: " + nome + "<br>";
  mensagem += "Matrícula: " + matricula + "<br>";
  mensagem += "Disciplina: " + disciplina + "<br>";
  mensagem += "Situação: " + situacao;

  resultado.innerHTML = mensagem;
  resultado.style.color = "black"; 
}
