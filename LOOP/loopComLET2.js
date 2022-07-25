const funcs = []

for (let i=0; i<10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

// como a variavel i tem escopo de bloco ela guarda na memória o valor que tinha nessas posições chamadas
funcs[2]()
funcs[8]()