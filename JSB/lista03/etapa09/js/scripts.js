var pessoas = [];

var numeroPessoas = parseInt(prompt("Qauntas pessoas?"));

for(var i=0; i<numeroPessoas; i++) {
    pessoas[i] = prompt("Qual o nome?")
}

for (let i = pessoas.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pessoas[i], pessoas[j]] = [pessoas[j], pessoas[i]];
}

document.write("<h1>Ordem de Apresentação dos Grupos</h1>");
document.write(`<div>`)
for (var i = 0; i < pessoas.length; i++) {
    document.write(`<p>${i + 1}º: ${pessoas[i]}</p>`);
}
document.write(`</div>`)