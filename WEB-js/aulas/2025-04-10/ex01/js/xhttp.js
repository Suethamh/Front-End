const instanciaObj = () => {
    let xhttp = new XMLHttpRequest();
    let file = "https://suethamh.github.io/Front-End/WEB-js/aulas/2025-04-10/ex01/json/cliente.json"

    xhttp.onload = () => document.getElementById("txtXhttp").innerHTML = xhttp.responseText;


    xhttp.open("GET", file, true);
    xhttp.send();
}

export default instanciaObj;
