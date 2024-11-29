var txtUser = document.getElementById("txtUser")
var txtPwd = document.getElementById("txtPwd")
var btnCadastrar = document.getElementById("btnCadastrar")

function checkUser(username, users){
    for(var i in users){
        if(username == users[i].username){
            return true;
        }
    }
    return false;
}

btnCadastrar.addEventListener("click", function(){
    var newUser = {username: txtUser.value, password: txtPwd.value}
    
    var users = localStorage.getItem("users");
    //1ª situação: primeiro usuario
    if(!users){
        localStorage.setItem("users", JSON.stringify([newUser]))
    }
    //2ª situação: outros usuários
    else{
        users = JSON.parse(users);
        var existente = checkUser(txtUser.value, users)
        if(!existente){
            users.push(newUser);
            localStorage.setItem("users", JSON.stringify(users))

        }else{
            alert("Usuário já cadastrado")
        }
    }

})
