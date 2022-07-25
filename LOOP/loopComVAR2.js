const funcs = []

for(var i=0; i<10; i++) {
    //add um novo elemento no array e add uma fç anônima
    funcs.push(function() {
        console.log(i)
    })
}

//Pelo fato do VAR não ter escopo de fç então o valor que será imprimido sempre será 10
funcs[2]()
funcs[8]()