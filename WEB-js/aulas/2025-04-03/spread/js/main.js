window.addEventListener("DOMContentLoaded", () => {
    let vet1 = [10, 20, 30];
    let vet2 = [40, 50, 60];
    let vet3 = [...vet1, ...vet2]

    let maior = Math.max(...vet1)
    console.log(vet3)
    console.log(maior)

    const user1 = {nome: "Matheus", idade:18}
    const user2 = {...user1}
    
    console.log(user1)
    console.log(user2)

    const user3 = {...user1, sexo: "M"}
    console.log(user3)

    const user4 = {...user1, idade: 19}
    console.log(user4)
    

})