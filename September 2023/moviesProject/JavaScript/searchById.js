const currentPage = 2;
const movieId = 35
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

    // Actors
    const actorPromise = fetchMovieCredits(35);
    const actors = $("<div>")
    actors.addClass("actorsCont");
    actorPromise.then(data => {
        console.log(data[0]);
        for (const int of data) {
            const actorPic = $("<img>");
            actorPic.addClass("actorPic")
            actorPic.attr("src", `http://image.tmdb.org/t/p/original${int.profile_path}`)
            actors.append(actorPic)
            console.log(int.profile_path);
        }
        console.log(typeof data);
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


