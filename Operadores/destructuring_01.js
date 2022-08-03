// ctrl + alt + n
//1° criar um obj
const pessoa = {
    nome: 'Ana',
    idade: 51,
    endereço: {
        logradouro: 'Rua ABC',
        numero: 100
    }
}

//destructuring é uma forma simplificada de tirar de dentro de uma estrutura 2 atributos
const { nome, idade } = pessoa // neste caso as {} representam o operador desestruturador. TIRE DE DENTRO DO OBJ PESSOA OS ATRIBUTOS NOME E IDADE
console.log(nome, idade)

//OU

const { nome: n, idade: i} = pessoa
console.log(n, i)