var texto = prompt("escreva um texto");

var textoSeparado = texto.split(" ");
var primeiraPalavra = textoSeparado[0];
var ultimaPalavra = textoSeparado[textoSeparado.length - 1];

document.write(`<p>A primeira e a última palavra são: ${primeiraPalavra} ${ultimaPalavra}</p>`);
