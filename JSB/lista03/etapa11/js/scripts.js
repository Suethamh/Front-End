var cartas = [];

for(var i=0; i<12; i++) {
    var cartaAleatoria = parseInt((Math.random() * 27) + 1);
    if(!cartas.includes(cartaAleatoria)){
        cartas.push(cartaAleatoria);
    } else {
        i--;
    }
}

document.write(`<h1>Jogador 1</h1>`)
for(var i=0; i<3; i++){
    document.write(`<img src="img/carta${cartas[i]}.png" alt="carta${cartas[i]}">`);
}
document.write(`<br>`);

document.write(`<h1>Jogador 2</h1>`)
for(var i=3; i<6; i++){
    document.write(`<img src="img/carta${cartas[i]}.png" alt="carta${cartas[i]}">`);
}
document.write(`<br>`);

document.write(`<h1>Jogador 3</h1>`)
for(var i=6; i<9; i++){
    document.write(`<img src="img/carta${cartas[i]}.png" alt="carta${cartas[i]}">`);
}
document.write(`<br>`);

document.write(`<h1>Jogador 4</h1>`)
for(var i=9; i<12; i++){
    document.write(`<img src="img/carta${cartas[i]}.png" alt="carta${cartas[i]}">`);
}
document.write(`<br>`);