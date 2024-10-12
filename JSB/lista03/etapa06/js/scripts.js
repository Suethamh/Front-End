var numeros = [];

for(var i=0; i<6; i++) {
    var numerosAleatotio = parseInt((Math.random() * 60) + 1);
    if(!numeros.includes(numerosAleatorio)){
        numeros.push(numerosAleatorio)
    }else {
        i--;
    }
}

for(var i in numeros) {
    document.write(`<p>${numeros[i]}</p>`)
}