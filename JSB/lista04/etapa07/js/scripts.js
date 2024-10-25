const alfabeto = 'abcdefghijklmnopqrstuvwyz'
var letras = [];
var numeros = [];


for(var i=0; i<4; i++) {
    var nroAleatorio = parseInt(Math.random() * alfabeto.length);
    letras[i] = alfabeto.charAt(nroAleatorio);
    numeros[i] = parseInt(Math.random() * 10);
}

console.log(letras, numeros);
