const matriz = [ 
    ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
    ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
    [0,1,2,3,4,5,6,7,8,9]
];

var senha = [];

for(var i=0; i<8; i++){
    var linha = parseInt(Math.random() * 3);
    var coluna = 0;
    if(linha == 2) {
        coluna = parseInt(Math.random() * 10);
    }else {
        coluna = parseInt(Math.random() * 26);
    }
    senha[i] = matriz[linha][coluna] 
}

console.log(senha);

for(var i=0; i<8; i++)
    document.write(senha[i])
