// Objetos

const pessoa = {
    nome: "João Carlos",
    idade: 21,
    profissao: "Desenvolvedor",
    ativo: true,
    calcular : function (){
        let soma = 50 + 30
        console.log('O resultado da soma é: ',soma)
    }
}
//console.log(pessoa)
//console.log(pessoa.nome)
//console.log(pessoa.idade)
pessoa.calcular()