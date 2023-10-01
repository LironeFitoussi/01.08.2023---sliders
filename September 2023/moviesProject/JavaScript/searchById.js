const currentPage = 2;
let movieId = 0;
const favoriteMovies = []

$("#searchByID").submit(function (e) {
  e.preventDefault();
  movieId = $("#serachMovieInput").val();
  console.log(movieId);
  $("main").html("");
  $("#backgroundImg").remove()
  loadContent(movieId);
});

function loadContent(movieId) {
  const settings = {
    async: true,
    crossDomain: true,
    url: `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjVmZTcyZGYwODg4MzgyZTQxNDhlMjFmNThjNzBiOCIsInN1YiI6IjY1MTVjNWQ0ZDQ2NTM3MDBjNjdiMmMxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2huECgDm-vl-quAM-E50mrdEymLQO4yHgmgrdfRa3vI",
    },
  };

  $.ajax(settings)
    .done(function (response) {
      console.log(response);

      // Set Background
      const backgroundImg = $("<img>");
      backgroundImg.attr({
        src: `http://image.tmdb.org/t/p/original${response.backdrop_path}`,
        id: "backgroundImg",
      });
      $(backgroundImg).insertBefore("main");

      // main Movie Details
      const mainMovieInfo = $("<article>");
      const releaseDate = new Date(response.release_date);
      const runTime = new Date(response.runtime * 60 * 60);
      const trailerIdPromise = fetchVideoTrailer(movieId);
      trailerIdPromise.then((data) => {
        console.log();
        const videoKey = data.results[0].key;
        $("iframe").attr(
          "src",
          `https://www.youtube-nocookie.com/embed/${videoKey}?si=4ZJBUdvHa240g8LV`
        );
        trailerKey = data.results[0].key;
      });
      console.log(releaseDate.getFullYear());
      console.log(mainMovieInfo);
      mainMovieInfo.addClass("mainMovie");
      mainMovieInfo.append(
        `
                <div >
                    <h1>${response.title}</h1>
                    <span>${releaseDate.getFullYear()} | Duration: ${
          parseInt(runTime.getTime() / 60 / 60 / 60) +
          "h" +
          ((runTime.getTime() / 60 / 60) % 60)
        } </span> <hr>
                    <span id="movieDirector"></span>
                    <p>${response.overview}</p>
                    <a href="https://www.imdb.com/title/${response.imdb_id}">
                        <img id="imdbLogo" src="../Assets/IMDB_Logo_2016.svg.png">
                    </a>
                    <br>
                    <iframe width="560" height="315" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <img id="moviePoster" src=http://image.tmdb.org/t/p/original${
                  response.poster_path
                }></img>
            `
      );
      $("main").append(mainMovieInfo);

      //* add IMDB link
      //!! Serch Rotten Tomatoes link
      //* add directors
      //* Serach Youtube Trailers
      //? Add Similar
      //* find Movie Duration
      //? Add "Add To Favorite" Btn

      // Actors
      const actorPromise = fetchMovieCredits(movieId);
      const actors = $("<div>");
      actors.addClass("actorsCont");
      actorPromise.then((data) => {
        console.log(data);

        // Director
        const crewArr = data.crew;
        const movieDirector = crewArr.find((crew) => crew.job == "Director");
        console.log(movieDirector.name);
        $("#movieDirector").text("Directed By: " + movieDirector.name);
        for (const int of data.cast) {
          const actorCard = $("<div>");
          actorCard.addClass("actorCard");
          const actorPic = $("<img>");
          actorPic.addClass("actorPic");
          let actorPicAdress = `http://image.tmdb.org/t/p/original${int.profile_path}`;
          if (actorPicAdress == "http://image.tmdb.org/t/p/originalnull") {
            actorPicAdress =
              "https://i0.wp.com/digitalhealthskills.com/wp-content/uploads/2022/11/fd35c-no-user-image-icon-27.png?fit=500%2C500&ssl=1";
          }
          actorPic.attr("src", actorPicAdress);
          actorCard.append(
            actorPic,
            `
                    <h1>${int.name}</h1> 
                    <span>${int.character}</span>
                `
          );
          actors.append(actorCard);
        }
      });
      $("main").append(actors);
    })
    .fail((xhr, status, error) => {
        if (xhr.status === 404) {
            const errorMessage = "Movie not found. Please enter a valid movie ID.";
            $("main").html(`<h1 class="error-message">${errorMessage}</h1>`);
            console.error("Movie not found (404 error).");
        } else {
            const errorMessage = "An error occurred while fetching movie data. Please try again later.";
            $("main").html(`<p class="error-message">${errorMessage}</p>`);
            console.error("Error fetching movie data:", error);
        }
    });
}

function fetchMovieCredits(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;
  return new Promise((resolve, reject) => {
    const settings = {
      async: true,
      crossDomain: true,
      url: url,
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjVmZTcyZGYwODg4MzgyZTQxNDhlMjFmNThjNzBiOCIsInN1YiI6IjY1MTVjNWQ0ZDQ2NTM3MDBjNjdiMmMxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2huECgDm-vl-quAM-E50mrdEymLQO4yHgmgrdfRa3vI",
      },
    };

    $.ajax(settings)
      .done((response) => {
        resolve(response);
      })
      .fail((error) => {
        reject(error);
      });
  });
}

function fetchVideoTrailer(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
  return new Promise((resolve, reject) => {
    const settings = {
      async: true,
      crossDomain: true,
      url: url,
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjVmZTcyZGYwODg4MzgyZTQxNDhlMjFmNThjNzBiOCIsInN1YiI6IjY1MTVjNWQ0ZDQ2NTM3MDBjNjdiMmMxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2huECgDm-vl-quAM-E50mrdEymLQO4yHgmgrdfRa3vI",
      },
    };

    $.ajax(settings)
      .done((response) => {
        resolve(response);
      })
      .fail((error) => {
        reject(error);
      });
  });
}

if (movieId != 0) {
  fetchVideoTrailer(movieId);
  loadContent(movieId);
}
