import filmes from "./themoviedb.js"

window.addEventListener("DOMContentLoaded", () => {
    
    const btnMovies = document.getElementById("btnMovies")

    btnMovies.addEventListener("click", showMovies)

})

const showMovies = async () => {
    showMsgAlerta("Processando. Aguarde...");
    const movies = await filmes.getMovies();
    const genres = await filmes.getGenres();

    const vetMovies = movies.results;
    const vetGenres = genres.genres;

    const caminho = "https://image.tmdb.org/t/p/w200";
    const moviePanel = document.getElementById("moviePanel");

    if (vetMovies.length > 0) {
        vetMovies.forEach(filme => {
            const movieCard = document.createElement("div");
            movieCard.className = "movie-card";

            const posterContainer = document.createElement("div");
            
            const img = document.createElement("img");
            img.src = caminho + filme.poster_path;
            img.className = "posterFilme";
            img.alt = filme.title;

            const movieInfo = document.createElement("div");
            movieInfo.className = "movie-info";

            const titulo = document.createElement("h3");
            const dataLancamento = document.createElement("p");
            const avaliacao = document.createElement("p");
            const genero = document.createElement("p");
            const popularidade = document.createElement("p");

            titulo.textContent = filme.title;
            dataLancamento.textContent = `Lançamento: ${filme.release_date}`;
            avaliacao.textContent = `Avaliação: ${filme.vote_average}/10`;
            
            const generosNomes = filme.genre_ids.map(id => {
                const genre = vetGenres.find(g => g.id === id);
                return genre ? genre.name : '';
            }).filter(name => name !== '').join(', ');
            
            genero.textContent = `Gêneros: ${generosNomes}`;
            popularidade.textContent = `Popularidade: ${filme.popularity}`;

            movieInfo.appendChild(titulo);
            movieInfo.appendChild(dataLancamento);
            movieInfo.appendChild(avaliacao);
            movieInfo.appendChild(genero);
            movieInfo.appendChild(popularidade);

            posterContainer.appendChild(img);
            movieCard.appendChild(posterContainer);
            movieCard.appendChild(movieInfo);
            moviePanel.appendChild(movieCard);

            posterContainer.addEventListener("click", () => {
                movieCard.classList.toggle("active");
            });
        });
        showMsgAlerta("");
    } else {
        showMsgAlerta("Erro no carregamento :(");
    }
}

const showMsgAlerta = (msg) => {
    document.getElementById("msgAlerta").innerHTML = msg;
}