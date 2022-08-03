// ctrl + alt + n

function rand([ min = 0, max = 1000 ]) {
    //se o min for maior que o max inverta as variáveis
    if(min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min // para poder deslocar intervalo dando sempre um resultado entre o valor min e o valor max 
    return Math.floor(valor) // arredondar o p baixo
}

console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([]))