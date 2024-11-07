var texto = prompt("escreva um texto");
var letra = prompt("escreva a letra que quer começar");

var textoSeparado = texto.split(" ");
var palavraEcontrada = textoSeparado.filter(palavra => palavra.startsWith(letra));

document.write(`<p>As palvras que começam com a letra "${letra}" são ${palavraEcontrada.join(" ")}</p>`);
