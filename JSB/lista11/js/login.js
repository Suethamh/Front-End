window.addEventListener("DOMContentLoaded", function(){

    const nome = document.getElementById("txtNome");
    const senha = document.getElementById("txtSenha");
    const btnLogin = document.getElementById("btnLogin");

    var usuario = JSON.parse(localStorage.getItem("usuario"));

    const nomeCadastro = usuario.nome;
    const senhaCadastro = usuario.senha;

    btnLogin.addEventListener("click", function(){
        if(nome.value == nomeCadastro && senha.value == senhaCadastro){
            window.location.href = "jogo.html";
        }
        else{
            alert("Nome ou senha inválido");
        }
    })
})