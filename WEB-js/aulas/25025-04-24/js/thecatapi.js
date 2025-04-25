const getCats = async() => {

    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_ilRDpJEbCNJpuNT50Wh3turFMMcaDFswdOhckLLMaC9so9ColBC4naiPasUkTK36')
        const gatos = await response.json();
        return gatos;

    }catch(error){
        console.log(error)
        return [];
    }

}

export default getCats;