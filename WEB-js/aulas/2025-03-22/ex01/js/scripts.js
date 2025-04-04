window.addEventListener("DOMContentLoaded", function(){
/*
    function showMsg(){
        alert("Hello, World!")
    }
    showMsg()

    -- 1) função declarativa
    function soma(x, y){
        alert(x+y);
    }
    console.log(soma(10, 20));

    -- 2) função literal
    const s1 = function somar() {
        console.log(10+20);
    }

    -- 3) função anônima
    const s2 = function() {
        console.log(10+20);
    }
    s2();
    
    -- Arrow function
    const exibir = x => alert(x);
    
    exibir("Matheus")
    
*/

    const somaEhPar = (a, b) => alert((a+b)%2 == 0);
    somaEhPar(10, 2)


});