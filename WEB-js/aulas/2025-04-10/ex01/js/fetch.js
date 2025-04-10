const metodoFetch = () => {

    let file = "json/cliente.json"
    fetch(file)
        .then(response => response.text())
        .then(data => document.getElementById("texto").innerHTML = data)
}

export default metodoFetch;