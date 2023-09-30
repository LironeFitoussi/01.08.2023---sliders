const currentPage = 2;
const movieId = 38
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
    const actorPromise = fetchMovieCredits(movieId);
    const actors = $("<div>")
    actors.addClass("actorsCont");
    actorPromise.then(data => {
        console.log(data[0]);
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


