const showAllUsers = (usuarios) => {
    usuarios.forEach(pessoa => console.log(`nome: ${pessoa.nome} Sexo: ${pessoa.sexo}`))
}

const showMachos = (usuarios, gender) => {
    usuarios.filter(user => user.sexo == gender).forEach(pessoa =>{
        console.log(pessoa.nome);
    })
}

const manageUsers = {
    showAllUsers,
    showMachos
}

export default manageUsers;