const prompt = require("prompt-sync")();
const DadosFornecedor = require('./numeroFornecedores');

function main() {
    const numFornecedores = parseInt(prompt('Digite o número de fornecedores a serem cadastrados: '));
    const fornecedores = [];

    for (let i = 0; i < numFornecedores; i++) {
        console.log(`\nCadastro do fornecedor ${i + 1}:`);
        const fornecedor = DadosFornecedor.DadosFornecedor();
        fornecedores.push(fornecedor);
    }

    console.log('\nFornecedores cadastrados:');
    fornecedores.forEach((fornecedor, index) => {
        console.log(`\nFornecedor ${index + 1}:`);
        console.log(`Nome: ${fornecedor.nome}`);
        console.log(`Sobrenome: ${fornecedor.sobrenome}`);
        console.log(`CNPJ: ${fornecedor.cnpj}`);
        console.log(`Sexo: ${fornecedor.sexo}`);
        console.log(`Data de Nascimento: ${fornecedor.dataNascimento}`);
        console.log(`Endereço:`);
        console.log(`  Logradouro: ${fornecedor.endereco.logradouro}`);
        console.log(`  Número: ${fornecedor.endereco.numero}`);
        console.log(`  Bairro: ${fornecedor.endereco.bairro}`);
        console.log(`  CEP: ${fornecedor.endereco.cep}`);
        console.log(`  Município: ${fornecedor.endereco.municipio}`);
        console.log(`  Estado: ${fornecedor.endereco.estado}`);
        console.log(`Telefone: ${fornecedor.telefone}`);
    });
}

main();
