window.addEventListener("DOMContentLoaded", function(){

    const idades = [10, 21, 32, 49];
    const idadeInformada = parseInt(prompt("Insira uma idade"))

    console.log("soma: " + idades.reduce((somaTotal, idade) =>{
        somaTotal += idade;
        return somaTotal
    }, 0))

    console.log("Média: " + idades.reduce((somaTotal, idade) =>{
        somaTotal += idade;
        return somaTotal / idades.length;
    }, 0).toFixed(2))

    console.log("Maior idade: " + idades.reduce((max, idade) =>{
        if(idade > max) max = idade
        return max
    }, 0))

    console.log("Idades ímpares: " + idades.filter(idade =>{
        return (idade % 2) != 0
    }))

    console.log("São todos maiores de idade: " + idades.every(idade => {
        return idade >= 18
    }))

    console.log(`São todos maiores que ${idadeInformada}: ` + idades.every(idade => {
        return idade >= idadeInformada;
    }))

    console.log("Maiores que " + idadeInformada + ": ")
    idades.forEach(idade => {
        if(idade >= idadeInformada) console.log(idade)
    })

    let maiores = 0
    idades.forEach(idade => {
        if(idade >= idadeInformada){
            maiores++
        }
    })


    console.log(`Média das idade maiores que ${idadeInformada}: ` + idades.reduce((somaTotal, idade) =>{
        if(idade >= idadeInformada){
            somaTotal += idade;
        }
        return somaTotal / maiores;
    }, 0).toFixed(2))
})