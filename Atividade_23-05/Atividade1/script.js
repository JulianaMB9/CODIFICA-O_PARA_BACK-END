let contador = 1;
const fornecedores = [];

class Endereco {
    constructor(logradouro, numero, bairro, cep, municipio, estado) {
        this.logradouro = logradouro;
        this.numero = numero;
        this.bairro = bairro;
        this.cep = cep;
        this.municipio = municipio;
        this.estado = estado;
    }

    toString() {
        return `${this.logradouro}, ${this.numero}, ${this.bairro}, ${this.cep}, ${this.municipio} - ${this.estado}`;
    }
}

class Fornecedor {
    constructor(nome, sobrenome, cnpj, sexo, dataNascimento, endereco, telefone) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cnpj = cnpj;
        this.sexo = sexo;
        this.dataNascimento = dataNascimento;
        this.endereco = endereco;
        this.telefone = telefone;
    }

    toString() {
        return `Nome: ${this.nome} ${this.sobrenome}\nCNPJ: ${this.cnpj}\nSexo: ${this.sexo}\nData de Nascimento: ${this.dataNascimento}\nEndereço: ${this.endereco}\nTelefone: ${this.telefone}`;
    }
}

function adicionarFornecedor() {
    contador++;
    const formContainer = document.getElementById('formContainer');
    const novoFornecedorHTML = `
        <div class="fornecedor">
            <h2>Fornecedor ${contador}</h2>
            <input type="text" id="nome${contador}" placeholder="Nome">
            <input type="text" id="sobrenome${contador}" placeholder="Sobrenome">
            <input type="text" id="cnpj${contador}" placeholder="CNPJ (14 dígitos)">
            <input type="text" id="sexo${contador}" placeholder="Sexo (M-Masculino, F-Feminino, O-Outros)">
            <input type="text" id="dataNascimento${contador}" placeholder="Data de Nascimento (DD/MM/AAAA)">
            <input type="text" id="logradouro${contador}" placeholder="Logradouro">
            <input type="text" id="numero${contador}" placeholder="Número">
            <input type="text" id="bairro${contador}" placeholder="Bairro">
            <input type="text" id="cep${contador}" placeholder="CEP">
            <input type="text" id="municipio${contador}" placeholder="Município">
            <input type="text" id="estado${contador}" placeholder="Estado">
            <input type="text" id="telefone${contador}" placeholder="Telefone ((032) 00000-0000)">
        </div>`;
    formContainer.insertAdjacentHTML('beforeend', novoFornecedorHTML);
}

function cadastrarFornecedor(index) {
    const nome = document.getElementById(`nome${index}`).value;
    const sobrenome = document.getElementById(`sobrenome${index}`).value;
    const cnpj = document.getElementById(`cnpj${index}`).value;
    const sexo = document.getElementById(`sexo${index}`).value;
    const dataNascimento = document.getElementById(`dataNascimento${index}`).value;
    const logradouro = document.getElementById(`logradouro${index}`).value;
    const numero = document.getElementById(`numero${index}`).value;
    const bairro = document.getElementById(`bairro${index}`).value;
    const cep = document.getElementById(`cep${index}`).value;
    const municipio = document.getElementById(`municipio${index}`).value;
    const estado = document.getElementById(`estado${index}`).value;
    const telefone = document.getElementById(`telefone${index}`).value;

    const endereco = new Endereco(logradouro, numero, bairro, cep, municipio, estado);
    const fornecedor = new Fornecedor(nome, sobrenome, cnpj, sexo, dataNascimento, endereco, telefone);
    fornecedores.push(fornecedor);
}

function mostrarFornecedores() {
    const outputContainer = document.getElementById('outputContainer');
    outputContainer.innerHTML = '';
    for (let i = 1; i <= contador; i++) {
        cadastrarFornecedor(i);
    }
    fornecedores.forEach((fornecedor, index) => {
        const fornecedorDiv = document.createElement('div');
        fornecedorDiv.textContent = `Fornecedor ${index + 1}:\n${fornecedor.toString()}\n${'-'.repeat(40)}`;
        outputContainer.appendChild(fornecedorDiv);
    });
}
