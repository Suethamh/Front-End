window.addEventListener("DOMContentLoaded", function(){

    const nome = document.getElementById("txtNome");
    const senha = document.getElementById("txtSenha");
    const btnLogin = document.getElementById("btnLogin");
    const erroUsuario = new Audio("../audio/usuarioErro.mp3");

    var usuarios = JSON.parse(localStorage.getItem("usuarios"));


    btnLogin.addEventListener("click", function(){

        const usuarioValido = usuarios.find(
            (usuario) => usuario.nome === nome.value && usuario.senha === senha.value
        );

        if (usuarioValido) {
            window.location.href = "jogo.html";
        } else {
            erroUsuario.play();
            alert("Nome ou senha inválidos!");
        }
    })
})