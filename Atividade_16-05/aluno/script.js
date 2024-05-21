const nome = document.querySelector("#nome");
const matricula = document.querySelector("#matricula");
const disciplina = document.querySelector("#disciplina");
const nota = document.querySelector("#nota");
const btnEnviar = document.querySelector(".enviar");
const resultado = document.querySelector(".resultado");
const btnSituação = document.querySelector(".situacao-alunos")
let alunos = [];

function limpaForm() {
    nome.value = "";
    matricula.value = "";
    disciplina.value = "";
    nota.value = "";
}

class Aluno {
    constructor(nome, matricula,disciplina,nota) {
        this.nome = nome;
        this.matricula = matricula;
        this.disciplina = disciplina;
        this.nota = nota;
    }

    mostraSituacao() {
        return `
            <p><b>Nome: </b>${this.nome}</p>
            <p><b>Matricula: </b>${this.matricula}</p>
            <p><b>Disciplina: </b>${this.disciplina}</p>
            <p><b>Nota: </b>${this.nota}</p>
            <p><b>Situação: </b>${classificaNota(this.nota)}</p>
            <hr>
        `
    }
}

function classificaNota(nota) {
    if (nota >= 60) {
        return "Aprovado";
    } else if (nota < 60 && nota >= 50) {
        return "Em recuperacao";
    } else if(nota<50){
        return "Reprovado";
    }
}

btnEnviar.addEventListener("click", (e) => {
    e.preventDefault();

    let novoAluno = new Aluno(nome.value,matricula.value,disciplina.value,nota.value);

    alunos.push(novoAluno);
    alert("Aluno cadastrado com sucesso")
    limpaForm();

})

btnSituação.addEventListener("click",()=>{

    resultado.innerHTML="";
    let titulo = document.createElement('h3');
    titulo.textContent = "Informações dos alunos";
    resultado.appendChild(titulo);
    
    alunos.forEach(aluno=>{
        let divAluno = document.createElement('div');
        divAluno.innerHTML = aluno.mostraSituacao();
        resultado.appendChild(divAluno);
    })
})