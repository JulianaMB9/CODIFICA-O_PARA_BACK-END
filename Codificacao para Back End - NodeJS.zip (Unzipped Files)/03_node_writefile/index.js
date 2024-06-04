// Importando o módulo 'fs' (file system) do Node.js, que permite operações com arquivos.
let fs = require('fs');

// Chamando o método writeFile do módulo fs para escrever dados em um arquivo.
// Parâmetros:
// - 'arquivo.txt': Nome do arquivo onde os dados serão escritos.
// - 'Escrevendo esse texto no arquivo...': Conteúdo que será escrito no arquivo.
// - function (erro) { ... }: Função de callback que será executada após a escrita ser concluída.
fs.writeFile('arquivo.txt', 'Escrevendo esse texto no arquivo...', 
    function (erro) {
        // Verificando se ocorreu algum erro durante a escrita do arquivo.
        // Se houver erro, ele será lançado, interrompendo a execução do programa.
        if (erro) {
            throw new erro;
        }
        // Se a operação de escrita for bem-sucedida, exibe uma mensagem indicando sucesso no console.
        else {
            console.log('Escrito com sucesso!');
        } 
    }
);


