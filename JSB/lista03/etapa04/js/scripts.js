var inicio = parseInt(prompt("qual o numero inicial que vc deseja?"))
var limite = parseInt(prompt("qual o limite de numero que vc deseja?"))
var nroAleatorio = parseInt((Math.random() * (limite - (inicio-1))) + inicio);

document.write(`numero aleatório entre ${inicio} e ${limite}: ${nroAleatorio}`)

console.log(nroAleatorio)