var qtdPassageiros = parseInt(prompt("Qauntos passageiros irão?"));

var idade = [];
var nome = [];

for(var i=0; i<qtdPassageiros; i++) {
    idade[i] = parseInt(prompt(`qual a idade do ${i+1}º passageiro`));
    nome[i] = prompt(`qual o nome do ${i+1}º passageiro`);
}

var soma = 0;

for(var i=0; i<qtdPassageiros; i++) {
    soma += idade[i];
}

document.write(`<p>a idade média dos passageiros é de ${soma / qtdPassageiros}</p>`);

var sorteado = parseInt(Math.random() * qtdPassageiros);

document.write(`<p>O passageiro sorteado foi o ${nome[sorteado]}</p>`)