function exibirDados() {
  let nome = document.getElementById("nome").value.trim();
  let sobrenome = document.getElementById("sobrenome").value.trim();
  let cpf = document.getElementById("cpf").value.trim();
  let sexo = document.getElementById("sexo").value;
  let dataNascimento = document.getElementById("dataNascimento").value;
  let endereco = document.getElementById("endereco").value.trim();
  let telefone = document.getElementById("telefone").value.trim();

  let resultado = document.getElementById("resultado");
  function validarCPF(cpf) {
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return cpfRegex.test(cpf);
  }

  function validarTelefone(telefone) {
    const telefoneRegex = /^\(\d{2}\) \d \d{4}-\d{4}$/;
    return telefoneRegex.test(telefone);
  }

  if (nome === "" || sobrenome === "" || cpf === "" || sexo === "" || dataNascimento === "" || endereco === "" || telefone === "") {
    resultado.innerHTML = "Por favor, preencha todos os campos.";
    resultado.style.color = "red";
    return;
  }
  if (!validarCPF(cpf)) {
    resultado.innerHTML = "CPF inválido.";
    resultado.style.color = "red";
    return;
  }

  if (!validarTelefone(telefone)) {
    resultado.innerHTML = "Número inválido.";
    resultado.style.color = "red";
    return;
  }
  resultado.innerHTML =
    "<p>Nome: " + nome + "</p>" +
    "<p>Sobrenome: " + sobrenome + "</p>" +
    "<p>CPF: " + cpf + "</p>" +
    "<p>Sexo: " + sexo + "</p>" +
    "<p>Data de Nascimento: " + dataNascimento + "</p>" +
    "<p>Endereço: " + endereco + "</p>" +
    "<p>Telefone: " + telefone + "</p>";
  resultado.style.color = "black"; 
  
}

