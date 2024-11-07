nome = prompt("Escreva o seu primeiro nome");
sobrenome = prompt("Escreva seu sobrenome");

n = parseInt(prompt("quantas vezes quer que apareça?"));

cor = prompt("Qual cor você quer que apareça? (em inglês)")

nomeCompleto = nome + " " + sobrenome;

for(var i=0; i<n; i++){
    if(i % 2 != 0){
        document.write(`<p style="color: ${cor}">${nomeCompleto}</p>`)

    }else{
        document.write(`<p>${nomeCompleto}</p>`)
    }
}