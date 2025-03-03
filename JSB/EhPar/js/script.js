window.addEventListener("DOMContentLoaded", function(){

    const nivel = document.getElementById("nivel");
    const tempo = document.getElementById("tempo");
    const btnIniciar = document.getElementById("btnIniciar");
    const btnPausar = document.getElementById("btnPausar");
    const btnParar = document.getElementById("btnParar");
    const numero = document.getElementById("numero");
    const acertos = document.getElementById("acertos");
    const acertosPorcentagem = document.getElementById("acertosPorcentagem");
    const erros = document.getElementById("erros");
    const numPares = document.getElementById("numPares");

    var numRandom;
    var acertosAtuais = 0;
    var errosAtuais = 0;
    var paresAtuais = 0;

    function mudarnumero(){
        numRandom = Math.floor((Math.random() * 100) + 1);
        numero.innerHTML = numRandom;
        numero.style.color = "black";

        if(numRandom % 2 == 0){
            paresAtuais += 1;
            numPares.innerHTML = paresAtuais;
        }
    }
    
    numero.addEventListener("click", function(){
        numeroAtual = parseInt(numero.innerHTML)
        
        if(numeroAtual % 2 == 0){
            numero.style.color = "green";
            acertosAtuais += 1;
        }else{
            numero.style.color = "red";
            errosAtuais += 1;
        }

        acertos.innerHTML = acertosAtuais;
        erros.innerHTML = errosAtuais;

        
    })

    function mudarPorcentagem(){
        if (paresAtuais > 0) {
            const porcentagemAcertos = ((acertosAtuais / paresAtuais) * 100).toFixed(2);
            acertosPorcentagem.innerHTML = `${porcentagemAcertos}%`;
        } else {
            acertosPorcentagem.innerHTML = "0.00%";
        }
    }

    var jogo;
    var porcentagem;

    function play(dificuldade){
        jogo = setInterval(mudarnumero, dificuldade);
        porcentagem = setInterval(mudarPorcentagem, dificuldade);
    }

    btnIniciar.addEventListener("click", function(){
        if(nivel == "facil"){
            play(1500);

        }else if(nivel == "medio"){
            play(1000);

        }else if(nivel == "dificil"){
            play(750);

        }else{
            alert("selecione o nível do jogo");
        }
    })

    btnPausar.addEventListener("click", function(){
        clearInterval(jogo);
        clearInterval(porcentagem);
    })

    btnParar.addEventListener("click", function(){
        clearInterval(jogo);
        clearInterval(porcentagem);
        acertosAtuais = 0;
        errosAtuais = 0;
        paresAtuais = 0;
        acertos.innerHTML = acertosAtuais;
        erros.innerHTML = errosAtuais;
        numPares.innerHTML = paresAtuais;
        acertosPorcentagem.innerHTML = "0.00%";
    })

})