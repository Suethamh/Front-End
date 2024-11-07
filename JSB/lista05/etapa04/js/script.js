var nomeCompleto = prompt("informe seu nome completo");

var nomeSeparado = nomeCompleto.split(" ")
var primeiroNome = nomeSeparado[0];
var ultimoNome = [];

for(var i=1; i<nomeSeparado.length; i++){
   ultimoNome += nomeSeparado[i] + " ";
}

alert(`seu nome é: ${primeiroNome.toUpperCase()} ${ultimoNome.toLowerCase()}`)
