
export default function loadFav(favArr) {
        $("main").html("")
        const thisPageMovies = favArr;
        thisPageMovies.map((selectedMovie, movieIndex) => {
            const movieCard = $("<div>")
            movieCard.addClass("movieCard")
            const newMovie = $("<img>");
            newMovie.addClass("movieImg")
            const movieDate = new Date(selectedMovie.release_date);
            movieCard.attr("id", `movie_${movieIndex+1}`)
            newMovie.attr("src", `http://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`)

            //! hiddenSlide
            const slideInfo = $("<div>")
            slideInfo.addClass("slideInfo")
            const movieTitle = selectedMovie.title
            
            slideInfo.html(`
                <h1>${movieTitle}</h1>
                <span>${movieDate.getFullYear()}</span>
                <p>${selectedMovie.overview}</p>
            `)

            //! iOS Device Check
            let iosClicekd = false
            if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
                $(slideInfo).click(() => {
                if (!iosClicekd) {
                    $(slideInfo).css({"opacity":"1"});
                    iosClicekd = true;
                } else {
                    $(slideInfo).css({"opacity":"0"});
                    iosClicekd = false;
                }
                })
            }

            //! Favorite Classing
            const mainStar = $("<div>")
            mainStar.addClass(`fa-star fa-regular fa-solid`)
            mainStar.css("color", "#fbd723")
            slideInfo.append(mainStar);

            //! Long Title Fix
            if (movieTitle.length > 15) {
                if (window.innerWidth <= 425 ) {
                  console.log(window.innerWidth);
                  slideInfo.find("h1").css("font-size", "5vw");
                } else {
                  slideInfo.find("h1").css("font-size", "2vw");
                }
            }

            
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