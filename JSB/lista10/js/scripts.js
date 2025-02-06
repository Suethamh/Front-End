window.addEventListener("DOMContentLoaded", function(){

    const nivel = document.getElementById("nivel");
    var minutos = document.getElementById("minutos");
    var segundos = document.getElementById("segundos");
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
        numero.disabled = false;
    }

    numero.disabled = false;
    
    numero.addEventListener("click", function(){
        numeroAtual = parseInt(numero.innerHTML)
        
        if(numeroAtual % 2 == 0){
            numero.style.color = "green";
            acertosAtuais += 1;
        }else{
            numero.style.color = "red";
            errosAtuais += 1;
        }
        numero.disabled = true;
        acertos.innerHTML = acertosAtuais;
        erros.innerHTML = errosAtuais;

        mudarPorcentagem();
    })

    function mudarPorcentagem(){
        if (paresAtuais > 0) {
            const porcentagemAcertos = ((acertosAtuais / paresAtuais) * 100).toFixed(2);
            acertosPorcentagem.innerHTML = `${porcentagemAcertos}%`;
        } else {
            acertosPorcentagem.innerHTML = "0.00%";
        }
    }

    var nivelAtual;
    var jogo;
    var porcentagem;
    var temporizadorMin;
    var temporizadorSeg;

    nivel.addEventListener("change", function() {
        nivelAtual = nivel.value;
        console.log(nivelAtual);
        minutos.innerHTML = 1;
        if(nivelAtual == "facil"){
            segundos.innerHTML = 30;
        
        }else if(nivelAtual == "medio"){
            segundos.innerHTML = 15;
        
        }else if(nivelAtual == "dificil"){
            minutos.innerHTML = 0;
            segundos.innerHTML = 30;
        
        }else if(nivelAtual == "selecione"){
            minutos.innerHTML = 0;
            segundos.innerHTML = 0 + "0";
        }
    });

    function pausar(){
        clearInterval(jogo);
        clearInterval(porcentagem);
        clearInterval(temporizadorSeg);
        clearTimeout(temporizadorMin);
    }

    function parar(){
        nivel.disabled = false;
        clearInterval(jogo);
        clearInterval(porcentagem);
        clearInterval(temporizadorSeg);
        clearTimeout(temporizadorMin);
        nivel.value = "selecione";
        nivelAtual = nivel.value;
        acertosAtuais = 0;
        errosAtuais = 0;
        paresAtuais = 0;
        acertos.innerHTML = acertosAtuais;
        erros.innerHTML = errosAtuais;
        numPares.innerHTML = paresAtuais;
        acertosPorcentagem.innerHTML = "0.00%";
        numero.innerHTML = "_";
    }

    function diminuicaoMin(){
        minutos.innerHTML -= 1;
        segundos.innerHTML = 59;
    }

    function diminuicaoSeg(){
        segundos.innerHTML -= 1;
        if(segundos.innerHTML == 0 && minutos.innerHTML == 0){
            pausar();
        }
    }

    function tempo(){
        clearTimeout(temporizadorMin);
        clearInterval(temporizadorSeg);
        temporizadorSeg = setInterval(diminuicaoSeg, 1000);
    }

    function temporizador(dificuldade){
        if(dificuldade == 1500){
            tempo();
            temporizadorMin = setTimeout(diminuicaoMin, 30000);
        }
        else if(dificuldade == 1000){
            tempo();
            temporizadorMin = setTimeout(diminuicaoMin, 15000);
        }
        else if(dificuldade == 750){
            tempo();
        }
    }

    function play(dificuldade) {
        clearInterval(jogo);
        clearInterval(porcentagem);
        temporizador(dificuldade);
        jogo = setInterval(mudarnumero, dificuldade);
    }

    nivel.disabled = false;

    btnIniciar.addEventListener("click", function(){
        nivel.disabled = true;
        if(nivelAtual == "facil"){
            play(1500);

        }else if(nivelAtual == "medio"){
            play(1000);

        }else if(nivelAtual == "dificil"){
            play(750);

        }else{
            alert("selecione o nível do jogo");
            nivel.disabled = false;
        }
    })

    btnPausar.addEventListener("click", function(){
        pausar();
    })

    btnParar.addEventListener("click", function(){
        parar();
    })

    

})
