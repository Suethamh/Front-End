var numeroDecimal = parseInt(prompt("escreva um numero para saber os binarios e hexadecimais até ele"));

function decimalParaBinario(numero){
    return numero.toString(2);
}

function decimalParaHexa(numero){
    return numero.toString(16);
}

document.write
(`
    <table border="1">
        <thead>
            <tr>
                <td>Base decimal</td>
                <td>Base binária</td>
                <td>Base hexadecimal</td>
            </tr>
        </thead>
        <tbody>
`)

for(var i=0; i<=numeroDecimal; i++){
    document.write(`
        <tr>
            <td>${i}</td>
            <td>${decimalParaBinario(i)}</td>
            <td>${decimalParaHexa(i)}</td>
        </tr>
    `)
}
document.write
        (`</tbody>
    
    </table>
`)