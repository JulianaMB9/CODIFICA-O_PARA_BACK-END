const nome = document.querySelector('#nome');
const sobrenome = document.querySelector('#sobrenome');
const cpf = document.querySelector('#cpf');
const sexo = document.querySelector('#sexo');
const nascimento = document.querySelector('#nascimento');
const endereco = document.querySelector('#endereco');
const telefone = document.querySelector('#telefone');
const btnExibeDados = document.querySelector('.dados');
const btnCadastroUsuario = document.querySelector('.cadastro-usuario');
const resultado = document.querySelector(".resultado");
let listaUsuarios = [];

function limpaForm() {
    nome.value = "";
    preco.value = "";
}

class Usuario {
    constructor(nome, sobrenome, cpf, sexo, nascimento, endereco, tel) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cpf = cpf;
        this.sexo = sexo;
        this.nascimento = nascimento;
        this.endereco = endereco;
        this.tel = tel;
    }

    mostraDados() {
        return `
        <div class="divUsuarios">
            <p><b>Nome:</b> ${this.nome}</p>
            <p><b>Sobrenome:</b> ${this.sobrenome}</p>
            <p><b>CPF:</b> ${this.cpf}</p>
            <p><b>Sexo:</b> ${this.sexo}</p>
            <p><b>Data de Nascimento:</b> ${this.nascimento}</p>
            <p><b>Endereço:</b> ${this.endereco}</p>
            <p><b>Telefone:</b> ${this.tel}</p>
            <hr>
        </div>
    
        `
    }
}


btnCadastroUsuario.addEventListener('click', (e) => {
    e.preventDefault();

    let novoUsuario = new Usuario(nome.value, sobrenome.value, cpf.value, sexo.value, nascimento.value, endereco.value, telefone.value);

    listaUsuarios.push(novoUsuario);
    alert("Usuario cadastrado com sucesso.");
    limpaForm();
})


btnExibeDados.addEventListener("click", () => {

    resultado.innerHTML="";
    let titulo = document.createElement('h3');
    titulo.textContent = "Informações dos usuários";
    resultado.appendChild(titulo);
    
    listaUsuarios.forEach(usuario=>{
        let divUsuario = document.createElement('div');
        divUsuario.innerHTML = usuario.mostraDados();
        resultado.appendChild(divUsuario);
    })


})