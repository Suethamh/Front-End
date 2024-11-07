var frasePalavras = prompt("Digite uma frase qualquer:");

var fraseDividida = frasePalavras.split(" ");
fraseDividida.sort();

var agrupadasPorLetra = {};

function agruparPalavras(palavra) {
    var primeiraLetra = palavra.charAt(0).toLowerCase();

    if (!agrupadasPorLetra[primeiraLetra]) {
        agrupadasPorLetra[primeiraLetra] = [];
    }
    
    agrupadasPorLetra[primeiraLetra].push(palavra);
}

for (var i = 0; i < fraseDividida.length; i++) {
    agruparPalavras(fraseDividida[i]);
}

for (var letra in agrupadasPorLetra) {
    document.write("<h3>Palavras começadas com a letra " + letra + ":</h3>");
    document.write("<ul>");
    for (var j = 0; j < agrupadasPorLetra[letra].length; j++) {
        document.write("<li>" + agrupadasPorLetra[letra][j] + "</li>");
    }
    document.write("</ul>");
}
