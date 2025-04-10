const instanciaObj = () => {
    let xhttp = new XMLHttpRequest();
    let file = "json/cliente.json"

    xhttp.onload = () => document.getElementById("texto").innerHTML = xhttp.responseText;


    xhttp.open("GET", file, true);
    xhttp.send();
}

export default instanciaObj;
