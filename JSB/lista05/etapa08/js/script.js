function inverterTexto(texto){
    return texto.split("").reverse().join("");
}

texto = prompt("Escreva o texto para verificar se é um palíndromo")
textoInvertido = inverterTexto(texto);

if(textoInvertido.replaceAll(" ", "") == texto.replaceAll(" ", "") ? alert("é um palíndromo") : alert("não é um palindromo"));