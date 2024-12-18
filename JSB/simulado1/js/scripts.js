window.addEventListener("DOMContentLoaded", function(){
    
    var nome = document.getElementById("nome");
    var idade = document.getElementById("idade");
    var btnSelecionar = document.getElementById("btnSelecionar")

    
    
    btnSelecionar.addEventListener("click", function(){
        var passatempo = document.getElementById("passaTempo");
        var opcaoEscolhida = passatempo.value;

        if(nome.value == "" || nome.value == undefined || nome.value == null || idade.value < 1 || idade.value > 130 || passatempo.value == "selecione") {
            alert("Há informações faltando ou inválidas")
        }else{
            var informacoes = 
            {"nome": nome.value, "idade": idade.value, "passatempo": opcaoEscolhida}
            
            localStorage.setItem("informacoes", JSON.stringify(informacoes));
            window.location.href = "aguarde.html"
        }

    })

})
