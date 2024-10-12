var jog1 = parseInt((Math.random() * 3) + 1);
var jog2 = parseInt((Math.random() * 3) + 1);

//1 = pedra, 2 = papel, 3 = tesoura
var jogada = ["pedra", "papel", "tesoura"];

document.write(`<h1>Jogador 1 jogou ${jogada[jog1 - 1]}</h1>`)
document.write(`<img src="img/${jogada[jog1 - 1]}.png" alt="${jogada[jog1 - 1]}"`)
document.write(`<br><h1>Jogador 2 jogou ${jogada[jog2 - 1]}</h1>`)
document.write(`<img src="img/${jogada[jog2 - 1]}.png" alt="${jogada[jog2 - 1]}" <br>`)

if(jog2 == jog1) {
    document.write("<h1>Empate</h1>")
} else if((jog1 == 1 && jog2 == 3) || (jog1 == 2 && jog2 == 1) || (jog1 == 3 && jog2 == 2)) {
    document.write("<h1>Jogador 1 venceu</h1>");
} else {
    document.write("<h1>Jogador 2 venceu</h1>");
}