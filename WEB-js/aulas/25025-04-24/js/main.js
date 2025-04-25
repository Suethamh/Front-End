import getCats from "./thecatapi.js"

window.addEventListener("DOMContentLoaded", () => {
    
    const btnCats = document.getElementById("btnCats")

    btnCats.addEventListener("click", showCats)
})

const showCats = async () => {
    showMsgAlerta("Processando. Aguarde...")
    const vetCats = await getCats();
    // Tem gato pra exibir
    if(vetCats.length > 0){
        const catPanel = document.getElementById("catPanel")
        
        vetCats.forEach(gato => {
            const img = document.createElement("img");
            img.src = gato.url;
            img.className = "cat";
            img.alt = "gatinho";
    
            catPanel.appendChild(img)
            console.log(gato)
        });

        showMsgAlerta("")
    }
    //Houve um erro e não tem gatos para exibir
    else{
        showMsgAlerta("Erro no carregamento de gatinhos")
    }
}

const showMsgAlerta = (msg) =>{
    document.getElementById("msgAlerta").innerHTML = msg;
}

//live_ilRDpJEbCNJpuNT50Wh3turFMMcaDFswdOhckLLMaC9so9ColBC4naiPasUkTK36

