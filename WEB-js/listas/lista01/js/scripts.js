window.addEventListener("DOMContentLoaded", function(){

    vetAges = [10,21,31,40];

    const mediaIdade = vetAges =>{
        soma = 0;
        for (i in vetAges){
            soma += vetAges[i];
        }
        alert("media = " + soma/(vetAges.length));
    }

    mediaIdade(vetAges);

    const maiorIdade = vetAges =>{
        maior = vetAges[0];
        for(i in vetAges){
            if(vetAges[i] > maior){
                maior = vetAges[i];
            }
        }

        alert("maior idade = " + maior);
    }

    maiorIdade(vetAges);

})