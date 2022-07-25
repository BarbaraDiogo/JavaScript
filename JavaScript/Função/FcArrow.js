//Armazenar uma função ARROW em uma variável
const soma = (a, b) => { // => substitui o nome function
    return a + b
}

console.log(soma(2, 3))

//retorno implícito (ARROW FUNCTION)
const subtracao = (a, b) => a - b   //(a, b): parametros  
                                    // a - b : retorno da função
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!')