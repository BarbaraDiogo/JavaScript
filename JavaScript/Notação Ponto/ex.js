console.log(Math.ceil(6.1)) // arredondar p cima

const obj = {}
obj.nome = 'Bola'
console.log(obj.nome)

function Obj(nome) {
    this.nome = nome // this: criando um atributo publico
    this.exec = function() { // this: criando funções
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome) // utilizamos a notação ponto patra acessar os atributos que são visiveis dentro de um determinado obj
console.log(obj3.nome)
obj3.exec()