const alfabeto = 'abcdefghijklmnopqrstuvwyz'
var letras = [];


for(var i=0; i<4; i++) {
    var nroAleatorio = parseInt(Math.random() * alfabeto.length);
    letras[i] = alfabeto.charAt(nroAleatorio);
}

console.log(letras);


