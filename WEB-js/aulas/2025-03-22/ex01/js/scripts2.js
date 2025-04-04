window.addEventListener("DOMContentLoaded", function(){
    var vet = [10, 21, 32, 49];

    const imprimirVet = vet => {
        for(let i in vet){
            console.log(vet[i]);
        }
    }

    imprimirVet(vet);

    const ehPar = x => (x%2 == 0) ? console.log("Par") : console.log("Impar")

    ehPar(10)
    ehPar(11)

    vet.forEach(ehPar);
})