window.addEventListener("DOMContentLoaded", function(){

    var aleatorio =  parseInt(((Math.random() * 5) + 6));
    var contador = document.getElementById("contador");

    contador.innerHTML = aleatorio;

    setInterval(function(){
        aleatorio = aleatorio - 1;
        contador.innerHTML = aleatorio;
        if(aleatorio == 0){
            window.location.href = "verVeiculo.html"
        }
    }, 1000)

    
})