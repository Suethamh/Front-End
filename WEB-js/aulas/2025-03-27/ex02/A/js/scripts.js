window.addEventListener("DOMContentLoaded", function(){

    const pessoas = [
        {nome: "Ana", idade: 18, genero:"F", salario: 1000},
        {nome: "João", idade: 20, genero:"M", salario: 3000},
        {nome: "César", idade: 33, genero:"M", salario: 1900},
        {nome: "Maria", idade: 12, genero:"F", salario: 7000},
        {nome: "Zé", idade: 17, genero:"M", salario: 2400}
    ]

    console.table(pessoas)

    
    //exibir o nome e idade de todas as pessoas maiores de idade
    pessoas.forEach(pessoa => {
        if(pessoa.idade >= 18) console.log(pessoa.nome, pessoa.idade)
    })

    //exibir os nome de todas as pessoas do sexo masculino
    console.log(pessoas.filter(pessoa => pessoa.genero == "M"))

    
    //há alguma mulher que ganha acima de 5000
    console.log(pessoas.some(pessoa => pessoa.genero == "F" && pessoa.salario > 5000))
    
    //media dos salario dos homens e das mulheres
    let homens = 0
    pessoas.forEach(pessoa => {
        if(pessoa.genero == "M"){
            homens++;
        }
    })

    console.log(pessoas.reduce((total, pessoa) => {
        if(pessoa.genero == "M"){
            total += pessoa.salario;
        }
        return total / homens
    }, 0).toFixed(2))

    let mulheres = 0
    pessoas.forEach(pessoa => {
        if(pessoa.genero == "F"){
            mulheres++;
        }
    })

    console.log(pessoas.reduce((total, pessoa) => {
        if(pessoa.genero == "F"){
            total += pessoa.salario;
        }
        return total / mulheres
    }, 0).toFixed(2))
    
    //exibir os dados da pessoas com maior salario
    let maior = pessoas.reduce((max, pessoa) =>{
        if(pessoa.salario > max){
            max = pessoa.salario
        }
        return max
    }, 0)

    pessoas.forEach(pessoa => {
        if(pessoa.salario == maior) console.log(pessoa);
    })



})