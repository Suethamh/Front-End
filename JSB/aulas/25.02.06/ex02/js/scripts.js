window.addEventListener("DOMContentLoaded", function(){
    var caixa = document.getElementById("caixa");
    var btnGerar = document.getElementById("btnGerar");
    var btnGerar2 = document.getElementById("btnGerar2");
    var btnGerar3 = document.getElementById("btnGerar3");
    var txtNome = document.getElementById("txtNome");
    
    
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
        
        p.textContent = txtNome.value;
        img.setAttribute("src", "img/PamellaGata.jpg");
        img.setAttribute("name", txtNome.value); 
        
        img.addEventListener("click", mostrar);
        
        div.appendChild(img);
        div.appendChild(p);

        document.getElementById("caixa").appendChild(div)
    })

    function mostrar(e){
        alert(e.currentTarget.name);
    }
})