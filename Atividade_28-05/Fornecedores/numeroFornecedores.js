// Crie um programa que leia o número de fornecedores a serem cadastrados.  
//     Após isso, o programa deve ler os dados desses fornecedores: 
//     nome, sobrenome, CNPJ (14 digitos), sexo (M-Masculino, F-Feminino, O-Outros), data de nascimento, 
//     endereço (Logradourdo, Número, Bairro, CEP, Municipio e Estado) e telefone ((032) 00000-0000) 
//     e exiba no console todas as informações desses fornecedores.

const prompt = require("prompt-sync")();

function DadosFornecedor() {
    const nome = prompt('Nome: ');
    const sobrenome = prompt('Sobrenome: ');
    const cnpj = prompt('CNPJ (14 dígitos): ');
    const sexo = prompt('Sexo (M-Masculino, F-Feminino, O-Outros): ');
    const dataNascimento = prompt('Data de Nascimento (DD/MM/AAAA): ');

    const logradouro = prompt('Logradouro: ');
    const numero = prompt('Número: ');
    const bairro = prompt('Bairro: ');
    const cep = prompt('CEP: ');
    const municipio = prompt('Município: ');
    const estado = prompt('Estado: ');

    const telefone = prompt('Telefone ((XX) XXXXX-XXXX): ');

    module.exports  = {
        nome,
        sobrenome,
        cnpj,
        sexo,
        dataNascimento,
        endereco: {
            logradouro,
            numero,
            bairro,
            cep,
            municipio,
            estado
        },
        telefone
    };
}


