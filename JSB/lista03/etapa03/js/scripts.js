var limite = parseInt(prompt("qual o limite de numero que vc deseja?"))
var nroAleatorio = parseInt((Math.random() * limite) + 1);

document.write(`numero aleatório entre 1 e ${limite}: ${nroAleatorio}`)