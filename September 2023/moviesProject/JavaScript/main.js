function fetchMovies() {
    fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=df5fe72df0888382e4148e21f58c70b8`)
    .then(response => response.json())
    .then(data => {
        const moviesArr = data.results;
        const tenTopMovies = new Array;
        for (let i = 0; i < 10; i++) {
            tenTopMovies.push(moviesArr[i]);
        } 
        tenTopMovies.forEach(movie => {
            console.log(movie);
            const newDiv = $("<div>");
            newDiv.addClass("topMovies");
            newDiv.css("background-image", `url(http://image.tmdb.org/t/p/w500${movie.backdrop_path})`);
            newDiv.append(`
                <div class="movieContent">
                    <h1>${movie.original_title}<h1>
                </div>
            `)
            $("header").append(newDiv);
        });
          
        // console.log(tenTopMovies);
        // const posterPath = moviesArr[0].poster_path;
        // const posterImg = document.createElement("img");
        // posterImg.src = `http://image.tmdb.org/t/p/w500${posterPath}`;
        // $("main").append(posterImg);

        // const backdropPath = moviesArr[0].backdrop_path;
        // const backdropImg = document.createElement("img");
        // backdropImg.src = `http://image.tmdb.org/t/p/w500${backdropPath}`;
        // $("main").append(backdropImg);
    })
    .catch(err => console.error(err));
}

fetchMovies();
  