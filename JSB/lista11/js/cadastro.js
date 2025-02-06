window.addEventListener("DOMContentLoaded", function(){


    const nome = document.getElementById("txtNome");
    const senha = document.getElementById("txtSenha");
    const senhaValidacao = document.getElementById("txtSenhaValidacao");
    var btnCadastro = document.getElementById("btnCadastro");


    btnCadastro.addEventListener("click", function(){
        if(nome.value == null || nome.value == undefined || nome.value == "" || senha.value == null || senha.value == undefined || senha.value == ""){
            alert("Nome ou senha inválido");
        }
        else if(senhaValidacao.value == " "){
            alert("Confirme sua senha")
        }
        else if(senha.value != senhaValidacao.value){
            alert("As senhas informadas são diferentes")
        }
        else{
            var usuario = {nome: nome.value, senha: senha.value};
            localStorage.setItem("usuario", JSON.stringify(usuario));
            window.location.href = "index.html";
        }

    })

})