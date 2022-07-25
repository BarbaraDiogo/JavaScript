// contexto léxico
const saudacao = 'Opa'

function exec() {
    const saudacao = 'Falaa' // contexto léxico 2
    return saudacao
}

// obj são grupos animados de pares nome/valor
//obj cliente
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {//obj endereço
        logradouro: 'Rua Antonio Pereiras',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)