// ctrl + alt + n
// array de uma posição e extrair o valor que está dentro desta posição
const [a] = [10]
console.log(a)

//tira da estrutura e atribui a varias variáveis usando apenas uma unica atribuição
const [n1, n3, n5, n6=0] = [10, 7, 9, 4]
console.log(n1, n3, n5, n6)

//1° elemento foi ignorado, estou pegando o 2° elemento do array que está dentro de outro array
const [, [, nota]] = [[, 8, 8], [9, 10, 6]]
console.log(nota)