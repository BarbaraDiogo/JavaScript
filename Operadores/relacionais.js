// ctrl + alt + n
// sempre retornará true ou false
console.log('01)', '1' == 1) // comparando valor independente do tipo
console.log('02)', '1' === 1) //=== estritamente igual, ou seja os tipos são iguais? não são, o primeiro é string e o outro é number
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3)
console.log('05', 3 < 2)
console.log('06', 3 > 2)
console.log('07', 3 <= 2)
console.log('08', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09', d1 === d2) // por ser uma variavel de referencia não importa a comparação (=== ou ==) pois ele irá comparar o endereço de memoria
console.log('10)', d1 == d2) // são variaveis diferentes então ocupam diferentes indereços de memória
console.log('11)', d1.getTime() === d2.getTime()) // neste caso estão comparando os valores atribuidos para as variaveis

console.log('12)', undefined == null)
console.log('13)', undefined === null)