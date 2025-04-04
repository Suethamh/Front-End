window.addEventListener("DOMContentLoaded", function(){

    const maior = (a,b) => (a>b) ? a : b
    console.log(maior(13,20))

    const vet = [23,10,4,65,5,27,51,14,15,33];
    const ref = 20;
    const vet2 = [10,20,30]

    vet.forEach((x, i) => {
        if(x > ref){
            console.log(`[${i}] -> ${x}`)
        }
    })

    console.log(vet2.map(x => x*2))

    console.log(vet.filter(x => x >= 15))

    console.log(vet.every(x => x >= 15))
    
    console.log(vet.some(x => x >= 15))

    console.log(vet2.reduce((total, x) => total + x, 0)/vet2.length)

})