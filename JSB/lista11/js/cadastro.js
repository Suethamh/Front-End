window.addEventListener("DOMContentLoaded", function () {
    const nome = document.getElementById("txtNome");
    const senha = document.getElementById("txtSenha");
    const senhaValidacao = document.getElementById("txtSenhaValidacao");
    const btnCadastro = document.getElementById("btnCadastro");
    const erroUsuario = new Audio("../audio/usuarioErro.mp3");

    // Inicializa a lista de usuários no localStorage, se não existir
    if (!localStorage.getItem("usuarios")) {
        localStorage.setItem("usuarios", JSON.stringify([])); // Cria um array vazio
    }

    btnCadastro.addEventListener("click", function () {
        // Validações
        if (!nome.value || !senha.value || !senhaValidacao.value) {
            erroUsuario.play();
            alert("Preencha todos os campos!");
            return;
        }

        if (senha.value !== senhaValidacao.value) {
            erroUsuario.play();
            alert("As senhas informadas são diferentes!");
            return;
        }

        // Cria o objeto do usuário
        const usuario = {
            nome: nome.value,
            senha: senha.value, // Em produção, use hash para senhas!
        };

        // Recupera a lista de usuários do localStorage
        let usuarios = JSON.parse(localStorage.getItem("usuarios"));

        // Verifica se a lista de usuários é válida
        if (!Array.isArray(usuarios)) {
            usuarios = []; // Se não for um array, inicializa como array vazio
        }

        // Adiciona o novo usuário à lista
        usuarios.push(usuario);

        // Atualiza o localStorage com a nova lista de usuários
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        alert("Usuário cadastrado com sucesso!");
        window.location.href = "index.html";
    });
});