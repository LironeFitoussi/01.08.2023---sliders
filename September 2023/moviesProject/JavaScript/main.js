function fetchMovies(page =1) {
    fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}&api_key=df5fe72df0888382e4148e21f58c70b8`)
    .then(response => response.json())
    .then(data => {
        //! header
        
        const moviesArr = data.results;
        const tenTopMovies = [];

        for (let i = 0; i < 10; i++) {
            tenTopMovies.push(moviesArr[i]);
        }

        const genrePromise = fetchMovieGenres();

        tenTopMovies.forEach((movie, index) => {
            const movieDate = new Date(movie.release_date);
            const newDiv = $("<div>");
            const movieContent = $("<div>");
            const movieTitle = movie.original_title;
            newDiv.addClass("topMovies");
            newDiv.attr("id", `topMovies_${index+1}`)
            movieContent.addClass("movieContent");

            genrePromise.then(genres => {
                const genre = genres.find(genre => genre.id === movie.genre_ids[0]);
                if (genre) {
                    movieContent.find(".yearAndGenre span:last-child").text(genre.name);
                }

                if (movieTitle.length > 18) {
                    movieContent.find("h1").addClass("longTitle");
                }
            });

            movieContent.append(`
                <h1>${movieTitle}</h1>
                <div class="yearAndGenre">
                    <span>${movieDate.getFullYear()}</span>
                    <i class="fa-solid fa-circle" style="color: #ffffff;"></i>
                    <span></span>
                </div>
                <p>${movie.overview}</p>
            `);

            newDiv.css("background-image", `url(http://image.tmdb.org/t/p/w500${movie.backdrop_path})`);
            newDiv.append(movieContent);
            $(".moviesSlider").append(newDiv);

            let slideCount = 1;
            $("#rightSlide").click(function autoSlideRight() {
                $(`#topMovies_${++slideCount}`)[0].scrollIntoView({behavior: 'smooth'});
                if (slideCount == 11) {
                    slideCount = 1
                }
            })
            
            $("#leftSlide").click(() => {
                if (slideCount == 1) {
                    slideCount = 11
                }
                --slideCount
                $(`#topMovies_${slideCount}`)[0].scrollIntoView({behavior: 'smooth'});
            })

            // setInterval(() => {
            //     if (slideCount == 10) {
            //         slideCount = 1
            //     }
            //     $(`#topMovies_${++slideCount}`)[0].scrollIntoView({behavior: 'smooth'});
            // }, 5000);
            

        });

        //! main
        const thisPageMOvies = data.results;
        console.log(thisPageMOvies);
        thisPageMOvies.map((selectedMovie, movieIndex) => {
            const movieCard = $("<div>")
            movieCard.addClass("movieCard")
            const newMovie = $("<img>");
            newMovie.addClass("movieImg")
            movieCard.attr("id", `movie_${movieIndex+1}`)
            console.log(newMovie);
            newMovie.attr("src", `http://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`)
            $(movieCard).append(newMovie)
            $(movieCard).append(`<h1>${selectedMovie.original_title}</h1>`)
            $("main").append(movieCard)
        })
        console.log(tenTopMovies);
    })
    .catch(err => console.error(err));
}

function fetchMovieGenres() {
    return fetch('https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=df5fe72df0888382e4148e21f58c70b8')
        .then(response => response.json())
        .then(data => data.genres)
        .catch(err => {
            console.error(err);
            return []; 
        });
}

fetchMovies();

const pageBtnArr = document.querySelectorAll(".pageBtn")
pageBtnArr.forEach((page) => {
    page.addEventListener("click", () => {
        console.log("click");
        nextPage(page.innerHTML)
    })
})

function nextPage(page =1) {
    fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}&api_key=df5fe72df0888382e4148e21f58c70b8`)
    .then(response => response.json())
    .then(data => {
        $("main").html("")
        const thisPageMOvies = data.results;
        console.log(thisPageMOvies);
        thisPageMOvies.map((selectedMovie, movieIndex) => {
            const movieCard = $("<div>")
            movieCard.addClass("movieCard")
            const newMovie = $("<img>");
            newMovie.addClass("movieImg")
            movieCard.attr("id", `movie_${movieIndex+1}`)
            console.log(newMovie);
            newMovie.attr("src", `http://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`)
            $(movieCard).append(newMovie)
            $(movieCard).append(`<h1>${selectedMovie.original_title}</h1>`)
            $("main").append(movieCard)
        })
        console.log(tenTopMovies);
    })
    .catch(err => console.error(err));
}
