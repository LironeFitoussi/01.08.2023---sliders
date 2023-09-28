console.log("Test");
function fetchMovies(categ ="popular") {
    fetch(`https://api.themoviedb.org/3/movie/${categ}?language=en-US&page=1&api_key=df5fe72df0888382e4148e21f58c70b8`)
    .then(response => response.json())
    .then(data => {
        const moviesArr = data.results
        console.log(moviesArr);
        const backdropPath = moviesArr[0].backdrop_path
        const posterSource = moviesArr[0].poster_path
        const testImg = document.createElement("img")
        testImg.src = `http://image.tmdb.org/t/p/w500${posterSource}`
        document.body.innerHTML += testImg.outerHTML
        testImg.src = `http://image.tmdb.org/t/p/w500${backdropPath}`
        document.body.innerHTML += testImg.outerHTML
    })
    .catch(err => console.error(err));

    console.log();
}

fetchMovies("top_rated")
  