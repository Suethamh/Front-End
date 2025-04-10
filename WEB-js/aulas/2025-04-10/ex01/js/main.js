import instanciaObj from "./xhttp.js";
import metodoFetch from "./fetch.js";

window.addEventListener("DOMContentLoaded", () => {
    const xhttpBtn = document.getElementById("xhttpBtn");
    const fetchBtn = document.getElementById("fetchBtn")


    xhttpBtn.addEventListener("click", () => {
        instanciaObj()
    })

    fetchBtn.addEventListener("click", () => {
        metodoFetch()
    })
})