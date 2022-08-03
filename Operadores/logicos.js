/*V e V -> V
V e F -> F
F e V -> F
F e F -> F

V ou V -> V
V ou F -> V
F ou V -> V
F ou F -> F

V xou V -> F
V xou F -> V
F xou V -> V
F xou F -> F

!V -> F negação lógica
!F -> V negação lógica
*/

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwise xou "ou excluisivo"
    const manterSaudavel = !comprarSorvete //operador unário

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel} // criando um obj
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))