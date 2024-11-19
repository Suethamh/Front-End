var boneco = document.getElementById("boneco");
var txt = document.getElementById("txt");

boneco.addEventListener("mouseenter", function() {
    boneco.src = "img/assustado.png";
    txt.innerHTML = "O que você quer??"; 
})

boneco.addEventListener("mouseleave", function() {
    boneco.src = "img/pensativo.png";
    txt.innerHTML = "zzzzzzzzzz";
})

boneco.addEventListener("click", function() {
    var nome = prompt("Qua o seu nome?")
    if(nome == undefined || nome == "" || nome == null) {
        boneco.src = "img/nervoso.png";
        txt.innerHTML = "Não me faça perder meu tempo!";
    }else{
        boneco.src = "img/alegre.png";
        txt.innerHTML = `${nome}, seja bem-vindo`;
    }
})

