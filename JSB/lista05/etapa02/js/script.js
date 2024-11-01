var nomeCompleto = prompt("informe seu nome completo");


//exibe a quantida de caracteres
document.write(`<p>o nome ${nomeCompleto} possui ${nomeCompleto.length} caracteres</p>`)

//exibe a primeira letra
document.write(`<p>a primera letra do nome é ${nomeCompleto.charAt(0)}</p>`)

//exibe todas as letras do nome em maiusculo
document.write(`<p>o nome em maiusculo fica assim: ${nomeCompleto.toUpperCase()}</p>`)

//exibe todas as letras em minusculo
document.write(`<p>o nome em minusculo fica assim: ${nomeCompleto.toLowerCase()}</p>`)

//exibe o primeiro nome
var nomeSeparado = nomeCompleto.split(" ")
var primeiroNome = nomeSeparado[0];
var ultimoNome = nomeSeparado[nomeSeparado.length - 1];

document.write(`<p>O primeiro nome é: ${primeiroNome}</p>`)

//exibe o ultimo nome
document.write(`<p>O ultimo nome é: ${ultimoNome}</p>`)

//exibe o primeiro nome concatenado com o ultimo
var primeiroUltimoNomeJuntos = primeiroNome.concat(ultimoNome)
document.write(`<p>O primeiro com o ultimo nome é: ${primeiroUltimoNomeJuntos}</p>`)

//exibe o primeiro nome concatenado com o ultimo (tudo em maiusculo)
document.write(`<p>O primeiro com o ultimo nome é, em maiusculo: ${primeiroUltimoNomeJuntos.toUpperCase()}</p>`)

//exibe quantas palavras tem o nome
document.write(`<p>O nome completo tem ${nomeSeparado.length} palavras</p>`)

//exibe as inicias do nome em letras maiusculas e concatenadas
var inicial = [];
for(var i in nomeSeparado) {
    inicial[i] = nomeSeparado[i].charAt(0).toUpperCase();
}

var iniciaisJuntas = inicial.join("")

document.write(`<p>As inicias em maiusculo são ${iniciaisJuntas}</p>`)


