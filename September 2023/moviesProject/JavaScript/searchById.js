const currentPage = 2;
let movieId = 35
const settings = {
    async: true,
    crossDomain: true,
    url: `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjVmZTcyZGYwODg4MzgyZTQxNDhlMjFmNThjNzBiOCIsInN1YiI6IjY1MTVjNWQ0ZDQ2NTM3MDBjNjdiMmMxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2huECgDm-vl-quAM-E50mrdEymLQO4yHgmgrdfRa3vI'
    }
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);

    // Set Background
    const backgroundImg = $("<img>")
    backgroundImg.attr( {"src":`http://image.tmdb.org/t/p/original${response.backdrop_path}`, "id":"backgroundImg"} )
    $("body").append(backgroundImg);

    // main Movie Details
    const mainMovieInfo = $("<article>");
    const releaseDate = new Date(response.release_date);
    console.log(releaseDate.getFullYear());
    console.log(mainMovieInfo);
    mainMovieInfo.addClass("mainMovie")
    mainMovieInfo.append(
        `
            <div>
                <h1>${response.title}</h1>
                <span>${(releaseDate.getFullYear())}</span>
                <p>${response.overview}</p>
            </div>
            <img id="moviePoster" src=http://image.tmdb.org/t/p/original${response.poster_path}></img>
        `
    )
    $("main").append(mainMovieInfo)

    //? add IMDB link
    //? Serch Rotten Tomatoes link
    //? add directors
    //? Serach Youtube Trailers
    //? Add Similar 
    //? find Movie Duration
    //? Add "Add To Favorite" Btn

    // Actors
    const actorPromise = fetchMovieCredits(movieId);
    const actors = $("<div>")
    actors.addClass("actorsCont");
    actorPromise.then(data => {
        console.log(data);
        for (const int of data) {
            const actorCard = $("<div>")
            actorCard.addClass("actorCard")
            const actorPic = $("<img>");
            actorPic.addClass("actorPic")
            let actorPicAdress = `http://image.tmdb.org/t/p/original${int.profile_path}`
            if (actorPicAdress == "http://image.tmdb.org/t/p/originalnull") {
                actorPicAdress = "https://i0.wp.com/digitalhealthskills.com/wp-content/uploads/2022/11/fd35c-no-user-image-icon-27.png?fit=500%2C500&ssl=1";
            }
            actorPic.attr("src", actorPicAdress)
            actorCard.append(
                actorPic, `
                <h1>${int.name}</h1> 
                <span>${int.character}</span>
            `)
            actors.append(actorCard)
        }
    })
    $("main").append(actors)
  });

  function fetchMovieCredits(movieId) {
    const creditsUrl = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;

    return new Promise((resolve, reject) => {
        const settings = {
            async: true,
            crossDomain: true,
            url: creditsUrl,
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjVmZTcyZGYwODg4MzgyZTQxNDhlMjFmNThjNzBiOCIsInN1YiI6IjY1MTVjNWQ0ZDQ2NTM3MDBjNjdiMmMxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2huECgDm-vl-quAM-E50mrdEymLQO4yHgmgrdfRa3vI'
              }
        };

        $.ajax(settings)
            .done(response => {
                resolve(response.cast);
            })
            .fail(error => {
                reject(error);
            });
    });
}


