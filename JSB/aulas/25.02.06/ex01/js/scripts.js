window.addEventListener("DOMContentLoaded", function(){
    var caixa = document.getElementById("caixa");
    var btnGerar = document.getElementById("btnGerar");
    var btnGerar2 = document.getElementById("btnGerar2");
    var btnGerar3 = document.getElementById("btnGerar3");
    
    
    btnGerar.addEventListener("click", function () {
        var pNovo = document.createElement("p");
        pNovo.textContent = "Matheus Henrique"
    
        caixa.appendChild(pNovo);
    })
    
    btnGerar2.addEventListener("click", function(){
        var pNovo = document.createElement("p");
        pNovo.innerHTML = "Instituto <strong>Federal</strong> do Triangulo Mineiro"
        caixa.appendChild(pNovo)
    })
    
    btnGerar3.addEventListener("click", function(){
    var div = document.createElement("div");
    var img = document.createElement("img");
    var p = document.createElement("p");

    p.textContent = "Pâmella gatinha, fiu fiu!!";
    img.setAttribute("src", "img/PamellaGata.jpg"); 

    
    div.appendChild(img);
    div.appendChild(p);

    document.getElementById("caixa").appendChild(div)
    })
})