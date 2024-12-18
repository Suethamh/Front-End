window.addEventListener("DOMContentLoaded", function() {
    
    var nomeRegistrado = document.getElementById("nomeRegistrado")
    var btnMudar = document.getElementById("btnMudar")

    var jsonObj = JSON.parse(localStorage.getItem("informacoes"))

    var nomeClinte = jsonObj.nome;
    var nomeCortado = nomeClinte.split(" ");
    nomeRegistrado.innerHTML = nomeCortado[0];

    var carros =[
        {foto: "img/civic.jpg", fabricante: "Honda", nome: "Civic", potencia: "150cv", garantia: "3 anos", consumo: "9,7 Km/l"},
        {foto: "img/corolla.jpg", fabricante: "Toyota", nome: "Corolla", potencia: "144cv", garantia: "3 anos", consumo: "10,6 Km/l"},
        {foto: "img/troller.jpg", fabricante: "Ford", nome: "Troller", potencia: "200cv", garantia: "3 anos", consumo: "7,7 Km/l"},
        {foto: "img/wrangler.jpg", fabricante: "Jeep", nome: "Wrangler", potencia: "199cv", garantia: "2 anos", consumo: "3,1 Km/l"}
    ]

    var fotoCarro = document.getElementById("fotoCarro");
    var fabricante = document.getElementById("fabricante");
    var nome = document.getElementById("nome");
    var potencia = document.getElementById("potencia");
    var garantia = document.getElementById("garantia");
    var consumo = document.getElementById("consumo");

    var index = jsonObj.passatempo == "shopping" ? 0 : 2; 
    var endIndex = jsonObj.passatempo == "shopping" ? 2 : 4;
    
    fotoCarro.src = carros[index].foto;
    fabricante.innerHTML = carros[index].fabricante; 
    nome.innerHTML = carros[index].nome; 
    potencia.innerHTML = carros[index].potencia; 
    garantia.innerHTML = carros[index].garantia; 
    consumo.innerHTML = carros[index].consumo;

    function proximoSlide() { 
        if (index >= endIndex) { 
            index = jsonObj.passatempo == "shopping" ? 0 : 2; 
        } 
        
        fotoCarro.src = carros[index].foto;
        fabricante.innerHTML = carros[index].fabricante; 
        nome.innerHTML = carros[index].nome; 
        potencia.innerHTML = carros[index].potencia; 
        garantia.innerHTML = carros[index].garantia; 
        consumo.innerHTML = carros[index].consumo;

        console.log(index); 

        index = parseInt(index + 1); 
    } 
    
    setInterval(proximoSlide, 2000)

    btnMudar.addEventListener("click", function(){
        window.location.href = "index.html";
    })
})