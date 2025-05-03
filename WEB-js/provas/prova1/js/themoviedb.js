const getMovies = async () => {
    
    const options = await {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZmFkNTdkY2Q3MzRmZjk1YjAxYTNlMjI5MjQ1YjVlNSIsIm5iZiI6MTc0NjEwNDM5Ny41NDQsInN1YiI6IjY4MTM3MDRkNmMzNDI2YzQyZWIxZmM3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tqPctLxFHn6unPCQ74LyMwafz7vm1NemolNmPxeHPX8'
        }
      };

    try{
        const response = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&", options)
        const filmes = await response.json()
        return {
            ...filmes,
            results: filmes.results.slice(0,10)
        };
    }catch(error){
        console.log(error)
        return [];
    }
}

const getGenres = async () =>{
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZmFkNTdkY2Q3MzRmZjk1YjAxYTNlMjI5MjQ1YjVlNSIsIm5iZiI6MTc0NjEwNDM5Ny41NDQsInN1YiI6IjY4MTM3MDRkNmMzNDI2YzQyZWIxZmM3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tqPctLxFHn6unPCQ74LyMwafz7vm1NemolNmPxeHPX8'
        }
    };
      
    const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=pt-br', options)
    const generos = await response.json()
    return generos
}

const filmes = {
    getMovies,
    getGenres
}

export default filmes;