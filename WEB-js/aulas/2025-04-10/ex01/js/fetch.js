const metodoFetch = () => {

    let file = "https://suethamh.github.io/Front-End/WEB-js/aulas/2025-04-10/ex01/json/cliente.json"
    fetch(file)
        .then(response => response.text())
        .then(data => document.getElementById("txtFetch").innerHTML = data)
}

export default metodoFetch;
