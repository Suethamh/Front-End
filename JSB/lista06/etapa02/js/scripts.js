function aumentarVoto(numVoto) {
    numVoto.innerHTML = parseInt(numVoto.innerHTML) + 1;
}

var mickey = document.getElementById('mickey');
var minnie = document.getElementById('minnie');
var pluto = document.getElementById('pluto');
var pateta = document.getElementById('pateta');

var mickeyVoto = document.getElementById('votosMickey');
var minnieVoto = document.getElementById('votosMinnie');
var plutoVoto = document.getElementById('votosPluto');
var patetaVoto = document.getElementById('votosPateta');

mickey.addEventListener('click', function() {aumentarVoto(mickeyVoto)});
minnie.addEventListener('click', function() {aumentarVoto(minnieVoto)});
pluto.addEventListener('click', function() {aumentarVoto(plutoVoto)});
pateta.addEventListener('click', function() {aumentarVoto(patetaVoto)});