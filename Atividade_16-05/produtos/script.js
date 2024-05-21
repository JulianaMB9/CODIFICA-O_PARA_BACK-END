const nome = document.querySelector("#nome");
const preco = document.querySelector("#preco");
const tabela = document.querySelector("#corpo-tabela");
const cadastraProduto = document.querySelector("#enviar");

let produtos = [];

function limpaForm() {
    nome.value = "";
    preco.value = "";
}

class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    exibeProduto() {
        let novaLinha = document.createElement('tr');
        let nomeProduto = document.createElement('td');
        nomeProduto.textContent = this.nome;
        let precoProduto = document.createElement('td');
        precoProduto.textContent = this.preco;
        novaLinha.appendChild(nomeProduto);
        novaLinha.appendChild(precoProduto);
        tabela.appendChild(novaLinha);
    }
}


cadastraProduto.addEventListener("click", (e) => {
    e.preventDefault();

    let produto = new Produto(nome.value, preco.value);

    produto.exibeProduto();
    limpaForm();
})

