
export default function loadFav(favArr) {
    console.log("loadFav Loaded");
        $("main").html("")
        const thisPageMovies = favArr;
        thisPageMovies.map((selectedMovie, movieIndex) => {
            const movieCard = $("<div>")
            movieCard.addClass("movieCard")
            const newMovie = $("<img>");
            newMovie.addClass("movieImg")
            const movieDate = new Date(selectedMovie.release_date);

            // hiddenSlide
            const slideInfo = $("<div>")
            const movieTitle = selectedMovie.title
            
            slideInfo.html(`
                <h1>${movieTitle}</h1>
                <span>${movieDate.getFullYear()}</span>
                <p>${selectedMovie.overview}</p>
            `)

            let iosClicekd = false
            slideInfo.addClass("slideInfo");
            if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
                console.log("This is an iOS device.");
                $(slideInfo).click(() => {
                if (!iosClicekd) {
                    $(slideInfo).css( {"opacity":"1"} )
                    iosClicekd = true;
                } else {
                    $(slideInfo).css({"opacity":"0"})
                    iosClicekd = false
                }
                })
            } else {
                console.log("This is not an iOS device!");
            }

            // Favorite
            const mainStar = $("<div>")
            mainStar.addClass(`fa-star fa-regular`)
            mainStar.css("color", "#fbd723")
            slideInfo.append(mainStar)

            // check if already Fav
            favArr.map(movie => {
                if (movie.id == selectedMovie.id) {
                    mainStar.addClass(`fa-solid`)
                }
            })

            if (movieTitle.length > 15) {
                if (window.innerWidth <= 425 ) {
                  console.log(window.innerWidth);
                  slideInfo.find("h1").css("font-size", "5vw");
                } else {
                  slideInfo.find("h1").css("font-size", "2vw");
                }
              }

            slideInfo.addClass("slideInfo")

            movieCard.attr("id", `movie_${movieIndex+1}`)
            newMovie.attr("src", `http://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`)
            $(movieCard).append( slideInfo, newMovie)

            $("main").append(movieCard)
        })

        let starsArr = document.querySelectorAll(".fa-star");
        starsArr.forEach((star, index) => {
            star.addEventListener("click", () => {
                let keyToRemove = "id";
                let valueToRemove = favArr[index].id;      
                star.classList.remove("fa-solid");
                favArr = favArr.filter(item => item[keyToRemove] !== valueToRemove)
                console.log(favArr);
                // syncToLocalStorage
                let localFavorites = JSON.stringify(favArr)
                localStorage.setItem("userFavMovies", localFavorites)
                location.reload();
            });
        });
}